/* eslint-disable react/prop-types */
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { handleAddToCart, handleRemoveFromCart } from "../../feature/homeSlice";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
const ButtonOrder = ({ item }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.home.cartItems);
  return (
    <>
      <div className="flex">
        <div
          onClick={() =>
            dispatch(
              handleAddToCart({
                ...item,
              })
            )
          }
          className=" cursor-pointer w-[40px] h-[40px] border-[1px] rounded-bl-full rounded-tl-full flex items-center justify-center"
        >
          <Tooltip title="Thêm">
            <IconButton>
              <FaPlus className="text-[12px] text-green-700 hover:text-green-600" />
            </IconButton>
          </Tooltip>
        </div>
        <div className="w-[40px] h-[40px] font-semibold bg-gray-100 flex items-center justify-center">
          {cartItems.find((cart) => cart._id === item?._id)?.quantity || 0}
        </div>
        <div
          onClick={() =>
            dispatch(
              handleRemoveFromCart({
                ...item,
              })
            )
          }
          className="cursor-pointer w-[40px] h-[40px]  border-[1px] rounded-tr-full rounded-br-full flex items-center justify-center"
        >
          <Tooltip title="Trừ">
            <IconButton>
              <FaMinus className="text-[12px] text-yellow-600 hover:text-yellow-500" />
            </IconButton>
          </Tooltip>
        </div>
      </div>
    </>
  );
};

export default ButtonOrder;
