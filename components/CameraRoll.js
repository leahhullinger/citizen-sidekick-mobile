import React from "react";
import { createStackNavigator } from "react-navigation";
import { ImagePicker } from "expo";
import { Container, Header, Content, Text, Button, Icon } from "native-base";

import { UploadCard } from "./UploadCard";

class CameraRoll extends React.Component {
  state = {
    image: null
  };

  componentDidMount = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      quality: 1
    });
    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result });
    }
  };

  render() {
    if (this.props.permission === null) {
      return (
        <Container>
          <Content>
            <Text>"Access to Photo Library denied"</Text>
          </Content>
        </Container>
      );
    } else {
      return (
        <Container>
          {!!this.state.image && (
            <Header>
              <Button onPress={this.pickImage}>
                <Icon type="MaterialIcons" name="photo-library" />
              </Button>
            </Header>
          )}
          <Content padder>
            {!!this.state.image && <UploadCard image={this.state.image.uri} />}
          </Content>
        </Container>
      );
    }
  }
}

export default createStackNavigator({
  CameraRoll: CameraRoll
});
