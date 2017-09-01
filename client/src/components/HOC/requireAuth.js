import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export default ComposedComponent => {
    class Authentication extends Component {

        static contextTypes = {
            router: React.PropTypes.object
        }

        componentWillMount() {
            // if (!this.props.auth) this.context.router.push('/');
        }

        componentWillUpdate(nextProps) {
            // if (!nextProps.auth) return this.context.router.push('/');
        }
        render() {
            console.log('Context: ',this.context);
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
