import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Header } from "react-native-elements";
import BackButton from "./BackButton.js";

export default class Product extends Component {
  static navigationOptions = {
    header: (
      <Header
        leftComponent={<BackButton />}
        centerComponent={{
          text: "Detaljer",
          style: {
            color: "white",
            fontSize: 20,
            fontFamily: "Verdana"
          }
        }}
        barStyle="light-content"
        containerStyle={{
          backgroundColor: "#722f37",
          justifyContent: "space-around",
          borderBottomColor: "#722f37",
          borderBottomWidth: 5
        }}
      />
    )
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.navigation.getParam("name", "no-name")}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
