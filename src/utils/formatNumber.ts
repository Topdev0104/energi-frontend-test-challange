export const formatNumber = (number: number, toFixed = 2) => {
  return number
    .toFixed(toFixed)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
