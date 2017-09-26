import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// import SearchBar from './SearchBar';

class Header extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isVisible: 'hidden'
		};

		this.renderUser = this.renderUser.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.state.isVisible === 'visible'
			? this.setState({ isVisible: 'hidden' })
			: this.setState({ isVisible: 'visible' });
	}

	renderUser() {
		switch (this.props.auth) {
			case null:
				return;
			case false:
				return <a href="/auth/google">Login With Google</a>;
			default:
				return (
					[
					// <SearchBar key='1'/>,
					<div className="profile-area" key="2" onClick={this.handleClick}>
						<img src={this.props.auth.image} className="profile-img" alt="profile" />
						<p className="user-name">{this.props.auth.firstName}</p>
						<div className="account-menu-container" style={{ visibility: this.state.isVisible }}>
							<a href="/api/logout">
								<div className="account-menu-item">Logout</div>
							</a>
							<Link to="/account">
								<div className="account-menu-item">Account Information</div>
							</Link>
						</div>
					</div>
					]
				);
		}
	}

	render() {
		return (
			<header className="header">
				<Link to="/" className="logo">
					JobNotes
				</Link>
				{this.renderUser()}
			</header>
		);
	}
}
const mapStateToProps = ({ auth }) => {
	return {
		auth
	};
};

export default connect(mapStateToProps)(Header);
