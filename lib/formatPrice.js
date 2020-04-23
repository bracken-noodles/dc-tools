"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

// 价格格式化 逗号分隔
var formatPrice = function formatPrice(price) {
  var priceArr = (price / 100).toFixed(2).split(".");
  var result = "¥" + priceArr[0].replace(/\B(?=(?:\d{3})+$)/g, ",");

  if (priceArr[1]) {
    result += "." + priceArr[1];
  }

  return result;
};

var _default = formatPrice;
exports.default = _default;