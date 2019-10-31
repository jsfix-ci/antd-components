"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormGrid = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _antd = require("antd");

var _ = require("../..");

var _renderer = require("../renderer");

var _BaseGrid = require("../BaseGrid");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * @return {React.Component}
 *
 * @constructor
 */
var FormGrid = _antd.Form.create()(function (props) {
  var idProperty = props.idProperty,
      onSave = props.onSave,
      children = props.children,
      restProps = _objectWithoutProperties(props, ["idProperty", "onSave", "children"]);

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isEditing = _useState2[0],
      setEditing = _useState2[1];

  var _useState3 = (0, _react.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      selectedRowKeys = _useState4[0],
      setSelectedRowKeys = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isLoading = _useState6[0],
      setLoading = _useState6[1];

  var EditForm = _antd.Form.create({
    mapPropsToFields: function mapPropsToFields(props) {
      var data = {};
      Object.keys(props).forEach(function (field) {
        data[field] = _antd.Form.createFormField({
          value: props[field]
        });
      });
      return data;
    }
  })(function (props) {
    var getFieldsError = props.form.getFieldsError;

    var hasErrors = function hasErrors(fieldsError) {
      return Object.keys(fieldsError).some(function (field) {
        return fieldsError[field];
      });
    };

    var handleSubmit = function handleSubmit(e) {
      e.preventDefault();
      props.form.validateFields(function (error, record) {
        if (error) {
          return _antd.message.error('form validation failed');
        }

        record[idProperty] = props[idProperty];
        setLoading(true);
        onSave(record).then(function () {
          setSelectedRowKeys([]);
          setLoading(false);
          setEditing(false);
        })["catch"](function (err) {
          setLoading(false);

          _antd.message.error(err.toString());
        });
      });
    };

    return _react["default"].createElement(_antd.Form, {
      onSubmit: handleSubmit
    }, (0, _renderer.renderForm)(props, children), _react["default"].createElement(_.SaveButton, {
      disabled: hasErrors(getFieldsError()),
      htmlType: "submit"
    }));
  });

  return _react["default"].createElement(_BaseGrid.BaseGrid, _extends({
    rowKey: idProperty,
    editForm: _react["default"].createElement(EditForm, null),
    isEditing: isEditing,
    setEditing: setEditing,
    selectedRowKeys: selectedRowKeys,
    setSelectedRowKeys: setSelectedRowKeys,
    isLoading: isLoading,
    setLoading: setLoading
  }, restProps), children);
});

exports.FormGrid = FormGrid;
FormGrid.defaultProps = {
  dataSource: [],
  idProperty: 'id',
  onAdd: _.emptyFn,
  onDelete: _.emptyFn,
  onEdit: _.emptyFn,
  onSave: _.emptyFn
};
FormGrid.propTypes = {
  dataSource: _propTypes["default"].array,
  idProperty: _propTypes["default"].string,
  onAdd: _propTypes["default"].func,
  onDelete: _propTypes["default"].func,
  onEdit: _propTypes["default"].func,
  onSave: _propTypes["default"].func
};