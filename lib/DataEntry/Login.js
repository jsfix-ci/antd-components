"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Login = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = require("..");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _helper = require("../helper");

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * @return {React.Component}
 *
 * @constructor
 */
var Login = function Login(props) {
  var onSubmit = props.onSubmit,
      showRememberMe = props.showRememberMe,
      showForgotPassword = props.showForgotPassword,
      forgotPasswordUrl = props.forgotPasswordUrl;
  return _react["default"].createElement(_.Form, {
    onSubmit: onSubmit
  }, _react["default"].createElement(_.FormItem, {
    fieldType: 'string',
    label: (0, _.useL10n)().Login.username,
    dataIndex: 'username',
    required: true
  }), _react["default"].createElement(_.FormItem, {
    fieldType: 'password',
    label: (0, _.useL10n)().Login.password,
    dataIndex: 'password',
    required: true
  }), showRememberMe ? _react["default"].createElement(_.FormItem, {
    fieldType: 'checkbox',
    fieldProps: {
      title: (0, _.useL10n)().Login.rememberMe
    },
    dataIndex: 'rememberMe'
  }) : null, showForgotPassword ? _react["default"].createElement(_reactRouterDom.Link, {
    to: forgotPasswordUrl
  }, "Forgot Password") : null, _react["default"].createElement("div", null, _react["default"].createElement(_.Button, {
    style: {
      clear: 'both',
      marginTop: 15
    },
    htmlType: "submit"
  }, (0, _.useL10n)().Login.loginText)));
};

exports.Login = Login;
Login.defaultProps = {
  onSubmit: _helper.emptyFn,
  showRememberMe: false,
  showForgotPassword: false,
  forgotPasswordUrl: '/forgot-password'
};
Login.propTypes = {
  onSubmit: _propTypes["default"].func,
  showRememberMe: _propTypes["default"].bool,
  showForgotPassword: _propTypes["default"].bool,
  forgotPasswordUrl: _propTypes["default"].string
};