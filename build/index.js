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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./src/blocks/container/index.js":
/*!***************************************!*\
  !*** ./src/blocks/container/index.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);


/**
 * WordPress dependencies
 */



Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__["registerBlockType"])('gather-underwind/container', {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Starter Container', 'gather-underwind'),
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Provide custom container.'),
  keywords: [Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('container'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('wrapper'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('section')],
  supports: {
    align: ['wide', 'full'],
    anchor: true,
    html: false
  },
  category: 'gather-underwind',
  icon: 'editor-kitchensink',
  attributes: {
    content: {
      type: 'string'
    }
  },
  edit: function edit(props) {
    var className = props.className;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: className
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["InnerBlocks"], {
      renderAppender: _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["InnerBlocks"].ButtonBlockAppender
    }));
  },
  save: function save(props) {
    var className = props.className;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: className
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["InnerBlocks"].Content, null));
  }
});

/***/ }),

/***/ "./src/blocks/event/attendance/attendance.js":
/*!***************************************************!*\
  !*** ./src/blocks/event/attendance/attendance.js ***!
  \***************************************************/
/*! exports provided: updateAttendanceList, updateActiveNavigation, Attendance */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/source-map-loader/index.js):\nError: ENOENT: no such file or directory, open '/Users/apple/Local Sites/pickling/app/public/wp-content/themes/gatherpresss/src/blocks/event/attendance/attendance.js'");

/***/ }),

/***/ "./src/blocks/event/attendance/button.js":
/*!***********************************************!*\
  !*** ./src/blocks/event/attendance/button.js ***!
  \***********************************************/
/*! exports provided: AttendanceButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttendanceButton", function() { return AttendanceButton; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _attendance__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./attendance */ "./src/blocks/event/attendance/attendance.js");







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var AttendanceButton = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(AttendanceButton, _Component);

  var _super = _createSuper(AttendanceButton);

  function AttendanceButton(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, AttendanceButton);

    _this = _super.call(this, props);
    _this.state = {
      inputValue: _this.attendanceStatus(GatherPress.current_user_status)
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(AttendanceButton, [{
    key: "attendanceStatus",
    value: function attendanceStatus(status) {
      switch (status) {
        case 'attending':
          return Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Attending', 'gatherpress');

        case 'not_attending':
          return Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Not Attending', 'gatherpress');

        case 'waitlist':
          return Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('On Waitlist', 'gatherpress');
      }

      return Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Attend', 'gatherpress');
    }
  }, {
    key: "changeSelection",
    value: function changeSelection(evt) {
      evt.preventDefault();
      var status = evt.target.getAttribute('data-value');
      this.updateStatus(status);
    }
  }, {
    key: "updateStatus",
    value: function updateStatus(status) {
      var _this2 = this;

      var requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-WP-Nonce': GatherPress.nonce
        },
        body: JSON.stringify({
          status: status,
          post_id: GatherPress.post_id,
          _wpnonce: GatherPress.nonce
        })
      };
      fetch(GatherPress.event_rest_api + 'attendance', requestOptions).then(function (results) {
        return results.json();
      }).then(function (data) {
        if (data.success) {
          _this2.setState({
            inputValue: _this2.attendanceStatus(data.status)
          });

          Object(_attendance__WEBPACK_IMPORTED_MODULE_8__["updateAttendanceList"])(data.attendees);
          Object(_attendance__WEBPACK_IMPORTED_MODULE_8__["updateActiveNavigation"])(data.status);
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var hasEventPast = '1' === GatherPress.has_event_past ? 'disabled' : '';
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        className: "btn-group"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        className: "btn-group",
        role: "group"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        className: "btn-group",
        role: "group"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("button", {
        type: "button",
        className: 'btn btn-primary btn-lg dropdown-toggle ' + hasEventPast,
        "data-toggle": "dropdown",
        "aria-haspopup": "true",
        "aria-expanded": "false"
      }, this.state.inputValue), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        className: "dropdown-menu"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("a", {
        className: "dropdown-item",
        href: "#",
        "data-value": "attending",
        onClick: function onClick(evt) {
          return _this3.changeSelection(evt);
        }
      }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Yes, I would like to attend this event.', 'gatherpress')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("a", {
        className: "dropdown-item",
        href: "#",
        "data-value": "not_attending",
        onClick: function onClick(evt) {
          return _this3.changeSelection(evt);
        }
      }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('No, I cannot attend this event.', 'gatherpress'))))));
    }
  }]);

  return AttendanceButton;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/***/ }),

