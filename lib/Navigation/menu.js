"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderMenu = exports.renderMenuItem = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _antd = require("antd");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var renderLabel = function renderLabel(label, icon) {
  return _react["default"].createElement(_react.Fragment, null, icon ? _react["default"].createElement(_antd.Icon, {
    type: icon
  }) : null, label);
};

var renderMenuItem = function renderMenuItem(_ref) {
  var key = _ref.key,
      label = _ref.label,
      path = _ref.path,
      icon = _ref.icon;
  return _react["default"].createElement(_antd.Menu.Item, {
    key: key
  }, _react["default"].createElement(_reactRouterDom.NavLink, {
    to: path
  }, renderLabel(label, icon)));
};

exports.renderMenuItem = renderMenuItem;

var renderMenu = function renderMenu(routes) {
  return routes.map(function (route) {
    var key = route.key,
        label = route.label,
        path = route.path,
        icon = route.icon,
        hideInMenu = route.hideInMenu,
        submenu = route.submenu,
        group = route.group;
    if (hideInMenu) return null;

    if (group) {
      return _react["default"].createElement(_antd.Menu.ItemGroup, {
        key: key,
        title: label
      }, renderMenu(group));
    }

    if (submenu) {
      return _react["default"].createElement(_antd.Menu.SubMenu, {
        key: key,
        title: renderLabel(label, icon)
      }, renderMenu(submenu));
    }

    return renderMenuItem({
      key: key,
      label: label,
      path: path,
      icon: icon
    });
  });
};

exports.renderMenu = renderMenu;