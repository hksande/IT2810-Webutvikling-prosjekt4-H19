import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import List from "./List.js";
import ListContainer from "./ListContainer";
import Product from "./Product.js";
import { Header } from "react-native-elements";

export const ProductNav = createAppContainer(
  createStackNavigator({
    Products: {
      screen: ListContainer,
      navigationOptions: {
        header: null
      }
    },
    Product: {
      screen: Product
    }
  })
);

