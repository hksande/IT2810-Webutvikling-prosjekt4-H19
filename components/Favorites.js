import React, { Component } from "react";
import { View, Text, AsyncStorage } from "react-native";
import { Header } from "react-native-elements";
import { FlatList } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";

export default class Favorites extends Component {
  constructor(props) {
    super(props);
    this._retrieveData = this._retrieveData.bind(this);
    this.state = {
      favorites: []
    };
  }

  _retrieveData = async () => {
    try {
      await AsyncStorage.getItem("product_key").then(name => {
        products = JSON.parse(name);
        products.forEach(product => {
          if (!this.state.favorites.includes(product.name)) {
            this.setState({
              favorites: [...this.state.favorites, product.name]
            }),
              console.log("New favorites: ", this.state.favorites);
          } else if (this.state.favorites.includes(product.name)) {
            let data = this.state.favorites;
            let index = data.indexOf(product.name);
            let newFavorites = data.splice(index, 1);
            console.log("Modified favorites: ", newFavorites);
            this.setState({
              favorites: newFavorites
            });
          }
        });
      });
    } catch (e) {
      console.log(e);
    }
  };

  componentDidMount() {
    const { navigation } = this.props;
    navigation.addListener("willFocus", () => this._retrieveData());
  } /*

  componentDidUpdate(prevProps, prevState) {
    if (prevState.favorites !== this.state.favorites) {
      this._retrieveData();
    }
  }
*/
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
          style={{ marginTop: 60, height: 500 }}
          ItemSeparatorComponent={() => (
            <View
              style={{
                height: 1,
                width: "100%",
                borderTopWidth: 0,
                margin: 20,
                padding: 10
              }}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
          data={this.state.favorites}
          renderItem={({ item }) => (
            <View>
              <Text style={{ alignSelf: "center", fontStyle: "italic" }}>
                {item}
              </Text>

              <Icon
                style={{ alignSelf: "center", marginTop: 1 }}
                name={"heart"}
                size={15}
                color="#722f37"
                opacity="0.5"
              />
            </View>
          )}
        />
      </View>
    );
  }
}
