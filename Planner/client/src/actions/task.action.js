import { START_LOADING, END_LOADING, FETCH_ALLTASK, CREATETASK, UPDATETASK, DELETETASK} from '../constants/actionTypes.constants.js';
import * as api from '../api/index.api.js';

export const getTask = () => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.fetchTask();

        dispatch({ type: FETCH_ALLTASK, payload: data });
        dispatch({ type: END_LOADING });
    } catch (err) {
        console.log(err);
    }
}

export const createTask = (task) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.createTask(task);

        dispatch({ type: CREATETASK, payload: data });
    } catch (err) {
        console.log(err);
    }
}

export const updateTask = (id, task) => async (dispatch) => {
    try {
        const { data } = await api.updateTask(id, task);

        dispatch({ type: UPDATETASK, payload: data });
    } catch (err) {
        console.log(err);
    }
}

export const deleteTask = (id) => async (dispatch) => {
    try {
        await api.deleteTask(id);

        dispatch({ type: DELETETASK, payload: id });
    } catch (err) {
        console.log(err);
    }
}
