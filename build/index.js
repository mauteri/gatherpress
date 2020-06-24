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



Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__["registerBlockType"])('gatherpress/container', {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Starter Container', 'gatherpress'),
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Provide custom container.'),
  keywords: [Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('container'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('wrapper'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('section')],
  supports: {
    align: ['wide', 'full'],
    anchor: true,
    html: false
  },
  category: 'gatherpress',
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

/***/ "./src/blocks/gatherpress-todo/edit.js":
/*!*********************************************!*\
  !*** ./src/blocks/gatherpress-todo/edit.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);


/**
 * EDIT: GatherPress Todo List
 */



var Edit = function Edit(props) {
  var content = props.attributes.content,
      className = props.className,
      setAttributes = props.setAttributes; // Update field content on change.

  var onChangeContent = function onChangeContent(newContent) {
    setAttributes({
      content: newContent
    });
  };

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", null, "Today's List"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["RichText"], {
    tagName: "ul",
    multiline: "li",
    className: className,
    onChange: onChangeContent,
    value: content,
    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('GatherPress Todo List Demo...', 'gatherpress-todo')
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Edit);

/***/ }),

/***/ "./src/blocks/gatherpress-todo/index.js":
/*!**********************************************!*\
  !*** ./src/blocks/gatherpress-todo/index.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/blocks/gatherpress-todo/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./save */ "./src/blocks/gatherpress-todo/save.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__);
/**
 * REGISTER: GatherPress Todo List.
 */




Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__["registerBlockType"])('gatherpress/gatherpress-todo', {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('GatherPress Todo List', 'gatherpress-todo'),
  icon: 'edit',
  category: 'gatherpress',
  keywords: [Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('GatherPress', 'gatherpress-todo'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('gatherpress-todo', 'gatherpress-todo')],
  attributes: {
    content: {
      type: 'array',
      source: 'children',
      selector: 'p'
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),

/***/ "./src/blocks/gatherpress-todo/save.js":
/*!*********************************************!*\
  !*** ./src/blocks/gatherpress-todo/save.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);


/**
 * SAVE: GatherPress Todo List
 */


var Save = function Save(props) {
  var content = props.attributes.content,
      className = props.className;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", null, "Today's List"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["RichText"].Content, {
    className: className,
    tagName: "ul",
    multiline: "li",
    value: content
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Save);

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
/* harmony import */ var _gatherpress_todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gatherpress-todo */ "./src/blocks/gatherpress-todo/index.js");
/**
 * Internal dependencies
 */
 // import './event';



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


Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__["addFilter"])("blocks.registerBlockType", "gatherpress/extending-register-block-type", extendWithRegisterBlockType);

function extendWithRegisterBlockType(settings, name) {
  // Check for block type
  if ('core/code' === name) {
    // Change the block title
    settings.title = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Code Snippet', 'gatherpress'); // Change the block description

    settings.description = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Use for maximum codiness 💃', 'gatherpress'); // Change block icon

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
/* harmony import */ var _datetime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./datetime */ "./src/filters/datetime/index.js");
/**
 * Internal dependencies
 */
// import './first';
 // import './code-name-2';



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
/* harmony import */ var _plugins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./plugins */ "./src/plugins/index.js");
/* harmony import */ var _gatherpress_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gatherpress-icon */ "./src/gatherpress-icon.js");
/**
 * Internal dependencies
 */


 // svg code

 // alter the icon slot

wp.blocks.updateCategory('gatherpress', {
  icon: _gatherpress_icon__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./src/plugins/event-settings/datetime-panel/datetime-end/index.js":
/*!*************************************************************************!*\
  !*** ./src/plugins/event-settings/datetime-panel/datetime-end/index.js ***!
  \*************************************************************************/
/*! exports provided: DateTimeEnd */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateTimeEnd", function() { return DateTimeEnd; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_date__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/date */ "@wordpress/date");
/* harmony import */ var _wordpress_date__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_date__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _label__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./label */ "./src/plugins/event-settings/datetime-panel/datetime-end/label.js");





var DateTimeEnd = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__["withState"])()(function (_ref) {
  var setState = _ref.setState;

  var settings = Object(_wordpress_date__WEBPACK_IMPORTED_MODULE_2__["__experimentalGetSettings"])();

  var is12HourTime = /a(?!\\)/i.test(settings.formats.time.toLowerCase().replace(/\\\\/g, '').split('').reverse().join(''));
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["DateTimePicker"], {
    currentDate: Object(_label__WEBPACK_IMPORTED_MODULE_4__["getDateTimeEnd"])(),
    onChange: function onChange(date) {
      return Object(_label__WEBPACK_IMPORTED_MODULE_4__["updateDateTimeEnd"])(date, setState);
    },
    is12Hour: is12HourTime
  });
});

/***/ }),

