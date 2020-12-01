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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/constants":
/*!*********************************************************!*\
  !*** external "next/dist/next-server/lib/constants.js" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/constants.js");

/***/ }),

/***/ "../next-server/lib/document-context":
/*!****************************************************************!*\
  !*** external "next/dist/next-server/lib/document-context.js" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/document-context.js");

/***/ }),

/***/ "../next-server/lib/fid":
/*!***************************************************!*\
  !*** external "next/dist/next-server/lib/fid.js" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/fid.js");

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "../next-server/server/utils":
/*!********************************************************!*\
  !*** external "next/dist/next-server/server/utils.js" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/utils.js");

/***/ }),

/***/ "./assets/fonts/BentonSans-Bold.ttf":
/*!******************************************!*\
  !*** ./assets/fonts/BentonSans-Bold.ttf ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/_next/static/chunks/fonts/BentonSans-Bold-127b62fe4fc47c7ce9acb22c3875c40b.ttf");

/***/ }),

/***/ "./assets/fonts/BentonSans-Book.ttf":
/*!******************************************!*\
  !*** ./assets/fonts/BentonSans-Book.ttf ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/_next/static/chunks/fonts/BentonSans-Book-6af269b37ff5734a884fdb55f540c820.ttf");

/***/ }),

/***/ "./assets/fonts/BentonSans-Light.ttf":
/*!*******************************************!*\
  !*** ./assets/fonts/BentonSans-Light.ttf ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/_next/static/chunks/fonts/BentonSans-Light-cca7399d494e0034a9f41d4bf373d16e.ttf");

/***/ }),

/***/ "./assets/img/apple-icon.png":
/*!***********************************!*\
  !*** ./assets/img/apple-icon.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./assets/img/favicon.png":
/*!********************************!*\
  !*** ./assets/img/favicon.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAjpQTFRFAAAAOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHOFzHNb6tNb6tNb6tNb6tNb6tNb6tNb6tij4xIgAAAL50Uk5TAAMeQ2iTrMje5uLVt559TSwMAhliv+r+//XWjy4FQK7k88F1EEnU7Y0LAab911AJd7UiDvfJRCnP+wQxxvq0cmCHyvxmJeyFehhntkgRxOMXMPmEzQfZLcyQ0kx74MPC334UDXDwb2xfXvHH+DdT6+i8JtuUWh+vPU5WQSEP51KWsVG+g8U00PJYeWmLOR0bqBPa6TaKHNEG9kbukpgVKLmVsqNca6pFuOWCWYxPziR4u+HdwAgWE0dmaVs6BHd9NXgAAAMySURBVHic7df5P5RBGADwWSkh2pZ6Z1HryvK2VEhWUWwUER1rdTiyVEJk2W6USqWSTiW670OX7v63Xrurz8y8M7NjP/tT9fy28zzvd+d935l5ZwD4H39ZaAJmBM6cFTQ7OCR0Tlj4XO08nxRdROT8BRJEQh8VHbNw2swiQyymuCMuPiFxWs7iJIriDmNyiqgixywxsZjJSE1bKnZXy4w8RgnT8nQBJyMs04sDobQiy+ttrcxmXGvGfpoDc/jQqtVUJjdvzdr8AgvSEreOOxIKQ6hOUaRGSaasx+wNHKeY3h9Y4slvxFpLmU7ZJrpTXuEp2Iw1b2FKWxmjcJvGU2DFx1dlMd2x6ekOrNJ5KnS5eGI71bHuYDhsSNpJg3aR10vVNbWpJh4E6yjzrqKOKDLvrgfA3tDIg+AeNRRIPuka179Z87lQgapLAaFEiWmvO6HN5EGmfSRUQpaYm9yJwv08CDaTS0qtj1BLK+5kqNYOQQgSU+6AqkAUisehfCzZ1q48RkFIjy0n8kE0V2DrcEAoCEEtCtkr0VSnDAx0yEyBulDI2UZAh6gQ0NrUUY9C2hYxyGsclvwEHYF+go76C/Jbj475C7L5660dN4pBTkrYUeiEQwjSdbepoweFZGw56pXBSfG5ZsPuLRlNlXedMgpDeisG4QPJNLnvEIT68KddYVFVCEKnifd2xkco8ywBNfkI9dsJKCeKAXWc40GW84CMcLLmgru9NZcHhZIdAiCimqhxOF1vwcD9ZA+oHAAukkV5ly4PxlyReFAwbes+dJWUzNe6XXsvJmTpoTgAXGedP5hQL9UB4AZD+gNpcMhxkwEl1tChW8OeAjvWfHsRw1GWm34qZJw6w9xBW6USmQmBgBGqdNc9wxOxc0ECm1EiK5UGWUbHlDXr3n30vh5YuRBIb6b2qfrho74i5HfL42G+o0xSxnkEi/YBge+B/KTdC2N5OuidmZSePeeeaV+8FD4eW18FMang105RxtWrN2+pw3ykM2M6jCvG372PxXZojdmjpV7fFb1bxa0NhqrKupAPH5M+RaeNT/ikTEWOfejzWNkEZzr8W/Hl67fvQvHj5y/i0t+7VYbhtwginQAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./node_modules/next/dist/pages/_document.js":
/*!***************************************************!*\
  !*** ./node_modules/next/dist/pages/_document.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.middleware = middleware;
exports.NextScript = exports.Main = exports.Head = exports.Html = exports.default = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _server = _interopRequireDefault(__webpack_require__(/*! styled-jsx/server */ "styled-jsx/server"));

var _constants = __webpack_require__(/*! ../next-server/lib/constants */ "../next-server/lib/constants");

var _documentContext = __webpack_require__(/*! ../next-server/lib/document-context */ "../next-server/lib/document-context");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

exports.DocumentContext = _utils.DocumentContext;
exports.DocumentInitialProps = _utils.DocumentInitialProps;
exports.DocumentProps = _utils.DocumentProps;

var _fid = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/fid */ "../next-server/lib/fid"));

var _utils2 = __webpack_require__(/*! ../next-server/server/utils */ "../next-server/server/utils");

