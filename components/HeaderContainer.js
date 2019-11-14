import React, { useState } from "react";
import OptionsHeader from "./OptionsHeader";
import SortOverlay from "./SortOverlay";
import FilterOverlay from "./FilterOverlay";
import { View } from "react-native";

/* Headercomponent; contains components for search, sort and filter */
export default function HeaderContainer(props) {
  /* Open and close overlays */
  const [isSortOpen, setSortOpen] = useState(false);
  const [isFilterOpen, setFilterOpen] = useState(false);

  return (
    <View>
      <OptionsHeader setSortOpen={setSortOpen} setFilterOpen={setFilterOpen} />
      <SortOverlay isOpen={isSortOpen} setOpen={setSortOpen} />
      <FilterOverlay isOpen={isFilterOpen} setOpen={setFilterOpen} />
    </View>
  );
}
