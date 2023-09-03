import { createStore, combineReducers } from "redux";
import { fetchReducer } from "./reducers/fetchReducer";
import { historyReducer } from "./reducers/historyReducer";
import thunk from "redux-thunk";
import { applyMiddleware } from "redux";

export const rootReducer = combineReducers({
    fetchReducer: fetchReducer,
    historyReducer: historyReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))