import React from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Button,
  Text,
  Linking,
  Image,
  Label
} from "react-native";
import { ExpoLinksView } from "@expo/samples";
import NavigatorService from "../../services/navigator.js";
import {
  Right,
  Left,
  Item,
  Switch,
  Icon,
  Separator,
  ListItem,
  Body,
  Container, Header, Content, Card, CardItem
} from "native-base";
import { connect } from "react-redux";
import i18n from 'i18n-js';
import { TouchableOpacity } from "react-native-gesture-handler";

export class AgbyaPraysList extends React.Component {
  
  render() {
    return (
      <Container>
        {/* <Header>
          <Text>
            s
          </Text>
        </Header> */}
        <Content>
          <Card>
            <CardItem style={{ borderStartColor:'black', borderWidth:3,borderStyle:'solid' }}>
              <TouchableOpacity >
              <Text style={{ textAlign:'center' }}>sd</Text>
              </TouchableOpacity>
             </CardItem>
           </Card>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});
