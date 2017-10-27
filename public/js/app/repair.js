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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// 框架
var Repair = function (_React$Component) {
    _inherits(Repair, _React$Component);

    function Repair(props) {
        _classCallCheck(this, Repair);

        var _this = _possibleConstructorReturn(this, (Repair.__proto__ || Object.getPrototypeOf(Repair)).call(this, props));

        _this.handleClick = _this.handleClick.bind(_this);
        return _this;
    }

    _createClass(Repair, [{
        key: 'handleClick',
        value: function handleClick(e) {
            var $loadingToast = $('#loadingToast');
            if ($loadingToast.css('display') != 'none') return;

            $loadingToast.fadeIn(100);
            setTimeout(function () {
                $loadingToast.fadeOut(100);
            }, 1000);
        }
    }, {
        key: 'render',
        value: function render() {
            var style = { display: "none" };
            return React.createElement(
                'div',
                { className: 'repair_wrap' },
                React.createElement(
                    'div',
                    { className: 'repair_input_wrap' },
                    React.createElement('input', { type: 'text', placeholder: '\u8BF7\u8F93\u5165\u8BA2\u5355\u5355\u53F7', className: 'repair_input' }),
                    React.createElement(
                        'span',
                        { className: 'repair_input_button' },
                        '\u63D0 \u4EA4'
                    )
                ),
                React.createElement('hr', null),
                React.createElement(
                    'div',
                    { className: 'repair_infor_wrap' },
                    React.createElement(
                        'div',
                        { className: 'repair_infor_left repair_infor_style' },
                        React.createElement(Product, null)
                    ),
                    React.createElement(
                        'div',
                        { className: 'repair_infor_right repair_infor_style' },
                        React.createElement('textarea', { className: 'textarea_style', placeholder: '\u8BF7\u8F93\u5165\u8FD4\u4FEE\u8BF4\u660E\uFF1A' })
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'button_wrap' },
                    React.createElement(
                        'button',
                        { onClick: this.handleClick },
                        '\u63D0 \u4EA4'
                    )
                ),
                React.createElement(
                    'div',
                    { id: 'loadingToast', style: style },
                    React.createElement('div', { className: 'weui-mask_transparent' }),
                    React.createElement(
                        'div',
                        { className: 'weui-toast' },
                        React.createElement('i', { className: 'weui-loading weui-icon_toast' }),
                        React.createElement(
                            'p',
                            { className: 'weui-toast__content' },
                            '\u63D0\u4EA4\u6210\u529F'
                        )
                    )
                )
            );
        }
    }]);

    return Repair;
}(React.Component);

;

// 商品

var Product = function (_React$Component2) {
    _inherits(Product, _React$Component2);

    function Product(props) {
        _classCallCheck(this, Product);

        return _possibleConstructorReturn(this, (Product.__proto__ || Object.getPrototypeOf(Product)).call(this, props));
    }

    _createClass(Product, [{
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'left_wrap' },
                React.createElement(
                    'div',
                    { className: 'order_list_time' },
                    React.createElement(
                        'p',
                        null,
                        '\u4E0B\u5355\u65F6\u95F4\uFF1A',
                        React.createElement(
                            'span',
                            null,
                            '2017-10-25 14:11'
                        )
                    ),
                    React.createElement(
                        'p',
                        null,
                        '\u7B49\u5F85\u53D6\u8D27'
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'order_list_pruduct' },
                    React.createElement(
                        'div',
                        { className: 'product_img product_infor' },
                        React.createElement('img', { src: 'images/shangyi.jpg', className: 'product_img_infor' })
                    ),
                    React.createElement(
                        'div',
                        { className: 'product_infor' },
                        React.createElement(
                            'p',
                            null,
                            '\u5355\u53F7'
                        ),
                        React.createElement(
                            'p',
                            { className: '' },
                            '12345'
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'product_infor' },
                        React.createElement(
                            'p',
                            null,
                            '\u540D\u79F0'
                        ),
                        React.createElement(
                            'p',
                            null,
                            '\u6BDB\u8863'
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'product_infor' },
                        React.createElement(
                            'p',
                            null,
                            '\u552E\u4EF7'
                        ),
                        React.createElement(
                            'p',
                            null,
                            '\xA5288.00'
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'product_infor' },
                        React.createElement(
                            'p',
                            null,
                            '\u5DF2\u4ED8'
                        ),
                        React.createElement(
                            'p',
                            null,
                            '\xA5100.00'
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'product_infor' },
                        React.createElement(
                            'p',
                            null,
                            '\u672A\u4ED8'
                        ),
                        React.createElement(
                            'p',
                            { className: 'weifu_price' },
                            '\xA5188.00'
                        )
                    )
                )
            );
        }
    }]);

    return Product;
}(React.Component);

;

// 返回到页面
ReactDOM.render(React.createElement(Repair, null), document.getElementById("repair"));

/***/ })

/******/ });