import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/fontawesome-free-regular';
import * as actions from '../actions';

const Favorite = styled(FontAwesomeIcon).attrs({
  icon: faHeart,
})`
      grid-column: -2/-1;
      grid-row: 1/2;
      cursor: pointer;
      color: ${props => (props.fav === 'true' ? 'red' : 'gray')};
      z-index: 1;
      justify-self: end;
      align-self: center;
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
  ${'' /* &>input:required {
  } */}
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
  placeholder: '888 888 8888',
})`
  grid-column: 1/4;
  grid-row: 6/7;
  &::placeholder {
    align-items: center;
  }
 `;

const CompanyWebsite = styled.input.attrs({
  name: 'companyWebsite',
  type: 'url',
  placeholder: 'www.company.org',
})`
  grid-column: 4/-1;
  grid-row: 6/7;
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

    this.saveToState = this.saveToState.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
  saveToState(e) {
    if (e.target) {
      const { name, value } = e.target;
      this.setState({ [name]: value });
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
          />
          <Heading style={{ gridColumn: '1/-1', gridRow: '1/2' }}> Position & Company </Heading>
          <PositionLabel>Position</PositionLabel>
          <Position onChange={this.saveToState} value={this.state.position} required autofocus />
          <CompanyLabel>Company</CompanyLabel>
          <Company onChange={this.saveToState} value={this.state.company} required />
          <Heading>Company Contact Info</Heading>
          <CompanyPhoneLabel>Telephone Number</CompanyPhoneLabel>
          <Phone onChange={this.saveToState} value={this.state.companyPhone || ''} pattern={/^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/g} />
          <CompanyWebsiteLabel>Website</CompanyWebsiteLabel>
          <CompanyWebsite onChange={this.saveToState} value={this.state.companyWebsite} />
          <CompanyEmailLabel>Email Address</CompanyEmailLabel>
          <Email onChange={this.saveToState} value={this.state.companyEmail} />
          <CompanyLocationLabel>Location</CompanyLocationLabel>
          <Location onChange={this.saveToState} value={this.state.companyLocation} />
          <Heading>Job Information</Heading>
          <DateAppliedLabel>Date Applied</DateAppliedLabel>
          <DateApplied onChange={this.saveToState} value={this.state.dateApplied} />
          <JobIDLabel>Job ID</JobIDLabel>
          <JobID onChange={this.saveToState} value={this.state.jobID} />
          <CompensationLabel>Compensation</CompensationLabel>
          <Compensation onChange={this.saveToState} value={this.state.compensation} />
          <SourceLabel>Source</SourceLabel>
          <Source onChange={this.saveToState} value={this.state.source} />
          <JobDetailsInfo>Additional Information</JobDetailsInfo>
          <JobDetails onChange={this.saveToState} value={this.state.jobDetails} />
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
