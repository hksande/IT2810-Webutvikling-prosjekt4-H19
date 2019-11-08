import React from "react";
import { connect } from "react-redux";
import {
  View,
  TouchableOpacity,
  Text,
  ImageBackground,
  Dimensions
} from "react-native";
import { setFilter, setPage } from "../actions/index";
import { Grid } from "native-base";

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
  };

  return (
    <View style={{ flexWrap: "wrap", flexDirection: "row" }}>
      {TYPE.map((el, index) => {
        return (
          <TouchableOpacity
            style={{ width: Dimensions.get("window").width * 0.5 }}
            key={index}
            onPress={() => {
              handleTypePress(el.filter);
            }}
          >
            <ImageBackground source={el.image} style={{ height: 100 }}>
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  flex: 1
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontWeight: "800",
                    fontSize: 20
                  }}
                >
                  {el.filter.toUpperCase()}
                </Text>
              </View>
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
