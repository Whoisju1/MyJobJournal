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
			[
				<Link to="/applications" className='dash-link' key='1'>
					<div className="application-link-wrapper">
						Dashboard
						<div className="category-quantity">{showLength() || 0}</div>
					</div>
				</Link>
				,
				<Link to="/favorites" className='fav-link' key='2'>
					<div className="application-link-wrapper">
						Favorites
						<div className="category-quantity">{showFavLength() || 0}</div>
					</div>
				</Link>
			]
		);
	};

	return (
		<div className='nav-bar'>
			{renderContent()}
		</div>
	)
};

const mapStateToProps = ({ data, auth }) => {
	return { data, auth };
};

export default connect(mapStateToProps, actions)(Nav);
