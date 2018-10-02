import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import styles from './styles';

const CurrencyButton = ({
  buttonText, headerText, fullName, textColor, symbolColor,
}) => {
  const headerStyle = [styles.header];
  const symbolStyle = [styles.symbol];
  const textStyle = [styles.text];

  if (textColor) {
    headerStyle.push({ color: textColor });
    textStyle.push({ color: textColor });
  }

  if (symbolColor) {
    symbolStyle.push({ color: symbolColor });
  }

  return (
    <View>
      <Text style={headerStyle}>{headerText}</Text>
      <Text style={symbolStyle}>{buttonText}</Text>
      <Text style={textStyle}>{fullName}</Text>
    </View>
  );
};

CurrencyButton.propTypes = {
  buttonText: PropTypes.string,
  fullName: PropTypes.string,
  headerText: PropTypes.string,
  symbolColor: PropTypes.string,
  textColor: PropTypes.string,
};

export default CurrencyButton;
