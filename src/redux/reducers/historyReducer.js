import { ADD_HISTORY } from "../actions/actionTypes";

const intialHistory = [];

export const historyReducer = (state = intialHistory, action) => {
    switch (action.type) {
        case ADD_HISTORY:
            if (state.indexOf(action.payload) > -1) {
                return state;
            }
            return [...state, action.payload];
        default:
            return state;
    }
}