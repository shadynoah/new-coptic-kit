import Constants from "expo-constants";
import _ from "lodash";
import { SQLite } from "expo-sqlite";
import { Button, Icon, Text } from "native-base";
import React, { Component } from "react";
import { AsyncStorage, ImageBackground, Platform, ScrollView, StyleSheet, TextInput, View } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { ModalTypesEnum } from "../../enums";
import { Helpers } from "../../services/utilities/helpers";
import { State } from "../../state";
import { deleteBookMark, insertBookMark, insertNote, loadChapterContent, loadNotes, selectBook, selectChapter, toggleLanguage, toggleLoading } from "../../state/content/action-creators";
import { selectChapterOfDayPlan } from '../../state/plan/action-creators';
import { BaseModal } from "../components/base-modal";
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
      selectedChapter: state.content.selectedChapter,
      contentOfSelectedChapter: state.content.contentOfSelectedChapter,
      numberOfSelectedChapter: state.content.numberOfSelectedChapter,
      isArabic: state.content.isArabic,
      fontSizeOfText: state.content.fontSizeOfText,
      selectedDayContent : state.plan.selectedDayContent,
      selectedChapterIndex: state.plan.selectedChapterIndex
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
        insertNote,
        selectChapterOfDayPlan
      },
      dispatch
    );
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
    this.props.navigation.setParams({
      title: this.props.isArabic ? "الايات" : "verses"
    });
    this.isBookMarkedChapter();
    db.transaction(tx => {
      // tx.executeSql(
      //     'DROP TABLE Notes'
      // );
      // tx.executeSql(
      //     'DROP TABLE bookmark'

      // );
      tx.executeSql(
        "create table if not exists Notes (id integer primary key not null,title text, versesText text,bookName text , chapterNumber integer,isArabic boolean);"
      );
      tx.executeSql(
        "create table if not exists bookmarks (id integer primary key not null, bookName text , chapterNumber integer , isArabic boolean , numberOfChapters integer);"
      );
    });
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
      var highlightedVersesOfStorage = await this._retrieveData(
        (type = "Highlight"),
        (x = nextProps.selectedBook.bookName),
        (y = nextProps.numberOfSelectedChapter)
      );
      var highlightedVersesOfStorageArr = this.convertStringToArray(
        highlightedVersesOfStorage
      );
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
    console.log("data from  convertStringToArray " , data)
    if (typeof data != "string") return data;
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
 
  isBookMarkedChapter(
    bookName = this.props.selectedBook.bookName,
    chapterNumber = this.props.numberOfSelectedChapter
  ) {
    // console.log("from isBookMarkedChapter bookName ", bookName);
    // console.log("from  isBookMarkedChapter chapterNumber ", chapterNumber);

    db.transaction(tx => {
      tx.executeSql(
        "select count(*) from bookmarks where bookName = (?) and chapterNumber = (?)",
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
    // console.log("selectedDayContent day content" , this.props.selectedDayContent);
    // console.log("selectedChapterIndex day content" , this.props.selectedChapterIndex)
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
                headerTitle: this.props.isArabic ? "مُلاحَظة" : "Note",
                toggleModal: () => this.setState({ isVisible: false }),
                modalText:
                  this.props.selectedBook.bookName +
                  this.props.numberOfSelectedChapter.toString(),
                hasFirstButton: true,
                hasSecondButton: true,
                secondButtonText: this.props.isArabic ? "إلغاء" : "Cancel",
                onPressSecondBtn: () => this.setState({ isVisible: false }),
                firstButtonText: this.props.isArabic ? "حفظ" : "Save",
                onPressFirstBtn: this.saveNote,
                modalType: ModalTypesEnum.modalHasTwoButtons,
                isArabic: this.props.isArabic
              }}
              isVisible={this.state.isVisible}
            />
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
                  if( this.props.selectedDayContent.length >0)
                  {
                    if(this.props.selectedChapterIndex - 1 >= 0)
                    {
                    
                      this.props.selectChapterOfDayPlan(this.props.selectedChapterIndex - 1 )

                      let bookName = this.props.selectedDayContent[this.props.selectedChapterIndex-1].split(" ")[0];
                     //  alert("bookName" + bookName);
                     this.props.selectBook({
                      "bookName": bookName,
                     })
                      let chapterNumber = this.props.selectedDayContent[this.props.selectedChapterIndex-1].split(" ")[1];
                     //  alert("chapterNumber"  + chapterNumber);
                     this.props.selectChapter(chapterNumber)
                      this.props.loadChapterContent(
                       bookName,
                       chapterNumber
                     );
                    }
                    else{
                      alert("this is first chapter in this day")
                    }
                  }
                  else {
                    if (this.props.numberOfSelectedChapter - 1 > 0) {
                      this.isBookMarkedChapter(
                        this.props.selectedBook.bookName,
                        this.props.numberOfSelectedChapter - 1
                      );
                      this.props.loadChapterContent(
                        this.props.selectedBook.bookName,
                        this.props.numberOfSelectedChapter - 1
                      );
                    }
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
                  // console.log("selectedBook" ,selectedBook.bookName)
                  // console.log(" this.props.numberOfSelectedChapter + 1" , this.props.numberOfSelectedChapter + 1)
                  
                  if (
                    this.props.numberOfSelectedChapter + 1 <=
                    this.props.selectedBook.numberOfChapters
                  ) {
                    this.isBookMarkedChapter(
                      this.props.selectedBook.bookName,
                      this.props.numberOfSelectedChapter + 1
                    );
                    this.props.loadChapterContent(
                      this.props.selectedBook.bookName,
                      this.props.numberOfSelectedChapter + 1
                    );
                  }
                  else {
                   if(this.props.selectedChapterIndex + 1 < this.props.selectedDayContent.length)
                   {
                     this.props.selectChapterOfDayPlan(this.props.selectedChapterIndex + 1 )
                     let bookName = this.props.selectedDayContent[this.props.selectedChapterIndex+1].split(" ")[0];
                    //  alert("bookName" + bookName);
                    this.props.selectBook({
                      "bookName": bookName,
                     })
                     let chapterNumber = this.props.selectedDayContent[this.props.selectedChapterIndex+1].split(" ")[1];
                    //  alert("chapterNumber"  + chapterNumber);
                    this.props.selectChapter(chapterNumber)
                     this.props.loadChapterContent(
                      bookName,
                      chapterNumber
                    );
                   }
                   else {
                     alert("this is last chapter in this day")
                   }
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
                  insertBookMark={insertBookMark}
                  enableIsBookMark={this.enableIsBookMark.bind(this)}
                  disableIsBookMark={this.disableIsBookMark.bind(this)}
                  enableIsVisible={this.enableIsVisible.bind(this)}
                  onHighlight={this.onHighlight.bind(this)}
                />
              </Button>
            </View>
          </View>

          <ScrollView contentContainerStyle={{ margin: 15, paddingBottom: 30 }}>
            <Text
              style={{ fontSize: this.props.fontSizeOfText, lineHeight: 30+this.props.fontSizeOfText*.3 }}
            >
              {_.map(this.props.contentOfSelectedChapter, verse => {
                //passed as 16

                return (
                  <Text
                    style={{ fontSize: this.props.fontSizeOfText }}
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
                        fontSize: this.props.fontSizeOfText,
                        fontWeight: "bold",
                        backgroundColor: Helpers.validateVerse(this.state.highlightedVerses, this.state.selectedVerses,
                           verse.num)
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
                        fontSize: this.props.fontSizeOfText,
                        backgroundColor: Helpers.validateVerse(this.state.highlightedVerses, this.state.selectedVerses,
                           verse.num)
                          .backgroundColor,
                        textDecorationLine: Helpers.validateVerse(this.state.highlightedVerses, this.state.selectedVerses,
                           verse.num)
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
