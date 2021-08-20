import { Fragment } from "react";
import Navbar from "./navbar";
import Footer from './footer';
import Head from 'next/head';

function Layout(props) {
  return (
    <Fragment>
      <Head><title>Transcend</title></Head>
      <Navbar />
      <main>{props.children}</main>
      <Footer/>
    </Fragment>
  );
}

export default Layout;
