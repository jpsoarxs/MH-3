import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Tutorial from './src/pages/Tutorial';
import Login from './src/pages/Login';
import getStarted from './src/pages/GetStarted';
import Register from './src/pages/Register';

const { Navigator, Screen } = createStackNavigator();

export const AppNavigator = () => (
  <NavigationContainer>
    <Navigator headerMode='none'>
      <Screen name='Tutorial' component={Tutorial}/>
      <Screen name='Login' component={Login}/>
      <Screen name='Register' component={Register}/>
      <Screen name='GetStarted' component={getStarted}/>
    </Navigator>
  </NavigationContainer>
);
