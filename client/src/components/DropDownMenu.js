import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { faAngleDown } from '@fortawesome/fontawesome-free-solid';
import { connect } from 'react-redux';
import * as actions from '../actions';

class DropDownMenu extends Component {
  /* eslint no-useless-constructor: "off" */
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // make sure drop down is hidden when component mounts
    this.props.toggleSort(true);
  }

  render() {
    const primaryColor = '#27ae60';
    const expand = keyframes`
      0% {
        transform: translateY(-25%);
        opacity: 0;
      }
      100% {
          transform: translateY(0%);
          opacity: 1;
      }
    `;
    const DropDown = styled.div`
        display: grid;  
        grid-template-row: 1.5em max-content;
        background: #FFFFFFF;
        box-shadow: 3px 2px 10px rgba(0, 0, 0, .2);
        width: 170px;
        position:relative;
    `;

    const DropDownHeading = styled.div`
        display: grid;
        justify-content: space-around;
        align-items: center;
        grid-auto-flow: column;
        font-weight: 800;
        cursor: pointer;
        color: #433F3F;
        padding: 3% 0;
        position: relative;
        &:hover {
          background: #FFFBFF;
          color:${primaryColor};
        } 
    `;

    const DropDownBody = styled.div`
        display: grid;
        background: #FFFFFFF;
        position: absolute;
        top: 102%;
        width: 100%;
        grid-auto-flow: row;
        grid-template-row: repeat(auto-fill, 1.4em);
        transform: translateY(-25%);
        animation-name: ${expand};
        animation-duration: .2s;
        animation-fill-mode: both;
        animation-timing-function: ease;
        cursor: pointer;
        z-index: 1;
        background: #FFFFFF;
        box-shadow: 3px 2px 10px rgba(0, 0, 0, .2);
    `;

    const DropDownItem = styled.div`
        display: grid;
        justify-content: center;
        align-items: center;
        padding: 3% 0;
        background: ${props => props.isSelected && '#ecf0f1'};
        &:hover {
          background: ${primaryColor};
          color: #FFFFFF;
          font-weight: bold;
        } 
    `;

    const {
      isSortOpen,
      items,
      callback,
      toggleSort,
      heading,
      current,
    } = this.props;
    const selected = items.filter(item => item.val === current)[0].alias;
    return (
      <DropDown>
        <DropDownHeading onClick={() => toggleSort(isSortOpen)}>
          { `${heading} ${selected}`} <FontAwesomeIcon icon={faAngleDown} />
        </DropDownHeading>
        <DropDownBody style={{ display: isSortOpen ? 'grid' : 'none' }}>
          {items.map(item => (
            <DropDownItem
              key={item.val}
              onClick={() => {
                callback(item.val);
                toggleSort(isSortOpen);
                }}
              isSelected={item.alias === selected}
            >
              { item.alias }
            </DropDownItem>
            ))}
        </DropDownBody>
      </DropDown>
    );
  }
}

DropDownMenu.propTypes = {
  callback: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  heading: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
  current: PropTypes.string.isRequired,
  toggleSort: PropTypes.func.isRequired,
  isSortOpen: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ isSortOpen }) => ({ isSortOpen });

export default connect(mapStateToProps, actions)(DropDownMenu);
