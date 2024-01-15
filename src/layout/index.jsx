import Footer from "./Footer";
import Header from "./Header";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import zalo from "../assets/zalo.svg";

// eslint-disable-next-line react/prop-types
function Layout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
      <div className=" fixed z-50 right-0 bottom-0 h-[200px] w-[100px] flex flex-col items-center gap-2">
        <div className=" cursor-pointer w-[50px] h-[50px] rounded-full bg-[#0172bc] flex items-center justify-center text-[30px] text-white">
          <FaFacebookMessenger />
        </div>
        <div className="animate-wiggle cursor-pointer w-[50px] h-[50px] rounded-full flex items-center justify-center bg-red-400 bg-opacity-70">
          <div className="w-[30px] h-[30px] rounded-full bg-[#dd3333] flex items-center justify-center text-[18px] text-white ">
            <a href="tel:0866621957" target="_blank" rel="noopener noreferrer">
              <FaPhoneAlt />
            </a>
          </div>
        </div>
        <div className="cursor-pointer">
          <a
            href="https://zalo.me/0866621957"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={zalo} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Layout;
