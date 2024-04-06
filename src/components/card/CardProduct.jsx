import { Link } from "react-router-dom";
import ButtonOrder from "../button/ButtonOrder";
import { addDot } from "../../helpers/changeNumber";

// eslint-disable-next-line no-unused-vars, react/prop-types
const CardProduct = ({ img, islogin = true, item = {} }) => {
  return (
    <div className="p-[10px]">
      <div className="py-4 rounded-lg bg-white shadow-xl hover:border-[#5dad46] hover:border-[2px] h-auto md:h-[400px] transition-all ease-in-out">
        <Link to={`/san-pham/${item?._id}?category_id=${item?.category_id}`}>
          <img
            className="rounded-t-md h-[200px] object-contain w-[100%] object-center cursor-pointer"
            src={item.image.split(",")[0]}
            alt=""
          />
        </Link>
        <Link to={`/san-pham/${item?._id}?category_id=${item?.category_id}`}>
          <div className="text-[16px] px-2 mt-3 text-blue-900 font-semibold cursor-pointer">
            {item?.productName}
          </div>
        </Link>
        <div className="text-[14px] px-2 mt-3 w-[200px] overflow-hidden text-ellipsis whitespace-nowrap">
          {item?.description}
        </div>
        {/* <div className="px-3 text-gray-400 line-through text-[14px] ">
          45.000 đ/Hộp
        </div> */}
        <div className="px-3 font-semibold text-[#0172bc]">
          {addDot(item.price)} <span>đ/Hộp</span>
        </div>
        {/* button  */}
        <div className="flex items-center justify-center mt-2">
          <ButtonOrder item={item} />
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
