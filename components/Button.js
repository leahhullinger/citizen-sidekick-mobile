import React from "react";
import { Button, Text } from "native-base";

export const Btn = ({ onPress, title }) => (
  <Button onPress={onPress}>
    <Text>{title}</Text>
  </Button>
);
