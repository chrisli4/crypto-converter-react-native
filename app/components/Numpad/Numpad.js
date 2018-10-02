import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import Key from './Key';
import styles from './styles';

const Numpad = ({
  handleKeyPress, handleCancelPress, handleDecimalPress, keyColor, backgroundColor,
}) => (
  <View style={styles.container}>
    <View style={styles.row}>
      <Key keyValue="1" onPress={handleKeyPress} keyColor={keyColor} backgroundColor={backgroundColor} />
      <Key keyValue="2" onPress={handleKeyPress} keyColor={keyColor} backgroundColor={backgroundColor} />
      <Key keyValue="3" onPress={handleKeyPress} keyColor={keyColor} backgroundColor={backgroundColor} />
    </View>
    <View style={styles.row}>
      <Key keyValue="4" onPress={handleKeyPress} keyColor={keyColor} backgroundColor={backgroundColor} />
      <Key keyValue="5" onPress={handleKeyPress} keyColor={keyColor} backgroundColor={backgroundColor} />
      <Key keyValue="6" onPress={handleKeyPress} keyColor={keyColor} backgroundColor={backgroundColor} />
    </View>
    <View style={styles.row}>
      <Key keyValue="7" onPress={handleKeyPress} keyColor={keyColor} backgroundColor={backgroundColor} />
      <Key keyValue="8" onPress={handleKeyPress} keyColor={keyColor} backgroundColor={backgroundColor} />
      <Key keyValue="9" onPress={handleKeyPress} keyColor={keyColor} backgroundColor={backgroundColor} />
    </View>
    <View style={styles.row}>
      <Key keyValue="0" onPress={handleKeyPress} keyColor={keyColor} backgroundColor={backgroundColor} />
      <Key keyValue="." onPress={handleDecimalPress} keyColor={keyColor} backgroundColor={backgroundColor} />
      <Key keyValue="C" onPress={handleCancelPress} keyColor={keyColor} backgroundColor={backgroundColor} />
    </View>
  </View>
);

Numpad.propTypes = {
  backgroundColor: PropTypes.string,
  handleCancelPress: PropTypes.func,
  handleDecimalPress: PropTypes.func,
  handleKeyPress: PropTypes.func,
  keyColor: PropTypes.string,
};

export default Numpad;
