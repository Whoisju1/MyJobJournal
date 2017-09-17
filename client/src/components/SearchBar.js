import React from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class SearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = { searchTerm: '' };
		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	handleChange(e) {
		let searchTerm = e.target.value;
		this.setState({ searchTerm: searchTerm });

		this.props.dataSearch(searchTerm);
	}

	handleClick(e) {
		e.preventDefault();
	}

	render() {
		return (
			<div className="search-bar-container" style={{ color: 'black' }}>
				<form className="search-form">
					<input type="text" className="search-bar" onChange={this.handleChange} />

					<button type="submit" className="search-btn" onClick={this.handleClick}>
						<Link to={`/search/${this.state.searchTerm}`}>Search</Link>
					</button>
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

export default connect(mapStateToProps, actions)(SearchBar);
