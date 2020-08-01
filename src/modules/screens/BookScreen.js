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
        decreaseFontSize,
        clearDayContentOfPlan
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
      return {
        fontSizeOfText: nextProps.fontSizeOfText
      };
    } else return null;
  }
  render() {
    console.log("from bookscreen" , this.state.isAdminModal)
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
                    this.props.clearDayContentOfPlan();
                    // console.log("item of select book" , item)
                    this.props.selectBook(item);
                    NavigatorService.navigate("ChapterScreen");
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
