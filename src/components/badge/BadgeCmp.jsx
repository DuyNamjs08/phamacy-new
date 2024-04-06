import { FaCartArrowDown } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const BadgeCmp = () => {
  const cartItems = useSelector((state) => state.home.cartItems);
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate("/don-hang")}
      type="button"
      className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white  rounded-full hover:bg-gray-600 justify-center transition ease-in-out"
    >
      <div className="text-[20px]">
        <FaCartArrowDown />
      </div>
      <span className="sr-only">Notifications</span>
      <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2">
        {cartItems.length}
      </div>
    </button>
  );
};

export default BadgeCmp;
