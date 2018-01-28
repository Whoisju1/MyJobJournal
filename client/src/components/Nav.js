import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as actions from '../actions';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favQuantity: 0,
      entryQuantity: 0,
    };
  }

  componentDidMount() {
    if (!this.state) this.props.fetchData();
  }


  componentWillReceiveProps(nextProps) {
    if (this.props.data !== nextProps.data) {
      this.setState({ entryQuantity: nextProps.data.applications.length });
      const favQuantity = nextProps.data.applications.filter(item => item.favorite).length;
      this.setState({ favQuantity });
    }

    if (this.props.auth !== nextProps.auth) {
      this.setState({ entryQuantity: nextProps.auth.applications.length });
      const favQuantity = nextProps.auth.applications.filter(item => item.favorite).length;
      this.setState({ favQuantity });
    }

    if (this.props.deleted !== nextProps.deleted) {
      this.setState({ entryQuantity: nextProps.deleted.applications.length });
      const favQuantity = nextProps.deleted.applications.filter(item => item.favorite).length;
      this.setState({ favQuantity });
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state !== nextState;
  }

  render() {
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
        color: ${primaryColor};
        text-decoration: none;
        box-sizing: content-box;
        font-weight: bold;
        border-bottom: 5px solid transparent;
      }
      &:hover {
        color: ${primaryColor};
        border-bottom: 5px solid lightgray;
      }
      &:nth-of-type(1) {
        border-right: .5px solid lightgray;
      }
      &.active {
        border-bottom: 5px solid ${primaryColor};
      }
    `;

    const Quantity = styled.span`
      background-color: lightgray;
      display: inline-block;
      width: 1.2em;
      border-radius: 3px;
      text-align: center;
      color: white;
    `;

    return (
      <React.Fragment>
        {
          this.props.auth &&
          <NavBar>
            <NavigationLink to="/applications">
            Dashboard <Quantity>{this.state.entryQuantity}</Quantity>
            </NavigationLink>
            <NavigationLink to="/favorites">
            Favorites <Quantity>{this.state.favQuantity}</Quantity>
            </NavigationLink>
          </NavBar>
      }
      </React.Fragment>
    );
  }
}

Nav.defaultProps = {
  data: null,
  auth: null,
  deleted: null,
};

Nav.propTypes = {
  data: PropTypes.object,
  auth: PropTypes.object,
  deleted: PropTypes.object,
};

const mapStateToProps = ({ data, auth, deleted }) => ({ data, auth, deleted });

export default connect(mapStateToProps, actions)(Nav);
