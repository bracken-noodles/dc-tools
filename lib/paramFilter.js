"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cookUrl = exports.default = void 0;

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var RESTfulURITemplateRegExp = /{(.+?)}/g; // ヽ(｀Д´)ﾉ

var _default = function _default(url, originParams) {
  var lackParams = false;

  var params = _objectSpread({}, originParams);

  url = url.replace(RESTfulURITemplateRegExp, function (s, variable) {
    delete params[variable];
    return originParams[variable];
  });
  return {
    url: url,
    params: params,
    lackParams: lackParams
  };
};

exports.default = _default;

var cookUrl = function cookUrl(url, params) {
  return url.replace(RESTfulURITemplateRegExp, function (tmpl, param) {
    return params[param] ? params[param] : tmpl;
  });
};

exports.cookUrl = cookUrl;