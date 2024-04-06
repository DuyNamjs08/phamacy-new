/* eslint-disable react/prop-types */
import Slider from "react-slick";
import { useEffect, useState } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import "./style.css";
import { Link } from "react-router-dom";
import CardCarouselCmp1 from "../cardCarousel/cardCarouselCmp1";

// eslint-disable-next-line react/prop-types
const CarouselCmp1 = ({ dataProductHot }) => {
  const [size, setSize] = useState(5);
  const settings = {
    dots: false,
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
        setSize(
          dataProductHot && dataProductHot.length < 3
            ? dataProductHot.length
            : 3
        );
      } else if (newSize < 768 && newSize > 480) {
        setSize(2);
      } else if (newSize < 480) {
        setSize(1);
      } else {
        setSize(dataProductHot && dataProductHot?.length > 5 ? 5 : 3);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [size, dataProductHot]);
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
          zIndex: 40,
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
    <>
      {dataProductHot &&
        (dataProductHot.length > 1 ? (
          <Slider {...settings}>
            {dataProductHot?.map((item) => {
              return (
                <div key={item.id}>
                  <Link
                    to={`/san-pham/${item._id}?category_id=${item.category_id}`}
                  >
                    <CardCarouselCmp1 item={item} />
                  </Link>
                </div>
              );
            })}
          </Slider>
        ) : (
          <CardCarouselCmp1 item={dataProductHot[0]} />
        ))}
    </>
  );
};

export default CarouselCmp1;
