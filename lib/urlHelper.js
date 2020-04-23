"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeUrlProtocol = exports.getUrlWithCurrentProtocol = exports.getType = exports.getFileNameWithoutType = exports.getSuffix = void 0;

var getSuffix = function getSuffix(url) {
  return url.split("/")[url.split("/").length - 1];
};

exports.getSuffix = getSuffix;

var getFileNameWithoutType = function getFileNameWithoutType(url) {
  var splitData = url.split(".");

  if (splitData.length === 1) {
    return splitData[0];
  }

  return splitData.slice(0, -1).join(".");
};

exports.getFileNameWithoutType = getFileNameWithoutType;

var getType = function getType(url) {
  var splitData = url.split(".");

  if (splitData.length === 1) {
    return null;
  }

  return splitData[splitData.length - 1];
};
/**
 * support url like http://your-url, https://your-url, //your-url
 * @param {String} url
 * @return {String}
 */


exports.getType = getType;

var getUrlWithCurrentProtocol = function getUrlWithCurrentProtocol(url) {
  if (url.startsWith("http")) {
    return url.replace(/^https?:/, location.protocol);
  }

  return "".concat(location.protocol).concat(url);
};
/**
 * remove protocol
 * for example, http://your-url -> //your-url
 * @param {String} url
 * @return {String}
 */


exports.getUrlWithCurrentProtocol = getUrlWithCurrentProtocol;

var removeUrlProtocol = function removeUrlProtocol(url) {
  if (url.startsWith("http")) {
    return url.replace(/^https?:/, "");
  }

  return url;
};

exports.removeUrlProtocol = removeUrlProtocol;