

import _ from "lodash";
import { AsyncStorage } from "react-native";
import { arabicCheckedList, ArabicContent, checkedList, content } from '../../constants';
import * as planActions from "./actions";
//this function to load the plan content from local storage
export async function loadPlan() {
  let payload = JSON.parse(await AsyncStorage.getItem("plan"))
  return {
    type: planActions.LOAD_PLAN_CHAPTERS,
    payload: payload
  }
}
export async function loadArabicPlan() {
  let payload = JSON.parse(await AsyncStorage.getItem("ArabicPlan"));
  //  console.log("from load arabic plan", payload)
  return {
    type: planActions.LOAD_ARABIC_PLAN_CHAPTERS,
    payload: payload
  }
}

export function selectDayOfPlan(dayNumber , isArabic = false){
  return async (dispatch, getState) => {
    let planContent;
    if(isArabic)
    planContent = getState().plan.ArabicPlanContent;
    else
    planContent = getState().plan.planContent;
   let content  = planContent[dayNumber].dayChapters
   let payload = {
     selectedDay:dayNumber ,
     selectedDayContent : content
   }
    dispatch({
      type: planActions.SELECT_DAY_OF_PLAN,
      payload: payload
    });
  }
}

export async function loadPlanCheckedList (){
 let res = await AsyncStorage.getItem("list")
//  console.log('load checkedlist is' , res)
  return {
    type: planActions.LOAD_PLAN_CHECKED_LIST,
    payload: JSON.parse(res) 
  }
}

export async function inializePlan(){
  return async dispatch => {
    // await AsyncStorage.setItem("plan" , JSON.stringify(content));
      let isPlanContentExistOnLocalStorage = await AsyncStorage.getItem("plan");
      if(!isPlanContentExistOnLocalStorage){
        console.log("will set the plan content in local storage")
        await AsyncStorage.setItem("plan" , JSON.stringify(content));
      }
      else 
      {
        console.log("no need to set the plan content in local storage")
      }
  }
}
export async function inializeEnglishCheckedList(){
  return async dispatch => {
      await AsyncStorage.setItem("list" , JSON.stringify(checkedList));
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
  type: planActions.SELECT_CHAPTER_OF_DAY_PLAN,
  payload:IndexOfChapter
}
}
export function clearDayContentOfPlan(){
  return {
    type: planActions.CLEAR_DAY_CONTENT_OF_PLAN
  }
}

export async function inializeArabicPlan(){
  return async () => {
      // alert("inializeArabicPlan")
      await AsyncStorage.setItem("ArabicPlan" , JSON.stringify(ArabicContent));
  }
}

export function setCompletedDayPlan(dayNumber){
  return async (dispatch, getState) => {
    let listOfCompletedDaysObj = getState().plan.listOfCompletedDaysObj;
    listOfCompletedDaysObj = {...listOfCompletedDaysObj,[dayNumber]:"true"};
    // console.log("before set" , listOfCompletedDaysObj)
    await AsyncStorage.setItem("listOfCompletedDaysObj" , JSON.stringify(listOfCompletedDaysObj));
    dispatch({
      type: planActions.SET_COMPLETED_DAY_PLAN_FLAG,
      payload:listOfCompletedDaysObj
    })
 }
}
export function loadListOfCompletedDaysOfPlan(isArabic){
 return async (dispatch, getState) => {
  let res = isArabic ?  await AsyncStorage.getItem("arabicListOfCompletedDaysObj") :  await AsyncStorage.getItem("listOfCompletedDaysObj")
   if(isArabic){
    res = await AsyncStorage.getItem("arabicListOfCompletedDaysObj");
    dispatch({
      type: planActions.LOAD_ARABIC_LIST_COMPLETED_DAYS_PLAN,
      payload: JSON.parse(res) || {}
     })
   }
   else{
     res =   await AsyncStorage.getItem("listOfCompletedDaysObj")
    dispatch({
      type: planActions.LOAD_LIST_OF_COMPLETED_DAYS_PLAN,
      payload: JSON.parse(res) || {}
     })
   }
   
  }
}
export function setArabicCompletedDayPlan(dayNumber){
  return async (dispatch, getState) => {
    let listOfCompletedDaysObj = getState().plan.arabicListOfCompletedDaysObj;
    listOfCompletedDaysObj = {...listOfCompletedDaysObj,[dayNumber]:"true"};
     console.log("before set setArabicCompletedDayPlan" , listOfCompletedDaysObj)
    await AsyncStorage.setItem("arabicListOfCompletedDaysObj" , JSON.stringify(listOfCompletedDaysObj));
    dispatch({
      type: planActions.SET_ARABIC_COMPLETED_DAY_PLAN_FLAG,
      payload:listOfCompletedDaysObj
    })
 }
}