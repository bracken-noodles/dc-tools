"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.arr2tree = exports.array2tree = exports.data2ids = exports.data2flat = exports.flatten = void 0;

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var flatten = function flatten(list) {
  return list.reduce(function (a, b) {
    return a.concat(Array.isArray(b) ? flatten(b) : b);
  }, []);
};

exports.flatten = flatten;

var data2flat = function data2flat() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var key = arguments.length > 1 ? arguments[1] : undefined;
  var flat = {};
  data.forEach(function (item) {
    flat[item[key]] = item;
  });
  return flat;
};

exports.data2flat = data2flat;

var data2ids = function data2ids() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var key = arguments.length > 1 ? arguments[1] : undefined;
  return data.map(function (item) {
    return item[key];
  });
};

exports.data2ids = data2ids;

var array2tree = function array2tree(primaryKey) {
  return function (id) {
    return function (dataList) {
      var flatObj = {};
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = dataList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var item = _step.value;
          flatObj[item[primaryKey]] = item;
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      var findCurrentChildren = function findCurrentChildren(id) {
        var tmpList = dataList.filter(function (item) {
          return item.parentId === id;
        });

        var currentObj = _objectSpread({}, flatObj[id]);

        if (tmpList.length) {
          currentObj.children = tmpList.map(function (item) {
            return findCurrentChildren(item[primaryKey]);
          });
        }

        return currentObj;
      };

      return findCurrentChildren(id);
    };
  };
};
/**
 *
 * @param {Array} arr flated data
 * @param {String} rootField primary field, has unique value
 * @param {*} entry  primary value
 * @param {String} parentField  parent field, accroding to this field find items' parent
 * @param  {Object} mapping  mapping
 */


exports.array2tree = array2tree;

var arr2tree = function arr2tree(arr) {
  var rootField = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "id";
  var entry = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var parentField = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "parentId";
  var mapping = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};

  var map2custom = function map2custom(item) {
    return Object.keys(item).reduce(function (acc, field) {
      var sourceField = Object.entries(mapping).find(function (item) {
        return item[0] === field;
      });

      if (sourceField) {
        acc[sourceField[1]] = item[field];
      }

      acc[field] = item[field];
      return acc;
    }, {});
  };

  var entryArray;
  var aim = arr.find(function (item) {
    return item[rootField] === entry;
  });

  if (aim) {
    entryArray = [map2custom(aim)];
  } else {
    aim = arr.filter(function (item) {
      return item[parentField] === entry;
    });
    entryArray = aim.map(function (item) {
      return map2custom(item);
    });
  }

  var findChilds = function findChilds(parentVal) {
    return arr.filter(function (item) {
      return item[parentField] === parentVal;
    });
  };

  var init = function init(arrs) {
    return arrs.map(function (item) {
      var children = findChilds(item[rootField]);
      return !!children.length ? _objectSpread({}, map2custom(item), {
        children: init(children)
      }) : map2custom(item);
    });
  };

  return init(entryArray);
};

exports.arr2tree = arr2tree;