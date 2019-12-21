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
import Collapsible from "react-native-collapsible";
import Accordion from "react-native-collapsible/Accordion";
import _ from "lodash";
import { List, CheckBox } from "native-base";
const customData = require("../../data/data-structure-ar.json");
const SECTIONS = [
  {
    title: "Day 1",
    content: ["Gensis 1", "Gensis 2"]
  },
  {
    title: "Day 2",
    content: ["Gensis 3", "Gensis 4"]
  }
];
var myArray = { matta: 5, loca: 20 };
import { AsyncStorage } from "react-native";
const biblePlane = ["Gensis 1", "Gensis 2"];
class SettingScreenContainer extends Component {
  constructor() {
    super();
    this.state = {
      activeSections: []
    };
  }
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
      _displayInForeground: true
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
  _renderSectionTitle = section => {
    return (
      <View style={styles.content}>{/* <Text>{section.content}</Text> */}</View>
    );
  };

  _renderHeader = section => {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>{section.title}</Text>
      </View>
    );
  };

  _renderContent = section => {
    return (
      <View style={styles.content}>
        <List>
          {_.map(section.content, (section, index) => {
            return (
              <View key={index}>
                <ListItem
                  onPress={() => {
                    console.log("section press", section);
                  }}
                >
                  <View
                    style={{
                      flex: 1,
                      flexDirection: "row",
                      justifyContent: "space-between"
                    }}
                  >
                    <Text>{section}</Text>

                    <CheckBox
                      checked={true}
                      onPress={() => console.log("xx")}
                    />
                  </View>
                </ListItem>
              </View>
            );
          })}
        </List>
      </View>
    );
  };

  _updateSections = activeSections => {
    this.setState({ activeSections });
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
      <Accordion
        sections={SECTIONS}
        activeSections={this.state.activeSections}
        renderSectionTitle={this._renderSectionTitle}
        renderHeader={this._renderHeader}
        renderContent={this._renderContent}
        onChange={this._updateSections}
      />
    );
  }
}

export const SettingScreen = connect(
  SettingScreenContainer.mapStatetToProps,
  SettingScreenContainer.mapDispatchToProps
)(SettingScreenContainer);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  },
  title: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: "300",
    marginBottom: 20
  },
  header: {
    backgroundColor: "yellow",
    padding: 10
  },
  headerText: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "500"
  },
  content: {
    padding: 20,
    backgroundColor: "#fff"
  },
  active: {
    backgroundColor: "rgba(255,255,255,1)"
  },
  inactive: {
    backgroundColor: "rgba(245,252,255,1)"
  },
  selectors: {
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "center"
  },
  selector: {
    backgroundColor: "#F5FCFF",
    padding: 10
  },
  activeSelector: {
    fontWeight: "bold"
  },
  selectTitle: {
    fontSize: 14,
    fontWeight: "500",
    padding: 10
  },
  multipleToggle: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 30,
    alignItems: "center"
  },
  multipleToggle__title: {
    fontSize: 16,
    marginRight: 8
  }
});
