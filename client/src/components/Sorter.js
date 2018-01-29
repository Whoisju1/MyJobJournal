import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { faSortAmountDown, faSortAmountUp } from '@fortawesome/fontawesome-free-solid';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import DropDownMenu from './DropDownMenu';

const primaryColor = '#27ae60';

const SortWrapper = styled.div`
display: grid;
grid-gap: 5px;
grid-row: 1/2;
grid-column: 2/3;
grid-auto-flow: column;
justify-content: space-between;
@media screen and (max-width: 963px) {
  grid-column: 1/-1;
  margin: 0 .7%;
} 
`;

const ReverseSortWrapper = styled.div`
display: grid;
grid-auto-flow: column;
grid-gap: 10px;
grid-template-columns: max-content;
cursor: pointer;
transition: all 1ms ease;
color: gray;
`;

const SortDescending = styled(FontAwesomeIcon).attrs({
  icon: faSortAmountDown,
  size: 'lg',
})`
color: ${props => (!props.selected ? primaryColor : 'gray')};
&:hover {
  color: ${primaryColor};
}
`;

const SortAscending = styled(FontAwesomeIcon).attrs({
  icon: faSortAmountUp,
  size: 'lg',
})`
color: ${props => (props.selected ? primaryColor : 'gray')};
&:hover {
  color: ${primaryColor};
}
`;


const Sorter = ({
  descend, ascend, callback, sort, isReversed,
}) => (
  <SortWrapper>
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
      callback={callback}
      heading="Sort by..."
      current={sort}
    />
    <ReverseSortWrapper title="Sort Directions">
      <SortDescending
        onClick={descend}
        selected={isReversed}
      />
      <SortAscending
        onClick={ascend}
        selected={isReversed}
      />
    </ReverseSortWrapper>
  </SortWrapper>
);

Sorter.propTypes = {
  descend: PropTypes.func.isRequired,
  ascend: PropTypes.func.isRequired,
  callback: PropTypes.func.isRequired,
  sort: PropTypes.string.isRequired,
  isReversed: PropTypes.bool.isRequired,
};

export default Sorter;

