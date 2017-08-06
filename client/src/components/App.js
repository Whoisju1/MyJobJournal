import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import * as actions from '../actions';
import {connect} from 'react-redux';

// import components
import Header from './Header';	
import Landing from './Landing';
import Dashboard from './Dashboard';

class App extends React.Component {

	componentDidMount () {
		this.props.fetchUser();
	}
	
	
	constructor(props) {
		super(props);
		this.state = { someKey: 'someValue' };
	}

	render() {
		return (
			<div className="container">
				<BrowserRouter>
					<div className='main-container'>
					<Header />
					<Route exact path='/' component={Landing}/>
					<Route path='/applications' component={Dashboard}/>
					</div>
				</BrowserRouter>
			</div>
		);
	}
}

export default connect(null, actions)(App);

					// <a href="/api/current_user">Go to user Info</a> <br/>
					// <a href="/api/logout">Logout User</a>  <br/>