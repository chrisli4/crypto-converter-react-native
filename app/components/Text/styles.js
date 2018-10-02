import EstyleSheet from 'react-native-extended-stylesheet';
import colors from '../../config/colors';

export default EstyleSheet.create({
  container: {
    flex: 2,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.$primaryBlue,
  },
  separator: {
    height: '100%',
    width: 5,
  },
  title: {
    fontSize: 12,
    paddingBottom: 5,
    textTransform: 'uppercase',
    fontWeight: '600',
    color: colors.$green,
  },
  text: {
    color: colors.$white,
    fontSize: 12,
  },
});
