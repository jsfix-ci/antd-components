"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Buttons = require("./Buttons");

Object.keys(_Buttons).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Buttons[key];
    }
  });
});