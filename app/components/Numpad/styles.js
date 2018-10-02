import EstyleSheet from 'react-native-extended-stylesheet';
import colors from '../../config/colors';

export default EstyleSheet.create({
  $buttonBackgroundColorBase: colors.$blue,
  $buttonBackgroundColorModifier: 0.1,
  container: {
    flex: 10,
    width: '100%',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  touchable: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  keyContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  keyText: {
    color: colors.$white,
    fontSize: 30,
    fontWeight: '400',
  },
});
