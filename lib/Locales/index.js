"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.l10n = void 0;

var _react = require("react");

var _ = require("..");

var l10n = function l10n() {
  return (0, _react.useContext)(_.LocaleContext).l10n;
};

exports.l10n = l10n;