import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class SearchResults extends React.Component {
	constructor() {
		super();
		this.state = { someKey: 'someValue' };
		this.renderContent = this.renderContent.bind(this);
	}

	componentDidMount() {
		const { searchTerm } = this.props.match.params;
		this.props.dataSearch(searchTerm);
	}

	renderContent() {
		const { searchTerm } = this.props.match.params;
		const { search: results } = this.props;
		if (!results) return;
        console.log('length: ',results.length);
        if (results.length === 0) return <div>No results found for {searchTerm}</div>;
		return results.map((item, i, array) => {
                console.log('item: ', item);
                console.log('index: ', i);
                console.log('array: ', array);
			return (
				<div className='search-item' key={item._id}>
                    {console.log('inside of return: ',item)}
					Testing:
					<p className={"search-company"}>
						{`Company: ${item.company}`}
					</p>
					<p className={"search-position"}>{`Position: ${item.position}`}</p>
				</div>
			);
		});
	}

	render() {
		return <div>{this.renderContent()}</div>;
	}
}

const mapStateToProps = ({ search }) => {
	return {
		search
	};
};

export default connect(mapStateToProps, actions)(SearchResults);
