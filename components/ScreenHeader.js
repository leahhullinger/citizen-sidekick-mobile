import React from "react";
import {
  Container,
  Header,
  Left,
  Right,
  Button,
  Icon,
  Text,
  Body,
  Title
} from "native-base";
import { StyleSheet } from "react-native";

export const ScreenHeader = ({ iconType, iconName, btnText, title }) => (
  <Container>
    <Header>
      <Left>
        <Button>
          <Icon type={iconType} name={icon} style={styles.btnIcon} />
          <Text>{btnText}</Text>
        </Button>
      </Left>
      <Body>
        <Title>{title}</Title>
      </Body>
    </Header>
  </Container>
);

const styles = StyleSheet.create({
  btnIcon: {
    color: "white",
    fontSize: 40
  }
});
