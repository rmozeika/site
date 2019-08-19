/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1)
	__webpack_require__(6)
	__webpack_require__(9)
	__webpack_require__(12)
	
	
	
	
	__webpack_require__(17);
	__webpack_require__(19)
	
	__webpack_require__(20);
	__webpack_require__(21);
	__webpack_require__(22)
	__webpack_require__(23)
	__webpack_require__(24)
	__webpack_require__(25)
	__webpack_require__(26)
	__webpack_require__(27)


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../node_modules/style-loader/index.js!./../../../../../node_modules/css-loader/index.js!./front.css", function() {
				var newContent = require("!!./../../../../../node_modules/style-loader/index.js!./../../../../../node_modules/css-loader/index.js!./front.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../node_modules/css-loader/index.js!./front.css", function() {
				var newContent = require("!!./../../../../../node_modules/css-loader/index.js!./front.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, ".pirate_forms_wrap .form_field_wrap {\n\tmargin-bottom: 20px;\n}\n.pirate-forms-g-recaptcha {\n\tdisplay: none;\n}\n.pirate_forms_wrap {\n\tfloat:left;\n\twidth: 100%;\n}\n.sidebar .pirate_forms_wrap, .sidebar-wrap .pirate_forms_wrap, #sidebar-secondary .pirate_forms_wrap {\n\tmargin-bottom: 20px;\n}\n.sidebar .form_field_wrap, .sidebar-wrap .form_field_wrap, #sidebar-secondary .form_field_wrap {\n\twidth: 100%;\n}\n.sidebar .pirate-forms-submit-button, .sidebar-wrap .pirate-forms-submit-button, #sidebar-secondary .pirate-forms-submit-button {\n\tfloat:left !important;\n\tmargin-left: 0px;\n    width: 100%;\n}\n.sidebar .pirate_forms_wrap label, .sidebar-wrap .pirate_forms_wrap label, #sidebar-secondary .pirate_forms_wrap label {\n\tdisplay: none;\n}\n.pirate_forms_clearfix {\n\tclear: both;\n}\n.contact_submit_wrap {\n\ttext-align: right;\n}\n", ""]);
	
	// exports


/***/ },
/* 4 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(7);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../node_modules/style-loader/index.js!./../../../../../node_modules/css-loader/index.js!./bootstrap.css", function() {
				var newContent = require("!!./../../../../../node_modules/style-loader/index.js!./../../../../../node_modules/css-loader/index.js!./bootstrap.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(8);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../node_modules/css-loader/index.js!./bootstrap.css", function() {
				var newContent = require("!!./../../../../../node_modules/css-loader/index.js!./bootstrap.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, "/*!\r\n\r\n * Bootstrap v3.1.1 (http://getbootstrap.com)\r\n\r\n * Copyright 2011-2014 Twitter, Inc.\r\n\r\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\r\n\r\n */\r\n\r\n\r\n\r\n/*! normalize.css v3.0.0 | MIT License | git.io/normalize */html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background:0 0}a:active,a:hover{outline:0}abbr[title]{border-bottom:1px dotted}b,strong{font-weight:700}dfn{font-style:italic}h1{font-size:2em;margin:.67em 0}mark{background:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:1em 40px}hr{-moz-box-sizing:content-box;box-sizing:content-box;height:0}pre{overflow:auto}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}button{overflow:visible}button,select{text-transform:none}button,html input[type=button],input[type=reset],input[type=submit]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}input{line-height:normal}input[type=checkbox],input[type=radio]{box-sizing:border-box;padding:0}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{height:auto}input[type=search]{-webkit-appearance:textfield;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;box-sizing:content-box}input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration{-webkit-appearance:none}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{border:0;padding:0}textarea{overflow:auto}optgroup{font-weight:700}table{border-collapse:collapse;border-spacing:0}td,th{padding:0}@media print{*{text-shadow:none!important;color:#000!important;background:transparent!important;box-shadow:none!important}a,a:visited{text-decoration:underline}a[href]:after{content:\" (\" attr(href) \")\"}abbr[title]:after{content:\" (\" attr(title) \")\"}a[href^=\"javascript:\"]:after,a[href^=\"#\"]:after{content:\"\"}pre,blockquote{border:1px solid #999;page-break-inside:avoid}thead{display:table-header-group}tr,img{page-break-inside:avoid}img{max-width:100%!important}p,h2,h3{orphans:3;widows:3}h2,h3{page-break-after:avoid}select{background:#fff!important}.navbar{display:none}.table td,.table th{background-color:#fff!important}.btn>.caret,.dropup>.btn>.caret{border-top-color:#000!important}.label{border:1px solid #000}.table{border-collapse:collapse!important}.table-bordered th,.table-bordered td{border:1px solid #ddd!important}}*{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}:before,:after{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}html{font-size:62.5%;-webkit-tap-highlight-color:rgba(0,0,0,0)}body{font-family:\"Helvetica Neue\",Helvetica,Arial,sans-serif;font-size:14px;line-height:1.42857143;color:#333;background-color:#fff}input,button,select,textarea{font-family:inherit;font-size:inherit;line-height:inherit}a{color:#428bca;text-decoration:none}a:hover,a:focus{color:#2a6496;text-decoration:underline}a:focus{outline:thin dotted;outline:5px auto -webkit-focus-ring-color;outline-offset:-2px}figure{margin:0}img{vertical-align:middle}.img-responsive,.thumbnail>img,.thumbnail a>img,.carousel-inner>.item>img,.carousel-inner>.item>a>img{display:block;max-width:100%;height:auto}.img-rounded{border-radius:6px}.img-thumbnail{padding:4px;line-height:1.42857143;background-color:#fff;border:1px solid #ddd;border-radius:4px;-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out;display:inline-block;max-width:100%;height:auto}.img-circle{border-radius:50%}hr{margin-top:20px;margin-bottom:20px;border:0;border-top:1px solid #eee}.sr-only{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);border:0}h1,h2,h3,h4,h5,h6,.h1,.h2,.h3,.h4,.h5,.h6{font-family:inherit;font-weight:500;line-height:1.1;color:inherit}h1 small,h2 small,h3 small,h4 small,h5 small,h6 small,.h1 small,.h2 small,.h3 small,.h4 small,.h5 small,.h6 small,h1 .small,h2 .small,h3 .small,h4 .small,h5 .small,h6 .small,.h1 .small,.h2 .small,.h3 .small,.h4 .small,.h5 .small,.h6 .small{font-weight:400;line-height:1;color:#999}h1,.h1,h2,.h2,h3,.h3{margin-top:20px;margin-bottom:10px}h1 small,.h1 small,h2 small,.h2 small,h3 small,.h3 small,h1 .small,.h1 .small,h2 .small,.h2 .small,h3 .small,.h3 .small{font-size:65%}h4,.h4,h5,.h5,h6,.h6{margin-top:10px;margin-bottom:10px}h4 small,.h4 small,h5 small,.h5 small,h6 small,.h6 small,h4 .small,.h4 .small,h5 .small,.h5 .small,h6 .small,.h6 .small{font-size:75%}h1,.h1{font-size:36px}h2,.h2{font-size:30px}h3,.h3{font-size:24px}h4,.h4{font-size:18px}h5,.h5{font-size:14px}h6,.h6{font-size:12px}p{margin:0 0 10px}.lead{margin-bottom:20px;font-size:16px;font-weight:200;line-height:1.4}@media (min-width:768px){.lead{font-size:21px}}small,.small{font-size:85%}cite{font-style:normal}.text-left{text-align:left}.text-right{text-align:right}.text-center{text-align:center}.text-justify{text-align:justify}.text-muted{color:#999}.text-primary{color:#428bca}a.text-primary:hover{color:#3071a9}.text-success{color:#3c763d}a.text-success:hover{color:#2b542c}.text-info{color:#31708f}a.text-info:hover{color:#245269}.text-warning{color:#8a6d3b}a.text-warning:hover{color:#66512c}.text-danger{color:#a94442}a.text-danger:hover{color:#843534}.bg-primary{color:#fff;background-color:#428bca}a.bg-primary:hover{background-color:#3071a9}.bg-success{background-color:#dff0d8}a.bg-success:hover{background-color:#c1e2b3}.bg-info{background-color:#d9edf7}a.bg-info:hover{background-color:#afd9ee}.bg-warning{background-color:#fcf8e3}a.bg-warning:hover{background-color:#f7ecb5}.bg-danger{background-color:#f2dede}a.bg-danger:hover{background-color:#e4b9b9}.page-header{padding-bottom:9px;margin:40px 0 20px;border-bottom:1px solid #eee}ul,ol{margin-top:0;margin-bottom:10px}ul ul,ol ul,ul ol,ol ol{margin-bottom:0}.list-unstyled{padding-left:0;list-style:none}.list-inline{padding-left:0;list-style:none;margin-left:-5px}.list-inline>li{display:inline-block;padding-left:5px;padding-right:5px}dl{margin-top:0;margin-bottom:20px}dt,dd{line-height:1.42857143}dt{font-weight:700}dd{margin-left:0}@media (min-width:768px){.dl-horizontal dt{float:left;width:160px;clear:left;text-align:right;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.dl-horizontal dd{margin-left:180px}}abbr[title],abbr[data-original-title]{cursor:help;border-bottom:1px dotted #999}.initialism{font-size:90%;text-transform:uppercase}blockquote{padding:10px 20px;margin:0 0 20px;font-size:17.5px;border-left:5px solid #eee}blockquote p:last-child,blockquote ul:last-child,blockquote ol:last-child{margin-bottom:0}blockquote footer,blockquote small,blockquote .small{display:block;font-size:80%;line-height:1.42857143;color:#999}blockquote footer:before,blockquote small:before,blockquote .small:before{content:'\\2014   \\A0'}.blockquote-reverse,blockquote.pull-right{padding-right:15px;padding-left:0;border-right:5px solid #eee;border-left:0;text-align:right}.blockquote-reverse footer:before,blockquote.pull-right footer:before,.blockquote-reverse small:before,blockquote.pull-right small:before,.blockquote-reverse .small:before,blockquote.pull-right .small:before{content:''}.blockquote-reverse footer:after,blockquote.pull-right footer:after,.blockquote-reverse small:after,blockquote.pull-right small:after,.blockquote-reverse .small:after,blockquote.pull-right .small:after{content:'\\A0   \\2014'}blockquote:before,blockquote:after{content:\"\"}address{margin-bottom:20px;font-style:normal;line-height:1.42857143}code,kbd,pre,samp{font-family:Menlo,Monaco,Consolas,\"Courier New\",monospace}code{padding:2px 4px;font-size:90%;color:#c7254e;background-color:#f9f2f4;white-space:nowrap;border-radius:4px}kbd{padding:2px 4px;font-size:90%;color:#fff;background-color:#333;border-radius:3px;box-shadow:inset 0 -1px 0 rgba(0,0,0,.25)}pre{display:block;padding:9.5px;margin:0 0 10px;font-size:13px;line-height:1.42857143;word-break:break-all;word-wrap:break-word;color:#333;background-color:#f5f5f5;border:1px solid #ccc;border-radius:4px}pre code{padding:0;font-size:inherit;color:inherit;white-space:pre-wrap;background-color:transparent;border-radius:0}.pre-scrollable{max-height:340px;overflow-y:scroll}.container{margin-right:auto;margin-left:auto;padding-left:15px;padding-right:15px}@media (min-width:768px){.container{width:750px}}@media (min-width:992px){.container{width:970px}}@media (min-width:1200px){.container{width:1170px}}.container-fluid{margin-right:auto;margin-left:auto;padding-left:15px;padding-right:15px}.row{margin-left:-15px;margin-right:-15px}.col-xs-1,.col-sm-1,.col-md-1,.col-lg-1,.col-xs-2,.col-sm-2,.col-md-2,.col-lg-2,.col-xs-3,.col-sm-3,.col-md-3,.col-lg-3,.col-xs-4,.col-sm-4,.col-md-4,.col-lg-4,.col-xs-5,.col-sm-5,.col-md-5,.col-lg-5,.col-xs-6,.col-sm-6,.col-md-6,.col-lg-6,.col-xs-7,.col-sm-7,.col-md-7,.col-lg-7,.col-xs-8,.col-sm-8,.col-md-8,.col-lg-8,.col-xs-9,.col-sm-9,.col-md-9,.col-lg-9,.col-xs-10,.col-sm-10,.col-md-10,.col-lg-10,.col-xs-11,.col-sm-11,.col-md-11,.col-lg-11,.col-xs-12,.col-sm-12,.col-md-12,.col-lg-12{position:relative;min-height:1px;padding-left:15px;padding-right:15px}.col-xs-1,.col-xs-2,.col-xs-3,.col-xs-4,.col-xs-5,.col-xs-6,.col-xs-7,.col-xs-8,.col-xs-9,.col-xs-10,.col-xs-11,.col-xs-12{float:left}.col-xs-12{width:100%}.col-xs-11{width:91.66666667%}.col-xs-10{width:83.33333333%}.col-xs-9{width:75%}.col-xs-8{width:66.66666667%}.col-xs-7{width:58.33333333%}.col-xs-6{width:50%}.col-xs-5{width:41.66666667%}.col-xs-4{width:33.33333333%}.col-xs-3{width:25%}.col-xs-2{width:16.66666667%}.col-xs-1{width:8.33333333%}.col-xs-pull-12{right:100%}.col-xs-pull-11{right:91.66666667%}.col-xs-pull-10{right:83.33333333%}.col-xs-pull-9{right:75%}.col-xs-pull-8{right:66.66666667%}.col-xs-pull-7{right:58.33333333%}.col-xs-pull-6{right:50%}.col-xs-pull-5{right:41.66666667%}.col-xs-pull-4{right:33.33333333%}.col-xs-pull-3{right:25%}.col-xs-pull-2{right:16.66666667%}.col-xs-pull-1{right:8.33333333%}.col-xs-pull-0{right:0}.col-xs-push-12{left:100%}.col-xs-push-11{left:91.66666667%}.col-xs-push-10{left:83.33333333%}.col-xs-push-9{left:75%}.col-xs-push-8{left:66.66666667%}.col-xs-push-7{left:58.33333333%}.col-xs-push-6{left:50%}.col-xs-push-5{left:41.66666667%}.col-xs-push-4{left:33.33333333%}.col-xs-push-3{left:25%}.col-xs-push-2{left:16.66666667%}.col-xs-push-1{left:8.33333333%}.col-xs-push-0{left:0}.col-xs-offset-12{margin-left:100%}.col-xs-offset-11{margin-left:91.66666667%}.col-xs-offset-10{margin-left:83.33333333%}.col-xs-offset-9{margin-left:75%}.col-xs-offset-8{margin-left:66.66666667%}.col-xs-offset-7{margin-left:58.33333333%}.col-xs-offset-6{margin-left:50%}.col-xs-offset-5{margin-left:41.66666667%}.col-xs-offset-4{margin-left:33.33333333%}.col-xs-offset-3{margin-left:25%}.col-xs-offset-2{margin-left:16.66666667%}.col-xs-offset-1{margin-left:8.33333333%}.col-xs-offset-0{margin-left:0}@media (min-width:768px){.col-sm-1,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-sm-10,.col-sm-11,.col-sm-12{float:left}.col-sm-12{width:100%}.col-sm-11{width:91.66666667%}.col-sm-10{width:83.33333333%}.col-sm-9{width:75%}.col-sm-8{width:66.66666667%}.col-sm-7{width:58.33333333%}.col-sm-6{width:50%}.col-sm-5{width:41.66666667%}.col-sm-4{width:33.33333333%}.col-sm-3{width:25%}.col-sm-2{width:16.66666667%}.col-sm-1{width:8.33333333%}.col-sm-pull-12{right:100%}.col-sm-pull-11{right:91.66666667%}.col-sm-pull-10{right:83.33333333%}.col-sm-pull-9{right:75%}.col-sm-pull-8{right:66.66666667%}.col-sm-pull-7{right:58.33333333%}.col-sm-pull-6{right:50%}.col-sm-pull-5{right:41.66666667%}.col-sm-pull-4{right:33.33333333%}.col-sm-pull-3{right:25%}.col-sm-pull-2{right:16.66666667%}.col-sm-pull-1{right:8.33333333%}.col-sm-pull-0{right:0}.col-sm-push-12{left:100%}.col-sm-push-11{left:91.66666667%}.col-sm-push-10{left:83.33333333%}.col-sm-push-9{left:75%}.col-sm-push-8{left:66.66666667%}.col-sm-push-7{left:58.33333333%}.col-sm-push-6{left:50%}.col-sm-push-5{left:41.66666667%}.col-sm-push-4{left:33.33333333%}.col-sm-push-3{left:25%}.col-sm-push-2{left:16.66666667%}.col-sm-push-1{left:8.33333333%}.col-sm-push-0{left:0}.col-sm-offset-12{margin-left:100%}.col-sm-offset-11{margin-left:91.66666667%}.col-sm-offset-10{margin-left:83.33333333%}.col-sm-offset-9{margin-left:75%}.col-sm-offset-8{margin-left:66.66666667%}.col-sm-offset-7{margin-left:58.33333333%}.col-sm-offset-6{margin-left:50%}.col-sm-offset-5{margin-left:41.66666667%}.col-sm-offset-4{margin-left:33.33333333%}.col-sm-offset-3{margin-left:25%}.col-sm-offset-2{margin-left:16.66666667%}.col-sm-offset-1{margin-left:8.33333333%}.col-sm-offset-0{margin-left:0}}@media (min-width:992px){.col-md-1,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-md-10,.col-md-11,.col-md-12{float:left}.col-md-12{width:100%}.col-md-11{width:91.66666667%}.col-md-10{width:83.33333333%}.col-md-9{width:75%}.col-md-8{width:66.66666667%}.col-md-7{width:58.33333333%}.col-md-6{width:50%}.col-md-5{width:41.66666667%}.col-md-4{width:33.33333333%}.col-md-3{width:25%}.col-md-2{width:16.66666667%}.col-md-1{width:8.33333333%}.col-md-pull-12{right:100%}.col-md-pull-11{right:91.66666667%}.col-md-pull-10{right:83.33333333%}.col-md-pull-9{right:75%}.col-md-pull-8{right:66.66666667%}.col-md-pull-7{right:58.33333333%}.col-md-pull-6{right:50%}.col-md-pull-5{right:41.66666667%}.col-md-pull-4{right:33.33333333%}.col-md-pull-3{right:25%}.col-md-pull-2{right:16.66666667%}.col-md-pull-1{right:8.33333333%}.col-md-pull-0{right:0}.col-md-push-12{left:100%}.col-md-push-11{left:91.66666667%}.col-md-push-10{left:83.33333333%}.col-md-push-9{left:75%}.col-md-push-8{left:66.66666667%}.col-md-push-7{left:58.33333333%}.col-md-push-6{left:50%}.col-md-push-5{left:41.66666667%}.col-md-push-4{left:33.33333333%}.col-md-push-3{left:25%}.col-md-push-2{left:16.66666667%}.col-md-push-1{left:8.33333333%}.col-md-push-0{left:0}.col-md-offset-12{margin-left:100%}.col-md-offset-11{margin-left:91.66666667%}.col-md-offset-10{margin-left:83.33333333%}.col-md-offset-9{margin-left:75%}.col-md-offset-8{margin-left:66.66666667%}.col-md-offset-7{margin-left:58.33333333%}.col-md-offset-6{margin-left:50%}.col-md-offset-5{margin-left:41.66666667%}.col-md-offset-4{margin-left:33.33333333%}.col-md-offset-3{margin-left:25%}.col-md-offset-2{margin-left:16.66666667%}.col-md-offset-1{margin-left:8.33333333%}.col-md-offset-0{margin-left:0}}@media (min-width:1200px){.col-lg-1,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-lg-10,.col-lg-11,.col-lg-12{float:left}.col-lg-12{width:100%}.col-lg-11{width:91.66666667%}.col-lg-10{width:83.33333333%}.col-lg-9{width:75%}.col-lg-8{width:66.66666667%}.col-lg-7{width:58.33333333%}.col-lg-6{width:50%}.col-lg-5{width:41.66666667%}.col-lg-4{width:33.33333333%}.col-lg-3{width:25%}.col-lg-2{width:16.66666667%}.col-lg-1{width:8.33333333%}.col-lg-pull-12{right:100%}.col-lg-pull-11{right:91.66666667%}.col-lg-pull-10{right:83.33333333%}.col-lg-pull-9{right:75%}.col-lg-pull-8{right:66.66666667%}.col-lg-pull-7{right:58.33333333%}.col-lg-pull-6{right:50%}.col-lg-pull-5{right:41.66666667%}.col-lg-pull-4{right:33.33333333%}.col-lg-pull-3{right:25%}.col-lg-pull-2{right:16.66666667%}.col-lg-pull-1{right:8.33333333%}.col-lg-pull-0{right:0}.col-lg-push-12{left:100%}.col-lg-push-11{left:91.66666667%}.col-lg-push-10{left:83.33333333%}.col-lg-push-9{left:75%}.col-lg-push-8{left:66.66666667%}.col-lg-push-7{left:58.33333333%}.col-lg-push-6{left:50%}.col-lg-push-5{left:41.66666667%}.col-lg-push-4{left:33.33333333%}.col-lg-push-3{left:25%}.col-lg-push-2{left:16.66666667%}.col-lg-push-1{left:8.33333333%}.col-lg-push-0{left:0}.col-lg-offset-12{margin-left:100%}.col-lg-offset-11{margin-left:91.66666667%}.col-lg-offset-10{margin-left:83.33333333%}.col-lg-offset-9{margin-left:75%}.col-lg-offset-8{margin-left:66.66666667%}.col-lg-offset-7{margin-left:58.33333333%}.col-lg-offset-6{margin-left:50%}.col-lg-offset-5{margin-left:41.66666667%}.col-lg-offset-4{margin-left:33.33333333%}.col-lg-offset-3{margin-left:25%}.col-lg-offset-2{margin-left:16.66666667%}.col-lg-offset-1{margin-left:8.33333333%}.col-lg-offset-0{margin-left:0}}table{max-width:100%;background-color:transparent}th{text-align:left}.table{width:100%;margin-bottom:20px}.table>thead>tr>th,.table>tbody>tr>th,.table>tfoot>tr>th,.table>thead>tr>td,.table>tbody>tr>td,.table>tfoot>tr>td{padding:8px;line-height:1.42857143;vertical-align:top;border-top:1px solid #ddd}.table>thead>tr>th{vertical-align:bottom;border-bottom:2px solid #ddd}.table>caption+thead>tr:first-child>th,.table>colgroup+thead>tr:first-child>th,.table>thead:first-child>tr:first-child>th,.table>caption+thead>tr:first-child>td,.table>colgroup+thead>tr:first-child>td,.table>thead:first-child>tr:first-child>td{border-top:0}.table>tbody+tbody{border-top:2px solid #ddd}.table .table{background-color:#fff}.table-condensed>thead>tr>th,.table-condensed>tbody>tr>th,.table-condensed>tfoot>tr>th,.table-condensed>thead>tr>td,.table-condensed>tbody>tr>td,.table-condensed>tfoot>tr>td{padding:5px}.table-bordered{border:1px solid #ddd}.table-bordered>thead>tr>th,.table-bordered>tbody>tr>th,.table-bordered>tfoot>tr>th,.table-bordered>thead>tr>td,.table-bordered>tbody>tr>td,.table-bordered>tfoot>tr>td{border:1px solid #ddd}.table-bordered>thead>tr>th,.table-bordered>thead>tr>td{border-bottom-width:2px}.table-striped>tbody>tr:nth-child(odd)>td,.table-striped>tbody>tr:nth-child(odd)>th{background-color:#f9f9f9}.table-hover>tbody>tr:hover>td,.table-hover>tbody>tr:hover>th{background-color:#f5f5f5}table col[class*=col-]{position:static;float:none;display:table-column}table td[class*=col-],table th[class*=col-]{position:static;float:none;display:table-cell}.table>thead>tr>td.active,.table>tbody>tr>td.active,.table>tfoot>tr>td.active,.table>thead>tr>th.active,.table>tbody>tr>th.active,.table>tfoot>tr>th.active,.table>thead>tr.active>td,.table>tbody>tr.active>td,.table>tfoot>tr.active>td,.table>thead>tr.active>th,.table>tbody>tr.active>th,.table>tfoot>tr.active>th{background-color:#f5f5f5}.table-hover>tbody>tr>td.active:hover,.table-hover>tbody>tr>th.active:hover,.table-hover>tbody>tr.active:hover>td,.table-hover>tbody>tr.active:hover>th{background-color:#e8e8e8}.table>thead>tr>td.success,.table>tbody>tr>td.success,.table>tfoot>tr>td.success,.table>thead>tr>th.success,.table>tbody>tr>th.success,.table>tfoot>tr>th.success,.table>thead>tr.success>td,.table>tbody>tr.success>td,.table>tfoot>tr.success>td,.table>thead>tr.success>th,.table>tbody>tr.success>th,.table>tfoot>tr.success>th{background-color:#dff0d8}.table-hover>tbody>tr>td.success:hover,.table-hover>tbody>tr>th.success:hover,.table-hover>tbody>tr.success:hover>td,.table-hover>tbody>tr.success:hover>th{background-color:#d0e9c6}.table>thead>tr>td.info,.table>tbody>tr>td.info,.table>tfoot>tr>td.info,.table>thead>tr>th.info,.table>tbody>tr>th.info,.table>tfoot>tr>th.info,.table>thead>tr.info>td,.table>tbody>tr.info>td,.table>tfoot>tr.info>td,.table>thead>tr.info>th,.table>tbody>tr.info>th,.table>tfoot>tr.info>th{background-color:#d9edf7}.table-hover>tbody>tr>td.info:hover,.table-hover>tbody>tr>th.info:hover,.table-hover>tbody>tr.info:hover>td,.table-hover>tbody>tr.info:hover>th{background-color:#c4e3f3}.table>thead>tr>td.warning,.table>tbody>tr>td.warning,.table>tfoot>tr>td.warning,.table>thead>tr>th.warning,.table>tbody>tr>th.warning,.table>tfoot>tr>th.warning,.table>thead>tr.warning>td,.table>tbody>tr.warning>td,.table>tfoot>tr.warning>td,.table>thead>tr.warning>th,.table>tbody>tr.warning>th,.table>tfoot>tr.warning>th{background-color:#fcf8e3}.table-hover>tbody>tr>td.warning:hover,.table-hover>tbody>tr>th.warning:hover,.table-hover>tbody>tr.warning:hover>td,.table-hover>tbody>tr.warning:hover>th{background-color:#faf2cc}.table>thead>tr>td.danger,.table>tbody>tr>td.danger,.table>tfoot>tr>td.danger,.table>thead>tr>th.danger,.table>tbody>tr>th.danger,.table>tfoot>tr>th.danger,.table>thead>tr.danger>td,.table>tbody>tr.danger>td,.table>tfoot>tr.danger>td,.table>thead>tr.danger>th,.table>tbody>tr.danger>th,.table>tfoot>tr.danger>th{background-color:#f2dede}.table-hover>tbody>tr>td.danger:hover,.table-hover>tbody>tr>th.danger:hover,.table-hover>tbody>tr.danger:hover>td,.table-hover>tbody>tr.danger:hover>th{background-color:#ebcccc}@media (max-width:767px){.table-responsive{width:100%;margin-bottom:15px;overflow-y:hidden;overflow-x:scroll;-ms-overflow-style:-ms-autohiding-scrollbar;border:1px solid #ddd;-webkit-overflow-scrolling:touch}.table-responsive>.table{margin-bottom:0}.table-responsive>.table>thead>tr>th,.table-responsive>.table>tbody>tr>th,.table-responsive>.table>tfoot>tr>th,.table-responsive>.table>thead>tr>td,.table-responsive>.table>tbody>tr>td,.table-responsive>.table>tfoot>tr>td{white-space:nowrap}.table-responsive>.table-bordered{border:0}.table-responsive>.table-bordered>thead>tr>th:first-child,.table-responsive>.table-bordered>tbody>tr>th:first-child,.table-responsive>.table-bordered>tfoot>tr>th:first-child,.table-responsive>.table-bordered>thead>tr>td:first-child,.table-responsive>.table-bordered>tbody>tr>td:first-child,.table-responsive>.table-bordered>tfoot>tr>td:first-child{border-left:0}.table-responsive>.table-bordered>thead>tr>th:last-child,.table-responsive>.table-bordered>tbody>tr>th:last-child,.table-responsive>.table-bordered>tfoot>tr>th:last-child,.table-responsive>.table-bordered>thead>tr>td:last-child,.table-responsive>.table-bordered>tbody>tr>td:last-child,.table-responsive>.table-bordered>tfoot>tr>td:last-child{border-right:0}.table-responsive>.table-bordered>tbody>tr:last-child>th,.table-responsive>.table-bordered>tfoot>tr:last-child>th,.table-responsive>.table-bordered>tbody>tr:last-child>td,.table-responsive>.table-bordered>tfoot>tr:last-child>td{border-bottom:0}}fieldset{padding:0;margin:0;border:0;min-width:0}legend{display:block;width:100%;padding:0;margin-bottom:20px;font-size:21px;line-height:inherit;color:#333;border:0;border-bottom:1px solid #e5e5e5}label{display:inline-block;margin-bottom:5px;font-weight:700}input[type=search]{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}input[type=radio],input[type=checkbox]{margin:4px 0 0;margin-top:1px \\9;line-height:normal}input[type=file]{display:block}input[type=range]{display:block;width:100%}select[multiple],select[size]{height:auto}input[type=file]:focus,input[type=radio]:focus,input[type=checkbox]:focus{outline:thin dotted;outline:5px auto -webkit-focus-ring-color;outline-offset:-2px}output{display:block;padding-top:7px;font-size:14px;line-height:1.42857143;color:#555}.form-control{display:block;width:100%;height:34px;padding:6px 12px;font-size:14px;line-height:1.42857143;color:#555;background-color:#fff;background-image:none;border:1px solid #ccc;border-radius:4px;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075);box-shadow:inset 0 1px 1px rgba(0,0,0,.075);-webkit-transition:border-color ease-in-out .15s,box-shadow ease-in-out .15s;transition:border-color ease-in-out .15s,box-shadow ease-in-out .15s}.form-control:focus{border-color:#66afe9;outline:0;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6)}.form-control::-moz-placeholder{color:#999;opacity:1}.form-control:-ms-input-placeholder{color:#999}.form-control::-webkit-input-placeholder{color:#999}.form-control[disabled],.form-control[readonly],fieldset[disabled] .form-control{cursor:not-allowed;background-color:#eee;opacity:1}textarea.form-control{height:auto}input[type=search]{-webkit-appearance:none}input[type=date]{line-height:34px}.form-group{margin-bottom:15px}.radio,.checkbox{display:block;min-height:20px;margin-top:10px;margin-bottom:10px;padding-left:20px}.radio label,.checkbox label{display:inline;font-weight:400;cursor:pointer}.radio input[type=radio],.radio-inline input[type=radio],.checkbox input[type=checkbox],.checkbox-inline input[type=checkbox]{float:left;margin-left:-20px}.radio+.radio,.checkbox+.checkbox{margin-top:-5px}.radio-inline,.checkbox-inline{display:inline-block;padding-left:20px;margin-bottom:0;vertical-align:middle;font-weight:400;cursor:pointer}.radio-inline+.radio-inline,.checkbox-inline+.checkbox-inline{margin-top:0;margin-left:10px}input[type=radio][disabled],input[type=checkbox][disabled],.radio[disabled],.radio-inline[disabled],.checkbox[disabled],.checkbox-inline[disabled],fieldset[disabled] input[type=radio],fieldset[disabled] input[type=checkbox],fieldset[disabled] .radio,fieldset[disabled] .radio-inline,fieldset[disabled] .checkbox,fieldset[disabled] .checkbox-inline{cursor:not-allowed}.input-sm{height:30px;padding:5px 10px;font-size:12px;line-height:1.5;border-radius:3px}select.input-sm{height:30px;line-height:30px}textarea.input-sm,select[multiple].input-sm{height:auto}.input-lg{height:46px;padding:10px 16px;font-size:18px;line-height:1.33;border-radius:6px}select.input-lg{height:46px;line-height:46px}textarea.input-lg,select[multiple].input-lg{height:auto}.has-feedback{position:relative}.has-feedback .form-control{padding-right:42.5px}.has-feedback .form-control-feedback{position:absolute;top:25px;right:0;display:block;width:34px;height:34px;line-height:34px;text-align:center}.has-success .help-block,.has-success .control-label,.has-success .radio,.has-success .checkbox,.has-success .radio-inline,.has-success .checkbox-inline{color:#3c763d}.has-success .form-control{border-color:#3c763d;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075);box-shadow:inset 0 1px 1px rgba(0,0,0,.075)}.has-success .form-control:focus{border-color:#2b542c;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #67b168;box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #67b168}.has-success .input-group-addon{color:#3c763d;border-color:#3c763d;background-color:#dff0d8}.has-success .form-control-feedback{color:#3c763d}.has-warning .help-block,.has-warning .control-label,.has-warning .radio,.has-warning .checkbox,.has-warning .radio-inline,.has-warning .checkbox-inline{color:#8a6d3b}.has-warning .form-control{border-color:#8a6d3b;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075);box-shadow:inset 0 1px 1px rgba(0,0,0,.075)}.has-warning .form-control:focus{border-color:#66512c;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #c0a16b;box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #c0a16b}.has-warning .input-group-addon{color:#8a6d3b;border-color:#8a6d3b;background-color:#fcf8e3}.has-warning .form-control-feedback{color:#8a6d3b}.has-error .help-block,.has-error .control-label,.has-error .radio,.has-error .checkbox,.has-error .radio-inline,.has-error .checkbox-inline{color:#a94442}.has-error .form-control{border-color:#a94442;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075);box-shadow:inset 0 1px 1px rgba(0,0,0,.075)}.has-error .form-control:focus{border-color:#843534;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #ce8483;box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #ce8483}.has-error .input-group-addon{color:#a94442;border-color:#a94442;background-color:#f2dede}.has-error .form-control-feedback{color:#a94442}.form-control-static{margin-bottom:0}.help-block{display:block;margin-top:5px;margin-bottom:10px;color:#737373}@media (min-width:768px){.form-inline .form-group{display:inline-block;margin-bottom:0;vertical-align:middle}.form-inline .form-control{display:inline-block;width:auto;vertical-align:middle}.form-inline .input-group>.form-control{width:100%}.form-inline .control-label{margin-bottom:0;vertical-align:middle}.form-inline .radio,.form-inline .checkbox{display:inline-block;margin-top:0;margin-bottom:0;padding-left:0;vertical-align:middle}.form-inline .radio input[type=radio],.form-inline .checkbox input[type=checkbox]{float:none;margin-left:0}.form-inline .has-feedback .form-control-feedback{top:0}}.form-horizontal .control-label,.form-horizontal .radio,.form-horizontal .checkbox,.form-horizontal .radio-inline,.form-horizontal .checkbox-inline{margin-top:0;margin-bottom:0;padding-top:7px}.form-horizontal .radio,.form-horizontal .checkbox{min-height:27px}.form-horizontal .form-group{margin-left:-15px;margin-right:-15px}.form-horizontal .form-control-static{padding-top:7px}@media (min-width:768px){.form-horizontal .control-label{text-align:right}}.form-horizontal .has-feedback .form-control-feedback{top:0;right:15px}.btn{display:inline-block;margin-bottom:0;font-weight:400;text-align:center;vertical-align:middle;cursor:pointer;background-image:none;border:1px solid transparent;white-space:nowrap;padding:6px 12px;font-size:14px;line-height:1.42857143;border-radius:4px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.btn:focus,.btn:active:focus,.btn.active:focus{outline:thin dotted;outline:5px auto -webkit-focus-ring-color;outline-offset:-2px}.btn:hover,.btn:focus{color:#333;text-decoration:none}.btn:active,.btn.active{outline:0;background-image:none;-webkit-box-shadow:inset 0 3px 5px rgba(0,0,0,.125);box-shadow:inset 0 3px 5px rgba(0,0,0,.125)}.btn.disabled,.btn[disabled],fieldset[disabled] .btn{cursor:not-allowed;pointer-events:none;opacity:.65;filter:alpha(opacity=65);-webkit-box-shadow:none;box-shadow:none}.btn-default{color:#333;background-color:#fff;border-color:#ccc}.btn-default:hover,.btn-default:focus,.btn-default:active,.btn-default.active,.open .dropdown-toggle.btn-default{color:#333;background-color:#ebebeb;border-color:#adadad}.btn-default:active,.btn-default.active,.open .dropdown-toggle.btn-default{background-image:none}.btn-default.disabled,.btn-default[disabled],fieldset[disabled] .btn-default,.btn-default.disabled:hover,.btn-default[disabled]:hover,fieldset[disabled] .btn-default:hover,.btn-default.disabled:focus,.btn-default[disabled]:focus,fieldset[disabled] .btn-default:focus,.btn-default.disabled:active,.btn-default[disabled]:active,fieldset[disabled] .btn-default:active,.btn-default.disabled.active,.btn-default[disabled].active,fieldset[disabled] .btn-default.active{background-color:#fff;border-color:#ccc}.btn-default .badge{color:#fff;background-color:#333}.btn-primary{color:#fff;background-color:#428bca;border-color:#357ebd}.btn-primary:hover,.btn-primary:focus,.btn-primary:active,.btn-primary.active,.open .dropdown-toggle.btn-primary{color:#fff;background-color:#3276b1;border-color:#285e8e}.btn-primary:active,.btn-primary.active,.open .dropdown-toggle.btn-primary{background-image:none}.btn-primary.disabled,.btn-primary[disabled],fieldset[disabled] .btn-primary,.btn-primary.disabled:hover,.btn-primary[disabled]:hover,fieldset[disabled] .btn-primary:hover,.btn-primary.disabled:focus,.btn-primary[disabled]:focus,fieldset[disabled] .btn-primary:focus,.btn-primary.disabled:active,.btn-primary[disabled]:active,fieldset[disabled] .btn-primary:active,.btn-primary.disabled.active,.btn-primary[disabled].active,fieldset[disabled] .btn-primary.active{background-color:#428bca;border-color:#357ebd}.btn-primary .badge{color:#428bca;background-color:#fff}.btn-success{color:#fff;background-color:#5cb85c;border-color:#4cae4c}.btn-success:hover,.btn-success:focus,.btn-success:active,.btn-success.active,.open .dropdown-toggle.btn-success{color:#fff;background-color:#47a447;border-color:#398439}.btn-success:active,.btn-success.active,.open .dropdown-toggle.btn-success{background-image:none}.btn-success.disabled,.btn-success[disabled],fieldset[disabled] .btn-success,.btn-success.disabled:hover,.btn-success[disabled]:hover,fieldset[disabled] .btn-success:hover,.btn-success.disabled:focus,.btn-success[disabled]:focus,fieldset[disabled] .btn-success:focus,.btn-success.disabled:active,.btn-success[disabled]:active,fieldset[disabled] .btn-success:active,.btn-success.disabled.active,.btn-success[disabled].active,fieldset[disabled] .btn-success.active{background-color:#5cb85c;border-color:#4cae4c}.btn-success .badge{color:#5cb85c;background-color:#fff}.btn-info{color:#fff;background-color:#5bc0de;border-color:#46b8da}.btn-info:hover,.btn-info:focus,.btn-info:active,.btn-info.active,.open .dropdown-toggle.btn-info{color:#fff;background-color:#39b3d7;border-color:#269abc}.btn-info:active,.btn-info.active,.open .dropdown-toggle.btn-info{background-image:none}.btn-info.disabled,.btn-info[disabled],fieldset[disabled] .btn-info,.btn-info.disabled:hover,.btn-info[disabled]:hover,fieldset[disabled] .btn-info:hover,.btn-info.disabled:focus,.btn-info[disabled]:focus,fieldset[disabled] .btn-info:focus,.btn-info.disabled:active,.btn-info[disabled]:active,fieldset[disabled] .btn-info:active,.btn-info.disabled.active,.btn-info[disabled].active,fieldset[disabled] .btn-info.active{background-color:#5bc0de;border-color:#46b8da}.btn-info .badge{color:#5bc0de;background-color:#fff}.btn-warning{color:#fff;background-color:#f0ad4e;border-color:#eea236}.btn-warning:hover,.btn-warning:focus,.btn-warning:active,.btn-warning.active,.open .dropdown-toggle.btn-warning{color:#fff;background-color:#ed9c28;border-color:#d58512}.btn-warning:active,.btn-warning.active,.open .dropdown-toggle.btn-warning{background-image:none}.btn-warning.disabled,.btn-warning[disabled],fieldset[disabled] .btn-warning,.btn-warning.disabled:hover,.btn-warning[disabled]:hover,fieldset[disabled] .btn-warning:hover,.btn-warning.disabled:focus,.btn-warning[disabled]:focus,fieldset[disabled] .btn-warning:focus,.btn-warning.disabled:active,.btn-warning[disabled]:active,fieldset[disabled] .btn-warning:active,.btn-warning.disabled.active,.btn-warning[disabled].active,fieldset[disabled] .btn-warning.active{background-color:#f0ad4e;border-color:#eea236}.btn-warning .badge{color:#f0ad4e;background-color:#fff}.btn-danger{color:#fff;background-color:#d9534f;border-color:#d43f3a}.btn-danger:hover,.btn-danger:focus,.btn-danger:active,.btn-danger.active,.open .dropdown-toggle.btn-danger{color:#fff;background-color:#d2322d;border-color:#ac2925}.btn-danger:active,.btn-danger.active,.open .dropdown-toggle.btn-danger{background-image:none}.btn-danger.disabled,.btn-danger[disabled],fieldset[disabled] .btn-danger,.btn-danger.disabled:hover,.btn-danger[disabled]:hover,fieldset[disabled] .btn-danger:hover,.btn-danger.disabled:focus,.btn-danger[disabled]:focus,fieldset[disabled] .btn-danger:focus,.btn-danger.disabled:active,.btn-danger[disabled]:active,fieldset[disabled] .btn-danger:active,.btn-danger.disabled.active,.btn-danger[disabled].active,fieldset[disabled] .btn-danger.active{background-color:#d9534f;border-color:#d43f3a}.btn-danger .badge{color:#d9534f;background-color:#fff}.btn-link{color:#428bca;font-weight:400;cursor:pointer;border-radius:0}.btn-link,.btn-link:active,.btn-link[disabled],fieldset[disabled] .btn-link{background-color:transparent;-webkit-box-shadow:none;box-shadow:none}.btn-link,.btn-link:hover,.btn-link:focus,.btn-link:active{border-color:transparent}.btn-link:hover,.btn-link:focus{color:#2a6496;text-decoration:underline;background-color:transparent}.btn-link[disabled]:hover,fieldset[disabled] .btn-link:hover,.btn-link[disabled]:focus,fieldset[disabled] .btn-link:focus{color:#999;text-decoration:none}.btn-lg,.btn-group-lg>.btn{padding:10px 16px;font-size:18px;line-height:1.33;border-radius:6px}.btn-sm,.btn-group-sm>.btn{padding:5px 10px;font-size:12px;line-height:1.5;border-radius:3px}.btn-xs,.btn-group-xs>.btn{padding:1px 5px;font-size:12px;line-height:1.5;border-radius:3px}.btn-block{display:block;width:100%;padding-left:0;padding-right:0}.btn-block+.btn-block{margin-top:5px}input[type=submit].btn-block,input[type=reset].btn-block,input[type=button].btn-block{width:100%}.fade{opacity:0;-webkit-transition:opacity .15s linear;transition:opacity .15s linear}.fade.in{opacity:1}.collapse{display:none}.collapse.in{display:block}.collapsing{position:relative;height:0;overflow:hidden;-webkit-transition:height .35s ease;transition:height .35s ease}.caret{display:inline-block;width:0;height:0;margin-left:2px;vertical-align:middle;border-top:4px solid;border-right:4px solid transparent;border-left:4px solid transparent}.dropdown{position:relative}.dropdown-toggle:focus{outline:0}.dropdown-menu{position:absolute;top:100%;left:0;z-index:1000;display:none;float:left;min-width:160px;padding:5px 0;margin:2px 0 0;list-style:none;font-size:14px;background-color:#fff;border:1px solid #ccc;border:1px solid rgba(0,0,0,.15);border-radius:4px;-webkit-box-shadow:0 6px 12px rgba(0,0,0,.175);box-shadow:0 6px 12px rgba(0,0,0,.175);background-clip:padding-box}.dropdown-menu.pull-right{right:0;left:auto}.dropdown-menu .divider{height:1px;margin:9px 0;overflow:hidden;background-color:#e5e5e5}.dropdown-menu>li>a{display:block;padding:3px 20px;clear:both;font-weight:400;line-height:1.42857143;color:#333;white-space:nowrap}.dropdown-menu>li>a:hover,.dropdown-menu>li>a:focus{text-decoration:none;color:#262626;background-color:#f5f5f5}.dropdown-menu>.active>a,.dropdown-menu>.active>a:hover,.dropdown-menu>.active>a:focus{color:#fff;text-decoration:none;outline:0;background-color:#428bca}.dropdown-menu>.disabled>a,.dropdown-menu>.disabled>a:hover,.dropdown-menu>.disabled>a:focus{color:#999}.dropdown-menu>.disabled>a:hover,.dropdown-menu>.disabled>a:focus{text-decoration:none;background-color:transparent;background-image:none;filter:progid:DXImageTransform.Microsoft.gradient(enabled=false);cursor:not-allowed}.open>.dropdown-menu{display:block}.open>a{outline:0}.dropdown-menu-right{left:auto;right:0}.dropdown-menu-left{left:0;right:auto}.dropdown-header{display:block;padding:3px 20px;font-size:12px;line-height:1.42857143;color:#999}.dropdown-backdrop{position:fixed;left:0;right:0;bottom:0;top:0;z-index:990}.pull-right>.dropdown-menu{right:0;left:auto}.dropup .caret,.navbar-fixed-bottom .dropdown .caret{border-top:0;border-bottom:4px solid;content:\"\"}.dropup .dropdown-menu,.navbar-fixed-bottom .dropdown .dropdown-menu{top:auto;bottom:100%;margin-bottom:1px}@media (min-width:768px){.navbar-right .dropdown-menu{left:auto;right:0}.navbar-right .dropdown-menu-left{left:0;right:auto}}.btn-group,.btn-group-vertical{position:relative;display:inline-block;vertical-align:middle}.btn-group>.btn,.btn-group-vertical>.btn{position:relative;float:left}.btn-group>.btn:hover,.btn-group-vertical>.btn:hover,.btn-group>.btn:focus,.btn-group-vertical>.btn:focus,.btn-group>.btn:active,.btn-group-vertical>.btn:active,.btn-group>.btn.active,.btn-group-vertical>.btn.active{z-index:2}.btn-group>.btn:focus,.btn-group-vertical>.btn:focus{outline:0}.btn-group .btn+.btn,.btn-group .btn+.btn-group,.btn-group .btn-group+.btn,.btn-group .btn-group+.btn-group{margin-left:-1px}.btn-toolbar{margin-left:-5px}.btn-toolbar .btn-group,.btn-toolbar .input-group{float:left}.btn-toolbar>.btn,.btn-toolbar>.btn-group,.btn-toolbar>.input-group{margin-left:5px}.btn-group>.btn:not(:first-child):not(:last-child):not(.dropdown-toggle){border-radius:0}.btn-group>.btn:first-child{margin-left:0}.btn-group>.btn:first-child:not(:last-child):not(.dropdown-toggle){border-bottom-right-radius:0;border-top-right-radius:0}.btn-group>.btn:last-child:not(:first-child),.btn-group>.dropdown-toggle:not(:first-child){border-bottom-left-radius:0;border-top-left-radius:0}.btn-group>.btn-group{float:left}.btn-group>.btn-group:not(:first-child):not(:last-child)>.btn{border-radius:0}.btn-group>.btn-group:first-child>.btn:last-child,.btn-group>.btn-group:first-child>.dropdown-toggle{border-bottom-right-radius:0;border-top-right-radius:0}.btn-group>.btn-group:last-child>.btn:first-child{border-bottom-left-radius:0;border-top-left-radius:0}.btn-group .dropdown-toggle:active,.btn-group.open .dropdown-toggle{outline:0}.btn-group>.btn+.dropdown-toggle{padding-left:8px;padding-right:8px}.btn-group>.btn-lg+.dropdown-toggle{padding-left:12px;padding-right:12px}.btn-group.open .dropdown-toggle{-webkit-box-shadow:inset 0 3px 5px rgba(0,0,0,.125);box-shadow:inset 0 3px 5px rgba(0,0,0,.125)}.btn-group.open .dropdown-toggle.btn-link{-webkit-box-shadow:none;box-shadow:none}.btn .caret{margin-left:0}.btn-lg .caret{border-width:5px 5px 0;border-bottom-width:0}.dropup .btn-lg .caret{border-width:0 5px 5px}.btn-group-vertical>.btn,.btn-group-vertical>.btn-group,.btn-group-vertical>.btn-group>.btn{display:block;float:none;width:100%;max-width:100%}.btn-group-vertical>.btn-group>.btn{float:none}.btn-group-vertical>.btn+.btn,.btn-group-vertical>.btn+.btn-group,.btn-group-vertical>.btn-group+.btn,.btn-group-vertical>.btn-group+.btn-group{margin-top:-1px;margin-left:0}.btn-group-vertical>.btn:not(:first-child):not(:last-child){border-radius:0}.btn-group-vertical>.btn:first-child:not(:last-child){border-top-right-radius:4px;border-bottom-right-radius:0;border-bottom-left-radius:0}.btn-group-vertical>.btn:last-child:not(:first-child){border-bottom-left-radius:4px;border-top-right-radius:0;border-top-left-radius:0}.btn-group-vertical>.btn-group:not(:first-child):not(:last-child)>.btn{border-radius:0}.btn-group-vertical>.btn-group:first-child:not(:last-child)>.btn:last-child,.btn-group-vertical>.btn-group:first-child:not(:last-child)>.dropdown-toggle{border-bottom-right-radius:0;border-bottom-left-radius:0}.btn-group-vertical>.btn-group:last-child:not(:first-child)>.btn:first-child{border-top-right-radius:0;border-top-left-radius:0}.btn-group-justified{display:table;width:100%;table-layout:fixed;border-collapse:separate}.btn-group-justified>.btn,.btn-group-justified>.btn-group{float:none;display:table-cell;width:1%}.btn-group-justified>.btn-group .btn{width:100%}[data-toggle=buttons]>.btn>input[type=radio],[data-toggle=buttons]>.btn>input[type=checkbox]{display:none}.input-group{position:relative;display:table;border-collapse:separate}.input-group[class*=col-]{float:none;padding-left:0;padding-right:0}.input-group .form-control{position:relative;z-index:2;float:left;width:100%;margin-bottom:0}.input-group-lg>.form-control,.input-group-lg>.input-group-addon,.input-group-lg>.input-group-btn>.btn{height:46px;padding:10px 16px;font-size:18px;line-height:1.33;border-radius:6px}select.input-group-lg>.form-control,select.input-group-lg>.input-group-addon,select.input-group-lg>.input-group-btn>.btn{height:46px;line-height:46px}textarea.input-group-lg>.form-control,textarea.input-group-lg>.input-group-addon,textarea.input-group-lg>.input-group-btn>.btn,select[multiple].input-group-lg>.form-control,select[multiple].input-group-lg>.input-group-addon,select[multiple].input-group-lg>.input-group-btn>.btn{height:auto}.input-group-sm>.form-control,.input-group-sm>.input-group-addon,.input-group-sm>.input-group-btn>.btn{height:30px;padding:5px 10px;font-size:12px;line-height:1.5;border-radius:3px}select.input-group-sm>.form-control,select.input-group-sm>.input-group-addon,select.input-group-sm>.input-group-btn>.btn{height:30px;line-height:30px}textarea.input-group-sm>.form-control,textarea.input-group-sm>.input-group-addon,textarea.input-group-sm>.input-group-btn>.btn,select[multiple].input-group-sm>.form-control,select[multiple].input-group-sm>.input-group-addon,select[multiple].input-group-sm>.input-group-btn>.btn{height:auto}.input-group-addon,.input-group-btn,.input-group .form-control{display:table-cell}.input-group-addon:not(:first-child):not(:last-child),.input-group-btn:not(:first-child):not(:last-child),.input-group .form-control:not(:first-child):not(:last-child){border-radius:0}.input-group-addon,.input-group-btn{width:1%;white-space:nowrap;vertical-align:middle}.input-group-addon{padding:6px 12px;font-size:14px;font-weight:400;line-height:1;color:#555;text-align:center;background-color:#eee;border:1px solid #ccc;border-radius:4px}.input-group-addon.input-sm{padding:5px 10px;font-size:12px;border-radius:3px}.input-group-addon.input-lg{padding:10px 16px;font-size:18px;border-radius:6px}.input-group-addon input[type=radio],.input-group-addon input[type=checkbox]{margin-top:0}.input-group .form-control:first-child,.input-group-addon:first-child,.input-group-btn:first-child>.btn,.input-group-btn:first-child>.btn-group>.btn,.input-group-btn:first-child>.dropdown-toggle,.input-group-btn:last-child>.btn:not(:last-child):not(.dropdown-toggle),.input-group-btn:last-child>.btn-group:not(:last-child)>.btn{border-bottom-right-radius:0;border-top-right-radius:0}.input-group-addon:first-child{border-right:0}.input-group .form-control:last-child,.input-group-addon:last-child,.input-group-btn:last-child>.btn,.input-group-btn:last-child>.btn-group>.btn,.input-group-btn:last-child>.dropdown-toggle,.input-group-btn:first-child>.btn:not(:first-child),.input-group-btn:first-child>.btn-group:not(:first-child)>.btn{border-bottom-left-radius:0;border-top-left-radius:0}.input-group-addon:last-child{border-left:0}.input-group-btn{position:relative;font-size:0;white-space:nowrap}.input-group-btn>.btn{position:relative}.input-group-btn>.btn+.btn{margin-left:-1px}.input-group-btn>.btn:hover,.input-group-btn>.btn:focus,.input-group-btn>.btn:active{z-index:2}.input-group-btn:first-child>.btn,.input-group-btn:first-child>.btn-group{margin-right:-1px}.input-group-btn:last-child>.btn,.input-group-btn:last-child>.btn-group{margin-left:-1px}.nav{margin-bottom:0;padding-left:0;list-style:none}.nav>li{position:relative;display:block}.nav>li>a{position:relative;display:block;padding:10px 15px}.nav>li>a:hover,.nav>li>a:focus{text-decoration:none;background-color:#eee}.nav>li.disabled>a{color:#999}.nav>li.disabled>a:hover,.nav>li.disabled>a:focus{color:#999;text-decoration:none;background-color:transparent;cursor:not-allowed}.nav .open>a,.nav .open>a:hover,.nav .open>a:focus{background-color:#eee;border-color:#428bca}.nav .nav-divider{height:1px;margin:9px 0;overflow:hidden;background-color:#e5e5e5}.nav>li>a>img{max-width:none}.nav-tabs{border-bottom:1px solid #ddd}.nav-tabs>li{float:left;margin-bottom:-1px}.nav-tabs>li>a{margin-right:2px;line-height:1.42857143;border:1px solid transparent;border-radius:4px 4px 0 0}.nav-tabs>li>a:hover{border-color:#eee #eee #ddd}.nav-tabs>li.active>a,.nav-tabs>li.active>a:hover,.nav-tabs>li.active>a:focus{color:#555;background-color:#fff;border:1px solid #ddd;border-bottom-color:transparent;cursor:default}.nav-tabs.nav-justified{width:100%;border-bottom:0}.nav-tabs.nav-justified>li{float:none}.nav-tabs.nav-justified>li>a{text-align:center;margin-bottom:5px}.nav-tabs.nav-justified>.dropdown .dropdown-menu{top:auto;left:auto}@media (min-width:768px){.nav-tabs.nav-justified>li{display:table-cell;width:1%}.nav-tabs.nav-justified>li>a{margin-bottom:0}}.nav-tabs.nav-justified>li>a{margin-right:0;border-radius:4px}.nav-tabs.nav-justified>.active>a,.nav-tabs.nav-justified>.active>a:hover,.nav-tabs.nav-justified>.active>a:focus{border:1px solid #ddd}@media (min-width:768px){.nav-tabs.nav-justified>li>a{border-bottom:1px solid #ddd;border-radius:4px 4px 0 0}.nav-tabs.nav-justified>.active>a,.nav-tabs.nav-justified>.active>a:hover,.nav-tabs.nav-justified>.active>a:focus{border-bottom-color:#fff}}.nav-pills>li{float:left}.nav-pills>li>a{border-radius:4px}.nav-pills>li+li{margin-left:2px}.nav-pills>li.active>a,.nav-pills>li.active>a:hover,.nav-pills>li.active>a:focus{color:#fff;background-color:#428bca}.nav-stacked>li{float:none}.nav-stacked>li+li{margin-top:2px;margin-left:0}.nav-justified{width:100%}.nav-justified>li{float:none}.nav-justified>li>a{text-align:center;margin-bottom:5px}.nav-justified>.dropdown .dropdown-menu{top:auto;left:auto}@media (min-width:768px){.nav-justified>li{display:table-cell;width:1%}.nav-justified>li>a{margin-bottom:0}}.nav-tabs-justified{border-bottom:0}.nav-tabs-justified>li>a{margin-right:0;border-radius:4px}.nav-tabs-justified>.active>a,.nav-tabs-justified>.active>a:hover,.nav-tabs-justified>.active>a:focus{border:1px solid #ddd}@media (min-width:768px){.nav-tabs-justified>li>a{border-bottom:1px solid #ddd;border-radius:4px 4px 0 0}.nav-tabs-justified>.active>a,.nav-tabs-justified>.active>a:hover,.nav-tabs-justified>.active>a:focus{border-bottom-color:#fff}}.tab-content>.tab-pane{display:none}.tab-content>.active{display:block}.nav-tabs .dropdown-menu{margin-top:-1px;border-top-right-radius:0;border-top-left-radius:0}.navbar{position:relative;min-height:50px;margin-bottom:20px;border:1px solid transparent}@media (min-width:768px){.navbar{border-radius:4px}}@media (min-width:768px){.navbar-header{float:left}}.navbar-collapse{max-height:340px;overflow-x:visible;padding-right:15px;padding-left:15px;border-top:1px solid transparent;box-shadow:inset 0 1px 0 rgba(255,255,255,.1);-webkit-overflow-scrolling:touch}.navbar-collapse.in{overflow-y:auto}@media (min-width:768px){.navbar-collapse{width:auto;border-top:0;box-shadow:none}.navbar-collapse.collapse{display:block!important;height:auto!important;padding-bottom:0;overflow:visible!important}.navbar-collapse.in{overflow-y:visible}.navbar-fixed-top .navbar-collapse,.navbar-static-top .navbar-collapse,.navbar-fixed-bottom .navbar-collapse{padding-left:0;padding-right:0}}.container>.navbar-header,.container-fluid>.navbar-header,.container>.navbar-collapse,.container-fluid>.navbar-collapse{margin-right:-15px;margin-left:-15px}@media (min-width:768px){.container>.navbar-header,.container-fluid>.navbar-header,.container>.navbar-collapse,.container-fluid>.navbar-collapse{margin-right:0;margin-left:0}}.navbar-static-top{z-index:1000;border-width:0 0 1px}@media (min-width:768px){.navbar-static-top{border-radius:0}}.navbar-fixed-top,.navbar-fixed-bottom{position:fixed;right:0;left:0;z-index:1030}@media (min-width:768px){.navbar-fixed-top,.navbar-fixed-bottom{border-radius:0}}.navbar-fixed-top{top:0;border-width:0 0 1px}.navbar-fixed-bottom{bottom:0;margin-bottom:0;border-width:1px 0 0}.navbar-brand{float:left;padding:15px;font-size:18px;line-height:20px;height:50px}.navbar-brand:hover,.navbar-brand:focus{text-decoration:none}@media (min-width:768px){.navbar>.container .navbar-brand,.navbar>.container-fluid .navbar-brand{margin-left:-15px}}.navbar-toggle{position:relative;float:right;margin-right:15px;padding:9px 10px;margin-top:8px;margin-bottom:8px;background-color:transparent;background-image:none;border:1px solid transparent;border-radius:4px}.navbar-toggle:focus{outline:0}.navbar-toggle .icon-bar{display:block;width:22px;height:2px;border-radius:1px}.navbar-toggle .icon-bar+.icon-bar{margin-top:4px}@media (min-width:768px){.navbar-toggle{display:none}}.navbar-nav{margin:7.5px -15px}.navbar-nav>li>a{padding-top:10px;padding-bottom:10px;line-height:20px}@media (max-width:767px){.navbar-nav .open .dropdown-menu{position:static;float:none;width:auto;margin-top:0;background-color:transparent;border:0;box-shadow:none}.navbar-nav .open .dropdown-menu>li>a,.navbar-nav .open .dropdown-menu .dropdown-header{padding:5px 15px 5px 25px}.navbar-nav .open .dropdown-menu>li>a{line-height:20px}.navbar-nav .open .dropdown-menu>li>a:hover,.navbar-nav .open .dropdown-menu>li>a:focus{background-image:none}}@media (min-width:768px){.navbar-nav{float:left;margin:0}.navbar-nav>li{float:left}.navbar-nav>li>a{padding-top:15px;padding-bottom:15px}.navbar-nav.navbar-right:last-child{margin-right:-15px}}@media (min-width:768px){.navbar-left{float:left!important}.navbar-right{float:right!important}}.navbar-form{margin-left:-15px;margin-right:-15px;padding:10px 15px;border-top:1px solid transparent;border-bottom:1px solid transparent;-webkit-box-shadow:inset 0 1px 0 rgba(255,255,255,.1),0 1px 0 rgba(255,255,255,.1);box-shadow:inset 0 1px 0 rgba(255,255,255,.1),0 1px 0 rgba(255,255,255,.1);margin-top:8px;margin-bottom:8px}@media (min-width:768px){.navbar-form .form-group{display:inline-block;margin-bottom:0;vertical-align:middle}.navbar-form .form-control{display:inline-block;width:auto;vertical-align:middle}.navbar-form .input-group>.form-control{width:100%}.navbar-form .control-label{margin-bottom:0;vertical-align:middle}.navbar-form .radio,.navbar-form .checkbox{display:inline-block;margin-top:0;margin-bottom:0;padding-left:0;vertical-align:middle}.navbar-form .radio input[type=radio],.navbar-form .checkbox input[type=checkbox]{float:none;margin-left:0}.navbar-form .has-feedback .form-control-feedback{top:0}}@media (max-width:767px){.navbar-form .form-group{margin-bottom:5px}}@media (min-width:768px){.navbar-form{width:auto;border:0;margin-left:0;margin-right:0;padding-top:0;padding-bottom:0;-webkit-box-shadow:none;box-shadow:none}.navbar-form.navbar-right:last-child{margin-right:-15px}}.navbar-nav>li>.dropdown-menu{margin-top:0;border-top-right-radius:0;border-top-left-radius:0}.navbar-fixed-bottom .navbar-nav>li>.dropdown-menu{border-bottom-right-radius:0;border-bottom-left-radius:0}.navbar-btn{margin-top:8px;margin-bottom:8px}.navbar-btn.btn-sm{margin-top:10px;margin-bottom:10px}.navbar-btn.btn-xs{margin-top:14px;margin-bottom:14px}.navbar-text{margin-top:15px;margin-bottom:15px}@media (min-width:768px){.navbar-text{float:left;margin-left:15px;margin-right:15px}.navbar-text.navbar-right:last-child{margin-right:0}}.navbar-default{background-color:#f8f8f8;border-color:#e7e7e7}.navbar-default .navbar-brand{color:#777}.navbar-default .navbar-brand:hover,.navbar-default .navbar-brand:focus{color:#5e5e5e;background-color:transparent}.navbar-default .navbar-text{color:#777}.navbar-default .navbar-nav>li>a{color:#777}.navbar-default .navbar-nav>li>a:hover,.navbar-default .navbar-nav>li>a:focus{color:#333;background-color:transparent}.navbar-default .navbar-nav>.active>a,.navbar-default .navbar-nav>.active>a:hover,.navbar-default .navbar-nav>.active>a:focus{color:#555;background-color:#e7e7e7}.navbar-default .navbar-nav>.disabled>a,.navbar-default .navbar-nav>.disabled>a:hover,.navbar-default .navbar-nav>.disabled>a:focus{color:#ccc;background-color:transparent}.navbar-default .navbar-toggle{border-color:#ddd}.navbar-default .navbar-toggle:hover,.navbar-default .navbar-toggle:focus{background-color:#ddd}.navbar-default .navbar-toggle .icon-bar{background-color:#888}.navbar-default .navbar-collapse,.navbar-default .navbar-form{border-color:#e7e7e7}.navbar-default .navbar-nav>.open>a,.navbar-default .navbar-nav>.open>a:hover,.navbar-default .navbar-nav>.open>a:focus{background-color:#e7e7e7;color:#555}@media (max-width:767px){.navbar-default .navbar-nav .open .dropdown-menu>li>a{color:#777}.navbar-default .navbar-nav .open .dropdown-menu>li>a:hover,.navbar-default .navbar-nav .open .dropdown-menu>li>a:focus{color:#333;background-color:transparent}.navbar-default .navbar-nav .open .dropdown-menu>.active>a,.navbar-default .navbar-nav .open .dropdown-menu>.active>a:hover,.navbar-default .navbar-nav .open .dropdown-menu>.active>a:focus{color:#555;background-color:#e7e7e7}.navbar-default .navbar-nav .open .dropdown-menu>.disabled>a,.navbar-default .navbar-nav .open .dropdown-menu>.disabled>a:hover,.navbar-default .navbar-nav .open .dropdown-menu>.disabled>a:focus{color:#ccc;background-color:transparent}}.navbar-default .navbar-link{color:#777}.navbar-default .navbar-link:hover{color:#333}.navbar-inverse{background-color:#222;border-color:#080808}.navbar-inverse .navbar-brand{color:#999}.navbar-inverse .navbar-brand:hover,.navbar-inverse .navbar-brand:focus{color:#fff;background-color:transparent}.navbar-inverse .navbar-text{color:#999}.navbar-inverse .navbar-nav>li>a{color:#999}.navbar-inverse .navbar-nav>li>a:hover,.navbar-inverse .navbar-nav>li>a:focus{color:#fff;background-color:transparent}.navbar-inverse .navbar-nav>.active>a,.navbar-inverse .navbar-nav>.active>a:hover,.navbar-inverse .navbar-nav>.active>a:focus{color:#fff;background-color:#080808}.navbar-inverse .navbar-nav>.disabled>a,.navbar-inverse .navbar-nav>.disabled>a:hover,.navbar-inverse .navbar-nav>.disabled>a:focus{color:#444;background-color:transparent}.navbar-inverse .navbar-toggle{border-color:#333}.navbar-inverse .navbar-toggle:hover,.navbar-inverse .navbar-toggle:focus{background-color:#333}.navbar-inverse .navbar-toggle .icon-bar{background-color:#fff}.navbar-inverse .navbar-collapse,.navbar-inverse .navbar-form{border-color:#101010}.navbar-inverse .navbar-nav>.open>a,.navbar-inverse .navbar-nav>.open>a:hover,.navbar-inverse .navbar-nav>.open>a:focus{background-color:#080808;color:#fff}@media (max-width:767px){.navbar-inverse .navbar-nav .open .dropdown-menu>.dropdown-header{border-color:#080808}.navbar-inverse .navbar-nav .open .dropdown-menu .divider{background-color:#080808}.navbar-inverse .navbar-nav .open .dropdown-menu>li>a{color:#999}.navbar-inverse .navbar-nav .open .dropdown-menu>li>a:hover,.navbar-inverse .navbar-nav .open .dropdown-menu>li>a:focus{color:#fff;background-color:transparent}.navbar-inverse .navbar-nav .open .dropdown-menu>.active>a,.navbar-inverse .navbar-nav .open .dropdown-menu>.active>a:hover,.navbar-inverse .navbar-nav .open .dropdown-menu>.active>a:focus{color:#fff;background-color:#080808}.navbar-inverse .navbar-nav .open .dropdown-menu>.disabled>a,.navbar-inverse .navbar-nav .open .dropdown-menu>.disabled>a:hover,.navbar-inverse .navbar-nav .open .dropdown-menu>.disabled>a:focus{color:#444;background-color:transparent}}.navbar-inverse .navbar-link{color:#999}.navbar-inverse .navbar-link:hover{color:#fff}.breadcrumb{padding:8px 15px;margin-bottom:20px;list-style:none;background-color:#f5f5f5;border-radius:4px}.breadcrumb>li{display:inline-block}.breadcrumb>li+li:before{content:\"/\\A0\";padding:0 5px;color:#ccc}.breadcrumb>.active{color:#999}.pagination{display:inline-block;padding-left:0;margin:20px 0;border-radius:4px}.pagination>li{display:inline}.pagination>li>a,.pagination>li>span{position:relative;float:left;padding:6px 12px;line-height:1.42857143;text-decoration:none;color:#428bca;background-color:#fff;border:1px solid #ddd;margin-left:-1px}.pagination>li:first-child>a,.pagination>li:first-child>span{margin-left:0;border-bottom-left-radius:4px;border-top-left-radius:4px}.pagination>li:last-child>a,.pagination>li:last-child>span{border-bottom-right-radius:4px;border-top-right-radius:4px}.pagination>li>a:hover,.pagination>li>span:hover,.pagination>li>a:focus,.pagination>li>span:focus{color:#2a6496;background-color:#eee;border-color:#ddd}.pagination>.active>a,.pagination>.active>span,.pagination>.active>a:hover,.pagination>.active>span:hover,.pagination>.active>a:focus,.pagination>.active>span:focus{z-index:2;color:#fff;background-color:#428bca;border-color:#428bca;cursor:default}.pagination>.disabled>span,.pagination>.disabled>span:hover,.pagination>.disabled>span:focus,.pagination>.disabled>a,.pagination>.disabled>a:hover,.pagination>.disabled>a:focus{color:#999;background-color:#fff;border-color:#ddd;cursor:not-allowed}.pagination-lg>li>a,.pagination-lg>li>span{padding:10px 16px;font-size:18px}.pagination-lg>li:first-child>a,.pagination-lg>li:first-child>span{border-bottom-left-radius:6px;border-top-left-radius:6px}.pagination-lg>li:last-child>a,.pagination-lg>li:last-child>span{border-bottom-right-radius:6px;border-top-right-radius:6px}.pagination-sm>li>a,.pagination-sm>li>span{padding:5px 10px;font-size:12px}.pagination-sm>li:first-child>a,.pagination-sm>li:first-child>span{border-bottom-left-radius:3px;border-top-left-radius:3px}.pagination-sm>li:last-child>a,.pagination-sm>li:last-child>span{border-bottom-right-radius:3px;border-top-right-radius:3px}.pager{padding-left:0;margin:20px 0;list-style:none;text-align:center}.pager li{display:inline}.pager li>a,.pager li>span{display:inline-block;padding:5px 14px;background-color:#fff;border:1px solid #ddd;border-radius:15px}.pager li>a:hover,.pager li>a:focus{text-decoration:none;background-color:#eee}.pager .next>a,.pager .next>span{float:right}.pager .previous>a,.pager .previous>span{float:left}.pager .disabled>a,.pager .disabled>a:hover,.pager .disabled>a:focus,.pager .disabled>span{color:#999;background-color:#fff;cursor:not-allowed}.label{display:inline;padding:.2em .6em .3em;font-size:75%;font-weight:700;line-height:1;color:#fff;text-align:center;white-space:nowrap;vertical-align:baseline;border-radius:.25em}.label[href]:hover,.label[href]:focus{color:#fff;text-decoration:none;cursor:pointer}.label:empty{display:none}.btn .label{position:relative;top:-1px}.label-default{background-color:#999}.label-default[href]:hover,.label-default[href]:focus{background-color:gray}.label-primary{background-color:#428bca}.label-primary[href]:hover,.label-primary[href]:focus{background-color:#3071a9}.label-success{background-color:#5cb85c}.label-success[href]:hover,.label-success[href]:focus{background-color:#449d44}.label-info{background-color:#5bc0de}.label-info[href]:hover,.label-info[href]:focus{background-color:#31b0d5}.label-warning{background-color:#f0ad4e}.label-warning[href]:hover,.label-warning[href]:focus{background-color:#ec971f}.label-danger{background-color:#d9534f}.label-danger[href]:hover,.label-danger[href]:focus{background-color:#c9302c}.badge{display:inline-block;min-width:10px;padding:3px 7px;font-size:12px;font-weight:700;color:#fff;line-height:1;vertical-align:baseline;white-space:nowrap;text-align:center;background-color:#999;border-radius:10px}.badge:empty{display:none}.btn .badge{position:relative;top:-1px}.btn-xs .badge{top:0;padding:1px 5px}a.badge:hover,a.badge:focus{color:#fff;text-decoration:none;cursor:pointer}a.list-group-item.active>.badge,.nav-pills>.active>a>.badge{color:#428bca;background-color:#fff}.nav-pills>li>a>.badge{margin-left:3px}.jumbotron{padding:30px;margin-bottom:30px;color:inherit;background-color:#eee}.jumbotron h1,.jumbotron .h1{color:inherit}.jumbotron p{margin-bottom:15px;font-size:21px;font-weight:200}.container .jumbotron{border-radius:6px}.jumbotron .container{max-width:100%}@media screen and (min-width:768px){.jumbotron{padding-top:48px;padding-bottom:48px}.container .jumbotron{padding-left:60px;padding-right:60px}.jumbotron h1,.jumbotron .h1{font-size:63px}}.thumbnail{display:block;padding:4px;margin-bottom:20px;line-height:1.42857143;background-color:#fff;border:1px solid #ddd;border-radius:4px;-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out}.thumbnail>img,.thumbnail a>img{margin-left:auto;margin-right:auto}a.thumbnail:hover,a.thumbnail:focus,a.thumbnail.active{border-color:#428bca}.thumbnail .caption{padding:9px;color:#333}.alert{padding:15px;margin-bottom:20px;border:1px solid transparent;border-radius:4px}.alert h4{margin-top:0;color:inherit}.alert .alert-link{font-weight:700}.alert>p,.alert>ul{margin-bottom:0}.alert>p+p{margin-top:5px}.alert-dismissable{padding-right:35px}.alert-dismissable .close{position:relative;top:-2px;right:-21px;color:inherit}.alert-success{background-color:#dff0d8;border-color:#d6e9c6;color:#3c763d}.alert-success hr{border-top-color:#c9e2b3}.alert-success .alert-link{color:#2b542c}.alert-info{background-color:#d9edf7;border-color:#bce8f1;color:#31708f}.alert-info hr{border-top-color:#a6e1ec}.alert-info .alert-link{color:#245269}.alert-warning{background-color:#fcf8e3;border-color:#faebcc;color:#8a6d3b}.alert-warning hr{border-top-color:#f7e1b5}.alert-warning .alert-link{color:#66512c}.alert-danger{background-color:#f2dede;border-color:#ebccd1;color:#a94442}.alert-danger hr{border-top-color:#e4b9c0}.alert-danger .alert-link{color:#843534}@-webkit-keyframes progress-bar-stripes{from{background-position:40px 0}to{background-position:0 0}}@keyframes progress-bar-stripes{from{background-position:40px 0}to{background-position:0 0}}.progress{overflow:hidden;height:20px;margin-bottom:20px;background-color:#f5f5f5;border-radius:4px;-webkit-box-shadow:inset 0 1px 2px rgba(0,0,0,.1);box-shadow:inset 0 1px 2px rgba(0,0,0,.1)}.progress-bar{float:left;width:0;height:100%;font-size:12px;line-height:20px;color:#fff;text-align:center;background-color:#428bca;-webkit-box-shadow:inset 0 -1px 0 rgba(0,0,0,.15);box-shadow:inset 0 -1px 0 rgba(0,0,0,.15);-webkit-transition:width .6s ease;transition:width .6s ease}.progress-striped .progress-bar{background-image:-webkit-linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-image:linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-size:40px 40px}.progress.active .progress-bar{-webkit-animation:progress-bar-stripes 2s linear infinite;animation:progress-bar-stripes 2s linear infinite}.progress-bar-success{background-color:#5cb85c}.progress-striped .progress-bar-success{background-image:-webkit-linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-image:linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent)}.progress-bar-info{background-color:#5bc0de}.progress-striped .progress-bar-info{background-image:-webkit-linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-image:linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent)}.progress-bar-warning{background-color:#f0ad4e}.progress-striped .progress-bar-warning{background-image:-webkit-linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-image:linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent)}.progress-bar-danger{background-color:#d9534f}.progress-striped .progress-bar-danger{background-image:-webkit-linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-image:linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent)}.media,.media-body{overflow:hidden;zoom:1}.media,.media .media{margin-top:15px}.media:first-child{margin-top:0}.media-object{display:block}.media-heading{margin:0 0 5px}.media>.pull-left{margin-right:10px}.media>.pull-right{margin-left:10px}.media-list{padding-left:0;list-style:none}.list-group{margin-bottom:20px;padding-left:0}.list-group-item{position:relative;display:block;padding:10px 15px;margin-bottom:-1px;background-color:#fff;border:1px solid #ddd}.list-group-item:first-child{border-top-right-radius:4px;border-top-left-radius:4px}.list-group-item:last-child{margin-bottom:0;border-bottom-right-radius:4px;border-bottom-left-radius:4px}.list-group-item>.badge{float:right}.list-group-item>.badge+.badge{margin-right:5px}a.list-group-item{color:#555}a.list-group-item .list-group-item-heading{color:#333}a.list-group-item:hover,a.list-group-item:focus{text-decoration:none;background-color:#f5f5f5}a.list-group-item.active,a.list-group-item.active:hover,a.list-group-item.active:focus{z-index:2;color:#fff;background-color:#428bca;border-color:#428bca}a.list-group-item.active .list-group-item-heading,a.list-group-item.active:hover .list-group-item-heading,a.list-group-item.active:focus .list-group-item-heading{color:inherit}a.list-group-item.active .list-group-item-text,a.list-group-item.active:hover .list-group-item-text,a.list-group-item.active:focus .list-group-item-text{color:#e1edf7}.list-group-item-success{color:#3c763d;background-color:#dff0d8}a.list-group-item-success{color:#3c763d}a.list-group-item-success .list-group-item-heading{color:inherit}a.list-group-item-success:hover,a.list-group-item-success:focus{color:#3c763d;background-color:#d0e9c6}a.list-group-item-success.active,a.list-group-item-success.active:hover,a.list-group-item-success.active:focus{color:#fff;background-color:#3c763d;border-color:#3c763d}.list-group-item-info{color:#31708f;background-color:#d9edf7}a.list-group-item-info{color:#31708f}a.list-group-item-info .list-group-item-heading{color:inherit}a.list-group-item-info:hover,a.list-group-item-info:focus{color:#31708f;background-color:#c4e3f3}a.list-group-item-info.active,a.list-group-item-info.active:hover,a.list-group-item-info.active:focus{color:#fff;background-color:#31708f;border-color:#31708f}.list-group-item-warning{color:#8a6d3b;background-color:#fcf8e3}a.list-group-item-warning{color:#8a6d3b}a.list-group-item-warning .list-group-item-heading{color:inherit}a.list-group-item-warning:hover,a.list-group-item-warning:focus{color:#8a6d3b;background-color:#faf2cc}a.list-group-item-warning.active,a.list-group-item-warning.active:hover,a.list-group-item-warning.active:focus{color:#fff;background-color:#8a6d3b;border-color:#8a6d3b}.list-group-item-danger{color:#a94442;background-color:#f2dede}a.list-group-item-danger{color:#a94442}a.list-group-item-danger .list-group-item-heading{color:inherit}a.list-group-item-danger:hover,a.list-group-item-danger:focus{color:#a94442;background-color:#ebcccc}a.list-group-item-danger.active,a.list-group-item-danger.active:hover,a.list-group-item-danger.active:focus{color:#fff;background-color:#a94442;border-color:#a94442}.list-group-item-heading{margin-top:0;margin-bottom:5px}.list-group-item-text{margin-bottom:0;line-height:1.3}.panel{margin-bottom:20px;background-color:#fff;border:1px solid transparent;border-radius:4px;-webkit-box-shadow:0 1px 1px rgba(0,0,0,.05);box-shadow:0 1px 1px rgba(0,0,0,.05)}.panel-body{padding:15px}.panel-heading{padding:10px 15px;border-bottom:1px solid transparent;border-top-right-radius:3px;border-top-left-radius:3px}.panel-heading>.dropdown .dropdown-toggle{color:inherit}.panel-title{margin-top:0;margin-bottom:0;font-size:16px;color:inherit}.panel-title>a{color:inherit}.panel-footer{padding:10px 15px;background-color:#f5f5f5;border-top:1px solid #ddd;border-bottom-right-radius:3px;border-bottom-left-radius:3px}.panel>.list-group{margin-bottom:0}.panel>.list-group .list-group-item{border-width:1px 0;border-radius:0}.panel>.list-group:first-child .list-group-item:first-child{border-top:0;border-top-right-radius:3px;border-top-left-radius:3px}.panel>.list-group:last-child .list-group-item:last-child{border-bottom:0;border-bottom-right-radius:3px;border-bottom-left-radius:3px}.panel-heading+.list-group .list-group-item:first-child{border-top-width:0}.panel>.table,.panel>.table-responsive>.table{margin-bottom:0}.panel>.table:first-child,.panel>.table-responsive:first-child>.table:first-child{border-top-right-radius:3px;border-top-left-radius:3px}.panel>.table:first-child>thead:first-child>tr:first-child td:first-child,.panel>.table-responsive:first-child>.table:first-child>thead:first-child>tr:first-child td:first-child,.panel>.table:first-child>tbody:first-child>tr:first-child td:first-child,.panel>.table-responsive:first-child>.table:first-child>tbody:first-child>tr:first-child td:first-child,.panel>.table:first-child>thead:first-child>tr:first-child th:first-child,.panel>.table-responsive:first-child>.table:first-child>thead:first-child>tr:first-child th:first-child,.panel>.table:first-child>tbody:first-child>tr:first-child th:first-child,.panel>.table-responsive:first-child>.table:first-child>tbody:first-child>tr:first-child th:first-child{border-top-left-radius:3px}.panel>.table:first-child>thead:first-child>tr:first-child td:last-child,.panel>.table-responsive:first-child>.table:first-child>thead:first-child>tr:first-child td:last-child,.panel>.table:first-child>tbody:first-child>tr:first-child td:last-child,.panel>.table-responsive:first-child>.table:first-child>tbody:first-child>tr:first-child td:last-child,.panel>.table:first-child>thead:first-child>tr:first-child th:last-child,.panel>.table-responsive:first-child>.table:first-child>thead:first-child>tr:first-child th:last-child,.panel>.table:first-child>tbody:first-child>tr:first-child th:last-child,.panel>.table-responsive:first-child>.table:first-child>tbody:first-child>tr:first-child th:last-child{border-top-right-radius:3px}.panel>.table:last-child,.panel>.table-responsive:last-child>.table:last-child{border-bottom-right-radius:3px;border-bottom-left-radius:3px}.panel>.table:last-child>tbody:last-child>tr:last-child td:first-child,.panel>.table-responsive:last-child>.table:last-child>tbody:last-child>tr:last-child td:first-child,.panel>.table:last-child>tfoot:last-child>tr:last-child td:first-child,.panel>.table-responsive:last-child>.table:last-child>tfoot:last-child>tr:last-child td:first-child,.panel>.table:last-child>tbody:last-child>tr:last-child th:first-child,.panel>.table-responsive:last-child>.table:last-child>tbody:last-child>tr:last-child th:first-child,.panel>.table:last-child>tfoot:last-child>tr:last-child th:first-child,.panel>.table-responsive:last-child>.table:last-child>tfoot:last-child>tr:last-child th:first-child{border-bottom-left-radius:3px}.panel>.table:last-child>tbody:last-child>tr:last-child td:last-child,.panel>.table-responsive:last-child>.table:last-child>tbody:last-child>tr:last-child td:last-child,.panel>.table:last-child>tfoot:last-child>tr:last-child td:last-child,.panel>.table-responsive:last-child>.table:last-child>tfoot:last-child>tr:last-child td:last-child,.panel>.table:last-child>tbody:last-child>tr:last-child th:last-child,.panel>.table-responsive:last-child>.table:last-child>tbody:last-child>tr:last-child th:last-child,.panel>.table:last-child>tfoot:last-child>tr:last-child th:last-child,.panel>.table-responsive:last-child>.table:last-child>tfoot:last-child>tr:last-child th:last-child{border-bottom-right-radius:3px}.panel>.panel-body+.table,.panel>.panel-body+.table-responsive{border-top:1px solid #ddd}.panel>.table>tbody:first-child>tr:first-child th,.panel>.table>tbody:first-child>tr:first-child td{border-top:0}.panel>.table-bordered,.panel>.table-responsive>.table-bordered{border:0}.panel>.table-bordered>thead>tr>th:first-child,.panel>.table-responsive>.table-bordered>thead>tr>th:first-child,.panel>.table-bordered>tbody>tr>th:first-child,.panel>.table-responsive>.table-bordered>tbody>tr>th:first-child,.panel>.table-bordered>tfoot>tr>th:first-child,.panel>.table-responsive>.table-bordered>tfoot>tr>th:first-child,.panel>.table-bordered>thead>tr>td:first-child,.panel>.table-responsive>.table-bordered>thead>tr>td:first-child,.panel>.table-bordered>tbody>tr>td:first-child,.panel>.table-responsive>.table-bordered>tbody>tr>td:first-child,.panel>.table-bordered>tfoot>tr>td:first-child,.panel>.table-responsive>.table-bordered>tfoot>tr>td:first-child{border-left:0}.panel>.table-bordered>thead>tr>th:last-child,.panel>.table-responsive>.table-bordered>thead>tr>th:last-child,.panel>.table-bordered>tbody>tr>th:last-child,.panel>.table-responsive>.table-bordered>tbody>tr>th:last-child,.panel>.table-bordered>tfoot>tr>th:last-child,.panel>.table-responsive>.table-bordered>tfoot>tr>th:last-child,.panel>.table-bordered>thead>tr>td:last-child,.panel>.table-responsive>.table-bordered>thead>tr>td:last-child,.panel>.table-bordered>tbody>tr>td:last-child,.panel>.table-responsive>.table-bordered>tbody>tr>td:last-child,.panel>.table-bordered>tfoot>tr>td:last-child,.panel>.table-responsive>.table-bordered>tfoot>tr>td:last-child{border-right:0}.panel>.table-bordered>thead>tr:first-child>td,.panel>.table-responsive>.table-bordered>thead>tr:first-child>td,.panel>.table-bordered>tbody>tr:first-child>td,.panel>.table-responsive>.table-bordered>tbody>tr:first-child>td,.panel>.table-bordered>thead>tr:first-child>th,.panel>.table-responsive>.table-bordered>thead>tr:first-child>th,.panel>.table-bordered>tbody>tr:first-child>th,.panel>.table-responsive>.table-bordered>tbody>tr:first-child>th{border-bottom:0}.panel>.table-bordered>tbody>tr:last-child>td,.panel>.table-responsive>.table-bordered>tbody>tr:last-child>td,.panel>.table-bordered>tfoot>tr:last-child>td,.panel>.table-responsive>.table-bordered>tfoot>tr:last-child>td,.panel>.table-bordered>tbody>tr:last-child>th,.panel>.table-responsive>.table-bordered>tbody>tr:last-child>th,.panel>.table-bordered>tfoot>tr:last-child>th,.panel>.table-responsive>.table-bordered>tfoot>tr:last-child>th{border-bottom:0}.panel>.table-responsive{border:0;margin-bottom:0}.panel-group{margin-bottom:20px}.panel-group .panel{margin-bottom:0;border-radius:4px;overflow:hidden}.panel-group .panel+.panel{margin-top:5px}.panel-group .panel-heading{border-bottom:0}.panel-group .panel-heading+.panel-collapse .panel-body{border-top:1px solid #ddd}.panel-group .panel-footer{border-top:0}.panel-group .panel-footer+.panel-collapse .panel-body{border-bottom:1px solid #ddd}.panel-default{border-color:#ddd}.panel-default>.panel-heading{color:#333;background-color:#f5f5f5;border-color:#ddd}.panel-default>.panel-heading+.panel-collapse .panel-body{border-top-color:#ddd}.panel-default>.panel-footer+.panel-collapse .panel-body{border-bottom-color:#ddd}.panel-primary{border-color:#428bca}.panel-primary>.panel-heading{color:#fff;background-color:#428bca;border-color:#428bca}.panel-primary>.panel-heading+.panel-collapse .panel-body{border-top-color:#428bca}.panel-primary>.panel-footer+.panel-collapse .panel-body{border-bottom-color:#428bca}.panel-success{border-color:#d6e9c6}.panel-success>.panel-heading{color:#3c763d;background-color:#dff0d8;border-color:#d6e9c6}.panel-success>.panel-heading+.panel-collapse .panel-body{border-top-color:#d6e9c6}.panel-success>.panel-footer+.panel-collapse .panel-body{border-bottom-color:#d6e9c6}.panel-info{border-color:#bce8f1}.panel-info>.panel-heading{color:#31708f;background-color:#d9edf7;border-color:#bce8f1}.panel-info>.panel-heading+.panel-collapse .panel-body{border-top-color:#bce8f1}.panel-info>.panel-footer+.panel-collapse .panel-body{border-bottom-color:#bce8f1}.panel-warning{border-color:#faebcc}.panel-warning>.panel-heading{color:#8a6d3b;background-color:#fcf8e3;border-color:#faebcc}.panel-warning>.panel-heading+.panel-collapse .panel-body{border-top-color:#faebcc}.panel-warning>.panel-footer+.panel-collapse .panel-body{border-bottom-color:#faebcc}.panel-danger{border-color:#ebccd1}.panel-danger>.panel-heading{color:#a94442;background-color:#f2dede;border-color:#ebccd1}.panel-danger>.panel-heading+.panel-collapse .panel-body{border-top-color:#ebccd1}.panel-danger>.panel-footer+.panel-collapse .panel-body{border-bottom-color:#ebccd1}.well{min-height:20px;padding:19px;margin-bottom:20px;background-color:#f5f5f5;border:1px solid #e3e3e3;border-radius:4px;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.05);box-shadow:inset 0 1px 1px rgba(0,0,0,.05)}.well blockquote{border-color:#ddd;border-color:rgba(0,0,0,.15)}.well-lg{padding:24px;border-radius:6px}.well-sm{padding:9px;border-radius:3px}.close{float:right;font-size:21px;font-weight:700;line-height:1;color:#000;text-shadow:0 1px 0 #fff;opacity:.2;filter:alpha(opacity=20)}.close:hover,.close:focus{color:#000;text-decoration:none;cursor:pointer;opacity:.5;filter:alpha(opacity=50)}button.close{padding:0;cursor:pointer;background:0 0;border:0;-webkit-appearance:none}.modal-open{overflow:hidden}.modal{display:none;overflow:auto;overflow-y:scroll;position:fixed;top:0;right:0;bottom:0;left:0;z-index:1050;-webkit-overflow-scrolling:touch;outline:0}.modal.fade .modal-dialog{-webkit-transform:translate(0,-25%);-ms-transform:translate(0,-25%);transform:translate(0,-25%);-webkit-transition:-webkit-transform .3s ease-out;-moz-transition:-moz-transform .3s ease-out;-o-transition:-o-transform .3s ease-out;transition:transform .3s ease-out}.modal.in .modal-dialog{-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0)}.modal-dialog{position:relative;width:auto;margin:10px}.modal-content{position:relative;background-color:#fff;border:1px solid #999;border:1px solid rgba(0,0,0,.2);border-radius:6px;-webkit-box-shadow:0 3px 9px rgba(0,0,0,.5);box-shadow:0 3px 9px rgba(0,0,0,.5);background-clip:padding-box;outline:0}.modal-backdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1040;background-color:#000}.modal-backdrop.fade{opacity:0;filter:alpha(opacity=0)}.modal-backdrop.in{opacity:.5;filter:alpha(opacity=50)}.modal-header{padding:15px;border-bottom:1px solid #e5e5e5;min-height:16.42857143px}.modal-header .close{margin-top:-2px}.modal-title{margin:0;line-height:1.42857143}.modal-body{position:relative;padding:20px}.modal-footer{margin-top:15px;padding:19px 20px 20px;text-align:right;border-top:1px solid #e5e5e5}.modal-footer .btn+.btn{margin-left:5px;margin-bottom:0}.modal-footer .btn-group .btn+.btn{margin-left:-1px}.modal-footer .btn-block+.btn-block{margin-left:0}@media (min-width:768px){.modal-dialog{width:600px;margin:30px auto}.modal-content{-webkit-box-shadow:0 5px 15px rgba(0,0,0,.5);box-shadow:0 5px 15px rgba(0,0,0,.5)}.modal-sm{width:300px}}@media (min-width:992px){.modal-lg{width:900px}}.tooltip{position:absolute;z-index:1030;display:block;visibility:visible;font-size:12px;line-height:1.4;opacity:0;filter:alpha(opacity=0)}.tooltip.in{opacity:.9;filter:alpha(opacity=90)}.tooltip.top{margin-top:-3px;padding:5px 0}.tooltip.right{margin-left:3px;padding:0 5px}.tooltip.bottom{margin-top:3px;padding:5px 0}.tooltip.left{margin-left:-3px;padding:0 5px}.tooltip-inner{max-width:200px;padding:3px 8px;color:#fff;text-align:center;text-decoration:none;background-color:#000;border-radius:4px}.tooltip-arrow{position:absolute;width:0;height:0;border-color:transparent;border-style:solid}.tooltip.top .tooltip-arrow{bottom:0;left:50%;margin-left:-5px;border-width:5px 5px 0;border-top-color:#000}.tooltip.top-left .tooltip-arrow{bottom:0;left:5px;border-width:5px 5px 0;border-top-color:#000}.tooltip.top-right .tooltip-arrow{bottom:0;right:5px;border-width:5px 5px 0;border-top-color:#000}.tooltip.right .tooltip-arrow{top:50%;left:0;margin-top:-5px;border-width:5px 5px 5px 0;border-right-color:#000}.tooltip.left .tooltip-arrow{top:50%;right:0;margin-top:-5px;border-width:5px 0 5px 5px;border-left-color:#000}.tooltip.bottom .tooltip-arrow{top:0;left:50%;margin-left:-5px;border-width:0 5px 5px;border-bottom-color:#000}.tooltip.bottom-left .tooltip-arrow{top:0;left:5px;border-width:0 5px 5px;border-bottom-color:#000}.tooltip.bottom-right .tooltip-arrow{top:0;right:5px;border-width:0 5px 5px;border-bottom-color:#000}.popover{position:absolute;top:0;left:0;z-index:1010;display:none;max-width:276px;padding:1px;text-align:left;background-color:#fff;background-clip:padding-box;border:1px solid #ccc;border:1px solid rgba(0,0,0,.2);border-radius:6px;-webkit-box-shadow:0 5px 10px rgba(0,0,0,.2);box-shadow:0 5px 10px rgba(0,0,0,.2);white-space:normal}.popover.top{margin-top:-10px}.popover.right{margin-left:10px}.popover.bottom{margin-top:10px}.popover.left{margin-left:-10px}.popover-title{margin:0;padding:8px 14px;font-size:14px;font-weight:400;line-height:18px;background-color:#f7f7f7;border-bottom:1px solid #ebebeb;border-radius:5px 5px 0 0}.popover-content{padding:9px 14px}.popover>.arrow,.popover>.arrow:after{position:absolute;display:block;width:0;height:0;border-color:transparent;border-style:solid}.popover>.arrow{border-width:11px}.popover>.arrow:after{border-width:10px;content:\"\"}.popover.top>.arrow{left:50%;margin-left:-11px;border-bottom-width:0;border-top-color:#999;border-top-color:rgba(0,0,0,.25);bottom:-11px}.popover.top>.arrow:after{content:\" \";bottom:1px;margin-left:-10px;border-bottom-width:0;border-top-color:#fff}.popover.right>.arrow{top:50%;left:-11px;margin-top:-11px;border-left-width:0;border-right-color:#999;border-right-color:rgba(0,0,0,.25)}.popover.right>.arrow:after{content:\" \";left:1px;bottom:-10px;border-left-width:0;border-right-color:#fff}.popover.bottom>.arrow{left:50%;margin-left:-11px;border-top-width:0;border-bottom-color:#999;border-bottom-color:rgba(0,0,0,.25);top:-11px}.popover.bottom>.arrow:after{content:\" \";top:1px;margin-left:-10px;border-top-width:0;border-bottom-color:#fff}.popover.left>.arrow{top:50%;right:-11px;margin-top:-11px;border-right-width:0;border-left-color:#999;border-left-color:rgba(0,0,0,.25)}.popover.left>.arrow:after{content:\" \";right:1px;border-right-width:0;border-left-color:#fff;bottom:-10px}.carousel{position:relative}.carousel-inner{position:relative;overflow:hidden;width:100%}.carousel-inner>.item{display:none;position:relative;-webkit-transition:.6s ease-in-out left;transition:.6s ease-in-out left}.carousel-inner>.item>img,.carousel-inner>.item>a>img{line-height:1}.carousel-inner>.active,.carousel-inner>.next,.carousel-inner>.prev{display:block}.carousel-inner>.active{left:0}.carousel-inner>.next,.carousel-inner>.prev{position:absolute;top:0;width:100%}.carousel-inner>.next{left:100%}.carousel-inner>.prev{left:-100%}.carousel-inner>.next.left,.carousel-inner>.prev.right{left:0}.carousel-inner>.active.left{left:-100%}.carousel-inner>.active.right{left:100%}.carousel-control{position:absolute;top:0;left:0;bottom:0;width:15%;opacity:.5;filter:alpha(opacity=50);font-size:20px;color:#fff;text-align:center;text-shadow:0 1px 2px rgba(0,0,0,.6)}.carousel-control.left{background-image:-webkit-linear-gradient(left,color-stop(rgba(0,0,0,.5) 0),color-stop(rgba(0,0,0,.0001) 100%));background-image:linear-gradient(to right,rgba(0,0,0,.5) 0,rgba(0,0,0,.0001) 100%);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#80000000', endColorstr='#00000000', GradientType=1)}.carousel-control.right{left:auto;right:0;background-image:-webkit-linear-gradient(left,color-stop(rgba(0,0,0,.0001) 0),color-stop(rgba(0,0,0,.5) 100%));background-image:linear-gradient(to right,rgba(0,0,0,.0001) 0,rgba(0,0,0,.5) 100%);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#80000000', GradientType=1)}.carousel-control:hover,.carousel-control:focus{outline:0;color:#fff;text-decoration:none;opacity:.9;filter:alpha(opacity=90)}.carousel-control .icon-prev,.carousel-control .icon-next,.carousel-control .glyphicon-chevron-left,.carousel-control .glyphicon-chevron-right{position:absolute;top:50%;z-index:5;display:inline-block}.carousel-control .icon-prev,.carousel-control .glyphicon-chevron-left{left:50%}.carousel-control .icon-next,.carousel-control .glyphicon-chevron-right{right:50%}.carousel-control .icon-prev,.carousel-control .icon-next{width:20px;height:20px;margin-top:-10px;margin-left:-10px;font-family:serif}.carousel-control .icon-prev:before{content:'\\2039'}.carousel-control .icon-next:before{content:'\\203A'}.carousel-indicators{position:absolute;bottom:10px;left:50%;z-index:15;width:60%;margin-left:-30%;padding-left:0;list-style:none;text-align:center}.carousel-indicators li{display:inline-block;width:10px;height:10px;margin:1px;text-indent:-999px;border:1px solid #fff;border-radius:10px;cursor:pointer;background-color:#000 \\9;background-color:rgba(0,0,0,0)}.carousel-indicators .active{margin:0;width:12px;height:12px;background-color:#fff}.carousel-caption{position:absolute;left:15%;right:15%;bottom:20px;z-index:10;padding-top:20px;padding-bottom:20px;color:#fff;text-align:center;text-shadow:0 1px 2px rgba(0,0,0,.6)}.carousel-caption .btn{text-shadow:none}@media screen and (min-width:768px){.carousel-control .glyphicon-chevron-left,.carousel-control .glyphicon-chevron-right,.carousel-control .icon-prev,.carousel-control .icon-next{width:30px;height:30px;margin-top:-15px;margin-left:-15px;font-size:30px}.carousel-caption{left:20%;right:20%;padding-bottom:30px}.carousel-indicators{bottom:20px}}.clearfix:before,.clearfix:after,.container:before,.container:after,.container-fluid:before,.container-fluid:after,.row:before,.row:after,.form-horizontal .form-group:before,.form-horizontal .form-group:after,.btn-toolbar:before,.btn-toolbar:after,.btn-group-vertical>.btn-group:before,.btn-group-vertical>.btn-group:after,.nav:before,.nav:after,.navbar:before,.navbar:after,.navbar-header:before,.navbar-header:after,.navbar-collapse:before,.navbar-collapse:after,.pager:before,.pager:after,.panel-body:before,.panel-body:after,.modal-footer:before,.modal-footer:after{content:\" \";display:table}.clearfix:after,.container:after,.container-fluid:after,.row:after,.form-horizontal .form-group:after,.btn-toolbar:after,.btn-group-vertical>.btn-group:after,.nav:after,.navbar:after,.navbar-header:after,.navbar-collapse:after,.pager:after,.panel-body:after,.modal-footer:after{clear:both}.center-block{display:block;margin-left:auto;margin-right:auto}.pull-right{float:right!important}.pull-left{float:left!important}.hide{display:none!important}.show{display:block!important}.invisible{visibility:hidden}.text-hide{font:0/0 a;color:transparent;text-shadow:none;background-color:transparent;border:0}.hidden{display:none!important;visibility:hidden!important}.affix{position:fixed}@-ms-viewport{width:device-width}.visible-xs,.visible-sm,.visible-md,.visible-lg{display:none!important}@media (max-width:767px){.visible-xs{display:block!important}table.visible-xs{display:table}tr.visible-xs{display:table-row!important}th.visible-xs,td.visible-xs{display:table-cell!important}}@media (min-width:768px) and (max-width:991px){.visible-sm{display:block!important}table.visible-sm{display:table}tr.visible-sm{display:table-row!important}th.visible-sm,td.visible-sm{display:table-cell!important}}@media (min-width:992px) and (max-width:1199px){.visible-md{display:block!important}table.visible-md{display:table}tr.visible-md{display:table-row!important}th.visible-md,td.visible-md{display:table-cell!important}}@media (min-width:1200px){.visible-lg{display:block!important}table.visible-lg{display:table}tr.visible-lg{display:table-row!important}th.visible-lg,td.visible-lg{display:table-cell!important}}@media (max-width:767px){.hidden-xs{display:none!important}}@media (min-width:768px) and (max-width:991px){.hidden-sm{display:none!important}}@media (min-width:992px) and (max-width:1199px){.hidden-md{display:none!important}}@media (min-width:1200px){.hidden-lg{display:none!important}}.visible-print{display:none!important}@media print{.visible-print{display:block!important}table.visible-print{display:table}tr.visible-print{display:table-row!important}th.visible-print,td.visible-print{display:table-cell!important}}@media print{.hidden-print{display:none!important}}", ""]);
	
	// exports


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(10);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../node_modules/style-loader/index.js!./../../../../../node_modules/css-loader/index.js!./responsive.css", function() {
				var newContent = require("!!./../../../../../node_modules/style-loader/index.js!./../../../../../node_modules/css-loader/index.js!./responsive.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(11);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../node_modules/css-loader/index.js!./responsive.css", function() {
				var newContent = require("!!./../../../../../node_modules/css-loader/index.js!./responsive.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, "@media (min-width: 768px) and (max-width: 1024px) {\r\r    \r\r    /* TOP BAR ELEMENTS */    \r\r     \r\r     /* HOME */\r\r\t.intro {\r\r\t\tmargin-top: 40%;\r\r\t\tline-height: 55px;\r\r\t\tfont-size: 45px;\r\r\t}\r\r      \r\r      /* ABOUT US */\r\r\t.big-intro {\r\r\t\ttext-align: center !important;\r\r\t}\r\r\r\r\t.about-us .column {\r\r\t\tmargin-bottom: 40px;\r\r\t}\r\r\r\r\t.skills {\r\r\t\tmargin-bottom: 78px !important;\r\r\t}\r\r      \r\r      /* TEAM */\r\r\t.team-member .profile-pic {\r\r\t\twidth: 128px;\r\r\t\theight: 128px;\r\r\t}\r\r\r\r      /* PURCHASE NOW */\r\r\t.purchase-now {\r\r\t\tmargin: auto;\r\r\t\ttext-align: center !important;\r\r\t}\r\r\r\r\t.purchase-now h3 {\r\r\t\ttext-align: center;\r\r\t\tmargin-bottom: 20px;\r\r\t}\r\r\r\r\t.purchase-now .button {\r\r\t\tfloat: none;\r\r\t}\r\r      \r\r      /* FOOTER */\r\r\r\t.company-details {\r\r\t\tpadding-top: 0;\r\r\t\tpadding-bottom: 33px;\r\r\t}\r\r\r\r\t.copyright {\r\r\t\twidth: 100%;\r\r\t\tpadding-top: 33px;\r\r\t\tpadding-bottom: 33px;\r\r\t}\r\r}\r\r\r\r@media (max-width: 767px) {\r\r \r\r\t.bs-navbar-collapse {\r\r\t\tborder: 0;\r\r\t}\r\r\r\r\t.navbar-inverse .navbar-nav {\r\r\t\tpadding-left: 10px;\r\r\t\tline-height: normal;\r\r\t\ttext-align: center;\r\r\t}\r\r\r\r\t.navbar-inverse .navbar-nav>li {\r\r\t\tdisplay: inline-block;\r\r\t\tmargin-bottom: 0;\r\r\t}\r\r    /* HOME */\r\r\t.header {\r\r\t\tmin-height: inherit;\r\r\t\tpadding-bottom: 75px;\r\r\t}\r\r\r\r\t.intro {\r\r\t\tline-height: 55px;\r\r\t\tfont-size: 40px;\r\r\t}\r\r      \r\r      /* ABOUT US */\r\r\t.big-intro {\r\r\t\ttext-align: center !important;\r\r\t\tfont-size: 8vw !important;\r\r\t}\r\r\r\r\t.about-us .column {\r\r\t\tmargin-bottom: 40px;\r\r\t}\r\r\r\r\t.skills {\r\r\t\tmargin-bottom: 78px !important;\r\r\t}\r\r      \r\r      /* PURCHASE NOW */\r\r\t.purchase-now {\r\r\t\tmargin: auto;\r\r\t\ttext-align: center !important;\r\r\t}\r\r\r\r\t.purchase-now h3 {\r\r\t\ttext-align: center;\r\r\t\tmargin-bottom: 20px;\r\r\t}\r\r\r\r\t.purchase-now .button {\r\r\t\tfloat: none;\r\r\t}\r\r      \r\r      /* FOOTER */\r\r\tfooter {\r\r\t\tpadding-top: 40px;\r\r\t}\r\r\r\r\t.company-details {\r\r\t\tpadding-top: 0;\r\r\t\tpadding-bottom: 33px;\r\r\t}\r\r\r\r\t.copyright {\r\r\t\twidth: 100%;\r\r\t\tpadding-top: 33px;\r\r\t\tpadding-bottom: 33px;\r\r\t}\r\r}\r\r\r\r@media (max-width: 480px) {\r\r \r\r\r\r/* HOME */\r\r\t.intro {\r\r\t\tmargin-top: 60%;\r\r\t\tline-height: 6vh;\r\r\t\tfont-size: 6.5vw;\r\r\t}\r\r\r\r\th2 {\r\r\t\tfont-size: 6.5vw !important;\r\r\t}\r\r\r\r\t.other-focus-list ul li {\r\r\t\tdisplay: block;\r\r\t\ttext-align: left;\r\r\t\tmargin-right: 0;\r\r\t}\r\r}\r\r\r\r@media only screen (max-width: 320px) {\r\r    .intro {\r\r\t\tline-height: 25px;\r\r\t\tfont-size: 7vw;\r\r\t}\r\r\t.client-list ul li {\r\r\t\tdisplay: block;\r\r\t}\r\r}", ""]);
	
	// exports


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(13);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../node_modules/style-loader/index.js!./../../../../../node_modules/css-loader/index.js!./style.css", function() {
				var newContent = require("!!./../../../../../node_modules/style-loader/index.js!./../../../../../node_modules/css-loader/index.js!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(14);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../node_modules/css-loader/index.js!./style.css", function() {
				var newContent = require("!!./../../../../../node_modules/css-loader/index.js!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	exports.i(__webpack_require__(15), "");
	
	// module
	exports.push([module.id, "/*\nTheme Name: Zerif Lite\nTheme URI: http://themeisle.com/themes/zerif-lite/\nAuthor: ThemeIsle\nAuthor URI: http://themeisle.com\nDescription: Zerif LITE is a free one page Wordpress theme. It's perfect for web agency business,corporate business,personal and parallax business portfolio, photography sites and freelancer.Is built on BootStrap with parallax support, is responsive, clean, modern, flat and minimal. Zerif Lite is ecommerce (WooCommerce) Compatible, WPML, RTL, Retina-Ready, SEO Friendly and with parallax, full screen image is one of the best business themes.\nVersion: 1.8.4.9\nLicense: GNU General Public License version 3\nLicense URI: license.txt\nText Domain: zerif-lite\nDomain Path: /languages/\nTags: one-column, two-columns, right-sidebar,front-page-post-form,full-width-template,rtl-language-support,sticky-post,theme-options, custom-background, custom-menu, editor-style, featured-images, threaded-comments, translation-ready, footer-widgets, portfolio\n*/\n\n\n/*--------------------------------------------------------------\n1.0 - Reset\n--------------------------------------------------------------*/\nhtml {\n\tfont-size: 62.5%; /* Corrects text resizing oddly in IE6/7 when body font-size is set using em units http://clagnut.com/blog/348/#c790 */\n\toverflow-y: scroll; /* Keeps page centered in all browsers regardless of content height */\n\t-webkit-text-size-adjust: 100%; /* Prevents iOS text size adjust after orientation change, without disabling user zoom */\n\t-ms-text-size-adjust:     100%; /* www.456bereastreet.com/archive/201012/controlling_text_size_in_safari_for_ios_without_disabling_user_zoom/ */\n}\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, font, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td {\n\tborder: 0;\n\tfont-family: inherit;\n\tfont-size: 16px;\n\tfont-style: inherit;\n\tfont-weight: inherit;\n\tmargin: 0;\n\toutline: 0;\n\tpadding: 0;\n\tvertical-align: baseline;\n}\n*,\n*:before,\n*:after { /* apply a natural box layout model to all elements; see http://www.paulirish.com/2012/box-sizing-border-box-ftw/ */\n\t-webkit-box-sizing: border-box; /* Not needed for modern webkit but still used by Blackberry Browser 7.0; see http://caniuse.com/#search=box-sizing */\n\t-moz-box-sizing:    border-box; /* Still needed for Firefox 28; see http://caniuse.com/#search=box-sizing */\n\tbox-sizing:         border-box;\n}\nbody {\n\tbackground: #fff;\n}\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nmain,\nnav,\nsection {\n\tdisplay: block;\n}\nol, ul {\n\tlist-style: none;\n}\ntable { /* tables still need 'cellspacing=\"0\"' in the markup */\n\tborder-collapse: separate;\n\tborder-spacing: 0;\n}\ncaption, th, td {\n\tfont-weight: normal;\n\ttext-align: left;\n}\nblockquote:before,\nblockquote:after {\n\tcontent: \"\";\n}\nblockquote {\n\tquotes: \"\" \"\";\n}\nq {\n  quotes: \"\\201C\" \"\\201D\" \"\\2018\" \"\\2019\";\n}\nq:before {\n    content: open-quote;\n}\nq:after {\n    content: close-quote;\n}\na:focus {\n\toutline: thin dotted;\n}\na:hover,\na:active {\n\toutline: 0;\n}\na img {\n\tborder: 0;\n}\nbody {\n\tfont-family: 'Lato', Helvetica, sans-serif !important;\n\tfont-size: 14px;\n\tcolor: #808080;\n\tfont-weight: normal;\n\toverflow-x: hidden;\n\tline-height: 25px;\n\ttext-align: center;\n}\n/* Internet Explorer 10 in Windows 8 and Windows Phone 8 Bug fix */\n@-webkit-viewport {\n\twidth: device-width;\n}\n@-moz-viewport {\n\twidth: device-width;\n}\n@-ms-viewport {\n\twidth: device-width;\n}\n@-o-viewport {\n\twidth: device-width;\n}\n@viewport {\n\twidth: device-width;\n}\n/* Other fixes*/\n*,*:before,*:after {\n\t-webkit-box-sizing: border-box;\n\t-moz-box-sizing: border-box;\n\tbox-sizing: border-box;\n}\ni {\n\tvertical-align: middle;\n}\nul, ol {\npadding-left: 0 !important;\n}\n/* Selection colours (easy to forget) */\n::selection {\n\tbackground: #FC6D6D;\n\tcolor: #FFF;\n}\n::-moz-selection {\n\tbackground: #FC6D6D;\n\tcolor: #FFF;\n}\na {\n\tcolor: #e96656;\n\t-webkit-transition: all 700ms;\n\ttransition: all 700ms;\n}\na,a:hover {\n\ttext-decoration: none;\n}\na:hover {\n\tcolor: #cb4332;\n}\np {\n    margin: 0;\n}\n.full-width {\n\twidth: 100%;\n\tmargin: auto;\n}\n/* do not group these rules (placeholder colors) */\n*::-webkit-input-placeholder {\n    color: #999 !important;\n}\n*:-moz-placeholder {\n    color: #999 !important;\n}\n*::-moz-placeholder {\n    color: #999 !important;\n}\n*:-ms-input-placeholder {\n    color: #999 !important;\n}\n/*--------------------------------------------------------------\n2.0 Typography\n--------------------------------------------------------------*/\nbody,\nbutton,\ninput,\nselect,\ntextarea {\n\tcolor: #404040;\n\tfont-family: sans-serif;\n\tfont-size: 16px;\n\tfont-size: 1.6rem;\n\tline-height: 1.5;\n}\nh1, h2, h3, h4, h5, h6 {\n\tclear: both;\n}\np {\n\tmargin-bottom: 1.5em;\n}\nb, strong {\n\tfont-weight: bold;\n}\ndfn, cite, em, i {\n\tfont-style: italic;\n}\nblockquote {\n\tmargin: 0 1.5em;\n}\nblockquote {\n\tfont-size: 18px;\n\tfont-style: italic;\n\tfont-weight: 300;\n\tmargin: 24px 40px;\n\tline-height: 26px;\n}\naddress {\n\tmargin: 0 0 1.5em;\n}\npre {\n\tbackground: #eee;\n\tfont-family: \"Courier 10 Pitch\", Courier, monospace;\n\tfont-size: 15px;\n\tfont-size: 1.5rem;\n\tline-height: 1.6;\n\tmargin-bottom: 1.6em;\n\tmax-width: 100%;\n\toverflow: auto;\n\tpadding: 1.6em;\n}\ncode, kbd, tt, var {\n\tfont: 15px Monaco, Consolas, \"Andale Mono\", \"DejaVu Sans Mono\", monospace;\n}\nabbr, acronym {\n\tborder-bottom: 1px dotted #666;\n\tcursor: help;\n}\nmark, ins {\n\tbackground: #fff9c0;\n\ttext-decoration: none;\n}\nsup,\nsub {\n\tfont-size: 75%;\n\theight: 0;\n\tline-height: 0;\n\tposition: relative;\n\tvertical-align: baseline;\n}\nsup {\n\tbottom: 1ex;\n}\nsub {\n\ttop: .5ex;\n}\nsmall {\n\tfont-size: 75%;\n}\nbig {\n\tfont-size: 125%;\n}\ndl {\n\tmargin: 0 20px;\n}\nh1, h2, h3, h4, h5, h6 {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n\tmargin-bottom: 10px;\n\tdisplay: block;\n\tclear: both;\n}\nh1,h2 {\n\tfont-family: 'Montserrat', Helvetica, sans-serif;\n\tfont-weight: 700;\n\tline-height: 35px;\n}\nh1,\nh1 span {\n\tfont-size: 30px;\n}\nh2 {\n\tfont-size: 26px;\n}\nh3 {\n\tfont-size: 24px;\n}\nh4 {\n\tfont-size: 18px;\n}\nh5 {\n\tfont-size: 17px;\n}\nh6 {\n\tfont-size: 16px;\n}\n/*--------------------------------------------------------------\n3.0 Buttons\n--------------------------------------------------------------*/\n.buttons {\n\ttext-align: center;\n\tmargin-top: 45px;\n}\n.button {\n\tdisplay: inline-block;\n\ttext-align: center;\n\ttext-transform: uppercase;\n\tpadding: 10px 35px 10px 35px;\n\tborder-radius: 4px;\n\tmargin: 10px;\n}\n.custom-button {\n\tdisplay: inline-block !important;\n\ttext-align: center;\n\ttext-transform: uppercase;\n\tpadding: 13px 35px 13px 35px;\n\tborder-radius: 4px;\n\tmargin: 10px;\n\tborder: none;\n}\n.red-btn {\n\tbackground: #e96656;\n}\n.green-btn {\n\tbackground: #1e9e6b;\n}\n.blue-btn {\n\tbackground: #3ab0e2;\n}\n.yellow-btn {\n\tbackground: #E7AC44;\n}\n.red-btn,.green-btn,.blue-btn,.yellow-btn {\n\tcolor: #FFF !important;\n\t-webkit-transition: all 0.3s ease-in-out;\n\ttransition: all 0.3s ease-in-out;\n}\n.blue-btn:hover {\n\tcolor: #FFF;\n\tbackground: #1288b9;\n}\n.red-btn:hover {\n\tcolor: #FFF;\n\tbackground: #cb4332;\n}\n.green-btn:hover {\n\tcolor: #FFF;\n\tbackground: #069059;\n}\n.yellow-btn:hover {\n\tcolor: #FFF;\n\tbackground: #d8951e;\n}\n.btn:hover{\n    box-shadow: none;\n}\n/*--------------------------------------------------------------\n3.0 Elements\n--------------------------------------------------------------*/\nhr {\n\tbackground-color: #ccc;\n\tborder: 0;\n\theight: 1px;\n\tmargin-bottom: 1.5em;\n}\nul, ol {\n\tmargin: 0 0 1.5em 3em;\n}\nul {\n\tlist-style: disc;\n}\nol {\n\tlist-style: decimal;\n}\nli > ul,\nli > ol {\n\tmargin-bottom: 0;\n\tmargin-left: 1.5em;\n}\ndt {\n\tfont-weight: bold;\n}\ndd {\n\tmargin: 0 1.5em 1.5em 0;\n}\nimg {\n\theight: auto; /* Make sure images are scaled correctly. */\n\tmax-width: 100%; /* Adhere to container width. */\n}\nfigure {\n\tmargin: 0;\n}\n.site-main p {\n\tmargin: 0 0 24px;\n}\ntable {\n\tborder-bottom: 1px solid #ededed;\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n\tfont-size: 14px;\n\tline-height: 2;\n\tmargin: 0 0 20px;\n\twidth: 100%;\n}\ncaption,\nth,\ntd {\n\tfont-weight: normal;\n\ttext-align: left;\n}\ncaption {\n\tfont-size: 16px;\n\tmargin: 20px 0;\n}\nth {\n\tfont-weight: bold;\n\ttext-transform: uppercase;\n\tborder-top: 1px solid #ededed;\n\tpadding: 6px 10px 6px 0;\n}\ntd {\n\tborder-top: 1px solid #ededed;\n\tpadding: 6px 10px 6px 0;\n}\nthead th{\n\tborder: none;\n}\n/*---------------------------------------\n **   COLORS                         -----\n-----------------------------------------*/\n/** BACKGROUNDS **/\n.red-bg {\n\tbackground: #e96656;\n}\n.green-bg {\n\tbackground: #34d293;\n}\n.blue-bg {\n\tbackground: #3ab0e2;\n}\n.yellow-bg {\n\tbackground: #E7AC44;\n}\n.dark-bg {\n\tbackground: #404040;\n}\n.white-bg {\n\tbackground:  #FFFFFF;\n}\n/** FOR TEXTS AND ICON FONTS **/\n.red-text {\n\tcolor: #e96656;\n}\n.green-text {\n\tcolor: #34d293;\n}\n.blue-text {\n\tcolor: #3ab0e2;\n}\n.yellow-text {\n\tcolor: #f7d861;\n}\n.dark-text {\n\tcolor: #404040;\n}\n.white-text {\n\tcolor: #FFFFFF;\n}\n/*---------------------------------------\n **   BORDER BOTTOMS                 -----\n-----------------------------------------*/\n.white-border-bottom:before {\n\tposition: absolute;\n\tmargin: auto;\n\tz-index: 1;\n\tcontent: \"\";\n\twidth: 50%;\n\theight: 2px;\n\tbackground: #F5F5F5;\n\tbottom: -9px;\n\tleft: 25%;\n}\n.dark-border-bottom:before {\n\tposition: absolute;\n\tmargin: auto;\n\tz-index: 1;\n\tcontent: \"\";\n\twidth: 50%;\n\theight: 2px;\n\tbackground: #404040;\n\tbottom: -9px;\n\tleft: 25%;\n}\n.red-border-bottom:before {\n\tposition: absolute;\n\tmargin: auto;\n\tz-index: 1;\n\tcontent: \"\";\n\twidth: 75%;\n\theight: 2px;\n\tbackground: #e96656;\n\tbottom: -9px;\n\tleft: 12.5%;\n}\n.green-border-bottom:before {\n\tposition: absolute;\n\tmargin: auto;\n\tz-index: 1;\n\tcontent: \"\";\n\twidth: 75%;\n\theight: 2px;\n\tbackground: #34d293;\n\tbottom: -9px;\n\tleft: 12.5%;\n}\n.blue-border-bottom:before {\n\tposition: absolute;\n\tmargin: auto;\n\tz-index: 1;\n\tcontent: \"\";\n\twidth: 75%;\n\theight: 2px;\n\tbackground: #3ab0e2;\n\tbottom: -9px;\n\tleft: 12.5%;\n}\n.yellow-border-bottom:before {\n\tposition: absolute;\n\tmargin: auto;\n\tz-index: 1;\n\tcontent: \"\";\n\twidth: 75%;\n\theight: 2px;\n\tbackground: #f7d861;\n\tbottom: -9px;\n\tleft: 12.5%;\n}\n/*---------------------------------------\n **   4.0 Forms                     -----\n-----------------------------------------*/\nbutton,\ninput,\nselect,\ntextarea {\n\tfont-size: 100%; /* Corrects font size not being inherited in all browsers */\n\tmargin: 0; /* Addresses margins set differently in IE6/7, F3/4, S5, Chrome */\n\tvertical-align: baseline; /* Improves appearance and consistency in all browsers */\n\t*vertical-align: middle; /* Improves appearance and consistency in IE6/IE7 */\n}\nbutton,\ninput[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n\ttext-align: center;\n\ttext-transform: uppercase;\n\tpadding: 13px 35px 13px 35px;\n\tborder-radius: 4px;\n\tmargin: 10px;\n\tborder: none;\n\tbackground-color: #e96656;\n\tbox-shadow: none;\n\ttext-shadow: none;\n\tfont-weight: 400;\n\tvertical-align: middle;\n\tcursor: pointer;\n\twhite-space: nowrap;\n\tfont-size: 14px;\n\tcolor: #FFF;\n}\nbutton:hover,\ninput[type=\"button\"]:hover,\ninput[type=\"reset\"]:hover,\ninput[type=\"submit\"]:hover {\n\tborder-color: #ccc #bbb #aaa #bbb;\n}\nbutton:focus,\ninput[type=\"button\"]:focus,\ninput[type=\"reset\"]:focus,\ninput[type=\"submit\"]:focus,\nbutton:active,\ninput[type=\"button\"]:active,\ninput[type=\"reset\"]:active,\ninput[type=\"submit\"]:active {\n\tborder-color: #aaa #bbb #bbb #bbb;\n}\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n\tpadding: 0; /* Addresses excess padding in IE8/9 */\n}\ninput[type=\"search\"] {\n\t-webkit-appearance: textfield; /* Addresses appearance set to searchfield in S5, Chrome */\n\t-webkit-box-sizing: content-box; /* Addresses box sizing set to border-box in S5, Chrome (include -moz to future-proof) */\n\t-moz-box-sizing:    content-box;\n\tbox-sizing:         content-box;\n}\ninput[type=\"search\"]::-webkit-search-decoration { /* Corrects inner padding displayed oddly in S5, Chrome on OSX */\n\t-webkit-appearance: none;\n}\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner { /* Corrects inner padding and border displayed oddly in FF3/4 www.sitepen.com/blog/2008/05/14/the-devils-in-the-details-fixing-dojos-toolbar-buttons/ */\n\tborder: 0;\n\tpadding: 0;\n}\ninput[type=\"text\"],\ninput[type=\"email\"],\ninput[type=\"url\"],\ninput[type=\"password\"],\ninput[type=\"search\"],\ntextarea {\n\tcolor: #555;\n\tborder: 1px solid rgba(0, 0, 0, 0.1);\n\tborder-radius: 0;\n}\ninput[type=\"text\"]:focus,\ninput[type=\"email\"]:focus,\ninput[type=\"url\"]:focus,\ninput[type=\"password\"]:focus,\ninput[type=\"search\"]:focus,\ntextarea:focus {\n\tcolor: #111;\n}\ninput[type=\"text\"],\ninput[type=\"email\"],\ninput[type=\"url\"],\ninput[type=\"password\"],\ninput[type=\"search\"] {\n\tpadding: 3px;\n}\ntextarea {\n\toverflow: auto; /* Removes default vertical scrollbar in IE6/7/8/9 */\n\tpadding-left: 3px;\n\tvertical-align: top; /* Improves readability and alignment in all browsers */\n\twidth: 98%;\n}\n.entry-content button,\n.entry-content input[type=\"button\"],\n.entry-content input[type=\"reset\"],\n.entry-content input[type=\"submit\"] {\n\tpadding: 5px 20px 5px 20px;\n}\n.entry-content button:hover,\n.entry-content input[type=\"button\"]:hover,\n.entry-content input[type=\"reset\"]:hover,\n.entry-content input[type=\"submit\"]:hover {\n\tbackground: #cb4332;\n}\n.input-box {\n\tborder: 0 !important;\n\twidth: 274px;\n\ttext-align: left;\n\ttext-transform: none;\n\tpadding: 9px;\n\tmin-height: 46px;\n\tpadding-left: 15px !important;\n\tdisplay: inline-block;\n\tborder-radius: 4px;\n\tbackground: rgba(255,255,255, 0.95);\n}\n.textarea-box {\n\tborder: 0;\n\ttext-align: left;\n\ttext-transform: none;\n\tpadding: 9px;\n\tmin-height: 250px;\n\tpadding-left: 15px;\n\tdisplay: inline-block;\n\tborder-radius: 4px;\n\tbackground: rgba(255,255,255, 0.95);\n}\ntextarea:hover,\ninput:hover,\ntextarea:active,\ninput:active,\ntextarea:focus,\ninput:focus {\n    outline: 1 !important;\n    outline-color: #e96656 !important;\n\n  -webkit-box-shadow:none !important;\n  box-shadow:none !important;\n}\ninput:focus,\ntextarea:focus {\n\tborder: 1px solid rgba(0, 0, 0, 0.3);\n\toutline: 0;\n}\n /*---------------------------------------\n **   5.0 Navigation                 -----\n-----------------------------------------*/\n /*---------------------------------------\n **   5.1 Links                 -----\n-----------------------------------------*/\na {\n\tcolor: #e96656;\n}\na:visited {\n\tcolor: #e96656;\n}\na:hover,\na:focus,\na:active {\n\tcolor: #cb4332;\n}\n/*---------------------------------------\n **   5.2 Menus                  -----\n-----------------------------------------*/\n.main-navigation {\n\tclear: both;\n\tdisplay: block;\n\tfloat: left;\n\twidth: 100%;\n}\n.main-navigation ul {\n\tlist-style: none;\n\tmargin: 0;\n\tpadding-left: 0;\n}\n.main-navigation li {\n\tfloat: left;\n\tposition: relative;\n}\n.main-navigation a {\n\tdisplay: block;\n\ttext-decoration: none;\n}\n.main-navigation ul ul {\n\tbox-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);\n\tdisplay: none;\n\tfloat: left;\n\tleft: 0;\n\tposition: absolute;\n\ttop: 1.5em;\n\tz-index: 99999;\n}\n.main-navigation ul ul ul {\n\tleft: 100%;\n\ttop: 0;\n}\n.main-navigation ul ul a {\n\twidth: 200px;\n}\n.main-navigation ul ul li {\n}\n.main-navigation li:hover > a {\n}\n.main-navigation ul ul :hover > a {\n}\n.main-navigation ul ul a:hover {\n}\n.main-navigation ul li:hover > ul {\n\tdisplay: block;\n}\n.main-navigation .current_page_item a,\n.main-navigation .current-menu-item a {\n}\n.navbar-collapse{\n\toverflow: visible !important;\n}\n.navbar-inverse li.menu-item-open-left:hover > ul.sub-menu,\n.navbar-inverse li.menu-item-open-left.link-focus > ul.sub-menu {\n\tright: 0;\n}\n.navbar-inverse li.menu-item-open-left li:hover > ul.sub-menu,\n.navbar-inverse ul ul li.link-focus > ul.sub-menu {\n\tright: 100%;\n\tleft: auto;\n}\n.site-main .comment-navigation,\n.site-main .paging-navigation,\n.site-main .post-navigation {\n\tmargin: 0 0 1.5em;\n\toverflow: hidden;\n}\n.comment-navigation .nav-previous,\n.paging-navigation .nav-previous,\n.post-navigation .nav-previous {\n\tfloat: left;\n}\n.comment-navigation .nav-next,\n.paging-navigation .nav-next,\n.post-navigation .nav-next {\n\tfloat: right;\n\ttext-align: right;\n\twidth: 50%;\n}\n.nav-links a {\n\tcolor:#e96656;\n}\n.site-main .post-navigation {\n\tfloat: left;\n\twidth: 100%;\n}\n /*---------------------------------------\n **   6.0 Accessibility                   -----\n-----------------------------------------*/\n/* Text meant only for screen readers */\n.screen-reader-text {\n\tclip: rect(1px, 1px, 1px, 1px);\n\tposition: absolute !important;\n}\n.screen-reader-text:hover,\n.screen-reader-text:active,\n.screen-reader-text:focus {\n\tbackground-color: #f1f1f1;\n\tborder-radius: 3px;\n\tbox-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.6);\n\tclip: auto !important;\n\tcolor: #21759b;\n\tdisplay: block;\n\tfont-size: 14px;\n\tfont-weight: bold;\n\theight: auto;\n\tleft: 5px;\n\tline-height: normal;\n\tpadding: 15px 23px 14px;\n\ttext-decoration: none;\n\ttop: 5px;\n\twidth: auto;\n\tz-index: 100000; /* Above WP toolbar */\n}\n /*---------------------------------------\n **   7.0 Alignments                   -----\n-----------------------------------------*/\n.alignleft {\n\tdisplay: inline;\n\tfloat: left;\n\tmargin-right: 1.5em;\n}\n.alignright {\n\tdisplay: inline;\n\tfloat: right;\n\tmargin-left: 1.5em;\n}\n.aligncenter {\n\tclear: both;\n\tdisplay: block;\n\tmargin: 0 auto;\n}\n /*---------------------------------------\n **   8.0 Clearings                   -----\n-----------------------------------------*/\n.clear:before,\n.clear:after,\n.entry-content:before,\n.entry-content:after,\n.comment-content:before,\n.comment-content:after,\n.site-header:before,\n.site-header:after,\n.site-content:before,\n.site-content:after,\n.site-footer:before,\n.site-footer:after {\n\tcontent: '';\n\tdisplay: table;\n}\n.clear:after,\n.entry-content:after,\n.comment-content:after,\n.site-header:after,\n.site-content:after,\n.site-footer:after {\n\tclear: both;\n}\n /*---------------------------------------\n **   9.0 Widgets                   -----\n-----------------------------------------*/\n.sidebar-wrap {\n\tborder-left: 1px solid rgba(0, 0, 0, 0.05);\n}\n.widget {\n\t/*margin: 0 0 1.5em;\n\tmargin-bottom: 30px;*/\n}\n.widget .widget-title {\n\tcolor: #404040;\n\ttext-transform: uppercase;\n\tmargin-bottom: 30px;\n\tfont-weight: bold;\n\tfont-size: 17px;\n\tposition: relative;\n\ttext-align: left;\n\tmargin-top: 30px;\n\tpadding-bottom: 5px;\n\tfloat: none;\n}\n.widget .widget-title:before{\n\tposition: absolute;\n\tmargin: auto;\n\tz-index: 1;\n\tcontent: \"\";\n\twidth: 35%;\n\theight: 2px;\n\tbackground: #e96656;\n\tbottom: -9px;\n\tleft: 0;\n}\n\n.widget-area {\n\tfloat: left;\n\twidth: 100%;\n}\n.widget-area .widget {\n\tclear: both;\n}\n/* Make sure select elements fit in widgets */\n.widget select {\n\tmax-width: 100%;\n\twidth: 100%;\n\tpadding: 10px;\n\tborder: 1px solid #e9e9e9;\n}\n.tagcloud a{\n\tbackground: #FCFCFC;\n\n\tpadding: 2px 5px;\n}\n/* Search widget */\n.widget_search .search-submit {\n/*\tdisplay: none; */\n\tdisplay: block;\n\twidth: 46px;\n\theight: 46px;\n\tposition: absolute;\n\ttop: 0;\n\tright: 0;\n\tpadding: 0;\n\tmargin: 0;\n\t/*background: url(images/search_icon.png) no-repeat center center;*/\n\ttext-indent: -9999999px;\n}\n.widget_search label{\n\tmargin-bottom: 5px;\n\twidth: 100%;\n\tposition: relative;\n}\n.widget_search form{\n\tposition: relative;\n}\n.widget_search input{\n\twidth: 83%;\n\tpadding: 12px 15% 12px 2%;\n}\n.widget ul {\n\tmargin:0;\n\tpadding:0;\n\tdisplay: block;\n}\n.widget li {\n\tlist-style: none;\n\tmargin: 15px 0;\n\ttext-align: left;\n\tmargin-left: 3%;\n\tposition: relative;\n\tpadding-left: 10px;\n}\n.widget li:before{\n\tcontent: '';\n\twidth: 4px;\n\theight: 4px;\n\tbackground: #e9e9e9;\n\tfloat: left;\n\tposition: absolute;\n\tmargin-top: 11px;\n\tleft: 0;\n}\n.widget li a {\n\tcolor:#808080;\n}\n.widget li a:hover {\n\tcolor:#404040\n}\n /*---------------------------------------\n **   10.0 Content                   -----\n-----------------------------------------*/\n\n.container>.navbar-header,\n.container-fluid>.navbar-header,\n.container>.navbar-collapse,\n.container-fluid>.navbar-collapse {\n    margin-right: 0;\n    margin-left: 0;\n}\n.site-content {\n\tbackground: #FFF;\n}\n.home .site-content {\n\tbackground: none;\n}\n\n /*---------------------------------------\n **   10.1 Posts and pages                   -----\n-----------------------------------------*/\n.sticky {\n}\n.hentry {\n\tmargin: 0 0 1.5em;\n}\n.byline,\n.updated {\n\tdisplay: none;\n}\n.single .byline,\n.group-blog .byline {\n\tdisplay: none;\n}\n.entry-meta-large .byline,\n.entry-meta-large .updated {\n\tdisplay: none;\n}\n.page-content,\n.entry-content,\n.entry-summary {\n\tmargin: 1.5em 0 0;\n}\n.page-links {\n\tclear: both;\n\tmargin: 0 0 1.5em;\n}\n.page-header{\n\ttext-align: left;\n\tborder-bottom: none;\n\tmargin: 0px 0 40px;\n}\n.search-results .page-header {\n\tmargin: 0px 0 40px;\n}\n.page-header .page-title{\n\tposition: relative;\n}\n.page-header .page-title:before{\n\tposition: absolute;\n\tmargin: auto;\n\tz-index: 1;\n\tcontent: \"\";\n\twidth: 35%;\n\theight: 2px;\n\tbackground: #e9e9e9;\n\tbottom: -9px;\n\tleft: 0;\n}\n.taxonomy-description{\n\tmargin-top:  15px;\n}\n.entry-title{\n\tposition: relative;\n}\n.entry-title:before {\n\tposition: absolute;\n\tmargin: auto;\n\tz-index: 1;\n\tcontent: \"\";\n\twidth: 10%;\n\theight: 2px;\n\tbackground: #e96656;\n\tbottom: -9px;\n\tleft: 0;\n}\n.entry-meta{\n\tmargin-top: 10px;\n}\n.content-area .entry-header {\n\toverflow: hidden;\n}\n\n /*---------------------------------------\n **   10.2 Asides                   -----\n-----------------------------------------*/\n.blog .format-aside .entry-title,\n.archive .format-aside .entry-title {\n\tdisplay: none;\n}\n /*---------------------------------------\n **   10.3 Comments                   -----\n-----------------------------------------*/\n.comment {\n\tlist-style:none;\n\tmargin-top:10px;\n\tmargin-bottom:10px;\n}\n.comment a {\n\tcolor:#c7254e;\n}\n.comment-body {\n\ttext-align: left;\n\tborder-bottom: 1px solid rgba(0, 0, 0, 0.05);\n\tpadding-bottom: 10px;\n\tposition: relative;\n\tpadding-left: 40px;\n}\n.comment-content a {\n\tword-wrap: break-word;\n}\n.bypostauthor {\n}\n.comment-form, .comments-title, .comment-reply-title {\n\ttext-align:left;\n}\n.comment .reply a {\n\tfont-size: 12px;\n}\n.comment-form p {\n\tmargin:10px 10px 10px 0;\n}\n.comment-form  label {\n\twidth:85px;\n}\n.comments-title {\n\tfont-size:20px;\n\tmargin-bottom:20px;\n}\n.comment-list {\n\tmargin-left:0px;\n}\n.comment-list li{\n\tlist-style: none;\n\tfloat: left;\n\twidth: 100%;\n}\n.comment-reply-link {\n\tborder: 1px solid #ccc;\n\tborder-radius: 3px;\n\tfont-size: 1.2rem;\n\tline-height: 1;\n\tpadding: .6em 1em .4em;\n\ttext-shadow: 0 1px 0 rgba(255, 255, 255, 0.8);\n\tfont-family: sans-serif;\n\tbox-shadow:inset 0 1px 0 rgba(255, 255, 255, 0.5), inset 0 15px 17px rgba(255, 255, 255, 0.5), inset 0 -5px 12px rgba(0, 0, 0, 0.05);\n\tbox-shadow: none;\n\ttext-shadow: none;\n\tpadding: 3px 5px;\n\tposition: absolute;\n\ttop: 0;\n\tright: 0;\n}\n.comment-form #submit, .comment-reply-link {\n\tbackground:#e96656;\n\tborder-color:#e96656;\n\tcolor:#fff !important;\n}\n.comment-form #submit:hover,\n.comment-form #submit:focus,\n.comment-form #submit:active {\n\n\tbackground: #cb4332;\n}\n.comment-meta{\n\n\tmargin-top: 0 !important;\n\tpadding-top: 0 !important;\n}\n.comment-metadata{\n\tposition: absolute;\n\ttop: -2px;\n\tright: 55px;\n}\n.comment-metadata,\n.comment-metadata a{\n\tcolor: #888;\n\tfont-style: italic;\n\tfont-size: 12px;\n\tpadding: 3px 0px;\n}\n.comment-reply-link:hover{\n\tbackground: #cb4332;\n\tbox-shadow: none;\n}\n.comment-author img{\n\tborder-radius: 50%;\n\tposition: absolute;\n\tleft: 0;\n}\n.comment-author b.fn{\n\tcolor: #000;\n}\n /*---------------------------------------\n **   11.0 Infinite scroll                    -----\n-----------------------------------------*/\n/* Globally hidden elements when Infinite Scroll is supported and in use. */\n.infinite-scroll .paging-navigation, /* Older / Newer Posts Navigation (always hidden) */\n.infinite-scroll.neverending .site-footer { /* Theme Footer (when set to scrolling) */\n\tdisplay: none;\n}\n/* When Infinite Scroll has reached its end we need to re-display elements that were hidden (via .neverending) before */\n.infinity-end.neverending .site-footer {\n\tdisplay: block;\n}\n /*---------------------------------------\n **   12.0 Media                    -----\n-----------------------------------------*/\n.page-content img.wp-smiley,\n.entry-content img.wp-smiley,\n.comment-content img.wp-smiley {\n\tborder: none;\n\tmargin-bottom: 0;\n\tmargin-top: 0;\n\tpadding: 0;\n}\n.wp-caption {\n\tborder: 1px solid #ccc;\n\tmargin-bottom: 1.5em;\n\tmax-width: 100%;\n}\n.wp-caption img[class*=\"wp-image-\"] {\n\tdisplay: block;\n\tmargin: 1.2% auto 0;\n\tmax-width: 98%;\n}\n.wp-caption-text {\n\ttext-align: center;\n}\n.wp-caption .wp-caption-text {\n\tmargin: 0.8075em 0;\n}\n.site-main .gallery {\n\tmargin-bottom: 1.5em;\n}\n.gallery-caption {\n}\n.site-main .gallery a img {\n\tborder: none;\n\theight: auto;\n\tmax-width: 90%;\n}\n.site-main .gallery dd,\n.site-main .gallery figcaption {\n\tmargin: 0;\n}\n.site-main .gallery-columns-4 .gallery-item {\n}\n.site-main .gallery-columns-4 .gallery-item img {\n}\n/* Make sure embeds and iframes fit their containers */\nembed,\niframe,\nobject {\n\tmax-width: 100%;\n}\n /*---------------------------------------\n **   6.5 Gallery                    -----\n-----------------------------------------*/\n.gallery {\n\tmargin-bottom: 20px;\n}\n.gallery-item {\n\tfloat: left;\n\tmargin: 0 4px 4px 0;\n\toverflow: hidden;\n\tposition: relative;\n}\n.gallery-columns-1 .gallery-item {\n\tmax-width: 100%;\n}\n.gallery-columns-2 .gallery-item {\n\tmax-width: 48%;\n\tmax-width: -webkit-calc(50% - 4px);\n\tmax-width:         calc(50% - 4px);\n}\n.gallery-columns-3 .gallery-item {\n\tmax-width: 32%;\n\tmax-width: -webkit-calc(33.3% - 4px);\n\tmax-width:         calc(33.3% - 4px);\n}\n.gallery-columns-4 .gallery-item {\n\tmax-width: 23%;\n\tmax-width: -webkit-calc(25% - 4px);\n\tmax-width:         calc(25% - 4px);\n}\n.gallery-columns-5 .gallery-item {\n\tmax-width: 19%;\n\tmax-width: -webkit-calc(20% - 4px);\n\tmax-width:         calc(20% - 4px);\n}\n.gallery-columns-6 .gallery-item {\n\tmax-width: 15%;\n\tmax-width: -webkit-calc(16.7% - 4px);\n\tmax-width:         calc(16.7% - 4px);\n}\n.gallery-columns-7 .gallery-item {\n\tmax-width: 13%;\n\tmax-width: -webkit-calc(14.28% - 4px);\n\tmax-width:         calc(14.28% - 4px);\n}\n.gallery-columns-8 .gallery-item {\n\tmax-width: 11%;\n\tmax-width: -webkit-calc(12.5% - 4px);\n\tmax-width:         calc(12.5% - 4px);\n}\n.gallery-columns-9 .gallery-item {\n\tmax-width: 9%;\n\tmax-width: -webkit-calc(11.1% - 4px);\n\tmax-width:         calc(11.1% - 4px);\n}\n.gallery-columns-1 .gallery-item:nth-of-type(1n),\n.gallery-columns-2 .gallery-item:nth-of-type(2n),\n.gallery-columns-3 .gallery-item:nth-of-type(3n),\n.gallery-columns-4 .gallery-item:nth-of-type(4n),\n.gallery-columns-5 .gallery-item:nth-of-type(5n),\n.gallery-columns-6 .gallery-item:nth-of-type(6n),\n.gallery-columns-7 .gallery-item:nth-of-type(7n),\n.gallery-columns-8 .gallery-item:nth-of-type(8n),\n.gallery-columns-9 .gallery-item:nth-of-type(9n) {\n\tmargin-right: 0;\n}\n.gallery-columns-1.gallery-size-medium figure.gallery-item:nth-of-type(1n+1),\n.gallery-columns-1.gallery-size-thumbnail figure.gallery-item:nth-of-type(1n+1),\n.gallery-columns-2.gallery-size-thumbnail figure.gallery-item:nth-of-type(2n+1),\n.gallery-columns-3.gallery-size-thumbnail figure.gallery-item:nth-of-type(3n+1) {\n\tclear: left;\n}\n.gallery-caption {\n\tbackground-color: rgba(0, 0, 0, 0.7);\n\t-webkit-box-sizing: border-box;\n\t-moz-box-sizing:    border-box;\n\tbox-sizing:         border-box;\n\tcolor: #fff;\n\tfont-size: 12px;\n\tline-height: 1.5;\n\tmargin: 0;\n\tmax-height: 50%;\n\topacity: 0;\n\tpadding: 6px 8px;\n\tposition: absolute;\n\tbottom: 0;\n\tleft: 0;\n\ttext-align: left;\n\twidth: 100%;\n}\n.gallery-caption:before {\n\tcontent: \"\";\n\theight: 100%;\n\tmin-height: 49px;\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100%;\n}\n.gallery-item:hover .gallery-caption {\n\topacity: 1;\n}\n.gallery-columns-7 .gallery-caption,\n.gallery-columns-8 .gallery-caption,\n.gallery-columns-9 .gallery-caption {\n\tdisplay: none;\n}\n.gallery-item img{\n\tmax-width: 100% !important;\n}\n/*---------------------------------------\n **   Header               -----\n-----------------------------------------*/\n\n\n/*** SECTION HEADERS ***/\n.focus,.works,.about-us,.features,.packages,.products,.testimonial,.contact-us {\n\tpadding-top: 100px;\n}\n.section-header {\n\ttext-align: center;\n\tpadding-bottom: 75px;\n}\n.section-header h2 {\n\tpadding-bottom: 10px;\n\tline-height: 40px;\n\tposition: relative;\n\tdisplay: inline-block;\n\tfont-size: 45px;\n\ttext-transform: uppercase;\n\tmargin-top: 15px;\n\tmargin-bottom: 0;\n}\n.section-header .section-legend {\n\tfont-size: 16px;\n\tmargin-bottom: 0;\n\tcolor: #808080;\n\tpadding-top: 0;\n}\n/* PRE LOADER */\n.preloader {\n\tposition: fixed;\n\ttop: 0;\n\tleft: 0;\n\tright: 0;\n\tbottom: 0;\n\tbackground-color: #fefefe;\n\tz-index: 99999;\n\theight: 100%;\n\twidth: 100%;\n\toverflow: hidden !important;\n}\n.status {\n\twidth: 200px;\n\theight: 200px;\n\tposition: absolute;\n\tleft: 50%;\n\ttop: 50%;\n\tbackground-image: url(" + __webpack_require__(16) + ");\n\tbackground-repeat: no-repeat;\n\tbackground-position: center;\n\tmargin: -100px 0 0 -100px;\n}\n#parallax_move .layer {\n    background-size: cover;\n    width: 100%;\n    height: 100%;\n    background-position: top center;\n}\n\n.home-header-wrap {\n\toverflow: hidden;\n\tposition: relative;\n\tbackground-color: #406594;\n\n}\n\n\n\n.nameHead {\n\tcolor: white;\n\tmargin-bottom: 50px;\n}\n\n.nameHead h1{\n\tfont-size: 100px;\n\tmargin-bottom: 20px;\n\tline-height: 1;\n\n}\n\n.nameHead h2{\n\tfont-size: 50px;\n}\n#familyPhotoCircle {\n\tbackground-color: white;\n\theight: 300px;\n\twidth: 300px;\n\tposition: relative;\n\ttop:10px;\n\t/*margin-bottom: 10px;\n\tmargin-right: 10px;*/\n\tborder-radius: 1000px;\n\toverflow: hidden;\n\tmargin: auto;\n}\n\n#fpInner {\n\tbackground-color: white;\n\theight: 280px;\n\twidth: 280px;\n\tposition: absolute;\n\ttop: 50%;\n\tleft: 50%;\n\tborder-radius: 1000px;\n\toverflow: hidden;\n\tmargin: -140px 0px 0px -140px;\n}\n\n\n\n/*---------------------------------------\n **   Section: Home                  -----\n-----------------------------------------*/\n\n\n.header.header {\n\tmin-height: 76px;\n}\n.header.header > .navbar {\n\t-webkit-box-shadow: 0px 5px 11px 0px rgba(50, 50, 50, 0.08);\n\tbox-shadow: 0px 5px 11px 0px rgba(50, 50, 50, 0.08);\n}\n.header-content-wrap {\n\tbackground: rgba(0, 0, 0, 0.5);\n\tposition: relative;\n\t-webkit-box-shadow: 0px 5px 11px 0px rgba(50, 50, 50, 0.08);\n\tbox-shadow: 0px 5px 11px 0px rgba(50, 50, 50, 0.08);\n\tpadding: 100px 0 100px;\n}\n.header_title {\n    float: left;\n    height:50px;\n    margin-top:10px;\n}\n.header_title h1{\n    font-size: 20px;\n    line-height: 20px;\n    margin-bottom: 5px;\n    text-align: center;\n    margin-top: 5px;\n}\n.header_title h2{\n\tfont-size:15px !important;\n\tline-height:15px;\n    margin: 0;\n}\n.header_title a {\n\tcolor:#000;\n}\n/*----  SECTION:  HOME > TOP BAR   ----*/\n #site-navigation {\n \theight: 1px;\n\tfloat: right;\n\tmargin-right: 0;\n\tmargin-left: 0;\n\n}\n.navbar {\n\tbackground: #FFF;\n\tborder: 0;\n\tborder-radius: 0 !important;\n\ttext-align: left;\n}\n#main-nav {\n\tposition: fixed;\n\twidth: 100%;\n\tz-index: 1000;\n\theight: 50px !important;\n\tmin-height: 50px !important;\n\tmargin-bottom: 0;\n}\n#main-nav.fixed {\n\tposition: fixed;\n\ttop: 0;\n}\n.navbar-inverse .navbar-nav {\n\tmargin-left: 0;\n\tmargin-right: 0;\n}\n.navbar-inverse .navbar-nav >li {\n\tdisplay: inline;\n\tmargin-right: 20px;\n\tmargin-top: 20px;\n}\n.navbar-inverse .navbar-nav>li:last-child {\n\tmargin-right: 0 !important;\n}\n.navbar-inverse .navbar-nav>li>a {\n\tcolor: #404040;\n\tpadding: 0;\n\tline-height: 35px;\n}\n.navbar-inverse .main-navigation ul > li {\n\tdisplay: inline;\n\tmargin-right: 20px;\n\tmargin-top: 20px;\n}\n.navbar-inverse .main-navigation > ul > li:last-child {\n\tmargin-right: 0 !important;\n}\n.navbar-inverse .main-navigation > ul > li > a {\n\tcolor: #404040;\n\tpadding: 0;\n\tline-height: 35px;\n}\n.navbar-inverse .navbar-nav ul.sub-menu {\n\tleft: -999em;\n\tposition: absolute; top: 100%;\n\tbackground:#fff;\n\twidth:200px;\n\tbox-shadow: 3px 3px 2px rgba(50, 50, 50, 0.08);\n\tz-index: 9999;\n}\n.navbar-inverse .navbar-nav ul.sub-menu {\n\tmargin:0;\n}\n.navbar-inverse .navbar-nav ul.sub-menu ul.sub-menu{\n\tposition: absolute;\n\ttop:0;\n}\n.navbar-inverse .navbar-nav ul.sub-menu li {\n\tfloat: none;\n\tposition: relative;\n\tlist-style:none;\n\tpadding:10px;\n}\n.navbar-inverse .navbar-nav ul.sub-menu li a {\n\tcolor:#404040;\n}\n.navbar-inverse .navbar-nav ul.sub-menu li:hover > a,\n.navbar-inverse .navbar-nav ul.sub-menu li.link-focus > a {\n\tcolor:#e96656;\n}\n.navbar-inverse ul ul {\n\tleft: -999em;\n}\n.navbar-inverse ul ul ul {\n\tleft: -999em;\n\ttop: 0;\n}\n.navbar-inverse ul li:hover > ul.sub-menu,\n.navbar-inverse ul li.link-focus > ul.sub-menu {\n\tleft: auto;\n}\n.navbar-inverse ul ul li:hover > ul.sub-menu,\n.navbar-inverse ul ul li.link-focus > ul.sub-menu {\n\tleft: 100%;\n}\n\n.navbar-brand {\n\theight: 76px;\n\tposition: relative;\n\tline-height: 60px;\n\tpadding: 7px 15px;\n\tdisplay: inline-block;\n}\n.navbar-brand > img {\n\tmax-height: 100%;\n}\n.navbar-brand:focus {\n\tborder:1px dotted black;\n}\n.navbar-inverse .navbar-nav>li>a:hover,\n.navbar-inverse .navbar-nav>li>a.link-focus {\n\tcolor: #e96656;\n\toutline: none;\n}\n.navbar-toggle {\n\tborder: 0;\n\tbackground-color: #808080;\n\tmargin-top: 23px;\n}\n.navbar-toggle:focus {\n\tborder:1px dotted black;\n}\n.navbar-inverse .navbar-toggle:hover,.navbar-inverse .navbar-toggle:focus {\n\tbackground-color: #e96656;\n\tfilter: alpha(opacity=100);\n\topacity: 1;\n\tbox-shadow: none;\n}\n.navbar-toggle.active{\n    background-color: #e96656 !important;\n}\n.navbar-toggle.collapsed{\n    background-color: #808080 !important;\n}\n.menu-align-center #site-navigation {\n\twidth: 100%;\n}\n.menu-align-center #site-navigation > ul {\n\twidth: 100%;\n\ttext-align: center;\n}\n.menu-align-center #site-navigation > ul ul {\n\ttext-align: left;\n}\n.menu-align-center #site-navigation > ul > li {\n\tfloat: none;\n\tdisplay: inline-block;\n}\n.menu-align-center .responsive-logo {\n\twidth: 100%;\n\ttext-align: center;\n}\n.menu-align-center .zerif_header_title {\n\twidth: 100%;\n}\n.menu-align-center .navbar-inverse .navbar-nav > li {\n\tmargin-top: 0;\n\tmargin-bottom: 0;\n}\n.menu-align-center .responsive-logo > a{\n\tfloat: none;\n\tdisplay: inline-block;\n}\n.navbar-inverse .navbar-nav>li>a:hover,\n.navbar-inverse .navbar-nav>li>a:focus {\n\tcolor: #e96656;\n}\n.navbar-inverse .navbar-nav>li.current>a {\n\tcolor: #e96656;\n\tposition: relative;\n\toutline: none;\n}\nul.nav > li.menu-item-home > a:before {\n\tcontent: \"\";\n\tdisplay: none;\n}\nli.current>a:before {\n\tposition: absolute;\n\tmargin: auto;\n\tz-index: 1;\n\tcontent: \"\";\n\twidth: 75%;\n\theight: 2px;\n\tbackground: #e96656;\n\tbottom: 0px;\n\tleft: 12.5%;\n}\nul.nav > li.current > a:before,\n.page ul.nav > li.current-menu-item > a:before,\n.single-post ul.nav > li.current-menu-item > a:before,\n.archive ul.nav > li.current-menu-item > a:before {\n\tposition: absolute;\n\tmargin: auto;\n\tz-index: 1;\n\tcontent: \"\";\n\twidth: 75%;\n\theight: 2px;\n\tbackground: #e96656;\n\tbottom: 0px;\n\tleft: 12.5%;\n\tdisplay: block;\n}\nul.nav > li.current_page_item.menu-item-home > a:before {\n\tcontent: \"\";\n\tdisplay: none;\n}\nul.nav > li.current_page_item.current > a:before {\n\tposition: absolute;\n\tmargin: auto;\n\tz-index: 1;\n\tcontent: \"\";\n\twidth: 75%;\n\theight: 2px;\n\tbackground: #e96656;\n\tbottom: 0px;\n\tleft: 12.5%;\n\tdisplay: block;\n}\n\n\n\n\n/*----  SECTION:  HOME > INTRO AND SHORT MSGS   ----*/\n.intro {\n\ttext-align: center;\n\tcolor: #FFF;\n\tmargin-top: 25%;\n\tline-height: 65px;\n\tz-index: 0;\n\ttext-transform: uppercase;\n\tfont-size: 55px;\n\tfloat:none;\n}\n.intro-text{\n\ttext-align: right;\n\tcolor: #FFF;\n\tline-height: 65px;\n\tz-index: 0;\n\ttext-transform: none;\n\tfont-size: 20px;\n\tfloat:none;\n\tfont-family: inherit;\n\tdisplay: inline;\n\tfont-weight: 400;\n}\n\n.intro-text a{\n\tcolor: white;\n\tfont-size: 22px;\n\tcursor: pointer;\n\ttext-decoration: underline\n}\n/* Short Messages */\n.bottom-message-section {\n\tmargin-top: 14%;\n\tposition: relative;\n}\n.short-text {\n\tmargin: auto;\n\ttext-align: center;\n\tcolor: rgba(255,255,255,0.7);\n\ttext-transform: uppercase;\n}\n/*----  SECTION:  HOME > LATEST NEWS   ----*/\n.latest-news {\n\tpadding-bottom: 66px;\n\tpadding-top: 100px;\n\tbackground: #FFFFFF;\n}\n.carousel-inner {\n/*\tmargin: 0 30px; */\n}\n#carousel-homepage-latestnews .item{\n\theight: auto;\n}\n.latesnews-content p,\n.latesnews-content {\n\tfont-size: 14px;\n\tline-height: 18px;\n\tcolor: #777777;\n}\n#carousel-homepage-latestnews .carousel-inner .item .latestnews-title {\n\tmargin-bottom: 15px;\n\tcolor: #404040;\n\tposition: relative;\n\tdisplay: inline-block;\n\ttext-transform: uppercase;\n\tmargin-bottom: 30px;\n\tfont-weight: bold;\n\tfont-size: 17px;\n\tfloat: none;\n\twidth: auto;\n\tmargin-top: 15px;\n}\n#carousel-homepage-latestnews .carousel-inner .item .latestnews-title a {\n\ttext-transform: uppercase;\n\tcolor: #404040;\n\tfont-weight: 700;\n\tdisplay: block;\n}\n#carousel-homepage-latestnews .item .latestnews-box .latestnews-title a:before {\n\tposition: absolute;\n\tmargin: auto;\n\tz-index: 1;\n\tcontent: \"\";\n\twidth: 75%;\n\theight: 2px;\n\tbackground: #e96656;\n\tbottom: -9px;\n\tleft: 12.5%;\n}\n#carousel-homepage-latestnews .item .latestnews-box:nth-child(4n+1) .latestnews-title a:before {\n\tbackground: #e96656;\n}\n#carousel-homepage-latestnews .item .latestnews-box:nth-child(4n+2) .latestnews-title a:before {\n\tbackground: #34d293;\n}\n#carousel-homepage-latestnews .item .latestnews-box:nth-child(4n+3) .latestnews-title a:before {\n\tbackground: #3ab0e2;\n}\n#carousel-homepage-latestnews .item .latestnews-box:nth-child(4n) .latestnews-title a:before {\n\tbackground: #f7d861;\n}\n#carousel-homepage-latestnews .item .latestnews-box .latestnews-img .latestnews-img-a {\n\tdisplay:block;\n}\n#carousel-homepage-latestnews {\n\tmargin: 0 30px;\n}\n#carousel-homepage-latestnews .carousel-control {\n\twidth: 45px;\n\tbackground: none;\n}\n.carousel-control.left {\n\tmargin-left: -45px;\n}\n.carousel-control.right {\n\tmargin-right: -45px;\n}\n#carousel-homepage-latestnews .glyphicon-chevron-left:before{\n\tcontent: \"\";\n\t/*background: url(images/left-arrow.png) no-repeat center center;*/\n\twidth: 30px;\n\theight: 30px;\n\tfloat: left;\n}\n#carousel-homepage-latestnews .glyphicon-chevron-right:before{\n\tcontent: \"\";\n\t/*background: url(images/right-arrow.png) no-repeat center center;*/\n\twidth: 30px;\n\theight: 30px;\n\tfloat: left;\n}\n#carousel-homepage-latestnews {\n}\n\n/*---------------------------------------\n **   Section: Our focus             -----\n-----------------------------------------*/\n.focus-box .service-icon .pixeden  {\n\tborder-radius: 50%;\n}\n.focus {\n\tpadding-bottom: 100px;\n\toverflow: hidden;\n\tbackground: #FFFFFF;\n\n}\n.focus .row {\n \ttext-align:center;\n}\n.focus .row .focus-box, .our-team .row .team-box {\n \tdisplay:inline-block;\n \tfloat:none !important;\n \tmargin-right: -4px;\n\tvertical-align: top;\n\tmargin-bottom: 25px;\n}\n/* FOCUS BOX */\n.focus-box .service-icon {\n\tmargin-bottom: 30px;\n\twidth: 145px;\n\theight: 145px;\n\tmargin: auto;\n\tborder-radius: 50%;\n\tborder: 10px solid #ececec;\n\tmargin-bottom: 20px;\n\tposition: relative;\n\t-webkit-transition: all 0.2s ease-in-out;\n\ttransition: all 0.2s ease-in-out;\n}\n/* ON HOVER COLORED ROUNDED CIRCLE AROUND ICONS */\n/* ON HOVER COLORED ROUNDED CIRCLE AROUND ICONS */\n.red,.green,.blue,.yellow {\n\t-webkit-transition: all 0.2s ease-in-out;\n\ttransition: all 0.2s ease-in-out;\n}\n.focus-box:nth-child(4n+1) .service-icon:hover {\n\tborder: 10px solid #e96656;\n}\n.focus-box:nth-child(4n+2) .service-icon:hover{\n\tborder: 10px solid #34d293;\n}\n.focus-box:nth-child(4n+3) .service-icon:hover {\n\tborder: 10px solid #3ab0e2;\n}\n.focus-box:nth-child(4n+4) .service-icon:hover{\n\tborder: 10px solid #f7d861;\n}\n.focus-box:nth-child(4n+1) .red-border-bottom:before {\n\tbackground: #e96656;\n}\n.focus-box:nth-child(4n+2) .red-border-bottom:before {\n\tbackground: #34d293;\n}\n.focus-box:nth-child(4n+3) .red-border-bottom:before {\n\tbackground: #3ab0e2;\n}\n.focus-box:nth-child(4n+4) .red-border-bottom:before {\n\tbackground: #f7d861;\n}\n.focus-box h3 {\n\tmargin-bottom: 15px;\n\tcolor: #404040;\n\tposition: relative;\n\tdisplay: inline-block;\n\ttext-transform: uppercase;\n\tmargin-bottom: 30px;\n\tfont-weight: bold;\n\tfont-size: 17px;\n\tfloat: none;\n    width: auto;\n    background: none;\n}\n.focus-box p {\n\tfont-size: 14px;\n\tcolor: #808080;\n}\n/*----OTHER FOCUSES ----*/\n.other-focuses {\n\t/*background: url(images/lines.png) repeat-x center;*/\n\tmargin-bottom: 25px;\n}\n.other-focuses .section-footer-title {\n\tpadding: 0 15px;\n\tcolor: #404040;\n\tfont-weight: bold;\n}\n.other-focus-list {\n\tpadding-top: 5px;\n\tmargin-bottom: -17px;\n}\n.other-focus-list ul li {\n\tdisplay: inline-block;\n\tmargin-right: 50px;\n\tpadding-bottom: 15px;\n\ttext-transform: uppercase;\n}\n.other-focus-list ul li:last-child {\n\tmargin-right: 0;\n}\n.other-focus-list ul li i {\n\tmargin-right: 8px;\n}\n/*---------------------------------------\n **   Secction:  Separator one        -----\n-----------------------------------------*/\n.separator-one {\n\tbackground: rgba(52, 210, 147, 0.8);\n\tpadding: 100px 0 100px 0;\n}\n.separator-one .green-btn {\n\tbackground: #14a168;\n}\n.separator-one .green-btn:hover {\n\tbackground: #007345;\n}\n.separator-one .text {\n\tcolor: #FFF;\n\tline-height: 34px;\n\tpadding: 0;\n\tmax-width: 800px;\n\tmargin-bottom: 20px;\n\tmargin-top: 15px;\n}\n/*---------------------------------------\n **   Section: Portfolio          -----\n-----------------------------------------*/\n.works {\n\tpadding-bottom: 100px;\n\tbackground: #FFFFFF;\n\tmin-height: 800px;\n}\n/* IMAGE GRID */\n.cbp-rfgrid {\n\tmargin: auto;\n\tpadding: 0;\n\tlist-style: none;\n\tposition: relative;\n\twidth: 100%;\n}\n.cbp-rfgrid li {\n\tposition: relative;\n\tfloat: left;\n\toverflow: hidden;\n\twidth: 25%; /* Fallback */\nwidth: -webkit-calc(100% / 4);\n\twidth: calc(100% / 4);\n\t-webkit-transition: 0.4s all linear;\n\ttransition: 0.4s all linear;\n}\n.cbp-rfgrid li a,.cbp-rfgrid li a img {\n\tdisplay: block;\n\tmax-width: 100%;\n\t-webkit-transform: scale(1,1);\n\t-ms-transform: scale(1,1);\n\ttransform: scale(1,1);\n\t-webkit-transition-timing-function: ease-in;\n\ttransition-timing-function: ease-in;\n\t-webkit-transition-duration: 250ms;\n\ttransition-duration: 250ms;\n\tcursor: pointer;\n\t-webkit-transition: 0.4s all linear;\n\ttransition: 0.4s all linear;\n\twidth: 100%;\n}\n.cbp-rfgrid li a:hover img {\n\t-webkit-transform: scale(1.05,1.07);\n\t-ms-transform: scale(1.05,1.07);\n\ttransform: scale(1.05,1.07);\n\t-webkit-transition-timing-function: ease-out;\n\ttransition-timing-function: ease-out;\n\t-webkit-transition-duration: 250ms;\n\ttransition-duration: 250ms;\n}\n/* Flexbox is used for centering the heading */\n.cbp-rfgrid li a .project-info {\n\tposition: absolute;\n\tleft: 10px;\n\ttop: 10px;\n\tright: 10px;\n\tbottom: 10px;\n\tbackground: rgba(0,0,0,0.5);\n\tpadding-top: 25%;\n\ttext-align: center;\n\tfilter: alpha(opacity=0);\n\topacity: 0;\n\t-webkit-transition: all ease .25s;\n\ttransition: all ease .25s;\n}\n.cbp-rfgrid li a .project-info .project-details {\n\tposition: relative;\n\ttop: -29px;\n\tfilter: alpha(opacity=0);\n\topacity: 0;\n\t-webkit-transition: all ease .25s;\n\ttransition: all ease .25s;\n\twidth: 100%;\n}\n.cbp-rfgrid li a .project-info h5 {\n\tposition: relative;\n\tdisplay: inline-block;\n\tmargin-bottom: 15px;\n\tmargin-top: 15px;\n\tfont-weight: bold;\n\ttext-transform: uppercase;\n}\n.cbp-rfgrid li a:hover .project-info {\n\tfilter: alpha(opacity=100);\n\topacity: 1;\n}\n.cbp-rfgrid li a:hover .project-details {\n\tfilter: alpha(opacity=100);\n\topacity: 1;\n\ttop: 0;\n}\n.cbp-rfgrid li a:hover .button {\n\tfilter: alpha(opacity=100);\n\topacity: 1;\n\tbottom: -50px;\n}\n.cbp-rfgrid li.cbp-rfgrid-open a .project-info {\n\tfilter: alpha(opacity=100);\n\topacity: 1;\n}\n.cbp-rfgrid-tr {\n\tposition: absolute;\n\ttop: 0;\n\twidth: 100%;\n\theight: 100%;\n\tmargin-bottom: 0;\n\tz-index: 9;\n}\n.cbp-rfgrid li.cbp-rfgrid-open a .project-info .project-details {\n\ttop: 0;\n\topacity: 1;\n}\n\n/****************************************************************/\n/***********************  PIRATE FORMS style ********************/\n/****************************************************************/\n\n.pirate_forms {\n\tpadding-bottom: 95px;\n}\n.pirate_forms input, .pirate_forms textarea {\n\twidth: 100%;\n\tmargin: auto;\n\tborder-radius: 4px !important;\n}\n.pirate_forms input {\n\ttext-align: left;\n\ttext-transform: none;\n\tpadding: 9px;\n\tmin-height: 46px;\n\tpadding-left: 15px !important;\n\tdisplay: inline-block;\n\tborder-radius: 4px;\n\tbackground: rgba(255,255,255, 0.95);\n}\n.pirate_forms textarea {\n\twidth: 100% !important;\n\ttext-align: left;\n\ttext-transform: none;\n\tpadding: 9px;\n\tmin-height: 250px;\n\tpadding-left: 15px;\n\tdisplay: inline-block;\n\tborder-radius: 4px;\n\tbackground: rgba(255,255,255, 0.95);\n}\n.pirate_forms .custom-button {\n\tfloat: right;\n\tmargin-right: 15px;\n}\n.pirate-forms-g-recaptcha {\n\tdisplay: none;\n}\n.pirate_forms .notification p {\n\tborder-radius: 3px;\n\tcolor: #FFF;\n\tpadding: 5px 10px;\n\tdisplay: inline-block;\n\tmargin-bottom: 10px;\n}\n.pirate_forms_error_box {\n\ttext-align:center;\n}\n.pirate_forms_error_box p {\n\tbackground: #E96656;\n\tborder-radius: 3px;\n\tcolor: #FFF;\n\tpadding: 5px 10px;\n\tdisplay: inline-block;\n\tmargin-bottom: 10px;\n}\n.pirate_forms_thankyou_wrap p {\n\tbackground: #34d293;\n\tborder-radius: 3px;\n\tcolor: #FFF;\n\tpadding: 5px 10px;\n\tdisplay: inline-block;\n\tmargin-bottom: 10px;\n}\n.pirate_forms .pirate-forms-submit-button {\n\tfloat: right;\n\tmargin-right: 0px;\n\tcolor: #FFF !important;\n\t-webkit-transition: all 0.3s ease-in-out;\n\ttransition: all 0.3s ease-in-out;\n}\n.pirate_forms .pirate-forms-submit-button:hover {\n\tcolor: #FFF;\n\tbackground: #cb4332;\n}\n.pirate_forms_wrap label {\n\twidth: 100%;\n\tfloat: left;\n\theight: 1px;\n}\n\n.zerif_hidden_if_not_customizer {\n\tdisplay: none !important;\n}\n\n.pixeden  {\n    height: 63px;\n    margin: auto;\n    position: absolute;\n    top: 0; left: 0; bottom: 0; right: 0;\n    display: block;\n}\n\n/* media queries:  change number of items per row */\n@media screen and (max-width: 1190px) {\n\t.cbp-rfgrid li {\n\t\twidth: 25%; /* Fallback */\n\t\twidth: -webkit-calc(100% / 4);\n\t\twidth: calc(100% / 4);\n\t}\n}\n@media screen and (max-width: 1024px) {\n\t.cbp-rfgrid li {\n\t\twidth: 33.33333333333333%; /* Fallback */\n\t\twidth: -webkit-calc(100% / 3);\n\t\twidth: calc(100% / 3);\n\t}\n}\n@media screen and (max-width: 768px) {\n\t.cbp-rfgrid li {\n\t\twidth: 50%; /* Fallback */\n\t\twidth: -webkit-calc(100% / 2);\n\t\twidth: calc(100% / 2);\n\t}\n}\n@media screen and (max-width: 480px) {\n\t.cbp-rfgrid li {\n\t\twidth: 100%;\n\t}\n}\n@media screen and (max-width: 300px) {\n\t.cbp-rfgrid li {\n\t\twidth: 100%;\n\t}\n}\n/* PROJECT DETAILS LOADER */\n#back-button {\n\tdisplay: none;\n\ttext-align: center;\n\ttext-transform: uppercase;\n\tpadding: 13px 35px 13px 35px;\n\tborder-radius: 4px;\n\tmargin: 10px;\n}\n#back-button i {\n\tmargin-right: 10px;\n}\n#loader {\n\tmin-height: 930px;\n\tposition: relative;\n\tdisplay: none;\n}\n#loader .loader-icon {\n\tbackground: url(" + __webpack_require__(16) + ") no-repeat center center;\n\tbackground-color: #FFF;\n\tmargin: -22px -22px;\n\ttop: 50%;\n\tleft: 50%;\n\tz-index: 10000;\n\tposition: fixed;\n\twidth: 44px;\n\theight: 44px;\n\t-webkit-background-size: 30px 30px;\n\tbackground-size: 30px 30px;\n\tborder-radius: 5px;\n}\n/*---------------------------------------\n **   Section: About us;              -----\n-----------------------------------------*/\n.about-us {\n\tbackground: #272727;\n\tcolor: #FFF;\n\tdisplay: flex;\n\tflex-wrap: wrap;\n}\n.about-us .big-intro {\n\ttext-align: right;\n\tfont-weight: 300;\n\tfont-size: 60px;\n\tline-height: normal;\n\tmargin-top: -15px;\n}\n.about-us .section-header .section-legend {\n\tcolor: #FFF;\n}\n.about-us p {\n\ttext-align: left;\n\tcolor: #939393;\n\tfont-size: 14px;\n\tline-height: 25px;\n}\n.about-us .column {\n\tmargin-bottom: 78px;\n}\n.about-us .col-md-12.zerif-rtl-big-title .big-intro,\n.about-us .col-md-12.zerif_about_us_center p {\n\ttext-align: center;\n}\n/*--SKILLS --*/\n.skills {\n\ttext-align: left;\n\tmargin: 0 0 0 0;\n}\n.skills .skill {\n\tdisplay: block;\n\tclear: both;\n\tmargin-top: 0;\n\tmargin-bottom: 25px;\n}\n.skills .skill .skill-count {\n\tdisplay: inline-block;\n\theight: 64px;\n\tmargin-top: 3px;\n\tfloat: left;\n\tmargin-right: 15px;\n\tmargin-bottom: 25px;\n}\n.skills li:last-child {\n\tmargin-bottom: 0;\n}\n.skills .skill .skill1,.skill2,.skill3,.skill4 {\n\tfont-size: 16px !important;\n}\n.skills .skill .section-legend {\n\ttext-transform: uppercase;\n\tfont-weight: 700;\n\tclear: none;\n\twidth: auto;\n\tfloat: none;\n\tmargin-top: 0;\n\tmargin-bottom: 0;\n}\n.skills .skill p {\n\tline-height: 20px;\n\tfont-size: 14px;\n\tcolor: #8f8f8f;\n}\n/*--OUR CLIENTS --*/\n.our-clients {\n\t/*background: url(images/lines-dark.png) repeat-x center;*/\n\tmargin-bottom: 40px;\n    float: left;\n    width: 100%;\n}\n.our-clients .section-footer-title {\n\tbackground: #272727;\n\tpadding: 0 15px;\n\tcolor: #FFF;\n}\n.our-clients h2 {\n\tfont-weight: 700;\n\tfloat:none;\n\tmargin-top: 0;\n\tmargin-bottom: 0\n}\n.client-list {\n\tpadding-top: 5px;\n\tfloat: left;\n    width: 100%;\n    margin-bottom: 78px;\n}\n.client-list ul{\n\tmargin: 0;\n}\n.client-list ul li {\n\tvertical-align: middle;\n\tdisplay: inline-block;\n\tmargin-right: 24px;\n\tpadding-bottom: 15px;\n\ttext-transform: uppercase;\n}\n.client-list ul li img {\n\tmax-width: 130px;\n\t-ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=80)\";\n\tfilter: alpha(opacity=80);\n\topacity: 0.8;\n\t-webkit-transition: all ease .55s;\n\ttransition: all ease .55s;\n}\n.client-list ul li img:hover {\n\t-ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)\";\n\tfilter: alpha(opacity=100);\n\topacity: 1;\n}\n.client-list ul li:last-child {\n\tmargin-right: 0;\n}\n.client-list ul li i {\n\tmargin-right: 8px;\n}\n.client-list div{\n\tmargin: 0;\n}\n.client-list div a{\n    margin-right: 24px;\n}\n.client-list div a:last-child{\n    margin-right: 0;\n}\n.client-list div img {\n\tmax-width: 130px;\n\t-ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=80)\";\n\tfilter: alpha(opacity=80);\n\topacity: 0.8;\n\t-webkit-transition: all ease .55s;\n\ttransition: all ease .55s;\n\tpadding-bottom: 15px;\n}\n.client-list div img:hover {\n\t-ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)\";\n\tfilter: alpha(opacity=100);\n\topacity: 1;\n}\n.client-list div a:last-child {\n\tmargin-right: 0;\n}\n/*---------------------------------------\n **   Section: stats                 -----\n-----------------------------------------*/\n.stats {\n\tbackground: rgba(0, 0, 0, 0.5);\n\tpadding: 100px 0 60px 0 !important;\n\tclear: both;\n}\n.stat {\n\tmargin-bottom: 40px;\n}\n.stat .icon-top {\n\tfont-size: 40px;\n\theight: 50px;\n\tline-height: 50px;\n}\n.stat .stat-text {\n\tdisplay: inline-block;\n\tposition: relative;\n}\n.stat h3 {\n\tmargin-top: 20px;\n\tpadding-bottom: 5px;\n\tposition: relative;\n\tdisplay: inline-block;\n}\n.stat .section-legend {\n\tcolor: #d1d1d1;\n\tmargin-top: 15px;\n}\n/*---------------------------------------\n **   Section: Our team;              -----\n-----------------------------------------*/\n.our-team {\n\tpadding-bottom: 66px;\n\tpadding-top: 100px;\n\tbackground: #FFFFFF;\n}\n.team-member {\n\tborder-radius: 4px;\n\toverflow: hidden;\n\tposition: relative;\n\tmargin-bottom: 35px;\n}\n.team-member .details {\n\ttext-align: left;\n\tfont-size: 13px;\n\tline-height: 20px;\n\tposition: absolute;\n\tpadding: 15px;\n\ttop: -200px;\n\tleft: 0;\n\twidth: 100%;\n\theight: 190px;\n\t-webkit-transition: all 500ms;\n\ttransition: all 500ms;\n\t-ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n\tfilter: alpha(opacity=0);\n\topacity: 0;\n}\n.team-member .member-details {\n\tposition: relative;\n\tdisplay: inline-block;\n\tpadding-bottom: 5px;\n}\n.team-member:hover .details {\n\ttop: 0;\n\tbackground: #333;\n\tcolor: white;\n\t-ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)\";\n\tfilter: alpha(opacity=100);\n\topacity: 1;\n}\n.team-member.team-member-open .details {\n\tdisplay: block;\n\ttop: 0;\n\tbackground: #333;\n\tcolor: white;\n\t-ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)\";\n\tfilter: alpha(opacity=100);\n\topacity: 1;\n\t-webkit-transition: none;\n\t-moz-transition: none;\n\t-o-transition: none;\n\ttransition: none;\n}\n.team-member .profile-pic {\n\tborder-radius: 50%;\n\twidth: 174px;\n\theight: 174px;\n\tmargin: auto;\n\toverflow: hidden;\n\tmargin-bottom: 25px;\n}\n.team-member .profile-pic img {\n\twidth: 100%;\n\theight: 100%;\n}\n.team-member h3 {\n\ttext-transform: uppercase;\n\tcolor: #404040;\n\tfont-weight: 700;\n\tfont-size: 17px;\n\tposition: relative;\n\tmargin-top: 15px;\n}\n.team-member .position {\n\tfont-size: 13px;\n}\n.team-member .social-icons {\n\tmargin-bottom: 25px;\n}\n.team-member .social-icons ul {\n\tmargin: 0 0 1.5em 0;\n}\n.team-member .social-icons ul li {\n\tdisplay: inline-block;\n\tline-height: 32px;\n\tmargin: 6px;\n}\n.team-member .social-icons ul li a {\n\tbackground: #FFF;\n\tfont-size: 18px;\n\tborder-radius: 50%;\n\tcolor: #808080;\n}\n.team-member .social-icons ul li a:hover {\n\tcolor: #e96656;\n}\n.our-team .row > div:nth-child(4n+1) .red-border-bottom:before{\n    background: #e96656;\n}\n.our-team .row > div:nth-child(4n+2) .red-border-bottom:before{\n    background: #34d293;\n}\n.our-team .row > div:nth-child(4n+3) .red-border-bottom:before{\n    background: #3ab0e2;\n}\n.our-team .row > div:nth-child(4n+4) .red-border-bottom:before{\n    background: #f7d861;\n}\n\n/*---------------------------------------\n **   Features            -----\n-----------------------------------------*/\n.features {\n\tbackground: #FFFFFF;\n\ttext-align: left;\n\tpadding-bottom: 51px;\n}\n.features .feature {\n\tmargin-bottom: 55px;\n}\n.features .feature-icon {\n\tfont-size: 55px;\n\tfloat: left;\n\tmargin-top: 10px;\n\tmargin-right: 25px;\n}\n.features .feature h5 {\n\tfont-weight: bold;\n\tline-height: 28px;\n\tcolor: #404040;\n}\n.features .feature p {\n\tfont-size: 14px;\n}\n/*---------------------------------------\n **   Packages               -----\n-----------------------------------------*/\n.packages {\n\tpadding-bottom: 50px;\n\tbackground: rgba(0, 0, 0, 0.5);\n}\n.package {\n\tborder-radius: 4px;\n\tbackground: #FFFFFF;\n\tmargin-top: 25px;\n\tmargin-bottom: 50px;\n\tpadding-bottom: 15px;\n}\n.package-header {\n\theight: 57px;\n\tcolor: #FFF;\n\tline-height: 57px;\n\tborder-top-left-radius: 4px;\n\tborder-top-right-radius: 4px;\n}\n.package-header h5 {\n\ttext-transform: uppercase;\n\tfont-weight: bold;\n}\n.price {\n\tline-height: 120px;\n\theight: 100px;\n\tcolor: #FFF;\n\tfont-weight: 400;\n}\n.price h4 {\n\tdisplay: inline;\n\tfont-size: 40px;\n\tline-height: normal;\n\tmargin-bottom: 0;\n}\n.price h4 .dollar-sign {\n\tfont-size: 17px;\n\tvertical-align: super;\n}\n.price .price-meta {\n\tline-height: normal;\n\ttext-transform: uppercase;\n\tcolor: #9f9f9f;\n}\n.package ul li {\n\tpadding-top: 10px;\n\tpadding-bottom: 10px;\n\twidth: 80%;\n\tmargin: auto;\n\tborder-bottom: 1px dotted #dadada;\n}\n.package ul li:last-child {\n\tborder-bottom: 0;\n}\n.best-value .package {\n\tmargin-top: 0;\n}\n.best-value .package-header {\n\tpadding-top: 17px;\n\theight: 82px !important;\n}\n.best-value .package-header h4 {\n\tfont-weight: bold;\n\tline-height: 29px;\n\ttext-transform: uppercase;\n}\n.best-value .package-header .meta-text {\n\tfont-size: 13px;\n\tline-height: normal;\n}\n.best-value .package-header {\n\theight: 72px;\n}\n.package ul li i {\n\tfont-size: 13px;\n\tmargin-right: 5px;\n}\n.order {\n\tbackground: #d8ccba;\n\tcolor: #404040;\n}\n.package .order-now {\n\tline-height: 45px;\n\tmax-width: 100%;\n\tdisplay: block;\n\tbackground: #404040;\n\tcolor: #FFF;\n\t-webkit-transition: all 700ms;\n\ttransition: all 700ms;\n\tborder-bottom-right-radius: 4px;\n\tborder-bottom-left-radius: 4px;\n}\n.package .order-now:hover {\n\tbackground: #e96656;\n}\n/*---------------------------------------\n**   Producs            -----\n-----------------------------------------*/\n.products .color-overlay {\n\tbackground: rgba(39,144,176, 0.96);\n\tmargin-top: -100px;\n\tpadding-top: 100px;\n\tpadding-bottom: 70px;\n}\n\n/*---ITEM STYLE ---*/\n.item {\n\twidth: 100%;\n\theight: 260px;\n\tdisplay: block;\n\t-webkit-background-size: 100%;\n\tbackground-size: 100%;\n\tposition: relative;\n\tmargin: auto;\n\tmargin-bottom: 30px;\n\tz-index: 5;\n\t-webkit-backface-visibility: hidden;\n\toverflow: hidden;\n\tborder-radius: 4px;\n}\n.item-overlay {\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100%;\n\theight: 100%;\n\toverflow: hidden;\n\t-webkit-transition: background-color 0.3s ease-in-out;\n\ttransition: background-color 0.3s ease-in-out;\n}\n.item-content {\n\tposition: absolute;\n\twidth: 100%;\n\tbottom: 0;\n\t-webkit-transform: translate(0,100%);\n\t-ms-transform: translate(0,100%);\n\ttransform: translate(0,100%);\n\t-webkit-transition: all 0.3s ease-in-out;\n\ttransition: all 0.3s ease-in-out;\n}\n.item:hover .item-content {\n\t-webkit-transform: translate(0,0);\n\t-ms-transform: translate(0,0);\n\ttransform: translate(0,0);\n\t-webkit-transition: all 0.3s ease-in-out;\n\ttransition: all 0.3s ease-in-out;\n}\n.item-top-content {\n\tposition: relative;\n}\n.item-top-content-inner {\n\tposition: absolute;\n\tbottom: 0;\n\tpadding: 10px 15px 10px 15px;\n\tbackground: rgba(255,255,255,.95);\n\twidth: 100%;\n}\n.item-add-content {\n\tpadding: 0 15px 15px 15px;\n\t-ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n\tfilter: alpha(opacity=0);\n\topacity: 0;\n\t-webkit-transition: all 0.3s ease-in-out;\n\ttransition: all 0.3s ease-in-out;\n}\n.item:hover .item-add-content {\n\t-ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)\";\n\tfilter: alpha(opacity=100);\n\topacity: 1;\n}\n.item-add-content-inner {\n\tborder: 0px solid #dadada;\n\tborder-top-width: 1px;\n\tpadding-top: 10px;\n}\n.item-top-title {\n\ttext-align: left;\n}\n.item-top-title h5 {\n\tcolor: #404040;\n\tfont-weight: 700;\n}\n/* ITEM DETAILS */\n.item-product {\n\twidth: 70%;\n\tfloat: left;\n}\n.item-product-price {\n\twidth: 30%;\n\tfloat: right;\n\ttext-align: right;\n}\n.subdescription {\n\tfont-size: 14px;\n\tfont-weight: 400;\n\tcolor: #7d7d7d;\n}\n/*---PRODUCT PRICE---*/\n.item-product-price {\n\tfont-size: 1em;\n\tfont-weight: 700;\n\tposition: relative;\n}\n.item-product-price .subdescription {\n\tcolor: #808080;\n}\n.old-price {\n\tborder: 0 solid #808080;\n\tborder-bottom-width: 1px;\n\tmargin-top: -11px;\n\twidth: 30px;\n\tposition: absolute;\n\tright: -2px;\n\tbottom: 10px;\n\t-webkit-transform: rotate(-30deg);\n\t-ms-transform: rotate(-30deg);\n\ttransform: rotate(-30deg);\n}\n/*---ITEM DESCRIPTION ---*/\n.item-content {\n\tbackground: rgba(255,255,255,.85);\n}\n.item-add-content {\n\tfont-weight: 400;\n\tcolor: #808080;\n}\n.item-add-content .section {\n\tmargin-bottom: 10px;\n}\n.item-add-content .section:last-of-type {\n\tmargin-bottom: 0;\n}\n.item-add-content p {\n\tfont-size: 14PX;\n}\n/*---------------------------------------\n **   Newsletter           -----\n-----------------------------------------*/\n.newsletter {\n\tpadding-top: 62px;\n\tpadding-bottom: 62px;\n\tbackground: rgba(0, 0, 0, 0.5);\n}\n.newsletter h3 {\n\tfont-size: 28px;\n\ttext-transform: uppercase;\n\tfont-family: 'Montserrat', Helvetica, sans-serif;\n\tfont-weight: 700;\n\tmargin-bottom: 8px;\n}\n.newsletter .subscription {\n\tmargin-top: 15px;\n}\n.newsletter .custom-button {\n    margin-top: 7px;\n}\n/*----------------------------------------\n **   Testimonial           -----\n-----------------------------------------*/\n.testimonial {\n\tbackground: #8c7620;\n\tpadding-bottom: 90px;\n}\n.testimonial .section-header .section-legend {\n\tcolor: #FFF;\n}\n#client-feedbacks .feedback-box {\n    width: 30%;\n    background: #FFFFFF;\n    padding: 25px;\n    margin: 13px;\n    text-align: left;\n    border-radius: 4px;\n    -webkit-box-shadow: none;\n    box-shadow: none;\n    display: inline-block;\n    z-index: 5;\n    vertical-align: top;\n}\n.feedback-box .message {\n\tfont-size: 15px;\n\tcolor: #777777;\n}\n.feedback-box .client {\n\tmargin-top: 30px;\n\theight: 73px;\n\tposition: relative;\n}\n.feedback-box .quote {\n\tfloat: left;\n\tfont-size: 45px;\n\tline-height: 80px;\n}\n.feedback-box .client-info {\n\tfloat: left;\n\tmargin-left: 18px;\n\tpadding-top: 15px;\n}\n.feedback-box .client-info .client-name {\n\tfont-family: 'Homemade Apple', serif;\n\tcolor: #404040;\n}\n.feedback-box .client-info .client-company {\n\tfont-size: 13px;\n\tmargin-top: -3px;\n}\n.feedback-box .client-image {\n\tfloat: right;\n\twidth: 73px;\n\theight: 73px;\n\tborder-radius: 50%;\n\toverflow: hidden;\n\tborder: 3px solid #f6f6f6;\n}\n.feedback-box .client-image img {\n\twidth:100%;\n\theight:100%;\n}\n.customNavigation {\n\ttext-align: center;\n}\n.owl-theme .owl-controls .owl-page span {\n\tbackground: #886e0e;\n\tborder-radius: 50%;\n}\n.customNavigation a {\n\t-webkit-user-select: none;\n\t-moz-user-select: none;\n\t-ms-user-select: none;\n\tuser-select: none;\n\t-webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.zerif_grid_col_4 > div,\n.zerif_grid_col_3 > div,\n.zerif_grid_col_2 > div,\n.zerif_grid_col_1 > div {\n\tmargin-bottom: 30px;\n\ttext-align: center;\n}\n.zerif_grid_col_4 {\n\tfloat: left;\n\twidth: 23%;\n\tmargin: 0 1.25% 0 1.25%;\n}\n.zerif_grid_col_3 {\n    float: left;\n    width: 31.5%;\n    margin: 0 1.25% 0 1.25%;\n}\n.zerif_grid_col_2 {\n\tfloat: left;\n\twidth: 48%;\n\tmargin: 0 1.75% 0 1.75%;\n}\n.zerif_grid_col_1 {\n\tfloat: left;\n\twidth: 100%;\n}\n.zerif_grid_first {\n\tmargin-left: 0;\n\tpadding-left: 0;\n}\n.zerif_grid_last {\n\tmargin-right: 0;\n\tpadding-right: 0;\n}\n#client-feedbacks.zerif_grid .feedback-box {\n\twidth: 100%;\n}\n/*----------------------------------------\n **   Purchase now           -----\n-----------------------------------------*/\n.purchase-now {\n\tbackground: #e96656;\n\tpadding-top: 70px;\n\tpadding-bottom: 70px;\n}\n.purchase-now h3 {\n\ttext-align: left;\n\tline-height: 40px;\n\tmargin-top: 14px;\n}\n.purchase-now .red-btn {\n\tfloat: right;\n\tbackground: #db5a4a;\n}\n.purchase-now .red-btn:hover {\n\tbackground: #bf3928;\n}\n.ribbon-without-button h3 {\n\ttext-align: center;\n}\n.ribbon-without-button .col-md-9 {\n\twidth: 100%;\n}\n\n/*----------------------------------------\n **   Contact us             -----\n-----------------------------------------*/\n.contact-us {\n\tbackground: rgba(0, 0, 0, 0.5);\n\tpadding-bottom: 95px;\n}\n.contact-us .section-header .section-legend {\n\tcolor: #FFF;\n}\n.contact-us .input-box,textarea {\n\twidth: 100%;\n\tmargin: auto;\n\tmargin-bottom: 20px;\n\tborder-radius: 4px;\n}\n.contact-us textarea {\n\tborder: 1px solid transparent;\n}\n.contact-us .custom-button {\n\tfloat: right;\n\tmargin-right: 15px;\n}\n.zerif-g-recaptcha {\n\tmargin-left: 15px;\n\tdisplay: none;\n}\n.contact-us .notification p {\n\tborder-radius: 3px;\n\tcolor: #FFF;\n\tpadding: 5px 10px;\n\tdisplay: inline-block;\n\tmargin-bottom: 10px;\n}\n.contact-us .error p {\n\tbackground: #E96656;\n}\n.contact-us .success p {\n\tbackground: #34d293;\n}\n.contact_submit_wrap {\n\tfloat: right;\n}\n\n\n/*---------------------------------------\n **   Footer           -----\n-----------------------------------------*/\n#footer {\n\tbackground: #272727;\n\tline-height: 20px;\n}\n.company-details {\n\tcolor: #939393;\n\tpadding-top: 67px;\n\tpadding-bottom: 30px;\n}\n.company-details a {\n\tcolor:#939393;\n\ttext-decoration:none;\n}\n\n.company-details a:hover {\n\tcolor: #e96656;\n}\n.company-details .icon-top {\n\tfont-size: 30px;\n\tmargin-bottom: 10px;\n}\n.copyright {\n\tpadding-top: 68px;\n\tpadding-bottom: 68px;\n\tbackground: #171717;\n}\n.social {\n\tmargin: 0 0 1.5em 0 !important;\n}\n.social li {\n\tdisplay: inline-block;\n\tmargin: 5px;\n}\n.social li a {\n\tcolor: #939393;\n\tfont-size: 18px;\n}\n.social li a:hover {\n\tcolor: #e96656;\n}\n.copyright p {\n\tmargin-bottom: 0;\n\tcolor: #939393;\n}\n.footer-widget-wrap > .container {\n\ttext-align: center;\n}\n.footer-widget {\n\tfloat: none;\n\tdisplay: inline-block;\n\tvertical-align: top;\n}\n.footer-widget ul {\n\tmargin-left: 0;\n\tpadding-left: 0;\n}\n.footer-widget li {\n\tlist-style: none;\n\tmargin-left: 0;\n}\n.footer-widget-wrap {\n\tbackground: rgba(255,255,255,0.05);\n}\n.footer-widget-wrap .widget .widget-title {\n\tcolor: #FFF;\n}\n.footer-widget-wrap .widget li a {\n\tcolor: #CCC;\n}\n.footer-widget-wrap .widget li a:hover {\n\tcolor: #FFF;\n}\n.footer-widget-wrap .widget {\n\tcolor: #CCC;\n\tpadding-bottom: 30px;\n}\n.footer-widget-wrap .widget_calendar tbody td {\n    background-color: rgba(249, 249, 249, 0.75);\n}\n.footer-widget-wrap .tagcloud a {\n\tbackground: none;\n\tpadding: 2px 5px;\n\tcolor: #CCC;\n}\n.footer-widget-wrap .tagcloud a:hover {\n\tcolor: #FFF;\n}\n.footer-widget-wrap .widget #wp-calendar {\n\tcolor: #333;\n}\n/*---------------------------------------\n **   Single page           -----\n-----------------------------------------*/\n.single-project {\n\ttext-align: left;\n\tmargin-bottom: 25px;\n}\n.single-project .project-image {\n\twidth: 100%;\n\tfloat: left;\n\ttext-align: left;\n\tmargin-bottom: 25px;\n}\n.single-project h3 {\n\tmargin-bottom: 10px;\n\tpadding-bottom: 7px;\n\tline-height: 40px;\n\tborder-bottom: 1px dotted #dadada;\n}\n.single-project .project-description {\n\tmargin-bottom: 25px;\n}\n.single-project .button {\n\tmargin-left: 0;\n}\n.single-project .project-information {\n\tmargin-bottom: 10px;\n}\n.single-project .project-information ul li {\n\tborder-bottom: 1px dotted #dadada;\n\tpadding-bottom: 5px;\n\tmargin-top: 10px;\n}\n.single-project .project-information ul li span {\n\tfont-weight: 700;\n\tmargin-right: 5px;\n}\n/*---------------------------------------\n **   Section blog            -----\n-----------------------------------------*/\n.blog {\n\tmin-height: 175px;\n\tposition: relative;\n\toverflow: hidden;\n}\n.blog-list{\n\tbackground: #FFF;\n}\n.post-img-wrap{\n\tfloat: left;\n\tmargin-right: 20px;\n\tdisplay: inline-block;\n\toverflow: hidden;\n}\n.post-img-wrap a{\n}\n.post-img-wrap a img{\n\twidth: 200px;\n\theight: auto;\n\t-webkit-transform: scale(1);\n\t-moz-transform: scale(1);\n\t-o-transform: scale(1);\n\t-ms-transform: scale(1);\n\ttransform: scale(1);\n\t-webkit-transition: all 0.3s ease-out;\n\t-moz-transition: all 0.3s ease-out;\n\t-ms-transition: all 0.3s ease-out;\n\t-o-transition: all 0.3s ease-out;\n\ttransition: all 0.3 ease-out;\n}\n.post-img-wrap a:hover img{\n\t-webkit-transform: scale(1.1);\n\t-moz-transform: scale(1.1);\n\t-o-transform: scale(1.1);\n\t-ms-transform: scale(1.1);\n\ttransform: scale(1.1);\n\t-webkit-transition: all 0.5s ease-out;\n\t-moz-transition: all 0.5s ease-out;\n\t-ms-transition: all 0.5s ease-out;\n\t-o-transition: all 0.5s ease-out;\n\ttransition: all 0.5 ease-out;\n}\narticle.hentry{\n\tfloat: left;\n\twidth: 100%;\n\tmargin-bottom: 30px;\n\tpadding-bottom: 30px;\n\tborder-bottom: 1px solid rgba(0, 0, 0, 0.05);\n}\narticle.sticky{\n\tbackground: #f9f9f9;\n\tpadding: 10px;\n}\narticle{\n\ttext-align: left;\n}\narticle .entry-meta a{\n\tcolor :#888;\n\tfont-style: italic;\n}\narticle .posted-on a:hover{\n\tcolor: #e96656;\n}\n.entry-footer a{\n\tcolor :#888;\n\tfont-style: italic;\n}\n.entry-footer a:hover{\n\tcolor: #e96656;\n}\n.entry-title,\n.entry-title a,\n.widget-title,\n.widget-title a{\n\tfont-size: 20px;\n\tline-height: 22px;\n\tcolor: #404040;\n}\n.entry-title a:hover{\n\tcolor: #e96656;;\n}\n.clear{\n\tclear: both;\n}\n.content-left-wrap{\n\tpadding-top: 60px;\n}\n.sidebar-wrap.content-left-wrap{\n\tmargin-top: 60px;\n\tpadding-top: 0;\n}\n.debar-wrap {\n\tmargin-top: 50px;\n}\n.listpost-content-wrap{\n}\n.listpost-content-wrap h1.entry-title,\n.list-post-top h1.entry-title {\n\tfloat: none;\n\tclear: none;\n\tmargin-top: 0;\n}\n.listpost-content-wrap .entry-title:before {\n\tdisplay: none;\n\tcontent: \"\";\n}\n.entry-title:after {\n\tposition: absolute;\n\tmargin: auto;\n\tz-index: 1;\n\tcontent: \"\";\n\twidth: 10%;\n\theight: 2px;\n\tbackground: #e96656;\n\tbottom: -9px;\n\tleft: 0;\n}\n.listpost-content-wrap .entry-title a:after {\n\tposition: absolute;\n\tmargin: auto;\n\tz-index: 1;\n\tcontent: \"\";\n\twidth: 35%;\n\theight: 2px;\n\tbackground: #e96656;\n\tbottom: -9px;\n\tleft: 0;\n\twidth: 50px;\n\tdisplay: none;\n}\n.post .entry-footer {\n}\n.listpost-content-wrap h1.entry-title a {\n\tfloat: none;\n\tposition: relative;\n}\n.listpost-content-wrap-full{\n\twidth: 100%;\n}\n.listpost-content-wrap-full .list-post-top{\n\tmin-height: 1px;\n}\n.entry-title{\n\tfont-size: 20px;\n\tmargin-top: 0;\n\tpadding-top: 0;\n}\n.listpost-content-wrap .entry-content {\n\tmargin-top: 1em;\n}\n.listpost-content-wrap .entry-footer {\n\tpadding-top: 10px;\n}\n.listpost-content-wrap-full .entry-footer > span,\n.listpost-content-wrap .entry-footer > span {\n\tpadding-right: 15px;\n}\n.listpost-content-wrap .entry-content p {\n\tmin-height: 90px;\n\tmargin-bottom: 0\n}\n.entry-content{\n\tline-height: 20px;\n}\n.list-post-top{\n\tmin-height: 130px;\n}\n.search .list-post-top{\n\tmin-height: 1px;\n}\n.entry-footer{\n\tbackground: transparent;\n}\n.entry-footer-large a{\n\tcolor :#8b8b8b;\n\tfont-style: italic;\n}\n.entry-footer-large a:hover{\n\tcolor: #e96656;\n}\n.entry-footer-large{\n\tbackground: transparent;\n\tpadding: 0 0 20px 0px;\n\tposition: relative;\n\tpadding-right: 200px;\n\tfloat: left;\n\twidth: 100%;\n}\n.entry-footer-large > span {\n\tpadding-right: 5px;\n}\n.entry-footer-large-left {\n\tfloat: left;\n}\n.large-container .entry-content p {\n\tmargin: 4px 20px 0px 0px;\n\ttext-align: justify;\n}\n.entry-content{\n\tmargin: 1em 0 0;\n}\n.row{\n    float: left;\n    width: 100%;\n    margin-right: 0;\n    margin-left: 0;\n}\n/* Calendar style */\n/* Calendar Widget */\n.widget_calendar table,\n.widget_calendar td {\n\tborder: 0;\n\tborder-collapse: separate;\n\tborder-spacing: 1px;\n}\n.widget_calendar caption {\n\tfont-size: 14px;\n\tmargin: 0;\n\tmargin-bottom: 6px;\n}\n.widget_calendar th,\n.widget_calendar td {\n\tpadding: 0;\n\ttext-align: center;\n}\n.widget_calendar a {\n\tdisplay: block;\n\tbackground: #f9f9f9;\n\tcolor: #e96656;\n}\n.widget_calendar a:hover {\n\tbackground-color: #e96656;\n\tcolor: #FFF;\n}\n.widget_calendar tbody td {\n\tbackground-color: #f9f9f9;\n}\n.site-footer .widget_calendar tbody td {\n\tbackground-color: rgba(255, 255, 255, 0.05);\n}\n.widget_calendar tbody .pad, .site-footer .widget_calendar tbody .pad {\n\tbackground-color: transparent;\n}\n.widget_calendar thead th{\n\tbackground: #e9e9e9;\n\tborder: none;\n}\n\n/*----------------------------------------\n **   SiteOrigin Page Builder styles -----\n-----------------------------------------*/\n\n.siteorigin-panels .content-left-wrap {\n  padding-top: 0;\n}\n\n.siteorigin-panels .type-page .entry-content {\n  margin-top: 0;\n}\n\n.siteorigin-panels article.hentry{\n\tmargin-bottom: 0;\n\tpadding-bottom: 0;\n\tborder-bottom: none;\n}\n\n.siteorigin-panels .hentry {\n\tmargin: 0;\n}\n\n.siteorigin-panels .widget li::before {\n\tdisplay: none;\n}\n\n\n/* ====================== Large TEMPLATE ============================== */\n.entry-meta-large{\n\tfloat: right;\n\tposition: absolute;\n\tright: 0;\n\ttop: 0\n}\n.entry-content p {\n\ttext-align:justify;\n}\n.post-img-wrap-large a img{\n\tmax-width: 100%;\n\twidth: 100%;\n\theight: auto;\n\t-webkit-transform: scale(1);\n\t-moz-transform: scale(1);\n\t-o-transform: scale(1);\n\t-ms-transform: scale(1);\n\ttransform: scale(1);\n\t-webkit-transition: all 0.3s ease-out;\n\t-moz-transition: all 0.3s ease-out;\n\t-ms-transition: all 0.3s ease-out;\n\t-o-transition: all 0.3s ease-out;\n\ttransition: all 0.3 ease-out;\n}\n.listpost-content-wrap-large{\n\tposition: absolute;\n\tbottom: 0px;\n\tbackground: rgba(255, 255, 255, 0.9) none repeat scroll 0% 0%;\n\tmin-height: 50px;\n\twidth: 100%;\n\tpadding: 15px 20px 0px 20px;\n\tborder-top: 2px solid #FFF;\n}\n.large-container {\n\tbackground-color: #fff;\n\tborder-radius:4px;\n\tmargin: 0 0 35px 0;\n\tposition: relative;\n\twidth: 95%;\n\tfloat: left;\n}\n.large-container .list-post-top {\n\tmin-height: 130px;\n}\n\n/* woocommerce v2.3.5 */\n*:focus {\n    outline: 0;\n}\n.woocommerce-page .page-description {\n\ttext-align: justify;\n\tmargin-top: 20px;\n\tfloat: left;\n}\n.woocommerce-page h1.page-title {\n\ttext-align:left;\n\tposition: relative;\n\tfont-size: 20px;\n\tfont-size: 20px;\n\tline-height: 22px;\n\tcolor: #404040;\n}\n.woocommerce-page .page-title:before {\n\tposition: absolute;\n\tmargin: auto;\n\tz-index: 1;\n\tcontent: \"\";\n\twidth: 10%;\n\theight: 2px;\n\tbackground: #e96656;\n\tbottom: -9px;\n\tleft: 0;\n}\n.woocommerce span.onsale {\n\twidth: 55px;\n\theight: 55px;\n\tborder: 4px solid #34d293;\n\tborder-radius: 50%;\n\tbackground: rgba(255,255,255,0.9);\n\ttext-shadow: none;\n\ttext-transform: uppercase;\n\tpadding: 0px;\n\tposition: absolute;\n\tline-height: 46px;\n\tfont-size: 13px;\n\tcolor: #000;\n\tleft: -20px;\n\ttop: -20px;\n}\n.woocommerce ul.products li.product .onsale{\n\tleft: -20px;\n\ttop: -20px;\n}\n.woocommerce-page .woocommerce-ordering select {\n\tpadding: 12px 15px 12px 10px;\n\tcolor: #A0A0A0;\n\tborder: 1px solid rgba(0, 0, 0, 0.1);\n\tborder-radius: 0;\n}\n.woocommerce-page .products .product > a:first-child {\n\tposition: relative;\n\ttext-align: center;\n\tdisplay: block;\n}\n.woocommerce-page .products a.button {\n\tbackground: #e96656;\n\tdisplay: inline-block;\n\ttext-align: center;\n\ttext-transform: uppercase;\n\tpadding: 10px 20px 10px 20px;\n\tborder-radius: 4px;\n\tmargin: 10px;\n\tborder: none;\n\tcolor: #FFF;\n\tfont-size: 12px;\n\tmargin: 0;\n}\n.woocommerce-page .products a.button:hover {\n\tbackground: #cb4332;\n}\n.woocommerce-page .products h3 {\n\tcolor: #404040;\n\tposition: relative;\n\tdisplay: inline-block;\n\ttext-transform: uppercase;\n\tmargin-bottom: 30px;\n\tfont-weight: bold;\n\tfont-size: 12px;\n\tline-height: 14px;\n\tfloat: none;\n\twidth: auto;\n\tmin-height: 42px;\n\tmargin: 0;\n}\n.woocommerce-page .products a .price {\n\tcolor: #000 ;\n\tline-height: 20px;\n\twidth: 100%;\n\tfloat: left;\n\theight: auto;\n\tmin-height: 40px;\n\ttext-align: center;\n\tpadding: 10px 0;\n}\n.woocommerce-page .products a .price del {\n\tdisplay: block;\n\tline-height: 20px;\n}\n.woocommerce ul.products li.product .price {\n\tcolor: #000;\n}\n.woocommerce-page .products a .price ins {\n\tdisplay: block;\n\tcolor: #e96656;\n\tfont-weight: bold;\n\tbackground: none;\n\tline-height: 20px;\n}\n.woocommerce-page .products .star-rating {\n\tposition: relative;\n\twidth: 100px;\n\theight: 20px;\n\ttext-indent: 99999px;\n\tposition: relative;\n\toverflow: hidden;\n\t/*background: url(images/woostars.png);*/\n\tbackground-repeat: no-repeat;\n\tbackground-position: top left;\n\tmargin: 0 auto;\n}\n.woocommerce-page .products .star-rating span {\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100px;\n\theight: 20px;\n\t/*background: url(images/woostars.png);*/\n\tbackground-repeat: no-repeat;\n\tbackground-position: bottom left;\n\toverflow: hidden;\n\tpadding: 1px;\n}\n.woocommerce-page .products .price {\n\tpadding: 5px 0;\n}\n.woocommerce-page .products .added_to_cart {\n\tdisplay: inline-block;\n\ttext-align: center;\n\ttext-transform: uppercase;\n\tpadding: 10px 20px 10px 20px;\n\tborder-radius: 4px;\n\tborder: none;\n\tcolor: #E96656;\n\tfont-size: 12px;\n\tmargin: 0;\n}\n.woocommerce-page .woocommerce-result-count {\n\tfloat: left;\n\tfont-size: 14px;\n\tline-height: 46px;\n\tmargin-top: 20px;\n}\n.woocommerce-page .woocommerce-ordering {\n\tfloat: right;\n\tmargin-top: 20px;\n}\n.woocommerce-page .product-type-simple {\n\tposition: relative;\n}\n.woocommerce-page .product .images {\n\tfloat: left;\n\twidth: 50%;\n}\n.woocommerce-page .product .entry-summary {\n\tfloat: right;\n\twidth: 50%;\n\tpadding-left: 5%;\n\tmargin-top: 0;\n}\n.woocommerce-page .product .quantity {\n\tfloat: left;\n\tmargin-bottom: 15px;\n\tdisplay: block;\n}\n.woocommerce-page .product .quantity input {\n\tborder: 1px solid #CCC;\n\twidth: 78px;\n\tpadding: 5px;\n\tborder-radius: 3px;\n}\n.woocommerce-page #content .quantity input.minus {\n\twidth: 15px;\n\theight: 15px;\n\tborder: none;\n\tmargin-left: 0px;\n\tposition: relative;\n\tfloat: left;\n\tbackground: #cccccc;\n\tpadding: 0;\n\tcolor: #FFF;\n\ttext-shadow: none;\n\tposition: absolute;\n\ttop: 15px;\n\tright: 5px;\n}\n.woocommerce-page #content .quantity input.plus {\n\twidth: 15px;\n\theight: 15px;\n\tborder: none;\n\tmargin-left: 0px;\n\tposition: relative;\n\tfloat: left;\n\tbackground: #cccccc;\n\tpadding: 0;\n\tcolor: #FFF;\n\ttext-shadow: none;\n\tposition: absolute;\n\ttop: 0;\n\tright: 5px;\n}\n.woocommerce #content .quantity, .woocommerce .quantity, .woocommerce-page #content .quantity, .woocommerce-page .quantity {\n\tposition: relative;\n}\n.woocommerce #content .quantity input.qty,\n.woocommerce .quantity input.qty,\n.woocommerce-page #content .quantity input.qty,\n.woocommerce-page .quantity input.qty {\n\theight: 30px;\n}\n.woocommerce-page .quantity.buttons_added {\n\twidth: auto;\n}\n.woocommerce-page .product .product_meta a {\n\tcolor: #e96656;\n}\n.woocommerce-page .product_title {\n\ttext-align: left;\n\tmargin-top: 0;\n}\n.woocommerce-page .product .price {\n\ttext-align: left;\n\tpadding: 30px 0;\n\tmargin-bottom: 0;\n}\n.woocommerce-page .product div[itemprop=\"description\"] {\n\tfloat: left;\n\ttext-align: justify;\n}\n.woocommerce-page .product .stock ,\n.woocommerce-page .product .cart,\n.woocommerce-page .product .product_meta {\n\tfloat: left;\n\ttext-align: left;\n\tclear: left;\n}\n.woocommerce-page .product .cart .button {\n\tmargin: 0;\n\tmargin-bottom: 25px;\n\tclear: left;\n\tfloat: left;\n}\n.woocommerce-page .product .cart .button:hover {\n\tbackground: rgb(203, 67, 50);\n\tbox-shadow: none;\n}\n.woocommerce-page .product .images .thumbnails {\n\twidth: 100%;\n}\n.woocommerce-page .product .images .thumbnails a {\n\tfloat: left;\n\tdisplay: inline-block;\n}\n.woocommerce-page .woocommerce-tabs {\n\tfloat: left;\n\twidth: 100%;\n\tmargin-top: 50px;\n}\n.woocommerce-page .woocommerce-tabs .tabs {\n\tpadding: 0;\n\tmargin: 0;\n\tborder-bottom: 2px solid #CCC;\n}\n.woocommerce-page .woocommerce-tabs .tabs li {\n\tlist-style: none;\n\tdisplay: inline-block;\n\tpadding: 10px 20px;\n\tmargin-bottom: -2px;\n}\n.woocommerce-page .woocommerce-tabs .tabs li.active {\n\tborder-bottom: 2px solid #e96656;\n}\n.woocommerce-page .woocommerce-tabs .tabs li.active a,\n.woocommerce-page .woocommerce-tabs .tabs li a:hover {\n\tcolor: #e96656;\n\ttext-decoration: none;\n}\n.woocommerce-page .woocommerce-tabs .tabs li a{\n\tcolor: rgb(64, 64, 64);\n\tfont-size: 18px;\n}\n.woocommerce-page .woocommerce-tabs .entry-content {\n\ttext-align: justify;\n\tmargin-bottom: 50px;\n\tbox-shadow: none;\n}\n.woocommerce-page h3.comment-reply-title {\n\tmin-height: auto;\n}\n.woocommerce-page .product .price {\n\tcolor: #000;\n\tline-height: 20px;\n\twidth: 100%;\n\tfloat: left;\n\theight: auto;\n\tmin-height: 40px;\n}\n.woocommerce div.product p.price {\n\tcolor: #000;\n}\n.woocommerce-page .product .price del {\n\tdisplay: block;\n\tline-height: 20px;\n}\n.woocommerce-page .product .price ins {\n\tdisplay: block;\n\tcolor: #e96656;\n\tfont-weight: bold;\n\tbackground: none;\n\tline-height: 20px;\n}\n.woocommerce-page .product .comment-form input {\n\tborder-radius: 3px;\n}\n.woocommerce-page .product .comment-form input[type=\"submit\"] {\n\tmargin-left: 0;\n}\n.woocommerce-page .product .comment-form label {\n\twidth: auto;\n\tline-height: 32px;\n\tfloat: left;\n}\n.woocommerce-page .product .comment-form .comment-form-rating label {\n\tline-height: 20px;\n}\n.woocommerce-page .product .comment-form-author label,\n.woocommerce-page .product .comment-form-email label {\n\twidth: 100px;\n}\n\n.woocommerce-page .product .comment-form .star-rating{\n\tfloat: right;\n\twidth: 100px;\n\theight: 20px;\n\t/*background: url(images/woostars.png) repeat-x left bottom;*/\n}\n.woocommerce-page .product .comment-form .star-rating span{\n\t/*background: url(images/woostars.png) repeat-x left top;*/\n\theight: 0;\n\tpadding-top: 16px;\n\toverflow: hidden;\n\tfloat: left;\n}\n.woocommerce-page .product .comment-form .hreview-aggregate .star-rating{\n\tmargin: 10px 0 0 0;\n}\n.woocommerce-page .product .comment-form #review_form #respond{\n\tposition: static;\n\tmargin: 0;\n\twidth: auto;\n\tpadding: 0 0 0;\n\tbackground: transparent none;\n\tborder: 0;\n}\n.woocommerce-page .product .comment-form #review_form #respond:after{\n\tcontent:\"\";\n\tdisplay: block;\n\tclear: both;\n}\n.woocommerce-page .product .comment-form #review_form #respond p {\n\tmargin: 0 0 10px;\n}\n.woocommerce-page .product .comment-form #review_form #respond .form-submit input{\n\tleft: auto;\n}\n.woocommerce-page .product .comment-form #review_form #respond textarea {\n\t-webkit-box-sizing: border-box;\n\t-moz-box-sizing: border-box;\n\tbox-sizing: border-box;\n\twidth: 100%;\n}\n.woocommerce-page .product .comment-form p.stars:after{\n\tcontent: \"\";\n\tdisplay: block;\n\tclear: both;\n}\n.woocommerce-page .product .comment-form p.stars span{\n\twidth: 100px;\n\theight: 20px;\n\tposition: relative;\n\tfloat: left;\n\t/*background: url(images/woostars.png) repeat-x left 0;*/\n\tmargin-left: 10px;\n}\n.woocommerce-page .product .comment-form p.stars span a {\n\tfloat: left ;\n\tposition: absolute;\n\tleft: 0;\n\ttop: 0;\n\twidth: 20px;\n\theight: 0;\n\tpadding-top: 20px;\n\toverflow: hidden;\n}\n.woocommerce-page .product .comment-form p.stars span a:hover,\n.woocommerce-page .product .comment-form p.stars span a:focus{\n\t/*background: url(images/woostars.png) repeat-x left bottom;*/\n\t-webkit-transition: initial;\n\t-moz-transition: initial;\n\t-o-transition: initial;\n\ttransition: initial;\n}\n.woocommerce-page .product .comment-form p.stars span a.active {\n\t/*background: url(images/woostars.png) repeat-x left bottom ;*/\n}\n.woocommerce-page .product .comment-form p.stars span a.star-1 {\n\twidth: 20px;\n\tz-index:10;\n}\n.woocommerce-page .product .comment-form p.stars span a.star-1:after {\n\tcontent: '';\n}\n.woocommerce-page .product .comment-form p.stars span a.star-2 {\n\twidth: 40px;\n\tz-index: 9;\n}\n.woocommerce-page .product .comment-form p.stars span a.star-2:after {\n\tcontent: '';\n}\n.woocommerce-page .product .comment-form p.stars span a.star-3 {\n\twidth: 60px;\n\tz-index: 8;\n}\n.woocommerce-page .product .comment-form p.stars span a.star-3:after {\n\tcontent: '';\n}\n.woocommerce-page .product .comment-form p.stars span a.star-4 {\n\twidth: 80px;\n\tz-index: 7;\n}\n.woocommerce-page .product .comment-form p.stars span a.star-4:after {\n\tcontent: '';\n}\n.woocommerce-page .product .comment-form p.stars span a.star-5 {\n\twidth: 100px;\n\tz-index: 6;\n}\n.woocommerce-page .product .comment-form p.stars span a.star-5:after {\n\tcontent: '';\n}\n.woocommerce-page .product .comment-form p.stars span a {\n\tborder: none;\n}\n.woocommerce-page .comment-form-rating {\n\tfloat: left;\n\twidth: 100%;\n\tmargin-top: 15px;\n}\n.woocommerce-page .product #review_form_wrapper {\n\tfloat: left;\n\twidth: 100%;\n}\n.woocommerce-page .woocommerce-tabs .commentlist {\n\tpadding: 0;\n\tmargin: 0;\n}\n.woocommerce-page .woocommerce-tabs .commentlist .comment {\n\tfloat: left;\n\tclear: left;\n\twidth: 100%;\n}\n.woocommerce-page .woocommerce-tabs .comment-text {\n\tdisplay: inline-block;\n}\n.woocommerce-page .woocommerce-tabs .description {\n\twidth: 100%;\n}\n.woocommerce-page .woocommerce-product-rating,\n.woocommerce div.product .woocommerce-product-rating {\n\tfloat: left;\n\ttext-align: left;\n\tmargin-top: 30px;\n\tmargin-bottom: 0;\n}\n.woocommerce-page .woocommerce-product-rating .star-rating {\n\tposition: relative;\n\twidth: 100px;\n\theight: 20px;\n\ttext-indent: 99999px;\n\tposition: relative;\n\toverflow: hidden;\n\t/*background: url(images/woostars.png);*/\n\tbackground-repeat: no-repeat;\n\tbackground-position: top left;\n}\n.woocommerce-page .woocommerce-product-rating .star-rating span {\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100px;\n\theight: 20px;\n\t/*background: url(images/woostars.png);*/\n\tbackground-repeat: no-repeat;\n\tbackground-position: bottom left;\n\toverflow: hidden;\n\tpadding: 1px\n}\n.woocommerce-page .woocommerce-product-rating .woocommerce-review-link,\n.woocommerce-page .woocommerce-product-rating .woocommerce-review-link span {\n\tfont-size: 11px;\n\tcolor: #eca420;\n}\n.woocommerce-page .comment-text .star-rating {\n\tposition: relative;\n\twidth: 100px;\n\theight: 20px;\n\ttext-indent: 99999px;\n\tposition: relative;\n\toverflow: hidden;\n\t/*background: url(images/woostars.png);*/\n\tbackground-repeat: no-repeat;\n\tbackground-position: top left;\n}\n.woocommerce-page .comment-text .star-rating span {\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100px;\n\theight: 20px;\n\t/*background: url(images/woostars.png);*/\n\tbackground-repeat: no-repeat;\n\tbackground-position: bottom left;\n\toverflow: hidden;\n\tpadding: 1px;\n}\n.woocommerce-page .woocommerce-tabs .comment-text {\n\twidth: 100%;\n}\n.woocommerce-page .woocommerce-tabs .comment_container {\n\tposition: relative;\n\tpadding-left: 50px;\n}\n.woocommerce-page .woocommerce-tabs .comment_container > img {\n\tposition: absolute;\n\tleft: 0;\n\ttop: 0;\n}\n.woocommerce-page .woocommerce-message {\n\tmargin: 0px 0 40px;\n\tbackground: #1e9e6b;\n\tborder-radius: 3px;\n\tcolor: #FFF;\n\tlist-style: none;\n}\n.woocommerce-page .woocommerce-message a {\n\tbackground-color: #38C28B;\n\tpadding: 6px 14px;\n\tfont-size: 12px;\n\tcolor: #FFF;\n}\n.woocommerce-page .woocommerce-error {\n\tlist-style: none;\n\tpadding: 0;\n\tmargin: 0px 0 40px;\n\tbackground: #E96656;\n\tborder-radius: 3px;\n\tcolor: #FFF;\n\tborder: none;\n\tfloat: left;\n\twidth: 100%;\n}\n.woocommerce-page .woocommerce-error a {\n\tbackground-color: #F47565;\n\tpadding: 6px 14px;\n\tfont-size: 12px;\n\tcolor: #FFF;\n}\n.woocommerce-page .woocommerce .woocommerce-error:before {\n\tcolor: #FFF;\n}\n.woocommerce-page .woocommerce-info {\n\tlist-style: none;\n\tpadding: 0;\n\tmargin: 0px 0 40px;\n\tbackground: #3ab0e2;\n\tborder-radius: 3px;\n\tcolor: #FFF;\n\tborder: none;\n\tfloat: left;\n\twidth: 100%;\n\tmargin-top: 25px !important;\n}\n.woocommerce-page .woocommerce-info a {\n\tbackground-color: #5fb8dd;\n\tpadding: 6px 14px;\n\tfont-size: 12px;\n\tcolor: #FFF;\n}\n.woocommerce-page .woocommerce-info:before {\n\tcolor: #FFF;\n}\n.woocommerce-page .woocommerce-info {\n\tfloat: left;\n\ttext-align: left;\n\tpadding-top: 30px;\n}\n.woocommerce-page .woocommerce .woocommerce-info {\n\tbackground: rgb(58, 176, 226);\n\tcolor: #FFF;\n\tborder-radius: 3px;\n\tborder: none;\n\tpadding-top: 15px;\n\tmargin-bottom: 40px;\n}\n.woocommerce-page .woocommerce .woocommerce-info a {\n\tcolor: #FFF;\n\topacity: 0.9;\n}\n.woocommerce-page .woocommerce .woocommerce-info:before {\n\tcolor: #FFFFFF;\n}\n.woocommerce-page .woocommerce input {\n\tborder-radius: 3px;\n\tpadding: 10px 5px;\n}\n.woocommerce-page .woocommerce .woocommerce-error {\n\tborder-top-color: #b81c23;\n\tborder-radius: 3px;\n\tpadding: 1em 2em 1em 3.5em!important;\n}\n.woocommerce-page .woocommerce .products .product h3 {\n\tfloat:none;\n\tcolor: #404040;\n}\n.woocommerce-page .woocommerce .added_to_cart, .woocommerce .button  {\n\tdisplay: inline-block;\n\ttext-align: center;\n\ttext-transform: uppercase;\n\tpadding: 13px 35px 13px 35px;\n\tborder-radius: 4px;\n\tmargin: 10px;\n\tborder: none;\n\tbackground: #f3f3f3;\n\tcolor: #000;\n}\n.woocommerce-page .woocommerce .add_to_cart_button, .woocommerce .checkout-button, .woocommerce .single_add_to_cart_button, .woocommerce #place_order,\n.woocommerce div.product form.cart .button {\n\tdisplay: inline-block;\n\ttext-align: center;\n\ttext-transform: uppercase;\n\tpadding: 13px 35px 13px 35px;\n\tborder-radius: 4px;\n\tmargin: 10px;\n\tborder: none;\n\tbackground: #e96656;\n\tcolor: #FFF;\n\tmargin-left: 0;\n}\n.woocommerce-page .woocommerce-tabs .tabs {\n\tborder-bottom: 1px solid #CCC;\n}\n.woocommerce-page .woocommerce .add_to_cart_button:hover, .woocommerce .checkout-button:hover, .woocommerce .single_add_to_cart_button :hover, .woocommerce #place_order:hover,\n.woocommerce div.product form.cart .button:hover {\n\tbackground:#bf3928;\n}\n.woocommerce-page .woocommerce .price del {\n\tdisplay:block;\n}\n.woocommerce-page .woocommerce .price {\n\theight:auto;\n\tline-height:normal;\n}\n.woocommerce-page .woocommerce .price ins {\n\tcolor: #000;\n\tfont-weight:bold;\n\tfont-size: 20px;\n}\n.woocommerce-page .woocommerce #coupon_code {\n\tpadding: 6px 10px;\n\tcolor: #A0A0A0;\n\tborder: 1px solid rgba(0, 0, 0, 0.1);\n\tborder-radius: 0;\n\tmargin-top: 2px;\n\tborder-radius: 5px!important;\n\tpadding: 6px;\n\tmin-width: 110px;\n}\n.woocommerce-page .woocommerce .product-name a {\n\tcolor:#404040;\n}\n.woocommerce div.product form.cart {\n\tmargin-bottom: 0\n}\n.woocommerce-page .woocommerce .cart_totals tr.cart-subtotal th,\n.woocommerce-page .woocommerce .cart_totals tr.order-total th {\n\twidth: 50%;\n}\n.woocommerce-page .woocommerce .entry-title {\n\ttext-align:left;\n}\n.woocommerce .woocommerce-info:before,\n.woocommerce-page .woocommerce-info:before,\n.woocommerce .woocommerce-error:before,\n.woocommerce-page .woocommerce-error:before {\n\tpadding: 0;\n}\n.woocommerce-page .woocommerce .checkout input,\n.woocommerce-page .woocommerce .checkout textarea,\n.woocommerce-page .woocommerce .checkout select {\n\tpadding: 12px 15% 12px 2%;\n}\n.woocommerce-page .woocommerce ul.payment_methods {\n\tpadding-left:1em;\n}\n.woocommerce-page ul.products  {\n\tmargin-top: 40px;\n\tfloat: left;\n\twidth: 100%;\n}\n.woocommerce-page .woocommerce .summary,\n.woocommerce-page .woocommerce .entry-summary,\n.woocommerce-page .woocommerce div.product .woocommerce-tabs .panel {\n\ttext-align:justify;\n}\n.woocommerce-page .woocommerce .quantity input.input-text {\n\twidth: 100px;\n\theight: 42px;\n\tmargin-right: 10px;\n}\n.woocommerce-page .woocommerce form.cart button.single_add_to_cart_button {\n\tmargin: 0px;\n}\n.woocommerce-page .woocommerce .comment-form label {\n\twidth:100%;\n}\n.woocommerce-page .woocommerce .woocommerce-message {\n\tbackground: #20AA80;\n\ttext-align: left;\n\tcolor: white;\n\tborder-radius: 3px;\n\tborder:none;\n\tfloat: left;\n\twidth: 100%;\n}\n.woocommerce-page .woocommerce .woocommerce-message a.button {\n\tmargin:0px;\n\tpadding:7px 17px;\n}\n.woocommerce-page .woocommerce .woocommerce-message:before {\n\tcolor: #fff;\n}\n.woocommerce-page .woocommerce ul.products li.product .star-rating {\n\tfont-size:inherit;\n}\n.woocommerce-page .woocommerce input[type=\"submit\"],\n.woocommerce-page #content input.button,\n.woocommerce input.button.alt, .woocommerce-page #content input.button.alt, .woocommerce-page input.button.alt {\n\tbackground: #e96656;\n\tdisplay: inline-block;\n\ttext-align: center;\n\ttext-transform: uppercase;\n\tpadding: 10px 20px 10px 20px;\n\tborder-radius: 4px;\n\tmargin: 10px;\n\tborder: none;\n\tcolor: #FFF;\n\tfont-size: 12px;\n\tmargin: 0;\n\ttext-shadow: none;\n}\n.woocommerce-page .woocommerce input[type=\"submit\"]:hover,\n.woocommerce-page #content input.button:hover,\n.woocommerce input.button.alt:hover, .woocommerce-page #content input.button.alt:hover, .woocommerce-page input.button.alt:hover {\n\tbackground: #cb4332;\n\tcolor: #FFF;\n\tbox-shadow: none;\n}\n.woocommerce-page .woocommerce .product-quantity input.qty {\n\twidth: 60px;\n\theight: 30px;\n\tmargin-right: 0;\n\tpadding: 0 0 0 5px;\n\ttext-align: left;\n}\n.woocommerce a.button.alt {\n\tbackground: #e96656;\n\tcolor: #FFF;\n}\n.woocommerce a.button.alt:hover {\n\tbackground: #cb4332;\n\tcolor: #FFF;\n}\n.woocommerce-page .woocommerce a.remove:hover {\n\tcolor: #fff !important;\n\tbackground: #e96656;\n\tline-height: 20px;\n}\n.woocommerce-page .woocommerce a.remove {\n\tcolor: #e96656 !important;\n\tline-height: 20px;\n}\n.woocommerce-page .woocommerce-info {\n\twidth: 100%;\n}\n.woocommerce-page .woocommerce-checkout .col-1,\n.woocommerce-page .woocommerce-checkout .col-2 {\n\tfloat: left;\n\twidth: 100%;\n}\n.woocommerce-page .woocommerce-checkout-review-order {\n\tclear: left;\n}\n.woocommerce-page .woocommerce .checkbox {\n\tpadding-left: 0;\n\tfloat: left;\n}\n.woocommerce-page .woocommerce .input-checkbox {\n\tmargin: 15px 0 0 10px;\n}\n.woocommerce-page .woocommerce-checkout #payment {\n\tbackground: #FAFAFA;\n}\n.woocommerce-page .woocommerce-checkout #payment div.payment_box {\n\tbackground-color: #ECECEC;\n}\n.woocommerce-page .woocommerce-checkout #payment div.payment_box:after {\n\tcontent: \"\";\n\tborder: 8px solid #ECECEC;\n\tborder-right-color: transparent;\n\tborder-left-color: transparent;\n\tborder-top-color: transparent;\n\tmargin: -13px 0 0 2em;\n}\n.woocommerce-page .woocommerce .order_details li.order {\n\tbackground: #FFFFFF;\n}\n.woocommerce-page .products a.button {\n\ttext-decoration: none;\n}\n.woocommerce-page .product .cart .button {\n\tcolor: #FFF;\n}\n.woocommerce-page .woocommerce {\n\tmargin-top: 25px;\n}\n.woocommerce-page .woocommerce .order {\n\tbackground: #FFF;\n}\n.woocommerce-page .woocommerce table.my_account_orders .order-actions .button {\n\tfont-size: 12px;\n}\n.woocommerce-page .woocommerce #payment ul.payment_methods {\n    text-align: left;\n    padding: 1em;\n    border-bottom: 1px solid #D3CED2;\n    margin: 0px;\n    list-style: outside none none;\n}\n.woocommerce-page .woocommerce #payment ul.payment_methods li {\n    line-height: 2;\n    text-align: left;\n    margin-left: 2em;\n    font-weight: 400;\n}\n.woocommerce-page .woocommerce #payment {\n    background: none repeat scroll 0% 0% #FAFAFA;\n}\n.woocommerce-page .woocommerce #payment div.payment_box {\n    position: relative;\n    width: 96%;\n    padding: 1em 2%;\n    margin: 1em 0px;\n    font-size: 0.92em;\n    border-radius: 2px;\n    line-height: 1.5;\n    background-color: #DFDCDE;\n    color: #515151;\n}\n.woocommerce-page .woocommerce #payment div.payment_box {\n    background-color: #ECECEC;\n}\n.woocommerce-page .woocommerce #payment div.payment_box p {\n\tmargin-bottom: 0;\n}\n.woocommerce-page .woocommerce #payment div.payment_box:after {\n    content: \"\";\n    position: absolute;\n\ttop: -3px;\n\tleft: 0px;\n    border-width: 8px;\n    border-style: solid;\n    border-color: transparent transparent #ECECEC;\n    -moz-border-top-colors: none;\n    -moz-border-right-colors: none;\n    -moz-border-bottom-colors: none;\n    -moz-border-left-colors: none;\n    border-image: none;\n    margin: -13px 0px 0px 2em;\n}\n.woocommerce-page .woocommerce #payment h3{\n\tpadding-left: 20px;\n}\n.woocommerce-page .woocommerce a.button {\n\tfont-size: 14px;\n\tmargin-left: 0;\n}\n.woocommerce-page .woocommerce button.button {\n\tfont-size: 12px;\n\tmargin-left: 0;\n\tpadding: 13px 35px 13px 35px;\n}\n.woocommerce button.button {\n\twidth: 100%;\n}\n.woocommerce-page .woocommerce select {\n\tcolor: #A0A0A0;\n\tborder: 1px solid rgba(0, 0, 0, 0.1);\n\tbox-sizing: border-box;\n\twidth: 100%;\n\tmargin: 0;\n\toutline: 0;\n\tline-height: 1;\n\tborder-radius: 3px;\n\tpadding: 10px 5px;\n}\n.woocommerce-page .woocommerce #order_review {\n\tclear: left;\n}\n.woocommerce-page .woocommerce .login {\n\tfloat: left;\n\twidth: 100%;\n}\n.woocommerce-page .select2-drop {\n\ttext-align: left;\n}\n.woocommerce-page .woocommerce-account .addresses .title .edit {\n\tfloat: left;\n}\n.woocommerce-page div.product .woocommerce-tabs ul.tabs li {\n\tborder: none;\n\tbackground: none;\n\tpadding-bottom: 0\n}\n.woocommerce-page div.product .woocommerce-tabs ul.tabs li.active:before {\n\tcontent: \"\";\n\tborder: none;\n}\n.woocommerce-page div.product .woocommerce-tabs ul.tabs:before {\n\tcontent: \"\";\n\tdisplay: none;\n}\n.woocommerce-page .woocommerce div.product .woocommerce-tabs ul.tabs li.active:after {\n\tcontent: '';\n\tdisplay: none;\n}\n.woocommerce div.product .woocommerce-tabs ul.tabs li:after,\n.woocommerce div.product .woocommerce-tabs ul.tabs li:before {\n\tcontent: \"\";\n\tdisplay: none;\n}\n.woocommerce div.product .woocommerce-tabs ul.tabs {\n\toverflow: visible;\n}\n.woocommerce div.product .woocommerce-tabs ul.tabs li.active {\n\tborder-bottom: 2px solid #e96656;\n\tmargin-bottom: -1px;\n}\n.woocommerce div.product .woocommerce-tabs ul.tabs li {\n\tbox-shadow: none;\n}\n.woocommerce-page .comment-form {\n\tfloat: left;\n\tfloat: left;\n\tmargin-top: 15px;\n\twidth: 100%;\n}\n.woocommerce #review_form #respond .form-submit input {\n\tbackground: #e96656;\n\tdisplay: inline-block;\n\ttext-align: center;\n\ttext-transform: uppercase;\n\tpadding: 13px 35px 13px 35px;\n\tborder-radius: 4px;\n\tmargin: 10px;\n\tborder: none;\n}\n.woocommerce #review_form #respond textarea {\n\twidth: 100%;\n\theight: 130px;\n}\n.woocommerce #reviews #comments ol.commentlist li .comment-text {\n\tmargin: 0;\n}\n.woocommerce-cart .cart-collaterals .cart_totals table {\n\tclear: left;\n}\n.woocommerce table.shop_table {\n\tclear: left;\n}\n.woocommerce #content div.product div.thumbnails a,\n.woocommerce div.product div.thumbnails a,\n.woocommerce-page #content div.product div.thumbnails a,\n.woocommerce-page div.product div.thumbnails a {\n\tmargin-bottom: 1em;\n}\n.woocommerce .upsells.products ul,\n.woocommerce .upsells.products ul.products {\n\tfloat: left;\n\tclear: left;\n}\n/**/\n.woocommerce .woocommerce-message:before, .woocommerce-page .woocommerce-message:before {\n\tcontent: \"\\2713\";\n\tpadding: 0;\n}\n.woocommerce .shipping_calculator h2 a {\n\tfont-size: 18px;\n}\n/**/\n.woocommerce-page .upsells.products ul li.product,\n.woocommerce-page .upsells.products ul.products li.product {\n\tfloat: left;\n\tmargin: 0 3.8% 2.992em 0;\n\tpadding: 0;\n\tposition: relative;\n\twidth: 22.05%;\n\tclear: none;\n}\n.woocommerce .upsells.products ul li.product:nth-child(4),\n.woocommerce-page ul.products li.product:nth-child(4) {\n\tmargin-right: 0;\n}\n.woocommerce .upsells.products ul li.product:nth-child(4+1),\n.woocommerce-page ul.products li.product:nth-child(4+1) {\n\tclear: left;\n}\n/*woocommerce pagination*/\n.woocommerce nav.woocommerce-pagination {\n\tfloat: left;\n\twidth: 100%;\n\tpadding-bottom: 30px;\n}\n.woocommerce .woocommerce-pagination ul.page-numbers .current:before,\n.woocommerce-page .woocommerce-pagination ul.page-numbers .current:before {\n\tcontent: \"\";\n\tdisplay: none;\n}\n.woocommerce #content nav.woocommerce-pagination ul,\n.woocommerce nav.woocommerce-pagination ul,\n.woocommerce-page #content nav.woocommerce-pagination ul,\n.woocommerce-page nav.woocommerce-pagination ul,\n.woocommerce nav.woocommerce-pagination ul {\n\tborder: none;\n}\n.woocommerce #content nav.woocommerce-pagination ul li,\n.woocommerce-page #content nav.woocommerce-pagination ul li,\n.woocommerce-page nav.woocommerce-pagination ul li\n.woocommerce nav.woocommerce-pagination ul li {\n\tborder: none;\n\tmargin: 0 3px;\n}\n.woocommerce nav.woocommerce-pagination ul li a,\n.woocommerce nav.woocommerce-pagination ul li span {\n\twidth: 32px;\n\tmin-width: 32px;\n\tborder: none;\n\tborder-radius: 4px;\n\tbackground: rgb(236, 236, 236);\n\tcolor: #000;\n}\n.woocommerce #content nav.woocommerce-pagination ul li span.current,\n.woocommerce nav.woocommerce-pagination ul li span.current,\n.woocommerce-page #content nav.woocommerce-pagination ul li span.current,\n.woocommerce-page nav.woocommerce-pagination ul li span.current,\n.woocommerce nav.woocommerce-pagination ul li span.current,\n.woocommerce nav.woocommerce-pagination ul li a:hover,\n.woocommerce-page nav.woocommerce-pagination ul li a:hover,\n.woocommerce-page #content nav.woocommerce-pagination ul li a:hover,\n.woocommerce nav.woocommerce-pagination ul li a:hover,\n.woocommerce #content nav.woocommerce-pagination ul li a:hover {\n\tbackground: rgb(233, 102, 86);\n\tcolor: #FFF;\n}\n.woocommerce div.product form.cart label {\n\tcolor: #404040;\n}\n.woocommerce p.stars a:before,\n.woocommerce p.stars a:hover~a:before {\n\tcontent: \"\";\n\tdisplay: none;\n}\n\n@media (max-width: 1200px) {\n\n\t.header-content-wrap{\n\t\tpadding: 50px 0 50px;\n\t}\n\n}\n\n@media (max-width: 992px) {\n\n\t.woocommerce-page .woocommerce .cart-collaterals .cart_totals {\n\t\twidth: 100%;\n\t}\n\t.woocommerce-page .products .product > a:first-child {\n/*\t\tmin-height: 325px; */\n\t}\n\t.large-container {\n\t\twidth: 100%;\n\t}\n\n\t.nameHead h1 {\n\t\tfont-size: 80px;\n\t}\n\n}\n@media (max-width: 767px) {\n\t.woocommerce-page .upsells.products ul li.product,\n\t.woocommerce-page .upsells.products ul.products li.product{\n\t\twidth: 48%;\n\t\tfloat: left;\n\t\tclear: both;\n\t\tmargin: 0 0 2.992em;\n\t}\n\t.woocommerce .upsells.products ul li.product:nth-child(4),\n\t.woocommerce-page ul.products li.product:nth-child(4) {\n\t\tmargin: 0 0 2.992em;\n\t}\n\t.woocommerce .upsells.products ul li.product:nth-child(4+1),\n\t.woocommerce-page ul.products li.product:nth-child(4+1) {\n\t\tclear: none;\n\t}\n\t.woocommerce .upsells.products ul li.product:nth-child(even),\n\t.woocommerce-page ul.products li.product:nth-child(even) {\n\t\tmargin-right: 0;\n\t\tfloat: right;\n\t}\n\t.woocommerce .upsells.products ul li.product:nth-child(odd),\n\t.woocommerce-page ul.products li.product:nth-child(odd) {\n\t\tclear: left;\n\t}\n\t.listpost-content-wrap-large {\n\t\tposition: relative;\n\t}\n\t.menu-align-center .responsive-logo > a {\n\t\tfloat: left;\n\t}\n}\n@media (max-width: 600px) {\n\n\t.woocommerce-page .product .images {\n\t\twidth: 100%;\n\t}\n\t.woocommerce-page .product .entry-summary {\n\t\twidth: 100%;\n\t\tpadding-left: 0%;\n\t\tmargin-top: 50px;\n\t}\n\t.woocommerce-page .woocommerce-tabs .tabs li a {\n\t\tfont-size: 14px;\n\t}\n\t.woocommerce-page .woocommerce-tabs .tabs li {\n\t\tpadding: 10px 10px;\n\t}\n\t.listpost-content-wrap-large {\n\t\tposition: relative;\n\t}\n\t.listpost-content-wrap-large {\n\t\tpadding: 20px 0px 0px 0px;\n\t}\n\tbody {\n\t\tposition: initial !important;\n\t}\n\t.entry-meta-large {\n\t\tposition: relative;\n\t\tfloat: left;\n\t\twidth: 100%;\n\t}\n\t.entry-footer-large {\n\t\tpadding-right: 0;\n\t}\n}\n@media (max-width: 480px) {\n\n\t.woocommerce ul.products li.product, .woocommerce-page ul.products li.product {\n\t\twidth: 100%;\n\t}\n\t.woocommerce-page .woocommerce-result-count {\n\t\ttext-align: center;\n\t\twidth: 100%;\n\t\tmargin-bottom: 0px;\n\t}\n\t.woocommerce-page .woocommerce-ordering {\n\t\tfloat: none;\n\t}\n\t.woocommerce-page .products .product > a:first-child {\n\t\twidth: 240px;\n\t}\n\t.woocommerce-page .woocommerce-tabs .tabs li {\n\t\twidth: 100%;\n\t}\n\t.woocommerce-page .woocommerce-tabs .tabs li {\n\t\twidth: 100%;\n\t\tborder-bottom: 2px solid #CCC;\n\t}\n\t.woocommerce-page .woocommerce-tabs .tabs {\n\t\tborder-bottom: 0;\n\t}\n\t.woocommerce-page .woocommerce-tabs .comment_container {\n\t\tposition: relative;\n\t\tpadding-left: 0px;\n\t\tpadding-top: 50px;\n\t}\n\t.woocommerce-page .comment-text .star-rating {\n\t\twidth: 100%;\n\t\tmargin-bottom: 5px;\n\t\tfloat: left;\n\t}\n\t.woocommerce-page .products .product > a:first-child {\n\t\twidth: 100%;\n\t}\n\t/* cart page */\n\t.woocommerce-page .woocommerce .product-quantity input.qty {\n\t\twidth: 45px;\n\t}\n\t.woocommerce td.product-quantity {\n\t\tmin-width: 40px;\n\t}\n\t.woocommerce-page .woocommerce input[type=\"submit\"] {\n\t\tfont-size: 10px;\n\t}\n\t.woocommerce-page .woocommerce .cart_totals tr.cart-subtotal th {\n\t\tfont-size: 12px;\n\t}\n\t.woocommerce-cart .cart-collaterals .cart_totals tr th {\n\t\tfont-size: 12px;\n\t}\n\t.woocommerce-cart .cart-collaterals .cart_totals table td,\n\t.woocommerce-cart .cart-collaterals .cart_totals table td span,\n\t.woocommerce-cart .cart-collaterals .cart_totals table td a {\n\t\tfont-size: 12px;\n\t}\n\t.woocommerce form .form-row label {\n\t\tfont-size: 12px;\n\t}\n\t.woocommerce-page .woocommerce .woocommerce-info,\n\t.woocommerce-page .woocommerce .woocommerce-info a {\n\t\tfont-size: 12px;\n\t}\n\t.woocommerce-checkout-payment label {\n\t\tfont-size: 14px;\n\t}\n\t.woocommerce-page .woocommerce #payment div.payment_box p {\n\t\tfont-size: 12px;\n\t\tline-height: 16px;\n\t\ttext-align: justify;\n\t}\n\t.woocommerce form .form-row {\n\t\twidth: 100%;\n\t}\n\t.woocommerce-page .woocommerce .order_details li {\n\t\twidth: 100%;\n\t\tborder-bottom: 1px dashed #d3ced2;\n\t\tborder-right: none;\n\t\tpadding: 0 0 5px 0;\n\t\tmargin-bottom: 5px;\n\t\tmargin-top: 5px\n\t}\n\t.woocommerce-page address {\n\t\tfont-size: 12px;\n\t}\n\t.woocommerce-page .woocommerce-error,\n\t.woocommerce-page .woocommerce-message,\n\t.woocommerce-page .woocommerce-error li {\n\t\tfont-size: 12px;\n\t}\n\t.woocommerce-page .woocommerce .cart-collaterals .cart_totals a {\n\t\twidth: 100%;\n\t\tmargin-right: 0;\n\t}\n\t.woocommerce-page .woocommerce .checkbox {\n\t\tfont-size: 16px;\n\t}\n\t.woocommerce-page .myaccount_address {\n\t\tfont-size: 12px;\n\t}\n\t.woocommerce-page #content .quantity input.minus,\n\t.woocommerce-page #content .quantity input.plus {\n\t\tdisplay: none;\n\t}\n\t.woocommerce-page .upsells.products ul li.product,\n\t.woocommerce-page .upsells.products ul.products li.product{\n\t\twidth: 100%;\n\t}\n\n}\n/* [end] woocommerce */\n\n/* bbpress style [version 2.5.8] */\n\n.bbpress #subscription-toggle {\n\tfloat: right;\n}\n\n.bbpress .bbp-breadcrumb {\n\tmargin: 10px 0;\n}\n\n#subscription-toggle {\n/**\tmargin: 10px 0;\t*/\n}\n\n#bbpress-forums div.bbp-template-notice img.avatar {\n\tmargin-bottom: 2px;\n}\n\ndiv.bbp-template-notice.info {\n\tborder: none;\n\tbackground-color: #f0f8ff;\n\tpadding: 1px 5px;\n}\n\ndiv.bbp-template-notice, div.indicator-hint {\n\tborder: none;\n\tpadding: 1px 5px;\n\tbackground-color: #FFF7D6;\n}\n\n#bbpress-forums fieldset.bbp-form label {\n\tline-height: 30px;\n}\n\ndiv.bbp-template-notice a {\n\tcolor: #008ed6;\n\ttext-decoration: none;\n}\n\n.bbp-pagination {\n\tfloat: left;\n\twidth: 100%;\n\tmargin-bottom: 0px;\n\tmargin-top: 10px;\n}\n\n#bbpress-forums li.bbp-header {\n\tbackground: #FBFBFB;\n\tpadding: 10px 0;\n}\n\n#bbpress-forums #bbp-search-form #bbp_search {\n\tpadding: 2px;\n    -webkit-border-radius: 3px;\n    -moz-border-radius: 3px;\n    border-radius: 3px;\n}\n\n#bbpress-forums .bbp-forum-info .bbp-forum-content,\n#bbpress-forums p.bbp-topic-meta {\n\tfont-size: 11px;\n\tline-height: 16px;\n}\n\n#bbpress-forums div.bbp-the-content-wrapper input {\n\twidth: auto;\n}\n\n#bbpress-forums fieldset.bbp-form input {\n\tpadding: 5px;\n}\n\n#bbpress-forums li.bbp-header,\n#bbpress-forums li.bbp-footer {\n\tborder-top: none;\n}\n\n#bbpress-forums li.bbp-header {\n\tbackground: none;\n}\n\n#bbpress-forums div.odd,\n#bbpress-forums ul.odd {\n\tbackground: none;\n}\n\n#bbpress-forums input[type=\"submit\"] {\n    padding: 5px 30px 5px 30px;\n}\n\n#bbpress-forums li.bbp-header,\n#bbpress-forums li.bbp-footer {\n\tbackground: none;\n}\n\n#bbpress-forums li.bbp-header {\n\tborder-bottom: 2px solid #ececec;\n}\n\n#bbpress-forums li.bbp-footer {\n\tborder-top: 3px solid #ececec;\n}\n\n.bbp-breadcrumb,\n.bbp-breadcrumb a,\n.bbp-breadcrumb p {\n    font-weight: 400;\n    color: #666666;\n    font-size: 16px;\n    line-height: 26px;\n}\n\n.bbp-topics-front ul.super-sticky,\n.bbp-topics ul.super-sticky,\n.bbp-topics ul.sticky,\n.bbp-forum-content ul.sticky {\n    background-color: #f9f9f9 !important;\n}\n\n#bbpress-forums ul.bbp-lead-topic,\n#bbpress-forums ul.bbp-topics,\n#bbpress-forums ul.bbp-forums,\n#bbpress-forums ul.bbp-replies,\n#bbpress-forums ul.bbp-search-results {\n    font-weight: 400;\n    color: #666666;\n    font-size: 16px;\n    line-height: 26px;\n}\n\n#bbpress-forums .bbp-forum-info .bbp-forum-content,\n#bbpress-forums p.bbp-topic-meta {\n    font-weight: 400;\n    color: #666666;\n    font-size: 16px;\n    line-height: 26px;\n}\n\n.bbp-forum-title,\n.bbp-forum-title:visited {\n\tfont-size: 18px;\n\tline-height: 22px;\n\tfont-weight: 700;\n\tcolor: #000;\n\tmargin-bottom: 15px;\n\tfloat: left;\n}\n\n.bbp-forum-title:hover {\n\ttext-decoration: none;\n}\n\n.bbp-forum-title:after {\n    content: \"\";\n    height: 2px;\n    width: 80px;\n    display: block;\n    background: #008ed6;\n    margin-top: 5px;\n}\n\n#bbpress-forums li.bbp-body ul.forum,\n#bbpress-forums li.bbp-body ul.topic {\n\tborder-top: 1px solid #eee;\n\tpadding: 20px 5px !important;\n}\n\n.bbp-forum-freshness p,\n.bbp-forum-freshness a,\n.bbp-forum-freshness span {\n\tfont-size: 14px;\n\tcolor: #666666;\n\tline-height: 18px;\n\tfont-style: italic;\n}\n\n.bbp-forum-freshness a:hover {\n\ttext-decoration: underline;\n}\n\n#bbpress-forums p.bbp-topic-meta img.avatar,\n#bbpress-forums ul.bbp-reply-revision-log img.avatar,\n#bbpress-forums ul.bbp-topic-revision-log img.avatar,\n#bbpress-forums div.bbp-template-notice img.avatar,\n#bbpress-forums .widget_display_topics img.avatar,\n#bbpress-forums .widget_display_replies img.avatar {\n\tmargin-bottom: 0;\n}\n\n#bbpress-forums .bbp-forum-info .bbp-forum-content,\n#bbpress-forums p.bbp-topic-meta {\n\tmargin: 0;\n\tfont-size: 14px;\n\tline-height: 24px;\n\tclear: left;\n}\n\n#bbpress-forums li {\n    font-size: 14px;\n}\n\n#bbpress-forums p.bbp-topic-meta,\n#bbpress-forums p.bbp-topic-meta span {\n\tfont-size: 14px;\n\tline-height: 18px;\n\ttext-align: center;\n}\n\n.bbp-topic-started-by {\n\tfloat: left;\n}\n\ndiv.bbp-template-notice p,\ndiv.bbp-template-notice a {\n\tfont-size: 12px;\n\tline-height: 16px;\n}\n\n.bbp-topic-freshness,\n.bbp-topic-freshness a {\n\tfont-size: 14px;\n\tline-height: 18px;\n\ttext-align: center;\n}\n\n.bbp-topic-freshness a {\n    font-style: italic;\n    color: #666666;\n}\n\na.bbp-author-name:hover,\n.bbp-topic-freshness a:hover {\n\ttext-decoration: underline;\n}\n\n#bbpress-forums ul.bbp-lead-topic,\n#bbpress-forums ul.bbp-topics,\n#bbpress-forums ul.bbp-forums,\n#bbpress-forums ul.bbp-replies,\n#bbpress-forums ul.bbp-search-results {\n\tborder: none;\n}\n\n#bbpress-forums .bbp-author-name {\n    font-size: 14px;\n    line-height: 24px;\n    font-style: italic;\n    color: #666666;\n}\n\n#bbpress-forums fieldset.bbp-form {\n\tborder: none;\n\tpadding: 0;\n\tmargin-bottom: 0;\n}\n\n#bbpress-forums div.bbp-the-content-wrapper textarea.bbp-the-content {\n\tborder: 1px solid #E7E7E7;\n\t-webkit-border-radius: 0 0 3px 3px;\n\t-moz-border-radius: 0 0 3px 3px;\n\tborder-radius: 0 0 3px 3px;\n\tfont-size: 14px;\n}\n\n#bbpress-forums div.bbp-the-content-wrapper div.quicktags-toolbar {\n\tborder: 1px solid #E7E7E7;\n\t-webkit-border-radius: 3px 3px 0 0;\n\t-moz-border-radius: 3px 3px 0 0;\n\tborder-radius: 3px 3px 0 0;\n\tborder-bottom: none;\n}\n\n#bbpress-forums div.bbp-the-content-wrapper div.quicktags-toolbar {\n\tborder: 1px solid #E7E7E7;\n\t-webkit-border-radius: 3px 3px 0 0;\n\t-moz-border-radius: 3px 3px 0 0;\n\tborder-radius: 3px 3px 0 0;\n\tborder-bottom: none;\n}\n\nli.bbp-forum-freshness,\nli.bbp-topic-freshness {\n\ttext-align: center;\n\tfloat: left;\n\twidth: 25%;\n}\n\n#bbpress-forums div.bbp-the-content-wrapper div.quicktags-toolbar input {\n    padding: 5px;\n    box-shadow: none;\n    background-color: #FBFBFB;\n    border: 1px solid #E7E7E7;\n}\n\n#bbpress-forums div.bbp-the-content-wrapper div.quicktags-toolbar input:hover {\n\tcolor: #e96656;\n}\n\n#bbpress-forums fieldset.bbp-form input {\n\t-webkit-border-radius: 3px;\n\t-moz-border-radius: 3px;\n\tborder-radius: 3px;\n}\n\n#bbpress-forums fieldset.bbp-form select {\n\tcolor: #666;\n\tborder: 1px solid #dedede;\n\t-webkit-border-radius: 3px;\n\t-moz-border-radius: 3px;\n\tborder-radius: 3px;\n\tpadding: 5px;\n}\n\n.bbp-topics-front ul.super-sticky,\n.bbp-topics ul.super-sticky,\n.bbp-topics ul.sticky,\n.bbp-forum-content ul.sticky {\n\tbackground: red;\n}\n\n#bbpress-forums div.bbp-topic-tags {\n\tfloat: left;\n\tmargin-bottom: 15px;\n\twidth: 100%;\n}\n\n#bbpress-forums .bbp-topic-description a {\n    font-size: 12px;\n    color: #666;\n    font-style: italic;\n}\n\n#bbpress-forums .bbp-topic-description a:hover {\n\ttext-decoration: underline;\n}\n\n#bbpress-forums fieldset.bbp-form legend {\n    padding: 5px 0;\n}\n\ndiv.bbp-forum-header, div.bbp-topic-header, div.bbp-reply-header, li.bbp-body div.hentry {\n\tpadding: 8px 0;\n}\n\n#bbpress-forums div.bbp-reply-header {\n    background: none;\n}\n\n#bbpress-forums .bbp-admin-links {\n\tcolor: transparent;\n}\n\n#bbpress-forums .bbp-admin-links a:hover {\n\tcolor: #008ed6;\n}\n\n.bbp-forum-header a.bbp-forum-permalink,\n.bbp-topic-header a.bbp-topic-permalink,\n.bbp-reply-header a.bbp-reply-permalink {\n\tfloat: right;\n\tmargin-left: 10px;\n\tcolor: #666;\n\tfont-size: 12px;\n\tline-height: 32px;\n}\n\n.bbp-body a.bbp-topic-permalink {\n    font-size: 20px;\n    line-height: 22px;\n    color: #404040;\n    position: relative;\n}\n\n.bbp-body a.bbp-topic-permalink:hover {\n\tcolor: #e96656;\n}\n\n.bbp-body .bbp-topic-permalink:after {\n    position: absolute;\n    margin: auto;\n    z-index: 1;\n    content: \"\";\n    width: 50px;\n    height: 2px;\n    background: #e96656;\n    bottom: -4px;\n    left: 0;\n}\n\n#bbpress-forums #bbp-user-wrapper h2.entry-title {\n\tfont-size: 30px;\n\tline-height: 34px;\n}\n\n#bbpress-forums #bbp-single-user-details #bbp-user-navigation li.current a {\n\tbackground: #008ED6;\n\topacity: 0.8;\n\tcolor: #FFF;\n}\n\n#bbpress-forums #bbp-your-profile fieldset fieldset.password span.description {\n    line-height: 18px;\n}\n\n#bbpress-forums .bbp-forum-description .bbp-author-name {\n\tfont-size: 12px;\n}\n\n.bbp-pagination-count {\n    float: left;\n    border: 1px solid transparent;\n    font-size: 12px;\n}\n\n.bbp-topic-tags a {\n    color: #949494;\n    font-style: italic\n}\n\n.bbp-topic-tags a:hover {\n\tcolor: #e96656;\n}\n\n#bbpress-forums div.bbp-topic-author a.bbp-author-name,\n#bbpress-forums div.bbp-reply-author a.bbp-author-name {\n    clear: left;\n    display: inline-block;\n    color: #e96656;\n}\n\n.bbp-reply-post-date {\n\tfont-size: 12px;\n}\n\n.bbp-template-notice.error strong {\n\tfont-size: 12px;\n}\n\n.bbp-body>ul:nth-child(4n) .bbp-forum-title:after {\n    content: \"\";\n    background: #34d293;\n}\n\n.bbp-body>ul:nth-child(4n+1) .bbp-forum-title:after {\n    content: \"\";\n    background: #3ab0e2;\n}\n\n.bbp-body>ul:nth-child(4n+2) .bbp-forum-title:after {\n    content: \"\";\n    background: #f7d861;\n}\n\n.bbp-body>ul:nth-child(4n+3) .bbp-forum-title:after {\n    content: \"\";\n    background: #e96656;\n}\n\n.bbp-body>ul:nth-child(4n) .bbp-topic-permalink:after {\n    content: \"\";\n    background: #34d293;\n}\n\n.bbp-body>ul:nth-child(4n+1) .bbp-topic-permalink:after {\n    content: \"\";\n    background: #3ab0e2;\n}\n\n.bbp-body>ul:nth-child(4n+2) .bbp-topic-permalink:after {\n    content: \"\";\n    background: #f7d861;\n}\n\n.bbp-body>ul:nth-child(4n+3) .bbp-topic-permalink:after {\n    content: \"\";\n    background: #e96656;\n}\n\n.bbp-meta {\n    webkit-border-radius: 3px;\n    -moz-border-radius: 3px;\n    border-radius: 3px;\n    padding: 0px 5px;\n    border-bottom: 1px solid #F5F5F5;\n    float: left;\n    width: 100%;\n}\n\nspan.bbp-admin-links a {\n\tcolor: #666666;\n}\n\nspan.bbp-admin-links a:hover {\n\tcolor: #e96656 !important;\n}\n\n#favorite-toggle a,\n#subscription-toggle a {\n\tcolor: #666;\n    font-style: italic;\n}\n\n#favorite-toggle a:hover,\n#subscription-toggle a:hover {\n\tcolor: #e96656;\n}\n\n#bbpress-forums #bbp-user-wrapper h2.entry-title {\n    font-size: 1.4em;\n    margin: 0;\n    padding-top: 0;\n    clear: none;\n    padding-bottom: 0;\n}\n\n#bbpress-forums #bbp-user-wrapper h2.entry-title:before {\n    position: absolute;\n    margin: auto;\n    z-index: 1;\n    content: \"\";\n    width: 10%;\n    height: 2px;\n    background: #e96656;\n    bottom: 0px;\n    left: 0;\n}\n\n.bbp-user-section {\n\tmargin-top: 20px;\n}\n\n#bbpress-forums #bbp-single-user-details #bbp-user-navigation a {\n    background: none !important;\n\tcolor: #666;\n\t-webkit-transition: all 0s;\n\t-moz-transition: all 0s;\n\t-o-transition: all 0s;\n\ttransition: all 0s;\n}\n\n#bbpress-forums #bbp-user-wrapper ul.bbp-topics {\n\tclear: left;\n}\n\n.bbp-topic-started-in a {\n\tfont-size: 12px;\n\tcolor: #666;\n\tfont-style: italic;\n}\n\n.bbp-topic-started-in a:hover {\n\ttext-decoration: underline;\n}\n\n#bbpress-forums #bbp-user-wrapper ul.bbp-replies {\n\tclear: left;\n}\n\n#bbpress-forums li.bbp-body .bbp-meta .bbp-header {\n\tfont-size: 13px;\n\tclear: left;\n\tfloat: left;\n}\n\n#bbpress-forums li.bbp-body .bbp-meta .bbp-header .bbp-topic-permalink {\n\tfont-size: 13px;\n\tfont-style: italic;\n}\n\n#bbpress-forums li.bbp-body .bbp-meta .bbp-header .bbp-topic-permalink:after {\n\tcontent: \"\";\n\tdisplay: none\n}\n\n#bbpress-forums li.bbp-body .bbp-meta .bbp-reply-post-date {\n\tfloat: left;\n}\n\n#bbpress-forums fieldset.bbp-form legend {\n    font-size: 20px;\n    line-height: 22px;\n    color: #404040;\n    font-family: 'Montserrat', Helvetica, sans-serif;\n    font-weight: 400;\n    position: relative;\n    margin-bottom: 30px;\n    margin-top: 50px;\n    float: left;\n}\n\n#bbpress-forums fieldset.bbp-form legend:before {\n    position: absolute;\n    margin: auto;\n    z-index: 1;\n    content: \"\";\n    width: 10%;\n    height: 2px;\n    background: #e96656;\n    bottom: -5px;\n    left: 0;\n}\n\n#bbpress-forums .is-favorite a {\n\tcolor: #e96656;\n}\n\n#bbpress-forums .bbp-reply-title h3 {\n\tfloat: left;\n}\n\n#bbpress-forums .bbp-reply-title h3 a {\n\tfont-size: 16px;\n\tfont-style: italic;\n}\n\n#bbpress-forums .bbp-reply-title h3 a.bbp-topic-permalink:after {\n\tcontent: \"\";\n\tdisplay: none;\n}\n\n#bbpress-forums div.bbp-forum-header {\n\tbackground: none;\n\tpadding-bottom: 0;\n}\n\n#bbpress-forums div.bbp-forum-header .bbp-forum-title {\n\tpadding-left: 5px;\n}\n\n#bbpress-forums div.bbp-topic-header {\n\tbackground: none;\n}\n\n #bbpress-forums div.bbp-topic-title h3 {\n \tfloat: left;\n \tpadding-left: 5px;\n }\n\n#bbpress-forums div.bbp-topic-header .bbp-meta .bbp-topic-permalink {\n    float: right;\n    margin-left: 10px;\n    color: #666;\n    font-size: 12px;\n    line-height: 32px;\n}\n\n#bbpress-forums div.bbp-topic-header .bbp-meta .bbp-topic-permalink:after {\n\tcontent: \"\";\n\tdisplay: none;\n}\n\n#bbpress-forums div.bbp-topic-header .bbp-topic-title .bbp-topic-title-meta {\n    float: left;\n    margin-left: 5px;\n    line-height: 33px;\n}\n\n#bbpress-forums div.bbp-forum-header .bbp-forum-title:after {\n\tcontent: \"\";\n\tdisplay: none;\n}\n\nli.bbp-body div.hentry {\n\tpadding: 0;\n}\n\n#bbpress-forums li.bbp-body div.hentry .bbp-forum-content {\n\tpadding-top: 0;\n}\n\n/* [end] bbpress */\n\n\n/* Easy Digital Downloads style [version 2.4.9] */\n.edd_download{\n\tfloat:left;\n\twidth: 33%;\n}\n.edd_download:nth-child(4n+1){\n\tclear:both;\n}\n.edd_download_excerpt p{\n\ttext-align:justify;\n}\n.edd-submit.button.red span,\n.edd-submit.button.blue span,\n.edd-submit.button.green span,\n.edd-submit.button.orange span,\n.edd-submit.button.dark-gray span {\n\tcolor: #FFF;\n}\n\n#edd-purchase-button,\n.edd-submit,\ninput[type=submit].edd-submit {\n\tborder: none;\n}\n\n#edd_checkout_cart td,\n#edd_checkout_cart thead,\n#edd_checkout_cart th.edd_cart_total,\n#edd_checkout_cart th:last-child,\n#edd_checkout_cart .edd_checkout_cart_item_title {\n\tfont-weight: 400;\n\tcolor: #666666;\n\tfont-size: 14px;\n\tline-height: 18px;\n\tborder: none;\n}\n\n#edd_checkout_cart a,\n.edd_discount_link a,\n.edd-lost-password a {\n\tcolor: #f73f2e;\n}\n\n#edd_login_form input[type=\"submit\"] {\n\tmargin-left: 0;\n}\n\n#edd_checkout_form_wrap select.edd-select {\n    display: block;\n    width: 70%;\n}\n\n.edd-cart-added-alert {\n    color: #D9534F;\n    width: 100%;\n}\n\n.edd_errors.edd-alert.edd-alert-error,\n.edd-alert-error {\n\tbackground-color: #E86A6A;\n    color: #FFF;\n    border: none;\n    border-bottom: 3px solid #C84E54;\n    -webkit-border-radius: 3px;\n    -moz-border-radius: 3px;\n    border-radius: 3px;\n    border: none;\n}\n\n.edd-alert-error,\np.edd-alert-error,\n.edd-alert-error a {\n\tcolor: #FFF;\n}\n\n.edd-alert-error a:hover {\n\ttext-decoration: underline;\n}\n\n#edd_checkout_form_wrap fieldset p:last-child {\n\tcolor: rgba(255,255,255,0.8);\n}\n\n.edd_download_inner {\n    background: #ffffff;\n    margin: 0 15px;\n    padding: 15px;\n    transition: all ease 0.55s;\n    list-style: none;\n    text-align: center;\n    margin-bottom: 30px;\n}\n\n.edd_download_inner:hover {\n    border-bottom-color: #008ed6;\n}\n\n.edd_download_title a,\n.edd_download_title {\n    font-size: 1em;\n    color: #404040;\n    font-weight: bold;\n    line-height: 24px;\n}\n\n.edd_download_title{\n\tmargin-top: 10px;\n\tmargin-bottom: 10px;\n}\n\n#edd_checkout_form_wrap legend,\n#edd_login_form legend,\n.edd_form legend {\n\tborder-bottom: 0;\n}\n\n#edd_profile_billing_address_wrap input,\n#edd_profile_billing_address_wrap select {\n    margin-bottom: 10px;\n}\n\n#edd_new_user_pass1,\n#edd_profile_editor_form select,\n#edd_profile_editor_form input[type=\"text\"],\n#edd_profile_editor_form input[type=\"text\"],\n#edd_profile_editor_form input[type=\"email\"],\n#edd_profile_editor_form input[type=\"url\"],\n#edd_profile_editor_form input[type=\"password\"],\n#edd_profile_editor_form input[type=\"search\"],\n#edd_profile_editor_form textarea {\n\tmargin-bottom: 10px;\n\tpadding: 12px;\n    color: #555;\n    border: 1px solid rgba(0, 0, 0, 0.1);\n    border-radius: 3px;\n    width: 221px;\n}\n\n#edd_profile_editor_form input[type=\"submit\"] {\n\tmargin-left: 0;\n}\n\n#edd_profile_billing_address_wrap legend {\n\tmargin-top: 50px;\n}\n\n#edd_login_form legend {\n\tmargin-top: 50px;\n}\n\n#edd_address_country,\n#edd_display_name {\n\twidth: 192px;\n}\n\n#edd_user_history,\n#edd_checkout_cart,\n#edd_checkout_form_wrap fieldset,\n#edd_discounts_list {\n    border: 1px solid rgba(0,0,0,.1);\n    margin: 0 -1px 24px 0;\n    text-align: left;\n    width: 100%;\n    border-collapse: separate;\n    border-radius: 5px;\n}\n\n#edd_user_history th,\n#edd_checkout_cart .edd_cart_header_row th {\n\tbackground: transparent;\n\tborder: none;\n\tpadding: 9px 12px;\n}\n\n#edd_user_history td,\n#edd_checkout_cart td {\n    border-top: 1px solid rgba(0,0,0,.1);\n    padding: 6px 12px;\n    border-bottom: none;\n}\n\n.edd_cart_footer_row,\n#edd_checkout_cart th.edd_cart_total,\n#edd_checkout_cart tfoot th:last-child {\n    border-top: 1px solid rgba(0,0,0,.1);\n}\n\n#edd_checkout_cart .edd_checkout_cart_item_title,\n#edd_checkout_cart td  {\n\tfont-size: 16px;\n\tline-height: 22px;\n}\n\n#edd_checkout_cart td {\n    border-left: none;\n    border-right: none;\n}\n\n#edd_discounts_list .edd_discount {\n    border-top: 1px solid rgba(0,0,0,.1);\n    padding: 6px 12px;\n    border-bottom: none;\n    list-style: none;\n}\n\n#edd_discounts_list .edd_discount:nth-child(1) {\n\tborder-top: none;\n}\n\n#edd_checkout_form_wrap input[type=email],\n#edd_checkout_form_wrap input[type=text] {\n    border: 1px solid rgba(0, 0, 0, 0.1);\n    border-radius: 5px;\n\twidth: 100%;\n    padding: 12px;\n}\n\n#edd_profile_editor_form {\n}\n\n#edd_profile_editor_form legend {\n    margin-top: 30px;\n    margin-bottom: 20px;\n    display: block;\n    font-size: 120%;\n    line-height: 1;\n    font-weight: 700;\n    width: 100%;\n    color: #333;\n}\n\n.edd_price_options.edd_multi_mode ul {\n\tborder: 1px solid rgba(0,0,0,.1);\n\tmargin: 0 -1px 24px 0;\n\ttext-align: left;\n\twidth: 100%;\n\tborder-collapse: separate;\n\tborder-radius: 5px;\n}\n\n.edd_price_options.edd_multi_mode ul li {\n\tborder-top: 1px solid rgba(0,0,0,.1);\n    padding: 6px 12px;\n}\n\n.edd_price_options.edd_multi_mode ul li:nth-child(1) {\n\tborder-top: none;\n}\n\n.edd-image-wrap {\n\tfloat: right;\n\twidth: 100%;\n\tmax-width: 50%;\n\tpadding: 0 0 15px 15px;\n}\n\n.edd-image-wrap img {\n    width: 100%;\n    height: auto;\n}\n\n/* WP MegaMenu */\n.wr-megamenu-container .preview-text,\n.wr-megamenu-container .preview-text p {\n    font-size: 14px;\n    color: #808080;\n    font-weight: normal;\n}\n.wr-megamenu-container .block-sub-menu a {\n\tcolor: #808080;\n\tpadding: 5px;\n}\n.wr-element-submenu .submenu-items a {\n    padding: 6px 5px 6px 20px !important;\n}\n.wr-megamenu-container {\n\tmargin-top: 12px;\n}\n.it-responsive-mega {\n\tdisplay: none !important;\n}\n.jsn-bootstrap3 .glyphicon {\n\tfont-size: 10px;\n\tmargin-right: 2px;\n}\n.wr-element-container {\n\tpadding: 5px 0;\n}\n.jsn-bootstrap3 .glyphicon.glyphicon-chevron-right {\n\tdisplay: none !important;\n}\n.wr-element-container ul.sub-menu li a > i,\n.wr-element-container ul.submenu-items li a > i {\n\tmargin-right: 7px;\n}\n@media only screen and (max-width: 783px) {\n\t.wr-mega-menu .wr-menu-down {\n\t    margin: -43px 5px 0 0 !important;\n\t}\n}\n\n\n\n@media (max-width: 992px) {\n\t.edd_download a.edd-add-to-cart.button.red.edd-submit.edd-has-js {\n\t\tcolor: #FFF;\n\t\tpadding: 10px;\n\t\tfont-size: 12px;\n  \t}\n  \t.edd_download a.edd-add-to-cart.button.red.edd-submit.edd-has-js span {\n  \t\tfont-size: 12px;\n  \t}\n\t.zerif_about_us_center p,\n\t.about-us .col-md-6.zerif_about_us_center.text_and_skills p {\n\t\ttext-align: center;\n\t}\n}\n\n@media (max-width: 768px) {\n\t.edd_download {\n\t\twidth: 100% !important;\n\t}\n}\n\n\n/* [end] Easy Digital Downloads */\n\n\nbody.home.page {\n\tbackground-image: none !important;\n}\n\nbody.custom-background {\n\tbackground-position: left center !important;\n\tbackground-attachment: fixed !important;\n\t/*EDITED!!*/\n\tbackground-size: cover;\n\tbackground-repeat: no-repeat !important;\n}\n\n.zerif_team:nth-child(4n+1), .our-team .col-lg-3:nth-child(4n+1) {\n\tclear:both;\n}\n\n.dropdownmenu {\n\tdisplay: none;\n}\n\n/* mobile background fix */\n.mobile-bg-fix-wrap {\n\twidth: 100%;\n\toverflow: hidden;\n}\n\n.mobile-bg-fix-wrap .mobile-bg-fix-img-wrap {\n\twidth: 100%;\n\theight: 100%;\n\tposition: fixed;\n\ttop: 0;\n\tleft: 0;\n\tz-index: 0;\n}\n\n.mobile-bg-fix-wrap .mobile-bg-fix-img {\n\tposition: absolute;\n\twidth: 100%;\n\theight: 125%;\n\tleft: 0;\n\ttop: 0;\n\tbackground-size: cover;\n}\n\n.mobile-bg-fix-wrap .mobile-bg-fix-whole-site {\n\tposition: relative;\n\tz-index: 1;\n}\n\n\n/*---------------------------------------\n **   Responsive            -----\n-----------------------------------------*/\n\n@media (max-width: 1200px) {\n\n\t.header-content-wrap{\n\t\tpadding: 100px 0 100px;\n\t}\n\n}\n\n@media (min-width: 768px) and (max-width: 1024px) {\n\n    /* TOP BAR ELEMENTS */\n\n     /* HOME */\n\t.intro {\n\t\tmargin-top: 40%;\n\t\tline-height: 55px;\n\t\tfont-size: 45px;\n\t}\n\n      /* ABOUT US */\n\t.big-intro {\n\t\ttext-align: center !important;\n\t}\n\t.about-us .column {\n\t\tmargin-bottom: 40px;\n\t}\n\t.skills {\n\t\tmargin-bottom: 78px !important;\n\t}\n\n      /* TEAM */\n\t.team-member .profile-pic {\n\t\twidth: 128px;\n\t\theight: 128px;\n\t}\n\t.team-member .details {\n\t\tline-height: 18px;\n\t}\n      /* PURCHASE NOW */\n\t.purchase-now {\n\t\tmargin: auto;\n\t\ttext-align: center !important;\n\t}\n\t.purchase-now h3 {\n\t\ttext-align: center;\n\t\tmargin-bottom: 20px;\n\t}\n\t.purchase-now .button {\n\t\tfloat: none;\n\t}\n\n      /* FOOTER */\n\t.container .company-details {\n\t\tpadding-top: 40px;\n\t\twidth: 33%;\n\t}\n\n}\n\n@media (max-width: 992px) {\n\n\t.purchase-now .red-btn{\n\t    float: none;\n\t}\n\t.skills{\n\t    margin-left: 0;\n\t}\n\t#client-feedbacks .feedback-box{\n\t    width: 100%;\n\t    margin-left: 0;\n        margin-right: 0;\n\t}\n\t.header-content-wrap {\n\t\tpadding-top: 26%;\n\t}\n\t.intro-text{\n        font-size: 20px;\n        line-height: 55px;\n    }\n    .section-header h2{\n        font-size: 35px;\n    }\n    .section-header {\n        padding-bottom: 30px;\n    }\n    .focus, .works, .about-us, .features, .packages, .products, .testimonial, .contact-us {\n        padding-top: 60px;\n        padding-bottom: 60px;\n    }\n    .header-content-wrap{\n\t\tpadding: 150px 0 100px;\n\t}\n\t.about-us .big-intro {\n\t\ttext-align: center;\n\t}\n\t.company-details {\n\t\tpadding-top: 0;\n\t\tpadding-bottom: 33px;\n\t}\n\t.container .company-details:first-child {\n\t\tpadding-top: 40px;\n\t}\n\t.copyright {\n\t\twidth: 100%;\n\t\tpadding-top: 33px;\n\t\tpadding-bottom: 33px;\n\t}\n\t.container .company-details {\n\t\twidth: 100%;\n\t}\n\n\n}\n@media (max-width: 767px) {\n\n\t/* HEADER */\n\t.bs-navbar-collapse {\n\t\tborder: 0;\n\t}\n\t#main-nav {\n\t\toverflow: visible;\n\t}\n\t#main-nav,\n\t#main-nav.fixed {\n\t\tposition: relative;\n\t}\n\t.navbar-inverse .navbar-nav {\n\t\tpadding-left: 10px;\n\t\tline-height: normal;\n\t\ttext-align: center;\n\t}\n\t.navbar-inverse .navbar-nav>li {\n\t\tdisplay: inline-block;\n\t\tmargin-bottom: 0;\n\t}\n\t.navbar-inverse .navbar-nav > li {\n\t\twidth: 100%;\n\t\tborder-bottom: 1px solid #EDEDED;\n\t\tposition: relative;\n\t\tmargin: 8px 0 0 0;\n\t\tpadding: 0 0 8px 0;\n\t}\n\t.navbar-inverse .navbar-nav > li  a {\n\t\ttext-align: left;\n\t}\n\t.navbar-inverse .navbar-nav ul.sub-menu {\n\t\tdisplay: none !important;\n\t\tposition: relative;\n\t\ttop: 0;\n\t\tbox-shadow: none;\n\t\twidth: 100%;\n\t}\n\t.navbar-inverse .navbar-nav li.this-open > ul {\n\t\tdisplay: block !important;\n\t}\n\t.navbar-inverse .navbar-nav ul.sub-menu li {\n\t\twidth: 100%;\n\t\tfloat: left;\n\t}\n\t.navbar-inverse .navbar-nav ul.sub-menu li a {\n\t\twidth: 100%;\n\t\tfloat: left;\n\t\tpadding: 8px 25px 8px 0;\n\t\tborder-bottom: 1px solid #EDEDED;\n\t}\n\t.navbar-inverse .navbar-nav ul.sub-menu li:last-child a {\n\t\tborder-bottom: none;\n\t}\n\t.navbar-inverse .navbar-nav ul.sub-menu ul.sub-menu {\n\t\tposition: relative;\n\t\tleft: 0;\n\t\ttop: 0;\n\t}\n\t#main-nav {\n\t\toverflow: hidden;\n\t}\n\t#main-nav,\n\t#main-nav.fixed {\n\t\tposition: relative;\n\t}\n\t.navbar-collapse {\n\t\tmax-height: 100%;\n\t}\n\t.navbar-inverse .navbar-nav ul.sub-menu li {\n\t\tpadding-left: 20px;\n\t}\n\t.navbar-inverse .navbar-nav ul.sub-menu li {\n\t\tpadding-bottom: 0;\n\t\tpadding-top: 0;\n\t}\n\t.dropdownmenu {\n\t\tdisplay: block;\n\t\tposition: absolute;\n\t\tz-index: 9;\n\t\tright: 0;\n\t\ttop: 5px;\n\t\twidth: 25px;\n\t\theight: 25px;\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\tborder-radius: 3px;\n\t\t/*background: url(images/menu-icon.png) center center no-repeat #e96656;*/\n\t}\n\t.navbar-inverse .navbar-nav ul.sub-menu li{\n\t\tmargin-right: 0;\n\t\tpadding-right: 0;\n\t}\n\t.navbar-inverse .navbar-nav > li > a:hover {\n\t\tcolor: #404040 !important;\n\t}\n\t.this-open > a {\n\t\tcolor: #e96656 !important;\n\t}\n\tli.current>a:before {\n\t\tcontent: \"\";\n\t\tdisplay: none !important;\n\t}\n\tul.nav > li.current_page_item > a:before {\n\t\tcontent: \"\";\n\t\tleft: 0px;\n\t\twidth: 50px;\n\t}\n\t.menu-align-center #site-navigation > ul ul {\n        left: 0;\n    }\n\n    /* HOME */\n\t.header {\n\t\tmin-height: inherit;\n\t\tpadding-bottom: 0 !important;\n\t}\n\t.intro {\n\t\tline-height: 8vh;\n\t\tfont-size: 6.5vw;\n\t}\n    .header-content-wrap {\n    \tpadding-top: 10%;\n    }\n\t.intro-text{\n        font-size: 25px;\n        line-height: 49px;\n    }\n\t.focus-box {\n        margin-bottom: 75px;\n    }\n    .section-header {\n        float: left;\n        width: 100%;\n    }\n    .pirate-forms-g-recaptcha > div {\n    \tdisplay: inline-block;\n\t}\n\t.pirate_forms .pirate-forms-submit-button {\n\t\tfloat: none;\n\t\tdisplay: inline-block;\n\t\ttext-align: center;\n\t}\n\t.contact_submit_wrap {\n\t\ttext-align: center;\n\t}\n\n      /* ABOUT US */\n\t.big-intro {\n\t\ttext-align: center !important;\n\t\tfont-size: 8vw !important;\n\t}\n\t.about-us .column {\n\t\tmargin-bottom: 40px;\n\t}\n\t.skills {\n\t\tmargin-bottom: 78px !important;\n\t}\n\t.our-clients{\n\t    width: 100%;\n\t    float: left;\n\t}\n\n      /* PURCHASE NOW */\n\t.purchase-now {\n\t\tmargin: auto;\n\t\ttext-align: center !important;\n\t}\n\t.purchase-now h3 {\n\t\ttext-align: center;\n\t\tmargin-bottom: 20px;\n\t}\n\t.purchase-now .button {\n\t\tfloat: none;\n\t}\n\n      /* FOOTER */\n\t.company-details {\n\t\tpadding-top: 0;\n\t\tpadding-bottom: 33px;\n\t}\n\t.copyright {\n\t\twidth: 100%;\n\t\tpadding-top: 33px;\n\t\tpadding-bottom: 33px;\n\t}\n\tfooter.entry-footer {\n\t\tpadding-top: 0;\n\t}\n\t/* comments */\n\t.comment-metadata {\n\t\tposition: relative;\n\t\ttop: 0px;\n\t\tright: 0px;\n\t}\n}\n@media (max-width: 480px) {\n\n/* HOME */\n\t.intro {\n\t\tmargin-top: 60%;\n\t\tline-height: 6vh;\n\t\tfont-size: 6.5vw;\n\t}\n\n\t.header-content-wrap {\n\t    padding-top: 10%;\n\t}\n\t.intro-text{\n        font-size: 32px;\n        line-height: 37px;\n    }\n\th2 {\n\t\tfont-size: 6.5vw !important;\n\t}\n\t.other-focus-list ul li {\n\t\tdisplay: block;\n\t\ttext-align: left;\n\t\tmargin-right: 0;\n\t}\n\t/* blog */\n\t.post-img-wrap {\n\t\twidth: 100%;\n\t}\n\t.listpost-content-wrap {\n\t\twidth: 100%;\n\t\tmargin-top: 20px;\n\t\tfloat: left;\n\t}\n\t.post-img-wrap a {\n\t\tfloat: none;\n\t\tmargin: 0 auto;\n\t\twidth: 250px;\n\t\theight: 250px;\n\t}\n\t.post-img-wrap {\n\t\ttext-align: center;\n\t\tmargin-right: 0;\n\t}\n\t.post-img-wrap a img{\n\t\twidth: auto;\n\t}\n\t/* comments */\n\t.comment-reply-link{\n\t\tposition: relative;\n\t\tmargin-top: 10px;\n\t}\n\t.post-img-wrap a img{\n\t\twidth: 250px;\n\t\theight: auto;\n\t\t-webkit-transform: scale(1);\n\t\t-moz-transform: scale(1);\n\t\t-o-transform: scale(1);\n\t\t-ms-transform: scale(1);\n\t\ttransform: scale(1);\n\t\t-webkit-transition: all 0.3s ease-out;\n\t\t-moz-transition: all 0.3s ease-out;\n\t\t-ms-transition: all 0.3s ease-out;\n\t\t-o-transition: all 0.3s ease-out;\n\t\ttransition: all 0.3 ease-out;\n\t}\n\t.post-img-wrap a:hover img{\n\t\t-webkit-transform: scale(1);\n\t\t-moz-transform: scale(1);\n\t\t-o-transform: scale(1);\n\t\t-ms-transform: scale(1);\n\t\ttransform: scale(1);\n\t\t-webkit-transition: all 0.3s ease-out;\n\t\t-moz-transition: all 0.3s ease-out;\n\t\t-ms-transition: all 0.3s ease-out;\n\t\t-o-transition: all 0.3s ease-out;\n\t\ttransition: all 0.3 ease-out;\n\t}\n}\n@media (max-width: 320px) {\n    .intro {\n\t\tline-height: 25px;\n\t\tfont-size: 7vw;\n\t}\n\t.header-content-wrap {\n        padding-top: 50%;\n    }\n    .intro-text {\n        font-size: 22px;\n        line-height: 30px;\n    }\n\t.client-list ul li {\n\t\tdisplay: block;\n\t}\n\t.listpost-content-wrap-large{\n\t\tposition: relative;\n\t}\n\t.post-img-wrap-large{\n\t\tdisplay:none;\n\t}\n}\n\n.zerif-copyright {\n\tcolor:#939393!important;\n}\n\n.zerif-copyright-box {\n\twidth: 100%;\n    color: #666;\n}\n\n\n\n/* print */\n@media print {\n\n\tbody {\n\t\tfont-size: 11.25pt;\n\t}\n\ta:link:after,\n\ta:visited:after {\n    \tcontent: \"\";\n\t}\n\theader.header {\n\t    min-height: 0 !important;\n\t}\n\t#main-nav {\n    \tposition: relative;\n\t}\n\t.header-content-wrap {\n\t\tpadding: 30px 0 15px;\n\t}\n\n\t.buttons {\n\t\ttext-align: center;\n\t    margin-top: 0px;\n\t    margin-bottom: 0;\n\t}\n\t.focus,\n\t.works,\n\t.about-us,\n\t.features,\n\t.packages,\n\t.products,\n\t.testimonial,\n\t.contact-us {\n\t\tpadding-top: 15px;\n\t}\n\t.focus {\n\t\tpadding-bottom: 0;\n\t}\n\t.focus .row .focus-box,\n\t.zerif_about_us_center,\n\t.zerif-rtl-skills .skills,\n\t#testimonials > .container > .row,\n\t.zerif-rtl-contact-name,\n\t.zerif-rtl-contact-email,\n\t.zerif-rtl-contact-subject,\n\t#contact > .container > .row .col-lg-12.col-sm-12,\n\t.purchase-now > .container > .row .col-md-9,\n\t.purchase-now > .container > .row .col-md-3,\n\t.separator-one > .color-overlay .container.text,\n\t.separator-one > .color-overlay > div {\n\t    -webkit-transform: translatex(0px) !important;\n\t    -moz-transform: translatex(0px) !important;\n\t    -ms-transform: translatex(0px) !important;\n\t    transform: translatex(0px) !important;\n\t    opacity: 1 !important;\n\t}\n\t.focus .row .focus-box {\n\t    width: 23% !important;\n\t    margin-right: 0;\n\t    margin-left: 0;\n\t    padding-left: 0;\n\t    padding: 0 1.5%;\n\t    margin-bottom: 0;\n\t}\n\t.about-us {\n\t\tpadding-bottom: 0;\n\t}\n\t.about-us .column {\n\t    margin-bottom: 0;\n\t    width: 100%;\n\t    float: left;\n\t    margin-right: 0;\n\t    margin-left: 0;\n\t    padding-left: 0;\n\t    margin-bottom: 0;\n\t}\n\t.about-us .big-intro {\n\t    margin-top: 0;\n\t    text-align: center;\n\t}\n\t.zerif-rtl-big-title,\n\t.zerif-rtl-skills,\n\t.zerif-rtl-skills .skills {\n\t\twidth: 100%;\n\t}\n\t.zerif-rtl-skills .skills li.skill {\n\t    display: inline-block;\n\t    clear: none;\n\t\tfloat: left;\n\t\twidth: 25%;\n\t\tmargin-bottom: 0;\n\t}\n\t.about-us p {\n\t\ttext-align: center;\n\t}\n\t.our-team {\n\t    padding-top: 30px;\n        padding-bottom: 0;\n\t}\n\t.our-team .row {\n\t    -webkit-transform: translatex(0px) !important;\n\t    -moz-transform: translatex(0px) !important;\n\t    -ms-transform: translatex(0px) !important;\n\t    transform: translatex(0px) !important;\n\t    opacity: 1 !important;\n\t}\n\t.our-team .col-lg-3.col-sm-3 {\n\t    width: 23% !important;\n\t    margin-right: 0;\n\t    margin-left: 0;\n\t    padding-left: 0;\n\t    padding: 0 1.5%;\n\t}\n\t.team-member .profile-pic {\n\t    width: 100%;\n\t    height: auto;\n\t}\n\t#client-feedbacks .feedback-box {\n\t    width: 30%;\n\t    padding: 0;\n\t    margin: 1.5%;\n\t}\n\t.feedback-box .quote {\n\t\tdisplay: none;\n\t}\n\t.feedback-box .client-info {\n\t    margin-left: 0;\n\t}\n\t.section-header {\n\t    padding-bottom: 15px;\n\t}\n\t.testimonial {\n\t    padding-bottom: 0;\n\t}\n\t.feedback-box .client {\n\t    margin-top: 0;\n\t}\n\t.contact-us {\n\t    padding-bottom: 0;\n\t}\n\t.contact-us .input-box,\n\ttextarea {\n\t    border: 1px solid #000 !important;\n\t    box-shadow: none;\n\t}\n\t.footer-box {\n\t    width: 23% !important;\n\t    margin-right: 0;\n\t    margin-left: 0;\n\t    padding-left: 0;\n\t    padding: 0 1.5%;\n\t}\n\t.latestnews-box {\n\t    width: 50%;\n\t    padding-left: 2%;\n\t    padding-right: 2%;\n\t    padding: 0;\n\t    margin: 0;\n\t    float: left;\n\t}\n\t#carousel-homepage-latestnews .item {\n\t\theight: auto !important;\n\t}\n\t.company-details {\n\t    width: 33% !important;\n\t    margin-right: 0;\n\t    margin-left: 0;\n\t    padding-left: 0;\n\t    padding: 0 1.5%;\n\t    float: left;\n\t}\n\t.copyright {\n\t\twidth: 100%;\n\t}\n\t.separator-one,\n\t.purchase-now {\n    \tpadding: 15px 0 15px 0;\n\t}\n\t.latest-news {\n\t\tpadding-bottom: 15px;\n\t\tpadding-top: 15px;\n\t}\n\t/* inner page */\n\t.content-left-wrap {\n\t\tpadding-top: 0;\n\t}\n\n}\n\n/*Custom*/\n\n/*Scrolling Nav*/\nbody {\n  /*margin-top: 50px; /* Matches UL Height */\n}\n\nnav {\n  width: 100%;\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  /*background-color: #f2f2f2;*/\n\tbackground-color: transparent;;\n\tdisplay: block;\n\tz-index: 10000\n}\n\nnav a {\n\tcolor: white;\n}\n\n.navOpaque {\n\tbackground-color: #f2f2f2 !important;\n}\n\n.navOpaque a{\n\tcolor: #e96656 !important;\n}\n\nnav ul {\n  z-index: 20000;\n  position: relative;\n  margin: 0px;\n  list-style-type: none;\n  height: 50px;\n  padding: 0px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n\nnav li {\n  display: inline-block;\n  text-align: center;\n  cursor: pointer;\n}\n\n#scrollBlock {\n  z-index: 10000;\n  background-color: #66a3ff;\n  height: 50px;\n  width: 100px;\n  position: absolute;\n  top: 0px;\n  left: 0%;\n}\n/* end scrolling nav */\n\n/*Name Banner*/\n.topBanner {\n\twidth: 100%;\n\n\tmargin: 0px;\n\tpadding: 0px;\n\tposition: relative;\n\n}\n\n#bannerImg {\n\twidth: 100%;\n\theight: auto;\n}\n\n.bannerInner {\n\tcolor: white;\n\n}\n\n.bannerInner h1{\n\tfont-size: 100px;\n\tline-height: 1;\n\n}\n\n.bannerInner h2{\n\tfont-size: 50px;\n}\n/* End Name Banner*/\n\n\n\n\n/*animation element*/\n\n.animation-element {\n  opacity: 0;\n  position: relative;\n}\n/*animation element sliding left*/\n\n.animation-element.slide-left {\n  opacity: 0;\n  -moz-transition: all 500ms linear;\n  -webkit-transition: all 500ms linear;\n  -o-transition: all 500ms linear;\n  transition: all 500ms linear;\n  -moz-transform: translate3d(-100px, 0px, 0px);\n  -webkit-transform: translate3d(-100px, 0px, 0px);\n  -o-transform: translate(-100px, 0px);\n  -ms-transform: translate(-100px, 0px);\n  transform: translate3d(-100px, 0px, 0px);\n}\n\n.animation-element.slide-left.in-view {\n  opacity: 1;\n  -moz-transform: translate3d(0px, 0px, 0px);\n  -webkit-transform: translate3d(0px, 0px, 0px);\n  -o-transform: translate(0px, 0px);\n  -ms-transform: translate(0px, 0px);\n  transform: translate3d(0px, 0px, 0px);\n}\n\n.animation-element.slide-right {\n  opacity: 0;\n  -moz-transition: all 500ms linear;\n  -webkit-transition: all 500ms linear;\n  -o-transition: all 500ms linear;\n  transition: all 500ms linear;\n  -moz-transform: translate3d(100px, 0px, 0px);\n  -webkit-transform: translate3d(100px, 0px, 0px);\n  -o-transform: translate(100px, 0px);\n  -ms-transform: translate(100px, 0px);\n  transform: translate3d(100px, 0px, 0px);\n}\n\n.animation-element.slide-right.in-view {\n  opacity: 1;\n  -moz-transform: translate3d(0px, 0px, 0px);\n  -webkit-transform: translate3d(0px, 0px, 0px);\n  -o-transform: translate(0px, 0px);\n  -ms-transform: translate(0px, 0px);\n  transform: translate3d(0px, 0px, 0px);\n}\n\n.animation-element.slide-up {\n  opacity: 0;\n  -moz-transition: all 500ms linear;\n  -webkit-transition: all 500ms linear;\n  -o-transition: all 500ms linear;\n  transition: all 500ms linear;\n  -moz-transform: translate3d(0px, 100px, 0px);\n  -webkit-transform: translate3d(100px, 0px, 0px);\n  -o-transform: translate(0px, 100px);\n  -ms-transform: translate(0px, 100px);\n  transform: translate3d(0px, 100px, 0px);\n}\n\n.animation-element.slide-up.in-view {\n  opacity: 1;\n  -moz-transform: translate3d(0px, 0px, 0px);\n  -webkit-transform: translate3d(0px, 0px, 0px);\n  -o-transform: translate(0px, 0px);\n  -ms-transform: translate(0px, 0px);\n  transform: translate3d(0px, 0px, 0px);\n}\n\n/*end animation element*/\n\n#Portfolio {\n\tbackground-color: #272727;\n\tpadding: 50px;\n\tcolor: white;\n\tpadding-bottom: 100px;\n}\n\n.workFlex {\n\tdisplay: flex;\n}\n\n\n\n.resumeFlex1 {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\twidth: 550px;\n}\n\n.resFlex span {\n\tfont-size: 16px;\n\n}\n.resFlex p {\n\tdisplay: inline;\n\tfont-size: 20px;\n\tcolor: rgb(256, 256, 256)\n\n}\n\n\n.resumeFlex2 {\n\tdisplay: flex;\n\tjustify-content: flex-start;;\n\twidth: 425px;\n\n}\n\n.resumeFlex3 {\n\tdisplay: flex;\n\tjustify-content: space-between;;\n\twidth: 300px;\n\n}\n.resumeFlex4 {\n\tdisplay: flex;\n\tjustify-content: space-between;;\n\twidth: 575px;\n\n}\n\n#phptxt {\n\tmargin-left: 120px;\n}\n\n#frontendArrow {\n    height:40px;\n    background:#e96656 ;\n    color:#fff;\n    position:relative;\n    width:550px;\n    text-align:center;\n    line-height:40px;\n}\n#frontendArrow:after{\n    content:\"\";\n    position:absolute;\n    height:0;\n    width:0;\n    left:100%;\n    top:0;\n    border:20px solid transparent;\n    border-left: 20px solid #e96656 ;\n}\n\n\n\n\n#backendArrow {\n    height:40px;\n    background:rgb(116, 189, 146);\n    color:#fff;\n    position:relative;\n    width:400px;\n    text-align:center;\n    line-height:40px;\n\t\tborder-right-color: none;\n}\n#backendArrow:after{\n    content:\"\";\n    position:absolute;\n    height:0;\n    width:0;\n    left:100%;\n    top:0;\n    border:20px solid transparent;\n    border-left: 20px solid rgb(116, 189, 146);\n}\n\n#dbArrow {\n    height:40px;\n    background:#3ab0e2;\n    color:#fff;\n    position:relative;\n    width:300px;\n    text-align:center;\n    line-height:40px;\n\t\tborder-right-color: none;\n}\n#dbArrow:after{\n    content:\"\";\n    position:absolute;\n    height:0;\n    width:0;\n    left:100%;\n    top:0;\n    border:20px solid transparent;\n    border-left: 20px solid #3ab0e2;\n}\n\n#platBar {\n\theight: 25px;\n\tbackground-color: rgb(219, 162, 57);\n\twidth: 575px;\n}\n\n@media screen and (max-width: 600px) {\n\t#frontendArrow {\n\t\twidth:100%;\n\t\tmargin-right: auto;\n\t\tmargin-left: auto;\n\t}\n\n\t#backendArrow {\n\t\twidth:100%;\n\t\tmargin-right: auto;\n\t\tmargin-left: auto;\n\t}\n\n\t#dbArrow {\n\t\twidth:100%;\n\t\tmargin-right: auto;\n\t\tmargin-left: auto;\n\t}\n\n\t/*.resFlex  span{\n\t\tfont-size: 10px;\n\n\t}*/\n\n\t.resFlex {\nflex-direction: column;\t}\n\n.resumeFlex1{\nwidth:100%;\n\tmargin-right: auto;\n\tmargin-left: auto;\n}\n.resumeFlex2{\nwidth:100%;\n\tmargin-right: auto;\n\tmargin-left: auto;\n}\n.resumeFlex3{\nwidth:100%;\n\tmargin-right: auto;\n\tmargin-left: auto;\n}\n.resumeFlex4{\nwidth:100%;\n\tmargin-right: auto;\n\tmargin-left: auto;\n}\n\n#phptxt {\n\tmargin-left: 0px;\n}\n\n}\n\n\n.halfWide {\n\tflex-basis: 400px;\n\tflex-grow: 1;\n\tmargin-top: 50px;\n\n}\n\n.aboutContain {\n\tflex-grow: 1;\n}\n\n\n.skillsBody {\n\tdisplay: flex;\n\tjustify-content: center;\n}\n\n#aboutus {\n\tpadding-bottom: 100px;\n\tpadding-top: 50px !important\n}\n\n#portFlex {\n\t display: flex;\n\t justify-content: space-around;\n\t flex-wrap: wrap;\n\t margin-bottom: -20px;\n}\n\n.portImg {\n\twidth: 300px;\n\theight: 215px;\n}\n.portBox {\n\tborder-style: solid;\n\tborder-width: 1px;\n\tborder-color: white;\n\twidth: 301px;\n\theight: 285px;\n\toverflow: hidden;\n\tposition: relative;\n\tflex-basis: 301px;\n\tmargin-left: auto;\n\tmargin-right: auto;\n\tmargin-bottom: 20px;\n\tcolor: white !important;\n\n\n}\n\n\n.portBox h3{\n\tmargin-bottom: -5px;\n}\n\n.portSlider {\n\tposition: absolute;\n\theight: 285px;\n\twidth: 302px;\n\ttop: 286px;\n\ttransition: top 0.5s;\n\t-webkit-transition: top 0.5s; /* Safari 3.1 to 6.0 */\n\tcursor: pointer;\n\n}\n\n.zangSlider {\n\tpadding-top: 65px;\n\tbackground-color: #e96656;\n\n}\n\n#retinaSlider {\n\tbackground-color: rgb(116, 189, 146);\n\tpadding-top: 100px;\n}\n\n#scrollSlider {\n\tbackground-color: #31acdf;\n\tpadding-top: 100px;\n}\n\n.ifytSlider {\n\tbackground-color: #e96656;\n\tpadding-top: 100px;\n}\n\n.abSlider {\n\tbackground-color: rgb(116, 189, 146);\n\tpadding-top: 100px;\n\n}\n.redSlider {\n\tbackground-color: #e96656;\n}\n.greenSlider {\n\tbackground-color: rgb(116, 189, 146);\n}\n\n#alsoBoughtSlider {\n\tpadding-top: 50px;\n}\n.portBox a {\n\tcolor:white !important;\n}\n\n.portGitLink {\n\tposition: absolute;\n\tpadding-top: 6px;\n\theight: 40px;\n\ttop: 286px;\n\tbackground-color: rgb(219, 162, 57);\n\twidth: 302px;\n\ttransition: top 0.5s;\n\t-webkit-transition: top 0.5s; /* Safari 3.1 to 6.0 */\n\tcursor: pointer;\n}\n\n#projTypesHead {\n\tpadding-left: 10%;\n\tpadding-right: 10%;\n}\n\n#myGitLink {\n\ttop: -50px;\n\tposition: relative;\n\tfont-size: 20px;\n}\n.intro-text  ol li {\n\tfont-size: 20px;\n\ttext-align: left;\n\tmargin-left: 50px;\n\tline-height: 1.5;\n\tmargin-bottom: 10px;\n}\n\n\n\n.intro-text ul li {\n\tfont-size: 20px;\n\ttext-align: left;\n\t/*margin-left: 50px;*/\n\tline-height: 1.5;\n\tmargin-top: 20px;\n}\n", ""]);
	
	// exports


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, ".text-banner {\n  padding-top: 100px;\n  padding-bottom: 150px;\n  width: 100%;\n  text-align: center;\n  color: white;\n  font-size: 20px; }\n  .text-banner h2 {\n    font-size: 8vw; }\n  .text-banner h3 {\n    font-size: 7vw; }\n  @media (max-width: 900px) {\n    .text-banner #family-photo-circle {\n      float: none !important; } }\n\n.navTranslucent {\n  background-color: rgba(242, 242, 242, 0.5) !important; }\n\nnav {\n  transition: background-color 1s; }\n\n.navTranslucent a {\n  color: #e96656 !important; }\n\n#about-text {\n  height: 300px;\n  padding-top: 2%; }\n  #about-text p {\n    font-size: 25px; }\n\n\n\n@media (max-width: 1261px) {\n  #projTypesHead {\n    padding-bottom: 50px; } }\n@media (max-width: 1199px) {\n  #projTypesHead {\n    margin-top: 100px; } }\n\n@media (max-width: 1199px) {\n  #aboutus .section-header {\n    padding-bottom: 25px; } }\n\n\n    @media (max-width: 768px) {\n      .text-banner {\n        padding-top: 25px !important;\n      }\n      #Portfolio .container-fluid {\n        width: 100vw;\n        margin-left: calc(-50vw + 50%);\n        padding-left: 0px;\n        padding-right: 0px; }\n      #Portfolio .col-sm-6 {\n        padding: 0px;\n        width: 50%;\n        float: left; } }\n      @media (max-width: 768px) and (max-width: 609px) {\n        #Portfolio .col-sm-6 {\n          width: auto;\n          float: none; } }\n\n/*# sourceMappingURL=importable.css.map */\n", ""]);
	
	// exports


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "b20ee30b2b8508b5b5bc57da6ffe155e.gif";

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {/*! jQuery Migrate v1.4.1 | (c) jQuery Foundation and other contributors | jquery.org/license */
	"undefined"==typeof jQuery.migrateMute&&(jQuery.migrateMute=!0),function(a,b,c){function d(c){var d=b.console;f[c]||(f[c]=!0,a.migrateWarnings.push(c),d&&d.warn&&!a.migrateMute&&(d.warn("JQMIGRATE: "+c),a.migrateTrace&&d.trace&&d.trace()))}function e(b,c,e,f){if(Object.defineProperty)try{return void Object.defineProperty(b,c,{configurable:!0,enumerable:!0,get:function(){return d(f),e},set:function(a){d(f),e=a}})}catch(g){}a._definePropertyBroken=!0,b[c]=e}a.migrateVersion="1.4.1";var f={};a.migrateWarnings=[],b.console&&b.console.log&&b.console.log("JQMIGRATE: Migrate is installed"+(a.migrateMute?"":" with logging active")+", version "+a.migrateVersion),a.migrateTrace===c&&(a.migrateTrace=!0),a.migrateReset=function(){f={},a.migrateWarnings.length=0},"BackCompat"===document.compatMode&&d("jQuery is not compatible with Quirks Mode");var g=a("<input/>",{size:1}).attr("size")&&a.attrFn,h=a.attr,i=a.attrHooks.value&&a.attrHooks.value.get||function(){return null},j=a.attrHooks.value&&a.attrHooks.value.set||function(){return c},k=/^(?:input|button)$/i,l=/^[238]$/,m=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,n=/^(?:checked|selected)$/i;e(a,"attrFn",g||{},"jQuery.attrFn is deprecated"),a.attr=function(b,e,f,i){var j=e.toLowerCase(),o=b&&b.nodeType;return i&&(h.length<4&&d("jQuery.fn.attr( props, pass ) is deprecated"),b&&!l.test(o)&&(g?e in g:a.isFunction(a.fn[e])))?a(b)[e](f):("type"===e&&f!==c&&k.test(b.nodeName)&&b.parentNode&&d("Can't change the 'type' of an input or button in IE 6/7/8"),!a.attrHooks[j]&&m.test(j)&&(a.attrHooks[j]={get:function(b,d){var e,f=a.prop(b,d);return f===!0||"boolean"!=typeof f&&(e=b.getAttributeNode(d))&&e.nodeValue!==!1?d.toLowerCase():c},set:function(b,c,d){var e;return c===!1?a.removeAttr(b,d):(e=a.propFix[d]||d,e in b&&(b[e]=!0),b.setAttribute(d,d.toLowerCase())),d}},n.test(j)&&d("jQuery.fn.attr('"+j+"') might use property instead of attribute")),h.call(a,b,e,f))},a.attrHooks.value={get:function(a,b){var c=(a.nodeName||"").toLowerCase();return"button"===c?i.apply(this,arguments):("input"!==c&&"option"!==c&&d("jQuery.fn.attr('value') no longer gets properties"),b in a?a.value:null)},set:function(a,b){var c=(a.nodeName||"").toLowerCase();return"button"===c?j.apply(this,arguments):("input"!==c&&"option"!==c&&d("jQuery.fn.attr('value', val) no longer sets properties"),void(a.value=b))}};var o,p,q=a.fn.init,r=a.find,s=a.parseJSON,t=/^\s*</,u=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,v=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,w=/^([^<]*)(<[\w\W]+>)([^>]*)$/;a.fn.init=function(b,e,f){var g,h;return b&&"string"==typeof b&&!a.isPlainObject(e)&&(g=w.exec(a.trim(b)))&&g[0]&&(t.test(b)||d("$(html) HTML strings must start with '<' character"),g[3]&&d("$(html) HTML text after last tag is ignored"),"#"===g[0].charAt(0)&&(d("HTML string cannot start with a '#' character"),a.error("JQMIGRATE: Invalid selector string (XSS)")),e&&e.context&&e.context.nodeType&&(e=e.context),a.parseHTML)?q.call(this,a.parseHTML(g[2],e&&e.ownerDocument||e||document,!0),e,f):(h=q.apply(this,arguments),b&&b.selector!==c?(h.selector=b.selector,h.context=b.context):(h.selector="string"==typeof b?b:"",b&&(h.context=b.nodeType?b:e||document)),h)},a.fn.init.prototype=a.fn,a.find=function(a){var b=Array.prototype.slice.call(arguments);if("string"==typeof a&&u.test(a))try{document.querySelector(a)}catch(c){a=a.replace(v,function(a,b,c,d){return"["+b+c+'"'+d+'"]'});try{document.querySelector(a),d("Attribute selector with '#' must be quoted: "+b[0]),b[0]=a}catch(e){d("Attribute selector with '#' was not fixed: "+b[0])}}return r.apply(this,b)};var x;for(x in r)Object.prototype.hasOwnProperty.call(r,x)&&(a.find[x]=r[x]);a.parseJSON=function(a){return a?s.apply(this,arguments):(d("jQuery.parseJSON requires a valid JSON string"),null)},a.uaMatch=function(a){a=a.toLowerCase();var b=/(chrome)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||a.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},a.browser||(o=a.uaMatch(navigator.userAgent),p={},o.browser&&(p[o.browser]=!0,p.version=o.version),p.chrome?p.webkit=!0:p.webkit&&(p.safari=!0),a.browser=p),e(a,"browser",a.browser,"jQuery.browser is deprecated"),a.boxModel=a.support.boxModel="CSS1Compat"===document.compatMode,e(a,"boxModel",a.boxModel,"jQuery.boxModel is deprecated"),e(a.support,"boxModel",a.support.boxModel,"jQuery.support.boxModel is deprecated"),a.sub=function(){function b(a,c){return new b.fn.init(a,c)}a.extend(!0,b,this),b.superclass=this,b.fn=b.prototype=this(),b.fn.constructor=b,b.sub=this.sub,b.fn.init=function(d,e){var f=a.fn.init.call(this,d,e,c);return f instanceof b?f:b(f)},b.fn.init.prototype=b.fn;var c=b(document);return d("jQuery.sub() is deprecated"),b},a.fn.size=function(){return d("jQuery.fn.size() is deprecated; use the .length property"),this.length};var y=!1;a.swap&&a.each(["height","width","reliableMarginRight"],function(b,c){var d=a.cssHooks[c]&&a.cssHooks[c].get;d&&(a.cssHooks[c].get=function(){var a;return y=!0,a=d.apply(this,arguments),y=!1,a})}),a.swap=function(a,b,c,e){var f,g,h={};y||d("jQuery.swap() is undocumented and deprecated");for(g in b)h[g]=a.style[g],a.style[g]=b[g];f=c.apply(a,e||[]);for(g in b)a.style[g]=h[g];return f},a.ajaxSetup({converters:{"text json":a.parseJSON}});var z=a.fn.data;a.fn.data=function(b){var e,f,g=this[0];return!g||"events"!==b||1!==arguments.length||(e=a.data(g,b),f=a._data(g,b),e!==c&&e!==f||f===c)?z.apply(this,arguments):(d("Use of jQuery.fn.data('events') is deprecated"),f)};var A=/\/(java|ecma)script/i;a.clean||(a.clean=function(b,c,e,f){c=c||document,c=!c.nodeType&&c[0]||c,c=c.ownerDocument||c,d("jQuery.clean() is deprecated");var g,h,i,j,k=[];if(a.merge(k,a.buildFragment(b,c).childNodes),e)for(i=function(a){return!a.type||A.test(a.type)?f?f.push(a.parentNode?a.parentNode.removeChild(a):a):e.appendChild(a):void 0},g=0;null!=(h=k[g]);g++)a.nodeName(h,"script")&&i(h)||(e.appendChild(h),"undefined"!=typeof h.getElementsByTagName&&(j=a.grep(a.merge([],h.getElementsByTagName("script")),i),k.splice.apply(k,[g+1,0].concat(j)),g+=j.length));return k});var B=a.event.add,C=a.event.remove,D=a.event.trigger,E=a.fn.toggle,F=a.fn.live,G=a.fn.die,H=a.fn.load,I="ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",J=new RegExp("\\b(?:"+I+")\\b"),K=/(?:^|\s)hover(\.\S+|)\b/,L=function(b){return"string"!=typeof b||a.event.special.hover?b:(K.test(b)&&d("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"),b&&b.replace(K,"mouseenter$1 mouseleave$1"))};a.event.props&&"attrChange"!==a.event.props[0]&&a.event.props.unshift("attrChange","attrName","relatedNode","srcElement"),a.event.dispatch&&e(a.event,"handle",a.event.dispatch,"jQuery.event.handle is undocumented and deprecated"),a.event.add=function(a,b,c,e,f){a!==document&&J.test(b)&&d("AJAX events should be attached to document: "+b),B.call(this,a,L(b||""),c,e,f)},a.event.remove=function(a,b,c,d,e){C.call(this,a,L(b)||"",c,d,e)},a.each(["load","unload","error"],function(b,c){a.fn[c]=function(){var a=Array.prototype.slice.call(arguments,0);return"load"===c&&"string"==typeof a[0]?H.apply(this,a):(d("jQuery.fn."+c+"() is deprecated"),a.splice(0,0,c),arguments.length?this.bind.apply(this,a):(this.triggerHandler.apply(this,a),this))}}),a.fn.toggle=function(b,c){if(!a.isFunction(b)||!a.isFunction(c))return E.apply(this,arguments);d("jQuery.fn.toggle(handler, handler...) is deprecated");var e=arguments,f=b.guid||a.guid++,g=0,h=function(c){var d=(a._data(this,"lastToggle"+b.guid)||0)%g;return a._data(this,"lastToggle"+b.guid,d+1),c.preventDefault(),e[d].apply(this,arguments)||!1};for(h.guid=f;g<e.length;)e[g++].guid=f;return this.click(h)},a.fn.live=function(b,c,e){return d("jQuery.fn.live() is deprecated"),F?F.apply(this,arguments):(a(this.context).on(b,this.selector,c,e),this)},a.fn.die=function(b,c){return d("jQuery.fn.die() is deprecated"),G?G.apply(this,arguments):(a(this.context).off(b,this.selector||"**",c),this)},a.event.trigger=function(a,b,c,e){return c||J.test(a)||d("Global events are undocumented and deprecated"),D.call(this,a,b,c||document,e)},a.each(I.split("|"),function(b,c){a.event.special[c]={setup:function(){var b=this;return b!==document&&(a.event.add(document,c+"."+a.guid,function(){a.event.trigger(c,Array.prototype.slice.call(arguments,1),b,!0)}),a._data(this,c,a.guid++)),!1},teardown:function(){return this!==document&&a.event.remove(document,c+"."+a._data(this,c)),!1}}}),a.event.special.ready={setup:function(){this===document&&d("'ready' event is deprecated")}};var M=a.fn.andSelf||a.fn.addBack,N=a.fn.find;if(a.fn.andSelf=function(){return d("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),M.apply(this,arguments)},a.fn.find=function(a){var b=N.apply(this,arguments);return b.context=this.context,b.selector=this.selector?this.selector+" "+a:a,b},a.Callbacks){var O=a.Deferred,P=[["resolve","done",a.Callbacks("once memory"),a.Callbacks("once memory"),"resolved"],["reject","fail",a.Callbacks("once memory"),a.Callbacks("once memory"),"rejected"],["notify","progress",a.Callbacks("memory"),a.Callbacks("memory")]];a.Deferred=function(b){var c=O(),e=c.promise();return c.pipe=e.pipe=function(){var b=arguments;return d("deferred.pipe() is deprecated"),a.Deferred(function(d){a.each(P,function(f,g){var h=a.isFunction(b[f])&&b[f];c[g[1]](function(){var b=h&&h.apply(this,arguments);b&&a.isFunction(b.promise)?b.promise().done(d.resolve).fail(d.reject).progress(d.notify):d[g[0]+"With"](this===e?d.promise():this,h?[b]:arguments)})}),b=null}).promise()},c.isResolved=function(){return d("deferred.isResolved is deprecated"),"resolved"===c.state()},c.isRejected=function(){return d("deferred.isRejected is deprecated"),"rejected"===c.state()},b&&b.call(c,c),c}}}(jQuery,window);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(18)))

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * jQuery JavaScript Library v3.1.1
	 * https://jquery.com/
	 *
	 * Includes Sizzle.js
	 * https://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * https://jquery.org/license
	 *
	 * Date: 2016-09-22T22:30Z
	 */
	( function( global, factory ) {
	
		"use strict";
	
		if ( typeof module === "object" && typeof module.exports === "object" ) {
	
			// For CommonJS and CommonJS-like environments where a proper `window`
			// is present, execute the factory and get jQuery.
			// For environments that do not have a `window` with a `document`
			// (such as Node.js), expose a factory as module.exports.
			// This accentuates the need for the creation of a real `window`.
			// e.g. var jQuery = require("jquery")(window);
			// See ticket #14549 for more info.
			module.exports = global.document ?
				factory( global, true ) :
				function( w ) {
					if ( !w.document ) {
						throw new Error( "jQuery requires a window with a document" );
					}
					return factory( w );
				};
		} else {
			factory( global );
		}
	
	// Pass this if window is not defined yet
	} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {
	
	// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
	// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
	// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
	// enough that all such attempts are guarded in a try block.
	"use strict";
	
	var arr = [];
	
	var document = window.document;
	
	var getProto = Object.getPrototypeOf;
	
	var slice = arr.slice;
	
	var concat = arr.concat;
	
	var push = arr.push;
	
	var indexOf = arr.indexOf;
	
	var class2type = {};
	
	var toString = class2type.toString;
	
	var hasOwn = class2type.hasOwnProperty;
	
	var fnToString = hasOwn.toString;
	
	var ObjectFunctionString = fnToString.call( Object );
	
	var support = {};
	
	
	
		function DOMEval( code, doc ) {
			doc = doc || document;
	
			var script = doc.createElement( "script" );
	
			script.text = code;
			doc.head.appendChild( script ).parentNode.removeChild( script );
		}
	/* global Symbol */
	// Defining this global in .eslintrc.json would create a danger of using the global
	// unguarded in another place, it seems safer to define global only for this module
	
	
	
	var
		version = "3.1.1",
	
		// Define a local copy of jQuery
		jQuery = function( selector, context ) {
	
			// The jQuery object is actually just the init constructor 'enhanced'
			// Need init if jQuery is called (just allow error to be thrown if not included)
			return new jQuery.fn.init( selector, context );
		},
	
		// Support: Android <=4.0 only
		// Make sure we trim BOM and NBSP
		rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
	
		// Matches dashed string for camelizing
		rmsPrefix = /^-ms-/,
		rdashAlpha = /-([a-z])/g,
	
		// Used by jQuery.camelCase as callback to replace()
		fcamelCase = function( all, letter ) {
			return letter.toUpperCase();
		};
	
	jQuery.fn = jQuery.prototype = {
	
		// The current version of jQuery being used
		jquery: version,
	
		constructor: jQuery,
	
		// The default length of a jQuery object is 0
		length: 0,
	
		toArray: function() {
			return slice.call( this );
		},
	
		// Get the Nth element in the matched element set OR
		// Get the whole matched element set as a clean array
		get: function( num ) {
	
			// Return all the elements in a clean array
			if ( num == null ) {
				return slice.call( this );
			}
	
			// Return just the one element from the set
			return num < 0 ? this[ num + this.length ] : this[ num ];
		},
	
		// Take an array of elements and push it onto the stack
		// (returning the new matched element set)
		pushStack: function( elems ) {
	
			// Build a new jQuery matched element set
			var ret = jQuery.merge( this.constructor(), elems );
	
			// Add the old object onto the stack (as a reference)
			ret.prevObject = this;
	
			// Return the newly-formed element set
			return ret;
		},
	
		// Execute a callback for every element in the matched set.
		each: function( callback ) {
			return jQuery.each( this, callback );
		},
	
		map: function( callback ) {
			return this.pushStack( jQuery.map( this, function( elem, i ) {
				return callback.call( elem, i, elem );
			} ) );
		},
	
		slice: function() {
			return this.pushStack( slice.apply( this, arguments ) );
		},
	
		first: function() {
			return this.eq( 0 );
		},
	
		last: function() {
			return this.eq( -1 );
		},
	
		eq: function( i ) {
			var len = this.length,
				j = +i + ( i < 0 ? len : 0 );
			return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
		},
	
		end: function() {
			return this.prevObject || this.constructor();
		},
	
		// For internal use only.
		// Behaves like an Array's method, not like a jQuery method.
		push: push,
		sort: arr.sort,
		splice: arr.splice
	};
	
	jQuery.extend = jQuery.fn.extend = function() {
		var options, name, src, copy, copyIsArray, clone,
			target = arguments[ 0 ] || {},
			i = 1,
			length = arguments.length,
			deep = false;
	
		// Handle a deep copy situation
		if ( typeof target === "boolean" ) {
			deep = target;
	
			// Skip the boolean and the target
			target = arguments[ i ] || {};
			i++;
		}
	
		// Handle case when target is a string or something (possible in deep copy)
		if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
			target = {};
		}
	
		// Extend jQuery itself if only one argument is passed
		if ( i === length ) {
			target = this;
			i--;
		}
	
		for ( ; i < length; i++ ) {
	
			// Only deal with non-null/undefined values
			if ( ( options = arguments[ i ] ) != null ) {
	
				// Extend the base object
				for ( name in options ) {
					src = target[ name ];
					copy = options[ name ];
	
					// Prevent never-ending loop
					if ( target === copy ) {
						continue;
					}
	
					// Recurse if we're merging plain objects or arrays
					if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
						( copyIsArray = jQuery.isArray( copy ) ) ) ) {
	
						if ( copyIsArray ) {
							copyIsArray = false;
							clone = src && jQuery.isArray( src ) ? src : [];
	
						} else {
							clone = src && jQuery.isPlainObject( src ) ? src : {};
						}
	
						// Never move original objects, clone them
						target[ name ] = jQuery.extend( deep, clone, copy );
	
					// Don't bring in undefined values
					} else if ( copy !== undefined ) {
						target[ name ] = copy;
					}
				}
			}
		}
	
		// Return the modified object
		return target;
	};
	
	jQuery.extend( {
	
		// Unique for each copy of jQuery on the page
		expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),
	
		// Assume jQuery is ready without the ready module
		isReady: true,
	
		error: function( msg ) {
			throw new Error( msg );
		},
	
		noop: function() {},
	
		isFunction: function( obj ) {
			return jQuery.type( obj ) === "function";
		},
	
		isArray: Array.isArray,
	
		isWindow: function( obj ) {
			return obj != null && obj === obj.window;
		},
	
		isNumeric: function( obj ) {
	
			// As of jQuery 3.0, isNumeric is limited to
			// strings and numbers (primitives or objects)
			// that can be coerced to finite numbers (gh-2662)
			var type = jQuery.type( obj );
			return ( type === "number" || type === "string" ) &&
	
				// parseFloat NaNs numeric-cast false positives ("")
				// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
				// subtraction forces infinities to NaN
				!isNaN( obj - parseFloat( obj ) );
		},
	
		isPlainObject: function( obj ) {
			var proto, Ctor;
	
			// Detect obvious negatives
			// Use toString instead of jQuery.type to catch host objects
			if ( !obj || toString.call( obj ) !== "[object Object]" ) {
				return false;
			}
	
			proto = getProto( obj );
	
			// Objects with no prototype (e.g., `Object.create( null )`) are plain
			if ( !proto ) {
				return true;
			}
	
			// Objects with prototype are plain iff they were constructed by a global Object function
			Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
			return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
		},
	
		isEmptyObject: function( obj ) {
	
			/* eslint-disable no-unused-vars */
			// See https://github.com/eslint/eslint/issues/6125
			var name;
	
			for ( name in obj ) {
				return false;
			}
			return true;
		},
	
		type: function( obj ) {
			if ( obj == null ) {
				return obj + "";
			}
	
			// Support: Android <=2.3 only (functionish RegExp)
			return typeof obj === "object" || typeof obj === "function" ?
				class2type[ toString.call( obj ) ] || "object" :
				typeof obj;
		},
	
		// Evaluates a script in a global context
		globalEval: function( code ) {
			DOMEval( code );
		},
	
		// Convert dashed to camelCase; used by the css and data modules
		// Support: IE <=9 - 11, Edge 12 - 13
		// Microsoft forgot to hump their vendor prefix (#9572)
		camelCase: function( string ) {
			return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
		},
	
		nodeName: function( elem, name ) {
			return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
		},
	
		each: function( obj, callback ) {
			var length, i = 0;
	
			if ( isArrayLike( obj ) ) {
				length = obj.length;
				for ( ; i < length; i++ ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			}
	
			return obj;
		},
	
		// Support: Android <=4.0 only
		trim: function( text ) {
			return text == null ?
				"" :
				( text + "" ).replace( rtrim, "" );
		},
	
		// results is for internal usage only
		makeArray: function( arr, results ) {
			var ret = results || [];
	
			if ( arr != null ) {
				if ( isArrayLike( Object( arr ) ) ) {
					jQuery.merge( ret,
						typeof arr === "string" ?
						[ arr ] : arr
					);
				} else {
					push.call( ret, arr );
				}
			}
	
			return ret;
		},
	
		inArray: function( elem, arr, i ) {
			return arr == null ? -1 : indexOf.call( arr, elem, i );
		},
	
		// Support: Android <=4.0 only, PhantomJS 1 only
		// push.apply(_, arraylike) throws on ancient WebKit
		merge: function( first, second ) {
			var len = +second.length,
				j = 0,
				i = first.length;
	
			for ( ; j < len; j++ ) {
				first[ i++ ] = second[ j ];
			}
	
			first.length = i;
	
			return first;
		},
	
		grep: function( elems, callback, invert ) {
			var callbackInverse,
				matches = [],
				i = 0,
				length = elems.length,
				callbackExpect = !invert;
	
			// Go through the array, only saving the items
			// that pass the validator function
			for ( ; i < length; i++ ) {
				callbackInverse = !callback( elems[ i ], i );
				if ( callbackInverse !== callbackExpect ) {
					matches.push( elems[ i ] );
				}
			}
	
			return matches;
		},
	
		// arg is for internal usage only
		map: function( elems, callback, arg ) {
			var length, value,
				i = 0,
				ret = [];
	
			// Go through the array, translating each of the items to their new values
			if ( isArrayLike( elems ) ) {
				length = elems.length;
				for ( ; i < length; i++ ) {
					value = callback( elems[ i ], i, arg );
	
					if ( value != null ) {
						ret.push( value );
					}
				}
	
			// Go through every key on the object,
			} else {
				for ( i in elems ) {
					value = callback( elems[ i ], i, arg );
	
					if ( value != null ) {
						ret.push( value );
					}
				}
			}
	
			// Flatten any nested arrays
			return concat.apply( [], ret );
		},
	
		// A global GUID counter for objects
		guid: 1,
	
		// Bind a function to a context, optionally partially applying any
		// arguments.
		proxy: function( fn, context ) {
			var tmp, args, proxy;
	
			if ( typeof context === "string" ) {
				tmp = fn[ context ];
				context = fn;
				fn = tmp;
			}
	
			// Quick check to determine if target is callable, in the spec
			// this throws a TypeError, but we will just return undefined.
			if ( !jQuery.isFunction( fn ) ) {
				return undefined;
			}
	
			// Simulated bind
			args = slice.call( arguments, 2 );
			proxy = function() {
				return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
			};
	
			// Set the guid of unique handler to the same of original handler, so it can be removed
			proxy.guid = fn.guid = fn.guid || jQuery.guid++;
	
			return proxy;
		},
	
		now: Date.now,
	
		// jQuery.support is not used in Core but other projects attach their
		// properties to it so it needs to exist.
		support: support
	} );
	
	if ( typeof Symbol === "function" ) {
		jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
	}
	
	// Populate the class2type map
	jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
	function( i, name ) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	} );
	
	function isArrayLike( obj ) {
	
		// Support: real iOS 8.2 only (not reproducible in simulator)
		// `in` check used to prevent JIT error (gh-2145)
		// hasOwn isn't used here due to false negatives
		// regarding Nodelist length in IE
		var length = !!obj && "length" in obj && obj.length,
			type = jQuery.type( obj );
	
		if ( type === "function" || jQuery.isWindow( obj ) ) {
			return false;
		}
	
		return type === "array" || length === 0 ||
			typeof length === "number" && length > 0 && ( length - 1 ) in obj;
	}
	var Sizzle =
	/*!
	 * Sizzle CSS Selector Engine v2.3.3
	 * https://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-08-08
	 */
	(function( window ) {
	
	var i,
		support,
		Expr,
		getText,
		isXML,
		tokenize,
		compile,
		select,
		outermostContext,
		sortInput,
		hasDuplicate,
	
		// Local document vars
		setDocument,
		document,
		docElem,
		documentIsHTML,
		rbuggyQSA,
		rbuggyMatches,
		matches,
		contains,
	
		// Instance-specific data
		expando = "sizzle" + 1 * new Date(),
		preferredDoc = window.document,
		dirruns = 0,
		done = 0,
		classCache = createCache(),
		tokenCache = createCache(),
		compilerCache = createCache(),
		sortOrder = function( a, b ) {
			if ( a === b ) {
				hasDuplicate = true;
			}
			return 0;
		},
	
		// Instance methods
		hasOwn = ({}).hasOwnProperty,
		arr = [],
		pop = arr.pop,
		push_native = arr.push,
		push = arr.push,
		slice = arr.slice,
		// Use a stripped-down indexOf as it's faster than native
		// https://jsperf.com/thor-indexof-vs-for/5
		indexOf = function( list, elem ) {
			var i = 0,
				len = list.length;
			for ( ; i < len; i++ ) {
				if ( list[i] === elem ) {
					return i;
				}
			}
			return -1;
		},
	
		booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
	
		// Regular expressions
	
		// http://www.w3.org/TR/css3-selectors/#whitespace
		whitespace = "[\\x20\\t\\r\\n\\f]",
	
		// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
		identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
	
		// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
		attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
			// Operator (capture 2)
			"*([*^$|!~]?=)" + whitespace +
			// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
			"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
			"*\\]",
	
		pseudos = ":(" + identifier + ")(?:\\((" +
			// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
			// 1. quoted (capture 3; capture 4 or capture 5)
			"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
			// 2. simple (capture 6)
			"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
			// 3. anything else (capture 2)
			".*" +
			")\\)|)",
	
		// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
		rwhitespace = new RegExp( whitespace + "+", "g" ),
		rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),
	
		rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
		rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),
	
		rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),
	
		rpseudo = new RegExp( pseudos ),
		ridentifier = new RegExp( "^" + identifier + "$" ),
	
		matchExpr = {
			"ID": new RegExp( "^#(" + identifier + ")" ),
			"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
			"TAG": new RegExp( "^(" + identifier + "|[*])" ),
			"ATTR": new RegExp( "^" + attributes ),
			"PSEUDO": new RegExp( "^" + pseudos ),
			"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
				"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
				"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
			"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
			// For use in libraries implementing .is()
			// We use this for POS matching in `select`
			"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
				whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
		},
	
		rinputs = /^(?:input|select|textarea|button)$/i,
		rheader = /^h\d$/i,
	
		rnative = /^[^{]+\{\s*\[native \w/,
	
		// Easily-parseable/retrievable ID or TAG or CLASS selectors
		rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
	
		rsibling = /[+~]/,
	
		// CSS escapes
		// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
		runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
		funescape = function( _, escaped, escapedWhitespace ) {
			var high = "0x" + escaped - 0x10000;
			// NaN means non-codepoint
			// Support: Firefox<24
			// Workaround erroneous numeric interpretation of +"0x"
			return high !== high || escapedWhitespace ?
				escaped :
				high < 0 ?
					// BMP codepoint
					String.fromCharCode( high + 0x10000 ) :
					// Supplemental Plane codepoint (surrogate pair)
					String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
		},
	
		// CSS string/identifier serialization
		// https://drafts.csswg.org/cssom/#common-serializing-idioms
		rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
		fcssescape = function( ch, asCodePoint ) {
			if ( asCodePoint ) {
	
				// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
				if ( ch === "\0" ) {
					return "\uFFFD";
				}
	
				// Control characters and (dependent upon position) numbers get escaped as code points
				return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
			}
	
			// Other potentially-special ASCII characters get backslash-escaped
			return "\\" + ch;
		},
	
		// Used for iframes
		// See setDocument()
		// Removing the function wrapper causes a "Permission Denied"
		// error in IE
		unloadHandler = function() {
			setDocument();
		},
	
		disabledAncestor = addCombinator(
			function( elem ) {
				return elem.disabled === true && ("form" in elem || "label" in elem);
			},
			{ dir: "parentNode", next: "legend" }
		);
	
	// Optimize for push.apply( _, NodeList )
	try {
		push.apply(
			(arr = slice.call( preferredDoc.childNodes )),
			preferredDoc.childNodes
		);
		// Support: Android<4.0
		// Detect silently failing push.apply
		arr[ preferredDoc.childNodes.length ].nodeType;
	} catch ( e ) {
		push = { apply: arr.length ?
	
			// Leverage slice if possible
			function( target, els ) {
				push_native.apply( target, slice.call(els) );
			} :
	
			// Support: IE<9
			// Otherwise append directly
			function( target, els ) {
				var j = target.length,
					i = 0;
				// Can't trust NodeList.length
				while ( (target[j++] = els[i++]) ) {}
				target.length = j - 1;
			}
		};
	}
	
	function Sizzle( selector, context, results, seed ) {
		var m, i, elem, nid, match, groups, newSelector,
			newContext = context && context.ownerDocument,
	
			// nodeType defaults to 9, since context defaults to document
			nodeType = context ? context.nodeType : 9;
	
		results = results || [];
	
		// Return early from calls with invalid selector or context
		if ( typeof selector !== "string" || !selector ||
			nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {
	
			return results;
		}
	
		// Try to shortcut find operations (as opposed to filters) in HTML documents
		if ( !seed ) {
	
			if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
				setDocument( context );
			}
			context = context || document;
	
			if ( documentIsHTML ) {
	
				// If the selector is sufficiently simple, try using a "get*By*" DOM method
				// (excepting DocumentFragment context, where the methods don't exist)
				if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {
	
					// ID selector
					if ( (m = match[1]) ) {
	
						// Document context
						if ( nodeType === 9 ) {
							if ( (elem = context.getElementById( m )) ) {
	
								// Support: IE, Opera, Webkit
								// TODO: identify versions
								// getElementById can match elements by name instead of ID
								if ( elem.id === m ) {
									results.push( elem );
									return results;
								}
							} else {
								return results;
							}
	
						// Element context
						} else {
	
							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( newContext && (elem = newContext.getElementById( m )) &&
								contains( context, elem ) &&
								elem.id === m ) {
	
								results.push( elem );
								return results;
							}
						}
	
					// Type selector
					} else if ( match[2] ) {
						push.apply( results, context.getElementsByTagName( selector ) );
						return results;
	
					// Class selector
					} else if ( (m = match[3]) && support.getElementsByClassName &&
						context.getElementsByClassName ) {
	
						push.apply( results, context.getElementsByClassName( m ) );
						return results;
					}
				}
	
				// Take advantage of querySelectorAll
				if ( support.qsa &&
					!compilerCache[ selector + " " ] &&
					(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {
	
					if ( nodeType !== 1 ) {
						newContext = context;
						newSelector = selector;
	
					// qSA looks outside Element context, which is not what we want
					// Thanks to Andrew Dupont for this workaround technique
					// Support: IE <=8
					// Exclude object elements
					} else if ( context.nodeName.toLowerCase() !== "object" ) {
	
						// Capture the context ID, setting it first if necessary
						if ( (nid = context.getAttribute( "id" )) ) {
							nid = nid.replace( rcssescape, fcssescape );
						} else {
							context.setAttribute( "id", (nid = expando) );
						}
	
						// Prefix every selector in the list
						groups = tokenize( selector );
						i = groups.length;
						while ( i-- ) {
							groups[i] = "#" + nid + " " + toSelector( groups[i] );
						}
						newSelector = groups.join( "," );
	
						// Expand context for sibling selectors
						newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
							context;
					}
	
					if ( newSelector ) {
						try {
							push.apply( results,
								newContext.querySelectorAll( newSelector )
							);
							return results;
						} catch ( qsaError ) {
						} finally {
							if ( nid === expando ) {
								context.removeAttribute( "id" );
							}
						}
					}
				}
			}
		}
	
		// All others
		return select( selector.replace( rtrim, "$1" ), context, results, seed );
	}
	
	/**
	 * Create key-value caches of limited size
	 * @returns {function(string, object)} Returns the Object data after storing it on itself with
	 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
	 *	deleting the oldest entry
	 */
	function createCache() {
		var keys = [];
	
		function cache( key, value ) {
			// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
			if ( keys.push( key + " " ) > Expr.cacheLength ) {
				// Only keep the most recent entries
				delete cache[ keys.shift() ];
			}
			return (cache[ key + " " ] = value);
		}
		return cache;
	}
	
	/**
	 * Mark a function for special use by Sizzle
	 * @param {Function} fn The function to mark
	 */
	function markFunction( fn ) {
		fn[ expando ] = true;
		return fn;
	}
	
	/**
	 * Support testing using an element
	 * @param {Function} fn Passed the created element and returns a boolean result
	 */
	function assert( fn ) {
		var el = document.createElement("fieldset");
	
		try {
			return !!fn( el );
		} catch (e) {
			return false;
		} finally {
			// Remove from its parent by default
			if ( el.parentNode ) {
				el.parentNode.removeChild( el );
			}
			// release memory in IE
			el = null;
		}
	}
	
	/**
	 * Adds the same handler for all of the specified attrs
	 * @param {String} attrs Pipe-separated list of attributes
	 * @param {Function} handler The method that will be applied
	 */
	function addHandle( attrs, handler ) {
		var arr = attrs.split("|"),
			i = arr.length;
	
		while ( i-- ) {
			Expr.attrHandle[ arr[i] ] = handler;
		}
	}
	
	/**
	 * Checks document order of two siblings
	 * @param {Element} a
	 * @param {Element} b
	 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
	 */
	function siblingCheck( a, b ) {
		var cur = b && a,
			diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
				a.sourceIndex - b.sourceIndex;
	
		// Use IE sourceIndex if available on both nodes
		if ( diff ) {
			return diff;
		}
	
		// Check if b follows a
		if ( cur ) {
			while ( (cur = cur.nextSibling) ) {
				if ( cur === b ) {
					return -1;
				}
			}
		}
	
		return a ? 1 : -1;
	}
	
	/**
	 * Returns a function to use in pseudos for input types
	 * @param {String} type
	 */
	function createInputPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === type;
		};
	}
	
	/**
	 * Returns a function to use in pseudos for buttons
	 * @param {String} type
	 */
	function createButtonPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return (name === "input" || name === "button") && elem.type === type;
		};
	}
	
	/**
	 * Returns a function to use in pseudos for :enabled/:disabled
	 * @param {Boolean} disabled true for :disabled; false for :enabled
	 */
	function createDisabledPseudo( disabled ) {
	
		// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
		return function( elem ) {
	
			// Only certain elements can match :enabled or :disabled
			// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
			// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
			if ( "form" in elem ) {
	
				// Check for inherited disabledness on relevant non-disabled elements:
				// * listed form-associated elements in a disabled fieldset
				//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
				//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
				// * option elements in a disabled optgroup
				//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
				// All such elements have a "form" property.
				if ( elem.parentNode && elem.disabled === false ) {
	
					// Option elements defer to a parent optgroup if present
					if ( "label" in elem ) {
						if ( "label" in elem.parentNode ) {
							return elem.parentNode.disabled === disabled;
						} else {
							return elem.disabled === disabled;
						}
					}
	
					// Support: IE 6 - 11
					// Use the isDisabled shortcut property to check for disabled fieldset ancestors
					return elem.isDisabled === disabled ||
	
						// Where there is no isDisabled, check manually
						/* jshint -W018 */
						elem.isDisabled !== !disabled &&
							disabledAncestor( elem ) === disabled;
				}
	
				return elem.disabled === disabled;
	
			// Try to winnow out elements that can't be disabled before trusting the disabled property.
			// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
			// even exist on them, let alone have a boolean value.
			} else if ( "label" in elem ) {
				return elem.disabled === disabled;
			}
	
			// Remaining elements are neither :enabled nor :disabled
			return false;
		};
	}
	
	/**
	 * Returns a function to use in pseudos for positionals
	 * @param {Function} fn
	 */
	function createPositionalPseudo( fn ) {
		return markFunction(function( argument ) {
			argument = +argument;
			return markFunction(function( seed, matches ) {
				var j,
					matchIndexes = fn( [], seed.length, argument ),
					i = matchIndexes.length;
	
				// Match elements found at the specified indexes
				while ( i-- ) {
					if ( seed[ (j = matchIndexes[i]) ] ) {
						seed[j] = !(matches[j] = seed[j]);
					}
				}
			});
		});
	}
	
	/**
	 * Checks a node for validity as a Sizzle context
	 * @param {Element|Object=} context
	 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
	 */
	function testContext( context ) {
		return context && typeof context.getElementsByTagName !== "undefined" && context;
	}
	
	// Expose support vars for convenience
	support = Sizzle.support = {};
	
	/**
	 * Detects XML nodes
	 * @param {Element|Object} elem An element or a document
	 * @returns {Boolean} True iff elem is a non-HTML XML node
	 */
	isXML = Sizzle.isXML = function( elem ) {
		// documentElement is verified for cases where it doesn't yet exist
		// (such as loading iframes in IE - #4833)
		var documentElement = elem && (elem.ownerDocument || elem).documentElement;
		return documentElement ? documentElement.nodeName !== "HTML" : false;
	};
	
	/**
	 * Sets document-related variables once based on the current document
	 * @param {Element|Object} [doc] An element or document object to use to set the document
	 * @returns {Object} Returns the current document
	 */
	setDocument = Sizzle.setDocument = function( node ) {
		var hasCompare, subWindow,
			doc = node ? node.ownerDocument || node : preferredDoc;
	
		// Return early if doc is invalid or already selected
		if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
			return document;
		}
	
		// Update global variables
		document = doc;
		docElem = document.documentElement;
		documentIsHTML = !isXML( document );
	
		// Support: IE 9-11, Edge
		// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
		if ( preferredDoc !== document &&
			(subWindow = document.defaultView) && subWindow.top !== subWindow ) {
	
			// Support: IE 11, Edge
			if ( subWindow.addEventListener ) {
				subWindow.addEventListener( "unload", unloadHandler, false );
	
			// Support: IE 9 - 10 only
			} else if ( subWindow.attachEvent ) {
				subWindow.attachEvent( "onunload", unloadHandler );
			}
		}
	
		/* Attributes
		---------------------------------------------------------------------- */
	
		// Support: IE<8
		// Verify that getAttribute really returns attributes and not properties
		// (excepting IE8 booleans)
		support.attributes = assert(function( el ) {
			el.className = "i";
			return !el.getAttribute("className");
		});
	
		/* getElement(s)By*
		---------------------------------------------------------------------- */
	
		// Check if getElementsByTagName("*") returns only elements
		support.getElementsByTagName = assert(function( el ) {
			el.appendChild( document.createComment("") );
			return !el.getElementsByTagName("*").length;
		});
	
		// Support: IE<9
		support.getElementsByClassName = rnative.test( document.getElementsByClassName );
	
		// Support: IE<10
		// Check if getElementById returns elements by name
		// The broken getElementById methods don't pick up programmatically-set names,
		// so use a roundabout getElementsByName test
		support.getById = assert(function( el ) {
			docElem.appendChild( el ).id = expando;
			return !document.getElementsByName || !document.getElementsByName( expando ).length;
		});
	
		// ID filter and find
		if ( support.getById ) {
			Expr.filter["ID"] = function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					return elem.getAttribute("id") === attrId;
				};
			};
			Expr.find["ID"] = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var elem = context.getElementById( id );
					return elem ? [ elem ] : [];
				}
			};
		} else {
			Expr.filter["ID"] =  function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					var node = typeof elem.getAttributeNode !== "undefined" &&
						elem.getAttributeNode("id");
					return node && node.value === attrId;
				};
			};
	
			// Support: IE 6 - 7 only
			// getElementById is not reliable as a find shortcut
			Expr.find["ID"] = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var node, i, elems,
						elem = context.getElementById( id );
	
					if ( elem ) {
	
						// Verify the id attribute
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
	
						// Fall back on getElementsByName
						elems = context.getElementsByName( id );
						i = 0;
						while ( (elem = elems[i++]) ) {
							node = elem.getAttributeNode("id");
							if ( node && node.value === id ) {
								return [ elem ];
							}
						}
					}
	
					return [];
				}
			};
		}
	
		// Tag
		Expr.find["TAG"] = support.getElementsByTagName ?
			function( tag, context ) {
				if ( typeof context.getElementsByTagName !== "undefined" ) {
					return context.getElementsByTagName( tag );
	
				// DocumentFragment nodes don't have gEBTN
				} else if ( support.qsa ) {
					return context.querySelectorAll( tag );
				}
			} :
	
			function( tag, context ) {
				var elem,
					tmp = [],
					i = 0,
					// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
					results = context.getElementsByTagName( tag );
	
				// Filter out possible comments
				if ( tag === "*" ) {
					while ( (elem = results[i++]) ) {
						if ( elem.nodeType === 1 ) {
							tmp.push( elem );
						}
					}
	
					return tmp;
				}
				return results;
			};
	
		// Class
		Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
			if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
				return context.getElementsByClassName( className );
			}
		};
	
		/* QSA/matchesSelector
		---------------------------------------------------------------------- */
	
		// QSA and matchesSelector support
	
		// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
		rbuggyMatches = [];
	
		// qSa(:focus) reports false when true (Chrome 21)
		// We allow this because of a bug in IE8/9 that throws an error
		// whenever `document.activeElement` is accessed on an iframe
		// So, we allow :focus to pass through QSA all the time to avoid the IE error
		// See https://bugs.jquery.com/ticket/13378
		rbuggyQSA = [];
	
		if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
			// Build QSA regex
			// Regex strategy adopted from Diego Perini
			assert(function( el ) {
				// Select is set to empty string on purpose
				// This is to test IE's treatment of not explicitly
				// setting a boolean content attribute,
				// since its presence should be enough
				// https://bugs.jquery.com/ticket/12359
				docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
					"<select id='" + expando + "-\r\\' msallowcapture=''>" +
					"<option selected=''></option></select>";
	
				// Support: IE8, Opera 11-12.16
				// Nothing should be selected when empty strings follow ^= or $= or *=
				// The test attribute must be unknown in Opera but "safe" for WinRT
				// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
				if ( el.querySelectorAll("[msallowcapture^='']").length ) {
					rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
				}
	
				// Support: IE8
				// Boolean attributes and "value" are not treated correctly
				if ( !el.querySelectorAll("[selected]").length ) {
					rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
				}
	
				// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
				if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
					rbuggyQSA.push("~=");
				}
	
				// Webkit/Opera - :checked should return selected option elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				// IE8 throws error here and will not see later tests
				if ( !el.querySelectorAll(":checked").length ) {
					rbuggyQSA.push(":checked");
				}
	
				// Support: Safari 8+, iOS 8+
				// https://bugs.webkit.org/show_bug.cgi?id=136851
				// In-page `selector#id sibling-combinator selector` fails
				if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
					rbuggyQSA.push(".#.+[+~]");
				}
			});
	
			assert(function( el ) {
				el.innerHTML = "<a href='' disabled='disabled'></a>" +
					"<select disabled='disabled'><option/></select>";
	
				// Support: Windows 8 Native Apps
				// The type and name attributes are restricted during .innerHTML assignment
				var input = document.createElement("input");
				input.setAttribute( "type", "hidden" );
				el.appendChild( input ).setAttribute( "name", "D" );
	
				// Support: IE8
				// Enforce case-sensitivity of name attribute
				if ( el.querySelectorAll("[name=d]").length ) {
					rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
				}
	
				// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
				// IE8 throws error here and will not see later tests
				if ( el.querySelectorAll(":enabled").length !== 2 ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}
	
				// Support: IE9-11+
				// IE's :disabled selector does not pick up the children of disabled fieldsets
				docElem.appendChild( el ).disabled = true;
				if ( el.querySelectorAll(":disabled").length !== 2 ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}
	
				// Opera 10-11 does not throw on post-comma invalid pseudos
				el.querySelectorAll("*,:x");
				rbuggyQSA.push(",.*:");
			});
		}
	
		if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
			docElem.webkitMatchesSelector ||
			docElem.mozMatchesSelector ||
			docElem.oMatchesSelector ||
			docElem.msMatchesSelector) )) ) {
	
			assert(function( el ) {
				// Check to see if it's possible to do matchesSelector
				// on a disconnected node (IE 9)
				support.disconnectedMatch = matches.call( el, "*" );
	
				// This should fail with an exception
				// Gecko does not error, returns false instead
				matches.call( el, "[s!='']:x" );
				rbuggyMatches.push( "!=", pseudos );
			});
		}
	
		rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
		rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );
	
		/* Contains
		---------------------------------------------------------------------- */
		hasCompare = rnative.test( docElem.compareDocumentPosition );
	
		// Element contains another
		// Purposefully self-exclusive
		// As in, an element does not contain itself
		contains = hasCompare || rnative.test( docElem.contains ) ?
			function( a, b ) {
				var adown = a.nodeType === 9 ? a.documentElement : a,
					bup = b && b.parentNode;
				return a === bup || !!( bup && bup.nodeType === 1 && (
					adown.contains ?
						adown.contains( bup ) :
						a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
				));
			} :
			function( a, b ) {
				if ( b ) {
					while ( (b = b.parentNode) ) {
						if ( b === a ) {
							return true;
						}
					}
				}
				return false;
			};
	
		/* Sorting
		---------------------------------------------------------------------- */
	
		// Document order sorting
		sortOrder = hasCompare ?
		function( a, b ) {
	
			// Flag for duplicate removal
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}
	
			// Sort on method existence if only one input has compareDocumentPosition
			var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
			if ( compare ) {
				return compare;
			}
	
			// Calculate position if both inputs belong to the same document
			compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
				a.compareDocumentPosition( b ) :
	
				// Otherwise we know they are disconnected
				1;
	
			// Disconnected nodes
			if ( compare & 1 ||
				(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {
	
				// Choose the first element that is related to our preferred document
				if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
					return -1;
				}
				if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
					return 1;
				}
	
				// Maintain original order
				return sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;
			}
	
			return compare & 4 ? -1 : 1;
		} :
		function( a, b ) {
			// Exit early if the nodes are identical
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}
	
			var cur,
				i = 0,
				aup = a.parentNode,
				bup = b.parentNode,
				ap = [ a ],
				bp = [ b ];
	
			// Parentless nodes are either documents or disconnected
			if ( !aup || !bup ) {
				return a === document ? -1 :
					b === document ? 1 :
					aup ? -1 :
					bup ? 1 :
					sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;
	
			// If the nodes are siblings, we can do a quick check
			} else if ( aup === bup ) {
				return siblingCheck( a, b );
			}
	
			// Otherwise we need full lists of their ancestors for comparison
			cur = a;
			while ( (cur = cur.parentNode) ) {
				ap.unshift( cur );
			}
			cur = b;
			while ( (cur = cur.parentNode) ) {
				bp.unshift( cur );
			}
	
			// Walk down the tree looking for a discrepancy
			while ( ap[i] === bp[i] ) {
				i++;
			}
	
			return i ?
				// Do a sibling check if the nodes have a common ancestor
				siblingCheck( ap[i], bp[i] ) :
	
				// Otherwise nodes in our document sort first
				ap[i] === preferredDoc ? -1 :
				bp[i] === preferredDoc ? 1 :
				0;
		};
	
		return document;
	};
	
	Sizzle.matches = function( expr, elements ) {
		return Sizzle( expr, null, null, elements );
	};
	
	Sizzle.matchesSelector = function( elem, expr ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}
	
		// Make sure that attribute selectors are quoted
		expr = expr.replace( rattributeQuotes, "='$1']" );
	
		if ( support.matchesSelector && documentIsHTML &&
			!compilerCache[ expr + " " ] &&
			( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
			( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {
	
			try {
				var ret = matches.call( elem, expr );
	
				// IE 9's matchesSelector returns false on disconnected nodes
				if ( ret || support.disconnectedMatch ||
						// As well, disconnected nodes are said to be in a document
						// fragment in IE 9
						elem.document && elem.document.nodeType !== 11 ) {
					return ret;
				}
			} catch (e) {}
		}
	
		return Sizzle( expr, document, null, [ elem ] ).length > 0;
	};
	
	Sizzle.contains = function( context, elem ) {
		// Set document vars if needed
		if ( ( context.ownerDocument || context ) !== document ) {
			setDocument( context );
		}
		return contains( context, elem );
	};
	
	Sizzle.attr = function( elem, name ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}
	
		var fn = Expr.attrHandle[ name.toLowerCase() ],
			// Don't get fooled by Object.prototype properties (jQuery #13807)
			val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
				fn( elem, name, !documentIsHTML ) :
				undefined;
	
		return val !== undefined ?
			val :
			support.attributes || !documentIsHTML ?
				elem.getAttribute( name ) :
				(val = elem.getAttributeNode(name)) && val.specified ?
					val.value :
					null;
	};
	
	Sizzle.escape = function( sel ) {
		return (sel + "").replace( rcssescape, fcssescape );
	};
	
	Sizzle.error = function( msg ) {
		throw new Error( "Syntax error, unrecognized expression: " + msg );
	};
	
	/**
	 * Document sorting and removing duplicates
	 * @param {ArrayLike} results
	 */
	Sizzle.uniqueSort = function( results ) {
		var elem,
			duplicates = [],
			j = 0,
			i = 0;
	
		// Unless we *know* we can detect duplicates, assume their presence
		hasDuplicate = !support.detectDuplicates;
		sortInput = !support.sortStable && results.slice( 0 );
		results.sort( sortOrder );
	
		if ( hasDuplicate ) {
			while ( (elem = results[i++]) ) {
				if ( elem === results[ i ] ) {
					j = duplicates.push( i );
				}
			}
			while ( j-- ) {
				results.splice( duplicates[ j ], 1 );
			}
		}
	
		// Clear input after sorting to release objects
		// See https://github.com/jquery/sizzle/pull/225
		sortInput = null;
	
		return results;
	};
	
	/**
	 * Utility function for retrieving the text value of an array of DOM nodes
	 * @param {Array|Element} elem
	 */
	getText = Sizzle.getText = function( elem ) {
		var node,
			ret = "",
			i = 0,
			nodeType = elem.nodeType;
	
		if ( !nodeType ) {
			// If no nodeType, this is expected to be an array
			while ( (node = elem[i++]) ) {
				// Do not traverse comment nodes
				ret += getText( node );
			}
		} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
			// Use textContent for elements
			// innerText usage removed for consistency of new lines (jQuery #11153)
			if ( typeof elem.textContent === "string" ) {
				return elem.textContent;
			} else {
				// Traverse its children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					ret += getText( elem );
				}
			}
		} else if ( nodeType === 3 || nodeType === 4 ) {
			return elem.nodeValue;
		}
		// Do not include comment or processing instruction nodes
	
		return ret;
	};
	
	Expr = Sizzle.selectors = {
	
		// Can be adjusted by the user
		cacheLength: 50,
	
		createPseudo: markFunction,
	
		match: matchExpr,
	
		attrHandle: {},
	
		find: {},
	
		relative: {
			">": { dir: "parentNode", first: true },
			" ": { dir: "parentNode" },
			"+": { dir: "previousSibling", first: true },
			"~": { dir: "previousSibling" }
		},
	
		preFilter: {
			"ATTR": function( match ) {
				match[1] = match[1].replace( runescape, funescape );
	
				// Move the given value to match[3] whether quoted or unquoted
				match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );
	
				if ( match[2] === "~=" ) {
					match[3] = " " + match[3] + " ";
				}
	
				return match.slice( 0, 4 );
			},
	
			"CHILD": function( match ) {
				/* matches from matchExpr["CHILD"]
					1 type (only|nth|...)
					2 what (child|of-type)
					3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
					4 xn-component of xn+y argument ([+-]?\d*n|)
					5 sign of xn-component
					6 x of xn-component
					7 sign of y-component
					8 y of y-component
				*/
				match[1] = match[1].toLowerCase();
	
				if ( match[1].slice( 0, 3 ) === "nth" ) {
					// nth-* requires argument
					if ( !match[3] ) {
						Sizzle.error( match[0] );
					}
	
					// numeric x and y parameters for Expr.filter.CHILD
					// remember that false/true cast respectively to 0/1
					match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
					match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );
	
				// other types prohibit arguments
				} else if ( match[3] ) {
					Sizzle.error( match[0] );
				}
	
				return match;
			},
	
			"PSEUDO": function( match ) {
				var excess,
					unquoted = !match[6] && match[2];
	
				if ( matchExpr["CHILD"].test( match[0] ) ) {
					return null;
				}
	
				// Accept quoted arguments as-is
				if ( match[3] ) {
					match[2] = match[4] || match[5] || "";
	
				// Strip excess characters from unquoted arguments
				} else if ( unquoted && rpseudo.test( unquoted ) &&
					// Get excess from tokenize (recursively)
					(excess = tokenize( unquoted, true )) &&
					// advance to the next closing parenthesis
					(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {
	
					// excess is a negative index
					match[0] = match[0].slice( 0, excess );
					match[2] = unquoted.slice( 0, excess );
				}
	
				// Return only captures needed by the pseudo filter method (type and argument)
				return match.slice( 0, 3 );
			}
		},
	
		filter: {
	
			"TAG": function( nodeNameSelector ) {
				var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
				return nodeNameSelector === "*" ?
					function() { return true; } :
					function( elem ) {
						return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
					};
			},
	
			"CLASS": function( className ) {
				var pattern = classCache[ className + " " ];
	
				return pattern ||
					(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
					classCache( className, function( elem ) {
						return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
					});
			},
	
			"ATTR": function( name, operator, check ) {
				return function( elem ) {
					var result = Sizzle.attr( elem, name );
	
					if ( result == null ) {
						return operator === "!=";
					}
					if ( !operator ) {
						return true;
					}
	
					result += "";
	
					return operator === "=" ? result === check :
						operator === "!=" ? result !== check :
						operator === "^=" ? check && result.indexOf( check ) === 0 :
						operator === "*=" ? check && result.indexOf( check ) > -1 :
						operator === "$=" ? check && result.slice( -check.length ) === check :
						operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
						operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
						false;
				};
			},
	
			"CHILD": function( type, what, argument, first, last ) {
				var simple = type.slice( 0, 3 ) !== "nth",
					forward = type.slice( -4 ) !== "last",
					ofType = what === "of-type";
	
				return first === 1 && last === 0 ?
	
					// Shortcut for :nth-*(n)
					function( elem ) {
						return !!elem.parentNode;
					} :
	
					function( elem, context, xml ) {
						var cache, uniqueCache, outerCache, node, nodeIndex, start,
							dir = simple !== forward ? "nextSibling" : "previousSibling",
							parent = elem.parentNode,
							name = ofType && elem.nodeName.toLowerCase(),
							useCache = !xml && !ofType,
							diff = false;
	
						if ( parent ) {
	
							// :(first|last|only)-(child|of-type)
							if ( simple ) {
								while ( dir ) {
									node = elem;
									while ( (node = node[ dir ]) ) {
										if ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) {
	
											return false;
										}
									}
									// Reverse direction for :only-* (if we haven't yet done so)
									start = dir = type === "only" && !start && "nextSibling";
								}
								return true;
							}
	
							start = [ forward ? parent.firstChild : parent.lastChild ];
	
							// non-xml :nth-child(...) stores cache data on `parent`
							if ( forward && useCache ) {
	
								// Seek `elem` from a previously-cached index
	
								// ...in a gzip-friendly way
								node = parent;
								outerCache = node[ expando ] || (node[ expando ] = {});
	
								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});
	
								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex && cache[ 2 ];
								node = nodeIndex && parent.childNodes[ nodeIndex ];
	
								while ( (node = ++nodeIndex && node && node[ dir ] ||
	
									// Fallback to seeking `elem` from the start
									(diff = nodeIndex = 0) || start.pop()) ) {
	
									// When found, cache indexes on `parent` and break
									if ( node.nodeType === 1 && ++diff && node === elem ) {
										uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
										break;
									}
								}
	
							} else {
								// Use previously-cached element index if available
								if ( useCache ) {
									// ...in a gzip-friendly way
									node = elem;
									outerCache = node[ expando ] || (node[ expando ] = {});
	
									// Support: IE <9 only
									// Defend against cloned attroperties (jQuery gh-1709)
									uniqueCache = outerCache[ node.uniqueID ] ||
										(outerCache[ node.uniqueID ] = {});
	
									cache = uniqueCache[ type ] || [];
									nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
									diff = nodeIndex;
								}
	
								// xml :nth-child(...)
								// or :nth-last-child(...) or :nth(-last)?-of-type(...)
								if ( diff === false ) {
									// Use the same loop as above to seek `elem` from the start
									while ( (node = ++nodeIndex && node && node[ dir ] ||
										(diff = nodeIndex = 0) || start.pop()) ) {
	
										if ( ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) &&
											++diff ) {
	
											// Cache the index of each encountered element
											if ( useCache ) {
												outerCache = node[ expando ] || (node[ expando ] = {});
	
												// Support: IE <9 only
												// Defend against cloned attroperties (jQuery gh-1709)
												uniqueCache = outerCache[ node.uniqueID ] ||
													(outerCache[ node.uniqueID ] = {});
	
												uniqueCache[ type ] = [ dirruns, diff ];
											}
	
											if ( node === elem ) {
												break;
											}
										}
									}
								}
							}
	
							// Incorporate the offset, then check against cycle size
							diff -= last;
							return diff === first || ( diff % first === 0 && diff / first >= 0 );
						}
					};
			},
	
			"PSEUDO": function( pseudo, argument ) {
				// pseudo-class names are case-insensitive
				// http://www.w3.org/TR/selectors/#pseudo-classes
				// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
				// Remember that setFilters inherits from pseudos
				var args,
					fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
						Sizzle.error( "unsupported pseudo: " + pseudo );
	
				// The user may use createPseudo to indicate that
				// arguments are needed to create the filter function
				// just as Sizzle does
				if ( fn[ expando ] ) {
					return fn( argument );
				}
	
				// But maintain support for old signatures
				if ( fn.length > 1 ) {
					args = [ pseudo, pseudo, "", argument ];
					return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
						markFunction(function( seed, matches ) {
							var idx,
								matched = fn( seed, argument ),
								i = matched.length;
							while ( i-- ) {
								idx = indexOf( seed, matched[i] );
								seed[ idx ] = !( matches[ idx ] = matched[i] );
							}
						}) :
						function( elem ) {
							return fn( elem, 0, args );
						};
				}
	
				return fn;
			}
		},
	
		pseudos: {
			// Potentially complex pseudos
			"not": markFunction(function( selector ) {
				// Trim the selector passed to compile
				// to avoid treating leading and trailing
				// spaces as combinators
				var input = [],
					results = [],
					matcher = compile( selector.replace( rtrim, "$1" ) );
	
				return matcher[ expando ] ?
					markFunction(function( seed, matches, context, xml ) {
						var elem,
							unmatched = matcher( seed, null, xml, [] ),
							i = seed.length;
	
						// Match elements unmatched by `matcher`
						while ( i-- ) {
							if ( (elem = unmatched[i]) ) {
								seed[i] = !(matches[i] = elem);
							}
						}
					}) :
					function( elem, context, xml ) {
						input[0] = elem;
						matcher( input, null, xml, results );
						// Don't keep the element (issue #299)
						input[0] = null;
						return !results.pop();
					};
			}),
	
			"has": markFunction(function( selector ) {
				return function( elem ) {
					return Sizzle( selector, elem ).length > 0;
				};
			}),
	
			"contains": markFunction(function( text ) {
				text = text.replace( runescape, funescape );
				return function( elem ) {
					return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
				};
			}),
	
			// "Whether an element is represented by a :lang() selector
			// is based solely on the element's language value
			// being equal to the identifier C,
			// or beginning with the identifier C immediately followed by "-".
			// The matching of C against the element's language value is performed case-insensitively.
			// The identifier C does not have to be a valid language name."
			// http://www.w3.org/TR/selectors/#lang-pseudo
			"lang": markFunction( function( lang ) {
				// lang value must be a valid identifier
				if ( !ridentifier.test(lang || "") ) {
					Sizzle.error( "unsupported lang: " + lang );
				}
				lang = lang.replace( runescape, funescape ).toLowerCase();
				return function( elem ) {
					var elemLang;
					do {
						if ( (elemLang = documentIsHTML ?
							elem.lang :
							elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {
	
							elemLang = elemLang.toLowerCase();
							return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
						}
					} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
					return false;
				};
			}),
	
			// Miscellaneous
			"target": function( elem ) {
				var hash = window.location && window.location.hash;
				return hash && hash.slice( 1 ) === elem.id;
			},
	
			"root": function( elem ) {
				return elem === docElem;
			},
	
			"focus": function( elem ) {
				return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
			},
	
			// Boolean properties
			"enabled": createDisabledPseudo( false ),
			"disabled": createDisabledPseudo( true ),
	
			"checked": function( elem ) {
				// In CSS3, :checked should return both checked and selected elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				var nodeName = elem.nodeName.toLowerCase();
				return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
			},
	
			"selected": function( elem ) {
				// Accessing this property makes selected-by-default
				// options in Safari work properly
				if ( elem.parentNode ) {
					elem.parentNode.selectedIndex;
				}
	
				return elem.selected === true;
			},
	
			// Contents
			"empty": function( elem ) {
				// http://www.w3.org/TR/selectors/#empty-pseudo
				// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
				//   but not by others (comment: 8; processing instruction: 7; etc.)
				// nodeType < 6 works because attributes (2) do not appear as children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					if ( elem.nodeType < 6 ) {
						return false;
					}
				}
				return true;
			},
	
			"parent": function( elem ) {
				return !Expr.pseudos["empty"]( elem );
			},
	
			// Element/input types
			"header": function( elem ) {
				return rheader.test( elem.nodeName );
			},
	
			"input": function( elem ) {
				return rinputs.test( elem.nodeName );
			},
	
			"button": function( elem ) {
				var name = elem.nodeName.toLowerCase();
				return name === "input" && elem.type === "button" || name === "button";
			},
	
			"text": function( elem ) {
				var attr;
				return elem.nodeName.toLowerCase() === "input" &&
					elem.type === "text" &&
	
					// Support: IE<8
					// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
					( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
			},
	
			// Position-in-collection
			"first": createPositionalPseudo(function() {
				return [ 0 ];
			}),
	
			"last": createPositionalPseudo(function( matchIndexes, length ) {
				return [ length - 1 ];
			}),
	
			"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
				return [ argument < 0 ? argument + length : argument ];
			}),
	
			"even": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 0;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),
	
			"odd": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 1;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),
	
			"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; --i >= 0; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),
	
			"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; ++i < length; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			})
		}
	};
	
	Expr.pseudos["nth"] = Expr.pseudos["eq"];
	
	// Add button/input type pseudos
	for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
		Expr.pseudos[ i ] = createInputPseudo( i );
	}
	for ( i in { submit: true, reset: true } ) {
		Expr.pseudos[ i ] = createButtonPseudo( i );
	}
	
	// Easy API for creating new setFilters
	function setFilters() {}
	setFilters.prototype = Expr.filters = Expr.pseudos;
	Expr.setFilters = new setFilters();
	
	tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
		var matched, match, tokens, type,
			soFar, groups, preFilters,
			cached = tokenCache[ selector + " " ];
	
		if ( cached ) {
			return parseOnly ? 0 : cached.slice( 0 );
		}
	
		soFar = selector;
		groups = [];
		preFilters = Expr.preFilter;
	
		while ( soFar ) {
	
			// Comma and first run
			if ( !matched || (match = rcomma.exec( soFar )) ) {
				if ( match ) {
					// Don't consume trailing commas as valid
					soFar = soFar.slice( match[0].length ) || soFar;
				}
				groups.push( (tokens = []) );
			}
	
			matched = false;
	
			// Combinators
			if ( (match = rcombinators.exec( soFar )) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					// Cast descendant combinators to space
					type: match[0].replace( rtrim, " " )
				});
				soFar = soFar.slice( matched.length );
			}
	
			// Filters
			for ( type in Expr.filter ) {
				if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
					(match = preFilters[ type ]( match ))) ) {
					matched = match.shift();
					tokens.push({
						value: matched,
						type: type,
						matches: match
					});
					soFar = soFar.slice( matched.length );
				}
			}
	
			if ( !matched ) {
				break;
			}
		}
	
		// Return the length of the invalid excess
		// if we're just parsing
		// Otherwise, throw an error or return tokens
		return parseOnly ?
			soFar.length :
			soFar ?
				Sizzle.error( selector ) :
				// Cache the tokens
				tokenCache( selector, groups ).slice( 0 );
	};
	
	function toSelector( tokens ) {
		var i = 0,
			len = tokens.length,
			selector = "";
		for ( ; i < len; i++ ) {
			selector += tokens[i].value;
		}
		return selector;
	}
	
	function addCombinator( matcher, combinator, base ) {
		var dir = combinator.dir,
			skip = combinator.next,
			key = skip || dir,
			checkNonElements = base && key === "parentNode",
			doneName = done++;
	
		return combinator.first ?
			// Check against closest ancestor/preceding element
			function( elem, context, xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						return matcher( elem, context, xml );
					}
				}
				return false;
			} :
	
			// Check against all ancestor/preceding elements
			function( elem, context, xml ) {
				var oldCache, uniqueCache, outerCache,
					newCache = [ dirruns, doneName ];
	
				// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
				if ( xml ) {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							if ( matcher( elem, context, xml ) ) {
								return true;
							}
						}
					}
				} else {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							outerCache = elem[ expando ] || (elem[ expando ] = {});
	
							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});
	
							if ( skip && skip === elem.nodeName.toLowerCase() ) {
								elem = elem[ dir ] || elem;
							} else if ( (oldCache = uniqueCache[ key ]) &&
								oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {
	
								// Assign to newCache so results back-propagate to previous elements
								return (newCache[ 2 ] = oldCache[ 2 ]);
							} else {
								// Reuse newcache so results back-propagate to previous elements
								uniqueCache[ key ] = newCache;
	
								// A match means we're done; a fail means we have to keep checking
								if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
									return true;
								}
							}
						}
					}
				}
				return false;
			};
	}
	
	function elementMatcher( matchers ) {
		return matchers.length > 1 ?
			function( elem, context, xml ) {
				var i = matchers.length;
				while ( i-- ) {
					if ( !matchers[i]( elem, context, xml ) ) {
						return false;
					}
				}
				return true;
			} :
			matchers[0];
	}
	
	function multipleContexts( selector, contexts, results ) {
		var i = 0,
			len = contexts.length;
		for ( ; i < len; i++ ) {
			Sizzle( selector, contexts[i], results );
		}
		return results;
	}
	
	function condense( unmatched, map, filter, context, xml ) {
		var elem,
			newUnmatched = [],
			i = 0,
			len = unmatched.length,
			mapped = map != null;
	
		for ( ; i < len; i++ ) {
			if ( (elem = unmatched[i]) ) {
				if ( !filter || filter( elem, context, xml ) ) {
					newUnmatched.push( elem );
					if ( mapped ) {
						map.push( i );
					}
				}
			}
		}
	
		return newUnmatched;
	}
	
	function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
		if ( postFilter && !postFilter[ expando ] ) {
			postFilter = setMatcher( postFilter );
		}
		if ( postFinder && !postFinder[ expando ] ) {
			postFinder = setMatcher( postFinder, postSelector );
		}
		return markFunction(function( seed, results, context, xml ) {
			var temp, i, elem,
				preMap = [],
				postMap = [],
				preexisting = results.length,
	
				// Get initial elements from seed or context
				elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),
	
				// Prefilter to get matcher input, preserving a map for seed-results synchronization
				matcherIn = preFilter && ( seed || !selector ) ?
					condense( elems, preMap, preFilter, context, xml ) :
					elems,
	
				matcherOut = matcher ?
					// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
					postFinder || ( seed ? preFilter : preexisting || postFilter ) ?
	
						// ...intermediate processing is necessary
						[] :
	
						// ...otherwise use results directly
						results :
					matcherIn;
	
			// Find primary matches
			if ( matcher ) {
				matcher( matcherIn, matcherOut, context, xml );
			}
	
			// Apply postFilter
			if ( postFilter ) {
				temp = condense( matcherOut, postMap );
				postFilter( temp, [], context, xml );
	
				// Un-match failing elements by moving them back to matcherIn
				i = temp.length;
				while ( i-- ) {
					if ( (elem = temp[i]) ) {
						matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
					}
				}
			}
	
			if ( seed ) {
				if ( postFinder || preFilter ) {
					if ( postFinder ) {
						// Get the final matcherOut by condensing this intermediate into postFinder contexts
						temp = [];
						i = matcherOut.length;
						while ( i-- ) {
							if ( (elem = matcherOut[i]) ) {
								// Restore matcherIn since elem is not yet a final match
								temp.push( (matcherIn[i] = elem) );
							}
						}
						postFinder( null, (matcherOut = []), temp, xml );
					}
	
					// Move matched elements from seed to results to keep them synchronized
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) &&
							(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {
	
							seed[temp] = !(results[temp] = elem);
						}
					}
				}
	
			// Add elements to results, through postFinder if defined
			} else {
				matcherOut = condense(
					matcherOut === results ?
						matcherOut.splice( preexisting, matcherOut.length ) :
						matcherOut
				);
				if ( postFinder ) {
					postFinder( null, results, matcherOut, xml );
				} else {
					push.apply( results, matcherOut );
				}
			}
		});
	}
	
	function matcherFromTokens( tokens ) {
		var checkContext, matcher, j,
			len = tokens.length,
			leadingRelative = Expr.relative[ tokens[0].type ],
			implicitRelative = leadingRelative || Expr.relative[" "],
			i = leadingRelative ? 1 : 0,
	
			// The foundational matcher ensures that elements are reachable from top-level context(s)
			matchContext = addCombinator( function( elem ) {
				return elem === checkContext;
			}, implicitRelative, true ),
			matchAnyContext = addCombinator( function( elem ) {
				return indexOf( checkContext, elem ) > -1;
			}, implicitRelative, true ),
			matchers = [ function( elem, context, xml ) {
				var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
					(checkContext = context).nodeType ?
						matchContext( elem, context, xml ) :
						matchAnyContext( elem, context, xml ) );
				// Avoid hanging onto element (issue #299)
				checkContext = null;
				return ret;
			} ];
	
		for ( ; i < len; i++ ) {
			if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
				matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
			} else {
				matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );
	
				// Return special upon seeing a positional matcher
				if ( matcher[ expando ] ) {
					// Find the next relative operator (if any) for proper handling
					j = ++i;
					for ( ; j < len; j++ ) {
						if ( Expr.relative[ tokens[j].type ] ) {
							break;
						}
					}
					return setMatcher(
						i > 1 && elementMatcher( matchers ),
						i > 1 && toSelector(
							// If the preceding token was a descendant combinator, insert an implicit any-element `*`
							tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
						).replace( rtrim, "$1" ),
						matcher,
						i < j && matcherFromTokens( tokens.slice( i, j ) ),
						j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
						j < len && toSelector( tokens )
					);
				}
				matchers.push( matcher );
			}
		}
	
		return elementMatcher( matchers );
	}
	
	function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
		var bySet = setMatchers.length > 0,
			byElement = elementMatchers.length > 0,
			superMatcher = function( seed, context, xml, results, outermost ) {
				var elem, j, matcher,
					matchedCount = 0,
					i = "0",
					unmatched = seed && [],
					setMatched = [],
					contextBackup = outermostContext,
					// We must always have either seed elements or outermost context
					elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
					// Use integer dirruns iff this is the outermost matcher
					dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
					len = elems.length;
	
				if ( outermost ) {
					outermostContext = context === document || context || outermost;
				}
	
				// Add elements passing elementMatchers directly to results
				// Support: IE<9, Safari
				// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
				for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
					if ( byElement && elem ) {
						j = 0;
						if ( !context && elem.ownerDocument !== document ) {
							setDocument( elem );
							xml = !documentIsHTML;
						}
						while ( (matcher = elementMatchers[j++]) ) {
							if ( matcher( elem, context || document, xml) ) {
								results.push( elem );
								break;
							}
						}
						if ( outermost ) {
							dirruns = dirrunsUnique;
						}
					}
	
					// Track unmatched elements for set filters
					if ( bySet ) {
						// They will have gone through all possible matchers
						if ( (elem = !matcher && elem) ) {
							matchedCount--;
						}
	
						// Lengthen the array for every element, matched or not
						if ( seed ) {
							unmatched.push( elem );
						}
					}
				}
	
				// `i` is now the count of elements visited above, and adding it to `matchedCount`
				// makes the latter nonnegative.
				matchedCount += i;
	
				// Apply set filters to unmatched elements
				// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
				// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
				// no element matchers and no seed.
				// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
				// case, which will result in a "00" `matchedCount` that differs from `i` but is also
				// numerically zero.
				if ( bySet && i !== matchedCount ) {
					j = 0;
					while ( (matcher = setMatchers[j++]) ) {
						matcher( unmatched, setMatched, context, xml );
					}
	
					if ( seed ) {
						// Reintegrate element matches to eliminate the need for sorting
						if ( matchedCount > 0 ) {
							while ( i-- ) {
								if ( !(unmatched[i] || setMatched[i]) ) {
									setMatched[i] = pop.call( results );
								}
							}
						}
	
						// Discard index placeholder values to get only actual matches
						setMatched = condense( setMatched );
					}
	
					// Add matches to results
					push.apply( results, setMatched );
	
					// Seedless set matches succeeding multiple successful matchers stipulate sorting
					if ( outermost && !seed && setMatched.length > 0 &&
						( matchedCount + setMatchers.length ) > 1 ) {
	
						Sizzle.uniqueSort( results );
					}
				}
	
				// Override manipulation of globals by nested matchers
				if ( outermost ) {
					dirruns = dirrunsUnique;
					outermostContext = contextBackup;
				}
	
				return unmatched;
			};
	
		return bySet ?
			markFunction( superMatcher ) :
			superMatcher;
	}
	
	compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
		var i,
			setMatchers = [],
			elementMatchers = [],
			cached = compilerCache[ selector + " " ];
	
		if ( !cached ) {
			// Generate a function of recursive functions that can be used to check each element
			if ( !match ) {
				match = tokenize( selector );
			}
			i = match.length;
			while ( i-- ) {
				cached = matcherFromTokens( match[i] );
				if ( cached[ expando ] ) {
					setMatchers.push( cached );
				} else {
					elementMatchers.push( cached );
				}
			}
	
			// Cache the compiled function
			cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );
	
			// Save selector and tokenization
			cached.selector = selector;
		}
		return cached;
	};
	
	/**
	 * A low-level selection function that works with Sizzle's compiled
	 *  selector functions
	 * @param {String|Function} selector A selector or a pre-compiled
	 *  selector function built with Sizzle.compile
	 * @param {Element} context
	 * @param {Array} [results]
	 * @param {Array} [seed] A set of elements to match against
	 */
	select = Sizzle.select = function( selector, context, results, seed ) {
		var i, tokens, token, type, find,
			compiled = typeof selector === "function" && selector,
			match = !seed && tokenize( (selector = compiled.selector || selector) );
	
		results = results || [];
	
		// Try to minimize operations if there is only one selector in the list and no seed
		// (the latter of which guarantees us context)
		if ( match.length === 1 ) {
	
			// Reduce context if the leading compound selector is an ID
			tokens = match[0] = match[0].slice( 0 );
			if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
					context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {
	
				context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
				if ( !context ) {
					return results;
	
				// Precompiled matchers will still verify ancestry, so step up a level
				} else if ( compiled ) {
					context = context.parentNode;
				}
	
				selector = selector.slice( tokens.shift().value.length );
			}
	
			// Fetch a seed set for right-to-left matching
			i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
			while ( i-- ) {
				token = tokens[i];
	
				// Abort if we hit a combinator
				if ( Expr.relative[ (type = token.type) ] ) {
					break;
				}
				if ( (find = Expr.find[ type ]) ) {
					// Search, expanding context for leading sibling combinators
					if ( (seed = find(
						token.matches[0].replace( runescape, funescape ),
						rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
					)) ) {
	
						// If seed is empty or no tokens remain, we can return early
						tokens.splice( i, 1 );
						selector = seed.length && toSelector( tokens );
						if ( !selector ) {
							push.apply( results, seed );
							return results;
						}
	
						break;
					}
				}
			}
		}
	
		// Compile and execute a filtering function if one is not provided
		// Provide `match` to avoid retokenization if we modified the selector above
		( compiled || compile( selector, match ) )(
			seed,
			context,
			!documentIsHTML,
			results,
			!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
		);
		return results;
	};
	
	// One-time assignments
	
	// Sort stability
	support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;
	
	// Support: Chrome 14-35+
	// Always assume duplicates if they aren't passed to the comparison function
	support.detectDuplicates = !!hasDuplicate;
	
	// Initialize against the default document
	setDocument();
	
	// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
	// Detached nodes confoundingly follow *each other*
	support.sortDetached = assert(function( el ) {
		// Should return 1, but returns 4 (following)
		return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
	});
	
	// Support: IE<8
	// Prevent attribute/property "interpolation"
	// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if ( !assert(function( el ) {
		el.innerHTML = "<a href='#'></a>";
		return el.firstChild.getAttribute("href") === "#" ;
	}) ) {
		addHandle( "type|href|height|width", function( elem, name, isXML ) {
			if ( !isXML ) {
				return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
			}
		});
	}
	
	// Support: IE<9
	// Use defaultValue in place of getAttribute("value")
	if ( !support.attributes || !assert(function( el ) {
		el.innerHTML = "<input/>";
		el.firstChild.setAttribute( "value", "" );
		return el.firstChild.getAttribute( "value" ) === "";
	}) ) {
		addHandle( "value", function( elem, name, isXML ) {
			if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
				return elem.defaultValue;
			}
		});
	}
	
	// Support: IE<9
	// Use getAttributeNode to fetch booleans when getAttribute lies
	if ( !assert(function( el ) {
		return el.getAttribute("disabled") == null;
	}) ) {
		addHandle( booleans, function( elem, name, isXML ) {
			var val;
			if ( !isXML ) {
				return elem[ name ] === true ? name.toLowerCase() :
						(val = elem.getAttributeNode( name )) && val.specified ?
						val.value :
					null;
			}
		});
	}
	
	return Sizzle;
	
	})( window );
	
	
	
	jQuery.find = Sizzle;
	jQuery.expr = Sizzle.selectors;
	
	// Deprecated
	jQuery.expr[ ":" ] = jQuery.expr.pseudos;
	jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
	jQuery.text = Sizzle.getText;
	jQuery.isXMLDoc = Sizzle.isXML;
	jQuery.contains = Sizzle.contains;
	jQuery.escapeSelector = Sizzle.escape;
	
	
	
	
	var dir = function( elem, dir, until ) {
		var matched = [],
			truncate = until !== undefined;
	
		while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
			if ( elem.nodeType === 1 ) {
				if ( truncate && jQuery( elem ).is( until ) ) {
					break;
				}
				matched.push( elem );
			}
		}
		return matched;
	};
	
	
	var siblings = function( n, elem ) {
		var matched = [];
	
		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				matched.push( n );
			}
		}
	
		return matched;
	};
	
	
	var rneedsContext = jQuery.expr.match.needsContext;
	
	var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );
	
	
	
	var risSimple = /^.[^:#\[\.,]*$/;
	
	// Implement the identical functionality for filter and not
	function winnow( elements, qualifier, not ) {
		if ( jQuery.isFunction( qualifier ) ) {
			return jQuery.grep( elements, function( elem, i ) {
				return !!qualifier.call( elem, i, elem ) !== not;
			} );
		}
	
		// Single element
		if ( qualifier.nodeType ) {
			return jQuery.grep( elements, function( elem ) {
				return ( elem === qualifier ) !== not;
			} );
		}
	
		// Arraylike of elements (jQuery, arguments, Array)
		if ( typeof qualifier !== "string" ) {
			return jQuery.grep( elements, function( elem ) {
				return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
			} );
		}
	
		// Simple selector that can be filtered directly, removing non-Elements
		if ( risSimple.test( qualifier ) ) {
			return jQuery.filter( qualifier, elements, not );
		}
	
		// Complex selector, compare the two sets, removing non-Elements
		qualifier = jQuery.filter( qualifier, elements );
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not && elem.nodeType === 1;
		} );
	}
	
	jQuery.filter = function( expr, elems, not ) {
		var elem = elems[ 0 ];
	
		if ( not ) {
			expr = ":not(" + expr + ")";
		}
	
		if ( elems.length === 1 && elem.nodeType === 1 ) {
			return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
		}
	
		return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
			return elem.nodeType === 1;
		} ) );
	};
	
	jQuery.fn.extend( {
		find: function( selector ) {
			var i, ret,
				len = this.length,
				self = this;
	
			if ( typeof selector !== "string" ) {
				return this.pushStack( jQuery( selector ).filter( function() {
					for ( i = 0; i < len; i++ ) {
						if ( jQuery.contains( self[ i ], this ) ) {
							return true;
						}
					}
				} ) );
			}
	
			ret = this.pushStack( [] );
	
			for ( i = 0; i < len; i++ ) {
				jQuery.find( selector, self[ i ], ret );
			}
	
			return len > 1 ? jQuery.uniqueSort( ret ) : ret;
		},
		filter: function( selector ) {
			return this.pushStack( winnow( this, selector || [], false ) );
		},
		not: function( selector ) {
			return this.pushStack( winnow( this, selector || [], true ) );
		},
		is: function( selector ) {
			return !!winnow(
				this,
	
				// If this is a positional/relative selector, check membership in the returned set
				// so $("p:first").is("p:last") won't return true for a doc with two "p".
				typeof selector === "string" && rneedsContext.test( selector ) ?
					jQuery( selector ) :
					selector || [],
				false
			).length;
		}
	} );
	
	
	// Initialize a jQuery object
	
	
	// A central reference to the root jQuery(document)
	var rootjQuery,
	
		// A simple way to check for HTML strings
		// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
		// Strict HTML recognition (#11290: must start with <)
		// Shortcut simple #id case for speed
		rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
	
		init = jQuery.fn.init = function( selector, context, root ) {
			var match, elem;
	
			// HANDLE: $(""), $(null), $(undefined), $(false)
			if ( !selector ) {
				return this;
			}
	
			// Method init() accepts an alternate rootjQuery
			// so migrate can support jQuery.sub (gh-2101)
			root = root || rootjQuery;
	
			// Handle HTML strings
			if ( typeof selector === "string" ) {
				if ( selector[ 0 ] === "<" &&
					selector[ selector.length - 1 ] === ">" &&
					selector.length >= 3 ) {
	
					// Assume that strings that start and end with <> are HTML and skip the regex check
					match = [ null, selector, null ];
	
				} else {
					match = rquickExpr.exec( selector );
				}
	
				// Match html or make sure no context is specified for #id
				if ( match && ( match[ 1 ] || !context ) ) {
	
					// HANDLE: $(html) -> $(array)
					if ( match[ 1 ] ) {
						context = context instanceof jQuery ? context[ 0 ] : context;
	
						// Option to run scripts is true for back-compat
						// Intentionally let the error be thrown if parseHTML is not present
						jQuery.merge( this, jQuery.parseHTML(
							match[ 1 ],
							context && context.nodeType ? context.ownerDocument || context : document,
							true
						) );
	
						// HANDLE: $(html, props)
						if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
							for ( match in context ) {
	
								// Properties of context are called as methods if possible
								if ( jQuery.isFunction( this[ match ] ) ) {
									this[ match ]( context[ match ] );
	
								// ...and otherwise set as attributes
								} else {
									this.attr( match, context[ match ] );
								}
							}
						}
	
						return this;
	
					// HANDLE: $(#id)
					} else {
						elem = document.getElementById( match[ 2 ] );
	
						if ( elem ) {
	
							// Inject the element directly into the jQuery object
							this[ 0 ] = elem;
							this.length = 1;
						}
						return this;
					}
	
				// HANDLE: $(expr, $(...))
				} else if ( !context || context.jquery ) {
					return ( context || root ).find( selector );
	
				// HANDLE: $(expr, context)
				// (which is just equivalent to: $(context).find(expr)
				} else {
					return this.constructor( context ).find( selector );
				}
	
			// HANDLE: $(DOMElement)
			} else if ( selector.nodeType ) {
				this[ 0 ] = selector;
				this.length = 1;
				return this;
	
			// HANDLE: $(function)
			// Shortcut for document ready
			} else if ( jQuery.isFunction( selector ) ) {
				return root.ready !== undefined ?
					root.ready( selector ) :
	
					// Execute immediately if ready is not present
					selector( jQuery );
			}
	
			return jQuery.makeArray( selector, this );
		};
	
	// Give the init function the jQuery prototype for later instantiation
	init.prototype = jQuery.fn;
	
	// Initialize central reference
	rootjQuery = jQuery( document );
	
	
	var rparentsprev = /^(?:parents|prev(?:Until|All))/,
	
		// Methods guaranteed to produce a unique set when starting from a unique set
		guaranteedUnique = {
			children: true,
			contents: true,
			next: true,
			prev: true
		};
	
	jQuery.fn.extend( {
		has: function( target ) {
			var targets = jQuery( target, this ),
				l = targets.length;
	
			return this.filter( function() {
				var i = 0;
				for ( ; i < l; i++ ) {
					if ( jQuery.contains( this, targets[ i ] ) ) {
						return true;
					}
				}
			} );
		},
	
		closest: function( selectors, context ) {
			var cur,
				i = 0,
				l = this.length,
				matched = [],
				targets = typeof selectors !== "string" && jQuery( selectors );
	
			// Positional selectors never match, since there's no _selection_ context
			if ( !rneedsContext.test( selectors ) ) {
				for ( ; i < l; i++ ) {
					for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {
	
						// Always skip document fragments
						if ( cur.nodeType < 11 && ( targets ?
							targets.index( cur ) > -1 :
	
							// Don't pass non-elements to Sizzle
							cur.nodeType === 1 &&
								jQuery.find.matchesSelector( cur, selectors ) ) ) {
	
							matched.push( cur );
							break;
						}
					}
				}
			}
	
			return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
		},
	
		// Determine the position of an element within the set
		index: function( elem ) {
	
			// No argument, return index in parent
			if ( !elem ) {
				return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
			}
	
			// Index in selector
			if ( typeof elem === "string" ) {
				return indexOf.call( jQuery( elem ), this[ 0 ] );
			}
	
			// Locate the position of the desired element
			return indexOf.call( this,
	
				// If it receives a jQuery object, the first element is used
				elem.jquery ? elem[ 0 ] : elem
			);
		},
	
		add: function( selector, context ) {
			return this.pushStack(
				jQuery.uniqueSort(
					jQuery.merge( this.get(), jQuery( selector, context ) )
				)
			);
		},
	
		addBack: function( selector ) {
			return this.add( selector == null ?
				this.prevObject : this.prevObject.filter( selector )
			);
		}
	} );
	
	function sibling( cur, dir ) {
		while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
		return cur;
	}
	
	jQuery.each( {
		parent: function( elem ) {
			var parent = elem.parentNode;
			return parent && parent.nodeType !== 11 ? parent : null;
		},
		parents: function( elem ) {
			return dir( elem, "parentNode" );
		},
		parentsUntil: function( elem, i, until ) {
			return dir( elem, "parentNode", until );
		},
		next: function( elem ) {
			return sibling( elem, "nextSibling" );
		},
		prev: function( elem ) {
			return sibling( elem, "previousSibling" );
		},
		nextAll: function( elem ) {
			return dir( elem, "nextSibling" );
		},
		prevAll: function( elem ) {
			return dir( elem, "previousSibling" );
		},
		nextUntil: function( elem, i, until ) {
			return dir( elem, "nextSibling", until );
		},
		prevUntil: function( elem, i, until ) {
			return dir( elem, "previousSibling", until );
		},
		siblings: function( elem ) {
			return siblings( ( elem.parentNode || {} ).firstChild, elem );
		},
		children: function( elem ) {
			return siblings( elem.firstChild );
		},
		contents: function( elem ) {
			return elem.contentDocument || jQuery.merge( [], elem.childNodes );
		}
	}, function( name, fn ) {
		jQuery.fn[ name ] = function( until, selector ) {
			var matched = jQuery.map( this, fn, until );
	
			if ( name.slice( -5 ) !== "Until" ) {
				selector = until;
			}
	
			if ( selector && typeof selector === "string" ) {
				matched = jQuery.filter( selector, matched );
			}
	
			if ( this.length > 1 ) {
	
				// Remove duplicates
				if ( !guaranteedUnique[ name ] ) {
					jQuery.uniqueSort( matched );
				}
	
				// Reverse order for parents* and prev-derivatives
				if ( rparentsprev.test( name ) ) {
					matched.reverse();
				}
			}
	
			return this.pushStack( matched );
		};
	} );
	var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );
	
	
	
	// Convert String-formatted options into Object-formatted ones
	function createOptions( options ) {
		var object = {};
		jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
			object[ flag ] = true;
		} );
		return object;
	}
	
	/*
	 * Create a callback list using the following parameters:
	 *
	 *	options: an optional list of space-separated options that will change how
	 *			the callback list behaves or a more traditional option object
	 *
	 * By default a callback list will act like an event callback list and can be
	 * "fired" multiple times.
	 *
	 * Possible options:
	 *
	 *	once:			will ensure the callback list can only be fired once (like a Deferred)
	 *
	 *	memory:			will keep track of previous values and will call any callback added
	 *					after the list has been fired right away with the latest "memorized"
	 *					values (like a Deferred)
	 *
	 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
	 *
	 *	stopOnFalse:	interrupt callings when a callback returns false
	 *
	 */
	jQuery.Callbacks = function( options ) {
	
		// Convert options from String-formatted to Object-formatted if needed
		// (we check in cache first)
		options = typeof options === "string" ?
			createOptions( options ) :
			jQuery.extend( {}, options );
	
		var // Flag to know if list is currently firing
			firing,
	
			// Last fire value for non-forgettable lists
			memory,
	
			// Flag to know if list was already fired
			fired,
	
			// Flag to prevent firing
			locked,
	
			// Actual callback list
			list = [],
	
			// Queue of execution data for repeatable lists
			queue = [],
	
			// Index of currently firing callback (modified by add/remove as needed)
			firingIndex = -1,
	
			// Fire callbacks
			fire = function() {
	
				// Enforce single-firing
				locked = options.once;
	
				// Execute callbacks for all pending executions,
				// respecting firingIndex overrides and runtime changes
				fired = firing = true;
				for ( ; queue.length; firingIndex = -1 ) {
					memory = queue.shift();
					while ( ++firingIndex < list.length ) {
	
						// Run callback and check for early termination
						if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
							options.stopOnFalse ) {
	
							// Jump to end and forget the data so .add doesn't re-fire
							firingIndex = list.length;
							memory = false;
						}
					}
				}
	
				// Forget the data if we're done with it
				if ( !options.memory ) {
					memory = false;
				}
	
				firing = false;
	
				// Clean up if we're done firing for good
				if ( locked ) {
	
					// Keep an empty list if we have data for future add calls
					if ( memory ) {
						list = [];
	
					// Otherwise, this object is spent
					} else {
						list = "";
					}
				}
			},
	
			// Actual Callbacks object
			self = {
	
				// Add a callback or a collection of callbacks to the list
				add: function() {
					if ( list ) {
	
						// If we have memory from a past run, we should fire after adding
						if ( memory && !firing ) {
							firingIndex = list.length - 1;
							queue.push( memory );
						}
	
						( function add( args ) {
							jQuery.each( args, function( _, arg ) {
								if ( jQuery.isFunction( arg ) ) {
									if ( !options.unique || !self.has( arg ) ) {
										list.push( arg );
									}
								} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {
	
									// Inspect recursively
									add( arg );
								}
							} );
						} )( arguments );
	
						if ( memory && !firing ) {
							fire();
						}
					}
					return this;
				},
	
				// Remove a callback from the list
				remove: function() {
					jQuery.each( arguments, function( _, arg ) {
						var index;
						while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
							list.splice( index, 1 );
	
							// Handle firing indexes
							if ( index <= firingIndex ) {
								firingIndex--;
							}
						}
					} );
					return this;
				},
	
				// Check if a given callback is in the list.
				// If no argument is given, return whether or not list has callbacks attached.
				has: function( fn ) {
					return fn ?
						jQuery.inArray( fn, list ) > -1 :
						list.length > 0;
				},
	
				// Remove all callbacks from the list
				empty: function() {
					if ( list ) {
						list = [];
					}
					return this;
				},
	
				// Disable .fire and .add
				// Abort any current/pending executions
				// Clear all callbacks and values
				disable: function() {
					locked = queue = [];
					list = memory = "";
					return this;
				},
				disabled: function() {
					return !list;
				},
	
				// Disable .fire
				// Also disable .add unless we have memory (since it would have no effect)
				// Abort any pending executions
				lock: function() {
					locked = queue = [];
					if ( !memory && !firing ) {
						list = memory = "";
					}
					return this;
				},
				locked: function() {
					return !!locked;
				},
	
				// Call all callbacks with the given context and arguments
				fireWith: function( context, args ) {
					if ( !locked ) {
						args = args || [];
						args = [ context, args.slice ? args.slice() : args ];
						queue.push( args );
						if ( !firing ) {
							fire();
						}
					}
					return this;
				},
	
				// Call all the callbacks with the given arguments
				fire: function() {
					self.fireWith( this, arguments );
					return this;
				},
	
				// To know if the callbacks have already been called at least once
				fired: function() {
					return !!fired;
				}
			};
	
		return self;
	};
	
	
	function Identity( v ) {
		return v;
	}
	function Thrower( ex ) {
		throw ex;
	}
	
	function adoptValue( value, resolve, reject ) {
		var method;
	
		try {
	
			// Check for promise aspect first to privilege synchronous behavior
			if ( value && jQuery.isFunction( ( method = value.promise ) ) ) {
				method.call( value ).done( resolve ).fail( reject );
	
			// Other thenables
			} else if ( value && jQuery.isFunction( ( method = value.then ) ) ) {
				method.call( value, resolve, reject );
	
			// Other non-thenables
			} else {
	
				// Support: Android 4.0 only
				// Strict mode functions invoked without .call/.apply get global-object context
				resolve.call( undefined, value );
			}
	
		// For Promises/A+, convert exceptions into rejections
		// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
		// Deferred#then to conditionally suppress rejection.
		} catch ( value ) {
	
			// Support: Android 4.0 only
			// Strict mode functions invoked without .call/.apply get global-object context
			reject.call( undefined, value );
		}
	}
	
	jQuery.extend( {
	
		Deferred: function( func ) {
			var tuples = [
	
					// action, add listener, callbacks,
					// ... .then handlers, argument index, [final state]
					[ "notify", "progress", jQuery.Callbacks( "memory" ),
						jQuery.Callbacks( "memory" ), 2 ],
					[ "resolve", "done", jQuery.Callbacks( "once memory" ),
						jQuery.Callbacks( "once memory" ), 0, "resolved" ],
					[ "reject", "fail", jQuery.Callbacks( "once memory" ),
						jQuery.Callbacks( "once memory" ), 1, "rejected" ]
				],
				state = "pending",
				promise = {
					state: function() {
						return state;
					},
					always: function() {
						deferred.done( arguments ).fail( arguments );
						return this;
					},
					"catch": function( fn ) {
						return promise.then( null, fn );
					},
	
					// Keep pipe for back-compat
					pipe: function( /* fnDone, fnFail, fnProgress */ ) {
						var fns = arguments;
	
						return jQuery.Deferred( function( newDefer ) {
							jQuery.each( tuples, function( i, tuple ) {
	
								// Map tuples (progress, done, fail) to arguments (done, fail, progress)
								var fn = jQuery.isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];
	
								// deferred.progress(function() { bind to newDefer or newDefer.notify })
								// deferred.done(function() { bind to newDefer or newDefer.resolve })
								// deferred.fail(function() { bind to newDefer or newDefer.reject })
								deferred[ tuple[ 1 ] ]( function() {
									var returned = fn && fn.apply( this, arguments );
									if ( returned && jQuery.isFunction( returned.promise ) ) {
										returned.promise()
											.progress( newDefer.notify )
											.done( newDefer.resolve )
											.fail( newDefer.reject );
									} else {
										newDefer[ tuple[ 0 ] + "With" ](
											this,
											fn ? [ returned ] : arguments
										);
									}
								} );
							} );
							fns = null;
						} ).promise();
					},
					then: function( onFulfilled, onRejected, onProgress ) {
						var maxDepth = 0;
						function resolve( depth, deferred, handler, special ) {
							return function() {
								var that = this,
									args = arguments,
									mightThrow = function() {
										var returned, then;
	
										// Support: Promises/A+ section 2.3.3.3.3
										// https://promisesaplus.com/#point-59
										// Ignore double-resolution attempts
										if ( depth < maxDepth ) {
											return;
										}
	
										returned = handler.apply( that, args );
	
										// Support: Promises/A+ section 2.3.1
										// https://promisesaplus.com/#point-48
										if ( returned === deferred.promise() ) {
											throw new TypeError( "Thenable self-resolution" );
										}
	
										// Support: Promises/A+ sections 2.3.3.1, 3.5
										// https://promisesaplus.com/#point-54
										// https://promisesaplus.com/#point-75
										// Retrieve `then` only once
										then = returned &&
	
											// Support: Promises/A+ section 2.3.4
											// https://promisesaplus.com/#point-64
											// Only check objects and functions for thenability
											( typeof returned === "object" ||
												typeof returned === "function" ) &&
											returned.then;
	
										// Handle a returned thenable
										if ( jQuery.isFunction( then ) ) {
	
											// Special processors (notify) just wait for resolution
											if ( special ) {
												then.call(
													returned,
													resolve( maxDepth, deferred, Identity, special ),
													resolve( maxDepth, deferred, Thrower, special )
												);
	
											// Normal processors (resolve) also hook into progress
											} else {
	
												// ...and disregard older resolution values
												maxDepth++;
	
												then.call(
													returned,
													resolve( maxDepth, deferred, Identity, special ),
													resolve( maxDepth, deferred, Thrower, special ),
													resolve( maxDepth, deferred, Identity,
														deferred.notifyWith )
												);
											}
	
										// Handle all other returned values
										} else {
	
											// Only substitute handlers pass on context
											// and multiple values (non-spec behavior)
											if ( handler !== Identity ) {
												that = undefined;
												args = [ returned ];
											}
	
											// Process the value(s)
											// Default process is resolve
											( special || deferred.resolveWith )( that, args );
										}
									},
	
									// Only normal processors (resolve) catch and reject exceptions
									process = special ?
										mightThrow :
										function() {
											try {
												mightThrow();
											} catch ( e ) {
	
												if ( jQuery.Deferred.exceptionHook ) {
													jQuery.Deferred.exceptionHook( e,
														process.stackTrace );
												}
	
												// Support: Promises/A+ section 2.3.3.3.4.1
												// https://promisesaplus.com/#point-61
												// Ignore post-resolution exceptions
												if ( depth + 1 >= maxDepth ) {
	
													// Only substitute handlers pass on context
													// and multiple values (non-spec behavior)
													if ( handler !== Thrower ) {
														that = undefined;
														args = [ e ];
													}
	
													deferred.rejectWith( that, args );
												}
											}
										};
	
								// Support: Promises/A+ section 2.3.3.3.1
								// https://promisesaplus.com/#point-57
								// Re-resolve promises immediately to dodge false rejection from
								// subsequent errors
								if ( depth ) {
									process();
								} else {
	
									// Call an optional hook to record the stack, in case of exception
									// since it's otherwise lost when execution goes async
									if ( jQuery.Deferred.getStackHook ) {
										process.stackTrace = jQuery.Deferred.getStackHook();
									}
									window.setTimeout( process );
								}
							};
						}
	
						return jQuery.Deferred( function( newDefer ) {
	
							// progress_handlers.add( ... )
							tuples[ 0 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									jQuery.isFunction( onProgress ) ?
										onProgress :
										Identity,
									newDefer.notifyWith
								)
							);
	
							// fulfilled_handlers.add( ... )
							tuples[ 1 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									jQuery.isFunction( onFulfilled ) ?
										onFulfilled :
										Identity
								)
							);
	
							// rejected_handlers.add( ... )
							tuples[ 2 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									jQuery.isFunction( onRejected ) ?
										onRejected :
										Thrower
								)
							);
						} ).promise();
					},
	
					// Get a promise for this deferred
					// If obj is provided, the promise aspect is added to the object
					promise: function( obj ) {
						return obj != null ? jQuery.extend( obj, promise ) : promise;
					}
				},
				deferred = {};
	
			// Add list-specific methods
			jQuery.each( tuples, function( i, tuple ) {
				var list = tuple[ 2 ],
					stateString = tuple[ 5 ];
	
				// promise.progress = list.add
				// promise.done = list.add
				// promise.fail = list.add
				promise[ tuple[ 1 ] ] = list.add;
	
				// Handle state
				if ( stateString ) {
					list.add(
						function() {
	
							// state = "resolved" (i.e., fulfilled)
							// state = "rejected"
							state = stateString;
						},
	
						// rejected_callbacks.disable
						// fulfilled_callbacks.disable
						tuples[ 3 - i ][ 2 ].disable,
	
						// progress_callbacks.lock
						tuples[ 0 ][ 2 ].lock
					);
				}
	
				// progress_handlers.fire
				// fulfilled_handlers.fire
				// rejected_handlers.fire
				list.add( tuple[ 3 ].fire );
	
				// deferred.notify = function() { deferred.notifyWith(...) }
				// deferred.resolve = function() { deferred.resolveWith(...) }
				// deferred.reject = function() { deferred.rejectWith(...) }
				deferred[ tuple[ 0 ] ] = function() {
					deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
					return this;
				};
	
				// deferred.notifyWith = list.fireWith
				// deferred.resolveWith = list.fireWith
				// deferred.rejectWith = list.fireWith
				deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
			} );
	
			// Make the deferred a promise
			promise.promise( deferred );
	
			// Call given func if any
			if ( func ) {
				func.call( deferred, deferred );
			}
	
			// All done!
			return deferred;
		},
	
		// Deferred helper
		when: function( singleValue ) {
			var
	
				// count of uncompleted subordinates
				remaining = arguments.length,
	
				// count of unprocessed arguments
				i = remaining,
	
				// subordinate fulfillment data
				resolveContexts = Array( i ),
				resolveValues = slice.call( arguments ),
	
				// the master Deferred
				master = jQuery.Deferred(),
	
				// subordinate callback factory
				updateFunc = function( i ) {
					return function( value ) {
						resolveContexts[ i ] = this;
						resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
						if ( !( --remaining ) ) {
							master.resolveWith( resolveContexts, resolveValues );
						}
					};
				};
	
			// Single- and empty arguments are adopted like Promise.resolve
			if ( remaining <= 1 ) {
				adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject );
	
				// Use .then() to unwrap secondary thenables (cf. gh-3000)
				if ( master.state() === "pending" ||
					jQuery.isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {
	
					return master.then();
				}
			}
	
			// Multiple arguments are aggregated like Promise.all array elements
			while ( i-- ) {
				adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
			}
	
			return master.promise();
		}
	} );
	
	
	// These usually indicate a programmer mistake during development,
	// warn about them ASAP rather than swallowing them by default.
	var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
	
	jQuery.Deferred.exceptionHook = function( error, stack ) {
	
		// Support: IE 8 - 9 only
		// Console exists when dev tools are open, which can happen at any time
		if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
			window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
		}
	};
	
	
	
	
	jQuery.readyException = function( error ) {
		window.setTimeout( function() {
			throw error;
		} );
	};
	
	
	
	
	// The deferred used on DOM ready
	var readyList = jQuery.Deferred();
	
	jQuery.fn.ready = function( fn ) {
	
		readyList
			.then( fn )
	
			// Wrap jQuery.readyException in a function so that the lookup
			// happens at the time of error handling instead of callback
			// registration.
			.catch( function( error ) {
				jQuery.readyException( error );
			} );
	
		return this;
	};
	
	jQuery.extend( {
	
		// Is the DOM ready to be used? Set to true once it occurs.
		isReady: false,
	
		// A counter to track how many items to wait for before
		// the ready event fires. See #6781
		readyWait: 1,
	
		// Hold (or release) the ready event
		holdReady: function( hold ) {
			if ( hold ) {
				jQuery.readyWait++;
			} else {
				jQuery.ready( true );
			}
		},
	
		// Handle when the DOM is ready
		ready: function( wait ) {
	
			// Abort if there are pending holds or we're already ready
			if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
				return;
			}
	
			// Remember that the DOM is ready
			jQuery.isReady = true;
	
			// If a normal DOM Ready event fired, decrement, and wait if need be
			if ( wait !== true && --jQuery.readyWait > 0 ) {
				return;
			}
	
			// If there are functions bound, to execute
			readyList.resolveWith( document, [ jQuery ] );
		}
	} );
	
	jQuery.ready.then = readyList.then;
	
	// The ready event handler and self cleanup method
	function completed() {
		document.removeEventListener( "DOMContentLoaded", completed );
		window.removeEventListener( "load", completed );
		jQuery.ready();
	}
	
	// Catch cases where $(document).ready() is called
	// after the browser event has already occurred.
	// Support: IE <=9 - 10 only
	// Older IE sometimes signals "interactive" too soon
	if ( document.readyState === "complete" ||
		( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {
	
		// Handle it asynchronously to allow scripts the opportunity to delay ready
		window.setTimeout( jQuery.ready );
	
	} else {
	
		// Use the handy event callback
		document.addEventListener( "DOMContentLoaded", completed );
	
		// A fallback to window.onload, that will always work
		window.addEventListener( "load", completed );
	}
	
	
	
	
	// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
		var i = 0,
			len = elems.length,
			bulk = key == null;
	
		// Sets many values
		if ( jQuery.type( key ) === "object" ) {
			chainable = true;
			for ( i in key ) {
				access( elems, fn, i, key[ i ], true, emptyGet, raw );
			}
	
		// Sets one value
		} else if ( value !== undefined ) {
			chainable = true;
	
			if ( !jQuery.isFunction( value ) ) {
				raw = true;
			}
	
			if ( bulk ) {
	
				// Bulk operations run against the entire set
				if ( raw ) {
					fn.call( elems, value );
					fn = null;
	
				// ...except when executing function values
				} else {
					bulk = fn;
					fn = function( elem, key, value ) {
						return bulk.call( jQuery( elem ), value );
					};
				}
			}
	
			if ( fn ) {
				for ( ; i < len; i++ ) {
					fn(
						elems[ i ], key, raw ?
						value :
						value.call( elems[ i ], i, fn( elems[ i ], key ) )
					);
				}
			}
		}
	
		if ( chainable ) {
			return elems;
		}
	
		// Gets
		if ( bulk ) {
			return fn.call( elems );
		}
	
		return len ? fn( elems[ 0 ], key ) : emptyGet;
	};
	var acceptData = function( owner ) {
	
		// Accepts only:
		//  - Node
		//    - Node.ELEMENT_NODE
		//    - Node.DOCUMENT_NODE
		//  - Object
		//    - Any
		return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
	};
	
	
	
	
	function Data() {
		this.expando = jQuery.expando + Data.uid++;
	}
	
	Data.uid = 1;
	
	Data.prototype = {
	
		cache: function( owner ) {
	
			// Check if the owner object already has a cache
			var value = owner[ this.expando ];
	
			// If not, create one
			if ( !value ) {
				value = {};
	
				// We can accept data for non-element nodes in modern browsers,
				// but we should not, see #8335.
				// Always return an empty object.
				if ( acceptData( owner ) ) {
	
					// If it is a node unlikely to be stringify-ed or looped over
					// use plain assignment
					if ( owner.nodeType ) {
						owner[ this.expando ] = value;
	
					// Otherwise secure it in a non-enumerable property
					// configurable must be true to allow the property to be
					// deleted when data is removed
					} else {
						Object.defineProperty( owner, this.expando, {
							value: value,
							configurable: true
						} );
					}
				}
			}
	
			return value;
		},
		set: function( owner, data, value ) {
			var prop,
				cache = this.cache( owner );
	
			// Handle: [ owner, key, value ] args
			// Always use camelCase key (gh-2257)
			if ( typeof data === "string" ) {
				cache[ jQuery.camelCase( data ) ] = value;
	
			// Handle: [ owner, { properties } ] args
			} else {
	
				// Copy the properties one-by-one to the cache object
				for ( prop in data ) {
					cache[ jQuery.camelCase( prop ) ] = data[ prop ];
				}
			}
			return cache;
		},
		get: function( owner, key ) {
			return key === undefined ?
				this.cache( owner ) :
	
				// Always use camelCase key (gh-2257)
				owner[ this.expando ] && owner[ this.expando ][ jQuery.camelCase( key ) ];
		},
		access: function( owner, key, value ) {
	
			// In cases where either:
			//
			//   1. No key was specified
			//   2. A string key was specified, but no value provided
			//
			// Take the "read" path and allow the get method to determine
			// which value to return, respectively either:
			//
			//   1. The entire cache object
			//   2. The data stored at the key
			//
			if ( key === undefined ||
					( ( key && typeof key === "string" ) && value === undefined ) ) {
	
				return this.get( owner, key );
			}
	
			// When the key is not a string, or both a key and value
			// are specified, set or extend (existing objects) with either:
			//
			//   1. An object of properties
			//   2. A key and value
			//
			this.set( owner, key, value );
	
			// Since the "set" path can have two possible entry points
			// return the expected data based on which path was taken[*]
			return value !== undefined ? value : key;
		},
		remove: function( owner, key ) {
			var i,
				cache = owner[ this.expando ];
	
			if ( cache === undefined ) {
				return;
			}
	
			if ( key !== undefined ) {
	
				// Support array or space separated string of keys
				if ( jQuery.isArray( key ) ) {
	
					// If key is an array of keys...
					// We always set camelCase keys, so remove that.
					key = key.map( jQuery.camelCase );
				} else {
					key = jQuery.camelCase( key );
	
					// If a key with the spaces exists, use it.
					// Otherwise, create an array by matching non-whitespace
					key = key in cache ?
						[ key ] :
						( key.match( rnothtmlwhite ) || [] );
				}
	
				i = key.length;
	
				while ( i-- ) {
					delete cache[ key[ i ] ];
				}
			}
	
			// Remove the expando if there's no more data
			if ( key === undefined || jQuery.isEmptyObject( cache ) ) {
	
				// Support: Chrome <=35 - 45
				// Webkit & Blink performance suffers when deleting properties
				// from DOM nodes, so set to undefined instead
				// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
				if ( owner.nodeType ) {
					owner[ this.expando ] = undefined;
				} else {
					delete owner[ this.expando ];
				}
			}
		},
		hasData: function( owner ) {
			var cache = owner[ this.expando ];
			return cache !== undefined && !jQuery.isEmptyObject( cache );
		}
	};
	var dataPriv = new Data();
	
	var dataUser = new Data();
	
	
	
	//	Implementation Summary
	//
	//	1. Enforce API surface and semantic compatibility with 1.9.x branch
	//	2. Improve the module's maintainability by reducing the storage
	//		paths to a single mechanism.
	//	3. Use the same single mechanism to support "private" and "user" data.
	//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
	//	5. Avoid exposing implementation details on user objects (eg. expando properties)
	//	6. Provide a clear path for implementation upgrade to WeakMap in 2014
	
	var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		rmultiDash = /[A-Z]/g;
	
	function getData( data ) {
		if ( data === "true" ) {
			return true;
		}
	
		if ( data === "false" ) {
			return false;
		}
	
		if ( data === "null" ) {
			return null;
		}
	
		// Only convert to a number if it doesn't change the string
		if ( data === +data + "" ) {
			return +data;
		}
	
		if ( rbrace.test( data ) ) {
			return JSON.parse( data );
		}
	
		return data;
	}
	
	function dataAttr( elem, key, data ) {
		var name;
	
		// If nothing was found internally, try to fetch any
		// data from the HTML5 data-* attribute
		if ( data === undefined && elem.nodeType === 1 ) {
			name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
			data = elem.getAttribute( name );
	
			if ( typeof data === "string" ) {
				try {
					data = getData( data );
				} catch ( e ) {}
	
				// Make sure we set the data so it isn't changed later
				dataUser.set( elem, key, data );
			} else {
				data = undefined;
			}
		}
		return data;
	}
	
	jQuery.extend( {
		hasData: function( elem ) {
			return dataUser.hasData( elem ) || dataPriv.hasData( elem );
		},
	
		data: function( elem, name, data ) {
			return dataUser.access( elem, name, data );
		},
	
		removeData: function( elem, name ) {
			dataUser.remove( elem, name );
		},
	
		// TODO: Now that all calls to _data and _removeData have been replaced
		// with direct calls to dataPriv methods, these can be deprecated.
		_data: function( elem, name, data ) {
			return dataPriv.access( elem, name, data );
		},
	
		_removeData: function( elem, name ) {
			dataPriv.remove( elem, name );
		}
	} );
	
	jQuery.fn.extend( {
		data: function( key, value ) {
			var i, name, data,
				elem = this[ 0 ],
				attrs = elem && elem.attributes;
	
			// Gets all values
			if ( key === undefined ) {
				if ( this.length ) {
					data = dataUser.get( elem );
	
					if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
						i = attrs.length;
						while ( i-- ) {
	
							// Support: IE 11 only
							// The attrs elements can be null (#14894)
							if ( attrs[ i ] ) {
								name = attrs[ i ].name;
								if ( name.indexOf( "data-" ) === 0 ) {
									name = jQuery.camelCase( name.slice( 5 ) );
									dataAttr( elem, name, data[ name ] );
								}
							}
						}
						dataPriv.set( elem, "hasDataAttrs", true );
					}
				}
	
				return data;
			}
	
			// Sets multiple values
			if ( typeof key === "object" ) {
				return this.each( function() {
					dataUser.set( this, key );
				} );
			}
	
			return access( this, function( value ) {
				var data;
	
				// The calling jQuery object (element matches) is not empty
				// (and therefore has an element appears at this[ 0 ]) and the
				// `value` parameter was not undefined. An empty jQuery object
				// will result in `undefined` for elem = this[ 0 ] which will
				// throw an exception if an attempt to read a data cache is made.
				if ( elem && value === undefined ) {
	
					// Attempt to get data from the cache
					// The key will always be camelCased in Data
					data = dataUser.get( elem, key );
					if ( data !== undefined ) {
						return data;
					}
	
					// Attempt to "discover" the data in
					// HTML5 custom data-* attrs
					data = dataAttr( elem, key );
					if ( data !== undefined ) {
						return data;
					}
	
					// We tried really hard, but the data doesn't exist.
					return;
				}
	
				// Set the data...
				this.each( function() {
	
					// We always store the camelCased key
					dataUser.set( this, key, value );
				} );
			}, null, value, arguments.length > 1, null, true );
		},
	
		removeData: function( key ) {
			return this.each( function() {
				dataUser.remove( this, key );
			} );
		}
	} );
	
	
	jQuery.extend( {
		queue: function( elem, type, data ) {
			var queue;
	
			if ( elem ) {
				type = ( type || "fx" ) + "queue";
				queue = dataPriv.get( elem, type );
	
				// Speed up dequeue by getting out quickly if this is just a lookup
				if ( data ) {
					if ( !queue || jQuery.isArray( data ) ) {
						queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
					} else {
						queue.push( data );
					}
				}
				return queue || [];
			}
		},
	
		dequeue: function( elem, type ) {
			type = type || "fx";
	
			var queue = jQuery.queue( elem, type ),
				startLength = queue.length,
				fn = queue.shift(),
				hooks = jQuery._queueHooks( elem, type ),
				next = function() {
					jQuery.dequeue( elem, type );
				};
	
			// If the fx queue is dequeued, always remove the progress sentinel
			if ( fn === "inprogress" ) {
				fn = queue.shift();
				startLength--;
			}
	
			if ( fn ) {
	
				// Add a progress sentinel to prevent the fx queue from being
				// automatically dequeued
				if ( type === "fx" ) {
					queue.unshift( "inprogress" );
				}
	
				// Clear up the last queue stop function
				delete hooks.stop;
				fn.call( elem, next, hooks );
			}
	
			if ( !startLength && hooks ) {
				hooks.empty.fire();
			}
		},
	
		// Not public - generate a queueHooks object, or return the current one
		_queueHooks: function( elem, type ) {
			var key = type + "queueHooks";
			return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
				empty: jQuery.Callbacks( "once memory" ).add( function() {
					dataPriv.remove( elem, [ type + "queue", key ] );
				} )
			} );
		}
	} );
	
	jQuery.fn.extend( {
		queue: function( type, data ) {
			var setter = 2;
	
			if ( typeof type !== "string" ) {
				data = type;
				type = "fx";
				setter--;
			}
	
			if ( arguments.length < setter ) {
				return jQuery.queue( this[ 0 ], type );
			}
	
			return data === undefined ?
				this :
				this.each( function() {
					var queue = jQuery.queue( this, type, data );
	
					// Ensure a hooks for this queue
					jQuery._queueHooks( this, type );
	
					if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
						jQuery.dequeue( this, type );
					}
				} );
		},
		dequeue: function( type ) {
			return this.each( function() {
				jQuery.dequeue( this, type );
			} );
		},
		clearQueue: function( type ) {
			return this.queue( type || "fx", [] );
		},
	
		// Get a promise resolved when queues of a certain type
		// are emptied (fx is the type by default)
		promise: function( type, obj ) {
			var tmp,
				count = 1,
				defer = jQuery.Deferred(),
				elements = this,
				i = this.length,
				resolve = function() {
					if ( !( --count ) ) {
						defer.resolveWith( elements, [ elements ] );
					}
				};
	
			if ( typeof type !== "string" ) {
				obj = type;
				type = undefined;
			}
			type = type || "fx";
	
			while ( i-- ) {
				tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
				if ( tmp && tmp.empty ) {
					count++;
					tmp.empty.add( resolve );
				}
			}
			resolve();
			return defer.promise( obj );
		}
	} );
	var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;
	
	var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );
	
	
	var cssExpand = [ "Top", "Right", "Bottom", "Left" ];
	
	var isHiddenWithinTree = function( elem, el ) {
	
			// isHiddenWithinTree might be called from jQuery#filter function;
			// in that case, element will be second argument
			elem = el || elem;
	
			// Inline style trumps all
			return elem.style.display === "none" ||
				elem.style.display === "" &&
	
				// Otherwise, check computed style
				// Support: Firefox <=43 - 45
				// Disconnected elements can have computed display: none, so first confirm that elem is
				// in the document.
				jQuery.contains( elem.ownerDocument, elem ) &&
	
				jQuery.css( elem, "display" ) === "none";
		};
	
	var swap = function( elem, options, callback, args ) {
		var ret, name,
			old = {};
	
		// Remember the old values, and insert the new ones
		for ( name in options ) {
			old[ name ] = elem.style[ name ];
			elem.style[ name ] = options[ name ];
		}
	
		ret = callback.apply( elem, args || [] );
	
		// Revert the old values
		for ( name in options ) {
			elem.style[ name ] = old[ name ];
		}
	
		return ret;
	};
	
	
	
	
	function adjustCSS( elem, prop, valueParts, tween ) {
		var adjusted,
			scale = 1,
			maxIterations = 20,
			currentValue = tween ?
				function() {
					return tween.cur();
				} :
				function() {
					return jQuery.css( elem, prop, "" );
				},
			initial = currentValue(),
			unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),
	
			// Starting value computation is required for potential unit mismatches
			initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
				rcssNum.exec( jQuery.css( elem, prop ) );
	
		if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {
	
			// Trust units reported by jQuery.css
			unit = unit || initialInUnit[ 3 ];
	
			// Make sure we update the tween properties later on
			valueParts = valueParts || [];
	
			// Iteratively approximate from a nonzero starting point
			initialInUnit = +initial || 1;
	
			do {
	
				// If previous iteration zeroed out, double until we get *something*.
				// Use string for doubling so we don't accidentally see scale as unchanged below
				scale = scale || ".5";
	
				// Adjust and apply
				initialInUnit = initialInUnit / scale;
				jQuery.style( elem, prop, initialInUnit + unit );
	
			// Update scale, tolerating zero or NaN from tween.cur()
			// Break the loop if scale is unchanged or perfect, or if we've just had enough.
			} while (
				scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
			);
		}
	
		if ( valueParts ) {
			initialInUnit = +initialInUnit || +initial || 0;
	
			// Apply relative offset (+=/-=) if specified
			adjusted = valueParts[ 1 ] ?
				initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
				+valueParts[ 2 ];
			if ( tween ) {
				tween.unit = unit;
				tween.start = initialInUnit;
				tween.end = adjusted;
			}
		}
		return adjusted;
	}
	
	
	var defaultDisplayMap = {};
	
	function getDefaultDisplay( elem ) {
		var temp,
			doc = elem.ownerDocument,
			nodeName = elem.nodeName,
			display = defaultDisplayMap[ nodeName ];
	
		if ( display ) {
			return display;
		}
	
		temp = doc.body.appendChild( doc.createElement( nodeName ) );
		display = jQuery.css( temp, "display" );
	
		temp.parentNode.removeChild( temp );
	
		if ( display === "none" ) {
			display = "block";
		}
		defaultDisplayMap[ nodeName ] = display;
	
		return display;
	}
	
	function showHide( elements, show ) {
		var display, elem,
			values = [],
			index = 0,
			length = elements.length;
	
		// Determine new display value for elements that need to change
		for ( ; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}
	
			display = elem.style.display;
			if ( show ) {
	
				// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
				// check is required in this first loop unless we have a nonempty display value (either
				// inline or about-to-be-restored)
				if ( display === "none" ) {
					values[ index ] = dataPriv.get( elem, "display" ) || null;
					if ( !values[ index ] ) {
						elem.style.display = "";
					}
				}
				if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
					values[ index ] = getDefaultDisplay( elem );
				}
			} else {
				if ( display !== "none" ) {
					values[ index ] = "none";
	
					// Remember what we're overwriting
					dataPriv.set( elem, "display", display );
				}
			}
		}
	
		// Set the display of the elements in a second loop to avoid constant reflow
		for ( index = 0; index < length; index++ ) {
			if ( values[ index ] != null ) {
				elements[ index ].style.display = values[ index ];
			}
		}
	
		return elements;
	}
	
	jQuery.fn.extend( {
		show: function() {
			return showHide( this, true );
		},
		hide: function() {
			return showHide( this );
		},
		toggle: function( state ) {
			if ( typeof state === "boolean" ) {
				return state ? this.show() : this.hide();
			}
	
			return this.each( function() {
				if ( isHiddenWithinTree( this ) ) {
					jQuery( this ).show();
				} else {
					jQuery( this ).hide();
				}
			} );
		}
	} );
	var rcheckableType = ( /^(?:checkbox|radio)$/i );
	
	var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );
	
	var rscriptType = ( /^$|\/(?:java|ecma)script/i );
	
	
	
	// We have to close these tags to support XHTML (#13200)
	var wrapMap = {
	
		// Support: IE <=9 only
		option: [ 1, "<select multiple='multiple'>", "</select>" ],
	
		// XHTML parsers do not magically insert elements in the
		// same way that tag soup parsers do. So we cannot shorten
		// this by omitting <tbody> or other required elements.
		thead: [ 1, "<table>", "</table>" ],
		col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
	
		_default: [ 0, "", "" ]
	};
	
	// Support: IE <=9 only
	wrapMap.optgroup = wrapMap.option;
	
	wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	wrapMap.th = wrapMap.td;
	
	
	function getAll( context, tag ) {
	
		// Support: IE <=9 - 11 only
		// Use typeof to avoid zero-argument method invocation on host objects (#15151)
		var ret;
	
		if ( typeof context.getElementsByTagName !== "undefined" ) {
			ret = context.getElementsByTagName( tag || "*" );
	
		} else if ( typeof context.querySelectorAll !== "undefined" ) {
			ret = context.querySelectorAll( tag || "*" );
	
		} else {
			ret = [];
		}
	
		if ( tag === undefined || tag && jQuery.nodeName( context, tag ) ) {
			return jQuery.merge( [ context ], ret );
		}
	
		return ret;
	}
	
	
	// Mark scripts as having already been evaluated
	function setGlobalEval( elems, refElements ) {
		var i = 0,
			l = elems.length;
	
		for ( ; i < l; i++ ) {
			dataPriv.set(
				elems[ i ],
				"globalEval",
				!refElements || dataPriv.get( refElements[ i ], "globalEval" )
			);
		}
	}
	
	
	var rhtml = /<|&#?\w+;/;
	
	function buildFragment( elems, context, scripts, selection, ignored ) {
		var elem, tmp, tag, wrap, contains, j,
			fragment = context.createDocumentFragment(),
			nodes = [],
			i = 0,
			l = elems.length;
	
		for ( ; i < l; i++ ) {
			elem = elems[ i ];
	
			if ( elem || elem === 0 ) {
	
				// Add nodes directly
				if ( jQuery.type( elem ) === "object" ) {
	
					// Support: Android <=4.0 only, PhantomJS 1 only
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );
	
				// Convert non-html into a text node
				} else if ( !rhtml.test( elem ) ) {
					nodes.push( context.createTextNode( elem ) );
	
				// Convert html into DOM nodes
				} else {
					tmp = tmp || fragment.appendChild( context.createElement( "div" ) );
	
					// Deserialize a standard representation
					tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
					wrap = wrapMap[ tag ] || wrapMap._default;
					tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];
	
					// Descend through wrappers to the right content
					j = wrap[ 0 ];
					while ( j-- ) {
						tmp = tmp.lastChild;
					}
	
					// Support: Android <=4.0 only, PhantomJS 1 only
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, tmp.childNodes );
	
					// Remember the top-level container
					tmp = fragment.firstChild;
	
					// Ensure the created nodes are orphaned (#12392)
					tmp.textContent = "";
				}
			}
		}
	
		// Remove wrapper from fragment
		fragment.textContent = "";
	
		i = 0;
		while ( ( elem = nodes[ i++ ] ) ) {
	
			// Skip elements already in the context collection (trac-4087)
			if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
				if ( ignored ) {
					ignored.push( elem );
				}
				continue;
			}
	
			contains = jQuery.contains( elem.ownerDocument, elem );
	
			// Append to fragment
			tmp = getAll( fragment.appendChild( elem ), "script" );
	
			// Preserve script evaluation history
			if ( contains ) {
				setGlobalEval( tmp );
			}
	
			// Capture executables
			if ( scripts ) {
				j = 0;
				while ( ( elem = tmp[ j++ ] ) ) {
					if ( rscriptType.test( elem.type || "" ) ) {
						scripts.push( elem );
					}
				}
			}
		}
	
		return fragment;
	}
	
	
	( function() {
		var fragment = document.createDocumentFragment(),
			div = fragment.appendChild( document.createElement( "div" ) ),
			input = document.createElement( "input" );
	
		// Support: Android 4.0 - 4.3 only
		// Check state lost if the name is set (#11217)
		// Support: Windows Web Apps (WWA)
		// `name` and `type` must use .setAttribute for WWA (#14901)
		input.setAttribute( "type", "radio" );
		input.setAttribute( "checked", "checked" );
		input.setAttribute( "name", "t" );
	
		div.appendChild( input );
	
		// Support: Android <=4.1 only
		// Older WebKit doesn't clone checked state correctly in fragments
		support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;
	
		// Support: IE <=11 only
		// Make sure textarea (and checkbox) defaultValue is properly cloned
		div.innerHTML = "<textarea>x</textarea>";
		support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
	} )();
	var documentElement = document.documentElement;
	
	
	
	var
		rkeyEvent = /^key/,
		rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
	
	function returnTrue() {
		return true;
	}
	
	function returnFalse() {
		return false;
	}
	
	// Support: IE <=9 only
	// See #13393 for more info
	function safeActiveElement() {
		try {
			return document.activeElement;
		} catch ( err ) { }
	}
	
	function on( elem, types, selector, data, fn, one ) {
		var origFn, type;
	
		// Types can be a map of types/handlers
		if ( typeof types === "object" ) {
	
			// ( types-Object, selector, data )
			if ( typeof selector !== "string" ) {
	
				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for ( type in types ) {
				on( elem, type, selector, data, types[ type ], one );
			}
			return elem;
		}
	
		if ( data == null && fn == null ) {
	
			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if ( fn == null ) {
			if ( typeof selector === "string" ) {
	
				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {
	
				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if ( fn === false ) {
			fn = returnFalse;
		} else if ( !fn ) {
			return elem;
		}
	
		if ( one === 1 ) {
			origFn = fn;
			fn = function( event ) {
	
				// Can use an empty set, since event contains the info
				jQuery().off( event );
				return origFn.apply( this, arguments );
			};
	
			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		}
		return elem.each( function() {
			jQuery.event.add( this, types, fn, data, selector );
		} );
	}
	
	/*
	 * Helper functions for managing events -- not part of the public interface.
	 * Props to Dean Edwards' addEvent library for many of the ideas.
	 */
	jQuery.event = {
	
		global: {},
	
		add: function( elem, types, handler, data, selector ) {
	
			var handleObjIn, eventHandle, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.get( elem );
	
			// Don't attach events to noData or text/comment nodes (but allow plain objects)
			if ( !elemData ) {
				return;
			}
	
			// Caller can pass in an object of custom data in lieu of the handler
			if ( handler.handler ) {
				handleObjIn = handler;
				handler = handleObjIn.handler;
				selector = handleObjIn.selector;
			}
	
			// Ensure that invalid selectors throw exceptions at attach time
			// Evaluate against documentElement in case elem is a non-element node (e.g., document)
			if ( selector ) {
				jQuery.find.matchesSelector( documentElement, selector );
			}
	
			// Make sure that the handler has a unique ID, used to find/remove it later
			if ( !handler.guid ) {
				handler.guid = jQuery.guid++;
			}
	
			// Init the element's event structure and main handler, if this is the first
			if ( !( events = elemData.events ) ) {
				events = elemData.events = {};
			}
			if ( !( eventHandle = elemData.handle ) ) {
				eventHandle = elemData.handle = function( e ) {
	
					// Discard the second event of a jQuery.event.trigger() and
					// when an event is called after a page has unloaded
					return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
						jQuery.event.dispatch.apply( elem, arguments ) : undefined;
				};
			}
	
			// Handle multiple events separated by a space
			types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();
	
				// There *must* be a type, no attaching namespace-only handlers
				if ( !type ) {
					continue;
				}
	
				// If event changes its type, use the special event handlers for the changed type
				special = jQuery.event.special[ type ] || {};
	
				// If selector defined, determine special event api type, otherwise given type
				type = ( selector ? special.delegateType : special.bindType ) || type;
	
				// Update special based on newly reset type
				special = jQuery.event.special[ type ] || {};
	
				// handleObj is passed to all event handlers
				handleObj = jQuery.extend( {
					type: type,
					origType: origType,
					data: data,
					handler: handler,
					guid: handler.guid,
					selector: selector,
					needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
					namespace: namespaces.join( "." )
				}, handleObjIn );
	
				// Init the event handler queue if we're the first
				if ( !( handlers = events[ type ] ) ) {
					handlers = events[ type ] = [];
					handlers.delegateCount = 0;
	
					// Only use addEventListener if the special events handler returns false
					if ( !special.setup ||
						special.setup.call( elem, data, namespaces, eventHandle ) === false ) {
	
						if ( elem.addEventListener ) {
							elem.addEventListener( type, eventHandle );
						}
					}
				}
	
				if ( special.add ) {
					special.add.call( elem, handleObj );
	
					if ( !handleObj.handler.guid ) {
						handleObj.handler.guid = handler.guid;
					}
				}
	
				// Add to the element's handler list, delegates in front
				if ( selector ) {
					handlers.splice( handlers.delegateCount++, 0, handleObj );
				} else {
					handlers.push( handleObj );
				}
	
				// Keep track of which events have ever been used, for event optimization
				jQuery.event.global[ type ] = true;
			}
	
		},
	
		// Detach an event or set of events from an element
		remove: function( elem, types, handler, selector, mappedTypes ) {
	
			var j, origCount, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );
	
			if ( !elemData || !( events = elemData.events ) ) {
				return;
			}
	
			// Once for each type.namespace in types; type may be omitted
			types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();
	
				// Unbind all events (on this namespace, if provided) for the element
				if ( !type ) {
					for ( type in events ) {
						jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
					}
					continue;
				}
	
				special = jQuery.event.special[ type ] || {};
				type = ( selector ? special.delegateType : special.bindType ) || type;
				handlers = events[ type ] || [];
				tmp = tmp[ 2 ] &&
					new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );
	
				// Remove matching events
				origCount = j = handlers.length;
				while ( j-- ) {
					handleObj = handlers[ j ];
	
					if ( ( mappedTypes || origType === handleObj.origType ) &&
						( !handler || handler.guid === handleObj.guid ) &&
						( !tmp || tmp.test( handleObj.namespace ) ) &&
						( !selector || selector === handleObj.selector ||
							selector === "**" && handleObj.selector ) ) {
						handlers.splice( j, 1 );
	
						if ( handleObj.selector ) {
							handlers.delegateCount--;
						}
						if ( special.remove ) {
							special.remove.call( elem, handleObj );
						}
					}
				}
	
				// Remove generic event handler if we removed something and no more handlers exist
				// (avoids potential for endless recursion during removal of special event handlers)
				if ( origCount && !handlers.length ) {
					if ( !special.teardown ||
						special.teardown.call( elem, namespaces, elemData.handle ) === false ) {
	
						jQuery.removeEvent( elem, type, elemData.handle );
					}
	
					delete events[ type ];
				}
			}
	
			// Remove data and the expando if it's no longer used
			if ( jQuery.isEmptyObject( events ) ) {
				dataPriv.remove( elem, "handle events" );
			}
		},
	
		dispatch: function( nativeEvent ) {
	
			// Make a writable jQuery.Event from the native event object
			var event = jQuery.event.fix( nativeEvent );
	
			var i, j, ret, matched, handleObj, handlerQueue,
				args = new Array( arguments.length ),
				handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
				special = jQuery.event.special[ event.type ] || {};
	
			// Use the fix-ed jQuery.Event rather than the (read-only) native event
			args[ 0 ] = event;
	
			for ( i = 1; i < arguments.length; i++ ) {
				args[ i ] = arguments[ i ];
			}
	
			event.delegateTarget = this;
	
			// Call the preDispatch hook for the mapped type, and let it bail if desired
			if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
				return;
			}
	
			// Determine handlers
			handlerQueue = jQuery.event.handlers.call( this, event, handlers );
	
			// Run delegates first; they may want to stop propagation beneath us
			i = 0;
			while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
				event.currentTarget = matched.elem;
	
				j = 0;
				while ( ( handleObj = matched.handlers[ j++ ] ) &&
					!event.isImmediatePropagationStopped() ) {
	
					// Triggered event must either 1) have no namespace, or 2) have namespace(s)
					// a subset or equal to those in the bound event (both can have no namespace).
					if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {
	
						event.handleObj = handleObj;
						event.data = handleObj.data;
	
						ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
							handleObj.handler ).apply( matched.elem, args );
	
						if ( ret !== undefined ) {
							if ( ( event.result = ret ) === false ) {
								event.preventDefault();
								event.stopPropagation();
							}
						}
					}
				}
			}
	
			// Call the postDispatch hook for the mapped type
			if ( special.postDispatch ) {
				special.postDispatch.call( this, event );
			}
	
			return event.result;
		},
	
		handlers: function( event, handlers ) {
			var i, handleObj, sel, matchedHandlers, matchedSelectors,
				handlerQueue = [],
				delegateCount = handlers.delegateCount,
				cur = event.target;
	
			// Find delegate handlers
			if ( delegateCount &&
	
				// Support: IE <=9
				// Black-hole SVG <use> instance trees (trac-13180)
				cur.nodeType &&
	
				// Support: Firefox <=42
				// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
				// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
				// Support: IE 11 only
				// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
				!( event.type === "click" && event.button >= 1 ) ) {
	
				for ( ; cur !== this; cur = cur.parentNode || this ) {
	
					// Don't check non-elements (#13208)
					// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
					if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
						matchedHandlers = [];
						matchedSelectors = {};
						for ( i = 0; i < delegateCount; i++ ) {
							handleObj = handlers[ i ];
	
							// Don't conflict with Object.prototype properties (#13203)
							sel = handleObj.selector + " ";
	
							if ( matchedSelectors[ sel ] === undefined ) {
								matchedSelectors[ sel ] = handleObj.needsContext ?
									jQuery( sel, this ).index( cur ) > -1 :
									jQuery.find( sel, this, null, [ cur ] ).length;
							}
							if ( matchedSelectors[ sel ] ) {
								matchedHandlers.push( handleObj );
							}
						}
						if ( matchedHandlers.length ) {
							handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
						}
					}
				}
			}
	
			// Add the remaining (directly-bound) handlers
			cur = this;
			if ( delegateCount < handlers.length ) {
				handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
			}
	
			return handlerQueue;
		},
	
		addProp: function( name, hook ) {
			Object.defineProperty( jQuery.Event.prototype, name, {
				enumerable: true,
				configurable: true,
	
				get: jQuery.isFunction( hook ) ?
					function() {
						if ( this.originalEvent ) {
								return hook( this.originalEvent );
						}
					} :
					function() {
						if ( this.originalEvent ) {
								return this.originalEvent[ name ];
						}
					},
	
				set: function( value ) {
					Object.defineProperty( this, name, {
						enumerable: true,
						configurable: true,
						writable: true,
						value: value
					} );
				}
			} );
		},
	
		fix: function( originalEvent ) {
			return originalEvent[ jQuery.expando ] ?
				originalEvent :
				new jQuery.Event( originalEvent );
		},
	
		special: {
			load: {
	
				// Prevent triggered image.load events from bubbling to window.load
				noBubble: true
			},
			focus: {
	
				// Fire native event if possible so blur/focus sequence is correct
				trigger: function() {
					if ( this !== safeActiveElement() && this.focus ) {
						this.focus();
						return false;
					}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					if ( this === safeActiveElement() && this.blur ) {
						this.blur();
						return false;
					}
				},
				delegateType: "focusout"
			},
			click: {
	
				// For checkbox, fire native event so checked state will be right
				trigger: function() {
					if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
						this.click();
						return false;
					}
				},
	
				// For cross-browser consistency, don't fire native .click() on links
				_default: function( event ) {
					return jQuery.nodeName( event.target, "a" );
				}
			},
	
			beforeunload: {
				postDispatch: function( event ) {
	
					// Support: Firefox 20+
					// Firefox doesn't alert if the returnValue field is not set.
					if ( event.result !== undefined && event.originalEvent ) {
						event.originalEvent.returnValue = event.result;
					}
				}
			}
		}
	};
	
	jQuery.removeEvent = function( elem, type, handle ) {
	
		// This "if" is needed for plain objects
		if ( elem.removeEventListener ) {
			elem.removeEventListener( type, handle );
		}
	};
	
	jQuery.Event = function( src, props ) {
	
		// Allow instantiation without the 'new' keyword
		if ( !( this instanceof jQuery.Event ) ) {
			return new jQuery.Event( src, props );
		}
	
		// Event object
		if ( src && src.type ) {
			this.originalEvent = src;
			this.type = src.type;
	
			// Events bubbling up the document may have been marked as prevented
			// by a handler lower down the tree; reflect the correct value.
			this.isDefaultPrevented = src.defaultPrevented ||
					src.defaultPrevented === undefined &&
	
					// Support: Android <=2.3 only
					src.returnValue === false ?
				returnTrue :
				returnFalse;
	
			// Create target properties
			// Support: Safari <=6 - 7 only
			// Target should not be a text node (#504, #13143)
			this.target = ( src.target && src.target.nodeType === 3 ) ?
				src.target.parentNode :
				src.target;
	
			this.currentTarget = src.currentTarget;
			this.relatedTarget = src.relatedTarget;
	
		// Event type
		} else {
			this.type = src;
		}
	
		// Put explicitly provided properties onto the event object
		if ( props ) {
			jQuery.extend( this, props );
		}
	
		// Create a timestamp if incoming event doesn't have one
		this.timeStamp = src && src.timeStamp || jQuery.now();
	
		// Mark it as fixed
		this[ jQuery.expando ] = true;
	};
	
	// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype = {
		constructor: jQuery.Event,
		isDefaultPrevented: returnFalse,
		isPropagationStopped: returnFalse,
		isImmediatePropagationStopped: returnFalse,
		isSimulated: false,
	
		preventDefault: function() {
			var e = this.originalEvent;
	
			this.isDefaultPrevented = returnTrue;
	
			if ( e && !this.isSimulated ) {
				e.preventDefault();
			}
		},
		stopPropagation: function() {
			var e = this.originalEvent;
	
			this.isPropagationStopped = returnTrue;
	
			if ( e && !this.isSimulated ) {
				e.stopPropagation();
			}
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;
	
			this.isImmediatePropagationStopped = returnTrue;
	
			if ( e && !this.isSimulated ) {
				e.stopImmediatePropagation();
			}
	
			this.stopPropagation();
		}
	};
	
	// Includes all common event props including KeyEvent and MouseEvent specific props
	jQuery.each( {
		altKey: true,
		bubbles: true,
		cancelable: true,
		changedTouches: true,
		ctrlKey: true,
		detail: true,
		eventPhase: true,
		metaKey: true,
		pageX: true,
		pageY: true,
		shiftKey: true,
		view: true,
		"char": true,
		charCode: true,
		key: true,
		keyCode: true,
		button: true,
		buttons: true,
		clientX: true,
		clientY: true,
		offsetX: true,
		offsetY: true,
		pointerId: true,
		pointerType: true,
		screenX: true,
		screenY: true,
		targetTouches: true,
		toElement: true,
		touches: true,
	
		which: function( event ) {
			var button = event.button;
	
			// Add which for key events
			if ( event.which == null && rkeyEvent.test( event.type ) ) {
				return event.charCode != null ? event.charCode : event.keyCode;
			}
	
			// Add which for click: 1 === left; 2 === middle; 3 === right
			if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
				if ( button & 1 ) {
					return 1;
				}
	
				if ( button & 2 ) {
					return 3;
				}
	
				if ( button & 4 ) {
					return 2;
				}
	
				return 0;
			}
	
			return event.which;
		}
	}, jQuery.event.addProp );
	
	// Create mouseenter/leave events using mouseover/out and event-time checks
	// so that event delegation works in jQuery.
	// Do the same for pointerenter/pointerleave and pointerover/pointerout
	//
	// Support: Safari 7 only
	// Safari sends mouseenter too often; see:
	// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
	// for the description of the bug (it existed in older Chrome versions as well).
	jQuery.each( {
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function( orig, fix ) {
		jQuery.event.special[ orig ] = {
			delegateType: fix,
			bindType: fix,
	
			handle: function( event ) {
				var ret,
					target = this,
					related = event.relatedTarget,
					handleObj = event.handleObj;
	
				// For mouseenter/leave call the handler if related is outside the target.
				// NB: No relatedTarget if the mouse left/entered the browser window
				if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
					event.type = handleObj.origType;
					ret = handleObj.handler.apply( this, arguments );
					event.type = fix;
				}
				return ret;
			}
		};
	} );
	
	jQuery.fn.extend( {
	
		on: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn );
		},
		one: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn, 1 );
		},
		off: function( types, selector, fn ) {
			var handleObj, type;
			if ( types && types.preventDefault && types.handleObj ) {
	
				// ( event )  dispatched jQuery.Event
				handleObj = types.handleObj;
				jQuery( types.delegateTarget ).off(
					handleObj.namespace ?
						handleObj.origType + "." + handleObj.namespace :
						handleObj.origType,
					handleObj.selector,
					handleObj.handler
				);
				return this;
			}
			if ( typeof types === "object" ) {
	
				// ( types-object [, selector] )
				for ( type in types ) {
					this.off( type, selector, types[ type ] );
				}
				return this;
			}
			if ( selector === false || typeof selector === "function" ) {
	
				// ( types [, fn] )
				fn = selector;
				selector = undefined;
			}
			if ( fn === false ) {
				fn = returnFalse;
			}
			return this.each( function() {
				jQuery.event.remove( this, types, fn, selector );
			} );
		}
	} );
	
	
	var
	
		/* eslint-disable max-len */
	
		// See https://github.com/eslint/eslint/issues/3229
		rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
	
		/* eslint-enable */
	
		// Support: IE <=10 - 11, Edge 12 - 13
		// In IE/Edge using regex groups here causes severe slowdowns.
		// See https://connect.microsoft.com/IE/feedback/details/1736512/
		rnoInnerhtml = /<script|<style|<link/i,
	
		// checked="checked" or checked
		rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
		rscriptTypeMasked = /^true\/(.*)/,
		rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
	
	function manipulationTarget( elem, content ) {
		if ( jQuery.nodeName( elem, "table" ) &&
			jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {
	
			return elem.getElementsByTagName( "tbody" )[ 0 ] || elem;
		}
	
		return elem;
	}
	
	// Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript( elem ) {
		elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
		return elem;
	}
	function restoreScript( elem ) {
		var match = rscriptTypeMasked.exec( elem.type );
	
		if ( match ) {
			elem.type = match[ 1 ];
		} else {
			elem.removeAttribute( "type" );
		}
	
		return elem;
	}
	
	function cloneCopyEvent( src, dest ) {
		var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;
	
		if ( dest.nodeType !== 1 ) {
			return;
		}
	
		// 1. Copy private data: events, handlers, etc.
		if ( dataPriv.hasData( src ) ) {
			pdataOld = dataPriv.access( src );
			pdataCur = dataPriv.set( dest, pdataOld );
			events = pdataOld.events;
	
			if ( events ) {
				delete pdataCur.handle;
				pdataCur.events = {};
	
				for ( type in events ) {
					for ( i = 0, l = events[ type ].length; i < l; i++ ) {
						jQuery.event.add( dest, type, events[ type ][ i ] );
					}
				}
			}
		}
	
		// 2. Copy user data
		if ( dataUser.hasData( src ) ) {
			udataOld = dataUser.access( src );
			udataCur = jQuery.extend( {}, udataOld );
	
			dataUser.set( dest, udataCur );
		}
	}
	
	// Fix IE bugs, see support tests
	function fixInput( src, dest ) {
		var nodeName = dest.nodeName.toLowerCase();
	
		// Fails to persist the checked state of a cloned checkbox or radio button.
		if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
			dest.checked = src.checked;
	
		// Fails to return the selected option to the default selected state when cloning options
		} else if ( nodeName === "input" || nodeName === "textarea" ) {
			dest.defaultValue = src.defaultValue;
		}
	}
	
	function domManip( collection, args, callback, ignored ) {
	
		// Flatten any nested arrays
		args = concat.apply( [], args );
	
		var fragment, first, scripts, hasScripts, node, doc,
			i = 0,
			l = collection.length,
			iNoClone = l - 1,
			value = args[ 0 ],
			isFunction = jQuery.isFunction( value );
	
		// We can't cloneNode fragments that contain checked, in WebKit
		if ( isFunction ||
				( l > 1 && typeof value === "string" &&
					!support.checkClone && rchecked.test( value ) ) ) {
			return collection.each( function( index ) {
				var self = collection.eq( index );
				if ( isFunction ) {
					args[ 0 ] = value.call( this, index, self.html() );
				}
				domManip( self, args, callback, ignored );
			} );
		}
	
		if ( l ) {
			fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
			first = fragment.firstChild;
	
			if ( fragment.childNodes.length === 1 ) {
				fragment = first;
			}
	
			// Require either new content or an interest in ignored elements to invoke the callback
			if ( first || ignored ) {
				scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
				hasScripts = scripts.length;
	
				// Use the original fragment for the last item
				// instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for ( ; i < l; i++ ) {
					node = fragment;
	
					if ( i !== iNoClone ) {
						node = jQuery.clone( node, true, true );
	
						// Keep references to cloned scripts for later restoration
						if ( hasScripts ) {
	
							// Support: Android <=4.0 only, PhantomJS 1 only
							// push.apply(_, arraylike) throws on ancient WebKit
							jQuery.merge( scripts, getAll( node, "script" ) );
						}
					}
	
					callback.call( collection[ i ], node, i );
				}
	
				if ( hasScripts ) {
					doc = scripts[ scripts.length - 1 ].ownerDocument;
	
					// Reenable scripts
					jQuery.map( scripts, restoreScript );
	
					// Evaluate executable scripts on first document insertion
					for ( i = 0; i < hasScripts; i++ ) {
						node = scripts[ i ];
						if ( rscriptType.test( node.type || "" ) &&
							!dataPriv.access( node, "globalEval" ) &&
							jQuery.contains( doc, node ) ) {
	
							if ( node.src ) {
	
								// Optional AJAX dependency, but won't run scripts if not present
								if ( jQuery._evalUrl ) {
									jQuery._evalUrl( node.src );
								}
							} else {
								DOMEval( node.textContent.replace( rcleanScript, "" ), doc );
							}
						}
					}
				}
			}
		}
	
		return collection;
	}
	
	function remove( elem, selector, keepData ) {
		var node,
			nodes = selector ? jQuery.filter( selector, elem ) : elem,
			i = 0;
	
		for ( ; ( node = nodes[ i ] ) != null; i++ ) {
			if ( !keepData && node.nodeType === 1 ) {
				jQuery.cleanData( getAll( node ) );
			}
	
			if ( node.parentNode ) {
				if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
					setGlobalEval( getAll( node, "script" ) );
				}
				node.parentNode.removeChild( node );
			}
		}
	
		return elem;
	}
	
	jQuery.extend( {
		htmlPrefilter: function( html ) {
			return html.replace( rxhtmlTag, "<$1></$2>" );
		},
	
		clone: function( elem, dataAndEvents, deepDataAndEvents ) {
			var i, l, srcElements, destElements,
				clone = elem.cloneNode( true ),
				inPage = jQuery.contains( elem.ownerDocument, elem );
	
			// Fix IE cloning issues
			if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
					!jQuery.isXMLDoc( elem ) ) {
	
				// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
				destElements = getAll( clone );
				srcElements = getAll( elem );
	
				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					fixInput( srcElements[ i ], destElements[ i ] );
				}
			}
	
			// Copy the events from the original to the clone
			if ( dataAndEvents ) {
				if ( deepDataAndEvents ) {
					srcElements = srcElements || getAll( elem );
					destElements = destElements || getAll( clone );
	
					for ( i = 0, l = srcElements.length; i < l; i++ ) {
						cloneCopyEvent( srcElements[ i ], destElements[ i ] );
					}
				} else {
					cloneCopyEvent( elem, clone );
				}
			}
	
			// Preserve script evaluation history
			destElements = getAll( clone, "script" );
			if ( destElements.length > 0 ) {
				setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
			}
	
			// Return the cloned set
			return clone;
		},
	
		cleanData: function( elems ) {
			var data, elem, type,
				special = jQuery.event.special,
				i = 0;
	
			for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
				if ( acceptData( elem ) ) {
					if ( ( data = elem[ dataPriv.expando ] ) ) {
						if ( data.events ) {
							for ( type in data.events ) {
								if ( special[ type ] ) {
									jQuery.event.remove( elem, type );
	
								// This is a shortcut to avoid jQuery.event.remove's overhead
								} else {
									jQuery.removeEvent( elem, type, data.handle );
								}
							}
						}
	
						// Support: Chrome <=35 - 45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataPriv.expando ] = undefined;
					}
					if ( elem[ dataUser.expando ] ) {
	
						// Support: Chrome <=35 - 45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataUser.expando ] = undefined;
					}
				}
			}
		}
	} );
	
	jQuery.fn.extend( {
		detach: function( selector ) {
			return remove( this, selector, true );
		},
	
		remove: function( selector ) {
			return remove( this, selector );
		},
	
		text: function( value ) {
			return access( this, function( value ) {
				return value === undefined ?
					jQuery.text( this ) :
					this.empty().each( function() {
						if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
							this.textContent = value;
						}
					} );
			}, null, value, arguments.length );
		},
	
		append: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.appendChild( elem );
				}
			} );
		},
	
		prepend: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.insertBefore( elem, target.firstChild );
				}
			} );
		},
	
		before: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this );
				}
			} );
		},
	
		after: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this.nextSibling );
				}
			} );
		},
	
		empty: function() {
			var elem,
				i = 0;
	
			for ( ; ( elem = this[ i ] ) != null; i++ ) {
				if ( elem.nodeType === 1 ) {
	
					// Prevent memory leaks
					jQuery.cleanData( getAll( elem, false ) );
	
					// Remove any remaining nodes
					elem.textContent = "";
				}
			}
	
			return this;
		},
	
		clone: function( dataAndEvents, deepDataAndEvents ) {
			dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
			deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
	
			return this.map( function() {
				return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
			} );
		},
	
		html: function( value ) {
			return access( this, function( value ) {
				var elem = this[ 0 ] || {},
					i = 0,
					l = this.length;
	
				if ( value === undefined && elem.nodeType === 1 ) {
					return elem.innerHTML;
				}
	
				// See if we can take a shortcut and just use innerHTML
				if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
					!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {
	
					value = jQuery.htmlPrefilter( value );
	
					try {
						for ( ; i < l; i++ ) {
							elem = this[ i ] || {};
	
							// Remove element nodes and prevent memory leaks
							if ( elem.nodeType === 1 ) {
								jQuery.cleanData( getAll( elem, false ) );
								elem.innerHTML = value;
							}
						}
	
						elem = 0;
	
					// If using innerHTML throws an exception, use the fallback method
					} catch ( e ) {}
				}
	
				if ( elem ) {
					this.empty().append( value );
				}
			}, null, value, arguments.length );
		},
	
		replaceWith: function() {
			var ignored = [];
	
			// Make the changes, replacing each non-ignored context element with the new content
			return domManip( this, arguments, function( elem ) {
				var parent = this.parentNode;
	
				if ( jQuery.inArray( this, ignored ) < 0 ) {
					jQuery.cleanData( getAll( this ) );
					if ( parent ) {
						parent.replaceChild( elem, this );
					}
				}
	
			// Force callback invocation
			}, ignored );
		}
	} );
	
	jQuery.each( {
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function( name, original ) {
		jQuery.fn[ name ] = function( selector ) {
			var elems,
				ret = [],
				insert = jQuery( selector ),
				last = insert.length - 1,
				i = 0;
	
			for ( ; i <= last; i++ ) {
				elems = i === last ? this : this.clone( true );
				jQuery( insert[ i ] )[ original ]( elems );
	
				// Support: Android <=4.0 only, PhantomJS 1 only
				// .get() because push.apply(_, arraylike) throws on ancient WebKit
				push.apply( ret, elems.get() );
			}
	
			return this.pushStack( ret );
		};
	} );
	var rmargin = ( /^margin/ );
	
	var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );
	
	var getStyles = function( elem ) {
	
			// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
			// IE throws on elements created in popups
			// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
			var view = elem.ownerDocument.defaultView;
	
			if ( !view || !view.opener ) {
				view = window;
			}
	
			return view.getComputedStyle( elem );
		};
	
	
	
	( function() {
	
		// Executing both pixelPosition & boxSizingReliable tests require only one layout
		// so they're executed at the same time to save the second computation.
		function computeStyleTests() {
	
			// This is a singleton, we need to execute it only once
			if ( !div ) {
				return;
			}
	
			div.style.cssText =
				"box-sizing:border-box;" +
				"position:relative;display:block;" +
				"margin:auto;border:1px;padding:1px;" +
				"top:1%;width:50%";
			div.innerHTML = "";
			documentElement.appendChild( container );
	
			var divStyle = window.getComputedStyle( div );
			pixelPositionVal = divStyle.top !== "1%";
	
			// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
			reliableMarginLeftVal = divStyle.marginLeft === "2px";
			boxSizingReliableVal = divStyle.width === "4px";
	
			// Support: Android 4.0 - 4.3 only
			// Some styles come back with percentage values, even though they shouldn't
			div.style.marginRight = "50%";
			pixelMarginRightVal = divStyle.marginRight === "4px";
	
			documentElement.removeChild( container );
	
			// Nullify the div so it wouldn't be stored in the memory and
			// it will also be a sign that checks already performed
			div = null;
		}
	
		var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
			container = document.createElement( "div" ),
			div = document.createElement( "div" );
	
		// Finish early in limited (non-browser) environments
		if ( !div.style ) {
			return;
		}
	
		// Support: IE <=9 - 11 only
		// Style of cloned element affects source element cloned (#8908)
		div.style.backgroundClip = "content-box";
		div.cloneNode( true ).style.backgroundClip = "";
		support.clearCloneStyle = div.style.backgroundClip === "content-box";
	
		container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
			"padding:0;margin-top:1px;position:absolute";
		container.appendChild( div );
	
		jQuery.extend( support, {
			pixelPosition: function() {
				computeStyleTests();
				return pixelPositionVal;
			},
			boxSizingReliable: function() {
				computeStyleTests();
				return boxSizingReliableVal;
			},
			pixelMarginRight: function() {
				computeStyleTests();
				return pixelMarginRightVal;
			},
			reliableMarginLeft: function() {
				computeStyleTests();
				return reliableMarginLeftVal;
			}
		} );
	} )();
	
	
	function curCSS( elem, name, computed ) {
		var width, minWidth, maxWidth, ret,
			style = elem.style;
	
		computed = computed || getStyles( elem );
	
		// Support: IE <=9 only
		// getPropertyValue is only needed for .css('filter') (#12537)
		if ( computed ) {
			ret = computed.getPropertyValue( name ) || computed[ name ];
	
			if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
				ret = jQuery.style( elem, name );
			}
	
			// A tribute to the "awesome hack by Dean Edwards"
			// Android Browser returns percentage for some values,
			// but width seems to be reliably pixels.
			// This is against the CSSOM draft spec:
			// https://drafts.csswg.org/cssom/#resolved-values
			if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {
	
				// Remember the original values
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;
	
				// Put in the new values to get a computed value out
				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;
	
				// Revert the changed values
				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}
	
		return ret !== undefined ?
	
			// Support: IE <=9 - 11 only
			// IE returns zIndex value as an integer.
			ret + "" :
			ret;
	}
	
	
	function addGetHookIf( conditionFn, hookFn ) {
	
		// Define the hook, we'll check on the first run if it's really needed.
		return {
			get: function() {
				if ( conditionFn() ) {
	
					// Hook not needed (or it's not possible to use it due
					// to missing dependency), remove it.
					delete this.get;
					return;
				}
	
				// Hook needed; redefine it so that the support test is not executed again.
				return ( this.get = hookFn ).apply( this, arguments );
			}
		};
	}
	
	
	var
	
		// Swappable if display is none or starts with table
		// except "table", "table-cell", or "table-caption"
		// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
		rdisplayswap = /^(none|table(?!-c[ea]).+)/,
		cssShow = { position: "absolute", visibility: "hidden", display: "block" },
		cssNormalTransform = {
			letterSpacing: "0",
			fontWeight: "400"
		},
	
		cssPrefixes = [ "Webkit", "Moz", "ms" ],
		emptyStyle = document.createElement( "div" ).style;
	
	// Return a css property mapped to a potentially vendor prefixed property
	function vendorPropName( name ) {
	
		// Shortcut for names that are not vendor prefixed
		if ( name in emptyStyle ) {
			return name;
		}
	
		// Check for vendor prefixed names
		var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
			i = cssPrefixes.length;
	
		while ( i-- ) {
			name = cssPrefixes[ i ] + capName;
			if ( name in emptyStyle ) {
				return name;
			}
		}
	}
	
	function setPositiveNumber( elem, value, subtract ) {
	
		// Any relative (+/-) values have already been
		// normalized at this point
		var matches = rcssNum.exec( value );
		return matches ?
	
			// Guard against undefined "subtract", e.g., when used as in cssHooks
			Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
			value;
	}
	
	function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
		var i,
			val = 0;
	
		// If we already have the right measurement, avoid augmentation
		if ( extra === ( isBorderBox ? "border" : "content" ) ) {
			i = 4;
	
		// Otherwise initialize for horizontal or vertical properties
		} else {
			i = name === "width" ? 1 : 0;
		}
	
		for ( ; i < 4; i += 2 ) {
	
			// Both box models exclude margin, so add it if we want it
			if ( extra === "margin" ) {
				val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
			}
	
			if ( isBorderBox ) {
	
				// border-box includes padding, so remove it if we want content
				if ( extra === "content" ) {
					val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
				}
	
				// At this point, extra isn't border nor margin, so remove border
				if ( extra !== "margin" ) {
					val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			} else {
	
				// At this point, extra isn't content, so add padding
				val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
	
				// At this point, extra isn't content nor padding, so add border
				if ( extra !== "padding" ) {
					val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			}
		}
	
		return val;
	}
	
	function getWidthOrHeight( elem, name, extra ) {
	
		// Start with offset property, which is equivalent to the border-box value
		var val,
			valueIsBorderBox = true,
			styles = getStyles( elem ),
			isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";
	
		// Support: IE <=11 only
		// Running getBoundingClientRect on a disconnected node
		// in IE throws an error.
		if ( elem.getClientRects().length ) {
			val = elem.getBoundingClientRect()[ name ];
		}
	
		// Some non-html elements return undefined for offsetWidth, so check for null/undefined
		// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
		// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
		if ( val <= 0 || val == null ) {
	
			// Fall back to computed then uncomputed css if necessary
			val = curCSS( elem, name, styles );
			if ( val < 0 || val == null ) {
				val = elem.style[ name ];
			}
	
			// Computed unit is not pixels. Stop here and return.
			if ( rnumnonpx.test( val ) ) {
				return val;
			}
	
			// Check for style in case a browser which returns unreliable values
			// for getComputedStyle silently falls back to the reliable elem.style
			valueIsBorderBox = isBorderBox &&
				( support.boxSizingReliable() || val === elem.style[ name ] );
	
			// Normalize "", auto, and prepare for extra
			val = parseFloat( val ) || 0;
		}
	
		// Use the active box-sizing model to add/subtract irrelevant styles
		return ( val +
			augmentWidthOrHeight(
				elem,
				name,
				extra || ( isBorderBox ? "border" : "content" ),
				valueIsBorderBox,
				styles
			)
		) + "px";
	}
	
	jQuery.extend( {
	
		// Add in style property hooks for overriding the default
		// behavior of getting and setting a style property
		cssHooks: {
			opacity: {
				get: function( elem, computed ) {
					if ( computed ) {
	
						// We should always get a number back from opacity
						var ret = curCSS( elem, "opacity" );
						return ret === "" ? "1" : ret;
					}
				}
			}
		},
	
		// Don't automatically add "px" to these possibly-unitless properties
		cssNumber: {
			"animationIterationCount": true,
			"columnCount": true,
			"fillOpacity": true,
			"flexGrow": true,
			"flexShrink": true,
			"fontWeight": true,
			"lineHeight": true,
			"opacity": true,
			"order": true,
			"orphans": true,
			"widows": true,
			"zIndex": true,
			"zoom": true
		},
	
		// Add in properties whose names you wish to fix before
		// setting or getting the value
		cssProps: {
			"float": "cssFloat"
		},
	
		// Get and set the style property on a DOM Node
		style: function( elem, name, value, extra ) {
	
			// Don't set styles on text and comment nodes
			if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
				return;
			}
	
			// Make sure that we're working with the right name
			var ret, type, hooks,
				origName = jQuery.camelCase( name ),
				style = elem.style;
	
			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );
	
			// Gets hook for the prefixed version, then unprefixed version
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];
	
			// Check if we're setting a value
			if ( value !== undefined ) {
				type = typeof value;
	
				// Convert "+=" or "-=" to relative numbers (#7345)
				if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
					value = adjustCSS( elem, name, ret );
	
					// Fixes bug #9237
					type = "number";
				}
	
				// Make sure that null and NaN values aren't set (#7116)
				if ( value == null || value !== value ) {
					return;
				}
	
				// If a number was passed in, add the unit (except for certain CSS properties)
				if ( type === "number" ) {
					value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
				}
	
				// background-* props affect original clone's values
				if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
					style[ name ] = "inherit";
				}
	
				// If a hook was provided, use that value, otherwise just set the specified value
				if ( !hooks || !( "set" in hooks ) ||
					( value = hooks.set( elem, value, extra ) ) !== undefined ) {
	
					style[ name ] = value;
				}
	
			} else {
	
				// If a hook was provided get the non-computed value from there
				if ( hooks && "get" in hooks &&
					( ret = hooks.get( elem, false, extra ) ) !== undefined ) {
	
					return ret;
				}
	
				// Otherwise just get the value from the style object
				return style[ name ];
			}
		},
	
		css: function( elem, name, extra, styles ) {
			var val, num, hooks,
				origName = jQuery.camelCase( name );
	
			// Make sure that we're working with the right name
			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );
	
			// Try prefixed name followed by the unprefixed name
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];
	
			// If a hook was provided get the computed value from there
			if ( hooks && "get" in hooks ) {
				val = hooks.get( elem, true, extra );
			}
	
			// Otherwise, if a way to get the computed value exists, use that
			if ( val === undefined ) {
				val = curCSS( elem, name, styles );
			}
	
			// Convert "normal" to computed value
			if ( val === "normal" && name in cssNormalTransform ) {
				val = cssNormalTransform[ name ];
			}
	
			// Make numeric if forced or a qualifier was provided and val looks numeric
			if ( extra === "" || extra ) {
				num = parseFloat( val );
				return extra === true || isFinite( num ) ? num || 0 : val;
			}
			return val;
		}
	} );
	
	jQuery.each( [ "height", "width" ], function( i, name ) {
		jQuery.cssHooks[ name ] = {
			get: function( elem, computed, extra ) {
				if ( computed ) {
	
					// Certain elements can have dimension info if we invisibly show them
					// but it must have a current display style that would benefit
					return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&
	
						// Support: Safari 8+
						// Table columns in Safari have non-zero offsetWidth & zero
						// getBoundingClientRect().width unless display is changed.
						// Support: IE <=11 only
						// Running getBoundingClientRect on a disconnected node
						// in IE throws an error.
						( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
							swap( elem, cssShow, function() {
								return getWidthOrHeight( elem, name, extra );
							} ) :
							getWidthOrHeight( elem, name, extra );
				}
			},
	
			set: function( elem, value, extra ) {
				var matches,
					styles = extra && getStyles( elem ),
					subtract = extra && augmentWidthOrHeight(
						elem,
						name,
						extra,
						jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
						styles
					);
	
				// Convert to pixels if value adjustment is needed
				if ( subtract && ( matches = rcssNum.exec( value ) ) &&
					( matches[ 3 ] || "px" ) !== "px" ) {
	
					elem.style[ name ] = value;
					value = jQuery.css( elem, name );
				}
	
				return setPositiveNumber( elem, value, subtract );
			}
		};
	} );
	
	jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
		function( elem, computed ) {
			if ( computed ) {
				return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
					elem.getBoundingClientRect().left -
						swap( elem, { marginLeft: 0 }, function() {
							return elem.getBoundingClientRect().left;
						} )
					) + "px";
			}
		}
	);
	
	// These hooks are used by animate to expand properties
	jQuery.each( {
		margin: "",
		padding: "",
		border: "Width"
	}, function( prefix, suffix ) {
		jQuery.cssHooks[ prefix + suffix ] = {
			expand: function( value ) {
				var i = 0,
					expanded = {},
	
					// Assumes a single number if not a string
					parts = typeof value === "string" ? value.split( " " ) : [ value ];
	
				for ( ; i < 4; i++ ) {
					expanded[ prefix + cssExpand[ i ] + suffix ] =
						parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
				}
	
				return expanded;
			}
		};
	
		if ( !rmargin.test( prefix ) ) {
			jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
		}
	} );
	
	jQuery.fn.extend( {
		css: function( name, value ) {
			return access( this, function( elem, name, value ) {
				var styles, len,
					map = {},
					i = 0;
	
				if ( jQuery.isArray( name ) ) {
					styles = getStyles( elem );
					len = name.length;
	
					for ( ; i < len; i++ ) {
						map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
					}
	
					return map;
				}
	
				return value !== undefined ?
					jQuery.style( elem, name, value ) :
					jQuery.css( elem, name );
			}, name, value, arguments.length > 1 );
		}
	} );
	
	
	function Tween( elem, options, prop, end, easing ) {
		return new Tween.prototype.init( elem, options, prop, end, easing );
	}
	jQuery.Tween = Tween;
	
	Tween.prototype = {
		constructor: Tween,
		init: function( elem, options, prop, end, easing, unit ) {
			this.elem = elem;
			this.prop = prop;
			this.easing = easing || jQuery.easing._default;
			this.options = options;
			this.start = this.now = this.cur();
			this.end = end;
			this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
		},
		cur: function() {
			var hooks = Tween.propHooks[ this.prop ];
	
			return hooks && hooks.get ?
				hooks.get( this ) :
				Tween.propHooks._default.get( this );
		},
		run: function( percent ) {
			var eased,
				hooks = Tween.propHooks[ this.prop ];
	
			if ( this.options.duration ) {
				this.pos = eased = jQuery.easing[ this.easing ](
					percent, this.options.duration * percent, 0, 1, this.options.duration
				);
			} else {
				this.pos = eased = percent;
			}
			this.now = ( this.end - this.start ) * eased + this.start;
	
			if ( this.options.step ) {
				this.options.step.call( this.elem, this.now, this );
			}
	
			if ( hooks && hooks.set ) {
				hooks.set( this );
			} else {
				Tween.propHooks._default.set( this );
			}
			return this;
		}
	};
	
	Tween.prototype.init.prototype = Tween.prototype;
	
	Tween.propHooks = {
		_default: {
			get: function( tween ) {
				var result;
	
				// Use a property on the element directly when it is not a DOM element,
				// or when there is no matching style property that exists.
				if ( tween.elem.nodeType !== 1 ||
					tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
					return tween.elem[ tween.prop ];
				}
	
				// Passing an empty string as a 3rd parameter to .css will automatically
				// attempt a parseFloat and fallback to a string if the parse fails.
				// Simple values such as "10px" are parsed to Float;
				// complex values such as "rotate(1rad)" are returned as-is.
				result = jQuery.css( tween.elem, tween.prop, "" );
	
				// Empty strings, null, undefined and "auto" are converted to 0.
				return !result || result === "auto" ? 0 : result;
			},
			set: function( tween ) {
	
				// Use step hook for back compat.
				// Use cssHook if its there.
				// Use .style if available and use plain properties where available.
				if ( jQuery.fx.step[ tween.prop ] ) {
					jQuery.fx.step[ tween.prop ]( tween );
				} else if ( tween.elem.nodeType === 1 &&
					( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
						jQuery.cssHooks[ tween.prop ] ) ) {
					jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
				} else {
					tween.elem[ tween.prop ] = tween.now;
				}
			}
		}
	};
	
	// Support: IE <=9 only
	// Panic based approach to setting things on disconnected nodes
	Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
		set: function( tween ) {
			if ( tween.elem.nodeType && tween.elem.parentNode ) {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	};
	
	jQuery.easing = {
		linear: function( p ) {
			return p;
		},
		swing: function( p ) {
			return 0.5 - Math.cos( p * Math.PI ) / 2;
		},
		_default: "swing"
	};
	
	jQuery.fx = Tween.prototype.init;
	
	// Back compat <1.8 extension point
	jQuery.fx.step = {};
	
	
	
	
	var
		fxNow, timerId,
		rfxtypes = /^(?:toggle|show|hide)$/,
		rrun = /queueHooks$/;
	
	function raf() {
		if ( timerId ) {
			window.requestAnimationFrame( raf );
			jQuery.fx.tick();
		}
	}
	
	// Animations created synchronously will run synchronously
	function createFxNow() {
		window.setTimeout( function() {
			fxNow = undefined;
		} );
		return ( fxNow = jQuery.now() );
	}
	
	// Generate parameters to create a standard animation
	function genFx( type, includeWidth ) {
		var which,
			i = 0,
			attrs = { height: type };
	
		// If we include width, step value is 1 to do all cssExpand values,
		// otherwise step value is 2 to skip over Left and Right
		includeWidth = includeWidth ? 1 : 0;
		for ( ; i < 4; i += 2 - includeWidth ) {
			which = cssExpand[ i ];
			attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
		}
	
		if ( includeWidth ) {
			attrs.opacity = attrs.width = type;
		}
	
		return attrs;
	}
	
	function createTween( value, prop, animation ) {
		var tween,
			collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
			index = 0,
			length = collection.length;
		for ( ; index < length; index++ ) {
			if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {
	
				// We're done with this property
				return tween;
			}
		}
	}
	
	function defaultPrefilter( elem, props, opts ) {
		var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
			isBox = "width" in props || "height" in props,
			anim = this,
			orig = {},
			style = elem.style,
			hidden = elem.nodeType && isHiddenWithinTree( elem ),
			dataShow = dataPriv.get( elem, "fxshow" );
	
		// Queue-skipping animations hijack the fx hooks
		if ( !opts.queue ) {
			hooks = jQuery._queueHooks( elem, "fx" );
			if ( hooks.unqueued == null ) {
				hooks.unqueued = 0;
				oldfire = hooks.empty.fire;
				hooks.empty.fire = function() {
					if ( !hooks.unqueued ) {
						oldfire();
					}
				};
			}
			hooks.unqueued++;
	
			anim.always( function() {
	
				// Ensure the complete handler is called before this completes
				anim.always( function() {
					hooks.unqueued--;
					if ( !jQuery.queue( elem, "fx" ).length ) {
						hooks.empty.fire();
					}
				} );
			} );
		}
	
		// Detect show/hide animations
		for ( prop in props ) {
			value = props[ prop ];
			if ( rfxtypes.test( value ) ) {
				delete props[ prop ];
				toggle = toggle || value === "toggle";
				if ( value === ( hidden ? "hide" : "show" ) ) {
	
					// Pretend to be hidden if this is a "show" and
					// there is still data from a stopped show/hide
					if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
						hidden = true;
	
					// Ignore all other no-op show/hide data
					} else {
						continue;
					}
				}
				orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
			}
		}
	
		// Bail out if this is a no-op like .hide().hide()
		propTween = !jQuery.isEmptyObject( props );
		if ( !propTween && jQuery.isEmptyObject( orig ) ) {
			return;
		}
	
		// Restrict "overflow" and "display" styles during box animations
		if ( isBox && elem.nodeType === 1 ) {
	
			// Support: IE <=9 - 11, Edge 12 - 13
			// Record all 3 overflow attributes because IE does not infer the shorthand
			// from identically-valued overflowX and overflowY
			opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];
	
			// Identify a display type, preferring old show/hide data over the CSS cascade
			restoreDisplay = dataShow && dataShow.display;
			if ( restoreDisplay == null ) {
				restoreDisplay = dataPriv.get( elem, "display" );
			}
			display = jQuery.css( elem, "display" );
			if ( display === "none" ) {
				if ( restoreDisplay ) {
					display = restoreDisplay;
				} else {
	
					// Get nonempty value(s) by temporarily forcing visibility
					showHide( [ elem ], true );
					restoreDisplay = elem.style.display || restoreDisplay;
					display = jQuery.css( elem, "display" );
					showHide( [ elem ] );
				}
			}
	
			// Animate inline elements as inline-block
			if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
				if ( jQuery.css( elem, "float" ) === "none" ) {
	
					// Restore the original display value at the end of pure show/hide animations
					if ( !propTween ) {
						anim.done( function() {
							style.display = restoreDisplay;
						} );
						if ( restoreDisplay == null ) {
							display = style.display;
							restoreDisplay = display === "none" ? "" : display;
						}
					}
					style.display = "inline-block";
				}
			}
		}
	
		if ( opts.overflow ) {
			style.overflow = "hidden";
			anim.always( function() {
				style.overflow = opts.overflow[ 0 ];
				style.overflowX = opts.overflow[ 1 ];
				style.overflowY = opts.overflow[ 2 ];
			} );
		}
	
		// Implement show/hide animations
		propTween = false;
		for ( prop in orig ) {
	
			// General show/hide setup for this element animation
			if ( !propTween ) {
				if ( dataShow ) {
					if ( "hidden" in dataShow ) {
						hidden = dataShow.hidden;
					}
				} else {
					dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
				}
	
				// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
				if ( toggle ) {
					dataShow.hidden = !hidden;
				}
	
				// Show elements before animating them
				if ( hidden ) {
					showHide( [ elem ], true );
				}
	
				/* eslint-disable no-loop-func */
	
				anim.done( function() {
	
				/* eslint-enable no-loop-func */
	
					// The final step of a "hide" animation is actually hiding the element
					if ( !hidden ) {
						showHide( [ elem ] );
					}
					dataPriv.remove( elem, "fxshow" );
					for ( prop in orig ) {
						jQuery.style( elem, prop, orig[ prop ] );
					}
				} );
			}
	
			// Per-property setup
			propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
			if ( !( prop in dataShow ) ) {
				dataShow[ prop ] = propTween.start;
				if ( hidden ) {
					propTween.end = propTween.start;
					propTween.start = 0;
				}
			}
		}
	}
	
	function propFilter( props, specialEasing ) {
		var index, name, easing, value, hooks;
	
		// camelCase, specialEasing and expand cssHook pass
		for ( index in props ) {
			name = jQuery.camelCase( index );
			easing = specialEasing[ name ];
			value = props[ index ];
			if ( jQuery.isArray( value ) ) {
				easing = value[ 1 ];
				value = props[ index ] = value[ 0 ];
			}
	
			if ( index !== name ) {
				props[ name ] = value;
				delete props[ index ];
			}
	
			hooks = jQuery.cssHooks[ name ];
			if ( hooks && "expand" in hooks ) {
				value = hooks.expand( value );
				delete props[ name ];
	
				// Not quite $.extend, this won't overwrite existing keys.
				// Reusing 'index' because we have the correct "name"
				for ( index in value ) {
					if ( !( index in props ) ) {
						props[ index ] = value[ index ];
						specialEasing[ index ] = easing;
					}
				}
			} else {
				specialEasing[ name ] = easing;
			}
		}
	}
	
	function Animation( elem, properties, options ) {
		var result,
			stopped,
			index = 0,
			length = Animation.prefilters.length,
			deferred = jQuery.Deferred().always( function() {
	
				// Don't match elem in the :animated selector
				delete tick.elem;
			} ),
			tick = function() {
				if ( stopped ) {
					return false;
				}
				var currentTime = fxNow || createFxNow(),
					remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),
	
					// Support: Android 2.3 only
					// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
					temp = remaining / animation.duration || 0,
					percent = 1 - temp,
					index = 0,
					length = animation.tweens.length;
	
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( percent );
				}
	
				deferred.notifyWith( elem, [ animation, percent, remaining ] );
	
				if ( percent < 1 && length ) {
					return remaining;
				} else {
					deferred.resolveWith( elem, [ animation ] );
					return false;
				}
			},
			animation = deferred.promise( {
				elem: elem,
				props: jQuery.extend( {}, properties ),
				opts: jQuery.extend( true, {
					specialEasing: {},
					easing: jQuery.easing._default
				}, options ),
				originalProperties: properties,
				originalOptions: options,
				startTime: fxNow || createFxNow(),
				duration: options.duration,
				tweens: [],
				createTween: function( prop, end ) {
					var tween = jQuery.Tween( elem, animation.opts, prop, end,
							animation.opts.specialEasing[ prop ] || animation.opts.easing );
					animation.tweens.push( tween );
					return tween;
				},
				stop: function( gotoEnd ) {
					var index = 0,
	
						// If we are going to the end, we want to run all the tweens
						// otherwise we skip this part
						length = gotoEnd ? animation.tweens.length : 0;
					if ( stopped ) {
						return this;
					}
					stopped = true;
					for ( ; index < length; index++ ) {
						animation.tweens[ index ].run( 1 );
					}
	
					// Resolve when we played the last frame; otherwise, reject
					if ( gotoEnd ) {
						deferred.notifyWith( elem, [ animation, 1, 0 ] );
						deferred.resolveWith( elem, [ animation, gotoEnd ] );
					} else {
						deferred.rejectWith( elem, [ animation, gotoEnd ] );
					}
					return this;
				}
			} ),
			props = animation.props;
	
		propFilter( props, animation.opts.specialEasing );
	
		for ( ; index < length; index++ ) {
			result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
			if ( result ) {
				if ( jQuery.isFunction( result.stop ) ) {
					jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
						jQuery.proxy( result.stop, result );
				}
				return result;
			}
		}
	
		jQuery.map( props, createTween, animation );
	
		if ( jQuery.isFunction( animation.opts.start ) ) {
			animation.opts.start.call( elem, animation );
		}
	
		jQuery.fx.timer(
			jQuery.extend( tick, {
				elem: elem,
				anim: animation,
				queue: animation.opts.queue
			} )
		);
	
		// attach callbacks from options
		return animation.progress( animation.opts.progress )
			.done( animation.opts.done, animation.opts.complete )
			.fail( animation.opts.fail )
			.always( animation.opts.always );
	}
	
	jQuery.Animation = jQuery.extend( Animation, {
	
		tweeners: {
			"*": [ function( prop, value ) {
				var tween = this.createTween( prop, value );
				adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
				return tween;
			} ]
		},
	
		tweener: function( props, callback ) {
			if ( jQuery.isFunction( props ) ) {
				callback = props;
				props = [ "*" ];
			} else {
				props = props.match( rnothtmlwhite );
			}
	
			var prop,
				index = 0,
				length = props.length;
	
			for ( ; index < length; index++ ) {
				prop = props[ index ];
				Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
				Animation.tweeners[ prop ].unshift( callback );
			}
		},
	
		prefilters: [ defaultPrefilter ],
	
		prefilter: function( callback, prepend ) {
			if ( prepend ) {
				Animation.prefilters.unshift( callback );
			} else {
				Animation.prefilters.push( callback );
			}
		}
	} );
	
	jQuery.speed = function( speed, easing, fn ) {
		var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
			complete: fn || !fn && easing ||
				jQuery.isFunction( speed ) && speed,
			duration: speed,
			easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
		};
	
		// Go to the end state if fx are off or if document is hidden
		if ( jQuery.fx.off || document.hidden ) {
			opt.duration = 0;
	
		} else {
			if ( typeof opt.duration !== "number" ) {
				if ( opt.duration in jQuery.fx.speeds ) {
					opt.duration = jQuery.fx.speeds[ opt.duration ];
	
				} else {
					opt.duration = jQuery.fx.speeds._default;
				}
			}
		}
	
		// Normalize opt.queue - true/undefined/null -> "fx"
		if ( opt.queue == null || opt.queue === true ) {
			opt.queue = "fx";
		}
	
		// Queueing
		opt.old = opt.complete;
	
		opt.complete = function() {
			if ( jQuery.isFunction( opt.old ) ) {
				opt.old.call( this );
			}
	
			if ( opt.queue ) {
				jQuery.dequeue( this, opt.queue );
			}
		};
	
		return opt;
	};
	
	jQuery.fn.extend( {
		fadeTo: function( speed, to, easing, callback ) {
	
			// Show any hidden elements after setting opacity to 0
			return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()
	
				// Animate to the value specified
				.end().animate( { opacity: to }, speed, easing, callback );
		},
		animate: function( prop, speed, easing, callback ) {
			var empty = jQuery.isEmptyObject( prop ),
				optall = jQuery.speed( speed, easing, callback ),
				doAnimation = function() {
	
					// Operate on a copy of prop so per-property easing won't be lost
					var anim = Animation( this, jQuery.extend( {}, prop ), optall );
	
					// Empty animations, or finishing resolves immediately
					if ( empty || dataPriv.get( this, "finish" ) ) {
						anim.stop( true );
					}
				};
				doAnimation.finish = doAnimation;
	
			return empty || optall.queue === false ?
				this.each( doAnimation ) :
				this.queue( optall.queue, doAnimation );
		},
		stop: function( type, clearQueue, gotoEnd ) {
			var stopQueue = function( hooks ) {
				var stop = hooks.stop;
				delete hooks.stop;
				stop( gotoEnd );
			};
	
			if ( typeof type !== "string" ) {
				gotoEnd = clearQueue;
				clearQueue = type;
				type = undefined;
			}
			if ( clearQueue && type !== false ) {
				this.queue( type || "fx", [] );
			}
	
			return this.each( function() {
				var dequeue = true,
					index = type != null && type + "queueHooks",
					timers = jQuery.timers,
					data = dataPriv.get( this );
	
				if ( index ) {
					if ( data[ index ] && data[ index ].stop ) {
						stopQueue( data[ index ] );
					}
				} else {
					for ( index in data ) {
						if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
							stopQueue( data[ index ] );
						}
					}
				}
	
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this &&
						( type == null || timers[ index ].queue === type ) ) {
	
						timers[ index ].anim.stop( gotoEnd );
						dequeue = false;
						timers.splice( index, 1 );
					}
				}
	
				// Start the next in the queue if the last step wasn't forced.
				// Timers currently will call their complete callbacks, which
				// will dequeue but only if they were gotoEnd.
				if ( dequeue || !gotoEnd ) {
					jQuery.dequeue( this, type );
				}
			} );
		},
		finish: function( type ) {
			if ( type !== false ) {
				type = type || "fx";
			}
			return this.each( function() {
				var index,
					data = dataPriv.get( this ),
					queue = data[ type + "queue" ],
					hooks = data[ type + "queueHooks" ],
					timers = jQuery.timers,
					length = queue ? queue.length : 0;
	
				// Enable finishing flag on private data
				data.finish = true;
	
				// Empty the queue first
				jQuery.queue( this, type, [] );
	
				if ( hooks && hooks.stop ) {
					hooks.stop.call( this, true );
				}
	
				// Look for any active animations, and finish them
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
						timers[ index ].anim.stop( true );
						timers.splice( index, 1 );
					}
				}
	
				// Look for any animations in the old queue and finish them
				for ( index = 0; index < length; index++ ) {
					if ( queue[ index ] && queue[ index ].finish ) {
						queue[ index ].finish.call( this );
					}
				}
	
				// Turn off finishing flag
				delete data.finish;
			} );
		}
	} );
	
	jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
		var cssFn = jQuery.fn[ name ];
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return speed == null || typeof speed === "boolean" ?
				cssFn.apply( this, arguments ) :
				this.animate( genFx( name, true ), speed, easing, callback );
		};
	} );
	
	// Generate shortcuts for custom animations
	jQuery.each( {
		slideDown: genFx( "show" ),
		slideUp: genFx( "hide" ),
		slideToggle: genFx( "toggle" ),
		fadeIn: { opacity: "show" },
		fadeOut: { opacity: "hide" },
		fadeToggle: { opacity: "toggle" }
	}, function( name, props ) {
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return this.animate( props, speed, easing, callback );
		};
	} );
	
	jQuery.timers = [];
	jQuery.fx.tick = function() {
		var timer,
			i = 0,
			timers = jQuery.timers;
	
		fxNow = jQuery.now();
	
		for ( ; i < timers.length; i++ ) {
			timer = timers[ i ];
	
			// Checks the timer has not already been removed
			if ( !timer() && timers[ i ] === timer ) {
				timers.splice( i--, 1 );
			}
		}
	
		if ( !timers.length ) {
			jQuery.fx.stop();
		}
		fxNow = undefined;
	};
	
	jQuery.fx.timer = function( timer ) {
		jQuery.timers.push( timer );
		if ( timer() ) {
			jQuery.fx.start();
		} else {
			jQuery.timers.pop();
		}
	};
	
	jQuery.fx.interval = 13;
	jQuery.fx.start = function() {
		if ( !timerId ) {
			timerId = window.requestAnimationFrame ?
				window.requestAnimationFrame( raf ) :
				window.setInterval( jQuery.fx.tick, jQuery.fx.interval );
		}
	};
	
	jQuery.fx.stop = function() {
		if ( window.cancelAnimationFrame ) {
			window.cancelAnimationFrame( timerId );
		} else {
			window.clearInterval( timerId );
		}
	
		timerId = null;
	};
	
	jQuery.fx.speeds = {
		slow: 600,
		fast: 200,
	
		// Default speed
		_default: 400
	};
	
	
	// Based off of the plugin by Clint Helfers, with permission.
	// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
	jQuery.fn.delay = function( time, type ) {
		time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
		type = type || "fx";
	
		return this.queue( type, function( next, hooks ) {
			var timeout = window.setTimeout( next, time );
			hooks.stop = function() {
				window.clearTimeout( timeout );
			};
		} );
	};
	
	
	( function() {
		var input = document.createElement( "input" ),
			select = document.createElement( "select" ),
			opt = select.appendChild( document.createElement( "option" ) );
	
		input.type = "checkbox";
	
		// Support: Android <=4.3 only
		// Default value for a checkbox should be "on"
		support.checkOn = input.value !== "";
	
		// Support: IE <=11 only
		// Must access selectedIndex to make default options select
		support.optSelected = opt.selected;
	
		// Support: IE <=11 only
		// An input loses its value after becoming a radio
		input = document.createElement( "input" );
		input.value = "t";
		input.type = "radio";
		support.radioValue = input.value === "t";
	} )();
	
	
	var boolHook,
		attrHandle = jQuery.expr.attrHandle;
	
	jQuery.fn.extend( {
		attr: function( name, value ) {
			return access( this, jQuery.attr, name, value, arguments.length > 1 );
		},
	
		removeAttr: function( name ) {
			return this.each( function() {
				jQuery.removeAttr( this, name );
			} );
		}
	} );
	
	jQuery.extend( {
		attr: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;
	
			// Don't get/set attributes on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}
	
			// Fallback to prop when attributes are not supported
			if ( typeof elem.getAttribute === "undefined" ) {
				return jQuery.prop( elem, name, value );
			}
	
			// Attribute hooks are determined by the lowercase version
			// Grab necessary hook if one is defined
			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
				hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
					( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
			}
	
			if ( value !== undefined ) {
				if ( value === null ) {
					jQuery.removeAttr( elem, name );
					return;
				}
	
				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}
	
				elem.setAttribute( name, value + "" );
				return value;
			}
	
			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}
	
			ret = jQuery.find.attr( elem, name );
	
			// Non-existent attributes return null, we normalize to undefined
			return ret == null ? undefined : ret;
		},
	
		attrHooks: {
			type: {
				set: function( elem, value ) {
					if ( !support.radioValue && value === "radio" &&
						jQuery.nodeName( elem, "input" ) ) {
						var val = elem.value;
						elem.setAttribute( "type", value );
						if ( val ) {
							elem.value = val;
						}
						return value;
					}
				}
			}
		},
	
		removeAttr: function( elem, value ) {
			var name,
				i = 0,
	
				// Attribute names can contain non-HTML whitespace characters
				// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
				attrNames = value && value.match( rnothtmlwhite );
	
			if ( attrNames && elem.nodeType === 1 ) {
				while ( ( name = attrNames[ i++ ] ) ) {
					elem.removeAttribute( name );
				}
			}
		}
	} );
	
	// Hooks for boolean attributes
	boolHook = {
		set: function( elem, value, name ) {
			if ( value === false ) {
	
				// Remove boolean attributes when set to false
				jQuery.removeAttr( elem, name );
			} else {
				elem.setAttribute( name, name );
			}
			return name;
		}
	};
	
	jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
		var getter = attrHandle[ name ] || jQuery.find.attr;
	
		attrHandle[ name ] = function( elem, name, isXML ) {
			var ret, handle,
				lowercaseName = name.toLowerCase();
	
			if ( !isXML ) {
	
				// Avoid an infinite loop by temporarily removing this function from the getter
				handle = attrHandle[ lowercaseName ];
				attrHandle[ lowercaseName ] = ret;
				ret = getter( elem, name, isXML ) != null ?
					lowercaseName :
					null;
				attrHandle[ lowercaseName ] = handle;
			}
			return ret;
		};
	} );
	
	
	
	
	var rfocusable = /^(?:input|select|textarea|button)$/i,
		rclickable = /^(?:a|area)$/i;
	
	jQuery.fn.extend( {
		prop: function( name, value ) {
			return access( this, jQuery.prop, name, value, arguments.length > 1 );
		},
	
		removeProp: function( name ) {
			return this.each( function() {
				delete this[ jQuery.propFix[ name ] || name ];
			} );
		}
	} );
	
	jQuery.extend( {
		prop: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;
	
			// Don't get/set properties on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}
	
			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
	
				// Fix name and attach hooks
				name = jQuery.propFix[ name ] || name;
				hooks = jQuery.propHooks[ name ];
			}
	
			if ( value !== undefined ) {
				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}
	
				return ( elem[ name ] = value );
			}
	
			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}
	
			return elem[ name ];
		},
	
		propHooks: {
			tabIndex: {
				get: function( elem ) {
	
					// Support: IE <=9 - 11 only
					// elem.tabIndex doesn't always return the
					// correct value when it hasn't been explicitly set
					// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
					// Use proper attribute retrieval(#12072)
					var tabindex = jQuery.find.attr( elem, "tabindex" );
	
					if ( tabindex ) {
						return parseInt( tabindex, 10 );
					}
	
					if (
						rfocusable.test( elem.nodeName ) ||
						rclickable.test( elem.nodeName ) &&
						elem.href
					) {
						return 0;
					}
	
					return -1;
				}
			}
		},
	
		propFix: {
			"for": "htmlFor",
			"class": "className"
		}
	} );
	
	// Support: IE <=11 only
	// Accessing the selectedIndex property
	// forces the browser to respect setting selected
	// on the option
	// The getter ensures a default option is selected
	// when in an optgroup
	// eslint rule "no-unused-expressions" is disabled for this code
	// since it considers such accessions noop
	if ( !support.optSelected ) {
		jQuery.propHooks.selected = {
			get: function( elem ) {
	
				/* eslint no-unused-expressions: "off" */
	
				var parent = elem.parentNode;
				if ( parent && parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
				return null;
			},
			set: function( elem ) {
	
				/* eslint no-unused-expressions: "off" */
	
				var parent = elem.parentNode;
				if ( parent ) {
					parent.selectedIndex;
	
					if ( parent.parentNode ) {
						parent.parentNode.selectedIndex;
					}
				}
			}
		};
	}
	
	jQuery.each( [
		"tabIndex",
		"readOnly",
		"maxLength",
		"cellSpacing",
		"cellPadding",
		"rowSpan",
		"colSpan",
		"useMap",
		"frameBorder",
		"contentEditable"
	], function() {
		jQuery.propFix[ this.toLowerCase() ] = this;
	} );
	
	
	
	
		// Strip and collapse whitespace according to HTML spec
		// https://html.spec.whatwg.org/multipage/infrastructure.html#strip-and-collapse-whitespace
		function stripAndCollapse( value ) {
			var tokens = value.match( rnothtmlwhite ) || [];
			return tokens.join( " " );
		}
	
	
	function getClass( elem ) {
		return elem.getAttribute && elem.getAttribute( "class" ) || "";
	}
	
	jQuery.fn.extend( {
		addClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;
	
			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
				} );
			}
	
			if ( typeof value === "string" && value ) {
				classes = value.match( rnothtmlwhite ) || [];
	
				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );
					cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );
	
					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {
							if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
								cur += clazz + " ";
							}
						}
	
						// Only assign if different to avoid unneeded rendering.
						finalValue = stripAndCollapse( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}
	
			return this;
		},
	
		removeClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;
	
			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
				} );
			}
	
			if ( !arguments.length ) {
				return this.attr( "class", "" );
			}
	
			if ( typeof value === "string" && value ) {
				classes = value.match( rnothtmlwhite ) || [];
	
				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );
	
					// This expression is here for better compressibility (see addClass)
					cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );
	
					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {
	
							// Remove *all* instances
							while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
								cur = cur.replace( " " + clazz + " ", " " );
							}
						}
	
						// Only assign if different to avoid unneeded rendering.
						finalValue = stripAndCollapse( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}
	
			return this;
		},
	
		toggleClass: function( value, stateVal ) {
			var type = typeof value;
	
			if ( typeof stateVal === "boolean" && type === "string" ) {
				return stateVal ? this.addClass( value ) : this.removeClass( value );
			}
	
			if ( jQuery.isFunction( value ) ) {
				return this.each( function( i ) {
					jQuery( this ).toggleClass(
						value.call( this, i, getClass( this ), stateVal ),
						stateVal
					);
				} );
			}
	
			return this.each( function() {
				var className, i, self, classNames;
	
				if ( type === "string" ) {
	
					// Toggle individual class names
					i = 0;
					self = jQuery( this );
					classNames = value.match( rnothtmlwhite ) || [];
	
					while ( ( className = classNames[ i++ ] ) ) {
	
						// Check each className given, space separated list
						if ( self.hasClass( className ) ) {
							self.removeClass( className );
						} else {
							self.addClass( className );
						}
					}
	
				// Toggle whole class name
				} else if ( value === undefined || type === "boolean" ) {
					className = getClass( this );
					if ( className ) {
	
						// Store className if set
						dataPriv.set( this, "__className__", className );
					}
	
					// If the element has a class name or if we're passed `false`,
					// then remove the whole classname (if there was one, the above saved it).
					// Otherwise bring back whatever was previously saved (if anything),
					// falling back to the empty string if nothing was stored.
					if ( this.setAttribute ) {
						this.setAttribute( "class",
							className || value === false ?
							"" :
							dataPriv.get( this, "__className__" ) || ""
						);
					}
				}
			} );
		},
	
		hasClass: function( selector ) {
			var className, elem,
				i = 0;
	
			className = " " + selector + " ";
			while ( ( elem = this[ i++ ] ) ) {
				if ( elem.nodeType === 1 &&
					( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
						return true;
				}
			}
	
			return false;
		}
	} );
	
	
	
	
	var rreturn = /\r/g;
	
	jQuery.fn.extend( {
		val: function( value ) {
			var hooks, ret, isFunction,
				elem = this[ 0 ];
	
			if ( !arguments.length ) {
				if ( elem ) {
					hooks = jQuery.valHooks[ elem.type ] ||
						jQuery.valHooks[ elem.nodeName.toLowerCase() ];
	
					if ( hooks &&
						"get" in hooks &&
						( ret = hooks.get( elem, "value" ) ) !== undefined
					) {
						return ret;
					}
	
					ret = elem.value;
	
					// Handle most common string cases
					if ( typeof ret === "string" ) {
						return ret.replace( rreturn, "" );
					}
	
					// Handle cases where value is null/undef or number
					return ret == null ? "" : ret;
				}
	
				return;
			}
	
			isFunction = jQuery.isFunction( value );
	
			return this.each( function( i ) {
				var val;
	
				if ( this.nodeType !== 1 ) {
					return;
				}
	
				if ( isFunction ) {
					val = value.call( this, i, jQuery( this ).val() );
				} else {
					val = value;
				}
	
				// Treat null/undefined as ""; convert numbers to string
				if ( val == null ) {
					val = "";
	
				} else if ( typeof val === "number" ) {
					val += "";
	
				} else if ( jQuery.isArray( val ) ) {
					val = jQuery.map( val, function( value ) {
						return value == null ? "" : value + "";
					} );
				}
	
				hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];
	
				// If set returns undefined, fall back to normal setting
				if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
					this.value = val;
				}
			} );
		}
	} );
	
	jQuery.extend( {
		valHooks: {
			option: {
				get: function( elem ) {
	
					var val = jQuery.find.attr( elem, "value" );
					return val != null ?
						val :
	
						// Support: IE <=10 - 11 only
						// option.text throws exceptions (#14686, #14858)
						// Strip and collapse whitespace
						// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
						stripAndCollapse( jQuery.text( elem ) );
				}
			},
			select: {
				get: function( elem ) {
					var value, option, i,
						options = elem.options,
						index = elem.selectedIndex,
						one = elem.type === "select-one",
						values = one ? null : [],
						max = one ? index + 1 : options.length;
	
					if ( index < 0 ) {
						i = max;
	
					} else {
						i = one ? index : 0;
					}
	
					// Loop through all the selected options
					for ( ; i < max; i++ ) {
						option = options[ i ];
	
						// Support: IE <=9 only
						// IE8-9 doesn't update selected after form reset (#2551)
						if ( ( option.selected || i === index ) &&
	
								// Don't return options that are disabled or in a disabled optgroup
								!option.disabled &&
								( !option.parentNode.disabled ||
									!jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {
	
							// Get the specific value for the option
							value = jQuery( option ).val();
	
							// We don't need an array for one selects
							if ( one ) {
								return value;
							}
	
							// Multi-Selects return an array
							values.push( value );
						}
					}
	
					return values;
				},
	
				set: function( elem, value ) {
					var optionSet, option,
						options = elem.options,
						values = jQuery.makeArray( value ),
						i = options.length;
	
					while ( i-- ) {
						option = options[ i ];
	
						/* eslint-disable no-cond-assign */
	
						if ( option.selected =
							jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
						) {
							optionSet = true;
						}
	
						/* eslint-enable no-cond-assign */
					}
	
					// Force browsers to behave consistently when non-matching value is set
					if ( !optionSet ) {
						elem.selectedIndex = -1;
					}
					return values;
				}
			}
		}
	} );
	
	// Radios and checkboxes getter/setter
	jQuery.each( [ "radio", "checkbox" ], function() {
		jQuery.valHooks[ this ] = {
			set: function( elem, value ) {
				if ( jQuery.isArray( value ) ) {
					return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
				}
			}
		};
		if ( !support.checkOn ) {
			jQuery.valHooks[ this ].get = function( elem ) {
				return elem.getAttribute( "value" ) === null ? "on" : elem.value;
			};
		}
	} );
	
	
	
	
	// Return jQuery for attributes-only inclusion
	
	
	var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;
	
	jQuery.extend( jQuery.event, {
	
		trigger: function( event, data, elem, onlyHandlers ) {
	
			var i, cur, tmp, bubbleType, ontype, handle, special,
				eventPath = [ elem || document ],
				type = hasOwn.call( event, "type" ) ? event.type : event,
				namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];
	
			cur = tmp = elem = elem || document;
	
			// Don't do events on text and comment nodes
			if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
				return;
			}
	
			// focus/blur morphs to focusin/out; ensure we're not firing them right now
			if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
				return;
			}
	
			if ( type.indexOf( "." ) > -1 ) {
	
				// Namespaced trigger; create a regexp to match event type in handle()
				namespaces = type.split( "." );
				type = namespaces.shift();
				namespaces.sort();
			}
			ontype = type.indexOf( ":" ) < 0 && "on" + type;
	
			// Caller can pass in a jQuery.Event object, Object, or just an event type string
			event = event[ jQuery.expando ] ?
				event :
				new jQuery.Event( type, typeof event === "object" && event );
	
			// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
			event.isTrigger = onlyHandlers ? 2 : 3;
			event.namespace = namespaces.join( "." );
			event.rnamespace = event.namespace ?
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
				null;
	
			// Clean up the event in case it is being reused
			event.result = undefined;
			if ( !event.target ) {
				event.target = elem;
			}
	
			// Clone any incoming data and prepend the event, creating the handler arg list
			data = data == null ?
				[ event ] :
				jQuery.makeArray( data, [ event ] );
	
			// Allow special events to draw outside the lines
			special = jQuery.event.special[ type ] || {};
			if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
				return;
			}
	
			// Determine event propagation path in advance, per W3C events spec (#9951)
			// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
			if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {
	
				bubbleType = special.delegateType || type;
				if ( !rfocusMorph.test( bubbleType + type ) ) {
					cur = cur.parentNode;
				}
				for ( ; cur; cur = cur.parentNode ) {
					eventPath.push( cur );
					tmp = cur;
				}
	
				// Only add window if we got to document (e.g., not plain obj or detached DOM)
				if ( tmp === ( elem.ownerDocument || document ) ) {
					eventPath.push( tmp.defaultView || tmp.parentWindow || window );
				}
			}
	
			// Fire handlers on the event path
			i = 0;
			while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
	
				event.type = i > 1 ?
					bubbleType :
					special.bindType || type;
	
				// jQuery handler
				handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
					dataPriv.get( cur, "handle" );
				if ( handle ) {
					handle.apply( cur, data );
				}
	
				// Native handler
				handle = ontype && cur[ ontype ];
				if ( handle && handle.apply && acceptData( cur ) ) {
					event.result = handle.apply( cur, data );
					if ( event.result === false ) {
						event.preventDefault();
					}
				}
			}
			event.type = type;
	
			// If nobody prevented the default action, do it now
			if ( !onlyHandlers && !event.isDefaultPrevented() ) {
	
				if ( ( !special._default ||
					special._default.apply( eventPath.pop(), data ) === false ) &&
					acceptData( elem ) ) {
	
					// Call a native DOM method on the target with the same name as the event.
					// Don't do default actions on window, that's where global variables be (#6170)
					if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {
	
						// Don't re-trigger an onFOO event when we call its FOO() method
						tmp = elem[ ontype ];
	
						if ( tmp ) {
							elem[ ontype ] = null;
						}
	
						// Prevent re-triggering of the same event, since we already bubbled it above
						jQuery.event.triggered = type;
						elem[ type ]();
						jQuery.event.triggered = undefined;
	
						if ( tmp ) {
							elem[ ontype ] = tmp;
						}
					}
				}
			}
	
			return event.result;
		},
	
		// Piggyback on a donor event to simulate a different one
		// Used only for `focus(in | out)` events
		simulate: function( type, elem, event ) {
			var e = jQuery.extend(
				new jQuery.Event(),
				event,
				{
					type: type,
					isSimulated: true
				}
			);
	
			jQuery.event.trigger( e, null, elem );
		}
	
	} );
	
	jQuery.fn.extend( {
	
		trigger: function( type, data ) {
			return this.each( function() {
				jQuery.event.trigger( type, data, this );
			} );
		},
		triggerHandler: function( type, data ) {
			var elem = this[ 0 ];
			if ( elem ) {
				return jQuery.event.trigger( type, data, elem, true );
			}
		}
	} );
	
	
	jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
		"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
		"change select submit keydown keypress keyup contextmenu" ).split( " " ),
		function( i, name ) {
	
		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	} );
	
	jQuery.fn.extend( {
		hover: function( fnOver, fnOut ) {
			return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
		}
	} );
	
	
	
	
	support.focusin = "onfocusin" in window;
	
	
	// Support: Firefox <=44
	// Firefox doesn't have focus(in | out) events
	// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
	//
	// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
	// focus(in | out) events fire after focus & blur events,
	// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
	// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
	if ( !support.focusin ) {
		jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {
	
			// Attach a single capturing handler on the document while someone wants focusin/focusout
			var handler = function( event ) {
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
			};
	
			jQuery.event.special[ fix ] = {
				setup: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix );
	
					if ( !attaches ) {
						doc.addEventListener( orig, handler, true );
					}
					dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
				},
				teardown: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix ) - 1;
	
					if ( !attaches ) {
						doc.removeEventListener( orig, handler, true );
						dataPriv.remove( doc, fix );
	
					} else {
						dataPriv.access( doc, fix, attaches );
					}
				}
			};
		} );
	}
	var location = window.location;
	
	var nonce = jQuery.now();
	
	var rquery = ( /\?/ );
	
	
	
	// Cross-browser xml parsing
	jQuery.parseXML = function( data ) {
		var xml;
		if ( !data || typeof data !== "string" ) {
			return null;
		}
	
		// Support: IE 9 - 11 only
		// IE throws on parseFromString with invalid input.
		try {
			xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
		} catch ( e ) {
			xml = undefined;
		}
	
		if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
			jQuery.error( "Invalid XML: " + data );
		}
		return xml;
	};
	
	
	var
		rbracket = /\[\]$/,
		rCRLF = /\r?\n/g,
		rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
		rsubmittable = /^(?:input|select|textarea|keygen)/i;
	
	function buildParams( prefix, obj, traditional, add ) {
		var name;
	
		if ( jQuery.isArray( obj ) ) {
	
			// Serialize array item.
			jQuery.each( obj, function( i, v ) {
				if ( traditional || rbracket.test( prefix ) ) {
	
					// Treat each array item as a scalar.
					add( prefix, v );
	
				} else {
	
					// Item is non-scalar (array or object), encode its numeric index.
					buildParams(
						prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
						v,
						traditional,
						add
					);
				}
			} );
	
		} else if ( !traditional && jQuery.type( obj ) === "object" ) {
	
			// Serialize object item.
			for ( name in obj ) {
				buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
			}
	
		} else {
	
			// Serialize scalar item.
			add( prefix, obj );
		}
	}
	
	// Serialize an array of form elements or a set of
	// key/values into a query string
	jQuery.param = function( a, traditional ) {
		var prefix,
			s = [],
			add = function( key, valueOrFunction ) {
	
				// If value is a function, invoke it and use its return value
				var value = jQuery.isFunction( valueOrFunction ) ?
					valueOrFunction() :
					valueOrFunction;
	
				s[ s.length ] = encodeURIComponent( key ) + "=" +
					encodeURIComponent( value == null ? "" : value );
			};
	
		// If an array was passed in, assume that it is an array of form elements.
		if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {
	
			// Serialize the form elements
			jQuery.each( a, function() {
				add( this.name, this.value );
			} );
	
		} else {
	
			// If traditional, encode the "old" way (the way 1.3.2 or older
			// did it), otherwise encode params recursively.
			for ( prefix in a ) {
				buildParams( prefix, a[ prefix ], traditional, add );
			}
		}
	
		// Return the resulting serialization
		return s.join( "&" );
	};
	
	jQuery.fn.extend( {
		serialize: function() {
			return jQuery.param( this.serializeArray() );
		},
		serializeArray: function() {
			return this.map( function() {
	
				// Can add propHook for "elements" to filter or add form elements
				var elements = jQuery.prop( this, "elements" );
				return elements ? jQuery.makeArray( elements ) : this;
			} )
			.filter( function() {
				var type = this.type;
	
				// Use .is( ":disabled" ) so that fieldset[disabled] works
				return this.name && !jQuery( this ).is( ":disabled" ) &&
					rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
					( this.checked || !rcheckableType.test( type ) );
			} )
			.map( function( i, elem ) {
				var val = jQuery( this ).val();
	
				if ( val == null ) {
					return null;
				}
	
				if ( jQuery.isArray( val ) ) {
					return jQuery.map( val, function( val ) {
						return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
					} );
				}
	
				return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
			} ).get();
		}
	} );
	
	
	var
		r20 = /%20/g,
		rhash = /#.*$/,
		rantiCache = /([?&])_=[^&]*/,
		rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,
	
		// #7653, #8125, #8152: local protocol detection
		rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		rnoContent = /^(?:GET|HEAD)$/,
		rprotocol = /^\/\//,
	
		/* Prefilters
		 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
		 * 2) These are called:
		 *    - BEFORE asking for a transport
		 *    - AFTER param serialization (s.data is a string if s.processData is true)
		 * 3) key is the dataType
		 * 4) the catchall symbol "*" can be used
		 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
		 */
		prefilters = {},
	
		/* Transports bindings
		 * 1) key is the dataType
		 * 2) the catchall symbol "*" can be used
		 * 3) selection will start with transport dataType and THEN go to "*" if needed
		 */
		transports = {},
	
		// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
		allTypes = "*/".concat( "*" ),
	
		// Anchor tag for parsing the document origin
		originAnchor = document.createElement( "a" );
		originAnchor.href = location.href;
	
	// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports( structure ) {
	
		// dataTypeExpression is optional and defaults to "*"
		return function( dataTypeExpression, func ) {
	
			if ( typeof dataTypeExpression !== "string" ) {
				func = dataTypeExpression;
				dataTypeExpression = "*";
			}
	
			var dataType,
				i = 0,
				dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];
	
			if ( jQuery.isFunction( func ) ) {
	
				// For each dataType in the dataTypeExpression
				while ( ( dataType = dataTypes[ i++ ] ) ) {
	
					// Prepend if requested
					if ( dataType[ 0 ] === "+" ) {
						dataType = dataType.slice( 1 ) || "*";
						( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );
	
					// Otherwise append
					} else {
						( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
					}
				}
			}
		};
	}
	
	// Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {
	
		var inspected = {},
			seekingTransport = ( structure === transports );
	
		function inspect( dataType ) {
			var selected;
			inspected[ dataType ] = true;
			jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
				var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
				if ( typeof dataTypeOrTransport === "string" &&
					!seekingTransport && !inspected[ dataTypeOrTransport ] ) {
	
					options.dataTypes.unshift( dataTypeOrTransport );
					inspect( dataTypeOrTransport );
					return false;
				} else if ( seekingTransport ) {
					return !( selected = dataTypeOrTransport );
				}
			} );
			return selected;
		}
	
		return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
	}
	
	// A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend( target, src ) {
		var key, deep,
			flatOptions = jQuery.ajaxSettings.flatOptions || {};
	
		for ( key in src ) {
			if ( src[ key ] !== undefined ) {
				( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
			}
		}
		if ( deep ) {
			jQuery.extend( true, target, deep );
		}
	
		return target;
	}
	
	/* Handles responses to an ajax request:
	 * - finds the right dataType (mediates between content-type and expected dataType)
	 * - returns the corresponding response
	 */
	function ajaxHandleResponses( s, jqXHR, responses ) {
	
		var ct, type, finalDataType, firstDataType,
			contents = s.contents,
			dataTypes = s.dataTypes;
	
		// Remove auto dataType and get content-type in the process
		while ( dataTypes[ 0 ] === "*" ) {
			dataTypes.shift();
			if ( ct === undefined ) {
				ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
			}
		}
	
		// Check if we're dealing with a known content-type
		if ( ct ) {
			for ( type in contents ) {
				if ( contents[ type ] && contents[ type ].test( ct ) ) {
					dataTypes.unshift( type );
					break;
				}
			}
		}
	
		// Check to see if we have a response for the expected dataType
		if ( dataTypes[ 0 ] in responses ) {
			finalDataType = dataTypes[ 0 ];
		} else {
	
			// Try convertible dataTypes
			for ( type in responses ) {
				if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
					finalDataType = type;
					break;
				}
				if ( !firstDataType ) {
					firstDataType = type;
				}
			}
	
			// Or just use first one
			finalDataType = finalDataType || firstDataType;
		}
	
		// If we found a dataType
		// We add the dataType to the list if needed
		// and return the corresponding response
		if ( finalDataType ) {
			if ( finalDataType !== dataTypes[ 0 ] ) {
				dataTypes.unshift( finalDataType );
			}
			return responses[ finalDataType ];
		}
	}
	
	/* Chain conversions given the request and the original response
	 * Also sets the responseXXX fields on the jqXHR instance
	 */
	function ajaxConvert( s, response, jqXHR, isSuccess ) {
		var conv2, current, conv, tmp, prev,
			converters = {},
	
			// Work with a copy of dataTypes in case we need to modify it for conversion
			dataTypes = s.dataTypes.slice();
	
		// Create converters map with lowercased keys
		if ( dataTypes[ 1 ] ) {
			for ( conv in s.converters ) {
				converters[ conv.toLowerCase() ] = s.converters[ conv ];
			}
		}
	
		current = dataTypes.shift();
	
		// Convert to each sequential dataType
		while ( current ) {
	
			if ( s.responseFields[ current ] ) {
				jqXHR[ s.responseFields[ current ] ] = response;
			}
	
			// Apply the dataFilter if provided
			if ( !prev && isSuccess && s.dataFilter ) {
				response = s.dataFilter( response, s.dataType );
			}
	
			prev = current;
			current = dataTypes.shift();
	
			if ( current ) {
	
				// There's only work to do if current dataType is non-auto
				if ( current === "*" ) {
	
					current = prev;
	
				// Convert response if prev dataType is non-auto and differs from current
				} else if ( prev !== "*" && prev !== current ) {
	
					// Seek a direct converter
					conv = converters[ prev + " " + current ] || converters[ "* " + current ];
	
					// If none found, seek a pair
					if ( !conv ) {
						for ( conv2 in converters ) {
	
							// If conv2 outputs current
							tmp = conv2.split( " " );
							if ( tmp[ 1 ] === current ) {
	
								// If prev can be converted to accepted input
								conv = converters[ prev + " " + tmp[ 0 ] ] ||
									converters[ "* " + tmp[ 0 ] ];
								if ( conv ) {
	
									// Condense equivalence converters
									if ( conv === true ) {
										conv = converters[ conv2 ];
	
									// Otherwise, insert the intermediate dataType
									} else if ( converters[ conv2 ] !== true ) {
										current = tmp[ 0 ];
										dataTypes.unshift( tmp[ 1 ] );
									}
									break;
								}
							}
						}
					}
	
					// Apply converter (if not an equivalence)
					if ( conv !== true ) {
	
						// Unless errors are allowed to bubble, catch and return them
						if ( conv && s.throws ) {
							response = conv( response );
						} else {
							try {
								response = conv( response );
							} catch ( e ) {
								return {
									state: "parsererror",
									error: conv ? e : "No conversion from " + prev + " to " + current
								};
							}
						}
					}
				}
			}
		}
	
		return { state: "success", data: response };
	}
	
	jQuery.extend( {
	
		// Counter for holding the number of active queries
		active: 0,
	
		// Last-Modified header cache for next request
		lastModified: {},
		etag: {},
	
		ajaxSettings: {
			url: location.href,
			type: "GET",
			isLocal: rlocalProtocol.test( location.protocol ),
			global: true,
			processData: true,
			async: true,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
	
			/*
			timeout: 0,
			data: null,
			dataType: null,
			username: null,
			password: null,
			cache: null,
			throws: false,
			traditional: false,
			headers: {},
			*/
	
			accepts: {
				"*": allTypes,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
	
			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},
	
			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},
	
			// Data converters
			// Keys separate source (or catchall "*") and destination types with a single space
			converters: {
	
				// Convert anything to text
				"* text": String,
	
				// Text to html (true = no transformation)
				"text html": true,
	
				// Evaluate text as a json expression
				"text json": JSON.parse,
	
				// Parse text as xml
				"text xml": jQuery.parseXML
			},
	
			// For options that shouldn't be deep extended:
			// you can add your own custom options here if
			// and when you create one that shouldn't be
			// deep extended (see ajaxExtend)
			flatOptions: {
				url: true,
				context: true
			}
		},
	
		// Creates a full fledged settings object into target
		// with both ajaxSettings and settings fields.
		// If target is omitted, writes into ajaxSettings.
		ajaxSetup: function( target, settings ) {
			return settings ?
	
				// Building a settings object
				ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :
	
				// Extending ajaxSettings
				ajaxExtend( jQuery.ajaxSettings, target );
		},
	
		ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
		ajaxTransport: addToPrefiltersOrTransports( transports ),
	
		// Main method
		ajax: function( url, options ) {
	
			// If url is an object, simulate pre-1.5 signature
			if ( typeof url === "object" ) {
				options = url;
				url = undefined;
			}
	
			// Force options to be an object
			options = options || {};
	
			var transport,
	
				// URL without anti-cache param
				cacheURL,
	
				// Response headers
				responseHeadersString,
				responseHeaders,
	
				// timeout handle
				timeoutTimer,
	
				// Url cleanup var
				urlAnchor,
	
				// Request state (becomes false upon send and true upon completion)
				completed,
	
				// To know if global events are to be dispatched
				fireGlobals,
	
				// Loop variable
				i,
	
				// uncached part of the url
				uncached,
	
				// Create the final options object
				s = jQuery.ajaxSetup( {}, options ),
	
				// Callbacks context
				callbackContext = s.context || s,
	
				// Context for global events is callbackContext if it is a DOM node or jQuery collection
				globalEventContext = s.context &&
					( callbackContext.nodeType || callbackContext.jquery ) ?
						jQuery( callbackContext ) :
						jQuery.event,
	
				// Deferreds
				deferred = jQuery.Deferred(),
				completeDeferred = jQuery.Callbacks( "once memory" ),
	
				// Status-dependent callbacks
				statusCode = s.statusCode || {},
	
				// Headers (they are sent all at once)
				requestHeaders = {},
				requestHeadersNames = {},
	
				// Default abort message
				strAbort = "canceled",
	
				// Fake xhr
				jqXHR = {
					readyState: 0,
	
					// Builds headers hashtable if needed
					getResponseHeader: function( key ) {
						var match;
						if ( completed ) {
							if ( !responseHeaders ) {
								responseHeaders = {};
								while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
									responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
								}
							}
							match = responseHeaders[ key.toLowerCase() ];
						}
						return match == null ? null : match;
					},
	
					// Raw string
					getAllResponseHeaders: function() {
						return completed ? responseHeadersString : null;
					},
	
					// Caches the header
					setRequestHeader: function( name, value ) {
						if ( completed == null ) {
							name = requestHeadersNames[ name.toLowerCase() ] =
								requestHeadersNames[ name.toLowerCase() ] || name;
							requestHeaders[ name ] = value;
						}
						return this;
					},
	
					// Overrides response content-type header
					overrideMimeType: function( type ) {
						if ( completed == null ) {
							s.mimeType = type;
						}
						return this;
					},
	
					// Status-dependent callbacks
					statusCode: function( map ) {
						var code;
						if ( map ) {
							if ( completed ) {
	
								// Execute the appropriate callbacks
								jqXHR.always( map[ jqXHR.status ] );
							} else {
	
								// Lazy-add the new callbacks in a way that preserves old ones
								for ( code in map ) {
									statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
								}
							}
						}
						return this;
					},
	
					// Cancel the request
					abort: function( statusText ) {
						var finalText = statusText || strAbort;
						if ( transport ) {
							transport.abort( finalText );
						}
						done( 0, finalText );
						return this;
					}
				};
	
			// Attach deferreds
			deferred.promise( jqXHR );
	
			// Add protocol if not provided (prefilters might expect it)
			// Handle falsy url in the settings object (#10093: consistency with old signature)
			// We also use the url parameter if available
			s.url = ( ( url || s.url || location.href ) + "" )
				.replace( rprotocol, location.protocol + "//" );
	
			// Alias method option to type as per ticket #12004
			s.type = options.method || options.type || s.method || s.type;
	
			// Extract dataTypes list
			s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];
	
			// A cross-domain request is in order when the origin doesn't match the current origin.
			if ( s.crossDomain == null ) {
				urlAnchor = document.createElement( "a" );
	
				// Support: IE <=8 - 11, Edge 12 - 13
				// IE throws exception on accessing the href property if url is malformed,
				// e.g. http://example.com:80x/
				try {
					urlAnchor.href = s.url;
	
					// Support: IE <=8 - 11 only
					// Anchor's host property isn't correctly set when s.url is relative
					urlAnchor.href = urlAnchor.href;
					s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
						urlAnchor.protocol + "//" + urlAnchor.host;
				} catch ( e ) {
	
					// If there is an error parsing the URL, assume it is crossDomain,
					// it can be rejected by the transport if it is invalid
					s.crossDomain = true;
				}
			}
	
			// Convert data if not already a string
			if ( s.data && s.processData && typeof s.data !== "string" ) {
				s.data = jQuery.param( s.data, s.traditional );
			}
	
			// Apply prefilters
			inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );
	
			// If request was aborted inside a prefilter, stop there
			if ( completed ) {
				return jqXHR;
			}
	
			// We can fire global events as of now if asked to
			// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
			fireGlobals = jQuery.event && s.global;
	
			// Watch for a new set of requests
			if ( fireGlobals && jQuery.active++ === 0 ) {
				jQuery.event.trigger( "ajaxStart" );
			}
	
			// Uppercase the type
			s.type = s.type.toUpperCase();
	
			// Determine if request has content
			s.hasContent = !rnoContent.test( s.type );
	
			// Save the URL in case we're toying with the If-Modified-Since
			// and/or If-None-Match header later on
			// Remove hash to simplify url manipulation
			cacheURL = s.url.replace( rhash, "" );
	
			// More options handling for requests with no content
			if ( !s.hasContent ) {
	
				// Remember the hash so we can put it back
				uncached = s.url.slice( cacheURL.length );
	
				// If data is available, append data to url
				if ( s.data ) {
					cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;
	
					// #9682: remove data so that it's not used in an eventual retry
					delete s.data;
				}
	
				// Add or update anti-cache param if needed
				if ( s.cache === false ) {
					cacheURL = cacheURL.replace( rantiCache, "$1" );
					uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
				}
	
				// Put hash and anti-cache on the URL that will be requested (gh-1732)
				s.url = cacheURL + uncached;
	
			// Change '%20' to '+' if this is encoded form body content (gh-2658)
			} else if ( s.data && s.processData &&
				( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
				s.data = s.data.replace( r20, "+" );
			}
	
			// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
			if ( s.ifModified ) {
				if ( jQuery.lastModified[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
				}
				if ( jQuery.etag[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
				}
			}
	
			// Set the correct header, if data is being sent
			if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
				jqXHR.setRequestHeader( "Content-Type", s.contentType );
			}
	
			// Set the Accepts header for the server, depending on the dataType
			jqXHR.setRequestHeader(
				"Accept",
				s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
					s.accepts[ s.dataTypes[ 0 ] ] +
						( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
					s.accepts[ "*" ]
			);
	
			// Check for headers option
			for ( i in s.headers ) {
				jqXHR.setRequestHeader( i, s.headers[ i ] );
			}
	
			// Allow custom headers/mimetypes and early abort
			if ( s.beforeSend &&
				( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {
	
				// Abort if not done already and return
				return jqXHR.abort();
			}
	
			// Aborting is no longer a cancellation
			strAbort = "abort";
	
			// Install callbacks on deferreds
			completeDeferred.add( s.complete );
			jqXHR.done( s.success );
			jqXHR.fail( s.error );
	
			// Get transport
			transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );
	
			// If no transport, we auto-abort
			if ( !transport ) {
				done( -1, "No Transport" );
			} else {
				jqXHR.readyState = 1;
	
				// Send global event
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
				}
	
				// If request was aborted inside ajaxSend, stop there
				if ( completed ) {
					return jqXHR;
				}
	
				// Timeout
				if ( s.async && s.timeout > 0 ) {
					timeoutTimer = window.setTimeout( function() {
						jqXHR.abort( "timeout" );
					}, s.timeout );
				}
	
				try {
					completed = false;
					transport.send( requestHeaders, done );
				} catch ( e ) {
	
					// Rethrow post-completion exceptions
					if ( completed ) {
						throw e;
					}
	
					// Propagate others as results
					done( -1, e );
				}
			}
	
			// Callback for when everything is done
			function done( status, nativeStatusText, responses, headers ) {
				var isSuccess, success, error, response, modified,
					statusText = nativeStatusText;
	
				// Ignore repeat invocations
				if ( completed ) {
					return;
				}
	
				completed = true;
	
				// Clear timeout if it exists
				if ( timeoutTimer ) {
					window.clearTimeout( timeoutTimer );
				}
	
				// Dereference transport for early garbage collection
				// (no matter how long the jqXHR object will be used)
				transport = undefined;
	
				// Cache response headers
				responseHeadersString = headers || "";
	
				// Set readyState
				jqXHR.readyState = status > 0 ? 4 : 0;
	
				// Determine if successful
				isSuccess = status >= 200 && status < 300 || status === 304;
	
				// Get response data
				if ( responses ) {
					response = ajaxHandleResponses( s, jqXHR, responses );
				}
	
				// Convert no matter what (that way responseXXX fields are always set)
				response = ajaxConvert( s, response, jqXHR, isSuccess );
	
				// If successful, handle type chaining
				if ( isSuccess ) {
	
					// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
					if ( s.ifModified ) {
						modified = jqXHR.getResponseHeader( "Last-Modified" );
						if ( modified ) {
							jQuery.lastModified[ cacheURL ] = modified;
						}
						modified = jqXHR.getResponseHeader( "etag" );
						if ( modified ) {
							jQuery.etag[ cacheURL ] = modified;
						}
					}
	
					// if no content
					if ( status === 204 || s.type === "HEAD" ) {
						statusText = "nocontent";
	
					// if not modified
					} else if ( status === 304 ) {
						statusText = "notmodified";
	
					// If we have data, let's convert it
					} else {
						statusText = response.state;
						success = response.data;
						error = response.error;
						isSuccess = !error;
					}
				} else {
	
					// Extract error from statusText and normalize for non-aborts
					error = statusText;
					if ( status || !statusText ) {
						statusText = "error";
						if ( status < 0 ) {
							status = 0;
						}
					}
				}
	
				// Set data for the fake xhr object
				jqXHR.status = status;
				jqXHR.statusText = ( nativeStatusText || statusText ) + "";
	
				// Success/Error
				if ( isSuccess ) {
					deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
				} else {
					deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
				}
	
				// Status-dependent callbacks
				jqXHR.statusCode( statusCode );
				statusCode = undefined;
	
				if ( fireGlobals ) {
					globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
						[ jqXHR, s, isSuccess ? success : error ] );
				}
	
				// Complete
				completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );
	
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );
	
					// Handle the global AJAX counter
					if ( !( --jQuery.active ) ) {
						jQuery.event.trigger( "ajaxStop" );
					}
				}
			}
	
			return jqXHR;
		},
	
		getJSON: function( url, data, callback ) {
			return jQuery.get( url, data, callback, "json" );
		},
	
		getScript: function( url, callback ) {
			return jQuery.get( url, undefined, callback, "script" );
		}
	} );
	
	jQuery.each( [ "get", "post" ], function( i, method ) {
		jQuery[ method ] = function( url, data, callback, type ) {
	
			// Shift arguments if data argument was omitted
			if ( jQuery.isFunction( data ) ) {
				type = type || callback;
				callback = data;
				data = undefined;
			}
	
			// The url can be an options object (which then must have .url)
			return jQuery.ajax( jQuery.extend( {
				url: url,
				type: method,
				dataType: type,
				data: data,
				success: callback
			}, jQuery.isPlainObject( url ) && url ) );
		};
	} );
	
	
	jQuery._evalUrl = function( url ) {
		return jQuery.ajax( {
			url: url,
	
			// Make this explicit, since user can override this through ajaxSetup (#11264)
			type: "GET",
			dataType: "script",
			cache: true,
			async: false,
			global: false,
			"throws": true
		} );
	};
	
	
	jQuery.fn.extend( {
		wrapAll: function( html ) {
			var wrap;
	
			if ( this[ 0 ] ) {
				if ( jQuery.isFunction( html ) ) {
					html = html.call( this[ 0 ] );
				}
	
				// The elements to wrap the target around
				wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );
	
				if ( this[ 0 ].parentNode ) {
					wrap.insertBefore( this[ 0 ] );
				}
	
				wrap.map( function() {
					var elem = this;
	
					while ( elem.firstElementChild ) {
						elem = elem.firstElementChild;
					}
	
					return elem;
				} ).append( this );
			}
	
			return this;
		},
	
		wrapInner: function( html ) {
			if ( jQuery.isFunction( html ) ) {
				return this.each( function( i ) {
					jQuery( this ).wrapInner( html.call( this, i ) );
				} );
			}
	
			return this.each( function() {
				var self = jQuery( this ),
					contents = self.contents();
	
				if ( contents.length ) {
					contents.wrapAll( html );
	
				} else {
					self.append( html );
				}
			} );
		},
	
		wrap: function( html ) {
			var isFunction = jQuery.isFunction( html );
	
			return this.each( function( i ) {
				jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
			} );
		},
	
		unwrap: function( selector ) {
			this.parent( selector ).not( "body" ).each( function() {
				jQuery( this ).replaceWith( this.childNodes );
			} );
			return this;
		}
	} );
	
	
	jQuery.expr.pseudos.hidden = function( elem ) {
		return !jQuery.expr.pseudos.visible( elem );
	};
	jQuery.expr.pseudos.visible = function( elem ) {
		return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
	};
	
	
	
	
	jQuery.ajaxSettings.xhr = function() {
		try {
			return new window.XMLHttpRequest();
		} catch ( e ) {}
	};
	
	var xhrSuccessStatus = {
	
			// File protocol always yields status code 0, assume 200
			0: 200,
	
			// Support: IE <=9 only
			// #1450: sometimes IE returns 1223 when it should be 204
			1223: 204
		},
		xhrSupported = jQuery.ajaxSettings.xhr();
	
	support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
	support.ajax = xhrSupported = !!xhrSupported;
	
	jQuery.ajaxTransport( function( options ) {
		var callback, errorCallback;
	
		// Cross domain only allowed if supported through XMLHttpRequest
		if ( support.cors || xhrSupported && !options.crossDomain ) {
			return {
				send: function( headers, complete ) {
					var i,
						xhr = options.xhr();
	
					xhr.open(
						options.type,
						options.url,
						options.async,
						options.username,
						options.password
					);
	
					// Apply custom fields if provided
					if ( options.xhrFields ) {
						for ( i in options.xhrFields ) {
							xhr[ i ] = options.xhrFields[ i ];
						}
					}
	
					// Override mime type if needed
					if ( options.mimeType && xhr.overrideMimeType ) {
						xhr.overrideMimeType( options.mimeType );
					}
	
					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
						headers[ "X-Requested-With" ] = "XMLHttpRequest";
					}
	
					// Set headers
					for ( i in headers ) {
						xhr.setRequestHeader( i, headers[ i ] );
					}
	
					// Callback
					callback = function( type ) {
						return function() {
							if ( callback ) {
								callback = errorCallback = xhr.onload =
									xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;
	
								if ( type === "abort" ) {
									xhr.abort();
								} else if ( type === "error" ) {
	
									// Support: IE <=9 only
									// On a manual native abort, IE9 throws
									// errors on any property access that is not readyState
									if ( typeof xhr.status !== "number" ) {
										complete( 0, "error" );
									} else {
										complete(
	
											// File: protocol always yields status 0; see #8605, #14207
											xhr.status,
											xhr.statusText
										);
									}
								} else {
									complete(
										xhrSuccessStatus[ xhr.status ] || xhr.status,
										xhr.statusText,
	
										// Support: IE <=9 only
										// IE9 has no XHR2 but throws on binary (trac-11426)
										// For XHR2 non-text, let the caller handle it (gh-2498)
										( xhr.responseType || "text" ) !== "text"  ||
										typeof xhr.responseText !== "string" ?
											{ binary: xhr.response } :
											{ text: xhr.responseText },
										xhr.getAllResponseHeaders()
									);
								}
							}
						};
					};
	
					// Listen to events
					xhr.onload = callback();
					errorCallback = xhr.onerror = callback( "error" );
	
					// Support: IE 9 only
					// Use onreadystatechange to replace onabort
					// to handle uncaught aborts
					if ( xhr.onabort !== undefined ) {
						xhr.onabort = errorCallback;
					} else {
						xhr.onreadystatechange = function() {
	
							// Check readyState before timeout as it changes
							if ( xhr.readyState === 4 ) {
	
								// Allow onerror to be called first,
								// but that will not handle a native abort
								// Also, save errorCallback to a variable
								// as xhr.onerror cannot be accessed
								window.setTimeout( function() {
									if ( callback ) {
										errorCallback();
									}
								} );
							}
						};
					}
	
					// Create the abort callback
					callback = callback( "abort" );
	
					try {
	
						// Do send the request (this may raise an exception)
						xhr.send( options.hasContent && options.data || null );
					} catch ( e ) {
	
						// #14683: Only rethrow if this hasn't been notified as an error yet
						if ( callback ) {
							throw e;
						}
					}
				},
	
				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );
	
	
	
	
	// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
	jQuery.ajaxPrefilter( function( s ) {
		if ( s.crossDomain ) {
			s.contents.script = false;
		}
	} );
	
	// Install script dataType
	jQuery.ajaxSetup( {
		accepts: {
			script: "text/javascript, application/javascript, " +
				"application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function( text ) {
				jQuery.globalEval( text );
				return text;
			}
		}
	} );
	
	// Handle cache's special case and crossDomain
	jQuery.ajaxPrefilter( "script", function( s ) {
		if ( s.cache === undefined ) {
			s.cache = false;
		}
		if ( s.crossDomain ) {
			s.type = "GET";
		}
	} );
	
	// Bind script tag hack transport
	jQuery.ajaxTransport( "script", function( s ) {
	
		// This transport only deals with cross domain requests
		if ( s.crossDomain ) {
			var script, callback;
			return {
				send: function( _, complete ) {
					script = jQuery( "<script>" ).prop( {
						charset: s.scriptCharset,
						src: s.url
					} ).on(
						"load error",
						callback = function( evt ) {
							script.remove();
							callback = null;
							if ( evt ) {
								complete( evt.type === "error" ? 404 : 200, evt.type );
							}
						}
					);
	
					// Use native DOM manipulation to avoid our domManip AJAX trickery
					document.head.appendChild( script[ 0 ] );
				},
				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );
	
	
	
	
	var oldCallbacks = [],
		rjsonp = /(=)\?(?=&|$)|\?\?/;
	
	// Default jsonp settings
	jQuery.ajaxSetup( {
		jsonp: "callback",
		jsonpCallback: function() {
			var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
			this[ callback ] = true;
			return callback;
		}
	} );
	
	// Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {
	
		var callbackName, overwritten, responseContainer,
			jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
				"url" :
				typeof s.data === "string" &&
					( s.contentType || "" )
						.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
					rjsonp.test( s.data ) && "data"
			);
	
		// Handle iff the expected data type is "jsonp" or we have a parameter to set
		if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {
	
			// Get callback name, remembering preexisting value associated with it
			callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
				s.jsonpCallback() :
				s.jsonpCallback;
	
			// Insert callback into url or form data
			if ( jsonProp ) {
				s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
			} else if ( s.jsonp !== false ) {
				s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
			}
	
			// Use data converter to retrieve json after script execution
			s.converters[ "script json" ] = function() {
				if ( !responseContainer ) {
					jQuery.error( callbackName + " was not called" );
				}
				return responseContainer[ 0 ];
			};
	
			// Force json dataType
			s.dataTypes[ 0 ] = "json";
	
			// Install callback
			overwritten = window[ callbackName ];
			window[ callbackName ] = function() {
				responseContainer = arguments;
			};
	
			// Clean-up function (fires after converters)
			jqXHR.always( function() {
	
				// If previous value didn't exist - remove it
				if ( overwritten === undefined ) {
					jQuery( window ).removeProp( callbackName );
	
				// Otherwise restore preexisting value
				} else {
					window[ callbackName ] = overwritten;
				}
	
				// Save back as free
				if ( s[ callbackName ] ) {
	
					// Make sure that re-using the options doesn't screw things around
					s.jsonpCallback = originalSettings.jsonpCallback;
	
					// Save the callback name for future use
					oldCallbacks.push( callbackName );
				}
	
				// Call if it was a function and we have a response
				if ( responseContainer && jQuery.isFunction( overwritten ) ) {
					overwritten( responseContainer[ 0 ] );
				}
	
				responseContainer = overwritten = undefined;
			} );
	
			// Delegate to script
			return "script";
		}
	} );
	
	
	
	
	// Support: Safari 8 only
	// In Safari 8 documents created via document.implementation.createHTMLDocument
	// collapse sibling forms: the second one becomes a child of the first one.
	// Because of that, this security measure has to be disabled in Safari 8.
	// https://bugs.webkit.org/show_bug.cgi?id=137337
	support.createHTMLDocument = ( function() {
		var body = document.implementation.createHTMLDocument( "" ).body;
		body.innerHTML = "<form></form><form></form>";
		return body.childNodes.length === 2;
	} )();
	
	
	// Argument "data" should be string of html
	// context (optional): If specified, the fragment will be created in this context,
	// defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	jQuery.parseHTML = function( data, context, keepScripts ) {
		if ( typeof data !== "string" ) {
			return [];
		}
		if ( typeof context === "boolean" ) {
			keepScripts = context;
			context = false;
		}
	
		var base, parsed, scripts;
	
		if ( !context ) {
	
			// Stop scripts or inline event handlers from being executed immediately
			// by using document.implementation
			if ( support.createHTMLDocument ) {
				context = document.implementation.createHTMLDocument( "" );
	
				// Set the base href for the created document
				// so any parsed elements with URLs
				// are based on the document's URL (gh-2965)
				base = context.createElement( "base" );
				base.href = document.location.href;
				context.head.appendChild( base );
			} else {
				context = document;
			}
		}
	
		parsed = rsingleTag.exec( data );
		scripts = !keepScripts && [];
	
		// Single tag
		if ( parsed ) {
			return [ context.createElement( parsed[ 1 ] ) ];
		}
	
		parsed = buildFragment( [ data ], context, scripts );
	
		if ( scripts && scripts.length ) {
			jQuery( scripts ).remove();
		}
	
		return jQuery.merge( [], parsed.childNodes );
	};
	
	
	/**
	 * Load a url into a page
	 */
	jQuery.fn.load = function( url, params, callback ) {
		var selector, type, response,
			self = this,
			off = url.indexOf( " " );
	
		if ( off > -1 ) {
			selector = stripAndCollapse( url.slice( off ) );
			url = url.slice( 0, off );
		}
	
		// If it's a function
		if ( jQuery.isFunction( params ) ) {
	
			// We assume that it's the callback
			callback = params;
			params = undefined;
	
		// Otherwise, build a param string
		} else if ( params && typeof params === "object" ) {
			type = "POST";
		}
	
		// If we have elements to modify, make the request
		if ( self.length > 0 ) {
			jQuery.ajax( {
				url: url,
	
				// If "type" variable is undefined, then "GET" method will be used.
				// Make value of this field explicit since
				// user can override it through ajaxSetup method
				type: type || "GET",
				dataType: "html",
				data: params
			} ).done( function( responseText ) {
	
				// Save response for use in complete callback
				response = arguments;
	
				self.html( selector ?
	
					// If a selector was specified, locate the right elements in a dummy div
					// Exclude scripts to avoid IE 'Permission Denied' errors
					jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :
	
					// Otherwise use the full result
					responseText );
	
			// If the request succeeds, this function gets "data", "status", "jqXHR"
			// but they are ignored because response was set above.
			// If it fails, this function gets "jqXHR", "status", "error"
			} ).always( callback && function( jqXHR, status ) {
				self.each( function() {
					callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
				} );
			} );
		}
	
		return this;
	};
	
	
	
	
	// Attach a bunch of functions for handling common AJAX events
	jQuery.each( [
		"ajaxStart",
		"ajaxStop",
		"ajaxComplete",
		"ajaxError",
		"ajaxSuccess",
		"ajaxSend"
	], function( i, type ) {
		jQuery.fn[ type ] = function( fn ) {
			return this.on( type, fn );
		};
	} );
	
	
	
	
	jQuery.expr.pseudos.animated = function( elem ) {
		return jQuery.grep( jQuery.timers, function( fn ) {
			return elem === fn.elem;
		} ).length;
	};
	
	
	
	
	/**
	 * Gets a window from an element
	 */
	function getWindow( elem ) {
		return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
	}
	
	jQuery.offset = {
		setOffset: function( elem, options, i ) {
			var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
				position = jQuery.css( elem, "position" ),
				curElem = jQuery( elem ),
				props = {};
	
			// Set position first, in-case top/left are set even on static elem
			if ( position === "static" ) {
				elem.style.position = "relative";
			}
	
			curOffset = curElem.offset();
			curCSSTop = jQuery.css( elem, "top" );
			curCSSLeft = jQuery.css( elem, "left" );
			calculatePosition = ( position === "absolute" || position === "fixed" ) &&
				( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;
	
			// Need to be able to calculate position if either
			// top or left is auto and position is either absolute or fixed
			if ( calculatePosition ) {
				curPosition = curElem.position();
				curTop = curPosition.top;
				curLeft = curPosition.left;
	
			} else {
				curTop = parseFloat( curCSSTop ) || 0;
				curLeft = parseFloat( curCSSLeft ) || 0;
			}
	
			if ( jQuery.isFunction( options ) ) {
	
				// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
				options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
			}
	
			if ( options.top != null ) {
				props.top = ( options.top - curOffset.top ) + curTop;
			}
			if ( options.left != null ) {
				props.left = ( options.left - curOffset.left ) + curLeft;
			}
	
			if ( "using" in options ) {
				options.using.call( elem, props );
	
			} else {
				curElem.css( props );
			}
		}
	};
	
	jQuery.fn.extend( {
		offset: function( options ) {
	
			// Preserve chaining for setter
			if ( arguments.length ) {
				return options === undefined ?
					this :
					this.each( function( i ) {
						jQuery.offset.setOffset( this, options, i );
					} );
			}
	
			var docElem, win, rect, doc,
				elem = this[ 0 ];
	
			if ( !elem ) {
				return;
			}
	
			// Support: IE <=11 only
			// Running getBoundingClientRect on a
			// disconnected node in IE throws an error
			if ( !elem.getClientRects().length ) {
				return { top: 0, left: 0 };
			}
	
			rect = elem.getBoundingClientRect();
	
			// Make sure element is not hidden (display: none)
			if ( rect.width || rect.height ) {
				doc = elem.ownerDocument;
				win = getWindow( doc );
				docElem = doc.documentElement;
	
				return {
					top: rect.top + win.pageYOffset - docElem.clientTop,
					left: rect.left + win.pageXOffset - docElem.clientLeft
				};
			}
	
			// Return zeros for disconnected and hidden elements (gh-2310)
			return rect;
		},
	
		position: function() {
			if ( !this[ 0 ] ) {
				return;
			}
	
			var offsetParent, offset,
				elem = this[ 0 ],
				parentOffset = { top: 0, left: 0 };
	
			// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
			// because it is its only offset parent
			if ( jQuery.css( elem, "position" ) === "fixed" ) {
	
				// Assume getBoundingClientRect is there when computed position is fixed
				offset = elem.getBoundingClientRect();
	
			} else {
	
				// Get *real* offsetParent
				offsetParent = this.offsetParent();
	
				// Get correct offsets
				offset = this.offset();
				if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
					parentOffset = offsetParent.offset();
				}
	
				// Add offsetParent borders
				parentOffset = {
					top: parentOffset.top + jQuery.css( offsetParent[ 0 ], "borderTopWidth", true ),
					left: parentOffset.left + jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true )
				};
			}
	
			// Subtract parent offsets and element margins
			return {
				top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
				left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
			};
		},
	
		// This method will return documentElement in the following cases:
		// 1) For the element inside the iframe without offsetParent, this method will return
		//    documentElement of the parent window
		// 2) For the hidden or detached element
		// 3) For body or html element, i.e. in case of the html node - it will return itself
		//
		// but those exceptions were never presented as a real life use-cases
		// and might be considered as more preferable results.
		//
		// This logic, however, is not guaranteed and can change at any point in the future
		offsetParent: function() {
			return this.map( function() {
				var offsetParent = this.offsetParent;
	
				while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
					offsetParent = offsetParent.offsetParent;
				}
	
				return offsetParent || documentElement;
			} );
		}
	} );
	
	// Create scrollLeft and scrollTop methods
	jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
		var top = "pageYOffset" === prop;
	
		jQuery.fn[ method ] = function( val ) {
			return access( this, function( elem, method, val ) {
				var win = getWindow( elem );
	
				if ( val === undefined ) {
					return win ? win[ prop ] : elem[ method ];
				}
	
				if ( win ) {
					win.scrollTo(
						!top ? val : win.pageXOffset,
						top ? val : win.pageYOffset
					);
	
				} else {
					elem[ method ] = val;
				}
			}, method, val, arguments.length );
		};
	} );
	
	// Support: Safari <=7 - 9.1, Chrome <=37 - 49
	// Add the top/left cssHooks using jQuery.fn.position
	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
	// getComputedStyle returns percent when specified for top/left/bottom/right;
	// rather than make the css module depend on the offset module, just check for it here
	jQuery.each( [ "top", "left" ], function( i, prop ) {
		jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
			function( elem, computed ) {
				if ( computed ) {
					computed = curCSS( elem, prop );
	
					// If curCSS returns percentage, fallback to offset
					return rnumnonpx.test( computed ) ?
						jQuery( elem ).position()[ prop ] + "px" :
						computed;
				}
			}
		);
	} );
	
	
	// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
		jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
			function( defaultExtra, funcName ) {
	
			// Margin is only for outerHeight, outerWidth
			jQuery.fn[ funcName ] = function( margin, value ) {
				var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
					extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );
	
				return access( this, function( elem, type, value ) {
					var doc;
	
					if ( jQuery.isWindow( elem ) ) {
	
						// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
						return funcName.indexOf( "outer" ) === 0 ?
							elem[ "inner" + name ] :
							elem.document.documentElement[ "client" + name ];
					}
	
					// Get document width or height
					if ( elem.nodeType === 9 ) {
						doc = elem.documentElement;
	
						// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
						// whichever is greatest
						return Math.max(
							elem.body[ "scroll" + name ], doc[ "scroll" + name ],
							elem.body[ "offset" + name ], doc[ "offset" + name ],
							doc[ "client" + name ]
						);
					}
	
					return value === undefined ?
	
						// Get width or height on the element, requesting but not forcing parseFloat
						jQuery.css( elem, type, extra ) :
	
						// Set width or height on the element
						jQuery.style( elem, type, value, extra );
				}, type, chainable ? margin : undefined, chainable );
			};
		} );
	} );
	
	
	jQuery.fn.extend( {
	
		bind: function( types, data, fn ) {
			return this.on( types, null, data, fn );
		},
		unbind: function( types, fn ) {
			return this.off( types, null, fn );
		},
	
		delegate: function( selector, types, data, fn ) {
			return this.on( types, selector, data, fn );
		},
		undelegate: function( selector, types, fn ) {
	
			// ( namespace ) or ( selector, types [, fn] )
			return arguments.length === 1 ?
				this.off( selector, "**" ) :
				this.off( types, selector || "**", fn );
		}
	} );
	
	jQuery.parseJSON = JSON.parse;
	
	
	
	
	// Register as a named AMD module, since jQuery can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules. A named AMD is safest and most robust
	// way to register. Lowercase jquery is used because AMD module names are
	// derived from file names, and jQuery is normally delivered in a lowercase
	// file name. Do this after creating the global so that if an AMD module wants
	// to call noConflict to hide this version of jQuery, it will work.
	
	// Note that for maximum portability, libraries that are not jQuery should
	// declare themselves as anonymous modules, and avoid setting a global if an
	// AMD loader is present. jQuery is a special case. For more information, see
	// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon
	
	if ( true ) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return jQuery;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}
	
	
	
	
	var
	
		// Map over jQuery in case of overwrite
		_jQuery = window.jQuery,
	
		// Map over the $ in case of overwrite
		_$ = window.$;
	
	jQuery.noConflict = function( deep ) {
		if ( window.$ === jQuery ) {
			window.$ = _$;
		}
	
		if ( deep && window.jQuery === jQuery ) {
			window.jQuery = _jQuery;
		}
	
		return jQuery;
	};
	
	// Expose jQuery and $ identifiers, even in AMD
	// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
	// and CommonJS for browser emulators (#13566)
	if ( !noGlobal ) {
		window.jQuery = window.$ = jQuery;
	}
	
	
	
	
	
	return jQuery;
	} );


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

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
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(18)))

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

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
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(18)))

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

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
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(18)))

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {/*!
	 * Bootstrap v3.1.1 (http://getbootstrap.com)
	 * Copyright 2011-2014 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 */
	if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one(a.support.transition.end,function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b()})}(jQuery),+function(a){"use strict";var b='[data-dismiss="alert"]',c=function(c){a(c).on("click",b,this.close)};c.prototype.close=function(b){function c(){f.trigger("closed.bs.alert").remove()}var d=a(this),e=d.attr("data-target");e||(e=d.attr("href"),e=e&&e.replace(/.*(?=#[^\s]*$)/,""));var f=a(e);b&&b.preventDefault(),f.length||(f=d.hasClass("alert")?d:d.parent()),f.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one(a.support.transition.end,c).emulateTransitionEnd(150):c())};var d=a.fn.alert;a.fn.alert=function(b){return this.each(function(){var d=a(this),e=d.data("bs.alert");e||d.data("bs.alert",e=new c(this)),"string"==typeof b&&e[b].call(d)})},a.fn.alert.Constructor=c,a.fn.alert.noConflict=function(){return a.fn.alert=d,this},a(document).on("click.bs.alert.data-api",b,c.prototype.close)}(jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d),this.isLoading=!1};b.DEFAULTS={loadingText:"loading..."},b.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",f.resetText||d.data("resetText",d[e]()),d[e](f[b]||this.options[b]),setTimeout(a.proxy(function(){"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},b.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")&&(c.prop("checked")&&this.$element.hasClass("active")?a=!1:b.find(".active").removeClass("active")),a&&c.prop("checked",!this.$element.hasClass("active")).trigger("change")}a&&this.$element.toggleClass("active")};var c=a.fn.button;a.fn.button=function(c){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof c&&c;e||d.data("bs.button",e=new b(this,f)),"toggle"==c?e.toggle():c&&e.setState(c)})},a.fn.button.Constructor=b,a.fn.button.noConflict=function(){return a.fn.button=c,this},a(document).on("click.bs.button.data-api","[data-toggle^=button]",function(b){var c=a(b.target);c.hasClass("btn")||(c=c.closest(".btn")),c.button("toggle"),b.preventDefault()})}(jQuery),+function(a){"use strict";var b=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=this.sliding=this.interval=this.$active=this.$items=null,"hover"==this.options.pause&&this.$element.on("mouseenter",a.proxy(this.pause,this)).on("mouseleave",a.proxy(this.cycle,this))};b.DEFAULTS={interval:5e3,pause:"hover",wrap:!0},b.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},b.prototype.getActiveIndex=function(){return this.$active=this.$element.find(".item.active"),this.$items=this.$active.parent().children(),this.$items.index(this.$active)},b.prototype.to=function(b){var c=this,d=this.getActiveIndex();return b>this.$items.length-1||0>b?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){c.to(b)}):d==b?this.pause().cycle():this.slide(b>d?"next":"prev",a(this.$items[b]))},b.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},b.prototype.next=function(){return this.sliding?void 0:this.slide("next")},b.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},b.prototype.slide=function(b,c){var d=this.$element.find(".item.active"),e=c||d[b](),f=this.interval,g="next"==b?"left":"right",h="next"==b?"first":"last",i=this;if(!e.length){if(!this.options.wrap)return;e=this.$element.find(".item")[h]()}if(e.hasClass("active"))return this.sliding=!1;var j=a.Event("slide.bs.carousel",{relatedTarget:e[0],direction:g});return this.$element.trigger(j),j.isDefaultPrevented()?void 0:(this.sliding=!0,f&&this.pause(),this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),this.$element.one("slid.bs.carousel",function(){var b=a(i.$indicators.children()[i.getActiveIndex()]);b&&b.addClass("active")})),a.support.transition&&this.$element.hasClass("slide")?(e.addClass(b),e[0].offsetWidth,d.addClass(g),e.addClass(g),d.one(a.support.transition.end,function(){e.removeClass([b,g].join(" ")).addClass("active"),d.removeClass(["active",g].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger("slid.bs.carousel")},0)}).emulateTransitionEnd(1e3*d.css("transition-duration").slice(0,-1))):(d.removeClass("active"),e.addClass("active"),this.sliding=!1,this.$element.trigger("slid.bs.carousel")),f&&this.cycle(),this)};var c=a.fn.carousel;a.fn.carousel=function(c){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c),g="string"==typeof c?c:f.slide;e||d.data("bs.carousel",e=new b(this,f)),"number"==typeof c?e.to(c):g?e[g]():f.interval&&e.pause().cycle()})},a.fn.carousel.Constructor=b,a.fn.carousel.noConflict=function(){return a.fn.carousel=c,this},a(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(b){var c,d=a(this),e=a(d.attr("data-target")||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"")),f=a.extend({},e.data(),d.data()),g=d.attr("data-slide-to");g&&(f.interval=!1),e.carousel(f),(g=d.attr("data-slide-to"))&&e.data("bs.carousel").to(g),b.preventDefault()}),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var b=a(this);b.carousel(b.data())})})}(jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d),this.transitioning=null,this.options.parent&&(this.$parent=a(this.options.parent)),this.options.toggle&&this.toggle()};b.DEFAULTS={toggle:!0},b.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},b.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b=a.Event("show.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.$parent&&this.$parent.find("> .panel > .in");if(c&&c.length){var d=c.data("bs.collapse");if(d&&d.transitioning)return;c.collapse("hide"),d||c.data("bs.collapse",null)}var e=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[e](0),this.transitioning=1;var f=function(){this.$element.removeClass("collapsing").addClass("collapse in")[e]("auto"),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return f.call(this);var g=a.camelCase(["scroll",e].join("-"));this.$element.one(a.support.transition.end,a.proxy(f,this)).emulateTransitionEnd(350)[e](this.$element[0][g])}}},b.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),this.transitioning=1;var d=function(){this.transitioning=0,this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")};return a.support.transition?void this.$element[c](0).one(a.support.transition.end,a.proxy(d,this)).emulateTransitionEnd(350):d.call(this)}}},b.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};var c=a.fn.collapse;a.fn.collapse=function(c){return this.each(function(){var d=a(this),e=d.data("bs.collapse"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c);!e&&f.toggle&&"show"==c&&(c=!c),e||d.data("bs.collapse",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.collapse.Constructor=b,a.fn.collapse.noConflict=function(){return a.fn.collapse=c,this},a(document).on("click.bs.collapse.data-api","[data-toggle=collapse]",function(b){var c,d=a(this),e=d.attr("data-target")||b.preventDefault()||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,""),f=a(e),g=f.data("bs.collapse"),h=g?"toggle":d.data(),i=d.attr("data-parent"),j=i&&a(i);g&&g.transitioning||(j&&j.find('[data-toggle=collapse][data-parent="'+i+'"]').not(d).addClass("collapsed"),d[f.hasClass("in")?"addClass":"removeClass"]("collapsed")),f.collapse(h)})}(jQuery),+function(a){"use strict";function b(b){a(d).remove(),a(e).each(function(){var d=c(a(this)),e={relatedTarget:this};d.hasClass("open")&&(d.trigger(b=a.Event("hide.bs.dropdown",e)),b.isDefaultPrevented()||d.removeClass("open").trigger("hidden.bs.dropdown",e))})}function c(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}var d=".dropdown-backdrop",e="[data-toggle=dropdown]",f=function(b){a(b).on("click.bs.dropdown",this.toggle)};f.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=c(e),g=f.hasClass("open");if(b(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",b);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;f.toggleClass("open").trigger("shown.bs.dropdown",h),e.focus()}return!1}},f.prototype.keydown=function(b){if(/(38|40|27)/.test(b.keyCode)){var d=a(this);if(b.preventDefault(),b.stopPropagation(),!d.is(".disabled, :disabled")){var f=c(d),g=f.hasClass("open");if(!g||g&&27==b.keyCode)return 27==b.which&&f.find(e).focus(),d.click();var h=" li:not(.divider):visible a",i=f.find("[role=menu]"+h+", [role=listbox]"+h);if(i.length){var j=i.index(i.filter(":focus"));38==b.keyCode&&j>0&&j--,40==b.keyCode&&j<i.length-1&&j++,~j||(j=0),i.eq(j).focus()}}}};var g=a.fn.dropdown;a.fn.dropdown=function(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new f(this)),"string"==typeof b&&d[b].call(c)})},a.fn.dropdown.Constructor=f,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=g,this},a(document).on("click.bs.dropdown.data-api",b).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",e,f.prototype.toggle).on("keydown.bs.dropdown.data-api",e+", [role=menu], [role=listbox]",f.prototype.keydown)}(jQuery),+function(a){"use strict";var b=function(b,c){this.options=c,this.$element=a(b),this.$backdrop=this.isShown=null,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};b.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},b.prototype.toggle=function(a){return this[this.isShown?"hide":"show"](a)},b.prototype.show=function(b){var c=this,d=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(d),this.isShown||d.isDefaultPrevented()||(this.isShown=!0,this.escape(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.backdrop(function(){var d=a.support.transition&&c.$element.hasClass("fade");c.$element.parent().length||c.$element.appendTo(document.body),c.$element.show().scrollTop(0),d&&c.$element[0].offsetWidth,c.$element.addClass("in").attr("aria-hidden",!1),c.enforceFocus();var e=a.Event("shown.bs.modal",{relatedTarget:b});d?c.$element.find(".modal-dialog").one(a.support.transition.end,function(){c.$element.focus().trigger(e)}).emulateTransitionEnd(300):c.$element.focus().trigger(e)}))},b.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one(a.support.transition.end,a.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal())},b.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.focus()},this))},b.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keyup.dismiss.bs.modal")},b.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.removeBackdrop(),a.$element.trigger("hidden.bs.modal")})},b.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},b.prototype.backdrop=function(b){var c=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var d=a.support.transition&&c;if(this.$backdrop=a('<div class="modal-backdrop '+c+'" />').appendTo(document.body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),d&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;d?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()):b&&b()};var c=a.fn.modal;a.fn.modal=function(c,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},b.DEFAULTS,e.data(),"object"==typeof c&&c);f||e.data("bs.modal",f=new b(this,g)),"string"==typeof c?f[c](d):g.show&&f.show(d)})},a.fn.modal.Constructor=b,a.fn.modal.noConflict=function(){return a.fn.modal=c,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(b){var c=a(this),d=c.attr("href"),e=a(c.attr("data-target")||d&&d.replace(/.*(?=#[^\s]+$)/,"")),f=e.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(d)&&d},e.data(),c.data());c.is("a")&&b.preventDefault(),e.modal(f,this).one("hide",function(){c.is(":visible")&&c.focus()})}),a(document).on("show.bs.modal",".modal",function(){a(document.body).addClass("modal-open")}).on("hidden.bs.modal",".modal",function(){a(document.body).removeClass("modal-open")})}(jQuery),+function(a){"use strict";var b=function(a,b){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",a,b)};b.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},b.prototype.init=function(b,c,d){this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d);for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},b.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},b.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show()},b.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},b.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){if(this.$element.trigger(b),b.isDefaultPrevented())return;var c=this,d=this.tip();this.setContent(),this.options.animation&&d.addClass("fade");var e="function"==typeof this.options.placement?this.options.placement.call(this,d[0],this.$element[0]):this.options.placement,f=/\s?auto?\s?/i,g=f.test(e);g&&(e=e.replace(f,"")||"top"),d.detach().css({top:0,left:0,display:"block"}).addClass(e),this.options.container?d.appendTo(this.options.container):d.insertAfter(this.$element);var h=this.getPosition(),i=d[0].offsetWidth,j=d[0].offsetHeight;if(g){var k=this.$element.parent(),l=e,m=document.documentElement.scrollTop||document.body.scrollTop,n="body"==this.options.container?window.innerWidth:k.outerWidth(),o="body"==this.options.container?window.innerHeight:k.outerHeight(),p="body"==this.options.container?0:k.offset().left;e="bottom"==e&&h.top+h.height+j-m>o?"top":"top"==e&&h.top-m-j<0?"bottom":"right"==e&&h.right+i>n?"left":"left"==e&&h.left-i<p?"right":e,d.removeClass(l).addClass(e)}var q=this.getCalculatedOffset(e,h,i,j);this.applyPlacement(q,e),this.hoverState=null;var r=function(){c.$element.trigger("shown.bs."+c.type)};a.support.transition&&this.$tip.hasClass("fade")?d.one(a.support.transition.end,r).emulateTransitionEnd(150):r()}},b.prototype.applyPlacement=function(b,c){var d,e=this.tip(),f=e[0].offsetWidth,g=e[0].offsetHeight,h=parseInt(e.css("margin-top"),10),i=parseInt(e.css("margin-left"),10);isNaN(h)&&(h=0),isNaN(i)&&(i=0),b.top=b.top+h,b.left=b.left+i,a.offset.setOffset(e[0],a.extend({using:function(a){e.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),e.addClass("in");var j=e[0].offsetWidth,k=e[0].offsetHeight;if("top"==c&&k!=g&&(d=!0,b.top=b.top+g-k),/bottom|top/.test(c)){var l=0;b.left<0&&(l=-2*b.left,b.left=0,e.offset(b),j=e[0].offsetWidth,k=e[0].offsetHeight),this.replaceArrow(l-f+j,j,"left")}else this.replaceArrow(k-g,k,"top");d&&e.offset(b)},b.prototype.replaceArrow=function(a,b,c){this.arrow().css(c,a?50*(1-a/b)+"%":"")},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},b.prototype.hide=function(){function b(){"in"!=c.hoverState&&d.detach(),c.$element.trigger("hidden.bs."+c.type)}var c=this,d=this.tip(),e=a.Event("hide.bs."+this.type);return this.$element.trigger(e),e.isDefaultPrevented()?void 0:(d.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?d.one(a.support.transition.end,b).emulateTransitionEnd(150):b(),this.hoverState=null,this)},b.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},b.prototype.hasContent=function(){return this.getTitle()},b.prototype.getPosition=function(){var b=this.$element[0];return a.extend({},"function"==typeof b.getBoundingClientRect?b.getBoundingClientRect():{width:b.offsetWidth,height:b.offsetHeight},this.$element.offset())},b.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},b.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},b.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},b.prototype.validate=function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},b.prototype.enable=function(){this.enabled=!0},b.prototype.disable=function(){this.enabled=!1},b.prototype.toggleEnabled=function(){this.enabled=!this.enabled},b.prototype.toggle=function(b){var c=b?a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type):this;c.tip().hasClass("in")?c.leave(c):c.enter(c)},b.prototype.destroy=function(){clearTimeout(this.timeout),this.hide().$element.off("."+this.type).removeData("bs."+this.type)};var c=a.fn.tooltip;a.fn.tooltip=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof c&&c;(e||"destroy"!=c)&&(e||d.data("bs.tooltip",e=new b(this,f)),"string"==typeof c&&e[c]())})},a.fn.tooltip.Constructor=b,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=c,this}}(jQuery),+function(a){"use strict";var b=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");b.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),b.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),b.prototype.constructor=b,b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content")[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},b.prototype.hasContent=function(){return this.getTitle()||this.getContent()},b.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},b.prototype.tip=function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip};var c=a.fn.popover;a.fn.popover=function(c){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof c&&c;(e||"destroy"!=c)&&(e||d.data("bs.popover",e=new b(this,f)),"string"==typeof c&&e[c]())})},a.fn.popover.Constructor=b,a.fn.popover.noConflict=function(){return a.fn.popover=c,this}}(jQuery),+function(a){"use strict";function b(c,d){var e,f=a.proxy(this.process,this);this.$element=a(a(c).is("body")?window:c),this.$body=a("body"),this.$scrollElement=this.$element.on("scroll.bs.scroll-spy.data-api",f),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||(e=a(c).attr("href"))&&e.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.offsets=a([]),this.targets=a([]),this.activeTarget=null,this.refresh(),this.process()}b.DEFAULTS={offset:10},b.prototype.refresh=function(){var b=this.$element[0]==window?"offset":"position";this.offsets=a([]),this.targets=a([]);{var c=this;this.$body.find(this.selector).map(function(){var d=a(this),e=d.data("target")||d.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[b]().top+(!a.isWindow(c.$scrollElement.get(0))&&c.$scrollElement.scrollTop()),e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){c.offsets.push(this[0]),c.targets.push(this[1])})}},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,d=c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(b>=d)return g!=(a=f.last()[0])&&this.activate(a);if(g&&b<=e[0])return g!=(a=f[0])&&this.activate(a);for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(!e[a+1]||b<=e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,a(this.selector).parentsUntil(this.options.target,".active").removeClass("active");var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")};var c=a.fn.scrollspy;a.fn.scrollspy=function(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=c,this},a(window).on("load",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);b.scrollspy(b.data())})})}(jQuery),+function(a){"use strict";var b=function(b){this.element=a(b)};b.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a")[0],f=a.Event("show.bs.tab",{relatedTarget:e});if(b.trigger(f),!f.isDefaultPrevented()){var g=a(d);this.activate(b.parent("li"),c),this.activate(g,g.parent(),function(){b.trigger({type:"shown.bs.tab",relatedTarget:e})})}}},b.prototype.activate=function(b,c,d){function e(){f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),b.addClass("active"),g?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active"),d&&d()}var f=c.find("> .active"),g=d&&a.support.transition&&f.hasClass("fade");g?f.one(a.support.transition.end,e).emulateTransitionEnd(150):e(),f.removeClass("in")};var c=a.fn.tab;a.fn.tab=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new b(this)),"string"==typeof c&&e[c]()})},a.fn.tab.Constructor=b,a.fn.tab.noConflict=function(){return a.fn.tab=c,this},a(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(b){b.preventDefault(),a(this).tab("show")})}(jQuery),+function(a){"use strict";var b=function(c,d){this.options=a.extend({},b.DEFAULTS,d),this.$window=a(window).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(c),this.affixed=this.unpin=this.pinnedOffset=null,this.checkPosition()};b.RESET="affix affix-top affix-bottom",b.DEFAULTS={offset:0},b.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(b.RESET).addClass("affix");var a=this.$window.scrollTop(),c=this.$element.offset();return this.pinnedOffset=c.top-a},b.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},b.prototype.checkPosition=function(){if(this.$element.is(":visible")){var c=a(document).height(),d=this.$window.scrollTop(),e=this.$element.offset(),f=this.options.offset,g=f.top,h=f.bottom;"top"==this.affixed&&(e.top+=d),"object"!=typeof f&&(h=g=f),"function"==typeof g&&(g=f.top(this.$element)),"function"==typeof h&&(h=f.bottom(this.$element));var i=null!=this.unpin&&d+this.unpin<=e.top?!1:null!=h&&e.top+this.$element.height()>=c-h?"bottom":null!=g&&g>=d?"top":!1;if(this.affixed!==i){this.unpin&&this.$element.css("top","");var j="affix"+(i?"-"+i:""),k=a.Event(j+".bs.affix");this.$element.trigger(k),k.isDefaultPrevented()||(this.affixed=i,this.unpin="bottom"==i?this.getPinnedOffset():null,this.$element.removeClass(b.RESET).addClass(j).trigger(a.Event(j.replace("affix","affixed"))),"bottom"==i&&this.$element.offset({top:c-h-this.$element.height()}))}}};var c=a.fn.affix;a.fn.affix=function(c){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof c&&c;e||d.data("bs.affix",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.affix.Constructor=b,a.fn.affix.noConflict=function(){return a.fn.affix=c,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var b=a(this),c=b.data();c.offset=c.offset||{},c.offsetBottom&&(c.offset.bottom=c.offsetBottom),c.offsetTop&&(c.offset.top=c.offsetTop),b.affix(c)})})}(jQuery);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(18)))

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

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
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(18)))

/***/ },
/* 24 */
/***/ function(module, exports) {

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

/***/ },
/* 25 */
/***/ function(module, exports) {

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

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

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
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(18)))

/***/ },
/* 27 */
/***/ function(module, exports) {

	!function(a,b){"use strict";function c(){if(!e){e=!0;var a,c,d,f,g=-1!==navigator.appVersion.indexOf("MSIE 10"),h=!!navigator.userAgent.match(/Trident.*rv:11\./),i=b.querySelectorAll("iframe.wp-embedded-content");for(c=0;c<i.length;c++)if(d=i[c],!d.getAttribute("data-secret")){if(f=Math.random().toString(36).substr(2,10),d.src+="#?secret="+f,d.setAttribute("data-secret",f),g||h)a=d.cloneNode(!0),a.removeAttribute("security"),d.parentNode.replaceChild(a,d)}else;}}var d=!1,e=!1;if(b.querySelector)if(a.addEventListener)d=!0;if(a.wp=a.wp||{},!a.wp.receiveEmbedMessage)if(a.wp.receiveEmbedMessage=function(c){var d=c.data;if(d.secret||d.message||d.value)if(!/[^a-zA-Z0-9]/.test(d.secret)){var e,f,g,h,i,j=b.querySelectorAll('iframe[data-secret="'+d.secret+'"]'),k=b.querySelectorAll('blockquote[data-secret="'+d.secret+'"]');for(e=0;e<k.length;e++)k[e].style.display="none";for(e=0;e<j.length;e++)if(f=j[e],c.source===f.contentWindow){if(f.removeAttribute("style"),"height"===d.message){if(g=parseInt(d.value,10),g>1e3)g=1e3;else if(~~g<200)g=200;f.height=g}if("link"===d.message)if(h=b.createElement("a"),i=b.createElement("a"),h.href=f.getAttribute("src"),i.href=d.value,i.host===h.host)if(b.activeElement===f)a.top.location.href=d.value}else;}},d)a.addEventListener("message",a.wp.receiveEmbedMessage,!1),b.addEventListener("DOMContentLoaded",c,!1),a.addEventListener("load",c,!1)}(window,document);

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map