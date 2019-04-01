import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar
} from "react-native";
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

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: colors.primary.main
    }
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
        <Footer style={{ backgroundColor: colors.primary.dark }}>
          <FooterTab>
            <Button>
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
        </Footer>
        {/* </View> */}
      </Container>
    );
  }
}

_handleLearnMorePress = () => {
  WebBrowser.openBrowserAsync(
    "https://docs.expo.io/versions/latest/guides/development-mode"
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary.main
  },
  developmentModeText: {
    marginBottom: 20,
    color: "rgba(0,0,0,0.4)",
    fontSize: 14,
    lineHeight: 19,
    textAlign: "center"
  },
  contentContainer: {
    paddingTop: 30
  },
  welcomeContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: "contain",
    marginTop: 3,
    marginLeft: -10
  },
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50
  },
  homeScreenFilename: {
    marginVertical: 7
  },
  codeHighlightText: {
    color: "rgba(96,100,109, 0.8)"
  },
  codeHighlightContainer: {
    backgroundColor: "rgba(0,0,0,0.05)",
    borderRadius: 3,
    paddingHorizontal: 4
  },
  getStartedText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center"
  },
  tabBarInfoContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3
      },
      android: {
        elevation: 20
      }
    }),
    alignItems: "center",
    backgroundColor: "#fbfbfb",
    paddingVertical: 20
  },
  tabBarInfoText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    textAlign: "center"
  },
  navigationFilename: {
    marginTop: 5
  },
  helpContainer: {
    marginTop: 15,
    alignItems: "center"
  },
  helpLink: {
    paddingVertical: 15
  },
  helpLinkText: {
    fontSize: 14,
    color: "#2e78b7"
  }
});
