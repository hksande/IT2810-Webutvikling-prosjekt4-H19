import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

// Listitem used in prouctslist
export default ListItem = props => {
  return (
    <TouchableOpacity onPress={() => props.handleListTap(props.item)}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          padding: 10,
          justifyContent: "space-between",
          borderWidth: 0.5,
          borderBottomWidth: 0
        }}
      >
        <Image
          style={{
            width: 150,
            height: 150,
            resizeMode: "contain",
            overflow: "hidden"
          }}
          source={{ uri: props.item.img }}
        />
        <Text
          numberOfLines={1}
          style={{
            flexShrink: 1,
            padding: 5,
            fontSize: 12,
            marginRight: 10,
            overflow: "hidden",
            writingDirection: "ltr"
          }}
        >
          {props.item.name}
        </Text>
        <TouchableOpacity
          onPress={() => {
            {
              props.addToFavorite(props.item.name);
            }
          }}
        >
          <View>
            <Icon
              name={
                props.favorites.includes(props.item.name) ? "heart" : "heart-o"
              }
              size={40}
              color="#722f37"
            />
          </View>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};