/***/ "./src/plugins/event-settings/datetime-panel/datetime-end/label.js":
/*!*************************************************************************!*\
  !*** ./src/plugins/event-settings/datetime-panel/datetime-end/label.js ***!
  \*************************************************************************/
/*! exports provided: updateDateTimeEnd, getDateTimeEnd, hasEventPastNotice, DateTimeEndLabel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateDateTimeEnd", function() { return updateDateTimeEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDateTimeEnd", function() { return getDateTimeEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasEventPastNotice", function() { return hasEventPastNotice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateTimeEndLabel", function() { return DateTimeEndLabel; });
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_date__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/date */ "@wordpress/date");
/* harmony import */ var _wordpress_date__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_date__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helpers */ "./src/plugins/event-settings/datetime-panel/helpers.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../helpers */ "./src/plugins/helpers.js");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var __ = wp.i18n.__;
function updateDateTimeEnd(dateTime) {
  var setState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  Object(_helpers__WEBPACK_IMPORTED_MODULE_7__["validateDateTimeEnd"])(dateTime);
  GatherPress.event_datetime.datetime_end = dateTime;
  this.setState({
    dateTime: dateTime
  });

  if (null !== setState) {
    setState({
      dateTime: dateTime
    });
  }

  Object(_helpers__WEBPACK_IMPORTED_MODULE_8__["enableSave"])();
}
function getDateTimeEnd() {
  GatherPress.event_datetime.datetime_end = this.state.dateTime;
  hasEventPastNotice();
  return this.state.dateTime;
}
function hasEventPastNotice() {
  var id = 'gp_event_past';
  var notices = wp.data.dispatch('core/notices');
  var eventPastStatus = Object(_helpers__WEBPACK_IMPORTED_MODULE_8__["hasEventPast"])();
  notices.removeNotice(id);

  if (eventPastStatus) {
    notices.createNotice('warning', __('This event has already past.', 'gatherpress'), {
      id: id,
      isDismissible: true
    });
  }
}
var DateTimeEndLabel = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(DateTimeEndLabel, _Component);

  var _super = _createSuper(DateTimeEndLabel);

  function DateTimeEndLabel(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, DateTimeEndLabel);

    _this = _super.call(this, props);
    _this.state = {
      dateTime: GatherPress.event_datetime.datetime_end
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(DateTimeEndLabel, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.updateDateTimeEnd = updateDateTimeEnd;
      this.getDateTimeEnd = getDateTimeEnd;
      updateDateTimeEnd = updateDateTimeEnd.bind(this);
      getDateTimeEnd = getDateTimeEnd.bind(this);
      hasEventPastNotice();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      updateDateTimeEnd = this.updateDateTimeEnd;
      getDateTimeEnd = this.getDateTimeEnd;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      hasEventPastNotice();
    }
  }, {
    key: "render",
    value: function render() {
      var settings = Object(_wordpress_date__WEBPACK_IMPORTED_MODULE_6__["__experimentalGetSettings"])();

      return Object(_wordpress_date__WEBPACK_IMPORTED_MODULE_6__["dateI18n"])("".concat(settings.formats.date, " ").concat(settings.formats.time), this.state.dateTime);
    }
  }]);

  return DateTimeEndLabel;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/***/ }),

