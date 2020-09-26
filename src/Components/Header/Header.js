import React from 'react';
import Search from './Search';
import Navbar from './Navbar';
import Info from './Info';
import styled from 'styled-components';

const FBHeader = styled.header`
  width: 100%;
  height: 60px;
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
