import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Nav from './Nav';
import UserLogin from './UserLogin';
import UserInfoDropDown from './UserInfoDropDown';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: 'hidden',
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.state.isVisible === 'visible'
      ? this.setState({ isVisible: 'hidden' })
      : this.setState({ isVisible: 'visible' });
  }

  render() {
    const HeaderElement = styled.header`
      display: grid;
      grid-auto-flow: column;
      box-shadow: 1px 4px 15px rgba(0, 0, 0, .3);
      justify-content: space-between;
      grid-template-columns: 1fr 2fr 1fr;
      @media screen and (max-width: 642px) {
        grid-template-columns: min-content 2fr 1fr;
      }
      z-index: 1;
      grid-row: 1/2;
      grid-gap: 10px;
      grid-auto-rows: 100%;
      max-width: 100%;
    `;

    const Logo = styled(Link).attrs({
      to: '/',
    })`
      &,
      &:link,
      &:visited {
        display: grid;
        justify-content: center;
        align-items: center;  
        text-decoration: none;
        font-family: Courier New, Courier, monospace;
        font-size: 210%;
        grid-column: 2/3;
        text-shadow: 1px 5px 20px rgba(0, 0, 0, .2);
        text-align: center;
        grid-column: 1/2;
        outline: none;
        color: #27ae60;
        font-weight: 800;
        @media screen and (max-width: 956px) {
          font-size: 3vw;
        }
        @media screen and (max-width: 642px) {
          font-size: 4vw;
        } 
      }
      &:hover {
        outline: none;
      }
    `;

    return (
      <HeaderElement auth={this.props.auth}>
        <Logo>My JobJournal</Logo>
        <Nav />
        <UserInfoDropDown heading={<UserLogin />}>
          <a href="/api/logout">
            <div className="account-menu-item">Logout</div>
          </a>
          <Link to="/account">
            <div className="account-menu-item">Account Information</div>
          </Link>
        </UserInfoDropDown>
      </HeaderElement>
    );
  }
}
const mapStateToProps = ({ auth }) => ({
  auth,
});

Header.propTypes = {
  auth: PropTypes.object,
};

export default withRouter(connect(mapStateToProps)(Header));
