"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var fileRegex = /[\\/]{1}(\w+)\.\w+/i;

var _default = function _default(filePath) {
  return filePath.match(fileRegex)[1];
};

exports.default = _default;