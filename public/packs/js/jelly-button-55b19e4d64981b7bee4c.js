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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/jelly-button.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/jelly-button.js":
/*!**********************************************!*\
  !*** ./app/javascript/packs/jelly-button.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var LiquidButton =
/*#__PURE__*/
function () {
  function LiquidButton(optionsParam) {
    _classCallCheck(this, LiquidButton);

    var options = optionsParam || {};
    this.tension = options.tension || 0.4;
    this.width = options.width || 200;
    this.height = options.width || 50;
    this.margin = options.margin || 50;
    this.padding = options.padding || 17;
    this.hoverFactor = options.hoverFactor || -0.1;
    this.gap = options.gap || 5;
    this.debug = options.debug || false;
    this.forceFactor = options.forceFactor || 0.2;
    this.color1 = options.color1 || '#36DFE7';
    this.color2 = options.color2 || '#8F17E1';
    this.color3 = options.color3 || '#E509E6';
    this.textColor = options.textColor || '#FFFFFF';
    this.layers = [{
      points: [],
      viscosity: 0.5,
      mouseForce: 100,
      forceLimit: 2
    }, {
      points: [],
      viscosity: 0.8,
      mouseForce: 150,
      forceLimit: 3
    }];
    this.text = options.text || 'About';
    this.canvas = options.canvas || document.createElement('canvas');
    this.context = this.canvas.getContext('2d');
    this.wrapperElement = options.wrapperElement || document.body;

    if (!this.canvas.parentElement) {
      this.wrapperElement.append(this.canvas);
    }

    this.touches = [];
    this.noise = options.noise || 0;
    this.canvas.addEventListener('mousemove', this.mousemove);
    this.canvas.addEventListener('mouseout', this.mouseout);
    this.initOrigins();
    this.animate();
  }

  _createClass(LiquidButton, [{
    key: "distance",
    value: function distance(p1, p2) {
      return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
    }
  }, {
    key: "update",
    value: function update() {
      for (var layerIndex = 0; layerIndex < this.layers.length; layerIndex++) {
        var layer = this.layers[layerIndex];
        var points = layer.points;

        for (var pointIndex = 0; pointIndex < points.length; pointIndex++) {
          var point = points[pointIndex];
          var dx = point.ox - point.x + (Math.random() - 0.5) * this.noise;
          var dy = point.oy - point.y + (Math.random() - 0.5) * this.noise;
          var d = Math.sqrt(dx * dx + dy * dy);
          var f = d * this.forceFactor;
          point.vx += f * (dx / d || 0);
          point.vy += f * (dy / d || 0);

          for (var touchIndex = 0; touchIndex < this.touches.length; touchIndex++) {
            var touch = this.touches[touchIndex];
            var mouseForce = layer.mouseForce;

            if (touch.x > this.margin && touch.x < this.margin + this.width && touch.y > this.margin && touch.y < this.margin + this.height) {
              mouseForce *= -this.hoverFactor;
            }

            var mx = point.x - touch.x;
            var my = point.y - touch.y;
            var md = Math.sqrt(mx * mx + my * my);
            var mf = Math.max(-layer.forceLimit, Math.min(layer.forceLimit, mouseForce * touch.force / md));
            point.vx += mf * (mx / md || 0);
            point.vy += mf * (my / md || 0);
          }

          point.vx *= layer.viscosity;
          point.vy *= layer.viscosity;
          point.x += point.vx;
          point.y += point.vy;
        }

        for (var _pointIndex = 0; _pointIndex < points.length; _pointIndex++) {
          var prev = points[(_pointIndex + points.length - 1) % points.length];
          var _point = points[_pointIndex];
          var next = points[(_pointIndex + points.length + 1) % points.length];
          var dPrev = this.distance(_point, prev);
          var dNext = this.distance(_point, next);
          var line = {
            x: next.x - prev.x,
            y: next.y - prev.y
          };
          var dLine = Math.sqrt(line.x * line.x + line.y * line.y);
          _point.cPrev = {
            x: _point.x - line.x / dLine * dPrev * this.tension,
            y: _point.y - line.y / dLine * dPrev * this.tension
          };
          _point.cNext = {
            x: _point.x + line.x / dLine * dNext * this.tension,
            y: _point.y + line.y / dLine * dNext * this.tension
          };
        }
      }
    }
  }, {
    key: "animate",
    value: function animate() {
      var _this = this;

      this.raf(function () {
        _this.update();

        _this.draw();

        _this.animate();
      });
    }
  }, {
    key: "draw",
    value: function draw() {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

      for (var layerIndex = 0; layerIndex < this.layers.length; layerIndex++) {
        var layer = this.layers[layerIndex];

        if (layerIndex === 1) {
          if (this.touches.length > 0) {
            var gx = this.touches[0].x;
            var gy = this.touches[0].y;
            layer.color = this.context.createRadialGradient(gx, gy, this.height * 2, gx, gy, 0);
            layer.color.addColorStop(0, this.color2);
            layer.color.addColorStop(1, this.color3);
          } else {
            layer.color = this.color2;
          }
        } else {
          layer.color = this.color1;
        }

        var points = layer.points;
        this.context.fillStyle = layer.color;
        this.context.beginPath();
        this.context.moveTo(points[0].x, points[0].y);

        for (var pointIndex = 1; pointIndex < points.length; pointIndex += 1) {
          this.context.bezierCurveTo(points[(pointIndex + 0) % points.length].cNext.x, points[(pointIndex + 0) % points.length].cNext.y, points[(pointIndex + 1) % points.length].cPrev.x, points[(pointIndex + 1) % points.length].cPrev.y, points[(pointIndex + 1) % points.length].x, points[(pointIndex + 1) % points.length].y);
        }

        this.context.fill();
      }

      this.context.fillStyle = this.textColor;
      this.context.font = '100 ' + (this.height - this.padding * 2) + 'px sans-serif';
      this.context.textAlign = 'center';
      this.context.textBaseline = 'middle';
      this.context.fillText(this.text, this.canvas.width / 2, this.canvas.height / 2, this.width - this.padding * 2);

      if (this.debug) {
        this.drawDebug();
      }
    }
  }, {
    key: "drawDebug",
    value: function drawDebug() {
      this.context.fillStyle = 'rgba(255, 255, 255, 0.8)';
      this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

      for (var layerIndex = 0; layerIndex < this.layers.length; layerIndex++) {
        var layer = this.layers[layerIndex];
        var points = layer.points;

        for (var pointIndex = 0; pointIndex < points.length; pointIndex++) {
          if (layerIndex === 0) {
            this.context.fillStyle = this.color1;
          } else {
            this.context.fillStyle = this.color2;
          }

          var point = points[pointIndex];
          this.context.fillRect(point.x, point.y, 1, 1);
          this.context.fillStyle = '#000';
          this.context.fillRect(point.cPrev.x, point.cPrev.y, 1, 1);
          this.context.fillRect(point.cNext.x, point.cNext.y, 1, 1);
          this.context.strokeStyle = 'rgba(0, 0, 0, 0.33)';
          this.context.strokeWidth = 0.5;
          this.context.beginPath();
          this.context.moveTo(point.cPrev.x, point.cPrev.y);
          this.context.lineTo(point.cNext.x, point.cNext.y);
          this.context.stroke();
        }
      }
    }
  }, {
    key: "createPoint",
    value: function createPoint(x, y) {
      return {
        x: x,
        y: y,
        ox: x,
        oy: y,
        vx: 0,
        vy: 0
      };
    }
  }, {
    key: "initOrigins",
    value: function initOrigins() {
      this.canvas.width = this.width + this.margin * 2;
      this.canvas.height = this.height + this.margin * 2;

      for (var layerIndex = 0; layerIndex < this.layers.length; layerIndex++) {
        var layer = this.layers[layerIndex];
        var points = [];

        for (var x = ~~(this.height / 2); x < this.width - ~~(this.height / 2); x += this.gap) {
          points.push(this.createPoint(x + this.margin, this.margin));
        }

        for (var alpha = ~~(this.height * 1.25); alpha >= 0; alpha -= this.gap) {
          var angle = Math.PI / ~~(this.height * 1.25) * alpha;
          points.push(this.createPoint(Math.sin(angle) * this.height / 2 + this.margin + this.width - this.height / 2, Math.cos(angle) * this.height / 2 + this.margin + this.height / 2));
        }

        for (var _x = this.width - ~~(this.height / 2) - 1; _x >= ~~(this.height / 2); _x -= this.gap) {
          points.push(this.createPoint(_x + this.margin, this.margin + this.height));
        }

        for (var _alpha = 0; _alpha <= ~~(this.height * 1.25); _alpha += this.gap) {
          var _angle = Math.PI / ~~(this.height * 1.25) * _alpha;

          points.push(this.createPoint(this.height - Math.sin(_angle) * this.height / 2 + this.margin - this.height / 2, Math.cos(_angle) * this.height / 2 + this.margin + this.height / 2));
        }

        layer.points = points;
      }
    }
  }, {
    key: "mousemove",
    get: function get() {
      var _this2 = this;

      return function (e) {
        _this2.touches = [{
          x: e.offsetX,
          y: e.offsetY,
          z: 0,
          force: 1
        }];
      };
    }
  }, {
    key: "mouseout",
    get: function get() {
      var _this3 = this;

      return function (e) {
        _this3.touches = [];
      };
    }
  }, {
    key: "raf",
    get: function get() {
      return this.__raf || (this.__raf = (window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) {
        setTimeout(callback, 10);
      }).bind(window));
    }
  }]);

  return LiquidButton;
}();

