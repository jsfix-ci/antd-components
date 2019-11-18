"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MotionDrawer = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactMotionDrawer = _interopRequireDefault(require("react-motion-drawer"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _helper = require("../helper");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var MotionDrawer = function MotionDrawer(props) {
  var drawerStyle = props.drawerStyle,
      position = props.position,
      open = props.open,
      onChange = props.onChange,
      width = props.width,
      children = props.children;
  return _react["default"].createElement(_reactMotionDrawer["default"], {
    className: 'motion-drawer',
    onChange: onChange,
    open: open,
    width: width,
    right: position === 'right',
    drawerStyle: drawerStyle
  }, children);
};

exports.MotionDrawer = MotionDrawer;
MotionDrawer.defaultProps = {
  width: 400,
  onChange: _helper.emptyFn,
  open: false,
  position: 'left',
  drawerStyle: {
    backgroundColor: '#fff'
  }
};
MotionDrawer.propTypes = {
  width: _propTypes["default"].number,
  onChange: _propTypes["default"].func,
  open: _propTypes["default"].bool,
  position: _propTypes["default"].string,
  drawerStyle: _propTypes["default"].object
};