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
import {
  toggleLoading,
  selectBook,
  loadChapterContent
} from "../../state/content/action-creators";
import { IBOOK } from "../../state/content/state";
import { NotificationManager } from "../../services/utilities/pushNotification";
import i18next from "i18next";

const customDataAr = require("../../data/data-structure-ar.json");
var customDataEn = require("../../data/data-structure.json");
var myArray = { matta: 5, loca: 20 };
class BookScreenContainer extends Component {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};
    console.log("paraaams", params);
    return {
      title: params.isArabic
    };
  };
  static mapStatetToProps(state: State) {
    return {
      loading: state.content.loading,
      selectedBook: state.content.selectedBook,
      isArabic: state.content.isArabic
    };
  }
  static mapDispatchToProps(dispatch: Dispatch) {
    return bindActionCreators(
      { toggleLoading, selectBook, loadChapterContent },
      dispatch
    );
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.isArabic !== this.props.isArabic)
      this.props.navigation.setParams({
        isArabic: this.props.isArabic
      });
  }
  componentDidMount() {
    const x = i18next.t("HomeScreen.title");
    console.log("x from did mount", x);
    this.props.navigation.setParams({
      hell: x,
      isArabic: this.props.isArabic
    });
    // console.log("-----Location------",Location)
    //   console.log("homee")
    // NotificationManager.registerForPushNotifications()
  }
  componentWillReceiveProps(nextProps) {
    console.log("from will recieve ", i18next.t("HomeScreen.title"));
    if (!nextProps.isArabic) {
      console.log(
        "from componentWillReceiveProps",
        i18next.t("HomeScreen.title")
      );
      this.props.navigation.setParams({
        hell: i18next.t("HomeScreen.title")
      });
    }
  }
  render() {
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        paddingTop: 22
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
        <View style={styles.container}>
          <FlatList
            initialNumToRender={15}
            data={this.props.isArabic ? customDataAr.bible : customDataEn.bible}
            renderItem={({ item }) => (
              <Text
                onPress={() => {
                  //   console.log("========data arabic ====", JSON.stringify(dataAr))
                  this.props.selectBook(item);
                  NavigatorService.navigate("ChapterScreen");
                }}
                style={styles.item}
              >
                {item.bookName}
              </Text>
            )}
          />
        </View>
      </ImageBackground>
    );
  }
}

export const BookScreen = connect(
  BookScreenContainer.mapStatetToProps,
  BookScreenContainer.mapDispatchToProps
)(BookScreenContainer);
