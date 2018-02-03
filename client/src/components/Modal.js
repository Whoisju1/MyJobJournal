import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

const DeleteModal = ({
  id, deleteData,
}) => {
  const primaryColor = '#27ae60';

  const ModalBackground = styled.div.attrs({
    id,
  })`
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
    bottom: 50%;
    left: 50%;
    transform: translateY(50%) translateX(-50%);
    height: 300px;
    width: 500px;
    @media screen and (max-width: 525px) {
      width: 95vw;
    }
    background: #ecf0f1;
    padding: 1% 1% 1.5% 1% ;
  `;

  const ModalHeading = styled.h1`
    background: ${primaryColor};
    color: #FFFFFF;
    display: flex;
    margin: 0;
    text-transform: uppercase;
    ${'' /* padding-bottom: .7%; */}
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
        outline-offset: 2px;
        border-radius: 0px;
      }
    }
    &,
    &:link {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 1.7em;
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
    <ModalBackground>
      <Modal>
        <ModalHeading>You are about to delete your notes for this position</ModalHeading>
        <ModalMessage>
          {'Do you wish to continue? Press "Delete" to proceed or "No" to cancel.'}
        </ModalMessage>
        <ButtonWrapper>
          <CancelButton to="/applications">
            No! I change my mind.
          </CancelButton>
          <DeleteButton
            to="/applications"
            onClick={() => {
              deleteData(id);
            }}
          >
            Delete
          </DeleteButton>
        </ButtonWrapper>
      </Modal>
    </ModalBackground>
  );
};

DeleteModal.defaultProps = {
  id: 'hidden',
};

DeleteModal.propTypes = {
  deleteData: PropTypes.func.isRequired,
  id: PropTypes.string,
};


export default connect(null, actions)(DeleteModal);
