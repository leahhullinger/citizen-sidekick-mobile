import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export const colors = {
  primary: {
    main: "#00353a",
    light: "#325f64",
    dark: "#001014",
    text: "#ffffff"
  },
  secondary: {
    main: "#64ffda",
    light: "#9effff",
    dark: "#14cba8",
    text: "#000000"
  }
};
