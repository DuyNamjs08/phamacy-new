import { useLocation } from "react-router-dom";
import { usePostsId } from "../../useQuery/usePosts";
import HTMLReactParser from "html-react-parser";

const PostDetail = () => {
  const location = useLocation();
  const { data } = usePostsId(location.pathname.split("/")[2]);
  return (
    <>
      <div className="px-[20px] py-[30px] max-w-screen-xl mx-auto">
        {data ? HTMLReactParser(data.description) : ""}
      </div>
    </>
  );
};

export default PostDetail;
