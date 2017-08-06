import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const Nav = props => {
	return (
		<nav>
			<ul className='nav-unordered-list'>
				<li>
					<Link to="/applications" className="nav-link">
						Dashboard
					</Link>
				</li>
				<li>
					<Link to="/" className="nav-link">
						Landing Page
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
