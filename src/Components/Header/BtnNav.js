import React, { useState } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  cursor: pointer;
  flex: 1;
  border: none;
  background-color: #fff;
  &:hover {
    border-bottom: 3px solid #3579ea;
  }
`;

const NavButton = ({ Fill, Outline }) => {
  const [mouseIn, setMouseIn] = useState(false);
  const inButton = () => {
    setMouseIn(true);
  };
  const outButton = () => {
    setMouseIn(false);
  };
  return (
    <Button onMouseEnter={inButton} onMouseLeave={outButton}>
      {mouseIn ? <Fill style={{ color: '#3579ea' }} /> : <Outline style={{ color: '#87898c' }} />}
    </Button>
  );
};

export default NavButton;
