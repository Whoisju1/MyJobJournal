import {FETCH_APPLICATION} from '../actions/types';

export default function (state = null, action) {
    switch (action.type) {
        case FETCH_APPLICATION:
            return action.payload;
        default:
            return state;
    }
};