var _htmlescape = __webpack_require__(/*! ../server/htmlescape */ "./node_modules/next/dist/server/htmlescape.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

async function middleware({
  req,
  res
}) {}

function dedupe(bundles) {
  const files = new Set();
  const kept = [];

  for (const bundle of bundles) {
    if (files.has(bundle.file)) continue;
    files.add(bundle.file);
    kept.push(bundle);
  }

  return kept;
}

function getOptionalModernScriptVariant(path) {
  if (false) {}

  return path;
}
/**
* `Document` component handles the initial `document` markup and renders only on the server side.
* Commonly used for implementing server side rendering for `css-in-js` libraries.
*/


class Document extends _react.Component {
  /**
  * `getInitialProps` hook returns the context object with the addition of `renderPage`.
  * `renderPage` callback executes `React` rendering logic synchronously to support server-rendering wrappers
  */
  static async getInitialProps(ctx) {
    const enhancers =  false ? undefined : [];

    const enhanceApp = App => {
      for (const enhancer of enhancers) {
        App = enhancer(App);
      }

      return props => _react.default.createElement(App, props);
    };

    const {
      html,
      head
    } = await ctx.renderPage({
      enhanceApp
    });
    const styles = [...(0, _server.default)(), ...( false ? undefined : [])];
    return {
      html,
      head,
      styles
    };
  }

  static renderDocument(Document, props) {
    return _react.default.createElement(_documentContext.DocumentContext.Provider, {
      value: {
        _documentProps: props,
        // In dev we invalidate the cache by appending a timestamp to the resource URL.
        // This is a workaround to fix https://github.com/zeit/next.js/issues/5860
        // TODO: remove this workaround when https://bugs.webkit.org/show_bug.cgi?id=187726 is fixed.
        _devOnlyInvalidateCacheQueryString: true ? '?ts=' + Date.now() : undefined
      }
    }, _react.default.createElement(Document, props));
  }

  render() {
    return _react.default.createElement(Html, null, _react.default.createElement(Head, null), _react.default.createElement("body", null, _react.default.createElement(Main, null), _react.default.createElement(NextScript, null)));
  }

}

exports.default = Document;
Document.headTagsMiddleware =  false ? undefined : () => [];
Document.bodyTagsMiddleware =  false ? undefined : () => [];
Document.htmlPropsMiddleware =  false ? undefined : () => [];

class Html extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }

  render() {
    const {
      inAmpMode,
      htmlProps
    } = this.context._documentProps;
    return _react.default.createElement("html", Object.assign({}, htmlProps, this.props, {
      amp: inAmpMode ? '' : undefined,
      "data-ampdevmode": inAmpMode && true ? '' : undefined
    }));
  }

}

exports.Html = Html;
Html.contextType = _documentContext.DocumentContext;
Html.propTypes = {
  children: _propTypes.default.node.isRequired
};

