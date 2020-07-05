import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Tutorial from './src/pages/Tutorial';
import Login from './src/pages/Login';
import getStarted from './src/pages/GetStarted';

const { Navigator, Screen } = createStackNavigator();

export const AppNavigator = () => (
  <NavigationContainer>
    <Navigator headerMode='none'>
      <Screen name='GetStarted' component={getStarted}/>
      <Screen name='Tutorial' component={Tutorial}/>
      <Screen name='Login' component={Login}/>
    </Navigator>
  </NavigationContainer>
);
