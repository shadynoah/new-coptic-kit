

import * as FileSystem from "expo-file-system";
import { SQLite } from "expo-sqlite";
import _ from "lodash";


import { AsyncStorage } from "react-native";
import * as types from "./actions";
import { IBOOK } from "./state";

const db = SQLite.openDatabase("db.db");
export function toggleLoading() {
  return { type: types.CONTENT_LOADING };
}
export function selectBook(book: IBOOK) {
  return {
    type: types.SELECT_BOOK,
    payload: book
  };
}
export function clearSelectedBook() {
  return {
    type: types.CLEAR_SELECTED_BOOK
  };
}
export function selectChapter(chapterNumber) {
  return {
    type: types.SELECT_CHAPTER,
    payload: chapterNumber
  };
}
export async function loadChapterContent(
  bookName,
  chapterNumber,
  isArabicBookMark = false
) {
  return async (dispatch, getState) => {
    var isArabic = getState().content.isArabic;
    let englishContent;
    let arabicContent;
    let contentOfSelectedChapter = [];
    if (isArabic || isArabicBookMark == "true") {
      arabicContent = JSON.parse(
        await FileSystem.readAsStringAsync(
          await AsyncStorage.getItem("ArabicUpdated1")
        )
      );
      _.map(arabicContent.books, book => {
        if (book.name == bookName) {
          _.map(book.chapters, chapter => {
            if (chapter.num == chapterNumber) {
              contentOfSelectedChapter = _.map(chapter.verses, verse => {
                
                return {
                  key: verse.num,
                  text: verse.text,
                  num: verse.num
                };
              });
            }
          });
        }
      });
    } else {
      // console.time("timer")
      // let start = Date.now();
      // let start = Date.now();
            englishContent = JSON.parse(
        await FileSystem.readAsStringAsync(
          await AsyncStorage.getItem(bookName)
        )
      );
      // let timer = Date.now() - start
      // console.log("timer is" , timer)
      // // console.timeEnd("Time this");
      // // console.log("bookname" , bookName)
      //  start = Date.now();
      // let arr  = englishContent.books;
      // for (let index = 0; index < arr.length; index++) {
      //   if (arr[index].name == bookName) {
      //     contentOfSelectedChapter = arr[index].chapters[chapterNumber].verses
      //    break;
      //   }
      // }
      //  timer = Date.now() - start
      // console.log("timer is" , timer)
      // _.map(englishContent.books, book => {
      //   console.log("x")
      // // console.log("englishContent.books" , englishContent.books)
      //   if (book.name == bookName) {
      //     contentOfSelectedChapter = book.chapters[chapterNumber].verses
      //     return
      //   }
      // });
      // console.log("test is" , englishContent.books)
    //  console.log("englishContent issss" , englishContent)
      //     _.map(test.chapters, chapter => {
      //       if (chapter.num == chapterNumber) {
      //         contentOfSelectedChapter = _.map(chapter.verses, verse => {
      //           return {
      //             key: verse.num,
      //             text: verse.text,
      //             num: verse.num
      //           };
      //         });
      //       }
      // });
      for (let index = 0; index < englishContent.chapters.length; index++) {
        let chapter = englishContent.chapters[index];
        if (chapter.num == chapterNumber) {
          contentOfSelectedChapter = _.map(chapter.verses, verse => {
            return {
              key: verse.num,
              text: verse.text,
              num: verse.num
            };
          });
         break;
        }
      }
        //  alert(Date.now() - start);
    }

    dispatch({
      type: types.LOAD_CHAPTER_CONTENT,
      payload: {
        contentOfSelectedChapter: contentOfSelectedChapter,
        chapterNumber: chapterNumber,
        bookName: bookName
      }
    });
  };
}
export function toggleLanguage() {
  return {
    type: types.TOGGLE_LANGUAGE_CONTENT
  };
}

export function loadNotes() {
  var arrayOfNotes = [];
  db.transaction(tx => {
    tx.executeSql("select * from Notes", [], (_, { rows }) => {
      arrayOfNotes = rows._array;
    });
  }, null);
  return {
    type: types.LOAD_NOTES,
    payload: arrayOfNotes
  };
}
function convertStringToArray(data) {
  if (typeof data != "string") return data;
  let all = [];
  if (data && data.length > 0) {
    all = _.map(data.split(","), xx => {
      return +xx;
    });
  }
  return all;
}
export function increaseFontSize(fontSize) {
  return {
    type: types.INCREASE_FONT_SIZE
  };
}
export function decreaseFontSize(fontSize) {
  return {
    type: types.DECREASE_FONT_SIZE
  };
}
export function toggleViewNoteModal() {
  return {
    type: types.TOGGLE_VIEW_NOTE
  };
}
export function selectNote(note) {
  return {
    type: types.SELECT_NOTE,
    payload: note
  };
}
export async function insertBookMark(
  selectedBook,
  numberOfSelectedChapter,
  isArabic
) {
  try {
    const { bookName, numberOfChapters } = selectedBook;
    return async dispatch => {
      await executeSql(
        "INSERT into bookmarks (bookName , chapterNumber , isArabic ,numberOfChapters) values (?,?,?, ?)",
        [bookName, numberOfSelectedChapter, isArabic, numberOfChapters]
      ).then(() => {
        dispatch({
          type: types.INSERT_BOOKMARK_SUCCESS
        });
      });
    };
  } catch (e) {
    return {
      type: types.INSERT_BOOKMARK_FAILED
    };
  }
}
export async function deleteBookMark(bookName, numberOfSelectedChapter) {
  try {
    return async dispatch => {
      await executeSql(
        "delete from bookmarks where bookName = (?) and chapterNumber = (?)",
        [bookName, numberOfSelectedChapter]
      ).then(() => {
        dispatch({
          type: types.DELETE_BOOKMARK_SUCESS
        });
      });
    };
  } catch (e) {
    return {
      type: types.DELETE_BOOKMARK_FAILED
    };
  }
}
export async function insertNote(
  title,
  text,
  bookName,
  numberOfSelectedChapter,
  isArabic
) {
  try {
    return async dispatch => {
      await executeSql(
        "INSERT into Notes (title , versesText,bookName , chapterNumber , isArabic) values (?, ?,? ,? ,?)",
        [title, text, bookName, numberOfSelectedChapter, isArabic]
      ).then(() => {
        dispatch({
          type: types.INSERT_NOTE_SUCCESS
        });
      });
    };
  } catch (e) {
    return {
      type: types.INSERT_NOTE_FAILED
    };
  }
}
async function executeSql(sql, params = []) {
  return new Promise((resolve, reject) =>
    db.transaction(tx => {
      tx.executeSql(
        sql,
        params,
        (_, { rows, insertId }) => resolve(rows._array, insertId),
        reject
      );
    })
  );
}

export function toggleIsDownloading() {
  console.log("toggle")
  return {
    type: types.TOGGLE_IS_DOWNLOADING
  };
}
export function updateConnectionStatus(status) {
  return {
    type: types.CONNECTION_STATUS,
    payload: status
  };
}
