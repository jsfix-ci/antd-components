"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getActiveRoutes = void 0;

var _reactRouter = require("react-router");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var getActiveRoutes = function getActiveRoutes(routes, location) {
  var activeRoutes = [];
  routes.forEach(function (route) {
    var match = (0, _reactRouter.matchPath)(location.pathname, {
      path: route.path,
      exact: route.exact || false,
      strict: route.strict || false
    });

    if (match) {
      activeRoutes.push(route.key);
    }

    var subitem = route.submenu || route.group;

    if (subitem) {
      activeRoutes = [].concat(_toConsumableArray(activeRoutes), _toConsumableArray(getActiveRoutes(subitem, location)));
    }
  });
  return activeRoutes;
};

exports.getActiveRoutes = getActiveRoutes;