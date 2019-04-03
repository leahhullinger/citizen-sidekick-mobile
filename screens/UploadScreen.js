// Form

// PhotoLibrary Btn, CameraBtn, VideoBtn, AudioBtn, TranscribeBtn, SaveBtn
// Preview Thumbnail
// Text Editor box where transcribe results are displayed and can be edited

// components: toolbar with btns, form,

import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator, createBottomNavigator } from "react-navigation";
import {
  Container,
  Content,
  Header,
  Left,
  Title,
  Body,
  Right,
  Text,
  Button,
  Icon
} from "native-base";
import Toolbar from "../components/Toolbar";
import InfoForm from "../components/InfoForm";

class UploadScreen extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Toolbar />
        </Header>
        <Content>
          <InfoForm />
        </Content>
      </Container>
    );
  }
}

export default createStackNavigator({
  Upload: UploadScreen
});
