

import * as SQLite from 'expo-sqlite';
import * as types from "./actions";
import * as FileSystem from "expo-file-system";
import { AsyncStorage } from "react-native";
import * as AgbyaActions from "./actions";


const db = SQLite.openDatabase("db.db");
export function setPrays(prays) {
  return {
    type: types.SET_PRAYS,
    payload: prays
  };
}
export async  function loadPray(prayName){
  return async (dispatch, getState) => {
    alert("loadPray")
    console.log("prayName prayname" ,prayName)
  let arabicContent = JSON.parse(
    await FileSystem.readAsStringAsync(
      await AsyncStorage.getItem(prayName)
    )
  )
  console.log("arabic content agbyaaa", arabicContent)
  dispatch({
    type: AgbyaActions.LOAD_AGBYA_CHAPTER_CONTENT,
    payload: arabicContent
  })
    }
}

