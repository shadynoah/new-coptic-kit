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
    case types.LOAD_PLAN: {
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
    default:
      return state;
  }
}
