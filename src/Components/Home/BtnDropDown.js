import React from 'react';
import styled from 'styled-components';

const Btn = styled.button`
  cursor: pointer;
  width: 80%;
  margin-left: 1rem;
  margin-bottom: 1rem;
  padding: 0.5rem;
  border-radius: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border: none;
  background-color: transparent;
  &:hover {
    background-color: #e4e6ea;
  }

  span {
    margin-left: 1rem;
    font-size: 0.8rem;
  }
  .btn-icon {
    color: #3579ea;
  }
  .rotate {
    transform: rotate(180deg);
  }
`;

const BtnSidebar = ({ showHidden, isHidden, Icon, children }) => {
  return (
    <Btn onClick={showHidden}>
      <Icon className={`btn-icon ${isHidden ? 'rotate' : ''}`} />
      <span>{children}</span>
    </Btn>
  );
};

export default BtnSidebar;
