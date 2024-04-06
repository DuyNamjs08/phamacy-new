import HTMLReactParser from "html-react-parser";
import BannerHerro from "../../components/bannerHerro/BannerHerro";
import useScrollToTopOnMount from "../../hook/useScrollToTopOnMount";
import { useIntro } from "../../useQuery/useIntro";
const IntroPage = () => {
  useScrollToTopOnMount();
  const { data } = useIntro();
  return (
    <>
      <BannerHerro img={data ? data[0]?.image : ""} />
      <div className="p-[20px] max-w-screen-xl mx-auto text-[14px] md:text-[16px]">
        <div className="w-[80%] text-left">
          <h3 className="font-semibold text-2xl my-4">
            {data ? data[0].name : ""}
          </h3>
          <div className="min-h-[60vh]">
            {data ? HTMLReactParser(data[0].description) : ""}
          </div>
        </div>
      </div>
    </>
  );
};

export default IntroPage;
