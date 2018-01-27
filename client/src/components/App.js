import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled, { injectGlobal } from 'styled-components';
import * as actions from '../actions';

// import components
import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import AppForm from './AppForm';
import ComingSoon from './ComingSoon';
import SingleItem from './SingleItem';
import NotFound from './NotFound';
// import Nav from './Nav';
import Favorites from './Favorites';
// import AccountInfo from './AccountInfo';
import requireAuth from './HOC/requireAuth';
// import searchResults from './searchResults';

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Abel');
  :root {
    font: inherit;
  }
  html body {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      border: 0;
      font-family: 'Abel', sans-serif;
  }
`;

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
    this.props.fetchData();
  }

  render() {
    const MainContainer = styled.div`
      display: grid;
      height: 100vh;
      min-width: 100%;
      grid-template-rows: minmax(60px,70px) auto;
      background: #FFFBFF;
    `;
    return (
      <BrowserRouter>
        <MainContainer>
          <Header />
          {/* <Nav /> */}
          <Switch>
            <Route path="/add" component={requireAuth(AppForm)} />
            <Route exact path="/" component={Landing} />
            <Route exact path="/applications" component={requireAuth(Dashboard)} />
            <Route exact path="/application/:id" component={requireAuth(SingleItem)} />
            <Route exact path="/edit/:id" component={requireAuth(AppForm)} />
            {/* <Route path='/search/:searchTerm' component={requireAuth(searchResults)}/> */}
            {/* <Route path="/account" component={requireAuth(AccountInfo)} /> */}
            <Route path="/account" component={requireAuth(ComingSoon)} />
            <Route path="/favorites" component={requireAuth(Favorites)} />
            {/* <Route path="/favorites" component={requireAuth(ComingSoon)} /> */}
            <Route path="*" component={NotFound} />
          </Switch>
        </MainContainer>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  fetchUser: PropTypes.func.isRequired,
  fetchData: PropTypes.func.isRequired,
};

export default connect(null, actions)(App);
