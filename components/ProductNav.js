import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import List from "./List.js";
import ListContainer from "./ListContainer";
import Product from "./Product.js";

/* This is the component enabling inspection of a product to the detailed page. */

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
