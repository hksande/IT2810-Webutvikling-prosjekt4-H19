import React from "react";
import { withNavigation } from "react-navigation";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

class BackButton extends React.Component {
  render() {
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.navigation.navigate("Products");
        }}
      >
        <Icon name={"menu-unfold"} size={20} color="white" />
      </TouchableOpacity>
    );
  }
}

// withNavigation returns a component that wraps MyBackButton and passes in the
// navigation prop
export default withNavigation(BackButton);
