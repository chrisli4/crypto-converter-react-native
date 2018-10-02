import React from 'react';
import PropTypes from 'prop-types';
import { View, Image } from 'react-native';

import styles from './styles';

const NavIcon = ({ url }) => (
  <View style={styles.icon}>
    <Image resizeMode="contain" style={styles.navIcon} source={url} />
  </View>
);

NavIcon.propTypes = {
  url: PropTypes.number,
};

export default NavIcon;
