/**
 * @format
 */

import { AppRegistry } from 'react-native';
// import App from './App';
import React from 'react';
import App from './src'
import { Provider } from 'react-redux';
import { name as appName } from './app.json';
import store from './src/store/store'

const Wrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

AppRegistry.registerComponent(appName, () => Wrapper);
