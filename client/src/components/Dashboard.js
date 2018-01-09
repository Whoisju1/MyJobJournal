import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faSortAmountDown, faSortAmountUp, faTrash, faPlusCircle } from '@fortawesome/fontawesome-free-solid';
import { faHeart, faEdit } from '@fortawesome/fontawesome-free-regular';
import styled, { keyframes } from 'styled-components';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';
// import PropTypes from 'prop-types';
import * as actions from '../actions';
import DropDownMenu from './DropDownMenu';

import sorter from './../util/arraySort';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sort: 'dateCreated',
      isReversed: false,
      jobNotes: null,
    };
  }


  componentDidMount() {
    this.props.fetchData();
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.data !== this.props.data) this.setState({ jobNotes: nextProps.data.applications });
    if (nextProps.deleted !== this.props.deleted) this.setState({ jobNotes: nextProps.deleted.applications });
    if (nextProps.added !== this.props.added) this.setState({ jobNotes: nextProps.added.applications });
  }

  handleClick(item) {
    this.setState({ sort: item });
  }

  render() {
    const primaryColor = '#27ae60';
    const fadeIn = keyframes`
        0% {
          opacity: 0;
          transform: translateX(-6px)
        }
        100% {
          opacity: 1;
          transform: translateX(1px)
        }
    `;
    const Container = styled.section`
        display: grid;
        min-width: 100%;
        margin: 0 auto;
        justify-items: center;
        grid-auto-rows: max-content;
        grid-auto-flow: row;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 10px;
        margin: 1% 0;
    `;

    const Application = styled.section`
        display: grid;
        grid-auto-flow: row;
        grid-auto-rows: max-content;
        box-shadow: 3px 2px 10px rgba(0, 0, 0, .2);
        width: 51%;
        min-width: 723px;
        grid-column: 2/3;
        ${''}
        padding: 1% 2%;
        transition: box-shadow .5s ease;
        background: #FFFFFF;
        grid-gap: 5px;
        ${''/* TARGET ICONS UPON HOVER */}
        &:hover {
            box-shadow: 4px 3px 13px rgba(0, 0, 0, .2);
          &>div:last-child {
            &>*{
              opacity: 1;
              transform: translateY(1px);
            }
          }
        }
        @media screen and (max-width: 900px ) {
          min-width: 95vw;
          border: .5px solid gray;
        }
    `;

    const HeadingWrapper = styled.section`
        display: grid;
        grid-auto-flow: row;
        grid-auto-rows: max-content;
        position: relative;
        height: 2rem;
        perspective: 1500;
        &:hover a:nth-child(1){
            transform: rotateX(180deg);
        }
        &:hover a:nth-child(2){
            transform: rotateX(0deg);
        }
    `;

    const Position = styled(Link)`
        background-color: ${props => (props.tran ? '#7f8c8d' : primaryColor)};
        color: #FFFFFF;
        display: grid;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        justify-content: center;
        align-items: end;
        padding: 1%;
        text-decoration: none;
        text-transform: uppercase;
        letter-spacing: .5px;
        transition: all .5s ease-in;
        transition-delay: .5s;
        transform: ${props => (props.tran ? 'rotateX(180deg)' : 'none')};
        backface-visibility: hidden;
        -moz-backface-visibility: hidden;
        text-decoration: none;
        &:hover {
          color: #FFFFFF;
         text-decoration: none;
          &:before {
            text-decoration: none;
            content: ">>";
            display: grid;
            padding-right: 3%;
            font-weight: bold;
            justify-content: right;
            align-items: center;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            color: #FFFFFF;
            opacity: 0;
            animation-name: ${fadeIn};
            animation-duration: 1s;
            animation-iteration-count: infinite;
            animation-direction: forwards;
            animation-delay: 1s;
            backface-visibility: visible;
          }
        }
    `;

    const Company = Position.extend`
        margin-bottom: .5%;
        color: ${props => (props.tran ? '#FFFFFF' : primaryColor)};
        background-color: ${props => (props.tran ? '#7f8c8d' : '#FFFFFF')};
        border-bottom: ${props => (!props.tran && `1px solid ${primaryColor}`)}; 
        border-top: ${props => (!props.tran && `1px solid ${primaryColor}`)}; 
        font-weight: ${props => (!props.tran && 600)};
    `;


    const Content = styled.section`
        display: grid;
        grid-auto-flow: row;
        grid-gap: 15px;
        border-right: 4px solid ${primaryColor};
    `;

    const JobDetail = styled.span`
        display: grid;
        grid-auto-flow: column;
        justify-content: start;
        grid-gap: 2px;
    `;
    const JobDetailHeading = styled.span`
        color: ${props => (props.content ? primaryColor : '#bdc3c7')};
        text-transform: uppercase;
        font-weight: 600;
    `;

    const DetailInfoSample = JobDetail.extend`
      display: grid;
      position: relative;
      grid-auto-flow: column;
      &>p {
        overflow-y: hidden;
        height: 1em;
      }
      &>p::after {
        content: " ";
        position: absolute;
        bottom: 0;
        right: 0;
        height: 1em;
        width: 20%;
        text-align: right;
        background-image: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1) 50%);
      }
    `;

    const IconsContainer = styled.div`
        display: grid;
        justify-content: center;
        align-items: center;
        grid-auto-flow: column;
        justify-content: space-around;
        &>*{
          opacity: 0;
          transition: all .5s ease-out;
          transform: translateY(-4px);
        }
        border-top: .5px solid ${primaryColor};
        padding-top: 1%;
        margin-top: 1%;
        vertical-align: middle;
        &>*{
            text-align: center;
            vertical-align: middle;
        }
    `;

    const AddWrapper = styled(Link).attrs({
      to: '/add',
    })`
        transform: scale(4);
        position: fixed;
        right: 10%;
        bottom: 10%;
    `;

    const Add = styled(FontAwesomeIcon).attrs({
      icon: faPlusCircle,
      size: '1x',
    })`
        text-shadow: 2px 6px 20px rgba(0, 0, 0, .3);
        z-index: 1;
        &:hover {
          color: ${primaryColor};
        }
    `;

    const Favorite = styled(FontAwesomeIcon).attrs({
      icon: faHeart,
    })`
      transform: scale(1.2);
      transition: all .5s ease;
      fill: none;
      color: gray;
      border-radius: 3px;
      transform-origin: 50% 50%;
      cursor: pointer;
      &:hover {
        transform: scale(1.6);
        color: #e74c3c;
      }
    `;

    const Edit = styled(FontAwesomeIcon).attrs({
      icon: faEdit,
    })`
      transition: all .5s ease;
      transform: scale(1.2);
      color: gray;
      &:hover {
        transform: scale(1.5);
        color: #3498db;
      }
    `;

    const Delete = styled(FontAwesomeIcon).attrs({
      icon: faTrash,
    })`
      transform: scale(1.2);
      transition: all .5s ease;
      color: gray;
      cursor: pointer;
      &:hover {
        transform: scale(1.5);
        color: #e74c3c;
      }
    `;

    const IconWrapper = styled.a`
      outline: none;
    `;

    const SortWrapper = styled.div`
      width: 100%;
      display: grid;
      grid-gap: 5px;
      grid-row: 1/2;
      grid-column: 2/3;
      grid-auto-flow: column;
      justify-content: start;
    `;

    const ReverseSortWrapper = styled.a`
      &,
      &:link,
      &:visited {
        display: grid;
        justify-content: center;
        align-items: center;
        box-shadow: 3px 2px 10px rgba(0, 0, 0, .2);
        width: 2em;
        cursor: pointer;
        transition: all 1ms ease;
        color: gray;
      }
      &:hover {
        color: ${primaryColor};
      }
      &:active {
        transform: translateY(2px);
        ${''}
      }
    `;

    const SortDescending = styled(FontAwesomeIcon).attrs({
      icon: faSortAmountDown,
      size: 'lg',
    })`
      color: ${props => (!props.isSelected ? primaryColor : 'gray')};
    `;

    const SortAscending = styled(FontAwesomeIcon).attrs({
      icon: faSortAmountUp,
      size: 'lg',
    })`
      color: ${props => (props.isSelected ? primaryColor : 'gray')};
    `;

    const ModalBackground = styled.div`
      display: none;
      background-color: rgba(0, 0, 0, .8);
      position: fixed;
      top: 0;
      left: 0;
      height: 100vh;
      width: 100vw;
      z-index: 2;
      @keyframes open {
        0% {
          transform: scale(0);
        }
        100% {
          transform: scale(1);
        }
      }
      animation-name: open;
      animation-timing-function: ease-out;
      animation-duration: .2s;
      &:target {
        display: block;
      }
    `;

    const Modal = styled.div`
      position: fixed;
      display: grid;
      grid-template-rows: 20% 54% 17%;  
      grid-gap: 3px;
      bottom: 50%;
      left: 50%;
      transform: translateY(50%) translateX(-50%);
      height: 300px;
      width: 500px;
      border: 2px solid black;
      border-radius: 31px;
      background: #ecf0f1;
      padding: 1% 1% 1.5% 1% ;
    `;

    const ModalHeading = styled.h1`
      background: ${primaryColor};
      color: #FFFFFF;
      display: flex;
      text-transform: uppercase;
      padding-bottom: .7%;
      border-top-left-radius: 17px;
      border-top-right-radius: 17px;
      text-align: center;
      font-size: 130%;
      justify-content: center;
      align-items: center;
    `;

    const ModalMessage = styled.h1`
      display: flex;
      justify-content: center;
      align-items: center;
      color: #7f8c8d;
      text-align: center;
      font-size: 110%;
      font-weight: 600;
    `;

    const ButtonWrapper = styled.div`
        display: grid;
        justify-content: center;
        grid-gap: 4%;
        grid-auto-flow: column;
        grid-auto-columns: repeat(max-content, 1fr);
        border-bottom: 1px solid #7f8c8d;
    `;

    const DeleteButton = styled(Link)`
      @keyframes outlined {
        0% {
          outline: 0px solid #e74c3c;
          outline-offset: 0px;
        }
        100% {
          outline: 2.5px solid #e74c3c;
          outline-offset: 6px;
          border-radius: 0px;
        }
      }
    
      &,
      &:link {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 1.5em;
        color: #e74c3c;
        border: 2.5px solid #e74c3c;
        font-weight: 500;
        border-radius: 5px;
        padding: .5%;
        text-decoration: none;
        outline: none;
        transition: all .4s ease;
        display: inline-block;
        text-transform: uppercase;
        padding: .5% 1em;
        font-weight: bold;
      }
      &:hover {
        background: #e74c3c;
        color: #FFFFFF;
        border:  #00000;
        animation-name: outlined;
        animation-timing-function: ease-out;
        animation-duration: .3s;
        animation-direction: alternate;
        animation-fill-mode: both;
      }
    `;

    const CancelButton = styled(Link)`
      &,
      &:link {
        display: inline-block;
        color: #7f8c8d;
        text-decoration: underline;
      }
      &:hover {
        color: #000000;
      }
    `;

    return (
      <Container class="container">
        <SortWrapper>
          <ReverseSortWrapper>
            <SortDescending
              onClick={() => this.setState({ isReversed: !this.state.isReversed })}
              isSelected={this.state.isReversed}
            />
          </ReverseSortWrapper>
          <ReverseSortWrapper>
            <SortAscending
              onClick={() => this.setState({ isReversed: true })}
              isSelected={this.state.isReversed}
            />
          </ReverseSortWrapper>
          <DropDownMenu
            items={[
              {
                val: 'position',
                alias: 'Position',
              },
              {
                val: 'company',
                alias: 'Company',
              },
              {
              val: 'dateApplied',
              alias: 'Date Applied',
              },
              {
                val: 'dateCreated',
                alias: 'Date Created',
              },
              {
                val: 'status',
                alias: 'Status',
                },
              ]}
            callback={this.handleClick}
            heading="Sort by..."
            current={this.state.sort}
          />
        </SortWrapper>
        {
           (this.state.jobNotes) ? (sorter(this.state.jobNotes, this.state.sort, this.state.isReversed).map((job) => {
             const {
                 _id,
                 position,
                 company,
                 dateApplied,
                 dateCreated,
                 status,
                 jobDetails,
                 companyInfo,
                 } = job;
             return (
               <Application key={_id}>
                 <ModalBackground id={job._id}>
                   <Modal>
                     <ModalHeading>
                       {`You are about to delete your notes for the job opening at "${job.company}"!`}
                     </ModalHeading>
                     <ModalMessage>
                       {'Do you wish to continue? Press "YES" to do so or press "No" to cancel.'}
                     </ModalMessage>
                     <ButtonWrapper>
                       <CancelButton to="/applications">
                         No! I change my mind.
                       </CancelButton>
                       <DeleteButton
                         to="/applications"
                         onClick={() => {
                           this.props.deleteData(job._id);
                           if (this.props.deleted) this.setState({ jobNotes: this.props.deleted.applications });
                           }}
                       >
                         Yes
                       </DeleteButton>
                     </ButtonWrapper>
                   </Modal>
                 </ModalBackground>
                 <HeadingWrapper>
                   <Position to={`/application/${job._id}`}> {position} </Position>
                   <Position to={`/application/${job._id}`} tran> Click Here to View Notes </Position>
                 </HeadingWrapper>
                 <HeadingWrapper>
                   <Company to={`/application/${job._id}`}> {company} </Company>
                   <Company to={`/application/${job._id}`} tran> Click Here to View Notes </Company>
                 </HeadingWrapper>
                 <Content>
                   <JobDetail>
                     <JobDetailHeading content={status}> Status: </JobDetailHeading> {status}
                   </JobDetail>
                   <DetailInfoSample>
                     <JobDetailHeading content={companyInfo}> Company Information: </JobDetailHeading> <p> {companyInfo || 'NO INFORMATION'} </p>
                   </DetailInfoSample>
                   <DetailInfoSample>
                     <JobDetailHeading content={jobDetails}> Additional Information: </JobDetailHeading> <p> {jobDetails || 'NO INFORMATION'} </p>
                   </DetailInfoSample>
                   <JobDetail>
                     <JobDetailHeading content={dateApplied}> Date Applied: </JobDetailHeading> {dateApplied ? (`${moment(dateApplied).format('dddd, MMMM Do YYYY')} (${moment(dateApplied).fromNow()})`) : 'No Date Specified'}
                   </JobDetail>
                   <JobDetail>
                     <JobDetailHeading content={dateCreated}> Date Created: </JobDetailHeading> {dateCreated ? (`${moment(dateCreated).format('dddd, MMMM Do YYYY')} (${moment(dateCreated).fromNow()})`) : 'No Date Specified'}
                   </JobDetail>
                 </Content>
                 <IconsContainer>
                   <Favorite />
                   <Link to={`/edit/${job._id}`}>
                     <Edit />
                   </Link>
                   <IconWrapper href={`#${job._id}`}>
                     <Delete />
                   </IconWrapper>
                 </IconsContainer>
               </Application>
             );
           })) :
            (<p>No data yet</p>)
        }
        <AddWrapper>
          <Add
            name="plus-circle"
          />
        </AddWrapper>
      </Container>
    );
  }
}

// Dashboard.propTypes = {
//   data: PropTypes.object,
// };

const mapStateToProps = ({
  data, update, deleted, added,
}) => ({
  data, update, deleted, added,
});

export default connect(mapStateToProps, actions)(Dashboard);
