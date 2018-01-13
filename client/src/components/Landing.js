import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import AuthButtons from './AuthButtons';
import Overview from './Overview';

const Landing = (props) => {
  if (props.auth) props.history.push('/applications');

  const VideoWrapper = styled.div`
    ${'' /* height: calc(100vh - 45px); */}
    height: 100vh;
    display: grid;
    top: 0;
    left: 0;
    overflow: hidden;
  `;

  // const BackDrop = styled.div`
  //   height: 100vh;
  //   display: grid;
  //   position: fixed;
  //   top: 0;
  //   left: 0;
  //   overflow: hidden;
  //   background: rgba(0, 0, 0, .3);
  // `;

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
    <React.Fragment>
      <VideoWrapper>
        <video autoPlay loop>
          <source src={require('./../videos/MP4/In-And-Out.mp4')} />
          <source src={require('./../videos/OGV/In-And-Out.ogv')} />
          <source src={require('./../videos/WEBM/In-And-Out.webm')} />
        </video>
        {renderContent()}
      </VideoWrapper>
      {/* <BackDrop /> */}
    </React.Fragment>
  );
};

const mapStateToProps = ({ auth }) => ({
  auth,
});

export default connect(mapStateToProps)(withRouter(Landing));
