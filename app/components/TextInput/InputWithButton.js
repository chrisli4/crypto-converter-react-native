import React from 'react';
import PropTypes from 'prop-types';
import color from 'color';
import {
  View, TouchableHighlight, Text,
} from 'react-native';
import { CurrencyButton } from '../Button';

import styles from './styles';

const InputWithButton = ({
  onPress, buttonText, headerText, amount, fullName, backgroundColor, textColor, symbolColor,
}) => {
  const underlayColor = color(backgroundColor).darken(
    styles.$buttonBackgroundColorModifier,
  );

  const containerStyles = [styles.container];
  const inputStyles = [styles.input];

  if (backgroundColor) {
    containerStyles.push({ backgroundColor });
  }

  if (textColor) {
    inputStyles.push({ color: textColor });
  }

  return (
    <View style={containerStyles}>
      <TouchableHighlight
        style={styles.buttonContainer}
        underlayColor={underlayColor}
        onPress={onPress}
      >
        <CurrencyButton
          buttonText={buttonText}
          headerText={headerText}
          fullName={fullName}
          symbolColor={symbolColor}
          textColor={textColor}
        />
      </TouchableHighlight>
      <Text
        numberOfLines={1}
        ellipsizeMode="tail"
        style={inputStyles}
      >
        { amount }
      </Text>
    </View>
  );
};

InputWithButton.propTypes = {
  amount: PropTypes.string,
  backgroundColor: PropTypes.string,
  buttonText: PropTypes.string,
  fullName: PropTypes.string,
  headerText: PropTypes.string,
  onPress: PropTypes.func,
  symbolColor: PropTypes.string,
  textColor: PropTypes.string,
};

export default InputWithButton;
