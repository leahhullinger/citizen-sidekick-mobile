import React from "react";
import { StyleSheet, Text } from "react-native";
import { createStackNavigator } from "react-navigation";

import {
  Container,
  Header,
  Left,
  Content,
  Footer,
  FooterTab,
  Button,
  Icon
} from "native-base";
import {
  WebBrowser,
  Permissions,
  Camera,
  ImagePicker,
  Audio_recording
} from "expo";
// import Icon from "@expo/vector-icons/Ionicons";

import { colors } from "../styles";

// HOMESCREEN include:
// add folder, list of folders, camera button, photos button, audio button,

class Dashboard extends React.Component {
  static navigationOptions = {
    title: "Citizen Sidekick"
  };

  state = {
    hasCameraPermission: null
  };
  componentDidMount = async () => {
    const camera = await Permissions.askAsync(Permissions.CAMERA);
    const cameraRoll = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    const hasCameraPermission =
      camera.status === "granted" && cameraRoll.status === "granted";
    this.setState({
      hasCameraPermission
    });
  };

  render() {
    return (
      <Container>
        {/* <Header style={{ backgroundColor: colors.primary.main }}>
          <Left>
            <Icon
              type="AntDesign"
              name="addfolder"
              style={{ color: "white" }}
            />
          </Left>
        </Header> */}
        <Content>
          <Text>this is content</Text>
        </Content>
        {/* <Footer style={{ backgroundColor: colors.primary.dark }}>
          <FooterTab>
            <Button
              onPress={() => this.props.navigation.navigate("AudioRecord")}
            >
              <Icon type="SimpleLineIcons" name="microphone" />
            </Button>
            <Button onPress={() => this.props.navigation.navigate("Camera")}>
              <Icon
                type="SimpleLineIcons"
                name="camera"
                style={{ size: 40, color: colors.secondary.main }}
              />
            </Button>
            <Button
              onPress={() => this.props.navigation.navigate("CameraRoll")}
            >
              <Icon type="MaterialIcons" name="photo-library" />
            </Button>
          </FooterTab>
        </Footer> */}
      </Container>
    );
  }
}

export default createStackNavigator({
  dashboard: Dashboard
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary.main
  }
});
