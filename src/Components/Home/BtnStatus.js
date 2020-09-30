import React from 'react';
import styled from 'styled-components';
const Btn = styled.button`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  border: none;
  border-radius: 10px;
  background-color: #fff;

  > span {
    margin-left: 1rem;
  }
`;
const BtnStatus = ({ Icon, children }) => {
  return (
    <Btn>
      <Icon />
      <span>{children}</span>
    </Btn>
  );
};

export default BtnStatus;
