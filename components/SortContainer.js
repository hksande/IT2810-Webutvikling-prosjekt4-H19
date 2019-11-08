import React, { useState } from "react";
import SearchBar from "./Search";
import SortOverlay from "./SortOverlay";
import Filter from "./Filter";
import { View } from "react-native";

export default function SortContainer(props) {
  const [isSortOpen, setSortOpen] = useState(false);
  const [isFilterOpen, setFilterOpen] = useState(false);

  return (
    <View>
      <SearchBar setSortOpen={setSortOpen} setFilterOpen={setFilterOpen} />
      <SortOverlay isOpen={isSortOpen} setOpen={setSortOpen} />
      <Filter isOpen={isFilterOpen} setOpen={setFilterOpen} />
    </View>
  );
}
