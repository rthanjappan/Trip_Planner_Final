import { FETCH_ALLDETAILS, CREATEDETAILS, UPDATEDETAILS, DELETEDETAILS, START_LOADING, END_LOADING } from "../constants/actionTypes.constants";

export default (state = {isLoading: true, details: [] }, action) => {
    switch (action.type) {
        case START_LOADING:
            return {...state, isLoading: true};
        case END_LOADING:
            return {...state, isLoading: false};
        case FETCH_ALLDETAILS: 
            return {...state, details: action.payload };
        case CREATEDETAILS:
            return { ...state, details: [ ...state, action.payload] };
        case UPDATEDETAILS:
            return {...state, details: state.details.map((detail) => detail._id === action.payload._id ? action.payload : detail)}; 
        case DELETEDETAILS:
            return { ...state, details: state.filter((detail) => detail._id !== action.payload) };
        default:
            return state;
    }
}