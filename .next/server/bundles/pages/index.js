module.exports =
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(6);


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(7);
var head__default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "prop-types"
var external__prop_types_ = __webpack_require__(8);
var external__prop_types__default = /*#__PURE__*/__webpack_require__.n(external__prop_types_);

// CONCATENATED MODULE: ./components/head.js



var defaultDescription = '';

var head_Head = function Head(props) {
  return external__react__default.a.createElement(head__default.a, null, external__react__default.a.createElement("title", null, props.title || ''), external__react__default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1"
  }), external__react__default.a.createElement("meta", {
    name: "description",
    content: props.description || defaultDescription
  }), external__react__default.a.createElement("link", {
    href: "static/css/fonts.css",
    rel: "stylesheet"
  }), external__react__default.a.createElement("link", {
    href: "static/css/normalize.css",
    rel: "stylesheet"
  }));
};

/* harmony default export */ var head = (head_Head);
// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(1);
var style__default = /*#__PURE__*/__webpack_require__.n(style_);

// CONCATENATED MODULE: ./components/Card.jsx


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }



var Card_Card =
/*#__PURE__*/
function (_Component) {
  _inherits(Card, _Component);

  function Card(props) {
    var _this;

    _classCallCheck(this, Card);

    _this = _possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "changeElementState", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        if (_this.props.active != 'disabled') {
          _this.setState(function (prevState) {
            return {
              active: !prevState.active
            };
          });
        }
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "addClassOnMouseHover", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        var card = e.target.closest('.product');

        if (!card.classList.contains('product--disabled')) {
          card.classList.add("hovered");
        }
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "removeClassOnMouseLeave", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        var card = e.target.closest('.product');

        if (!card.classList.contains('product--disabled')) {
          card.classList.remove("hovered");
        }
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "changeProductClassName", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var className = [];

        if (_this.state.active === 'disabled') {
          className.push('product product--disabled');
          return className;
        }

        if (!_this.state.active) {
          className.push('product');
          return className;
        }

        if (_this.state.active) {
          className.push('product product--active');
          return className;
        }
      }
    });
    _this.state = {
      active: _this.props.active
    };
    return _this;
  }

  _createClass(Card, [{
    key: "render",
    value: function render() {
      var active = this.state.active;
      var _props = this.props,
          productName = _props.productName,
          productDescription = _props.productDescription,
          productGift = _props.productGift,
          productPortions = _props.productPortions,
          productStuffing = _props.productStuffing,
          productWeight = _props.productWeight,
          feedDescription = _props.feedDescription,
          approbation = _props.approbation;
      return external__react__default.a.createElement(external__react__default.a.Fragment, null, external__react__default.a.createElement(style__default.a, {
        styleId: "1087736397",
        css: [".product__wrapper.jsx-1087736397{display:-webkit-flex;display:-moz-flex;display:-ms-flex;display:-o-flex;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;max-width:320px;width:100%;}", ".product__inner.jsx-1087736397{position:relative;display:-webkit-flex;display:-moz-flex;display:-ms-flex;display:-o-flex;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-moz-flex-direction:column;-ms-flex-direction:column;-o-flex-direction:column;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-ms-align-items:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;max-width:320px;width:100%;}", ".product__inner.jsx-1087736397:after{content:'';position:absolute;left:20px;top:-46px;width:30px;height:65px;background-color:transparent;-webkit-transform:translate(-24px,24px) rotate(45deg);-ms-transform:translate(-24px,24px) rotate(45deg);transform:translate(-24px,24px) rotate(45deg);z-index:10;}", ".product.jsx-1087736397{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;max-width:320px;height:480px;border-radius:13px;box-sizing:border-box;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;}", ".product__mask.jsx-1087736397{position:absolute;top:0;right:0;bottom:0;left:0;z-index:5;}", ".product__mask.jsx-1087736397 path.jsx-1087736397{-webkit-transition:.3s ease-out;transition:.3s ease-out;}", ".product.hovered.jsx-1087736397 .product__mask.jsx-1087736397 path.jsx-1087736397{stroke:rgb(46,168,230);}", ".product.hovered.jsx-1087736397 .product__weight.jsx-1087736397{background-color:rgb(46,168,230);}", ".product--active.jsx-1087736397 .product__mask.jsx-1087736397 path.jsx-1087736397{stroke:rgb(217,22,103);}", ".product--active.jsx-1087736397 .product__weight.jsx-1087736397{background-color:rgb(217,22,103);}", ".product--active.hovered.jsx-1087736397 .product__mask.jsx-1087736397 path.jsx-1087736397{stroke:rgb(230,46,122);}", ".product--active.hovered.jsx-1087736397 .product__weight.jsx-1087736397{background-color:rgb(230,46,122);}", ".product--disabled.jsx-1087736397{cursor:default;}", ".product--disabled.jsx-1087736397 .product__mask.jsx-1087736397 path.jsx-1087736397{stroke:rgb(179,179,179);fill:rgba(242,242,242,0.4);}", ".product--disabled.jsx-1087736397 .product__weight.jsx-1087736397{background-color:rgb(179,179,179);}", ".product--disabled.jsx-1087736397+.product__appeal.jsx-1087736397{color:rgb(255,255,102);}", ".product__card.jsx-1087736397{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;width:calc(100% - 8px);height:calc(480px - 8px);border-radius:8px;background:linear-gradient(135deg,transparent 28px,#fff 0);box-sizing:border-box;z-index:3;}", ".product__info.jsx-1087736397{padding:18px 20px 0 44px;}", ".product__description.jsx-1087736397{color:rgb(102,102,102);}", ".product__name.jsx-1087736397{padding:6px 0 0 0;font-family:'TrebuchetMS Bold',arial;font-size:48px;color:rgb(0,0,0);font-weight:bold;}", ".product__stuffing.jsx-1087736397{font-family:'TrebuchetMS Bold',arial;font-size:24px;color:rgb(0,0,0);font-weight:bold;}", ".product__compos.jsx-1087736397{padding-top:14px;font-size:14px;color:rgb(102,102,102);font-weight:bold;}", ".product-img.jsx-1087736397{position:relative;height:100%;max-height:269px;}", ".product-img.jsx-1087736397 img.jsx-1087736397{position:absolute;left:-28px;}", ".product__weight.jsx-1087736397{position:absolute;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;right:12px;bottom:12px;width:80px;height:80px;border-radius:50%;background-color:rgb(22,152,217);color:rgb(255,255,255);text-align:center;-webkit-transition:.3s ease-out;transition:.3s ease-out;}", ".product__weight-number.jsx-1087736397{padding:7px 0 0 0px;font-size:42px;}", ".product__weight-unit.jsx-1087736397{font-size:20px;line-height:0.6;}", ".product__appeal.jsx-1087736397{margin-left:-7px;margin-top:15px;font-size:13px;text-align:center;color:#fff;}", ".product__appeal-button.jsx-1087736397{padding:0;border:none;background:none;-webkit-text-decoration:underline;text-decoration:underline;-webkit-text-decoration-style:dashed;text-decoration-style:dashed;-webkit-text-decoration-color:rgb(22,152,217);text-decoration-color:rgb(22,152,217);color:rgb(22,152,217);cursor:pointer;outline:none;}", "@media (max-width:1168px){.product__wrapper.jsx-1087736397:first-child{max-width:100%;}.product__wrapper.jsx-1087736397:nth-child(2),.product__wrapper.jsx-1087736397:nth-child(3){margin-top:20px;}}"]
      }), external__react__default.a.createElement("div", {
        className: "jsx-1087736397" + " " + "product__wrapper"
      }, external__react__default.a.createElement("div", {
        className: "jsx-1087736397" + " " + "product__inner"
      }, external__react__default.a.createElement("div", {
        onClick: this.changeElementState,
        onMouseEnter: this.addClassOnMouseHover,
        onMouseLeave: this.removeClassOnMouseLeave,
        className: "jsx-1087736397" + " " + (this.changeProductClassName() || "")
      }, external__react__default.a.createElement("svg", {
        width: "320",
        height: "480",
        viewBox: "0 0 320 480",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: "jsx-1087736397" + " " + "product__mask"
      }, external__react__default.a.createElement("path", {
        d: "M2 467V43.1599L43.789 2H307C313.075 2 318 6.92487 318 13V467C318 473.075 313.075 478 307 478H13C6.92486 478 2 473.075 2 467Z",
        fill: "none",
        stroke: "#3399CC",
        strokeWidth: "4",
        className: "jsx-1087736397"
      })), external__react__default.a.createElement("div", {
        className: "jsx-1087736397" + " " + "product__card"
      }, external__react__default.a.createElement("div", {
        className: "jsx-1087736397" + " " + "product__info"
      }, external__react__default.a.createElement("div", {
        className: "jsx-1087736397" + " " + "product__description"
      }, productDescription), external__react__default.a.createElement("div", {
        className: "jsx-1087736397" + " " + "product__name"
      }, productName), external__react__default.a.createElement("div", {
        className: "jsx-1087736397" + " " + "product__stuffing"
      }, productStuffing), external__react__default.a.createElement("div", {
        className: "jsx-1087736397" + " " + "product__compos"
      }, external__react__default.a.createElement("div", {
        className: "jsx-1087736397" + " " + "product__compos-portions"
      }, productPortions == 1 && "".concat(productPortions, " \u043F\u043E\u0440\u0446\u0438\u044F"), productPortions >= 2 && productPortions <= 4 && "".concat(productPortions, " \u043F\u043E\u0440\u0446\u0438\u0438"), productPortions >= 5 && "".concat(productPortions, " \u043F\u043E\u0440\u0446\u0438\u0439")), external__react__default.a.createElement("div", {
        className: "jsx-1087736397" + " " + "product__compos-gift"
      }, productGift == 1 && "\u043C\u044B\u0448\u044C \u0432 \u043F\u043E\u0434\u0430\u0440\u043E\u043A", productGift >= 2 && productGift <= 4 && "".concat(productGift, " \u043C\u044B\u0448\u0438 \u0432 \u043F\u043E\u0434\u0430\u0440\u043E\u043A"), productGift >= 5 && "".concat(productGift, " \u043C\u044B\u0448\u0435\u0439 \u0432 \u043F\u043E\u0434\u0430\u0440\u043E\u043A")), approbation && external__react__default.a.createElement(external__react__default.a.Fragment, null, external__react__default.a.createElement("div", {
        className: "jsx-1087736397" + " " + "product__compos-approbation"
      }, approbation)))), external__react__default.a.createElement("div", {
        className: "jsx-1087736397" + " " + "product-img"
      }, external__react__default.a.createElement("img", {
        src: "static/images/Photo.png",
        alt: "product_img",
        className: "jsx-1087736397"
      })), external__react__default.a.createElement("div", {
        className: "jsx-1087736397" + " " + "product__weight"
      }, external__react__default.a.createElement("div", {
        className: "jsx-1087736397" + " " + "product__weight-number"
      }, productWeight), external__react__default.a.createElement("div", {
        className: "jsx-1087736397" + " " + "product__weight-unit"
      }, "\u043A\u0433")))), external__react__default.a.createElement("div", {
        className: "jsx-1087736397" + " " + "product__appeal"
      }, !active && external__react__default.a.createElement(external__react__default.a.Fragment, null, external__react__default.a.createElement("span", {
        className: "jsx-1087736397"
      }, "\u0427\u0435\u0433\u043E \u0441\u0438\u0434\u0438\u0448\u044C? \u041F\u043E\u0440\u0430\u0434\u0443\u0439 \u043A\u043E\u0442\u044D, "), external__react__default.a.createElement("button", {
        onClick: this.changeElementState,
        className: "jsx-1087736397" + " " + "product__appeal-button"
      }, "\u043A\u0443\u043F\u0438")), active === true && feedDescription, active === 'disabled' && "\u041F\u0435\u0447\u0430\u043B\u044C\u043A\u0430, ".concat(productStuffing, " \u0437\u0430\u043A\u043E\u043D\u0447\u0438\u043B\u0441\u044F")))));
    }
  }]);

  return Card;
}(external__react_["Component"]);

