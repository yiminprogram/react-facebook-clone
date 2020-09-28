import React from 'react';
import styled from 'styled-components';
import NewsFeed from './NewsFeed';
import NewsFeedList from './NewsFeedList';

const MainDiv = styled.div`
  width: 45%;
  margin: 0 auto;
`;

const Main = () => {
  return (
    <MainDiv>
      <NewsFeed />
      <NewsFeedList />
    </MainDiv>
  );
};

export default Main;
