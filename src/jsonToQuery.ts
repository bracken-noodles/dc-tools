export default (params: object) =>
  JSON.stringify(params)
    .replace(/[{}"]/gm, "")
    .replace(/:/g, "=")
    .replace(/,/g, "&");
