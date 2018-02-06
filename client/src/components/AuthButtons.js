import React from 'react';
import styled from 'styled-components';

const AuthButtons = () => {
  const LoginButton = styled.a.attrs({
    href: '/auth/google',
  })`
    &,
    &:link,
    &:visited {
      color: #27ae60;
      font-weight: bold;  
      font-size: 2em;
      position: fixed;
      top: 40%;
      left: 50%;
      transform: translateY(-50%);
      transform: translateX(-50%);
      border: 4px solid #27ae60;
      padding: 2%;
      transition: all .5s ease;
    }

    &:hover {
      ${'' /* background-color: #27ae60; */}
      color: #ffffff;
      border-color: #ffffff;
      text-decoration: none;
    }
  `;

  // const Overlay = styled.div`
  //   position: fixed;
  //   top: 0;
  //   left: 0;
  //   bottom: 0;
  //   width: 100vw;
  //   height: 100vh;
  //   background-image: linear-gradient(to right, rgba(0, 0, 0, .3), rgba(0, 0, 0, .7));
  //   ${'' /* clip-path: polygon(0% 100%, 90% 100%, 100% 0%) */}
  // `;

  return (
    <React.Fragment>
      {/* <Overlay /> */}
      <LoginButton>Log In / Sign Up With Google</LoginButton>
    </React.Fragment>
  );
};

export default AuthButtons;
