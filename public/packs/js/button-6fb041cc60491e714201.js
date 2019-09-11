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
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/button.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/button.js":
/*!****************************************!*\
  !*** ./app/javascript/packs/button.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function anim1(path) {
  path.style.transitionDelay = "".concat(Math.random() * 200, "ms");
  path.style.transformOrigin = "".concat(Math.random() * 50 + 25, "% 0%");
  path.style.transform = "scale(0) rotate(".concat(Math.random() * 100 - 50, "deg)");
  path.style.fill = '#777';
  path.style.stroke = '#555';
}

function reset1(path) {
  path.style.transitionDelay = 0;
  path.style.transformOrigin = "50%";
  path.style.transform = "scale(1) rotate(0)";
  path.style.fill = '#273439';
  path.style.stroke = '#273439';
}

function anim2(path, i) {
  path.style.transitionDuration = '1000ms';
  path.style.transitionDelay = "".concat(i * 50, "ms");
  path.style.transformOrigin = "50%";
  path.style.transform = "scale(0) translateX(".concat(100 + i * 20, "px)");
  path.style.fill = '#777';
  path.style.stroke = '#555';
}

function reset2(path) {
  path.style.transitionDuration = 0;
  path.style.transitionDelay = 0;
  path.style.transformOrigin = "50%";
  path.style.transform = "scale(1) translateX(0)";
  path.style.fill = '#273439';
  path.style.stroke = '#273439';
}

var anims = [anim1, anim2, anim1],
    resets = [reset1, reset2, reset1],
    buttons = Array.from(document.querySelectorAll('.button')),
    refresh = document.querySelector('.refresh');
buttons.forEach(function (button, i) {
  var submit = button.querySelector('.submit');
  var paths = button.querySelectorAll('path');
  submit.addEventListener('click', function () {
    paths.forEach(function (path, j) {
      anims[i](path, j);
    });
    submit.style.backgroundColor = 'transparent';
    submit.style.opacity = '0';
  });
});
refresh.addEventListener('click', function (e) {
  buttons.forEach(function (button, i) {
    var submit = button.querySelector('.submit');
    var paths = button.querySelectorAll('path');
    paths.forEach(function (path, j) {
      resets[i](path, j);
    });
    setTimeout(function () {
      submit.style.backgroundColor = '#273439';
      submit.style.opacity = '1';
    }, 500);
  });
});

/***/ })

/******/ });
//# sourceMappingURL=button-6fb041cc60491e714201.js.map