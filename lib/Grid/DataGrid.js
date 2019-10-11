"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DataGrid = exports.EditableContext = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _table = _interopRequireDefault(require("antd/lib/table"));

var _form = _interopRequireDefault(require("antd/lib/form"));

var _popconfirm = _interopRequireDefault(require("antd/lib/popconfirm"));

var _icon = _interopRequireDefault(require("antd/lib/icon"));

var _tooltip = _interopRequireDefault(require("antd/lib/tooltip"));

var _Column = require("./Column");

var _button = _interopRequireDefault(require("antd/lib/button"));

var _antd = require("antd");

var _nanoid = _interopRequireDefault(require("nanoid"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    cursor: pointer;\n    font-size: 20px;\n    margin: 0 10px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var EditableContext = _react["default"].createContext();

exports.EditableContext = EditableContext;
var ClickableIcon = (0, _styledComponents["default"])(_icon["default"])(_templateObject());
/**
 * @return {React.Component}
 *
 * @constructor
 */

var DataGrid = _form["default"].create()(function (props) {
  var idProperty = props.idProperty,
      dataSource = props.dataSource,
      onSave = props.onSave,
      onDelete = props.onDelete,
      onRecordCreate = props.onRecordCreate,
      form = props.form,
      children = props.children,
      restProps = _objectWithoutProperties(props, ["idProperty", "dataSource", "onSave", "onDelete", "onRecordCreate", "form", "children"]);

  var _useState = (0, _react.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      editingKey = _useState2[0],
      setEditingKey = _useState2[1];

  var _useState3 = (0, _react.useState)(dataSource),
      _useState4 = _slicedToArray(_useState3, 2),
      data = _useState4[0],
      setData = _useState4[1];

  (0, _react.useEffect)(function () {
    setData(dataSource);
  }, [dataSource]);

  var isEditing = function isEditing(record) {
    return record[idProperty] === editingKey;
  };

  var onCancelClick = function onCancelClick() {
    setEditingKey('');
  };

  var onEditClick = function onEditClick(key) {
    setEditingKey(key);
  };

  var onSaveClick = function onSaveClick(form, key) {
    form.validateFields(function (error, row) {
      if (error) {
        return;
      }

      var newData = _toConsumableArray(data);

      var index = newData.findIndex(function (item) {
        return key === item[idProperty];
      });

      if (index > -1) {
        var item = newData[index];
        newData.splice(index, 1, _objectSpread({}, item, {}, row));
        saveData(newData);
        setEditingKey('');
      } else {
        newData.push(row);
        saveData(newData);
        setEditingKey('');
      }
    });
  };

  var onAddRowClick = function onAddRowClick() {
    var record = onRecordCreate(_defineProperty({}, idProperty, (0, _nanoid["default"])(10)));
    var newData = [].concat(_toConsumableArray(data), [record]);
    saveData(newData);
  };

  var onDeleteRowClick = function onDeleteRowClick(id) {
    var index = data.findIndex(function (item) {
      return id === item[idProperty];
    });
    var newData = [].concat(_toConsumableArray(data.slice(0, index)), _toConsumableArray(data.slice(index + 1)));
    deleteData(id, newData);
    setEditingKey('');
  };

  var saveData = function saveData(newData) {
    onSave(newData).then(function () {
      setData(newData);

      _antd.message.info('Record saved');
    })["catch"](function (err) {
      _antd.message.error(err.toString());
    });
  };

  var deleteData = function deleteData(id, newData) {
    onDelete(id, newData).then(function () {
      setData(newData);

      _antd.message.info('Record deleted');
    })["catch"](function (err) {
      _antd.message.error(err.toString());
    });
  };

  var actionRenderer = function actionRenderer(text, record) {
    var id = record[idProperty];

    if (isEditing(record)) {
      return _react["default"].createElement("span", null, _react["default"].createElement(EditableContext.Consumer, null, function (form) {
        return _react["default"].createElement(_tooltip["default"], {
          title: "Save"
        }, _react["default"].createElement(ClickableIcon, {
          type: "save",
          onClick: function onClick() {
            return onSaveClick(form, id);
          }
        }));
      }), _react["default"].createElement(_popconfirm["default"], {
        title: "Cancel edit?",
        onConfirm: function onConfirm() {
          return onCancelClick(id);
        }
      }, _react["default"].createElement(ClickableIcon, {
        type: "stop"
      })));
    }

    return _react["default"].createElement(_react.Fragment, null, _react["default"].createElement(_tooltip["default"], {
      title: "Edit record"
    }, _react["default"].createElement(ClickableIcon, {
      hidden: editingKey !== '',
      type: "edit",
      onClick: function onClick() {
        return onEditClick(id);
      }
    })), _react["default"].createElement(_popconfirm["default"], {
      title: "Delete record?",
      onConfirm: function onConfirm() {
        return onDeleteRowClick(id);
      }
    }, _react["default"].createElement(ClickableIcon, {
      hidden: editingKey !== '',
      type: "delete"
    })));
  };

  var columns = _react["default"].Children.map(children, function (child) {
    return {
      title: child.props.title,
      dataIndex: child.props.dataIndex,
      onCell: function onCell(record) {
        return _objectSpread({
          record: record,
          editing: isEditing(record)
        }, child.props);
      }
    };
  });

  columns.push({
    dataIndex: 'operation',
    className: 'min-td',
    render: actionRenderer
  });
  var components = {
    body: {
      cell: _Column.Column
    }
  };
  return _react["default"].createElement(_react.Fragment, null, _react["default"].createElement(EditableContext.Provider, {
    value: form
  }, _react["default"].createElement(_table["default"], _extends({
    rowKey: idProperty,
    title: function title() {
      return _react["default"].createElement(_tooltip["default"], {
        title: "Add new record"
      }, _react["default"].createElement(_button["default"], {
        onClick: onAddRowClick,
        type: "primary",
        shape: "circle",
        icon: "plus"
      }));
    }
  }, restProps, {
    components: components,
    dataSource: data,
    columns: columns
  }))));
});

exports.DataGrid = DataGrid;
DataGrid.defaultProps = {
  idProperty: 'id',
  onRecordCreate: function onRecordCreate(record) {
    return record;
  },
  onSave: function onSave() {
    return Promise.resolve();
  },
  onDelete: function onDelete() {
    return Promise.resolve();
  }
};
DataGrid.propTypes = {
  idProperty: _propTypes["default"].string,
  onRecordCreate: _propTypes["default"].func,
  onSave: _propTypes["default"].func,
  onDelete: _propTypes["default"].func,
  dataSource: _propTypes["default"].array
};