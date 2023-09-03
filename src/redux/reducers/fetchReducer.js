import { SUCCESS, LOADING, ERROR, HOME_INITIAL } from "../actions/actionTypes";

const intitialState = {
    success: false,
    loading: false,
    error: false,
    data: []
}


export const fetchReducer = (state = intitialState, action) => {

    switch (action.type) {


        case HOME_INITIAL:
            return {
                ...state,
                loading: false,
                success: false,
                error: false
            };

        case LOADING:
            return {
                ...state,
                loading: true,
                success: false,
                error: false
            };

        case SUCCESS:
            return {
                ...state,
                success: true,
                loading: false,
                data: action.payload
            };

        case ERROR:
            return {
                ...state,
                success: false,
                loading: false,
                error: action.payload
            };

        default:
            return state;
    }
}