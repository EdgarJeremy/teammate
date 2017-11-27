/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Router, Stack, Scene } from "react-native-router-flux";
import Login from "./src/screens/Login";
import Home from "./src/screens/Home";


export default class App extends Component {
  render() {
    return (
      <Router>
        <Stack name="root">
          <Scene key="Login" component={Login} initial={false} hideNavBar={true} />
          <Scene key="Home" component={Home} initial={true} hideNavBar={true} />
        </Stack>
      </Router>
    );
  }
}