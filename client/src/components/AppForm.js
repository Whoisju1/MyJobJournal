import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { connect } from 'react-redux';
import * as actions from '../actions';

const expand = keyframes`
  0% {
    height: 3em;
  }
  100% {
    height: 7.5em;
  }
`;

const FormContainer = styled.main.attrs({
  role: 'main',
})`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: 1fr 60% 1fr;
`;

const Form = styled.form`
  border: .5px solid lightgray;
  ${'' /* background: white; */}
  background: #ffffff;  
  ${'' /* background: linear-gradient(to right, #bdc3c7, #e4e4d9); */}
  box-shadow: 1px 2px 4px rgba(0, 0, 0, .2);
  padding: .5% 3%;
  display: grid;
  grid-gap: 4px;
  grid-column: 2/3;
  grid-auto-flow: dense;
  margin-top: .5%;
  grid-template-columns: repeat(12, 1fr);
  &>label {
    ${'' /* text-align: center; */}
    text-transform: uppercase;
    border-left: 3px solid #27ae60;
    padding: 0;
    padding-left: 3%;
    height: 1.5em;
    color: #7f8c8d;
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
    &::placeholder {
      text-align: center;
      text-transform: uppercase;
    }
  }
  &>input[type=text],
    input[type=tel],
    input[type=email],
    input[type=datetime-local],
    input[type=url] {
      height: 3em;
      border: .4px solid gray;
      &:focus {
        background-color: #edfbf3;
        &::placeholder {
          color: #27ae60;
      }
      }
  }
  &>textarea {
    min-width: 100%;
    box-sizing: border-box;
    &:focus {
      animation-name: ${expand};
      animation-direction: forward;
      animation-fill-mode: both;
      animation-duration: .5s;
      animation-timing-function: ease;
      backface-visibility: hidden;
      ${'' /* background-color: #edfbf3; */}
      &::placeholder {  
        color: #27ae60;
      }
    }
    
  }
  &>input[type=submit] {
    ${'' /* background: white;
    color: #27ae60; */}
  }
  &>input:required {
    border-bottom: .4px solid red;
  }
`;

const Heading = styled.h2`
  border-bottom: 1px solid #27ae60;
  ${'' /* padding-bottom: 1%; */}
  grid-column: 1/-1;
  color: #27ae60;
  margin: 0 0 1% 0;
`;

