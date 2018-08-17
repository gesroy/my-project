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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/Ball.js":
/*!************************!*\
  !*** ./src/js/Ball.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Ball; });\nclass Ball {\n  constructor(x, y) {\n    this.createElement(x, y)\n    this.setPosition()\n    this.queueUpdate()\n    this.setupEvents()\n    this.changeBackground()\n  }\n\n  changeBackground() {\n    this.el.style.background = this.getRandomBackground()\n  }\n\n  getRandomBackground() {\n    const rand = () => Math.round(Math.random() * 255)\n    return `rgb(${rand()}, ${rand()}, ${rand()})`\n  }\n\n  setupEvents() {\n    this.el.addEventListener('click', event => {\n      event.stopPropagation()\n      this.destroy()\n      //const countUpdate = +1\n    })\n  }\n\n  //insertCounter() {\n  //const\n  //counter.insertAdjacentElement\n  //}\n\n  destroy() {\n    cancelAnimationFrame(this.animationFrame)\n    this.el.style.transform = 'scale(2)'\n    setTimeout(() => {\n      this.el.remove()\n      this.el = null\n    }, 100)\n  }\n\n  queueUpdate() {\n    this.a = this.a ? this.a * 1.008 : 0.1\n    this.pos.y -= this.a\n    this.setPosition()\n    this.animationFrame = requestAnimationFrame(() => {\n      this.pos.y < -50 ? this.destroy() : this.queueUpdate()\n    })\n  }\n\n  createElement(x, y) {\n    this.pos = { x, y }\n    this.el = document.createElement('div')\n    this.el.className = 'ball'\n    document.body.insertAdjacentElement('beforeend', this.el)\n  }\n\n  setPosition() {\n    this.el.style.left = `${this.pos.x}px`\n    this.el.style.top = `${this.pos.y}px`\n  }\n}\n\n\n//# sourceURL=webpack:///./src/js/Ball.js?");

/***/ }),

/***/ "./src/js/Game.js":
/*!************************!*\
  !*** ./src/js/Game.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Game; });\n/* harmony import */ var _Ball__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ball */ \"./src/js/Ball.js\");\n\n\nclass Game {\n  constructor() {\n    //document.body.addEventListener('click', event => this.handleClick(event))\n    this.initiateRandomBall()\n  }\n\n  //handleClick(event) {\n  //const { clientX, clientY } = event\n  //new Ball(clientX, clientY)\n  //}\n\n  getRandomTime() {\n    return 100 + Math.random() * 2000\n  }\n\n  initiateRandomBall() {\n    setTimeout(() => {\n      const x = Math.random() * window.screen.width\n      const y = window.screen.height\n      new _Ball__WEBPACK_IMPORTED_MODULE_0__[\"default\"](x, y)\n      this.initiateRandomBall()\n    }, 1000)\n  }\n}\n\n\n//# sourceURL=webpack:///./src/js/Game.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Game */ \"./src/js/Game.js\");\n\n\nnew _Game__WEBPACK_IMPORTED_MODULE_0__[\"default\"]()\n\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ })

/******/ });