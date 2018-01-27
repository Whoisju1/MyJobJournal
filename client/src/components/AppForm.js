import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faStar as StarUnfav } from '@fortawesome/fontawesome-free-regular';
import { faStar as StarFav } from '@fortawesome/fontawesome-free-solid';
import * as actions from '../actions';

const Favorite = styled(FontAwesomeIcon).attrs({
  size: 'lg',
})`
      grid-column: -2/-1;
      grid-row: 1/2;
      cursor: pointer;
      color: #e1b12c;
      z-index: 1;
      justify-self: end;
      align-self: center;
      transition: transform .5s ease;
      &:hover {
        transform: scale(1.2);
      }
    `;

const FormContainer = styled.main.attrs({
  role: 'main',
})`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: 1fr 50% 1fr;
`;

const Form = styled.form`
  position: relative;
  border: .5px solid lightgray;
  background: linear-gradient(to right, #ddf0d6, #d1e0d9);
  box-shadow: 1px 2px 4px rgba(0, 0, 0, .2);
  padding: 3%;
  display: grid;
  grid-gap: 8px;
  grid-column: 2/3;
  grid-auto-flow: dense;
  margin: 2.5% 0;
  grid-template-columns: repeat(12, 1fr);
  &>label {
    ${''}
    text-transform: uppercase;
    border-left: 3px solid #27ae60;
    padding: 0;
    margin-bottom: 0;
    padding-left: 3%;
    height: 1.5em;
    color: #2c3e50;
    font-weight: 100;
  }
  &>input[type=text],
    input[type=tel],
    input[type=email],
    input[type=datetime-local],
    input[type=url], 
    textarea{
      text-align: start;
      color: green;
      margin-bottom: 10px;
      box-sizing: border-box;
      &::placeholder {
        text-align: center;
        color: #bdc3c7;
      }
    }
  &>input[type=text],
    input[type=tel],
    input[type=email],
    input[type=datetime-local],
    input[type=url] {
      height: 3em;
      border: .4px solid gray;
      padding-left: 2%;
      &:focus {
        background-color: #edfbf3;
        &::placeholder {
          ${''}
        }
      }
   }
  &>textarea {
    min-width: 100%;
    box-sizing: border-box;
    min-height: 8em;
    &::placeholder {  
        text-align: start;
      }
    &:focus {
      &::placeholder {  
        color: #27ae60;
      }
    }
    
  }
  &>input[type=submit] {

  }
`;

const Heading = styled.h2`
  border-bottom: 1px solid #27ae60;
  ${''}
  grid-column: 1/-1;
  color: #27ae60;
  margin: 0 0 1% 0;
`;

const Position = styled.input.attrs({
  name: 'position',
  placeholder: 'Full-Stack Web Developer',
  required: true,
  type: 'text',
})`
  grid-column: 1/7;
  grid-row: 3/4;
  text-align: center;
  position: relative;
  ${''}
  &::after {
    content: "Testing";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const Company = Position.extend.attrs({
  name: 'company',
  placeholder: 'Some Company',
  required: true,
  type: 'text',
})`
  grid-row: 3/4;
  grid-column: 7/-1;
  &::placeholder {
    align-items: center;
    color: #27ae60;
  }
`;

const JobDetails = styled.textarea.attrs({
  name: 'jobDetails',
  placeholder: 'Information About This Position',
})`
  resize: vertical;
  grid-column: 1/-1;
  grid-row: 15/16;
  &::placeholder {
    align-items: center;
  }
`;

const Phone = styled.input.attrs({
  name: 'companyPhone',
  type: 'tel',
  placeholder: '(123) 456 7890',
})`
  grid-column: 1/4;
  grid-row: 6/7;
  &::placeholder {
    align-items: center;
  }
  &:valid {
    ${props => props.value && 'box-shadow: 0px 0px 9px rgba(56, 173, 169, .8)'};
  }
  &:invalid {
    box-shadow: 0px 0px 9px rgba(238, 88, 88, .8);
  }
 `;

const CompanyWebsite = styled.input.attrs({
  name: 'companyWebsite',
  type: 'url',
  placeholder: 'http://www.company.com',
})`
  grid-column: 4/-1;
  grid-row: 6/7;
  &:valid {
    ${props => props.value && 'box-shadow: 0px 0px 9px rgba(56, 173, 169, .8)'};
  }
  &:invalid {
    box-shadow: 0px 0px 9px rgba(238, 88, 88, .8);
  }
`;

const Location = styled.input.attrs({
  name: 'companyLocation',
  placeholder: 'Manhattan, New York',
  type: 'text',
})`
   grid-column: 4/-1;
   grid-row: 8/9;
   &::placeholder {
    align-items: center;
  }
 `;

const Email = styled.input.attrs({
  name: 'companyEmail',
  type: 'email',
  placeholder: 'john.doe@domain.com',
})`
  grid-column: 1/4;
  grid-row: 8/9;
  &:valid {
    ${props => props.value && 'box-shadow: 0px 0px 9px rgba(56, 173, 169, .8)'};
  }
  &:invalid {
    box-shadow: 0px 0px 9px rgba(238, 88, 88, .8);
  }
  &::placeholder {
    align-items: center;
  }
