import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { ThemeProvider } from "react-native-elements";
import { Provider } from "react-redux";
import store from "./store/configureStore";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { TabNav } from "./components/TabNav.js";

const theme = {
  colors: {
    primary: "#76323F",
    secondary: "#C09F80"
  },
  Button: {
    raised: false,
    backgroundColor: "blue"
  }
};

/* ApolloClient let's us communicate with our server, which in turn has access to the database */

const client = new ApolloClient({
  uri: "http://it2810-24.idi.ntnu.no:5000/graphql",
  onError: ({ networkError, graphQLErrors }) => {
    console.log("graphQLErrors", graphQLErrors);
    console.log("networkError", networkError);
  }
});

// Checkout TabNav for further explanation.

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <View style={styles.container}>
            <TabNav />
          </View>
        </ThemeProvider>
      </Provider>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
