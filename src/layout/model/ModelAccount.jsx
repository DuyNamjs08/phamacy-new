/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

const ModelAccount = ({ setActive, active, setShowModel }) => {
  const navigate = useNavigate();
  const handLogout = async () => {
    await localStorage.clear();
    await navigate("/dang-nhap");
  };
  return (
    <div className="h-[200px] w-[180px] bg-white text-black absolute z-50 top-[110px] right-[150px] rounded-md shadow-md divide-y-2 divide-dotted transition-all">
      <div className="p-2">
        <div className="text-[14px] font-semibold whitespace-nowrap overflow-hidden text-ellipsis">
          {localStorage.getItem("mail")}
        </div>
      </div>
      {/* link */}
      <div className="p-2">
        <div
          onClick={() => {
            setActive(!active);
            navigate("/tai-khoan");
            setShowModel(false);
          }}
          className="text-[14px] font-semibold cursor-pointer py-2 hover:bg-gray-100 rounded-sm transition-all"
        >
          <p className="ml-2"> Thông tin</p>
        </div>
        <div
          onClick={() => {
            navigate("/don-hang");
            setActive(!active);
            setShowModel(false);
          }}
          className="text-[14px] font-semibold cursor-pointer py-2 hover:bg-gray-100 rounded-sm transition-all"
        >
          <p className="ml-2">Đơn hàng</p>
        </div>
      </div>
      {/* logout */}
      {localStorage.getItem("userId") ? (
        <div className="p-2">
          <div
            onClick={() => {
              handLogout();
            }}
            className="text-[14px] font-semibold cursor-pointer py-2 hover:bg-gray-100 rounded-sm transition-all"
          >
            <p className="ml-2 text-red-800">Đăng xuất</p>
          </div>
        </div>
      ) : (
        <div className="p-2">
          <div
            onClick={() => {
              navigate("/dang-nhap");
            }}
            className="text-[14px] font-semibold cursor-pointer py-2 hover:bg-gray-100 rounded-sm transition-all"
          >
            <p className="ml-2 text-red-800">Đăng nhập</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModelAccount;
