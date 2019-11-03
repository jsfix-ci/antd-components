"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _useL10n = require("./useL10n");

Object.keys(_useL10n).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _useL10n[key];
    }
  });
});

var _LocaleContext = require("./LocaleContext");

Object.keys(_LocaleContext).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _LocaleContext[key];
    }
  });
});