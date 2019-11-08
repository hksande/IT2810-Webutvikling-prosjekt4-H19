import React, { useState } from "react";
import { View } from "react-native";
import { SearchBar, Button } from "react-native-elements";
import Octicon from "react-native-vector-icons/Octicons";
import Feathericon from "react-native-vector-icons/Feather";
import { setSearch, setPage } from "./../actions/index";
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
          icon={<Feathericon name="filter" size={30} color="white" />}
          iconLeft
        />
        <Button
          buttonStyle={{ backgroundColor: "#722f37", borderRadius: 0 }}
          onPress={setSortOpen}
          title="Sortér"
          titleStyle={{ marginRight: 15 }}
          icon={<Octicon name="settings" size={30} color="white" />}
          iconRight
        />
      </View>
    </View>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
