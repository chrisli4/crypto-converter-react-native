import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableHighlight } from 'react-native';
import styles from './styles';

import Icon from './Icon';

const ListItem = ({
  text,
  onPress,
  selected = false,
  checkmark = true,
  visible = true,
  customIcon = null,
  iconBackground = null,
}) => (
  <TouchableHighlight underlayColor={styles.$underlayColor} onPress={() => onPress(text)}>
    <View style={styles.row}>
      <Text style={styles.text}>{text}</Text>
      {selected
        ? <Icon checkmark={checkmark} visible={visible} iconBackground={iconBackground} />
        : <Icon />}
      {customIcon}
    </View>
  </TouchableHighlight>
);

ListItem.propTypes = {
  checkmark: PropTypes.bool,
  customIcon: PropTypes.element,
  iconBackground: PropTypes.string,
  onPress: PropTypes.func,
  selected: PropTypes.bool,
  text: PropTypes.string,
  visible: PropTypes.bool,
};

export default ListItem;
