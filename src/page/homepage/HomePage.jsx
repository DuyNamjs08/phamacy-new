import BannerCmp from "../../components/banner/BannerCmp";
import logo4 from "../../assets/slider/5.webp";
import logo5 from "../../assets/slider/6.webp";
import CardSmallCmp from "../../components/cardSmall/CardSmallCmp";
import {
  dataCategory,
  dataTranistion,
  dataProductHot,
  dataProduct,
} from "../../constant";
import CarouselCmp from "../../components/carousel/carouselCmp";
import CardCarouselCmp from "../../components/cardCarousel/cardCarouselCmp";
import Button from "../../components/button/Button";
import { useState } from "react";
import ButtonLinkCmp from "../../components/buttonLink/ButtonLinkCmp";
import cardT from "../../assets/banner/2.png";
import CardHoriCmp from "../../components/cardHori/CardHoriCmp";

const HomePage = () => {
  const [size, setSize] = useState(8);
  const visibleProducts = dataProduct.slice(0, size);
  return (
    <>
      <div className="p-[20px] max-w-screen-xl mx-auto">
        <div className="block md:flex items-center md:h-[300px] gap-2">
          <div className="mb-4 md:mb-0 md:w-2/3">
            {" "}
            <BannerCmp />
          </div>
          <div className="block md:w-1/3 h-[100%] md:flex flex-col gap-2">
            <div className="h-1/2 mb-4 md:mb-0">
              <img
                className="w-[100%] h-[100%] object-cover rounded-xl"
                src={logo4}
                alt=""
              />
            </div>
            <div className="h-1/2">
              <img
                className="w-[100%] h-[100%] object-cover rounded-xl"
                src={logo5}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      {/* category */}
      <div className="bg-gray-100">
        <div className="max-w-screen-xl mx-auto ">
          <div className="grid-cols-2 grid gap-4 p-4 md:grid-cols-4">
            {dataCategory.map((item) => {
              return (
                <div
                  key={item.id}
                  className=" flex items-center cursor-pointer"
                >
                  <CardSmallCmp
                    img={item.img}
                    title={item.title}
                    hight={"120px"}
                    width={"120px"}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* product */}
      <div className="bg-white h-[30px]"></div>
      <div className="bg-gray-100 pb-[30px] h-[520px]">
        <div className="max-w-screen-xl mx-auto ">
          <div className="px-[10px] pt-4 text-2xl font-bold">
            Sản phẩm bán chạy
          </div>
          <CarouselCmp dataProductHot={dataProductHot} />
        </div>
      </div>
      {/* product hot */}
      <div className="bg-white h-[30px]"></div>
      <div className="bg-gray-100">
        <div className="max-w-screen-xl mx-auto ">
          <div className="px-[10px] pt-4 text-2xl font-bold">Sản phẩm mới</div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {visibleProducts.map((item, index) => (
              <div key={index}>
                <CardCarouselCmp img={item.img} />
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            {" "}
            <Button
              onclick={() => setSize((prev) => prev + 4)}
              disable={size >= 20}
              text={"Xem thêm"}
              className={
                "!bg-white px-8 py-4 !text-black border-[2px] border-gray-400 hover:!bg-gray-200"
              }
            />
          </div>
        </div>
      </div>
      {/*  */}
      <div className="bg-white h-[30px]"></div>
      <div className="bg-gray-100 pb-[30px]">
        <div className="max-w-screen-xl mx-auto ">
          <div className="flex justify-between mb-4">
            <div className="px-[10px] pt-4 text-2xl font-bold">Tin tức</div>
            <ButtonLinkCmp text={"Xem thêm"} />
          </div>
          <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
            {Array.from({ length: 4 })
              .fill("namdz")
              .map((item, index) => (
                <div key={index}>
                  <CardSmallCmp
                    img={cardT}
                    title={
                      "Life-Space Shape B420 Probiotic - Men vi sinh hỗ trợ kiểm soát cân nặng, bụng khỏe dáng cân đối"
                    }
                    hight={"100%"}
                    width={"100%"}
                    classtext={" !text-black "}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
      {/* thuong hieu noi bat */}
      <div className="bg-white h-[30px]"></div>
      <div className="bg-gray-100 pb-[30px]">
        <div className="max-w-screen-xl mx-auto ">
          <div className="flex justify-between mb-4">
            <div className="px-[10px] pt-4 text-2xl font-bold">
              Thương hiệu nổi bật
            </div>
            <ButtonLinkCmp text={"Xem thêm"} />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {Array.from({ length: 4 })
              .fill("namdz")
              .map((item, index) => (
                <div key={index}>
                  {/* <CardSmallCmp
                    img={cardT}
                    title={
                      "Life-Space Shape B420 Probiotic - Men vi sinh hỗ trợ kiểm soát cân nặng, bụng khỏe dáng cân đối"
                    }
                    hight={"100%"}
                    width={"100%"}
                    classtext={"!text-black "}
                  /> */}
                </div>
              ))}
          </div>
        </div>
      </div>
      {/* van chuyen */}
      <div className="bg-white h-[30px]"></div>
      <div className="bg-gray-100 pb-[30px]">
        <div className="max-w-screen-xl mx-auto ">
          <div className="flex justify-between mb-4">
            <div className="px-[10px] pt-4 text-2xl font-bold">
              Thông tin vận chuyển
            </div>
            <ButtonLinkCmp text={"Xem thêm"} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            {dataTranistion.map((item, index) => (
              <div key={index}>
                <CardHoriCmp
                  img={<item.img />}
                  title={item.title}
                  text={item.text}
                  hight={"100%"}
                  width={"100%"}
                  classtext={"!text-black "}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
