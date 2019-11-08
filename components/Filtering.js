import React, { Component, Text } from "react";
import { Container, Icon as IconBack, Header, Title, Content, Button, Right, Body, Left, Picker, Form } from "native-base";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { HeaderTitle } from "react-navigation-stack";
//import "./../index.css";
import { connect } from "react-redux";
import { setFilter} from "./../actions/index";

const List = [
  { frontend: "Alle", backend: null },
  { frontend: "Rødvin", backend: "Rødvin" },
  { frontend: "Hvitvin", backend: "Hvitvin" },
  { frontend: "Musserende", backend: "Musserende" },
  { frontend: "Øl", backend: "Øl" },
  { frontend: "Vodka", backend: "Vodka" }
];


function mapDispatchToProps(dispatch) {
  return {
    setFilter: filter => {
      dispatch(setFilter({ filter }));
    }
  };
}

function mapStateToProps(state) {
  return {
    typeFilter: state.filter.typeFilter
  };
}


function Filtering(props) { 
  
  
    handleCategoryPress = frontend => {
      props.setFilter(
        List.find(el => {
          return el === 
        }).backend
    );
    props.setOpen(false);
    };
      
    
  
  /*constructor(props) {
    super(props);
    this.state = {
      selected: "key1"
    };
  }*/
  /*onValueChange(value) {
    this.setState({
      selected: value
    });
  }*/
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
              onValueChange={handleCategoryPress}
             
            >

               data={List}
              renderItem={({ item }) => ( <Picker.Item label={item.frontend}  onPress={() => {handleCategoryPress(item.frontend)}}  className={
                item.frontend === props.typeFilter ? "active list-item" : "list-item"
              } keyExtractor={(item, index) => index.toString()}/>
              )
            </Picker>
         
    );
  
                }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filtering);

