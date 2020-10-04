import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Home';
import Friends from './Friends';
import Video from './Video';
import Shop from './Shop';
import Group from './Group';
import Profile from './Profile';

const FacebookPage = styled.div`
  min-height: 100vh;
  background-color: #f0f2f5;
`;

const Facebook = () => {
  return (
    <FacebookPage>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/friends" component={Friends} />
        <Route path="/video" component={Video} />
        <Route path="/shop" component={Shop} />
        <Route path="/group" component={Group} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </FacebookPage>
  );
};

export default Facebook;
