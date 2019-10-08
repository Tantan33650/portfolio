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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/cards.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/cards.js":
/*!***************************************!*\
  !*** ./app/javascript/packs/cards.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function atvImg() {
  var d = document,
      de = d.documentElement,
      bd = d.getElementsByTagName('body')[0],
      htm = d.getElementsByTagName('html')[0],
      win = window,
      imgs = d.querySelectorAll('.atvImg'),
      totalImgs = imgs.length,
      supportsTouch = 'ontouchstart' in win || navigator.msMaxTouchPoints;

  if (totalImgs <= 0) {
    return;
  }

  for (var l = 0; l < totalImgs; l++) {
    var thisImg = imgs[l],
        layerElems = thisImg.querySelectorAll('.atvImg-layer'),
        totalLayerElems = layerElems.length;

    if (totalLayerElems <= 0) {
      continue;
    }

    while (thisImg.firstChild) {
      thisImg.removeChild(thisImg.firstChild);
    }

    var containerHTML = d.createElement('div'),
        shineHTML = d.createElement('div'),
        shadowHTML = d.createElement('div'),
        layersHTML = d.createElement('div'),
        layers = [];
    thisImg.id = 'atvImg__' + l;
    containerHTML.className = 'atvImg-container';
    shineHTML.className = 'atvImg-shine';
    shadowHTML.className = 'atvImg-shadow';
    layersHTML.className = 'atvImg-layers';

    for (var i = 0; i < totalLayerElems; i++) {
      var layer = d.createElement('div'),
          imgSrc = layerElems[i].getAttribute('background-image');
      layer.className = 'atvImg-rendered-layer';
      layer.setAttribute('data-layer', i);
      layer.style.backgroundImage = imgSrc;
      layersHTML.appendChild(layer);
      layers.push(layer);
    }

    containerHTML.appendChild(shadowHTML);
    containerHTML.appendChild(layersHTML);
    containerHTML.appendChild(shineHTML);
    thisImg.appendChild(containerHTML);
    var w = thisImg.clientWidth || thisImg.offsetWidth || thisImg.scrollWidth;
    thisImg.style.transform = 'perspective(' + w * 3 + 'px)';

    if (supportsTouch) {
      win.preventScroll = false;

      (function (_thisImg, _layers, _totalLayers, _shine) {
        thisImg.addEventListener('touchmove', function (e) {
          if (win.preventScroll) {
            e.preventDefault();
          }

          processMovement(e, true, _thisImg, _layers, _totalLayers, _shine);
        });
        thisImg.addEventListener('touchstart', function (e) {
          win.preventScroll = true;
          processEnter(e, _thisImg);
        });
        thisImg.addEventListener('touchend', function (e) {
          win.preventScroll = false;
          processExit(e, _thisImg, _layers, _totalLayers, _shine);
        });
      })(thisImg, layers, totalLayerElems, shineHTML);
    } else {
      (function (_thisImg, _layers, _totalLayers, _shine) {
        thisImg.addEventListener('mousemove', function (e) {
          processMovement(e, false, _thisImg, _layers, _totalLayers, _shine);
        });
        thisImg.addEventListener('mouseenter', function (e) {
          processEnter(e, _thisImg);
        });
        thisImg.addEventListener('mouseleave', function (e) {
          processExit(e, _thisImg, _layers, _totalLayers, _shine);
        });
      })(thisImg, layers, totalLayerElems, shineHTML);
    }
  }

  function processMovement(e, touchEnabled, elem, layers, totalLayers, shine) {
    var bdst = bd.scrollTop || htm.scrollTop,
        bdsl = bd.scrollLeft,
        pageX = touchEnabled ? e.touches[0].pageX : e.pageX,
        pageY = touchEnabled ? e.touches[0].pageY : e.pageY,
        offsets = elem.getBoundingClientRect(),
        w = elem.clientWidth || elem.offsetWidth || elem.scrollWidth,
        h = elem.clientHeight || elem.offsetHeight || elem.scrollHeight,
        wMultiple = 320 / w,
        offsetX = 0.52 - (pageX - offsets.left - bdsl) / w,
        offsetY = 0.52 - (pageY - offsets.top - bdst) / h,
        dy = pageY - offsets.top - bdst - h / 2,
        dx = pageX - offsets.left - bdsl - w / 2,
        yRotate = (offsetX - dx) * (0.07 * wMultiple),
        xRotate = (dy - offsetY) * (0.1 * wMultiple),
        imgCSS = 'rotateX(' + xRotate + 'deg) rotateY(' + yRotate + 'deg)',
        arad = Math.atan2(dy, dx),
        angle = arad * 180 / Math.PI - 90;

    if (angle < 0) {
      angle = angle + 360;
    }

    if (elem.firstChild.className.indexOf(' over') != -1) {
      imgCSS += ' scale3d(1.07,1.07,1.07)';
    }

    elem.firstChild.style.transform = imgCSS;
    shine.style.background = 'linear-gradient(' + angle + 'deg, rgba(255,255,255,' + (pageY - offsets.top - bdst) / h * 0.4 + ') 0%,rgba(255,255,255,0) 80%)';
    shine.style.transform = 'translateX(' + offsetX * totalLayers - 0.1 + 'px) translateY(' + offsetY * totalLayers - 0.1 + 'px)';
    var revNum = totalLayers;

    for (var ly = 0; ly < totalLayers; ly++) {
      layers[ly].style.transform = 'translateX(' + offsetX * revNum * (ly * 2.5 / wMultiple) + 'px) translateY(' + offsetY * totalLayers * (ly * 2.5 / wMultiple) + 'px)';
      revNum--;
    }
  }

  function processEnter(e, elem) {
    elem.firstChild.className += ' over';
  }

  function processExit(e, elem, layers, totalLayers, shine) {
    var container = elem.firstChild;
    container.className = container.className.replace(' over', '');
    container.style.transform = '';
    shine.style.cssText = '';

    for (var ly = 0; ly < totalLayers; ly++) {
      layers[ly].style.transform = '';
    }
  }
}

atvImg();

/***/ })

/******/ });
//# sourceMappingURL=cards-e450f71e3bbfdefdbab6.js.map