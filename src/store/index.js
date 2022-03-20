import {applyMiddleware, createStore, combineReducers} from "redux";
import {isinReducer} from "./isins/reducer";
import {timeReducer} from "./filters/reducer";
import thunk from "redux-thunk";

const RootReducer = combineReducers({isin: isinReducer, filter: timeReducer})

export const store = createStore(RootReducer, applyMiddleware(thunk));
