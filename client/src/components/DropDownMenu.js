import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

class DropDownMenu extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { isOpen } = this.state;
    isOpen ? this.setState({ isOpen: false }) : this.setState({ isOpen: true });
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
        width: 150px;
        position:relative;
    `;

    const DropDownHeading = styled.div`
        padding: 3% 0;
        display: grid;
        justify-content: center;
        align-items: center;
        text-transform: uppercase;
        font-weight: 800;
        cursor: pointer;
        color: #433F3F;
        position: relative;
        &:hover {
          background: #FFFBFF;
          color:${primaryColor};
        } 
        &:after {
          content: "${props => (props.content ? props.content : ' ')}";
          display: grid;  
          justify-content: center;
          align-items: center;
          position: absolute;
          height: 100%;
          width: 125%;
          top: 0;
          right: -195px;
          color: lightgray;
          cursor: initial;
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

    const { current } = this.props;
    const selected = this.props.items.filter(item => item.val === current)[0].alias;

    return (
      <DropDown>
        <DropDownHeading onClick={this.handleClick} content={`-- Sorted by ${selected}.`}>
          { this.props.heading }
        </DropDownHeading>
        <DropDownBody style={{ display: this.state.isOpen ? 'grid' : 'none' }}>
          {this.props.items.map(item => (
            <DropDownItem
              key={item.val}
              onClick={() => this.props.callback(item.val)} 
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

export default DropDownMenu;
