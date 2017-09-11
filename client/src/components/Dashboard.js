import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Link } from 'react-router-dom';
import Icon from 'react-icons-kit';
import { ic_delete_forever } from 'react-icons-kit/md/ic_delete_forever';
import { ic_add_circle } from 'react-icons-kit/md/ic_add_circle';
import { Glyphicon } from 'react-bootstrap';

// import component
import DeleteBtn from './DeleteBtn';
import OrderMenu from './OrderMenu';

class Dashboard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showConfirm: false,
			order: 'forward',
			sortOrder: null
		};
		this.requestConfirmation = this.requestConfirmation.bind(this);
		this.closeModal = this.closeModal.bind(this);
		this.changeOrder = this.changeOrder.bind(this);
		this.showOrder = this.showOrder.bind(this);
		this.listSort = this.listSort.bind(this);
	}
	changeOrder() {
		if (this.state.order === 'forward') {
			this.setState({ order: 'backward' });
		} else {
			this.setState({ order: 'forward' });
		}
	}

	showOrder() {
		if (this.state.order === 'forward') {
			return <Glyphicon glyph="chevron-down" />;
		} else {
			return <Glyphicon glyph="chevron-up" />;
		}
	}

	requestConfirmation() {
		this.setState({ showConfirm: true });
	}

	closeModal() {
		this.setState({ showConfirm: false });
	}

	componentDidMount() {
		this.props.fetchData();
	}

	listSort(order = null) {
		this.setState({ sortOrder: order });
	}

	renderEntries(filterSort) {
		let { sortOrder } = this.state;
		let dltData = this.props.deleteData.bind(this);
		let requestConfirmation = this.requestConfirmation.bind(this);
		let closeModal = this.closeModal.bind(this);
		if (this.props.data !== null) {
			let entries = this.props.data.applications;

			// create function will be passed as an argument in the sort function
			const compareFunc = propKey => {

				if (propKey === 'dateCreated' || propKey === 'dateApplied') return (x, y) => {
						var a = new Date(x[propKey]),
							b = new Date(y[propKey]);
						return a - b;	
				};
				
				return (a, b) => {
					let itemA = a[propKey].toUpperCase();
					let itemB = b[propKey].toUpperCase();

					if (itemA < itemB) {
						return -1;
					}
					if (itemA > itemB) {
						return 1;
					}
					return 0;
				};
			};

			const sortStr = compareFunc(sortOrder);

			const sortedData = (filterSort, array) => {
				if (!sortOrder) return array;
				return array.concat().sort(filterSort);
			};

			const orderedList = sortedData(sortStr, entries);

			return orderedList.map((item, index) => {
				const showModal = () => {
					if (this.state.showConfirm) {
						return <DeleteBtn cb={() => dltData(item._id)} close={closeModal} />;
					}
				};

				return (
					<SingleEntry key={index}>
						<Link to={`/application/${item._id}`}>View Job Information</Link>
						<div className="company">
							<span className="single-title">Company</span>: {item.company}
						</div>
						<div className="position">
							<span className="single-title">Position</span>: {item.position}
						</div>
						<Icon icon={ic_delete_forever} onClick={requestConfirmation} className="dlt" />
						{showModal()}
						<div className="index">{index + 1}</div>
					</SingleEntry>
				);
			});
		}
	}

	render() {
		return (
			<div className="dash-container">
				<OrderMenu orderChanger={this.listSort} />
				<div className={`${this.state.order} dash`}>{this.renderEntries()}</div>
				<div className="order-change" onClick={this.changeOrder}>
					{this.showOrder()}
				</div>
				<Glyphicon glyph="down" />
				<Link to="/add">
					<Icon icon={ic_add_circle} size={75} className="open-form" />
				</Link>
			</div>
		);
	}
}
const mapStateToProps = ({ data }) => {
	return {
		data
	};
};

class SingleEntry extends React.Component {
	render() {
		return <div className="single-entry">{this.props.children}</div>;
	}
}
export default connect(mapStateToProps, actions)(Dashboard);
