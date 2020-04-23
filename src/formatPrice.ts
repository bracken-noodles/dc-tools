// 价格格式化 逗号分隔
const formatPrice = (price: number) => {
  const priceArr = (price / 100).toFixed(2).split(".");
  let result = "¥" + priceArr[0].replace(/\B(?=(?:\d{3})+$)/g, ",");
  if (priceArr[1]) {
    result += "." + priceArr[1];
  }
  return result;
};

export default formatPrice;
