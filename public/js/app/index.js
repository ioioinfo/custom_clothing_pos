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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// 框架
var Pos = function (_React$Component) {
    _inherits(Pos, _React$Component);

    function Pos(props) {
        _classCallCheck(this, Pos);

        var _this = _possibleConstructorReturn(this, (Pos.__proto__ || Object.getPrototypeOf(Pos)).call(this, props));

        _this.handleClick = _this.handleClick.bind(_this);
        _this.state = { items: [], items1: [], items2: [], items3: [] };
        return _this;
    }

    _createClass(Pos, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            var list = [{ title: "身高", key: "1" }, { title: "体重", key: "2" }, { title: "试样尺码", key: "3" }, { title: "肩宽", key: "4" }, { title: "衣长", key: "5" }, { title: "袖长", key: "6" }, { title: "胸围", key: "7" }, { title: "袖状", key: "8" }, { title: "中腰", key: "9" }, { title: "袖口", key: "10" }, { title: "腹围", key: "11" }, { title: "前胸", key: "12" }, { title: "臀围", key: "13" }, { title: "后背", key: "14" }, { title: "BP点", key: "15" }, { title: "前腹高", key: "16" }, { title: "胸距", key: "17" }, { title: "后臀高", key: "18" }, { title: "前腰节", key: "19" }, { title: "袖笼长", key: "20" }, { title: "后腰节", key: "21" }];
            var list1 = [{ title: "挺胸" }, { title: "冲肩" }, { title: "胸大" }, { title: "溜肩" }, { title: "驼背" }, { title: "平肩" }, { title: "背圆" }, { title: "圆体" }, { title: "胃大" }, { title: "扁体" }, { title: "肚子大" }, { title: "凹背" }, { title: "高臀" }, { title: "凹腰" }];
            var list2 = [{ title: "裤长", key: "1" }, { title: "臀高", key: "2" }, { title: "裙长", key: "3" }, { title: "腹高", key: "4" }, { title: "腰围", key: "5" }, { title: "横档", key: "6" }, { title: "腹围", key: "7" }, { title: "立档", key: "8" }, { title: "臀围", key: "9" }, { title: "脚口", key: "10" }];
            var list3 = [{ title: "量体师", key: "1" }, { title: "版型师", key: "2" }, { title: "裁剪师", key: "3" }, { title: "缝纫工", key: "4" }, { title: "手工", key: "5" }, { title: "质检", key: "6" }];
            this.setState({ items: list, items1: list1, items2: list2, items3: list3 });
            $(".check_order").css("z-index", "-99");
            var width = $(".clothing_kuanhao_number").width();
            $(".clothing_kuanhao_input").css("text-indent", width);
        }
    }, {
        key: "handleClick",
        value: function handleClick(e) {
            $(".backgroundOpacitv").hide();
            $(".check_order").css("z-index", "-99");
            $(".pay_wrap").hide();
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "pos_wrap" },
                React.createElement(
                    "div",
                    { className: "pos_left" },
                    React.createElement(Left, null)
                ),
                React.createElement(
                    "div",
                    { className: "pos_right" },
                    React.createElement(PosRightTop, null),
                    React.createElement(PosRightBottom, null)
                ),
                React.createElement("div", { className: "backgroundOpacitv", onClick: this.handleClick }),
                React.createElement(
                    "div",
                    { className: "check_order" },
                    React.createElement(
                        "div",
                        { className: "check_order_top" },
                        React.createElement(
                            "div",
                            { className: "clothing_kuanhao" },
                            React.createElement(
                                "span",
                                { className: "clothing_kuanhao_number" },
                                "\u670D\u88C5\u6B3E\u53F7\uFF1A"
                            ),
                            React.createElement("input", { type: "text", className: "clothing_kuanhao_input" })
                        ),
                        React.createElement("hr", null),
                        React.createElement(
                            "div",
                            { className: "partOne" },
                            this.state.items.map(function (item, index) {
                                return React.createElement(InputOne, { item: item, key: index });
                            })
                        ),
                        React.createElement("hr", null),
                        React.createElement(
                            "div",
                            { className: "partTwo" },
                            this.state.items1.map(function (item, index) {
                                return React.createElement(InputTwo, { item: item, key: index });
                            })
                        ),
                        React.createElement("hr", null),
                        React.createElement(
                            "div",
                            { className: "partThree" },
                            React.createElement(InputThree, null)
                        ),
                        React.createElement("hr", null),
                        React.createElement(
                            "div",
                            { className: "partFour" },
                            this.state.items2.map(function (item, index) {
                                return React.createElement(InputFour, { item: item, key: index });
                            })
                        ),
                        React.createElement("hr", null),
                        React.createElement(
                            "div",
                            { className: "partFive" },
                            this.state.items3.map(function (item, index) {
                                return React.createElement(InputFive, { item: item, key: index });
                            })
                        ),
                        React.createElement("hr", null),
                        React.createElement(InputSix, null)
                    )
                ),
                React.createElement(Pay, null),
                React.createElement(PayWay, null),
                React.createElement(Toast, null),
                React.createElement(ShouHuo, null)
            );
        }
    }]);

    return Pos;
}(React.Component);

