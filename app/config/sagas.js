
import {
  takeEvery, call, put, select,
} from 'redux-saga/effects';
import { delay } from 'redux-saga';
import moment from 'moment';

import {
  CHANGE_BASE_CURRENCY,
  CHANGE_QUOTE_CURRENCY,
  GET_INITIAL_CONVERSION,
  CONVERSION_ERROR,
  CONVERSION_RESULT,
} from '../actions/currencies';

function extractInfo(obj) {
  return {
    isFetching: false,
    date: moment().format('MM-DD-YYYY, h:mm a'),
    name: obj.CoinInfo.FullName,
    rate: obj.ConversionInfo.RAW[0].split('~')[5],
  };
}

const requestTimeout = (time, promise) => new Promise((resolve, reject) => {
  setTimeout(
    () => reject(new Error('Request timed out.')),
    time,
  );
  promise.then(resolve, reject);
});

const getLatestRate = (baseCurrency, quoteCurrency) => requestTimeout(4000, fetch(`https://min-api.cryptocompare.com/data/coin/generalinfo?fsyms=${baseCurrency},${quoteCurrency}&tsym=BTC`));

function* fetchLatestConversionRates(action) {
  const { connected, hasCheckedStatus } = yield select(state => state.network);
  if (!connected && hasCheckedStatus) {
    yield put({
      type: CONVERSION_ERROR,
      error: 'Not connected to the internet. Conversion rate may be outdated or unavailable',
    });
    return;
  }
  try {
    const baseCurrency = yield action.baseCurrency;
    const quoteCurrency = yield action.quoteCurrency;

    const response = yield call(getLatestRate, baseCurrency, quoteCurrency);
    const result = yield response.json();

    if (result.error) {
      yield put({ type: CONVERSION_ERROR, error: result.error });
    } else {
      const [a, b] = result.Data;

      let baseData = a;
      let quoteData = b;
      if (result.Data.length === 1) {
        baseData = a;
        quoteData = a;
      }

      yield put({
        type: CONVERSION_RESULT,
        result: {
          [baseCurrency]: extractInfo(baseData),
          [quoteCurrency]: extractInfo(quoteData),
        },
      });
    }
  } catch (e) {
    yield put({ type: CONVERSION_ERROR, error: e.message });
  }
}

const clearConversionError = function* () {
  const DELAY_SECONDS = 4;
  const error = yield select(state => state.currencies.error);
  if (error) {
    yield delay(DELAY_SECONDS * 1000);
    yield put({ type: CONVERSION_ERROR, error: null });
  }
};

export default function* rootSaga() {
  yield takeEvery(GET_INITIAL_CONVERSION, fetchLatestConversionRates);
  yield takeEvery(CHANGE_BASE_CURRENCY, fetchLatestConversionRates);
  yield takeEvery(CHANGE_QUOTE_CURRENCY, fetchLatestConversionRates);
  yield takeEvery(CONVERSION_ERROR, clearConversionError);
}
