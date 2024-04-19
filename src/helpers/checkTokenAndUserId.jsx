// eslint-disable-next-line react/prop-types
const CheckTokenAndUserId = ({ children }) => {
  const accessToken = localStorage.getItem("accessToken");
  const userId = localStorage.getItem("userId");
  return accessToken && userId ? <>{children}</> : <></>;
};
export default CheckTokenAndUserId;
