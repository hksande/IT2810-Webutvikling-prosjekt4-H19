import React, { useState, useEffect } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { connect } from "react-redux";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import HeaderContainer from "./HeaderContainer";
import {
  View,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  AsyncStorage
} from "react-native";
import { setPage } from "../actions/index";

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

const PRODUCTS_PER_PAGE = 10;

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

const List = props => {
  // Local state with favorites. Used to display correct heart-logo
  const [favorites, setFavorites] = useState(props.favs);

  // Update favorites to match async storage on mount
  useEffect(() => {
    setFavorites(props.favs);
  }, [props.favs]);

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
  }

  // Increase "page" counter in redux. Used in the useEffect above to calculate which products to fetch:
  function handleLoadMore() {
    props.setPage(1);
  }

  // Navigate to productpage
  function handleListTap(item) {
    props.navigation.navigate("Product", {
      ...item,
      favorite: favorites.includes(item.name)
    });
  }

  // Check if item is in favorites in Async Storage
  async function isFavorite(name) {
    try {
      return await AsyncStorage.getItem("product_key").then(result => {
        let favs = JSON.parse(result);
        if (!Array.isArray(favs) || favs === []) {
          return false;
        }
        isFav = favs.includes(name);
        return isFav;
      });
    } catch (e) {
      console.log(e);
    }
  }

  async function addToFavorite(name) {
    try {
      await isFavorite(name).then(isFav => {
        if (isFav) {
          _removeData(name);
        } else {
          _storeData(name);
        }
      });
    } catch (e) {
      console.log(e);
    }
  }

  _storeData = async name => {
    if (name !== null) {
      try {
        await AsyncStorage.getItem("product_key")
          .then(result => JSON.parse(result))
          .then(favs => {
            if (!Array.isArray(favs)) {
              favs = [name];
            } else {
              favs.push(name);
            }
            _setData(favs);
          });
      } catch (e) {
        console.log(e);
      }
    }
  };

  _setData = async data => {
    try {
      await AsyncStorage.setItem("product_key", JSON.stringify(data));
      setFavorites(data);
    } catch (e) {
      console.log(e);
    }
  };

  _removeData = async name => {
    try {
      await AsyncStorage.getItem("product_key")
        .then(result => JSON.parse(result))
        .then(favs => {
          var filtered = favs.filter(el => {
            return el !== name;
          });
          _setData(filtered);
        });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View>
      <FlatList
        data={products}
        keyExtractor={product => product.name}
        ListHeaderComponent={<HeaderContainer />}
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
                justifyContent: "space-between",
                borderWidth: 0.5,
                borderBottomWidth: 0
              }}
            >
              <Image
                style={{
                  width: 150,
                  height: 150,
                  resizeMode: "contain",
                  overflow: "hidden"
                }}
                source={{ uri: item.img }}
              />
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
              <TouchableOpacity
                onPress={() => {
                  {
                    addToFavorite(item.name);
                  }
                }}
              >
                <View>
                  <Icon
                    name={favorites.includes(item.name) ? "heart" : "heart-o"}
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
