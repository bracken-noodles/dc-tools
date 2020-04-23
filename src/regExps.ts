/** 手机 */
export const mobile = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/;

/** email */
export const email = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;

/** 文件后缀, 最后一个点及其后面的内容 */
export const suffix = /\.[^\.]*?$/;

/** 图片 */
export const imgPattern = /\.(png|jpg|svg|jpeg)$/i;

/** 视频 */
export const videoPattern = /\.(mp4)$/i;
