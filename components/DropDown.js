import React, { Component, Text } from "react";
import { Container, Icon as IconBack, Header, Title, Content, Button, Right, Body, Left, Picker, Form } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";
import { HeaderTitle } from "react-navigation-stack";


export default class DropDown extends Component {
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
                    <Title style={{ color: "#fff" }}> Sorter</Title>
                  </Body>
                  <Right />
                </Header>}
              mode="dropdown"
              iosIcon={<Icon name="unsorted" color = "#fff" />}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="Pris stigende" value="key0" />
              <Picker.Item label="Pris synkende" value="key1" />
              <Picker.Item label="Alfabetisk" value="key2" />
              <Picker.Item label= "Reversert alfabetisk" value="key3" />
              <Picker.Item label="Siste nytt" value="key4" />
            </Picker>
         
    );
  }
}
