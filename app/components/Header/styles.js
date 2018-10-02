import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    flex: 2,
    flexDirection: 'row',
    width: '100%',
  },
  optionButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginLeft: 'auto',
    alignSelf: 'flex-end',
  },
  warningButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginRight: 'auto',
    alignSelf: 'flex-end',
  },
  icon: {
    width: 18,
  },
});
