import React from 'react';
import styled from 'styled-components';
import { Forum, Cloud, Restore, SportsEsports, Event } from '@material-ui/icons';
import BtnSidebar from './BtnSidebar';

const HiddenDiv = styled.div`
  max-height: ${(props) => (props.isHidden ? 'auto' : 0)};
  overflow: hidden;
  transition: 0.5s;
`;

const SidebarHidden = ({ isHidden }) => {
  return (
    <HiddenDiv isHidden={isHidden}>
      <BtnSidebar Icon={Forum}>Messenger</BtnSidebar>
      <BtnSidebar Icon={Cloud}>天氣</BtnSidebar>
      <BtnSidebar Icon={Restore}>動態回顧</BtnSidebar>
      <BtnSidebar Icon={SportsEsports}>遊戲</BtnSidebar>
      <BtnSidebar Icon={Event}>活動</BtnSidebar>
    </HiddenDiv>
  );
};

export default SidebarHidden;
