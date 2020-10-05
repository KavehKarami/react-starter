import React from 'react';
import Header from "../components/core/Header"
import Sidebar from "../components/core/Sidebar"
import Footer from '../components/core/Sidebar';

const Layout = (props) => {
  return (
    <React.Fragment>
      <Header />
      <Sidebar />
      {props.children}
      <Footer />
    </React.Fragment>
  );
}

export default Layout;