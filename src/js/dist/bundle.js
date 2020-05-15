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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./css/style.css":
/*!***********************!*\
  !*** ./css/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./css/style.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./js/entry.js":
/*!*********************!*\
  !*** ./js/entry.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ "./css/style.css");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_0__);
// require('style!../css/front.css')
// require('style!../css/bootstrap.css')
// require('style!../css/responsive.css')
// require('style!../css/style.css')
// require('../css/style.css')




__webpack_require__(/*! ./vendors/jquery-migrate.min.js */ "./js/vendors/jquery-migrate.min.js");
__webpack_require__(/*! ./scripts-general.js */ "./js/scripts-general.js")

__webpack_require__(/*! ./homepage.js */ "./js/homepage.js");
__webpack_require__(/*! ./navBar.js */ "./js/navBar.js");
__webpack_require__(/*! ./vendors/bootstrap.min.js */ "./js/vendors/bootstrap.min.js")
__webpack_require__(/*! ./jquery.knob.js */ "./js/jquery.knob.js")
__webpack_require__(/*! ./smoothscroll.js */ "./js/smoothscroll.js")
__webpack_require__(/*! ./scrollReveal.js */ "./js/scrollReveal.js")
__webpack_require__(/*! ./zerif.js */ "./js/zerif.js")
// require('./wp-embed.min.js')


/***/ }),

/***/ "./js/homepage.js":
/*!************************!*\
  !*** ./js/homepage.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {jQuery(document).ready(function($) {

$('.portBox').hover(function(){
  $(this).find('.portSlider').css('top', '0px');
  $(this).find('.portGitLink').css('top', '245px');
}, function(){
  $(this).find('.portSlider').css('top', '285px');
  $(this).find('.portGitLink').css('top', '285px')
})





/*Interactivity to determine when an animated element in in view. In view elements trigger our animation*/


  //window and animation items
  var animation_elements = $.find('.animation-element');
  var web_window = $(window);
  var _document = $(document);



  //check to see if any animation containers are currently in view
  function check_if_in_view() {
    if ($(window).width() < 600) {
      $.each(animation_elements, function() {
        $(this).addClass('in-view');
      });
    }

    else {
      //get current window information
      var window_height = web_window.height();
      var window_top_position = web_window.scrollTop();
      var window_bottom_position = (window_top_position + window_height);

      //iterate through elements to see if its in view
      $.each(animation_elements, function() {

        //get the element sinformation
        var element = $(this);
        var element_height = $(element).outerHeight();
        var element_top_position = $(element).offset().top;
        var element_bottom_position = (element_top_position + element_height);

        //check to see if this current container is visible (its viewable if it exists between the viewable space of the viewport)
        if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
          element.addClass('in-view');
        } else {
          element.removeClass('in-view');
        }
      });
    }
  }

  //on or scroll, detect elements in view
  $(window).on('scroll resize', function() {
      check_if_in_view()
    })
    //trigger our scroll event on initial load
  $(window).trigger('scroll');




  $(document).on('scroll', function() {
    var window_height = web_window.height();
    var doc_height = _document.height();
    var window_top_position = web_window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

//Calculates viewport to document total ratio in percentage
  var winDocDec = (window_height / doc_height) * 100;
  var windDocStr = winDocDec.toString();
  var winDocRatio = windDocStr.concat('%')

  //Makes scroll block width percentage equal to percentage in view
  $('#littletest').css('width', winDocRatio);


  //Calculates distance scrolled from top to document total ratio in percentage
  var scrollTopDec = (window_top_position / doc_height) * 100;
  var scrollTopStr = scrollTopDec.toString();
  var scrollTopRatio = scrollTopStr.concat('%');

  //makes scrollblock distance from left equal to percentage of scrolled from top
  $('#littletest').css('left', scrollTopRatio);
  })










});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./js/jquery.knob.js":
/*!***************************!*\
  !*** ./js/jquery.knob.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/*!jQuery Knob*/
/**
 * Downward compatible, touchable dial
 *
 * Version: 1.2.0 (15/07/2012)
 * Requires: jQuery v1.7+
 *
 * Copyright (c) 2012 Anthony Terrien
 * Under MIT and GPL licenses:
 *  http://www.opensource.org/licenses/mit-license.php
 *  http://www.gnu.org/licenses/gpl.html
 *
 * Thanks to vor, eskimoblood, spiffistan, FabrizioC
 */
(function($) {

    /**
     * Kontrol library
     */
    "use strict";

    /**
     * Definition of globals and core
     */
    var k = {}, // kontrol
        max = Math.max,
        min = Math.min;

    k.c = {};
    k.c.d = $(document);
    k.c.t = function (e) {
        return e.originalEvent.touches.length - 1;
    };

    /**
     * Kontrol Object
     *
     * Definition of an abstract UI control
     *
     * Each concrete component must call this one.
     * <code>
     * k.o.call(this);
     * </code>
     */
    k.o = function () {
        var s = this;

        this.o = null; // array of options
        this.$ = null; // jQuery wrapped element
        this.i = null; // mixed HTMLInputElement or array of HTMLInputElement
        this.g = null; // deprecated 2D graphics context for 'pre-rendering'
        this.v = null; // value ; mixed array or integer
        this.cv = null; // change value ; not commited value
        this.x = 0; // canvas x position
        this.y = 0; // canvas y position
        this.w = 0; // canvas width
        this.h = 0; // canvas height
        this.$c = null; // jQuery canvas element
        this.c = null; // rendered canvas context
        this.t = 0; // touches index
        this.isInit = false;
        this.fgColor = null; // main color
        this.pColor = null; // previous color
        this.dH = null; // draw hook
        this.cH = null; // change hook
        this.eH = null; // cancel hook
        this.rH = null; // release hook
        this.scale = 1; // scale factor
        this.relative = false;
        this.relativeWidth = false;
        this.relativeHeight = false;
        this.$div = null; // component div

        this.run = function () {
            var cf = function (e, conf) {
                var k;
                for (k in conf) {
                    s.o[k] = conf[k];
                }
                s.init();
                s._configure()
                 ._draw();
            };

            if(this.$.data('kontroled')) return;
            this.$.data('kontroled', true);

            this.extend();
            this.o = $.extend(
                {
                    // Config
                    min : this.$.data('min') || 0,
                    max : this.$.data('max') || 100,
                    stopper : true,
                    readOnly : this.$.data('readonly') || (this.$.attr('readonly') == 'readonly'),

                    // UI
                    cursor : (this.$.data('cursor') === true && 30)
                                || this.$.data('cursor')
                                || 0,
                    thickness : (
                                this.$.data('thickness')
                                && Math.max(Math.min(this.$.data('thickness'), 1), 0.01)
                                )
                                || 0.35,
                    lineCap : this.$.data('linecap') || 'butt',
                    width : this.$.data('width') || 200,
                    height : this.$.data('height') || 200,
                    displayInput : this.$.data('displayinput') == null || this.$.data('displayinput'),
                    displayPrevious : this.$.data('displayprevious'),
                    fgColor : this.$.data('fgcolor') || '#87CEEB',
                    inputColor: this.$.data('inputcolor'),
                    font: this.$.data('font') || 'Arial',
                    fontWeight: this.$.data('font-weight') || 'bold',
                    inline : false,
                    step : this.$.data('step') || 1,

                    // Hooks
                    draw : null, // function () {}
                    change : null, // function (value) {}
                    cancel : null, // function () {}
                    release : null, // function (value) {}
                    error : null // function () {}
                }, this.o
            );

            // finalize options
            if(!this.o.inputColor) {
                this.o.inputColor = this.o.fgColor;
            }

            // routing value
            if(this.$.is('fieldset')) {

                // fieldset = array of integer
                this.v = {};
                this.i = this.$.find('input')
                this.i.each(function(k) {
                    var $this = $(this);
                    s.i[k] = $this;
                    s.v[k] = $this.val();

                    $this.bind(
                        'change keyup'
                        , function () {
                            var val = {};
                            val[k] = $this.val();
                            s.val(val);
                        }
                    );
                });
                this.$.find('legend').remove();

            } else {

                // input = integer
                this.i = this.$;
                this.v = this.$.val();
                (this.v == '') && (this.v = this.o.min);

                this.$.bind(
                    'change keyup'
                    , function () {
                        s.val(s._validate(s.$.val()));
                    }
                );

            }

            (!this.o.displayInput) && this.$.hide();

            // adds needed DOM elements (canvas, div)
            this.$c = $(document.createElement('canvas'));
            if (typeof G_vmlCanvasManager !== 'undefined') {
              G_vmlCanvasManager.initElement(this.$c[0]);
            }
            this.c = this.$c[0].getContext ? this.$c[0].getContext('2d') : null;
            if (!this.c) {
                this.o.error && this.o.error();
                return;
            }

            // hdpi support
            this.scale = (window.devicePixelRatio || 1) /
                        (
                            this.c.webkitBackingStorePixelRatio ||
                            this.c.mozBackingStorePixelRatio ||
                            this.c.msBackingStorePixelRatio ||
                            this.c.oBackingStorePixelRatio ||
                            this.c.backingStorePixelRatio || 1
                        );

            // detects relative width / height
            this.relativeWidth = ((this.o.width % 1 !== 0)
                                    && this.o.width.indexOf('%'));
            this.relativeHeight = ((this.o.height % 1 !== 0)
                                    && this.o.height.indexOf('%'));

            this.relative = (this.relativeWidth || this.relativeHeight);

            // wraps all elements in a div
            this.$div = $('<div style="'
                        + (this.o.inline ? 'display:inline;' : '')
                        + '"></div>');

            this.$.wrap(this.$div).before(this.$c);
            this.$div = this.$.parent();

            // computes size and carves the component
            this._carve();

            // prepares props for transaction
            if (this.v instanceof Object) {
                this.cv = {};
                this.copy(this.v, this.cv);
            } else {
                this.cv = this.v;
            }

            // binds configure event
            this.$
                .bind("configure", cf)
                .parent()
                .bind("configure", cf);

            // finalize init
            this._listen()
                ._configure()
                ._xy()
                .init();

            this.isInit = true;

            // the most important !
            this._draw();

            return this;
        };

        this._carve = function() {
            if(this.relative) {
                var w = this.relativeWidth
                            ? this.$div.parent().width()
                                * parseInt(this.o.width) / 100
                            : this.$div.parent().width(),
                    h = this.relativeHeight
                            ? this.$div.parent().height()
                                * parseInt(this.o.height) / 100
                            : this.$div.parent().height();

                // apply relative
                this.w = this.h = Math.min(w, h);
            } else {
                this.w = this.o.width;
                this.h = this.o.height;
            }

            // finalize div
            this.$div.css({
                'width': this.w + 'px',
                'height': this.h + 'px'
            });

            // finalize canvas with computed width
            this.$c.attr({
                width: this.w,
                height: this.h
            });

            // scaling
            if (this.scale !== 1) {
                this.$c[0].width = this.$c[0].width * this.scale;
                this.$c[0].height = this.$c[0].height * this.scale;
                this.$c.width(this.w);
                this.$c.height(this.h);
            }

            return this;
        }

        this._draw = function () {

            // canvas pre-rendering
            var d = true;

            s.g = s.c;

            s.clear();

            s.dH
            && (d = s.dH());

            (d !== false) && s.draw();

        };

        this._touch = function (e) {

            var touchMove = function (e) {

                var v = s.xy2val(
                            e.originalEvent.touches[s.t].pageX,
                            e.originalEvent.touches[s.t].pageY
                            );
                s.change(s._validate(v));
                s._draw();
            };

            // get touches index
            this.t = k.c.t(e);

            // First touch
            touchMove(e);

            // Touch events listeners
            k.c.d
                .bind("touchmove.k", touchMove)
                .bind(
                    "touchend.k"
                    , function () {
                        k.c.d.unbind('touchmove.k touchend.k');

                        if (
                            s.rH
                            && (s.rH(s.cv) === false)
                        ) return;

                        s.val(s.cv);
                    }
                );

            return this;
        };

        this._mouse = function (e) {

            var mouseMove = function (e) {
                var v = s.xy2val(e.pageX, e.pageY);
                s.change(s._validate(v));
                s._draw();
            };

            // First click
            mouseMove(e);

            // Mouse events listeners
            k.c.d
                .bind("mousemove.k", mouseMove)
                .bind(
                    // Escape key cancel current change
                    "keyup.k"
                    , function (e) {
                        if (e.keyCode === 27) {
                            k.c.d.unbind("mouseup.k mousemove.k keyup.k");

                            if (
                                s.eH
                                && (s.eH() === false)
                            ) return;

                            s.cancel();
                        }
                    }
                )
                .bind(
                    "mouseup.k"
                    , function (e) {
                        k.c.d.unbind('mousemove.k mouseup.k keyup.k');

                        if (
                            s.rH
                            && (s.rH(s.cv) === false)
                        ) return;

                        s.val(s.cv);
                    }
                );

            return this;
        };

        this._xy = function () {
            var o = this.$c.offset();
            this.x = o.left;
            this.y = o.top;
            return this;
        };

        this._listen = function () {

            if (!this.o.readOnly) {
                this.$c
                    .bind(
                        "mousedown"
                        , function (e) {
                            e.preventDefault();
                            s._xy()._mouse(e);
                         }
                    )
                    .bind(
                        "touchstart"
                        , function (e) {
                            e.preventDefault();
                            s._xy()._touch(e);
                         }
                    );

                this.listen();
            } else {
                this.$.attr('readonly', 'readonly');
            }

            if(this.relative) {
                $(window).resize(function() {
                    s._carve()
                     .init();
                    s._draw();
                });
            }

            return this;
        };

        this._configure = function () {

            // Hooks
            if (this.o.draw) this.dH = this.o.draw;
            if (this.o.change) this.cH = this.o.change;
            if (this.o.cancel) this.eH = this.o.cancel;
            if (this.o.release) this.rH = this.o.release;

            if (this.o.displayPrevious) {
                this.pColor = this.h2rgba(this.o.fgColor, "0.4");
                this.fgColor = this.h2rgba(this.o.fgColor, "0.6");
            } else {
                this.fgColor = this.o.fgColor;
            }

            return this;
        };

        this._clear = function () {
            this.$c[0].width = this.$c[0].width;
        };

        this._validate = function(v) {
            return (~~ (((v < 0) ? -0.5 : 0.5) + (v/this.o.step))) * this.o.step;
        };

        // Abstract methods
        this.listen = function () {}; // on start, one time
        this.extend = function () {}; // each time configure triggered
        this.init = function () {}; // each time configure triggered
        this.change = function (v) {}; // on change
        this.val = function (v) {}; // on release
        this.xy2val = function (x, y) {}; //
        this.draw = function () {}; // on change / on release
        this.clear = function () { this._clear(); };

        // Utils
        this.h2rgba = function (h, a) {
            var rgb;
            h = h.substring(1,7)
            rgb = [parseInt(h.substring(0,2),16)
                   ,parseInt(h.substring(2,4),16)
                   ,parseInt(h.substring(4,6),16)];
            return "rgba(" + rgb[0] + "," + rgb[1] + "," + rgb[2] + "," + a + ")";
        };

        this.copy = function (f, t) {
            for (var i in f) { t[i] = f[i]; }
        };
    };


    /**
     * k.Dial
     */
    k.Dial = function () {
        k.o.call(this);

        this.startAngle = null;
        this.xy = null;
        this.radius = null;
        this.lineWidth = null;
        this.cursorExt = null;
        this.w2 = null;
        this.PI2 = 2*Math.PI;

        this.extend = function () {
            this.o = $.extend(
                {
                    bgColor : this.$.data('bgcolor') || '#EEEEEE',
                    angleOffset : this.$.data('angleoffset') || 0,
                    angleArc : this.$.data('anglearc') || 360,
                    inline : true
                }, this.o
            );
        };

        this.val = function (v) {
            if (null != v) {
                this.cv = this.o.stopper ? max(min(v, this.o.max), this.o.min) : v;
		this.v = this.cv;
                this.$.val(this.v);
                this._draw();
            } else {
                return this.v;
            }
        };

        this.xy2val = function (x, y) {
            var a, ret;

            a = Math.atan2(
                        x - (this.x + this.w2)
                        , - (y - this.y - this.w2)
                    ) - this.angleOffset;

            if(this.angleArc != this.PI2 && (a < 0) && (a > -0.5)) {
                // if isset angleArc option, set to min if .5 under min
                a = 0;
            } else if (a < 0) {
                a += this.PI2;
            }

            ret = ~~ (0.5 + (a * (this.o.max - this.o.min) / this.angleArc))
                    + this.o.min;

            this.o.stopper
            && (ret = max(min(ret, this.o.max), this.o.min));

            return ret;
        };

        this.listen = function () {
            // bind MouseWheel
            var s = this, mwTimerStop, mwTimerRelease,
                mw = function (e) {
                            e.preventDefault();

                            var ori = e.originalEvent
                                ,deltaX = ori.detail || ori.wheelDeltaX
                                ,deltaY = ori.detail || ori.wheelDeltaY
                                ,v = s._validate(s.$.val())
                                    + (deltaX>0 || deltaY>0 ? s.o.step : deltaX<0 || deltaY<0 ? -s.o.step : 0);

                            v = max(min(v, s.o.max), s.o.min);
                            
                            s.val(v);

                            if(s.rH) {
                                // Handle mousewheel stop
                                clearTimeout(mwTimerStop);
                                mwTimerStop = setTimeout(function() {
                                    s.rH(v);
                                    mwTimerStop = null;
                                }, 100);

                                // Handle mousewheel releases
                                if(!mwTimerRelease) {
                                    mwTimerRelease = setTimeout(function() {
                                        if(mwTimerStop) s.rH(v);
                                        mwTimerRelease = null;
                                    }, 200);
                                }
                            }
                        }
                , kval, to, m = 1, kv = {37:-s.o.step, 38:s.o.step, 39:s.o.step, 40:-s.o.step};

            this.$
                .bind(
                    "keydown"
                    ,function (e) {
                        var kc = e.keyCode;

                        // numpad support
                        if(kc >= 96 && kc <= 105) {
                            kc = e.keyCode = kc - 48;
                        }

                        kval = parseInt(String.fromCharCode(kc));

                        if (isNaN(kval)) {

                            (kc !== 13)         // enter
                            && (kc !== 8)       // bs
                            && (kc !== 9)       // tab
                            && (kc !== 189)     // -
                            && e.preventDefault();

                            // arrows
                            if ($.inArray(kc,[37,38,39,40]) > -1) {
                                e.preventDefault();

                                var v = parseInt(s.$.val()) + kv[kc] * m;

                                s.o.stopper
                                && (v = max(min(v, s.o.max), s.o.min));

                                s.change(v);
                                s._draw();

                                // long time keydown speed-up
                                to = window.setTimeout(
                                    function () { m*=2; }
                                    ,30
                                );
                            }
                        }
                    }
                )
                .bind(
                    "keyup"
                    ,function (e) {
                        if (isNaN(kval)) {
                            if (to) {
                                window.clearTimeout(to);
                                to = null;
                                m = 1;
                                s.val(s.$.val());
                            }
                        } else {
                            // kval postcond
                            (s.$.val() > s.o.max && s.$.val(s.o.max))
                            || (s.$.val() < s.o.min && s.$.val(s.o.min));
                        }

                    }
                );

            this.$c.bind("mousewheel DOMMouseScroll", mw);
            this.$.bind("mousewheel DOMMouseScroll", mw)
        };

        this.init = function () {

            if (
                this.v < this.o.min
                || this.v > this.o.max
            ) this.v = this.o.min;

            this.$.val(this.v);
            this.w2 = this.w / 2;
            this.cursorExt = this.o.cursor / 100;
            this.xy = this.w2 * this.scale;
            this.lineWidth = this.xy * this.o.thickness;
            this.lineCap = this.o.lineCap;
            this.radius = this.xy - this.lineWidth / 2;

            this.o.angleOffset
            && (this.o.angleOffset = isNaN(this.o.angleOffset) ? 0 : this.o.angleOffset);

            this.o.angleArc
            && (this.o.angleArc = isNaN(this.o.angleArc) ? this.PI2 : this.o.angleArc);

            // deg to rad
            this.angleOffset = this.o.angleOffset * Math.PI / 180;
            this.angleArc = this.o.angleArc * Math.PI / 180;

            // compute start and end angles
            this.startAngle = 1.5 * Math.PI + this.angleOffset;
            this.endAngle = 1.5 * Math.PI + this.angleOffset + this.angleArc;

            var s = max(
                            String(Math.abs(this.o.max)).length
                            , String(Math.abs(this.o.min)).length
                            , 2
                            ) + 2;

            this.o.displayInput
                && this.i.css({
                        'width' : ((this.w / 2 + 4) >> 0) + 'px'
                        ,'height' : ((this.w / 3) >> 0) + 'px'
                        ,'position' : 'absolute'
                        ,'vertical-align' : 'middle'
                        ,'margin-top' : ((this.w / 3) >> 0) + 'px'
                        ,'margin-left' : '-' + ((this.w * 3 / 4 + 2) >> 0) + 'px'
                        ,'border' : 0
                        ,'background' : 'none'
                        ,'font' : this.o.fontWeight + ' ' + ((this.w / s) >> 0) + 'px ' + this.o.font
                        ,'text-align' : 'center'
                        ,'color' : this.o.inputColor || this.o.fgColor
                        ,'padding' : '0px'
                        ,'-webkit-appearance': 'none'
                        })
                || this.i.css({
                        'width' : '0px'
                        ,'visibility' : 'hidden'
                        });
        };

        this.change = function (v) {
            if (v == this.cv) return;
            this.cv = v;
            if (
                this.cH
                && (this.cH(v) === false)
            ) return;
        };

        this.angle = function (v) {
            return (v - this.o.min) * this.angleArc / (this.o.max - this.o.min);
        };

        this.draw = function () {

            var c = this.g,                 // context
                a = this.angle(this.cv)    // Angle
                , sat = this.startAngle     // Start angle
                , eat = sat + a             // End angle
                , sa, ea                    // Previous angles
                , r = 1;

            c.lineWidth = this.lineWidth;

            c.lineCap = this.lineCap;

            this.o.cursor
                && (sat = eat - this.cursorExt)
                && (eat = eat + this.cursorExt);

            c.beginPath();
                c.strokeStyle = this.o.bgColor;
                c.arc(this.xy, this.xy, this.radius, this.endAngle - 0.00001, this.startAngle + 0.00001, true);
            c.stroke();

            if (this.o.displayPrevious) {
                ea = this.startAngle + this.angle(this.v);
                sa = this.startAngle;
                this.o.cursor
                    && (sa = ea - this.cursorExt)
                    && (ea = ea + this.cursorExt);

                c.beginPath();
                    c.strokeStyle = this.pColor;
                    c.arc(this.xy, this.xy, this.radius, sa - 0.00001, ea + 0.00001, false);
                c.stroke();
                r = (this.cv == this.v);
            }

            c.beginPath();
                c.strokeStyle = r ? this.o.fgColor : this.fgColor ;
                c.arc(this.xy, this.xy, this.radius, sat - 0.00001, eat + 0.00001, false);
            c.stroke();
        };

        this.cancel = function () {
            this.val(this.v);
        };
    };

    $.fn.dial = $.fn.knob = function (o) {
        return this.each(
            function () {
                var d = new k.Dial();
                d.o = o;
                d.$ = $(this);
                d.run();
            }
        ).parent();
    };

})(jQuery);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./js/navBar.js":
/*!**********************!*\
  !*** ./js/navBar.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {jQuery(document).ready(function($) {

  var $web_window = $(window);
  var window_height = $web_window.height();
  var $document = $(document);
  var $nav = $('nav');
  var $navLi = $('nav li');
  var $scrollBlock = $('#scrollBlock');
  var $section = $('.navSection');
  var $li = $('li');
  var $section2 = $('.navSection:nth-of-type(2)');
  var $section1 = $('.navSection:nth-of-type(1)');


  var navHeight = $nav.height()

  //finds what width in percentage the li's and scrollblock will be set to
  var liLength = $('nav li').length;
  var liWidth = 100 / liLength
  var liWidthPercent = liWidth.toString().concat('%');
  $navLi.width(liWidthPercent);
  $scrollBlock.width(liWidthPercent);

  var sectLength = $section.length;

  //Function sets left position for scrollblock based on how far page is scrolled
  function scrollNav(){

     var window_top_position = $web_window.scrollTop();
     var window_bottom_position = (window_top_position + window_height);
     var $s1Offset = $section1.offset().top - navHeight;
     var $s2Offset = $section1.offset().top - navHeight;





     // If the window top position is above the second section, scrollblock will be pushed left the percent scrolled between top of page and top of 2nd section * the width of the li
    if ($section2.offset().top - navHeight > window_top_position){
      $nav.removeClass('navOpaque');
      $nav.addClass('navTranslucent')
      var firstSectOffset = $section2.offset().top - navHeight

      var wtfoRatio = (window_top_position - $s1Offset) / (firstSectOffset- $s1Offset)

      var scrollBlockPush = (wtfoRatio * liWidth).toString().concat('%');



      $scrollBlock.css('left', scrollBlockPush);
    }

    //Calculates same as above, but if the top position is below the 2nd section
    else {
      $nav.removeClass('navTranslucent')
      $nav.addClass('navOpaque')
      for (var i = 3; i <= (sectLength + 1); i++){
        //If we reached the last section, automatically just put the scrollblock all the way to the right
        if (i == (sectLength + 1)){
          $scrollBlock.css('left', '75%');

        }
        else if ($('.navSection:nth-of-type(' + i + ')').offset().top - navHeight > window_top_position){
          var firstSectOffset = $('.navSection:nth-of-type(' + (i - 1) + ')').offset().top - navHeight
          var secSectOffset = $('.navSection:nth-of-type(' + i  + ')').offset().top - navHeight

          var wtfoRatio = (window_top_position - firstSectOffset) / (secSectOffset - firstSectOffset)
          var scrollBlockPush = ((wtfoRatio * liWidth) + (25 * (i - 2))).toString().concat('%');

          $scrollBlock.css('left', scrollBlockPush);
          break
        }
      }
    }

    if ( 150 > window_top_position){
      // $scrollBlock.css('left', '0%');
      $nav.removeClass('navOpaque');
      $nav.removeClass('navTranslucent');


    }

   }



//Executs when page loads
  scrollNav();
  $web_window.on('resize', scrollNav)
  $document.on('scroll', scrollNav);

//Function for clicking links to smooth scroll to that section
  $li.on('click', function(){
    var index = $(this).index()
    var scrollTo = $('.navSection:nth-of-type(' + (index + 1) + ')').offset().top - navHeight
    $('html, body').animate({
          scrollTop: scrollTo
        }, 1000);
  })


});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./js/scripts-general.js":
/*!*******************************!*\
  !*** ./js/scripts-general.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {var pirateFormsObject = {"errors":""};


jQuery(document).ready(function() {

    var session_var = pirateFormsObject.errors;

    if( (typeof session_var != 'undefined') && (session_var != '') && (typeof jQuery('#contact') != 'undefined') && (typeof jQuery('#contact').offset() != 'undefined') ) {

        jQuery('html, body').animate({
            scrollTop: jQuery('#contact').offset().top
        }, 'slow');
    }

	if( typeof jQuery('.pirate_forms_three_inputs').val() != 'undefined' ) {
		 jQuery('.pirate_forms ').each(function(){
			  jQuery(this).find('.pirate_forms_three_inputs').wrapAll('<div class="pirate_forms_three_inputs_wrap">');
		  })
	}
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./js/scrollReveal.js":
/*!****************************!*\
  !*** ./js/scrollReveal.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
                       _ _ _____                      _   _
                      | | |  __ \                    | | (_)
    ___  ___ _ __ ___ | | | |__) |_____   _____  __ _| |  _ ___
   / __|/ __| '__/ _ \| | |  _  // _ \ \ / / _ \/ _` | | | / __|
   \__ \ (__| | | (_) | | | | \ \  __/\ V /  __/ (_| | |_| \__ \
   |___/\___|_|  \___/|_|_|_|  \_\___| \_/ \___|\__,_|_(_) |___/
                                                        _/ |
                                                       |__/

    "Declarative on-scroll reveal animations."

/*=============================================================================

    scrollReveal.js is inspired by cbpScroller.js, © 2014, Codrops.

    Licensed under the MIT license.
    http://www.opensource.org/licenses/mit-license.php

    scrollReveal.js, © 2014 https://twitter.com/julianlloyd

=============================================================================*/

;(function (window) {

  'use strict';

  var docElem = window.document.documentElement;

  function getViewportH () {
    var client = docElem['clientHeight'],
      inner = window['innerHeight'];

    return (client < inner) ? inner : client;
  }

  function getOffset (el) {
    var offsetTop = 0,
        offsetLeft = 0;

    do {
      if (!isNaN(el.offsetTop)) {
        offsetTop += el.offsetTop;
      }
      if (!isNaN(el.offsetLeft)) {
        offsetLeft += el.offsetLeft;
      }
    } while (el = el.offsetParent)

    return {
      top: offsetTop,
      left: offsetLeft
    }
  }

  function isElementInViewport (el, h) {
    var scrolled = window.pageYOffset,
        viewed = scrolled + getViewportH(),
        elH = el.offsetHeight,
        elTop = getOffset(el).top,
        elBottom = elTop + elH,
        h = h || 0;

    return (elTop + elH * h) <= viewed && (elBottom) >= scrolled;
  }

  function extend (a, b) {
    for (var key in b) {
      if (b.hasOwnProperty(key)) {
        a[key] = b[key];
      }
    }
    return a;
  }


  function scrollReveal(options) {
      this.options = extend(this.defaults, options);
      this._init();
  }



  scrollReveal.prototype = {
    defaults: {
      axis: 'y',
      distance: '60px',
      duration: '0.55s',
      delay: '0.15s',

  //  if 0, the element is considered in the viewport as soon as it enters
  //  if 1, the element is considered in the viewport when it's fully visible
      viewportFactor: 0.33
    },

    /*=============================================================================*/

    _init: function () {

      var self = this;

      this.elems = Array.prototype.slice.call(docElem.querySelectorAll('[data-scrollReveal]'));
      this.scrolled = false;

  //  Initialize all scrollreveals, triggering all
  //  reveals on visible elements.
      this.elems.forEach(function (el, i) {
        self.animate(el);
      });

      var scrollHandler = function () {
        if (!self.scrolled) {
          self.scrolled = true;
          setTimeout(function () {
            self._scrollPage();
          }, 60);
        }
      };

      var resizeHandler = function () {
        function delayed() {
          self._scrollPage();
          self.resizeTimeout = null;
        }
        if (self.resizeTimeout) {
          clearTimeout(self.resizeTimeout);
        }
        self.resizeTimeout = setTimeout(delayed, 200);
      };

      window.addEventListener('scroll', scrollHandler, false);
      window.addEventListener('resize', resizeHandler, false);
    },

    /*=============================================================================*/

    _scrollPage: function () {
        var self = this;

        this.elems.forEach(function (el, i) {
            if (isElementInViewport(el, self.options.viewportFactor)) {
                self.animate(el);
            }
        });
        this.scrolled = false;
    },

    /*=============================================================================*/

    parseLanguage: function (el) {

  //  Splits on a sequence of one or more commas or spaces.
      var words = el.getAttribute('data-scrollreveal').split(/[, ]+/),
          enterFrom,
          parsed = {};

      function filter (words) {
        var ret = [],

            blacklist = [
              "from",
              "the",
              "and",
              "then",
              "but"
            ];

        words.forEach(function (word, i) {
          if (blacklist.indexOf(word) > -1) {
            return;
          }
          ret.push(word);
        });

        return ret;
      }

      words = filter(words);

      words.forEach(function (word, i) {

        switch (word) {
          case "enter":
            enterFrom = words[i + 1];

            if (enterFrom == "top" || enterFrom == "bottom") {
              parsed.axis = "y";
            }

            if (enterFrom == "left" || enterFrom == "right") {
              parsed.axis = "x";
            }

            return;

          case "after":
            parsed.delay = words[i + 1];
            return;

          case "wait":
            parsed.delay = words[i + 1];
            return;

          case "move":
            parsed.distance = words[i + 1];
            return;

          case "over":
            parsed.duration = words[i + 1];
            return;

          case "trigger":
            parsed.eventName = words[i + 1];
            return;

          default:
        //  Unrecognizable words; do nothing.
            return;
        }
      });

  //  After all values are parsed, let’s make sure our our
  //  pixel distance is negative for top and left entrances.
  //
  //  ie. "move 25px from top" starts at 'top: -25px' in CSS.

      if (enterFrom == "top" || enterFrom == "left") {

        if (!typeof parsed.distance == "undefined") {
          parsed.distance = "-" + parsed.distance;
        }

        else {
          parsed.distance = "-" + this.options.distance;
        }

      }

      return parsed;
    },

    /*=============================================================================*/

    genCSS: function (el) {
      var parsed = this.parseLanguage(el);

      var dist   = parsed.distance || this.options.distance,
          dur    = parsed.duration || this.options.duration,
          delay  = parsed.delay    || this.options.delay,
          axis   = parsed.axis     || this.options.axis;

      var transition = "-webkit-transition: all " + dur + " ease " + delay + ";" +
                          "-moz-transition: all " + dur + " ease " + delay + ";" +
                            "-o-transition: all " + dur + " ease " + delay + ";" +
                           "-ms-transition: all " + dur + " ease " + delay + ";" +
                               "transition: all " + dur + " ease " + delay + ";";

      var initial = "-webkit-transform: translate" + axis + "(" + dist + ");" +
                       "-moz-transform: translate" + axis + "(" + dist + ");" +
                        "-ms-transform: translate" + axis + "(" + dist + ");" +
                            "transform: translate" + axis + "(" + dist + ");" +
                              "opacity: 0;";

      var target = "-webkit-transform: translate" + axis + "(0);" +
                      "-moz-transform: translate" + axis + "(0);" +
                       "-ms-transform: translate" + axis + "(0);" +
                           "transform: translate" + axis + "(0);" +
                             "opacity: 1;";
      return {
        transition: transition,
        initial: initial,
        target: target,
        totalDuration: ((parseFloat(dur) + parseFloat(delay)) * 1000)
      };
    },

    /*=============================================================================*/

    animate: function (el) {
      var css = this.genCSS(el);

      if (!el.getAttribute('data-sr-init')) {
        el.setAttribute('style', css.initial);
        el.setAttribute('data-sr-init', true);
      }

      if (el.getAttribute('data-sr-complete')) {
        return;
      }

      if (isElementInViewport(el, this.options.viewportFactor)) {
        el.setAttribute('style', css.target + css.transition);

        setTimeout(function () {
          el.removeAttribute('style');
          el.setAttribute('data-sr-complete', true);
        }, css.totalDuration);
      }

    }
  }; // end scrollReveal.prototype

  document.addEventListener("DOMContentLoaded", function (evt) {
    window.scrollReveal = new scrollReveal();
  });

})(window);

/***/ }),

