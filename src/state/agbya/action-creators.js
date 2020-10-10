

import * as SQLite from 'expo-sqlite';
import * as types from "./actions";
import * as FileSystem from "expo-file-system";
import { AsyncStorage } from "react-native";
import * as AgbyaActions from "./actions";
import _ from 'lodash';
import { bookNamesDictionary } from '../../constants'
import { Helpers } from './../../services/utilities/helpers';

const db = SQLite.openDatabase("db.db");
export function setPrays(prays) {
  return {
    type: types.SET_PRAYS,
    payload: prays
  };
}
export async  function loadPray(prayName){
  return async (dispatch, getState) => {
    // alert("loadPray")
    // console.log("prayName prayname" ,prayName)
  let arabicContent = JSON.parse(
    await FileSystem.readAsStringAsync(
      await AsyncStorage.getItem(prayName)
    )
  )
//  console.log("arabic content agbyaaa", arabicContent.text)
  dispatch({
    type: AgbyaActions.LOAD_AGBYA_CHAPTER_CONTENT,
    payload: {
      titleOfPray: prayName,
      content: arabicContent.text
    }
  })
    }
}

export async function appendPray (prayName){
//  return async (dispatch ) => {
//   alert("pray append " + prayName)
//   let arabicContent = JSON.parse(
//     await FileSystem.readAsStringAsync(
//       await AsyncStorage.getItem(prayName)
//     )
//   )
//   // let payload={};
//   // payload.name = prayName;
//   // payload.content = arabicContent;
//   // console.log("payloard from append is" , payload)
//   dispatch({
//     type: AgbyaActions.APPEND_PRAY,
//     payload: prayName
//   })
//  }
}

export async function loadAbyaPart(
  bookName,
  chapterNumber,
) {
  console.log("loadAbyaPart" ,bookName )
  return async (dispatch, getState) => {
    var isArabic = getState().content.isArabic;
    let englishContent;
    let arabicContent;
    let contentOfSelectedChapter = [];
    if (isArabic || isArabicBookMark == "true") {
      //  alert("bookName before" + bookName)
      // bookName = _.invert(bookNamesDictionary)[bookName]
      if(!await AsyncStorage.getItem(bookName))
      {
       bookName =  bookNamesDictionary[bookName]
      //  alert("bookName"+bookName)
      }
      arabicContent = JSON.parse(
        await FileSystem.readAsStringAsync(
          await AsyncStorage.getItem(bookName)
        )
      )
      for (let index = 0; index < arabicContent.chapters.length; index++) {
        let chapter = arabicContent.chapters[index];
        if (chapter.num == chapterNumber) {
          // alert("got it")
          contentOfSelectedChapter = _.map(chapter.verses, verse => {
            return verse.text;
          });
         break;
        }
      }
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
    let x  = bookNamesDictionary[bookName]
    dispatch({
      type: types.LOAD_AGBYA_CHAPTER_CONTENT,
      payload:  {
        titleOfPray: `${x} ${Helpers.parseToArabic(chapterNumber)}`,
        content: contentOfSelectedChapter
      }  
    });
  };
}