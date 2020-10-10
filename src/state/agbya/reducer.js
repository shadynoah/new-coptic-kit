// @Flow
// import * as actions from "./action-creator";
import * as types from "./actions";
import { AgbyaInitialState, AgbyaState } from "./state";

// type Action = actions.L;

export function agbyatReducer(
  state: AgbyaState = AgbyaInitialState,
  action: any
): AgbyaState {
  switch (action.type) {
    case types.SET_PRAYS: {
      return {
        ...state,
        links: action.payload
      };
    }
    case types.LOAD_AGBYA_CHAPTER_CONTENT:{
      console.log("load chapter agbya",action.payload.titleOfPray)
      return {
        ...state,
        contentOfSelectedPray: action.payload.content,
        titleOfPray: action.payload.titleOfPray
      }
    }
    case types.APPEND_PRAY:{
      return {
        ...state,
        contentOfAllPray: action.payload
      }
    }
    default:
      return state;
  }
}
