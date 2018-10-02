import React, { Component } from 'react';
import { Provider } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import SplashScreen from 'react-native-splash-screen';
import { PersistGate } from 'redux-persist/es/integration/react';
import { NetInfo } from 'react-native';
import Navigator from './config/routes';
import configureStore from './config/store';
import { changeNetworkStatus } from './actions/network';

EStyleSheet.build({
  // $outline: 1,
});

class App extends Component {
  constructor(props) {
    super(props);

    const { store, persistor } = configureStore();
    this.state = {
      store,
      persistor,
    };
  }

  componentDidMount() {
    SplashScreen.hide();
    NetInfo.addEventListener('connectionChange', this.handleNetworkChange);
  }

  componentWillUnmount() {
    NetInfo.removeEventListener('connectionChange', this.handleNetworkChange);
  }

  handleNetworkChange = (info) => {
    const { store } = this.state;
    store.dispatch(changeNetworkStatus(info.type));
  }

  render() {
    const { store, persistor } = this.state;

    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Navigator onNavigationStateChange={null} />
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
