interface FilterResult {
  url: string;
  params: any;
  lackParams: boolean;
}

const RESTfulURITemplateRegExp = /{(.+?)}/g; // ヽ(｀Д´)ﾉ

export default (url: string, originParams: any): FilterResult => {
  let lackParams = false;
  let params = { ...originParams };

  url = url.replace(RESTfulURITemplateRegExp, (s, variable) => {
    delete params[variable];
    return originParams[variable];
  });

  return {
    url,
    params,
    lackParams
  };
};

export const cookUrl = (url: string, params: any) =>
  url.replace(RESTfulURITemplateRegExp, (tmpl, param) =>
    params[param] ? params[param] : tmpl
  );
