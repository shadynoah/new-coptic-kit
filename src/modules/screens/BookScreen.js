import React, { Component } from "react";
import { FlatList, ImageBackground, StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import NavigatorService from "../../services/navigator.js";
import { State } from "../../state";
import { decreaseFontSize, increaseFontSize, loadChapterContent, selectBook, toggleLoading } from "../../state/content/action-creators";
import { clearDayContentOfPlan } from '../../state/plan/action-creators';
import { OutOfEditorMenuOptionList } from "../components/OutMenuOptionList";
import { Helpers } from './../../services/utilities/helpers';



const customDataAr = require("../../data/data-structure-ar.json");
var customDataEn = require("../../data/data-structure.json");
class BookScreenContainer extends Component {
  constructor() {
    super();
    this.state = {
      isArabic: false,
      fontSizeOfText: 20,
      isAdminModal: false
    };
  }
  static mapStatetToProps(state) {
    return {
      loading: state.content.loading,
      selectedBook: state.content.selectedBook,
      isArabic: state.content.isArabic,
      fontSizeOfText: state.content.fontSizeOfText
    };
  }
  static mapDispatchToProps(dispatch) {
    return bindActionCreators(
      {
        toggleLoading,
        selectBook,
        loadChapterContent,
        increaseFontSize,
        decreaseFontSize,
        clearDayContentOfPlan
      },
      dispatch
    );
  }
  componentDidMount() {
    const { navigation , isArabic } = this.props;
    navigation.setOptions({ title: isArabic ? "الاناجيل" : "Books"  });
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    const { navigation, isArabic } = nextProps;
    if (nextProps.isArabic !== prevState.isArabic) {
      navigation.setOptions({ title: isArabic ? "الاناجيل" : "Books"  });
      return {
        isArabic: nextProps.isArabic
      };
    }
    if (nextProps.fontSizeOfText !== prevState.fontSizeOfText) {
      return {
        fontSizeOfText: nextProps.fontSizeOfText
      };
    } else return null;
  }
  render() {
    const { navigation } = this.props;
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
              navigation = {navigation}
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
                    const { navigation } = this.props;
                    this.props.clearDayContentOfPlan();
                    // console.log("item of select book" , item)
                    this.props.selectBook(item);
                    navigation.navigate("ChapterScreen");
                  }}
                  style={{
                    padding: 10,
                    fontSize: this.state.fontSizeOfText,
                    height:  44 + this.state.fontSizeOfText*0.4,
                   
                  }}
                >
                  {this.props.isArabic ? Helpers.getEquivalentArabicBookName( item.bookName) : item.bookName}
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
