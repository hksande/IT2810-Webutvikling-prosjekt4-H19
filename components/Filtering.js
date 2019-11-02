import React, { Component } from "react";
import { Container, Header, Content, Picker, Form} from "native-base";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default class Filtering extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "key2"
    };
  }
  onValueChange(value) {
    this.setState({
      selected: value
    });
  }
  render() {
    return (
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="filter-variant" color = "#fff" />}
              headerStyle={{ backgroundColor: "#722f37" }}
              headerBackButtonTextStyle={{ color: "#722f37" }}
              headerTitleStyle={{ color: "#fff" }}
              onValueChange={this.onValueChange.bind(this)}
              alignSelf = "flex-start"
            >
              <Picker.Item label="Wallet" value="key0" />
              <Picker.Item label="ATM Card" value="key1" />
              <Picker.Item label="Debit Card" value="key2" />
              <Picker.Item label="Credit Card" value="key3" />
              <Picker.Item label="Net Banking" value="key4" />
            </Picker>
        
    );
  }
}