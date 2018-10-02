import EstyleSheet from 'react-native-extended-stylesheet';
import colors from '../../config/colors';

export default EstyleSheet.create({
  $buttonBackgroundColorModifier: 0.1,
  container: {
    flex: 4,
    backgroundColor: colors.$primaryBlue,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 20,
  },
  separator: {
    height: 5,
    width: '100%',
  },
  buttonContainer: {
    flex: 2,
    height: '100%',
    paddingLeft: 20,
    justifyContent: 'center',
  },
  input: {
    flex: 3,
    fontSize: 25,
    color: colors.$white,
    textAlign: 'right',
  },
});
