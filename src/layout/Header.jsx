/* eslint-disable no-unused-vars */
import { useState } from "react";

import styled from "styled-components";
import { headerData } from "../constant";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/button/Button";
import SearchCmp from "../components/search/SearchCmp";
import BadgeCmp from "../components/badge/BadgeCmp";
import { useOnOutsideClick } from "../hook/use-outside";
import Avatar from "@mui/material/Avatar";
import ModelAccount from "./model/ModelAccount";
import logoMain from "../assets/logo123.png";
import ModelSearch from "./model/ModelSearch";
import { useProductSearch } from "../useQuery/useProducts";
import { useUserId } from "../useQuery/useUser";
import { CommonLoadingModal } from "../components/model/LoadingModel";

function Header() {
  const [showModel, setShowModel] = useState(false);
  const [data, setData] = useState([]);
  const [active, setActive] = useState(1);
  const role = localStorage.getItem("role");
  const token = localStorage.getItem("token");
  const [scrollY, setScrollY] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setData(headerData.filter((item) => item.role.includes("1")));
  }, []);
  useEffect(() => {
    function handleScroll() {
      setScrollY(window.scrollY);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [showModelSearch, setShowModelSearch] = useState(false);
  const [valueSearch, setValueSearch] = useState("");
  const [value, setValue] = useState("");
  const { innerBorderRef } = useOnOutsideClick(() => setShowModel(false));
  const { data: dataProduct, isLoading: isLoadingProduct } = useProductSearch({
    offset: 0,
    productName: valueSearch,
  });
  const { innerBorderRef: innerBorderRefSearch } = useOnOutsideClick(() =>
    setShowModelSearch(false)
  );
  const handleSearch = () => {
    if (value) {
      setShowModelSearch(true);
      setValueSearch(value);
    }
  };
  const { data: dataUser, isLoading } = useUserId(
    localStorage.getItem("userId") ?? ""
  );
  return (
    <header>
      <nav className="bg-white border-[#0172bc] border-b-[1px]">
        <div className=" flex flex-col items-end  justify-end mx-auto max-w-screen-xl mb-1 py-2">
          {!localStorage.getItem("userId") && (
            <div>
              <Button
                onclick={() => navigate("/dang-nhap")}
                text={"Đăng nhập"}
              />
              <Button
                text={"Tạo tài khoản"}
                onclick={() => navigate("/dang-ki")}
                className={"bg-red-700 hover:bg-red-800"}
              />
            </div>
          )}
          <div className="px-5 text-[14px] md:text-[16px]">
            Hotline:{" "}
            <a className="text-blue-400 underline" href="tel:0866621957">
              0866.621.957
            </a>
          </div>
        </div>
        <div
          className={`bg-[#1B3C73] px-3 text-white ${
            isFixed ? "fixed top-0 left-0 w-full z-50" : ""
          }`}
        >
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl gap-2 sm:gap-0">
            <div className="flex justify-center w-full mr-[40px] md:w-auto md:mr-0">
              <Link to={"/"}>
                <img
                  src={logoMain}
                  alt=""
                  className="object-cover h-[81px] w-[200px]"
                />
              </Link>
            </div>
            <div className="flex items-center lg:order-2 flex-wrap justify-between w-full md:w-auto">
              <div className="flex gap-2">
                <div className="relative">
                  <SearchCmp
                    onClick={handleSearch}
                    value={value}
                    setValue={setValue}
                  />
                  <div ref={innerBorderRefSearch}>
                    {showModelSearch && (
                      <ModelSearch data={dataProduct?.data ?? []} />
                    )}
                  </div>
                </div>

                <BadgeCmp />
                <div ref={innerBorderRef} className="cursor-pointer ml-3">
                  <Avatar
                    onClick={() => setShowModel(true)}
                    alt="Remy Sharp"
                    src={dataUser?.image}
                  />
                  {showModel && (
                    <ModelAccount
                      setActive={setActive}
                      active={active}
                      setShowModel={setShowModel}
                    />
                  )}
                </div>
              </div>
              <button
                data-collapse-toggle="mobile-menu-2"
                type="button"
                className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="mobile-menu-2"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  className="hidden w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <div
              className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
              id="mobile-menu-2"
            >
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                {headerData.map((item) => {
                  return (
                    <li key={item.id}>
                      <Link
                        to={item.path}
                        className={`block py-2 pr-4 pl-3 text-white rounded bg-blue-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white `}
                        aria-current="page"
                        onClick={() => setActive(item.id)}
                      >
                        <div
                          className={`${
                            location.pathname === item.path
                              ? "text-[#b7494a]"
                              : ""
                          }`}
                        >
                          {item.title}
                        </div>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <CommonLoadingModal isLoadingModalOpen={isLoading || isLoadingProduct} />
    </header>
  );
}

export default Header;
