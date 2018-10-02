export const ADD_CURRENCY_DIGIT = 'ADD_CURRENCY_DIGIT';
export const CLEAR_CURRENCY_AMOUNT = 'CLEAR_CURRENCY_AMOUNT';
export const ADD_CURRENCY_DECIMAL = 'ADD_CURRENCY_DECIMAL';
export const CHANGE_BASE_CURRENCY = 'CHANGE_BASE_CURRENCY';
export const CHANGE_QUOTE_CURRENCY = 'CHANGE_QUOTE_CURRENCY';
export const GET_INITIAL_CONVERSION = 'GET_INITIAL_CONVERSION';

export const CONVERSION_RESULT = 'CONVERSION_RESULT';
export const CONVERSION_ERROR = 'CONVERSION_ERROR';

export const addCurrencyDigit = digit => ({
  type: ADD_CURRENCY_DIGIT,
  digit,
});

export const clearCurrencyAmount = () => ({
  type: CLEAR_CURRENCY_AMOUNT,
});

export const addCurrencyDecimal = () => ({
  type: ADD_CURRENCY_DECIMAL,
});

export const changeBaseCurrency = (currency, quoteCurrency) => ({
  type: CHANGE_BASE_CURRENCY,
  baseCurrency: currency,
  quoteCurrency,
});

export const changeQuoteCurrency = (baseCurrency, currency) => ({
  type: CHANGE_QUOTE_CURRENCY,
  baseCurrency,
  quoteCurrency: currency,
});

export const getInitialConversion = (baseCurrency, quoteCurrency) => ({
  type: GET_INITIAL_CONVERSION,
  baseCurrency,
  quoteCurrency,
});
