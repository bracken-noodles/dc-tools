export const flatten = (list: any[]) =>
  list.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []);

export const data2flat = (data: any[] = [], key: string) => {
  const flat = {};
  data.forEach(item => {
    flat[item[key]] = item;
  });
  return flat;
};

export const data2ids = (data: any[] = [], key: string) =>
  data.map(item => item[key]);

export const array2tree = primaryKey => id => dataList => {
  const flatObj = {};
  for (let item of dataList) {
    flatObj[item[primaryKey]] = item;
  }
  const findCurrentChildren = id => {
    const tmpList = dataList.filter(item => item.parentId === id);
    let currentObj = { ...flatObj[id] };
    if (tmpList.length) {
      currentObj.children = tmpList.map(item =>
        findCurrentChildren(item[primaryKey])
      );
    }
    return currentObj;
  };
  return findCurrentChildren(id);
};

/**
 *
 * @param {Array} arr flated data
 * @param {String} rootField primary field, has unique value
 * @param {*} entry  primary value
 * @param {String} parentField  parent field, accroding to this field find items' parent
 * @param  {Object} mapping  mapping
 */
export const arr2tree = (
  arr,
  rootField = "id",
  entry = 0,
  parentField = "parentId",
  mapping = {}
) => {
  const map2custom = item =>
    Object.keys(item).reduce((acc, field) => {
      const sourceField = Object.entries(mapping).find(
        item => item[0] === field
      );
      if (sourceField) {
        acc[sourceField[1]] = item[field];
      }
      acc[field] = item[field];
      return acc;
    }, {});
  let entryArray;
  let aim = arr.find(item => item[rootField] === entry);
  if (aim) {
    entryArray = [map2custom(aim)];
  } else {
    aim = arr.filter(item => item[parentField] === entry);
    entryArray = aim.map(item => map2custom(item));
  }
  const findChilds = parentVal =>
    arr.filter(item => item[parentField] === parentVal);

  const init = arrs =>
    arrs.map(item => {
      const children = findChilds(item[rootField]);
      return !!children.length
        ? { ...map2custom(item), children: init(children) }
        : map2custom(item);
    });

  return init(entryArray);
};
