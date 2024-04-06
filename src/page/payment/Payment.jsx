import { useDispatch, useSelector } from "react-redux";
import { addDot } from "../../helpers/changeNumber";
import Button from "../../components/button/Button";
import { useForm } from "react-hook-form";
import { paymentSchema } from "./paymetSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import FormInput from "../../components/form/FormInput";
import FormRadio from "../../components/form/FormRadio";
import { useEffect, useState } from "react";
import { calcTotalPriceOrder } from "../../helpers/calcArray";
import { useOrderPost } from "../../useQuery/useOrder";
import { CommonLoadingModal } from "../../components/model/LoadingModel";
import {
  clearCart,
  showMessageError,
  showMessageSuccesss,
} from "../../feature/homeSlice";
import useScrollToTopOnMount from "../../hook/useScrollToTopOnMount";
import { Link } from "react-router-dom";
const paymentData = [
  { label: "Thanh toán tiền mặt", value: "payment_on_delivery" },
  { label: "Chuyển khoản ngân hàng", value: "bank_transfer" },
];

const Payment = () => {
  useScrollToTopOnMount();
  const [provision, setProvision] = useState(false);
  const [showPro, setShowPro] = useState(false);
  const [isLoadingMethod, setIsLoadingMethod] = useState(false);
  const cartItems = useSelector((state) => state.home.cartItems);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(paymentSchema),
    mode: "onSubmit",
    defaultValues: {
      country: "vietnam",
      payment_method: "payment_on_delivery",
    },
  });
  const { mutate, status } = useOrderPost();
  useEffect(() => {
    if (status === "pending") {
      setIsLoadingMethod(true);
    } else {
      setIsLoadingMethod(false);
    }
  }, [status]);
  return (
    <>
      <div className="p-[20px] max-w-screen-xl mx-auto">
        <div className="text-xl font-semibold mb-4">Màn hình thanh toán</div>
        {cartItems.length > 0 ? (
          <div className="block md:flex gap-5">
            <div className="md:w-1/2 flex flex-col gap-4">
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
                        <div className="flex items-center">
                          <span className="font-medium mr-2">số lượng:</span>{" "}
                          <span className="font-semibold text-[18px] text-green-700">
                            {item.quantity}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))
                : ""}
            </div>
            <div className="md:w-1/2">
              {/* form */}
              <FormInput
                id={"address_line1"}
                label={"Tên địa chỉ"}
                placeholder={"Nhập tên địa chỉ"}
                register={register("address_line1")}
                error={errors?.address_line1}
              />
              <FormInput
                id={"address_line2"}
                label={"Tên địa chỉ phụ"}
                placeholder={"Nhập tên địa chỉ phụ"}
                register={register("address_line2")}
                error={errors?.address_line2}
              />
              <FormInput
                id={"city"}
                label={"Tên thành phố"}
                placeholder={"Nhập tên thành phố"}
                register={register("city")}
                error={errors?.city}
              />
              <FormInput
                id={"state"}
                label={"Tên tỉnh"}
                placeholder={"Nhập tên tỉnh"}
                register={register("state")}
                error={errors?.state}
              />
              <FormInput
                id={"phone"}
                label={"Số điện thoại"}
                placeholder={"Nhập số điện thoại"}
                register={register("phone")}
                error={errors?.phone}
              />
              <FormRadio
                label={"Quốc gia"}
                data={[{ value: "vietnam", label: "Việt Nam" }]}
                register={register("country")}
              />
              <FormRadio
                label={"Phương thức thanh toán"}
                data={paymentData}
                register={register("payment_method")}
              />
              {/* tong tien  */}
              <div className="flex items-center mb-6">
                <div>Tổng tiền : </div>
                <div className="ml-2 font-semibold text-[18px]">
                  {addDot(calcTotalPriceOrder(cartItems))} <span>vnđ</span>
                </div>
              </div>
              {/* quy tac */}
              <div>
                Quý khách vui lòng kiểm tra kỹ thông tin giao hàng, hình thức
                thanh toán và nhấn nút{" "}
                <span className="font-semibold">Đặt hàng</span> để hoàn tất quá
                trình đặt hàng.
              </div>
              <div className="flex items-center mb-4 mt-3">
                <input
                  value={provision}
                  onChange={(e) => setProvision(e.target.checked)}
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded "
                />
                <div className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Tôi đồng ý với{" "}
                  <Link to={"/dieu-khoan"}>
                    <span className="font-semibold text-green-700/80 cursor-pointer">
                      Điều khoản sử dụng
                    </span>
                  </Link>
                </div>
              </div>
              {showPro && (
                <div className={`text-red-300`}>
                  Bạn cần đồng ý với điều khoản
                </div>
              )}
              {/*  thanh toan */}
              <div className="mt-8">
                <Button
                  onclick={handleSubmit((dataForm) => {
                    if (provision) {
                      setShowPro(false);
                      const product = cartItems.map((item) => {
                        return {
                          product_id: item._id,
                          quantity: item.quantity,
                          price: item.price,
                          image: item.image,
                          productName: item.productName,
                        };
                      });
                      mutate(
                        {
                          customer_id: localStorage.getItem("userId") ?? "",
                          customer_name: localStorage.getItem("mail") ?? "",
                          products: product,
                          shipping_address: { ...dataForm },
                          total_price: calcTotalPriceOrder(cartItems),
                          status: "pending",
                          phone: dataForm.phone,
                        },
                        {
                          onSuccess: () => {
                            reset();
                            dispatch(clearCart());
                            dispatch(
                              showMessageSuccesss("Đặt hàng thành công!")
                            );
                          },
                          onError: () => {
                            dispatch(showMessageError("Đặt hàng thất bại"));
                          },
                        }
                      );
                    } else {
                      setShowPro(true);
                    }
                  })}
                  text="Đặt hàng"
                  className="bg-green-600 hover:bg-green-500 transition-all"
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="h-[60vh] font-semibold">Bạn chưa có sản phẩm nào</div>
        )}
      </div>
      <CommonLoadingModal isLoadingModalOpen={isLoadingMethod} />
    </>
  );
};

export default Payment;
