import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

export const Nav = props => {
	const showLength = () => {
		if (props.data) return props.data.applications.length;
	};

	const showFavLength = () => {
		if (props.data) {
			const { applications } = props.data;
			const favorites = applications.filter(item => {
				return item.favorite === true;
			});

			return favorites.length;
		}
	};

	const renderContent = () => {
		if(!props.auth) return;
		return (
			<nav className="nav-bar">
				<Link to="/applications">
					<div className="application-link-wrapper">
						Dashboard
						<div className="category-quanitity">{showLength() || 0}</div>
					</div>
				</Link>
				<Link to="/favorites">
					<div className="application-link-wrapper">
						Favorites
						<div className="category-quanitity">{showFavLength() || 0}</div>
					</div>
				</Link>
			</nav>
		);
	};

	return (
		<div>
			{renderContent()}
		</div>
	)
};

const mapStateToProps = ({ data, auth }) => {
	return { data, auth };
};

export default connect(mapStateToProps, actions)(Nav);
