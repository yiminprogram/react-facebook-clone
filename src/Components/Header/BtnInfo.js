import React from 'react';
import styled from 'styled-components';

const Btn = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: none;
  padding: 1.1rem;
  margin: 0 0.3rem;
  background-color: #e4e6ea;

  &:hover {
    background-color: #c5cad3;
  }

  .btn-icon {
    width: 20px;
    height: 20px;
  }
`;

const BtnInfo = ({ Icon }) => {
  return (
    <Btn>
      <Icon className="btn-icon" />
    </Btn>
  );
};

export default BtnInfo;
