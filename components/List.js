import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import {
  View,
  FlatList,
  Text,
  ActivityIndicator,
  AsyncStorage
} from "react-native";
import { setPage } from "../actions/index";
import ListItem from "./ListItem";
import HeaderContainer from "./HeaderContainer";

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

  /* QUERY AND COMMUNICATION WITH BACKEND */

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

  // Increase "page" counter in redux. Used in the useEffect above to calculate which products to fetch:
  function handleLoadMore() {
    props.setPage(1);
  }

// What to do when query returns loading, error or data
  if (loading) return <View></View>;
  if (error) return <Text>{error} Det har skjedd en feil :(</Text>;

  if (data) {
    products = data[dataName];
  }

  /* ASYNC STORAGE */

  // Check if item is in favorites in Async Storage
  isFavorite = async name => {
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
  };

  // Checks if product is favorite and adds/removes it in list
  addToFavorite = async name => {
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
  };

  // Adds product to async storage favorite list
  _storeData = async name => {
    if (name !== null) {
      try {
        await AsyncStorage.getItem("product_key")
          .then(result => JSON.parse(result))
          .then(favs => {
            // If favorite list doesn't exist yet, make favoritelist
            if (!Array.isArray(favs)) {
              favs = [name];
            }
            // If favorite list exists, add new product
            else {
              favs.push(name);
            }
            _setData(favs);
          });
      } catch (e) {
        console.log(e);
      }
    }
  };

  // Remove products to async storage favorite list
  _removeData = async name => {
    try {
      await AsyncStorage.getItem("product_key")
        .then(result => JSON.parse(result))
        .then(favs => {
          // Remove product
          var filtered = favs.filter(el => {
            return el !== name;
          });
          _setData(filtered);
        });
    } catch (e) {
      console.log(e);
    }
  };

  // Updates the async storage
  _setData = async data => {
    try {
      await AsyncStorage.setItem("product_key", JSON.stringify(data));
      setFavorites(data);
    } catch (e) {
      console.log(e);
    }
  };

  /* NAVIGATION */

  // Navigate to productpage when listitem is pressed
  function handleListTap(item) {
    props.navigation.navigate("Product", {
      ...item,
      favorite: favorites.includes(item.name)
    });
  }

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
          <View>
            <ListItem
              item={item}
              handleListTap={handleListTap}
              addToFavorite={addToFavorite}
              favorites={favorites}
            />
          </View>
        )}
      />
    </View>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