;

var Left = function (_React$Component2) {
    _inherits(Left, _React$Component2);

    function Left() {
        _classCallCheck(this, Left);

        return _possibleConstructorReturn(this, (Left.__proto__ || Object.getPrototypeOf(Left)).apply(this, arguments));
    }

    _createClass(Left, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            var height = $(window).height() - 64;
            $("#product_list").css({ "height": height, "overflow": "auto" });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "div",
                    { className: "search_wrap" },
                    React.createElement(
                        "div",
                        { id: "search" },
                        React.createElement("input", { type: "text", placeholder: "\u641C\u7D22..." }),
                        React.createElement(
                            "button",
                            { type: "submit", className: "tip-right", title: "Search" },
                            React.createElement("i", { className: "fa fa-search icon icon_style_search" })
                        )
                    )
                ),
                React.createElement(
                    "div",
                    { id: "product_list" },
                    React.createElement(ProductList, null),
                    React.createElement(ProductList, null),
                    React.createElement(ProductList, null),
                    React.createElement(ProductList, null)
                )
            );
        }
    }]);

    return Left;
}(React.Component);

;

var ProductList = function (_React$Component3) {
    _inherits(ProductList, _React$Component3);

    function ProductList(props) {
        _classCallCheck(this, ProductList);

        var _this3 = _possibleConstructorReturn(this, (ProductList.__proto__ || Object.getPrototypeOf(ProductList)).call(this, props));

        _this3.handleClick = _this3.handleClick.bind(_this3);
        _this3.handleClick1 = _this3.handleClick1.bind(_this3);
        _this3.state = {};
        return _this3;
    }

    _createClass(ProductList, [{
        key: "componentDidMount",
        value: function componentDidMount() {}
    }, {
        key: "handleClick",
        value: function handleClick(e) {
            $(".backgroundOpacitv").show();
            $(".check_order").css("z-index", "199");
        }
    }, {
        key: "handleClick1",
        value: function handleClick1(e) {
            $(".backgroundOpacitv").show();
            $(".pay_wrap").show();
        }
    }, {
        key: "render",
        value: function render() {

            return React.createElement(
                "div",
                { className: "left_wrap" },
                React.createElement(
                    "div",
                    { className: "order_list_time" },
                    React.createElement(
                        "p",
                        null,
                        "\u4E0B\u5355\u65F6\u95F4\uFF1A",
                        React.createElement(
                            "span",
                            null,
                            "2017-10-25 14:11"
                        )
                    ),
                    React.createElement(
                        "p",
                        null,
                        "\u7B49\u5F85\u53D6\u8D27"
                    )
                ),
                React.createElement(
                    "div",
                    { className: "order_list_pruduct" },
                    React.createElement(
                        "div",
                        { className: "product_img product_infor" },
                        React.createElement("img", { src: "images/shangyi.jpg", className: "product_img_infor" })
                    ),
                    React.createElement(
                        "div",
                        { className: "product_infor" },
                        React.createElement(
                            "p",
                            null,
                            "\u5355\u53F7"
                        ),
                        React.createElement(
                            "p",
                            { className: "" },
                            "12345"
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "product_infor" },
                        React.createElement(
                            "p",
                            null,
                            "\u540D\u79F0"
                        ),
                        React.createElement(
                            "p",
                            null,
                            "\u6BDB\u8863"
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "product_infor" },
                        React.createElement(
                            "p",
                            null,
                            "\u552E\u4EF7"
                        ),
                        React.createElement(
                            "p",
                            null,
                            "\xA5288.00"
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "product_infor" },
                        React.createElement(
                            "p",
                            null,
                            "\u5DF2\u4ED8"
                        ),
                        React.createElement(
                            "p",
                            null,
                            "\xA5100.00"
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "product_infor" },
                        React.createElement(
                            "p",
                            null,
                            "\u672A\u4ED8"
                        ),
                        React.createElement(
                            "p",
                            { className: "weifu_price" },
                            "\xA5188.00"
                        )
                    )
                ),
                React.createElement(
                    "div",
                    { className: "order_list_button" },
                    React.createElement(
                        "span",
                        { className: "button button1" },
                        React.createElement("i", { className: "fa fa-close icon" }),
                        "\u5220\u9664"
                    ),
                    React.createElement(
                        "span",
                        { className: "button button2", onClick: this.handleClick },
                        React.createElement("i", { className: "fa fa-eye icon" }),
                        "\u67E5\u770B"
                    ),
                    React.createElement(
                        "span",
                        { className: "button button3", onClick: this.handleClick1 },
                        React.createElement("i", { className: "fa fa-credit-card icon" }),
                        "\u652F\u4ED8"
                    )
                )
            );
        }
    }]);

    return ProductList;
}(React.Component);

