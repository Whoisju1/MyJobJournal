import { FETCH_DATA } from '../actions/types';

export default function (state = null, action) {
  switch (action.type) {
    case FETCH_DATA:
      return action.payload;
    default:
      return state;
  }
}
