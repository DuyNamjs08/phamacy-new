import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import logo1 from "../../assets/slider/1.webp";
import logo2 from "../../assets/slider/2.webp";
import logo3 from "../../assets/slider/3.webp";
import logo4 from "../../assets/slider/4.jpg";

import "./style.css";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function BannerCmp() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={logo1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={logo2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={logo3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={logo4} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
