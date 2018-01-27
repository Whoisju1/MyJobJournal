import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/fontawesome-free-solid';
import styled, { keyframes } from 'styled-components';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import JobList from './JobList';
// import PropTypes from 'prop-types';
import * as actions from '../actions';
import Sorter from './Sorter';
import sorter from './../util/arraySort';
import Modal from './Modal';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sort: 'dateCreated',
      isReversed: false,
      jobNotes: null,
      modal: {
        isModalVisible: false,
        id: '',
        company: '',
      },
    };
  }

  componentDidMount() {
    this.props.fetchData();
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillReceiveProps({ data, deleted, added }) {
    if (data !== this.props.data) this.setState({ jobNotes: data.applications });
    if (deleted !== this.props.deleted) this.setState({ jobNotes: deleted.applications });
    if (added !== this.props.added) this.setState({ jobNotes: added.applications });
  }

  handleClick(item) {
    this.setState({ sort: item });
  }

  render() {
    const primaryColor = '#27ae60';

    const Container = styled.section`
      display: grid;
      grid-row: 2/-1;
      min-width: 100%;
      align-items: center;
      padding-top: 2%;
      overflow: auto;
      margin: 0 auto;
      width: 100vw;
      grid-auto-rows: max-content;
      grid-auto-flow: row;
      grid-template-columns: ${props => (props.content ? '25% 50% 25%' : 'none')};
      grid-gap: 10px;
    `;

    const Instructions = styled.h1`
      width: 100%;
      grid-column: 1/-1;
      grid-row: 1/-1;
      display: grid;
      justify-content: center;
      align-items: center;
      color: ${primaryColor};
      font-weight: bold;
      font-size: 2em;
    `;

    const spin = keyframes`
      0% {
        transform: rotateZ(1deg);
      }
      0% {
        transform: rotateZ(360deg);
      }
    `;

    const Spinner = styled.div`
      border-top: 5px solid ${primaryColor};
      width: 100px;
      height: 100px;
      animation-name: ${spin};
      animation-duration: 1s;
      animation-direction: normal;
      animation-play-mode: running;
      animation-iteration-count: infinite;
      animation-fill-mode: both;
      border-radius: 100px;
      margin: 0 auto;
      color: ${primaryColor};
      font-weight: 800;
      position: relative;
      grid-column: 1/-1;
      display: grid;
      align-items: center;
      justify-content: center;
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

    return (
      <Container content={this.state.jobNotes && this.state.jobNotes.length}>
        <Modal
          id={this.state.modal.id}
          company={this.state.modal.company}
        />
        {
          (this.state.jobNotes && this.state.jobNotes.length > 1) &&
          <Sorter
            callback={this.handleClick}
            descend={() => this.setState({ isReversed: false })}
            ascend={() => this.setState({ isReversed: true })}
            sort={this.state.sort}
            isReversed={this.state.isReversed}
          />
        }
        {
           (this.state.jobNotes === null) ?
           (<Spinner />) :
           (this.state.jobNotes.length) ?
           (<JobList
             jobs={sorter(this.state.jobNotes, this.state.sort, this.state.isReversed)}
             callback={(values) => {
               const { modal } = this.state;
               modal.id = values._id;
               modal.company = values.company;
               this.setState({ modal });
             }}
           />) :
            (<Instructions>{'Click on the plus sign below to start keeping record of where you\'ve applied for employment.'}</Instructions>)
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

Dashboard.propTypes = {
  fetchData: PropTypes.func.isRequired,
  data: PropTypes.object,
  update: PropTypes.object,
  added: PropTypes.object,
  deleted: PropTypes.object,
};

const mapStateToProps = ({
  data, update, deleted, added,
}) => ({
  data, update, deleted, added,
});

export default connect(mapStateToProps, actions)(Dashboard);
