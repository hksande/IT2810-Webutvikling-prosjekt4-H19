import React, { Component } from "react";
import { Text, View, Image, ScrollView } from "react-native";
import { Header } from "react-native-elements";
import { TouchableOpacity } from "react-native";
import AntIcon from "react-native-vector-icons/AntDesign";
import FontIcon from "react-native-vector-icons/FontAwesome";

export default class Product extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: (
      <Header
        leftComponent={
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Products");
            }}
          >
            <AntIcon name={"menu-unfold"} size={20} color="white" />
          </TouchableOpacity>
        }
        centerComponent={{
          text: "Detaljer",
          style: {
            color: "white",
            fontSize: 20
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
          marginTop: 0,
          flex: 1,
          flexDirection: "column",
          padding: 0
        }}
      >
        <ScrollView>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "#CCCCCC",
              marginBottom: 10,
              backgroundColor: "#F5F5F5"
            }}
          >
            <Text
              style={{
                fontSize: 16,
                padding: 5,
                alignSelf: "center",
                margin: 20
                //fontWeight: 'bold',
              }}
            >
              {this.props.navigation.getParam("name", "no-name")}
            </Text>
          </View>
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

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
              borderBottomColor: "#CCCCCC",
              borderBottomWidth: 1,
              backgroundColor: "#F5F5F5"
            }}
          >
            <Text
              style={{
                fontSize: 16,
                padding: 5,
                alignSelf: "center",
                margin: 10
              }}
            >
              Pris
            </Text>
            <Text
              style={{
                fontSize: 16,
                padding: 5,
                alignSelf: "center",
                margin: 10
              }}
            >
              Område
            </Text>
            <Text
              style={{
                fontSize: 16,
                padding: 5,
                alignSelf: "center",
                margin: 10
              }}
            >
              Type
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center"
            }}
          >
            <Text
              style={{
                fontSize: 12,
                padding: 5,
                alignSelf: "center",
                margin: 10
              }}
            >
              {this.props.navigation.getParam("price", "no-price")} kr
            </Text>

            <Text
              style={{
                fontSize: 12,
                padding: 5,
                alignSelf: "center",
                margin: 10
              }}
            >
              {this.props.navigation.getParam("origin", "no-origin")}
            </Text>
            <Text
              style={{
                fontSize: 12,
                padding: 5,
                alignSelf: "center",
                margin: 10
              }}
            >
              {this.props.navigation.getParam("type", "no-type")}
            </Text>
          </View>
          <Text
            numberOfLines={3}
            ellipsizeMode="tail"
            style={{
              fontSize: 12,
              alignSelf: "center",
              margin: 20,
              fontStyle: "italic"
            }}
          >
            {this.props.navigation.getParam("description", "no-description")}
          </Text>

          <View style={{ padding: 5, alignSelf: "center", margin: 10 }}>
            <Text
              style={{
                fontSize: 8,
                padding: 1,
                alignSelf: "center",
                margin: 10,
                fontStyle: "italic"
              }}
            >
              {this.props.navigation.getParam("favorite")
                ? "Blant dine favoritter"
                : "Ikke blant dine favoritter"}
            </Text>

            {
              <FontIcon
                style={{ alignSelf: "center" }}
                name={
                  this.props.navigation.getParam("favorite")
                    ? "heart"
                    : "heart-o"
                }
                size={10}
                color="#722f37"
                opacity="0.5"
              />
            }
          </View>
        </ScrollView>
      </View>
    );
  }
}
