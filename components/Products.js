import React, { Component } from "react";

import { ProductNav } from "./ProductNav.js";

export default class Products extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return <ProductNav />;
  }
}
