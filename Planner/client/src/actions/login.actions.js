import { AUTH } from '../constants/actionTypes.constants';
import * as api from '../api/index.api';

export const signin = (formData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.signIn(formData);

        dispatch({ type: AUTH, data });

        navigate('/page');
    } catch (err) {
        console.log(err.response.data);
    }
}

export const signup = (formData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.signUp(formData);

        dispatch({ type: AUTH, data });

        navigate('/page');
    } catch (err) {
        console.log(err);
    }
}