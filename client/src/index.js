// import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';

// import styles
import './styles/reset.css';
import './styles/index.css';
import './styles/header.css';
import './styles/landing.css';
import './styles/single.css';
import './styles/form.css';
import './styles/dashboard.css';
import './styles/searchItem.css';
import './styles/nav.css';
import './styles/favorites.css';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

//listen to see when state changes
const changeCallback = () => {
	console.log("state has changed: ", store.getState());
};

changeCallback();

// const unsubscribe = store.listen(changeCallback);
 
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.querySelector('#root')
);
