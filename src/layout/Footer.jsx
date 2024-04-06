import { Link } from "react-router-dom";
import { useFooter } from "../useQuery/useFooter";
function Footer() {
  const { data } = useFooter();
  return (
    <>
      <footer className="bg-[#e5e5e5] dark:bg-gray-900 pb-10">
        <div className="mx-auto w-full max-w-screen-xl">
          <div className="block md:flex gap-8 px-4 py-6 lg:py-8 ">
            <div className="mb-4 md:mb-0 w-full md:w-2/5">
              <h2 className="mb-6 text-lg font-semibold text-gray-900 uppercase">
                {data ? data[0]?.title_footer_col1 : ""}
              </h2>
              <div className=" text-[14px]  text-[#5e6f88]">
                {data ? data[0]?.footerCol1 : ""}
              </div>
            </div>
            <div className="w-full md:w-[30%]">
              <h2 className="mb-6 text-lg font-semibold text-gray-900 uppercase">
                {data ? data[0]?.title_footer_col2 : ""}
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                {data
                  ? data[0]?.footerCol2.split("\r\n").map((item) => (
                      <li key={item} className="mb-4 text-[14px]">
                        <Link to={"/dieu-khoan"} className="hover:underline">
                          {item}
                        </Link>
                      </li>
                    ))
                  : ""}
              </ul>
            </div>
            <div className="w-full md:w-[30%]">
              <h2 className="mb-6 text-lg font-semibold text-gray-900 uppercase dark:text-white">
                {data ? data[0]?.title_footer_col3 : ""}
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                {data
                  ? data[0]?.footerCol3.split("\r\n").map((item) => (
                      <li key={item} className="mb-4 text-[14px]">
                        <Link to={"/lien-he"} className="hover:underline">
                          {item}
                        </Link>
                      </li>
                    ))
                  : ""}
              </ul>
            </div>
          </div>
          <div className="text-[#5e6f88] text-center text-[14px]">
            <h4 className="mb-3 uppercase">Văn phòng nhà thuốc Hapu</h4>
            <div>{data ? data[0]?.titleSubFooter : ""}</div>
            <div>
              Điện thoại: <span>{data ? data[0]?.phone : ""}</span>. Email:
              <span>{data ? data[0]?.mail : ""}</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
