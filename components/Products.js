import React, { Component } from "react";

import { ProductNav } from "./ProductNav.js";

/* This is the component enabling the routing between TabNav and ProductNav, which in turn
   returns the setup for the routing in Tab 1 ("Søk"). */

export default class Products extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return <ProductNav />;
  }
}
