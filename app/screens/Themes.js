import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  ScrollView, StatusBar,
} from 'react-native';
import colors from '../config/colors';

import { ListItem, Separator } from '../components/List';
import { setDarkTheme, setLightTheme } from '../actions/themes';


class Themes extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    navigation: PropTypes.object,
  }

  handleDarkThemePress = () => {
    const { navigation, dispatch } = this.props;
    dispatch(setDarkTheme());
    navigation.goBack();
  }

  handleLightThemePress = () => {
    const { navigation, dispatch } = this.props;
    dispatch(setLightTheme());
    navigation.goBack();
  }

  render() {
    return (
      <ScrollView>
        <StatusBar translucent={false} barStyle="default" />
        <ListItem
          text="Night"
          onPress={() => this.handleDarkThemePress()}
          checkmark={false}
          selected
          iconBackground={colors.$darkBlue}
        />
        <Separator />
        <ListItem
          text="Frost"
          onPress={() => this.handleLightThemePress()}
          checkmark={false}
          selected
          iconBackground="#E7EDF1"
        />
        <Separator />
      </ScrollView>
    );
  }
}

export default connect()(Themes);