/***/ "./src/blocks/event/attendance/index.js":
/*!**********************************************!*\
  !*** ./src/blocks/event/attendance/index.js ***!
  \**********************************************/
/*! exports provided: updateAttendanceList, updateActiveNavigation, Attendance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateAttendanceList", function() { return updateAttendanceList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateActiveNavigation", function() { return updateActiveNavigation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Attendance", function() { return Attendance; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__);








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



function updateAttendanceList(attendanceList) {
  this.setState({
    attendanceList: attendanceList
  });
}
function updateActiveNavigation(activeNavigation) {
  document.getElementById('nav-' + activeNavigation + '-tab').click();
}
var Attendance = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(Attendance, _Component);

  var _super = _createSuper(Attendance);

  function Attendance(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Attendance);

    _this = _super.call(this, props);
    updateAttendanceList = updateAttendanceList.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    _this.state = {
      attendanceList: GatherPress.attendees
    };
    _this.pages = [{
      name: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Attending', 'gatherpress'),
      slug: 'attending',
      active: ''
    }, {
      name: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Waitlist', 'gatherpress'),
      slug: 'waitlist',
      active: ''
    }, {
      name: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Not Attending', 'gatherpress'),
      slug: 'not_attending',
      active: ''
    }];
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Attendance, [{
    key: "displayNavigation",
    value: function displayNavigation() {
      var _this2 = this;

      var nav = [],
          status = GatherPress.current_user_status;
      status = '' !== status ? status : 'attending';

      for (var i = 0; i < this.pages.length; i++) {
        var item = this.pages[i];
        item.active = status === item.slug ? 'active' : '';
        nav.push(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("a", {
          ref: function ref(input) {
            return _this2.navItem = input;
          },
          key: item.slug,
          className: 'nav-item nav-link ' + item.active,
          id: 'nav-' + item.slug + '-tab',
          "data-id": item.slug,
          "data-toggle": "tab",
          href: '#nav-' + item.slug,
          role: "tab",
          "aria-controls": 'nav-' + item.slug,
          "aria-selected": '' === item.active ? 'false' : 'true'
        }, item.name));
      }

      return nav;
    }
  }, {
    key: "displayContent",
    value: function displayContent() {
      var content = [],
          status = GatherPress.current_user_status;
      status = '' !== status ? status : 'attending';

      for (var i = 0; i < this.pages.length; i++) {
        var item = this.pages[i];
        item.active = status === item.slug ? 'active' : '';
        content.push(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
          key: item.slug,
          className: 'tab-pane fade show ' + item.active,
          id: 'nav-' + item.slug,
          role: "tabpanel",
          "aria-labelledby": 'nav-' + item.slug + '-tab'
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
          key: item.slug,
          className: "d-flex flex-row flex-wrap"
        }, this.getAttendees(item.slug))));
      }

      return content;
    }
  }, {
    key: "getAttendees",
    value: function getAttendees(slug) {
      if ('undefined' === typeof this.state.attendanceList[slug]) {
        return;
      }

      var attendeeData = this.state.attendanceList[slug].attendees;
      var attendees = [];

      for (var i = 0; i < attendeeData.length; i++) {
        var attendee = attendeeData[i];
        attendees.push(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
          key: attendee.id,
          className: "p-2"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("a", {
          href: attendee.profile
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("img", {
          className: "img-thumbnail",
          alt: attendee.name,
          title: attendee.name,
          src: attendee.photo
        })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("h5", {
          className: "mt-2 mb-0"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("a", {
          href: attendee.profile
        }, attendee.name)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("h6", {
          className: "text-muted"
        }, attendee.role)));
      }

      return attendees;
    }
  }, {
    key: "render",
    value: function render() {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        className: "mt-4"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("nav", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        className: "nav nav-tabs mb-4",
        id: "attendance-nav",
        role: "tablist"
      }, this.displayNavigation())), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        className: "tab-content p-3",
        id: "attendance-content"
      }, this.displayContent()));
    }
  }]);

  return Attendance;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/***/ }),

/***/ "./src/blocks/event/index.js":
/*!***********************************!*\
  !*** ./src/blocks/event/index.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _attendance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attendance */ "./src/blocks/event/attendance/index.js");
/* harmony import */ var _single__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./single */ "./src/blocks/event/single.js");



/***/ }),

