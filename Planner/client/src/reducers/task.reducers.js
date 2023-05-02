import { START_LOADING, END_LOADING, FETCH_ALLTASK, CREATETASK, UPDATETASK, DELETETASK} from '../constants/actionTypes.constants.js';

export default (state = { isLoading: true, tasks: [] }, action) => {
    switch (action.type) {
        case START_LOADING:
            return { ...state, isLoading: true };
        case END_LOADING:
            return { ...state, isLoading: false };
        case FETCH_ALLTASK:
            return { ...state, tasks: action.payload };
        case CREATETASK:
            return { ...state, tasks: [ ...state, action.payload] };
        case UPDATETASK:
            return {...state, tasks: state.tasks.map((task) => task._id === action.payload._id ? action.payload : task)}; 
        case DELETETASK:
            return { ...state, tasks: state.filter((task) => task._id !== action.payload) };
        default:
            return state;
    }
}