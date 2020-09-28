import React from 'react';
import styled from 'styled-components';
import { HomeOutlined, Home, People, PeopleOutline, VideoLibrary, VideoLibraryOutlined, Store, StoreOutlined, GroupWork, GroupWorkOutlined } from '@material-ui/icons';
import BtnHome from './BtnNav';

const HeaderNavbar = styled.div`
  flex: 2;
  display: flex;
`;

const Navbar = () => {
  return (
    <HeaderNavbar>
      <BtnHome Fill={Home} Outline={HomeOutlined} />
      <BtnHome Fill={People} Outline={PeopleOutline} />
      <BtnHome Fill={VideoLibrary} Outline={VideoLibraryOutlined} />
      <BtnHome Fill={Store} Outline={StoreOutlined} />
      <BtnHome Fill={GroupWork} Outline={GroupWorkOutlined} />
    </HeaderNavbar>
  );
};

export default Navbar;
