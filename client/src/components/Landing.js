import React from 'react';
import AuthButtons from './AuthButtons';
import {connect} from 'react-redux';

import Overview from './Overview';

export const Landing = props => {
	return (
		<div>
			
			{props.auth ? <Overview /> : <AuthButtons /> }
			<video className="video-source" autoPlay loop>
				<source className="video-source" src={require('./../videos/MP4/In-And-Out.mp4')} />
				<source className="video-source" src={require('./../videos/OGV/In-And-Out.ogv')} />
				<source className="video-source" src={require('./../videos/WEBM/In-And-Out.webm')} />
			</video>
		</div>
	);
};

const mapStateToProps = ({auth}) => {
	return {
		auth
	}
}

export default connect(mapStateToProps)(Landing);