/***/ "./js/smoothscroll.js":
/*!****************************!*\
  !*** ./js/smoothscroll.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

// SmoothScroll v0.9.9
// Licensed under the terms of the MIT license.

// People involved
// - Balazs Galambosi: maintainer (CHANGELOG.txt)
// - Patrick Brunner (patrickb1991@gmail.com)
// - Michael Herf: ssc_pulse Algorithm

function ssc_init() {
    if (!document.body) return;
    var e = document.body;
    var t = document.documentElement;
    var n = window.innerHeight;
    var r = e.scrollHeight;
    ssc_root = document.compatMode.indexOf("CSS") >= 0 ? t : e;
    ssc_activeElement = e;
    ssc_initdone = true;
    if (top != self) {
        ssc_frame = true
    } else if (r > n && (e.offsetHeight <= n || t.offsetHeight <= n)) {
        ssc_root.style.height = "auto";
        if (ssc_root.offsetHeight <= n) {
            var i = document.createElement("div");
            i.style.clear = "both";
            e.appendChild(i)
        }
    }
    if (!ssc_fixedback) {
        e.style.backgroundAttachment = "scroll";
        t.style.backgroundAttachment = "scroll"
    }
    if (ssc_keyboardsupport) {
        ssc_addEvent("keydown", ssc_keydown)
    }
}

function ssc_scrollArray(e, t, n, r) {
    r || (r = 1e3);
    ssc_directionCheck(t, n);
    ssc_que.push({
        x: t,
        y: n,
        lastX: t < 0 ? .99 : -.99,
        lastY: n < 0 ? .99 : -.99,
        start: +(new Date)
    });
    if (ssc_pending) {
        return
    }
    var i = function () {
        var s = +(new Date);
        var o = 0;
        var u = 0;
        for (var a = 0; a < ssc_que.length; a++) {
            var f = ssc_que[a];
            var l = s - f.start;
            var c = l >= ssc_animtime;
            var h = c ? 1 : l / ssc_animtime;
            if (ssc_pulseAlgorithm) {
                h = ssc_pulse(h)
            }
            var p = f.x * h - f.lastX >> 0;
            var d = f.y * h - f.lastY >> 0;
            o += p;
            u += d;
            f.lastX += p;
            f.lastY += d;
            if (c) {
                ssc_que.splice(a, 1);
                a--
            }
        }
        if (t) {
            var v = e.scrollLeft;
            e.scrollLeft += o;
            if (o && e.scrollLeft === v) {
                t = 0
            }
        }
        if (n) {
            var m = e.scrollTop;
            e.scrollTop += u;
            if (u && e.scrollTop === m) {
                n = 0
            }
        }
        if (!t && !n) {
            ssc_que = []
        }
        if (ssc_que.length) {
            setTimeout(i, r / ssc_framerate + 1)
        } else {
            ssc_pending = false
        }
    };
    setTimeout(i, 0);
    ssc_pending = true
}

function ssc_wheel(e) {
    if (!ssc_initdone) {
        ssc_init()
    }
    var t = e.target;
    var n = ssc_overflowingAncestor(t);
    if (!n || e.defaultPrevented || ssc_isNodeName(ssc_activeElement, "embed") || ssc_isNodeName(t, "embed") && /\.pdf/i.test(t.src)) {
        return true
    }
    var r = e.wheelDeltaX || 0;
    var i = e.wheelDeltaY || 0;
    if (!r && !i) {
        i = e.wheelDelta || 0
    }
    if (Math.abs(r) > 1.2) {
        r *= ssc_stepsize / 120
    }
    if (Math.abs(i) > 1.2) {
        i *= ssc_stepsize / 120
    }
    ssc_scrollArray(n, -r, -i);
    e.preventDefault()
}

function ssc_keydown(e) {
    var t = e.target;
    var n = e.ctrlKey || e.altKey || e.metaKey;
    if (/input|textarea|embed/i.test(t.nodeName) || t.isContentEditable || e.defaultPrevented || n) {
        return true
    }
    if (ssc_isNodeName(t, "button") && e.keyCode === ssc_key.spacebar) {
        return true
    }
    var r, i = 0,
        s = 0;
    var o = ssc_overflowingAncestor(ssc_activeElement);
    var u = o.clientHeight;
    if (o == document.body) {
        u = window.innerHeight
    }
    switch (e.keyCode) {
    case ssc_key.up:
        s = -ssc_arrowscroll;
        break;
    case ssc_key.down:
        s = ssc_arrowscroll;
        break;
    case ssc_key.spacebar:
        r = e.shiftKey ? 1 : -1;
        s = -r * u * .9;
        break;
    case ssc_key.pageup:
        s = -u * .9;
        break;
    case ssc_key.pagedown:
        s = u * .9;
        break;
    case ssc_key.home:
        s = -o.scrollTop;
        break;
    case ssc_key.end:
        var a = o.scrollHeight - o.scrollTop - u;
        s = a > 0 ? a + 10 : 0;
        break;
    case ssc_key.left:
        i = -ssc_arrowscroll;
        break;
    case ssc_key.right:
        i = ssc_arrowscroll;
        break;
    default:
        return true
    }
    ssc_scrollArray(o, i, s);
    e.preventDefault()
}

function ssc_mousedown(e) {
    ssc_activeElement = e.target
}

function ssc_setCache(e, t) {
    for (var n = e.length; n--;) ssc_cache[ssc_uniqueID(e[n])] = t;
    return t
}

function ssc_overflowingAncestor(e) {
    var t = [];
    var n = ssc_root.scrollHeight;
    do {
        var r = ssc_cache[ssc_uniqueID(e)];
        if (r) {
            return ssc_setCache(t, r)
        }
        t.push(e);
        if (n === e.scrollHeight) {
            if (!ssc_frame || ssc_root.clientHeight + 10 < n) {
                return ssc_setCache(t, document.body)
            }
        } else if (e.clientHeight + 10 < e.scrollHeight) {
            overflow = getComputedStyle(e, "").getPropertyValue("overflow");
            if (overflow === "scroll" || overflow === "auto") {
                return ssc_setCache(t, e)
            }
        }
    } while (e = e.parentNode)
}

function ssc_addEvent(e, t, n) {
    window.addEventListener(e, t, n || false)
}

function ssc_removeEvent(e, t, n) {
    window.removeEventListener(e, t, n || false)
}

function ssc_isNodeName(e, t) {
    return e.nodeName.toLowerCase() === t.toLowerCase()
}

function ssc_directionCheck(e, t) {
    e = e > 0 ? 1 : -1;
    t = t > 0 ? 1 : -1;
    if (ssc_direction.x !== e || ssc_direction.y !== t) {
        ssc_direction.x = e;
        ssc_direction.y = t;
        ssc_que = []
    }
}

function ssc_pulse_(e) {
    var t, n, r;
    e = e * ssc_pulseScale;
    if (e < 1) {
        t = e - (1 - Math.exp(-e))
    } else {
        n = Math.exp(-1);
        e -= 1;
        r = 1 - Math.exp(-e);
        t = n + r * (1 - n)
    }
    return t * ssc_pulseNormalize
}

function ssc_pulse(e) {
    if (e >= 1) return 1;
    if (e <= 0) return 0;
    if (ssc_pulseNormalize == 1) {
        ssc_pulseNormalize /= ssc_pulse_(1)
    }
    return ssc_pulse_(e)
}

var ssc_framerate = 150;
var ssc_animtime = 500;
var ssc_stepsize = 150;
var ssc_pulseAlgorithm = true;
var ssc_pulseScale = 6;
var ssc_pulseNormalize = 1;
var ssc_keyboardsupport = true;
var ssc_arrowscroll = 50;
var ssc_frame = false;
var ssc_direction = {
    x: 0,
    y: 0
};

var ssc_initdone = false;
var ssc_fixedback = true;
var ssc_root = document.documentElement;
var ssc_activeElement;
var ssc_key = {
    left: 37,
    up: 38,
    right: 39,
    down: 40,
    spacebar: 32,
    pageup: 33,
    pagedown: 34,
    end: 35,
    home: 36
};

var ssc_que = [];
var ssc_pending = false;
var ssc_cache = {};

setInterval(function () {
    ssc_cache = {}
}, 10 * 1e3);

var ssc_uniqueID = function () {
    var e = 0;
    return function (t) {
        return t.ssc_uniqueID || (t.ssc_uniqueID = e++)
    }
}();

var ischrome = /chrome/.test(navigator.userAgent.toLowerCase());

if (ischrome) {
    ssc_addEvent("mousedown", ssc_mousedown);
    ssc_addEvent("mousewheel", ssc_wheel);
    ssc_addEvent("load", ssc_init)
}

/***/ }),

/***/ "./js/vendors/bootstrap.min.js":
/*!*************************************!*\
  !*** ./js/vendors/bootstrap.min.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/*!
 * Bootstrap v3.1.1 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one(a.support.transition.end,function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b()})}(jQuery),+function(a){"use strict";var b='[data-dismiss="alert"]',c=function(c){a(c).on("click",b,this.close)};c.prototype.close=function(b){function c(){f.trigger("closed.bs.alert").remove()}var d=a(this),e=d.attr("data-target");e||(e=d.attr("href"),e=e&&e.replace(/.*(?=#[^\s]*$)/,""));var f=a(e);b&&b.preventDefault(),f.length||(f=d.hasClass("alert")?d:d.parent()),f.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one(a.support.transition.end,c).emulateTransitionEnd(150):c())};var d=a.fn.alert;a.fn.alert=function(b){return this.each(function(){var d=a(this),e=d.data("bs.alert");e||d.data("bs.alert",e=new c(this)),"string"==typeof b&&e[b].call(d)})},a.fn.alert.Constructor=c,a.fn.alert.noConflict=function(){return a.fn.alert=d,this},a(document).on("click.bs.alert.data-api",b,c.prototype.close)}(jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d),this.isLoading=!1};b.DEFAULTS={loadingText:"loading..."},b.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",f.resetText||d.data("resetText",d[e]()),d[e](f[b]||this.options[b]),setTimeout(a.proxy(function(){"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},b.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")&&(c.prop("checked")&&this.$element.hasClass("active")?a=!1:b.find(".active").removeClass("active")),a&&c.prop("checked",!this.$element.hasClass("active")).trigger("change")}a&&this.$element.toggleClass("active")};var c=a.fn.button;a.fn.button=function(c){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof c&&c;e||d.data("bs.button",e=new b(this,f)),"toggle"==c?e.toggle():c&&e.setState(c)})},a.fn.button.Constructor=b,a.fn.button.noConflict=function(){return a.fn.button=c,this},a(document).on("click.bs.button.data-api","[data-toggle^=button]",function(b){var c=a(b.target);c.hasClass("btn")||(c=c.closest(".btn")),c.button("toggle"),b.preventDefault()})}(jQuery),+function(a){"use strict";var b=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=this.sliding=this.interval=this.$active=this.$items=null,"hover"==this.options.pause&&this.$element.on("mouseenter",a.proxy(this.pause,this)).on("mouseleave",a.proxy(this.cycle,this))};b.DEFAULTS={interval:5e3,pause:"hover",wrap:!0},b.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},b.prototype.getActiveIndex=function(){return this.$active=this.$element.find(".item.active"),this.$items=this.$active.parent().children(),this.$items.index(this.$active)},b.prototype.to=function(b){var c=this,d=this.getActiveIndex();return b>this.$items.length-1||0>b?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){c.to(b)}):d==b?this.pause().cycle():this.slide(b>d?"next":"prev",a(this.$items[b]))},b.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},b.prototype.next=function(){return this.sliding?void 0:this.slide("next")},b.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},b.prototype.slide=function(b,c){var d=this.$element.find(".item.active"),e=c||d[b](),f=this.interval,g="next"==b?"left":"right",h="next"==b?"first":"last",i=this;if(!e.length){if(!this.options.wrap)return;e=this.$element.find(".item")[h]()}if(e.hasClass("active"))return this.sliding=!1;var j=a.Event("slide.bs.carousel",{relatedTarget:e[0],direction:g});return this.$element.trigger(j),j.isDefaultPrevented()?void 0:(this.sliding=!0,f&&this.pause(),this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),this.$element.one("slid.bs.carousel",function(){var b=a(i.$indicators.children()[i.getActiveIndex()]);b&&b.addClass("active")})),a.support.transition&&this.$element.hasClass("slide")?(e.addClass(b),e[0].offsetWidth,d.addClass(g),e.addClass(g),d.one(a.support.transition.end,function(){e.removeClass([b,g].join(" ")).addClass("active"),d.removeClass(["active",g].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger("slid.bs.carousel")},0)}).emulateTransitionEnd(1e3*d.css("transition-duration").slice(0,-1))):(d.removeClass("active"),e.addClass("active"),this.sliding=!1,this.$element.trigger("slid.bs.carousel")),f&&this.cycle(),this)};var c=a.fn.carousel;a.fn.carousel=function(c){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c),g="string"==typeof c?c:f.slide;e||d.data("bs.carousel",e=new b(this,f)),"number"==typeof c?e.to(c):g?e[g]():f.interval&&e.pause().cycle()})},a.fn.carousel.Constructor=b,a.fn.carousel.noConflict=function(){return a.fn.carousel=c,this},a(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(b){var c,d=a(this),e=a(d.attr("data-target")||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"")),f=a.extend({},e.data(),d.data()),g=d.attr("data-slide-to");g&&(f.interval=!1),e.carousel(f),(g=d.attr("data-slide-to"))&&e.data("bs.carousel").to(g),b.preventDefault()}),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var b=a(this);b.carousel(b.data())})})}(jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d),this.transitioning=null,this.options.parent&&(this.$parent=a(this.options.parent)),this.options.toggle&&this.toggle()};b.DEFAULTS={toggle:!0},b.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},b.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b=a.Event("show.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.$parent&&this.$parent.find("> .panel > .in");if(c&&c.length){var d=c.data("bs.collapse");if(d&&d.transitioning)return;c.collapse("hide"),d||c.data("bs.collapse",null)}var e=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[e](0),this.transitioning=1;var f=function(){this.$element.removeClass("collapsing").addClass("collapse in")[e]("auto"),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return f.call(this);var g=a.camelCase(["scroll",e].join("-"));this.$element.one(a.support.transition.end,a.proxy(f,this)).emulateTransitionEnd(350)[e](this.$element[0][g])}}},b.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),this.transitioning=1;var d=function(){this.transitioning=0,this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")};return a.support.transition?void this.$element[c](0).one(a.support.transition.end,a.proxy(d,this)).emulateTransitionEnd(350):d.call(this)}}},b.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};var c=a.fn.collapse;a.fn.collapse=function(c){return this.each(function(){var d=a(this),e=d.data("bs.collapse"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c);!e&&f.toggle&&"show"==c&&(c=!c),e||d.data("bs.collapse",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.collapse.Constructor=b,a.fn.collapse.noConflict=function(){return a.fn.collapse=c,this},a(document).on("click.bs.collapse.data-api","[data-toggle=collapse]",function(b){var c,d=a(this),e=d.attr("data-target")||b.preventDefault()||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,""),f=a(e),g=f.data("bs.collapse"),h=g?"toggle":d.data(),i=d.attr("data-parent"),j=i&&a(i);g&&g.transitioning||(j&&j.find('[data-toggle=collapse][data-parent="'+i+'"]').not(d).addClass("collapsed"),d[f.hasClass("in")?"addClass":"removeClass"]("collapsed")),f.collapse(h)})}(jQuery),+function(a){"use strict";function b(b){a(d).remove(),a(e).each(function(){var d=c(a(this)),e={relatedTarget:this};d.hasClass("open")&&(d.trigger(b=a.Event("hide.bs.dropdown",e)),b.isDefaultPrevented()||d.removeClass("open").trigger("hidden.bs.dropdown",e))})}function c(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}var d=".dropdown-backdrop",e="[data-toggle=dropdown]",f=function(b){a(b).on("click.bs.dropdown",this.toggle)};f.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=c(e),g=f.hasClass("open");if(b(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",b);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;f.toggleClass("open").trigger("shown.bs.dropdown",h),e.focus()}return!1}},f.prototype.keydown=function(b){if(/(38|40|27)/.test(b.keyCode)){var d=a(this);if(b.preventDefault(),b.stopPropagation(),!d.is(".disabled, :disabled")){var f=c(d),g=f.hasClass("open");if(!g||g&&27==b.keyCode)return 27==b.which&&f.find(e).focus(),d.click();var h=" li:not(.divider):visible a",i=f.find("[role=menu]"+h+", [role=listbox]"+h);if(i.length){var j=i.index(i.filter(":focus"));38==b.keyCode&&j>0&&j--,40==b.keyCode&&j<i.length-1&&j++,~j||(j=0),i.eq(j).focus()}}}};var g=a.fn.dropdown;a.fn.dropdown=function(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new f(this)),"string"==typeof b&&d[b].call(c)})},a.fn.dropdown.Constructor=f,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=g,this},a(document).on("click.bs.dropdown.data-api",b).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",e,f.prototype.toggle).on("keydown.bs.dropdown.data-api",e+", [role=menu], [role=listbox]",f.prototype.keydown)}(jQuery),+function(a){"use strict";var b=function(b,c){this.options=c,this.$element=a(b),this.$backdrop=this.isShown=null,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};b.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},b.prototype.toggle=function(a){return this[this.isShown?"hide":"show"](a)},b.prototype.show=function(b){var c=this,d=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(d),this.isShown||d.isDefaultPrevented()||(this.isShown=!0,this.escape(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.backdrop(function(){var d=a.support.transition&&c.$element.hasClass("fade");c.$element.parent().length||c.$element.appendTo(document.body),c.$element.show().scrollTop(0),d&&c.$element[0].offsetWidth,c.$element.addClass("in").attr("aria-hidden",!1),c.enforceFocus();var e=a.Event("shown.bs.modal",{relatedTarget:b});d?c.$element.find(".modal-dialog").one(a.support.transition.end,function(){c.$element.focus().trigger(e)}).emulateTransitionEnd(300):c.$element.focus().trigger(e)}))},b.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one(a.support.transition.end,a.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal())},b.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.focus()},this))},b.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keyup.dismiss.bs.modal")},b.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.removeBackdrop(),a.$element.trigger("hidden.bs.modal")})},b.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},b.prototype.backdrop=function(b){var c=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var d=a.support.transition&&c;if(this.$backdrop=a('<div class="modal-backdrop '+c+'" />').appendTo(document.body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),d&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;d?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()):b&&b()};var c=a.fn.modal;a.fn.modal=function(c,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},b.DEFAULTS,e.data(),"object"==typeof c&&c);f||e.data("bs.modal",f=new b(this,g)),"string"==typeof c?f[c](d):g.show&&f.show(d)})},a.fn.modal.Constructor=b,a.fn.modal.noConflict=function(){return a.fn.modal=c,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(b){var c=a(this),d=c.attr("href"),e=a(c.attr("data-target")||d&&d.replace(/.*(?=#[^\s]+$)/,"")),f=e.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(d)&&d},e.data(),c.data());c.is("a")&&b.preventDefault(),e.modal(f,this).one("hide",function(){c.is(":visible")&&c.focus()})}),a(document).on("show.bs.modal",".modal",function(){a(document.body).addClass("modal-open")}).on("hidden.bs.modal",".modal",function(){a(document.body).removeClass("modal-open")})}(jQuery),+function(a){"use strict";var b=function(a,b){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",a,b)};b.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},b.prototype.init=function(b,c,d){this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d);for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},b.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},b.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show()},b.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},b.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){if(this.$element.trigger(b),b.isDefaultPrevented())return;var c=this,d=this.tip();this.setContent(),this.options.animation&&d.addClass("fade");var e="function"==typeof this.options.placement?this.options.placement.call(this,d[0],this.$element[0]):this.options.placement,f=/\s?auto?\s?/i,g=f.test(e);g&&(e=e.replace(f,"")||"top"),d.detach().css({top:0,left:0,display:"block"}).addClass(e),this.options.container?d.appendTo(this.options.container):d.insertAfter(this.$element);var h=this.getPosition(),i=d[0].offsetWidth,j=d[0].offsetHeight;if(g){var k=this.$element.parent(),l=e,m=document.documentElement.scrollTop||document.body.scrollTop,n="body"==this.options.container?window.innerWidth:k.outerWidth(),o="body"==this.options.container?window.innerHeight:k.outerHeight(),p="body"==this.options.container?0:k.offset().left;e="bottom"==e&&h.top+h.height+j-m>o?"top":"top"==e&&h.top-m-j<0?"bottom":"right"==e&&h.right+i>n?"left":"left"==e&&h.left-i<p?"right":e,d.removeClass(l).addClass(e)}var q=this.getCalculatedOffset(e,h,i,j);this.applyPlacement(q,e),this.hoverState=null;var r=function(){c.$element.trigger("shown.bs."+c.type)};a.support.transition&&this.$tip.hasClass("fade")?d.one(a.support.transition.end,r).emulateTransitionEnd(150):r()}},b.prototype.applyPlacement=function(b,c){var d,e=this.tip(),f=e[0].offsetWidth,g=e[0].offsetHeight,h=parseInt(e.css("margin-top"),10),i=parseInt(e.css("margin-left"),10);isNaN(h)&&(h=0),isNaN(i)&&(i=0),b.top=b.top+h,b.left=b.left+i,a.offset.setOffset(e[0],a.extend({using:function(a){e.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),e.addClass("in");var j=e[0].offsetWidth,k=e[0].offsetHeight;if("top"==c&&k!=g&&(d=!0,b.top=b.top+g-k),/bottom|top/.test(c)){var l=0;b.left<0&&(l=-2*b.left,b.left=0,e.offset(b),j=e[0].offsetWidth,k=e[0].offsetHeight),this.replaceArrow(l-f+j,j,"left")}else this.replaceArrow(k-g,k,"top");d&&e.offset(b)},b.prototype.replaceArrow=function(a,b,c){this.arrow().css(c,a?50*(1-a/b)+"%":"")},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},b.prototype.hide=function(){function b(){"in"!=c.hoverState&&d.detach(),c.$element.trigger("hidden.bs."+c.type)}var c=this,d=this.tip(),e=a.Event("hide.bs."+this.type);return this.$element.trigger(e),e.isDefaultPrevented()?void 0:(d.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?d.one(a.support.transition.end,b).emulateTransitionEnd(150):b(),this.hoverState=null,this)},b.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},b.prototype.hasContent=function(){return this.getTitle()},b.prototype.getPosition=function(){var b=this.$element[0];return a.extend({},"function"==typeof b.getBoundingClientRect?b.getBoundingClientRect():{width:b.offsetWidth,height:b.offsetHeight},this.$element.offset())},b.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},b.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},b.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},b.prototype.validate=function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},b.prototype.enable=function(){this.enabled=!0},b.prototype.disable=function(){this.enabled=!1},b.prototype.toggleEnabled=function(){this.enabled=!this.enabled},b.prototype.toggle=function(b){var c=b?a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type):this;c.tip().hasClass("in")?c.leave(c):c.enter(c)},b.prototype.destroy=function(){clearTimeout(this.timeout),this.hide().$element.off("."+this.type).removeData("bs."+this.type)};var c=a.fn.tooltip;a.fn.tooltip=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof c&&c;(e||"destroy"!=c)&&(e||d.data("bs.tooltip",e=new b(this,f)),"string"==typeof c&&e[c]())})},a.fn.tooltip.Constructor=b,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=c,this}}(jQuery),+function(a){"use strict";var b=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");b.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),b.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),b.prototype.constructor=b,b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content")[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},b.prototype.hasContent=function(){return this.getTitle()||this.getContent()},b.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},b.prototype.tip=function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip};var c=a.fn.popover;a.fn.popover=function(c){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof c&&c;(e||"destroy"!=c)&&(e||d.data("bs.popover",e=new b(this,f)),"string"==typeof c&&e[c]())})},a.fn.popover.Constructor=b,a.fn.popover.noConflict=function(){return a.fn.popover=c,this}}(jQuery),+function(a){"use strict";function b(c,d){var e,f=a.proxy(this.process,this);this.$element=a(a(c).is("body")?window:c),this.$body=a("body"),this.$scrollElement=this.$element.on("scroll.bs.scroll-spy.data-api",f),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||(e=a(c).attr("href"))&&e.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.offsets=a([]),this.targets=a([]),this.activeTarget=null,this.refresh(),this.process()}b.DEFAULTS={offset:10},b.prototype.refresh=function(){var b=this.$element[0]==window?"offset":"position";this.offsets=a([]),this.targets=a([]);{var c=this;this.$body.find(this.selector).map(function(){var d=a(this),e=d.data("target")||d.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[b]().top+(!a.isWindow(c.$scrollElement.get(0))&&c.$scrollElement.scrollTop()),e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){c.offsets.push(this[0]),c.targets.push(this[1])})}},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,d=c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(b>=d)return g!=(a=f.last()[0])&&this.activate(a);if(g&&b<=e[0])return g!=(a=f[0])&&this.activate(a);for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(!e[a+1]||b<=e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,a(this.selector).parentsUntil(this.options.target,".active").removeClass("active");var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")};var c=a.fn.scrollspy;a.fn.scrollspy=function(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=c,this},a(window).on("load",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);b.scrollspy(b.data())})})}(jQuery),+function(a){"use strict";var b=function(b){this.element=a(b)};b.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a")[0],f=a.Event("show.bs.tab",{relatedTarget:e});if(b.trigger(f),!f.isDefaultPrevented()){var g=a(d);this.activate(b.parent("li"),c),this.activate(g,g.parent(),function(){b.trigger({type:"shown.bs.tab",relatedTarget:e})})}}},b.prototype.activate=function(b,c,d){function e(){f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),b.addClass("active"),g?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active"),d&&d()}var f=c.find("> .active"),g=d&&a.support.transition&&f.hasClass("fade");g?f.one(a.support.transition.end,e).emulateTransitionEnd(150):e(),f.removeClass("in")};var c=a.fn.tab;a.fn.tab=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new b(this)),"string"==typeof c&&e[c]()})},a.fn.tab.Constructor=b,a.fn.tab.noConflict=function(){return a.fn.tab=c,this},a(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(b){b.preventDefault(),a(this).tab("show")})}(jQuery),+function(a){"use strict";var b=function(c,d){this.options=a.extend({},b.DEFAULTS,d),this.$window=a(window).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(c),this.affixed=this.unpin=this.pinnedOffset=null,this.checkPosition()};b.RESET="affix affix-top affix-bottom",b.DEFAULTS={offset:0},b.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(b.RESET).addClass("affix");var a=this.$window.scrollTop(),c=this.$element.offset();return this.pinnedOffset=c.top-a},b.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},b.prototype.checkPosition=function(){if(this.$element.is(":visible")){var c=a(document).height(),d=this.$window.scrollTop(),e=this.$element.offset(),f=this.options.offset,g=f.top,h=f.bottom;"top"==this.affixed&&(e.top+=d),"object"!=typeof f&&(h=g=f),"function"==typeof g&&(g=f.top(this.$element)),"function"==typeof h&&(h=f.bottom(this.$element));var i=null!=this.unpin&&d+this.unpin<=e.top?!1:null!=h&&e.top+this.$element.height()>=c-h?"bottom":null!=g&&g>=d?"top":!1;if(this.affixed!==i){this.unpin&&this.$element.css("top","");var j="affix"+(i?"-"+i:""),k=a.Event(j+".bs.affix");this.$element.trigger(k),k.isDefaultPrevented()||(this.affixed=i,this.unpin="bottom"==i?this.getPinnedOffset():null,this.$element.removeClass(b.RESET).addClass(j).trigger(a.Event(j.replace("affix","affixed"))),"bottom"==i&&this.$element.offset({top:c-h-this.$element.height()}))}}};var c=a.fn.affix;a.fn.affix=function(c){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof c&&c;e||d.data("bs.affix",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.affix.Constructor=b,a.fn.affix.noConflict=function(){return a.fn.affix=c,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var b=a(this),c=b.data();c.offset=c.offset||{},c.offsetBottom&&(c.offset.bottom=c.offsetBottom),c.offsetTop&&(c.offset.top=c.offsetTop),b.affix(c)})})}(jQuery);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./js/vendors/jquery-migrate.min.js":
/*!******************************************!*\
  !*** ./js/vendors/jquery-migrate.min.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/*! jQuery Migrate v1.4.1 | (c) jQuery Foundation and other contributors | jquery.org/license */
