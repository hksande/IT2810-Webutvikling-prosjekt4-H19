import React, { useState } from "react";
import { Overlay, Text, ListItem } from "react-native-elements";
import { View, FlatList } from "react-native";

const sortList = [
  { frontend: "Siste nytt", backend: null },
  { frontend: "Pris stigende", backend: "price_ASC" },
  { frontend: "Pris synkende", backend: "price_DESC" },
  { frontend: "Alfabetisk", backend: "name_ASC" },
  { frontend: "Reversert alfabetisk", backend: "name_DESC" }
];

export default function SortOverlay(props) {
  const closeOverlay = () => {
    props.setOpen(false);
  };

  return (
    <Overlay isVisible={props.isOpen}>
      <View>
        <Text>Sortér på:</Text>
        <FlatList
          data={sortList}
          renderItem={({ item }) => (
            <ListItem title={item.frontend} onPress={closeOverlay} />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </Overlay>
  );
}
