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
import { State, IBOOK } from "../../state";
import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";
import {
  toggleLoading,
  selectBook,
  selectChapter,
  loadChapterContent
} from "../../state/content/action-creators";
import _ from "lodash";
const customData = require("../../data/data-structure.json");
var myArray = { matta: 5, loca: 20 };
import { Helpers } from "../../services/utilities/helpers";
class chapterScreenContainer extends Component {
  constructor() {
    super();
    this.state = {
      isArabic: false
    };
  }
  static navigationOptions = ({ navigation }) => {
    let params = navigation.state.params || {};
    return {
      headerTitle: params.title
    };
  };
  static mapStatetToProps(state: State) {
    return {
      loading: state.content.loading,
      selectedBook: state.content.selectedBook,
      isArabic: state.content.isArabic,
      fontSizeOfText:state.content.fontSizeOfText
    };
  }
  static mapDispatchToProps(dispatch: Dispatch) {
    return bindActionCreators(
      { toggleLoading, selectBook, selectChapter, loadChapterContent },
      dispatch
    );
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.isArabic !== prevState.isArabic) {
      nextProps.navigation.setParams({
        title: nextProps.isArabic ? "الاناجيل" : "Books"
      });
      return {
        isArabic: nextProps.isArabic
      };
    } else return null;
  }
  componentDidMount() {
    const { navigation, isArabic } = this.props;
    navigation.setParams({
      title: isArabic ? "الاصحاحات" : "chapters"
    });
  }

  props: {
    selectedBook: IBOOK
  };
  render() {
    var x = [];
    for (
      let index = 1;
      index <= this.props.selectedBook.numberOfChapters;
      index++
    ) {
      x.push({
        key: `${index}`,
        name: this.props.isArabic
          ? `الاصحاح ${Helpers.parseToArabic(index, true)}`
          : `chapter ${index}`,
        number: index
      });
    }
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
            data={x}
            initialNumToRender={15}
            renderItem={({ item }) => (
              <Text
                onPress={() => {
                  // this.props.selectChapter(item.number);
                  console.log("this.props.selectedBook.bookName", this.props.selectedBook.bookName);
                  console.log("item.number",  item.number)
                  this.props.loadChapterContent(
                    this.props.selectedBook.bookName,
                    item.number
                  );
                  NavigatorService.navigate("VerseScreen");
                }}
                style={{
                  padding: 10,
                  fontSize: this.props.fontSizeOfText,
                  height:  44 + this.props.fontSizeOfText*0.4,
                 
                }}
              >
                {item.name}
              </Text>
            )}
          />
        </View>
      </ImageBackground>
    );
  }
}

export const ChapterScreen = connect(
  chapterScreenContainer.mapStatetToProps,
  chapterScreenContainer.mapDispatchToProps
)(chapterScreenContainer);
