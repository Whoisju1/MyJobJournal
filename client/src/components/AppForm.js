import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import * as actions from '../actions';

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
      dateApplied: '',
      requirements: '',
      compensation: '',
      jobDetails: '',
      source: '',
      favorite: false,
    };
  }

  componentWillMount() {
    if (this.props.match) {
      const { id } = this.props.match.params;
      this.props.fetchApplication(id);
    }
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

      this.setState(() => ({
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
      }));
    }
  }

  render() {
    const FormContainer = styled.section`
      display: grid;
      min-width: 100%;
      height: 100%; 
      justify-content: center;
      align-items: center;
    `;

    return (
      <FormContainer>
        Form Goes Here
      </FormContainer>
    );
  }
}

const mapStateToProps = ({ application }) => ({ application });

export default connect(mapStateToProps, actions)(AppForm);