"undefined"==typeof jQuery.migrateMute&&(jQuery.migrateMute=!0),function(a,b,c){function d(c){var d=b.console;f[c]||(f[c]=!0,a.migrateWarnings.push(c),d&&d.warn&&!a.migrateMute&&(d.warn("JQMIGRATE: "+c),a.migrateTrace&&d.trace&&d.trace()))}function e(b,c,e,f){if(Object.defineProperty)try{return void Object.defineProperty(b,c,{configurable:!0,enumerable:!0,get:function(){return d(f),e},set:function(a){d(f),e=a}})}catch(g){}a._definePropertyBroken=!0,b[c]=e}a.migrateVersion="1.4.1";var f={};a.migrateWarnings=[],b.console&&b.console.log&&b.console.log("JQMIGRATE: Migrate is installed"+(a.migrateMute?"":" with logging active")+", version "+a.migrateVersion),a.migrateTrace===c&&(a.migrateTrace=!0),a.migrateReset=function(){f={},a.migrateWarnings.length=0},"BackCompat"===document.compatMode&&d("jQuery is not compatible with Quirks Mode");var g=a("<input/>",{size:1}).attr("size")&&a.attrFn,h=a.attr,i=a.attrHooks.value&&a.attrHooks.value.get||function(){return null},j=a.attrHooks.value&&a.attrHooks.value.set||function(){return c},k=/^(?:input|button)$/i,l=/^[238]$/,m=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,n=/^(?:checked|selected)$/i;e(a,"attrFn",g||{},"jQuery.attrFn is deprecated"),a.attr=function(b,e,f,i){var j=e.toLowerCase(),o=b&&b.nodeType;return i&&(h.length<4&&d("jQuery.fn.attr( props, pass ) is deprecated"),b&&!l.test(o)&&(g?e in g:a.isFunction(a.fn[e])))?a(b)[e](f):("type"===e&&f!==c&&k.test(b.nodeName)&&b.parentNode&&d("Can't change the 'type' of an input or button in IE 6/7/8"),!a.attrHooks[j]&&m.test(j)&&(a.attrHooks[j]={get:function(b,d){var e,f=a.prop(b,d);return f===!0||"boolean"!=typeof f&&(e=b.getAttributeNode(d))&&e.nodeValue!==!1?d.toLowerCase():c},set:function(b,c,d){var e;return c===!1?a.removeAttr(b,d):(e=a.propFix[d]||d,e in b&&(b[e]=!0),b.setAttribute(d,d.toLowerCase())),d}},n.test(j)&&d("jQuery.fn.attr('"+j+"') might use property instead of attribute")),h.call(a,b,e,f))},a.attrHooks.value={get:function(a,b){var c=(a.nodeName||"").toLowerCase();return"button"===c?i.apply(this,arguments):("input"!==c&&"option"!==c&&d("jQuery.fn.attr('value') no longer gets properties"),b in a?a.value:null)},set:function(a,b){var c=(a.nodeName||"").toLowerCase();return"button"===c?j.apply(this,arguments):("input"!==c&&"option"!==c&&d("jQuery.fn.attr('value', val) no longer sets properties"),void(a.value=b))}};var o,p,q=a.fn.init,r=a.find,s=a.parseJSON,t=/^\s*</,u=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,v=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,w=/^([^<]*)(<[\w\W]+>)([^>]*)$/;a.fn.init=function(b,e,f){var g,h;return b&&"string"==typeof b&&!a.isPlainObject(e)&&(g=w.exec(a.trim(b)))&&g[0]&&(t.test(b)||d("$(html) HTML strings must start with '<' character"),g[3]&&d("$(html) HTML text after last tag is ignored"),"#"===g[0].charAt(0)&&(d("HTML string cannot start with a '#' character"),a.error("JQMIGRATE: Invalid selector string (XSS)")),e&&e.context&&e.context.nodeType&&(e=e.context),a.parseHTML)?q.call(this,a.parseHTML(g[2],e&&e.ownerDocument||e||document,!0),e,f):(h=q.apply(this,arguments),b&&b.selector!==c?(h.selector=b.selector,h.context=b.context):(h.selector="string"==typeof b?b:"",b&&(h.context=b.nodeType?b:e||document)),h)},a.fn.init.prototype=a.fn,a.find=function(a){var b=Array.prototype.slice.call(arguments);if("string"==typeof a&&u.test(a))try{document.querySelector(a)}catch(c){a=a.replace(v,function(a,b,c,d){return"["+b+c+'"'+d+'"]'});try{document.querySelector(a),d("Attribute selector with '#' must be quoted: "+b[0]),b[0]=a}catch(e){d("Attribute selector with '#' was not fixed: "+b[0])}}return r.apply(this,b)};var x;for(x in r)Object.prototype.hasOwnProperty.call(r,x)&&(a.find[x]=r[x]);a.parseJSON=function(a){return a?s.apply(this,arguments):(d("jQuery.parseJSON requires a valid JSON string"),null)},a.uaMatch=function(a){a=a.toLowerCase();var b=/(chrome)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||a.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},a.browser||(o=a.uaMatch(navigator.userAgent),p={},o.browser&&(p[o.browser]=!0,p.version=o.version),p.chrome?p.webkit=!0:p.webkit&&(p.safari=!0),a.browser=p),e(a,"browser",a.browser,"jQuery.browser is deprecated"),a.boxModel=a.support.boxModel="CSS1Compat"===document.compatMode,e(a,"boxModel",a.boxModel,"jQuery.boxModel is deprecated"),e(a.support,"boxModel",a.support.boxModel,"jQuery.support.boxModel is deprecated"),a.sub=function(){function b(a,c){return new b.fn.init(a,c)}a.extend(!0,b,this),b.superclass=this,b.fn=b.prototype=this(),b.fn.constructor=b,b.sub=this.sub,b.fn.init=function(d,e){var f=a.fn.init.call(this,d,e,c);return f instanceof b?f:b(f)},b.fn.init.prototype=b.fn;var c=b(document);return d("jQuery.sub() is deprecated"),b},a.fn.size=function(){return d("jQuery.fn.size() is deprecated; use the .length property"),this.length};var y=!1;a.swap&&a.each(["height","width","reliableMarginRight"],function(b,c){var d=a.cssHooks[c]&&a.cssHooks[c].get;d&&(a.cssHooks[c].get=function(){var a;return y=!0,a=d.apply(this,arguments),y=!1,a})}),a.swap=function(a,b,c,e){var f,g,h={};y||d("jQuery.swap() is undocumented and deprecated");for(g in b)h[g]=a.style[g],a.style[g]=b[g];f=c.apply(a,e||[]);for(g in b)a.style[g]=h[g];return f},a.ajaxSetup({converters:{"text json":a.parseJSON}});var z=a.fn.data;a.fn.data=function(b){var e,f,g=this[0];return!g||"events"!==b||1!==arguments.length||(e=a.data(g,b),f=a._data(g,b),e!==c&&e!==f||f===c)?z.apply(this,arguments):(d("Use of jQuery.fn.data('events') is deprecated"),f)};var A=/\/(java|ecma)script/i;a.clean||(a.clean=function(b,c,e,f){c=c||document,c=!c.nodeType&&c[0]||c,c=c.ownerDocument||c,d("jQuery.clean() is deprecated");var g,h,i,j,k=[];if(a.merge(k,a.buildFragment(b,c).childNodes),e)for(i=function(a){return!a.type||A.test(a.type)?f?f.push(a.parentNode?a.parentNode.removeChild(a):a):e.appendChild(a):void 0},g=0;null!=(h=k[g]);g++)a.nodeName(h,"script")&&i(h)||(e.appendChild(h),"undefined"!=typeof h.getElementsByTagName&&(j=a.grep(a.merge([],h.getElementsByTagName("script")),i),k.splice.apply(k,[g+1,0].concat(j)),g+=j.length));return k});var B=a.event.add,C=a.event.remove,D=a.event.trigger,E=a.fn.toggle,F=a.fn.live,G=a.fn.die,H=a.fn.load,I="ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",J=new RegExp("\\b(?:"+I+")\\b"),K=/(?:^|\s)hover(\.\S+|)\b/,L=function(b){return"string"!=typeof b||a.event.special.hover?b:(K.test(b)&&d("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"),b&&b.replace(K,"mouseenter$1 mouseleave$1"))};a.event.props&&"attrChange"!==a.event.props[0]&&a.event.props.unshift("attrChange","attrName","relatedNode","srcElement"),a.event.dispatch&&e(a.event,"handle",a.event.dispatch,"jQuery.event.handle is undocumented and deprecated"),a.event.add=function(a,b,c,e,f){a!==document&&J.test(b)&&d("AJAX events should be attached to document: "+b),B.call(this,a,L(b||""),c,e,f)},a.event.remove=function(a,b,c,d,e){C.call(this,a,L(b)||"",c,d,e)},a.each(["load","unload","error"],function(b,c){a.fn[c]=function(){var a=Array.prototype.slice.call(arguments,0);return"load"===c&&"string"==typeof a[0]?H.apply(this,a):(d("jQuery.fn."+c+"() is deprecated"),a.splice(0,0,c),arguments.length?this.bind.apply(this,a):(this.triggerHandler.apply(this,a),this))}}),a.fn.toggle=function(b,c){if(!a.isFunction(b)||!a.isFunction(c))return E.apply(this,arguments);d("jQuery.fn.toggle(handler, handler...) is deprecated");var e=arguments,f=b.guid||a.guid++,g=0,h=function(c){var d=(a._data(this,"lastToggle"+b.guid)||0)%g;return a._data(this,"lastToggle"+b.guid,d+1),c.preventDefault(),e[d].apply(this,arguments)||!1};for(h.guid=f;g<e.length;)e[g++].guid=f;return this.click(h)},a.fn.live=function(b,c,e){return d("jQuery.fn.live() is deprecated"),F?F.apply(this,arguments):(a(this.context).on(b,this.selector,c,e),this)},a.fn.die=function(b,c){return d("jQuery.fn.die() is deprecated"),G?G.apply(this,arguments):(a(this.context).off(b,this.selector||"**",c),this)},a.event.trigger=function(a,b,c,e){return c||J.test(a)||d("Global events are undocumented and deprecated"),D.call(this,a,b,c||document,e)},a.each(I.split("|"),function(b,c){a.event.special[c]={setup:function(){var b=this;return b!==document&&(a.event.add(document,c+"."+a.guid,function(){a.event.trigger(c,Array.prototype.slice.call(arguments,1),b,!0)}),a._data(this,c,a.guid++)),!1},teardown:function(){return this!==document&&a.event.remove(document,c+"."+a._data(this,c)),!1}}}),a.event.special.ready={setup:function(){this===document&&d("'ready' event is deprecated")}};var M=a.fn.andSelf||a.fn.addBack,N=a.fn.find;if(a.fn.andSelf=function(){return d("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),M.apply(this,arguments)},a.fn.find=function(a){var b=N.apply(this,arguments);return b.context=this.context,b.selector=this.selector?this.selector+" "+a:a,b},a.Callbacks){var O=a.Deferred,P=[["resolve","done",a.Callbacks("once memory"),a.Callbacks("once memory"),"resolved"],["reject","fail",a.Callbacks("once memory"),a.Callbacks("once memory"),"rejected"],["notify","progress",a.Callbacks("memory"),a.Callbacks("memory")]];a.Deferred=function(b){var c=O(),e=c.promise();return c.pipe=e.pipe=function(){var b=arguments;return d("deferred.pipe() is deprecated"),a.Deferred(function(d){a.each(P,function(f,g){var h=a.isFunction(b[f])&&b[f];c[g[1]](function(){var b=h&&h.apply(this,arguments);b&&a.isFunction(b.promise)?b.promise().done(d.resolve).fail(d.reject).progress(d.notify):d[g[0]+"With"](this===e?d.promise():this,h?[b]:arguments)})}),b=null}).promise()},c.isResolved=function(){return d("deferred.isResolved is deprecated"),"resolved"===c.state()},c.isRejected=function(){return d("deferred.isRejected is deprecated"),"rejected"===c.state()},b&&b.call(c,c),c}}}(jQuery,window);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./js/zerif.js":
/*!*********************!*\
  !*** ./js/zerif.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/* =================================

 LOADER

 =================================== */

// makes sure the whole site is loaded

jQuery(window).load(function() {

    // will first fade out the loading animation

    jQuery(".status").fadeOut();

    // will fade out the whole DIV that covers the website.

    jQuery(".preloader").delay(1000).fadeOut("slow");


    jQuery('.carousel').carousel('pause');

    // Focus styles for menus.
    jQuery( '.navbar-collapse' ).find( 'a' ).on( 'focus blur', function() {
        jQuery( this ).parents().toggleClass( 'link-focus' );
    });

});

/*** DROPDOWN FOR MOBILE MENU */
var callback_mobile_dropdown = function () {

    if( jQuery( '.wr-megamenu-container' ).length <= 0 && jQuery( '.mega-menu-wrap' ).length <= 0  ) {
        var navLi = jQuery('#site-navigation li');
        navLi.each(function(){
            if ( jQuery(this).find('ul').length > 0 && !jQuery(this).hasClass('has_children') ){
                jQuery(this).addClass('has_children');
                jQuery(this).find('a').first().after('<p class="dropdownmenu"></p>');
            }
        });
        jQuery('.dropdownmenu').click(function(){
            if( jQuery(this).parent('li').hasClass('this-open') ){
                jQuery(this).parent('li').removeClass('this-open');
            }else{
                jQuery(this).parent('li').addClass('this-open');
            }
        });
        navLi.find('a').click(function(){
            jQuery('.navbar-toggle').addClass('collapsed');
            jQuery('#site-navigation .collapse').removeClass('in');
        });
    }

};
jQuery(document).ready(callback_mobile_dropdown);

jQuery(document).ready(function() {
    var current_height = jQuery('.header .container').height();
    jQuery('.header').css('min-height',current_height);

});


/* show/hide reCaptcha */
jQuery(document).ready(function() {

    var thisOpen = false;
    jQuery('.contact-form .form-control').each(function(){
        if ( jQuery(this).val().length > 0 ){
            thisOpen = true;
            jQuery('.zerif-g-recaptcha').css('display','block').delay(1000).css('opacity','1');
            return false;
        }
    });
    if ( thisOpen == false && (typeof jQuery('.contact-form textarea') !== 'undefined') && (jQuery('.contact-form textarea').length > 0) && (typeof jQuery('.contact-form textarea').val() !== 'undefined') && (jQuery('.contact-form textarea').val().length > 0) ) {
        thisOpen = true;
        jQuery('.zerif-g-recaptcha').css('display','block').delay(1000).css('opacity','1');
    }
    jQuery('.contact-form input, .contact-form textarea').focus(function(){
        if ( !jQuery('.zerif-g-recaptcha').hasClass('recaptcha-display') ) {
            jQuery('.zerif-g-recaptcha').css('display','block').delay(1000).css('opacity','1');
        }
    });

});

/* =================================

 ===  Bootstrap Fix              ====

 =================================== */

if (navigator.userAgent.match(/IEMobile\/10\.0/)) {

    var msViewportStyle = document.createElement('style')

    msViewportStyle.appendChild(

        document.createTextNode(

            '@-ms-viewport{width:auto!important}'

        )

    )

    document.querySelector('head').appendChild(msViewportStyle)

}

/* =================================

 ===  STICKY NAV                 ====

 =================================== */

jQuery(document).ready(function() {

    // Sticky Header - http://jqueryfordesigners.com/fixed-floating-elements/
	if( typeof jQuery('#main-nav') != 'undefined' && typeof jQuery('#main-nav').offset() != 'undefined' ) {
		var top = jQuery('#main-nav').offset().top - parseFloat(jQuery('#main-nav').css('margin-top').replace(/auto/, 0));
	}

    jQuery(window).scroll(function (event) {

        // what the y position of the scroll is

        var y = jQuery(this).scrollTop();



        // whether that's below the form

        if (y >= top) {

            // if so, ad the fixed class

            jQuery('#main-nav').addClass('fixed');

        } else {

            // otherwise remove it

            jQuery('#main-nav').removeClass('fixed');

        }

    });

});


/*=================================

 ===  SMOOTH SCROLL             ====

 =================================== */

jQuery(document).ready(function(){
    jQuery('#site-navigation a[href*="#"]:not([href="#"]), header.header a[href*="#"]:not([href="#"])').bind('click',function () {
        var headerHeight;
        var hash    = this.hash;
        var idName  = hash.substring(1);    // get id name
        var alink   = this;                 // this button pressed
        // check if there is a section that had same id as the button pressed
        if ( jQuery('section [id*=' + idName + ']').length > 0 && jQuery(window).width() >= 751 ){
            jQuery('#site-navigation .current').removeClass('current');
            jQuery(alink).parent('li').addClass('current');
        }else{
            jQuery('#site-navigation .current').removeClass('current');
        }
        if ( jQuery(window).width() >= 751 ) {
            headerHeight = jQuery('#main-nav').height();
        } else {
            headerHeight = 0;
        }
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = jQuery(this.hash);
            target = target.length ? target : jQuery('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                jQuery('html,body').animate({
                    scrollTop: target.offset().top - headerHeight + 10
                }, 1200);
                return false; 
            }
        }
    });
});

jQuery(document).ready(function(){
    var headerHeight;
    jQuery('#site-navigation .current').removeClass('current');
    jQuery('#site-navigation a[href$="' + window.location.hash + '"]').parent('li').addClass('current');
    if ( jQuery(window).width() >= 751 ) {
        headerHeight = jQuery('#main-nav').height();
    } else {
        headerHeight = 0;
    }
    if (location.pathname.replace(/^\//,'') == window.location.pathname.replace(/^\//,'') && location.hostname == window.location.hostname) {
        var target = jQuery(window.location.hash);
        if (target.length) {
            jQuery('html,body').animate({
                scrollTop: target.offset().top - headerHeight + 10
            }, 1200);
            return false;
        }
    }
});

/* TOP NAVIGATION MENU SELECTED ITEMS */

function zerif_lite_scrolled() {

    if ( jQuery(window).width() >= 751 ) {

        var zerif_scrollTop = jQuery(window).scrollTop();       // cursor position
        var headerHeight = jQuery('#main-nav').outerHeight();   // header height
        var isInOneSection = 'no';                              // used for checking if the cursor is in one section or not

        // for all sections check if the cursor is inside a section
        jQuery("section, header").each( function() {
            var thisID = '#' + jQuery(this).attr('id');           // section id
            var zerif_offset = jQuery(this).offset().top;         // distance between top and our section
            var thisHeight  = jQuery(this).outerHeight();         // section height
            var thisBegin   = zerif_offset - headerHeight;                      // where the section begins
            var thisEnd     = zerif_offset + thisHeight - headerHeight;         // where the section ends

            // if position of the cursor is inside of the this section
            if ( zerif_scrollTop >= thisBegin && zerif_scrollTop <= thisEnd ) {
                isInOneSection = 'yes';
                jQuery('#site-navigation .current').removeClass('current');
                jQuery('#site-navigation a[href$="' + thisID + '"]').parent('li').addClass('current');    // find the menu button with the same ID section
                return false;
            }
            if (isInOneSection == 'no') {
                jQuery('#site-navigation .current').removeClass('current');
            }
        });
    }
}
jQuery(window).on('scroll',zerif_lite_scrolled);

/* ================================

 ===  PARALLAX                  ====

 ================================= */

jQuery(document).ready(function(){

    var jQuerywindow = jQuery(window);

    jQuery('div[data-type="background"], header[data-type="background"], section[data-type="background"]').each(function(){

        var jQuerybgobj = jQuery(this);

        jQuery(window).scroll(function() {

            var yPos = -(jQuerywindow.scrollTop() / jQuerybgobj.data('speed'));

            var coords = '50% '+ yPos + 'px';

            jQuerybgobj.css({

                backgroundPosition: coords

            });

        });

    });

});



/* ================================

 ===  KNOB                      ====

 ================================= */

jQuery(function() {

    jQuery(".skill1").knob({

        'max':100,

        'width': 64,

        'readOnly':true,

        'inputColor':' #FFFFFF ',

        'bgColor':' #222222 ',

        'fgColor':' #e96656 '

    });

    jQuery(".skill2").knob({

        'max':100,

        'width': 64,

        'readOnly':true,

        'inputColor':' #FFFFFF ',

        'bgColor':' #222222 ',

        'fgColor':' #34d293 '

    });

    jQuery(".skill3").knob({

        'max': 100,

        'width': 64,

        'readOnly': true,

        'inputColor':' #FFFFFF ',

        'bgColor':' #222222 ',

        'fgColor':' #3ab0e2 '

    });

    jQuery(".skill4").knob({

        'max': 100,

        'width': 64,

        'readOnly': true,

        'inputColor':' #FFFFFF ',

        'bgColor':' #222222 ',

        'fgColor':' #E7AC44 '

    });

});



/* ======================================

 ============ MOBILE NAV =============== */

jQuery('.navbar-toggle').on('click', function () {

    jQuery(this).toggleClass('active');

});


/* SETS THE HEADER HEIGHT */
jQuery(window).load(function(){
    setminHeightHeader();
});
jQuery(window).resize(function() {
    setminHeightHeader();
});
function setminHeightHeader()
{
    jQuery('#main-nav').css('min-height','75px');
    jQuery('.header').css('min-height','75px');
    var minHeight = parseInt( jQuery('#main-nav').height() );
    jQuery('#main-nav').css('min-height',minHeight);
    jQuery('.header').css('min-height',minHeight);
}
/* - */


/* STICKY FOOTER */
jQuery(window).load(fixFooterBottom);
jQuery(window).resize(fixFooterBottom);

function fixFooterBottom(){

    var header      = jQuery('header.header');
    var footer      = jQuery('footer#footer');
    var content     = jQuery('.site-content > .container');

    content.css('min-height', '1px');

    var headerHeight  = header.outerHeight();
    var footerHeight  = footer.outerHeight();
    var contentHeight = content.outerHeight();
    var windowHeight  = jQuery(window).height();

    var totalHeight = headerHeight + footerHeight + contentHeight;

    if (totalHeight<windowHeight){
        content.css('min-height', windowHeight - headerHeight - footerHeight );
    }else{
        content.css('min-height','1px');
    }
}


/*** CENTERED MENU */
var callback_menu_align = function () {

    var headerWrap    = jQuery('.header');
    var navWrap     = jQuery('#site-navigation');
    var logoWrap    = jQuery('.responsive-logo');
    var containerWrap   = jQuery('.container');
    var classToAdd    = 'menu-align-center';

    if ( headerWrap.hasClass(classToAdd) )
    {
        headerWrap.removeClass(classToAdd);
    }
    var logoWidth     = logoWrap.outerWidth();
    var menuWidth     = navWrap.outerWidth();
    var containerWidth  = containerWrap.width();

    if ( menuWidth + logoWidth > containerWidth ) {
        headerWrap.addClass(classToAdd);
    }
    else
    {
        if ( headerWrap.hasClass(classToAdd) )
        {
            headerWrap.removeClass(classToAdd);
        }
    }
}
jQuery(window).load(callback_menu_align);
jQuery(window).resize(callback_menu_align);

var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

/* Rollover on mobile devices */
if( isMobile.any() ) {

    /* Our team section */
    jQuery('.team-member').on('click', function(){
        jQuery('.team-member-open').removeClass('team-member-open');
        jQuery(this).addClass('team-member-open');
        event.stopPropagation();
    });
    jQuery("html").click(function() {
        jQuery('.team-member-open').removeClass('team-member-open');
    });

    /* Portfolio section */
    jQuery(document).ready(function(){
        jQuery('.cbp-rfgrid li').prepend('<p class="cbp-rfgrid-tr"></p>');
    });
    jQuery('.cbp-rfgrid li').on('click', function(){
        if ( !jQuery(this).hasClass('cbp-rfgrid-open') ){
            jQuery('.cbp-rfgrid-tr').css('display','block');
            jQuery('.cbp-rfgrid-open').removeClass('cbp-rfgrid-open');

            jQuery(this).addClass('cbp-rfgrid-open');
            jQuery(this).find('.cbp-rfgrid-tr').css('display','none');
            event.stopPropagation();
        }
    });
    jQuery("html").click(function() {
        jQuery('.cbp-rfgrid-tr').css('display','block');
        jQuery('.cbp-rfgrid-open').removeClass('cbp-rfgrid-open');
    });

}

/* latest news */
jQuery(window).load(zerif_home_latest_news);
jQuery(window).resize(zerif_home_latest_news);
function zerif_home_latest_news(){
    if( jQuery( '#carousel-homepage-latestnews').length > 0 ) {
        jQuery( '#carousel-homepage-latestnews div.item' ).height('auto');
        if( isMobile.any() || (!isMobile.any() && jQuery('.container').outerWidth()>768) ) {

            if( jQuery( '#carousel-homepage-latestnews div.item' ).length < 2 ) {
                jQuery( '#carousel-homepage-latestnews > a' ).css('display','none');
            }
            var maxheight = 0;
            jQuery( '#carousel-homepage-latestnews div.item' ).each(function(){
                if( jQuery(this).height() > maxheight ) {
                    maxheight = jQuery(this).height();
                }
            });
            jQuery( '#carousel-homepage-latestnews div.item' ).height(maxheight);
        }
    }
}

/* fix for IE9 placeholders */

jQuery(document).ready(function(){

    if (document.createElement("input").placeholder == undefined) {

        jQuery('.contact-form input, .contact-form textarea').focus(function () {
            if ( (jQuery(this).attr('placeholder') != '') && (jQuery(this).val() == jQuery(this).attr('placeholder')) ) {
                jQuery(this).val('').removeClass('zerif-hasPlaceholder');
            }
        }).blur(function () {
            if ( (jQuery(this).attr('placeholder') != '') && (jQuery(this).val() == '' || (jQuery(this).val() == jQuery(this).attr('placeholder')))) {
                jQuery(this).val(jQuery(this).attr('placeholder')).addClass('zerif-hasPlaceholder');
            }
        });

        jQuery('.contact-form input').blur();
        jQuery('.contact-form textarea').blur();

        jQuery('form.contact-form').submit(function () {
            jQuery(this).find('.zerif-hasPlaceholder').each(function() { jQuery(this).val(''); });
        });
    }
});

/* Header section */
jQuery(window).load(parallax_effect);
jQuery(window).resize(parallax_effect);

function parallax_effect(){

    if( jQuery('#parallax_move').length>0 ) {
        var scene = document.getElementById('parallax_move');
        var window_width = jQuery(window).outerWidth();
        jQuery('#parallax_move').css({
            'width':            window_width + 120,
            'margin-left':      -60,
            'margin-top':       -60,
            'position':         'absolute',
        });
        var h = jQuery('header#home').outerHeight();
        jQuery('#parallax_move').children().each(function(){
            jQuery(this).css({
                'height': h+100,
            });
        });
        if( !isMobile.any() ) {
            var parallax = new Parallax(scene);
        } else {
            jQuery('#parallax_move').css({
                'z-index': '0',
            });
            jQuery('#parallax_move .layer').css({
                'position': 'absolute',
                'top': '0',
                'left': '0',
                'z-index': '1',
            });
        }
    }

}


/* testimonial Masonry style */
var window_width_old;
var exist_class = false;
jQuery(document).ready(function(){
    if( jQuery('.testimonial-masonry').length>0 ){
        exist_class = true;
        window_width_old = jQuery('.container').outerWidth();
        if( window_width_old < 970 ) {
            jQuery('.testimonial-masonry').zerifgridpinterest({columns: 1,selector: '.feedback-box'});
        } else {
            jQuery('.testimonial-masonry').zerifgridpinterest({columns: 3,selector: '.feedback-box'});
        }
    }
});

jQuery(window).resize(function() {
    if( window_width_old != jQuery('.container').outerWidth() && exist_class === true ){
        window_width_old = jQuery('.container').outerWidth();
        if( window_width_old < 970 ) {
            jQuery('.testimonial-masonry').zerifgridpinterest({columns: 1,selector: '.feedback-box'});
        } else {
            jQuery('.testimonial-masonry').zerifgridpinterest({columns: 3,selector: '.feedback-box'});
        }
    }
});

;(function ($, window, document, undefined) {
    var defaults = {
        columns:                3,
        selector:               'div',
        excludeParentClass:     '',
    };
    function ZerifGridPinterest(element, options) {
        this.element    = element;
        this.options    = $.extend({}, defaults, options);
        this.defaults   = defaults;
        this.init();
    }
    ZerifGridPinterest.prototype.init = function () {
        var self            = this,
            $container      = $(this.element);
        $select_options = $(this.element).children();
        self.make_magic( $container, $select_options );
    };
    ZerifGridPinterest.prototype.make_magic = function (container) {
        var self            = this;
        $container      = $(container),
            columns_height  = [],
            prefix          = 'zerif',
            unique_class    = prefix + '_grid_' + self.make_unique();
        local_class     = prefix + '_grid';
        var classname;
        var substr_index    = this.element.className.indexOf(prefix+'_grid_');
        if( substr_index>-1 ) {
            classname = this.element.className.substr( 0, this.element.className.length-unique_class.length-local_class.length-2 );
        } else {
            classname = this.element.className;
        }
        var my_id;
        if( this.element.id == '' ) {
            my_id = prefix+'_id_' + self.make_unique();
        } else {
            my_id = this.element.id;
        }
        $container.after('<div id="' + my_id + '" class="' + classname + ' ' + local_class + ' ' + unique_class + '"></div>');
        var i;
        for(i=1; i<=this.options.columns; i++){
            columns_height.push(0);
            var first_cols = '';
            var last_cols = '';
            if( i%self.options.columns == 1 ) { first_cols = prefix + '_grid_first'; }
            if( i%self.options.columns == 0 ) { first_cols = prefix + '_grid_last'; }
            $('.'+unique_class).append('<div class="' + prefix + '_grid_col_' + this.options.columns +' ' + prefix + '_grid_column_' + i +' ' + first_cols + ' ' + last_cols + '"></div>');
        }
        if( this.element.className.indexOf(local_class)<0 ){
            $container.children(this.options.selector).each(function(index){
                var min = Math.min.apply(null,columns_height);
                var this_index = columns_height.indexOf(min)+1;
                $(this).attr(prefix+'grid-attr','this-'+index).appendTo('.'+unique_class +' .' + prefix + '_grid_column_'+this_index);
                columns_height[this_index-1] = $('.'+unique_class +' .' + prefix + '_grid_column_'+this_index).height();
            });
        } else {
            var no_boxes = $container.find(this.options.selector).length;
            var i;
            for( i=0; i<no_boxes; i++ ){
                var min = Math.min.apply(null,columns_height);
                var this_index = columns_height.indexOf(min)+1;
                $('#'+this.element.id).find('['+prefix+'grid-attr="this-'+i+'"]').appendTo('.'+unique_class +' .' + prefix + '_grid_column_'+this_index);
                columns_height[this_index-1] = $('.'+unique_class +' .' + prefix + '_grid_column_'+this_index).height();
            }
        }
        $container.remove();
    }
    ZerifGridPinterest.prototype.make_unique = function () {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for( var i=0; i<10; i++ )
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    }
    $.fn.zerifgridpinterest = function (options) {
        return this.each(function () {
            var value = '';
            if (!$.data(this, value)) {
                $.data(this, value, new ZerifGridPinterest(this, options) );
            }
        });
    }
})(jQuery);


/* mobile background fix */
var initHeight  = 0,
    initWidth   = 0;
var initViewMode,
    onlyInit = true; 
jQuery( document ).ready( function() { 
    initViewMode = type_view();
    mobile_bg_fix();
} );
jQuery( window ).resize( mobile_bg_fix );

function mobile_bg_fix() {
    if( isMobile.any() && jQuery( 'body.custom-background' ) ){
        var viewMode = type_view();
        if ( initViewMode != viewMode || onlyInit == true ) {
            jQuery( '.mobile-bg-fix-img' ).css( {
                'width' : window.innerWidth,
                'height': window.innerHeight + 100
            } );
            initViewMode = viewMode;
            if ( onlyInit == true ) { 
                onlyInit = false; 
                bodyClass   = jQuery( 'body.custom-background' );
                imgURL      = bodyClass.css( 'background-image' );
                imgSize     = bodyClass.css( 'background-size' );
                imgPosition = bodyClass.css( 'background-position' );
                imgRepeat   = bodyClass.css( 'background-repeat' );
                jQuery( '#mobilebgfix' ).addClass( 'mobile-bg-fix-wrap' ).find( '.mobile-bg-fix-img' ).css( {
                    'background-size':      imgSize,
                    'background-position':  imgPosition,
                    'background-repeat':    imgRepeat,
                    'background-image':     imgURL
                    } );
            }
        }
    }
}

function type_view() {
    var initHeight  = window.innerHeight;
    var initWidth   = window.innerWidth;
    if ( initWidth <= initHeight ) {
        return 'portrait';
    }
    return 'landscape';
}



/* Menu levels */
jQuery( document ).ready( function() {
  jQuery( '#site-navigation' ).zerifsubmenuorientation();
} );
;(function ($, window) {
    var defaults = {
        // 'true'   -> if there is a big submenu all submenu will be aligned to the right
        // 'false'  -> Only big submenu will be aligned to the right
        allItems: false,
      };
    function ZerifSubmenuOrientation(element, options) {
      this.element  = element;
      this.options  = $.extend({}, defaults, options);
      this.defaults = defaults;
      this.init();
    }
    ZerifSubmenuOrientation.prototype.init = function () {
      var self            = this,
          $container      = $(this.element),
          $select_options = $(this.element).children();
      var resize_finish;
      if( self.options.allItems !== true ) {
        $(window).resize(function() {
            clearTimeout(resize_finish);
            resize_finish = setTimeout( function () {
                self.make_magic($container, $select_options);
            }, 11);
        });
      }
      self.make_magic($container, $select_options);
      if( self.options.allItems !== true ) {
        setTimeout(function() {
            $(window).resize();
        }, 500);
      }
    };
    ZerifSubmenuOrientation.prototype.make_magic = function (container, select_options) {
      var self            = this,
          $container      = $(container),
          $select_options = $(select_options);
      var itemWrap;
      if( $container[0].tagName == 'UL' ) {
        itemWrap = $container[0];
      } else {
        itemWrap = $container.find( 'ul' )[0];
      }
      var windowsWidth = window.innerWidth;
	  if( typeof itemWrap != 'undefined' ) {
		  var itemId = '#' + itemWrap.id;
		  $( itemId ).children( 'li' ).each( function() {
			if ( this.id == '' ) { return; }
			var max_deep = self.max_deep( '#'+this.id );
			var offsetLeft        = $( "#"+this.id ).offset().left;
			var submenuWidthItem  = $( "#"+this.id ).find( 'ul' ).width();
			var submenuTotalWidth = max_deep * submenuWidthItem;
			if( submenuTotalWidth > 0 && windowsWidth < offsetLeft + submenuTotalWidth ) {
			  if( self.options.allItems === true ) {
				$( '#'+itemWrap.id ).addClass( 'menu-item-open-left-all' );
				return false;
			  }
			  $( '#'+this.id ).addClass( 'menu-item-open-left' );
			} else if( $( '#'+this.id ).hasClass( 'menu-item-open-left' ) ) {
			  $( '#'+this.id ).removeClass( 'menu-item-open-left' );
			}
		  } );
	  }
    };
    ZerifSubmenuOrientation.prototype.max_deep = function ( item ) {
      var maxDepth      = -1, 
          currentDepth  = -1;
      $( item + " li:not(:has(ul))").each(function() {
        currentDepth = $(this).parents("ul").length;
        if (currentDepth > maxDepth) {
           maxDepth = currentDepth;
        }
      });
      return maxDepth - 1;
    }
    $.fn.zerifsubmenuorientation = function (options) {
      return this.each(function () {
        var value = '';
          if (!$.data(this, value)) {
              $.data(this, value, new ZerifSubmenuOrientation(this, options) );
          }
      });
    }
})(jQuery,window);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./css/importable.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./css/importable.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".text-banner {\n  padding-top: 100px;\n  padding-bottom: 150px;\n  width: 100%;\n  text-align: center;\n  color: white;\n  font-size: 20px; }\n  .text-banner h2 {\n    font-size: 8vw; }\n  .text-banner h3 {\n    font-size: 7vw; }\n  @media (max-width: 900px) {\n    .text-banner #family-photo-circle {\n      float: none !important; } }\n\n.navTranslucent {\n  background-color: rgba(242, 242, 242, 0.5) !important; }\n\nnav {\n  transition: background-color 1s; }\n\n.navTranslucent a {\n  color: #e96656 !important; }\n\n#about-text {\n  height: 300px;\n  padding-top: 2%; }\n  #about-text p {\n    font-size: 25px; }\n\n\n\n@media (max-width: 1261px) {\n  #projTypesHead {\n    padding-bottom: 50px; } }\n@media (max-width: 1199px) {\n  #projTypesHead {\n    margin-top: 100px; } }\n\n@media (max-width: 1199px) {\n  #aboutus .section-header {\n    padding-bottom: 25px; } }\n\n\n    @media (max-width: 768px) {\n      .text-banner {\n        padding-top: 25px !important;\n      }\n      #Portfolio .container-fluid {\n        width: 100vw;\n        margin-left: calc(-50vw + 50%);\n        padding-left: 0px;\n        padding-right: 0px; }\n      #Portfolio .col-sm-6 {\n        padding: 0px;\n        width: 50%;\n        float: left; } }\n      @media (max-width: 768px) and (max-width: 609px) {\n        #Portfolio .col-sm-6 {\n          width: auto;\n          float: none; } }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./css/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./css/style.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_AT_RULE_IMPORT_0___ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./importable.css */ "./node_modules/css-loader/dist/cjs.js!./css/importable.css");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module '../images/loading.gif'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.i(___CSS_LOADER_AT_RULE_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
exports.push([module.i, "/*\nTheme Name: Zerif Lite\nTheme URI: http://themeisle.com/themes/zerif-lite/\nAuthor: ThemeIsle\nAuthor URI: http://themeisle.com\nDescription: Zerif LITE is a free one page Wordpress theme. It's perfect for web agency business,corporate business,personal and parallax business portfolio, photography sites and freelancer.Is built on BootStrap with parallax support, is responsive, clean, modern, flat and minimal. Zerif Lite is ecommerce (WooCommerce) Compatible, WPML, RTL, Retina-Ready, SEO Friendly and with parallax, full screen image is one of the best business themes.\nVersion: 1.8.4.9\nLicense: GNU General Public License version 3\nLicense URI: license.txt\nText Domain: zerif-lite\nDomain Path: /languages/\nTags: one-column, two-columns, right-sidebar,front-page-post-form,full-width-template,rtl-language-support,sticky-post,theme-options, custom-background, custom-menu, editor-style, featured-images, threaded-comments, translation-ready, footer-widgets, portfolio\n*/\n\n\n/*--------------------------------------------------------------\n1.0 - Reset\n--------------------------------------------------------------*/\nhtml {\n\tfont-size: 62.5%; /* Corrects text resizing oddly in IE6/7 when body font-size is set using em units http://clagnut.com/blog/348/#c790 */\n\toverflow-y: scroll; /* Keeps page centered in all browsers regardless of content height */\n\t-webkit-text-size-adjust: 100%; /* Prevents iOS text size adjust after orientation change, without disabling user zoom */\n\t-ms-text-size-adjust:     100%; /* www.456bereastreet.com/archive/201012/controlling_text_size_in_safari_for_ios_without_disabling_user_zoom/ */\n}\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, font, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td {\n\tborder: 0;\n\tfont-family: inherit;\n\tfont-size: 16px;\n\tfont-style: inherit;\n\tfont-weight: inherit;\n\tmargin: 0;\n\toutline: 0;\n\tpadding: 0;\n\tvertical-align: baseline;\n}\n*,\n*:before,\n*:after { /* apply a natural box layout model to all elements; see http://www.paulirish.com/2012/box-sizing-border-box-ftw/ */\n\t-webkit-box-sizing: border-box; /* Not needed for modern webkit but still used by Blackberry Browser 7.0; see http://caniuse.com/#search=box-sizing */\n\t-moz-box-sizing:    border-box; /* Still needed for Firefox 28; see http://caniuse.com/#search=box-sizing */\n\tbox-sizing:         border-box;\n}\nbody {\n\tbackground: #fff;\n}\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nmain,\nnav,\nsection {\n\tdisplay: block;\n}\nol, ul {\n\tlist-style: none;\n}\ntable { /* tables still need 'cellspacing=\"0\"' in the markup */\n\tborder-collapse: separate;\n\tborder-spacing: 0;\n}\ncaption, th, td {\n\tfont-weight: normal;\n\ttext-align: left;\n}\nblockquote:before,\nblockquote:after {\n\tcontent: \"\";\n}\nblockquote {\n\tquotes: \"\" \"\";\n}\nq {\n  quotes: \"“\" \"”\" \"‘\" \"’\";\n}\nq:before {\n    content: open-quote;\n}\nq:after {\n    content: close-quote;\n}\na:focus {\n\toutline: thin dotted;\n}\na:hover,\na:active {\n\toutline: 0;\n}\na img {\n\tborder: 0;\n}\nbody {\n\tfont-family: 'Lato', Helvetica, sans-serif !important;\n\tfont-size: 14px;\n\tcolor: #808080;\n\tfont-weight: normal;\n\toverflow-x: hidden;\n\tline-height: 25px;\n\ttext-align: center;\n}\n/* Internet Explorer 10 in Windows 8 and Windows Phone 8 Bug fix */\n@-webkit-viewport {\n\twidth: device-width;\n}\n@-moz-viewport {\n\twidth: device-width;\n}\n@-ms-viewport {\n\twidth: device-width;\n}\n@-o-viewport {\n\twidth: device-width;\n}\n@viewport {\n\twidth: device-width;\n}\n/* Other fixes*/\n*,*:before,*:after {\n\t-webkit-box-sizing: border-box;\n\t-moz-box-sizing: border-box;\n\tbox-sizing: border-box;\n}\ni {\n\tvertical-align: middle;\n}\nul, ol {\npadding-left: 0 !important;\n}\n/* Selection colours (easy to forget) */\n::selection {\n\tbackground: #FC6D6D;\n\tcolor: #FFF;\n}\n::-moz-selection {\n\tbackground: #FC6D6D;\n\tcolor: #FFF;\n}\na {\n\tcolor: #e96656;\n\t-webkit-transition: all 700ms;\n\ttransition: all 700ms;\n}\na,a:hover {\n\ttext-decoration: none;\n}\na:hover {\n\tcolor: #cb4332;\n}\np {\n    margin: 0;\n}\n.full-width {\n\twidth: 100%;\n\tmargin: auto;\n}\n/* do not group these rules (placeholder colors) */\n*::-webkit-input-placeholder {\n    color: #999 !important;\n}\n*:-moz-placeholder {\n    color: #999 !important;\n}\n*::-moz-placeholder {\n    color: #999 !important;\n}\n*:-ms-input-placeholder {\n    color: #999 !important;\n}\n/*--------------------------------------------------------------\n2.0 Typography\n--------------------------------------------------------------*/\nbody,\nbutton,\ninput,\nselect,\ntextarea {\n\tcolor: #404040;\n\tfont-family: sans-serif;\n\tfont-size: 16px;\n\tfont-size: 1.6rem;\n\tline-height: 1.5;\n}\nh1, h2, h3, h4, h5, h6 {\n\tclear: both;\n}\np {\n\tmargin-bottom: 1.5em;\n}\nb, strong {\n\tfont-weight: bold;\n}\ndfn, cite, em, i {\n\tfont-style: italic;\n}\nblockquote {\n\tmargin: 0 1.5em;\n}\nblockquote {\n\tfont-size: 18px;\n\tfont-style: italic;\n\tfont-weight: 300;\n\tmargin: 24px 40px;\n\tline-height: 26px;\n}\naddress {\n\tmargin: 0 0 1.5em;\n}\npre {\n\tbackground: #eee;\n\tfont-family: \"Courier 10 Pitch\", Courier, monospace;\n\tfont-size: 15px;\n\tfont-size: 1.5rem;\n\tline-height: 1.6;\n\tmargin-bottom: 1.6em;\n\tmax-width: 100%;\n\toverflow: auto;\n\tpadding: 1.6em;\n}\ncode, kbd, tt, var {\n\tfont: 15px Monaco, Consolas, \"Andale Mono\", \"DejaVu Sans Mono\", monospace;\n}\nabbr, acronym {\n\tborder-bottom: 1px dotted #666;\n\tcursor: help;\n}\nmark, ins {\n\tbackground: #fff9c0;\n\ttext-decoration: none;\n}\nsup,\nsub {\n\tfont-size: 75%;\n\theight: 0;\n\tline-height: 0;\n\tposition: relative;\n\tvertical-align: baseline;\n}\nsup {\n\tbottom: 1ex;\n}\nsub {\n\ttop: .5ex;\n}\nsmall {\n\tfont-size: 75%;\n}\nbig {\n\tfont-size: 125%;\n}\ndl {\n\tmargin: 0 20px;\n}\nh1, h2, h3, h4, h5, h6 {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n\tmargin-bottom: 10px;\n\tdisplay: block;\n\tclear: both;\n}\nh1,h2 {\n\tfont-family: 'Montserrat', Helvetica, sans-serif;\n\tfont-weight: 700;\n\tline-height: 35px;\n}\nh1,\nh1 span {\n\tfont-size: 30px;\n}\nh2 {\n\tfont-size: 26px;\n}\nh3 {\n\tfont-size: 24px;\n}\nh4 {\n\tfont-size: 18px;\n}\nh5 {\n\tfont-size: 17px;\n}\nh6 {\n\tfont-size: 16px;\n}\n/*--------------------------------------------------------------\n3.0 Buttons\n--------------------------------------------------------------*/\n.buttons {\n\ttext-align: center;\n\tmargin-top: 45px;\n}\n.button {\n\tdisplay: inline-block;\n\ttext-align: center;\n\ttext-transform: uppercase;\n\tpadding: 10px 35px 10px 35px;\n\tborder-radius: 4px;\n\tmargin: 10px;\n}\n.custom-button {\n\tdisplay: inline-block !important;\n\ttext-align: center;\n\ttext-transform: uppercase;\n\tpadding: 13px 35px 13px 35px;\n\tborder-radius: 4px;\n\tmargin: 10px;\n\tborder: none;\n}\n.red-btn {\n\tbackground: #e96656;\n}\n.green-btn {\n\tbackground: #1e9e6b;\n}\n.blue-btn {\n\tbackground: #3ab0e2;\n}\n.yellow-btn {\n\tbackground: #E7AC44;\n}\n.red-btn,.green-btn,.blue-btn,.yellow-btn {\n\tcolor: #FFF !important;\n\t-webkit-transition: all 0.3s ease-in-out;\n\ttransition: all 0.3s ease-in-out;\n}\n.blue-btn:hover {\n\tcolor: #FFF;\n\tbackground: #1288b9;\n}\n.red-btn:hover {\n\tcolor: #FFF;\n\tbackground: #cb4332;\n}\n.green-btn:hover {\n\tcolor: #FFF;\n\tbackground: #069059;\n}\n.yellow-btn:hover {\n\tcolor: #FFF;\n\tbackground: #d8951e;\n}\n.btn:hover{\n    box-shadow: none;\n}\n/*--------------------------------------------------------------\n3.0 Elements\n--------------------------------------------------------------*/\nhr {\n\tbackground-color: #ccc;\n\tborder: 0;\n\theight: 1px;\n\tmargin-bottom: 1.5em;\n}\nul, ol {\n\tmargin: 0 0 1.5em 3em;\n}\nul {\n\tlist-style: disc;\n}\nol {\n\tlist-style: decimal;\n}\nli > ul,\nli > ol {\n\tmargin-bottom: 0;\n\tmargin-left: 1.5em;\n}\ndt {\n\tfont-weight: bold;\n}\ndd {\n\tmargin: 0 1.5em 1.5em 0;\n}\nimg {\n\theight: auto; /* Make sure images are scaled correctly. */\n\tmax-width: 100%; /* Adhere to container width. */\n}\nfigure {\n\tmargin: 0;\n}\n.site-main p {\n\tmargin: 0 0 24px;\n}\ntable {\n\tborder-bottom: 1px solid #ededed;\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n\tfont-size: 14px;\n\tline-height: 2;\n\tmargin: 0 0 20px;\n\twidth: 100%;\n}\ncaption,\nth,\ntd {\n\tfont-weight: normal;\n\ttext-align: left;\n}\ncaption {\n\tfont-size: 16px;\n\tmargin: 20px 0;\n}\nth {\n\tfont-weight: bold;\n\ttext-transform: uppercase;\n\tborder-top: 1px solid #ededed;\n\tpadding: 6px 10px 6px 0;\n}\ntd {\n\tborder-top: 1px solid #ededed;\n\tpadding: 6px 10px 6px 0;\n}\nthead th{\n\tborder: none;\n}\n/*---------------------------------------\n **   COLORS                         -----\n-----------------------------------------*/\n/** BACKGROUNDS **/\n.red-bg {\n\tbackground: #e96656;\n}\n.green-bg {\n\tbackground: #34d293;\n}\n.blue-bg {\n\tbackground: #3ab0e2;\n}\n.yellow-bg {\n\tbackground: #E7AC44;\n}\n.dark-bg {\n\tbackground: #404040;\n}\n.white-bg {\n\tbackground:  #FFFFFF;\n}\n/** FOR TEXTS AND ICON FONTS **/\n.red-text {\n\tcolor: #e96656;\n}\n.green-text {\n\tcolor: #34d293;\n}\n.blue-text {\n\tcolor: #3ab0e2;\n}\n.yellow-text {\n\tcolor: #f7d861;\n}\n.dark-text {\n\tcolor: #404040;\n}\n.white-text {\n\tcolor: #FFFFFF;\n}\n/*---------------------------------------\n **   BORDER BOTTOMS                 -----\n-----------------------------------------*/\n.white-border-bottom:before {\n\tposition: absolute;\n\tmargin: auto;\n\tz-index: 1;\n\tcontent: \"\";\n\twidth: 50%;\n\theight: 2px;\n\tbackground: #F5F5F5;\n\tbottom: -9px;\n\tleft: 25%;\n}\n.dark-border-bottom:before {\n\tposition: absolute;\n\tmargin: auto;\n\tz-index: 1;\n\tcontent: \"\";\n\twidth: 50%;\n\theight: 2px;\n\tbackground: #404040;\n\tbottom: -9px;\n\tleft: 25%;\n}\n.red-border-bottom:before {\n\tposition: absolute;\n\tmargin: auto;\n\tz-index: 1;\n\tcontent: \"\";\n\twidth: 75%;\n\theight: 2px;\n\tbackground: #e96656;\n\tbottom: -9px;\n\tleft: 12.5%;\n}\n.green-border-bottom:before {\n\tposition: absolute;\n\tmargin: auto;\n\tz-index: 1;\n\tcontent: \"\";\n\twidth: 75%;\n\theight: 2px;\n\tbackground: #34d293;\n\tbottom: -9px;\n\tleft: 12.5%;\n}\n.blue-border-bottom:before {\n\tposition: absolute;\n\tmargin: auto;\n\tz-index: 1;\n\tcontent: \"\";\n\twidth: 75%;\n\theight: 2px;\n\tbackground: #3ab0e2;\n\tbottom: -9px;\n\tleft: 12.5%;\n}\n.yellow-border-bottom:before {\n\tposition: absolute;\n\tmargin: auto;\n\tz-index: 1;\n\tcontent: \"\";\n\twidth: 75%;\n\theight: 2px;\n\tbackground: #f7d861;\n\tbottom: -9px;\n\tleft: 12.5%;\n}\n/*---------------------------------------\n **   4.0 Forms                     -----\n-----------------------------------------*/\nbutton,\ninput,\nselect,\ntextarea {\n\tfont-size: 100%; /* Corrects font size not being inherited in all browsers */\n\tmargin: 0; /* Addresses margins set differently in IE6/7, F3/4, S5, Chrome */\n\tvertical-align: baseline; /* Improves appearance and consistency in all browsers */\n\t*vertical-align: middle; /* Improves appearance and consistency in IE6/IE7 */\n}\nbutton,\ninput[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n\ttext-align: center;\n\ttext-transform: uppercase;\n\tpadding: 13px 35px 13px 35px;\n\tborder-radius: 4px;\n\tmargin: 10px;\n\tborder: none;\n\tbackground-color: #e96656;\n\tbox-shadow: none;\n\ttext-shadow: none;\n\tfont-weight: 400;\n\tvertical-align: middle;\n\tcursor: pointer;\n\twhite-space: nowrap;\n\tfont-size: 14px;\n\tcolor: #FFF;\n}\nbutton:hover,\ninput[type=\"button\"]:hover,\ninput[type=\"reset\"]:hover,\ninput[type=\"submit\"]:hover {\n\tborder-color: #ccc #bbb #aaa #bbb;\n}\nbutton:focus,\ninput[type=\"button\"]:focus,\ninput[type=\"reset\"]:focus,\ninput[type=\"submit\"]:focus,\nbutton:active,\ninput[type=\"button\"]:active,\ninput[type=\"reset\"]:active,\ninput[type=\"submit\"]:active {\n\tborder-color: #aaa #bbb #bbb #bbb;\n}\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n\tpadding: 0; /* Addresses excess padding in IE8/9 */\n}\ninput[type=\"search\"] {\n\t-webkit-appearance: textfield; /* Addresses appearance set to searchfield in S5, Chrome */\n\t-webkit-box-sizing: content-box; /* Addresses box sizing set to border-box in S5, Chrome (include -moz to future-proof) */\n\t-moz-box-sizing:    content-box;\n\tbox-sizing:         content-box;\n}\ninput[type=\"search\"]::-webkit-search-decoration { /* Corrects inner padding displayed oddly in S5, Chrome on OSX */\n\t-webkit-appearance: none;\n}\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner { /* Corrects inner padding and border displayed oddly in FF3/4 www.sitepen.com/blog/2008/05/14/the-devils-in-the-details-fixing-dojos-toolbar-buttons/ */\n\tborder: 0;\n\tpadding: 0;\n}\ninput[type=\"text\"],\ninput[type=\"email\"],\ninput[type=\"url\"],\ninput[type=\"password\"],\ninput[type=\"search\"],\ntextarea {\n\tcolor: #555;\n\tborder: 1px solid rgba(0, 0, 0, 0.1);\n\tborder-radius: 0;\n}\ninput[type=\"text\"]:focus,\ninput[type=\"email\"]:focus,\ninput[type=\"url\"]:focus,\ninput[type=\"password\"]:focus,\ninput[type=\"search\"]:focus,\ntextarea:focus {\n\tcolor: #111;\n}\ninput[type=\"text\"],\ninput[type=\"email\"],\ninput[type=\"url\"],\ninput[type=\"password\"],\ninput[type=\"search\"] {\n\tpadding: 3px;\n}\ntextarea {\n\toverflow: auto; /* Removes default vertical scrollbar in IE6/7/8/9 */\n\tpadding-left: 3px;\n\tvertical-align: top; /* Improves readability and alignment in all browsers */\n\twidth: 98%;\n}\n.entry-content button,\n.entry-content input[type=\"button\"],\n.entry-content input[type=\"reset\"],\n.entry-content input[type=\"submit\"] {\n\tpadding: 5px 20px 5px 20px;\n}\n.entry-content button:hover,\n.entry-content input[type=\"button\"]:hover,\n.entry-content input[type=\"reset\"]:hover,\n.entry-content input[type=\"submit\"]:hover {\n\tbackground: #cb4332;\n}\n.input-box {\n\tborder: 0 !important;\n\twidth: 274px;\n\ttext-align: left;\n\ttext-transform: none;\n\tpadding: 9px;\n\tmin-height: 46px;\n\tpadding-left: 15px !important;\n\tdisplay: inline-block;\n\tborder-radius: 4px;\n\tbackground: rgba(255,255,255, 0.95);\n}\n.textarea-box {\n\tborder: 0;\n\ttext-align: left;\n\ttext-transform: none;\n\tpadding: 9px;\n\tmin-height: 250px;\n\tpadding-left: 15px;\n\tdisplay: inline-block;\n\tborder-radius: 4px;\n\tbackground: rgba(255,255,255, 0.95);\n}\ntextarea:hover,\ninput:hover,\ntextarea:active,\ninput:active,\ntextarea:focus,\ninput:focus {\n    outline: 1 !important;\n    outline-color: #e96656 !important;\n\n  -webkit-box-shadow:none !important;\n  box-shadow:none !important;\n}\ninput:focus,\ntextarea:focus {\n\tborder: 1px solid rgba(0, 0, 0, 0.3);\n\toutline: 0;\n}\n /*---------------------------------------\n **   5.0 Navigation                 -----\n-----------------------------------------*/\n /*---------------------------------------\n **   5.1 Links                 -----\n-----------------------------------------*/\na {\n\tcolor: #e96656;\n}\na:visited {\n\tcolor: #e96656;\n}\na:hover,\na:focus,\na:active {\n\tcolor: #cb4332;\n}\n/*---------------------------------------\n **   5.2 Menus                  -----\n-----------------------------------------*/\n.main-navigation {\n\tclear: both;\n\tdisplay: block;\n\tfloat: left;\n\twidth: 100%;\n}\n.main-navigation ul {\n\tlist-style: none;\n\tmargin: 0;\n\tpadding-left: 0;\n}\n.main-navigation li {\n\tfloat: left;\n\tposition: relative;\n}\n.main-navigation a {\n\tdisplay: block;\n\ttext-decoration: none;\n}\n.main-navigation ul ul {\n\tbox-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);\n\tdisplay: none;\n\tfloat: left;\n\tleft: 0;\n\tposition: absolute;\n\ttop: 1.5em;\n\tz-index: 99999;\n}\n.main-navigation ul ul ul {\n\tleft: 100%;\n\ttop: 0;\n}\n.main-navigation ul ul a {\n\twidth: 200px;\n}\n.main-navigation ul ul li {\n}\n.main-navigation li:hover > a {\n}\n.main-navigation ul ul :hover > a {\n}\n.main-navigation ul ul a:hover {\n}\n.main-navigation ul li:hover > ul {\n\tdisplay: block;\n}\n.main-navigation .current_page_item a,\n.main-navigation .current-menu-item a {\n}\n.navbar-collapse{\n\toverflow: visible !important;\n}\n.navbar-inverse li.menu-item-open-left:hover > ul.sub-menu,\n.navbar-inverse li.menu-item-open-left.link-focus > ul.sub-menu {\n\tright: 0;\n}\n.navbar-inverse li.menu-item-open-left li:hover > ul.sub-menu,\n.navbar-inverse ul ul li.link-focus > ul.sub-menu {\n\tright: 100%;\n\tleft: auto;\n}\n.site-main .comment-navigation,\n.site-main .paging-navigation,\n.site-main .post-navigation {\n\tmargin: 0 0 1.5em;\n\toverflow: hidden;\n}\n.comment-navigation .nav-previous,\n.paging-navigation .nav-previous,\n.post-navigation .nav-previous {\n\tfloat: left;\n}\n.comment-navigation .nav-next,\n.paging-navigation .nav-next,\n.post-navigation .nav-next {\n\tfloat: right;\n\ttext-align: right;\n\twidth: 50%;\n}\n.nav-links a {\n\tcolor:#e96656;\n}\n.site-main .post-navigation {\n\tfloat: left;\n\twidth: 100%;\n}\n /*---------------------------------------\n **   6.0 Accessibility                   -----\n-----------------------------------------*/\n/* Text meant only for screen readers */\n.screen-reader-text {\n\tclip: rect(1px, 1px, 1px, 1px);\n\tposition: absolute !important;\n}\n.screen-reader-text:hover,\n.screen-reader-text:active,\n.screen-reader-text:focus {\n\tbackground-color: #f1f1f1;\n\tborder-radius: 3px;\n\tbox-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.6);\n\tclip: auto !important;\n\tcolor: #21759b;\n\tdisplay: block;\n\tfont-size: 14px;\n\tfont-weight: bold;\n\theight: auto;\n\tleft: 5px;\n\tline-height: normal;\n\tpadding: 15px 23px 14px;\n\ttext-decoration: none;\n\ttop: 5px;\n\twidth: auto;\n\tz-index: 100000; /* Above WP toolbar */\n}\n /*---------------------------------------\n **   7.0 Alignments                   -----\n-----------------------------------------*/\n.alignleft {\n\tdisplay: inline;\n\tfloat: left;\n\tmargin-right: 1.5em;\n}\n.alignright {\n\tdisplay: inline;\n\tfloat: right;\n\tmargin-left: 1.5em;\n}\n.aligncenter {\n\tclear: both;\n\tdisplay: block;\n\tmargin: 0 auto;\n}\n /*---------------------------------------\n **   8.0 Clearings                   -----\n-----------------------------------------*/\n.clear:before,\n.clear:after,\n.entry-content:before,\n.entry-content:after,\n.comment-content:before,\n.comment-content:after,\n.site-header:before,\n.site-header:after,\n.site-content:before,\n.site-content:after,\n.site-footer:before,\n.site-footer:after {\n\tcontent: '';\n\tdisplay: table;\n}\n.clear:after,\n.entry-content:after,\n.comment-content:after,\n.site-header:after,\n.site-content:after,\n.site-footer:after {\n\tclear: both;\n}\n /*---------------------------------------\n **   9.0 Widgets                   -----\n-----------------------------------------*/\n.sidebar-wrap {\n\tborder-left: 1px solid rgba(0, 0, 0, 0.05);\n}\n.widget {\n\t/*margin: 0 0 1.5em;\n\tmargin-bottom: 30px;*/\n}\n.widget .widget-title {\n\tcolor: #404040;\n\ttext-transform: uppercase;\n\tmargin-bottom: 30px;\n\tfont-weight: bold;\n\tfont-size: 17px;\n\tposition: relative;\n\ttext-align: left;\n\tmargin-top: 30px;\n\tpadding-bottom: 5px;\n\tfloat: none;\n}\n.widget .widget-title:before{\n\tposition: absolute;\n\tmargin: auto;\n\tz-index: 1;\n\tcontent: \"\";\n\twidth: 35%;\n\theight: 2px;\n\tbackground: #e96656;\n\tbottom: -9px;\n\tleft: 0;\n}\n\n.widget-area {\n\tfloat: left;\n\twidth: 100%;\n}\n.widget-area .widget {\n\tclear: both;\n}\n/* Make sure select elements fit in widgets */\n.widget select {\n\tmax-width: 100%;\n\twidth: 100%;\n\tpadding: 10px;\n\tborder: 1px solid #e9e9e9;\n}\n.tagcloud a{\n\tbackground: #FCFCFC;\n\n\tpadding: 2px 5px;\n}\n/* Search widget */\n.widget_search .search-submit {\n/*\tdisplay: none; */\n\tdisplay: block;\n\twidth: 46px;\n\theight: 46px;\n\tposition: absolute;\n\ttop: 0;\n\tright: 0;\n\tpadding: 0;\n\tmargin: 0;\n\t/*background: url(images/search_icon.png) no-repeat center center;*/\n\ttext-indent: -9999999px;\n}\n.widget_search label{\n\tmargin-bottom: 5px;\n\twidth: 100%;\n\tposition: relative;\n}\n.widget_search form{\n\tposition: relative;\n}\n.widget_search input{\n\twidth: 83%;\n\tpadding: 12px 15% 12px 2%;\n}\n.widget ul {\n\tmargin:0;\n\tpadding:0;\n\tdisplay: block;\n}\n.widget li {\n\tlist-style: none;\n\tmargin: 15px 0;\n\ttext-align: left;\n\tmargin-left: 3%;\n\tposition: relative;\n\tpadding-left: 10px;\n}\n.widget li:before{\n\tcontent: '';\n\twidth: 4px;\n\theight: 4px;\n\tbackground: #e9e9e9;\n\tfloat: left;\n\tposition: absolute;\n\tmargin-top: 11px;\n\tleft: 0;\n}\n.widget li a {\n\tcolor:#808080;\n}\n.widget li a:hover {\n\tcolor:#404040\n}\n /*---------------------------------------\n **   10.0 Content                   -----\n-----------------------------------------*/\n\n.container>.navbar-header,\n.container-fluid>.navbar-header,\n.container>.navbar-collapse,\n.container-fluid>.navbar-collapse {\n    margin-right: 0;\n    margin-left: 0;\n}\n.site-content {\n\tbackground: #FFF;\n}\n.home .site-content {\n\tbackground: none;\n}\n\n /*---------------------------------------\n **   10.1 Posts and pages                   -----\n-----------------------------------------*/\n.sticky {\n}\n.hentry {\n\tmargin: 0 0 1.5em;\n}\n.byline,\n.updated {\n\tdisplay: none;\n}\n.single .byline,\n.group-blog .byline {\n\tdisplay: none;\n}\n.entry-meta-large .byline,\n.entry-meta-large .updated {\n\tdisplay: none;\n}\n.page-content,\n.entry-content,\n.entry-summary {\n\tmargin: 1.5em 0 0;\n}\n.page-links {\n\tclear: both;\n\tmargin: 0 0 1.5em;\n}\n.page-header{\n\ttext-align: left;\n\tborder-bottom: none;\n\tmargin: 0px 0 40px;\n}\n.search-results .page-header {\n\tmargin: 0px 0 40px;\n}\n.page-header .page-title{\n\tposition: relative;\n}\n.page-header .page-title:before{\n\tposition: absolute;\n\tmargin: auto;\n\tz-index: 1;\n\tcontent: \"\";\n\twidth: 35%;\n\theight: 2px;\n\tbackground: #e9e9e9;\n\tbottom: -9px;\n\tleft: 0;\n}\n.taxonomy-description{\n\tmargin-top:  15px;\n}\n.entry-title{\n\tposition: relative;\n}\n.entry-title:before {\n\tposition: absolute;\n\tmargin: auto;\n\tz-index: 1;\n\tcontent: \"\";\n\twidth: 10%;\n\theight: 2px;\n\tbackground: #e96656;\n\tbottom: -9px;\n\tleft: 0;\n}\n.entry-meta{\n\tmargin-top: 10px;\n}\n.content-area .entry-header {\n\toverflow: hidden;\n}\n\n /*---------------------------------------\n **   10.2 Asides                   -----\n-----------------------------------------*/\n.blog .format-aside .entry-title,\n.archive .format-aside .entry-title {\n\tdisplay: none;\n}\n /*---------------------------------------\n **   10.3 Comments                   -----\n-----------------------------------------*/\n.comment {\n\tlist-style:none;\n\tmargin-top:10px;\n\tmargin-bottom:10px;\n}\n.comment a {\n\tcolor:#c7254e;\n}\n.comment-body {\n\ttext-align: left;\n\tborder-bottom: 1px solid rgba(0, 0, 0, 0.05);\n\tpadding-bottom: 10px;\n\tposition: relative;\n\tpadding-left: 40px;\n}\n.comment-content a {\n\tword-wrap: break-word;\n}\n.bypostauthor {\n}\n.comment-form, .comments-title, .comment-reply-title {\n\ttext-align:left;\n}\n.comment .reply a {\n\tfont-size: 12px;\n}\n.comment-form p {\n\tmargin:10px 10px 10px 0;\n}\n.comment-form  label {\n\twidth:85px;\n}\n.comments-title {\n\tfont-size:20px;\n\tmargin-bottom:20px;\n}\n.comment-list {\n\tmargin-left:0px;\n}\n.comment-list li{\n\tlist-style: none;\n\tfloat: left;\n\twidth: 100%;\n}\n.comment-reply-link {\n\tborder: 1px solid #ccc;\n\tborder-radius: 3px;\n\tfont-size: 1.2rem;\n\tline-height: 1;\n\tpadding: .6em 1em .4em;\n\ttext-shadow: 0 1px 0 rgba(255, 255, 255, 0.8);\n\tfont-family: sans-serif;\n\tbox-shadow:inset 0 1px 0 rgba(255, 255, 255, 0.5), inset 0 15px 17px rgba(255, 255, 255, 0.5), inset 0 -5px 12px rgba(0, 0, 0, 0.05);\n\tbox-shadow: none;\n\ttext-shadow: none;\n\tpadding: 3px 5px;\n\tposition: absolute;\n\ttop: 0;\n\tright: 0;\n}\n.comment-form #submit, .comment-reply-link {\n\tbackground:#e96656;\n\tborder-color:#e96656;\n\tcolor:#fff !important;\n}\n.comment-form #submit:hover,\n.comment-form #submit:focus,\n.comment-form #submit:active {\n\n\tbackground: #cb4332;\n}\n.comment-meta{\n\n\tmargin-top: 0 !important;\n\tpadding-top: 0 !important;\n}\n.comment-metadata{\n\tposition: absolute;\n\ttop: -2px;\n\tright: 55px;\n}\n.comment-metadata,\n.comment-metadata a{\n\tcolor: #888;\n\tfont-style: italic;\n\tfont-size: 12px;\n\tpadding: 3px 0px;\n}\n.comment-reply-link:hover{\n\tbackground: #cb4332;\n\tbox-shadow: none;\n}\n.comment-author img{\n\tborder-radius: 50%;\n\tposition: absolute;\n\tleft: 0;\n}\n.comment-author b.fn{\n\tcolor: #000;\n}\n /*---------------------------------------\n **   11.0 Infinite scroll                    -----\n-----------------------------------------*/\n/* Globally hidden elements when Infinite Scroll is supported and in use. */\n.infinite-scroll .paging-navigation, /* Older / Newer Posts Navigation (always hidden) */\n.infinite-scroll.neverending .site-footer { /* Theme Footer (when set to scrolling) */\n\tdisplay: none;\n}\n/* When Infinite Scroll has reached its end we need to re-display elements that were hidden (via .neverending) before */\n.infinity-end.neverending .site-footer {\n\tdisplay: block;\n}\n /*---------------------------------------\n **   12.0 Media                    -----\n-----------------------------------------*/\n.page-content img.wp-smiley,\n.entry-content img.wp-smiley,\n.comment-content img.wp-smiley {\n\tborder: none;\n\tmargin-bottom: 0;\n\tmargin-top: 0;\n\tpadding: 0;\n}\n.wp-caption {\n\tborder: 1px solid #ccc;\n\tmargin-bottom: 1.5em;\n\tmax-width: 100%;\n}\n.wp-caption img[class*=\"wp-image-\"] {\n\tdisplay: block;\n\tmargin: 1.2% auto 0;\n\tmax-width: 98%;\n}\n.wp-caption-text {\n\ttext-align: center;\n}\n.wp-caption .wp-caption-text {\n\tmargin: 0.8075em 0;\n}\n.site-main .gallery {\n\tmargin-bottom: 1.5em;\n}\n.gallery-caption {\n}\n.site-main .gallery a img {\n\tborder: none;\n\theight: auto;\n\tmax-width: 90%;\n}\n.site-main .gallery dd,\n.site-main .gallery figcaption {\n\tmargin: 0;\n}\n.site-main .gallery-columns-4 .gallery-item {\n}\n.site-main .gallery-columns-4 .gallery-item img {\n}\n/* Make sure embeds and iframes fit their containers */\nembed,\niframe,\nobject {\n\tmax-width: 100%;\n}\n /*---------------------------------------\n **   6.5 Gallery                    -----\n-----------------------------------------*/\n.gallery {\n\tmargin-bottom: 20px;\n}\n.gallery-item {\n\tfloat: left;\n\tmargin: 0 4px 4px 0;\n\toverflow: hidden;\n\tposition: relative;\n}\n.gallery-columns-1 .gallery-item {\n\tmax-width: 100%;\n}\n.gallery-columns-2 .gallery-item {\n\tmax-width: 48%;\n\tmax-width: -webkit-calc(50% - 4px);\n\tmax-width:         calc(50% - 4px);\n}\n.gallery-columns-3 .gallery-item {\n\tmax-width: 32%;\n\tmax-width: -webkit-calc(33.3% - 4px);\n\tmax-width:         calc(33.3% - 4px);\n}\n.gallery-columns-4 .gallery-item {\n\tmax-width: 23%;\n\tmax-width: -webkit-calc(25% - 4px);\n\tmax-width:         calc(25% - 4px);\n}\n.gallery-columns-5 .gallery-item {\n\tmax-width: 19%;\n\tmax-width: -webkit-calc(20% - 4px);\n\tmax-width:         calc(20% - 4px);\n}\n.gallery-columns-6 .gallery-item {\n\tmax-width: 15%;\n\tmax-width: -webkit-calc(16.7% - 4px);\n\tmax-width:         calc(16.7% - 4px);\n}\n.gallery-columns-7 .gallery-item {\n\tmax-width: 13%;\n\tmax-width: -webkit-calc(14.28% - 4px);\n\tmax-width:         calc(14.28% - 4px);\n}\n.gallery-columns-8 .gallery-item {\n\tmax-width: 11%;\n\tmax-width: -webkit-calc(12.5% - 4px);\n\tmax-width:         calc(12.5% - 4px);\n}\n.gallery-columns-9 .gallery-item {\n\tmax-width: 9%;\n\tmax-width: -webkit-calc(11.1% - 4px);\n\tmax-width:         calc(11.1% - 4px);\n}\n.gallery-columns-1 .gallery-item:nth-of-type(1n),\n.gallery-columns-2 .gallery-item:nth-of-type(2n),\n.gallery-columns-3 .gallery-item:nth-of-type(3n),\n.gallery-columns-4 .gallery-item:nth-of-type(4n),\n.gallery-columns-5 .gallery-item:nth-of-type(5n),\n.gallery-columns-6 .gallery-item:nth-of-type(6n),\n.gallery-columns-7 .gallery-item:nth-of-type(7n),\n.gallery-columns-8 .gallery-item:nth-of-type(8n),\n.gallery-columns-9 .gallery-item:nth-of-type(9n) {\n\tmargin-right: 0;\n}\n.gallery-columns-1.gallery-size-medium figure.gallery-item:nth-of-type(1n+1),\n.gallery-columns-1.gallery-size-thumbnail figure.gallery-item:nth-of-type(1n+1),\n.gallery-columns-2.gallery-size-thumbnail figure.gallery-item:nth-of-type(2n+1),\n.gallery-columns-3.gallery-size-thumbnail figure.gallery-item:nth-of-type(3n+1) {\n\tclear: left;\n}\n.gallery-caption {\n\tbackground-color: rgba(0, 0, 0, 0.7);\n\t-webkit-box-sizing: border-box;\n\t-moz-box-sizing:    border-box;\n\tbox-sizing:         border-box;\n\tcolor: #fff;\n\tfont-size: 12px;\n\tline-height: 1.5;\n\tmargin: 0;\n\tmax-height: 50%;\n\topacity: 0;\n\tpadding: 6px 8px;\n\tposition: absolute;\n\tbottom: 0;\n\tleft: 0;\n\ttext-align: left;\n\twidth: 100%;\n}\n.gallery-caption:before {\n\tcontent: \"\";\n\theight: 100%;\n\tmin-height: 49px;\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100%;\n}\n.gallery-item:hover .gallery-caption {\n\topacity: 1;\n}\n.gallery-columns-7 .gallery-caption,\n.gallery-columns-8 .gallery-caption,\n.gallery-columns-9 .gallery-caption {\n\tdisplay: none;\n}\n.gallery-item img{\n\tmax-width: 100% !important;\n}\n/*---------------------------------------\n **   Header               -----\n-----------------------------------------*/\n\n\n/*** SECTION HEADERS ***/\n.focus,.works,.about-us,.features,.packages,.products,.testimonial,.contact-us {\n\tpadding-top: 100px;\n}\n.section-header {\n\ttext-align: center;\n\tpadding-bottom: 75px;\n}\n.section-header h2 {\n\tpadding-bottom: 10px;\n\tline-height: 40px;\n\tposition: relative;\n\tdisplay: inline-block;\n\tfont-size: 45px;\n\ttext-transform: uppercase;\n\tmargin-top: 15px;\n\tmargin-bottom: 0;\n}\n.section-header .section-legend {\n\tfont-size: 16px;\n\tmargin-bottom: 0;\n\tcolor: #808080;\n\tpadding-top: 0;\n}\n/* PRE LOADER */\n.preloader {\n\tposition: fixed;\n\ttop: 0;\n\tleft: 0;\n\tright: 0;\n\tbottom: 0;\n\tbackground-color: #fefefe;\n\tz-index: 99999;\n\theight: 100%;\n\twidth: 100%;\n\toverflow: hidden !important;\n}\n.status {\n\twidth: 200px;\n\theight: 200px;\n\tposition: absolute;\n\tleft: 50%;\n\ttop: 50%;\n\tbackground-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n\tbackground-repeat: no-repeat;\n\tbackground-position: center;\n\tmargin: -100px 0 0 -100px;\n}\n#parallax_move .layer {\n    background-size: cover;\n    width: 100%;\n    height: 100%;\n    background-position: top center;\n}\n\n.home-header-wrap {\n\toverflow: hidden;\n\tposition: relative;\n\tbackground-color: #406594;\n\n}\n\n\n\n.nameHead {\n\tcolor: white;\n\tmargin-bottom: 50px;\n}\n\n.nameHead h1{\n\tfont-size: 100px;\n\tmargin-bottom: 20px;\n\tline-height: 1;\n\n}\n\n.nameHead h2{\n\tfont-size: 50px;\n}\n#familyPhotoCircle {\n\tbackground-color: white;\n\theight: 300px;\n\twidth: 300px;\n\tposition: relative;\n\ttop:10px;\n\t/*margin-bottom: 10px;\n\tmargin-right: 10px;*/\n\tborder-radius: 1000px;\n\toverflow: hidden;\n\tmargin: auto;\n}\n\n#fpInner {\n\tbackground-color: white;\n\theight: 280px;\n\twidth: 280px;\n\tposition: absolute;\n\ttop: 50%;\n\tleft: 50%;\n\tborder-radius: 1000px;\n\toverflow: hidden;\n\tmargin: -140px 0px 0px -140px;\n}\n\n\n\n/*---------------------------------------\n **   Section: Home                  -----\n-----------------------------------------*/\n\n\n.header.header {\n\tmin-height: 76px;\n}\n.header.header > .navbar {\n\t-webkit-box-shadow: 0px 5px 11px 0px rgba(50, 50, 50, 0.08);\n\tbox-shadow: 0px 5px 11px 0px rgba(50, 50, 50, 0.08);\n}\n.header-content-wrap {\n\tbackground: rgba(0, 0, 0, 0.5);\n\tposition: relative;\n\t-webkit-box-shadow: 0px 5px 11px 0px rgba(50, 50, 50, 0.08);\n\tbox-shadow: 0px 5px 11px 0px rgba(50, 50, 50, 0.08);\n\tpadding: 100px 0 100px;\n}\n.header_title {\n    float: left;\n    height:50px;\n    margin-top:10px;\n}\n.header_title h1{\n    font-size: 20px;\n    line-height: 20px;\n    margin-bottom: 5px;\n    text-align: center;\n    margin-top: 5px;\n}\n.header_title h2{\n\tfont-size:15px !important;\n\tline-height:15px;\n    margin: 0;\n}\n.header_title a {\n\tcolor:#000;\n}\n/*----  SECTION:  HOME > TOP BAR   ----*/\n #site-navigation {\n \theight: 1px;\n\tfloat: right;\n\tmargin-right: 0;\n\tmargin-left: 0;\n\n}\n.navbar {\n\tbackground: #FFF;\n\tborder: 0;\n\tborder-radius: 0 !important;\n\ttext-align: left;\n}\n#main-nav {\n\tposition: fixed;\n\twidth: 100%;\n\tz-index: 1000;\n\theight: 50px !important;\n\tmin-height: 50px !important;\n\tmargin-bottom: 0;\n}\n#main-nav.fixed {\n\tposition: fixed;\n\ttop: 0;\n}\n.navbar-inverse .navbar-nav {\n\tmargin-left: 0;\n\tmargin-right: 0;\n}\n.navbar-inverse .navbar-nav >li {\n\tdisplay: inline;\n\tmargin-right: 20px;\n\tmargin-top: 20px;\n}\n.navbar-inverse .navbar-nav>li:last-child {\n\tmargin-right: 0 !important;\n}\n.navbar-inverse .navbar-nav>li>a {\n\tcolor: #404040;\n\tpadding: 0;\n\tline-height: 35px;\n}\n.navbar-inverse .main-navigation ul > li {\n\tdisplay: inline;\n\tmargin-right: 20px;\n\tmargin-top: 20px;\n}\n.navbar-inverse .main-navigation > ul > li:last-child {\n\tmargin-right: 0 !important;\n}\n.navbar-inverse .main-navigation > ul > li > a {\n\tcolor: #404040;\n\tpadding: 0;\n\tline-height: 35px;\n}\n.navbar-inverse .navbar-nav ul.sub-menu {\n\tleft: -999em;\n\tposition: absolute; top: 100%;\n\tbackground:#fff;\n\twidth:200px;\n\tbox-shadow: 3px 3px 2px rgba(50, 50, 50, 0.08);\n\tz-index: 9999;\n}\n.navbar-inverse .navbar-nav ul.sub-menu {\n\tmargin:0;\n}\n.navbar-inverse .navbar-nav ul.sub-menu ul.sub-menu{\n\tposition: absolute;\n\ttop:0;\n}\n.navbar-inverse .navbar-nav ul.sub-menu li {\n\tfloat: none;\n\tposition: relative;\n\tlist-style:none;\n\tpadding:10px;\n}\n.navbar-inverse .navbar-nav ul.sub-menu li a {\n\tcolor:#404040;\n}\n.navbar-inverse .navbar-nav ul.sub-menu li:hover > a,\n.navbar-inverse .navbar-nav ul.sub-menu li.link-focus > a {\n\tcolor:#e96656;\n}\n.navbar-inverse ul ul {\n\tleft: -999em;\n}\n.navbar-inverse ul ul ul {\n\tleft: -999em;\n\ttop: 0;\n}\n.navbar-inverse ul li:hover > ul.sub-menu,\n.navbar-inverse ul li.link-focus > ul.sub-menu {\n\tleft: auto;\n}\n.navbar-inverse ul ul li:hover > ul.sub-menu,\n.navbar-inverse ul ul li.link-focus > ul.sub-menu {\n\tleft: 100%;\n}\n\n.navbar-brand {\n\theight: 76px;\n\tposition: relative;\n\tline-height: 60px;\n\tpadding: 7px 15px;\n\tdisplay: inline-block;\n}\n.navbar-brand > img {\n\tmax-height: 100%;\n}\n.navbar-brand:focus {\n\tborder:1px dotted black;\n}\n.navbar-inverse .navbar-nav>li>a:hover,\n.navbar-inverse .navbar-nav>li>a.link-focus {\n\tcolor: #e96656;\n\toutline: none;\n}\n.navbar-toggle {\n\tborder: 0;\n\tbackground-color: #808080;\n\tmargin-top: 23px;\n}\n.navbar-toggle:focus {\n\tborder:1px dotted black;\n}\n.navbar-inverse .navbar-toggle:hover,.navbar-inverse .navbar-toggle:focus {\n\tbackground-color: #e96656;\n\tfilter: alpha(opacity=100);\n\topacity: 1;\n\tbox-shadow: none;\n}\n.navbar-toggle.active{\n    background-color: #e96656 !important;\n}\n.navbar-toggle.collapsed{\n    background-color: #808080 !important;\n}\n.menu-align-center #site-navigation {\n\twidth: 100%;\n}\n.menu-align-center #site-navigation > ul {\n\twidth: 100%;\n\ttext-align: center;\n}\n.menu-align-center #site-navigation > ul ul {\n\ttext-align: left;\n}\n.menu-align-center #site-navigation > ul > li {\n\tfloat: none;\n\tdisplay: inline-block;\n}\n.menu-align-center .responsive-logo {\n\twidth: 100%;\n\ttext-align: center;\n}\n.menu-align-center .zerif_header_title {\n\twidth: 100%;\n}\n.menu-align-center .navbar-inverse .navbar-nav > li {\n\tmargin-top: 0;\n\tmargin-bottom: 0;\n}\n.menu-align-center .responsive-logo > a{\n\tfloat: none;\n\tdisplay: inline-block;\n}\n.navbar-inverse .navbar-nav>li>a:hover,\n.navbar-inverse .navbar-nav>li>a:focus {\n\tcolor: #e96656;\n}\n.navbar-inverse .navbar-nav>li.current>a {\n\tcolor: #e96656;\n\tposition: relative;\n\toutline: none;\n}\nul.nav > li.menu-item-home > a:before {\n\tcontent: \"\";\n\tdisplay: none;\n}\nli.current>a:before {\n\tposition: absolute;\n\tmargin: auto;\n\tz-index: 1;\n\tcontent: \"\";\n\twidth: 75%;\n\theight: 2px;\n\tbackground: #e96656;\n\tbottom: 0px;\n\tleft: 12.5%;\n}\nul.nav > li.current > a:before,\n.page ul.nav > li.current-menu-item > a:before,\n.single-post ul.nav > li.current-menu-item > a:before,\n.archive ul.nav > li.current-menu-item > a:before {\n\tposition: absolute;\n\tmargin: auto;\n\tz-index: 1;\n\tcontent: \"\";\n\twidth: 75%;\n\theight: 2px;\n\tbackground: #e96656;\n\tbottom: 0px;\n\tleft: 12.5%;\n\tdisplay: block;\n}\nul.nav > li.current_page_item.menu-item-home > a:before {\n\tcontent: \"\";\n\tdisplay: none;\n}\nul.nav > li.current_page_item.current > a:before {\n\tposition: absolute;\n\tmargin: auto;\n\tz-index: 1;\n\tcontent: \"\";\n\twidth: 75%;\n\theight: 2px;\n\tbackground: #e96656;\n\tbottom: 0px;\n\tleft: 12.5%;\n\tdisplay: block;\n}\n\n\n\n\n/*----  SECTION:  HOME > INTRO AND SHORT MSGS   ----*/\n.intro {\n\ttext-align: center;\n\tcolor: #FFF;\n\tmargin-top: 25%;\n\tline-height: 65px;\n\tz-index: 0;\n\ttext-transform: uppercase;\n\tfont-size: 55px;\n\tfloat:none;\n}\n.intro-text{\n\ttext-align: right;\n\tcolor: #FFF;\n\tline-height: 65px;\n\tz-index: 0;\n\ttext-transform: none;\n\tfont-size: 20px;\n\tfloat:none;\n\tfont-family: inherit;\n\tdisplay: inline;\n\tfont-weight: 400;\n}\n\n.intro-text a{\n\tcolor: white;\n\tfont-size: 22px;\n\tcursor: pointer;\n\ttext-decoration: underline\n}\n/* Short Messages */\n.bottom-message-section {\n\tmargin-top: 14%;\n\tposition: relative;\n}\n.short-text {\n\tmargin: auto;\n\ttext-align: center;\n\tcolor: rgba(255,255,255,0.7);\n\ttext-transform: uppercase;\n}\n/*----  SECTION:  HOME > LATEST NEWS   ----*/\n.latest-news {\n\tpadding-bottom: 66px;\n\tpadding-top: 100px;\n\tbackground: #FFFFFF;\n}\n.carousel-inner {\n/*\tmargin: 0 30px; */\n}\n#carousel-homepage-latestnews .item{\n\theight: auto;\n}\n.latesnews-content p,\n.latesnews-content {\n\tfont-size: 14px;\n\tline-height: 18px;\n\tcolor: #777777;\n}\n#carousel-homepage-latestnews .carousel-inner .item .latestnews-title {\n\tmargin-bottom: 15px;\n\tcolor: #404040;\n\tposition: relative;\n\tdisplay: inline-block;\n\ttext-transform: uppercase;\n\tmargin-bottom: 30px;\n\tfont-weight: bold;\n\tfont-size: 17px;\n\tfloat: none;\n\twidth: auto;\n\tmargin-top: 15px;\n}\n#carousel-homepage-latestnews .carousel-inner .item .latestnews-title a {\n\ttext-transform: uppercase;\n\tcolor: #404040;\n\tfont-weight: 700;\n\tdisplay: block;\n}\n#carousel-homepage-latestnews .item .latestnews-box .latestnews-title a:before {\n\tposition: absolute;\n\tmargin: auto;\n\tz-index: 1;\n\tcontent: \"\";\n\twidth: 75%;\n\theight: 2px;\n\tbackground: #e96656;\n\tbottom: -9px;\n\tleft: 12.5%;\n}\n#carousel-homepage-latestnews .item .latestnews-box:nth-child(4n+1) .latestnews-title a:before {\n\tbackground: #e96656;\n}\n#carousel-homepage-latestnews .item .latestnews-box:nth-child(4n+2) .latestnews-title a:before {\n\tbackground: #34d293;\n}\n#carousel-homepage-latestnews .item .latestnews-box:nth-child(4n+3) .latestnews-title a:before {\n\tbackground: #3ab0e2;\n}\n#carousel-homepage-latestnews .item .latestnews-box:nth-child(4n) .latestnews-title a:before {\n\tbackground: #f7d861;\n}\n#carousel-homepage-latestnews .item .latestnews-box .latestnews-img .latestnews-img-a {\n\tdisplay:block;\n}\n#carousel-homepage-latestnews {\n\tmargin: 0 30px;\n}\n#carousel-homepage-latestnews .carousel-control {\n\twidth: 45px;\n\tbackground: none;\n}\n.carousel-control.left {\n\tmargin-left: -45px;\n}\n.carousel-control.right {\n\tmargin-right: -45px;\n}\n#carousel-homepage-latestnews .glyphicon-chevron-left:before{\n\tcontent: \"\";\n\t/*background: url(images/left-arrow.png) no-repeat center center;*/\n\twidth: 30px;\n\theight: 30px;\n\tfloat: left;\n}\n#carousel-homepage-latestnews .glyphicon-chevron-right:before{\n\tcontent: \"\";\n\t/*background: url(images/right-arrow.png) no-repeat center center;*/\n\twidth: 30px;\n\theight: 30px;\n\tfloat: left;\n}\n#carousel-homepage-latestnews {\n}\n\n/*---------------------------------------\n **   Section: Our focus             -----\n-----------------------------------------*/\n.focus-box .service-icon .pixeden  {\n\tborder-radius: 50%;\n}\n.focus {\n\tpadding-bottom: 100px;\n\toverflow: hidden;\n\tbackground: #FFFFFF;\n\n}\n.focus .row {\n \ttext-align:center;\n}\n.focus .row .focus-box, .our-team .row .team-box {\n \tdisplay:inline-block;\n \tfloat:none !important;\n \tmargin-right: -4px;\n\tvertical-align: top;\n\tmargin-bottom: 25px;\n}\n/* FOCUS BOX */\n.focus-box .service-icon {\n\tmargin-bottom: 30px;\n\twidth: 145px;\n\theight: 145px;\n\tmargin: auto;\n\tborder-radius: 50%;\n\tborder: 10px solid #ececec;\n\tmargin-bottom: 20px;\n\tposition: relative;\n\t-webkit-transition: all 0.2s ease-in-out;\n\ttransition: all 0.2s ease-in-out;\n}\n/* ON HOVER COLORED ROUNDED CIRCLE AROUND ICONS */\n/* ON HOVER COLORED ROUNDED CIRCLE AROUND ICONS */\n.red,.green,.blue,.yellow {\n\t-webkit-transition: all 0.2s ease-in-out;\n\ttransition: all 0.2s ease-in-out;\n}\n.focus-box:nth-child(4n+1) .service-icon:hover {\n\tborder: 10px solid #e96656;\n}\n.focus-box:nth-child(4n+2) .service-icon:hover{\n\tborder: 10px solid #34d293;\n}\n.focus-box:nth-child(4n+3) .service-icon:hover {\n\tborder: 10px solid #3ab0e2;\n}\n.focus-box:nth-child(4n+4) .service-icon:hover{\n\tborder: 10px solid #f7d861;\n}\n.focus-box:nth-child(4n+1) .red-border-bottom:before {\n\tbackground: #e96656;\n}\n.focus-box:nth-child(4n+2) .red-border-bottom:before {\n\tbackground: #34d293;\n}\n.focus-box:nth-child(4n+3) .red-border-bottom:before {\n\tbackground: #3ab0e2;\n}\n.focus-box:nth-child(4n+4) .red-border-bottom:before {\n\tbackground: #f7d861;\n}\n.focus-box h3 {\n\tmargin-bottom: 15px;\n\tcolor: #404040;\n\tposition: relative;\n\tdisplay: inline-block;\n\ttext-transform: uppercase;\n\tmargin-bottom: 30px;\n\tfont-weight: bold;\n\tfont-size: 17px;\n\tfloat: none;\n    width: auto;\n    background: none;\n}\n.focus-box p {\n\tfont-size: 14px;\n\tcolor: #808080;\n}\n/*----OTHER FOCUSES ----*/\n.other-focuses {\n\t/*background: url(images/lines.png) repeat-x center;*/\n\tmargin-bottom: 25px;\n}\n.other-focuses .section-footer-title {\n\tpadding: 0 15px;\n\tcolor: #404040;\n\tfont-weight: bold;\n}\n.other-focus-list {\n\tpadding-top: 5px;\n\tmargin-bottom: -17px;\n}\n.other-focus-list ul li {\n\tdisplay: inline-block;\n\tmargin-right: 50px;\n\tpadding-bottom: 15px;\n\ttext-transform: uppercase;\n}\n.other-focus-list ul li:last-child {\n\tmargin-right: 0;\n}\n.other-focus-list ul li i {\n\tmargin-right: 8px;\n}\n/*---------------------------------------\n **   Secction:  Separator one        -----\n-----------------------------------------*/\n.separator-one {\n\tbackground: rgba(52, 210, 147, 0.8);\n\tpadding: 100px 0 100px 0;\n}\n.separator-one .green-btn {\n\tbackground: #14a168;\n}\n.separator-one .green-btn:hover {\n\tbackground: #007345;\n}\n.separator-one .text {\n\tcolor: #FFF;\n\tline-height: 34px;\n\tpadding: 0;\n\tmax-width: 800px;\n\tmargin-bottom: 20px;\n\tmargin-top: 15px;\n}\n/*---------------------------------------\n **   Section: Portfolio          -----\n-----------------------------------------*/\n.works {\n\tpadding-bottom: 100px;\n\tbackground: #FFFFFF;\n\tmin-height: 800px;\n}\n/* IMAGE GRID */\n.cbp-rfgrid {\n\tmargin: auto;\n\tpadding: 0;\n\tlist-style: none;\n\tposition: relative;\n\twidth: 100%;\n}\n.cbp-rfgrid li {\n\tposition: relative;\n\tfloat: left;\n\toverflow: hidden;\n\twidth: 25%; /* Fallback */\nwidth: -webkit-calc(100% / 4);\n\twidth: calc(100% / 4);\n\t-webkit-transition: 0.4s all linear;\n\ttransition: 0.4s all linear;\n}\n.cbp-rfgrid li a,.cbp-rfgrid li a img {\n\tdisplay: block;\n\tmax-width: 100%;\n\t-webkit-transform: scale(1,1);\n\t-ms-transform: scale(1,1);\n\ttransform: scale(1,1);\n\t-webkit-transition-timing-function: ease-in;\n\ttransition-timing-function: ease-in;\n\t-webkit-transition-duration: 250ms;\n\ttransition-duration: 250ms;\n\tcursor: pointer;\n\t-webkit-transition: 0.4s all linear;\n\ttransition: 0.4s all linear;\n\twidth: 100%;\n}\n.cbp-rfgrid li a:hover img {\n\t-webkit-transform: scale(1.05,1.07);\n\t-ms-transform: scale(1.05,1.07);\n\ttransform: scale(1.05,1.07);\n\t-webkit-transition-timing-function: ease-out;\n\ttransition-timing-function: ease-out;\n\t-webkit-transition-duration: 250ms;\n\ttransition-duration: 250ms;\n}\n/* Flexbox is used for centering the heading */\n.cbp-rfgrid li a .project-info {\n\tposition: absolute;\n\tleft: 10px;\n\ttop: 10px;\n\tright: 10px;\n\tbottom: 10px;\n\tbackground: rgba(0,0,0,0.5);\n\tpadding-top: 25%;\n\ttext-align: center;\n\tfilter: alpha(opacity=0);\n\topacity: 0;\n\t-webkit-transition: all ease .25s;\n\ttransition: all ease .25s;\n}\n.cbp-rfgrid li a .project-info .project-details {\n\tposition: relative;\n\ttop: -29px;\n\tfilter: alpha(opacity=0);\n\topacity: 0;\n\t-webkit-transition: all ease .25s;\n\ttransition: all ease .25s;\n\twidth: 100%;\n}\n.cbp-rfgrid li a .project-info h5 {\n\tposition: relative;\n\tdisplay: inline-block;\n\tmargin-bottom: 15px;\n\tmargin-top: 15px;\n\tfont-weight: bold;\n\ttext-transform: uppercase;\n}\n.cbp-rfgrid li a:hover .project-info {\n\tfilter: alpha(opacity=100);\n\topacity: 1;\n}\n.cbp-rfgrid li a:hover .project-details {\n\tfilter: alpha(opacity=100);\n\topacity: 1;\n\ttop: 0;\n}\n.cbp-rfgrid li a:hover .button {\n\tfilter: alpha(opacity=100);\n\topacity: 1;\n\tbottom: -50px;\n}\n.cbp-rfgrid li.cbp-rfgrid-open a .project-info {\n\tfilter: alpha(opacity=100);\n\topacity: 1;\n}\n.cbp-rfgrid-tr {\n\tposition: absolute;\n\ttop: 0;\n\twidth: 100%;\n\theight: 100%;\n\tmargin-bottom: 0;\n\tz-index: 9;\n}\n.cbp-rfgrid li.cbp-rfgrid-open a .project-info .project-details {\n\ttop: 0;\n\topacity: 1;\n}\n\n/****************************************************************/\n/***********************  PIRATE FORMS style ********************/\n/****************************************************************/\n\n.pirate_forms {\n\tpadding-bottom: 95px;\n}\n.pirate_forms input, .pirate_forms textarea {\n\twidth: 100%;\n\tmargin: auto;\n\tborder-radius: 4px !important;\n}\n.pirate_forms input {\n\ttext-align: left;\n\ttext-transform: none;\n\tpadding: 9px;\n\tmin-height: 46px;\n\tpadding-left: 15px !important;\n\tdisplay: inline-block;\n\tborder-radius: 4px;\n\tbackground: rgba(255,255,255, 0.95);\n}\n.pirate_forms textarea {\n\twidth: 100% !important;\n\ttext-align: left;\n\ttext-transform: none;\n\tpadding: 9px;\n\tmin-height: 250px;\n\tpadding-left: 15px;\n\tdisplay: inline-block;\n\tborder-radius: 4px;\n\tbackground: rgba(255,255,255, 0.95);\n}\n.pirate_forms .custom-button {\n\tfloat: right;\n\tmargin-right: 15px;\n}\n.pirate-forms-g-recaptcha {\n\tdisplay: none;\n}\n.pirate_forms .notification p {\n\tborder-radius: 3px;\n\tcolor: #FFF;\n\tpadding: 5px 10px;\n\tdisplay: inline-block;\n\tmargin-bottom: 10px;\n}\n.pirate_forms_error_box {\n\ttext-align:center;\n}\n.pirate_forms_error_box p {\n\tbackground: #E96656;\n\tborder-radius: 3px;\n\tcolor: #FFF;\n\tpadding: 5px 10px;\n\tdisplay: inline-block;\n\tmargin-bottom: 10px;\n}\n.pirate_forms_thankyou_wrap p {\n\tbackground: #34d293;\n\tborder-radius: 3px;\n\tcolor: #FFF;\n\tpadding: 5px 10px;\n\tdisplay: inline-block;\n\tmargin-bottom: 10px;\n}\n.pirate_forms .pirate-forms-submit-button {\n\tfloat: right;\n\tmargin-right: 0px;\n\tcolor: #FFF !important;\n\t-webkit-transition: all 0.3s ease-in-out;\n\ttransition: all 0.3s ease-in-out;\n}\n.pirate_forms .pirate-forms-submit-button:hover {\n\tcolor: #FFF;\n\tbackground: #cb4332;\n}\n.pirate_forms_wrap label {\n\twidth: 100%;\n\tfloat: left;\n\theight: 1px;\n}\n\n.zerif_hidden_if_not_customizer {\n\tdisplay: none !important;\n}\n\n.pixeden  {\n    height: 63px;\n    margin: auto;\n    position: absolute;\n    top: 0; left: 0; bottom: 0; right: 0;\n    display: block;\n}\n\n/* media queries:  change number of items per row */\n@media screen and (max-width: 1190px) {\n\t.cbp-rfgrid li {\n\t\twidth: 25%; /* Fallback */\n\t\twidth: -webkit-calc(100% / 4);\n\t\twidth: calc(100% / 4);\n\t}\n}\n@media screen and (max-width: 1024px) {\n\t.cbp-rfgrid li {\n\t\twidth: 33.33333333333333%; /* Fallback */\n\t\twidth: -webkit-calc(100% / 3);\n\t\twidth: calc(100% / 3);\n\t}\n}\n@media screen and (max-width: 768px) {\n\t.cbp-rfgrid li {\n\t\twidth: 50%; /* Fallback */\n\t\twidth: -webkit-calc(100% / 2);\n\t\twidth: calc(100% / 2);\n\t}\n}\n@media screen and (max-width: 480px) {\n\t.cbp-rfgrid li {\n\t\twidth: 100%;\n\t}\n}\n@media screen and (max-width: 300px) {\n\t.cbp-rfgrid li {\n\t\twidth: 100%;\n\t}\n}\n/* PROJECT DETAILS LOADER */\n#back-button {\n\tdisplay: none;\n\ttext-align: center;\n\ttext-transform: uppercase;\n\tpadding: 13px 35px 13px 35px;\n\tborder-radius: 4px;\n\tmargin: 10px;\n}\n#back-button i {\n\tmargin-right: 10px;\n}\n#loader {\n\tmin-height: 930px;\n\tposition: relative;\n\tdisplay: none;\n}\n#loader .loader-icon {\n\tbackground: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat center center;\n\tbackground-color: #FFF;\n\tmargin: -22px -22px;\n\ttop: 50%;\n\tleft: 50%;\n\tz-index: 10000;\n\tposition: fixed;\n\twidth: 44px;\n\theight: 44px;\n\t-webkit-background-size: 30px 30px;\n\tbackground-size: 30px 30px;\n\tborder-radius: 5px;\n}\n/*---------------------------------------\n **   Section: About us;              -----\n-----------------------------------------*/\n.about-us {\n\tbackground: #272727;\n\tcolor: #FFF;\n\tdisplay: flex;\n\tflex-wrap: wrap;\n}\n.about-us .big-intro {\n\ttext-align: right;\n\tfont-weight: 300;\n\tfont-size: 60px;\n\tline-height: normal;\n\tmargin-top: -15px;\n}\n.about-us .section-header .section-legend {\n\tcolor: #FFF;\n}\n.about-us p {\n\ttext-align: left;\n\tcolor: #939393;\n\tfont-size: 14px;\n\tline-height: 25px;\n}\n.about-us .column {\n\tmargin-bottom: 78px;\n}\n.about-us .col-md-12.zerif-rtl-big-title .big-intro,\n.about-us .col-md-12.zerif_about_us_center p {\n\ttext-align: center;\n}\n/*--SKILLS --*/\n.skills {\n\ttext-align: left;\n\tmargin: 0 0 0 0;\n}\n.skills .skill {\n\tdisplay: block;\n\tclear: both;\n\tmargin-top: 0;\n\tmargin-bottom: 25px;\n}\n.skills .skill .skill-count {\n\tdisplay: inline-block;\n\theight: 64px;\n\tmargin-top: 3px;\n\tfloat: left;\n\tmargin-right: 15px;\n\tmargin-bottom: 25px;\n}\n.skills li:last-child {\n\tmargin-bottom: 0;\n}\n.skills .skill .skill1,.skill2,.skill3,.skill4 {\n\tfont-size: 16px !important;\n}\n.skills .skill .section-legend {\n\ttext-transform: uppercase;\n\tfont-weight: 700;\n\tclear: none;\n\twidth: auto;\n\tfloat: none;\n\tmargin-top: 0;\n\tmargin-bottom: 0;\n}\n.skills .skill p {\n\tline-height: 20px;\n\tfont-size: 14px;\n\tcolor: #8f8f8f;\n}\n/*--OUR CLIENTS --*/\n.our-clients {\n\t/*background: url(images/lines-dark.png) repeat-x center;*/\n\tmargin-bottom: 40px;\n    float: left;\n    width: 100%;\n}\n.our-clients .section-footer-title {\n\tbackground: #272727;\n\tpadding: 0 15px;\n\tcolor: #FFF;\n}\n.our-clients h2 {\n\tfont-weight: 700;\n\tfloat:none;\n\tmargin-top: 0;\n\tmargin-bottom: 0\n}\n.client-list {\n\tpadding-top: 5px;\n\tfloat: left;\n    width: 100%;\n    margin-bottom: 78px;\n}\n.client-list ul{\n\tmargin: 0;\n}\n.client-list ul li {\n\tvertical-align: middle;\n\tdisplay: inline-block;\n\tmargin-right: 24px;\n\tpadding-bottom: 15px;\n\ttext-transform: uppercase;\n}\n.client-list ul li img {\n\tmax-width: 130px;\n\t-ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=80)\";\n\tfilter: alpha(opacity=80);\n\topacity: 0.8;\n\t-webkit-transition: all ease .55s;\n\ttransition: all ease .55s;\n}\n.client-list ul li img:hover {\n\t-ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)\";\n\tfilter: alpha(opacity=100);\n\topacity: 1;\n}\n.client-list ul li:last-child {\n\tmargin-right: 0;\n}\n.client-list ul li i {\n\tmargin-right: 8px;\n}\n.client-list div{\n\tmargin: 0;\n}\n.client-list div a{\n    margin-right: 24px;\n}\n.client-list div a:last-child{\n    margin-right: 0;\n}\n.client-list div img {\n\tmax-width: 130px;\n\t-ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=80)\";\n\tfilter: alpha(opacity=80);\n\topacity: 0.8;\n\t-webkit-transition: all ease .55s;\n\ttransition: all ease .55s;\n\tpadding-bottom: 15px;\n}\n.client-list div img:hover {\n\t-ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)\";\n\tfilter: alpha(opacity=100);\n\topacity: 1;\n}\n.client-list div a:last-child {\n\tmargin-right: 0;\n}\n/*---------------------------------------\n **   Section: stats                 -----\n-----------------------------------------*/\n.stats {\n\tbackground: rgba(0, 0, 0, 0.5);\n\tpadding: 100px 0 60px 0 !important;\n\tclear: both;\n}\n.stat {\n\tmargin-bottom: 40px;\n}\n.stat .icon-top {\n\tfont-size: 40px;\n\theight: 50px;\n\tline-height: 50px;\n}\n.stat .stat-text {\n\tdisplay: inline-block;\n\tposition: relative;\n}\n.stat h3 {\n\tmargin-top: 20px;\n\tpadding-bottom: 5px;\n\tposition: relative;\n\tdisplay: inline-block;\n}\n.stat .section-legend {\n\tcolor: #d1d1d1;\n\tmargin-top: 15px;\n}\n/*---------------------------------------\n **   Section: Our team;              -----\n-----------------------------------------*/\n.our-team {\n\tpadding-bottom: 66px;\n\tpadding-top: 100px;\n\tbackground: #FFFFFF;\n}\n.team-member {\n\tborder-radius: 4px;\n\toverflow: hidden;\n\tposition: relative;\n\tmargin-bottom: 35px;\n}\n.team-member .details {\n\ttext-align: left;\n\tfont-size: 13px;\n\tline-height: 20px;\n\tposition: absolute;\n\tpadding: 15px;\n\ttop: -200px;\n\tleft: 0;\n\twidth: 100%;\n\theight: 190px;\n\t-webkit-transition: all 500ms;\n\ttransition: all 500ms;\n\t-ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n\tfilter: alpha(opacity=0);\n\topacity: 0;\n}\n.team-member .member-details {\n\tposition: relative;\n\tdisplay: inline-block;\n\tpadding-bottom: 5px;\n}\n.team-member:hover .details {\n\ttop: 0;\n\tbackground: #333;\n\tcolor: white;\n\t-ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)\";\n\tfilter: alpha(opacity=100);\n\topacity: 1;\n}\n.team-member.team-member-open .details {\n\tdisplay: block;\n\ttop: 0;\n\tbackground: #333;\n\tcolor: white;\n\t-ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)\";\n\tfilter: alpha(opacity=100);\n\topacity: 1;\n\t-webkit-transition: none;\n\t-moz-transition: none;\n\t-o-transition: none;\n\ttransition: none;\n}\n.team-member .profile-pic {\n\tborder-radius: 50%;\n\twidth: 174px;\n\theight: 174px;\n\tmargin: auto;\n\toverflow: hidden;\n\tmargin-bottom: 25px;\n}\n.team-member .profile-pic img {\n\twidth: 100%;\n\theight: 100%;\n}\n.team-member h3 {\n\ttext-transform: uppercase;\n\tcolor: #404040;\n\tfont-weight: 700;\n\tfont-size: 17px;\n\tposition: relative;\n\tmargin-top: 15px;\n}\n.team-member .position {\n\tfont-size: 13px;\n}\n.team-member .social-icons {\n\tmargin-bottom: 25px;\n}\n.team-member .social-icons ul {\n\tmargin: 0 0 1.5em 0;\n}\n.team-member .social-icons ul li {\n\tdisplay: inline-block;\n\tline-height: 32px;\n\tmargin: 6px;\n}\n.team-member .social-icons ul li a {\n\tbackground: #FFF;\n\tfont-size: 18px;\n\tborder-radius: 50%;\n\tcolor: #808080;\n}\n.team-member .social-icons ul li a:hover {\n\tcolor: #e96656;\n}\n.our-team .row > div:nth-child(4n+1) .red-border-bottom:before{\n    background: #e96656;\n}\n.our-team .row > div:nth-child(4n+2) .red-border-bottom:before{\n    background: #34d293;\n}\n.our-team .row > div:nth-child(4n+3) .red-border-bottom:before{\n    background: #3ab0e2;\n}\n.our-team .row > div:nth-child(4n+4) .red-border-bottom:before{\n    background: #f7d861;\n}\n\n/*---------------------------------------\n **   Features            -----\n-----------------------------------------*/\n.features {\n\tbackground: #FFFFFF;\n\ttext-align: left;\n\tpadding-bottom: 51px;\n}\n.features .feature {\n\tmargin-bottom: 55px;\n}\n.features .feature-icon {\n\tfont-size: 55px;\n\tfloat: left;\n\tmargin-top: 10px;\n\tmargin-right: 25px;\n}\n.features .feature h5 {\n\tfont-weight: bold;\n\tline-height: 28px;\n\tcolor: #404040;\n}\n.features .feature p {\n\tfont-size: 14px;\n}\n/*---------------------------------------\n **   Packages               -----\n-----------------------------------------*/\n.packages {\n\tpadding-bottom: 50px;\n\tbackground: rgba(0, 0, 0, 0.5);\n}\n.package {\n\tborder-radius: 4px;\n\tbackground: #FFFFFF;\n\tmargin-top: 25px;\n\tmargin-bottom: 50px;\n\tpadding-bottom: 15px;\n}\n.package-header {\n\theight: 57px;\n\tcolor: #FFF;\n\tline-height: 57px;\n\tborder-top-left-radius: 4px;\n\tborder-top-right-radius: 4px;\n}\n.package-header h5 {\n\ttext-transform: uppercase;\n\tfont-weight: bold;\n}\n.price {\n\tline-height: 120px;\n\theight: 100px;\n\tcolor: #FFF;\n\tfont-weight: 400;\n}\n.price h4 {\n\tdisplay: inline;\n\tfont-size: 40px;\n\tline-height: normal;\n\tmargin-bottom: 0;\n}\n.price h4 .dollar-sign {\n\tfont-size: 17px;\n\tvertical-align: super;\n}\n.price .price-meta {\n\tline-height: normal;\n\ttext-transform: uppercase;\n\tcolor: #9f9f9f;\n}\n.package ul li {\n\tpadding-top: 10px;\n\tpadding-bottom: 10px;\n\twidth: 80%;\n\tmargin: auto;\n\tborder-bottom: 1px dotted #dadada;\n}\n.package ul li:last-child {\n\tborder-bottom: 0;\n}\n.best-value .package {\n\tmargin-top: 0;\n}\n.best-value .package-header {\n\tpadding-top: 17px;\n\theight: 82px !important;\n}\n.best-value .package-header h4 {\n\tfont-weight: bold;\n\tline-height: 29px;\n\ttext-transform: uppercase;\n}\n.best-value .package-header .meta-text {\n\tfont-size: 13px;\n\tline-height: normal;\n}\n.best-value .package-header {\n\theight: 72px;\n}\n.package ul li i {\n\tfont-size: 13px;\n\tmargin-right: 5px;\n}\n.order {\n\tbackground: #d8ccba;\n\tcolor: #404040;\n}\n.package .order-now {\n\tline-height: 45px;\n\tmax-width: 100%;\n\tdisplay: block;\n\tbackground: #404040;\n\tcolor: #FFF;\n\t-webkit-transition: all 700ms;\n\ttransition: all 700ms;\n\tborder-bottom-right-radius: 4px;\n\tborder-bottom-left-radius: 4px;\n}\n.package .order-now:hover {\n\tbackground: #e96656;\n}\n/*---------------------------------------\n**   Producs            -----\n-----------------------------------------*/\n.products .color-overlay {\n\tbackground: rgba(39,144,176, 0.96);\n\tmargin-top: -100px;\n\tpadding-top: 100px;\n\tpadding-bottom: 70px;\n}\n\n/*---ITEM STYLE ---*/\n.item {\n\twidth: 100%;\n\theight: 260px;\n\tdisplay: block;\n\t-webkit-background-size: 100%;\n\tbackground-size: 100%;\n\tposition: relative;\n\tmargin: auto;\n\tmargin-bottom: 30px;\n\tz-index: 5;\n\t-webkit-backface-visibility: hidden;\n\toverflow: hidden;\n\tborder-radius: 4px;\n}\n.item-overlay {\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100%;\n\theight: 100%;\n\toverflow: hidden;\n\t-webkit-transition: background-color 0.3s ease-in-out;\n\ttransition: background-color 0.3s ease-in-out;\n}\n.item-content {\n\tposition: absolute;\n\twidth: 100%;\n\tbottom: 0;\n\t-webkit-transform: translate(0,100%);\n\t-ms-transform: translate(0,100%);\n\ttransform: translate(0,100%);\n\t-webkit-transition: all 0.3s ease-in-out;\n\ttransition: all 0.3s ease-in-out;\n}\n.item:hover .item-content {\n\t-webkit-transform: translate(0,0);\n\t-ms-transform: translate(0,0);\n\ttransform: translate(0,0);\n\t-webkit-transition: all 0.3s ease-in-out;\n\ttransition: all 0.3s ease-in-out;\n}\n.item-top-content {\n\tposition: relative;\n}\n.item-top-content-inner {\n\tposition: absolute;\n\tbottom: 0;\n\tpadding: 10px 15px 10px 15px;\n\tbackground: rgba(255,255,255,.95);\n\twidth: 100%;\n}\n.item-add-content {\n\tpadding: 0 15px 15px 15px;\n\t-ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n\tfilter: alpha(opacity=0);\n\topacity: 0;\n\t-webkit-transition: all 0.3s ease-in-out;\n\ttransition: all 0.3s ease-in-out;\n}\n.item:hover .item-add-content {\n\t-ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)\";\n\tfilter: alpha(opacity=100);\n\topacity: 1;\n}\n.item-add-content-inner {\n\tborder: 0px solid #dadada;\n\tborder-top-width: 1px;\n\tpadding-top: 10px;\n}\n.item-top-title {\n\ttext-align: left;\n}\n.item-top-title h5 {\n\tcolor: #404040;\n\tfont-weight: 700;\n}\n/* ITEM DETAILS */\n.item-product {\n\twidth: 70%;\n\tfloat: left;\n}\n.item-product-price {\n\twidth: 30%;\n\tfloat: right;\n\ttext-align: right;\n}\n.subdescription {\n\tfont-size: 14px;\n\tfont-weight: 400;\n\tcolor: #7d7d7d;\n}\n/*---PRODUCT PRICE---*/\n.item-product-price {\n\tfont-size: 1em;\n\tfont-weight: 700;\n\tposition: relative;\n}\n.item-product-price .subdescription {\n\tcolor: #808080;\n}\n.old-price {\n\tborder: 0 solid #808080;\n\tborder-bottom-width: 1px;\n\tmargin-top: -11px;\n\twidth: 30px;\n\tposition: absolute;\n\tright: -2px;\n\tbottom: 10px;\n\t-webkit-transform: rotate(-30deg);\n\t-ms-transform: rotate(-30deg);\n\ttransform: rotate(-30deg);\n}\n/*---ITEM DESCRIPTION ---*/\n.item-content {\n\tbackground: rgba(255,255,255,.85);\n}\n.item-add-content {\n\tfont-weight: 400;\n\tcolor: #808080;\n}\n.item-add-content .section {\n\tmargin-bottom: 10px;\n}\n.item-add-content .section:last-of-type {\n\tmargin-bottom: 0;\n}\n.item-add-content p {\n\tfont-size: 14PX;\n}\n/*---------------------------------------\n **   Newsletter           -----\n-----------------------------------------*/\n.newsletter {\n\tpadding-top: 62px;\n\tpadding-bottom: 62px;\n\tbackground: rgba(0, 0, 0, 0.5);\n}\n.newsletter h3 {\n\tfont-size: 28px;\n\ttext-transform: uppercase;\n\tfont-family: 'Montserrat', Helvetica, sans-serif;\n\tfont-weight: 700;\n\tmargin-bottom: 8px;\n}\n.newsletter .subscription {\n\tmargin-top: 15px;\n}\n.newsletter .custom-button {\n    margin-top: 7px;\n}\n/*----------------------------------------\n **   Testimonial           -----\n-----------------------------------------*/\n.testimonial {\n\tbackground: #8c7620;\n\tpadding-bottom: 90px;\n}\n.testimonial .section-header .section-legend {\n\tcolor: #FFF;\n}\n#client-feedbacks .feedback-box {\n    width: 30%;\n    background: #FFFFFF;\n    padding: 25px;\n    margin: 13px;\n    text-align: left;\n    border-radius: 4px;\n    -webkit-box-shadow: none;\n    box-shadow: none;\n    display: inline-block;\n    z-index: 5;\n    vertical-align: top;\n}\n.feedback-box .message {\n\tfont-size: 15px;\n\tcolor: #777777;\n}\n.feedback-box .client {\n\tmargin-top: 30px;\n\theight: 73px;\n\tposition: relative;\n}\n.feedback-box .quote {\n\tfloat: left;\n\tfont-size: 45px;\n\tline-height: 80px;\n}\n.feedback-box .client-info {\n\tfloat: left;\n\tmargin-left: 18px;\n\tpadding-top: 15px;\n}\n.feedback-box .client-info .client-name {\n\tfont-family: 'Homemade Apple', serif;\n\tcolor: #404040;\n}\n.feedback-box .client-info .client-company {\n\tfont-size: 13px;\n\tmargin-top: -3px;\n}\n.feedback-box .client-image {\n\tfloat: right;\n\twidth: 73px;\n\theight: 73px;\n\tborder-radius: 50%;\n\toverflow: hidden;\n\tborder: 3px solid #f6f6f6;\n}\n.feedback-box .client-image img {\n\twidth:100%;\n\theight:100%;\n}\n.customNavigation {\n\ttext-align: center;\n}\n.owl-theme .owl-controls .owl-page span {\n\tbackground: #886e0e;\n\tborder-radius: 50%;\n}\n.customNavigation a {\n\t-webkit-user-select: none;\n\t-moz-user-select: none;\n\t-ms-user-select: none;\n\tuser-select: none;\n\t-webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.zerif_grid_col_4 > div,\n.zerif_grid_col_3 > div,\n.zerif_grid_col_2 > div,\n.zerif_grid_col_1 > div {\n\tmargin-bottom: 30px;\n\ttext-align: center;\n}\n.zerif_grid_col_4 {\n\tfloat: left;\n\twidth: 23%;\n\tmargin: 0 1.25% 0 1.25%;\n}\n.zerif_grid_col_3 {\n    float: left;\n    width: 31.5%;\n    margin: 0 1.25% 0 1.25%;\n}\n.zerif_grid_col_2 {\n\tfloat: left;\n\twidth: 48%;\n\tmargin: 0 1.75% 0 1.75%;\n}\n.zerif_grid_col_1 {\n\tfloat: left;\n\twidth: 100%;\n}\n.zerif_grid_first {\n\tmargin-left: 0;\n\tpadding-left: 0;\n}\n.zerif_grid_last {\n\tmargin-right: 0;\n\tpadding-right: 0;\n}\n#client-feedbacks.zerif_grid .feedback-box {\n\twidth: 100%;\n}\n/*----------------------------------------\n **   Purchase now           -----\n-----------------------------------------*/\n.purchase-now {\n\tbackground: #e96656;\n\tpadding-top: 70px;\n\tpadding-bottom: 70px;\n}\n.purchase-now h3 {\n\ttext-align: left;\n\tline-height: 40px;\n\tmargin-top: 14px;\n}\n.purchase-now .red-btn {\n\tfloat: right;\n\tbackground: #db5a4a;\n}\n.purchase-now .red-btn:hover {\n\tbackground: #bf3928;\n}\n.ribbon-without-button h3 {\n\ttext-align: center;\n}\n.ribbon-without-button .col-md-9 {\n\twidth: 100%;\n}\n\n/*----------------------------------------\n **   Contact us             -----\n-----------------------------------------*/\n.contact-us {\n\tbackground: rgba(0, 0, 0, 0.5);\n\tpadding-bottom: 95px;\n}\n.contact-us .section-header .section-legend {\n\tcolor: #FFF;\n}\n.contact-us .input-box,textarea {\n\twidth: 100%;\n\tmargin: auto;\n\tmargin-bottom: 20px;\n\tborder-radius: 4px;\n}\n.contact-us textarea {\n\tborder: 1px solid transparent;\n}\n.contact-us .custom-button {\n\tfloat: right;\n\tmargin-right: 15px;\n}\n.zerif-g-recaptcha {\n\tmargin-left: 15px;\n\tdisplay: none;\n}\n.contact-us .notification p {\n\tborder-radius: 3px;\n\tcolor: #FFF;\n\tpadding: 5px 10px;\n\tdisplay: inline-block;\n\tmargin-bottom: 10px;\n}\n.contact-us .error p {\n\tbackground: #E96656;\n}\n.contact-us .success p {\n\tbackground: #34d293;\n}\n.contact_submit_wrap {\n\tfloat: right;\n}\n\n\n/*---------------------------------------\n **   Footer           -----\n-----------------------------------------*/\n#footer {\n\tbackground: #272727;\n\tline-height: 20px;\n}\n.company-details {\n\tcolor: #939393;\n\tpadding-top: 67px;\n\tpadding-bottom: 30px;\n}\n.company-details a {\n\tcolor:#939393;\n\ttext-decoration:none;\n}\n\n.company-details a:hover {\n\tcolor: #e96656;\n}\n.company-details .icon-top {\n\tfont-size: 30px;\n\tmargin-bottom: 10px;\n}\n.copyright {\n\tpadding-top: 68px;\n\tpadding-bottom: 68px;\n\tbackground: #171717;\n}\n.social {\n\tmargin: 0 0 1.5em 0 !important;\n}\n.social li {\n\tdisplay: inline-block;\n\tmargin: 5px;\n}\n.social li a {\n\tcolor: #939393;\n\tfont-size: 18px;\n}\n.social li a:hover {\n\tcolor: #e96656;\n}\n.copyright p {\n\tmargin-bottom: 0;\n\tcolor: #939393;\n}\n.footer-widget-wrap > .container {\n\ttext-align: center;\n}\n.footer-widget {\n\tfloat: none;\n\tdisplay: inline-block;\n\tvertical-align: top;\n}\n.footer-widget ul {\n\tmargin-left: 0;\n\tpadding-left: 0;\n}\n.footer-widget li {\n\tlist-style: none;\n\tmargin-left: 0;\n}\n.footer-widget-wrap {\n\tbackground: rgba(255,255,255,0.05);\n}\n.footer-widget-wrap .widget .widget-title {\n\tcolor: #FFF;\n}\n.footer-widget-wrap .widget li a {\n\tcolor: #CCC;\n}\n.footer-widget-wrap .widget li a:hover {\n\tcolor: #FFF;\n}\n.footer-widget-wrap .widget {\n\tcolor: #CCC;\n\tpadding-bottom: 30px;\n}\n.footer-widget-wrap .widget_calendar tbody td {\n    background-color: rgba(249, 249, 249, 0.75);\n}\n.footer-widget-wrap .tagcloud a {\n\tbackground: none;\n\tpadding: 2px 5px;\n\tcolor: #CCC;\n}\n.footer-widget-wrap .tagcloud a:hover {\n\tcolor: #FFF;\n}\n.footer-widget-wrap .widget #wp-calendar {\n\tcolor: #333;\n}\n/*---------------------------------------\n **   Single page           -----\n-----------------------------------------*/\n.single-project {\n\ttext-align: left;\n\tmargin-bottom: 25px;\n}\n.single-project .project-image {\n\twidth: 100%;\n\tfloat: left;\n\ttext-align: left;\n\tmargin-bottom: 25px;\n}\n.single-project h3 {\n\tmargin-bottom: 10px;\n\tpadding-bottom: 7px;\n\tline-height: 40px;\n\tborder-bottom: 1px dotted #dadada;\n}\n.single-project .project-description {\n\tmargin-bottom: 25px;\n}\n.single-project .button {\n\tmargin-left: 0;\n}\n.single-project .project-information {\n\tmargin-bottom: 10px;\n}\n.single-project .project-information ul li {\n\tborder-bottom: 1px dotted #dadada;\n\tpadding-bottom: 5px;\n\tmargin-top: 10px;\n}\n.single-project .project-information ul li span {\n\tfont-weight: 700;\n\tmargin-right: 5px;\n}\n/*---------------------------------------\n **   Section blog            -----\n-----------------------------------------*/\n.blog {\n\tmin-height: 175px;\n\tposition: relative;\n\toverflow: hidden;\n}\n.blog-list{\n\tbackground: #FFF;\n}\n.post-img-wrap{\n\tfloat: left;\n\tmargin-right: 20px;\n\tdisplay: inline-block;\n\toverflow: hidden;\n}\n.post-img-wrap a{\n}\n.post-img-wrap a img{\n\twidth: 200px;\n\theight: auto;\n\t-webkit-transform: scale(1);\n\t-moz-transform: scale(1);\n\t-o-transform: scale(1);\n\t-ms-transform: scale(1);\n\ttransform: scale(1);\n\t-webkit-transition: all 0.3s ease-out;\n\t-moz-transition: all 0.3s ease-out;\n\t-ms-transition: all 0.3s ease-out;\n\t-o-transition: all 0.3s ease-out;\n\ttransition: all 0.3 ease-out;\n}\n.post-img-wrap a:hover img{\n\t-webkit-transform: scale(1.1);\n\t-moz-transform: scale(1.1);\n\t-o-transform: scale(1.1);\n\t-ms-transform: scale(1.1);\n\ttransform: scale(1.1);\n\t-webkit-transition: all 0.5s ease-out;\n\t-moz-transition: all 0.5s ease-out;\n\t-ms-transition: all 0.5s ease-out;\n\t-o-transition: all 0.5s ease-out;\n\ttransition: all 0.5 ease-out;\n}\narticle.hentry{\n\tfloat: left;\n\twidth: 100%;\n\tmargin-bottom: 30px;\n\tpadding-bottom: 30px;\n\tborder-bottom: 1px solid rgba(0, 0, 0, 0.05);\n}\narticle.sticky{\n\tbackground: #f9f9f9;\n\tpadding: 10px;\n}\narticle{\n\ttext-align: left;\n}\narticle .entry-meta a{\n\tcolor :#888;\n\tfont-style: italic;\n}\narticle .posted-on a:hover{\n\tcolor: #e96656;\n}\n.entry-footer a{\n\tcolor :#888;\n\tfont-style: italic;\n}\n.entry-footer a:hover{\n\tcolor: #e96656;\n}\n.entry-title,\n.entry-title a,\n.widget-title,\n.widget-title a{\n\tfont-size: 20px;\n\tline-height: 22px;\n\tcolor: #404040;\n}\n.entry-title a:hover{\n\tcolor: #e96656;;\n}\n.clear{\n\tclear: both;\n}\n.content-left-wrap{\n\tpadding-top: 60px;\n}\n.sidebar-wrap.content-left-wrap{\n\tmargin-top: 60px;\n\tpadding-top: 0;\n}\n.debar-wrap {\n\tmargin-top: 50px;\n}\n.listpost-content-wrap{\n}\n.listpost-content-wrap h1.entry-title,\n.list-post-top h1.entry-title {\n\tfloat: none;\n\tclear: none;\n\tmargin-top: 0;\n}\n.listpost-content-wrap .entry-title:before {\n\tdisplay: none;\n\tcontent: \"\";\n}\n.entry-title:after {\n\tposition: absolute;\n\tmargin: auto;\n\tz-index: 1;\n\tcontent: \"\";\n\twidth: 10%;\n\theight: 2px;\n\tbackground: #e96656;\n\tbottom: -9px;\n\tleft: 0;\n}\n.listpost-content-wrap .entry-title a:after {\n\tposition: absolute;\n\tmargin: auto;\n\tz-index: 1;\n\tcontent: \"\";\n\twidth: 35%;\n\theight: 2px;\n\tbackground: #e96656;\n\tbottom: -9px;\n\tleft: 0;\n\twidth: 50px;\n\tdisplay: none;\n}\n.post .entry-footer {\n}\n.listpost-content-wrap h1.entry-title a {\n\tfloat: none;\n\tposition: relative;\n}\n.listpost-content-wrap-full{\n\twidth: 100%;\n}\n.listpost-content-wrap-full .list-post-top{\n\tmin-height: 1px;\n}\n.entry-title{\n\tfont-size: 20px;\n\tmargin-top: 0;\n\tpadding-top: 0;\n}\n.listpost-content-wrap .entry-content {\n\tmargin-top: 1em;\n}\n.listpost-content-wrap .entry-footer {\n\tpadding-top: 10px;\n}\n.listpost-content-wrap-full .entry-footer > span,\n.listpost-content-wrap .entry-footer > span {\n\tpadding-right: 15px;\n}\n.listpost-content-wrap .entry-content p {\n\tmin-height: 90px;\n\tmargin-bottom: 0\n}\n.entry-content{\n\tline-height: 20px;\n}\n.list-post-top{\n\tmin-height: 130px;\n}\n.search .list-post-top{\n\tmin-height: 1px;\n}\n.entry-footer{\n\tbackground: transparent;\n}\n.entry-footer-large a{\n\tcolor :#8b8b8b;\n\tfont-style: italic;\n}\n.entry-footer-large a:hover{\n\tcolor: #e96656;\n}\n.entry-footer-large{\n\tbackground: transparent;\n\tpadding: 0 0 20px 0px;\n\tposition: relative;\n\tpadding-right: 200px;\n\tfloat: left;\n\twidth: 100%;\n}\n.entry-footer-large > span {\n\tpadding-right: 5px;\n}\n.entry-footer-large-left {\n\tfloat: left;\n}\n.large-container .entry-content p {\n\tmargin: 4px 20px 0px 0px;\n\ttext-align: justify;\n}\n.entry-content{\n\tmargin: 1em 0 0;\n}\n.row{\n    float: left;\n    width: 100%;\n    margin-right: 0;\n    margin-left: 0;\n}\n/* Calendar style */\n/* Calendar Widget */\n.widget_calendar table,\n.widget_calendar td {\n\tborder: 0;\n\tborder-collapse: separate;\n\tborder-spacing: 1px;\n}\n.widget_calendar caption {\n\tfont-size: 14px;\n\tmargin: 0;\n\tmargin-bottom: 6px;\n}\n.widget_calendar th,\n.widget_calendar td {\n\tpadding: 0;\n\ttext-align: center;\n}\n.widget_calendar a {\n\tdisplay: block;\n\tbackground: #f9f9f9;\n\tcolor: #e96656;\n}\n.widget_calendar a:hover {\n\tbackground-color: #e96656;\n\tcolor: #FFF;\n}\n.widget_calendar tbody td {\n\tbackground-color: #f9f9f9;\n}\n.site-footer .widget_calendar tbody td {\n\tbackground-color: rgba(255, 255, 255, 0.05);\n}\n.widget_calendar tbody .pad, .site-footer .widget_calendar tbody .pad {\n\tbackground-color: transparent;\n}\n.widget_calendar thead th{\n\tbackground: #e9e9e9;\n\tborder: none;\n}\n\n/*----------------------------------------\n **   SiteOrigin Page Builder styles -----\n-----------------------------------------*/\n\n.siteorigin-panels .content-left-wrap {\n  padding-top: 0;\n}\n\n.siteorigin-panels .type-page .entry-content {\n  margin-top: 0;\n}\n\n.siteorigin-panels article.hentry{\n\tmargin-bottom: 0;\n\tpadding-bottom: 0;\n\tborder-bottom: none;\n}\n\n.siteorigin-panels .hentry {\n\tmargin: 0;\n}\n\n.siteorigin-panels .widget li::before {\n\tdisplay: none;\n}\n\n\n/* ====================== Large TEMPLATE ============================== */\n.entry-meta-large{\n\tfloat: right;\n\tposition: absolute;\n\tright: 0;\n\ttop: 0\n}\n.entry-content p {\n\ttext-align:justify;\n}\n.post-img-wrap-large a img{\n\tmax-width: 100%;\n\twidth: 100%;\n\theight: auto;\n\t-webkit-transform: scale(1);\n\t-moz-transform: scale(1);\n\t-o-transform: scale(1);\n\t-ms-transform: scale(1);\n\ttransform: scale(1);\n\t-webkit-transition: all 0.3s ease-out;\n\t-moz-transition: all 0.3s ease-out;\n\t-ms-transition: all 0.3s ease-out;\n\t-o-transition: all 0.3s ease-out;\n\ttransition: all 0.3 ease-out;\n}\n.listpost-content-wrap-large{\n\tposition: absolute;\n\tbottom: 0px;\n\tbackground: rgba(255, 255, 255, 0.9) none repeat scroll 0% 0%;\n\tmin-height: 50px;\n\twidth: 100%;\n\tpadding: 15px 20px 0px 20px;\n\tborder-top: 2px solid #FFF;\n}\n.large-container {\n\tbackground-color: #fff;\n\tborder-radius:4px;\n\tmargin: 0 0 35px 0;\n\tposition: relative;\n\twidth: 95%;\n\tfloat: left;\n}\n.large-container .list-post-top {\n\tmin-height: 130px;\n}\n\n/* woocommerce v2.3.5 */\n*:focus {\n    outline: 0;\n}\n.woocommerce-page .page-description {\n\ttext-align: justify;\n\tmargin-top: 20px;\n\tfloat: left;\n}\n.woocommerce-page h1.page-title {\n\ttext-align:left;\n\tposition: relative;\n\tfont-size: 20px;\n\tfont-size: 20px;\n\tline-height: 22px;\n\tcolor: #404040;\n}\n.woocommerce-page .page-title:before {\n\tposition: absolute;\n\tmargin: auto;\n\tz-index: 1;\n\tcontent: \"\";\n\twidth: 10%;\n\theight: 2px;\n\tbackground: #e96656;\n\tbottom: -9px;\n\tleft: 0;\n}\n.woocommerce span.onsale {\n\twidth: 55px;\n\theight: 55px;\n\tborder: 4px solid #34d293;\n\tborder-radius: 50%;\n\tbackground: rgba(255,255,255,0.9);\n\ttext-shadow: none;\n\ttext-transform: uppercase;\n\tpadding: 0px;\n\tposition: absolute;\n\tline-height: 46px;\n\tfont-size: 13px;\n\tcolor: #000;\n\tleft: -20px;\n\ttop: -20px;\n}\n.woocommerce ul.products li.product .onsale{\n\tleft: -20px;\n\ttop: -20px;\n}\n.woocommerce-page .woocommerce-ordering select {\n\tpadding: 12px 15px 12px 10px;\n\tcolor: #A0A0A0;\n\tborder: 1px solid rgba(0, 0, 0, 0.1);\n\tborder-radius: 0;\n}\n.woocommerce-page .products .product > a:first-child {\n\tposition: relative;\n\ttext-align: center;\n\tdisplay: block;\n}\n.woocommerce-page .products a.button {\n\tbackground: #e96656;\n\tdisplay: inline-block;\n\ttext-align: center;\n\ttext-transform: uppercase;\n\tpadding: 10px 20px 10px 20px;\n\tborder-radius: 4px;\n\tmargin: 10px;\n\tborder: none;\n\tcolor: #FFF;\n\tfont-size: 12px;\n\tmargin: 0;\n}\n.woocommerce-page .products a.button:hover {\n\tbackground: #cb4332;\n}\n.woocommerce-page .products h3 {\n\tcolor: #404040;\n\tposition: relative;\n\tdisplay: inline-block;\n\ttext-transform: uppercase;\n\tmargin-bottom: 30px;\n\tfont-weight: bold;\n\tfont-size: 12px;\n\tline-height: 14px;\n\tfloat: none;\n\twidth: auto;\n\tmin-height: 42px;\n\tmargin: 0;\n}\n.woocommerce-page .products a .price {\n\tcolor: #000 ;\n\tline-height: 20px;\n\twidth: 100%;\n\tfloat: left;\n\theight: auto;\n\tmin-height: 40px;\n\ttext-align: center;\n\tpadding: 10px 0;\n}\n.woocommerce-page .products a .price del {\n\tdisplay: block;\n\tline-height: 20px;\n}\n.woocommerce ul.products li.product .price {\n\tcolor: #000;\n}\n.woocommerce-page .products a .price ins {\n\tdisplay: block;\n\tcolor: #e96656;\n\tfont-weight: bold;\n\tbackground: none;\n\tline-height: 20px;\n}\n.woocommerce-page .products .star-rating {\n\tposition: relative;\n\twidth: 100px;\n\theight: 20px;\n\ttext-indent: 99999px;\n\tposition: relative;\n\toverflow: hidden;\n\t/*background: url(images/woostars.png);*/\n\tbackground-repeat: no-repeat;\n\tbackground-position: top left;\n\tmargin: 0 auto;\n}\n.woocommerce-page .products .star-rating span {\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100px;\n\theight: 20px;\n\t/*background: url(images/woostars.png);*/\n\tbackground-repeat: no-repeat;\n\tbackground-position: bottom left;\n\toverflow: hidden;\n\tpadding: 1px;\n}\n.woocommerce-page .products .price {\n\tpadding: 5px 0;\n}\n.woocommerce-page .products .added_to_cart {\n\tdisplay: inline-block;\n\ttext-align: center;\n\ttext-transform: uppercase;\n\tpadding: 10px 20px 10px 20px;\n\tborder-radius: 4px;\n\tborder: none;\n\tcolor: #E96656;\n\tfont-size: 12px;\n\tmargin: 0;\n}\n.woocommerce-page .woocommerce-result-count {\n\tfloat: left;\n\tfont-size: 14px;\n\tline-height: 46px;\n\tmargin-top: 20px;\n}\n.woocommerce-page .woocommerce-ordering {\n\tfloat: right;\n\tmargin-top: 20px;\n}\n.woocommerce-page .product-type-simple {\n\tposition: relative;\n}\n.woocommerce-page .product .images {\n\tfloat: left;\n\twidth: 50%;\n}\n.woocommerce-page .product .entry-summary {\n\tfloat: right;\n\twidth: 50%;\n\tpadding-left: 5%;\n\tmargin-top: 0;\n}\n.woocommerce-page .product .quantity {\n\tfloat: left;\n\tmargin-bottom: 15px;\n\tdisplay: block;\n}\n.woocommerce-page .product .quantity input {\n\tborder: 1px solid #CCC;\n\twidth: 78px;\n\tpadding: 5px;\n\tborder-radius: 3px;\n}\n.woocommerce-page #content .quantity input.minus {\n\twidth: 15px;\n\theight: 15px;\n\tborder: none;\n\tmargin-left: 0px;\n\tposition: relative;\n\tfloat: left;\n\tbackground: #cccccc;\n\tpadding: 0;\n\tcolor: #FFF;\n\ttext-shadow: none;\n\tposition: absolute;\n\ttop: 15px;\n\tright: 5px;\n}\n.woocommerce-page #content .quantity input.plus {\n\twidth: 15px;\n\theight: 15px;\n\tborder: none;\n\tmargin-left: 0px;\n\tposition: relative;\n\tfloat: left;\n\tbackground: #cccccc;\n\tpadding: 0;\n\tcolor: #FFF;\n\ttext-shadow: none;\n\tposition: absolute;\n\ttop: 0;\n\tright: 5px;\n}\n.woocommerce #content .quantity, .woocommerce .quantity, .woocommerce-page #content .quantity, .woocommerce-page .quantity {\n\tposition: relative;\n}\n.woocommerce #content .quantity input.qty,\n.woocommerce .quantity input.qty,\n.woocommerce-page #content .quantity input.qty,\n.woocommerce-page .quantity input.qty {\n\theight: 30px;\n}\n.woocommerce-page .quantity.buttons_added {\n\twidth: auto;\n}\n.woocommerce-page .product .product_meta a {\n\tcolor: #e96656;\n}\n.woocommerce-page .product_title {\n\ttext-align: left;\n\tmargin-top: 0;\n}\n.woocommerce-page .product .price {\n\ttext-align: left;\n\tpadding: 30px 0;\n\tmargin-bottom: 0;\n}\n.woocommerce-page .product div[itemprop=\"description\"] {\n\tfloat: left;\n\ttext-align: justify;\n}\n.woocommerce-page .product .stock ,\n.woocommerce-page .product .cart,\n.woocommerce-page .product .product_meta {\n\tfloat: left;\n\ttext-align: left;\n\tclear: left;\n}\n.woocommerce-page .product .cart .button {\n\tmargin: 0;\n\tmargin-bottom: 25px;\n\tclear: left;\n\tfloat: left;\n}\n.woocommerce-page .product .cart .button:hover {\n\tbackground: rgb(203, 67, 50);\n\tbox-shadow: none;\n}\n.woocommerce-page .product .images .thumbnails {\n\twidth: 100%;\n}\n.woocommerce-page .product .images .thumbnails a {\n\tfloat: left;\n\tdisplay: inline-block;\n}\n.woocommerce-page .woocommerce-tabs {\n\tfloat: left;\n\twidth: 100%;\n\tmargin-top: 50px;\n}\n.woocommerce-page .woocommerce-tabs .tabs {\n\tpadding: 0;\n\tmargin: 0;\n\tborder-bottom: 2px solid #CCC;\n}\n.woocommerce-page .woocommerce-tabs .tabs li {\n\tlist-style: none;\n\tdisplay: inline-block;\n\tpadding: 10px 20px;\n\tmargin-bottom: -2px;\n}\n.woocommerce-page .woocommerce-tabs .tabs li.active {\n\tborder-bottom: 2px solid #e96656;\n}\n.woocommerce-page .woocommerce-tabs .tabs li.active a,\n.woocommerce-page .woocommerce-tabs .tabs li a:hover {\n\tcolor: #e96656;\n\ttext-decoration: none;\n}\n.woocommerce-page .woocommerce-tabs .tabs li a{\n\tcolor: rgb(64, 64, 64);\n\tfont-size: 18px;\n}\n.woocommerce-page .woocommerce-tabs .entry-content {\n\ttext-align: justify;\n\tmargin-bottom: 50px;\n\tbox-shadow: none;\n}\n.woocommerce-page h3.comment-reply-title {\n\tmin-height: auto;\n}\n.woocommerce-page .product .price {\n\tcolor: #000;\n\tline-height: 20px;\n\twidth: 100%;\n\tfloat: left;\n\theight: auto;\n\tmin-height: 40px;\n}\n.woocommerce div.product p.price {\n\tcolor: #000;\n}\n.woocommerce-page .product .price del {\n\tdisplay: block;\n\tline-height: 20px;\n}\n.woocommerce-page .product .price ins {\n\tdisplay: block;\n\tcolor: #e96656;\n\tfont-weight: bold;\n\tbackground: none;\n\tline-height: 20px;\n}\n.woocommerce-page .product .comment-form input {\n\tborder-radius: 3px;\n}\n.woocommerce-page .product .comment-form input[type=\"submit\"] {\n\tmargin-left: 0;\n}\n.woocommerce-page .product .comment-form label {\n\twidth: auto;\n\tline-height: 32px;\n\tfloat: left;\n}\n.woocommerce-page .product .comment-form .comment-form-rating label {\n\tline-height: 20px;\n}\n.woocommerce-page .product .comment-form-author label,\n.woocommerce-page .product .comment-form-email label {\n\twidth: 100px;\n}\n\n.woocommerce-page .product .comment-form .star-rating{\n\tfloat: right;\n\twidth: 100px;\n\theight: 20px;\n\t/*background: url(images/woostars.png) repeat-x left bottom;*/\n}\n.woocommerce-page .product .comment-form .star-rating span{\n\t/*background: url(images/woostars.png) repeat-x left top;*/\n\theight: 0;\n\tpadding-top: 16px;\n\toverflow: hidden;\n\tfloat: left;\n}\n.woocommerce-page .product .comment-form .hreview-aggregate .star-rating{\n\tmargin: 10px 0 0 0;\n}\n.woocommerce-page .product .comment-form #review_form #respond{\n\tposition: static;\n\tmargin: 0;\n\twidth: auto;\n\tpadding: 0 0 0;\n\tbackground: transparent none;\n\tborder: 0;\n}\n.woocommerce-page .product .comment-form #review_form #respond:after{\n\tcontent:\"\";\n\tdisplay: block;\n\tclear: both;\n}\n.woocommerce-page .product .comment-form #review_form #respond p {\n\tmargin: 0 0 10px;\n}\n.woocommerce-page .product .comment-form #review_form #respond .form-submit input{\n\tleft: auto;\n}\n.woocommerce-page .product .comment-form #review_form #respond textarea {\n\t-webkit-box-sizing: border-box;\n\t-moz-box-sizing: border-box;\n\tbox-sizing: border-box;\n\twidth: 100%;\n}\n.woocommerce-page .product .comment-form p.stars:after{\n\tcontent: \"\";\n\tdisplay: block;\n\tclear: both;\n}\n.woocommerce-page .product .comment-form p.stars span{\n\twidth: 100px;\n\theight: 20px;\n\tposition: relative;\n\tfloat: left;\n\t/*background: url(images/woostars.png) repeat-x left 0;*/\n\tmargin-left: 10px;\n}\n.woocommerce-page .product .comment-form p.stars span a {\n\tfloat: left ;\n\tposition: absolute;\n\tleft: 0;\n\ttop: 0;\n\twidth: 20px;\n\theight: 0;\n\tpadding-top: 20px;\n\toverflow: hidden;\n}\n.woocommerce-page .product .comment-form p.stars span a:hover,\n.woocommerce-page .product .comment-form p.stars span a:focus{\n\t/*background: url(images/woostars.png) repeat-x left bottom;*/\n\t-webkit-transition: initial;\n\t-moz-transition: initial;\n\t-o-transition: initial;\n\ttransition: initial;\n}\n.woocommerce-page .product .comment-form p.stars span a.active {\n\t/*background: url(images/woostars.png) repeat-x left bottom ;*/\n}\n.woocommerce-page .product .comment-form p.stars span a.star-1 {\n\twidth: 20px;\n\tz-index:10;\n}\n.woocommerce-page .product .comment-form p.stars span a.star-1:after {\n\tcontent: '';\n}\n.woocommerce-page .product .comment-form p.stars span a.star-2 {\n\twidth: 40px;\n\tz-index: 9;\n}\n.woocommerce-page .product .comment-form p.stars span a.star-2:after {\n\tcontent: '';\n}\n.woocommerce-page .product .comment-form p.stars span a.star-3 {\n\twidth: 60px;\n\tz-index: 8;\n}\n.woocommerce-page .product .comment-form p.stars span a.star-3:after {\n\tcontent: '';\n}\n.woocommerce-page .product .comment-form p.stars span a.star-4 {\n\twidth: 80px;\n\tz-index: 7;\n}\n.woocommerce-page .product .comment-form p.stars span a.star-4:after {\n\tcontent: '';\n}\n.woocommerce-page .product .comment-form p.stars span a.star-5 {\n\twidth: 100px;\n\tz-index: 6;\n}\n.woocommerce-page .product .comment-form p.stars span a.star-5:after {\n\tcontent: '';\n}\n.woocommerce-page .product .comment-form p.stars span a {\n\tborder: none;\n}\n.woocommerce-page .comment-form-rating {\n\tfloat: left;\n\twidth: 100%;\n\tmargin-top: 15px;\n}\n.woocommerce-page .product #review_form_wrapper {\n\tfloat: left;\n\twidth: 100%;\n}\n.woocommerce-page .woocommerce-tabs .commentlist {\n\tpadding: 0;\n\tmargin: 0;\n}\n.woocommerce-page .woocommerce-tabs .commentlist .comment {\n\tfloat: left;\n\tclear: left;\n\twidth: 100%;\n}\n.woocommerce-page .woocommerce-tabs .comment-text {\n\tdisplay: inline-block;\n}\n.woocommerce-page .woocommerce-tabs .description {\n\twidth: 100%;\n}\n.woocommerce-page .woocommerce-product-rating,\n.woocommerce div.product .woocommerce-product-rating {\n\tfloat: left;\n\ttext-align: left;\n\tmargin-top: 30px;\n\tmargin-bottom: 0;\n}\n.woocommerce-page .woocommerce-product-rating .star-rating {\n\tposition: relative;\n\twidth: 100px;\n\theight: 20px;\n\ttext-indent: 99999px;\n\tposition: relative;\n\toverflow: hidden;\n\t/*background: url(images/woostars.png);*/\n\tbackground-repeat: no-repeat;\n\tbackground-position: top left;\n}\n.woocommerce-page .woocommerce-product-rating .star-rating span {\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100px;\n\theight: 20px;\n\t/*background: url(images/woostars.png);*/\n\tbackground-repeat: no-repeat;\n\tbackground-position: bottom left;\n\toverflow: hidden;\n\tpadding: 1px\n}\n.woocommerce-page .woocommerce-product-rating .woocommerce-review-link,\n.woocommerce-page .woocommerce-product-rating .woocommerce-review-link span {\n\tfont-size: 11px;\n\tcolor: #eca420;\n}\n.woocommerce-page .comment-text .star-rating {\n\tposition: relative;\n\twidth: 100px;\n\theight: 20px;\n\ttext-indent: 99999px;\n\tposition: relative;\n\toverflow: hidden;\n\t/*background: url(images/woostars.png);*/\n\tbackground-repeat: no-repeat;\n\tbackground-position: top left;\n}\n.woocommerce-page .comment-text .star-rating span {\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100px;\n\theight: 20px;\n\t/*background: url(images/woostars.png);*/\n\tbackground-repeat: no-repeat;\n\tbackground-position: bottom left;\n\toverflow: hidden;\n\tpadding: 1px;\n}\n.woocommerce-page .woocommerce-tabs .comment-text {\n\twidth: 100%;\n}\n.woocommerce-page .woocommerce-tabs .comment_container {\n\tposition: relative;\n\tpadding-left: 50px;\n}\n.woocommerce-page .woocommerce-tabs .comment_container > img {\n\tposition: absolute;\n\tleft: 0;\n\ttop: 0;\n}\n.woocommerce-page .woocommerce-message {\n\tmargin: 0px 0 40px;\n\tbackground: #1e9e6b;\n\tborder-radius: 3px;\n\tcolor: #FFF;\n\tlist-style: none;\n}\n.woocommerce-page .woocommerce-message a {\n\tbackground-color: #38C28B;\n\tpadding: 6px 14px;\n\tfont-size: 12px;\n\tcolor: #FFF;\n}\n.woocommerce-page .woocommerce-error {\n\tlist-style: none;\n\tpadding: 0;\n\tmargin: 0px 0 40px;\n\tbackground: #E96656;\n\tborder-radius: 3px;\n\tcolor: #FFF;\n\tborder: none;\n\tfloat: left;\n\twidth: 100%;\n}\n.woocommerce-page .woocommerce-error a {\n\tbackground-color: #F47565;\n\tpadding: 6px 14px;\n\tfont-size: 12px;\n\tcolor: #FFF;\n}\n.woocommerce-page .woocommerce .woocommerce-error:before {\n\tcolor: #FFF;\n}\n.woocommerce-page .woocommerce-info {\n\tlist-style: none;\n\tpadding: 0;\n\tmargin: 0px 0 40px;\n\tbackground: #3ab0e2;\n\tborder-radius: 3px;\n\tcolor: #FFF;\n\tborder: none;\n\tfloat: left;\n\twidth: 100%;\n\tmargin-top: 25px !important;\n}\n.woocommerce-page .woocommerce-info a {\n\tbackground-color: #5fb8dd;\n\tpadding: 6px 14px;\n\tfont-size: 12px;\n\tcolor: #FFF;\n}\n.woocommerce-page .woocommerce-info:before {\n\tcolor: #FFF;\n}\n.woocommerce-page .woocommerce-info {\n\tfloat: left;\n\ttext-align: left;\n\tpadding-top: 30px;\n}\n.woocommerce-page .woocommerce .woocommerce-info {\n\tbackground: rgb(58, 176, 226);\n\tcolor: #FFF;\n\tborder-radius: 3px;\n\tborder: none;\n\tpadding-top: 15px;\n\tmargin-bottom: 40px;\n}\n.woocommerce-page .woocommerce .woocommerce-info a {\n\tcolor: #FFF;\n\topacity: 0.9;\n}\n.woocommerce-page .woocommerce .woocommerce-info:before {\n\tcolor: #FFFFFF;\n}\n.woocommerce-page .woocommerce input {\n\tborder-radius: 3px;\n\tpadding: 10px 5px;\n}\n.woocommerce-page .woocommerce .woocommerce-error {\n\tborder-top-color: #b81c23;\n\tborder-radius: 3px;\n\tpadding: 1em 2em 1em 3.5em!important;\n}\n.woocommerce-page .woocommerce .products .product h3 {\n\tfloat:none;\n\tcolor: #404040;\n}\n.woocommerce-page .woocommerce .added_to_cart, .woocommerce .button  {\n\tdisplay: inline-block;\n\ttext-align: center;\n\ttext-transform: uppercase;\n\tpadding: 13px 35px 13px 35px;\n\tborder-radius: 4px;\n\tmargin: 10px;\n\tborder: none;\n\tbackground: #f3f3f3;\n\tcolor: #000;\n}\n.woocommerce-page .woocommerce .add_to_cart_button, .woocommerce .checkout-button, .woocommerce .single_add_to_cart_button, .woocommerce #place_order,\n.woocommerce div.product form.cart .button {\n\tdisplay: inline-block;\n\ttext-align: center;\n\ttext-transform: uppercase;\n\tpadding: 13px 35px 13px 35px;\n\tborder-radius: 4px;\n\tmargin: 10px;\n\tborder: none;\n\tbackground: #e96656;\n\tcolor: #FFF;\n\tmargin-left: 0;\n}\n.woocommerce-page .woocommerce-tabs .tabs {\n\tborder-bottom: 1px solid #CCC;\n}\n.woocommerce-page .woocommerce .add_to_cart_button:hover, .woocommerce .checkout-button:hover, .woocommerce .single_add_to_cart_button :hover, .woocommerce #place_order:hover,\n.woocommerce div.product form.cart .button:hover {\n\tbackground:#bf3928;\n}\n.woocommerce-page .woocommerce .price del {\n\tdisplay:block;\n}\n.woocommerce-page .woocommerce .price {\n\theight:auto;\n\tline-height:normal;\n}\n.woocommerce-page .woocommerce .price ins {\n\tcolor: #000;\n\tfont-weight:bold;\n\tfont-size: 20px;\n}\n.woocommerce-page .woocommerce #coupon_code {\n\tpadding: 6px 10px;\n\tcolor: #A0A0A0;\n\tborder: 1px solid rgba(0, 0, 0, 0.1);\n\tborder-radius: 0;\n\tmargin-top: 2px;\n\tborder-radius: 5px!important;\n\tpadding: 6px;\n\tmin-width: 110px;\n}\n.woocommerce-page .woocommerce .product-name a {\n\tcolor:#404040;\n}\n.woocommerce div.product form.cart {\n\tmargin-bottom: 0\n}\n.woocommerce-page .woocommerce .cart_totals tr.cart-subtotal th,\n.woocommerce-page .woocommerce .cart_totals tr.order-total th {\n\twidth: 50%;\n}\n.woocommerce-page .woocommerce .entry-title {\n\ttext-align:left;\n}\n.woocommerce .woocommerce-info:before,\n.woocommerce-page .woocommerce-info:before,\n.woocommerce .woocommerce-error:before,\n.woocommerce-page .woocommerce-error:before {\n\tpadding: 0;\n}\n.woocommerce-page .woocommerce .checkout input,\n.woocommerce-page .woocommerce .checkout textarea,\n.woocommerce-page .woocommerce .checkout select {\n\tpadding: 12px 15% 12px 2%;\n}\n.woocommerce-page .woocommerce ul.payment_methods {\n\tpadding-left:1em;\n}\n.woocommerce-page ul.products  {\n\tmargin-top: 40px;\n\tfloat: left;\n\twidth: 100%;\n}\n.woocommerce-page .woocommerce .summary,\n.woocommerce-page .woocommerce .entry-summary,\n.woocommerce-page .woocommerce div.product .woocommerce-tabs .panel {\n\ttext-align:justify;\n}\n.woocommerce-page .woocommerce .quantity input.input-text {\n\twidth: 100px;\n\theight: 42px;\n\tmargin-right: 10px;\n}\n.woocommerce-page .woocommerce form.cart button.single_add_to_cart_button {\n\tmargin: 0px;\n}\n.woocommerce-page .woocommerce .comment-form label {\n\twidth:100%;\n}\n.woocommerce-page .woocommerce .woocommerce-message {\n\tbackground: #20AA80;\n\ttext-align: left;\n\tcolor: white;\n\tborder-radius: 3px;\n\tborder:none;\n\tfloat: left;\n\twidth: 100%;\n}\n.woocommerce-page .woocommerce .woocommerce-message a.button {\n\tmargin:0px;\n\tpadding:7px 17px;\n}\n.woocommerce-page .woocommerce .woocommerce-message:before {\n\tcolor: #fff;\n}\n.woocommerce-page .woocommerce ul.products li.product .star-rating {\n\tfont-size:inherit;\n}\n.woocommerce-page .woocommerce input[type=\"submit\"],\n.woocommerce-page #content input.button,\n.woocommerce input.button.alt, .woocommerce-page #content input.button.alt, .woocommerce-page input.button.alt {\n\tbackground: #e96656;\n\tdisplay: inline-block;\n\ttext-align: center;\n\ttext-transform: uppercase;\n\tpadding: 10px 20px 10px 20px;\n\tborder-radius: 4px;\n\tmargin: 10px;\n\tborder: none;\n\tcolor: #FFF;\n\tfont-size: 12px;\n\tmargin: 0;\n\ttext-shadow: none;\n}\n.woocommerce-page .woocommerce input[type=\"submit\"]:hover,\n.woocommerce-page #content input.button:hover,\n.woocommerce input.button.alt:hover, .woocommerce-page #content input.button.alt:hover, .woocommerce-page input.button.alt:hover {\n\tbackground: #cb4332;\n\tcolor: #FFF;\n\tbox-shadow: none;\n}\n.woocommerce-page .woocommerce .product-quantity input.qty {\n\twidth: 60px;\n\theight: 30px;\n\tmargin-right: 0;\n\tpadding: 0 0 0 5px;\n\ttext-align: left;\n}\n.woocommerce a.button.alt {\n\tbackground: #e96656;\n\tcolor: #FFF;\n}\n.woocommerce a.button.alt:hover {\n\tbackground: #cb4332;\n\tcolor: #FFF;\n}\n.woocommerce-page .woocommerce a.remove:hover {\n\tcolor: #fff !important;\n\tbackground: #e96656;\n\tline-height: 20px;\n}\n.woocommerce-page .woocommerce a.remove {\n\tcolor: #e96656 !important;\n\tline-height: 20px;\n}\n.woocommerce-page .woocommerce-info {\n\twidth: 100%;\n}\n.woocommerce-page .woocommerce-checkout .col-1,\n.woocommerce-page .woocommerce-checkout .col-2 {\n\tfloat: left;\n\twidth: 100%;\n}\n.woocommerce-page .woocommerce-checkout-review-order {\n\tclear: left;\n}\n.woocommerce-page .woocommerce .checkbox {\n\tpadding-left: 0;\n\tfloat: left;\n}\n.woocommerce-page .woocommerce .input-checkbox {\n\tmargin: 15px 0 0 10px;\n}\n.woocommerce-page .woocommerce-checkout #payment {\n\tbackground: #FAFAFA;\n}\n.woocommerce-page .woocommerce-checkout #payment div.payment_box {\n\tbackground-color: #ECECEC;\n}\n.woocommerce-page .woocommerce-checkout #payment div.payment_box:after {\n\tcontent: \"\";\n\tborder: 8px solid #ECECEC;\n\tborder-right-color: transparent;\n\tborder-left-color: transparent;\n\tborder-top-color: transparent;\n\tmargin: -13px 0 0 2em;\n}\n.woocommerce-page .woocommerce .order_details li.order {\n\tbackground: #FFFFFF;\n}\n.woocommerce-page .products a.button {\n\ttext-decoration: none;\n}\n.woocommerce-page .product .cart .button {\n\tcolor: #FFF;\n}\n.woocommerce-page .woocommerce {\n\tmargin-top: 25px;\n}\n.woocommerce-page .woocommerce .order {\n\tbackground: #FFF;\n}\n.woocommerce-page .woocommerce table.my_account_orders .order-actions .button {\n\tfont-size: 12px;\n}\n.woocommerce-page .woocommerce #payment ul.payment_methods {\n    text-align: left;\n    padding: 1em;\n    border-bottom: 1px solid #D3CED2;\n    margin: 0px;\n    list-style: outside none none;\n}\n.woocommerce-page .woocommerce #payment ul.payment_methods li {\n    line-height: 2;\n    text-align: left;\n    margin-left: 2em;\n    font-weight: 400;\n}\n.woocommerce-page .woocommerce #payment {\n    background: none repeat scroll 0% 0% #FAFAFA;\n}\n.woocommerce-page .woocommerce #payment div.payment_box {\n    position: relative;\n    width: 96%;\n    padding: 1em 2%;\n    margin: 1em 0px;\n    font-size: 0.92em;\n    border-radius: 2px;\n    line-height: 1.5;\n    background-color: #DFDCDE;\n    color: #515151;\n}\n.woocommerce-page .woocommerce #payment div.payment_box {\n    background-color: #ECECEC;\n}\n.woocommerce-page .woocommerce #payment div.payment_box p {\n\tmargin-bottom: 0;\n}\n.woocommerce-page .woocommerce #payment div.payment_box:after {\n    content: \"\";\n    position: absolute;\n\ttop: -3px;\n\tleft: 0px;\n    border-width: 8px;\n    border-style: solid;\n    border-color: transparent transparent #ECECEC;\n    -moz-border-top-colors: none;\n    -moz-border-right-colors: none;\n    -moz-border-bottom-colors: none;\n    -moz-border-left-colors: none;\n    border-image: none;\n    margin: -13px 0px 0px 2em;\n}\n.woocommerce-page .woocommerce #payment h3{\n\tpadding-left: 20px;\n}\n.woocommerce-page .woocommerce a.button {\n\tfont-size: 14px;\n\tmargin-left: 0;\n}\n.woocommerce-page .woocommerce button.button {\n\tfont-size: 12px;\n\tmargin-left: 0;\n\tpadding: 13px 35px 13px 35px;\n}\n.woocommerce button.button {\n\twidth: 100%;\n}\n.woocommerce-page .woocommerce select {\n\tcolor: #A0A0A0;\n\tborder: 1px solid rgba(0, 0, 0, 0.1);\n\tbox-sizing: border-box;\n\twidth: 100%;\n\tmargin: 0;\n\toutline: 0;\n\tline-height: 1;\n\tborder-radius: 3px;\n\tpadding: 10px 5px;\n}\n.woocommerce-page .woocommerce #order_review {\n\tclear: left;\n}\n.woocommerce-page .woocommerce .login {\n\tfloat: left;\n\twidth: 100%;\n}\n.woocommerce-page .select2-drop {\n\ttext-align: left;\n}\n.woocommerce-page .woocommerce-account .addresses .title .edit {\n\tfloat: left;\n}\n.woocommerce-page div.product .woocommerce-tabs ul.tabs li {\n\tborder: none;\n\tbackground: none;\n\tpadding-bottom: 0\n}\n.woocommerce-page div.product .woocommerce-tabs ul.tabs li.active:before {\n\tcontent: \"\";\n\tborder: none;\n}\n.woocommerce-page div.product .woocommerce-tabs ul.tabs:before {\n\tcontent: \"\";\n\tdisplay: none;\n}\n.woocommerce-page .woocommerce div.product .woocommerce-tabs ul.tabs li.active:after {\n\tcontent: '';\n\tdisplay: none;\n}\n.woocommerce div.product .woocommerce-tabs ul.tabs li:after,\n.woocommerce div.product .woocommerce-tabs ul.tabs li:before {\n\tcontent: \"\";\n\tdisplay: none;\n}\n.woocommerce div.product .woocommerce-tabs ul.tabs {\n\toverflow: visible;\n}\n.woocommerce div.product .woocommerce-tabs ul.tabs li.active {\n\tborder-bottom: 2px solid #e96656;\n\tmargin-bottom: -1px;\n}\n.woocommerce div.product .woocommerce-tabs ul.tabs li {\n\tbox-shadow: none;\n}\n.woocommerce-page .comment-form {\n\tfloat: left;\n\tfloat: left;\n\tmargin-top: 15px;\n\twidth: 100%;\n}\n.woocommerce #review_form #respond .form-submit input {\n\tbackground: #e96656;\n\tdisplay: inline-block;\n\ttext-align: center;\n\ttext-transform: uppercase;\n\tpadding: 13px 35px 13px 35px;\n\tborder-radius: 4px;\n\tmargin: 10px;\n\tborder: none;\n}\n.woocommerce #review_form #respond textarea {\n\twidth: 100%;\n\theight: 130px;\n}\n.woocommerce #reviews #comments ol.commentlist li .comment-text {\n\tmargin: 0;\n}\n.woocommerce-cart .cart-collaterals .cart_totals table {\n\tclear: left;\n}\n.woocommerce table.shop_table {\n\tclear: left;\n}\n.woocommerce #content div.product div.thumbnails a,\n.woocommerce div.product div.thumbnails a,\n.woocommerce-page #content div.product div.thumbnails a,\n.woocommerce-page div.product div.thumbnails a {\n\tmargin-bottom: 1em;\n}\n.woocommerce .upsells.products ul,\n.woocommerce .upsells.products ul.products {\n\tfloat: left;\n\tclear: left;\n}\n/**/\n.woocommerce .woocommerce-message:before, .woocommerce-page .woocommerce-message:before {\n\tcontent: \"\\2713\";\n\tpadding: 0;\n}\n.woocommerce .shipping_calculator h2 a {\n\tfont-size: 18px;\n}\n/**/\n.woocommerce-page .upsells.products ul li.product,\n.woocommerce-page .upsells.products ul.products li.product {\n\tfloat: left;\n\tmargin: 0 3.8% 2.992em 0;\n\tpadding: 0;\n\tposition: relative;\n\twidth: 22.05%;\n\tclear: none;\n}\n.woocommerce .upsells.products ul li.product:nth-child(4),\n.woocommerce-page ul.products li.product:nth-child(4) {\n\tmargin-right: 0;\n}\n.woocommerce .upsells.products ul li.product:nth-child(4+1),\n.woocommerce-page ul.products li.product:nth-child(4+1) {\n\tclear: left;\n}\n/*woocommerce pagination*/\n.woocommerce nav.woocommerce-pagination {\n\tfloat: left;\n\twidth: 100%;\n\tpadding-bottom: 30px;\n}\n.woocommerce .woocommerce-pagination ul.page-numbers .current:before,\n.woocommerce-page .woocommerce-pagination ul.page-numbers .current:before {\n\tcontent: \"\";\n\tdisplay: none;\n}\n.woocommerce #content nav.woocommerce-pagination ul,\n.woocommerce nav.woocommerce-pagination ul,\n.woocommerce-page #content nav.woocommerce-pagination ul,\n.woocommerce-page nav.woocommerce-pagination ul,\n.woocommerce nav.woocommerce-pagination ul {\n\tborder: none;\n}\n.woocommerce #content nav.woocommerce-pagination ul li,\n.woocommerce-page #content nav.woocommerce-pagination ul li,\n.woocommerce-page nav.woocommerce-pagination ul li\n.woocommerce nav.woocommerce-pagination ul li {\n\tborder: none;\n\tmargin: 0 3px;\n}\n.woocommerce nav.woocommerce-pagination ul li a,\n.woocommerce nav.woocommerce-pagination ul li span {\n\twidth: 32px;\n\tmin-width: 32px;\n\tborder: none;\n\tborder-radius: 4px;\n\tbackground: rgb(236, 236, 236);\n\tcolor: #000;\n}\n.woocommerce #content nav.woocommerce-pagination ul li span.current,\n.woocommerce nav.woocommerce-pagination ul li span.current,\n.woocommerce-page #content nav.woocommerce-pagination ul li span.current,\n.woocommerce-page nav.woocommerce-pagination ul li span.current,\n.woocommerce nav.woocommerce-pagination ul li span.current,\n.woocommerce nav.woocommerce-pagination ul li a:hover,\n.woocommerce-page nav.woocommerce-pagination ul li a:hover,\n.woocommerce-page #content nav.woocommerce-pagination ul li a:hover,\n.woocommerce nav.woocommerce-pagination ul li a:hover,\n.woocommerce #content nav.woocommerce-pagination ul li a:hover {\n\tbackground: rgb(233, 102, 86);\n\tcolor: #FFF;\n}\n.woocommerce div.product form.cart label {\n\tcolor: #404040;\n}\n.woocommerce p.stars a:before,\n.woocommerce p.stars a:hover~a:before {\n\tcontent: \"\";\n\tdisplay: none;\n}\n\n@media (max-width: 1200px) {\n\n\t.header-content-wrap{\n\t\tpadding: 50px 0 50px;\n\t}\n\n}\n\n@media (max-width: 992px) {\n\n\t.woocommerce-page .woocommerce .cart-collaterals .cart_totals {\n\t\twidth: 100%;\n\t}\n\t.woocommerce-page .products .product > a:first-child {\n/*\t\tmin-height: 325px; */\n\t}\n\t.large-container {\n\t\twidth: 100%;\n\t}\n\n\t.nameHead h1 {\n\t\tfont-size: 80px;\n\t}\n\n}\n@media (max-width: 767px) {\n\t.woocommerce-page .upsells.products ul li.product,\n\t.woocommerce-page .upsells.products ul.products li.product{\n\t\twidth: 48%;\n\t\tfloat: left;\n\t\tclear: both;\n\t\tmargin: 0 0 2.992em;\n\t}\n\t.woocommerce .upsells.products ul li.product:nth-child(4),\n\t.woocommerce-page ul.products li.product:nth-child(4) {\n\t\tmargin: 0 0 2.992em;\n\t}\n\t.woocommerce .upsells.products ul li.product:nth-child(4+1),\n\t.woocommerce-page ul.products li.product:nth-child(4+1) {\n\t\tclear: none;\n\t}\n\t.woocommerce .upsells.products ul li.product:nth-child(even),\n\t.woocommerce-page ul.products li.product:nth-child(even) {\n\t\tmargin-right: 0;\n\t\tfloat: right;\n\t}\n\t.woocommerce .upsells.products ul li.product:nth-child(odd),\n\t.woocommerce-page ul.products li.product:nth-child(odd) {\n\t\tclear: left;\n\t}\n\t.listpost-content-wrap-large {\n\t\tposition: relative;\n\t}\n\t.menu-align-center .responsive-logo > a {\n\t\tfloat: left;\n\t}\n}\n@media (max-width: 600px) {\n\n\t.woocommerce-page .product .images {\n\t\twidth: 100%;\n\t}\n\t.woocommerce-page .product .entry-summary {\n\t\twidth: 100%;\n\t\tpadding-left: 0%;\n\t\tmargin-top: 50px;\n\t}\n\t.woocommerce-page .woocommerce-tabs .tabs li a {\n\t\tfont-size: 14px;\n\t}\n\t.woocommerce-page .woocommerce-tabs .tabs li {\n\t\tpadding: 10px 10px;\n\t}\n\t.listpost-content-wrap-large {\n\t\tposition: relative;\n\t}\n\t.listpost-content-wrap-large {\n\t\tpadding: 20px 0px 0px 0px;\n\t}\n\tbody {\n\t\tposition: initial !important;\n\t}\n\t.entry-meta-large {\n\t\tposition: relative;\n\t\tfloat: left;\n\t\twidth: 100%;\n\t}\n\t.entry-footer-large {\n\t\tpadding-right: 0;\n\t}\n}\n@media (max-width: 480px) {\n\n\t.woocommerce ul.products li.product, .woocommerce-page ul.products li.product {\n\t\twidth: 100%;\n\t}\n\t.woocommerce-page .woocommerce-result-count {\n\t\ttext-align: center;\n\t\twidth: 100%;\n\t\tmargin-bottom: 0px;\n\t}\n\t.woocommerce-page .woocommerce-ordering {\n\t\tfloat: none;\n\t}\n\t.woocommerce-page .products .product > a:first-child {\n\t\twidth: 240px;\n\t}\n\t.woocommerce-page .woocommerce-tabs .tabs li {\n\t\twidth: 100%;\n\t}\n\t.woocommerce-page .woocommerce-tabs .tabs li {\n\t\twidth: 100%;\n\t\tborder-bottom: 2px solid #CCC;\n\t}\n\t.woocommerce-page .woocommerce-tabs .tabs {\n\t\tborder-bottom: 0;\n\t}\n\t.woocommerce-page .woocommerce-tabs .comment_container {\n\t\tposition: relative;\n\t\tpadding-left: 0px;\n\t\tpadding-top: 50px;\n\t}\n\t.woocommerce-page .comment-text .star-rating {\n\t\twidth: 100%;\n\t\tmargin-bottom: 5px;\n\t\tfloat: left;\n\t}\n\t.woocommerce-page .products .product > a:first-child {\n\t\twidth: 100%;\n\t}\n\t/* cart page */\n\t.woocommerce-page .woocommerce .product-quantity input.qty {\n\t\twidth: 45px;\n\t}\n\t.woocommerce td.product-quantity {\n\t\tmin-width: 40px;\n\t}\n\t.woocommerce-page .woocommerce input[type=\"submit\"] {\n\t\tfont-size: 10px;\n\t}\n\t.woocommerce-page .woocommerce .cart_totals tr.cart-subtotal th {\n\t\tfont-size: 12px;\n\t}\n\t.woocommerce-cart .cart-collaterals .cart_totals tr th {\n\t\tfont-size: 12px;\n\t}\n\t.woocommerce-cart .cart-collaterals .cart_totals table td,\n\t.woocommerce-cart .cart-collaterals .cart_totals table td span,\n\t.woocommerce-cart .cart-collaterals .cart_totals table td a {\n\t\tfont-size: 12px;\n\t}\n\t.woocommerce form .form-row label {\n\t\tfont-size: 12px;\n\t}\n\t.woocommerce-page .woocommerce .woocommerce-info,\n\t.woocommerce-page .woocommerce .woocommerce-info a {\n\t\tfont-size: 12px;\n\t}\n\t.woocommerce-checkout-payment label {\n\t\tfont-size: 14px;\n\t}\n\t.woocommerce-page .woocommerce #payment div.payment_box p {\n\t\tfont-size: 12px;\n\t\tline-height: 16px;\n\t\ttext-align: justify;\n\t}\n\t.woocommerce form .form-row {\n\t\twidth: 100%;\n\t}\n\t.woocommerce-page .woocommerce .order_details li {\n\t\twidth: 100%;\n\t\tborder-bottom: 1px dashed #d3ced2;\n\t\tborder-right: none;\n\t\tpadding: 0 0 5px 0;\n\t\tmargin-bottom: 5px;\n\t\tmargin-top: 5px\n\t}\n\t.woocommerce-page address {\n\t\tfont-size: 12px;\n\t}\n\t.woocommerce-page .woocommerce-error,\n\t.woocommerce-page .woocommerce-message,\n\t.woocommerce-page .woocommerce-error li {\n\t\tfont-size: 12px;\n\t}\n\t.woocommerce-page .woocommerce .cart-collaterals .cart_totals a {\n\t\twidth: 100%;\n\t\tmargin-right: 0;\n\t}\n\t.woocommerce-page .woocommerce .checkbox {\n\t\tfont-size: 16px;\n\t}\n\t.woocommerce-page .myaccount_address {\n\t\tfont-size: 12px;\n\t}\n\t.woocommerce-page #content .quantity input.minus,\n\t.woocommerce-page #content .quantity input.plus {\n\t\tdisplay: none;\n\t}\n\t.woocommerce-page .upsells.products ul li.product,\n\t.woocommerce-page .upsells.products ul.products li.product{\n\t\twidth: 100%;\n\t}\n\n}\n/* [end] woocommerce */\n\n/* bbpress style [version 2.5.8] */\n\n.bbpress #subscription-toggle {\n\tfloat: right;\n}\n\n.bbpress .bbp-breadcrumb {\n\tmargin: 10px 0;\n}\n\n#subscription-toggle {\n/**\tmargin: 10px 0;\t*/\n}\n\n#bbpress-forums div.bbp-template-notice img.avatar {\n\tmargin-bottom: 2px;\n}\n\ndiv.bbp-template-notice.info {\n\tborder: none;\n\tbackground-color: #f0f8ff;\n\tpadding: 1px 5px;\n}\n\ndiv.bbp-template-notice, div.indicator-hint {\n\tborder: none;\n\tpadding: 1px 5px;\n\tbackground-color: #FFF7D6;\n}\n\n#bbpress-forums fieldset.bbp-form label {\n\tline-height: 30px;\n}\n\ndiv.bbp-template-notice a {\n\tcolor: #008ed6;\n\ttext-decoration: none;\n}\n\n.bbp-pagination {\n\tfloat: left;\n\twidth: 100%;\n\tmargin-bottom: 0px;\n\tmargin-top: 10px;\n}\n\n#bbpress-forums li.bbp-header {\n\tbackground: #FBFBFB;\n\tpadding: 10px 0;\n}\n\n#bbpress-forums #bbp-search-form #bbp_search {\n\tpadding: 2px;\n    -webkit-border-radius: 3px;\n    -moz-border-radius: 3px;\n    border-radius: 3px;\n}\n\n#bbpress-forums .bbp-forum-info .bbp-forum-content,\n#bbpress-forums p.bbp-topic-meta {\n\tfont-size: 11px;\n\tline-height: 16px;\n}\n\n#bbpress-forums div.bbp-the-content-wrapper input {\n\twidth: auto;\n}\n\n#bbpress-forums fieldset.bbp-form input {\n\tpadding: 5px;\n}\n\n#bbpress-forums li.bbp-header,\n#bbpress-forums li.bbp-footer {\n\tborder-top: none;\n}\n\n#bbpress-forums li.bbp-header {\n\tbackground: none;\n}\n\n#bbpress-forums div.odd,\n#bbpress-forums ul.odd {\n\tbackground: none;\n}\n\n#bbpress-forums input[type=\"submit\"] {\n    padding: 5px 30px 5px 30px;\n}\n\n#bbpress-forums li.bbp-header,\n#bbpress-forums li.bbp-footer {\n\tbackground: none;\n}\n\n#bbpress-forums li.bbp-header {\n\tborder-bottom: 2px solid #ececec;\n}\n\n#bbpress-forums li.bbp-footer {\n\tborder-top: 3px solid #ececec;\n}\n\n.bbp-breadcrumb,\n.bbp-breadcrumb a,\n.bbp-breadcrumb p {\n    font-weight: 400;\n    color: #666666;\n    font-size: 16px;\n    line-height: 26px;\n}\n\n.bbp-topics-front ul.super-sticky,\n.bbp-topics ul.super-sticky,\n.bbp-topics ul.sticky,\n.bbp-forum-content ul.sticky {\n    background-color: #f9f9f9 !important;\n}\n\n#bbpress-forums ul.bbp-lead-topic,\n#bbpress-forums ul.bbp-topics,\n#bbpress-forums ul.bbp-forums,\n#bbpress-forums ul.bbp-replies,\n#bbpress-forums ul.bbp-search-results {\n    font-weight: 400;\n    color: #666666;\n    font-size: 16px;\n    line-height: 26px;\n}\n\n#bbpress-forums .bbp-forum-info .bbp-forum-content,\n#bbpress-forums p.bbp-topic-meta {\n    font-weight: 400;\n    color: #666666;\n    font-size: 16px;\n    line-height: 26px;\n}\n\n.bbp-forum-title,\n.bbp-forum-title:visited {\n\tfont-size: 18px;\n\tline-height: 22px;\n\tfont-weight: 700;\n\tcolor: #000;\n\tmargin-bottom: 15px;\n\tfloat: left;\n}\n\n.bbp-forum-title:hover {\n\ttext-decoration: none;\n}\n\n.bbp-forum-title:after {\n    content: \"\";\n    height: 2px;\n    width: 80px;\n    display: block;\n    background: #008ed6;\n    margin-top: 5px;\n}\n\n#bbpress-forums li.bbp-body ul.forum,\n#bbpress-forums li.bbp-body ul.topic {\n\tborder-top: 1px solid #eee;\n\tpadding: 20px 5px !important;\n}\n\n.bbp-forum-freshness p,\n.bbp-forum-freshness a,\n.bbp-forum-freshness span {\n\tfont-size: 14px;\n\tcolor: #666666;\n\tline-height: 18px;\n\tfont-style: italic;\n}\n\n.bbp-forum-freshness a:hover {\n\ttext-decoration: underline;\n}\n\n#bbpress-forums p.bbp-topic-meta img.avatar,\n#bbpress-forums ul.bbp-reply-revision-log img.avatar,\n#bbpress-forums ul.bbp-topic-revision-log img.avatar,\n#bbpress-forums div.bbp-template-notice img.avatar,\n#bbpress-forums .widget_display_topics img.avatar,\n#bbpress-forums .widget_display_replies img.avatar {\n\tmargin-bottom: 0;\n}\n\n#bbpress-forums .bbp-forum-info .bbp-forum-content,\n#bbpress-forums p.bbp-topic-meta {\n\tmargin: 0;\n\tfont-size: 14px;\n\tline-height: 24px;\n\tclear: left;\n}\n\n#bbpress-forums li {\n    font-size: 14px;\n}\n\n#bbpress-forums p.bbp-topic-meta,\n#bbpress-forums p.bbp-topic-meta span {\n\tfont-size: 14px;\n\tline-height: 18px;\n\ttext-align: center;\n}\n\n.bbp-topic-started-by {\n\tfloat: left;\n}\n\ndiv.bbp-template-notice p,\ndiv.bbp-template-notice a {\n\tfont-size: 12px;\n\tline-height: 16px;\n}\n\n.bbp-topic-freshness,\n.bbp-topic-freshness a {\n\tfont-size: 14px;\n\tline-height: 18px;\n\ttext-align: center;\n}\n\n.bbp-topic-freshness a {\n    font-style: italic;\n    color: #666666;\n}\n\na.bbp-author-name:hover,\n.bbp-topic-freshness a:hover {\n\ttext-decoration: underline;\n}\n\n#bbpress-forums ul.bbp-lead-topic,\n#bbpress-forums ul.bbp-topics,\n#bbpress-forums ul.bbp-forums,\n#bbpress-forums ul.bbp-replies,\n#bbpress-forums ul.bbp-search-results {\n\tborder: none;\n}\n\n#bbpress-forums .bbp-author-name {\n    font-size: 14px;\n    line-height: 24px;\n    font-style: italic;\n    color: #666666;\n}\n\n#bbpress-forums fieldset.bbp-form {\n\tborder: none;\n\tpadding: 0;\n\tmargin-bottom: 0;\n}\n\n#bbpress-forums div.bbp-the-content-wrapper textarea.bbp-the-content {\n\tborder: 1px solid #E7E7E7;\n\t-webkit-border-radius: 0 0 3px 3px;\n\t-moz-border-radius: 0 0 3px 3px;\n\tborder-radius: 0 0 3px 3px;\n\tfont-size: 14px;\n}\n\n#bbpress-forums div.bbp-the-content-wrapper div.quicktags-toolbar {\n\tborder: 1px solid #E7E7E7;\n\t-webkit-border-radius: 3px 3px 0 0;\n\t-moz-border-radius: 3px 3px 0 0;\n\tborder-radius: 3px 3px 0 0;\n\tborder-bottom: none;\n}\n\n#bbpress-forums div.bbp-the-content-wrapper div.quicktags-toolbar {\n\tborder: 1px solid #E7E7E7;\n\t-webkit-border-radius: 3px 3px 0 0;\n\t-moz-border-radius: 3px 3px 0 0;\n\tborder-radius: 3px 3px 0 0;\n\tborder-bottom: none;\n}\n\nli.bbp-forum-freshness,\nli.bbp-topic-freshness {\n\ttext-align: center;\n\tfloat: left;\n\twidth: 25%;\n}\n\n#bbpress-forums div.bbp-the-content-wrapper div.quicktags-toolbar input {\n    padding: 5px;\n    box-shadow: none;\n    background-color: #FBFBFB;\n    border: 1px solid #E7E7E7;\n}\n\n#bbpress-forums div.bbp-the-content-wrapper div.quicktags-toolbar input:hover {\n\tcolor: #e96656;\n}\n\n#bbpress-forums fieldset.bbp-form input {\n\t-webkit-border-radius: 3px;\n\t-moz-border-radius: 3px;\n\tborder-radius: 3px;\n}\n\n#bbpress-forums fieldset.bbp-form select {\n\tcolor: #666;\n\tborder: 1px solid #dedede;\n\t-webkit-border-radius: 3px;\n\t-moz-border-radius: 3px;\n\tborder-radius: 3px;\n\tpadding: 5px;\n}\n\n.bbp-topics-front ul.super-sticky,\n.bbp-topics ul.super-sticky,\n.bbp-topics ul.sticky,\n.bbp-forum-content ul.sticky {\n\tbackground: red;\n}\n\n#bbpress-forums div.bbp-topic-tags {\n\tfloat: left;\n\tmargin-bottom: 15px;\n\twidth: 100%;\n}\n\n#bbpress-forums .bbp-topic-description a {\n    font-size: 12px;\n    color: #666;\n    font-style: italic;\n}\n\n#bbpress-forums .bbp-topic-description a:hover {\n\ttext-decoration: underline;\n}\n\n#bbpress-forums fieldset.bbp-form legend {\n    padding: 5px 0;\n}\n\ndiv.bbp-forum-header, div.bbp-topic-header, div.bbp-reply-header, li.bbp-body div.hentry {\n\tpadding: 8px 0;\n}\n\n#bbpress-forums div.bbp-reply-header {\n    background: none;\n}\n\n#bbpress-forums .bbp-admin-links {\n\tcolor: transparent;\n}\n\n#bbpress-forums .bbp-admin-links a:hover {\n\tcolor: #008ed6;\n}\n\n.bbp-forum-header a.bbp-forum-permalink,\n.bbp-topic-header a.bbp-topic-permalink,\n.bbp-reply-header a.bbp-reply-permalink {\n\tfloat: right;\n\tmargin-left: 10px;\n\tcolor: #666;\n\tfont-size: 12px;\n\tline-height: 32px;\n}\n\n.bbp-body a.bbp-topic-permalink {\n    font-size: 20px;\n    line-height: 22px;\n    color: #404040;\n    position: relative;\n}\n\n.bbp-body a.bbp-topic-permalink:hover {\n\tcolor: #e96656;\n}\n\n.bbp-body .bbp-topic-permalink:after {\n    position: absolute;\n    margin: auto;\n    z-index: 1;\n    content: \"\";\n    width: 50px;\n    height: 2px;\n    background: #e96656;\n    bottom: -4px;\n    left: 0;\n}\n\n#bbpress-forums #bbp-user-wrapper h2.entry-title {\n\tfont-size: 30px;\n\tline-height: 34px;\n}\n\n#bbpress-forums #bbp-single-user-details #bbp-user-navigation li.current a {\n\tbackground: #008ED6;\n\topacity: 0.8;\n\tcolor: #FFF;\n}\n\n#bbpress-forums #bbp-your-profile fieldset fieldset.password span.description {\n    line-height: 18px;\n}\n\n#bbpress-forums .bbp-forum-description .bbp-author-name {\n\tfont-size: 12px;\n}\n\n.bbp-pagination-count {\n    float: left;\n    border: 1px solid transparent;\n    font-size: 12px;\n}\n\n.bbp-topic-tags a {\n    color: #949494;\n    font-style: italic\n}\n\n.bbp-topic-tags a:hover {\n\tcolor: #e96656;\n}\n\n#bbpress-forums div.bbp-topic-author a.bbp-author-name,\n#bbpress-forums div.bbp-reply-author a.bbp-author-name {\n    clear: left;\n    display: inline-block;\n    color: #e96656;\n}\n\n.bbp-reply-post-date {\n\tfont-size: 12px;\n}\n\n.bbp-template-notice.error strong {\n\tfont-size: 12px;\n}\n\n.bbp-body>ul:nth-child(4n) .bbp-forum-title:after {\n    content: \"\";\n    background: #34d293;\n}\n\n.bbp-body>ul:nth-child(4n+1) .bbp-forum-title:after {\n    content: \"\";\n    background: #3ab0e2;\n}\n\n.bbp-body>ul:nth-child(4n+2) .bbp-forum-title:after {\n    content: \"\";\n    background: #f7d861;\n}\n\n.bbp-body>ul:nth-child(4n+3) .bbp-forum-title:after {\n    content: \"\";\n    background: #e96656;\n}\n\n.bbp-body>ul:nth-child(4n) .bbp-topic-permalink:after {\n    content: \"\";\n    background: #34d293;\n}\n\n.bbp-body>ul:nth-child(4n+1) .bbp-topic-permalink:after {\n    content: \"\";\n    background: #3ab0e2;\n}\n\n.bbp-body>ul:nth-child(4n+2) .bbp-topic-permalink:after {\n    content: \"\";\n    background: #f7d861;\n}\n\n.bbp-body>ul:nth-child(4n+3) .bbp-topic-permalink:after {\n    content: \"\";\n    background: #e96656;\n}\n\n.bbp-meta {\n    webkit-border-radius: 3px;\n    -moz-border-radius: 3px;\n    border-radius: 3px;\n    padding: 0px 5px;\n    border-bottom: 1px solid #F5F5F5;\n    float: left;\n    width: 100%;\n}\n\nspan.bbp-admin-links a {\n\tcolor: #666666;\n}\n\nspan.bbp-admin-links a:hover {\n\tcolor: #e96656 !important;\n}\n\n#favorite-toggle a,\n#subscription-toggle a {\n\tcolor: #666;\n    font-style: italic;\n}\n\n#favorite-toggle a:hover,\n#subscription-toggle a:hover {\n\tcolor: #e96656;\n}\n\n#bbpress-forums #bbp-user-wrapper h2.entry-title {\n    font-size: 1.4em;\n    margin: 0;\n    padding-top: 0;\n    clear: none;\n    padding-bottom: 0;\n}\n\n#bbpress-forums #bbp-user-wrapper h2.entry-title:before {\n    position: absolute;\n    margin: auto;\n    z-index: 1;\n    content: \"\";\n    width: 10%;\n    height: 2px;\n    background: #e96656;\n    bottom: 0px;\n    left: 0;\n}\n\n.bbp-user-section {\n\tmargin-top: 20px;\n}\n\n#bbpress-forums #bbp-single-user-details #bbp-user-navigation a {\n    background: none !important;\n\tcolor: #666;\n\t-webkit-transition: all 0s;\n\t-moz-transition: all 0s;\n\t-o-transition: all 0s;\n\ttransition: all 0s;\n}\n\n#bbpress-forums #bbp-user-wrapper ul.bbp-topics {\n\tclear: left;\n}\n\n.bbp-topic-started-in a {\n\tfont-size: 12px;\n\tcolor: #666;\n\tfont-style: italic;\n}\n\n.bbp-topic-started-in a:hover {\n\ttext-decoration: underline;\n}\n\n#bbpress-forums #bbp-user-wrapper ul.bbp-replies {\n\tclear: left;\n}\n\n#bbpress-forums li.bbp-body .bbp-meta .bbp-header {\n\tfont-size: 13px;\n\tclear: left;\n\tfloat: left;\n}\n\n#bbpress-forums li.bbp-body .bbp-meta .bbp-header .bbp-topic-permalink {\n\tfont-size: 13px;\n\tfont-style: italic;\n}\n\n#bbpress-forums li.bbp-body .bbp-meta .bbp-header .bbp-topic-permalink:after {\n\tcontent: \"\";\n\tdisplay: none\n}\n\n#bbpress-forums li.bbp-body .bbp-meta .bbp-reply-post-date {\n\tfloat: left;\n}\n\n#bbpress-forums fieldset.bbp-form legend {\n    font-size: 20px;\n    line-height: 22px;\n    color: #404040;\n    font-family: 'Montserrat', Helvetica, sans-serif;\n    font-weight: 400;\n    position: relative;\n    margin-bottom: 30px;\n    margin-top: 50px;\n    float: left;\n}\n\n#bbpress-forums fieldset.bbp-form legend:before {\n    position: absolute;\n    margin: auto;\n    z-index: 1;\n    content: \"\";\n    width: 10%;\n    height: 2px;\n    background: #e96656;\n    bottom: -5px;\n    left: 0;\n}\n\n#bbpress-forums .is-favorite a {\n\tcolor: #e96656;\n}\n\n#bbpress-forums .bbp-reply-title h3 {\n\tfloat: left;\n}\n\n#bbpress-forums .bbp-reply-title h3 a {\n\tfont-size: 16px;\n\tfont-style: italic;\n}\n\n#bbpress-forums .bbp-reply-title h3 a.bbp-topic-permalink:after {\n\tcontent: \"\";\n\tdisplay: none;\n}\n\n#bbpress-forums div.bbp-forum-header {\n\tbackground: none;\n\tpadding-bottom: 0;\n}\n\n#bbpress-forums div.bbp-forum-header .bbp-forum-title {\n\tpadding-left: 5px;\n}\n\n#bbpress-forums div.bbp-topic-header {\n\tbackground: none;\n}\n\n #bbpress-forums div.bbp-topic-title h3 {\n \tfloat: left;\n \tpadding-left: 5px;\n }\n\n#bbpress-forums div.bbp-topic-header .bbp-meta .bbp-topic-permalink {\n    float: right;\n    margin-left: 10px;\n    color: #666;\n    font-size: 12px;\n    line-height: 32px;\n}\n\n#bbpress-forums div.bbp-topic-header .bbp-meta .bbp-topic-permalink:after {\n\tcontent: \"\";\n\tdisplay: none;\n}\n\n#bbpress-forums div.bbp-topic-header .bbp-topic-title .bbp-topic-title-meta {\n    float: left;\n    margin-left: 5px;\n    line-height: 33px;\n}\n\n#bbpress-forums div.bbp-forum-header .bbp-forum-title:after {\n\tcontent: \"\";\n\tdisplay: none;\n}\n\nli.bbp-body div.hentry {\n\tpadding: 0;\n}\n\n#bbpress-forums li.bbp-body div.hentry .bbp-forum-content {\n\tpadding-top: 0;\n}\n\n/* [end] bbpress */\n\n\n/* Easy Digital Downloads style [version 2.4.9] */\n.edd_download{\n\tfloat:left;\n\twidth: 33%;\n}\n.edd_download:nth-child(4n+1){\n\tclear:both;\n}\n.edd_download_excerpt p{\n\ttext-align:justify;\n}\n.edd-submit.button.red span,\n.edd-submit.button.blue span,\n.edd-submit.button.green span,\n.edd-submit.button.orange span,\n.edd-submit.button.dark-gray span {\n\tcolor: #FFF;\n}\n\n#edd-purchase-button,\n.edd-submit,\ninput[type=submit].edd-submit {\n\tborder: none;\n}\n\n#edd_checkout_cart td,\n#edd_checkout_cart thead,\n#edd_checkout_cart th.edd_cart_total,\n#edd_checkout_cart th:last-child,\n#edd_checkout_cart .edd_checkout_cart_item_title {\n\tfont-weight: 400;\n\tcolor: #666666;\n\tfont-size: 14px;\n\tline-height: 18px;\n\tborder: none;\n}\n\n#edd_checkout_cart a,\n.edd_discount_link a,\n.edd-lost-password a {\n\tcolor: #f73f2e;\n}\n\n#edd_login_form input[type=\"submit\"] {\n\tmargin-left: 0;\n}\n\n#edd_checkout_form_wrap select.edd-select {\n    display: block;\n    width: 70%;\n}\n\n.edd-cart-added-alert {\n    color: #D9534F;\n    width: 100%;\n}\n\n.edd_errors.edd-alert.edd-alert-error,\n.edd-alert-error {\n\tbackground-color: #E86A6A;\n    color: #FFF;\n    border: none;\n    border-bottom: 3px solid #C84E54;\n    -webkit-border-radius: 3px;\n    -moz-border-radius: 3px;\n    border-radius: 3px;\n    border: none;\n}\n\n.edd-alert-error,\np.edd-alert-error,\n.edd-alert-error a {\n\tcolor: #FFF;\n}\n\n.edd-alert-error a:hover {\n\ttext-decoration: underline;\n}\n\n#edd_checkout_form_wrap fieldset p:last-child {\n\tcolor: rgba(255,255,255,0.8);\n}\n\n.edd_download_inner {\n    background: #ffffff;\n    margin: 0 15px;\n    padding: 15px;\n    transition: all ease 0.55s;\n    list-style: none;\n    text-align: center;\n    margin-bottom: 30px;\n}\n\n.edd_download_inner:hover {\n    border-bottom-color: #008ed6;\n}\n\n.edd_download_title a,\n.edd_download_title {\n    font-size: 1em;\n    color: #404040;\n    font-weight: bold;\n    line-height: 24px;\n}\n\n.edd_download_title{\n\tmargin-top: 10px;\n\tmargin-bottom: 10px;\n}\n\n#edd_checkout_form_wrap legend,\n#edd_login_form legend,\n.edd_form legend {\n\tborder-bottom: 0;\n}\n\n#edd_profile_billing_address_wrap input,\n#edd_profile_billing_address_wrap select {\n    margin-bottom: 10px;\n}\n\n#edd_new_user_pass1,\n#edd_profile_editor_form select,\n#edd_profile_editor_form input[type=\"text\"],\n#edd_profile_editor_form input[type=\"text\"],\n#edd_profile_editor_form input[type=\"email\"],\n#edd_profile_editor_form input[type=\"url\"],\n#edd_profile_editor_form input[type=\"password\"],\n#edd_profile_editor_form input[type=\"search\"],\n#edd_profile_editor_form textarea {\n\tmargin-bottom: 10px;\n\tpadding: 12px;\n    color: #555;\n    border: 1px solid rgba(0, 0, 0, 0.1);\n    border-radius: 3px;\n    width: 221px;\n}\n\n#edd_profile_editor_form input[type=\"submit\"] {\n\tmargin-left: 0;\n}\n\n#edd_profile_billing_address_wrap legend {\n\tmargin-top: 50px;\n}\n\n#edd_login_form legend {\n\tmargin-top: 50px;\n}\n\n#edd_address_country,\n#edd_display_name {\n\twidth: 192px;\n}\n\n#edd_user_history,\n#edd_checkout_cart,\n#edd_checkout_form_wrap fieldset,\n#edd_discounts_list {\n    border: 1px solid rgba(0,0,0,.1);\n    margin: 0 -1px 24px 0;\n    text-align: left;\n    width: 100%;\n    border-collapse: separate;\n    border-radius: 5px;\n}\n\n#edd_user_history th,\n#edd_checkout_cart .edd_cart_header_row th {\n\tbackground: transparent;\n\tborder: none;\n\tpadding: 9px 12px;\n}\n\n#edd_user_history td,\n#edd_checkout_cart td {\n    border-top: 1px solid rgba(0,0,0,.1);\n    padding: 6px 12px;\n    border-bottom: none;\n}\n\n.edd_cart_footer_row,\n#edd_checkout_cart th.edd_cart_total,\n#edd_checkout_cart tfoot th:last-child {\n    border-top: 1px solid rgba(0,0,0,.1);\n}\n\n#edd_checkout_cart .edd_checkout_cart_item_title,\n#edd_checkout_cart td  {\n\tfont-size: 16px;\n\tline-height: 22px;\n}\n\n#edd_checkout_cart td {\n    border-left: none;\n    border-right: none;\n}\n\n#edd_discounts_list .edd_discount {\n    border-top: 1px solid rgba(0,0,0,.1);\n    padding: 6px 12px;\n    border-bottom: none;\n    list-style: none;\n}\n\n#edd_discounts_list .edd_discount:nth-child(1) {\n\tborder-top: none;\n}\n\n#edd_checkout_form_wrap input[type=email],\n#edd_checkout_form_wrap input[type=text] {\n    border: 1px solid rgba(0, 0, 0, 0.1);\n    border-radius: 5px;\n\twidth: 100%;\n    padding: 12px;\n}\n\n#edd_profile_editor_form {\n}\n\n#edd_profile_editor_form legend {\n    margin-top: 30px;\n    margin-bottom: 20px;\n    display: block;\n    font-size: 120%;\n    line-height: 1;\n    font-weight: 700;\n    width: 100%;\n    color: #333;\n}\n\n.edd_price_options.edd_multi_mode ul {\n\tborder: 1px solid rgba(0,0,0,.1);\n\tmargin: 0 -1px 24px 0;\n\ttext-align: left;\n\twidth: 100%;\n\tborder-collapse: separate;\n\tborder-radius: 5px;\n}\n\n.edd_price_options.edd_multi_mode ul li {\n\tborder-top: 1px solid rgba(0,0,0,.1);\n    padding: 6px 12px;\n}\n\n.edd_price_options.edd_multi_mode ul li:nth-child(1) {\n\tborder-top: none;\n}\n\n.edd-image-wrap {\n\tfloat: right;\n\twidth: 100%;\n\tmax-width: 50%;\n\tpadding: 0 0 15px 15px;\n}\n\n.edd-image-wrap img {\n    width: 100%;\n    height: auto;\n}\n\n/* WP MegaMenu */\n.wr-megamenu-container .preview-text,\n.wr-megamenu-container .preview-text p {\n    font-size: 14px;\n    color: #808080;\n    font-weight: normal;\n}\n.wr-megamenu-container .block-sub-menu a {\n\tcolor: #808080;\n\tpadding: 5px;\n}\n.wr-element-submenu .submenu-items a {\n    padding: 6px 5px 6px 20px !important;\n}\n.wr-megamenu-container {\n\tmargin-top: 12px;\n}\n.it-responsive-mega {\n\tdisplay: none !important;\n}\n.jsn-bootstrap3 .glyphicon {\n\tfont-size: 10px;\n\tmargin-right: 2px;\n}\n.wr-element-container {\n\tpadding: 5px 0;\n}\n.jsn-bootstrap3 .glyphicon.glyphicon-chevron-right {\n\tdisplay: none !important;\n}\n.wr-element-container ul.sub-menu li a > i,\n.wr-element-container ul.submenu-items li a > i {\n\tmargin-right: 7px;\n}\n@media only screen and (max-width: 783px) {\n\t.wr-mega-menu .wr-menu-down {\n\t    margin: -43px 5px 0 0 !important;\n\t}\n}\n\n\n\n@media (max-width: 992px) {\n\t.edd_download a.edd-add-to-cart.button.red.edd-submit.edd-has-js {\n\t\tcolor: #FFF;\n\t\tpadding: 10px;\n\t\tfont-size: 12px;\n  \t}\n  \t.edd_download a.edd-add-to-cart.button.red.edd-submit.edd-has-js span {\n  \t\tfont-size: 12px;\n  \t}\n\t.zerif_about_us_center p,\n\t.about-us .col-md-6.zerif_about_us_center.text_and_skills p {\n\t\ttext-align: center;\n\t}\n}\n\n@media (max-width: 768px) {\n\t.edd_download {\n\t\twidth: 100% !important;\n\t}\n}\n\n\n/* [end] Easy Digital Downloads */\n\n\nbody.home.page {\n\tbackground-image: none !important;\n}\n\nbody.custom-background {\n\tbackground-position: left center !important;\n\tbackground-attachment: fixed !important;\n\t/*EDITED!!*/\n\tbackground-size: cover;\n\tbackground-repeat: no-repeat !important;\n}\n\n.zerif_team:nth-child(4n+1), .our-team .col-lg-3:nth-child(4n+1) {\n\tclear:both;\n}\n\n.dropdownmenu {\n\tdisplay: none;\n}\n\n/* mobile background fix */\n.mobile-bg-fix-wrap {\n\twidth: 100%;\n\toverflow: hidden;\n}\n\n.mobile-bg-fix-wrap .mobile-bg-fix-img-wrap {\n\twidth: 100%;\n\theight: 100%;\n\tposition: fixed;\n\ttop: 0;\n\tleft: 0;\n\tz-index: 0;\n}\n\n.mobile-bg-fix-wrap .mobile-bg-fix-img {\n\tposition: absolute;\n\twidth: 100%;\n\theight: 125%;\n\tleft: 0;\n\ttop: 0;\n\tbackground-size: cover;\n}\n\n.mobile-bg-fix-wrap .mobile-bg-fix-whole-site {\n\tposition: relative;\n\tz-index: 1;\n}\n\n\n/*---------------------------------------\n **   Responsive            -----\n-----------------------------------------*/\n\n@media (max-width: 1200px) {\n\n\t.header-content-wrap{\n\t\tpadding: 100px 0 100px;\n\t}\n\n}\n\n@media (min-width: 768px) and (max-width: 1024px) {\n\n    /* TOP BAR ELEMENTS */\n\n     /* HOME */\n\t.intro {\n\t\tmargin-top: 40%;\n\t\tline-height: 55px;\n\t\tfont-size: 45px;\n\t}\n\n      /* ABOUT US */\n\t.big-intro {\n\t\ttext-align: center !important;\n\t}\n\t.about-us .column {\n\t\tmargin-bottom: 40px;\n\t}\n\t.skills {\n\t\tmargin-bottom: 78px !important;\n\t}\n\n      /* TEAM */\n\t.team-member .profile-pic {\n\t\twidth: 128px;\n\t\theight: 128px;\n\t}\n\t.team-member .details {\n\t\tline-height: 18px;\n\t}\n      /* PURCHASE NOW */\n\t.purchase-now {\n\t\tmargin: auto;\n\t\ttext-align: center !important;\n\t}\n\t.purchase-now h3 {\n\t\ttext-align: center;\n\t\tmargin-bottom: 20px;\n\t}\n\t.purchase-now .button {\n\t\tfloat: none;\n\t}\n\n      /* FOOTER */\n\t.container .company-details {\n\t\tpadding-top: 40px;\n\t\twidth: 33%;\n\t}\n\n}\n\n@media (max-width: 992px) {\n\n\t.purchase-now .red-btn{\n\t    float: none;\n\t}\n\t.skills{\n\t    margin-left: 0;\n\t}\n\t#client-feedbacks .feedback-box{\n\t    width: 100%;\n\t    margin-left: 0;\n        margin-right: 0;\n\t}\n\t.header-content-wrap {\n\t\tpadding-top: 26%;\n\t}\n\t.intro-text{\n        font-size: 20px;\n        line-height: 55px;\n    }\n    .section-header h2{\n        font-size: 35px;\n    }\n    .section-header {\n        padding-bottom: 30px;\n    }\n    .focus, .works, .about-us, .features, .packages, .products, .testimonial, .contact-us {\n        padding-top: 60px;\n        padding-bottom: 60px;\n    }\n    .header-content-wrap{\n\t\tpadding: 150px 0 100px;\n\t}\n\t.about-us .big-intro {\n\t\ttext-align: center;\n\t}\n\t.company-details {\n\t\tpadding-top: 0;\n\t\tpadding-bottom: 33px;\n\t}\n\t.container .company-details:first-child {\n\t\tpadding-top: 40px;\n\t}\n\t.copyright {\n\t\twidth: 100%;\n\t\tpadding-top: 33px;\n\t\tpadding-bottom: 33px;\n\t}\n\t.container .company-details {\n\t\twidth: 100%;\n\t}\n\n\n}\n@media (max-width: 767px) {\n\n\t/* HEADER */\n\t.bs-navbar-collapse {\n\t\tborder: 0;\n\t}\n\t#main-nav {\n\t\toverflow: visible;\n\t}\n\t#main-nav,\n\t#main-nav.fixed {\n\t\tposition: relative;\n\t}\n\t.navbar-inverse .navbar-nav {\n\t\tpadding-left: 10px;\n\t\tline-height: normal;\n\t\ttext-align: center;\n\t}\n\t.navbar-inverse .navbar-nav>li {\n\t\tdisplay: inline-block;\n\t\tmargin-bottom: 0;\n\t}\n\t.navbar-inverse .navbar-nav > li {\n\t\twidth: 100%;\n\t\tborder-bottom: 1px solid #EDEDED;\n\t\tposition: relative;\n\t\tmargin: 8px 0 0 0;\n\t\tpadding: 0 0 8px 0;\n\t}\n\t.navbar-inverse .navbar-nav > li  a {\n\t\ttext-align: left;\n\t}\n\t.navbar-inverse .navbar-nav ul.sub-menu {\n\t\tdisplay: none !important;\n\t\tposition: relative;\n\t\ttop: 0;\n\t\tbox-shadow: none;\n\t\twidth: 100%;\n\t}\n\t.navbar-inverse .navbar-nav li.this-open > ul {\n\t\tdisplay: block !important;\n\t}\n\t.navbar-inverse .navbar-nav ul.sub-menu li {\n\t\twidth: 100%;\n\t\tfloat: left;\n\t}\n\t.navbar-inverse .navbar-nav ul.sub-menu li a {\n\t\twidth: 100%;\n\t\tfloat: left;\n\t\tpadding: 8px 25px 8px 0;\n\t\tborder-bottom: 1px solid #EDEDED;\n\t}\n\t.navbar-inverse .navbar-nav ul.sub-menu li:last-child a {\n\t\tborder-bottom: none;\n\t}\n\t.navbar-inverse .navbar-nav ul.sub-menu ul.sub-menu {\n\t\tposition: relative;\n\t\tleft: 0;\n\t\ttop: 0;\n\t}\n\t#main-nav {\n\t\toverflow: hidden;\n\t}\n\t#main-nav,\n\t#main-nav.fixed {\n\t\tposition: relative;\n\t}\n\t.navbar-collapse {\n\t\tmax-height: 100%;\n\t}\n\t.navbar-inverse .navbar-nav ul.sub-menu li {\n\t\tpadding-left: 20px;\n\t}\n\t.navbar-inverse .navbar-nav ul.sub-menu li {\n\t\tpadding-bottom: 0;\n\t\tpadding-top: 0;\n\t}\n\t.dropdownmenu {\n\t\tdisplay: block;\n\t\tposition: absolute;\n\t\tz-index: 9;\n\t\tright: 0;\n\t\ttop: 5px;\n\t\twidth: 25px;\n\t\theight: 25px;\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\tborder-radius: 3px;\n\t\t/*background: url(images/menu-icon.png) center center no-repeat #e96656;*/\n\t}\n\t.navbar-inverse .navbar-nav ul.sub-menu li{\n\t\tmargin-right: 0;\n\t\tpadding-right: 0;\n\t}\n\t.navbar-inverse .navbar-nav > li > a:hover {\n\t\tcolor: #404040 !important;\n\t}\n\t.this-open > a {\n\t\tcolor: #e96656 !important;\n\t}\n\tli.current>a:before {\n\t\tcontent: \"\";\n\t\tdisplay: none !important;\n\t}\n\tul.nav > li.current_page_item > a:before {\n\t\tcontent: \"\";\n\t\tleft: 0px;\n\t\twidth: 50px;\n\t}\n\t.menu-align-center #site-navigation > ul ul {\n        left: 0;\n    }\n\n    /* HOME */\n\t.header {\n\t\tmin-height: inherit;\n\t\tpadding-bottom: 0 !important;\n\t}\n\t.intro {\n\t\tline-height: 8vh;\n\t\tfont-size: 6.5vw;\n\t}\n    .header-content-wrap {\n    \tpadding-top: 10%;\n    }\n\t.intro-text{\n        font-size: 25px;\n        line-height: 49px;\n    }\n\t.focus-box {\n        margin-bottom: 75px;\n    }\n    .section-header {\n        float: left;\n        width: 100%;\n    }\n    .pirate-forms-g-recaptcha > div {\n    \tdisplay: inline-block;\n\t}\n\t.pirate_forms .pirate-forms-submit-button {\n\t\tfloat: none;\n\t\tdisplay: inline-block;\n\t\ttext-align: center;\n\t}\n\t.contact_submit_wrap {\n\t\ttext-align: center;\n\t}\n\n      /* ABOUT US */\n\t.big-intro {\n\t\ttext-align: center !important;\n\t\tfont-size: 8vw !important;\n\t}\n\t.about-us .column {\n\t\tmargin-bottom: 40px;\n\t}\n\t.skills {\n\t\tmargin-bottom: 78px !important;\n\t}\n\t.our-clients{\n\t    width: 100%;\n\t    float: left;\n\t}\n\n      /* PURCHASE NOW */\n\t.purchase-now {\n\t\tmargin: auto;\n\t\ttext-align: center !important;\n\t}\n\t.purchase-now h3 {\n\t\ttext-align: center;\n\t\tmargin-bottom: 20px;\n\t}\n\t.purchase-now .button {\n\t\tfloat: none;\n\t}\n\n      /* FOOTER */\n\t.company-details {\n\t\tpadding-top: 0;\n\t\tpadding-bottom: 33px;\n\t}\n\t.copyright {\n\t\twidth: 100%;\n\t\tpadding-top: 33px;\n\t\tpadding-bottom: 33px;\n\t}\n\tfooter.entry-footer {\n\t\tpadding-top: 0;\n\t}\n\t/* comments */\n\t.comment-metadata {\n\t\tposition: relative;\n\t\ttop: 0px;\n\t\tright: 0px;\n\t}\n}\n@media (max-width: 480px) {\n\n/* HOME */\n\t.intro {\n\t\tmargin-top: 60%;\n\t\tline-height: 6vh;\n\t\tfont-size: 6.5vw;\n\t}\n\n\t.header-content-wrap {\n\t    padding-top: 10%;\n\t}\n\t.intro-text{\n        font-size: 32px;\n        line-height: 37px;\n    }\n\th2 {\n\t\tfont-size: 6.5vw !important;\n\t}\n\t.other-focus-list ul li {\n\t\tdisplay: block;\n\t\ttext-align: left;\n\t\tmargin-right: 0;\n\t}\n\t/* blog */\n\t.post-img-wrap {\n\t\twidth: 100%;\n\t}\n\t.listpost-content-wrap {\n\t\twidth: 100%;\n\t\tmargin-top: 20px;\n\t\tfloat: left;\n\t}\n\t.post-img-wrap a {\n\t\tfloat: none;\n\t\tmargin: 0 auto;\n\t\twidth: 250px;\n\t\theight: 250px;\n\t}\n\t.post-img-wrap {\n\t\ttext-align: center;\n\t\tmargin-right: 0;\n\t}\n\t.post-img-wrap a img{\n\t\twidth: auto;\n\t}\n\t/* comments */\n\t.comment-reply-link{\n\t\tposition: relative;\n\t\tmargin-top: 10px;\n\t}\n\t.post-img-wrap a img{\n\t\twidth: 250px;\n\t\theight: auto;\n\t\t-webkit-transform: scale(1);\n\t\t-moz-transform: scale(1);\n\t\t-o-transform: scale(1);\n\t\t-ms-transform: scale(1);\n\t\ttransform: scale(1);\n\t\t-webkit-transition: all 0.3s ease-out;\n\t\t-moz-transition: all 0.3s ease-out;\n\t\t-ms-transition: all 0.3s ease-out;\n\t\t-o-transition: all 0.3s ease-out;\n\t\ttransition: all 0.3 ease-out;\n\t}\n\t.post-img-wrap a:hover img{\n\t\t-webkit-transform: scale(1);\n\t\t-moz-transform: scale(1);\n\t\t-o-transform: scale(1);\n\t\t-ms-transform: scale(1);\n\t\ttransform: scale(1);\n\t\t-webkit-transition: all 0.3s ease-out;\n\t\t-moz-transition: all 0.3s ease-out;\n\t\t-ms-transition: all 0.3s ease-out;\n\t\t-o-transition: all 0.3s ease-out;\n\t\ttransition: all 0.3 ease-out;\n\t}\n}\n@media (max-width: 320px) {\n    .intro {\n\t\tline-height: 25px;\n\t\tfont-size: 7vw;\n\t}\n\t.header-content-wrap {\n        padding-top: 50%;\n    }\n    .intro-text {\n        font-size: 22px;\n        line-height: 30px;\n    }\n\t.client-list ul li {\n\t\tdisplay: block;\n\t}\n\t.listpost-content-wrap-large{\n\t\tposition: relative;\n\t}\n\t.post-img-wrap-large{\n\t\tdisplay:none;\n\t}\n}\n\n.zerif-copyright {\n\tcolor:#939393!important;\n}\n\n.zerif-copyright-box {\n\twidth: 100%;\n    color: #666;\n}\n\n\n\n/* print */\n@media print {\n\n\tbody {\n\t\tfont-size: 11.25pt;\n\t}\n\ta:link:after,\n\ta:visited:after {\n    \tcontent: \"\";\n\t}\n\theader.header {\n\t    min-height: 0 !important;\n\t}\n\t#main-nav {\n    \tposition: relative;\n\t}\n\t.header-content-wrap {\n\t\tpadding: 30px 0 15px;\n\t}\n\n\t.buttons {\n\t\ttext-align: center;\n\t    margin-top: 0px;\n\t    margin-bottom: 0;\n\t}\n\t.focus,\n\t.works,\n\t.about-us,\n\t.features,\n\t.packages,\n\t.products,\n\t.testimonial,\n\t.contact-us {\n\t\tpadding-top: 15px;\n\t}\n\t.focus {\n\t\tpadding-bottom: 0;\n\t}\n\t.focus .row .focus-box,\n\t.zerif_about_us_center,\n\t.zerif-rtl-skills .skills,\n\t#testimonials > .container > .row,\n\t.zerif-rtl-contact-name,\n\t.zerif-rtl-contact-email,\n\t.zerif-rtl-contact-subject,\n\t#contact > .container > .row .col-lg-12.col-sm-12,\n\t.purchase-now > .container > .row .col-md-9,\n\t.purchase-now > .container > .row .col-md-3,\n\t.separator-one > .color-overlay .container.text,\n\t.separator-one > .color-overlay > div {\n\t    -webkit-transform: translatex(0px) !important;\n\t    -moz-transform: translatex(0px) !important;\n\t    -ms-transform: translatex(0px) !important;\n\t    transform: translatex(0px) !important;\n\t    opacity: 1 !important;\n\t}\n\t.focus .row .focus-box {\n\t    width: 23% !important;\n\t    margin-right: 0;\n\t    margin-left: 0;\n\t    padding-left: 0;\n\t    padding: 0 1.5%;\n\t    margin-bottom: 0;\n\t}\n\t.about-us {\n\t\tpadding-bottom: 0;\n\t}\n\t.about-us .column {\n\t    margin-bottom: 0;\n\t    width: 100%;\n\t    float: left;\n\t    margin-right: 0;\n\t    margin-left: 0;\n\t    padding-left: 0;\n\t    margin-bottom: 0;\n\t}\n\t.about-us .big-intro {\n\t    margin-top: 0;\n\t    text-align: center;\n\t}\n\t.zerif-rtl-big-title,\n\t.zerif-rtl-skills,\n\t.zerif-rtl-skills .skills {\n\t\twidth: 100%;\n\t}\n\t.zerif-rtl-skills .skills li.skill {\n\t    display: inline-block;\n\t    clear: none;\n\t\tfloat: left;\n\t\twidth: 25%;\n\t\tmargin-bottom: 0;\n\t}\n\t.about-us p {\n\t\ttext-align: center;\n\t}\n\t.our-team {\n\t    padding-top: 30px;\n        padding-bottom: 0;\n\t}\n\t.our-team .row {\n\t    -webkit-transform: translatex(0px) !important;\n\t    -moz-transform: translatex(0px) !important;\n\t    -ms-transform: translatex(0px) !important;\n\t    transform: translatex(0px) !important;\n\t    opacity: 1 !important;\n\t}\n\t.our-team .col-lg-3.col-sm-3 {\n\t    width: 23% !important;\n\t    margin-right: 0;\n\t    margin-left: 0;\n\t    padding-left: 0;\n\t    padding: 0 1.5%;\n\t}\n\t.team-member .profile-pic {\n\t    width: 100%;\n\t    height: auto;\n\t}\n\t#client-feedbacks .feedback-box {\n\t    width: 30%;\n\t    padding: 0;\n\t    margin: 1.5%;\n\t}\n\t.feedback-box .quote {\n\t\tdisplay: none;\n\t}\n\t.feedback-box .client-info {\n\t    margin-left: 0;\n\t}\n\t.section-header {\n\t    padding-bottom: 15px;\n\t}\n\t.testimonial {\n\t    padding-bottom: 0;\n\t}\n\t.feedback-box .client {\n\t    margin-top: 0;\n\t}\n\t.contact-us {\n\t    padding-bottom: 0;\n\t}\n\t.contact-us .input-box,\n\ttextarea {\n\t    border: 1px solid #000 !important;\n\t    box-shadow: none;\n\t}\n\t.footer-box {\n\t    width: 23% !important;\n\t    margin-right: 0;\n\t    margin-left: 0;\n\t    padding-left: 0;\n\t    padding: 0 1.5%;\n\t}\n\t.latestnews-box {\n\t    width: 50%;\n\t    padding-left: 2%;\n\t    padding-right: 2%;\n\t    padding: 0;\n\t    margin: 0;\n\t    float: left;\n\t}\n\t#carousel-homepage-latestnews .item {\n\t\theight: auto !important;\n\t}\n\t.company-details {\n\t    width: 33% !important;\n\t    margin-right: 0;\n\t    margin-left: 0;\n\t    padding-left: 0;\n\t    padding: 0 1.5%;\n\t    float: left;\n\t}\n\t.copyright {\n\t\twidth: 100%;\n\t}\n\t.separator-one,\n\t.purchase-now {\n    \tpadding: 15px 0 15px 0;\n\t}\n\t.latest-news {\n\t\tpadding-bottom: 15px;\n\t\tpadding-top: 15px;\n\t}\n\t/* inner page */\n\t.content-left-wrap {\n\t\tpadding-top: 0;\n\t}\n\n}\n\n/*Custom*/\n\n/*Scrolling Nav*/\nbody {\n  /*margin-top: 50px; /* Matches UL Height */\n}\n\nnav {\n  width: 100%;\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  /*background-color: #f2f2f2;*/\n\tbackground-color: transparent;;\n\tdisplay: block;\n\tz-index: 10000\n}\n\nnav a {\n\tcolor: white;\n}\n\n.navOpaque {\n\tbackground-color: #f2f2f2 !important;\n}\n\n.navOpaque a{\n\tcolor: #e96656 !important;\n}\n\nnav ul {\n  z-index: 20000;\n  position: relative;\n  margin: 0px;\n  list-style-type: none;\n  height: 50px;\n  padding: 0px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n\nnav li {\n  display: inline-block;\n  text-align: center;\n  cursor: pointer;\n}\n\n#scrollBlock {\n  z-index: 10000;\n  background-color: #66a3ff;\n  height: 50px;\n  width: 100px;\n  position: absolute;\n  top: 0px;\n  left: 0%;\n}\n/* end scrolling nav */\n\n/*Name Banner*/\n.topBanner {\n\twidth: 100%;\n\n\tmargin: 0px;\n\tpadding: 0px;\n\tposition: relative;\n\n}\n\n#bannerImg {\n\twidth: 100%;\n\theight: auto;\n}\n\n#monoriftImg {\n\twidth: 50%;\n\theight: auto;\n}\n\n.bannerInner {\n\tcolor: white;\n\n}\n\n.bannerInner h1{\n\tfont-size: 100px;\n\tline-height: 1;\n\n}\n\n.bannerInner h2{\n\tfont-size: 50px;\n}\n/* End Name Banner*/\n\n\n\n\n/*animation element*/\n\n.animation-element {\n  opacity: 0;\n  position: relative;\n}\n/*animation element sliding left*/\n\n.animation-element.slide-left {\n  opacity: 0;\n  -moz-transition: all 500ms linear;\n  -webkit-transition: all 500ms linear;\n  -o-transition: all 500ms linear;\n  transition: all 500ms linear;\n  -moz-transform: translate3d(-100px, 0px, 0px);\n  -webkit-transform: translate3d(-100px, 0px, 0px);\n  -o-transform: translate(-100px, 0px);\n  -ms-transform: translate(-100px, 0px);\n  transform: translate3d(-100px, 0px, 0px);\n}\n\n.animation-element.slide-left.in-view {\n  opacity: 1;\n  -moz-transform: translate3d(0px, 0px, 0px);\n  -webkit-transform: translate3d(0px, 0px, 0px);\n  -o-transform: translate(0px, 0px);\n  -ms-transform: translate(0px, 0px);\n  transform: translate3d(0px, 0px, 0px);\n}\n\n.animation-element.slide-right {\n  opacity: 0;\n  -moz-transition: all 500ms linear;\n  -webkit-transition: all 500ms linear;\n  -o-transition: all 500ms linear;\n  transition: all 500ms linear;\n  -moz-transform: translate3d(100px, 0px, 0px);\n  -webkit-transform: translate3d(100px, 0px, 0px);\n  -o-transform: translate(100px, 0px);\n  -ms-transform: translate(100px, 0px);\n  transform: translate3d(100px, 0px, 0px);\n}\n\n.animation-element.slide-right.in-view {\n  opacity: 1;\n  -moz-transform: translate3d(0px, 0px, 0px);\n  -webkit-transform: translate3d(0px, 0px, 0px);\n  -o-transform: translate(0px, 0px);\n  -ms-transform: translate(0px, 0px);\n  transform: translate3d(0px, 0px, 0px);\n}\n\n.animation-element.slide-up {\n  opacity: 0;\n  -moz-transition: all 500ms linear;\n  -webkit-transition: all 500ms linear;\n  -o-transition: all 500ms linear;\n  transition: all 500ms linear;\n  -moz-transform: translate3d(0px, 100px, 0px);\n  -webkit-transform: translate3d(100px, 0px, 0px);\n  -o-transform: translate(0px, 100px);\n  -ms-transform: translate(0px, 100px);\n  transform: translate3d(0px, 100px, 0px);\n}\n\n.animation-element.slide-up.in-view {\n  opacity: 1;\n  -moz-transform: translate3d(0px, 0px, 0px);\n  -webkit-transform: translate3d(0px, 0px, 0px);\n  -o-transform: translate(0px, 0px);\n  -ms-transform: translate(0px, 0px);\n  transform: translate3d(0px, 0px, 0px);\n}\n\n/*end animation element*/\n\n#Portfolio {\n\tbackground-color: #272727;\n\tpadding: 50px;\n\tcolor: white;\n\tpadding-bottom: 100px;\n}\n\n.workFlex {\n\tdisplay: flex;\n}\n\n\n\n.resumeFlex1 {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\twidth: 550px;\n}\n\n.resFlex span {\n\tfont-size: 16px;\n\n}\n.resFlex p {\n\tdisplay: inline;\n\tfont-size: 20px;\n\tcolor: rgb(256, 256, 256)\n\n}\n\n\n.resumeFlex2 {\n\tdisplay: flex;\n\tjustify-content: flex-start;;\n\twidth: 425px;\n\n}\n\n.resumeFlex3 {\n\tdisplay: flex;\n\tjustify-content: space-between;;\n\twidth: 300px;\n\n}\n.resumeFlex4 {\n\tdisplay: flex;\n\tjustify-content: space-between;;\n\twidth: 575px;\n\n}\n\n#phptxt {\n\tmargin-left: 120px;\n}\n\n#frontendArrow {\n    height:40px;\n    background:#e96656 ;\n    color:#fff;\n    position:relative;\n    width:550px;\n    text-align:center;\n    line-height:40px;\n}\n#frontendArrow:after{\n    content:\"\";\n    position:absolute;\n    height:0;\n    width:0;\n    left:100%;\n    top:0;\n    border:20px solid transparent;\n    border-left: 20px solid #e96656 ;\n}\n\n\n\n\n#backendArrow {\n    height:40px;\n    background:rgb(116, 189, 146);\n    color:#fff;\n    position:relative;\n    width:400px;\n    text-align:center;\n    line-height:40px;\n\t\tborder-right-color: none;\n}\n#backendArrow:after{\n    content:\"\";\n    position:absolute;\n    height:0;\n    width:0;\n    left:100%;\n    top:0;\n    border:20px solid transparent;\n    border-left: 20px solid rgb(116, 189, 146);\n}\n\n#dbArrow {\n    height:40px;\n    background:#3ab0e2;\n    color:#fff;\n    position:relative;\n    width:300px;\n    text-align:center;\n    line-height:40px;\n\t\tborder-right-color: none;\n}\n#dbArrow:after{\n    content:\"\";\n    position:absolute;\n    height:0;\n    width:0;\n    left:100%;\n    top:0;\n    border:20px solid transparent;\n    border-left: 20px solid #3ab0e2;\n}\n\n#platBar {\n\theight: 25px;\n\tbackground-color: rgb(219, 162, 57);\n\twidth: 575px;\n}\n\n@media screen and (max-width: 600px) {\n\t#frontendArrow {\n\t\twidth:100%;\n\t\tmargin-right: auto;\n\t\tmargin-left: auto;\n\t}\n\n\t#backendArrow {\n\t\twidth:100%;\n\t\tmargin-right: auto;\n\t\tmargin-left: auto;\n\t}\n\n\t#dbArrow {\n\t\twidth:100%;\n\t\tmargin-right: auto;\n\t\tmargin-left: auto;\n\t}\n\n\t/*.resFlex  span{\n\t\tfont-size: 10px;\n\n\t}*/\n\n\t.resFlex {\nflex-direction: column;\t}\n\n.resumeFlex1{\nwidth:100%;\n\tmargin-right: auto;\n\tmargin-left: auto;\n}\n.resumeFlex2{\nwidth:100%;\n\tmargin-right: auto;\n\tmargin-left: auto;\n}\n.resumeFlex3{\nwidth:100%;\n\tmargin-right: auto;\n\tmargin-left: auto;\n}\n.resumeFlex4{\nwidth:100%;\n\tmargin-right: auto;\n\tmargin-left: auto;\n}\n\n#phptxt {\n\tmargin-left: 0px;\n}\n\n}\n\n\n.halfWide {\n\tflex-basis: 400px;\n\tflex-grow: 1;\n\tmargin-top: 50px;\n\n}\n\n.aboutContain {\n\tflex-grow: 1;\n}\n\n\n.skillsBody {\n\tdisplay: flex;\n\tjustify-content: center;\n}\n\n#aboutus {\n\tpadding-bottom: 100px;\n\tpadding-top: 50px !important\n}\n\n#portFlex {\n\t display: flex;\n\t justify-content: space-around;\n\t flex-wrap: wrap;\n\t margin-bottom: -20px;\n}\n\n.portImg {\n\twidth: 300px;\n\theight: 215px;\n}\n.portBox {\n\tborder-style: solid;\n\tborder-width: 1px;\n\tborder-color: white;\n\twidth: 301px;\n\theight: 285px;\n\toverflow: hidden;\n\tposition: relative;\n\tflex-basis: 301px;\n\tmargin-left: auto;\n\tmargin-right: auto;\n\tmargin-bottom: 20px;\n\tcolor: white !important;\n\n\n}\n\n\n.portBox h3{\n\tmargin-bottom: -5px;\n}\n\n.portSlider {\n\tposition: absolute;\n\theight: 285px;\n\twidth: 302px;\n\ttop: 286px;\n\ttransition: top 0.5s;\n\t-webkit-transition: top 0.5s; /* Safari 3.1 to 6.0 */\n\tcursor: pointer;\n\n}\n\n.zangSlider {\n\tpadding-top: 65px;\n\tbackground-color: #e96656;\n\n}\n\n#retinaSlider {\n\tbackground-color: rgb(116, 189, 146);\n\tpadding-top: 100px;\n}\n\n#scrollSlider {\n\tbackground-color: #31acdf;\n\tpadding-top: 100px;\n}\n\n.ifytSlider {\n\tbackground-color: #e96656;\n\tpadding-top: 100px;\n}\n\n.abSlider {\n\tbackground-color: rgb(116, 189, 146);\n\tpadding-top: 100px;\n\n}\n.redSlider {\n\tbackground-color: #e96656;\n}\n.greenSlider {\n\tbackground-color: rgb(116, 189, 146);\n}\n\n#alsoBoughtSlider {\n\tpadding-top: 50px;\n}\n.portBox a {\n\tcolor:white !important;\n}\n\n.portGitLink {\n\tposition: absolute;\n\tpadding-top: 6px;\n\theight: 40px;\n\ttop: 286px;\n\tbackground-color: rgb(219, 162, 57);\n\twidth: 302px;\n\ttransition: top 0.5s;\n\t-webkit-transition: top 0.5s; /* Safari 3.1 to 6.0 */\n\tcursor: pointer;\n}\n\n#projTypesHead {\n\tpadding-left: 10%;\n\tpadding-right: 10%;\n}\n\n#myGitLink {\n\ttop: -50px;\n\tposition: relative;\n\tfont-size: 20px;\n}\n.intro-text  ol li {\n\tfont-size: 20px;\n\ttext-align: left;\n\tmargin-left: 50px;\n\tline-height: 1.5;\n\tmargin-bottom: 10px;\n}\n\n\n\n.intro-text ul li {\n\tfont-size: 20px;\n\ttext-align: left;\n\t/*margin-left: 50px;*/\n\tline-height: 1.5;\n\tmargin-top: 20px;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map