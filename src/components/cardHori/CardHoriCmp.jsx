// eslint-disable-next-line react/prop-types
const CardHoriCmp = ({ title, text, img }) => {
  return (
    <div className="block sm:flex gap-2 bg-white  rounded-lg p-4 h-auto md:h-[140px]">
      <div className="w-1/3 rounded-t-lg shadow-sm text-[50px] flex justify-center items-center ">
        {img}
      </div>
      <div className=" w-full sm:w-2/3">
        <h3 className="font-bold text-[#0172bc] uppercase">{title}</h3>
        <p className="text-[14px] text-gray-500">{text}</p>
      </div>
    </div>
  );
};

export default CardHoriCmp;
