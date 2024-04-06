// eslint-disable-next-line react/prop-types
const BannerHerro = ({ img }) => {
  return (
    <div className="h-[40vh] flex justify-center items-center">
      <img
        className="h-[100%] w-full object-cover object-center "
        src={img}
        alt=""
      />
    </div>
  );
};

export default BannerHerro;
