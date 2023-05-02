import { START_LOADING, END_LOADING, FETCH_ALLCOLUMN, CREATECOLUMN, UPDATECOLUMN, DELETECOLUMN} from '../constants/actionTypes.constants.js';

export default (state = { isLoading: true, columns: [] }, action) => {
    switch (action.type) {
        case START_LOADING:
            return { ...state, isLoading: true };
        case END_LOADING:
            return { ...state, isLoading: false };
        case FETCH_ALLCOLUMN:
            return { ...state, columns: action.payload };
        case CREATECOLUMN:
            return { ...state, columns: [ ...state, action.payload] };
        case UPDATECOLUMN:
            return {...state, columns: state.columns.map((column) => column._id === action.payload._id ? action.payload : column)}; 
        case DELETECOLUMN:
            return { ...state, columns: state.filter((column) => column._id !== action.payload) };
        default:
            return state;
    }
}