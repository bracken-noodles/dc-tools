export const getSuffix = (url: string) =>
  url.split("/")[url.split("/").length - 1];

export const getFileNameWithoutType = (url: string) => {
  const splitData = url.split(".");
  if (splitData.length === 1) {
    return splitData[0];
  }
  return splitData.slice(0, -1).join(".");
};

export const getType = (url: string) => {
  const splitData = url.split(".");
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
export const getUrlWithCurrentProtocol = (url: string) => {
  if (url.startsWith("http")) {
    return url.replace(/^https?:/, location.protocol);
  }
  return `${location.protocol}${url}`;
};

/**
 * remove protocol
 * for example, http://your-url -> //your-url
 * @param {String} url
 * @return {String}
 */
export const removeUrlProtocol = (url: string) => {
  if (url.startsWith("http")) {
    return url.replace(/^https?:/, "");
  }
  return url;
};
