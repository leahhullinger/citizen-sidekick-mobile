import React, { Component } from "react";
import { Image } from "react-native";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right
} from "native-base";

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
          <CardItem>
            <Left>
              <Button transparent>
                <Text>OCR</Text>
              </Button>
            </Left>
            <Body>
              <Button transparent>
                <Icon active name="upload" />
                <Text>Attach Info</Text>
              </Button>
            </Body>
            <Right>
              <Text>11h ago</Text>
            </Right>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
};