`;

const JobID = styled.input.attrs({
  name: 'jobID',
  placeholder: 'Job Number/ID?',
  type: 'text',
})`
  grid-column: 5/7;
  grid-row: 13/14;
`;

const Source = styled.input.attrs({
  name: 'source',
  placeholder: 'Where did you here about this position?',
  type: 'text',
})`
  grid-column: 9/-1;
  grid-row: 13/14;
  &::placeholder {
    align-items: center;
  }
`;

const Compensation = styled.input.attrs({
  name: 'compensation',
  placeholder: '$55k-$80k',
  type: 'text',
})`
  grid-column: 7/9;
  grid-row: 13/14;
`;

const DateApplied = styled.input.attrs({
  type: 'datetime-local',
  name: 'dateApplied',
  placeholder: 'Date Applied',
})`
  grid-column: 1/5;
  grid-row: 13/14;
  &::placeholder {
    align-items: center;
  }
`;

const Status = styled.select.attrs({
  title: 'How far are you in the hiring process?',
  name: 'status',
})`
  grid-row: 1/2;
  grid-column: 9/12;
  z-index: 1;
  text-align: center;
  align-self: center;
  height: 1.75em;
  color: green;
`;

const Option = styled.option`

`;

const Submit = styled.input.attrs({
  type: 'submit',
  value: 'Submit',
})`
  grid-row: 18/19;
  grid-column: 1/ span 2;
  background: #2ecc71;
  color: #FFFFFF;
  transition: all .3s ease;
  border: none;
  font-weight: 500;
  letter-spacing: 1px;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, .3);
  font-size: 120%;
  :hover {
    transform: translateY(-3px);
    box-shadow: 1px 5px 4px rgba(0, 0, 0, .3);
  }
  :focus {
    background-color: #dfefdc;
  }
`;

const Cancel = styled.button`
  grid-row: 18/19;
  grid-column: span 2;
  margin-left: 2%;
  background: #bdc3c7;
  color: #ffffff;
  transition: all .3s ease;
  border: none;
  font-weight: 500;
  letter-spacing: 1px;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, .3);
  font-size: 120%;
  :hover {
    transform: translateY(-3px);
    box-shadow: 1px 5px 4px rgba(0, 0, 0, .3);
  }
  :focus {
    background-color: #dfefdc;
  }
`;

// Labels
const PositionLabel = styled.label`
  grid-column: 1/7;
  grid-row: 2/3;
  position: relative;
  &::after {
    content: "( Required )";
    color: #e74c3c;
    text-transform: none;
    position: absolute;
    top: 0;
    left: 66px;
    font-style: italic;
  }
`;
const CompanyLabel = styled.label`
  grid-column: 7/-1;
  grid-row: 2/3;
  position: relative;
  &::after {
    content: "(Required)";
    color: #e74c3c;
    text-transform: none;
    position: absolute;
    top: 0;
    left: 66px;
    font-style: italic;
  }
`;

const CompanyPhoneLabel = styled.label`
  grid-column: 1/4;
  grid-row: 5/6;
`;
const CompanyWebsiteLabel = styled.label`
  grid-column: 4/-1;
  grid-row: 5/6;
`;
const CompanyEmailLabel = styled.label`
  grid-column: 1/4;
  grid-row: 7/8;
`;
const CompanyLocationLabel = styled.label`
  grid-column: 4/-1;
  grid-row: 7/8;
`;
const DateAppliedLabel = styled.label`
  grid-column: 1/5;
  grid-row: 12/13;
`;
const JobIDLabel = styled.label`
  grid-column: 5/7;
  grid-row: 12/13;
`;
const CompensationLabel = styled.label`
  grid-column: 7/9;
  grid-row: 12/13;
`;
const SourceLabel = styled.label`
  grid-column: 9/-1;
  grid-row: 12/13;
`;
const JobDetailsInfo = styled.label`
  grid-column: 1/-1;
  grid-row: 14/15;
