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
        <ScrollToTop  
        color="white"
          style={{
            backgroundColor: '#3B82F6', // Change to your desired color
            borderRadius: '50%', // Optional: makes the background circular
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // Optional: for a slight shadow effect
          }} smooth top="20" width="" />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
