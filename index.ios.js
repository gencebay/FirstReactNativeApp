// IOS entry
import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";
import Header from "./src/components/Header";
import AlbumList from "./src/components/AlbumList";

export default class AwesomeProject extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText={"Albums"} />
        <AlbumList />
      </View>
    );
  }
}

AppRegistry.registerComponent("AwesomeProject", () => AwesomeProject);
