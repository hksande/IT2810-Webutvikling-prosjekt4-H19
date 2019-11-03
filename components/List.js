import React, { useState, useEffect, Component } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import Filtering from "./Filtering";
import {
  StyleSheet,
  View,
  FlatList,
  Image,
  Text,
  TouchableOpacity
} from "react-native";
import { Header } from "react-native-elements";
import data from "../data.js";

export default function List({ navigation }) {
  const [favorites, addToFavorites] = useState([]);

  const products = data; //.splice(0, 10);

  function handleListTap(item) {
    console.log(item.name);
    navigation.navigate("Product", {
      name: item.name,
      img: item.img,
      type: item.type,
      origin: item.origin,
      price: item.price,
      description: item.description,
      purchased: item.purchased
    });
  }

  function addToFavorite(id) {
    products.forEach(element => {
      if (element.id === id && favorites.includes(element)) {
        var index = favorites.indexOf(element);
        element.purchased = 0;
        favorites.splice(index, 1);
        addToFavorites(favorites);
        console.log(favorites);
      } else if (element.id === id && !favorites.includes(element)) {
        element.purchased = 1;
        favorites.push(element);
        addToFavorites(favorites);
        console.log(favorites);
      }
    });
  }
  return (
    <View>
      <FlatList
        ItemSeparatorComponent={() => (
          <View
            style={{
              height: 1,
              width: "100%",
              borderTopWidth: 0
            }}
          />
        )}
        data={products}
        keyExtractor={product => product.id}
        extraData={favorites}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleListTap(item)}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                padding: 10,
                justifyContent: "flex-end",
                borderWidth: 0.5,
                //borderTopWidth: 0
                borderBottomWidth: 0
              }}
            >
              <Text
                numberOfLines={1}
                style={{
                  flexShrink: 1,
                  padding: 5,
                  fontSize: 12,
                  marginRight: 10,
                  overflow: "hidden",
                  writingDirection: "ltr"
                }}
              >
                {item.name}
              </Text>
              <Image
                style={{
                  width: 150,
                  height: 150,
                  resizeMode: "contain",
                  overflow: "hidden"
                }}
                source={{ uri: item.img }}
              />
              <TouchableOpacity
                onPress={() => {
                  {
                    addToFavorite(item.id);
                  }
                }}
              >
                <View>
                  <Icon
                    name={item.purchased ? "heart" : "heart-o"}
                    size={40}
                    color="#722f37"
                  />
                </View>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

List.navigationOptions = {
  header: (
    <Header
      rightComponent = {<Filtering/>}
      centerComponent={{
        text: "Produktliste",
        style: {
          color: "white",
          fontSize: 20,
          fontFamily: "Verdana"
        }
      }}
      barStyle="light-content"
      containerStyle={{
        backgroundColor: "#722f37",
        justifyContent: "space-between",
        borderBottomColor: "#722f37",
        borderBottomWidth: 5
      }}
    />
  )
}; 
