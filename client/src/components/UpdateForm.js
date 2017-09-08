import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import {
	Form,
	Col,
	Button,
	FormControl,
	FormGroup,
	ControlLabel,
	InputGroup,
	Glyphicon,
	DropdownButton,
	MenuItem
} from 'react-bootstrap';

import Icon from 'react-icons-kit';
import { office } from 'react-icons-kit/icomoon/office';
import { ic_work } from 'react-icons-kit/md/ic_work';

class UpdateForm extends React.Component {
	componentWillMount() {
		let id = this.props.match.params.id;
			this.props.fetchApplication(id);
	}

	componentWillReceiveProps(nextProps) {
		const { application } = nextProps;
		if (application) {
			this.setState({
				company: application.company || '',
				companyInfo: application.companyInfo || '',
				companyPhone: application.companyPhone || '',
				companyEmail: application.companyEmail || '',
				companyWebsite: application.companyWebsite || '',
				companyLocation: application.companyLocation || '',
				jobID: application.jobID || '',
				position: application.position || '',
				status: application.status || '',
				dateApplied: application.dateApplied || '',
				requirements: application.requirements || '',
				compensation: application.compensation || '',
				jobDetails: application.jobDetails || '',
				source: application.source
			});
		}
	}

	constructor(props) {
		super(props);
		this.state = {
			company: '',
			companyInfo: '',
			companyPhone: '',
			companyEmail: '',
			companyWebsite: '',
			companyLocation: '',
			jobID: '',
			position: '',
			status: '',
			dateApplied: '',
			requirements: '',
			compensation: '',
			jobDetails: '',
			source: ''
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.saveToState = this.saveToState.bind(this);
		// this.setFormInput = this.setFormInput.bind(this);
	}

	handleSubmit(event) {
		let id = this.props.match.params.id;
		this.props.updateData(id, this.state);
		console.log('stuff being updated: ',this.state);
		event.preventDefault();
		this.setState({
			company: '',
			companyInfo: '',
			companyPhone: '',
			companyEmail: '',
			companyWebsite: '',
			companyLocation: '',
			jobID: '',
			position: '',
			status: 'Applied',
			dateApplied: '',
			requirements: '',
			compensation: '',
			jobDetails: '',
			source: ''
		});
	}

	saveToState(e) {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	}

	render() {
		return (
			<Form horizontal className="entry-form post-form" onSubmit={this.handleSubmit}>
				<FormGroup controlId="formHorizontalEmail" validationState="warning">
					<Col componentClass={ControlLabel} sm={2}>
						Company
					</Col>
					<Col sm={10}>
						<InputGroup>
							<InputGroup.Addon>
								<Icon icon={office} />
							</InputGroup.Addon>
							<FormControl
								name="company"
								type="text"
								required
								onChange={this.saveToState}
								value={this.state.company}
								placeholder="Employer's name"
							/>
						</InputGroup>
					</Col>
				</FormGroup>
				<FormGroup controlId="formHorizontalEmail">
					<Col componentClass={ControlLabel} sm={2}>
						Position
					</Col>
					<Col sm={10}>
						<InputGroup>
							<InputGroup.Addon>
								<Icon icon={ic_work} />
							</InputGroup.Addon>
							<FormControl
								name="position"
								type="text"
								required
								onChange={this.saveToState}
								value={this.state.position}
								placeholder="Position applied for"
							/>
						</InputGroup>
					</Col>
				</FormGroup>
				<FormGroup controlId="formHorizontalEmail">
				<Col componentClass={ControlLabel} sm={2}>
					Source
				</Col>
				<Col sm={10}>
					<InputGroup>
						<InputGroup.Addon>
							<Icon icon={office} />
						</InputGroup.Addon>
						<FormControl
							name="source"
							type="text"
							autofocus 
							onChange={this.saveToState}
							value={this.state.source}
							placeholder="Where you found out about the position"
						/>
					</InputGroup>
				</Col>
			</FormGroup>
				<FormGroup controlId="formHorizontalEmail">
					<Col componentClass={ControlLabel} sm={2}>
						Information About the Company
					</Col>
					<Col sm={10}>
						<FormControl
							name="companyInfo"
							componentClass="textarea"
							onChange={this.saveToState}
							value={this.state.companyInfo}
							placeholder="Helpful Information About the Company"
							rows={3}
							cols={50}
						/>
					</Col>
				</FormGroup>
				<FormGroup controlId="formHorizontalEmail">
					<Col componentClass={ControlLabel} sm={2}>
						Phone
					</Col>
					<Col sm={10}>
						<InputGroup>
							<InputGroup.Addon>
								<Glyphicon glyph="earphone" />
							</InputGroup.Addon>
							<FormControl
								name="companyPhone"
								type="tel"
								placeholder="Enter phone number"
								pattern="^(?:\(\d{3}\)|\d{3})[- . ]?\d{3}[- . ]?\d{4}$"
								maxlength="12"
								onChange={this.saveToState}
								value={this.state.companyPhone}
							/>
						</InputGroup>
					</Col>
				</FormGroup>

				<FormGroup controlId="formHorizontalEmail">
					<Col componentClass={ControlLabel} sm={2}>
						Email
					</Col>
					<Col sm={10}>
						<InputGroup>
							<InputGroup.Addon>@</InputGroup.Addon>
							<FormControl
								name="companyEmail"
								type="email"
								pattern="^[_a-zA-Z0-9-]+(\.[_a-zA-Z0-9-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,6})$"
								className="form-control"
								onChange={this.saveToState}
								value={this.state.companyEmail}
								placeholder="Enter Employer's email address"
							/>
						</InputGroup>
					</Col>
				</FormGroup>
				<FormGroup controlId="formHorizontalEmail" validationState="">
					<Col componentClass={ControlLabel} sm={2}>
						Website
					</Col>
					<Col sm={10}>
						<InputGroup>
							<InputGroup.Addon>
								<Icon icon={office} />
							</InputGroup.Addon>
							<FormControl
								name="companyWebsite"
								type="url"
								onChange={this.saveToState}
								value={this.state.companyWebsite}
								placeholder="Employer Website"
							/>
						</InputGroup>
					</Col>
				</FormGroup>
				<FormGroup controlId="formHorizontalEmail" validationState="">
					<Col componentClass={ControlLabel} sm={2}>
						Location
					</Col>
					<Col sm={10}>
						<InputGroup>
							<InputGroup.Addon>
								<Icon icon={office} />
							</InputGroup.Addon>
							<FormControl
								name="companyLocation"
								type="text"
								onChange={this.saveToState}
								value={this.state.companyLocation}
								placeholder="Company's Location"
							/>
						</InputGroup>
					</Col>
				</FormGroup>
				<FormGroup controlId="formHorizontalEmail">
					<Col componentClass={ControlLabel} sm={2}>
						Job ID
					</Col>
					<Col sm={10}>
						<FormControl
							name="jobID"
							type="text"
							onChange={this.saveToState}
							value={this.state.jobID}
							placeholder="Job ID"
						/>
					</Col>
				</FormGroup>

				<FormGroup controlId="formHorizontalEmail">
					<Col componentClass={ControlLabel} sm={2}>
						Date You Applied
					</Col>
					<Col sm={10} lg={6}>
						<InputGroup>
							<InputGroup.Addon>
								<Glyphicon glyph="calendar" />
							</InputGroup.Addon>
							<FormControl
								name="dateApplied"
								type="date"
								onChange={this.saveToState}
								value={this.state.dateApplied}
								placeholder="Date you applied for the job"
							/>
						</InputGroup>
					</Col>
				</FormGroup>
				<FormGroup>
					<Col componentClass={ControlLabel} sm={2}>
						Application Status
					</Col>
					<Col sm={10} lg={6}>
						<DropdownButton
							onChange={this.saveToState}
							value={this.state.status}
							name="status"
							title="Application Status"
							required
						>
							<MenuItem value="Applied">Applied</MenuItem>
							<MenuItem value="Interview Received">Interview Received</MenuItem>
							<MenuItem value="Job Offered">Job Offered</MenuItem>
							<MenuItem value="Job Accepted">Job Accepted</MenuItem>
						</DropdownButton>
					</Col>
				</FormGroup>
				<FormGroup controlId="formHorizontalEmail">
					<Col componentClass={ControlLabel} sm={2}>
						Requirements
					</Col>
					<Col sm={10}>
						<FormControl
							name="requirements"
							type="text"
							onChange={this.saveToState}
							value={this.state.requirements}
							placeholder="Job Requirements"
						/>
					</Col>
				</FormGroup>

				<FormGroup controlId="formHorizontalEmail">
					<Col componentClass={ControlLabel} sm={2}>
						Compensation
					</Col>
					<Col sm={10}>
						<FormControl
							name="compensation"
							type="text"
							onChange={this.saveToState}
							value={this.state.compensation}
							placeholder="Compensation"
						/>
					</Col>
				</FormGroup>

				<FormGroup controlId="formHorizontalEmail">
					<Col componentClass={ControlLabel} sm={2}>
						Job Details
					</Col>
					<Col sm={10}>
						<FormControl
							name="jobDetails"
							componentClass="textarea"
							placeholder="Other job details"
							onChange={this.saveToState}
							value={this.state.jobDetails}
							rows={3}
							cols={50}
						/>
					</Col>
				</FormGroup>
				<Button type="submit">Update</Button>
				<Button type="danger">Cancel</Button>
			</Form>
		);
	}
}
const mapStateToProps = ({ application }) => {
	return {
		application
	};
};

export default connect(mapStateToProps, actions)(UpdateForm);
