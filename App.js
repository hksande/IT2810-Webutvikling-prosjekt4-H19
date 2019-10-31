import React from "react";
import { View } from "react-native";
import { ThemeProvider } from "react-native-elements";
import SortContainer from "./components/SortContainer";
import { Provider } from "react-redux";
import store from "./store/configureStore";

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

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <View>
          <SortContainer />
        </View>
      </ThemeProvider>
    </Provider>
  );
}
