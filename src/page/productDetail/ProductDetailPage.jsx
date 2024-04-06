import { useLocation } from "react-router-dom";
import BannerCmp1 from "../../components/banner/BannerCmp1";
import ButtonOrder from "../../components/button/ButtonOrder";

import { useProduct, useProductId } from "../../useQuery/useProducts";
import useScrollToTopOnMount from "../../hook/useScrollToTopOnMount";
import { addDot } from "../../helpers/changeNumber";
import { useCategory } from "../../useQuery/useCategory";
import { CommonLoadingModal } from "../../components/model/LoadingModel";
import CarouselCmp1 from "../../components/carousel1/carouselCmp1";
const ProductDetailPage = () => {
  useScrollToTopOnMount();
  const location = useLocation();
  const { data, isLoading } = useProductId(location.pathname.split("/")[2]);
  console.log(data);
  const { data: dataCategory, isLoading: isisLoadingCategory } = useCategory();
  const { data: dataListproduct, isLoading: isLoadingListproduct } = useProduct(
    location.search.split("=")[1]
  );
  return (
    <>
      <div className="px-[20px] py-[30px] max-w-screen-xl mx-auto">
        <div className="text-xl font-semibold">Sản phẩm chi tiết</div>
        <div className="flex gap-8 mt-6">
          <div className="mb-4 md:mb-0 md:w-1/3">
            <BannerCmp1 dataProductId={data} />
          </div>
          <div className="md:mb-8 md:w-2/3 px-8 mb-8">
            <p className="mb-4">
              <span className="font-semibold">Thương hiệu :</span> TC Pharma
            </p>
            <h3 className="text-[18px] font-semibold">
              {data ? data.productName : ""}
            </h3>
            <p>
              <strong className=" text-[20px] font-semibold mt-4 text-blue-700/80">
                {data ? addDot(data.price) : ""}
              </strong>{" "}
              <span className="text-[18px] text-blue-600/80">
                {" "}
                / {data ? data.type : ""}
              </span>
            </p>
            {/* <p>
              <strong className=" text-[18px] font-semibold mt-4 text-gray-700/50 line-through">
                280.000đ
              </strong>
            </p> */}
            {/* sản phẩm chi tiết */}
            <div>
              <div className="flex mb-3">
                <p className="text-[14px] w-[200px] font-semibold">
                  Chọn đơn vị tính:
                </p>
                <p className="text-[14px]"> {data ? data.type : ""}</p>
              </div>
              <div className="flex mb-3">
                <p className="text-[14px] w-[200px] font-semibold">Danh mục:</p>
                <p className="text-[14px] text-blue-700 ">
                  {data && dataCategory
                    ? dataCategory?.data?.find(
                        (item) => item._id === data.category_id
                      )?.name
                    : ""}
                </p>
              </div>
              <div className="flex mb-3">
                <p className="text-[14px] w-[200px] font-semibold">Quy cách:</p>
                <p className="text-[14px]">
                  {" "}
                  {data ? `${data.size} x ${data.weight}` : ""}
                </p>
              </div>
              <div className="flex mb-3">
                <p className="text-[14px] w-[200px] font-semibold">
                  Xuất xứ thương hiệu:
                </p>
                <p className="text-[14px]">Việt Nam</p>
              </div>
              <div className="flex mb-3">
                <p className="text-[14px] w-[200px] font-semibold">Đặc điểm:</p>
                <p className="text-[14px]"> {data ? data.color : ""}</p>
              </div>
              <div className="flex mb-3">
                <ButtonOrder item={data} />
              </div>
              <div className="flex mb-3">
                <p className="text-[14px] min-w-[200px] font-semibold">
                  Mô tả :
                </p>
                <div className="text-[14px]">
                  {data ? data.description : ""}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* sản phẩm liên quan  */}
        <div className="text-xl font-semibold mb-6">Sản phẩm liên quan</div>
        <div>
          <CarouselCmp1
            dataProductHot={dataListproduct?.data ?? []}
            id={location.search.split("=")[1]}
          />
        </div>
      </div>
      <CommonLoadingModal
        isLoadingModalOpen={
          isLoading || isisLoadingCategory || isLoadingListproduct
        }
      />
    </>
  );
};

export default ProductDetailPage;
