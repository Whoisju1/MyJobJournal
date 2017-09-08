import React from 'react';

export const AuthButtons = props => {
	return (
		<div className="login-container">
			<div className="login-heading">Log In</div>
			<a href="/auth/google" className="sign-up-btn-container" className='login-btn'>
				<button>Sign Up With Google</button>
			</a>
			<a href="#" className='sign-up-btn-container' className='login-btn'>
				<button>Sign Up with Linked In</button>
			</a>
		</div>
	);
};

export default AuthButtons;
