import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const primaryColor = '#27ae60';

class UserLogin extends React.Component {
  constructor(props) {
    super(props);
    this.renderContent = this.renderContent.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.auth !== nextProps.auth) return true;
  }

  renderContent() {
    const Img = styled.img.attrs({
      alt: 'profile pic',
      src: this.props.auth && this.props.auth.image,
    })`
      border: 2px solid gray;
      border-radius: 100px;
    `;

    const UserName = styled.p`
      font-weight: bold;
    `;

    const LogIn = styled.a.attrs({ href: '/auth/google' })`

    `;

    switch (this.props.auth) {
      case null:
        return;

      case false:
        return <LogIn>Login With Google</LogIn>;

      default:
        return (
          <React.Fragment>
            <UserName>{this.props.auth && this.props.auth.firstName}</UserName>
            <Img />
          </React.Fragment>
        );
    }
  }

  render() {
    const Login = styled.div`
      display: ${props => ((props.auth === null) ? 'none' : 'grid')};
      grid-gap: 10px;
      justify-content: end;
      align-items: center;
      color: ${this.props.auth ? primaryColor : '#FFFFFF'};
      grid-auto-flow: column;
      grid-column: 6/8;
    `;

    return (
      <Login>
        {this.renderContent()}
      </Login>
    );
  }
}

UserLogin.defaultProps = {
  auth: {
    image: 'image',
    firstName: 'First Name',
  },
};

UserLogin.propTypes = {
  auth: PropTypes.shape({
    image: PropTypes.element,
    firstName: PropTypes.string,
  }),
};

const mapStateToProps = ({ auth }) => ({
  auth,
});

export default connect(mapStateToProps)(UserLogin);
