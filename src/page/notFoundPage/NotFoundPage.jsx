import Button from "../../components/button/Button";
import imgNotFound from "../../assets/notFound.gif";
import { useNavigate } from "react-router-dom";

export default function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center w-full h-[100vh] translate-y-[-10px]">
      <h1 className="text-[#ed85ab] text-[80px] translate-y-[100%]">404</h1>
      <img className="w-[50%]" src={imgNotFound} alt="" />
      <div
        onClick={() => {
          navigate("/");
        }}
      >
        <Button
          className={"translate-y-[-400%] bg-amber-500"}
          text={" Quay về trang chủ"}
        ></Button>
      </div>
    </div>
  );
}
