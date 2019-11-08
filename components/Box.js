import React from "react";
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import { accessibilityProps } from "react-native-paper/lib/typescript/src/components/MaterialCommunityIcon";
import "./../index.css";
import { connect } from "react-redux";
import { setTypeFilter, setPage } from "./../actions/index";

export default class Box extends React.Component {
  mapDispatchToProps(dispatch) {
    return {
      setTypeFilter: typeFilter => {
        dispatch(setTypeFilter({ typeFilter }));
        dispatch(setPage({ change: 0 }));
      }
    };
  }
  
  mapStateToProps(state) {
    return {
      typeFilter: state.filter.typeFilter
    };
  }

  Category(props) {
    handleCategoryPress = e => {
      props.setTypeFilter(e.currentTarget.dataset.div_name);
    };
  }
 
  renderer(){
    
    return(
    <Container onPress = {handleCategoryPress}>
    <Header />
    <Content>
      <Card>
        <CardItem>
          <Left>
            <Body>
              <Text>{this.props.category}</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Image data_div_name = {this.props.data_div_name} source={{uri: this.props.uri}} style={{height: 200, width: null, flex: 1}}/>
        </CardItem>
      </Card>
    </Content>
  </Container>)
;}
}
