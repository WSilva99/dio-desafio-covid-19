import React from 'react';
import { StylesProvider } from '@material-ui/styles';
import { CssBaseline } from '@material-ui/core';
import GlobalStyle from './commons/styles/global';
import Main from './containers/Main';

export default function App() {
  return (
    <StylesProvider injectFirst>
      <CssBaseline />
      <GlobalStyle />
      <Main />
    </StylesProvider>
  );
}
