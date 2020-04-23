"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showCal = void 0;

var _solarlunar = _interopRequireDefault(require("solarlunar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var showCal = function showCal(timestamp) {
  var d = new Date(timestamp);

  var o = _solarlunar.default.solar2lunar(d.getFullYear(), d.getMonth() + 1, d.getDate());

  var str = "".concat(o.gzYear, "(").concat(o.animal, ")\u5E74").concat(o.monthCn).concat(o.dayCn);
  return str;
};

exports.showCal = showCal;