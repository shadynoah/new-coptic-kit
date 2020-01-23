// @Flow
import { AnyAction } from "redux";
import { PlanInitialState, PlanState } from "./state";
// import * as actions from "./action-creator";
import * as types from "./actions";
import { State } from "react-native-gesture-handler";

// type Action = actions.L;

export function planReducer(
  state: PlanState = PlanInitialState,
  action: any
): PlanState {
  switch (action.type) {
    case types.LOAD_PLAN_CHAPTERS: {
      return {
        ...state,
        planContent : action.payload
      };
    }
    case types.SELECT_DAY_OF_PLAN:{
      return {
        ...state,
        selectedDay : action.payload.selectedDay,
        selectedDayContent: action.payload.selectedDayContent
      };
    }
    case types.MAKE_CHAPETER_CHECKED:{
      return {
        ...state,
        checkedChaptersIndexes: action.payload

      }
    }
    case types.LOAD_PLAN_CHECKED_LIST : {
      return{
        ...state,
        checkedListOfDays: action.payload
      }
    }
    case types.SELECT_CHAPTER_OF_DAY_PLAN :{
      return {
        ...state,
        selectedChapterIndex: action.payload
      }
    }
    case types.CLEAR_DAY_CONTENT_OF_PLAN:{
      return{
        ...state,
        selectedDayContent: []
      }
    }
    case types.LOAD_ARABIC_PLAN_CHAPTERS:{
      return{
        ...state,
        ArabicPlanContent : action.payload
      }
    }
    default:
      return state;
  }
}
