// eslint-disable-next-line react/prop-types
const CardSmallCmp = ({ img, title, classtext = "" }) => {
  return (
    <>
      <div className="flex flex-col justify-center hover:border-[#5dad46] hover:border-[2px] transition-all ease-in-out p-10">
        <img
          className={`h-[100px] object-contain w-[100%] object-center`}
          src={img}
          alt=""
        />
        <div
          className={`text-center mt-4  text-[14px] px-2  md:text-[16px] text-gray-600 ${classtext}`}
        >
          {title}
        </div>
      </div>
    </>
  );
};

export default CardSmallCmp;
