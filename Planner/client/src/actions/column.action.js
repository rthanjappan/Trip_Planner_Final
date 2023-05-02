import { START_LOADING, END_LOADING, FETCH_ALLCOLUMN, CREATECOLUMN, UPDATECOLUMN, DELETECOLUMN} from '../constants/actionTypes.constants.js';
import * as api from '../api/index.api.js';

export const getColumn = () => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.fetchColumn();

        dispatch({ type: FETCH_ALLCOLUMN, payload: data });
        dispatch({ type: END_LOADING });
    } catch (err) {
        console.log(err);
    }
}

export const createColumn = (column) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.createColumn(column);

        dispatch({ type: CREATECOLUMN, payload: data });
    } catch (err) {
        console.log(err);
    }
}

export const updateColumn = (id, column) => async (dispatch) => {
    try {
        const { data } = await api.updateColumn(id, column);

        dispatch({ type: UPDATECOLUMN, payload: data });
    } catch (err) {
        console.log(err);
    }
}

export const deleteColumn = (id) => async (dispatch) => {
    try {
        await api.deleteColumn(id);

        dispatch({ type: DELETECOLUMN, payload: id });
    } catch (err) {
        console.log(err);
    }
}
