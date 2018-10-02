import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ScrollView, StatusBar, Linking,
} from 'react-native';
import DropdownAlert from 'react-native-dropdownalert';
import { ListItem, Separator, NavIcon } from '../components/List';

const arrowIcon = require('../components/List/images/arrow-forward/arrow-forward.png');
const linkIcon = require('../components/List/images/link/link.png');

class Options extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  }

  handleThemesPress = () => {
    const { navigation } = this.props;
    navigation.navigate('Themes');
  }

  handleSitePress = () => {
    Linking.openURL('https://min-api.cryptocompare.com/').catch(() => this.dropdown.alertWithType('error', 'Sorry!', "CryptoCompare.com can't be opened right now."));
  }

  render() {
    return (
      <ScrollView>
        <StatusBar translucent={false} barStyle="default" />
        <ListItem
          text="Themes"
          onPress={this.handleThemesPress}
          customIcon={<NavIcon url={arrowIcon} />}
        />
        <Separator />
        <ListItem
          text="CryptoCompare API"
          onPress={this.handleSitePress}
          customIcon={<NavIcon url={linkIcon} />}
        />
        <Separator />
        <DropdownAlert
          ref={(ref) => { this.dropdown = ref; }}
          updateStatusBar={false}
        />
      </ScrollView>
    );
  }
}

export default Options;
