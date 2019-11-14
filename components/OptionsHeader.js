import React, { useState } from "react";
import { View } from "react-native";
import { SearchBar, Button } from "react-native-elements";
import { setSearch, setPage } from "../actions/index";
import { connect } from "react-redux";
import { Header } from "react-native-elements";

function mapDispatchToProps(dispatch) {
  return {
    setSearch: searchString => {
      dispatch(setSearch({ searchString }));
      dispatch(setPage({ change: 0 }));
    }
  };
}

function mapStateToProps(state) {
  return {
    searchString: state.filter.searchString,
    filter: state.filter.filter
  };
}

/* Component with searchbar, filter- and sortbutton */

function OptionsHeader(props) {
  const [searchValue, setSearchValue] = useState(props.searchString);

  /* Update internal searchstring */
  function handleSearchChange(newSearch) {
    setSearchValue(newSearch);
  }

  /* Call on actual searchfunction */
  function handleSearch() {
    props.setSearch(searchValue);
  }

  /* Open overlays for sort and filter */
  setSortOpen = () => {
    props.setSortOpen(true);
  };

  setFilterOpen = () => {
    props.setFilterOpen(true);
  };

  return (
    <View>
      <Header
        centerComponent={{
          text: props.filter === null ? "Alle produkter" : props.filter,
          style: {
            color: "white",
            fontSize: 30
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
      <SearchBar
        placeholder="Søk i drikkevarer..."
        onSubmitEditing={handleSearch}
        onChangeText={handleSearchChange}
        value={searchValue}
        lightTheme={true}
        inputContainerStyle={{
          borderRadius: 15,
          backgroundColor: "white",
          margin: 10
        }}
        containerStyle={{
          backgroundColor: "#722f37",
          borderBottomWidth: 0,
          borderTopWidth: 0
        }}
      />
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: "#722f37",
          padding: 7
        }}
      >
        <Button
          buttonStyle={{ backgroundColor: "#722f37", borderRadius: 0 }}
          onPress={setFilterOpen}
          title="Filtrér"
          titleStyle={{ marginLeft: 15 }}
        />
        <Button
          buttonStyle={{ backgroundColor: "#722f37", borderRadius: 0 }}
          onPress={setSortOpen}
          title="Sortér"
          titleStyle={{ marginRight: 15 }}
        />
      </View>
    </View>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(OptionsHeader);
