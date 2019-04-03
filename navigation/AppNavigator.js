import React from "react";
import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator
} from "react-navigation";

import SignUpScreen from "../screens/auth/SignUpScreen";
import SignInScreen from "../screens/auth/SignInScreen";
import AuthLoadingScreen from "../screens/auth/AuthLoadingScreen";
import MainTabNavigator from "./MainTabNavigator";

const AuthStack = createStackNavigator({
  signUp: SignUpScreen,
  signIn: SignInScreen
});

const AppNavigator = createAppContainer(
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

export default AppNavigator;
