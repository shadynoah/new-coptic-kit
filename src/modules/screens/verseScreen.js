import Constants from "expo-constants";
import { SQLite } from "expo-sqlite";
import _ from "lodash";
import { Button, Icon, Text } from "native-base";
import React, { Component } from "react";
import { AsyncStorage, ImageBackground, ScrollView, View } from "react-native";
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
 
  _storeHighlighted = async (type = "Highlight", verseNumArray) => {
    try {
      await AsyncStorage.setItem(
        type +
          " " +
          this.props.selectedBook.bookName +
          " " +
          this.props.numberOfSelectedChapter.toString(),
        verseNumArray.toString()
      );
    } catch (error) {
      
      console.log("===error from _storeHighlighted ");
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
        return value;
      }
    } catch (error) {
      
    }
  };

  async componentDidMount() {
    
    this.props.navigation.setParams({
      title: this.props.isArabic ? "الايات" : "verses"
    });
    this.isBookMarkedChapter();
    db.transaction(tx => {
      
      
      
      
      

      
      tx.executeSql(
        "create table if not exists Notes (id integer primary key not null,title text, versesText text,bookName text , chapterNumber integer,isArabic boolean);"
      );
      tx.executeSql(
        "create table if not exists bookmarks (id integer primary key not null, bookName text , chapterNumber integer , isArabic boolean , numberOfChapters integer);"
      );
    });
    
    var highlightedVersesOfStorage = this.convertStringToArray(
      await this._retrieveData()
    );
    this.setState(
      {
        highlightedVerses: [...new Set(highlightedVersesOfStorage)]
      }
    );
  }
  async componentWillReceiveProps(nextProps) {
    if (
      (this.props.numberOfSelectedChapter != nextProps.numberOfSelectedChapter) ||
      (this.props.selectedBook.bookName !== nextProps.selectedBook.bookName )
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
        }
      );
    }
  }

  convertStringToArray(data) {
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
    const { selectedVerses , highlightedVerses } = this.state;
    let intersection = selectedVerses.filter(x =>
      highlightedVerses.includes(x)
    );
    var xxx = this.convertStringToArray(highlightedVerses);
    var union = _.union(xxx, selectedVerses);
    var afterfilter = union.filter(e => !intersection.find(a => e == a));
    this.setState(
      {
        highlightedVerses: [...afterfilter]
      },
      () => {
        this.setState({
          selectedVerses: []
        },
        () =>  this._storeHighlighted("Highlight", afterfilter)
        );
       
      }
    );
   
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
    } = this.state;
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
                onPress={async () => {
                  if( this.props.selectedDayContent.length >0)
                  {
                    if(this.props.selectedChapterIndex - 1 >= 0)
                    {
                      this.props.selectChapterOfDayPlan(this.props.selectedChapterIndex - 1 );
                      const splitted = this.props.selectedDayContent[this.props.selectedChapterIndex - 1 ].split(" ");
                      let isBookStartWithString =  isNaN(parseInt(splitted[0]));
                      const bookName = isBookStartWithString ? splitted[0] :
                      (splitted[0] + " " + splitted[1]) 
                       const chapterNumber = _.last(splitted);
                       this.isBookMarkedChapter(
                        bookName,
                        chapterNumber
                      );
                     this.props.selectChapter(chapterNumber)
                      this.props.loadChapterContent(
                       bookName,
                       chapterNumber
                     );
                     this.props.selectBook({
                      "bookName": bookName,
                     })
                     var highlightedVersesOfStorage = this.convertStringToArray(
                      await this._retrieveData()
                    );
                    this.setState(
                      {
                        highlightedVerses: [...new Set(highlightedVersesOfStorage)]
                      }
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
              black
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
                    this.props.loadChapterContent(
                      this.props.selectedBook.bookName,
                      this.props.numberOfSelectedChapter + 1
                    );
                  }
                  else {
                   if(this.props.selectedChapterIndex + 1 < this.props.selectedDayContent.length)
                   {
                     this.props.selectChapterOfDayPlan(this.props.selectedChapterIndex + 1 )
                     const splitted = this.props.selectedDayContent[this.props.selectedChapterIndex + 1 ].split(" ");
                     let isBookStartWithString =  isNaN(parseInt(splitted[0]));
                     const bookName = isBookStartWithString ? splitted[0] :
                     (splitted[0] + " " + splitted[1]) 
                      const chapterNumber = _.last(splitted);
                      this.isBookMarkedChapter(
                        bookName,
                        chapterNumber
                      );
                    this.props.selectChapter(chapterNumber)
                     this.props.loadChapterContent(
                      bookName,
                      chapterNumber
                    );
                    this.props.selectBook({
                      "bookName": bookName,
                     })
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
                

                return (
                  <Text
                    style={{ fontSize: this.props.fontSizeOfText }}
                    onPress={async () => {
                      if (this.state.selectedVerses.indexOf(verse.num) == -1) {
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

