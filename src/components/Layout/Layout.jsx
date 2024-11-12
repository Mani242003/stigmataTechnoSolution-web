import React from "react";

import Navbar from "../Navigation/Navbar/Navbar";
import Footer from "../Footer/Footer";
import Routers from "../routers/Routers";
import ScrollToTopComponent from "../ScrollToTopCOmponent";
import SocialMedia from "../SocialMedia";
import ScrollToTop from "react-scroll-to-top";

const Layout = () => {
  return (
    <div>
      <Navbar  />
      <ScrollToTopComponent smooth />

      <div>
        <SocialMedia />
        <Routers />
        <ScrollToTop smooth top="20" width="" />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
