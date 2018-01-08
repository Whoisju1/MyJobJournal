import React from 'react';

const AuthButtons = () => (
  <div className="login-container">
    <a href="/auth/google" className="login-heading">Log In With Google</a>
    <a href="/auth/google" className="sign-up-btn-container login-btn">
      <button className="auth-btn">Sign Up With Google</button>
    </a>
  </div>
);

export default AuthButtons;
