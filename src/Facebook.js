import React from 'react';
import styled from 'styled-components';
import Header from './Components/Header/Header';
import Home from './Home';

const FacebookPage = styled.div`
  min-height: 100vh;
  background-color: #f0f2f5;
`;

const Facebook = () => {
  return (
    <FacebookPage>
      <Header />
      <Home />
    </FacebookPage>
  );
};

export default Facebook;
