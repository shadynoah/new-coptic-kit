import { combineReducers } from "redux";


import { contentReducer } from "./content/reducer";

export const reducer = combineReducers({
    content: contentReducer
});
