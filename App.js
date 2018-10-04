/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './src/configureStore';
import MainActivity from './src/activity/MainActivity';
import { StatusBar, View } from 'react-native'
import { PRIMARY_COLOR_DARK } from './src/style/style';

const store = configureStore()
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <StatusBar backgroundColor={PRIMARY_COLOR_DARK} />
          <MainActivity />
        </View>
      </Provider>
    );
  }
}