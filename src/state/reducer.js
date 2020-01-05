import { combineReducers } from "redux";


import { contentReducer } from "./content/reducer";
import { planReducer } from './plan/reducer';

export const reducer = combineReducers({
    content: contentReducer,
    plan : planReducer
});
