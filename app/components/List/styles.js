import EStyleSheet from 'react-native-extended-stylesheet';
import { StyleSheet } from 'react-native';
import colors from '../../config/colors';

export default EStyleSheet.create({
  $underlayColor: colors.$border,
  row: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.$white,
  },
  text: {
    fontSize: 16,
    color: colors.$darkText,
  },
  separator: {
    marginLeft: 20,
    backgroundColor: colors.$border,
    flex: 1,
    height: StyleSheet.hairlineWidth,
  },
  icon: {
    backgroundColor: 'transparent',
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconVisible: {
    backgroundColor: colors.$navy,
  },
  checkIcon: {
    width: 18,
  },
  navIcon: {
    width: 18,
  },
});
