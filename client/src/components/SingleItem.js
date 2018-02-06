import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit, faCalendarAlt, faMoneyBillAlt, faFileAlt } from '@fortawesome/fontawesome-free-regular';
import { faPhone, faAt, faMapMarker, faGlobe, faCheckCircle, faIdCard } from '@fortawesome/fontawesome-free-solid';
import styled from 'styled-components';
import moment from 'moment';
import Linkify from 'react-linkify';
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
      position: relative;
      &:hover {
        &>.icon {
          opacity: 1;
        }
      }
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

    const PhoneIcon = styled(FontAwesomeIcon).attrs({
      icon: faPhone,
    })`
      color: #747d8c;
    `;

    const EmailIcon = styled(FontAwesomeIcon).attrs({
      icon: faAt,
    })`
      color: #747d8c;
    `;

    const LocationIcon = styled(FontAwesomeIcon).attrs({
      icon: faMapMarker,
    })`
      color: #747d8c;
    `;

    const WebsiteIcon = styled(FontAwesomeIcon).attrs({
      icon: faGlobe,
    })`
      color: #747d8c;
    `;

    const DateIcon = styled(FontAwesomeIcon).attrs({
      icon: faCalendarAlt,
    })`
      color: #747d8c;
    `;

    const StatusIcon = styled(FontAwesomeIcon).attrs({
      icon: faCheckCircle,
    })`
      color: #747d8c;
    `;

    const JobIdIcon = styled(FontAwesomeIcon).attrs({
      icon: faIdCard,
    })`
      color: #747d8c;
    `;

    const CompensationIcon = styled(FontAwesomeIcon).attrs({
      icon: faMoneyBillAlt,
    })`
      color: #747d8c;
    `;

    const SourceIcon = styled(FontAwesomeIcon).attrs({
      icon: faFileAlt,
    })`
      color: #747d8c;
    `;

    const DateCreated = styled.p`
      text-align: end;
      word-break: normal;
    `;

    const IconLinks = styled(Link).attrs({
      className: 'icon',
    })`
      position: absolute;
      right: 7px;
      top: 33px;
      transition: opacity .2s ease;
      transition: all .2s ease;
        &:hover {
          transform: scale(1.2);
          &>*{
              color: #70a1ff;
            }
        }
    `;

    const Delete = styled(FontAwesomeIcon).attrs({
      icon: faTrashAlt,
      size: 'lg',
    })`
      cursor: pointer;
    `;

    const ModalLuncher = styled.a.attrs({
      href: `#${_id}`,
      className: 'icon',
    })`
      &,
      &:link,
      &:visited {
        position: absolute;
        text-decoration: none;
        right: 11px;
        top: 81px;
        color: gray;
        transition: all .2s ease;
        transition: opacity .2s ease;
        &:hover {
          transform: scale(1.2);
          color: #ff4757;
        }
      }
    `;

    const Edit = styled(FontAwesomeIcon).attrs({
      icon: faEdit,
      size: 'lg',
    })`
      color: gray;
    `;

    return (
      <Main>
        <Modal
          id={_id}
          company={company}
        />
        <ItemContainer>
          <Linkify>
            <IconLinks to={`/edit/${_id}`} title="Edit">
              <Edit />
            </IconLinks>
            <ModalLuncher title="Delete">
              <Delete />
            </ModalLuncher>
            <Position> {position || 'Loading. ..'} </Position>
            <Company>{company || 'Loading...'} </Company>
            <TopSection>
              <Section>
                <HeadingPrimary>Company Contact Info</HeadingPrimary>
                <ItemDetail>
                  <PhoneIcon /> <HeadingSecondary>Telephone Number: </HeadingSecondary>
                  {companyPhone || 'Not Specified'}
                </ItemDetail>

                <ItemDetail>
                  <EmailIcon /> <HeadingSecondary>Email Address: </HeadingSecondary>
                  {companyEmail || 'Not Specified'}
                </ItemDetail>
                <ItemDetail>
                  <LocationIcon /> <HeadingSecondary>Location: </HeadingSecondary>
                  {companyLocation || 'Not Specified'}
                </ItemDetail>
                <ItemDetail>
                  <WebsiteIcon /> <HeadingSecondary>Company Website: </HeadingSecondary>
                  <CompanyWebsite>{companyWebsite}</CompanyWebsite>
                </ItemDetail>
              </Section>
              <Section>
                <HeadingPrimary>Job Details</HeadingPrimary>
                <ItemDetail>
                  <StatusIcon /> <HeadingSecondary>Status: </HeadingSecondary>
                  {status || 'Not Specified'}
                </ItemDetail>
                <ItemDetail>
                  <JobIdIcon /> <HeadingSecondary>Job ID: </HeadingSecondary>
                  {jobID || 'Not Specified'}
                </ItemDetail>
                <ItemDetail>
                  <DateIcon /> <HeadingSecondary>Date Applied: </HeadingSecondary>
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
                  <CompensationIcon /> <HeadingSecondary>Compensation: </HeadingSecondary>
                  {compensation || 'Not Specified'}
                </ItemDetail>
                <ItemDetail>
                  <SourceIcon /> <HeadingSecondary>Source: </HeadingSecondary>
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
          </Linkify>
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

