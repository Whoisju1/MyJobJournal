import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export default ComposedComponent => {
    class Authentication extends Component {

        static contextTypes = {
            router: PropTypes.object
        }

        // componentDidMount() {
        //     const {auth} = this.props;
        //     if (!auth) this.context.router.history.push('/');
        // }

        componentWillUpdate(nextProps) {
            if (!nextProps.auth) return this.context.router.history.push('/');
        }

        componentWillReceiveProps(nextProps) {
            if (!nextProps.auth) return this.context.router.history.push('/');
        }
        render() {
            return <ComposedComponent {...this.props} />;
        }
    }
    const mapStateToProps = ({auth}) => {
        return {
            auth
        };
    };
    return connect(mapStateToProps)(Authentication);
};