/* harmony default export */ var components_Card = (Card_Card);
// CONCATENATED MODULE: ./components/App.jsx


function App__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { App__typeof = function _typeof(obj) { return typeof obj; }; } else { App__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return App__typeof(obj); }

function App__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function App__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function App__createClass(Constructor, protoProps, staticProps) { if (protoProps) App__defineProperties(Constructor.prototype, protoProps); if (staticProps) App__defineProperties(Constructor, staticProps); return Constructor; }

function App__possibleConstructorReturn(self, call) { if (call && (App__typeof(call) === "object" || typeof call === "function")) { return call; } return App__assertThisInitialized(self); }

function App__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function App__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var App_App =
/*#__PURE__*/
function (_Component) {
  App__inherits(App, _Component);

  function App(props) {
    var _this;

    App__classCallCheck(this, App);

    _this = App__possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
    _this.state = {};
    return _this;
  }

  App__createClass(App, [{
    key: "render",
    value: function render() {
      return external__react__default.a.createElement(external__react__default.a.Fragment, null, external__react__default.a.createElement(style__default.a, {
        styleId: "4120453089",
        css: [".products.jsx-4120453089{display:-webkit-flex;display:-moz-flex;display:-ms-flex;display:-o-flex;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-moz-flex-direction:column;-ms-flex-direction:column;-o-flex-direction:column;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-ms-align-items:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;min-height:100vh;background:linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url(static/images/bg.jpg);}", ".products__title.jsx-4120453089{font-family:'Exo2.0 Thin';font-size:36px;text-align:center;color:#fff;}", ".products__container.jsx-4120453089{display:-webkit-flex;display:-moz-flex;display:-ms-flex;display:-o-flex;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;max-width:1120px;width:100%;margin-top:23px;}", "@media (max-width:1168px){.products.jsx-4120453089{padding:30px 0;}.products__container.jsx-4120453089{-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}}", "@media (max-width:768px){.products__container.jsx-4120453089{-webkit-flex-direction:column;-moz-flex-direction:column;-ms-flex-direction:column;-o-flex-direction:column;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-ms-align-items:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}}", "@media (max-width:480px){.products.jsx-4120453089{padding:30px 10px;}}"]
      }), external__react__default.a.createElement("div", {
        className: "jsx-4120453089" + " " + "products"
      }, external__react__default.a.createElement("div", {
        className: "jsx-4120453089" + " " + "products__title"
      }, "\u0422\u044B \u0441\u0435\u0433\u043E\u0434\u043D\u044F \u043F\u043E\u043A\u043E\u0440\u043C\u0438\u043B \u043A\u043E\u0442\u0430?"), external__react__default.a.createElement("div", {
        className: "jsx-4120453089" + " " + "products__container"
      }, external__react__default.a.createElement(components_Card, {
        productName: "\u041D\u044F\u043C\u0443\u0448\u043A\u0430",
        productDescription: "\u0421\u043A\u0430\u0437\u043E\u0447\u043D\u043E\u0435 \u0437\u0430\u043C\u043E\u0440\u0441\u043A\u043E\u0435 \u044F\u0432\u0441\u0442\u0432\u043E",
        productStuffing: "\u0441 \u0444\u0443\u0430-\u0433\u0440\u0430",
        productPortions: "10",
        productGift: "1",
        productWeight: "0,5",
        feedDescription: "\u041F\u0435\u0447\u0435\u043D\u044C \u0443\u0442\u043A\u0438 \u0440\u0430\u0437\u0432\u0430\u0440\u043D\u0430\u044F \u0441 \u0430\u0440\u0442\u0438\u0448\u043E\u043A\u0430\u043C\u0438.",
        approbation: false
      }), external__react__default.a.createElement(components_Card, {
        productName: "\u041D\u044F\u043C\u0443\u0448\u043A\u0430",
        productDescription: "\u0421\u043A\u0430\u0437\u043E\u0447\u043D\u043E\u0435 \u0437\u0430\u043C\u043E\u0440\u0441\u043A\u043E\u0435 \u044F\u0432\u0441\u0442\u0432\u043E",
        productStuffing: "\u0441 \u0440\u044B\u0431\u043E\u0439",
        productPortions: "40",
        productGift: "2",
        productWeight: "2",
        feedDescription: "\u0413\u043E\u043B\u043E\u0432\u044B \u0449\u0443\u0447\u044C\u0438 \u0441 \u0447\u0435\u0441\u043D\u043E\u043A\u043E\u043C \u0434\u0430 \u0441\u0432\u0435\u0436\u0430\u0439\u0448\u0430\u044F \u0441\u0451\u043C\u0433\u0443\u0448\u043A\u0430.",
        active: true,
        approbation: false
      }), external__react__default.a.createElement(components_Card, {
        productName: "\u041D\u044F\u043C\u0443\u0448\u043A\u0430",
        productDescription: "\u0421\u043A\u0430\u0437\u043E\u0447\u043D\u043E\u0435 \u0437\u0430\u043C\u043E\u0440\u0441\u043A\u043E\u0435 \u044F\u0432\u0441\u0442\u0432\u043E",
        productStuffing: "\u0441 \u043A\u0443\u0440\u043E\u0439",
        productPortions: "100",
        productGift: "5",
        productWeight: "5",
        feedDescription: "\u0424\u0438\u043B\u0435 \u0438\u0437 \u0446\u044B\u043F\u043B\u044F\u0442 \u0441 \u0442\u0440\u044E\u0444\u0435\u043B\u044F\u043C\u0438 \u0432 \u0431\u0443\u043B\u044C\u043E\u043D\u0435.",
        active: "disabled",
        approbation: "\u0437\u0430\u043A\u0430\u0437\u0447\u0438\u043A \u0434\u043E\u0432\u043E\u043B\u0435\u043D"
      }))));
    }
  }]);

  return App;
}(external__react_["Component"]);

/* harmony default export */ var components_App = (App_App);
// CONCATENATED MODULE: ./pages/index.js



/* harmony default export */ var pages = __webpack_exports__["default"] = (function () {
  return external__react__default.a.createElement(external__react__default.a.Fragment, null, external__react__default.a.createElement(head, {
    title: "It`s only task!"
  }), external__react__default.a.createElement(components_App, null));
});

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ })
/******/ ]);