import React from 'react';
import styled from 'styled-components';
const Btn = styled.button`
  cursor: pointer;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 0;
  font-size: 0.8rem;
  border: none;
  border-radius: 10px;
  background-color: #fff;

  &:hover {
    background-color: #eff1f4;
  }

  > span {
    margin-left: 1rem;
  }
`;
const BtnStatus = ({ Icon, Color, children }) => {
  return (
    <Btn>
      <Icon style={Color} />
      <span>{children}</span>
    </Btn>
  );
};

export default BtnStatus;
