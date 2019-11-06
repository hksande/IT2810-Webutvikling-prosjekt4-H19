import React from "react";
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import { accessibilityProps } from "react-native-paper/lib/typescript/src/components/MaterialCommunityIcon";

export default class Box extends React.Component {

  HandlePressCard(){
   
  }
 
  renderer(){
    
    return(
    <Container onPress = {HandlePressCard}>
    <Header />
    <Content>
      <Card>
        <CardItem>
          <Left>
            <Body>
              <Text>this.props.category</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Image source={{uri: this.props.uri}} style={{height: 200, width: null, flex: 1}}/>
        </CardItem>
      </Card>
    </Content>
  </Container>)
;}
}
