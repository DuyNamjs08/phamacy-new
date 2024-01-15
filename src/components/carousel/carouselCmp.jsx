/* eslint-disable react/prop-types */
import Slider from "react-slick";
import CardCarouselCmp from "../cardCarousel/cardCarouselCmp";
import { useEffect, useState } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import "./style.css";

// eslint-disable-next-line react/prop-types
const CarouselCmp = ({ dataProductHot }) => {
  const [size, setSize] = useState(5);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: size,
    slidesToScroll: 1,
    centerPadding: "10px",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      const newSize = windowWidth;
      if (newSize < 1280 && newSize > 768) {
        setSize(3);
      } else if (newSize < 768 && newSize > 480) {
        setSize(2);
      } else if (newSize < 480) {
        setSize(1);
      } else {
        setSize(5);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [size]);
  function SampleNextArrow(props) {
    // eslint-disable-next-line react/prop-types
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} next-arrow`}
        style={{
          ...style,
          display: "block",
          position: "absolute",
          right: "0px",
          zIndex: 100,
        }}
        onClick={onClick}
      >
        <div className="text-carousel">
          <FiChevronRight />
        </div>
      </div>
    );
  }
  function SamplePrevArrow(props) {
    // eslint-disable-next-line react/prop-types
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} prev-arrow`}
        style={{
          ...style,
          display: "block",
          position: "absolute",
          left: "0px",
          zIndex: 100,
        }}
        onClick={onClick}
      >
        <div className="text-carousel">
          <FiChevronLeft />
        </div>
      </div>
    );
  }
  return (
    <div>
      <Slider {...settings}>
        {dataProductHot?.map((item) => {
          return (
            <div key={item.id}>
              <CardCarouselCmp
                img={item.img}
                title={item.title}
                price={item.price}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default CarouselCmp;
