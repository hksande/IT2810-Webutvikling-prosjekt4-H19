import React from "react";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createAppContainer } from "react-navigation";
import Icon from "react-native-vector-icons/FontAwesome";
import { Header } from "react-native-elements";

import Products from "./Products.js";
import Favorites from "./Favorites.js";

export const TabNav = createAppContainer(
  createMaterialBottomTabNavigator({
    Søk: {
      screen: Products,
      navigationOptions: {
        tabBarLabel: "Søk",
        tabBarIcon: <Icon name="search" size={20} color="white" />,
        barStyle: { backgroundColor: "#722f37" }
      }
    },
    Favoritter: {
      screen: Favorites,
      navigationOptions: {
        tabBarIcon: <Icon name="heart-o" size={20} color="white" />,
        barStyle: { backgroundColor: "#722f37" }
      }
    }
  })
);
