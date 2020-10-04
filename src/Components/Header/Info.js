import React from 'react';
import styled from 'styled-components';
import UserPhoto from '../../image/user-photo.png';
import BtnInfo from './BtnInfo';
import { Forum, Notifications, ArrowDropDown } from '@material-ui/icons';
import { Link } from 'react-router-dom';

const HeaderInfo = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const User = styled(Link)`
  cursor: pointer;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 30px;
  border: none;
  padding: 0.3rem;
  color: #000;
  text-decoration: none;
  background-color: #fff;

  &:hover {
    background-color: #e4e6ea;
  }

  img {
    width: 30px;
    border-radius: 50%;
    margin-right: 0.5rem;
  }
  span {
    font-size: 1rem;
    font-weight: 700;
  }
`;
const Icon = styled.div`
  display: flex;
`;
const Info = () => {
  return (
    <HeaderInfo>
      <User to="/profile">
        <img src={UserPhoto} alt="error" />
        <span>yimin</span>
      </User>
      <Icon>
        <BtnInfo Icon={Forum} />
        <BtnInfo Icon={Notifications} />
        <BtnInfo Icon={ArrowDropDown} />
      </Icon>
    </HeaderInfo>
  );
};

export default Info;