;
// 输入列表

var InputOne = function (_React$Component4) {
    _inherits(InputOne, _React$Component4);

    function InputOne(props) {
        _classCallCheck(this, InputOne);

        return _possibleConstructorReturn(this, (InputOne.__proto__ || Object.getPrototypeOf(InputOne)).call(this, props));
    }

    _createClass(InputOne, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            var width = $(".title" + this.props.item.key).width();
            $(".input" + this.props.item.key).css("text-indent", width);
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "inputList_one" },
                React.createElement(
                    "span",
                    { className: "person_infor_title title" + this.props.item.key },
                    this.props.item.title,
                    "\uFF1A"
                ),
                React.createElement("input", { type: "text", name: "text", className: "person_infor_number input" + this.props.item.key })
            );
        }
    }]);

    return InputOne;
}(React.Component);

;
// checked

var InputTwo = function (_React$Component5) {
    _inherits(InputTwo, _React$Component5);

    function InputTwo() {
        _classCallCheck(this, InputTwo);

        return _possibleConstructorReturn(this, (InputTwo.__proto__ || Object.getPrototypeOf(InputTwo)).apply(this, arguments));
    }

    _createClass(InputTwo, [{
        key: "componentDidMount",
        value: function componentDidMount() {}
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "inputList_two" },
                React.createElement(
                    "span",
                    { className: "person_infor_title" },
                    this.props.item.title,
                    "\uFF1A"
                ),
                React.createElement(
                    "div",
                    { className: "person_infor_number1" },
                    React.createElement(
                        "p",
                        { className: "person_infor_number1_p" },
                        React.createElement(
                            "span",
                            { className: "person_infor_number1_p_span" },
                            "\u5C0F \xA0 ",
                            React.createElement("input", { type: "checkbox", className: "checedkox" })
                        ),
                        React.createElement(
                            "span",
                            { className: "person_infor_number1_p_span" },
                            "\u4E2D \xA0 ",
                            React.createElement("input", { type: "checkbox", className: "checedkox" })
                        ),
                        React.createElement(
                            "span",
                            { className: "person_infor_number1_p_span" },
                            "\u5927 \xA0 ",
                            React.createElement("input", { type: "checkbox", className: "checedkox" })
                        )
                    )
                )
            );
        }
    }]);

    return InputTwo;
}(React.Component);