var redraw = function redraw() {
  button.initOrigins();
};

var button = new LiquidButton();
var gui = new dat.GUI();
gui.add(button, "debug");
gui.add(button, "text");
gui.add(button, "gap", 1, 20, 1).onChange(redraw);
gui.add(button, "width", 50, 500, 1).onChange(redraw);
gui.add(button, "height", 10, 200, 1).onChange(redraw);
gui.add(button, "margin", 10, 100, 1).onChange(redraw);
gui.add(button, "padding", 0, 30, 1);
gui.add(button, "tension", 0, 1, 0.01);
gui.add(button, "forceFactor", 0, 1, 0.01);
gui.add(button, "hoverFactor", -1, 1, 0.01);
gui.addColor(button, "color1");
gui.addColor(button, "color2");
gui.addColor(button, "color3");
gui.addColor(button, "textColor");

for (var layerIndex = 0; layerIndex < button.layers.length; layerIndex++) {
  var layer = button.layers[layerIndex];
  var folder = gui.addFolder('Layer ' + (layerIndex + 1));
  folder.add(layer, "viscosity", 0, 1, 0.01);
  folder.add(layer, "mouseForce", 0, 2000, 1);
  folder.add(layer, "forceLimit", 0, 200, 0.1);
  folder.open();
}

if (window.innerWidth < 1000) {
  gui.close();
}

/***/ })

/******/ });
//# sourceMappingURL=jelly-button-55b19e4d64981b7bee4c.js.map