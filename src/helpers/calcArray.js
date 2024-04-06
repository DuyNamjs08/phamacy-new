export const calcTotalPriceOrder = (array) => {
  if (array.length === 0) return 0;
  return array
    .reduce((cur, acc) => {
      return cur + Number(acc.price) * Number(acc.quantity);
    }, 0)
    .toString();
};