const Position = styled.input.attrs({
  name: 'position',
  placeholder: 'Position',
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
  placeholder: 'Company Name',
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

const CompanyInfo = styled.textarea.attrs({
  name: 'companyInfo',
  placeholder: 'Information About This company',
})`
  resize: vertical;
  min-width: 100%;
  grid-column: 1/-1;
  &::placeholder {
    align-items: center;
    grid-row: 5/6;
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
  placeholder: 'Company Phone Number',
})`
  grid-column: 1/4;
  grid-row: 8/9;
  &::placeholder {
    align-items: center;
  }
 `;

const Location = styled.input.attrs({
  name: 'location',
  placeholder: 'Company Location',
  type: 'text',
})`
   grid-column: 4/-1;
   grid-row: 10/11;
   &::placeholder {
    align-items: center;
  }
 `;

const Email = styled.input.attrs({
  name: 'companyEmail',
  type: 'email',
  placeholder: 'Company Email Address',
})`
  grid-column: 1/4;
  &::placeholder {
    align-items: center;
  }
`;

const JobID = styled.input.attrs({
  name: 'jobID',
  placeholder: 'Jod ID',
  type: 'text',
})`
  grid-column: 5/7;
  grid-row: 13/14;
`;

const Source = styled.input.attrs({
  name: 'source',
  placeholder: 'Where you found out about the job',
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
  placeholder: 'Compensation',
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

const CompanyWebsite = styled.input.attrs({
  name: 'companyWebsite',
  type: 'url',
  placeholder: 'Company\'s Website',
})`
  grid-column: 4/-1;
  grid-row: 8/9;
`;

const Requirements = styled.textarea.attrs({
  name: 'requirements',
  placeholder: 'The Job Requirements',
})`
  resize: vertical;
  grid-column: 1/-1;
  grid-row: 17/18;
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
`;

const Cancel = styled.button`
  grid-row: 18/19;
  grid-column: span 2;
`;

// Labels
const PositionLabel = styled.label`
  grid-column: 1/7;
  grid-row: 2/3;
`;
const CompanyLabel = styled.label`
  grid-column: 7/-1;
  grid-row: 2/3;
`;

const CompanyInfoLabel = styled.label`
  grid-column: 1/-1;
  grid-row: 4/5;
`;

const CompanyPhoneLabel = styled.label`
  grid-column: 1/4;
  grid-row: 7/8;
`;
const CompanyWebsiteLabel = styled.label`
  grid-column: 4/-1;
  grid-row: 7/8;
`;
const CompanyEmailLabel = styled.label`
  grid-column: 1/4;
  grid-row: 9/10;
`;
const CompanyLocationLabel = styled.label`
  grid-column: 4/-1;
  grid-row: 9/10;
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
const RequirementsLabel = styled.label`
  grid-column: 1/-1;
  grid-row: 16/17;
`;

class AppForm extends Component {
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
      status: 'Applied',
      dateApplied: Date.now(),
      requirements: '',
      compensation: '',
      jobDetails: '',
      source: '',
      favorite: false,
    };

    this.saveToState = this.saveToState.bind(this);
  }

  componentDidMount() {
    const { id = false } = this.props.match.params;
    if (id) this.props.fetchApplication(id);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.application) {
      const {
        company,
        companyInfo,
        companyPhone,
        companyEmail,
        companyWebsite,
        companyLocation,
        jobID,
        position,
        status,
        dateApplied,
        requirements,
        compensation,
        jobDetails,
        source,
        favorite,
      } = nextProps.application;

      this.setState({
        company,
        companyInfo,
        companyPhone,
        companyEmail,
        companyWebsite,
        companyLocation,
        jobID,
        position,
        status,
        dateApplied,
        requirements,
        compensation,
        jobDetails,
        source,
        favorite,
      });
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
    //  else {
    //   this.setState({ status: e });
    // }
  }

  render() {
    return (
      <FormContainer>
        <Form>
          <Heading> Position & Company </Heading>
          <PositionLabel>Position</PositionLabel>
          <Position onChange={this.saveToState} value={this.state.position} required autofocus />
          <CompanyLabel>Company</CompanyLabel>
          <Company onChange={this.saveToState} value={this.state.company} required />
          <CompanyInfoLabel>Company Information</CompanyInfoLabel>
          <CompanyInfo onBlur={e => console.log(e)} onChange={this.saveToState} value={this.state.companyInfo} />
          <Heading>Company Contact Info</Heading>
          <CompanyPhoneLabel>Company's Telephone Number</CompanyPhoneLabel>
          <Phone onChange={this.saveToState} value={this.state.companyPhone} />
          <CompanyWebsiteLabel>Company's Website</CompanyWebsiteLabel>
          <CompanyWebsite onChange={this.saveToState} value={this.state.companyWebsite} />
          <CompanyEmailLabel>Company's Email</CompanyEmailLabel>
          <Email onChange={this.saveToState} value={this.state.companyEmail} />
          <CompanyLocationLabel>Comapany's Location</CompanyLocationLabel>
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
          <JobDetailsInfo>Job Information</JobDetailsInfo>
          <JobDetails onChange={this.saveToState} value={this.state.jobDetails} />
          <RequirementsLabel>Job Requirements</RequirementsLabel>
          <Requirements onChange={this.saveToState} value={this.state.requirements} />
          <Submit /> <Cancel>Discard</Cancel>
        </Form>
      </FormContainer>
    );
  }
}

const mapStateToProps = ({ application }) => ({ application });

export default connect(mapStateToProps, actions)(AppForm);
