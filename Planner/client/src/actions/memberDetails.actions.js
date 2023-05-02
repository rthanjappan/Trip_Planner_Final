import {START_LOADING, END_LOADING, CREATEDETAILS, FETCH_ALLDETAILS, UPDATEDETAILS, DELETEDETAILS } from "../constants/actionTypes.constants";
import * as api from '../api/index.api.js';

export const get_member_Details = () => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.getMemberDetails();

        dispatch({ type: FETCH_ALLDETAILS, payload: data });
        dispatch({ type: END_LOADING });
    } catch (err) {
        console.log(err);
    }
}