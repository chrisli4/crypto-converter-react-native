import EStyleSheet from 'react-native-extended-stylesheet';
import colors from '../../config/colors';

export default EStyleSheet.create({
  header: {
    textTransform: 'uppercase',
    letterSpacing: 1.05,
    fontSize: 12,
  },
  text: {
    fontSize: 12,
    color: colors.$white,
    letterSpacing: 1,
  },
  symbol: {
    fontSize: 20,
    paddingVertical: 10,
    fontWeight: '500',
    color: colors.$green,
  },
});
