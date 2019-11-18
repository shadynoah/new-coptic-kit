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
              Linking.openURL(
                this.props.isArabic
                  ? "https://m.facebook.com/القمص-جرجس-جبرائيل-241119892976029/"
                  : "https://m.facebook.com/Fr-George-DMin-1693643244259588/"
              );
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
              Linking.openURL("https://soundcloud.com/user-987979301");
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
              Linking.openURL(
                "https://www.youtube.com/channel/UCMku6NsCd_W2dhBh9tcPIAQ/featured"
              );
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
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              paddingTop: 10
            }}
          >
            <Text style={{ writingDirection: "rtl", fontSize: 17 }}>
              Christ Ambassador Mission welcome you
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
              CAM is a non-profit organization
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
              CAM helps students from needy families through{" "}
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
              Need Based Scholarship Program CAM also{" "}
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
              provides meat and monetary gifts to needy families
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
              in Egyptian in Christmas and Easter{" "}
            </Text>
          </View>
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
