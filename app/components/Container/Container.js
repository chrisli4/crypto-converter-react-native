import React from 'react';
import PropTypes from 'prop-types';
import { SafeAreaView } from 'react-native';
import styles from './styles';

const Container = ({ children, backgroundColor }) => {
  const containerStyles = [styles.container];

  if (backgroundColor) {
    containerStyles.push({ backgroundColor });
  }

  return (
    <SafeAreaView style={containerStyles}>
      {children}
    </SafeAreaView>
  );
};

Container.propTypes = {
  backgroundColor: PropTypes.string,
  children: PropTypes.any,
};

export default Container;
