import axios from 'axios';
import { FETCH_USER, STORE_DATA, DELETE_DATA, UPDATE_DATA, FETCH_DATA, FETCH_APPLICATION } from './types';

export const fetchUser = () => async dispatch => {
	const res = await axios.get('/api/current_user');

	dispatch({ type: FETCH_USER, payload: res.data });
};

export const storeData = submittedData => async dispatch => {
	const res = await axios.post('/api/add', submittedData);

	dispatch({ type: STORE_DATA, payload: res.data });
};

export const deleteData = entryID => async dispatch => {
	console.log('delete action');
	const res = await axios.delete(`/api/delete/id/${entryID}`);
	dispatch({ type: DELETE_DATA, payload: res.data });
};

export const updateData = (entryID, body) => async dispatch => {
	const res = await axios.patch(`/api/edit/id/${entryID}`, body);

	dispatch({ type: UPDATE_DATA, payload: res.data });
};

export const fetchData = userID => async dispatch => {
	const res = await axios.get(`/api/find/`);

	dispatch({ type: FETCH_DATA, payload: res.data });
};

export const fetchApplication = id => async dispatch => {
	const res = await axios.get(`/api/find-one/id/${id}`);

	dispatch({ type: FETCH_APPLICATION, payload: res.data });
};
