import React from 'react';
import PropTypes from 'prop-types';
import {
  View, Image, TouchableOpacity,
} from 'react-native';
import styles from './styles';

const cogWhite = require('./images/gear.png');
const cogBlue = require('./images/gearBlue.png');

const warningWhite = require('./images/warning.png');
const warningBlue = require('./images/warningBlue.png');

const Header = ({
  onPress, isConnected, onWarningPress, theme,
}) => {
  let cog = cogWhite;
  let warning = warningWhite;

  if (theme) {
    cog = theme === 'DARK' ? cogWhite : cogBlue;
    warning = theme === 'DARK' ? warningWhite : warningBlue;
  }

  return (
    <View style={styles.container}>
      {!isConnected ? (
        <TouchableOpacity style={styles.warningButton} onPress={onWarningPress}>
          <Image resizeMode="contain" style={styles.icon} source={warning} />
        </TouchableOpacity>
      ) : null}
      <TouchableOpacity style={styles.optionButton} onPress={onPress}>
        <Image resizeMode="contain" style={styles.icon} source={cog} />
      </TouchableOpacity>
    </View>
  );
};

Header.propTypes = {

};

Header.propTypes = {
  isConnected: PropTypes.bool,
  onPress: PropTypes.func,
  onWarningPress: PropTypes.func,
  theme: PropTypes.string,
};


export default Header;
