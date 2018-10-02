import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import styles from './styles';

const LastConverted = ({
  rate, baseCurrency, quoteCurrency, date, backgroundColor, titleColor, textColor,
}) => {
  const containerStyles = [styles.container];
  const inContainerStyles = [styles.innerContainer];
  const titleStyles = [styles.title];
  const textStyles = [styles.text];

  if (backgroundColor) {
    inContainerStyles.push({ backgroundColor });
  }

  if (titleColor) {
    titleStyles.push({ color: titleColor });
  }

  if (textColor) {
    textStyles.push({ color: textColor });
  }

  return (
    <View style={containerStyles}>
      <View style={inContainerStyles}>
        <Text style={titleStyles}>Conversion Time</Text>
        <Text style={textStyles}>{ date }</Text>
      </View>
      <View style={styles.separator} />
      <View style={inContainerStyles}>
        <Text style={titleStyles}>Rate</Text>
        <Text style={textStyles}>
          <Text>
            { rate }
            {' '}
            { quoteCurrency }
            /
            { baseCurrency }
          </Text>
        </Text>
      </View>
    </View>
  );
};

LastConverted.propTypes = {
  backgroundColor: PropTypes.string,
  baseCurrency: PropTypes.string,
  date: PropTypes.string,
  quoteCurrency: PropTypes.string,
  rate: PropTypes.string,
  textColor: PropTypes.string,
  titleColor: PropTypes.string,
};

export default LastConverted;
