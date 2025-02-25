"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectButtonItem = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SelectButtonItem = /*#__PURE__*/function (_Component) {
  _inherits(SelectButtonItem, _Component);

  var _super = _createSuper(SelectButtonItem);

  function SelectButtonItem(props) {
    var _this;

    _classCallCheck(this, SelectButtonItem);

    _this = _super.call(this, props);
    _this.state = {};
    _this.onClick = _this.onClick.bind(_assertThisInitialized(_this));
    _this.onFocus = _this.onFocus.bind(_assertThisInitialized(_this));
    _this.onBlur = _this.onBlur.bind(_assertThisInitialized(_this));
    _this.onKeyDown = _this.onKeyDown.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(SelectButtonItem, [{
    key: "onClick",
    value: function onClick(event) {
      if (this.props.onClick) {
        this.props.onClick({
          originalEvent: event,
          option: this.props.option
        });
        this.input.focus();
      }
    }
  }, {
    key: "onFocus",
    value: function onFocus() {
      this.setState({
        focused: true
      });
    }
  }, {
    key: "onBlur",
    value: function onBlur() {
      this.setState({
        focused: false
      });
    }
  }, {
    key: "onKeyDown",
    value: function onKeyDown(event) {
      if (event.key === 'Enter') {
        this.onClick(event);
        event.preventDefault();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.input.checked = this.props.selected;
    }
  }, {
    key: "renderContent",
    value: function renderContent() {
      if (this.props.template) {
        return this.props.template(this.props.option);
      } else {
        return /*#__PURE__*/_react.default.createElement("span", {
          className: "p-button-text p-c"
        }, this.props.label);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var className = (0, _classnames.default)(this.props.option.className, 'p-button p-component p-button-text-only', this.props.className, {
        'p-highlight': this.props.selected,
        'p-disabled': this.props.disabled,
        'p-focus': this.state.focused
      });
      var content = this.renderContent();
      return /*#__PURE__*/_react.default.createElement("div", {
        ref: function ref(el) {
          return _this2.el = el;
        },
        className: className,
        onClick: this.onClick,
        role: "button",
        "aria-pressed": this.props.selected,
        "aria-labelledby": this.props.ariaLabelledBy
      }, content, /*#__PURE__*/_react.default.createElement("div", {
        className: "p-hidden-accessible"
      }, /*#__PURE__*/_react.default.createElement("input", {
        ref: function ref(el) {
          return _this2.input = el;
        },
        type: "checkbox",
        defaultChecked: this.props.selected,
        onFocus: this.onFocus,
        onBlur: this.onBlur,
        onKeyDown: this.onKeyDown,
        tabIndex: this.props.tabIndex,
        disabled: this.props.disabled,
        value: this.props.label
      })));
    }
  }]);

  return SelectButtonItem;
}(_react.Component);

exports.SelectButtonItem = SelectButtonItem;

_defineProperty(SelectButtonItem, "defaultProps", {
  option: null,
  label: null,
  className: null,
  selected: null,
  tabIndex: null,
  ariaLabelledBy: null,
  template: null,
  onClick: null
});

_defineProperty(SelectButtonItem, "propTypes", {
  option: _propTypes.default.object,
  label: _propTypes.default.string,
  className: _propTypes.default.string,
  selected: _propTypes.default.bool,
  tabIndex: _propTypes.default.number,
  ariaLabelledBy: _propTypes.default.string,
  template: _propTypes.default.func,
  onClick: _propTypes.default.func
});