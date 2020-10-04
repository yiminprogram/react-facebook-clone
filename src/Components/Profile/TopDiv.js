import React from 'react';
import styled from 'styled-components';
import Photo from '../../image/user-photo.png';

const Top = styled.div`
  width: 100%;
  position: relative;
  background-color: #fff;
`;
const Cover = styled.div`
  width: 60%;
  height: 500px;
  margin: 0 auto;
  background-color: #eff1f4;
  border-radius: 10px;
`;
const UserPhoto = styled.div`
  position: absolute;
`;

const TopDiv = () => {
  return (
    <Top>
      <Cover>
        <UserPhoto>
          <img src={Photo} alt="error" />
        </UserPhoto>
        <h1>YIMIN</h1>
        <h1>YIMIN</h1>
      </Cover>
    </Top>
  );
};

export default TopDiv;