/***/ "./src/blocks/event/single.js":
/*!************************************!*\
  !*** ./src/blocks/event/single.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _attendance_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./attendance/button */ "./src/blocks/event/attendance/button.js");
/* harmony import */ var _attendance_attendance__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./attendance/attendance */ "./src/blocks/event/attendance/attendance.js");




var domAttendanceButton = document.querySelector('#attendance_button_container');
var domAttendance = document.querySelector('#attendance_container');
react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_attendance_button__WEBPACK_IMPORTED_MODULE_2__["AttendanceButton"]), domAttendanceButton);
react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_attendance_attendance__WEBPACK_IMPORTED_MODULE_3__["Attendance"]), domAttendance);

/***/ }),

/***/ "./src/blocks/index.js":
/*!*****************************!*\
  !*** ./src/blocks/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./container */ "./src/blocks/container/index.js");
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event */ "./src/blocks/event/index.js");
/**
 * Internal dependencies
 */



/***/ }),

/***/ "./src/filters/code-name-2/index.js":
/*!******************************************!*\
  !*** ./src/filters/code-name-2/index.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);


/**
 * WordPress dependencies
 */







Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__["addFilter"])('blocks.registerBlockType', 'gather-underwind/add-code-attributes', addCodeAttributes);
Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__["addFilter"])('editor.BlockEdit', 'gather-underwind/add-code-inspector-controls', addCodeInspectorControls);
Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__["addFilter"])('blocks.getSaveElement', 'gather-underwind/modify-code-save-settings', modifyCodeSaveSettings);

function addCodeAttributes(settings, name) {
  if ('core/code' !== name) return settings;
  settings.supports = lodash.merge({}, settings.supports, {
    align: ['full', 'wide']
  });
  settings.attributes.align = {
    type: 'string',
    default: 'full'
  };
  settings.attributes.highContrast = {
    type: 'boolean',
    default: false
  };
  return settings;
}

var MyTextControl = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__["withState"])({
  className: 'basic-css'
})(function (_ref) {
  var className = _ref.className,
      setState = _ref.setState;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["TextControl"], {
    label: "Additional CSS Class",
    value: className,
    onChange: function onChange(className) {
      return setState({
        className: className
      });
    }
  });
});

function addCodeInspectorControls(BlockEdit) {
  var withInspectorControls = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__["createHigherOrderComponent"])(function (BlockEdit) {
    return function (props) {
      if ('core/code' !== props.name) {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BlockEdit, props);
      }

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_6___default()({
          'high-contrast': props.attributes.highContrast
        })
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BlockEdit, props)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["PanelBody"], {
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Custom Code Settings', 'gather-underwind'),
        icon: "welcome-widgets-menus",
        initialOpen: true
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MyTextControl, null)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["ToggleControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('High Contrast', 'gather-underwind'),
        checked: props.attributes.highContrast,
        onChange: function onChange(highContrast) {
          return props.setAttributes({
            highContrast: highContrast
          });
        }
      })))));
    };
  });
  return withInspectorControls(BlockEdit);
}

function modifyCodeSaveSettings(el, block, attributes) {
  if ('core/code' === block.name && attributes.highContrast) {
    el.props.className = classnames__WEBPACK_IMPORTED_MODULE_6___default()(el.props.className, {
      'high-contrast': attributes.highContrast
    });
  }

  return el;
}

/***/ }),

/***/ "./src/filters/code-name/index.js":
/*!****************************************!*\
  !*** ./src/filters/code-name/index.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);
/**
 * WordPress dependencies
 */


Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__["addFilter"])("blocks.registerBlockType", "gather-underwind/extending-register-block-type", extendWithRegisterBlockType);

function extendWithRegisterBlockType(settings, name) {
  // Check for block type
  if ('core/code' === name) {
    // Change the block title
    settings.title = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Code Snippet', 'gather-underwind'); // Change the block description

    settings.description = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Use for maximum codiness 💃', 'gather-underwind'); // Change block icon

    settings.icon = 'admin-tools'; // Change supports

    settings.supports = lodash.merge({}, settings.supports, {
      html: true,
      anchor: true
    });
  }

  return settings;
}

/***/ }),

/***/ "./src/filters/datetime/index.js":
/*!***************************************!*\
  !*** ./src/filters/datetime/index.js ***!
  \***************************************/
