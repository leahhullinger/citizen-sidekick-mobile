import React from "react";
import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator
} from "react-navigation";

import MainTabNavigator from "./MainTabNavigator";
import SignUpScreen from "../screens/auth/SignUpScreen";
import SignInScreen from "../screens/auth/SignInScreen";
import AuthLoadingScreen from "../screens/auth/AuthLoadingScreen";

const AuthStack = createStackNavigator({
  signUp: SignUpScreen,
  signIn: SignInScreen
});

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      Auth: AuthStack,
      App: MainTabNavigator
    },
    {
      initialRouteName: "App"
    }
  )
);
