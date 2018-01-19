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

  // renderContent() {
  //   const dltData = this.props.deleteData.bind(this);
  //   const requestConfirmation = this.requestConfirmation.bind(this);
  //   const closeModal = this.closeModal.bind(this);
  //   if (this.props.data !== null) {
  //     return this.props.data.applications.map((item) => {
  //       const showModal = () => {
  //         if (this.state.showConfirm) {
  //           return <DeleteBtn cb={() => dltData(item._id)} close={closeModal} />;
  //         }
  //       };
  //       const param = this.props.match.params.id;
  //       if (param === item._id) {
  //         return (
  //           <div key={item._id} className="item-detailed">
  //             <div className="single-output">
  //               <span className="single-title"> Status:</span>{' '}
  //               {item.status || <span className="no-content">Not Specified</span>}
  //             </div>
  //             <div className="single-output">
  //               <span className="single-title"> Company:</span>{' '}
  //               {item.company || <span className="no-content">Not Specified</span>}
  //             </div>
  //             <div className="single-output">
  //               <span className="single-title"> Position:</span>{' '}
  //               {item.position || <span className="no-content">Not Specified</span>}
  //             </div>
  //             <div className="single-output single-inline">
  //               <span className="single-title">Company Info: </span>
  //               <div className="larger-content">
  //                 {item.companyInfo || <span className="no-content">N/A</span>}
  //               </div>
  //             </div>
  //             <div className="single-output">
  //               <span className="single-title"> Email:</span>{' '}
  //               {item.companyEmail || <span className="no-content">Not Specified</span>}
  //             </div>
  //             <div className="single-output">
  //               <span className="single-title"> Phone Number:</span>{' '}
  //               {item.companyPhone || <span className="no-content">Not Specified</span>}
  //             </div>
  //             <div className="single-output">
  //               <span className="single-title"> Location:</span>{' '}
  //               {item.companyLocation || <span className="no-content">Not Specified</span>}
  //             </div>
  //             <div className="single-output">
  //               <span className="single-title"> Source:</span>{' '}
  //               {item.source || <span className="no-content">Not Specified</span>}
  //             </div>
  //             <div className="single-output">
  //               <span className="single-title"> Company Website:</span>{' '}
  //               {item.companyWebsite ? <a href={item.companyWebsite}>{item.companyWebsite}</a> : <span className="no-content">Not Specified</span>}
  //             </div>
  //             <div className="single-output">
  //               <span className="single-title"> Job ID/Number:</span>{' '}
  //               {item.jobID || <span className="no-content">Not Specified</span>}
  //             </div>
  //             <div className="single-output">
  //               <span className="single-title">Date of Application:</span>{' '}
  //               {item.dateApplied ? (
  // 								`${moment(item.dateApplied)
  // 									.add(1, 'day')
  // 									.format('LL')} (${(moment(Date.parse(item.dateApplied)).fromNow()).includes('hours') ? 'today' : `about ${moment(item.dateApplied).fromNow()}`})`
  // 							) : (
  //                     <span className="no-content">Not Specified</span>
  // 							)}
  //             </div>
  //             <div className="single-output">
  //               <span className="single-title"> Requirements:</span>{' '}
  //               {item.requirements || <span className="no-content">Not Specified</span>}
  //             </div>
  //             <div className="single-output">
  //               <span className="single-title"> Compensation:</span>{' '}
  //               {item.compensation || <span className="no-content">Not Specified</span>}
  //             </div>
  //             <div className="single-output">
  //               <span className="single-title">Additional Details:</span>
  //               <div className="larger-content">
  //                 {item.jobDetails || <span className="no-content">N/A</span>}
  //               </div>
  //             </div>
  //             <div className="date-created single-output">
  //               {`Created ${moment(item.dateCreated).fromNow()}`}
  //             </div>
  //             <div className="single-output">
  //               <Icon icon={ic_delete_forever} className="dlt" onClick={requestConfirmation} />
  //             </div>
  //             {showModal()}
  //             <Link to="/add">
  //               <Icon icon={ic_add_circle} size={75} className="open-form" />
  //             </Link>
  //             <Link to={`/edit/${item._id}`}>
  //               <i className="fa fa-pencil-square-o" aria-hidden="true" />
  //             </Link>
  //           </div>
  //         );
  //       }
  //     });
  //   }
  // }

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
    `;

    const Container = styled.article`
      background: #ffffff;
      border: .5px solid lightgray;
      box-shadow: 1px 3px 3px rgba(0, 0, 0, .3);
      padding: 0 4%;
      grid-auto-flow: row;
      grid-column: 3/span 8; 
      margin: 2% 0;
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
    `;
    
    const HeadingSecondary = styled.h3`
      grid-column: 1/span 3;
      color: #34495e;
    `;

    const Position = styled.h1`
      color: #27ae60;
      border-bottom: 2px solid #27ae60;
      text-align: center;
      text-transform: uppercase;
    `;

    const Company = styled.h3`
      text-align: center;
      text-transform: uppercase;
    `;

    const CompanyPhone = styled.p`
      grid-column: 4/ -1;
    `;

    const CompanyEmail = styled.p`
      grid-column: 4/ -1;
    `;

    const CompanyLocation = styled.p`
      grid-column: 4/ -1;
    `;

    const JobID = styled.p`
      grid-column: 4/ -1;
    `;

    const Status = styled.p`
      grid-column: 4/ -1;
    `;

    const DateApplied = styled.p`
      grid-column: 4/ -1;
    `;

    const Source = styled.p`
      grid-column: 4/ -1;
    `;

    const Compensation = styled.div`
      grid-column: 4/ -1;
    `;

    const JobDetails = styled.p`
      grid-column: 1/ -1;
      white-space: pre-wrap;
    }
    `;

    const DateCreated = styled.p`
      text-align: end;

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

