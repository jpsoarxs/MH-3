import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Tutorial from './src/pages/Tutorial';
import Login from './src/pages/Login';
import getStarted from './src/pages/GetStarted';
import Register from './src/pages/Register';
import Gift from './src/pages/Gift';
import Interests from './src/pages/Interests';
import Book from './src/pages/BookView';

import Tabbar from './src/components/Tabbar';

const { Navigator, Screen } = createStackNavigator();

export const AppNavigator = () => (
  <NavigationContainer>
    <Navigator headerMode='none' initialRouteName="Tutorial">
      <Screen name="Tutorial" component={Tutorial} />
      <Screen name="Login" component={Login} />
      <Screen name="Register" component={Register} />
      <Screen name="Interests" component={Interests} />
      <Screen name="Gift" component={Gift} />
      <Screen name="GetStarted" component={getStarted} />
      <Screen name="Book" component={Book} />
      <Screen name="Tabbar" component={Tabbar} />
    </Navigator>
  </NavigationContainer>
);
