import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Header } from "react-native-elements";
import BackButton from "./BackButton.js";
import Icon from "react-native-vector-icons/FontAwesome";

export default class Product extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: (
      <Header
        leftComponent={<BackButton />}
        centerComponent={{
          text: navigation.getParam("name", "no-name"),
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
  });

  render() {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          marginTop: 50,
          flex: 1,
          flexDirection: "column",
          padding: 10
        }}
      >
        <Image
          style={{
            width: 250,
            height: 250,
            resizeMode: "contain",
            overflow: "hidden",
            alignSelf: "center"
          }}
          source={{
            uri: this.props.navigation.getParam("img", "no-image")
          }}
        />
        <Text
          style={{
            fontSize: 16,
            fontFamily: "Verdana",
            padding: 5,
            alignSelf: "center",
            margin: 10
          }}
        >
          {this.props.navigation.getParam("name", "no-name")}
        </Text>
        <Text
          style={{
            fontSize: 10,
            fontFamily: "Verdana",
            padding: 5,
            alignSelf: "center",
            margin: 10,
            fontStyle: "italic"
          }}
        >
          {this.props.navigation.getParam("type", "no-type")}
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontFamily: "Verdana",
            padding: 5,
            alignSelf: "center",
            margin: 10
          }}
        >
          Fra {this.props.navigation.getParam("origin", "no-origin")}
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontFamily: "Verdana",
            padding: 5,
            alignSelf: "center",
            margin: 10
          }}
        >
          {"Normalpris i Norge er "}
          {this.props.navigation.getParam("price", "no-price")} kr.
        </Text>
        <Text
          numberOfLines={3}
          ellipsizeMode="tail"
          style={{
            fontSize: 12,
            fontFamily: "Verdana",
            alignSelf: "center",
            margin: 10,
            fontStyle: "italic"
          }}
        >
          {this.props.navigation.getParam("description", "no-description")}
        </Text>
        <View style={{ padding: 5, alignSelf: "center", margin: 10 }}>
          <Text
            style={{
              fontSize: 8,
              fontFamily: "Verdana",
              padding: 1,
              alignSelf: "center",
              margin: 10,
              fontStyle: "italic"
            }}
          >
            {this.props.navigation.getParam("purchased") < 1
              ? "Ikke blant dine favoritter"
              : "Blant dine favoritter"}
          </Text>
          <Icon
            style={{ alignSelf: "center" }}
            name={
              this.props.navigation.getParam("purchased") < 1
                ? "heart-o"
                : "heart"
            }
            size={10}
            color="#722f37"
            opacity="0.5"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "row"
    //alignItems: "center",
    //justifyContent: "center"
  }
});
