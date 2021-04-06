import React from "react";
import "../styles/index.css"; // <- applied everywhere in the NextJS application scope

const MyApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;