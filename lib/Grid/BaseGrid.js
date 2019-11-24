"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BaseGrid = exports.EditableContext = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _antd = require("antd");

var _nanoid = _interopRequireDefault(require("nanoid"));

var _ = require("..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var EditableContext = _react["default"].createContext();
/**
 * @return {React.Component}
 *
 * @constructor
 */


exports.EditableContext = EditableContext;

var BaseGrid = function BaseGrid(props) {
  var dataSource = props.dataSource,
      editForm = props.editForm,
      extraColumns = props.extraColumns,
      idProperty = props.idProperty,
      isEditing = props.isEditing,
      isLoading = props.isLoading,
      selectedRowKeys = props.selectedRowKeys,
      setEditing = props.setEditing,
      setLoading = props.setLoading,
      setSelectedRowKeys = props.setSelectedRowKeys,
      onAdd = props.onAdd,
      onDelete = props.onDelete,
      onEdit = props.onEdit,
      children = props.children,
      restProps = _objectWithoutProperties(props, ["dataSource", "editForm", "extraColumns", "idProperty", "isEditing", "isLoading", "selectedRowKeys", "setEditing", "setLoading", "setSelectedRowKeys", "onAdd", "onDelete", "onEdit", "children"]);

  var _useState = (0, _react.useState)(dataSource),
      _useState2 = _slicedToArray(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  (0, _react.useEffect)(function () {
    setData(dataSource);
  }, [dataSource]);
  (0, _react.useEffect)(function () {
    if (!isEditing) {
      setData(dataSource);
    }
  }, [isEditing]);

  var getRecord = function getRecord() {
    return data.find(function (record) {
      return record[idProperty] === selectedRowKeys[0];
    });
  };

  var onBackClick = function onBackClick() {
    setSelectedRowKeys([]);
    setEditing(false);
  };

  var renderEditForm = function renderEditForm() {
    return _react["default"].createElement(_antd.Spin, {
      spinning: isLoading
    }, _react["default"].createElement("div", {
      style: {
        padding: '16px 0'
      }
    }, _react["default"].createElement(_.BackButton, {
      onClick: onBackClick
    })), _react["default"].cloneElement(editForm, {
      record: getRecord()
    }));
  };

  if (isEditing && editForm) {
    return renderEditForm();
  }

  var columns = _react["default"].Children.map(children, function (child) {
    if (child.props.hideInGrid) return null;
    return {
      title: child.props.title,
      dataIndex: child.props.dataIndex,
      onCell: function onCell(record) {
        return _objectSpread({
          record: record,
          isEditing: isEditing && record[idProperty] === selectedRowKeys[0]
        }, child.props);
      }
    };
  });

  columns.push.apply(columns, _toConsumableArray(extraColumns));
  var components = {
    body: {
      cell: _.Column
    }
  };

  var onAddClick = function onAddClick() {
    var defaults = _defineProperty({}, idProperty, (0, _nanoid["default"])(10));

    var record = _objectSpread({}, defaults, {}, onAdd(defaults));

    var newData = [].concat(_toConsumableArray(data), [record]);
    setData(newData);
    setSelectedRowKeys([record[idProperty]]);
    setEditing(true);
  };

  var onEditClick = function onEditClick() {
    setEditing(true);
    onEdit(selectedRowKeys[0]);
  };

  var onDeleteClick = function onDeleteClick() {
    setLoading(true);
    onDelete(selectedRowKeys).then(function () {
      setSelectedRowKeys([]);
      setEditing(false);
      setLoading(false);
    })["catch"](function (err) {
      setLoading(false);

      _antd.message.error(err.toString());
    });
  };

  var getToolbar = function getToolbar() {
    return function () {
      return _react["default"].createElement(_react.Fragment, null, _react["default"].createElement(_.AddButton, {
        disabled: isEditing,
        onClick: onAddClick
      }), _react["default"].createElement(_.EditButton, {
        disabled: isEditing || selectedRowKeys.length !== 1,
        onClick: onEditClick
      }), _react["default"].createElement(_.DeleteButton, {
        disabled: selectedRowKeys.length === 0,
        onClick: onDeleteClick
      }));
    };
  };

  var getCheckboxProps = function getCheckboxProps(record) {
    return {
      disabled: isEditing && record[idProperty] !== selectedRowKeys[0]
    };
  };

  var onRowSelection = function onRowSelection(selectedKeys) {
    setSelectedRowKeys(selectedKeys);
    setEditing(false);
  };

  return _react["default"].createElement(_antd.Table, _extends({
    rowKey: idProperty,
    title: getToolbar(),
    components: components,
    dataSource: data,
    loading: isLoading,
    columns: columns,
    rowSelection: {
      selectedRowKeys: selectedRowKeys,
      getCheckboxProps: getCheckboxProps,
      onChange: onRowSelection
    }
  }, restProps));
};

exports.BaseGrid = BaseGrid;
BaseGrid.defaultProps = {
  children: [],
  idProperty: 'id',
  extraColumns: [],
  onAdd: function onAdd(record) {
    return record;
  },
  onEdit: _.emptyFn,
  onDelete: function onDelete() {
    return Promise.resolve();
  }
};
BaseGrid.propTypes = {
  children: _propTypes["default"].oneOfType([_propTypes["default"].arrayOf(_propTypes["default"].element), _propTypes["default"].element]),
  dataSource: _propTypes["default"].array,
  editForm: _propTypes["default"].element,
  extraColumns: _propTypes["default"].array,
  idProperty: _propTypes["default"].string,
  isEditing: _propTypes["default"].bool,
  isLoading: _propTypes["default"].bool,
  selectedRowKeys: _propTypes["default"].array,
  setEditing: _propTypes["default"].func,
  setLoading: _propTypes["default"].func,
  setSelectedRowKeys: _propTypes["default"].func,
  onAdd: _propTypes["default"].func,
  onDelete: _propTypes["default"].func,
  onEdit: _propTypes["default"].func
};