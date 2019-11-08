import React, { Component } from "react";
import List from "./List";
import "./../index.css";
import { connect } from "react-redux";
import { setTypeFilter, setPage } from "./../actions/index";
import { Row } from "native-base";
import Box from "./Box";

export default class Frontpage extends Component {
  render() {
    return (
      <View>
        <View flexDirection="row">
          <Box
            data-div_name={null}
            category="All"
            uri="https://images.unsplash.com/photo-1557149559-d74af2d38a1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"
          />
          <Box
            data_div_name="Rødvin"
            category="Rødvin"
            uri="https://images.unsplash.com/photo-1551980362-5f5816fdf020?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"
          />
        </View>
        <View flexDirection="row">
          <Box
            data_div_name="Hvitvin"
            category="Hvitvin"
            uri="https://images.unsplash.com/photo-1458945037814-389ec6994cbd?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
          />
          <Box
            data_div_name="Musserende"
            category="Musserende"
            uri="https://images.unsplash.com/photo-1548496094-354c8b7ec28c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"
          />
        </View>
        <View flexDirection="row">
          <Box
            data_div_name="Øl"
            category="Øl"
            uri="https://images.unsplash.com/photo-1518099074172-2e47ee6cfdc0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"
          />
          <Box
            data_div_name="Vodka"
            category="Vodka"
            uri="https://images.unsplash.com/photo-1523905491727-d82018a34d75?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          />
        </View>
      </View>
    );
  }
}

/*renderer(){
    return(
    <Image
    style={{
      width: 150,
      height: 150,
      resizeMode: "contain",
      overflow: "hidden",
      name = "redwine"
    }}
    source= {{ uri:'https://images.unsplash.com/photo-1551980362-5f5816fdf020?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60'}}
  />

  <Image
  style={{
    width: 150,
    height: 150,
    resizeMode: "contain",
    overflow: "hidden",
    name = "whitewine"
  }}
  source= {{ uri:'https://images.unsplash.com/photo-1458945037814-389ec6994cbd?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'}}
/>   <Image
    style={{
      width: 150,
      height: 150,
      resizeMode: "contain",
      overflow: "hidden",
      name = "sparkelig"
    }}
    source= {{ uri:'https://images.unsplash.com/photo-1548496094-354c8b7ec28c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60'}}
  />   <Image
  style={{
    width: 150,
    height: 150,
    resizeMode: "contain",
    overflow: "hidden",
    name = "beer"
  }}
  source= {{ uri:'https://images.unsplash.com/photo-1518099074172-2e47ee6cfdc0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60'}}
/>   <Image
    style={{
      width: 150,
      height: 150,
      resizeMode: "contain",
      overflow: "hidden",
      name = "vodka"
    }}
    source= {{ uri:'https://images.unsplash.com/photo-1523905491727-d82018a34d75?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'}}
    />
    )}}*/
