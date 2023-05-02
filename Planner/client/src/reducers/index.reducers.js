import { combineReducers } from "redux";

import auth from './auth.reducer.js';
import details from './tripdetails.reducer.js';
import column from './column.reducer.js';
import task from './task.reducers.js';
// import intData from './intData.reducers.js';

export default combineReducers({ auth, details, column, task});