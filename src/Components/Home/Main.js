import React from 'react';
import styled from 'styled-components';
import NewsFeed from './NewsFeed';
import NewsFeedList from './NewsFeedList';

const MainDiv = styled.div`
  width: 45%;
  margin: 0 auto;
  @media screen and (max-width: 960px) {
    width: 90%;
  }
`;

const Main = () => {
  return (
    <MainDiv>
      <NewsFeed />
      <NewsFeedList />
      <NewsFeedList />
      <NewsFeedList />
      <NewsFeedList />
      <NewsFeedList />
      <NewsFeedList />
      <NewsFeedList />
    </MainDiv>
  );
};

export default Main;
