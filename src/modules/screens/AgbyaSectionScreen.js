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

class AgbyaScreenScreenContainer extends React.Component {
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
      title: this.props.isArabic ? "الصلوات" : "Sections"
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
              <Text style={{ textAlign:'center' }}>{i18n.t("agbyaSections.first")}</Text>
              </TouchableOpacity>
             </CardItem>
             <CardItem style={{ borderStartColor:'black', borderWidth:3,borderStyle:'solid' }}>
              <TouchableOpacity >
              <Text style={{ textAlign:'center' }}>{i18n.t("agbyaSections.second")}</Text>
              </TouchableOpacity>
             </CardItem>
             <CardItem style={{ borderStartColor:'black', borderWidth:3,borderStyle:'solid' }}>
              <TouchableOpacity >
              <Text style={{ textAlign:'center' }}>{i18n.t("agbyaSections.third")}</Text>
              </TouchableOpacity>
             </CardItem>
             <CardItem style={{ borderStartColor:'black', borderWidth:3,borderStyle:'solid' }}>
              <TouchableOpacity >
              <Text style={{ textAlign:'center' }}>{i18n.t("agbyaSections.forth")}</Text>
              </TouchableOpacity>
             </CardItem>
             <CardItem style={{ borderStartColor:'black', borderWidth:3,borderStyle:'solid' }}>
              <TouchableOpacity >
              <Text style={{ textAlign:'center' }}>{i18n.t("agbyaSections.fivth")}</Text>
              </TouchableOpacity>
             </CardItem>
             <CardItem style={{ borderStartColor:'black', borderWidth:3,borderStyle:'solid' }}>
              <TouchableOpacity >
              <Text style={{ textAlign:'center' }}>{i18n.t("agbyaSections.sixth")}</Text>
              </TouchableOpacity>
             </CardItem>
             <CardItem style={{ borderStartColor:'black', borderWidth:3,borderStyle:'solid' }}>
              <TouchableOpacity >
              <Text style={{ textAlign:'center' }}>{i18n.t("agbyaSections.seventh")}</Text>
              </TouchableOpacity>
             </CardItem>
             <CardItem style={{ borderStartColor:'black', borderWidth:3,borderStyle:'solid' }}>
              <TouchableOpacity >
              <Text style={{ textAlign:'center' }}>{i18n.t("agbyaSections.eighth")}</Text>
              </TouchableOpacity>
             </CardItem>
             <CardItem style={{ borderStartColor:'black', borderWidth:3,borderStyle:'solid' }}>
              <TouchableOpacity >
              <Text style={{ textAlign:'center' }}>{i18n.t("agbyaSections.ninth")}</Text>
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
export const AboutScreena = connect(
 AgbyaScreenScreenContainer.mapStatetToProps,
 AgbyaScreenScreenContainer.mapDispatchToProps
)(AgbyaScreenScreenContainer);
