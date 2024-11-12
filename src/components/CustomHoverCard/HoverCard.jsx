import React from "react";
import LAndT1 from "../../assets/images/trustCustomer/landT2.png";
import LAndT2 from "../../assets/images/trustCustomer/LandT1.png";

import img1 from "../../assets/images/trustCustomer/l1.png";
import img2 from "../../assets/images/trustCustomer/l2.png";
import img3 from "../../assets/images/trustCustomer/l3.png";
import img4 from "../../assets/images/trustCustomer/l4.jpg";
import img5 from "../../assets/images/trustCustomer/l5.png";
import img7 from "../../assets/images/trustCustomer/l7.png";
import img8 from "../../assets/images/trustCustomer/l8.png";
import img11 from "../../assets/images/trustCustomer/11.png";
import img12 from "../../assets/images/trustCustomer/L1213.png";
import img13 from "../../assets/images/trustCustomer/L14.png";
import img14 from "../../assets/images/trustCustomer/L15.png";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, background: "red", display: "none" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        background: "green",
        display: "none",
      }}
      onClick={onClick}
    />
  );
}

const HoverCard = () => {
  const images = [
    { img: img8 },

    { img: img2 },
    { img: LAndT1, w: 200 },

    { img: img3 },
    { img: LAndT2, w: 200 },

    // { img: img4 },
    { img: img5 },

    // { img: img6, w: 110 },
    { img: img7 },
    { img: img1 },

    // { img: logo1 },

    { img: img11 },
    { img: img12, w: 180 },
    { img: img13, w: 160 },
    // { img: logo1 },

    { img: img14 },
    // { img: img10, w: 100 },
    // { img: img9 },

    // { img: img15, w: 100 },
    // { img: img16, w: 100 },
    // { img: logo1 },
  ];
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 12,
    autoplay: true,
    speed: 30000,
    autoplaySpeed: 0,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 400, // Mobile devices
        settings: {
          speed: 4000,

          dots: false,
          infinite: true,
          // speed: 500,
          slidesToShow: 2,
          slidesToScroll: 2,
          autoplay: true,

          // Show 1 slide
        },
      },
      {
        breakpoint: 885, // Tablets
        settings: {
          slidesToShow: 3,
          speed: 4000,

          dots: false,
          infinite: true,
          // speed: 500,
          slidesToScroll: 2,
          autoplay: true,

          // Show 3 slides
        },
      },
    ],

    style: {
      display: "flex",
      width: "100%",
      height: "100%",
    },
  };

  return (
    <div
      className="
    bg-bodyBg  pb-[3rem]"
    >
      <div className=" w-full   ">
        <h1 className="text-center py-4 mb-[1rem] text-2xl  font-medium ">
          Our Trusted Customers
        </h1>
        <div className="hoverCardLogoConatiner">
          <Slider {...settings}>
            {images.map((data, i) => {
              // console.log("maonio",data.img);
              return (
                <div className="p-[1rem]" key={i}>
               

                        <img
                          loading="lazy"
                          role="presentation"
                          src={data.img}
                          srcSet={`${data.img}?w=500&h=500&fit=crop 500w, ${data.img}?w=1000&h=1000&fit=crop 1000w`}
                          sizes="(max-width: 600px) 500px, 1000px"
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            objectPosition: "center",
                            filter: "grayscale(100%)"
                          }}
                          alt="Description of the image"
                        />
                     
                  {/* <img
                    src={data.img}
                    alt=""
                    width={150}
                    style={{ filter: "grayscale(100%)", marginLeft: "25%" }}
                  /> */}
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default HoverCard;