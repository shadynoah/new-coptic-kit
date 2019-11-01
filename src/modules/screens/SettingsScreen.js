import React, { Component } from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  FlatList,
  ImageBackground
} from "react-native";
import { WebBrowser } from "expo";

import { MonoText } from "../../../components/StyledText";
import NavigatorService from "../../services/navigator.js";
import { State } from "../../state";
import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";
import { toggleLanguage } from "../../state/content/action-creators";
import {
  Right,
  Left,
  Item,
  Switch,
  Label,
  Icon,
  Content,
  Separator,
  ListItem,
  Body,
  Input
} from "native-base";
const customData = require("../../data/data-structure-ar.json");
var myArray = { matta: 5, loca: 20 };
import { AsyncStorage } from "react-native";

class SettingScreenContainer extends Component {
  static navigationOptions = ({ navigation }) => {
    let params = navigation.state.params || {};
    return {
      title: params.title,
      headerRight: (
        <Button
          title={params.title == "Setting" ? "Home" : "الرئيسية"}
          onPress={() => NavigatorService.navigate("BookScreen")}
          transparent
        >
          <Icon name="arrow-forward" />
        </Button>
      )
    };
  };
  static mapStatetToProps(state: State) {
    return {
      isArabic: state.content.isArabic
    };
  }
  static mapDispatchToProps(dispatch: Dispatch) {
    return bindActionCreators({ toggleLanguage }, dispatch);
  }

  componentDidMount() {
    this.props.navigation.setParams({
      title: this.props.isArabic ? "الإعدادات" : "Setting"
    });
  }

  sendPushNotification = async () => {
    const message = {
      to: "ExponentPushToken[hYG9yzDed5WQV0O28K-_nW]",
      sound: "default",
      title: "I can do it ",
      body: "And here is the body!",
      data: { data: "goes here" }
    };
    const response = await fetch("https://exp.host/--/api/v2/push/send", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Accept-encoding": "gzip, deflate",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(message)
    });
    const data = response._bodyInit;
    console.log(`Status & Response ID-> ${data}`);
  };
  render() {
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        paddingTop: 22,
        justifyContent: "center"
      },
      item: {
        padding: 10,
        fontSize: 18,
        height: 44
      }
    });
    return (
      <ImageBackground
        source={require("../../../assets/images/background.jpg")}
        style={{ flex: 1 }}
      >
        <Content scrollEnabled={true}>
          <View style={{ backgroundColor: "#FFF" }}>
            {/* <Separator bordered>
              <Text>Account</Text>
            </Separator> */}
            <ListItem
              onPress={() => {
                NavigatorService.navigate("BookScreen");
              }}
            >
              <Left>
                <Text>Home</Text>
              </Left>
            </ListItem>
            <ListItem
              onPress={() => {
                //  NavigatorService.navigate("BookMarkScreen");
              }}
            >
              <Left>
                <Text>Bookmarks</Text>
              </Left>
            </ListItem>
            <ListItem
              onPress={() => {
                NavigatorService.navigate("NoteListScreen");
              }}
            >
              <Left>
                <Text>Notes</Text>
              </Left>
            </ListItem>
            <ListItem>
              <Text>English</Text>
              <Left />
              <Body />
              <Right>
                <Switch
                  onValueChange={value => {
                    this.props.toggleLanguage();
                  }}
                  value={this.props.isArabic}
                />
              </Right>
            </ListItem>
            {/* To do push notifications
            <Input>
            </Input>
  <Button title='send' onPress = {()=> {
    this.sendPushNotification()
  }}>
    send
  </Button> */}
          </View>
        </Content>
      </ImageBackground>
    );
  }
}

export const SettingScreen = connect(
  SettingScreenContainer.mapStatetToProps,
  SettingScreenContainer.mapDispatchToProps
)(SettingScreenContainer);
