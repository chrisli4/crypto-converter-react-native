import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  FlatList, View, StatusBar,
} from 'react-native';
import colors from '../config/colors';

import { ListItem, Separator } from '../components/List';
import currencies from '../data/currencies';
import { changeBaseCurrency, changeQuoteCurrency } from '../actions/currencies';


class CurrencyList extends Component {
  static propTypes = {
    baseCurrency: PropTypes.string,
    dispatch: PropTypes.func,
    navigation: PropTypes.object,
    quoteCurrency: PropTypes.string,
  }

  handlePress = (currency) => {
    const {
      navigation, dispatch, quoteCurrency, baseCurrency,
    } = this.props;
    const { type } = navigation.state.params;
    if (type === 'base') {
      dispatch(changeBaseCurrency(currency, quoteCurrency));
    } else if (type === 'quote') {
      dispatch(changeQuoteCurrency(baseCurrency, currency));
    }
    navigation.goBack(null);
  };

  render() {
    const {
      baseCurrency, quoteCurrency, navigation,
    } = this.props;
    let comparisonCurrency = baseCurrency;
    if (navigation.state.params.type === 'quote') {
      comparisonCurrency = quoteCurrency;
    }

    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="default" translucent={false} />
        <FlatList
          data={currencies}
          renderItem={({ item }) => (
            <ListItem
              text={item}
              selected={item === comparisonCurrency}
              onPress={this.handlePress}
              iconBackground={colors.$navy}
            />
          )}
          keyExtractor={item => item}
          ItemSeparatorComponent={Separator}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  baseCurrency: state.currencies.baseCurrency,
  quoteCurrency: state.currencies.quoteCurrency,
});

export default connect(mapStateToProps)(CurrencyList);
