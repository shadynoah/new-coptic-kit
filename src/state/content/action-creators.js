// @Flow

import * as types from "./actions";

import * as contentActions from "../content/actions";
import NavigatorService from "../../services/navigator";

import { IBOOK } from "./state";
import { State } from "../state";
import _ from "lodash";
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
  FlatList
} from "react-native";
// var data = require("../../data/content.json");
// var dataAr = require("../../data/content-ar.json");
import { AsyncStorage } from "react-native";
import { SQLite } from "expo-sqlite";
import * as FileSystem from "expo-file-system";

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
    let index = 1;
    let indexar = 1;

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
                // return <Text key={index}> <Text style={{ fontWeight: 'bold' }}>{index++}</Text> {verse.text}</Text>
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
      englishContent = JSON.parse(
        await FileSystem.readAsStringAsync(
          await AsyncStorage.getItem("English")
        )
      );
      _.map(englishContent.books, book => {
        if (book.name == bookName) {
          _.map(book.chapters, chapter => {
            if (chapter.num == chapterNumber) {
              contentOfSelectedChapter = _.map(chapter.verses, verse => {
                // return <Text key={index}> <Text style={{ fontWeight: 'bold' }}>{index++}</Text> {verse.text}</Text>
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
      // console.log(JSON.stringify(rows))
      arrayOfNotes = rows._array;
      // console.log("======object from action creator ====", rows._array)
    });
  }, null);
  return {
    type: types.LOAD_NOTES,
    payload: arrayOfNotes
  };
}
function convertStringToArray(data) {
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
    console.log("--from insert bookmark---", selectedBook);
    return async dispatch => {
      await executeSql(
        "INSERT into bookmarks (bookName , chapterNumber , isArabic ,numberOfChapters) values (?,?,?, ?)",
        [bookName, numberOfSelectedChapter, isArabic, numberOfChapters]
      ).then(() => {
        console.log("insert bookmark succeeded");
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
        // console.log("delete bookmark succeeded");
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
        // console.log("insert note succeeded");
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
  return {
    type: types.TOGGLE_IS_DOWNLOADING
  };
}
export function updateConnectionStatus(status) {
  // console.log("status from action creator" , status)
  return {
    type: types.CONNECTION_STATUS,
    payload: status
  };
}
