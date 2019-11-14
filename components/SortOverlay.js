import React from "react";
import { Overlay, Text, ListItem } from "react-native-elements";
import { View, FlatList } from "react-native";
import { connect } from "react-redux";
import { setSort, setPage } from "../actions/index";

function mapDispatchToProps(dispatch) {
  return {
    setSort: sort => {
      dispatch(setSort({ sort }));
      dispatch(setPage({ change: 0 }));
    }
  };
}

function mapStateToProps(state) {
  return {
    sort: state.filter.sort
  };
}

/* List of sorting options (frontend) and corresponding query-parameter (backend) */
const SORT = [
  { frontend: "Siste nytt", backend: null },
  { frontend: "Pris stigende", backend: "price_ASC" },
  { frontend: "Pris synkende", backend: "price_DESC" },
  { frontend: "Alfabetisk", backend: "name_ASC" },
  { frontend: "Reversert alfabetisk", backend: "name_DESC" }
];

/* Overlay with sorting options */
function SortOverlay(props) {
  /* When a sorting is pressed */
  const setSort = frontend => {
    props.setSort(
      SORT.find(el => {
        return el.frontend === frontend;
      }).backend
    );
    props.setOpen(false);
  };

  return (
    <Overlay
      isVisible={props.isOpen}
      onBackdropPress={() => {
        props.setOpen(false);
      }}
      height="auto"
    >
      <View>
        <Text style={{ fontSize: 25, margin: 15 }}>Sortér på:</Text>
        <FlatList
          style={{ marginLeft: 25 }}
          data={SORT}
          renderItem={({ item }) => (
            <ListItem
              title={item.frontend}
              onPress={() => {
                setSort(item.frontend);
              }}
              titleStyle={
                props.sort === item.backend ? { fontWeight: "800" } : {}
              }
            />
          )}
          keyExtractor={item => item.frontend}
        />
      </View>
    </Overlay>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(SortOverlay);
