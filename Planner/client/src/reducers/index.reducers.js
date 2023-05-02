import { combineReducers } from "redux";

import auth from './auth.reducer.js';
import details from './tripdetails.reducer.js';
// import intData from './intData.reducers.js';

export default combineReducers({ auth, details });