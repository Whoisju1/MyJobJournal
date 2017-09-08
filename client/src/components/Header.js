import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
	constructor(props) {
		super(props);
		this.renderUser = this.renderUser.bind(this);
	}

	renderUser() {
		switch (this.props.auth) {
			case null:
				return;
			case false:
				return <a href="/auth/google">Login With Google</a>;
			default:
				return <div className="profile-area" key="2">
						<img src={this.props.auth.image} className="profile-img" alt="profile" />
						<p className="user-name">
							{this.props.auth.firstName}
						</p>
					</div>
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