class Head extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }

  getCssLinks() {
    const {
      assetPrefix,
      files
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    const cssFiles = files && files.length ? files.filter(f => /\.css$/.test(f)) : [];
    const cssLinkElements = [];
    cssFiles.forEach(file => {
      cssLinkElements.push(_react.default.createElement("link", {
        key: `${file}-preload`,
        nonce: this.props.nonce,
        rel: "preload",
        href: `${assetPrefix}/_next/${encodeURI(file)}${_devOnlyInvalidateCacheQueryString}`,
        as: "style",
        crossOrigin: this.props.crossOrigin || undefined
      }), _react.default.createElement("link", {
        key: file,
        nonce: this.props.nonce,
        rel: "stylesheet",
        href: `${assetPrefix}/_next/${encodeURI(file)}${_devOnlyInvalidateCacheQueryString}`,
        crossOrigin: this.props.crossOrigin || undefined
      }));
    });
    return cssLinkElements.length === 0 ? null : cssLinkElements;
  }

  getPreloadDynamicChunks() {
    const {
      dynamicImports,
      assetPrefix
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    return dedupe(dynamicImports).map(bundle => {
      // `dynamicImports` will contain both `.js` and `.module.js` when the
      // feature is enabled. This clause will filter down to the modern
      // variants only.
      if (!bundle.file.endsWith(getOptionalModernScriptVariant('.js'))) {
        return null;
      }

      return _react.default.createElement("link", {
        rel: "preload",
        key: bundle.file,
        href: `${assetPrefix}/_next/${encodeURI(bundle.file)}${_devOnlyInvalidateCacheQueryString}`,
        as: "script",
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined
      });
    }) // Filter out nulled scripts
    .filter(Boolean);
  }

  getPreloadMainLinks() {
    const {
      assetPrefix,
      files
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    const preloadFiles = files && files.length ? files.filter(file => {
      // `dynamicImports` will contain both `.js` and `.module.js` when
      // the feature is enabled. This clause will filter down to the
      // modern variants only.
      return file.endsWith(getOptionalModernScriptVariant('.js'));
    }) : [];
    return preloadFiles.length === 0 ? null : preloadFiles.map(file => {
      return _react.default.createElement("link", {
        key: file,
        nonce: this.props.nonce,
        rel: "preload",
        href: `${assetPrefix}/_next/${encodeURI(file)}${_devOnlyInvalidateCacheQueryString}`,
        as: "script",
        crossOrigin: this.props.crossOrigin || undefined
      });
    });
  }

  getFidPolyfill() {
    if (true) {
      return null;
    }

    return _react.default.createElement("script", {
      dangerouslySetInnerHTML: {
        __html: `(${_fid.default})(addEventListener, removeEventListener)`
      }
    });
  }

  render() {
    const {
      styles,
      ampPath,
      inAmpMode,
      assetPrefix,
      hybridAmp,
      canonicalBase,
      __NEXT_DATA__,
      dangerousAsPath,
      headTags,
      unstable_runtimeJS
    } = this.context._documentProps;
    const disableRuntimeJS = unstable_runtimeJS === false;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    const {
      page,
      buildId
    } = __NEXT_DATA__;
    let {
      head
    } = this.context._documentProps;
    let children = this.props.children; // show a warning if Head contains <title> (only in development)

    if (true) {
      children = _react.default.Children.map(children, child => {
        const isReactHelmet = child && child.props && child.props['data-react-helmet'];

        if (child && child.type === 'title' && !isReactHelmet) {
          console.warn("Warning: <title> should not be used in _document.js's <Head>. https://err.sh/next.js/no-document-title");
        }

        return child;
      });
      if (this.props.crossOrigin) console.warn('Warning: `Head` attribute `crossOrigin` is deprecated. https://err.sh/next.js/doc-crossorigin-deprecated');
    }

    let hasAmphtmlRel = false;
    let hasCanonicalRel = false; // show warning and remove conflicting amp head tags

    head = _react.default.Children.map(head || [], child => {
      if (!child) return child;
      const {
        type,
        props
      } = child;

      if (inAmpMode) {
        let badProp = '';

        if (type === 'meta' && props.name === 'viewport') {
          badProp = 'name="viewport"';
        } else if (type === 'link' && props.rel === 'canonical') {
          hasCanonicalRel = true;
        } else if (type === 'script') {
          // only block if
          // 1. it has a src and isn't pointing to ampproject's CDN
          // 2. it is using dangerouslySetInnerHTML without a type or
          // a type of text/javascript
          if (props.src && props.src.indexOf('ampproject') < -1 || props.dangerouslySetInnerHTML && (!props.type || props.type === 'text/javascript')) {
            badProp = '<script';
            Object.keys(props).forEach(prop => {
              badProp += ` ${prop}="${props[prop]}"`;
            });
            badProp += '/>';
          }
        }

        if (badProp) {
          console.warn(`Found conflicting amp tag "${child.type}" with conflicting prop ${badProp} in ${__NEXT_DATA__.page}. https://err.sh/next.js/conflicting-amp-tag`);
          return null;
        }
      } else {
        // non-amp mode
        if (type === 'link' && props.rel === 'amphtml') {
          hasAmphtmlRel = true;
        }
      }

      return child;
    }); // try to parse styles from fragment for backwards compat

    const curStyles = Array.isArray(styles) ? styles : [];

    if (inAmpMode && styles && // @ts-ignore Property 'props' does not exist on type ReactElement
    styles.props && // @ts-ignore Property 'props' does not exist on type ReactElement
    Array.isArray(styles.props.children)) {
      const hasStyles = el => el && el.props && el.props.dangerouslySetInnerHTML && el.props.dangerouslySetInnerHTML.__html; // @ts-ignore Property 'props' does not exist on type ReactElement


      styles.props.children.forEach(child => {
        if (Array.isArray(child)) {
          child.map(el => hasStyles(el) && curStyles.push(el));
        } else if (hasStyles(child)) {
          curStyles.push(child);
        }
      });
    }

    return _react.default.createElement("head", this.props, this.context._documentProps.isDevelopment && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("style", {
      "data-next-hide-fouc": true,
      "data-ampdevmode": inAmpMode ? 'true' : undefined,
      dangerouslySetInnerHTML: {
        __html: `body{display:none}`
      }
    }), _react.default.createElement("noscript", {
      "data-next-hide-fouc": true,
      "data-ampdevmode": inAmpMode ? 'true' : undefined
    }, _react.default.createElement("style", {
      dangerouslySetInnerHTML: {
        __html: `body{display:block}`
      }
    }))), children, head, _react.default.createElement("meta", {
      name: "next-head-count",
      content: _react.default.Children.count(head || []).toString()
    }), inAmpMode && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("meta", {
      name: "viewport",
      content: "width=device-width,minimum-scale=1,initial-scale=1"
    }), !hasCanonicalRel && _react.default.createElement("link", {
      rel: "canonical",
      href: canonicalBase + (0, _utils2.cleanAmpPath)(dangerousAsPath)
    }), _react.default.createElement("link", {
      rel: "preload",
      as: "script",
      href: "https://cdn.ampproject.org/v0.js"
    }), styles && _react.default.createElement("style", {
      "amp-custom": "",
      dangerouslySetInnerHTML: {
        __html: curStyles.map(style => style.props.dangerouslySetInnerHTML.__html).join('').replace(/\/\*# sourceMappingURL=.*\*\//g, '').replace(/\/\*@ sourceURL=.*?\*\//g, '')
      }
    }), _react.default.createElement("style", {
      "amp-boilerplate": "",
      dangerouslySetInnerHTML: {
        __html: `body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}`
      }
    }), _react.default.createElement("noscript", null, _react.default.createElement("style", {
      "amp-boilerplate": "",
      dangerouslySetInnerHTML: {
        __html: `body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}`
      }
    })), _react.default.createElement("script", {
      async: true,
      src: "https://cdn.ampproject.org/v0.js"
    })), !inAmpMode && _react.default.createElement(_react.default.Fragment, null, !hasAmphtmlRel && hybridAmp && _react.default.createElement("link", {
      rel: "amphtml",
      href: canonicalBase + getAmpPath(ampPath, dangerousAsPath)
    }), this.getCssLinks(), !disableRuntimeJS && _react.default.createElement("link", {
      rel: "preload",
      href: assetPrefix + getOptionalModernScriptVariant(encodeURI(`/_next/static/${buildId}/pages/_app.js`)) + _devOnlyInvalidateCacheQueryString,
      as: "script",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    }), !disableRuntimeJS && page !== '/_error' && _react.default.createElement("link", {
      rel: "preload",
      href: assetPrefix + getOptionalModernScriptVariant(encodeURI(`/_next/static/${buildId}/pages${getPageFile(page)}`)) + _devOnlyInvalidateCacheQueryString,
      as: "script",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    }), !disableRuntimeJS && this.getPreloadDynamicChunks(), !disableRuntimeJS && this.getPreloadMainLinks(), this.context._documentProps.isDevelopment && // this element is used to mount development styles so the
    // ordering matches production
    // (by default, style-loader injects at the bottom of <head />)
    _react.default.createElement("noscript", {
      id: "__next_css__DO_NOT_USE__"
    }), styles || null), !disableRuntimeJS && this.getFidPolyfill(), _react.default.createElement(_react.default.Fragment, {}, ...(headTags || [])));
  }

}

exports.Head = Head;
Head.contextType = _documentContext.DocumentContext;
Head.propTypes = {
  nonce: _propTypes.default.string,
  crossOrigin: _propTypes.default.string
};

class Main extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }

  render() {
    const {
      inAmpMode,
      html
    } = this.context._documentProps;
    if (inAmpMode) return _constants.AMP_RENDER_TARGET;
    return _react.default.createElement("div", {
      id: "__next",
      dangerouslySetInnerHTML: {
        __html: html
      }
    });
  }

}

exports.Main = Main;
Main.contextType = _documentContext.DocumentContext;

