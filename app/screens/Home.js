import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StatusBar } from 'react-native';
import { connect } from 'react-redux';
import DropdownAlert from 'react-native-dropdownalert';
import { Container } from '../components/Container';
import { Header } from '../components/Header';
import { InputWithButton, Separator } from '../components/TextInput';
import { LastConverted } from '../components/Text';
import { Numpad } from '../components/Numpad';

import {
  addCurrencyDigit,
  clearCurrencyAmount,
  addCurrencyDecimal,
  getInitialConversion,
} from '../actions/currencies';


class Home extends Component {
  static propTypes = {
    amount: PropTypes.string,
    baseCurrency: PropTypes.string,
    baseFullName: PropTypes.string,
    baseRate: PropTypes.string,
    currencyError: PropTypes.string,
    date: PropTypes.string,
    dispatch: PropTypes.func,
    isConnected: PropTypes.bool,
    navigation: PropTypes.object,
    quoteCurrency: PropTypes.string,
    quoteFullName: PropTypes.string,
    quoteRate: PropTypes.string,
    theme: PropTypes.object,
  }

  componentWillMount() {
    const { dispatch, baseCurrency, quoteCurrency } = this.props;
    dispatch(getInitialConversion(baseCurrency, quoteCurrency));
  }

  componentWillReceiveProps(nextProps) {
    const { currencyError } = this.props;
    if (nextProps.currencyError && !currencyError) {
      this.dropdown.alertWithType('error', 'Error', nextProps.currencyError);
    }
  }

  handlePressBaseCurrency = () => {
    const { navigation } = this.props;
    navigation.navigate('CurrencyList', { title: 'Base Currency', type: 'base' });
  }

  handlePressQuoteCurrency = () => {
    const { navigation } = this.props;
    navigation.navigate('CurrencyList', { title: 'Quote Currency', type: 'quote' });
  }

  handleOptionsPress = () => {
    const { navigation } = this.props;
    navigation.navigate('Options', { title: 'Options' });
  };

  handleKeyPress = (keyValue) => {
    const { dispatch } = this.props;
    dispatch(addCurrencyDigit(keyValue));
  };

  handleCancelPress = () => {
    const { dispatch } = this.props;
    dispatch(clearCurrencyAmount());
  };

  handleDecimalPress = () => {
    const { dispatch } = this.props;
    dispatch(addCurrencyDecimal());
  }

  handleDisconnectedPress = () => {
    this.dropdown.alertWithType(
      'error',
      'Error',
      'Just a heads up, no internet connection detected, some features may not work properly.',
    );
  }

  render() {
    const {
      baseCurrency,
      quoteCurrency,
      baseFullName,
      quoteFullName,
      amount,
      baseRate,
      quoteRate,
      date,
      isConnected,
      theme,
    } = this.props;

    let baseAmount = 0;
    const parsed = parseFloat(amount);

    if(!Number.isNaN(parsed) && parsed > 0) {
      baseAmount = parsed;
    }

    let rate = '--';

    if (baseRate > 0 && quoteRate > 0) {
      rate = parseFloat(baseRate / quoteRate).toFixed(5);
    }

    let quotePrice = '--';

    if (baseAmount > 0 && rate > 0) {
      quotePrice = (baseAmount * rate).toFixed(5);
    }

    return (
      <Container backgroundColor={theme.primaryColor}>
        <StatusBar barStyle={theme.color === 'DARK' ? 'light-content' : 'dark-content'} />
        <Header
          onPress={this.handleOptionsPress}
          isConnected={isConnected}
          onWarningPress={this.handleDisconnectedPress}
          theme={theme.color}
        />
        <LastConverted
          rate={rate}
          date={date}
          baseCurrency={baseCurrency}
          quoteCurrency={quoteCurrency}
          backgroundColor={theme.secondaryColor}
          titleColor={theme.secondaryText}
          textColor={theme.primaryText}
        />
        <Separator />
        <InputWithButton
          buttonText={baseCurrency}
          headerText="CONVERT FROM:"
          fullName={baseFullName}
          onPress={this.handlePressBaseCurrency}
          amount={amount}
          backgroundColor={theme.secondaryColor}
          textColor={theme.primaryText}
          symbolColor={theme.secondaryText}
        />
        <Separator />
        <InputWithButton
          buttonText={quoteCurrency}
          headerText="CONVERT TO:"
          fullName={quoteFullName}
          onPress={this.handlePressQuoteCurrency}
          amount={quotePrice}
          backgroundColor={theme.secondaryColor}
          textColor={theme.primaryText}
          symbolColor={theme.secondaryText}
        />
        <Numpad
          handleKeyPress={this.handleKeyPress}
          handleCancelPress={this.handleCancelPress}
          handleDecimalPress={this.handleDecimalPress}
          backgroundColor={theme.primaryColor}
          keyColor={theme.primaryText}
        />
        <DropdownAlert
          ref={(ref) => { this.dropdown = ref; }}
          updateStatusBar={false}
        />
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  const { baseCurrency, quoteCurrency } = state.currencies;
  const baseConversion = state.currencies.conversions[baseCurrency] || {};
  const quoteConversion = state.currencies.conversions[quoteCurrency] || {};
  const baseRate = baseConversion.rate || '0';
  const quoteRate = quoteConversion.rate || '0';
  const baseFullName = baseConversion.name || '--';
  const quoteFullName = quoteConversion.name || '--';
  const date = baseConversion.date || '--';

  return {
    baseCurrency,
    quoteCurrency,
    baseRate,
    quoteRate,
    baseFullName,
    quoteFullName,
    date,
    amount: state.currencies.amount,
    currencyError: state.currencies.error,
    isConnected: state.network.connected,
    theme: state.themes,
  };
};

export default connect(mapStateToProps)(Home);
