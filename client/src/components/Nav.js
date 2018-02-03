import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faListUl, faStar } from '@fortawesome/fontawesome-free-solid';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as actions from '../actions';

const Nav = ({ data, auth }) => {
  const primaryColor = '#27ae60';

  const NavBar = styled.nav`
      display: grid;
      grid-auto-flow: column;
      align-items: center;
      border-right: .5px solid lightgray;
      border-left: .5px solid lightgray;
      grid-column: 2/3;
    `;

  const NavigationLink = styled(NavLink).attrs({
    activeClassName: 'active',
  })`
      &,
      &:link,
      &:active {
        display: grid;
        grid-auto-flow: column;
        grid-gap: 15px;   
        text-transform: uppercase;
        height: 100%;
        justify-content: center;
        align-items: center;
        font-size: 150%;
        color: black;
        text-decoration: none;
        box-sizing: content-box;
        font-weight: 500;
        border-bottom: 5px solid transparent;
      }
      &:hover {
        color: ${primaryColor};
        border-bottom: 5px solid lightgray;
      }
      
      &:nth-last-child(2) {
        &:hover {
          &>*:nth-last-child(3) {
            color: #0097e6;
          }
        }
      }

      &:nth-last-child(1) {
        &:hover {
          &>*:nth-last-child(3) {
            color: #ffd32a;
          } 
        }
      }

      &:nth-of-type(1) {
        border-right: .5px solid lightgray;
      }
      &.active {
        border-bottom: 5px solid ${primaryColor};
      }
    `;

  const Quantity = styled.span`
      color: lightgray;
      display: inline-block;
      width: 1.2em;
      border-radius: 3px;
      text-align: center;
    `;

  const DashIcon = styled(FontAwesomeIcon).attrs({
    icon: faListUl,
  })`
      color: gray;
    `;

  const FavIcon = DashIcon.extend.attrs({
    icon: faStar,
  })`
    
    `;

  const LinkLabel = styled.span`
      @media screen and (max-width: 800px) {
        display: none;
      }
    `;

  // const { applications = [] } = data;
  const applicationQuantity = (() => {
    if (data) return data.applications.length;
    return 0;
  })();

  const favoritesQuantity = (() => {
    if (data) return data.applications.filter(({ favorite }) => favorite === true).length;
    return 0;
  })();

  return (
    <React.Fragment>
      {
        auth &&
        <NavBar>
          <NavigationLink to="/applications">
            <DashIcon />
            <LinkLabel>Dashboard</LinkLabel>
            <Quantity>({ applicationQuantity })</Quantity>
          </NavigationLink>
          <NavigationLink to="/favorites">
            <FavIcon />
            <LinkLabel>Favorites</LinkLabel>
            <Quantity>({ favoritesQuantity })</Quantity>
          </NavigationLink>
        </NavBar>
    }
    </React.Fragment>
  );
};

Nav.defaultProps = {
  data: {
    applications: [],
  },
};

Nav.propTypes = {
  data: PropTypes.shape({
    application: PropTypes.array,
    auth: PropTypes.object,
  }),
};

const mapStateToProps = ({ data, auth, deleted }) => ({ data, auth, deleted });

export default connect(mapStateToProps, actions)(Nav);
