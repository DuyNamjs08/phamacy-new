import { useEffect, useState } from "react";

import { useProduct } from "../../useQuery/useProducts";
import CardProduct from "../../components/card/CardProduct";
import { CommonLoadingModal } from "../../components/model/LoadingModel";
import { useCategory } from "../../useQuery/useCategory";
import useScrollToTopOnMount from "../../hook/useScrollToTopOnMount";
import { Pagination } from "@mui/material";
import { usePaginate } from "../../hook/usePaginate";

const ProductPage = () => {
  useScrollToTopOnMount();
  const [state, setState] = useState(5);
  const [categoryId, setCategoryId] = useState("");
  const [listCategory, setListCategory] = useState([]);
  const {
    offset,
    page,
    handleChange,
    limit,
    setOffset,
    setPage,
    setSearchParams,
  } = usePaginate();
  const { data, isLoading, refetch, totalPage } = useProduct({
    limit,
    offset,
    category_id: categoryId,
  });
  const {
    data: dataCategory,
    isLoading: isloadingCategory,
    refetch: refeshCategory,
  } = useCategory();
  useEffect(() => {
    if (data) {
      refetch();
    }
  }, [data]);
  useEffect(() => {
    if (dataCategory) {
      refeshCategory();
      setListCategory(dataCategory?.data.slice(0, state));
    }
  }, [dataCategory, state]);

  return (
    <>
      <div className="bg-[#f2f6fd]">
        <div className="p-[20px] max-w-screen-xl mx-auto">
          {" "}
          <h3 className="uppercase font-semibold text-2xl h-[60px] flex items-center">
            Chăm sóc sức khỏe
          </h3>
        </div>
      </div>
      <div className=" max-w-screen-xl mx-auto  ">
        <div className="flex gap-4">
          <div className="w-1/4 border-r-[1px] border-[#ccc] p-[20px] border-dotted">
            <h3 className="uppercase font-semibold text-xl h-[60px] flex items-center">
              Danh mục
            </h3>
            {/* danh muc san pham */}
            <div className="shadow-md p-8">
              <div className="text-[18px] font-semibold uppercase mb-3">
                Nhóm thuốc
              </div>
              <div
                onClick={() => {
                  setCategoryId("");
                  setPage(1);
                  setOffset(0);
                  setSearchParams({ limit: 5, offset: 0, page: 1 });
                }}
                className={` ${
                  categoryId === "" ? "font-semibold text-blue-800" : ""
                }  border-b-[2px] border-dotted p-1 cursor-pointer hover:text-blue-600 w-[150px] whitespace-nowrap overflow-hidden text-ellipsis `}
              >
                Tất cả
              </div>
              {listCategory.map((item) => {
                return (
                  <div
                    key={item}
                    onClick={() => {
                      setCategoryId(item._id);
                      setPage(1);
                      setOffset(0);
                      setSearchParams({ limit: 5, offset: 0, page: 1 });
                    }}
                    className={` ${
                      categoryId === item._id
                        ? "font-semibold text-blue-800"
                        : ""
                    }  border-b-[2px] border-dotted p-1 cursor-pointer hover:text-blue-600 w-[150px] whitespace-nowrap overflow-hidden text-ellipsis `}
                  >
                    {item.name}
                  </div>
                );
              })}
              {state === 5 ? (
                <div
                  onClick={() =>
                    setState(dataCategory ? dataCategory?.data?.length : 5)
                  }
                  className="flex justify-center mt-2 cursor-pointer text-green-500 hover:text-green-800"
                >
                  <div>Xem thêm</div>
                </div>
              ) : (
                <div
                  onClick={() => setState(5)}
                  className="flex justify-center mt-2 cursor-pointer text-green-500 hover:text-green-800"
                >
                  <div>Thu gon</div>
                </div>
              )}
            </div>
            {/* nha san xuat */}
            {/* <div className="shadow-md p-8">
              <div className="text-[16px] font-semibold uppercase mb-3">
                Nhà sản xuất
              </div>
              {Array.from({ length: state })
                .fill(1)
                .map((item) => {
                  return (
                    <div
                      key={item}
                      className="border-b-[2px] p-1 cursor-pointer hover:text-blue-600"
                    >
                      chăm sóc cá nhân
                    </div>
                  );
                })}
              {state === 5 ? (
                <div
                  onClick={() =>
                    setState(dataCategory ? dataCategory?.data?.length : 5)
                  }
                  className="flex justify-center mt-2 cursor-pointer text-green-500 hover:text-green-800"
                >
                  <div>Xem thêm</div>
                </div>
              ) : (
                <div
                  onClick={() => setState(5)}
                  className="flex justify-center mt-2 cursor-pointer text-green-500 hover:text-green-800"
                >
                  <div>Thu gon</div>
                </div>
              )}
            </div> */}
          </div>
          <div className="w-3/4 p-[20px]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {data
                ? data?.data?.map((item, index) => (
                    <div key={index}>
                      <CardProduct img={item.image} item={item} />
                    </div>
                  ))
                : ""}
            </div>
            {data && data?.data?.length > 0 ? (
              <div className="mt-4 flex justify-center">
                <Pagination
                  count={totalPage ?? 0}
                  page={page}
                  onChange={handleChange}
                  variant="outlined"
                  shape="rounded"
                />
              </div>
            ) : (
              <div className="mt-4 flex justify-center font-semibold">
                {" "}
                Không có sản phẩm nào
              </div>
            )}
          </div>
        </div>
      </div>
      <CommonLoadingModal isLoadingModalOpen={isLoading || isloadingCategory} />
    </>
  );
};

export default ProductPage;