/***/ "./src/plugins/event-settings/datetime-panel/datetime-start/index.js":
/*!***************************************************************************!*\
  !*** ./src/plugins/event-settings/datetime-panel/datetime-start/index.js ***!
  \***************************************************************************/
/*! exports provided: DateTimeStart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateTimeStart", function() { return DateTimeStart; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_date__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/date */ "@wordpress/date");
/* harmony import */ var _wordpress_date__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_date__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _label__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./label */ "./src/plugins/event-settings/datetime-panel/datetime-start/label.js");





var DateTimeStart = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__["withState"])()(function (_ref) {
  var setState = _ref.setState;

  var settings = Object(_wordpress_date__WEBPACK_IMPORTED_MODULE_2__["__experimentalGetSettings"])();

  var is12HourTime = /a(?!\\)/i.test(settings.formats.time.toLowerCase().replace(/\\\\/g, '').split('').reverse().join(''));
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["DateTimePicker"], {
    currentDate: Object(_label__WEBPACK_IMPORTED_MODULE_4__["getDateTimeStart"])(),
    onChange: function onChange(date) {
      return Object(_label__WEBPACK_IMPORTED_MODULE_4__["updateDateTimeStart"])(date, setState);
    },
    is12Hour: is12HourTime
  });
});

/***/ }),

/***/ "./src/plugins/event-settings/datetime-panel/datetime-start/label.js":
/*!***************************************************************************!*\
  !*** ./src/plugins/event-settings/datetime-panel/datetime-start/label.js ***!
  \***************************************************************************/
/*! exports provided: updateDateTimeStart, getDateTimeStart, DateTimeStartLabel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateDateTimeStart", function() { return updateDateTimeStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDateTimeStart", function() { return getDateTimeStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateTimeStartLabel", function() { return DateTimeStartLabel; });
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_date__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/date */ "@wordpress/date");
/* harmony import */ var _wordpress_date__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_date__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helpers */ "./src/plugins/event-settings/datetime-panel/helpers.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../helpers */ "./src/plugins/helpers.js");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





function updateDateTimeStart(dateTime) {
  var setState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  Object(_helpers__WEBPACK_IMPORTED_MODULE_7__["validateDateTimeStart"])(dateTime);
  GatherPress.event_datetime.datetime_start = dateTime;
  this.setState({
    dateTime: dateTime
  });

  if (null !== setState) {
    setState({
      dateTime: dateTime
    });
  }

  Object(_helpers__WEBPACK_IMPORTED_MODULE_8__["enableSave"])();
}
function getDateTimeStart() {
  GatherPress.event_datetime.datetime_start = this.state.dateTime;
  return this.state.dateTime;
}
var DateTimeStartLabel = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(DateTimeStartLabel, _Component);

  var _super = _createSuper(DateTimeStartLabel);

  function DateTimeStartLabel(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, DateTimeStartLabel);

    _this = _super.call(this, props);
    _this.state = {
      dateTime: GatherPress.event_datetime.datetime_start
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(DateTimeStartLabel, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.updateDateTimeStart = updateDateTimeStart;
      this.getDateTimeStart = getDateTimeStart;
      updateDateTimeStart = updateDateTimeStart.bind(this);
      getDateTimeStart = getDateTimeStart.bind(this);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      updateDateTimeStart = this.updateDateTimeStart;
      getDateTimeStart = this.getDateTimeStart;
    }
  }, {
    key: "render",
    value: function render() {
      var settings = Object(_wordpress_date__WEBPACK_IMPORTED_MODULE_6__["__experimentalGetSettings"])();

      return Object(_wordpress_date__WEBPACK_IMPORTED_MODULE_6__["dateI18n"])("".concat(settings.formats.date, " ").concat(settings.formats.time), this.state.dateTime);
    }
  }]);

  return DateTimeStartLabel;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/***/ }),

/***/ "./src/plugins/event-settings/datetime-panel/helpers.js":
/*!**************************************************************!*\
  !*** ./src/plugins/event-settings/datetime-panel/helpers.js ***!
  \**************************************************************/
