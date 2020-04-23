"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.videoPattern = exports.imgPattern = exports.suffix = exports.email = exports.mobile = void 0;

/** 手机 */
var mobile = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/;
/** email */

exports.mobile = mobile;
var email = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
/** 文件后缀, 最后一个点及其后面的内容 */

exports.email = email;
var suffix = /\.[^\.]*?$/;
/** 图片 */

exports.suffix = suffix;
var imgPattern = /\.(png|jpg|svg|jpeg)$/i;
/** 视频 */

exports.imgPattern = imgPattern;
var videoPattern = /\.(mp4)$/i;
exports.videoPattern = videoPattern;