`;

class AppForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company: '',
      companyPhone: '',
      companyEmail: '',
      companyWebsite: '',
      companyLocation: '',
      jobID: '',
      position: '',
      status: 'Applied',
      dateApplied: new Date(),
      compensation: '',
      jobDetails: '',
      source: '',
      favorite: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.inputTitle = inputName => `Please enter a valid ${inputName}`;
    this.isValid = true;
    this.phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  }

  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  componentDidMount() {
    const { id = false } = this.props.match.params;
    if (id) this.props.fetchApplication(id);
  }

  componentWillReceiveProps(nextProps) {
    const { added, update, application } = nextProps;

    if (application) {
      const {
        company,
        companyPhone = '',
        companyEmail,
        companyWebsite,
        companyLocation,
        jobID,
        position,
        status,
        dateApplied,
        compensation,
        jobDetails,
        source,
        favorite,
      } = application;

      this.setState({
        company,
        companyPhone,
        companyEmail,
        companyWebsite,
        companyLocation,
        jobID,
        position,
        status,
        dateApplied,
        compensation,
        jobDetails,
        source,
        favorite,
      });
    }

    if (added !== this.props.added && added !== 'undefined') {
      const { _id } = added;
      this.props.history.push(`/application/${_id}`);
    }

    if (update !== this.props.update && update !== 'undefined') {
      const { _id } = update;
      this.props.history.push(`/application/${_id}`);
    }
  }

  shouldComponentUpdate() {
    return true;
  }
  handleChange(e) {
    // get input input and validation values
    const { valid: isValid } = e.target.validity;
    const { value: input } = e.target;
    const { name } = e.target;
    this.isValid = input && isValid;

    this.inputTitle = (inputName, patternHint) => {
      if (input && !isValid) return `"${input}" is not ${inputName}.`;
      return patternHint || `Please enter ${inputName}.`;
    };
    if (name === 'companyPhone') {
      if (this.phoneRegex.test(input)) {
        const PhoneNumber = input.replace(this.phoneRegex, '($1) $2-$3');
        return this.setState({ [name]: PhoneNumber });
      }
    }

    if (e.target) {
      this.setState({ [name]: input });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    // if id evaluates to true then it's an update
    const { id = false } = this.props.match.params;
    (id) ?
      (this.props.updateData(id, this.state)) :
      (this.props.storeData(this.state));
  }

  render() {
    return (
      <FormContainer>
        <Form onSubmit={this.handleSubmit} >
          <Favorite
            onClick={() => {
              this.setState({ favorite: !this.state.favorite });
            }}
            fav={this.state.favorite.toString()}
            icon={this.state.favorite ? StarFav : StarUnfav}

          />
          <Status
            value={this.state.status}
            onChange={this.handleChange}
          >
            <Option>Applied</Option>
            <Option>Phone Interview</Option>
            <Option>On-Sight Interview</Option>
            <Option>Job Offered</Option>
            <Option>Job Accepted</Option>
          </Status>
          <Heading style={{ gridColumn: '1/-1', gridRow: '1/2' }}> Position & Company </Heading>
          <PositionLabel>Position</PositionLabel>
          <Position onChange={this.handleChange} value={this.state.position} required autofocus />
          <CompanyLabel>Company</CompanyLabel>
          <Company onChange={this.handleChange} value={this.state.company} required />
          <Heading>Company Contact Info</Heading>
          <CompanyPhoneLabel >Telephone Number</CompanyPhoneLabel>
          <Phone
            onChange={this.handleChange}
            value={this.state.companyPhone || ''}
            pattern="^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$"
            title={this.inputTitle('a valid phone number', "(123) 456 7890")}
          />
          <CompanyWebsiteLabel>Website</CompanyWebsiteLabel>
          <CompanyWebsite
            onChange={this.handleChange}
            value={this.state.companyWebsite}
            title={this.inputTitle('a valid web address.')}
          />
          <CompanyEmailLabel>Email Address</CompanyEmailLabel>
          <Email
            onChange={this.handleChange}
            value={this.state.companyEmail}
            title={this.inputTitle("the company's email address")}
          />
          <CompanyLocationLabel>Location</CompanyLocationLabel>
          <Location
            onChange={this.handleChange}
            value={this.state.companyLocation}
            title={this.inputTitle("the company's office location.")}
          />
          <Heading>Job Information</Heading>
          <DateAppliedLabel>Date Applied</DateAppliedLabel>
          <DateApplied
            onChange={this.handleChange}
            value={this.state.dateApplied}
          />
          <JobIDLabel>Job ID</JobIDLabel>
          <JobID
            onChange={this.handleChange}
            value={this.state.jobID}
            title={this.inputTitle('job ID')}
          />
          <CompensationLabel>Compensation</CompensationLabel>
          <Compensation
            onChange={this.handleChange}
            value={this.state.compensation}
            title={this.inputTitle('how much you would get paid.')}
          />
          <SourceLabel>Source</SourceLabel>
          <Source
            onChange={this.handleChange}
            value={this.state.source}
            title={this.inputTitle('where you discovered this job.')}
          />
          <JobDetailsInfo>Additional Information</JobDetailsInfo>
          <JobDetails
            onChange={this.handleChange}
            value={this.state.jobDetails}
            title={this.inputTitle('additional information relevant to this job opening and/or company.')}
          />
          <Submit /> <Cancel onClick={() => this.props.history.push('/')}>Cancel</Cancel>
        </Form>
      </FormContainer>
    );
  }
}

AppForm.defaultProps = {
  application: null,
  added: null,
  update: null,
  match: {
    params: null,
  },
};

AppForm.propTypes = {
  updateData: PropTypes.func.isRequired,
  storeData: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  fetchApplication: PropTypes.func.isRequired,
  application: PropTypes.object,
  added: PropTypes.object,
  update: PropTypes.object,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};

const mapStateToProps = ({ application, added, update }) => ({ application, added, update });

export default connect(mapStateToProps, actions)(AppForm);
