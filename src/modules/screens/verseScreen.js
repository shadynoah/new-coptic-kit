import React, { Component, Fragment } from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  TextInput,
  FlatList,
  Textarea,
  ImageBackground
} from "react-native";
import { Icon, Button, Item, Input, Toast, Text } from "native-base";
import { SQLite } from "expo-sqlite";

import { MonoText } from "../../../components/StyledText";
import NavigatorService from "../../services/navigator.js";
import { State, IBOOK } from "../../state";
import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";
import {
  toggleLoading,
  selectBook,
  loadChapterContent,
  selectChapter,
  toggleLanguage,
  loadNotes,
  insertBookMark,
  deleteBookMark,
  insertNote
} from "../../state/content/action-creators";
import Constants from "expo-constants";
import _ from "lodash";
import Modal from "react-native-modal";
import { ModalTypesEnum } from "../../enums";

import { AsyncStorage, Dimensions } from "react-native";
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger
} from "react-native-popup-menu";
import { BaseModal } from "../components/base-modal";
SidebarItem;
import { SidebarItem } from "../components/sidebar-item";
import { Helpers } from "../../services/utilities/helpers";
import { MenuOptionList } from "../components/MenuOptionList";
const db = SQLite.openDatabase("db.db");
class verseScreenContainer extends Component {
  constructor() {
    super();
    this.state = {
      fontSizeOfText: 20,
      selectedVerses: [],
      highlight: false,
      highlightedVerses: [],
      refresh: true,
      bookMarkedVerses: [],
      isVisible: false,
      isbookmark: false
    };
  }
  static navigationOptions = {
    title: "Verses"
  };
  static mapStatetToProps(state: State) {
    return {
      loading: state.content.loading,
      selectedBook: state.content.selectedBook,
      selectedChapter: state.content.selectedChapter,
      contentOfSelectedChapter: state.content.contentOfSelectedChapter,
      numberOfSelectedChapter: state.content.numberOfSelectedChapter,
      isArabic: state.content.isArabic
    };
  }
  static mapDispatchToProps(dispatch: Dispatch) {
    return bindActionCreators(
      {
        toggleLoading,
        selectBook,
        loadChapterContent,
        selectChapter,
        toggleLanguage,
        loadNotes,
        insertBookMark,
        deleteBookMark,
        insertNote
      },
      dispatch
    );
  }

  validateVerse(verseNum) {
    var res = {};
    // res.backgroundColor = 'white'
    res.textDecorationLine = "none";
    if (_.includes(this.state.highlightedVerses, verseNum)) {
      res.backgroundColor = "#ffff00";
    }
    // to be removed
    // if (_.includes(this.state.bookMarkedVerses, verseNum)) {

    //     res.backgroundColor = 'green'

    // }
    if (_.includes(this.state.selectedVerses, verseNum)) {
      res.textDecorationLine = "underline";
    }
    return res;
  }
  _storeData = async (type = "Highlight", verseNumArray) => {
    try {
      // console.log("=====type from _storeData ", type)
      // console.log("========array of data=====", verseNumArray)
      await AsyncStorage.setItem(
        type +
          " " +
          this.props.selectedBook.bookName +
          " " +
          this.props.numberOfSelectedChapter.toString(),
        verseNumArray.toString()
      );
    } catch (error) {
      // Error saving data
      console.log("===error from _storeData ");
    }
  };

  _retrieveData = async (
    type = "Highlight",
    x = this.props.selectedBook.bookName,
    y = this.props.numberOfSelectedChapter
  ) => {
    try {
      const value = await AsyncStorage.getItem(
        type + " " + x + " " + y.toString()
      );
      if (value !== null) {
        // We have data!!
        // console.log("====type===", type)
        // console.log("value from _retrieveData ", value);
        return value;
      }
    } catch (error) {
      // Error retrieving data
    }
  };