class NextScript extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }

  getDynamicChunks() {
    const {
      dynamicImports,
      assetPrefix,
      files
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    return dedupe(dynamicImports).map(bundle => {
      let modernProps = {};

      if (false) {}

      if (!/\.js$/.test(bundle.file) || files.includes(bundle.file)) return null;
      return _react.default.createElement("script", Object.assign({
        async: true,
        key: bundle.file,
        src: `${assetPrefix}/_next/${encodeURI(bundle.file)}${_devOnlyInvalidateCacheQueryString}`,
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined
      }, modernProps));
    });
  }

  getScripts() {
    const {
      assetPrefix,
      files,
      lowPriorityFiles
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    const normalScripts = files === null || files === void 0 ? void 0 : files.filter(file => file.endsWith('.js'));
    const lowPriorityScripts = lowPriorityFiles === null || lowPriorityFiles === void 0 ? void 0 : lowPriorityFiles.filter(file => file.endsWith('.js'));
    return [...normalScripts, ...lowPriorityScripts].map(file => {
      let modernProps = {};

      if (false) {}

      return _react.default.createElement("script", Object.assign({
        key: file,
        src: `${assetPrefix}/_next/${encodeURI(file)}${_devOnlyInvalidateCacheQueryString}`,
        nonce: this.props.nonce,
        async: true,
        crossOrigin: this.props.crossOrigin || undefined
      }, modernProps));
    });
  }

  getPolyfillScripts() {
    // polyfills.js has to be rendered as nomodule without async
    // It also has to be the first script to load
    const {
      assetPrefix,
      polyfillFiles
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    return polyfillFiles.filter(polyfill => polyfill.endsWith('.js') && !/\.module\.js$/.test(polyfill)).map(polyfill => _react.default.createElement("script", {
      key: polyfill,
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined,
      noModule: true,
      src: `${assetPrefix}/_next/${polyfill}${_devOnlyInvalidateCacheQueryString}`
    }));
  }

  static getInlineScriptSource(documentProps) {
    const {
      __NEXT_DATA__
    } = documentProps;

    try {
      const data = JSON.stringify(__NEXT_DATA__);
      return (0, _htmlescape.htmlEscapeJsonString)(data);
    } catch (err) {
      if (err.message.indexOf('circular structure')) {
        throw new Error(`Circular structure in "getInitialProps" result of page "${__NEXT_DATA__.page}". https://err.sh/zeit/next.js/circular-structure`);
      }

      throw err;
    }
  }

  render() {
    const {
      staticMarkup,
      assetPrefix,
      inAmpMode,
      devFiles,
      __NEXT_DATA__,
      bodyTags,
      unstable_runtimeJS
    } = this.context._documentProps;
    const disableRuntimeJS = unstable_runtimeJS === false;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;

    if (inAmpMode) {
      if (false) {}

      const devFiles = [_constants.CLIENT_STATIC_FILES_RUNTIME_AMP, _constants.CLIENT_STATIC_FILES_RUNTIME_WEBPACK];
      return _react.default.createElement(_react.default.Fragment, null, staticMarkup ? null : _react.default.createElement("script", {
        id: "__NEXT_DATA__",
        type: "application/json",
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined,
        dangerouslySetInnerHTML: {
          __html: NextScript.getInlineScriptSource(this.context._documentProps)
        },
        "data-ampdevmode": true
      }), devFiles ? devFiles.map(file => _react.default.createElement("script", {
        key: file,
        src: `${assetPrefix}/_next/${file}${_devOnlyInvalidateCacheQueryString}`,
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined,
        "data-ampdevmode": true
      })) : null, _react.default.createElement(_react.default.Fragment, {}, ...(bodyTags || [])));
    }

    const {
      page,
      buildId
    } = __NEXT_DATA__;

    if (true) {
      if (this.props.crossOrigin) console.warn('Warning: `NextScript` attribute `crossOrigin` is deprecated. https://err.sh/next.js/doc-crossorigin-deprecated');
    }

    const pageScript = [_react.default.createElement("script", Object.assign({
      async: true,
      "data-next-page": page,
      key: page,
      src: assetPrefix + encodeURI(`/_next/static/${buildId}/pages${getPageFile(page)}`) + _devOnlyInvalidateCacheQueryString,
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    },  false ? undefined : {})),  false && false];
    const appScript = [_react.default.createElement("script", Object.assign({
      async: true,
      "data-next-page": "/_app",
      src: assetPrefix + `/_next/static/${buildId}/pages/_app.js` + _devOnlyInvalidateCacheQueryString,
      key: "_app",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    },  false ? undefined : {})),  false && false];
    return _react.default.createElement(_react.default.Fragment, null, !disableRuntimeJS && devFiles ? devFiles.map(file => !file.match(/\.js\.map/) && _react.default.createElement("script", {
      key: file,
      src: `${assetPrefix}/_next/${encodeURI(file)}${_devOnlyInvalidateCacheQueryString}`,
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    })) : null, staticMarkup ? null : _react.default.createElement("script", {
      id: "__NEXT_DATA__",
      type: "application/json",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined,
      dangerouslySetInnerHTML: {
        __html: NextScript.getInlineScriptSource(this.context._documentProps)
      }
    }),  false ? undefined : null, !disableRuntimeJS && this.getPolyfillScripts(), !disableRuntimeJS && appScript, !disableRuntimeJS && page !== '/_error' && pageScript, disableRuntimeJS || staticMarkup ? null : this.getDynamicChunks(), disableRuntimeJS || staticMarkup ? null : this.getScripts(), _react.default.createElement(_react.default.Fragment, {}, ...(bodyTags || [])));
  }

}

exports.NextScript = NextScript;
NextScript.contextType = _documentContext.DocumentContext;
NextScript.propTypes = {
  nonce: _propTypes.default.string,
  crossOrigin: _propTypes.default.string
};
NextScript.safariNomoduleFix = '!function(){var e=document,t=e.createElement("script");if(!("noModule"in t)&&"onbeforeload"in t){var n=!1;e.addEventListener("beforeload",function(e){if(e.target===t)n=!0;else if(!e.target.hasAttribute("nomodule")||!n)return;e.preventDefault()},!0),t.type="module",t.src=".",e.head.appendChild(t),t.remove()}}();';

function getAmpPath(ampPath, asPath) {
  return ampPath ? ampPath : `${asPath}${asPath.includes('?') ? '&' : '?'}amp=1`;
}

function getPageFile(page, buildId) {
  if (page === '/') {
    return buildId ? `/index.${buildId}.js` : '/index.js';
  }

  return buildId ? `${page}.${buildId}.js` : `${page}.js`;
}

/***/ }),

/***/ "./node_modules/next/dist/server/htmlescape.js":
/*!*****************************************************!*\
  !*** ./node_modules/next/dist/server/htmlescape.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.htmlEscapeJsonString=htmlEscapeJsonString;// This utility is based on https://github.com/zertosh/htmlescape
// License: https://github.com/zertosh/htmlescape/blob/0527ca7156a524d256101bb310a9f970f63078ad/LICENSE
const ESCAPE_LOOKUP={'&':'\\u0026','>':'\\u003e','<':'\\u003c','\u2028':'\\u2028','\u2029':'\\u2029'};const ESCAPE_REGEX=/[&><\u2028\u2029]/g;function htmlEscapeJsonString(str){return str.replace(ESCAPE_REGEX,match=>ESCAPE_LOOKUP[match]);}

/***/ }),

