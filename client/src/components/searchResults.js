// import React from 'react';
// import { connect } from 'react-redux';
// import * as actions from '../actions';
// import {Link} from 'react-router-dom';

// class SearchResults extends React.Component {
// 	constructor() {
// 		super();
// 		this.state = { someKey: 'someValue' };
// 		this.renderContent = this.renderContent.bind(this);
// 	}

// 	componentDidMount() {
// 		const { searchTerm } = this.props.match.params;
// 		this.props.dataSearch(searchTerm);
// 	}

// 	renderContent() {
// 		const { searchTerm } = this.props.match.params;
// 		const { search: results } = this.props;
// 		if (!results) return;
//         if (results.length === 0) return <div>No results found for {searchTerm}</div>;
// 		return results.map((item, i, array) => {
// 			return (
//                 <Link to={`/application/${item._id}`}>
// 				<div className='search-item' key={item._id}>
// 					<p className={"search-company"}>
// 						{`Company: ${item.company}`}
// 					</p>
// 					<p className={"search-position"}>{`Position: ${item.position}`}</p>
//                     <p className="search-status">
//                         {`Status: ${item.status}`}
//                     </p>
// 				</div>
//                 </Link>
// 			);
// 		});
// 	}

// 	render() {
// 		return <div>{this.renderContent()}</div>;
// 	}
// }

// const mapStateToProps = ({ search }) => {
// 	return {
// 		search
// 	};
// };

// export default connect(mapStateToProps, actions)(SearchResults);
