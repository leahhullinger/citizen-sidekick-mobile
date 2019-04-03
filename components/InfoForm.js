import React, { Component } from "react";
import { View } from "react-native";
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Label,
  Textarea,
  Button,
  Text
} from "native-base";

export default class InfoForm extends Component {
  render() {
    return (
      <Container style={{ flex: 1 }}>
        <Content>
          <Form>
            <Item>
              <Label>Date</Label>
              <Input />
            </Item>
            <Item>
              <Label>Connection/Contact</Label>
              <Input />
            </Item>
            <Item>
              <Label>Notes</Label>
              <Textarea />
            </Item>
            <Item>
              <Label>Date</Label>
              <Input />
            </Item>
            <Item>
              <Label>Date</Label>
              <Input />
            </Item>
          </Form>
          <Button full light>
            <Text>Save</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
