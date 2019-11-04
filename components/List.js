import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { View, FlatList, Image, Text, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import SortContainer from "./SortContainer";

const PRODUCTS_PER_PAGE = 10;

// Query to fetch all products:

const ALL_PRODUCTS = gql`
  query allProducts($searchString: String, $sort: ProductOrderByInput) {
    allProducts(searchString: $searchString, orderBy: $sort) {
      name
      id
      type
      price
      purchased
      origin
      img
      description
    }
  }
`;

// Query to fetch products based on type:

const GET_PRODUCTS_BY_TYPE = gql`
  query getProductsByType(
    $searchString: String
    $sort: ProductOrderByInput
    $type: String
    $first: Int
    $skip: Int
  ) {
    getProductsByType(
      searchString: $searchString
      orderBy: $sort
      type: $type
      first: $first
      skip: $skip
    ) {
      name
      id
      type
      price
      purchased
      origin
      img
      description
    }
  }
`;

function mapStateToProps(state) {
  return {
    sort: state.filter.sort,
    searchString: state.filter.searchString,
    filter: state.filter.typeFilter
  };
}

const List = (props, { navigation }) => {
  const [favorites, addToFavorites] = useState([]);

  // Decide which query and variables to use:
  const filter = props.filter;
  const query = filter === null ? ALL_PRODUCTS : GET_PRODUCTS_BY_TYPE;
  const dataName = filter === null ? "allProducts" : "getProductsByType";
  let variables = {
    searchString: props.searchString,
    sort: props.sort,
    first: PRODUCTS_PER_PAGE,
    skip: 0
  };
  variables =
    filter === null ? { ...variables } : { ...variables, type: filter };

  const { data, fetchMore, refetch, loading, error } = useQuery(query, {
    variables: variables,
    fetchPolicy: "cache"
  });

  if (loading) return <Text>Loading</Text>;
  if (error) return <Text>{error} Det har skjedd en feil :(</Text>;

  if (data) {
    products = data[dataName];
    console.log("Search: ", props.searchString);
    console.log("Sort: ", props.sort);
  }

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
      <SortContainer />
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
};

export default connect(mapStateToProps)(List);
