"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  sumBreakPoints: true
};
exports.sumBreakPoints = void 0;

var _Header = require("./Header");

Object.keys(_Header).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Header[key];
    }
  });
});

var _Logo = require("./Logo");

Object.keys(_Logo).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Logo[key];
    }
  });
});

var sumBreakPoints = function sumBreakPoints(obj1, obj2) {
  return Object.keys(obj1).reduce(function (acc, key) {
    if (obj2.hasOwnProperty(key)) {
      acc[key] = obj1[key] + obj2[key];
    }

    return acc;
  }, {});
};

exports.sumBreakPoints = sumBreakPoints;