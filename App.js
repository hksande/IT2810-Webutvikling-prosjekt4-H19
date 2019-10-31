import React from "react";
import { View } from "react-native";
import { ThemeProvider } from "react-native-elements";
import SortContainer from "./components/SortContainer";

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
    <ThemeProvider theme={theme}>
      <View>
        <SortContainer />
      </View>
    </ThemeProvider>
  );
}
