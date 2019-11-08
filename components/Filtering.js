import React from "react";
import { connect } from "react-redux";
import { View, TouchableOpacity, Text, ImageBackground } from "react-native";
import { setFilter, setPage } from "./../actions/index";

const TYPE = [
  { filter: "Alle", image: require("./../assets/Alle.jpg") },
  { filter: "Rødvin", image: require("./../assets/Rødvin.jpg") },
  { filter: "Hvitvin", image: require("./../assets/Hvitvin.jpg") },
  { filter: "Musserende", image: require("./../assets/Musserende.jpg") },
  { filter: "Øl", image: require("./../assets/Øl.jpg") },
  { filter: "Sprit", image: require("./../assets/Sprit.jpg") }
];

function mapDispatchToProps(dispatch) {
  return {
    setFilter: filter => {
      filter = filter === "Alle" ? null : filter;
      dispatch(setFilter({ filter }));
      dispatch(setPage({ change: 0 }));
    }
  };
}

function mapStateToProps(state) {
  return {
    filter: state.filter.filter
  };
}

function Filtering(props) {
  handleTypePress = type => {
    console.log(type);
    filter = type;
    props.setFilter(filter);
    //props.setOpen(false);
  };

  return (
    <View>
      {TYPE.map((el, index) => {
        return (
          <TouchableOpacity
            key={index}
            onPress={() => {
              handleTypePress(el.filter);
            }}
          >
            <ImageBackground source={el.image} style={{ height: 100 }}>
              <Text style={{ color: "white" }}>{el.filter}</Text>
            </ImageBackground>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filtering);
