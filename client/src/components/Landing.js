import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import AuthButtons from './AuthButtons';
import Overview from './Overview';

export const Landing = (props) => {
  const VideoWrapper = styled.div`
    height: calc(100vh - 45px);
    display: grid;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  `;

  if (props.auth) props.history.push('/applications');

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
    <VideoWrapper>
      <video autoPlay loop>
        <source src={require('./../videos/MP4/In-And-Out.mp4')} />
        <source src={require('./../videos/OGV/In-And-Out.ogv')} />
        <source src={require('./../videos/WEBM/In-And-Out.webm')} />
      </video>
      {renderContent()}
    </VideoWrapper>
  );
};

const mapStateToProps = ({ auth }) => ({
  auth,
});

export default connect(mapStateToProps)(withRouter(Landing));
