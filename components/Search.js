import React, { useState } from "react";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";
import { View } from "react-native";
import { SearchBar, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/Octicons";

export default function Search(props) {
  const [search, setSearch] = useState("");

  updateSearch = search => {
    setSearch(search);
  };

  console.log(search);

  setOpen = () => {
    props.setOpen(true);
  };

  return (
    <View>
      <SearchBar
        placeholder="Type Here..."
        onChangeText={updateSearch}
        value={search}
      />
      <Button
        onPress={setOpen}
        icon={<Icon name="settings" size={15} color="white" />}
      />
    </View>
  );
}
