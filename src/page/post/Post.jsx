import { usePosts } from "../../useQuery/usePosts";
import useScrollToTopOnMount from "../../hook/useScrollToTopOnMount";
import { Link } from "react-router-dom";
const Post = () => {
  const { data } = usePosts();
  useScrollToTopOnMount();
  return (
    <>
      <div className="p-[20px] max-w-screen-xl mx-auto text-[14px] md:text-[16px]">
        <div className="text-[28px] font-bold ml-5">Bài viết nổi bật</div>
        <div className="flex gap-6">
          <div className="w-2/3">
            {data
              ? data.map((item) => (
                  <div
                    key={item._id}
                    className="shadow-md flex gap-2 justify-between p-4"
                  >
                    <div className="p-4">
                      <p className="text-[12px] font-semibold">
                        Đoàn Trọng Nam
                      </p>
                      <div className="text-[18px] font-semibold my-3">
                        <Link to={item._id}>{item.name}</Link>
                      </div>
                      <div className="text-gray-500 mb-4">
                        Câu chuyện của tôi là Tôi đang học tiếng Nhật trên một
                        trang web là Dungmori.com, và tôi học từ mới trên trang
                        web Quizlet. Và tôi...
                      </div>
                      <div>
                        {" "}
                        <span className="mr-2">Ngày đăng:</span>
                        <span>22-03-2024</span>
                      </div>
                    </div>
                    <Link to={item}>
                      <img
                        className="max-w-[200px] object-contain"
                        src={item?.image}
                        alt=""
                      />
                    </Link>
                  </div>
                ))
              : ""}
          </div>
          <div className="w-1/3">
            <div className="uppercase">Các chủ đề được đề xuất </div>
            <div className="flex flex-wrap gap-4 mt-4">
              {Array.from({ length: 4 })
                .fill("1")
                .map((item) => (
                  <div
                    key={item}
                    className="px-4 py-2 rounded-full bg-gray-200"
                  >
                    thuoc nam
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
