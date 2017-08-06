import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';	
import * as actions from '../actions';
import {connect} from 'react-redux';

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
					<div style={{textAlign:'center', margin: '10% auto'}}>
					<Header />
						Welcome to JobNotes <br/><br/>
						<a href="/api/current_user">Go to user Info</a> <br/>
						<a href="/api/logout">Logout User</a>  <br/>
						<a href="/auth/google">Sign in with Google</a>  <br/>
					</div>
				</BrowserRouter>
			</div>
		);
	}
}

export default connect(null, actions)(App);
