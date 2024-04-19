/* eslint-disable react/prop-types */

import CheckTokenAndUserId from "../../helpers/checkTokenAndUserId";

const CardCarouselCmp1 = ({ item }) => {
  return (
    <div className="p-[10px]">
      <div className="rounded-lg bg-white shadow-xl hover:border-[#5dad46] hover:border-[2px] h-auto md:h-[340px] transition-all ease-in-out">
        <img
          className="rounded-t-md h-[200px] object-contain w-[100%] object-center"
          src={item ? item.image : ""}
          alt=""
        />
        <div className="text-[14px] px-2 mt-4 font-semibold">
          {item ? item.productName : ""}
        </div>
        {/* <div className="px-3 text-gray-400 line-through text-[14px] ">
          {item.price} đ/Hộp
        </div> */}
        <CheckTokenAndUserId>
          <div className="px-3 font-semibold text-[#0172bc]">
            {item ? item.price : ""}/ {item ? item.type : ""}
          </div>
        </CheckTokenAndUserId>
      </div>
    </div>
  );
};

export default CardCarouselCmp1;
