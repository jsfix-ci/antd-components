"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.truncateText = exports.emptyFn = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var emptyFn = function emptyFn() {};

exports.emptyFn = emptyFn;

var truncateText = function truncateText(text, maxLength) {
  if (text.length > maxLength) {
    var index = maxLength;

    while (text.charAt(index) !== ' ') {
      index--;
    }

    return text.substring(0, index) + ' ...';
  }

  return text;
};

exports.truncateText = truncateText;