;
// checked

var InputThree = function (_React$Component6) {
    _inherits(InputThree, _React$Component6);

    function InputThree() {
        _classCallCheck(this, InputThree);

        return _possibleConstructorReturn(this, (InputThree.__proto__ || Object.getPrototypeOf(InputThree)).apply(this, arguments));
    }

    _createClass(InputThree, [{
        key: "componentDidMount",
        value: function componentDidMount() {}
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "inputList_three" },
                React.createElement(
                    "span",
                    { className: "inputList_three_span" },
                    "\u7D27\u8EAB \xA0 ",
                    React.createElement("input", { type: "checkbox", className: "checedkox" })
                ),
                React.createElement(
                    "span",
                    { className: "inputList_three_span" },
                    "\u5408\u8EAB \xA0 ",
                    React.createElement("input", { type: "checkbox", className: "checedkox" })
                ),
                React.createElement(
                    "span",
                    { className: "inputList_three_span" },
                    "\u7565\u5BBD\u677E \xA0 ",
                    React.createElement("input", { type: "checkbox", className: "checedkox" })
                ),
                React.createElement(
                    "span",
                    { className: "inputList_three_span" },
                    "\u5BBD\u677E \xA0 ",
                    React.createElement("input", { type: "checkbox", className: "checedkox" })
                )
            );
        }
    }]);

    return InputThree;
}(React.Component);

;
// 输入列表

var InputFour = function (_React$Component7) {
    _inherits(InputFour, _React$Component7);

    function InputFour() {
        _classCallCheck(this, InputFour);

        return _possibleConstructorReturn(this, (InputFour.__proto__ || Object.getPrototypeOf(InputFour)).apply(this, arguments));
    }

    _createClass(InputFour, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            var width = $(".titleOne" + this.props.item.key).width();
            $(".inputOne" + this.props.item.key).css("text-indent", width);
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "inputList_one" },
                React.createElement(
                    "span",
                    { className: "person_infor_title titleOne" + this.props.item.key },
                    this.props.item.title,
                    "\uFF1A"
                ),
                React.createElement("input", { type: "text", name: "text", className: "person_infor_number inputOne" + this.props.item.key })
            );
        }
    }]);

    return InputFour;
}(React.Component);

;
// 输入列表

var InputFive = function (_React$Component8) {
    _inherits(InputFive, _React$Component8);

    function InputFive() {
        _classCallCheck(this, InputFive);

        return _possibleConstructorReturn(this, (InputFive.__proto__ || Object.getPrototypeOf(InputFive)).apply(this, arguments));
    }

    _createClass(InputFive, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            var width = $(".titleTwo" + this.props.item.key).width();
            $(".inputTwo" + this.props.item.key).css("text-indent", width);
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "inputList_one" },
                React.createElement(
                    "span",
                    { className: "person_infor_title titleTwo" + this.props.item.key },
                    this.props.item.title,
                    "\uFF1A"
                ),
                React.createElement("input", { type: "text", name: "text", className: "person_infor_number inputTwo" + this.props.item.key })
            );
        }
    }]);

    return InputFive;
}(React.Component);

;
// 输入列表

