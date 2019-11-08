import React, { useState } from "react";
import { View } from "react-native";
import { SearchBar, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/Octicons";
import { setSearch, setPage } from "./../actions/index";
import { connect } from "react-redux";

function mapDispatchToProps(dispatch) {
  return {
    setSearch: searchString => {
      dispatch(setSearch({ searchString }));
      dispatch(setPage({ change: 0 }));
    }
  };
}

function Search(props) {
  const [searchValue, setSearchValue] = useState("");
  const [timeout, setNewTimeout] = useState(null);

  function handleSearchChange(newSearch) {
    setSearchValue(newSearch);
    clearTimeout(timeout); // clears the old timer
    setNewTimeout(
      setTimeout(() => {
        props.setSearch(newSearch);
      }, 1500)
    );
    if (newSearch === "") {
      clearTimeout(timeout);
      props.setSearch(newSearch);
    }
  }

  setOpen = () => {
    props.setOpen(true);
  };

  return (
    <View style={{ marginTop: 27 }}>
      <SearchBar
        placeholder="Søk i drikkevarer..."
        onChangeText={handleSearchChange}
        value={searchValue}
        lightTheme={true}
      />
      <Button
        onPress={setOpen}
        title="Sortér"
        titleStyle={{ marginRight: 15 }}
        icon={<Icon name="settings" size={30} color="white" />}
        iconRight
      />
    </View>
  );
}

export default connect(
  null,
  mapDispatchToProps
)(Search);
