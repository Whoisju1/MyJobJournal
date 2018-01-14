import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import Nav from './Nav';
import UserLogin from './UserLogin';

// import SearchBar from './SearchBar';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: 'hidden',
    };

    this.renderUser = this.renderUser.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.state.isVisible === 'visible'
      ? this.setState({ isVisible: 'hidden' })
      : this.setState({ isVisible: 'visible' });
  }

  renderUser() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <a href="/auth/google" className="header-login">Login With Google</a>;
      default:
        return (
          [
            <div className="profile-area" onClick={this.handleClick}>
              <img src={this.props.auth.image} className="profile-img" alt="profile" />
              <p className="user-name">{this.props.auth.firstName}</p>
              <div className="account-menu-container" style={{ visibility: this.state.isVisible }}>
                <a href="/api/logout">
                  <div className="account-menu-item">Logout</div>
                </a>
                <Link to="/account">
                  <div className="account-menu-item">Account Information</div>
                </Link>
              </div>
            </div>,
          ]
        );
    }
  }

  render() {
    const HeaderElement = styled.header`
      display: grid;
      grid-auto-flow: column;
      box-shadow: 1px 4px 15px rgba(0, 0, 0, .3);
      justify-content: space-between;
      grid-template-columns: 25% 50% repeat(6, 1fr);
      z-index: 1;
      grid-row: 1/2;
      grid-gap: 10px;
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
      }
      &:hover {
        outline: none;
      }
    `;

    return (
      <HeaderElement auth={this.props.auth}>
        <Logo>My JobJournal</Logo>
        <Nav />
        {/* {this.renderUser()} */}
        <UserLogin />
      </HeaderElement>
    );
  }
}
const mapStateToProps = ({ auth }) => ({
  auth,
});

export default withRouter(connect(mapStateToProps)(Header));
