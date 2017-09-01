import React from 'react';

export const Landing = props => {
	return (
		<video className="video-source" autoPlay loop>
			<source className="video-source" src={require('./../videos/MP4/In-And-Out.mp4')} />
		</video>
	);
};

export default Landing;
