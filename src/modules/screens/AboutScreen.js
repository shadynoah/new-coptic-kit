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
  Content,
  Separator,
  ListItem,
  Body
} from "native-base";
import { connect } from "react-redux";
class AboutScreenContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      isArabic: false
    };
  }
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};
    return {
      headerTitle: params.title,
      title: params.title
    };
  };
  static mapStatetToProps(state: State) {
    return {
      isArabic: state.content.isArabic
    };
  }
  componentDidMount() {
    this.props.navigation.setParams({
      title: this.props.isArabic ? "من نحن" : "About"
    });
    // console.log("-----Location------",Location)
    //   console.log("homee")
    // NotificationManager.registerForPushNotifications()
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.isArabic !== prevState.isArabic) {
      nextProps.navigation.setParams({
        title: nextProps.isArabic ? "من نحن" : "About"
      });
      return {
        isArabic: nextProps.isArabic
      };
    } else return null;
  }
  render() {
    return (
      <Content scrollEnabled={true}>
        <View style={{ backgroundColor: "#FFF" }}>
          {/* <Separator bordered>
            <Text>Account</Text>
          </Separator> */}
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <Text style={{ writingDirection: "rtl", fontSize: 17 }}>
              خدمة سفراء المسيح ترحب بكم على هذا التطبيق.
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              fontSize: 14
            }}
          >
            <Text style={{ writingDirection: "rtl", fontSize: 17 }}>
              خدمة سفراء المسيح هي جمعية خيرية تقدم منح دراسية
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              fontSize: 14
            }}
          >
            <Text style={{ writingDirection: "rtl", fontSize: 17 }}>
              لطلبة الجامعة من عائلات غير قادرة.
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              fontSize: 14
            }}
          >
            <Text style={{ writingDirection: "rtl", fontSize: 17 }}>
              وأيضاً تقدم مساعدات مالية وعينية في الأعياد
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              fontSize: 14
            }}
          >
            <Text style={{ writingDirection: "rtl", fontSize: 17 }}>
              للعائلات والكنائس في كل أنحاء مصر على قدر المتاح
            </Text>
          </View>
          <ListItem
            onPress={() => {
              Linking.openURL("https://www.facebook.com/");
            }}
          >
            <View>
              <Left>
                <Icon
                  style={{ color: "blue", marginRight: 10 }}
                  name="facebook-square"
                  type="FontAwesome"
                />
              </Left>
            </View>
            <Body>
              <Text>follow on facebook</Text>
            </Body>
          </ListItem>
          <ListItem
            onPress={() => {
              Linking.openURL("https://www.soundcloud.com/");
            }}
          >
            <View>
              <Left>
                <Icon
                  style={{
                    color: "orange",
                    marginRight: 10
                  }}
                  name="soundcloud"
                  type="FontAwesome"
                />
              </Left>
            </View>
            <Body>
              <Text>follow on soundcloud</Text>
            </Body>
          </ListItem>
          <ListItem
            onPress={() => {
              Linking.openURL("http://www.christambassadorsmission.com/");
            }}
          >
            <View>
              <Left>
                <Image
                  style={{ height: 20, width: 20, marginRight: 10 }}
                  source={require("../../../assets/images/homecrop.png")}
                />
              </Left>
            </View>
            <Body>
              <Text>follow on website</Text>
            </Body>
          </ListItem>
          <ListItem
            onPress={() => {
              Linking.openURL("https://www.youtube.com/");
            }}
          >
            <View>
              <Left>
                <Icon
                  style={{ color: "red", marginRight: 10 }}
                  name="youtube-square"
                  type="FontAwesome"
                />
              </Left>
            </View>
            <Body>
              <Text>follow on youtube</Text>
            </Body>
          </ListItem>
          {/* <ListItem
            icon
            onPress={() => {
              Linking.openURL("https://www.facebook.com/");
            }}
          >
            <Left>
              <Text>follow on facebook</Text>
            </Left>
            <Body>
              <Icon name="facebook" type="FontAwesome" />
            </Body>
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
                  this._storeData();
                  this._retrieveData();
                }}
                value={this.props.isArabic}
              />
            </Right>
          </ListItem> */}
        </View>
      </Content>
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
export const AboutScreen = connect(
  AboutScreenContainer.mapStatetToProps,
  AboutScreenContainer.mapDispatchToProps
)(AboutScreenContainer);
