import React, { Component } from "react";
import { Image } from "react-native";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
  Accordion
} from "native-base";

import TranscribeResults from "./TranscribeResults";

const uploadOptions = [
  { title: "Transcribe Text from Image", content: "OCR response will go here" },
  { title: "Add Important Information", content: "form will go here" }
];

export const UploadCard = ({ image }) => {
  return (
    <Container>
      <Content>
        <Card>
          <CardItem cardBody>
            <Image
              source={{ uri: image }}
              style={{ minHeight: 200, width: null, flex: 1 }}
            />
          </CardItem>
          <Accordion
            dataArray={uploadOptions}
            expanded={false}
            icon="add"
            expandedIcon="remove"
          />
          {/* <CardItem>
            <Left>
              <Button transparent>
                <Icon active name="ios-magnet" />
                <Text>Get Text from Image</Text>
              </Button>
            </Left>
            <Body>
              <Button transparent>
                <Icon active name="ios-create" />
                <Text>Attach Info</Text>
              </Button>
            </Body>
            <Right>
              <Text>11h ago</Text>
            </Right>
          </CardItem> */}
        </Card>
      </Content>
    </Container>
  );
};
