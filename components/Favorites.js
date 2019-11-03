import React, { Component } from "react";
import { View, Text } from "react-native";
import { Header } from "react-native-elements";

export default class Favorites extends Component {
  render() {
    return (
      <View>
        <Header
          centerComponent={{
            text: "Dine favoritter",
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
        <View>
          <Text style={{ alignSelf: "center" }}>
            {this.props.navigation.getParam("favorites", "no-favorites")}
          </Text>
        </View>
      </View>
    );
  }
}
