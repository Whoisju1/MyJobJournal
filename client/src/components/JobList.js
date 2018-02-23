import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import moment from 'moment';
import { Link } from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/fontawesome-free-regular';
import Favorite from './Favorite';

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

const Application = styled.section`
display: grid;
grid-auto-flow: row;
grid-auto-rows: max-content;
box-shadow: 3px 2px 10px rgba(0, 0, 0, .2);
grid-column: 2/3;
padding: 1% 2%;
transition: box-shadow .5s ease;
background: #FFFFFF;
grid-gap: 5px;
&:nth-last-child(2) {
  margin-bottom: 3%;
}
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
@media screen and (max-width: 963px) {
  grid-column: 1/-1;
  margin: 0 .7%;
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
@media screen and (max-width: 510px) {
    justify-content: start;
  } 
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
justify-content: center;
align-items: center;
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
height: 1.5em;
overflow-y: hidden;
word-break: break-all;
margin: 0;
width: 100%;
}
&>p::after {
content: " ";
position: absolute;
top: 0;
right: 0;
height: 1.5em;
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
@media screen and (min-width: 1000px) {
  &>*{
    opacity: 0;
    transition: all .5s ease-out;
    transform: translateY(-4px);
  }
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
  icon: faTrashAlt,
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


const JobList = ({ jobs, callback }) => jobs.map(job => (
  <Application key={job._id}>
    <HeadingWrapper>
      <Position to={`/application/${job._id}`}> {job.position} </Position>
      <Position to={`/application/${job._id}`} tran="translate"> Click Here to View Notes </Position>
    </HeadingWrapper>
    <HeadingWrapper>
      <Company to={`/application/${job._id}`}> {job.company} </Company>
      <Company to={`/application/${job._id}`} tran="translate"> Click Here to View Notes </Company>
    </HeadingWrapper>
    <Content>
      <JobDetail>
        <JobDetailHeading content={job.status}> Status: </JobDetailHeading> {job.status}
      </JobDetail>
      <DetailInfoSample>
        <JobDetailHeading content={job.jobDetails}> Additional Information: </JobDetailHeading> <p> {job.jobDetails || 'NO INFORMATION'} </p>
      </DetailInfoSample>
      <JobDetail>
        <JobDetailHeading content={job.dateApplied}> Date Applied: </JobDetailHeading> {job.dateApplied ? (`${moment(job.dateApplied).format('dddd, MMMM Do YYYY')} (${moment(job.dateApplied).fromNow()})`) : 'No Date Specified'}
      </JobDetail>
      <JobDetail>
        <JobDetailHeading content={job.dateCreated}> Date Created: </JobDetailHeading> {job.dateCreated ? (`${moment(job.dateCreated).format('dddd, MMMM Do YYYY')} (${moment(job.dateCreated).fromNow()})`) : 'No Date Specified'}
      </JobDetail>
    </Content>
    <IconsContainer>
      <Favorite
        id={job._id}
      />
      <Link to={`/edit/${job._id}`} title="Edit">
        <Edit />
      </Link>
      <IconWrapper
        title="Delete"
        onClick={() => {
          const { _id, company } = job;
          callback({
            _id,
            company,
          });
        }}
        href={`#${job._id}`}
      >
        <Delete />
      </IconWrapper>
    </IconsContainer>
  </Application>
));

JobList.propTypes = {
  jobs: PropTypes.arrayOf(PropTypes.object).isRequired,
  callback: PropTypes.func.isRequired,
};

export default JobList;
