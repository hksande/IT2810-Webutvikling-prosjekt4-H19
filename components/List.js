import React, { useState, useEffect } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { connect } from "react-redux";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import SortContainer from "./SortContainer";
import Filtering from "./Filtering";
import {
  StyleSheet,
  View,
  FlatList,
  Image,
  Text,
  TouchableOpacity
} from "react-native";
import { Header } from "react-native-elements";

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
    $filter: String
    $first: Int
    $skip: Int
  ) {
    getProductsByType(
      searchString: $searchString
      orderBy: $sort
      type: $filter
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
  const [page, setPage] = useState(1);

  // Decide which query and variables to use:
  const filter = props.filter;
  const query = filter === null ? ALL_PRODUCTS : GET_PRODUCTS_BY_TYPE;
  const dataName = filter === null ? "allProducts" : "getProductsByType";
  let variables = {
    searchString: props.searchString,
    sort: props.sort,
    first: 0,
    skip: 0
  };
  variables =
    filter === null ? { ...variables } : { ...variables, type: filter };

  const { data, fetchMore, refetch, loading, error } = useQuery(query, {
    variables: variables,
    fetchPolicy: "cache"
  });

  useEffect(() => {
    fetchMore({
      query: query,
      variables: {
        ...variables,
        first: PRODUCTS_PER_PAGE,
        skip: PRODUCTS_PER_PAGE * (page - 1)
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;
        result = {
          [dataName]: prev[dataName].concat(fetchMoreResult[dataName])
        };
        console.log("result: ", result[dataName].length);
        console.log("prev: ", prev[dataName].length);
        console.log("");
        return result;
      }
    });
  }, [page]);

  if (loading) return <Text>Loading</Text>;
  if (error) return <Text>{error} Det har skjedd en feil :(</Text>;

  if (data) {
    products = data[dataName];
    console.log("Page: ", page);
  }

  function handleLoadMore() {
    newPage = page + 1;
    setPage(newPage);
  }

  function handleListTap(item) {
    console.log(item.name);
    navigation.navigate("Product", {
      name: item.name,
      img: item.img,
      type: item.type,
      origin: item.origin,
      price: item.price,
      description: item.description,
      purchased: item.purchased
    });
  }

  function addToFavorite(id) {
    products.forEach(element => {
      if (element.id === id && favorites.includes(element)) {
        var index = favorites.indexOf(element);
        element.purchased = 0;
        favorites.splice(index, 1);
        addToFavorites(favorites);
        console.log(favorites);
      } else if (element.id === id && !favorites.includes(element)) {
        element.purchased = 1;
        favorites.push(element);
        addToFavorites(favorites);
        console.log(favorites);
      }
    });
  }
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
                    addToFavorite(item.id);
                  }
                }}
              >
                <View>
                  <Icon
                    name={item.purchased ? "heart" : "heart-o"}
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

List.navigationOptions = {
  header: (
    <Header
      rightComponent={<Filtering />}
      centerComponent={{
        text: "Produktliste",
        style: {
          color: "white",
          fontSize: 20
        }
      }}
      barStyle="light-content"
      containerStyle={{
        backgroundColor: "#722f37",
        justifyContent: "space-between",
        borderBottomColor: "#722f37",
        borderBottomWidth: 5
      }}
    />
  )
};
