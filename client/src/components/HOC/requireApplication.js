import React from 'react';
import * as actions from '../../actions';

export default ComposedComponent => {
	class Application extends React.Component {
		componentWillMount() {
			let id = this.props.match.params.id;
			this.props.fetchApplication(id);
        }
        
        render() {
            return <ComposedComponent {...this.props} />
        }
    }
    return Application;  
};
