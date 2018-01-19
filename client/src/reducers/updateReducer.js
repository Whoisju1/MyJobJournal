import { UPDATE_DATA } from '../actions/types';

export default (state = null, action) => {
  switch (action.type) {
    case UPDATE_DATA:
      return action.payload;
    default:
      return state;
  }
};
