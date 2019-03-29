import React from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  TouchableOpacity,
  Text
} from "react-native";
import Icon from "@expo/vector-icons/Ionicons";
import CameraScreen from "./CameraScreen";

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: "Links"
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <TouchableOpacity
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            borderBottomWeight: 1,
            borderBottomColor: "black"
          }}
          onPress={() => this.props.navigation.navigate("Camera")}
        >
          <Text
            style={{
              textAlign: "right",
              padding: 10,
              fontWeight: "700",
              fontSize: 16
            }}
          >
            Photo
          </Text>
          <Icon name="ios-camera" size={40} />
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});
