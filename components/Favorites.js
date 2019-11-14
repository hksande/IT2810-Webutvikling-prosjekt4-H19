import React, { Component } from "react";
import { View, Text, AsyncStorage } from "react-native";
import { Header } from "react-native-elements";
import { FlatList } from "react-native-gesture-handler";

/* Component that displays all favorites */
export default class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: []
    };
    this._retrieveData = this._retrieveData.bind(this);
  }

  /* Fetch data from Async Storage */
  _retrieveData = async () => {
    try {
      await AsyncStorage.getItem("product_key").then(favs => {
        products = JSON.parse(favs);
        this.setState({
          favorites: products
        });
      });
    } catch (e) {
      console.log(e);
    }
  };

  componentDidMount() {
    /* Call _retrieveData on mount */
    const { navigation } = this.props;
    navigation.addListener("willFocus", () => this._retrieveData());
  }

  render() {
    return (
      <View>
        <Header
          centerComponent={{
            text: "Dine favoritter",
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
        <FlatList
          style={{ marginBottom: 20 }}
          keyExtractor={(item, index) => index.toString()}
          data={this.state.favorites}
          renderItem={({ item }) => (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                margin: 40,
                borderWidth: 0.5,
                borderColor: "gray",
                borderLeftWidth: 0,
                borderRightWidth: 0,
                borderTopWidth: 0
              }}
            >
              <Text
                style={{
                  fontStyle: "italic",
                  fontSize: 17
                }}
              >
                {item}
              </Text>
            </View>
          )}
        />
      </View>
    );
  }
}
