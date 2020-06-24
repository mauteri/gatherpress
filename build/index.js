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
/* harmony import */ var _gatherpress_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gatherpress-icon */ "./src/gatherpress-icon.js");
/**
 * Internal dependencies
 */

 // svg code

 // alter the icon slot

wp.blocks.updateCategory('gatherpress', {
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

/***/ })

/******/ });
//# sourceMappingURL=index.js.map