/***/ "./node_modules/next/document.js":
/*!***************************************!*\
  !*** ./node_modules/next/document.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_document */ "./node_modules/next/dist/pages/_document.js")


/***/ }),

/***/ "./pages/_document.js":
/*!****************************!*\
  !*** ./pages/_document.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/document */ "./node_modules/next/document.js");
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/styles */ "@material-ui/styles");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var assets_fonts_BentonSans_Light_ttf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/fonts/BentonSans-Light.ttf */ "./assets/fonts/BentonSans-Light.ttf");
/* harmony import */ var assets_fonts_BentonSans_Book_ttf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/fonts/BentonSans-Book.ttf */ "./assets/fonts/BentonSans-Book.ttf");
/* harmony import */ var assets_fonts_BentonSans_Bold_ttf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/fonts/BentonSans-Bold.ttf */ "./assets/fonts/BentonSans-Bold.ttf");
var _jsxFileName = "/Users/gabrieldossantos/Google Drive (webmaster@wigoo.com.br)/Wigoo Desenvolvimento/justfit.com.br/clicoupersonal.com.br/checkout/pages/_document.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }








class MyDocument extends next_document__WEBPACK_IMPORTED_MODULE_2___default.a {
  render() {
    return __jsx("html", {
      lang: "en",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 7
      }
    }, __jsx(next_document__WEBPACK_IMPORTED_MODULE_2__["Head"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }
    }, __jsx("meta", {
      charSet: "utf-8",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3210652053", [assets_fonts_BentonSans_Light_ttf__WEBPACK_IMPORTED_MODULE_4__["default"], assets_fonts_BentonSans_Book_ttf__WEBPACK_IMPORTED_MODULE_5__["default"], assets_fonts_BentonSans_Bold_ttf__WEBPACK_IMPORTED_MODULE_6__["default"], assets_fonts_BentonSans_Bold_ttf__WEBPACK_IMPORTED_MODULE_6__["default"]]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 11
      }
    }), __jsx("meta", {
      name: "viewport",
      content: "width=device-width, initial-scale=1, shrink-to-fit=no",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3210652053", [assets_fonts_BentonSans_Light_ttf__WEBPACK_IMPORTED_MODULE_4__["default"], assets_fonts_BentonSans_Book_ttf__WEBPACK_IMPORTED_MODULE_5__["default"], assets_fonts_BentonSans_Bold_ttf__WEBPACK_IMPORTED_MODULE_6__["default"], assets_fonts_BentonSans_Bold_ttf__WEBPACK_IMPORTED_MODULE_6__["default"]]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 11
      }
    }), __jsx("meta", {
      name: "theme-color",
      content: "#000000",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3210652053", [assets_fonts_BentonSans_Light_ttf__WEBPACK_IMPORTED_MODULE_4__["default"], assets_fonts_BentonSans_Book_ttf__WEBPACK_IMPORTED_MODULE_5__["default"], assets_fonts_BentonSans_Bold_ttf__WEBPACK_IMPORTED_MODULE_6__["default"], assets_fonts_BentonSans_Bold_ttf__WEBPACK_IMPORTED_MODULE_6__["default"]]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 11
      }
    }), __jsx("link", {
      rel: "shortcut icon",
      href: __webpack_require__(/*! assets/img/favicon.png */ "./assets/img/favicon.png"),
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3210652053", [assets_fonts_BentonSans_Light_ttf__WEBPACK_IMPORTED_MODULE_4__["default"], assets_fonts_BentonSans_Book_ttf__WEBPACK_IMPORTED_MODULE_5__["default"], assets_fonts_BentonSans_Bold_ttf__WEBPACK_IMPORTED_MODULE_6__["default"], assets_fonts_BentonSans_Bold_ttf__WEBPACK_IMPORTED_MODULE_6__["default"]]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 11
      }
    }), __jsx("link", {
      rel: "apple-touch-icon",
      sizes: "76x76",
      href: __webpack_require__(/*! assets/img/apple-icon.png */ "./assets/img/apple-icon.png"),
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3210652053", [assets_fonts_BentonSans_Light_ttf__WEBPACK_IMPORTED_MODULE_4__["default"], assets_fonts_BentonSans_Book_ttf__WEBPACK_IMPORTED_MODULE_5__["default"], assets_fonts_BentonSans_Bold_ttf__WEBPACK_IMPORTED_MODULE_6__["default"], assets_fonts_BentonSans_Bold_ttf__WEBPACK_IMPORTED_MODULE_6__["default"]]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 11
      }
    }), __jsx("link", {
      rel: "stylesheet",
      type: "text/css",
      href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3210652053", [assets_fonts_BentonSans_Light_ttf__WEBPACK_IMPORTED_MODULE_4__["default"], assets_fonts_BentonSans_Book_ttf__WEBPACK_IMPORTED_MODULE_5__["default"], assets_fonts_BentonSans_Bold_ttf__WEBPACK_IMPORTED_MODULE_6__["default"], assets_fonts_BentonSans_Bold_ttf__WEBPACK_IMPORTED_MODULE_6__["default"]]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 11
      }
    }), __jsx("link", {
      href: "https://use.fontawesome.com/releases/v5.0.10/css/all.css",
      rel: "stylesheet",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3210652053", [assets_fonts_BentonSans_Light_ttf__WEBPACK_IMPORTED_MODULE_4__["default"], assets_fonts_BentonSans_Book_ttf__WEBPACK_IMPORTED_MODULE_5__["default"], assets_fonts_BentonSans_Bold_ttf__WEBPACK_IMPORTED_MODULE_6__["default"], assets_fonts_BentonSans_Bold_ttf__WEBPACK_IMPORTED_MODULE_6__["default"]]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 11
      }
    }), __jsx("style", {
      dangerouslySetInnerHTML: {
        __html: `
              @font-face {
                font-family: 'Benton Sans';
                src: url('https://clicoupersonal.com/fonts/BentonSans-Light.eot?#iefix') format('embedded-opentype'),  url('https://clicoupersonal.com/fonts/BentonSans-Light.otf')  format('opentype'), url('https://clicoupersonal.com/fonts/BentonSans-Light.woff') format('woff'), url('https://clicoupersonal.com/fonts/BentonSans-Light.ttf')  format('truetype'), url('https://clicoupersonal.com/fonts/BentonSans-Light.svg#BentonSans-Light') format('svg');
                font-weight: 300;
                font-style: normal;
              }
              @font-face {
                font-family: 'Benton Sans';
                src: url('https://clicoupersonal.com/fonts/BentonSans-Book.eot?#iefix') format('embedded-opentype'),  url('https://clicoupersonal.com/fonts/BentonSans-Book.otf')  format('opentype'), url('https://clicoupersonal.com/fonts/BentonSans-Book.woff') format('woff'), url('https://clicoupersonal.com/fonts/BentonSans-Book.ttf')  format('truetype'), url('https://clicoupersonal.com/fonts/BentonSans-Book.svg#BentonSans-Book') format('svg');
                font-weight: 500;
                font-style: normal;
              }            
              @font-face {
                font-family: 'Benton Sans';
                src: url('https://clicoupersonal.com/fonts/BentonSans-Bold.eot?#iefix') format('embedded-opentype'),  url('https://clicoupersonal.com/fonts/BentonSans-Bold.otf')  format('opentype'), url('https://clicoupersonal.com/fonts/BentonSans-Bold.woff') format('woff'), url('https://clicoupersonal.com/fonts/BentonSans-Bold.ttf')  format('truetype'), url('https://clicoupersonal.com/fonts/BentonSans-Bold.svg#BentonSans-Bold') format('svg');
                font-weight: 700;
                font-style: normal;
              }
              @font-face {
                font-family: 'Benton Sans';
                src: url('https://clicoupersonal.com/fonts/BentonSans-Bold.eot?#iefix') format('embedded-opentype'),  url('https://clicoupersonal.com/fonts/BentonSans-Bold.otf')  format('opentype'), url('https://clicoupersonal.com/fonts/BentonSans-Bold.woff') format('woff'), url('https://clicoupersonal.com/fonts/BentonSans-Bold.ttf')  format('truetype'), url('https://clicoupersonal.com/fonts/BentonSans-Bold.svg#BentonSans-Bold') format('svg');
                font-weight: 900;
                font-style: normal;
              }

          `
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 11
      }
    }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3210652053",
      dynamic: [assets_fonts_BentonSans_Light_ttf__WEBPACK_IMPORTED_MODULE_4__["default"], assets_fonts_BentonSans_Book_ttf__WEBPACK_IMPORTED_MODULE_5__["default"], assets_fonts_BentonSans_Bold_ttf__WEBPACK_IMPORTED_MODULE_6__["default"], assets_fonts_BentonSans_Bold_ttf__WEBPACK_IMPORTED_MODULE_6__["default"]],
      __self: this
    }, `@font-face{font-family:'Benton Sans';src:url(${assets_fonts_BentonSans_Light_ttf__WEBPACK_IMPORTED_MODULE_4__["default"]}) format('truetype');font-weight:300;font-style:normal;}@font-face{font-family:'Benton Sans';src:url(${assets_fonts_BentonSans_Book_ttf__WEBPACK_IMPORTED_MODULE_5__["default"]}) format('truetype');font-weight:500;font-style:normal;}@font-face{font-family:'Benton Sans';src:url(${assets_fonts_BentonSans_Bold_ttf__WEBPACK_IMPORTED_MODULE_6__["default"]}) format('truetype');font-weight:700;font-style:normal;}@font-face{font-family:'Benton Sans';src:url(${assets_fonts_BentonSans_Bold_ttf__WEBPACK_IMPORTED_MODULE_6__["default"]}) format('truetype');font-weight:900;font-style:normal;}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nYWJyaWVsZG9zc2FudG9zL0dvb2dsZSBEcml2ZSAod2VibWFzdGVyQHdpZ29vLmNvbS5icikvV2lnb28gRGVzZW52b2x2aW1lbnRvL2p1c3RmaXQuY29tLmJyL2NsaWNvdXBlcnNvbmFsLmNvbS5ici9jaGVja291dC9wYWdlcy9fZG9jdW1lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0VzQixBQUl5QyxBQU1BLEFBTUEsQUFNQSwwQkFqQitCLEFBTUEsQUFNQSxBQU1BLHlEQWpCekMsQUFNQSxBQU1BLEFBTUEsZ0JBakJFLEFBTUEsQUFNQSxBQU1BLGtCQWpCcEIsQUFNQSxBQU1BLEFBTUEiLCJmaWxlIjoiL1VzZXJzL2dhYnJpZWxkb3NzYW50b3MvR29vZ2xlIERyaXZlICh3ZWJtYXN0ZXJAd2lnb28uY29tLmJyKS9XaWdvbyBEZXNlbnZvbHZpbWVudG8vanVzdGZpdC5jb20uYnIvY2xpY291cGVyc29uYWwuY29tLmJyL2NoZWNrb3V0L3BhZ2VzL19kb2N1bWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBEb2N1bWVudCwgeyBIZWFkLCBNYWluLCBOZXh0U2NyaXB0IH0gZnJvbSBcIm5leHQvZG9jdW1lbnRcIjtcbmltcG9ydCB7IFNlcnZlclN0eWxlU2hlZXRzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9zdHlsZXNcIjtcblxuXG5pbXBvcnQgQmVudG9uU2Fuc0xpZ2h0IGZyb20gXCJhc3NldHMvZm9udHMvQmVudG9uU2Fucy1MaWdodC50dGZcIjtcbmltcG9ydCBCZW50b25TYW5zQm9vayBmcm9tIFwiYXNzZXRzL2ZvbnRzL0JlbnRvblNhbnMtQm9vay50dGZcIjtcbmltcG9ydCBCZW50b25TYW5zQm9sZCBmcm9tIFwiYXNzZXRzL2ZvbnRzL0JlbnRvblNhbnMtQm9sZC50dGZcIjtcblxuXG5cbmNsYXNzIE15RG9jdW1lbnQgZXh0ZW5kcyBEb2N1bWVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGh0bWwgbGFuZz1cImVuXCI+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICAgICAgPG1ldGFcbiAgICAgICAgICAgIG5hbWU9XCJ2aWV3cG9ydFwiXG4gICAgICAgICAgICBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEsIHNocmluay10by1maXQ9bm9cIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cInRoZW1lLWNvbG9yXCIgY29udGVudD1cIiMwMDAwMDBcIiAvPlxuICAgICAgICAgIDxsaW5rIHJlbD1cInNob3J0Y3V0IGljb25cIiBocmVmPXtyZXF1aXJlKFwiYXNzZXRzL2ltZy9mYXZpY29uLnBuZ1wiKX0gLz5cbiAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiXG4gICAgICAgICAgICBzaXplcz1cIjc2eDc2XCJcbiAgICAgICAgICAgIGhyZWY9e3JlcXVpcmUoXCJhc3NldHMvaW1nL2FwcGxlLWljb24ucG5nXCIpfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgey8qIEZvbnRzIGFuZCBpY29ucyAqL31cbiAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgICB0eXBlPVwidGV4dC9jc3NcIlxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG86MzAwLDQwMCw1MDAsNzAwfFJvYm90bytTbGFiOjQwMCw3MDB8TWF0ZXJpYWwrSWNvbnNcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3VzZS5mb250YXdlc29tZS5jb20vcmVsZWFzZXMvdjUuMC4xMC9jc3MvYWxsLmNzc1wiXG4gICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICAvPlxuICAgICAgICAgICAgXG5cbiAgICAgICAgICA8c3R5bGUgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IGBcbiAgICAgICAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdCZW50b24gU2Fucyc7XG4gICAgICAgICAgICAgICAgc3JjOiB1cmwoJ2h0dHBzOi8vY2xpY291cGVyc29uYWwuY29tL2ZvbnRzL0JlbnRvblNhbnMtTGlnaHQuZW90PyNpZWZpeCcpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSwgIHVybCgnaHR0cHM6Ly9jbGljb3VwZXJzb25hbC5jb20vZm9udHMvQmVudG9uU2Fucy1MaWdodC5vdGYnKSAgZm9ybWF0KCdvcGVudHlwZScpLCB1cmwoJ2h0dHBzOi8vY2xpY291cGVyc29uYWwuY29tL2ZvbnRzL0JlbnRvblNhbnMtTGlnaHQud29mZicpIGZvcm1hdCgnd29mZicpLCB1cmwoJ2h0dHBzOi8vY2xpY291cGVyc29uYWwuY29tL2ZvbnRzL0JlbnRvblNhbnMtTGlnaHQudHRmJykgIGZvcm1hdCgndHJ1ZXR5cGUnKSwgdXJsKCdodHRwczovL2NsaWNvdXBlcnNvbmFsLmNvbS9mb250cy9CZW50b25TYW5zLUxpZ2h0LnN2ZyNCZW50b25TYW5zLUxpZ2h0JykgZm9ybWF0KCdzdmcnKTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0JlbnRvbiBTYW5zJztcbiAgICAgICAgICAgICAgICBzcmM6IHVybCgnaHR0cHM6Ly9jbGljb3VwZXJzb25hbC5jb20vZm9udHMvQmVudG9uU2Fucy1Cb29rLmVvdD8jaWVmaXgnKSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksICB1cmwoJ2h0dHBzOi8vY2xpY291cGVyc29uYWwuY29tL2ZvbnRzL0JlbnRvblNhbnMtQm9vay5vdGYnKSAgZm9ybWF0KCdvcGVudHlwZScpLCB1cmwoJ2h0dHBzOi8vY2xpY291cGVyc29uYWwuY29tL2ZvbnRzL0JlbnRvblNhbnMtQm9vay53b2ZmJykgZm9ybWF0KCd3b2ZmJyksIHVybCgnaHR0cHM6Ly9jbGljb3VwZXJzb25hbC5jb20vZm9udHMvQmVudG9uU2Fucy1Cb29rLnR0ZicpICBmb3JtYXQoJ3RydWV0eXBlJyksIHVybCgnaHR0cHM6Ly9jbGljb3VwZXJzb25hbC5jb20vZm9udHMvQmVudG9uU2Fucy1Cb29rLnN2ZyNCZW50b25TYW5zLUJvb2snKSBmb3JtYXQoJ3N2ZycpO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgICAgICB9ICAgICAgICAgICAgXG4gICAgICAgICAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQmVudG9uIFNhbnMnO1xuICAgICAgICAgICAgICAgIHNyYzogdXJsKCdodHRwczovL2NsaWNvdXBlcnNvbmFsLmNvbS9mb250cy9CZW50b25TYW5zLUJvbGQuZW90PyNpZWZpeCcpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSwgIHVybCgnaHR0cHM6Ly9jbGljb3VwZXJzb25hbC5jb20vZm9udHMvQmVudG9uU2Fucy1Cb2xkLm90ZicpICBmb3JtYXQoJ29wZW50eXBlJyksIHVybCgnaHR0cHM6Ly9jbGljb3VwZXJzb25hbC5jb20vZm9udHMvQmVudG9uU2Fucy1Cb2xkLndvZmYnKSBmb3JtYXQoJ3dvZmYnKSwgdXJsKCdodHRwczovL2NsaWNvdXBlcnNvbmFsLmNvbS9mb250cy9CZW50b25TYW5zLUJvbGQudHRmJykgIGZvcm1hdCgndHJ1ZXR5cGUnKSwgdXJsKCdodHRwczovL2NsaWNvdXBlcnNvbmFsLmNvbS9mb250cy9CZW50b25TYW5zLUJvbGQuc3ZnI0JlbnRvblNhbnMtQm9sZCcpIGZvcm1hdCgnc3ZnJyk7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdCZW50b24gU2Fucyc7XG4gICAgICAgICAgICAgICAgc3JjOiB1cmwoJ2h0dHBzOi8vY2xpY291cGVyc29uYWwuY29tL2ZvbnRzL0JlbnRvblNhbnMtQm9sZC5lb3Q/I2llZml4JykgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLCAgdXJsKCdodHRwczovL2NsaWNvdXBlcnNvbmFsLmNvbS9mb250cy9CZW50b25TYW5zLUJvbGQub3RmJykgIGZvcm1hdCgnb3BlbnR5cGUnKSwgdXJsKCdodHRwczovL2NsaWNvdXBlcnNvbmFsLmNvbS9mb250cy9CZW50b25TYW5zLUJvbGQud29mZicpIGZvcm1hdCgnd29mZicpLCB1cmwoJ2h0dHBzOi8vY2xpY291cGVyc29uYWwuY29tL2ZvbnRzL0JlbnRvblNhbnMtQm9sZC50dGYnKSAgZm9ybWF0KCd0cnVldHlwZScpLCB1cmwoJ2h0dHBzOi8vY2xpY291cGVyc29uYWwuY29tL2ZvbnRzL0JlbnRvblNhbnMtQm9sZC5zdmcjQmVudG9uU2Fucy1Cb2xkJykgZm9ybWF0KCdzdmcnKTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogOTAwO1xuICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgYH19Pjwvc3R5bGU+XG5cbiAgICAgICAgICA8c3R5bGUganN4PntgXG5cbiAgICAgICAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0JlbnRvbiBTYW5zJztcbiAgICAgICAgICAgICAgc3JjOiB1cmwoJHtCZW50b25TYW5zTGlnaHR9KSBmb3JtYXQoJ3RydWV0eXBlJyk7ICBcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQmVudG9uIFNhbnMnO1xuICAgICAgICAgICAgICBzcmM6IHVybCgke0JlbnRvblNhbnNCb29rfSkgZm9ybWF0KCd0cnVldHlwZScpOyAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICAgIH0gICAgICAgICAgICBcbiAgICAgICAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0JlbnRvbiBTYW5zJztcbiAgICAgICAgICAgICAgc3JjOiB1cmwoJHtCZW50b25TYW5zQm9sZH0pIGZvcm1hdCgndHJ1ZXR5cGUnKTtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQmVudG9uIFNhbnMnO1xuICAgICAgICAgICAgICBzcmM6IHVybCgke0JlbnRvblNhbnNCb2xkfSkgZm9ybWF0KCd0cnVldHlwZScpO1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogOTAwO1xuICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgIGB9XG4gICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICBcblxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxib2R5PlxuXG4gICAgICAgICAgPGRpdiBpZD1cInBhZ2UtdHJhbnNpdGlvblwiPjwvZGl2PlxuICAgICAgICAgIDxNYWluIC8+XG4gICAgICAgICAgPE5leHRTY3JpcHQgLz5cbiAgICAgICAgPC9ib2R5PlxuICAgICAgPC9odG1sPlxuICAgICk7XG4gIH1cbn1cblxuTXlEb2N1bWVudC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBjdHggPT4ge1xuICAvLyBSZXNvbHV0aW9uIG9yZGVyXG4gIC8vXG4gIC8vIE9uIHRoZSBzZXJ2ZXI6XG4gIC8vIDEuIGFwcC5nZXRJbml0aWFsUHJvcHNcbiAgLy8gMi4gcGFnZS5nZXRJbml0aWFsUHJvcHNcbiAgLy8gMy4gZG9jdW1lbnQuZ2V0SW5pdGlhbFByb3BzXG4gIC8vIDQuIGFwcC5yZW5kZXJcbiAgLy8gNS4gcGFnZS5yZW5kZXJcbiAgLy8gNi4gZG9jdW1lbnQucmVuZGVyXG4gIC8vXG4gIC8vIE9uIHRoZSBzZXJ2ZXIgd2l0aCBlcnJvcjpcbiAgLy8gMS4gZG9jdW1lbnQuZ2V0SW5pdGlhbFByb3BzXG4gIC8vIDIuIGFwcC5yZW5kZXJcbiAgLy8gMy4gcGFnZS5yZW5kZXJcbiAgLy8gNC4gZG9jdW1lbnQucmVuZGVyXG4gIC8vXG4gIC8vIE9uIHRoZSBjbGllbnRcbiAgLy8gMS4gYXBwLmdldEluaXRpYWxQcm9wc1xuICAvLyAyLiBwYWdlLmdldEluaXRpYWxQcm9wc1xuICAvLyAzLiBhcHAucmVuZGVyXG4gIC8vIDQuIHBhZ2UucmVuZGVyXG5cbiAgLy8gUmVuZGVyIGFwcCBhbmQgcGFnZSBhbmQgZ2V0IHRoZSBjb250ZXh0IG9mIHRoZSBwYWdlIHdpdGggY29sbGVjdGVkIHNpZGUgZWZmZWN0cy5cbiAgY29uc3Qgc2hlZXRzID0gbmV3IFNlcnZlclN0eWxlU2hlZXRzKCk7XG4gIGNvbnN0IG9yaWdpbmFsUmVuZGVyUGFnZSA9IGN0eC5yZW5kZXJQYWdlO1xuXG4gIGN0eC5yZW5kZXJQYWdlID0gKCkgPT5cbiAgICBvcmlnaW5hbFJlbmRlclBhZ2Uoe1xuICAgICAgZW5oYW5jZUFwcDogQXBwID0+IHByb3BzID0+IHNoZWV0cy5jb2xsZWN0KDxBcHAgey4uLnByb3BzfSAvPilcbiAgICB9KTtcblxuICBjb25zdCBpbml0aWFsUHJvcHMgPSBhd2FpdCBEb2N1bWVudC5nZXRJbml0aWFsUHJvcHMoY3R4KTtcblxuICByZXR1cm4ge1xuICAgIC4uLmluaXRpYWxQcm9wcyxcbiAgICAvLyBTdHlsZXMgZnJhZ21lbnQgaXMgcmVuZGVyZWQgYWZ0ZXIgdGhlIGFwcCBhbmQgcGFnZSByZW5kZXJpbmcgZmluaXNoLlxuICAgIHN0eWxlczogW1xuICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT1cInN0eWxlc1wiPlxuICAgICAgICB7aW5pdGlhbFByb3BzLnN0eWxlc31cbiAgICAgICAge3NoZWV0cy5nZXRTdHlsZUVsZW1lbnQoKX1cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgXVxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTXlEb2N1bWVudDtcbiJdfQ== */
/*@ sourceURL=/Users/gabrieldossantos/Google Drive (webmaster@wigoo.com.br)/Wigoo Desenvolvimento/justfit.com.br/clicoupersonal.com.br/checkout/pages/_document.js */`)), __jsx("body", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 9
      }
    }, __jsx("div", {
      id: "page-transition",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 11
      }
    }), __jsx(next_document__WEBPACK_IMPORTED_MODULE_2__["Main"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 11
      }
    }), __jsx(next_document__WEBPACK_IMPORTED_MODULE_2__["NextScript"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 11
      }
    })));
  }

}

MyDocument.getInitialProps = async ctx => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render
  // Render app and page and get the context of the page with collected side effects.
  const sheets = new _material_ui_styles__WEBPACK_IMPORTED_MODULE_3__["ServerStyleSheets"]();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () => originalRenderPage({
    enhanceApp: App => props => sheets.collect(__jsx(App, _extends({}, props, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 50
      }
    })))
  });

  const initialProps = await next_document__WEBPACK_IMPORTED_MODULE_2___default.a.getInitialProps(ctx);
  return _objectSpread({}, initialProps, {
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [__jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
      key: "styles",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 7
      }
    }, initialProps.styles, sheets.getStyleElement())]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (MyDocument);

/***/ }),

/***/ 1:
/*!*********************************************!*\
  !*** multi private-next-pages/_document.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_document.js */"./pages/_document.js");


/***/ }),

/***/ "@material-ui/styles":
/*!**************************************!*\
  !*** external "@material-ui/styles" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/styles");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/server":
/*!************************************!*\
  !*** external "styled-jsx/server" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/server");

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
//# sourceMappingURL=_document.js.map