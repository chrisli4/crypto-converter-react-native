import {
  ADD_CURRENCY_DIGIT,
  ADD_CURRENCY_DECIMAL,
  CLEAR_CURRENCY_AMOUNT,
  CHANGE_BASE_CURRENCY,
  CHANGE_QUOTE_CURRENCY,
  CONVERSION_RESULT,
  CONVERSION_ERROR,
  GET_INITIAL_CONVERSION,
} from '../actions/currencies';

const initialState = {
  baseCurrency: 'BTC',
  quoteCurrency: 'ETH',
  amount: '0',
  conversions: {},
  error: null,
};

const addDecimal = amount => {
  if(amount.charAt(0) === '0' && amount.length === 1 && amount.indexOf('.') === -1) {
    return amount + '.';
  }
  if(amount.indexOf('.') === -1) {
    return amount + '.';
  }
  return amount;
}

const addDigit = (amount, digit) => {
  if(amount.charAt(0) === '0' && amount.length === 1) {
    return digit;
  }
  return amount + digit;
}

const setConversions = (state, action) => {
  let baseConversion = {
    isFetching: true,
    date: '',
    name: '',
    rate: '',
  };

  let quoteConversion = {
    isFetching: true,
    date: '',
    name: '',
    rate: '',
  };

  if (state.conversions[action.baseCurrency]) {
    baseConversion = state.conversions[action.baseCurrency];
  }

  if (state.conversions[action.quoteCurrency]) {
    quoteConversion = state.conversions[action.quoteCurrency];
  }

  return {
    ...state.conversions,
    [action.baseCurrency]: baseConversion,
    [action.quoteCurrency]: quoteConversion,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CURRENCY_DIGIT:
      return {
        ...state,
        amount: addDigit(state.amount, action.digit)
      };
    case CLEAR_CURRENCY_AMOUNT:
      return {
        ...state,
        amount: '0',
      };
    case ADD_CURRENCY_DECIMAL:
      return {
        ...state,
        amount: addDecimal(state.amount),
      };
    case CHANGE_BASE_CURRENCY:
      return {
        ...state,
        baseCurrency: action.baseCurrency,
        conversions: setConversions(state, action),
      };
    case CHANGE_QUOTE_CURRENCY:
      return {
        ...state,
        quoteCurrency: action.quoteCurrency,
        conversions: setConversions(state, action),
      };
    case GET_INITIAL_CONVERSION:
      return {
        ...state,
        conversions: setConversions(state, action),
      };
    case CONVERSION_RESULT:
      return {
        ...state,
        conversions: {
          ...state.conversions,
          ...action.result,
        },
      };
    case CONVERSION_ERROR:
      return {
        ...state,
        error: action.error,
      };

    default:
      return state;
  }
};

export default reducer;
