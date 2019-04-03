import React, { Component } from "react";
import { View } from "react-native";
import { Header, Title, Left, Body, Right } from "native-base";
import ToolbarBtn from "./ToolbarBtn";

// make this more reuseable

export default class Toolbar extends Component {
  render() {
    return (
      <View style={{ flex: 1, flexDirection: "row" }}>
        <ToolbarBtn
          type="MaterialIcons"
          name="create-new-folder"
          title="New Folder"
        />
        <ToolbarBtn
          type="MaterialIcons"
          name="photo-library"
          title="Add Photo"
        />
        {/* <ToolbarBtn
          type="MaterialIcons"
          name="create-new-folder"
          title=""
        /> */}
      </View>
      // </View>
    );
  }
}