/*! exports provided: dateTimeFormat, validateDateTimeStart, validateDateTimeEnd, saveDateTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dateTimeFormat", function() { return dateTimeFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateDateTimeStart", function() { return validateDateTimeStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateDateTimeEnd", function() { return validateDateTimeEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveDateTime", function() { return saveDateTime; });
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _datetime_start_label__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./datetime-start/label */ "./src/plugins/event-settings/datetime-panel/datetime-start/label.js");
/* harmony import */ var _datetime_end_label__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./datetime-end/label */ "./src/plugins/event-settings/datetime-panel/datetime-end/label.js");



var dateTimeFormat = 'YYYY-MM-DDTHH:mm:ss';
function validateDateTimeStart(dateTime) {
  var dateTimeEndNumeric = moment(GatherPress.event_datetime.datetime_end).valueOf();
  var dateTimeNumeric = moment(dateTime).valueOf();

  if (dateTimeNumeric >= dateTimeEndNumeric) {
    var dateTimeEnd = moment(dateTimeNumeric).add(2, 'hours').format(dateTimeFormat);
    Object(_datetime_end_label__WEBPACK_IMPORTED_MODULE_2__["updateDateTimeEnd"])(dateTimeEnd);
  }

  Object(_datetime_end_label__WEBPACK_IMPORTED_MODULE_2__["hasEventPastNotice"])();
}
function validateDateTimeEnd(dateTime) {
  var dateTimeStartNumeric = moment(GatherPress.event_datetime.datetime_start).valueOf();
  var dateTimeNumeric = moment(dateTime).valueOf();

  if (dateTimeNumeric <= dateTimeStartNumeric) {
    var dateTimeStart = moment(dateTimeNumeric).subtract(2, 'hours').format(dateTimeFormat);
    Object(_datetime_start_label__WEBPACK_IMPORTED_MODULE_1__["updateDateTimeStart"])(dateTimeStart);
  }

  Object(_datetime_end_label__WEBPACK_IMPORTED_MODULE_2__["hasEventPastNotice"])();
} // @todo maybe put this is a save_post hook.
// https://www.ibenic.com/use-wordpress-hooks-package-javascript-apps/
// Then move button enabler

function saveDateTime() {
  var isSavingPost = wp.data.select('core/editor').isSavingPost(),
      isAutosavingPost = wp.data.select('core/editor').isAutosavingPost();

  if (isSavingPost && !isAutosavingPost) {
    _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
      path: '/gatherpress/v1/event/datetime/',
      method: 'POST',
      data: {
        post_id: GatherPress.post_id,
        datetime_start: moment(GatherPress.event_datetime.datetime_start).format('YYYY-MM-DD HH:mm:ss'),
        datetime_end: moment(GatherPress.event_datetime.datetime_end).format('YYYY-MM-DD HH:mm:ss'),
        _wpnonce: GatherPress.nonce
      }
    }).then(function (res) {// Saved.
    });
  }
}

/***/ }),

/***/ "./src/plugins/event-settings/datetime-panel/index.js":
/*!************************************************************!*\
  !*** ./src/plugins/event-settings/datetime-panel/index.js ***!
  \************************************************************/
/*! exports provided: DateTimeStartSettingPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateTimeStartSettingPanel", function() { return DateTimeStartSettingPanel; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ "./src/plugins/event-settings/datetime-panel/helpers.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _datetime_start__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./datetime-start */ "./src/plugins/event-settings/datetime-panel/datetime-start/index.js");
/* harmony import */ var _datetime_start_label__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./datetime-start/label */ "./src/plugins/event-settings/datetime-panel/datetime-start/label.js");
/* harmony import */ var _datetime_end__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./datetime-end */ "./src/plugins/event-settings/datetime-panel/datetime-end/index.js");
/* harmony import */ var _datetime_end_label__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./datetime-end/label */ "./src/plugins/event-settings/datetime-panel/datetime-end/label.js");