var InputSix = function (_React$Component9) {
    _inherits(InputSix, _React$Component9);

    function InputSix() {
        _classCallCheck(this, InputSix);

        return _possibleConstructorReturn(this, (InputSix.__proto__ || Object.getPrototypeOf(InputSix)).apply(this, arguments));
    }

    _createClass(InputSix, [{
        key: "componentDidMount",
        value: function componentDidMount() {}
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "partSix" },
                React.createElement(
                    "div",
                    { className: "six_left" },
                    React.createElement("textarea", { className: "six_textarea", placeholder: "\u9762\u6599\u989C\u8272:" })
                ),
                React.createElement(
                    "div",
                    { className: "six_middle" },
                    React.createElement("textarea", { className: "six_textarea", placeholder: "\u7248\u578B\u53CA\u5DE5\u827A\u8981\u6C42\u8BF4\u660E\uFF1A" })
                ),
                React.createElement(
                    "div",
                    { className: "six_right" },
                    React.createElement(
                        "button",
                        { className: "six_right_button" },
                        "\u4FDD \u5B58"
                    )
                )
            );
        }
    }]);

    return InputSix;
}(React.Component);

;

// 框架

var PosRightTop = function (_React$Component10) {
    _inherits(PosRightTop, _React$Component10);

    function PosRightTop() {
        _classCallCheck(this, PosRightTop);

        return _possibleConstructorReturn(this, (PosRightTop.__proto__ || Object.getPrototypeOf(PosRightTop)).apply(this, arguments));
    }

    _createClass(PosRightTop, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "pos_right_top" },
                React.createElement(
                    "div",
                    { className: "pos_right_top_style" },
                    React.createElement("img", { src: "images/person_head.jpg", className: "pos_right_top_head" })
                ),
                React.createElement(
                    "div",
                    { className: "pos_right_top_style pos_right_top_style1" },
                    React.createElement(
                        "p",
                        { className: "pos_number" },
                        "001"
                    ),
                    React.createElement(
                        "p",
                        { className: "pos_name" },
                        "\u81F3\u5C0A\u5B9D"
                    )
                ),
                React.createElement(
                    "div",
                    { className: "pos_right_top_style" },
                    React.createElement(
                        "span",
                        { className: "exit" },
                        "\u6CE8\u9500"
                    )
                )
            );
        }
    }]);

    return PosRightTop;
}(React.Component);

;
// 右侧下部

var PosRightBottom = function (_React$Component11) {
    _inherits(PosRightBottom, _React$Component11);

    function PosRightBottom() {
        _classCallCheck(this, PosRightBottom);

        return _possibleConstructorReturn(this, (PosRightBottom.__proto__ || Object.getPrototypeOf(PosRightBottom)).apply(this, arguments));
    }

    _createClass(PosRightBottom, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "pos_right_bottom" },
                React.createElement(
                    "div",
                    { className: "pos_right_bottom_wrap" },
                    React.createElement(
                        "div",
                        null,
                        React.createElement("i", { className: "fa fa-bar-chart-o icon icon_style_right_bottom" })
                    ),
                    React.createElement(
                        "div",
                        null,
                        React.createElement(
                            "a",
                            { href: "achievement" },
                            "\u4E1A\u7EE9"
                        )
                    )
                ),
                React.createElement(
                    "div",
                    { className: "pos_right_bottom_wrap" },
                    React.createElement(
                        "div",
                        null,
                        React.createElement("i", { className: "fa fa-book icon icon_style_right_bottom" })
                    ),
                    React.createElement(
                        "div",
                        null,
                        React.createElement(
                            "a",
                            { href: "no_pay" },
                            "\u672A\u5B8C\u6210\u652F\u4ED8"
                        )
                    )
                ),
                React.createElement(
                    "div",
                    { className: "pos_right_bottom_wrap" },
                    React.createElement(
                        "div",
                        null,
                        React.createElement("i", { className: "fa fa-refresh icon icon_style_right_bottom" })
                    ),
                    React.createElement(
                        "div",
                        null,
                        React.createElement(
                            "a",
                            { href: "repair" },
                            "\u8FD4\u4FEE"
                        )
                    )
                )
            );
        }
    }]);

    return PosRightBottom;
}(React.Component);

