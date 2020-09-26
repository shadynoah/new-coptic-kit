import { combineReducers } from "redux";


import { contentReducer } from "./content/reducer";
import { planReducer } from './plan/reducer';
import { agbyatReducer } from './agbya/reducer';

export const reducer = combineReducers({
    content: contentReducer,
    plan : planReducer,
    agbya: agbyatReducer
});
