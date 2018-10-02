import { SET_DARK_THEME, SET_LIGHT_THEME } from '../actions/themes';
import colors from '../config/colors';

const initialState = {
  color: 'DARK',
  primaryColor: colors.$navy,
  secondaryColor: colors.$darkNavy,
  primaryText: colors.$white,
  secondaryText: colors.$green,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_DARK_THEME:
      return {
        ...state,
        color: 'DARK',
        primaryColor: colors.$navy,
        secondaryColor: colors.$darkNavy,
        primaryText: colors.$white,
        secondaryText: colors.$green,
      };
    case SET_LIGHT_THEME:
      return {
        ...state,
        color: 'LIGHT',
        primaryColor: colors.$white,
        secondaryColor: colors.$gray,
        primaryText: colors.$blue,
        secondaryText: colors.$darkBlue,
      };
    default:
      return state;
  }
};
