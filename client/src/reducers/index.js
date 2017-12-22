import {combineReducers} from 'redux';
import authReducer from './authReducer';
import storeReducer from './storeReducer';
import deleteReducer from './deleteReducer';
import updateReducer from './updateReducer';
import fetchReducer from './fetchReducer';
import fetchApplication from './fetchApplication';
import searchReducer from './searchReducer';

export default combineReducers({
    auth: authReducer,
    added : storeReducer,
    delete : deleteReducer,
    update: updateReducer,
    data: fetchReducer,
    application: fetchApplication,
    search: searchReducer
});