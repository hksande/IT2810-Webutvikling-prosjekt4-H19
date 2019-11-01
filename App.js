import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Start from "./ProductNav.js";
import List from "./List.js";

const client = new ApolloClient({
  uri: "http://it2810-24.idi.ntnu.no:5000/graphql",
  onError: ({ networkError, graphQLErrors }) => {
    console.log("graphQLErrors", graphQLErrors);
    console.log("networkError", networkError);
  }
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <View style={styles.container}>
        <Start />
      </View>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
    //alignItems: "center",
    //justifyContent: "center"
  }
});
