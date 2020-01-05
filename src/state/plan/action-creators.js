// @Flow

import * as types from "./actions";

import * as contentActions from "../content/actions";
import NavigatorService from "../../services/navigator";
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


export function loadPlan() {
  // console.log("enter loadPlan");
  let payloadP = require("../../data/plan.json");
  return {
    type: types.LOAD_PLAN,
    payload: payloadP
  }
}
export function selectDayOfPlan(dayNumber){
  return async (dispatch, getState) => {
   const planContent = getState().plan.planContent;
   let content  = planContent.plan[dayNumber].chapters
   let payload = {
     selectedDay:dayNumber , 
     selectedDayContent : content
   }
    dispatch({
      type: types.SELECT_DAY_OF_PLAN,
      payload: payload
    });
  }
}

// export async function loadChapterContent(
//   bookName,
//   chapterNumber,
//   isArabicBookMark = false
// ) {
//   return async (dispatch, getState) => {
//     var isArabic = getState().content.isArabic;
//     let englishContent;
//     let arabicContent;
//     let contentOfSelectedChapter = [];
//     let index = 1;
//     let indexar = 1;

//     if (isArabic || isArabicBookMark == "true") {
//       arabicContent = JSON.parse(
//         await FileSystem.readAsStringAsync(
//           await AsyncStorage.getItem("ArabicUpdated1")
//         )
//       );
//       _.map(arabicContent.books, book => {
//         if (book.name == bookName) {
//           _.map(book.chapters, chapter => {
//             if (chapter.num == chapterNumber) {
//               contentOfSelectedChapter = _.map(chapter.verses, verse => {
//                 // return <Text key={index}> <Text style={{ fontWeight: 'bold' }}>{index++}</Text> {verse.text}</Text>
//                 return {
//                   key: verse.num,
//                   text: verse.text,
//                   num: verse.num
//                 };
//               });
//             }
//           });
//         }
//       });
//     } else {
//       englishContent = JSON.parse(
//         await FileSystem.readAsStringAsync(
//           await AsyncStorage.getItem("English")
//         )
//       );
//       _.map(englishContent.books, book => {
//         if (book.name == bookName) {
//           _.map(book.chapters, chapter => {
//             if (chapter.num == chapterNumber) {
//               contentOfSelectedChapter = _.map(chapter.verses, verse => {
//                 // return <Text key={index}> <Text style={{ fontWeight: 'bold' }}>{index++}</Text> {verse.text}</Text>
//                 return {
//                   key: verse.num,
//                   text: verse.text,
//                   num: verse.num
//                 };
//               });
//             }
//           });
//         }
//       });
//     }

//     dispatch({
//       type: types.LOAD_CHAPTER_CONTENT,
//       payload: {
//         contentOfSelectedChapter: contentOfSelectedChapter,
//         chapterNumber: chapterNumber,
//         bookName: bookName
//       }
//     });
//   };
// }
