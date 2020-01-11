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
const db = SQLite.openDatabase("db.db");



export function loadPlan() {
  // console.log("enter loadPlan");
  let payloadP = require("../../data/plan.json");
  return {
    type: types.LOAD_PLAN_CHAPTERS,
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
 console.log("from action creator" , res)
  return {
    type: types.LOAD_PLAN_CHECKED_LIST,
    payload:res
  }
}