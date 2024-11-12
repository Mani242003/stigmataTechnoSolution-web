import React from "react";
import Banner from "../../components/Banner/Banner";
import ServicesBanner from "../../components/ServicesBanner/ServicesBanner";
import imageUrl from "../../assets/services/mobileBg.jpg";
import { FaChevronRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import ios from "../../assets/ios-1.svg";

const MobileAppDevelopment = () => {
  const servicesData = {
    title: "Mobile Development with React Native",
    des: "At Stigmata Techno Solutions, we harness the power of React Native to create high-performance, cross-platform mobile applications that provide seamless user experiences.",
    image: imageUrl,
    isContact:false
  };
  const ServicesBannerData = {
    title: "Why Choose React Native for Mobile Development?",
    services: [
      {
        id1:1,
        id2:2,
        subtitle1: "Cross-Platform Compatibility :",
        description1:
          "React Native enables the development of applications that run smoothly on both iOS and Android platforms using a single codebase. This significantly reduces development time and costs while ensuring a consistent user experience across devices.",
        subtitle2: "Fast Development Cycles :",
        description2:
          "React Native’s hot-reloading feature allows developers to see the changes they make in real-time, speeding up the development process. This rapid iteration cycle means faster time-to-market for your mobile applications.",
      },
      {
        id1:3,
        id2:4,
        subtitle1: "Performance :",
        description1:
          "Built on top of the robust React framework, React Native apps are known for their high performance and responsiveness. The framework leverages native components, ensuring your apps run as smoothly as those built with native development languages.",
        subtitle2: "Strong Community Support :",
        description2:
          "React Native boasts a large and active developer community. This means continuous improvements, extensive libraries, and a wealth of shared knowledge, all of which contribute to the efficiency and innovation of your mobile projects.",
      },
    ],
    // "finalText1":"Stigmata Techno Solutions Is A 9+ Year Aged Firm Rendering Software, IT Development Services To Global Customers. We Are Specialized In Developing Applications, Digital Transformation For Specific Industries Like ",
    // "finalText2":"Heavy Construction Companies, Power Transmission & Distribution, Financial Institutions (Governance & Compliance Handling PII Data) And Securing Organisations Cloud Environment (ClouSec : CSPM Tool – Cloud Security). ",
    // "finalText3":"Our Key Focus Is To Provide World-Class Quality Service To Our Customers With Utmost Focus On Their Needs And To Ensure That Technology Supports Their Business Growth. We Would Be Happy To Get Associated With Your Esteemed Organization On Your Digital Transformation / Automation Reducing Manual Efforts And Cost.",

    buttonText: "Get Started",
  };

  return (
    <>
      <ServicesBanner data={servicesData} />
    
       <MobileDevelopmentSection />
      <Banner data={ServicesBannerData} />
    </>
  );
};

export default MobileAppDevelopment;











// Import necessary libraries

const MobileDevelopmentSection = () => {
  return (
    <div className="flex  flex-col sm:flex-row-reverse pr-4">
    <div className="flex-shrink-0">
      <img src={ios} alt="" className="w-88" />
    </div>
    <div className="flex justify-center items-center flex-col pl-8 p-4">
      <span className="text-4xl font-semibold">
        Transform Your Mobile Development with our React Native
      </span>
      <span className="mt-8 text-lg leading-8 tracking-wide">
        At Stigmata Techno Solutions, we harness the power of React Native to
        create high-performance, cross-platform mobile applications that provide
        seamless user experiences. Our expertise in React Native allows us to
        deliver cost-effective and efficient mobile solutions that meet the
        diverse needs of your business.
      </span>
      
    </div>
  </div>
  
  
  );
};





