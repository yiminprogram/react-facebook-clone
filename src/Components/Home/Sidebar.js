import React, { useState } from 'react';
import styled from 'styled-components';
import { People, Dashboard, PeopleAlt, Store, OndemandVideo, ArrowDropDownCircle } from '@material-ui/icons';
import BtnSidebar from './BtnSidebar';
import SidebarHidden from './SidebarHidden';
import BtnDropDown from './BtnDropDown';

const SidebarDiv = styled.div`
  position: fixed;
  top: 80px;
  bottom: 0;
  left: 0;
  width: 25%;
  overflow-y: auto;

  @media screen and (max-width: 960px) {
    display: none;
  }
`;
const Sidebar = () => {
  const [isHidden, setisHidden] = useState(false);
  const showHidden = () => {
    setisHidden(!isHidden);
  };
  return (
    <SidebarDiv>
      <BtnSidebar Icon={People}>尋友工具</BtnSidebar>
      <BtnSidebar Icon={Dashboard}>最新動態</BtnSidebar>
      <BtnSidebar Icon={PeopleAlt}>社團</BtnSidebar>
      <BtnSidebar Icon={Store}>Marketplace</BtnSidebar>
      <BtnSidebar Icon={OndemandVideo}>影片</BtnSidebar>
      <SidebarHidden isHidden={isHidden} />
      <BtnDropDown showHidden={showHidden} isHidden={isHidden} Icon={ArrowDropDownCircle}>
        顯示更多
      </BtnDropDown>
    </SidebarDiv>
  );
};

export default Sidebar;
