import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Icon from 'react-icons-kit';
import { ic_delete_forever } from 'react-icons-kit/md/ic_delete_forever';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { ic_add_circle } from 'react-icons-kit/md/ic_add_circle';
import { edit } from 'react-icons-kit/typicons/edit';
import { Glyphicon } from 'react-bootstrap';

// import component
import DeleteBtn from './DeleteBtn';

class SingleItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showConfirm: false,
		};
		this.requestConfirmation = this.requestConfirmation.bind(this);
		this.closeModal = this.closeModal.bind(this);
	}

	componentDidMount() {
		this.props.fetchData();
	}

	requestConfirmation() {
		this.setState({ showConfirm: true });
	}

	closeModal() {
		this.setState({ showConfirm: false });
	}

	renderContent() {
		let dltData = this.props.deleteData.bind(this);
		let requestConfirmation = this.requestConfirmation.bind(this);
		let closeModal = this.closeModal.bind(this);
		if (this.props.data !== null)
			return this.props.data.applications.map(item => {
				const showModal = () => {
					if (this.state.showConfirm) {
						return <DeleteBtn cb={() => dltData(item._id)} close={closeModal} />;
					}
				};
				let param = this.props.match.params.id;
				if (param === item._id) {
					return (
						<div key={item._id} className="item-detailed">
							<div className="single-output">
								<span className="single-title"> Status:</span>{' '}
								{item.status || <span className="no-content">Not Specified</span>}
							</div>
							<div className="single-output">
								<span className="single-title"> Company:</span>{' '}
								{item.company || <span className="no-content">Not Specified</span>}
							</div>
							<div className="single-output">
								<span className="single-title"> Position:</span>{' '}
								{item.position || <span className="no-content">Not Specified</span>}
							</div>
							<div className="single-output single-inline">
								<span className="single-title">Company Info: </span>
								<div className="larger-content">
									{item.companyInfo || <span className="no-content">N/A</span>}
								</div>
							</div>
							<div className="single-output">
								<span className="single-title"> Email:</span>{' '}
								{item.companyEmail || <span className="no-content">Not Specified</span>}
							</div>
							<div className="single-output">
								<span className="single-title"> Phone Number:</span>{' '}
								{item.companyPhone || <span className="no-content">Not Specified</span>}
							</div>
							<div className="single-output">
								<span className="single-title"> Location:</span>{' '}
								{item.companyLocation || <span className="no-content">Not Specified</span>}
							</div>
							<div className="single-output">
								<span className="single-title"> Source:</span>{' '}
								{item.source || <span className="no-content">Not Specified</span>}
							</div>
							<div className="single-output">
								<span className="single-title"> Company Website:</span>{' '}
								{item.companyWebsite? <a href={item.companyWebsite}>{item.companyWebsite}</a> : <span className="no-content">Not Specified</span>}
							</div>
							<div className="single-output">
								<span className="single-title"> Job ID/Number:</span>{' '}
								{item.jobID || <span className="no-content">Not Specified</span>}
							</div>
							<div className="single-output">
								<span className="single-title">Date of Application:</span>{' '}
								{item.dateApplied ? (
									`${moment(item.dateApplied)
										.add(1, 'day')
										.format('LL')} (${moment(item.dateApplied).fromNow()})`
								) : (
									<span className="no-content">Not Specified</span>
								)}
							</div>
							<div className="single-output">
								<span className="single-title"> Requirements:</span>{' '}
								{item.requirements || <span className="no-content">Not Specified</span>}
							</div>
							<div className="single-output">
								<span className="single-title"> Compensation:</span>{' '}
								{item.compensation || <span className="no-content">Not Specified</span>}
							</div>
							<div className="single-output">
								<span className="single-title">Additional Details:</span>
								<div className="larger-content">
									{item.jobDetails || <span className="no-content">N/A</span>}
								</div>
							</div>
							<div className="date-created single-output">
								{'Created ' + moment(item.dateCreated).fromNow()}
							</div>
							<div className="single-output">
								<Icon icon={ic_delete_forever} className="dlt" onClick={requestConfirmation} />
							</div>
							<Link to="/applications" className="back">
								<Glyphicon glyph="triangle-left" />Back
							</Link>
							{showModal()}
							<Link to="/add">
								<Icon icon={ic_add_circle} size={75} className="open-form" />
							</Link>
							<Link to={`/edit/${item._id}`}>
								<i className="fa fa-pencil-square-o" aria-hidden="true"></i>
							</Link>
						</div>
					);
				}
			});
	}

	render() {
		return <div>{this.renderContent()}</div>;
	}
}

const mapStateToProps = ({ data, application }) => {
	return {
		data,
		application
	};
};

export default connect(mapStateToProps, actions)(SingleItem);

const CompanyURL = (props) => {
	return( 
		<a href={props.url} target='_blank'>
			{props.url}
		</a>
		)
};
