"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = _interopRequireDefault(require("react"));

require("./styles.css");

var _Button = require("./Button");

Object.keys(_Button).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Button[key];
    }
  });
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }