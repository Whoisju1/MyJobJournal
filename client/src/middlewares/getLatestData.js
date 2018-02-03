import axios from 'axios';
import {
  STORE_DATA,
  DELETE_DATA,
  UPDATE_DATA,
  FETCH_DATA,
} from './../actions/types';
// import { fetchData } from '../actions/index';

export default ({ dispatch }) => next => (action) => {
  if (action.type === STORE_DATA || action.type === DELETE_DATA || action.type === UPDATE_DATA) {
    // pass on action of dispatched action
    next(action);

    // fetch the latest data
    return (async () => {
      const response = await axios.get('/api/find/');
      // const { applications } = response.data;
      dispatch({
        type: FETCH_DATA,
        payload: response.data,
      });
    })();
  }

  next(action);
};
