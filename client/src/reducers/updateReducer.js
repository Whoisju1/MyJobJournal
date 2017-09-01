import {UPDATE_DATA} from '../actions/types';

export default (state=null, actions) => {
    switch (actions.types) {
        case UPDATE_DATA:
            
        return actions.payload;
        default:
            return state;
    }
};