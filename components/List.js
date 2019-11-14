import React, { useState, useEffect } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { connect } from "react-redux";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import SortContainer from "./SortContainer";
import {
  View,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  AsyncStorage
} from "react-native";
import { Header } from "react-native-elements";
import { setPage } from "../actions/index";

const PRODUCTS_PER_PAGE = 10;

// TODO; implement pagination from reducer

// Query to fetch all products:

const ALL_PRODUCTS = gql`
  query allProducts(
    $searchString: String
    $sort: ProductOrderByInput
    $first: Int
    $skip: Int
  ) {
    allProducts(
      searchString: $searchString
      orderBy: $sort
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
    filter: state.filter.filter,
    page: state.pagination.page
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setPage: change => {
      dispatch(setPage({ change }));
    }
  };
}

const List = props => {
  const [favorites, addToFavorites] = useState([]);
  const [color, setColor] = useState("heart-o");

  // Decide which query and variables to use:
  let filter = props.filter;
  let query = filter === null ? ALL_PRODUCTS : GET_PRODUCTS_BY_TYPE;
  let dataName = filter === null ? "allProducts" : "getProductsByType";
  let variables = {
    searchString: props.searchString,
    sort: props.sort,
    first: PRODUCTS_PER_PAGE,
    skip: 0
  };
  variables =
    filter === null
      ? { ...variables }
      : filter === undefined
      ? { ...variables }
      : { ...variables, type: filter };

  // Execute query:
  const { data, fetchMore, loading, error } = useQuery(query, {
    variables: variables
  });

  // Fetch more products on scroll:
  useEffect(() => {
    fetchMore({
      query: query,
      variables: {
        ...variables,
        first: PRODUCTS_PER_PAGE,
        skip: PRODUCTS_PER_PAGE * props.page
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) {
          return prev;
        }
        result = {
          [dataName]: prev[dataName].concat(fetchMoreResult[dataName])
        };
        return result;
      }
    });
  }, [props.page]);

  if (loading) return <View></View>;
  if (error) return <Text>{error} Det har skjedd en feil :(</Text>;

  if (data) {
    products = data[dataName];
    console.log(products);
    console.log("Page: ", props.page);
    console.log("variables: ", variables);
  }

  // Increase "page" counter in redux. Used in the useEffect above to calculate which products to fetch:
  function handleLoadMore() {
    props.setPage(1);
  }

  function handleListTap(item) {
    console.log(item.name);
    props.navigation.navigate("Product", {
      id: item.id,
      name: item.name,
      img: item.img,
      type: item.type,
      origin: item.origin,
      price: item.price,
      description: item.description,
      purchased: item.purchased
    });
  }

  async function isFavorite(name) {
    let data = await AsyncStorage.getItem("product_key");
    let json = JSON.parse(data);
    for (let object in json) {
      //console.log(object);
      if (json[object].name == name) {
        console.log("hei");
        return true;
      }
    }
    return false;
  }

  async function addToFavorite(name) {
    //console.log("name: " + name);
    //AsyncStorage.clear();
    let favorite = await isFavorite(name); //console.log("isFavorite: " + favorite);
    console.log("Length of all products loaded: ", products.length);
    for (let i in products) {
      let element = products[i];
      if (element.name === name && favorite) {
        var index = favorites.indexOf(element);
        element.purchased = 0;
        favorites.splice(index, 1);
        addToFavorites(favorites);
        _removeData(element.name);
        setColor("heart-o"); //console.log(favorites);
      } else if (element.name == name) {
        //console.log(element);
        element.purchased = 1;
        favorites.push(element);
        addToFavorites(favorites);
        _storeData(element.name);
        setColor("heart"); //console.log(favorites);
      }
    }
  }

  _storeData = async name => {
    const favoriteList = [];
    if (name !== null) {
      const favorite = {
        name: name
      };
      favoriteList.push(favorite);
      try {
        await AsyncStorage.getItem("product_key").then(product => {
          if (product !== null) {
            const p = JSON.parse(product);
            p.push(favorite);
            AsyncStorage.setItem("product_key", JSON.stringify(p));
          } else {
            AsyncStorage.setItem("product_key", JSON.stringify(favoriteList));
          }
        });
      } catch (e) {
        console.log(e);
      }
    }
  };

  _removeData = async name => {
    try {
      let data = await AsyncStorage.getItem("product_key");
      data = JSON.parse(data);
      for (let i in data) {
        let object = data[i];
        if (object.name == name) {
          data.splice(i, 1);
        }
      }
      await AsyncStorage.setItem("product_key", JSON.stringify(data));
      console.log("Just removed", name); //AsyncStorage.clear();
    } catch (error) {
      console.log(error.message);
    }
  };

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
        keyExtractor={product => product.name}
        extraData={favorites}
        ListHeaderComponent={<SortContainer />}
        ListFooterComponent={
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              padding: 20
            }}
          >
            <ActivityIndicator />
          </View>
        }
        onEndReachedThreshold={0.5}
        onEndReached={handleLoadMore}
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
                    addToFavorite(item.name);
                  }
                }}
              >
                <View>
                  <Icon
                    name={item.purchased < 1 ? "heart-o" : "heart"}
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

export default connect(mapStateToProps, mapDispatchToProps)(List);
