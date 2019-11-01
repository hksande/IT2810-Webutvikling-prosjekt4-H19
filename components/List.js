import React, { useState, useEffect, Component } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  StyleSheet,
  View,
  FlatList,
  Image,
  Text,
  TouchableOpacity
} from "react-native";
import data from "../data.js";

export default function List({ navigation }) {
  const [favorites, addToFavorites] = useState([]);

  const products = data.splice(0, 10);

  function handleListTap(item) {
    console.log(item.name);
    navigation.navigate("Product");
  }

  function addToFavorite(id) {
    products.forEach(element => {
      if (element.id === id && favorites.includes(element)) {
        var index = favorites.indexOf(element);
        element.purchased = 0;
        favorites.splice(index, 1);
        addToFavorites(favorites);
        console.log(favorites);
        return false;
      } else if (element.id === id && !favorites.includes(element)) {
        element.purchased = 1;
        favorites.push(element);
        addToFavorites(favorites);
        console.log(favorites);
        return true;
      }
    });
  }
  return (
    <View>
      <FlatList
        ItemSeparatorComponent={() => (
          <View style={{ height: 1, width: "100%" }} />
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
                borderTopWidth: 0.5,
                justifyContent: "flex-end"
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
              <TouchableOpacity onPress={() => addToFavorite(item.id)}>
                <View>
                  <Icon
                    name={!favorites.includes(item) ? "heart-o" : "heart"}
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
