import React from 'react';
import styled from 'styled-components';
import { VideoCall, Search, MoreHoriz } from '@material-ui/icons';

const AsideDiv = styled.div`
  position: fixed;
  width: 20%;
  top: 80px;
  right: 0;
  margin-right: 1rem;

  @media screen and (max-width: 960px) {
    display: none;
  }
`;

const AsideTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #65676b;
  font-size: 0.8rem;
  margin-bottom: 1rem;
`;
const Icon = styled.div`
  .icon {
    width: 20px;
    margin: 0 0.5rem;
  }
`;

const BtnMore = styled.button`
  cursor: pointer;
  width: 100%;
  background-color: #e4e6ea;
  text-align: center;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 10px;

  &:hover {
    background-color: #c5cad3;
  }
`;

const Aside = () => {
  return (
    <AsideDiv>
      <AsideTitle>
        <span>聯絡人</span>
        <Icon>
          <VideoCall className="icon" />
          <Search className="icon" />
          <MoreHoriz className="icon" />
        </Icon>
      </AsideTitle>
      <BtnMore>查看全部</BtnMore>
    </AsideDiv>
  );
};

export default Aside;