  async componentDidMount() {
    this.isBookMarkedChapter();
    // this.props.loadNotes()
    db.transaction(tx => {
      // tx.executeSql(
      //     'DROP TABLE items'
      // );
      // tx.executeSql(
      //     'DROP TABLE bookmark'

      // );
      tx.executeSql(
        "create table if not exists items (id integer primary key not null,title text, versesText text,bookName text , chapterNumber integer,isArabic boolean);"
      );
      tx.executeSql(
        "create table if not exists bookmark (id integer primary key not null, bookName text , chapterNumber integer , isArabic boolean);"
      );
    });
    //    console.log("===from did mount")
    this._retrieveData();
    var highlightedVersesOfStorage = this.convertStringToArray(
      await this._retrieveData()
    );
    this.setState(
      {
        highlightedVerses: [...new Set(highlightedVersesOfStorage)]
      },
      () => {
        // console.log("====form did mount===", this.state.highlightedVerses)
        // console.log("=====from did monut===== ", this.state.bookMarkedVerses)
      }
    );
  }
  async componentWillReceiveProps(nextProps) {
    if (
      this.props.numberOfSelectedChapter != nextProps.numberOfSelectedChapter
    ) {
      // console.log("=====this.props.numberOfSelectedChapter != nextProps.numberOfSelectedChapter====")
      var highlightedVersesOfStorage = await this._retrieveData(
        (type = "Highlight"),
        (x = nextProps.selectedBook.bookName),
        (y = nextProps.numberOfSelectedChapter)
      );
      var highlightedVersesOfStorageArr = this.convertStringToArray(
        highlightedVersesOfStorage
      );
      // console.log("==xx==", xx)
      this.setState(
        {
          highlightedVerses: [...new Set(highlightedVersesOfStorageArr)]
        },
        () => {
          // console.log("=======from  componentWillReceiveProps highlightedVerses==", this.state.highlightedVerses)
          // console.log("=======from  componentWillReceiveProps bookMarkedVerses==", this.state.bookMarkedVerses)
        }
      );
    }
  }

