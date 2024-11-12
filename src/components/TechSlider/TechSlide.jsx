import Slider from "react-slick";

import img1 from "../../assets/TechExperts/aws.png";
import img2 from "../../assets/TechExperts/atlassian.png";
import img3 from "../../assets/TechExperts/openai.png";
import img4 from "../../assets/TechExperts/razorpay.png";
import img5 from "../../assets/TechExperts/PowerBi.png";
import img6 from "../../assets/TechExperts/reactjs.png";
import img7 from "../../assets/TechExperts/ReatNative.png";
import img8 from "../../assets/TechExperts/javascript.png";
import img9 from "../../assets/TechExperts/java.png";
import img10 from "../../assets/TechExperts/Amplify.png";
import img11 from "../../assets/TechExperts/node.png";
import img12 from "../../assets/TechExperts/aspnet.jpg";
import img13 from "../../assets/TechExperts/SQL.jpg";
import img14 from "../../assets/TechExperts/Kubermets.png";

const TechSlide = () => {
  const images = [
    { img: img1, w: 100 },
    { img: img2 },
    { img: img3 },
    { img: img4 },
    { img: img5, w: 100 },
    { img: img6, w: 100 },
    { img: img7, w: 100 },
    { img: img8, w: 80 },
  ];

  const imgaes2 = [
    { img: img9, w: 100 },
    { img: img10, w: 120 },
    { img: img11, w: 100 },
    { img: img12, w: 100 },
    { img: img13 },
    { img: img14 },
  ];

  const settings1 = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 0,
    cssEase: "linear",
    prevArrow: false,
    nextArrow: false,
    responsive: [
      {
        breakpoint: 432,
        settings: {
          speed: 4000,
          dots: false,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 2,
          autoplay: true,
        },
      },
      {
        breakpoint: 885,
        settings: {
          slidesToShow: 3,
          speed: 4000,
          dots: false,
          infinite: true,
          slidesToScroll: 2,
          autoplay: true,
        },
      },
    ],
  };

  const settings2 = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 0,
    cssEase: "linear",
    rtl: true,
    prevArrow: false,
    nextArrow: false,
    responsive: [
      {
        breakpoint: 432,
        settings: {
          speed: 4000,
          dots: false,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 2,
          autoplay: true,
        },
      },
      {
        breakpoint: 885,
        settings: {
          slidesToShow: 3,
          speed: 4000,
          dots: false,
          infinite: true,
          slidesToScroll: 2,
          autoplay: true,
        },
      },
    ],
  };

  return (
    <section className="bg-bodyBg overflow-hidden flex flex-col gap-0">
      <div className="text-center py-8 pt-0">
       
        <h2 data-aos="zoom-in" className="text-4xl  mt-6  tracking-wide">
        Our Areas of 
          <span className="ml-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Experts
          </span>
        </h2>
      </div>

      <div className="pb-8">
        <Slider {...settings1}>
          {images.map((data, i) => (
            <CustomTechSlide key={i} img={data.img} width={data.w || 170} />
          ))}
        </Slider>
      </div>

      <div className="pb-8">
        <Slider {...settings2}>
          {imgaes2.map((data, i) => (
            <CustomTechSlide key={i} img={data.img} width={data.w || 170} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

const CustomTechSlide = ({ img, width }) => {
  return (
    <div className="w-[200px] h-[100px] bg-white rounded-lg m-3 flex justify-center items-center shadow-lg p-[3.3rem]">
      

                        <img
                          loading="lazy"
                          role="presentation"
                          src={img}
                          srcSet={`${img}?w=500&h=500&fit=crop 500w, ${img}?w=1000&h=1000&fit=crop 1000w`}
                          sizes="(max-width: 600px) 500px, 1000px"
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            objectPosition: "center",
                            filter: "grayscale(100%)"
                          }}
                          alt="Description of the image"
                          // priority={data.isImportant ? true : false}
                        />
      {/* <img src={img} alt="" width={width} /> */}
    </div>
  );
};

export default TechSlide;
