import React from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import { Redirect } from 'react-router';
import {withRouter} from 'react-router-dom';

class SearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = { 
            searchTerm: '',
         };
		this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		let searchTerm = e.target.value;
        this.setState({ searchTerm: searchTerm });
        
        if(!searchTerm) return;
        
		this.props.dataSearch(searchTerm);
	}
    
    handleSubmit(e) {
        e.preventDefault();
        this.props.history.push(`/search/${this.state.searchTerm}`);
    }

	render() {
		return (
			<div className="search-bar-container" style={{ color: 'black' }}>
				<form className="search-form" onSubmit={this.handleSubmit}>
					<input type="text" className="search-bar" onChange={this.handleChange} placeholder='Search through your applications...'/>
					<input type="submit" className="search-btn" value='Search'/>
				</form>
			</div>
		);
	}
}

const mapStateToProps = ({ search }) => {
	return {
		search
	};
};

export default connect(mapStateToProps, actions)(withRouter(SearchBar));
