/* eslint-disable react/prop-types */
import Button from "../button/Button";
// import baner from "../../assets/banner/1.png";

const CardCarouselCmp = ({ img }) => {
  return (
    <div className="p-[10px]">
      <div className="rounded-lg bg-white shadow-xl hover:border-[#5dad46] hover:border-[2px] h-auto md:h-[440px] transition-all ease-in-out">
        <img
          className="rounded-t-md h-[240px] object-cover w-[100%] object-center"
          src={img}
          alt=""
        />
        <div className="p-3">
          Trong ví dụ này, handleResize kiểm tra kích thước màn hình và cập nhật
        </div>
        <div className="px-3 text-gray-400 line-through text-[14px] ">
          45.000 đ/Hộp
        </div>
        <div className="px-3 font-semibold text-[#0172bc]">45.000 đ/Hộp</div>
        <div className="py-2 px-3">
          <Button
            text={"Thêm vào giỏ hàng"}
            className={"!bg-[#5dad46] text-[14px] md:text-[16px]"}
          />
        </div>
      </div>
    </div>
  );
};

export default CardCarouselCmp;
