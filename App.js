/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Router, Stack, Scene, Actions } from "react-native-router-flux";
import Login from "./src/screens/Login";
import Home from "./src/screens/Home";
import NewsView from './src/screens/NewsView';


export default class App extends Component {
  onBackPress() {
    if(Actions.state.index === 0) {
      return false
    }
    Actions.pop();
    return true;
  }
  render() {
    return (
      <Router backAndroidHandler={this.onBackPress}>
        <Stack name="root">
          <Scene key="Login" component={Login} initial={false} hideNavBar={true} />
          <Scene key="Home" component={Home} initial={true} hideNavBar={true} />
          <Scene key="NewsView" component={NewsView} title="News" />
        </Stack>
      </Router>
    );
  }
}