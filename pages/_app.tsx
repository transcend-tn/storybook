import React from 'react';
import '../styles/index.css'; // <- applied everywhere in the NextJS application scope
import type { AppProps /*, AppContext */ } from 'next/app';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;
