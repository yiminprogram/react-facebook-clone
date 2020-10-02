import React from 'react';
import ReactDOM from 'react-dom';
import Facebook from './Facebook';
import { HashRouter } from 'react-router-dom';
import GlobalStyle from './theme/GlobalStyle';
ReactDOM.render(
  <HashRouter>
    <GlobalStyle />
    <Facebook />
  </HashRouter>,
  document.querySelector('#root'),
);
