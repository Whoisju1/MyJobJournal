import { TOGGLE_HEADER_DROPDOWN } from '../actions/types';

export default function (state = false, action) {
  switch (action.type) {
    case TOGGLE_HEADER_DROPDOWN:
      return action.payload;
    default:
      return state;
  }
}

