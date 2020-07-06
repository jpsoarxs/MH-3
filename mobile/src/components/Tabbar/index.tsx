import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Feather as Icon } from "@expo/vector-icons";
import { SimpleLineIcons as Ionic } from "@expo/vector-icons";
import { Dimensions } from "react-native";

import Login from '../../../src/pages/Login';
import Badges from '../../../src/pages/Badges';
import Home from '../../../src/pages/Home';
import Profile from '../../../src/pages/Profile';
import Read from '../../../src/pages/Read';

import { StyleSheet } from "react-native";

const { Navigator, Screen } = createMaterialBottomTabNavigator();

const DEVICE_WIDTH = Dimensions.get("window").width;

const Tabbar = () => {
  return (
    <Navigator
      initialRouteName="Home"
      activeColor="#FC9272"
      inactiveColor="#ddd"
      labeled={false}
      barStyle={styles.barStyleShadow}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarAccessibilityLabel: "Home",
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={26} />
          ),
        }}
      />
      <Screen
        name="Read"
        component={Read}
        options={{
          tabBarLabel: "Read",
          tabBarAccessibilityLabel: "Read",
          tabBarIcon: ({ color }) => (
            <Icon name="book" color={color} size={26} />
          ),
        }}
      />
      <Screen
        name="Badges"
        component={Badges}
        options={{
          tabBarLabel: "Home",
          tabBarAccessibilityLabel: "Home",
          tabBarIcon: ({ color }) => (
            <Ionic name="trophy" color={color} size={26} />
          ),
        }}
      />
      <Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Interests",
          tabBarAccessibilityLabel: "Interests",
          tabBarIcon: ({ color }) => (
            <Icon name="user" color={color} size={26} />
          ),
        }}
      />
    </Navigator>
  );
};
const styles = StyleSheet.create({
  barStyleShadow: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 21,
    borderTopRightRadius: 21,
    width: DEVICE_WIDTH,
    height: 54,
    zIndex: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
  },
  iconFocused: {
    shadowOpacity: 1,
    textShadowRadius: 10,
    textShadowOffset: { width: 0, height: 0.9 },
  },
});
export default Tabbar;
