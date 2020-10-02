import React, { useState } from 'react';
import styled from 'styled-components';
import { Home, People, VideoLibrary, Store, GroupWork } from '@material-ui/icons';
import BtnNav from './BtnNav';

const currentPage = {
  首頁: '0%',
  朋友: '20%',
  Watch: '40%',
  Marketplace: '60%',
  社團: '80%',
};

const HeaderNavbar = styled.ul`
  flex: 2;
  display: flex;
  margin: 0 1rem;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    width: 20%;
    height: 4px;
    left: ${(props) => currentPage[props.current]};
    bottom: 0;
    background-color: #3579ea;
    transition: 0.3s ease;
  }
`;

const Navbar = () => {
  const [current, setCurrent] = useState('首頁');
  return (
    <HeaderNavbar current={current}>
      <BtnNav Icon={Home} Path="/" Title="首頁" setCurrent={setCurrent} />
      <BtnNav Icon={People} Path="/friends" Title="朋友" setCurrent={setCurrent} />
      <BtnNav Icon={VideoLibrary} Path="/video" Title="Watch" setCurrent={setCurrent} />
      <BtnNav Icon={Store} Path="/shop" Title="Marketplace" setCurrent={setCurrent} />
      <BtnNav Icon={GroupWork} Path="/group" Title="社團" setCurrent={setCurrent} />
    </HeaderNavbar>
  );
};

export default Navbar;
