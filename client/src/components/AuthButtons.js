import React from 'react';

export const AuthButtons = props => {
	return (
		<div className="login-container">
			<div className="login-heading">Log In</div>
			<a href="/auth/google" className="sign-up-btn-container login-btn">
				<button>Sign Up With Google</button>
			</a>
		</div>
	);
};

export default AuthButtons;
