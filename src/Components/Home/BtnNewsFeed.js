import React from 'react';
import styled from 'styled-components';

const Btn = styled.button`
  cursor: pointer;
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  align-items: center;
  .btn-icon {
    width: 20px;
    height: 20px;
  }

  &:hover {
    background-color: #e4e6ea;
  }
`;

const BtnNewsFeed = ({ Icon, Color }) => {
  return (
    <Btn>
      <Icon style={Color} className="btn-icon" />
    </Btn>
  );
};

export default BtnNewsFeed;
