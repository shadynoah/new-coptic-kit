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
  loadChapterContent,
  increaseFontSize,
  decreaseFontSize
} from "../../state/content/action-creators";
import { IBOOK } from "../../state/content/state";
import { NotificationManager } from "../../services/utilities/pushNotification";
import { OutOfEditorMenuOptionList } from "../components/OutMenuOptionList";

const customDataAr = require("../../data/data-structure-ar.json");
var customDataEn = require("../../data/data-structure.json");
var myArray = { matta: 5, loca: 20 };
class BookScreenContainer extends Component {
  constructor() {
    super();
    this.state = {
      isArabic: false,
      fontSizeOfText: 20
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
      loading: state.content.loading,
      selectedBook: state.content.selectedBook,
      isArabic: state.content.isArabic,
      fontSizeOfText: state.content.fontSizeOfText
    };
  }
  static mapDispatchToProps(dispatch: Dispatch) {
    return bindActionCreators(
      {
        toggleLoading,
        selectBook,
        loadChapterContent,
        increaseFontSize,
        decreaseFontSize
      },
      dispatch
    );
  }
  componentDidMount() {
    this.props.navigation.setParams({
      title: this.props.isArabic ? "الاناجيل" : "Books"
    });
    // console.log("-----Location------",Location)
    //   console.log("homee")
    // NotificationManager.registerForPushNotifications()
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.isArabic !== prevState.isArabic) {
      nextProps.navigation.setParams({
        title: nextProps.isArabic ? "الاناجيل" : "Books"
      });
      return {
        isArabic: nextProps.isArabic
      };
    }
    if (nextProps.fontSizeOfText !== prevState.fontSizeOfText) {
      console.log("new one");
      console.log("nextProps.fontSizeOfText", nextProps.fontSizeOfText);
      return {
        fontSizeOfText: nextProps.fontSizeOfText
      };
    } else return null;
  }
  render() {
    console.log("this.stae.fontsizeoftext", this.state);
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        paddingTop: 22
      },
      item: {
        padding: 10,
        fontSize: this.state.fontSizeOfText,
        height: 44
      }
    });
    return (
      <ImageBackground
        source={require("../../../assets/images/background.jpg")}
        style={{ flex: 1 }}
      >
        <View style={styles.container}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-end"
            }}
          >
            <OutOfEditorMenuOptionList
              increaseFontSize={this.props.increaseFontSize}
              isArabic={this.props.isArabic}
              fontSizeOfText={this.props.fontSizeOfText}
              decreaseFontSize={this.props.decreaseFontSize}
            />
          </View>
          <FlatList
            extraData={this.props.fontSizeOfText}
            initialNumToRender={15}
            data={this.props.isArabic ? customDataAr.bible : customDataEn.bible}
            renderItem={({ item }) => {
              return (
                <Text
                  onPress={() => {
                    //   console.log("========data arabic ====", JSON.stringify(dataAr))
                    this.props.selectBook(item);
                    NavigatorService.navigate("ChapterScreen");
                  }}
                  style={{
                    padding: 10,
                    fontSize: this.state.fontSizeOfText,
                    height: 44
                  }}
                >
                  {item.bookName}
                </Text>
              );
            }}
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
