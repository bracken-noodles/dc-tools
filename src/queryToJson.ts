export default (search: string): object =>
  search.length < 1
    ? {}
    : JSON.parse(
        `{"${search
          .substring(1)
          .replace(/=/g, '":"')
          .replace(/&/g, '","')}"}`
      );
