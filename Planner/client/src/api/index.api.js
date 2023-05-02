import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);
//export const rosesaving = (formData) => API.post('/user/rose_saving', formData);

//export const roseaccessing = (dataTosave) => API.post('/user/roseaccessing',dataTosave);
export const saveMembers = (dataTosave) => API.post('/user/saveMembers',dataTosave);

export const saveTripDetails = (dataTosave) => API.post('/user/saveTripDetails',dataTosave);

export const getGroupMembers = (dataTosave) => API.post('/user/getGroupMembers',dataTosave);




//"index.api.js API.post (/user/roseaccessing) WORKING"


export const getTripDetails = () => API.get('/tripdetails');

export const fetchColumn = () => API.get('/column');
export const createColumn = (newColumn) => API.post('/column', newColumn);
export const updateColumn = (id, updatedColumn) => API.patch(`/column/${id}`, updatedColumn);
export const deleteColumn = (id) => API.delete(`/column/${id}`);