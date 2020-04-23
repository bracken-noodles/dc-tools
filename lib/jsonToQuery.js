"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(params) {
  return JSON.stringify(params).replace(/[{}"]/gm, "").replace(/:/g, "=").replace(/,/g, "&");
};

exports.default = _default;