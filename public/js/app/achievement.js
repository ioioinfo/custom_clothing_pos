/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// 框架
var Achievement = function (_React$Component) {
    _inherits(Achievement, _React$Component);

    function Achievement(props) {
        _classCallCheck(this, Achievement);

        var _this = _possibleConstructorReturn(this, (Achievement.__proto__ || Object.getPrototypeOf(Achievement)).call(this, props));

        _this.state = { tabthitems: [], tabtritems: [] };
        return _this;
    }

    _createClass(Achievement, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            getTableData(function (data) {
                this.setState(data);
            }.bind(this));
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "pos_wrap" },
                React.createElement(Table, { tabthitems: this.state.tabthitems, tabtritems: this.state.tabtritems })
            );
        }
    }]);

    return Achievement;
}(React.Component);

;
// 表格

var Table = function (_React$Component2) {
    _inherits(Table, _React$Component2);

    function Table(props) {
        _classCallCheck(this, Table);

        var _this2 = _possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).call(this, props));

        _this2.state = { tabtritems: _this2.props.tabtritems };
        return _this2;
    }

    _createClass(Table, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            var height = $(window).height() - 114;
            console.log(height);
            $("#tableAuto").css({ "height": height, "overflow": "auto" });
        }
    }, {
        key: "render",
        value: function render() {
            var _this3 = this;

            return React.createElement(
                "div",
                { className: "container-fluid" },
                React.createElement(
                    "div",
                    { className: "row-fluid" },
                    React.createElement(
                        "div",
                        { className: "span12" },
                        React.createElement(
                            "div",
                            { className: "widget-box" },
                            React.createElement(
                                "div",
                                { className: "widget-title overflow_hidden" },
                                React.createElement(
                                    "span",
                                    { className: "icon" },
                                    React.createElement("i", { className: "icon-th" })
                                ),
                                React.createElement(
                                    "h5",
                                    null,
                                    "\u4E1A\u7EE9\u5217\u8868"
                                )
                            ),
                            React.createElement(
                                "div",
                                { className: "widget-content nopadding", id: "tableAuto" },
                                React.createElement(
                                    "table",
                                    { className: "table table-bordered table-striped table-hover" },
                                    React.createElement(
                                        "thead",
                                        null,
                                        React.createElement(
                                            "tr",
                                            null,
                                            this.props.tabthitems.map(function (item, index) {
                                                return React.createElement(Th, { key: index, item: item, sort: _this3.props.sort, onSort: _this3.props.onSort });
                                            })
                                        )
                                    ),
                                    React.createElement(
                                        "tbody",
                                        null,
                                        this.props.tabtritems.map(function (item, index) {
                                            return React.createElement(Tr, { key: index, item: item, tabthitems: _this3.props.tabthitems });
                                        })
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Table;
}(React.Component);

;

var Tr = function (_React$Component3) {
    _inherits(Tr, _React$Component3);

    function Tr() {
        _classCallCheck(this, Tr);

        return _possibleConstructorReturn(this, (Tr.__proto__ || Object.getPrototypeOf(Tr)).apply(this, arguments));
    }

    _createClass(Tr, [{
        key: "render",
        value: function render() {
            var _this5 = this;

            return React.createElement(
                "tr",
                null,
                this.props.tabthitems.map(function (item, index) {
                    return React.createElement(Td, { key: index, item: _this5.props.item, thitem: item });
                })
            );
        }
    }]);

    return Tr;
}(React.Component);

;

var Th = function (_React$Component4) {
    _inherits(Th, _React$Component4);

    function Th() {
        _classCallCheck(this, Th);

        return _possibleConstructorReturn(this, (Th.__proto__ || Object.getPrototypeOf(Th)).apply(this, arguments));
    }

    _createClass(Th, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "th",
                null,
                this.props.item.title
            );
        }
    }]);

    return Th;
}(React.Component);

;

var Td = function (_React$Component5) {
    _inherits(Td, _React$Component5);

    function Td() {
        _classCallCheck(this, Td);

        return _possibleConstructorReturn(this, (Td.__proto__ || Object.getPrototypeOf(Td)).apply(this, arguments));
    }

    _createClass(Td, [{
        key: "render",
        value: function render() {
            if (this.props.thitem.type == "operation") {

                return React.createElement(
                    "td",
                    null,
                    React.createElement(
                        "button",
                        { type: "button", className: "btn btn-primary btn-mini" },
                        React.createElement(
                            "a",
                            { href: "admin_order_product_detail?product_id=" + this.props.item.id },
                            "\u67E5\u770B"
                        )
                    ),
                    "\xA0",
                    React.createElement(
                        "button",
                        { type: "button", className: "btn btn-info btn-mini" },
                        React.createElement(
                            "a",
                            { href: "admin_product_img?product_id=" + this.props.item.id },
                            "\u56FE\u7247"
                        )
                    )
                );
            } else {
                return React.createElement(
                    "td",
                    null,
                    this.props.item[this.props.thitem.name]
                );
            }
        }
    }]);

    return Td;
}(React.Component);

;
// 返回到页面
ReactDOM.render(React.createElement(Achievement, null), document.getElementById("achievement"));

/***/ })

/******/ });