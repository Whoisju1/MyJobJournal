import React from 'react';
import styled from 'styled-components';

const ComingSoon = () => {
  const ComingSoonPage = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
  `;

  const Msg = styled.h1`
    font-size: 400%;
    font-weight: 800;
    color: #27ae60;
  text-shadow: 6px 10px 14px rgba(0, 0, 0, .3);
  `;

  return (
    <ComingSoonPage>
      <Msg>
        Coming Soon (Under Construction)
      </Msg>
    </ComingSoonPage>
  );
};

export default ComingSoon;
