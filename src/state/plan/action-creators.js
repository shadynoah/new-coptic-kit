// @Flow

import { SQLite } from "expo-sqlite";
import _ from "lodash";
// var data = require("../../data/content.json");
// var dataAr = require("../../data/content-ar.json");
import { AsyncStorage } from "react-native";
import * as types from "./actions";
import  { content ,checkedList } from '../../constants'

const db = SQLite.openDatabase("db.db");




export async function loadPlan() {
  // console.log("enter loadPlan");
  // let payloadP = require("../../data/plan.json");
  // console.log("payloadP" ,payloadP)
  // console.log("payloadPx",payloadPx)
  let payloadPx =  JSON.parse(await AsyncStorage.getItem("plan"))
  return {
    type: types.LOAD_PLAN_CHAPTERS,
    payload: payloadPx
  }
}
export function selectDayOfPlan(dayNumber){
  return async (dispatch, getState) => {
    const planContent = getState().plan.planContent;
    // console.log("plancontent from select day of plan" , planContent)
   let content  = planContent[dayNumber].dayChapters
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

export async function makeChapterChecked (indexOfChapter) {
  return async (dispatch, getState) => {
    let checkedChaptersIndexes = getState().plan.checkedChaptersIndexes;
    if(_.indexOf(checkedChaptersIndexes , indexOfChapter) === -1)
    checkedChaptersIndexes.push(indexOfChapter);
    else
    checkedChaptersIndexes= _.filter(checkedChaptersIndexes , f => f !== indexOfChapter)

  dispatch(
    {
      type: types.MAKE_CHAPETER_CHECKED,
      payload: checkedChaptersIndexes
    }
  )
}
}

export async function loadPlanCheckedList (){
 let res = await AsyncStorage.getItem("plan")
//  console.log("from action creator" , res)
  return {
    type: types.LOAD_PLAN_CHECKED_LIST,
    payload:res
  }
}

export async function inializePlan(){
  return async dispatch => {
      await AsyncStorage.setItem("plan" , JSON.stringify(content));
  }
}
export async function initializeCheckedList(){
  return async dispatch => {
    // console.log("list from saveCheckedListIntoLocalStorage " ,list)
    await AsyncStorage.setItem("list" , JSON.stringify(checkedList));
}
}
export async function saveCheckedListIntoLocalStorage(list){
  return async dispatch => {
    // console.log("list from saveCheckedListIntoLocalStorage " ,list)
    await AsyncStorage.setItem("list" , JSON.stringify(list));
}
}