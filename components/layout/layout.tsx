import { Fragment } from 'react';
import Navbar from './navbar';
import Footer from './footer';
import Head from 'next/head';

function Layout({ title, keywords, description, hasNavbar, children }) {
  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      {hasNavbar && <Navbar />}
      <main>{children}</main>
      <Footer />
    </Fragment>
  );
}
Layout.defaultProps = {
  title: 'Transcend',
  description: 'Transcend Cyberprise is Tunisian Software Company',
  keywords: 'transcend, web development, web design, react, javascript',
  hasNavbar: true,
};
export default Layout;