var __ = wp.i18n.__;
var currentDateTime = moment().format(_helpers__WEBPACK_IMPORTED_MODULE_1__["dateTimeFormat"]);
var dateTimeStart = GatherPress.event_datetime.datetime_start;
var dateTimeEnd = GatherPress.event_datetime.datetime_end;
wp.data.subscribe(_helpers__WEBPACK_IMPORTED_MODULE_1__["saveDateTime"]);
dateTimeStart = '' !== dateTimeStart ? moment(dateTimeStart).format(_helpers__WEBPACK_IMPORTED_MODULE_1__["dateTimeFormat"]) : currentDateTime;
dateTimeEnd = '' !== dateTimeEnd ? moment(dateTimeEnd).format(_helpers__WEBPACK_IMPORTED_MODULE_1__["dateTimeFormat"]) : moment(currentDateTime).add(2, 'hours').format(_helpers__WEBPACK_IMPORTED_MODULE_1__["dateTimeFormat"]);
GatherPress.event_datetime.datetime_start = dateTimeStart;
GatherPress.event_datetime.datetime_end = dateTimeEnd;
var DateTimeStartSettingPanel = function DateTimeStartSettingPanel() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("section", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", null, __('Date & time', 'gatherpress')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", null, __('Start', 'gatherpress')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Dropdown"], {
    position: "bottom left",
    renderToggle: function renderToggle(_ref) {
      var isOpen = _ref.isOpen,
          onToggle = _ref.onToggle;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        onClick: onToggle,
        "aria-expanded": isOpen,
        isLink: true
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_datetime_start_label__WEBPACK_IMPORTED_MODULE_4__["DateTimeStartLabel"], null));
    },
    renderContent: function renderContent() {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_datetime_start__WEBPACK_IMPORTED_MODULE_3__["DateTimeStart"], null);
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", null, __('End', 'gatherpress')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Dropdown"], {
    position: "bottom left",
    renderToggle: function renderToggle(_ref2) {
      var isOpen = _ref2.isOpen,
          onToggle = _ref2.onToggle;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        onClick: onToggle,
        "aria-expanded": isOpen,
        isLink: true
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_datetime_end_label__WEBPACK_IMPORTED_MODULE_6__["DateTimeEndLabel"], null));
    },
    renderContent: function renderContent() {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_datetime_end__WEBPACK_IMPORTED_MODULE_5__["DateTimeEnd"], null);
    }
  })));
};

/***/ }),

/***/ "./src/plugins/event-settings/index.js":
/*!*********************************************!*\
  !*** ./src/plugins/event-settings/index.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers */ "./src/plugins/helpers.js");
/* harmony import */ var _datetime_panel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./datetime-panel */ "./src/plugins/event-settings/datetime-panel/index.js");
/* harmony import */ var _options_panel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./options-panel */ "./src/plugins/event-settings/options-panel/index.js");




var registerPlugin = wp.plugins.registerPlugin;
var __ = wp.i18n.__;
var PluginDocumentSettingPanel = wp.editPost.PluginDocumentSettingPanel;

var EventSettings = function EventSettings() {
  return Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["isEventPostType"])() && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PluginDocumentSettingPanel, {
    name: "gp-event-settings",
    title: __('Event settings', 'gatherpress'),
    initialOpen: true,
    className: "gp-event-settings"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_datetime_panel__WEBPACK_IMPORTED_MODULE_2__["DateTimeStartSettingPanel"], null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("hr", null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_options_panel__WEBPACK_IMPORTED_MODULE_3__["OptionsPanel"], null));
};

registerPlugin('gp-event-settings', {
  render: EventSettings,
  icon: ''
});

/***/ }),

/***/ "./src/plugins/event-settings/options-panel/announce-event/index.js":
/*!**************************************************************************!*\
  !*** ./src/plugins/event-settings/options-panel/announce-event/index.js ***!
  \**************************************************************************/
