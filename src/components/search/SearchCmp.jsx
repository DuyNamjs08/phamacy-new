import { FaSearch } from "react-icons/fa";

const SearchCmp = () => {
  return (
    <form className="w-[200px] sm:w-[300px] overflow-hidden">
      <div className="relative">
        <div
          onClick={() => alert("namdz")}
          className="cursor-pointer z-10 absolute end-[15px] bottom-[10px] flex items-center text-black"
        >
          <FaSearch />
        </div>
        <input
          type="text"
          className="block w-full px-2.5 text-sm text-gray-900 border rounded-full bg-gray-100 outline-none text-[14px] lg:text-[16px]"
          placeholder="Tìm kiếm sản phẩm"
        />
      </div>
    </form>
  );
};

export default SearchCmp;
