import React from 'react';
import styled from 'styled-components';

const Btn = styled.button`
  cursor: pointer;
  flex: 1;
  margin: 0 0.5rem;
  padding: 0.2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 5px;
  background-color: #fff;

  &:hover {
    background-color: #f1f1f1;
  }

  span {
    margin: 0 0.2rem;
  }
`;

const BtnFeedType = ({ Icon, Color, children }) => {
  return (
    <Btn>
      <Icon style={Color} />
      <span>{children}</span>
    </Btn>
  );
};

export default BtnFeedType;