  convertStringToArray(data) {
    if (typeof data != "string") return data;
    // console.log("=========data from convertStringToArray=== ", data)
    let all = [];
    if (data && data.length > 0) {
      all = _.map(data.split(","), xx => {
        return +xx;
      });
    }
    return all;
  }
  saveNote = text => {
    let { selectedBook, numberOfSelectedChapter, isArabic } = this.props;
    let title = text.substring(0, 10);
    this.props.insertNote(
      title,
      text,
      selectedBook.bookName,
      numberOfSelectedChapter,
      isArabic
    );
    this.setState({
      isVisible: false
    });
  };
  parseToArabic(number) {
    if (!this.props.isArabic) return number;
    else {
      let str = number + "";
      var id = ["۰", "۱", "۲", "۳", "٤", "٥", "٦", "۷", "۸", "۹"];

      return str.replace(/[0-9]/g, function(w) {
        return id[+w];
      });
    }
  }
  isBookMarkedChapter(
    bookName = this.props.selectedBook.bookName,
    chapterNumber = this.props.numberOfSelectedChapter
  ) {
    db.transaction(tx => {
      tx.executeSql(
        "select count(*) from bookmark where bookName = (?) and chapterNumber = (?)",
        [bookName, chapterNumber],
        (_, { rows }) => {
          if (rows._array[0]["count(*)"] > 0) {
            this.setState(
              {
                isbookmark: true
              },
              () => {
                return this.state.isbookmark;
              }
            );
          } else {
            this.setState({
              isbookmark: false
            });
          }
        }
      );
    });
  }
  increaseFontSize() {
    let { fontSizeOfText } = this.state;
    if (fontSizeOfText < 35)
      this.setState({
        fontSizeOfText: fontSizeOfText + 5
      });
  }
  decreaseFontSize() {
    let { fontSizeOfText } = this.state;
    if (fontSizeOfText > 10)
      this.setState({
        fontSizeOfText: fontSizeOfText - 5
      });
  }
  enableIsBookMark() {
    this.setState({
      isbookmark: true
    });
  }
  disableIsBookMark() {
    this.setState({
      isbookmark: false
    });
  }
  enableIsVisible() {
    this.setState({
      isVisible: true
    });
  }
  async onHighlight() {
    let intersection = this.state.selectedVerses.filter(x =>
      this.state.highlightedVerses.includes(x)
    );
    var xxx = this.convertStringToArray(this.state.highlightedVerses);
    var union = _.union(xxx, this.state.selectedVerses);
    var afterfilter = union.filter(e => !intersection.find(a => e == a));
    var xn = await this._retrieveData();
    let all = this.convertStringToArray(xn) || [];
    this.setState(
      {
        highlight: !this.state.highlight,
        highlightedVerses: [...afterfilter]
      },
      () => {
        this.setState({
          selectedVerses: []
        });
      }
    );
    this._storeData("Highlight", this.state.highlightedVerses);
    this._retrieveData();
  }
  render() {
    let {
      selectedBook,
      numberOfSelectedChapter,
      isArabic,
      deleteBookMark,
      insertBookMark
    } = this.props;
    let {
      isbookmark,
      fontSizeOfText,
      selectedVerses,
      highlightedVerses,
      highlight
    } = this.state;
    // const deviceWidth = Dimensions.get("window").width;
    // const deviceHeight = Platform.OS === "ios"
    //     ? Dimensions.get("window").height
    //     : require("react-native-extra-dimensions-android").get("REAL_WINDOW_HEIGHT");
    // console.log("====this.props.selectedbookname--", this.props.selectedBook.bookName)
    const deviceType =
      (Constants.platform.ios && Constants.platform.ios.userInterfaceIdiom) ||
      (Constants.platform.android &&
        Constants.platform.android.userInterfaceIdiom);

    let index = 1;
    let indexOfVerse = 1;
    return (
      <ImageBackground
        source={require("../../../assets/images/background.jpg")}
        style={{ flex: 1 }}
      >
        <View style={{ flex: 1 }}>
          <View style={{ flexDirection: "row" }}>
            <BaseModal
              baseModalProperties={{
                hadCloseHeader: true,
                hasHeaderTitle: true,
                headerTitle: "Note",
                toggleModal: () => this.setState({ isVisible: false }),
                modalText:
                  this.props.selectedBook.bookName +
                  this.props.numberOfSelectedChapter.toString(),
                hasFirstButton: true,
                hasSecondButton: true,
                secondButtonText: "Cancel",
                onPressSecondBtn: () => this.setState({ isVisible: false }),
                firstButtonText: "Save",
                onPressFirstBtn: this.saveNote,
                modalType: ModalTypesEnum.modalHasTwoButtons
              }}
              isVisible={this.state.isVisible}
            />

            <Modal
              animationType="slide"
              transparent={true}
              backdropColor="white"
              style={{ height: 200, width: 200 }}
              isVisible={false}
            >
              <View
                style={{
                  width: 100,
                  alignSelf: "center",
                  padding: 10,
                  backgroundColor: "white",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 4,
                  borderColor: "rgba(0, 0, 0, 0.1)"
                }}
              >
                <TextInput
                  style={styles.TextInputStyleClass}
                  underlineColorAndroid="transparent"
                  placeholder={"Type Something in Text Area."}
                  placeholderTextColor={"#9E9E9E"}
                  numberOfLines={10}
                  multiline={true}
                  defaultValue="asdasd"
                />
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between"
                    }}
                  >
                    <View style={{ flex: 0.5 }}>
                      <Button
                        style={{
                          margin: 10,
                          paddingLeft: 30,
                          paddingRight: 30
                        }}
                        full
                        rounded
                        disabled={false}
                        onPress={() => {
                          // console.log("=====xxxxx====")
                        }}
                      >
                        <Text>saveee</Text>
                      </Button>
                    </View>
                    <View style={{ flex: 0.5, width: 200 }}>
                      <Button
                        style={{
                          margin: 10,
                          paddingLeft: 30,
                          paddingRight: 30
                        }}
                        full
                        rounded
                        disabled={false}
                        onPress={() => {
                          // console.log("=====xxxxx====")
                        }}
                      >
                        <Text>cancel</Text>
                      </Button>
                    </View>
                  </View>
                </View>
              </View>
            </Modal>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                flex: 0.5
              }}
            >
              <Button
                black
                transparent
                onPress={() => {
                  if (this.props.numberOfSelectedChapter - 1 > 0) {
                    this.isBookMarkedChapter(
                      this.props.selectedBook.bookName,
                      this.props.numberOfSelectedChapter - 1
                    );
                    this.props.loadChapterContent(
                      this.props.selectedBook.bookName,
                      this.props.numberOfSelectedChapter - 1
                    );
                    this.setState(
                      {
                        refresh: false,
                        selectedVerses: [],
                        highlightedVerses: []
                      },
                      () => this.setState({ refresh: true })
                    );
                  }
                }}
              >
                <Icon black name="arrow-back" />
              </Button>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-end",
                flex: 0.5
              }}
            >
              <Button
                transparent
                onPress={() => {
                  if (
                    this.props.numberOfSelectedChapter + 1 <=
                    this.props.selectedBook.numberOfChapters
                  ) {
                    this.isBookMarkedChapter(
                      this.props.selectedBook.bookName,
                      this.props.numberOfSelectedChapter + 1
                    );
                    this.setState({
                      selectedVerses: [],
                      highlightedVerses: []
                    });

                    this.props.loadChapterContent(
                      this.props.selectedBook.bookName,
                      this.props.numberOfSelectedChapter + 1
                    );
                  }
                }}
              >
                <Icon black name="arrow-forward" />
              </Button>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 10
              //   backgroundColor: "blue"
            }}
          >
            {this.state.isbookmark && (
              <View>
                <Icon
                  style={{
                    color: "#007AFF",
                    fontSize: deviceType == "tablet" ? 32 : 22,
                    marginLeft: 15
                  }}
                  name="bookmark"
                  transparent
                />
              </View>
            )}

            <View
              style={{
                flexDirection: "row",
                flex: 0.7,
                justifyContent: "flex-end"
              }}
            >
              <Text style={{ fontSize: 16, alignItems: "center" }}>
                {" "}
                {this.props.selectedBook.bookName}{" "}
                {this.props.numberOfSelectedChapter}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                flex: 0.5,
                justifyContent: "flex-end",
                marginTop: 10
              }}
            >
              <Button transparent>
                <MenuOptionList
                  isbookmark={isbookmark}
                  selectedBook={selectedBook}
                  numberOfSelectedChapter={numberOfSelectedChapter}
                  isArabic={isArabic}
                  deleteBookMark={deleteBookMark}
                  fontSizeOfText={fontSizeOfText}
                  selectedVerses={selectedVerses}
                  highlightedVerses={highlightedVerses}
                  _retrieveData={this._retrieveData.bind(this)}
                  convertStringToArray={this.convertStringToArray.bind(this)}
                  insertBookMark={insertBookMark}
                  increaseFontSize={this.increaseFontSize.bind(this)}
                  decreaseFontSize={this.decreaseFontSize.bind(this)}
                  enableIsBookMark={this.enableIsBookMark.bind(this)}
                  disableIsBookMark={this.disableIsBookMark.bind(this)}
                  enableIsVisible={this.enableIsVisible.bind(this)}
                  highlight={highlight}
                  _storeData={this._storeData.bind(this)}
                  _retrieveData={this._retrieveData.bind(this)}
                  onHighlight={this.onHighlight.bind(this)}
                />
              </Button>
            </View>
          </View>

          <ScrollView contentContainerStyle={{ margin: 15, paddingBottom: 30 }}>
            <Text
              style={{ fontSize: this.state.fontSizeOfText, lineHeight: 30 }}
            >
              {_.map(this.props.contentOfSelectedChapter, verse => {
                //passed as 16

                return (
                  <Text
                    style={{ fontSize: this.state.fontSizeOfText }}
                    onPress={async () => {
                      if (this.state.selectedVerses.indexOf(verse.num) == -1) {
                        // console.log("=====this verses is note selelcted ====")
                        this.setState(
                          {
                            selectedVerses: [
                              ...this.state.selectedVerses,
                              verse.num
                            ]
                          },
                          () => {}
                        );
                      } else {
                        var a = this.state.selectedVerses;
                        var index = a.indexOf(verse.num);
                        a.splice(index, 1);
                        this.setState({
                          selectedVerses: a
                        });
                      }
                    }}
                    key={index++}
                  >
                    <Text
                      style={{
                        fontSize: this.state.fontSizeOfText,
                        fontWeight: "bold",
                        backgroundColor: this.validateVerse(verse.num)
                          .backgroundColor
                      }}
                    >
                      {" "}
                      {Helpers.parseToArabic(
                        indexOfVerse++,
                        this.props.isArabic
                      )}{" "}
                    </Text>
                    <Text
                      style={{
                        fontSize: this.state.fontSizeOfText,
                        backgroundColor: this.validateVerse(verse.num)
                          .backgroundColor,
                        textDecorationLine: this.validateVerse(verse.num)
                          .textDecorationLine,
                        textAlign: "justify"
                      }}
                    >
                      {verse.text}
                    </Text>
                  </Text>
                );
              })}
            </Text>
          </ScrollView>
        </View>
      </ImageBackground>
    );
  }
}
export const VerseScreen = connect(
  verseScreenContainer.mapStatetToProps,
  verseScreenContainer.mapDispatchToProps
)(verseScreenContainer);
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingTop: Platform.OS === "ios" ? 20 : 0,
    justifyContent: "center",
    margin: 20
  },

  TextInputStyleClass: {
    padding: 30,
    textAlign: "left",
    width: 200,
    borderWidth: 2,
    borderColor: "#9E9E9E",
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
    height: 200
  }
});
