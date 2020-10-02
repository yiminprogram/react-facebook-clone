import React from 'react';
import styled from 'styled-components';
import CardFriends from './Components/Friend/CardFriends';
const FriendsPage = styled.div`
  width: 100%;
  padding-top: 60px;
`;
const Sidebar = styled.div`
  width: 25%;
  min-height: calc(100vh - 60px);
  padding: 1rem;
  box-shadow: 0 0 10px #e1e1e1;
  background-color: #fff;
  > h1 {
    font-size: 1rem;
    margin-bottom: 0.8rem;
  }
  > h2 {
    font-size: 0.8rem;
    margin-bottom: 1rem;
  }
  > hr {
    width: 100%;
    height: 2px;
    background-color: #edeef1;
    color: #edeef1;
    border-width: 0;
  }
`;
const Main = styled.div``;
const Friends = () => {
  return (
    <FriendsPage>
      <Sidebar>
        <h1>朋友</h1>
        <h2>交友邀請</h2>
        <hr />
        <h2>你可能認識的朋友</h2>
        <CardFriends />
        <CardFriends />
        <CardFriends />
        <CardFriends />
        <CardFriends />
        <CardFriends />
      </Sidebar>
      <Main />
    </FriendsPage>
  );
};

export default Friends;
