import React, { useState } from "react";
import { View } from "react-native";
import { SearchBar, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/Octicons";
import { setSearch, setPage } from "./../actions/index";
import { connect } from "react-redux";
import Filtering from "./Filter";
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
    searchString: state.filter.searchString
  };
}

function Search(props) {
  const [searchValue, setSearchValue] = useState(props.searchString);

  function handleSearchChange(newSearch) {
    setSearchValue(newSearch);
  }

  function handleSearch() {
    props.setSearch(searchValue);
  }

  setOpen = () => {
    props.setOpen(true);
  };

  return (
    <View>
      <Header
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
      <SearchBar
        placeholder="Søk i drikkevarer..."
        onSubmitEditing={handleSearch}
        onChangeText={handleSearchChange}
        value={searchValue}
        lightTheme={true}
        inputContainerStyle={{ borderRadius: 15 }}
        containerStyle={{
          backgroundColor: "#722f37",
          borderBottomWidth: 0,
          borderTopWidth: 0
        }}
      />
      <Button
        onPress={setOpen}
        title="Sortér"
        titleStyle={{ marginRight: 15 }}
        icon={<Icon name="settings" size={30} color="white" />}
        iconRight
      />
      <Filtering />
    </View>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
