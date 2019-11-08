import React, { useState } from "react";
import SearchBar from "./Search";
import SortOverlay from "./SortOverlay";
import { View } from "react-native";

export default function SortContainer(props) {
  const [isSortOpen, setSortOpen] = useState(false);

  return (
    <View>
      <SearchBar setOpen={setSortOpen} />
      <SortOverlay
        isOpen={isSortOpen}
        setOpen={setSortOpen}
      />
    </View>
  );
}
