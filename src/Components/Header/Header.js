import React from 'react';
import Search from './Search';
import Navbar from './Navbar';
import Info from './Info';
import styled from 'styled-components';

const FBHeader = styled.header`
  width: 100%;
  height: 60px;
  position: fixed;
  background-color: #fff;
  box-shadow: 0 0 10px 5px #e1e1e1;
  margin-bottom: 1rem;
  z-index: 1;

  display: flex;
`;

const Header = () => {
  return (
    <FBHeader>
      <Search />
      <Navbar />
      <Info />
    </FBHeader>
  );
};

export default Header;
