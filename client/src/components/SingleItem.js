import React from 'react';
import { connect } from 'react-redux';
import Icon from 'react-icons-kit';
import { ic_delete_forever } from 'react-icons-kit/md/ic_delete_forever';
import styled from 'styled-components';
import moment from 'moment';
import { Link, withRouter } from 'react-router-dom';
import { ic_add_circle } from 'react-icons-kit/md/ic_add_circle';
import * as actions from '../actions';

// import component
class SingleItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { application: false };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchApplication(id);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.application) {
      const { application } = nextProps;
      this.setState({ application });
      console.log('state: ', this.state.application);
    }
  }

  render() {
    const {
      position,
      company,
      companyPhone,
      companyEmail,
      companyLocation,
      jobID,
      status,
      dateApplied,
      compensation,
      jobDetails,
      source,
      favorite,
      dateCreated,
    } = this.state.application;

    const Main = styled.main`
      display: grid;
      grid-template-columns: repeat(12, minmax(0, 12fr));
      &>* {
        min-width: 100%;
      }
      grid-auto-flow: row;
      overflow: auto;
      grid-auto-rows: min-content;
    `;

    const Container = styled.article`
      background: #ffffff;
      border: .5px solid lightgray;
      box-shadow: 1px 3px 3px rgba(0, 0, 0, .3);
      padding: 0 4%;
      grid-auto-flow: row;
      grid-column: 3/span 8; 
      margin: 2% 0;
      &>p{
        color: #34495e;
      }
    `;

    const Section = styled.section`
      margin-bottom: 3%;
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      grid-gap: 10px;
      padding-bottom: 4px;
      &>* {
        display: grid;
        align-items: center;
        margin: 0;
        justify-content: start;
        grid-row: span 1;
      }
    `;

    const HeadingPrimary = styled.h2`
      color: #27ae60;
      grid-column: 1/ -1;
      padding-bottom: 9px;
      white-space: pre-wrap;
    `;

    const HeadingSecondary = styled.h3`
      grid-column: 1/span 3;
      color: #3498db;
      white-space: pre-wrap;
    `;

    const Position = styled.h1`
      color: #27ae60;
      border-bottom: 2px solid #27ae60;
      text-align: center;
      text-transform: uppercase;
      word-break: break-all;
    `;

    const Company = styled.h3`
      text-align: center;
      text-transform: uppercase;
      word-break: break-all;
      color: green;
    `;

    const CompanyPhone = styled.p`
      grid-column: 4/ -1;
      white-space: pre-wrap;
    `;

    const CompanyEmail = styled.p`
      grid-column: 4/ -1;
      word-break: break-all;
    `;

    const CompanyLocation = styled.p`
      grid-column: 4/ -1;
      white-space: pre-wrap;
    `;

    const JobID = styled.p`
      grid-column: 4/ -1;
      word-break: break-all;
    `;

    const Status = styled.p`
      grid-column: 4/ -1;
      word-break: break-all;
    `;

    const DateApplied = styled.p`
      grid-column: 4/ -1;
      word-break: break-all;
    `;

    const Source = styled.p`
      grid-column: 4/ -1;
      word-break: break-all;
    `;

    const Compensation = styled.p`
      grid-column: 4/ -1;
      word-break: break-all;
    `;

    const JobDetails = styled.p`
      grid-column: 1/ -1;
      white-space: pre-wrap;
    }
    `;

    const DateCreated = styled.p`
      text-align: end;
      word-break: break-all;
    `;

    return (
      <Main>
        <Container>
          <Position> {position || 'Loading...'} </Position>
          <Company> {company || 'Loading...'} </Company>
          <Section>
            <HeadingPrimary>Company Contact Info</HeadingPrimary>
            <HeadingSecondary>Telephone Number:</HeadingSecondary>
            <CompanyPhone> {companyPhone || 'Not Specified'} </CompanyPhone>
            <HeadingSecondary>Email Address:</HeadingSecondary>
            <CompanyEmail> {companyEmail || 'Not Specified'} </CompanyEmail>
            <HeadingSecondary>Location:</HeadingSecondary>
            <CompanyLocation> {companyLocation || 'Not Specified'} </CompanyLocation>
          </Section>
          <Section>
            <HeadingPrimary>Job Details</HeadingPrimary>
            <HeadingSecondary>Status:</HeadingSecondary>
            <Status> {status || 'Not Specified'} </Status>
            <HeadingSecondary>Job ID:</HeadingSecondary>
            <JobID> {jobID || 'Not Specified'} </JobID>
            <HeadingSecondary>Date Applied:</HeadingSecondary>
            <DateApplied>
              {
                `${moment(dateApplied)
                  .add('day')
                  .format('LL')} (${(moment(Date.parse(dateApplied))
                  .fromNow()).includes('hours') ?
                  'today' :
                  `about ${moment(dateApplied)
                  .fromNow()}`})` || 'Not Specified'
              }
            </DateApplied>
            <HeadingSecondary>Compensation</HeadingSecondary>
            <Compensation> {compensation || 'Not Specified'} </Compensation>
            <HeadingSecondary>Source:</HeadingSecondary>
            <Source> {source || 'Not Specified'} </Source>
          </Section>
          <Section>
            <HeadingPrimary >Additional Information</HeadingPrimary>
            <JobDetails> {jobDetails || 'No Information'} </JobDetails>
          </Section>
          {/* <Favorite></Favorite> */}
          <DateCreated> {`Created ${moment(dateCreated).fromNow()}` || 'Loading...'} </DateCreated>
        </Container>
      </Main>
    );
  }
}

const mapStateToProps = ({ data, application }) => ({
  data,
  application,
});

export default connect(mapStateToProps, actions)(withRouter(SingleItem));

