import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableHighlight } from 'react-native';
import color from 'color';
import styles from './styles';

const Key = ({
  keyValue, onPress, backgroundColor, keyColor,
}) => {
  const underlayColor = color(backgroundColor).darken(
    styles.$buttonBackgroundColorModifier,
  );

  const keyStyle = [styles.keyText];

  if (keyColor) {
    keyStyle.push({ color: keyColor });
  }

  return (
    <View style={styles.keyContainer}>
      <TouchableHighlight
        style={styles.touchable}
        underlayColor={underlayColor}
        onPress={() => onPress(keyValue)}
      >
        <Text style={keyStyle}>{keyValue}</Text>
      </TouchableHighlight>
    </View>
  );
};

Key.propTypes = {
  backgroundColor: PropTypes.string,
  keyColor: PropTypes.string,
  keyValue: PropTypes.string,
  onPress: PropTypes.func,
};

export default Key;
