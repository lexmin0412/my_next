module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.less */ "./pages/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/cellerchan/code/git_repos/my_nextjs/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = (() => __jsx("div", {
  className: "jsx-2506655031",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "3536111579",
  __self: undefined
}, "p.jsx-2506655031{color:blue;}div.jsx-2506655031{background:red;}@media (max-width:600px){div.jsx-2506655031{background:blue;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jZWxsZXJjaGFuL2NvZGUvZ2l0X3JlcG9zL215X25leHRqcy9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJZ0IsQUFHa0IsQUFHSSxBQUlHLFdBTnBCLElBR0EsQ0FJRSIsImZpbGUiOiIvVXNlcnMvY2VsbGVyY2hhbi9jb2RlL2dpdF9yZXBvcy9teV9uZXh0anMvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3NzIGZyb20gJy4vaW5kZXgubGVzcydcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT5cbiAgPGRpdj5cbiAgICA8c3R5bGUganN4PntgXG4gICAgcCB7XG4gICAgICBjb2xvcjogYmx1ZTtcbiAgICB9XG4gICAgZGl2IHtcbiAgICAgIGJhY2tncm91bmQ6IHJlZDtcbiAgICB9XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgICBkaXYge1xuICAgICAgICBiYWNrZ3JvdW5kOiBibHVlO1xuICAgICAgfcOPXG4gICAgfVxuICBgfTwvc3R5bGU+XG4gICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcbiAgICBib2R5IHtcbiAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xuICAgIH1cbiAgYH08L3N0eWxlPlxuICAgIEhlbGxvIHdvcmxkXG4gICAgPHAgc3R5bGU9e3tcbiAgICAgIGNvbG9yOiAnI2ZmNGE0YSdcbiAgICB9fT5zY29wZWQhPC9wPlxuICAgIDxpbWcgc3JjPVwiL3N0YXRpYy90ZXN0LnBuZ1wiIC8+XG4gIDwvZGl2PiJdfQ== */\n/*@ sourceURL=/Users/cellerchan/code/git_repos/my_nextjs/pages/index.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "1931525477",
  __self: undefined
}, "body{background:black;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jZWxsZXJjaGFuL2NvZGUvZ2l0X3JlcG9zL215X25leHRqcy9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQnVCLEFBR3dCLGlCQUNuQiIsImZpbGUiOiIvVXNlcnMvY2VsbGVyY2hhbi9jb2RlL2dpdF9yZXBvcy9teV9uZXh0anMvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3NzIGZyb20gJy4vaW5kZXgubGVzcydcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT5cbiAgPGRpdj5cbiAgICA8c3R5bGUganN4PntgXG4gICAgcCB7XG4gICAgICBjb2xvcjogYmx1ZTtcbiAgICB9XG4gICAgZGl2IHtcbiAgICAgIGJhY2tncm91bmQ6IHJlZDtcbiAgICB9XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgICBkaXYge1xuICAgICAgICBiYWNrZ3JvdW5kOiBibHVlO1xuICAgICAgfcOPXG4gICAgfVxuICBgfTwvc3R5bGU+XG4gICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcbiAgICBib2R5IHtcbiAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xuICAgIH1cbiAgYH08L3N0eWxlPlxuICAgIEhlbGxvIHdvcmxkXG4gICAgPHAgc3R5bGU9e3tcbiAgICAgIGNvbG9yOiAnI2ZmNGE0YSdcbiAgICB9fT5zY29wZWQhPC9wPlxuICAgIDxpbWcgc3JjPVwiL3N0YXRpYy90ZXN0LnBuZ1wiIC8+XG4gIDwvZGl2PiJdfQ== */\n/*@ sourceURL=/Users/cellerchan/code/git_repos/my_nextjs/pages/index.js */"), "Hello world", __jsx("p", {
  style: {
    color: '#ff4a4a'
  },
  className: "jsx-2506655031",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}, "scoped!"), __jsx("img", {
  src: "/static/test.png",
  className: "jsx-2506655031",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27
  },
  __self: undefined
})));

/***/ }),

/***/ "./pages/index.less":
/*!**************************!*\
  !*** ./pages/index.less ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/cellerchan/code/git_repos/my_nextjs/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map