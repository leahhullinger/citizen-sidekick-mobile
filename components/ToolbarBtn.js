import React from "react";
import { View, Button, Text, Icon } from "native-base";

import Colors from "../constants/Colors";

export default class ToolbarBtn extends React.Component {
  render() {
    return (
      <Button transparent>
        <View
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "transparent"
          }}
        >
          <Icon
            type={this.props.type}
            name={this.props.name}
            size={12}
            style={{ marginBottom: -3 }}
            color={
              this.props.focused
                ? Colors.tabIconSelected
                : Colors.tabIconDefault
            }
          />
          <Text
            style={{
              fontSize: 10,
              textTransform: "capitalize",
              letterSpacing: 0.3,
              paddingTop: 7
            }}
          >
            {this.props.title}
          </Text>
        </View>
      </Button>
    );
  }
}
