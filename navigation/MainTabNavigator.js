import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import CameraScreen from "../screens/CameraScreen";
import CameraRoll from "../components/CameraRoll";

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  CameraRoll: CameraRoll,
  Camera: CameraScreen
});
HomeStack.navigationOptions = {
  header: null
};

const CameraStack = createStackNavigator({
  Camera: CameraScreen
});

CameraStack.navigationOptions = {
  header: null,
  tabBarLabel: "Camera",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-camera" : "md-camera"}
    />
  )
};

export default createStackNavigator({
  HomeStack,
  CameraStack
});
