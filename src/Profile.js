import React from 'react';
import styled from 'styled-components';
import TopDiv from './Components/Profile/TopDiv';
const ProfilePage = styled.div`
  width: 100%;
  padding-top: 60px;
`;

const Profile = () => {
  return (
    <ProfilePage>
      <TopDiv />
    </ProfilePage>
  );
};

export default Profile;