/*! exports provided: AnnounceEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnnounceEvent", function() { return AnnounceEvent; });
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
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../helpers */ "./src/plugins/helpers.js");







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var __ = wp.i18n.__;
var AnnounceEvent = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(AnnounceEvent, _Component);

  var _super = _createSuper(AnnounceEvent);

  function AnnounceEvent(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, AnnounceEvent);

    _this = _super.call(this, props);
    _this.state = {
      announceEventSent: '0' !== GatherPress.event_announced
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(AnnounceEvent, [{
    key: "announce",
    value: function announce() {
      var _this2 = this;

      if (confirm(__('Ready to announce this event to all members?', 'gatherpress'))) {
        _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_8___default()({
          path: '/gatherpress/v1/event/announce/',
          method: 'POST',
          data: {
            post_id: GatherPress.post_id,
            _wpnonce: GatherPress.nonce
          }
        }).then(function (res) {
          GatherPress.event_announced = res.success ? '1' : '0';

          _this2.setState({
            announceEventSent: res.success
          });
        });
      }
    }
  }, {
    key: "shouldDisable",
    value: function shouldDisable() {
      return this.state.announceEventSent || 'publish' !== wp.data.select('core/editor').getEditedPostAttribute('status') || Object(_helpers__WEBPACK_IMPORTED_MODULE_9__["hasEventPast"])();
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("section", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("h3", null, __('Options', 'gatherpress')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("span", null, __('Announce event', 'gatherpress')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["Button"], {
        className: "components-button is-primary",
        "aria-disabled": this.shouldDisable(),
        onClick: function onClick() {
          return _this3.announce();
        },
        disabled: this.shouldDisable()
      }, this.state.announceEventSent ? __('Sent', 'gatherpress') : __('Send', 'gatherpress'))));
    }
  }]);

  return AnnounceEvent;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/***/ }),

/***/ "./src/plugins/event-settings/options-panel/index.js":
/*!***********************************************************!*\
  !*** ./src/plugins/event-settings/options-panel/index.js ***!
  \***********************************************************/
/*! exports provided: OptionsPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionsPanel", function() { return OptionsPanel; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _announce_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./announce-event */ "./src/plugins/event-settings/options-panel/announce-event/index.js");


var OptionsPanel = function OptionsPanel() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_announce_event__WEBPACK_IMPORTED_MODULE_1__["AnnounceEvent"], null);
};

/***/ }),

/***/ "./src/plugins/helpers.js":
/*!********************************!*\
  !*** ./src/plugins/helpers.js ***!
  \********************************/
/*! exports provided: isEventPostType, enableSave, hasEventPastNotice, hasEventPast */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEventPostType", function() { return isEventPostType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enableSave", function() { return enableSave; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasEventPastNotice", function() { return hasEventPastNotice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasEventPast", function() { return hasEventPast; });
// Checks if the post type is for events.
function isEventPostType() {
  var getPostType = wp.data.select('core/editor').getCurrentPostType(); // Gets the current post type.

  return getPostType === 'gp_event';
} // @todo hack approach to enabling Save buttons after update
// https://github.com/WordPress/gutenberg/issues/13774

function enableSave() {
  wp.data.dispatch('core/editor').editPost({
    meta: {
      _non_existing_meta: true
    }
  });
}
function hasEventPastNotice() {
  var id = 'gp_event_past';
  var notices = wp.data.dispatch('core/notices');
  notices.removeNotice(id);

  if (hasEventPast()) {
    notices.createNotice('warning', __('This event has already past.', 'gatherpress'), {
      id: id,
      isDismissible: true
    });
  }
}
function hasEventPast() {
  if (moment().valueOf() > moment(GatherPress.event_datetime.datetime_end).valueOf()) {
    return true;
  }

  return false;
}

/***/ }),

/***/ "./src/plugins/index.js":
/*!******************************!*\
  !*** ./src/plugins/index.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _event_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event-settings */ "./src/plugins/event-settings/index.js");
/**
 * Internal dependencies
 */


/***/ }),

/***/ "@wordpress/api-fetch":
/*!*******************************************!*\
  !*** external {"this":["wp","apiFetch"]} ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["apiFetch"]; }());

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

/***/ "@wordpress/date":
/*!***************************************!*\
  !*** external {"this":["wp","date"]} ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["date"]; }());

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

/***/ })

/******/ });
//# sourceMappingURL=index.js.map