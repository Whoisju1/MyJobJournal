import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';

class UserInfoDropDown extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    const Open = keyframes`
      from {
        transform: translateY(-3px);
        opacity: 0;
      }

      to {
        transform: translateY(0);
        opacity: 1;
      }
    `;

    const MainContainer = styled.div`
      display: grid;
      grid-auto-flow: row;
      position: relative;
      grid-column: 3/-1;
    `;

    const Heading = styled.div`
      display: grid;
      justify-content: center;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      grid-gap: 5px;
      cursor: pointer;
      transition: transform .2s ease;
    `;

    const ListContainer = styled.div`
      grid-auto-flow: row;
      display: ${props => (props.isOpen ? 'grid' : 'none')};
      justify-content: center;
      align-item: center;
      background: white;
      position: absolute;
      bottom: -90%;
      right: 7%;
      animation-name: ${Open};
      animation-duration: .2s;
      animation-fill-mode: both;
      animation-direction: forward;
      border: .5px solid #d2dae2;
      box-shadow: 1px 3px 14px rgba(0, 0, 0, .2);
      &>*{
        display: grid;
        text-align: center;
        align-item: center;
        background: white;
        grid-gap: 5px;
        padding: 2%;
        color: #1e272e;
      }
    `;

    return (
      <MainContainer ref={(node) => { this.node = node; }}>
        <Heading onClick={this.handleClick} >
          { this.props.heading }
        </Heading>
        <ListContainer isOpen={this.state.isOpen} onClick={this.handleClick}>
          { this.props.children }
        </ListContainer>
      </MainContainer>
    );
  }
}

UserInfoDropDown.defaultProps = {
  heading: 'User Information',
  children: 'loading...',
};

UserInfoDropDown.propTypes = {
  heading: PropTypes.element,
  children: PropTypes.array,
};

export default UserInfoDropDown;
