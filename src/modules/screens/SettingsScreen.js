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
import { Notifications } from "expo";
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
      to: "ExponentPushToken[OKmMSEAgjlC_ZcljJSXpJT]",
      sound: "default",
      title: "I can do it ",
      body: "And here is the body!",
      data: { data: "goes here" },
      _displayInForeground : true,
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
           
            <ListItem>
              <Text>English/Arabic</Text>
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
            <Text>
            To do push notifications
            </Text>
           
            <Input>
            </Input>
  <Button title='send' onPress = {()=> {
     Notifications.createChannelAndroidAsync('chat-messages', {
      name: 'Chat messages',
      sound: true,
      vibrate: true,
      priority: 'high'
    });
  let notificationId = Notifications.scheduleLocalNotificationAsync(
    {
      title: "I'm Scheduled",
      body: 'Wow, I can show up even when app is closed',
       android:{
         color:'blue',
         channelId: "chat-messages",
         icon: "https://www.dropbox.com/s/jwd3z293nk0czrm/newone.png?dl=0"
       }
    },
    {
      repeat: 'minute',
      time: new Date().getTime() + 10000,
    },
  );
  }}>
    send
  </Button>
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
