

import _ from "lodash";


import { AsyncStorage } from "react-native";
import { arabicCheckedList, ArabicContent, checkedList, content } from '../../constants';
import * as types from "./actions";

export async function loadPlan() {
  let payloadPx =  JSON.parse(await AsyncStorage.getItem("plan"))
  return {
    type: types.LOAD_PLAN_CHAPTERS,
    payload: payloadPx
  }
}
export function selectDayOfPlan(dayNumber , isArabic = false){
  return async (dispatch, getState) => {
    let planContent ;
    if(isArabic)
    planContent =  getState().plan.ArabicPlanContent;
    else
    planContent =  getState().plan.planContent;
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
 let res = await AsyncStorage.getItem("list")
 console.log('load checkedlist is' , res)
  return {
    type: types.LOAD_PLAN_CHECKED_LIST,
    payload: JSON.parse(res) 
  }
}

export async function inializePlan(){
  return async dispatch => {
      await AsyncStorage.setItem("plan" , JSON.stringify(content));
  }
}
export async function inializeCheckedList(){
  return async dispatch => {
      await AsyncStorage.setItem("list" , JSON.stringify(checkedList));
      await AsyncStorage.setItem("arabicList" , JSON.stringify(arabicCheckedList));

  }
}
export async function inializeArabicCheckedList(){
  return async dispatch => {
      await AsyncStorage.setItem("arabicList" , JSON.stringify(arabicCheckedList));
  }
}
export async function saveCheckedListIntoLocalStorage(list , isArabic){
  return async (dispatch, getState) => {
    if(isArabic)
    {
      await AsyncStorage.setItem("arabicList" , JSON.stringify(list));
    }
    else
    {
      await AsyncStorage.setItem("list" , JSON.stringify(list));
    }
}
}
export  function selectChapterOfDayPlan (IndexOfChapter) {
return {
  type: types.SELECT_CHAPTER_OF_DAY_PLAN,
  payload:IndexOfChapter
}
}
export function clearDayContentOfPlan(){
  return {
    type: types.CLEAR_DAY_CONTENT_OF_PLAN
  }
}

export async function inializeArabicPlan(){
  return async () => {
      await AsyncStorage.setItem("ArabicPlan" , JSON.stringify(ArabicContent));
  }
}

export async function loadArabicPlan() {
  let payload =  JSON.parse(await AsyncStorage.getItem("ArabicPlan"))
  return {
    type: types.LOAD_ARABIC_PLAN_CHAPTERS,
    payload: payload
  }
}
export function setCompletedDayPlan(dayNumber){
  return async (dispatch, getState) => {
    let listOfCompletedDaysObj = getState().plan.listOfCompletedDaysObj;
    listOfCompletedDaysObj = {...listOfCompletedDaysObj,[dayNumber]:"true"};
    console.log("before set" , listOfCompletedDaysObj)
    await AsyncStorage.setItem("listOfCompletedDaysObj" , JSON.stringify(listOfCompletedDaysObj));
    dispatch({
      type: types.SET_COMPLETED_DAY_PLAN_FLAG,
      payload:listOfCompletedDaysObj
    })
 }
}
export function loadListOfCompletedDaysOfPlan(){
 return async (dispatch, getState) => {
  let res =  await AsyncStorage.getItem("listOfCompletedDaysObj");
  console.log("res" , res)
   dispatch({
    type: types.LOAD_LIST_OF_COMPLETED_DAYS_PLAN,
    payload: JSON.parse(res)  
   })
  }
}