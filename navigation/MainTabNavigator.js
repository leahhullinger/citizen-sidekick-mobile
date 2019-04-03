import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import Dashboard from "../screens/Dashboard";
import UploadScreen from "../screens/UploadScreen";
import CameraScreen from "../screens/CameraScreen";
import CameraRoll from "../components/CameraRoll";
import { Icon } from "native-base";

// for tabNavigator: audio, add icon in center (uploads), and camera on right

// const DashboardStack = createStackNavigator(
//   {
//     Dashboard: Dashboard,
//     Camera: CameraScreen,
//     CameraRoll: CameraRoll,
//     Upload: UploadScreen
//   },
//   {
//     initialRouteName: "Dashboard"
//   }
// );

const MainTabNavigator = createBottomTabNavigator(
  {
    Dashboard: {
      screen: Dashboard,
      navigationOptions: {
        tabBarLabel: "Dashboard",
        tabBarIcon: ({ focused }) => (
          <Icon type="MaterialIcons" name="dashboard" />
        )
      }
    },
    Camera: {
      screen: CameraScreen,
      navigationOptions: {
        tabBarLabel: "Camera",
        tabBarIcon: ({ focused }) => (
          <Icon type="MaterialIcons" name="photo-camera" />
        )
      }
    },
    Upload: {
      screen: UploadScreen,
      navigationOptions: {
        tabBarLabel: "new info",
        tabBarIcon: ({ focused }) => (
          <Icon type="MaterialIcons" name="add-circle-outline" />
        )
      }
    }
    // CameraRoll: {
    //   screen: CameraRollStack,
    //   navigationOptions: {
    //     tabBarLabel: "Library",
    //     tabBarIcon: ({ focused }) => (
    //       <Icon type="MaterialIcons" name="photo-library" />
    //     )
    //   }
    // }
  }
  // {
  //   initialRouteName: "Dashboard"
  // }
);

// CameraRollStack.navigationOptions = {
//   tabBarLabel: "Photo Library",
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={Platform.OS === "ios" ? "ios-options" : "md-options"}
//     />
//   )
// };

export default MainTabNavigator;
