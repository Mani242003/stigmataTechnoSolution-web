import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../../pages/Home";
import ServerLess from "../../pages/Services/ServerLess";
import DevOps from "../../pages/Services/DevOps";
import MobileAppDevelopment from "../../pages/Services/MobileAppDevelopment";
import Plugin from "../../pages/Services/Plugin";
import Software from "../../pages/Services/Software";
import CloudMigration from "../../pages/Services/CloudMigration";
import AiComponent from "../../pages/Services/AiComponent";
import Contact from "../../pages/Contact";
import BlogDetails from "../../pages/BlogDetails";
import Aboutus from "../../pages/Aboutus";
import Policy from "../../pages/Policy";
import Blog from "../../pages/Blog";
import News from "../../pages/News";
import Careers from "../../pages/Careers";

const Routers = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Navigate to="/home" />} /> */}
      <Route path="/" element={<Home />} />
      <Route path="/serverless computing" element={<ServerLess />} />
      <Route path="/devops" element={<DevOps />} />
      <Route
        path="/mobile app development"
        element={<MobileAppDevelopment />}
      />
      <Route path="/plugin-development" element={<Plugin />} />
      <Route path="/software development" element={<Software />} />
      <Route path="/cloud migration" element={<CloudMigration />} />
      <Route path="/Artificial intelligence" element={<AiComponent />} />
      <Route path="/about us" element={<Aboutus />} />
      <Route path="/contact us" element={<Contact />} />
      <Route path="/blogs/:slug" element={<BlogDetails />} />
      <Route path="/cookie policy" element={<Policy />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/news" element={<News />} />
      <Route path="/careers" element={<Careers />} />

   
    </Routes>
  );
};

export default Routers;
