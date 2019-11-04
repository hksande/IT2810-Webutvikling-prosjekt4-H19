import React, { Component, Text } from "react";
import { Container, Icon as IconBack, Header, Title, Content, Button, Right, Body, Left, Picker, Form } from "native-base";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { HeaderTitle } from "react-navigation-stack";



export default class Filtering extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "key1"
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
              renderHeader={backAction =>
                <Header style={{ backgroundColor: "#722f37" }}>
                  <Left>
                    <Button transparent onPress={backAction}>
                      <IconBack name="arrow-back" style={{ color: "#fff" }} />
                    </Button>
                  </Left>
                  <Body style={{ flex: 3 }}>
                    <Title style={{ color: "#fff" }}> Velg Kategori</Title>
                  </Body>
                  <Right />
                </Header>}
              mode="dropdown"
              iosIcon={<Icon name="filter-variant" color = "#fff" />}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="Rødvin" value="key0" />
              <Picker.Item label="Hvitvin" value="key1" />
              <Picker.Item label="Musserende" value="key2" />
              <Picker.Item label="Øl" value="key3" />
              <Picker.Item label="Vodka" value="key4" />
            </Picker>
         
    );
  }
}
