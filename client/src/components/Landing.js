import React from 'react';
import AuthButtons from './AuthButtons';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';

import Overview from './Overview';

export const Landing = props => {

	if (props.auth) props.history.push(`/applications`);
	
	const renderContent = () => {
		switch (props.auth) {
			case null:
				return;
			case false:
				return <AuthButtons />;
			default:
				return <Overview />;
		}
	};

	return (
		<div className='landing-page'>
			<video className="video-source" autoPlay loop>
				<source className="video-source" src={require('./../videos/MP4/In-And-Out.mp4')} />
				<source className="video-source" src={require('./../videos/OGV/In-And-Out.ogv')} />
				<source className="video-source" src={require('./../videos/WEBM/In-And-Out.webm')} />
			</video>
			{renderContent()}
		</div>
	);
};

const mapStateToProps = ({ auth }) => {
	return {
		auth
	};
};

export default connect(mapStateToProps)(withRouter(Landing));
