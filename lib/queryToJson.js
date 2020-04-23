"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(search) {
  return search.length < 1 ? {} : JSON.parse("{\"".concat(search.substring(1).replace(/=/g, '":"').replace(/&/g, '","'), "\"}"));
};

exports.default = _default;