import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import storeReducer from './storeReducer';
import deleteReducer from './deleteReducer';
import updateReducer from './updateReducer';
import fetchReducer from './fetchReducer';
import fetchApplication from './fetchApplication';
import searchReducer from './searchReducer';
import toggleSortReducer from './toggleSortReducer';
import headerDropDownReducer from './headerDropDownReducer';

export default combineReducers({
  auth: authReducer,
  added: storeReducer,
  deleted: deleteReducer,
  update: updateReducer,
  data: fetchReducer,
  application: fetchApplication,
  isSortOpen: toggleSortReducer,
  isHeaderOpen: headerDropDownReducer,
  search: searchReducer,
  form: formReducer,
});
