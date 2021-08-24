import React from 'react';
import { ThemeProvider } from 'styled-components';
import Head from 'next/head';
import theme from '../src/theme';
import GlobalStyle from '../src/theme/GlobalStyle';

// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title> Portfolio </title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Fira+Sans+Condensed:wght@100&display=swap" rel="stylesheet" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
