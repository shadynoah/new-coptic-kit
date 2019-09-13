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
var data = require("../../data/content.json");
var dataAr = require("../../data/content-ar.json");
import { AsyncStorage } from "react-native";
import { SQLite } from 'expo-sqlite';

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
    let contentOfSelectedChapter = [];
    let index = 1;
    let indexar = 1;

    if (isArabic || isArabicBookMark == "true") {
      _.map(dataAr.books, book => {
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
      _.map(data.books, book => {
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

export async function getVerse(bookMarkedVerses) {
  return async (dispatch, getState) => {
    var BookMarkedVersesRes;

    var splited = "Genesis 2".split(" ");
    // console.log("====splted from action creator====", splited)
    BookMarkedVersesRes = [];
    var valueOfKey = await AsyncStorage.getItem("BookMark Genesis 2");
    // console.log("======bookMarkedVerse====", bookMarkedVerse)
    //  console.log("=====valueOfKey action creator =====", valueOfKey)
    _.map(data.books, book => {
      // console.log("=====book.name===", book.name)
      // console.log("=======splited[0]====", splited[0])
      if (book.name == splited[0]) {
        //  console.log("====found book ")
        _.map(book.chapters, async chapter => {
          //   console.log("====found chapter ", chapter.num)

          if (chapter.num == +splited[1]) {
            //  console.log("sucsss chapter")
            var valueOfKeyArr = convertStringToArray(valueOfKey);
            //  console.log("======valueOfKeyArr====", valueOfKeyArr)
            BookMarkedVersesRes = _.map(chapter.verses, verse => {
              if (_.includes(valueOfKeyArr, +verse.num)) {
                //    console.log("====vers.num====", verse.num)

                if (verse) return verse.text;
                // return {
                //     key: verse.num,
                //     text: verse.text,
                //     num: verse.num
                // }
              }
            });
            //   console.log("=======BookMarkedVersesRes======", BookMarkedVersesRes)
            dispatch({
              type: types.LOAD_BOOKMARKED_VERSES,
              payload: BookMarkedVersesRes.filter(e => e != undefined)
            });
          }
        });
      }
    });

    // dispatch({
    //     type: types.LOAD_BOOKMARKED_VERSES,
    //     payload: BookMarkedVersesRes.filter(e => e != undefined)

    // })
  };
}
export function loadNotes() {
  var arrayOfNotes = [];
  db.transaction(tx => {
    tx.executeSql("select * from items", [], (_, { rows }) => {
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
  bookName,
  numberOfSelectedChapter,
  isArabic
) {
  try {
    return async dispatch => {
      await executeSql(
        "INSERT into bookmark (bookName , chapterNumber , isArabic) values (?,?, ?)",
        [bookName, numberOfSelectedChapter, isArabic]
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
        "delete from bookmark where bookName = (?) and chapterNumber = (?)",
        [bookName, numberOfSelectedChapter]
      ).then(() => {
        console.log("delete bookmark succeeded");
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
        "INSERT into items (title , versesText,bookName , chapterNumber , isArabic) values (?, ?,? ,? ,?)",
        [title, text, bookName, numberOfSelectedChapter, isArabic]
      ).then(() => {
        console.log("insert note succeeded");
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
