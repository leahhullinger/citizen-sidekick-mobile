import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Header, Left, Footer, FooterTab, Button, Icon } from "native-base";
import { Camera, Permissions } from "expo";
import { colors } from "../styles";

export default class CameraScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
    autoFocus: Camera.Constants.AutoFocus.on,
    whiteBalance: Camera.Constants.WhiteBalance.auto,
    flashMode: Camera.Constants.FlashMode.auto,
    videoStabilization: Camera.Constants.VideoQuality.auto
  };

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === "granted" });
  }
  // This is the container to hold all the functionality
  // include in CameraScreen:
  // bottom navBar with flip screen on right, start/stop/capture button center, camera roll left, swiping changes between photo and video
  // permission for both camera and photo library
  // Type
  // takePictureAsync
  // recordAsync
  // StopRecording
  // getSupportedRatioAsync - android only
  // getAvailablePictureSizeAsync
  // onPress on Camera ability to adjust whitebalance & focus
  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera style={{ flex: 1 }}>
            <Header style={{ backgroundColor: "transparent" }}>
              <Left>
                <Button
                  onPress={() =>
                    this.setState({ flashMode: Camera.Constants.FlashMode.off })
                  }
                  style={{ backgroundColor: "transparent", border: "none" }}
                >
                  <Icon
                    type="Ionicons"
                    name="ios-flash"
                    style={{ size: 10, color: "white" }}
                  />
                </Button>
              </Left>
            </Header>
            {/* <View
              style={{
                flex: 1,
                backgroundColor: "transparent",
                flexDirection: "row"
              }}
            > */}
          </Camera>
          <Footer style={{ backgroundColor: colors.primary.main }}>
            <FooterTab>
              <Button
                onPress={() => {
                  this.setState({
                    type:
                      this.state.type === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back
                  });
                }}
              >
                <Icon
                  type="Ionicons"
                  name="ios-reverse-camera"
                  style={{
                    size: 36,
                    color: "white"
                  }}
                  // style={{ fontSize: 18, marginBottom: 10, color: "white" }}
                />
              </Button>
            </FooterTab>
            <FooterTab>
              <Button onPress={() => this.props.navigation.navigate("Home")}>
                <Text>Cancel</Text>
              </Button>
            </FooterTab>
          </Footer>
        </View>
      );
    }
  }
}
