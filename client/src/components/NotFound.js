import React from 'react';
import styled from 'styled-components';

const NotFoundMsg = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  font-size: 200%;
`;

const NotFound = () => <NotFoundMsg>Page Not Found</NotFoundMsg>;

export default NotFound;
