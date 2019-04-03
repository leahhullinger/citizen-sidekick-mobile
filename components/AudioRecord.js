import React from "react";
import { Permissions, Audio } from "expo";
import { View, StyleSheet } from "react-native";
import { Container, Content, Button, Icon, Text, Footer } from "native-base";
import { colors } from "../styles";

export default class AudioRecord extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasAudioPermission: null,
      isRecording: false,
      audioFile: null
    };
  }

  componentDidMount = async () => {
    const { status, permissions } = await Permissions.askAsync(
      Permissions.AUDIO_RECORDING
    );
    const hasAudioPermission = status === "granted";
    this.setState({ hasAudioPermission });
  };

  // recordAudio = () => {
  //   const recording = new Audio.Recording();
  // try {
  //   await recording.prepareToRecordAsync(Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
  //   await recording.startAsync();
  //   // You are now recording!
  // } catch (error) {
  //   // An error occurred!
  // }
  // }

  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <Text>Recording</Text>
        </Content>
        <View style={styles.toolbar}>
          <Button transparent>
            <Icon
              type="MaterialCommunityIcons"
              name="circle-slice-8"
              style={{ fontSize: 75, color: "white" }}
            />
          </Button>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary.dark
  },
  toolbar: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  recordBtn: {
    flex: 1
  }
});
