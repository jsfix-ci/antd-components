"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Header = require("./Header");

Object.keys(_Header).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
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
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Logo[key];
    }
  });
});