/*! exports provided: MetaEndDateControl, MetaDateControl, MetaTextControl, MetaSelectControl, MetaRadioControl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetaEndDateControl", function() { return MetaEndDateControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetaDateControl", function() { return MetaDateControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetaTextControl", function() { return MetaTextControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetaSelectControl", function() { return MetaSelectControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetaRadioControl", function() { return MetaRadioControl; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);


var __ = wp.i18n.__; // Import __() from wp.i18n
//const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks

var el = wp.element.createElement;
var _wp$components = wp.components,
    DateTimePicker = _wp$components.DateTimePicker,
    RadioControl = _wp$components.RadioControl,
    SelectControl = _wp$components.SelectControl,
    TextControl = _wp$components.TextControl;
var _wp$data = wp.data,
    withSelect = _wp$data.withSelect,
    withDispatch = _wp$data.withDispatch;
var MetaTextControl = wp.compose.compose(withDispatch(function (dispatch, props) {
  return {
    setMetaValue: function setMetaValue(metaValue) {
      dispatch('core/editor').editPost({
        meta: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, props.metaKey, metaValue)
      });
    }
  };
}), withSelect(function (select, props) {
  return {
    metaValue: select('core/editor').getEditedPostAttribute('meta')[props.metaKey]
  };
}))(function (props) {
  return el(TextControl, {
    label: props.title,
    value: props.metaValue,
    onChange: function onChange(content) {
      props.setMetaValue(content);
    }
  });
});
var MetaRadioControl = wp.compose.compose(withDispatch(function (dispatch, props) {
  return {
    setMetaValue: function setMetaValue(metaValue) {
      dispatch('core/editor').editPost({
        meta: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, props.metaKey, metaValue)
      });
    }
  };
}), withSelect(function (select, props) {
  return {
    metaValue: select('core/editor').getEditedPostAttribute('meta')[props.metaKey]
  };
}))(function (props) {
  return el(RadioControl, {
    label: props.title,
    selected: props.metaValue,
    options: props.options,
    onChange: function onChange(content) {
      props.setMetaValue(content);
    }
  });
});
var MetaSelectControl = wp.compose.compose(withDispatch(function (dispatch, props) {
  return {
    setMetaValue: function setMetaValue(metaValue) {
      dispatch('core/editor').editPost({
        meta: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, props.metaKey, metaValue)
      });
    }
  };
}), withSelect(function (select, props) {
  return {
    metaValue: select('core/editor').getEditedPostAttribute('meta')[props.metaKey]
  };
}))(function (props) {
  return el(SelectControl, {
    label: props.label,
    value: props.metaValue,
    options: props.options,
    onChange: function onChange(content) {
      props.setMetaValue(content);
    }
  });
}); //these are custom components used in RSVPMaker https://rsvpmaker.com
//these show how meta data values can be manipulated within the Select and Dispatch sections

var MetaEndDateControl = wp.compose.compose(withDispatch(function (dispatch, props) {
  return {
    setMetaValue: function setMetaValue(metaValue) {
      console.log('dispatch value');
      console.log(metaValue);
      dispatch('core/editor').editPost({
        meta: {
          '_endfirsttime': metaValue
        }
      });
    }
  };
}), withSelect(function (select, props) {
  var metaValue = select('core/editor').getEditedPostAttribute('meta')['_endfirsttime'];
  if (typeof metaValue === 'string' && metaValue.indexOf(':') > 0) var parts = metaValue.split(':');else {
    var parts = ['12', '00'];
  }
  return {
    parts: parts //metaValue: select( 'core/editor' ).getEditedPostAttribute( 'meta' )[ '_endfirsttime' ],

  };
}))(function (props) {
  //inner function to handle change
  function getTimeValues() {
    var hour = document.querySelector('#endhour option:checked');
    var minutes = document.querySelector('#endminutes option:checked');
    if (typeof hour === 'undefined' || !hour) hour = '12';
    if (typeof minutes === 'undefined' || !minutes) minutes = '00';
    var newend = hour.value + ':' + minutes.value;
    console.log('newend ' + newend);
    return newend;
  }

  function handleChange() {
    props.setMetaValue(getTimeValues());
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", null, "End Time: ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("select", {
    id: "endhour",
    value: props.parts[0],
    onChange: handleChange
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("option", {
    value: "00"
  }, "12 midnight"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("option", {
    value: "01"
  }, "1 am / 01:"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("option", {
    value: "02"
  }, "2 am / 02:"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("option", {
    value: "03"
  }, "3 am / 03:"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("option", {
    value: "04"
  }, "4 am / 04:"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("option", {
    value: "05"
  }, "5 am / 05:"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("option", {
    value: "06"
  }, "6 am / 06:"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("option", {
    value: "07"
  }, "7 am / 07:"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("option", {
    value: "08"
  }, "8 am / 08:"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("option", {
    value: "09"
  }, "9 am / 09:"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("option", {
    value: "10"
  }, "10 am / 10:"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("option", {
    value: "11"
  }, "11 am / 11:"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("option", {
    value: "12"
  }, "12 pm / 12:"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("option", {
    value: "13"
  }, "1 pm / 13:"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("option", {
    value: "14"
  }, "2 pm / 14:"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("option", {
    value: "15"
  }, "3 pm / 15:"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("option", {
    value: "16"
  }, "4 pm / 16:"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("option", {
    value: "17"
  }, "5 pm / 17:"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("option", {
    value: "18"
  }, "6 pm / 18:"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("option", {
    value: "19"
  }, "7 pm / 19:"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("option", {
    value: "20"
  }, "8 pm / 20:"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("option", {
    value: "21"
  }, "9 pm / 21:"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("option", {
    value: "22"
  }, "10 pm / 22:"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("option", {
    value: "23"
  }, "11 pm / 23:")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("select", {
    id: "endminutes",
    value: props.parts[1],
    onChange: handleChange
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("option", {
    value: "00"
  }, "00"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("option", {
    value: "01"
  }, "01"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("option", {
    value: "02"
  }, "02"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("option", {
    value: "03"
  }, "03"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("option", {
    value: "04"
  }, "04"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("option", {
    value: "05"
  }, "05"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("option", {
    value: "06"
  }, "06"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("option", {
    value: "07"
  }, "07"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("option", {
    value: "08"
  }, "08"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("option", {
    value: "09"
  }, "09"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("option", {
    value: "10"
  }, "10"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("option", {
    value: "11"
  }, "11"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("option", {
    value: "12"
  }, "12"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("option", {
    value: "13"
  }, "13"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("option", {
    value: "14"
  }, "14"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("option", {
    value: "15"
  }, "15"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("option", {
    value: "16"
  }, "16"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("option", {
    value: "17"
  }, "17"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("option", {
    value: "18"
  }, "18"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("option", {
    value: "19"
  }, "19"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("option", {
    value: "20"
  }, "20"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("option", {
    value: "21"
  }, "21"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("option", {
    value: "22"
  }, "22"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("option", {
    value: "23"
  }, "23"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("option", {
    value: "24"
  }, "24"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("option", {
    value: "25"
  }, "25"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("option", {
    value: "26"
  }, "26"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("option", {
    value: "27"
  }, "27"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("option", {
    value: "28"
  }, "28"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("option", {
    value: "29"
  }, "29"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("option", {
    value: "30"
  }, "30"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("option", {
    value: "31"
  }, "31"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("option", {
    value: "32"
  }, "32"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("option", {
    value: "33"
  }, "33"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("option", {
    value: "34"
  }, "34"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("option", {
    value: "35"
  }, "35"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("option", {
    value: "36"
  }, "36"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("option", {
    value: "37"
  }, "37"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("option", {
    value: "38"
  }, "38"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("option", {
    value: "39"
  }, "39"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("option", {
    value: "40"
  }, "40"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("option", {
    value: "41"
  }, "41"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("option", {
    value: "42"
  }, "42"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("option", {
    value: "43"
  }, "43"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("option", {
    value: "44"
  }, "44"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("option", {
    value: "45"
  }, "45"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("option", {
    value: "46"
  }, "46"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("option", {
    value: "47"
  }, "47"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("option", {
    value: "48"
  }, "48"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("option", {
    value: "49"
  }, "49"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("option", {
    value: "50"
  }, "50"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("option", {
    value: "51"
  }, "51"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("option", {
    value: "52"
  }, "52"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("option", {
    value: "53"
  }, "53"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("option", {
    value: "54"
  }, "54"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("option", {
    value: "55"
  }, "55"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("option", {
    value: "56"
  }, "56"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("option", {
    value: "57"
  }, "57"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("option", {
    value: "58"
  }, "58"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("option", {
    value: "59"
  }, "59")));
});
var MetaDateControl = wp.compose.compose(withDispatch(function (dispatch, props) {
  return {
    setMetaValue: function setMetaValue(metaValue) {
      metaValue = metaValue.replace('T', ' ');
      fetch('/wp-json/rsvpmaker/v1/clearcache/' + rsvpmaker_ajax.event_id);
      dispatch('core/editor').editPost({
        meta: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, props.metaKey, metaValue)
      });
    }
  };
}), withSelect(function (select, props) {
  return {
    metaValue: select('core/editor').getEditedPostAttribute('meta')[props.metaKey]
  };
}))(function (props) {
  return el(DateTimePicker, {
    label: props.label,
    is12Hour: true,
    currentDate: props.metaValue,
    options: props.options,
    onChange: function onChange(content) {
      props.setMetaValue(content);
    }
  });
});

function recordChange(metaKey, metaValue) {
  console.log(metaKey + ': ', metaValue);
}



/***/ }),

