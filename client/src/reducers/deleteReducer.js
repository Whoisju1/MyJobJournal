import { DELETE_DATA } from '../actions/types';

export default (state = null, actions) => {
  switch (actions.type) {
    case DELETE_DATA:
      return actions.payload;
    default:
      return state;
  }
};
