import React, { Component } from "react";
import { FlatList, ImageBackground, StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import NavigatorService from "../../services/navigator.js";
import { Helpers } from "../../services/utilities/helpers";
import { IBOOK, State } from "../../state";
import { loadChapterContent, selectBook, selectChapter, toggleLoading } from "../../state/content/action-creators";

const customData = require("../../data/data-structure.json");
var myArray = { matta: 5, loca: 20 };
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
  render() {
    let { selectedBook , isArabic , fontSizeOfText } = this.props;
    var x = [];
    for (
      let index = 1;
      index <= selectedBook.numberOfChapters;
      index++
    ) {
      x.push({
        key: `${index}`,
        name: isArabic
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
                  loadChapterContent(
                    selectedBook.bookName,
                    item.number
                  );
                  NavigatorService.navigate("VerseScreen");
                }}
                style={{
                  padding: 10,
                  fontSize: fontSizeOfText,
                  height:  44 + fontSizeOfText*0.4,
                 
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
