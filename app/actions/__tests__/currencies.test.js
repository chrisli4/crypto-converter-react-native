import { getInitialConversion } from '../currencies';

describe('getInitialConversion', () => {
  it('creates a properly formatted action', () => {
    const expected = {
      type: 'GET_INITIAL_CONVERSION',
      baseCurrency: 'BTC',
      quoteCurrency: 'ETH',
    };
    const actual = getInitialConversion('BTC', 'ETH');
    expect(actual).toEqual(expected);
  });
});