;

// 支付

var Pay = function (_React$Component12) {
    _inherits(Pay, _React$Component12);

    function Pay(props) {
        _classCallCheck(this, Pay);

        var _this12 = _possibleConstructorReturn(this, (Pay.__proto__ || Object.getPrototypeOf(Pay)).call(this, props));

        _this12.handleClick = _this12.handleClick.bind(_this12);
        _this12.handleClick1 = _this12.handleClick1.bind(_this12);
        return _this12;
    }

    _createClass(Pay, [{
        key: "handleClick",
        value: function handleClick(e) {
            $(".pay_way").show();
        }
    }, {
        key: "handleClick1",
        value: function handleClick1(e) {
            $(".querenShouhuo_wrap").show();
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "pay_wrap" },
                React.createElement(
                    "div",
                    { className: "clothing_img_wrap" },
                    React.createElement("img", { src: "images/shangyi.jpg", className: "clothing_img" })
                ),
                React.createElement(
                    "div",
                    { className: "pay_button" },
                    React.createElement(
                        "div",
                        { className: "pay_button_absolute" },
                        React.createElement(
                            "button",
                            { className: "sure_product", onClick: this.handleClick1 },
                            "\u786E\u8BA4\u6536\u8D27"
                        ),
                        React.createElement(
                            "span",
                            { className: "pay_line" },
                            "|"
                        ),
                        React.createElement(
                            "button",
                            { className: "pay_product", onClick: this.handleClick },
                            "\u652F \u4ED8"
                        )
                    )
                )
            );
        }
    }]);

    return Pay;
}(React.Component);

;
// 支付方式

var PayWay = function (_React$Component13) {
    _inherits(PayWay, _React$Component13);

    function PayWay(props) {
        _classCallCheck(this, PayWay);

        var _this13 = _possibleConstructorReturn(this, (PayWay.__proto__ || Object.getPrototypeOf(PayWay)).call(this, props));

        _this13.handleClick = _this13.handleClick.bind(_this13);
        _this13.handleClick1 = _this13.handleClick1.bind(_this13);
        _this13.handleClick2 = _this13.handleClick2.bind(_this13);
        return _this13;
    }

    _createClass(PayWay, [{
        key: "handleClick",
        value: function handleClick(e) {
            $(".pay_way").hide();
        }
    }, {
        key: "handleClick1",
        value: function handleClick1(e) {
            $(".cash_wrap").show();
        }
    }, {
        key: "handleClick2",
        value: function handleClick2(e) {
            var $loadingToast = $('#loadingToast');
            if ($loadingToast.css('display') != 'none') return;

            $loadingToast.fadeIn(100);
            setTimeout(function () {
                $loadingToast.fadeOut(100);
            }, 1000);
            $(".cash_wrap").hide();
            $(".pay_way").hide();
            $(".pay_wrap").hide();
            $(".backgroundOpacitv").hide();
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "pay_way" },
                React.createElement(
                    "div",
                    { className: "pay_way_next" },
                    React.createElement(
                        "div",
                        { className: "pay_way_infor" },
                        "\u5FAE\u4FE1"
                    ),
                    React.createElement(
                        "div",
                        { className: "pay_way_infor" },
                        "\u652F\u4ED8\u5B9D"
                    ),
                    React.createElement(
                        "div",
                        { className: "pay_way_infor", onClick: this.handleClick1 },
                        "\u73B0\u91D1"
                    )
                ),
                React.createElement("i", { className: "fa fa-window-close icon pay_way_close", onClick: this.handleClick }),
                React.createElement(
                    "div",
                    { className: "cash_wrap" },
                    React.createElement(
                        "div",
                        { className: "cash_input_next" },
                        React.createElement("input", { type: "number", placeholder: "\u8BF7\u8F93\u5165\u652F\u4ED8\u73B0\u91D1\u91D1\u989D", className: "cash_input" }),
                        React.createElement(
                            "span",
                            { className: "cash_input_button", onClick: this.handleClick2 },
                            "\u63D0 \u4EA4"
                        )
                    )
                )
            );
        }
    }]);

    return PayWay;
}(React.Component);

