import { SUCCESS, ERROR, LOADING, HOME_INITIAL } from "./actionTypes";

import axios from "axios";

export const homeInitial = () => {
    return {
        type: HOME_INITIAL
    }
}

export const loadingState = () => {
    return {
        type: LOADING
    }
}

export const successState = (data) => {
    return {
        type: SUCCESS,
        payload: data
    }
}

export const errorState = (data) => {
    return {
        type: ERROR,
        payload: data
    }
}

export function fetchData(text) {
    return (dispatch) => {
        async function getData() {
            try {
                dispatch(loadingState())
                const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${text}`)
                dispatch(successState(response.data));
            } catch (errorResponse) {
                dispatch(errorState(errorResponse.response.data))
            }
        }
        getData();
    }
}
