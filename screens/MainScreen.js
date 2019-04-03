import React, { Component } from "react";
import { createBottomTabNavigator } from "react-navigation";
import { View, Text, StyleSheet } from "react-native";
import { Icon } from "native-base";
import MainStackNavigator from "../navigation/MainTabNavigator";
import Dashboard from "./Dashboard";
import CameraScreen from "./CameraScreen";
import CameraRoll from "../components/CameraRoll";

export default class MainScreen extends Component {
  static navigationOptions = {
    headerLeft: (
      <Icon type="MaterialIcons" name="menu" style={{ paddingLeft: 10 }} />
    ),
    title: "Citizen Sidekick"
  };

  render() {
    return (
      <View>
        <MainNav />
      </View>
    );
  }
}

const MainTabNavigator = createBottomTabNavigator({
  Dashboard: {
    screen: Dashboard
  },
  CameraRoll: {
    screen: CameraRoll
  },
  Camera: {
    screen: CameraScreen
  }
});
