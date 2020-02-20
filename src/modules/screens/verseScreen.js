import Constants from "expo-constants";
import { SQLite } from "expo-sqlite";
import _ from "lodash";
import { Button, Icon, Text } from "native-base";
import React, { Component } from "react";
import { AsyncStorage, ImageBackground, ScrollView, View , TextInput , StyleSheet } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { ModalTypesEnum } from "../../enums";
import { Helpers } from "../../services/utilities/helpers";
import { State } from "../../state";
import { deleteBookMark, insertBookMark, insertNote, loadChapterContent, loadNotes, selectBook, selectChapter, toggleLanguage, toggleLoading } from "../../state/content/action-creators";
import { selectChapterOfDayPlan } from '../../state/plan/action-creators';
import { BaseModal } from "../components/base-modal";
import { MenuOptionList } from "../components/MenuOptionList";
import NavigatorService from "../../services/navigator.js";

const styles = StyleSheet.create({
  textinput: {
      borderBottomColor: 'purple',
      textAlign: 'center',
      borderBottomWidth: 2,
      height: 40,
      marginTop: 20,
  },
  text: {
      textAlign: 'center',
      fontSize: 16,
      margin: 10,
  } 
});

const db = SQLite.openDatabase("db.db");
class verseScreenContainer extends Component {
    datapos = {};
    scrollref = null
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
      isbookmark: false,
      inputvalue:'',
      view2LayoutProps:{}
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
    this.datapos = {}
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
    //  console.log("this proooops" , this.props);
    // console.log("next proooops" , nextProps.selectedBook.bookName);
    const { numberOfSelectedChapter , selectedBook } = this.props;
    if (
      (numberOfSelectedChapter != nextProps.numberOfSelectedChapter) ||
      (selectedBook.bookName !== nextProps.selectedBook.bookName )
    ) {
    setTimeout(() => {
      let y = this.datapos[this.props.navigation.state.params.startVerseNumder];
      y !== undefined && this.scrollref.scrollTo({ y, animated: true });
    }, 1500);
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
    let { selectedBook, numberOfSelectedChapter, isArabic , insertNote } = this.props;
    let title = text.substring(0, 10);
    insertNote(
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
  onLayout(event , num) {
    const {x, y, width} = event.nativeEvent.layout;
    this.datapos[num]=y
  }
  render() {
    let {
      selectedBook,
      numberOfSelectedChapter,
      isArabic,
      deleteBookMark,
      insertBookMark,
      selectedDayContent,
      selectChapterOfDayPlan,
      selectedChapterIndex,
      selectChapter,
      loadChapterContent,
      selectBook,
      contentOfSelectedChapter,
      fontSizeOfText
    } = this.props;
    let {
      isbookmark,
      isVisible,
      selectedVerses,
      highlightedVerses
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
                headerTitle: isArabic ? "مُلاحَظة" : "Note",
                toggleModal: () => this.setState({ isVisible: false }),
                modalText:
                  selectedBook.bookName +
                  numberOfSelectedChapter.toString(),
                hasFirstButton: true,
                hasSecondButton: true,
                secondButtonText: isArabic ? "إلغاء" : "Cancel",
                onPressSecondBtn: () => this.setState({ isVisible: false }),
                firstButtonText: isArabic ? "حفظ" : "Save",
                onPressFirstBtn: this.saveNote,
                modalType: ModalTypesEnum.modalHasTwoButtons,
                isArabic: isArabic
              }}
              isVisible={isVisible}
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
                  this.datapos = {}
                  if(selectedDayContent.length >0)
                  {
                    if(selectedChapterIndex - 1 >= 0)
                    {
                     selectChapterOfDayPlan(selectedChapterIndex - 1 );
                      const splitted = selectedDayContent[selectedChapterIndex - 1 ].split(" ");
                      let isBookStartWithString =  isNaN(parseInt(splitted[0]));
                      const bookName = isBookStartWithString ? splitted[0] :
                      (splitted[0] + " " + splitted[1]) 
                       const chapterNumber = _.last(splitted);
                       this.isBookMarkedChapter(
                        bookName,
                        chapterNumber
                      );
                     selectChapter(chapterNumber)
                       loadChapterContent(
                       bookName,
                       chapterNumber
                     );
                     selectBook({
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
                      // alert("this is first chapter in this day");
                      NavigatorService.navigate("BiblePlanScreen")
                    }
                  }
                  else {
                    if (numberOfSelectedChapter - 1 > 0) {
                      this.isBookMarkedChapter(
                        selectedBook.bookName,
                        numberOfSelectedChapter - 1
                      );
                        loadChapterContent(
                        selectedBook.bookName,
                        numberOfSelectedChapter - 1
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
                  this.datapos = {}
                  if (
                    numberOfSelectedChapter + 1 <=
                    selectedBook.numberOfChapters
                  ) {
                    this.isBookMarkedChapter(
                      selectedBook.bookName,
                      numberOfSelectedChapter + 1
                    );
                    loadChapterContent(
                      selectedBook.bookName,
                      numberOfSelectedChapter + 1
                    );
                  }
                  else {
                   if(selectedChapterIndex + 1 < selectedDayContent.length)
                   {
                     selectChapterOfDayPlan(selectedChapterIndex + 1 )
                     const splitted = selectedDayContent[selectedChapterIndex + 1 ].split(" ");
                     let isBookStartWithString =  isNaN(parseInt(splitted[0]));
                     const bookName = isBookStartWithString ? splitted[0] :
                     (splitted[0] + " " + splitted[1]) 
                      const chapterNumber = _.last(splitted);
                      this.isBookMarkedChapter(
                        bookName,
                        chapterNumber
                      );
                    selectChapter(chapterNumber)
                     loadChapterContent(
                      bookName,
                      chapterNumber
                    );
                    selectBook({
                      "bookName": bookName,
                     })
                   }
                   else {
                    //  alert("this is last chapter in this day");
                    selectChapterOfDayPlan(selectedChapterIndex + 1 )
                     NavigatorService.navigate("BiblePlanScreen")
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
            {isbookmark && (
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
                {selectedBook.bookName}{" "}
                {numberOfSelectedChapter}
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
          {/* <TextInput style={styles.textinput}
                    value={this.state.inputvalue}
                    onChangeText={(text) => {
                        // alert(JSON.stringify(this.datapos))
                        this.setState({inputvalue: text});
                        let y = 288
                        // alert("===y====" + y)
                        // y !== undefined && this.scrollref.scrollTo({ y, animated: true });
                    }}
                /> */}
          <ScrollView 
          ref={(ref) => this.scrollref = ref}
          contentContainerStyle={{ margin: 15, paddingBottom: 30 , lineHeight: 30+fontSizeOfText*.3 }}>
              {_.map(contentOfSelectedChapter, verse => {
                

                return (
                  <Text
                    onLayout={e => this.onLayout(e , verse.num)}
                    style={{ fontSize: fontSizeOfText , lineHeight: 30+fontSizeOfText*.3 , flexWrap:'wrap'  }}
                    // onLayout={e => this.onLayout(e)}
                    onPress={async () => {
                      if (selectedVerses.indexOf(verse.num) == -1) {
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
                        var a = selectedVerses;
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
                        backgroundColor: Helpers.validateVerse(highlightedVerses, selectedVerses,
                           verse.num)
                          .backgroundColor
                      }}
                    >
                      {" "}
                      {Helpers.parseToArabic(
                        indexOfVerse++,
                        isArabic
                      )}{" "}
                    </Text>
                    <Text
                      style={{
                        fontSize: fontSizeOfText,
                        backgroundColor: Helpers.validateVerse(highlightedVerses, selectedVerses,
                           verse.num)
                          .backgroundColor,
                        textDecorationLine: Helpers.validateVerse(highlightedVerses, selectedVerses,
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

