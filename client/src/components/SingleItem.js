import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit } from '@fortawesome/fontawesome-free-regular';
import styled from 'styled-components';
import moment from 'moment';
import { withRouter, Link } from 'react-router-dom';
import * as actions from '../actions';
import Modal from './Modal';

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
    }
  }

  render() {
    const {
      _id,
      position,
      company,
      companyPhone,
      companyEmail,
      companyWebsite,
      companyLocation,
      jobID,
      status,
      dateApplied,
      compensation,
      jobDetails,
      source,
      dateCreated,
    } = this.state.application;

    const Main = styled.main`
      display: grid;
      grid-template-columns: 1fr 3fr 1fr; 
      grid-auto-flow: row;
      overflow: auto;
      grid-auto-rows: min-content;
    `;

    const ItemContainer = styled.article`
      background: #ffffff;
      border: .5px solid lightgray;
      box-shadow: 1px 3px 3px rgba(0, 0, 0, .3);
      grid-column: 2/3;
      padding: 1% 4%;
      margin: 3% 0;
      @media screen and (max-width: 950px) {
        grid-column: 1/-1;
        margin: 3% 1%; 
      }
    `;

    const Section = styled.section`
     
    `;

    const HeadingPrimary = styled.h2`
      color: #27ae60;
      
      white-space: pre-wrap;
    `;

    const HeadingSecondary = styled.span`
      font-weight: bold;
      white-space: pre-wrap;
      color: #16a085;
    `;

    const Position = styled.h1`
      color: #27ae60;
      text-align: center;
      text-transform: uppercase;
      word-break: normal;
      font-weight: bold;
    `;

    const Company = styled.p`
      text-align: center;
      text-transform: uppercase;
      word-break: normal;
      color: #00b894;
      font-size: 1rem;
      border-bottom: .5px solid lightgray; 
      padding-bottom: 1%;
    `;

    const TopSection = styled.section`
      display: grid;
      grid-template-columns: repeat(2, 50%);
      grid-column-gap: 10px;
      @media screen and (max-width: 610px) {
        grid-template-columns: auto;
      }
    `;

    const ItemDetail = styled.p`
      
    `;

    const CompanyWebsite = styled.a.attrs({
      href: companyWebsite,
      target: '_blank',
    })`
    
    `;

    const JobDetails = styled.p`
      white-space: pre-wrap;
    }
    `;

    const DateCreated = styled.p`
      text-align: end;
      word-break: normal;
    `;

    const IconLinks = styled(Link)`
      display: grid;
      justify-self: end;
    `;

    const Delete = styled(FontAwesomeIcon).attrs({
      icon: faTrashAlt,
      size: 'lg',
    })`
      cursor: pointer;
      justify-self: end;
    `;

    const ModalLuncher = styled.a.attrs({
      href: `#${_id}`,
    })`
      &,
      &:link,
      &:visited {
        display: grid;
        justify-self: end;
        text-decoration: none;
      }
    `;

    const Edit = styled(FontAwesomeIcon).attrs({
      icon: faEdit,
      size: 'lg',
    })`
      justify-self: end;
    `;

    return (
      <Main>
        <Modal
          id={_id}
          company={company}
        />
        <ItemContainer>
          <Position> {position || 'Loading. ..'} </Position>
          <Company>{company || 'Loading...'} </Company>
          <TopSection>
            <Section>
              <HeadingPrimary>Company Contact Info</HeadingPrimary>
              <ItemDetail>
                <HeadingSecondary>Telephone Number: </HeadingSecondary>
                {companyPhone || 'Not Specified'}
              </ItemDetail>

              {/* <IconLinks to={`/edit/${_id}`} title="Edit">
                <Edit />
              </IconLinks> */}
              <ItemDetail>
                <HeadingSecondary>Email Address: </HeadingSecondary>
                {companyEmail || 'Not Specified'}
              </ItemDetail>
              <ItemDetail>
                <HeadingSecondary>Location: </HeadingSecondary>
                {companyLocation || 'Not Specified'}
              </ItemDetail>
              {/* <ModalLuncher title="Delete">
                <Delete />
              </ModalLuncher> */}
              <ItemDetail>
                <HeadingSecondary>Company Website: </HeadingSecondary>
                <CompanyWebsite>{companyWebsite}</CompanyWebsite>
              </ItemDetail>
            </Section>
            <Section>
              <HeadingPrimary>Job Details</HeadingPrimary>
              <ItemDetail>
                <HeadingSecondary>Status: </HeadingSecondary>
                {status || 'Not Specified'}
              </ItemDetail>
              <ItemDetail>
                <HeadingSecondary>Job ID: </HeadingSecondary>
                {jobID || 'Not Specified'}
              </ItemDetail>
              <ItemDetail>
                <HeadingSecondary>Date Applied: </HeadingSecondary>
                {
                  `${moment(dateApplied)
                    .add('day')
                    .format('LL')} (${(moment(Date.parse(dateApplied))
                    .fromNow()).includes('hours') ?
                    'today' :
                    `about ${moment(dateApplied)
                    .fromNow()}`})` || 'Not Specified'
                  }
              </ItemDetail>
              <ItemDetail>
                <HeadingSecondary>Compensation: </HeadingSecondary>
                {compensation || 'Not Specified'}
              </ItemDetail>
              <ItemDetail>
                <HeadingSecondary>Source: </HeadingSecondary>
                {source || 'Not Specified'}
              </ItemDetail>
            </Section>
          </TopSection>
          <Section>
            <HeadingPrimary >Additional Information</HeadingPrimary>
            <JobDetails> {jobDetails || 'No Information'} </JobDetails>
          </Section>
          {/* <Favorite></Favorite> */}
          <DateCreated> {`Created ${moment(dateCreated).fromNow()}` || 'Loading...'} </DateCreated>
        </ItemContainer>
      </Main>
    );
  }
}
SingleItem.defaultProps = {
  application: {
    application: null,
  },
  match: {
    params: {
      id: null,
    },
  },
};

SingleItem.propTypes = {
  application: PropTypes.shape({
    application: PropTypes.array,
  }),
  fetchApplication: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};

const mapStateToProps = ({ application }) => ({
  application,
});

export default connect(mapStateToProps, actions)(withRouter(SingleItem));

