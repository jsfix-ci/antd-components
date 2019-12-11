"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllSubmenuRoutes = exports.getActiveRoutes = exports.renderRoutes = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouter = require("react-router");

var _reactRouterDom = require("react-router-dom");

var _NotFound = require("./NotFound");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var buildRoutes = function buildRoutes(routes) {
  var parentPath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return routes.map(function (route) {
    var key = route.key,
        submenu = route.submenu,
        path = route.path;
    var currentPath = parentPath + path;

    if (submenu) {
      return buildRoutes(submenu, currentPath);
    }

    return _react["default"].createElement(_reactRouter.Route, _extends({
      key: key
    }, route, {
      path: currentPath
    }));
  });
};

var renderRoutes = function renderRoutes(routes, config) {
  var defaults = _objectSpread({
    notFound: true
  }, config);

  if (defaults.notFound) {
    routes.push({
      key: 'notfound',
      path: '*',
      exact: true,
      component: _NotFound.NotFound,
      hideInMenu: true
    });
  }

  return _react["default"].createElement(_reactRouterDom.Switch, null, buildRoutes(routes));
};

exports.renderRoutes = renderRoutes;

var getActiveRoutes = function getActiveRoutes(routes, location) {
  var parentPath = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var activeRoutes = [];
  routes.forEach(function (route) {
    var currentPath = parentPath + route.path;
    var match = (0, _reactRouter.matchPath)(location.pathname, {
      path: currentPath,
      exact: route.exact || false,
      strict: route.strict || false
    });

    if (match) {
      activeRoutes.push(route.key);
    }

    var subitem = route.submenu || route.group;

    if (subitem) {
      activeRoutes = [].concat(_toConsumableArray(activeRoutes), _toConsumableArray(getActiveRoutes(subitem, location, route.group ? parentPath : currentPath)));
    }
  });
  return activeRoutes;
};

exports.getActiveRoutes = getActiveRoutes;

var getAllSubmenuRoutes = function getAllSubmenuRoutes(routes) {
  var activeRoutes = [];
  routes.forEach(function (route) {
    var subitem = route.submenu || route.group;

    if (subitem) {
      if (route.submenu) {
        activeRoutes.push(route.key);
      }

      activeRoutes = [].concat(_toConsumableArray(activeRoutes), _toConsumableArray(getAllSubmenuRoutes(subitem)));
    }
  });
  return activeRoutes;
};

exports.getAllSubmenuRoutes = getAllSubmenuRoutes;