

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
  // console.log("prayName", prayName)
  let arabicContent = JSON.parse(
    await FileSystem.readAsStringAsync(
      await AsyncStorage.getItem(prayName)
    )
  )
  dispatch({
    type: AgbyaActions.LOAD_AGBYA_CHAPTER_CONTENT,
    payload: {
      titleOfPray: prayName,
      content: arabicContent
    }
  })
    }
}

export async function loadAbyaPart(
  bookName,
  chapterNumber,
) {
  return async (dispatch, getState) => {
    var isArabic = getState().content.isArabic;
    let englishContent;
    let arabicContent;
    let contentOfSelectedChapter = [];
    if (isArabic || isArabicBookMark == "true") {
      if(!await AsyncStorage.getItem(bookName))
      {
       bookName =  bookNamesDictionary[bookName]
      }
      arabicContent = JSON.parse(
        await FileSystem.readAsStringAsync(
          await AsyncStorage.getItem(bookName)
        )
      )
      for (let index = 0; index < arabicContent.chapters.length; index++) {
        let chapter = arabicContent.chapters[index];
        if (chapter.num == chapterNumber) {
          contentOfSelectedChapter = _.map(chapter.verses, verse => {
            return verse.text;
          });
         break;
        }
      }
    } else {
            englishContent = JSON.parse(
        await FileSystem.readAsStringAsync(
          await AsyncStorage.getItem(bookName)
        )
      );
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