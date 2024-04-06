import { useDispatch, useSelector } from "react-redux";
import ButtonOrder from "../../components/button/ButtonOrder";
import { FaTimes } from "react-icons/fa";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import { handleDeleteFromCart } from "../../feature/homeSlice";
import { addDot } from "../../helpers/changeNumber";
import { calcTotalPriceOrder } from "../../helpers/calcArray";
import Button from "../../components/button/Button";
import { useNavigate } from "react-router-dom";
import useScrollToTopOnMount from "../../hook/useScrollToTopOnMount";

const Order = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.home.cartItems);
  useScrollToTopOnMount();
  return (
    <>
      <div className="p-[20px] max-w-screen-xl mx-auto min-h-[60vh]">
        <div className="text-xl font-semibold mb-4">Màn hình đơn hàng</div>
        {cartItems.length > 0 ? (
          <div className="flex gap-5">
            <div className="w-1/2 flex flex-col gap-4">
              {cartItems
                ? cartItems.map((item) => (
                    <div key={item._id} className="flex gap-4 shadow-md">
                      <div className="w-1/3">
                        <img
                          className="h-[120px] w-[100%] object-contain"
                          src={item.image.split(",")[0]}
                          alt=""
                        />
                      </div>
                      <div className="w-1/3 flex  flex-col gap-2">
                        <div className="text-[18px] font-semibold">
                          {item.productName}
                        </div>
                        <div className="text-[14px] text-gray-500">
                          {item.description}
                        </div>
                        <div className="text-[14px] text-gray-500">
                          {addDot(item.price)} <span>vnđ</span>
                        </div>
                        <div>
                          {item.status ? (
                            <span className="text-green-700 font-medium">
                              Còn Hàng
                            </span>
                          ) : (
                            <span className="text-red-700 font-medium">
                              Hết hàng
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="w-1/3 flex items-center justify-center gap-2">
                        <div>
                          <ButtonOrder item={item} />
                        </div>
                        <div
                          onClick={() =>
                            dispatch(handleDeleteFromCart({ _id: item._id }))
                          }
                        >
                          <Tooltip title="Xóa">
                            <IconButton>
                              <div className="text-[16px] text-red-800 hover:text-red-700">
                                <FaTimes />
                              </div>
                            </IconButton>
                          </Tooltip>
                        </div>
                      </div>
                    </div>
                  ))
                : ""}
            </div>
            <div className="w-1/2">
              <div className="shadow-sm flex ">
                <div className="w-1/2  border-r-[1px] h-[160px] p-4 relative flex justify-center items-center">
                  <div className="text-[24px]  font-semibold  absolute top-4 ">
                    Số lượng
                  </div>
                  <div className="text-[26px]  font-semibold text-green-700/90">
                    {cartItems.length}
                  </div>
                </div>
                <div className="w-1/2 h-[160px] p-4 relative flex justify-center items-center">
                  <div className="text-[24px]  font-semibold  absolute top-4 ">
                    Thành tiền
                  </div>
                  <div className="w-[100%] flex justify-between">
                    <div className="text-[26px]  font-semibold text-green-700/90">
                      Tổng:
                    </div>
                    <div className="text-[26px]  font-semibold text-green-700/90">
                      {addDot(calcTotalPriceOrder(cartItems))} <span>vnđ</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* phan sau */}
              <div className="flex mt-3 items-center gap-4">
                <div className="w-1/2">
                  {" "}
                  <input
                    type={"text"}
                    id={"mgg"}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
                    placeholder={"Nhập mã giảm giá"}
                  />
                </div>
                <div>
                  {" "}
                  <Button text="Áp dụng" />
                </div>
              </div>
              {/* tien hanh thanh toan */}
              <div className="mt-8">
                <Button
                  onclick={() => navigate("/dat-hang-nhanh")}
                  text="Tiến hành thanh toán"
                  className="bg-green-600 hover:bg-green-500 transition-all"
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="font-semibold">
            Bạn chưa có sản phẩm nào trong giỏ hàng
          </div>
        )}
      </div>
    </>
  );
};

export default Order;
