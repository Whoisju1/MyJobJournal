import {combineReducers} from 'redux';
import authReducer from './authReducer';
import storeReducer from './storeReducer';
import deleteReducer from './deleteReducer';
import updateReducer from './updateReducer';
import {reducer as formReducer} from 'redux-form';
import fetchReducer from './fetchReducer';
import fetchApplication from './fetchApplication';

export default combineReducers({
    auth: authReducer,
    added : storeReducer,
    delete : deleteReducer,
    update: updateReducer,
    form: formReducer,
    data: fetchReducer,
    application: fetchApplication
});