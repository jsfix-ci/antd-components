"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormGrid = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _table = _interopRequireDefault(require("antd/lib/table"));

var _FormGridColumn = require("./FormGridColumn");

var _antd = require("antd");

var _ = require("../..");

var _renderer = require("../renderer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
      dataSource = props.dataSource,
      onAddRowClick = props.onAddRowClick,
      onDeleteRowClick = props.onDeleteRowClick,
      onEditRowClick = props.onEditRowClick,
      toolbar = props.toolbar,
      children = props.children,
      locale = props.locale,
      restProps = _objectWithoutProperties(props, ["idProperty", "dataSource", "onAddRowClick", "onDeleteRowClick", "onEditRowClick", "toolbar", "children", "locale"]);

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isEditing = _useState2[0],
      setEditing = _useState2[1];

  var _useState3 = (0, _react.useState)({}),
      _useState4 = _slicedToArray(_useState3, 2),
      record = _useState4[0],
      setRecord = _useState4[1];

  var _useState5 = (0, _react.useState)(dataSource),
      _useState6 = _slicedToArray(_useState5, 2),
      data = _useState6[0],
      setData = _useState6[1];

  var _useState7 = (0, _react.useState)([]),
      _useState8 = _slicedToArray(_useState7, 2),
      selected = _useState8[0],
      setSelected = _useState8[1];

  var _useState9 = (0, _react.useState)([]),
      _useState10 = _slicedToArray(_useState9, 2),
      selectedRowKeys = _useState10[0],
      setSelectedRowKeys = _useState10[1];

  (0, _react.useEffect)(function () {
    setData(dataSource);
  }, [dataSource]);

  var onRowSelection = function onRowSelection(selectedRowKeys, selectedRows) {
    setSelectedRowKeys(selectedRowKeys);
    setSelected(selectedRows);
  };

  var columns = _react["default"].Children.map(children, function (child) {
    return {
      title: child.props.title,
      dataIndex: child.props.dataIndex,
      config: child.props.config,
      onCell: function onCell(record) {
        return _objectSpread({
          record: record
        }, child.props);
      }
    };
  });

  var components = {
    body: {
      cell: _FormGridColumn.FormGridColumn
    }
  };

  var onAddClick = function onAddClick() {
    setRecord({});
    setEditing(true);
    onAddRowClick();
  };

  var onEditClick = function onEditClick() {
    if (selected.length === 1) {
      setEditing(true);
      setRecord(selected[0]);
      onEditRowClick(selected[0]);
    } else if (selected.length === 0) {
      _antd.message.error('You have to select one row at least');
    } else {
      _antd.message.error('You can edit only one row');
    }
  };

  var onDeleteClick = function onDeleteClick() {
    if (selected.length > 0) {
      onDeleteRowClick(selected);
      setSelectedRowKeys([]);
    } else {
      _antd.message.error('You have to select one row at least');
    }
  };

  var getToolbar = function getToolbar() {
    if (toolbar) {
      return function () {
        return _react["default"].createElement(_react.Fragment, null, _react["default"].createElement(_.AddButton, {
          onClick: onAddClick,
          locale: locale
        }), _react["default"].createElement(_.EditButton, {
          onClick: onEditClick,
          locale: locale
        }), _react["default"].createElement(_.DeleteButton, {
          onClick: onDeleteClick,
          locale: locale
        }));
      };
    }
  };

  if (isEditing) {
    var FormWrapper = _antd.Form.create({
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

      var onBackButtonClick = function onBackButtonClick() {
        setEditing(false);
      };

      var hasErrors = function hasErrors(fieldsError) {
        return Object.keys(fieldsError).some(function (field) {
          return fieldsError[field];
        });
      };

      var handleSubmit = function handleSubmit() {
        props.form.validateFields(function (error) {
          if (error) {
            return _antd.message.error('form validation failed');
          }
        });
      };

      return _react["default"].createElement(_react.Fragment, null, _react["default"].createElement(_.BackButton, {
        locale: locale,
        onClick: onBackButtonClick
      }), _react["default"].createElement(_antd.Form, {
        onSubmit: handleSubmit
      }, (0, _renderer.renderForm)(props, children), _react["default"].createElement(_.SaveButton, {
        locale: locale,
        disabled: hasErrors(getFieldsError()),
        htmlType: "submit"
      })));
    });

    return _react["default"].createElement(FormWrapper, record);
  }

  return _react["default"].createElement(_table["default"], _extends({
    rowKey: idProperty,
    title: getToolbar()
  }, restProps, {
    components: components,
    dataSource: data,
    columns: columns,
    rowSelection: {
      selectedRowKeys: selectedRowKeys,
      onChange: onRowSelection
    }
  }));
});

exports.FormGrid = FormGrid;
FormGrid.defaultProps = {
  idProperty: 'id',
  onRecordCreate: function onRecordCreate(record) {
    return record;
  }
};
FormGrid.propTypes = {
  idProperty: _propTypes["default"].string,
  onRecordCreate: _propTypes["default"].func,
  dataSource: _propTypes["default"].array,
  locale: _propTypes["default"].string
};