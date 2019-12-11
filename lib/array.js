"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PureArray = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var insert = function insert(array, item, index) {
  if (index !== undefined && index != null && index !== -1) {
    return [].concat(_toConsumableArray(array.slice(0, index + 1)), [item], _toConsumableArray(array.slice(index + 1)));
  }

  return [].concat(_toConsumableArray(array), [item]);
};

var remove = function remove(array, predicate) {
  return _toConsumableArray(array.filter(function (rec) {
    return rec[predicate[0]] !== predicate[1];
  }));
};

var update = function update(array, predicate, item) {
  return array.map(function (rec) {
    return rec[predicate[0]] === predicate[1] ? item : rec;
  });
};

var PureArray = {
  insert: insert,
  remove: remove,
  update: update
};
exports.PureArray = PureArray;