;

// 各种提示信息

var Toast = function (_React$Component14) {
    _inherits(Toast, _React$Component14);

    function Toast(props) {
        _classCallCheck(this, Toast);

        return _possibleConstructorReturn(this, (Toast.__proto__ || Object.getPrototypeOf(Toast)).call(this, props));
    }

    _createClass(Toast, [{
        key: "render",
        value: function render() {
            var style = { display: "none" };
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "div",
                    { id: "loadingToast", style: style },
                    React.createElement("div", { className: "weui-mask_transparent" }),
                    React.createElement(
                        "div",
                        { className: "weui-toast" },
                        React.createElement("i", { className: "weui-loading weui-icon_toast" }),
                        React.createElement(
                            "p",
                            { className: "weui-toast__content" },
                            "\u652F\u4ED8\u6210\u529F"
                        )
                    )
                ),
                React.createElement(
                    "div",
                    { id: "loadingToast1", style: style },
                    React.createElement("div", { className: "weui-mask_transparent" }),
                    React.createElement(
                        "div",
                        { className: "weui-toast" },
                        React.createElement("i", { className: "weui-loading weui-icon_toast" }),
                        React.createElement(
                            "p",
                            { className: "weui-toast__content" },
                            "\u6536\u8D27\u6210\u529F"
                        )
                    )
                )
            );
        }
    }]);

    return Toast;
}(React.Component);

;
// 各种提示信息

var ShouHuo = function (_React$Component15) {
    _inherits(ShouHuo, _React$Component15);

    function ShouHuo(props) {
        _classCallCheck(this, ShouHuo);

        var _this15 = _possibleConstructorReturn(this, (ShouHuo.__proto__ || Object.getPrototypeOf(ShouHuo)).call(this, props));

        _this15.handleClick = _this15.handleClick.bind(_this15);
        _this15.handleClick1 = _this15.handleClick1.bind(_this15);
        return _this15;
    }

    _createClass(ShouHuo, [{
        key: "handleClick",
        value: function handleClick(e) {
            $(".querenShouhuo_wrap").hide();
        }
    }, {
        key: "handleClick1",
        value: function handleClick1(e) {
            $(".querenShouhuo_wrap").hide();
            var $loadingToast1 = $('#loadingToast1');
            if ($loadingToast1.css('display') != 'none') return;

            $loadingToast1.fadeIn(100);
            setTimeout(function () {
                $loadingToast1.fadeOut(100);
            }, 1000);
            $(".querenShouhuo_wrap").hide();
            $(".pay_wrap").hide();
            $(".backgroundOpacitv").hide();
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "querenShouhuo_wrap" },
                React.createElement(
                    "div",
                    { className: "querenShouhuo_title" },
                    "\u662F\u5426\u786E\u8BA4\u6536\u8D27\uFF1F"
                ),
                React.createElement(
                    "div",
                    { className: "querenShouhuo_button_wrap" },
                    React.createElement(
                        "button",
                        { onClick: this.handleClick },
                        "\u53D6\u6D88\u6536\u8D27"
                    ),
                    React.createElement(
                        "button",
                        { onClick: this.handleClick1 },
                        "\u786E\u8BA4\u6536\u8D27"
                    )
                )
            );
        }
    }]);

    return ShouHuo;
}(React.Component);

;
// 返回到页面
ReactDOM.render(React.createElement(Pos, null), document.getElementById("pos"));

/***/ })
/******/ ]);