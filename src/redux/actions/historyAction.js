import { ADD_HISTORY } from "./actionTypes";

export const addToHistory = (data) => {
    return {
        type: ADD_HISTORY,
        payload: data
    }
}