import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import Facebook from './Facebook';
import GlobalStyle from './theme/GlobalStyle';
ReactDOM.render(
  <Fragment>
    <GlobalStyle />
    <Facebook />
  </Fragment>,
  document.querySelector('#root'),
);
