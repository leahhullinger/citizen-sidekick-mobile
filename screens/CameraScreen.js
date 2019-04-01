import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import {
  Container,
  Header,
  Left,
  Right,
  Footer,
  FooterTab,
  Button,
  Icon
} from "native-base";
import { Camera, MediaLibrary, Permissions } from "expo";
import { colors } from "../styles";

export default class CameraScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  state = {
    hasCameraPermission: null,
    isTakingImage: false,
    capturedImages: [], // save this to redux maybe, so PreviewScreen can render
    type: Camera.Constants.Type.back,
    flashMode: Camera.Constants.FlashMode.off
  };

  async componentDidMount() {
    const camera = await Permissions.askAsync(Permissions.CAMERA);
    const cameraRoll = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    const audio = await Permissions.askAsync(Permissions.AUDIO_RECORDING);
    const hasCameraPermission =
      camera.status === "granted" &&
      cameraRoll.status === "granted" &&
      audio.status === "granted";

    this.setState({
      hasCameraPermission
    });
  }

  takePicture = async () => {
    setTimeout(() => this.setState({ isTakingImage: true }), 1);
    const { uri } = await this.camera.takePictureAsync();
    const assets = await MediaLibrary.createAssetAsync(uri);
    console.log("assets", assets);
    this.setState({ isTakingImage: false, capturedImages: assets });
  };

  render() {
    const { hasCameraPermission, flashMode } = this.state;
    const { Type, FlashMode } = Camera.Constants;

    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera
            ref={ref => {
              this.camera = ref;
            }}
            style={{
              flex: 1,
              justifyContent: "space-between"
            }}
            type={this.state.type}
          >
            <Header
              noShadow
              transparent
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                right: 0,
                zIndex: 100,
                backgroundColor: colors.primary.dark
              }}
            >
              <Left>
                <TouchableOpacity
                  name="flashMode"
                  onPress={() =>
                    this.setState({
                      flashMode:
                        flashMode === FlashMode.off
                          ? FlashMode.on
                          : FlashMode.off
                    })
                  }
                  style={{ backgroundColor: "transparent", border: "none" }}
                >
                  <Icon
                    type="Ionicons"
                    name={
                      flashMode == FlashMode.on ? "ios-flash" : "ios-flash-off"
                    }
                    style={{ size: 10, color: "white" }}
                  />
                </TouchableOpacity>
              </Left>
              <Right>
                <TouchableOpacity
                  name="reverse-camera"
                  onPress={() => {
                    this.setState({
                      type:
                        this.state.type === Type.back ? Type.front : Type.back
                    });
                  }}
                  style={{ backgroundColor: "transparent", border: "none" }}
                >
                  <Icon
                    type="Ionicons"
                    name="ios-reverse-camera"
                    style={{ size: 10, color: "white" }}
                  />
                </TouchableOpacity>
              </Right>
            </Header>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 20,
                alignItems: "center",
                backgroundColor: colors.primary.dark
              }}
            >
              <TouchableOpacity
                name="photo-library"
                onPress={() => this.props.navigation.navigate("CameraRoll")}
              >
                <Icon
                  type="Ionicons"
                  name="md-photos"
                  style={{
                    size: 36,
                    color: "white"
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                name="capture-btn"
                onPress={() => this.takePicture()}
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Icon
                  type="MaterialCommunityIcons"
                  name="circle-slice-8"
                  style={{ fontSize: 75, color: "white" }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Home")}
              >
                <Text style={{ color: "white", fontWeight: "bold" }}>
                  Cancel
                </Text>
              </TouchableOpacity>
            </View>
          </Camera>
        </View>
      );
    }
  }
}