/***/ "./src/filters/index.js":
/*!******************************!*\
  !*** ./src/filters/index.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _code_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./code-name */ "./src/filters/code-name/index.js");
/* harmony import */ var _code_name_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./code-name-2 */ "./src/filters/code-name-2/index.js");
/* harmony import */ var _datetime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./datetime */ "./src/filters/datetime/index.js");
/**
 * Internal dependencies
 */
// import './first';




/***/ }),

/***/ "./src/gatherpress-icon.js":
/*!*********************************!*\
  !*** ./src/gatherpress-icon.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var gatherPressIcon = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
  id: "Layer_1",
  "data-name": "Layer 1",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 147.1 147.1"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("title", null, "GatherPress"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("circle", {
  cx: "73.5",
  cy: "73.5",
  r: "73.5",
  fill: "#23c3aa"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  d: "M791.8,520.2l-23.5,15.1s26.8,20.9,18.5,43.6l-42.8,34.5c-27.4-2.7-60.5-30.4-60.5-71l41.7-35.8c5.8.7,16.5-3.5,23.6-3.4C772.1,503.6,779.1,505,791.8,520.2Z",
  transform: "translate(-683.3 -467.9)",
  fill: "#36a08b"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  d: "M763.6,538.1H797a2.9,2.9,0,0,1,2.9,2.9h0a59.4,59.4,0,0,1-2.3,17.4,36.9,36.9,0,0,1-7.6,13.1Q777.8,585,759.1,585a42.4,42.4,0,0,1-31.3-13.2,45.4,45.4,0,0,1,51.5-73,49.1,49.1,0,0,1,12.3,8.9,6.1,6.1,0,0,1,0,8.7l-.4.4a6,6,0,0,1-8.5-.1q-9.5-9.7-22.2-9.7a31.2,31.2,0,0,0-23.2,9.5Q728,526,728,540T738.4,564q9.7,8.7,21.1,8.7a26.2,26.2,0,0,0,17.4-6.5q7.7-6.6,8.6-15.8H763.6a6.2,6.2,0,0,1-6.2-6.2h0A6.2,6.2,0,0,1,763.6,538.1Z",
  transform: "translate(-683.3 -467.9)",
  fill: "#fff",
  stroke: "#fff",
  "stroke-miterlimit": "10",
  "stroke-width": "6"
}));
/* harmony default export */ __webpack_exports__["default"] = (gatherPressIcon);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks */ "./src/blocks/index.js");
/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filters */ "./src/filters/index.js");
/* harmony import */ var _gatherpress_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gatherpress-icon */ "./src/gatherpress-icon.js");
/**
 * Internal dependencies
 */

 // svg code

 // alter the icon slot

wp.blocks.updateCategory('gather-underwind', {
  icon: _gatherpress_icon__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "@wordpress/block-editor":
/*!**********************************************!*\
  !*** external {"this":["wp","blockEditor"]} ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blockEditor"]; }());

/***/ }),

/***/ "@wordpress/blocks":
/*!*****************************************!*\
  !*** external {"this":["wp","blocks"]} ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!*********************************************!*\
  !*** external {"this":["wp","components"]} ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/compose":
/*!******************************************!*\
  !*** external {"this":["wp","compose"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["compose"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/hooks":
/*!****************************************!*\
  !*** external {"this":["wp","hooks"]} ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["hooks"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!***************************************!*\
  !*** external {"this":["wp","i18n"]} ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["i18n"]; }());

/***/ }),

/***/ "react":
/*!*********************************!*\
  !*** external {"this":"React"} ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["React"]; }());

/***/ }),

/***/ "react-dom":
/*!************************************!*\
  !*** external {"this":"ReactDOM"} ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["ReactDOM"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map