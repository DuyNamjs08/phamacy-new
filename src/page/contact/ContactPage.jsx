import BannerHerro from "../../components/bannerHerro/BannerHerro";
import { useContact } from "../../useQuery/useContact";
import { urlify } from "../../helpers/changeTextTohtml";
import HTMLReactParser from "html-react-parser";
import useScrollToTopOnMount from "../../hook/useScrollToTopOnMount";

const ContactPage = () => {
  useScrollToTopOnMount();
  const { data } = useContact();
  return (
    <div>
      <BannerHerro img={data ? data[0]?.image : ""} />
      <div className="p-[20px] max-w-screen-xl mx-auto text-[14px] md:text-[16px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div>
            <h3 className="font-semibold text-2xl uppercase">
              {data ? data[0]?.title : ""}{" "}
            </h3>
            <ul className="mt-4">
              <li>
                {data ? HTMLReactParser(urlify(data[0]?.textTitle)) : ""}{" "}
              </li>
            </ul>
            <iframe
              className="w-full h-[400px] mt-4 py-10"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.757908537281!2d105.805871!3d21.0023393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ad370df77835%3A0xbbec3e92fa734ced!2zODUgxJAuIFbFqSBUcuG7jW5nIFBo4bulbmcsIFRoYW5oIFh1w6JuIFRydW5nLCBUaGFuaCBYdcOibiwgSMOgIE7hu5lpIDEyMzEwNQ!5e0!3m2!1svi!2s!4v1705201120455!5m2!1svi!2s"
              allowfullscreen
              loading="lazy"
            ></iframe>
          </div>
          <div>
            <h3 className="font-semibold text-2xl">
              {" "}
              {data ? data[0]?.subTitle : ""}{" "}
            </h3>
            <p className="mt-4">
              {data ? HTMLReactParser(urlify(data[0]?.textSubTitle)) : ""}{" "}
            </p>
            <div className="mt-4">
              <form>
                <div className="mb-5">
                  <input
                    type="text"
                    className=" shadow-sm w-[80%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg"
                    placeholder="Họ và tên"
                    required
                  />
                </div>
                <div className="mb-5">
                  <input
                    type="email"
                    className="shadow-sm  w-[80%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg"
                    placeholder="Địa chỉ email"
                    required
                  />
                </div>
                <div className="mb-5">
                  <input
                    type="text"
                    placeholder="Số điện thoại"
                    className="shadow-sm  w-[80%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg"
                    required
                  />
                </div>
                <div className="mb-4">
                  <textarea
                    id="message"
                    rows={4}
                    className=" w-[80%] block p-2.5  text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
                    placeholder="Leave a comment..."
                    defaultValue={""}
                  />
                </div>

                <button
                  type="submit"
                  className="text-white bg-blue-800 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Gửi đi
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
