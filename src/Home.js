import React from 'react';

import styled from 'styled-components';
import Sidebar from './Components/Home/Sidebar';
import Main from './Components/Home/Main';
import Aside from './Components/Home/Aside';

const HomePage = styled.div`
  width: 100%;
  padding-top: 80px;
  position: relative;
`;

const Home = () => {
  return (
    <HomePage>
      <Sidebar />
      <Main />
      <Aside />
    </HomePage>
  );
};

export default Home;
