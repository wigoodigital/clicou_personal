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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+1zY":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Store");

/***/ }),

/***/ "+JH3":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ViewCarousel");

/***/ }),

/***/ "/KvV":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAAAoCAYAAABEklK7AAAFa0lEQVRoge1aW0wUVxj+ZnZgF91dAWVBQVBWV12xVmlpWryUiMYS7cVG2/Ri28Sk8cE0jfahLbZNmnqJiT7UeIsa06bp5aGNVVsbFcQbxGhQWGgElkuxu8hllcsu7u7MnObMjAN0VFho1Nn6veyc8/97+L/9L+c/Z2AIIewzW4tmX/QFNkEU54HADL2DQQdrMBx/KSP+k5/X5jYz2V8dz77c3luEXt4KXgCI7ikCDAPEGIBRse43HAnzDN45Kw+gK5gFQdTo6hqUT4hPrOzsBYdAaB5INLjvLgjygMDncggLFq1U5xBFIKykHiFWLipysD8ouQGpR8BplPQKmnIhAXdLveggSXcF/t6FU98k7+O9/tAvSUEpLkMAF59iufiQzY0IIgHpCvEE4iDuUzDOyN5ggsFglG6SMsLhcBWrmY1CPCYZLYiourK13wHeEpCQTxozrAlwrIaYtkTV2Vlch+3nG6XnzxdNhSmGxepfXNJ43zIn3nk2A4JIsO9cA3acb0BT8015C7DG4dP5dny2bIa61p4z9fjwZA0tNpg1xohLG/I0Ng0FEZEUp74JJnMVbruPILZ2NwxCE1BzCFBIUlvXF9UCbT0Ay2DRNBu2n6oFOnokeWp8nPT5+oGL+PXyXwMX7+xFW0+wbxgI4YNvL9GThDSuBNDaHYTNYtTYNRgi3ieJIQZGxwrM/V5AUc5vSOypBhF6wRjiUNbQIRMEsGTWBKQlxsF1o1v97rRkC0pq21WCXLIVB5c7MSqWQ3nzTTjHW1XdvWcbVIJ3UFbfgRdnT9DY9J+TVA1Oz0DyscVoX8bD0ukGErNwsLRJla9baJc+S7xd8oSRw8TEOByt9Ko6uUlmrJiTihgDi+VPjFfnaURspBFBMTEBoCENoHSYJIddeJZOTwb4GOSeW4Lutjrc5gV8c6lZFo4zI3+GDQHakfhkz2amyF7KzkhQ1yip9MBc+DsOX/EMWPuPqhagRf5x9hTMAMbIYV5MI2UYGDbJfEoSwLV2E364ZpIN7Q1Jc1/Ot4NlGFyjhiqtxtOpMsmcSQnY9OpsgPbTwTDg6cSqHaex7qer6tpbTtXID0YOK7PTkJOZKA3L6x8wydQEE4w2+bz9xRUW+8uUUGVZvPvcJOnxT0+Pqj/T1pdv6xc7UFqYj+nOvhDdd6wKFddvobHdj9Lyv6W55TnpMBs5LJg0VlbqDsLd5tfYMhhG1KC/7UzG/tZutLd04YySe688lQabJVZ6rmrpVHWdE6wDvjs3PQFXPsrD3G3FqK6S87SmtQfn3B3qqeJIWROMl6/LRykFZfU+2JNGa2y5H0bUDCxWQlbayBTD1s63q3JXS//KasaJ6hvI3nYaXxfX4WiFF7tK3Khu8qk6M1Os2F1S1/cHaE4HQvJxSkFpY+QhOyJPPu+wydd/CkFzihULp45T5Sc9XfIPIBLYk8w4fNULl8uDDS6PZq01BU6UNvikkKR4eYEd7+dOVuUv7L0A+AI44X7AJONHccjLGo9ijxyqW/Idqox2NXyYBywmZKVYYWAZTEkaDduUJLR6OwF/SLobzZg8FhvzHXgrJx0Fu85LlZmicOl0zEodo6732pOp+LHCi8Z+DcNQ8fioFS34f5xChPLCC5rZCMEQnhAhLMo7/KMFnphame49I7xeppdlQ7tPeijgCaqGX12JQk4H74mGR/IR996/ERlJHXmvP4ZOUgQIr5nVBTjakdHO7H6QyOn4HS3LC7h3n0S9F9I3wbCA26w/BJdGAjn39Bqed0B94w+hghVM2HwrACLe2S2J4j0dVc+7gSfATT+6CIOt9F9cuMadzHu8H5s5YOwg6akL0BdegogalsUa+8fk7D+ofyi+vO+H5QAAAABJRU5ErkJggg=="

/***/ }),

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "/pBY":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAAAoCAYAAABEklK7AAAE60lEQVRogd2abWwURRjH/zt3t3e99mjvoPSFWASllqSptWlBqCFNaoQQW6KRiCY0xMQPJmg1gh8UkxokMSZ+kAgJxhRrJfEFLV80GhRJm4qpL0SKibSmtLbSlvZajnvdvd0Zs9ve9WUOere9Fu5+yeZmn5nZnf89+zwzt3NCR0cHKioqKgkh7wGoBGBH6hMEcJFSesBut18QPB7PJovFco5SmskYSwN9UwiCAEJIQJbl7YLf7/+JUlrDtUoTCCGdgs/n8zLGstJVJADZnM4Cp8NPJFxNmjA7v5jTWVyEtPJkLIFIF08uNPUtWmTXUBDnBwJQYtzo+XIncrNMetny9wAsZ7vAZJVrF35yG5R1hXp5OPQvuiY6ILMQ126zswZF9vvm2OKZ2xcl8qXvhnGyc5yzR6jb4NBFZrx7CvTwh1BBuTb6IErX6SK/H23Da30N8N9i3B+Jn0VFJrJwMSzyq7+8txUYwXrhMujhE9qwuLrZDAav3lbgbBJdmRlOPK2Xb3C2WJja2hcUqPHzxLkFBWrijCw9DXuyx8fHVkxGJmNZOQLKTc4WIQxgQgVUFuc952FYpMxix1eymWRAjFy1PCKXGt172veYhO8yqSJ3V62Mlr/81R0tC8gEqa0CytaCZWdBkGRgyA3W+Q9oX7fe5gFHGfbnv6qXKVOhUAWUUQyF+tHi+TaesL4lSRXZXF/IiVQbHoN8/BWwLDtIUIKl8xKEoAz1iW0IH78XNsdOvd1WV61+DAb7EFD8WCXmwSXm6nV118/gqSsN3P3uiMhYSI9W6VbTf2MQS/aD4pruFC2t253FUBGCMN1Py5xNVxrxxc3zIAS4vmUcIhFRlfNIjCvHz7LFpLX5G6i4NsemTvbon4zS6NRQv3oPKrOrkW8t0AUqNIzWoWPc9RJh+RLPhJczASoYAhDUmezyUM7DKFHLYDPZwcDgCU9ghTmH65kIhhcDojCva5YlWhyLMYfSHZvmWWQw+Ll2b/W8jMqLW1H6Wzkuebqw0pqHfUWNeM5Zz7WNF8OebN9zD051e/BDvw8hCjRVr4rWnfhjZgEg+INgmRkIbd8M2ydHQFrOgo17IWxcA+XZWpD6N+ckzsjjaiMZKHGUR+03FDeMYljkj1f92JhrwY4NeXBZzQipFO39fpz804PTv88MKKPxA8BmgbqrGsqD66E2HwSRwhBG3DB394FhaqXjlkbhDo+hxFGmHxoDgV79cW0b+RRfezuxFy9w44gHwyLf+GUcowP848Yhy1A/PwO0tIJAnhMfkUjUsuvp4Y9xcPAI1z0ZLH3iUSgYfMlZuhhk6V5/MG3lArBQ+I4KxJJ5UtMUpnBYuJqYMEd8OxNkfkaPk+R7Upn+2eAwY61T5Kp57AiX3c9ZOQREE1KiJE+kNg/IVI9BbUDHHl8DInCtOEyHXgTNWfj99tuFB1BgK+Ls8WD4cS11WDDqsk6dqGxKnEa2iNaaXOwqcUydF7pAsJ7rL5hcYEefRmDvdv18hcWJLRm8iNWmQuzO34e6gme4ungRvF7vorayUmEnzLAnU2mbz1BMpto+ZkKeTNVNWhLvwFN5F5ooihLmrPNIZYGKojDi9/t7uJppjL7MvZvw+Xy9RJKkoz6fjxOTDn+S0HRJkvS+wBgTent7D5lMptdFUbTdBWNbNJqDJEmSKKXvFBcXN/0PovD+9wSWSpQAAAAASUVORK5CYII="

/***/ }),

/***/ "/sfI":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/List");

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) { var name; }

  return WithRouterWrapper;
}

/***/ }),

/***/ "0Jp5":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogTitle");

/***/ }),

/***/ "0LMq":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/List");

/***/ }),

/***/ "0RKy":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "1gBk":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogActions");

/***/ }),

/***/ "1imS":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CircularProgress");

/***/ }),

/***/ "2weN":
/***/ (function(module, exports) {

module.exports = "/checkout/_next/static/images/city-58a713c73886bac25ac6aedcbb13de5a.jpg";

/***/ }),

/***/ "2zww":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ CardHeader; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: ./assets/jss/nextjs-material-kit-pro.js
var nextjs_material_kit_pro = __webpack_require__("36KI");

// CONCATENATED MODULE: ./assets/jss/nextjs-material-kit-pro/components/cardHeaderStyle.js

const cardHeaderStyle = {
  cardHeader: {
    borderRadius: "3px",
    padding: "1rem 15px",
    marginLeft: "15px",
    marginRight: "15px",
    marginTop: "-30px",
    border: "0",
    marginBottom: "0"
  },
  cardHeaderPlain: {
    marginLeft: "0px",
    marginRight: "0px",
    "&$cardHeaderImage": {
      margin: "0 !important"
    }
  },
  cardHeaderImage: {
    position: "relative",
    padding: "0",
    zIndex: "1",
    marginLeft: "15px",
    marginRight: "15px",
    marginTop: "-30px",
    borderRadius: "6px",
    "& img": {
      width: "100%",
      borderRadius: "6px",
      pointerEvents: "none",
      boxShadow: "0 5px 15px -8px rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.24), 0 8px 10px -5px rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.2)"
    },
    "& a": {
      display: "block"
    }
  },
  noShadow: {
    "& img": {
      boxShadow: "none !important"
    }
  },
  cardHeaderContact: {
    margin: "0 15px",
    marginTop: "-20px"
  },
  cardHeaderSignup: {
    marginLeft: "20px",
    marginRight: "20px",
    marginTop: "-40px",
    padding: "20px 0",
    width: "100%",
    marginBottom: "15px"
  },
  warningCardHeader: nextjs_material_kit_pro["S" /* warningCardHeader */],
  successCardHeader: nextjs_material_kit_pro["L" /* successCardHeader */],
  dangerCardHeader: nextjs_material_kit_pro["i" /* dangerCardHeader */],
  infoCardHeader: nextjs_material_kit_pro["t" /* infoCardHeader */],
  primaryCardHeader: nextjs_material_kit_pro["B" /* primaryCardHeader */],
  roseCardHeader: nextjs_material_kit_pro["F" /* roseCardHeader */]
};
/* harmony default export */ var components_cardHeaderStyle = (cardHeaderStyle);
// CONCATENATED MODULE: ./components/Card/CardHeader.js
var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

 // nodejs library that concatenates classes

 // nodejs library to set properties for components

// @material-ui/core components
 // @material-ui/icons
// core components


const useStyles = Object(styles_["makeStyles"])(components_cardHeaderStyle);
function CardHeader(props) {
  const {
    className,
    children,
    color,
    plain,
    image,
    contact,
    signup,
    noShadow
  } = props,
        rest = _objectWithoutProperties(props, ["className", "children", "color", "plain", "image", "contact", "signup", "noShadow"]);

  const classes = useStyles();
  const cardHeaderClasses = external_classnames_default()({
    [classes.cardHeader]: true,
    [classes[color + "CardHeader"]]: color,
    [classes.cardHeaderPlain]: plain,
    [classes.cardHeaderImage]: image,
    [classes.cardHeaderContact]: contact,
    [classes.cardHeaderSignup]: signup,
    [classes.noShadow]: noShadow,
    [className]: className !== undefined
  });
  return __jsx("div", _extends({
    className: cardHeaderClasses
  }, rest), children);
}

/***/ }),

/***/ "31Yn":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ClickAwayListener");

/***/ }),

/***/ "36KI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return drawerWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "O", function() { return transition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return container; });
/* unused harmony export containerFluid */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return boxShadow; });
/* unused harmony export card */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return defaultFont; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return primaryColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return secondaryColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T", function() { return warningColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return dangerColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "M", function() { return successColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return infoColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return roseColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return grayColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "U", function() { return whiteColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return blackColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Q", function() { return twitterColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return facebookColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return googleColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return linkedinColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return pinterestColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "V", function() { return youtubeColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return tumblrColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return behanceColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return dribbbleColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return redditColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return instagramColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return primaryBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return infoBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "K", function() { return successBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "R", function() { return warningBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return dangerBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return roseBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return warningCardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "L", function() { return successCardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return dangerCardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return infoCardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return primaryCardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return roseCardHeader; });
/* unused harmony export cardActions */
/* unused harmony export cardHeader */
/* unused harmony export defaultBoxShadow */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "N", function() { return title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return cardTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return description; });
/* unused harmony export cardLink */
/* unused harmony export cardSubtitle */
/* unused harmony export main */
/* unused harmony export mainRaised */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return section; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return sectionDark; });
/* unused harmony export sectionDescription */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return mlAuto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return mrAuto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return btnLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return coloredShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return hexToRgb; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*!

=========================================================
* NextJS Material Kit PRO v1.1.0 based on Material Kit PRO - v2.0.2 (Bootstrap 4.0.0 Final Edition) and Material Kit PRO React v1.8.0
=========================================================

* Product Page: https://www.creative-tim.com/product/nextjs-material-kit-pro
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// ##############################
// // // Function that converts from hex color to rgb color
// // // Example: input = #9c27b0 => output = 156, 39, 176
// // // Example: input = 9c27b0 => output = 156, 39, 176
// // // Example: input = #999 => output = 153, 153, 153
// // // Example: input = 999 => output = 153, 153, 153
// #############################
const hexToRgb = input => {
  input = input + "";
  input = input.replace("#", "");
  let hexRegex = /[0-9A-Fa-f]/g;

  if (!hexRegex.test(input) || input.length !== 3 && input.length !== 6) {
    throw new Error("input is not a valid hex color.");
  }

  if (input.length === 3) {
    let first = input[0];
    let second = input[1];
    let last = input[2];
    input = first + first + second + second + last + last;
  }

  input = input.toUpperCase(input);
  let first = input[0] + input[1];
  let second = input[2] + input[3];
  let last = input[4] + input[5];
  return parseInt(first, 16) + ", " + parseInt(second, 16) + ", " + parseInt(last, 16);
}; // ##############################
// // // Variables - Styles that are used on more than one component
// #############################


const drawerWidth = 260;
const primaryColor = ["#425CC7", "#425cc7", "#425cc7", "#425cc7", "#425cc7", "#425cc7"];
const secondaryColor = ["#3BBFAD"];
const warningColor = ["#ff9800", "#ffa726", "#fb8c00", "#ffa21a", "#fcf8e3", "#faf2cc", "#ffe0b2", "#ffb74d"];
const dangerColor = ["#f44336", "#ef5350", "#e53935", "#f55a4e", "#f2dede", "#ebcccc", "ef9a9a", "#ef5350"];
const successColor = ["#4caf50", "#66bb6a", "#43a047", "#5cb860", "#dff0d8", "#d0e9c6", "#a5d6a7", "#66bb6a"];
const infoColor = ["#00acc1", "#26c6da", "#00acc1", "#00d3ee", "#d9edf7", "#c4e3f3", "#b2ebf2", "#4dd0e1"];
const roseColor = ["#e91e63", "#ec407a", "#d81b60", "#f8bbd0", "#f06292"];
const grayColor = ["#999", "#3C4858", "#eee", "#343434", "#585858", "#272727", "#ddd", "#6c757d", "#333", "#212121", "#777", "#D2D2D2", "#676767", "#495057", "#e5e5e5", "#555", "#f9f9f9", "#ccc", "#444", "#f2f2f2", "#89229b", "#c0c1c2", "#9a9a9a", "#f7f7f7", "#505050", "#1f1f1f"];
const whiteColor = "#FFF";
const blackColor = "#000";
const twitterColor = "#55acee";
const facebookColor = "#3b5998";
const googleColor = "#dd4b39";
const linkedinColor = "#0976b4";
const pinterestColor = "#cc2127";
const youtubeColor = "#e52d27";
const tumblrColor = "#35465c";
const behanceColor = "#1769ff";
const dribbbleColor = "#ea4c89";
const redditColor = "#ff4500";
const instagramColor = "#125688";
const transition = {
  transition: "all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)"
};
const containerFluid = {
  paddingRight: "15px",
  paddingLeft: "15px",
  marginRight: "auto",
  marginLeft: "auto",
  width: "100%"
};

const container = _objectSpread({}, containerFluid, {
  "@media (min-width: 576px)": {
    maxWidth: "540px"
  },
  "@media (min-width: 768px)": {
    maxWidth: "720px"
  },
  "@media (min-width: 992px)": {
    maxWidth: "960px"
  },
  "@media (min-width: 1200px)": {
    maxWidth: "1140px"
  }
});

const card = {
  display: "inline-block",
  position: "relative",
  width: "100%",
  margin: "25px 0",
  boxShadow: "0 1px 4px 0 rgba(" + hexToRgb(blackColor) + ", 0.14)",
  borderRadius: "3px",
  color: "rgba(" + hexToRgb(blackColor) + ", 0.87)",
  background: whiteColor
};
const defaultFont = {
  fontFamily: '"Benton Sans", "Helvetica", "Arial", sans-serif !important',
  fontWeight: "300",
  lineHeight: "1.5em"
};
const boxShadow = {
  boxShadow: "0 10px 30px -12px rgba(" + hexToRgb(blackColor) + ", 0.42), 0 4px 25px 0px rgba(" + hexToRgb(blackColor) + ", 0.12), 0 8px 10px -5px rgba(" + hexToRgb(blackColor) + ", 0.2)"
};
const primaryBoxShadow = {
  boxShadow: "0 12px 20px -10px rgba(" + hexToRgb(primaryColor[0]) + ", 0.28), 0 4px 20px 0px rgba(" + hexToRgb(blackColor) + ", 0.12), 0 7px 8px -5px rgba(" + hexToRgb(primaryColor[0]) + ", 0.2)"
};
const infoBoxShadow = {
  boxShadow: "0 12px 20px -10px rgba(" + hexToRgb(grayColor[5]) + ", 0.28), 0 4px 20px 0px rgba(" + hexToRgb(blackColor) + ", 0.12), 0 7px 8px -5px rgba(" + hexToRgb(grayColor[5]) + ", 0.2)"
};
const successBoxShadow = {
  boxShadow: "0 12px 20px -10px rgba(" + hexToRgb(successColor[0]) + ", 0.28), 0 4px 20px 0px rgba(" + hexToRgb(blackColor) + ", 0.12), 0 7px 8px -5px rgba(" + hexToRgb(successColor[0]) + ", 0.2)"
};
const warningBoxShadow = {
  boxShadow: "0 12px 20px -10px rgba(" + hexToRgb(warningColor[0]) + ", 0.28), 0 4px 20px 0px rgba(" + hexToRgb(blackColor) + ", 0.12), 0 7px 8px -5px rgba(" + hexToRgb(warningColor[0]) + ", 0.2)"
};
const dangerBoxShadow = {
  boxShadow: "0 12px 20px -10px rgba(" + hexToRgb(dangerColor[0]) + ", 0.28), 0 4px 20px 0px rgba(" + hexToRgb(blackColor) + ", 0.12), 0 7px 8px -5px rgba(" + hexToRgb(dangerColor[0]) + ", 0.2)"
};
const roseBoxShadow = {
  boxShadow: "0 4px 20px 0px rgba(" + hexToRgb(blackColor) + ", 0.14), 0 7px 10px -5px rgba(" + hexToRgb(roseColor[0]) + ", 0.4)"
};

const warningCardHeader = _objectSpread({
  color: whiteColor,
  background: "linear-gradient(60deg, " + warningColor[1] + ", " + warningColor[2] + ")"
}, warningBoxShadow);

const successCardHeader = _objectSpread({
  color: whiteColor,
  background: "linear-gradient(60deg, " + successColor[1] + ", " + successColor[2] + ")"
}, successBoxShadow);

const dangerCardHeader = _objectSpread({
  color: whiteColor,
  background: "linear-gradient(60deg, " + dangerColor[1] + ", " + dangerColor[2] + ")"
}, dangerBoxShadow);

const infoCardHeader = _objectSpread({
  color: whiteColor,
  background: "linear-gradient(60deg, " + infoColor[1] + ", " + infoColor[2] + ")"
}, infoBoxShadow);

const primaryCardHeader = _objectSpread({
  color: whiteColor,
  background: "linear-gradient(60deg, " + primaryColor[1] + ", " + primaryColor[2] + ")"
}, primaryBoxShadow);

const roseCardHeader = _objectSpread({
  color: whiteColor,
  background: "linear-gradient(60deg, " + roseColor[1] + ", " + roseColor[2] + ")"
}, roseBoxShadow);

const cardActions = _objectSpread({
  margin: "0 20px 10px",
  paddingTop: "10px",
  borderTop: "1px solid  " + grayColor[2],
  height: "auto"
}, defaultFont);

const cardHeader = {
  margin: "-30px 15px 0",
  borderRadius: "3px",
  padding: "15px"
};
const defaultBoxShadow = {
  border: "0",
  borderRadius: "3px",
  boxShadow: "0 10px 20px -12px rgba(" + hexToRgb(blackColor) + ", 0.42), 0 3px 20px 0px rgba(" + hexToRgb(blackColor) + ", 0.12), 0 8px 10px -5px rgba(" + hexToRgb(blackColor) + ", 0.2)",
  padding: "10px 0",
  transition: "all 150ms ease 0s"
};
const title = {
  color: whiteColor,
  textDecoration: "none",
  fontWeight: "900",
  marginTop: "30px",
  marginBottom: "25px",
  minHeight: "32px",
  fontFamily: '"Benton Sans", "Helvetica", "Arial", sans-serif !important'
};
const cardTitle = {
  "&, & a": _objectSpread({}, title, {
    marginTop: ".625rem",
    marginBottom: "0.75rem",
    minHeight: "auto",
    fontWeight: 900
  })
};
const cardLink = {
  "& + $cardLink": {
    marginLeft: "1.25rem"
  }
};
const cardSubtitle = {
  marginBottom: "0",
  marginTop: "-.375rem"
};
const main = {
  background: whiteColor,
  position: "relative",
  zIndex: "3"
};
const mainRaised = {
  "@media (max-width: 576px)": {
    marginTop: "-30px"
  },
  "@media (max-width: 830px)": {
    marginLeft: "10px",
    marginRight: "10px"
  },
  margin: "-60px 30px 0px",
  borderRadius: "6px",
  boxShadow: "0 16px 24px 2px rgba(" + hexToRgb(blackColor) + ", 0.14), 0 6px 30px 5px rgba(" + hexToRgb(blackColor) + ", 0.12), 0 8px 10px -5px rgba(" + hexToRgb(blackColor) + ", 0.2)"
};
const section = {
  backgroundPosition: "50%",
  backgroundSize: "cover"
};
const sectionDark = {
  backgroundColor: grayColor[3] // background:
  //   "radial-gradient(ellipse at center," +
  //   grayColor[4] +
  //   " 0," +
  //   grayColor[5] +
  //   " 100%)"

};
const sectionDescription = {
  marginTop: "130px"
};
const description = {
  color: grayColor[0]
};
const mlAuto = {
  marginLeft: "auto"
};
const mrAuto = {
  marginRight: "auto"
};
const btnLink = {
  backgroundColor: "transparent",
  boxShdow: "none",
  marginTop: "5px",
  marginBottom: "5px"
};
const coloredShadow = {
  // some jss/css to make the cards look a bit better on Internet Explorer
  "@media all and (-ms-high-contrast: none), (-ms-high-contrast: active)": {
    display: "none !important"
  },
  transform: "scale(0.94)",
  top: "12px",
  filter: "blur(12px)",
  position: "absolute",
  width: "100%",
  height: "100%",
  backgroundSize: "cover",
  zIndex: "-1",
  transition: "opacity .45s",
  opacity: "0"
};


/***/ }),

/***/ "3TsM":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAAAoCAYAAABEklK7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ODUwNkVBNjVCMkY3MTFFOThCNUVGMTRGNzc5NDg4RUIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ODUwNkVBNjZCMkY3MTFFOThCNUVGMTRGNzc5NDg4RUIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4NTA2RUE2M0IyRjcxMUU5OEI1RUYxNEY3Nzk0ODhFQiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4NTA2RUE2NEIyRjcxMUU5OEI1RUYxNEY3Nzk0ODhFQiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PvGj4oMAAAXQSURBVHja3FrbbxRVGP/NZXems5ded2lpQKBc9qWCMSl9qDFaEGPEiL4Q4pOJCW8majT+AWpCfJJ3/wAwXiMSoaYYE8BbUUMCwUIE7GVdlu59dm7rd1Y6M7vb7W67U2r3S05n58ycyfc7v9/3fefMlBsfH0csFhs2TfMEx3FjAILY4FYqlRKE5RtBEN45efLkLHf8+PF91H+BQIbpItrFeJ5nbZowjYj0530GEG1mlmWxNkRA3+bpxxja2AzDeIIxGWpHcCz0HrDZKeq6jnaU6mJ+oSMnTk1NtRVAyi9wJ1BZlneI7SRPBnApW1OQIsdhtyxiX8CPnXTsEXlI1KeTQ/dNC7dUA1M5DdfpqFolz9h7KCA5amNhCc92ytgqiUve0U2Ad9C1cbpnXjdxLqXiu1SxPAFesLemIPvI+VejQQwrvqbHbPIJeKUvgNGghI/jWdzRzKaSC2tNKcpLgJv9At4cCCFKTlfIici5qxll5zN0ovAcBunerZIAP8fZ9zFJvzvYiY/mMrhW0Ftib01A9hKDbw2EEfHxdp9GDjEJTqZVzBDAaiGyydgf9Jcly8YzCwkcXu8P4YOZNG4XjVWzVwFyZGSk9XUiuf9CZhYRvWD3JQU/JgIRzPXKGKTzwTpj56nlMzPodY0NEtA3tkXwSXgQGsfbhX2VNXOa94LF3cUstlQB/Dw0gDlRXnacQJPzfGauYqytDFPDXjW1avYqSWjRBJrlx9UFJ/4oxs4HosjxYkOAh7Lz2K7n7L4FwYcC58QzAylZZsskVHgSjUYxOjq6ogfIc3fRc/amfZ7f8yj2jz69fIkxDfR9fxZK0gGod/Yge+hlWH/dQMflyXJfR8nES8MxZLbvWZFPExMTyOfz3jHZcWfavYlDJra3IcDI5NdQCIydoLr7ED94BKYSRHrLECyf374WuP2nBzmjRZPiMw4b4e5yqwuQpBeZPEMT4zCvd/cifuAIVFlh2yKYdFQjA/Z1f+r++oMU89kKRhibSzNoliXqZp5JND7+IopSZYIq9kQcB7WitzG5qiWc4dQyS5Lrx+CFM1BuVwKceeowDGKuJu27nsO1mFlrQDK5xOPxla1yKJsucqelUzXjeZLo0NQPUObv2n2FUBeu7xtDUdUANVGbzFKubE0tkUiseEdSF2QymcSlS5dW9MBHDAvRRQbmZ3GZxpdci4RnsnF0aY6k71OZ+AyUYK78XveZh/POROUMExcvXlzfmIwLkv27hwp42NLtOniQAO6qBqhsQnqZGiqVLGw2nDhc4MX1Tzw3/YGKAh8rZsoMskK/2wXwHq2CGgFktosWB6w+Ltq0T1n/xDNDSzfmeNj6LwENF9PoJya26k4xThDAL5QoMg0AMnCjxZSTrWndetMDkC0zqZMjV+Qux1FKNG6ASd6HL5sAyNg/ULiHoOVk6z/8QeQ4Yf1BMrsqhREXpZp+BvB0sL+hRAPE4HP5fzDkmhw25mep05NtoCcgDSoj52hRrlbNOksiMS1XwY7bFAI3rGVwNDuLnS6AJuh5HX0Vi3VPYzIUCrHXeLWy1HVkMpm6u/J7xNpXSqSc/uWSZTP0pJqkOFvALGVhFpsFkjcD30tZeIBiVylVPs8ggN8qfbjTYJu2apCSJC0JkJnP50MwGEQqlaopvIv7vb/JsU8D/RRbCUSpnLgZ3WYUym05S5FEz3d4C7AGJM8vr17O9T6mGqBTN/04TUAf09LYS1IMNLEfVIndq/4QfqHYznskUU9KiPtV/FIZ90epi7JjiFZEhXK8dZM8ZRrDaqlFkizSPazQsxJxS+xAll+7V8A1a9dmgDX7OoIljmu+YLmtp4nVyYXtqFlsVkuTTQBLPJYHu4KHDpIx4waUy+XKrVHsbSRjH2HVRhLdyADJ9xyvadpv9fZkjT6k/N+N+U74fmU1471CoWC62dro8lxUIOFaICwnOPYl9tixY0ep80Oqk5vb4T9AHlQBptDXTp069dO/AgwAWAvinIrrV9EAAAAASUVORK5CYII="

/***/ }),

/***/ "3uXk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Success; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("9Pu4");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var assets_jss_nextjs_material_kit_pro_components_typographyStyle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("x17g");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // nodejs library to set properties for components

// @material-ui/core components
 // core components


const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(assets_jss_nextjs_material_kit_pro_components_typographyStyle_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]);
function Success(props) {
  const {
    children
  } = props;
  const classes = useStyles();
  return __jsx("div", {
    className: classes.defaultFontStyle + " " + classes.successText
  }, children);
}

/***/ }),

/***/ "3ydN":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/PersonAdd");

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("fdRS");


/***/ }),

/***/ "4151":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),

/***/ "4CLJ":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ArtTrack");

/***/ }),

/***/ "4D1s":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Menu");

/***/ }),

/***/ "4DPt":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormGroup");

/***/ }),

/***/ "4nWC":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Assignment");

/***/ }),

/***/ "59xQ":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/AttachMoney");

/***/ }),

/***/ "5LSk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ CardFooter; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// CONCATENATED MODULE: ./assets/jss/nextjs-material-kit-pro/components/cardFooterStyle.js
const cardFooterStyle = {
  cardFooter: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "transparent",
    padding: "0.9375rem 1.875rem",
    paddingTop: "0"
  },
  cardFooterProfile: {
    marginTop: "-15px"
  },
  cardFooterPlain: {
    paddingLeft: "5px",
    paddingRight: "5px",
    backgroundColor: "transparent"
  },
  cardFooterPricing: {
    zIndex: "2"
  },
  cardFooterTestimonial: {
    display: "block"
  }
};
/* harmony default export */ var components_cardFooterStyle = (cardFooterStyle);
// CONCATENATED MODULE: ./components/Card/CardFooter.js
var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

 // nodejs library that concatenates classes

 // nodejs library to set properties for components

// @material-ui/core components
 // @material-ui/icons
// core components


const useStyles = Object(styles_["makeStyles"])(components_cardFooterStyle);
function CardFooter(props) {
  const {
    className,
    children,
    plain,
    profile,
    pricing,
    testimonial
  } = props,
        rest = _objectWithoutProperties(props, ["className", "children", "plain", "profile", "pricing", "testimonial"]);

  const classes = useStyles();
  const cardFooterClasses = external_classnames_default()({
    [classes.cardFooter]: true,
    [classes.cardFooterPlain]: plain,
    [classes.cardFooterProfile]: profile || testimonial,
    [classes.cardFooterPricing]: pricing,
    [classes.cardFooterTestimonial]: testimonial,
    [className]: className !== undefined
  });
  return __jsx("div", _extends({
    className: cardFooterClasses
  }, rest), children);
}

/***/ }),

/***/ "5MrK":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/GroupWork");

/***/ }),

/***/ "5yLy":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "6FGL":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAAAoCAYAAABEklK7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RjE0NzUyMjA5QkEwMTFFOUFGRjc4NTQzQzdFNUE2NUMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RjE0NzUyMjE5QkEwMTFFOUFGRjc4NTQzQzdFNUE2NUMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowNkE0MTRGNTlCQTAxMUU5QUZGNzg1NDNDN0U1QTY1QyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowNkE0MTRGNjlCQTAxMUU5QUZGNzg1NDNDN0U1QTY1QyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pqx3NtUAAAhZSURBVHja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"

/***/ }),

/***/ "7KCV":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("C+bE");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
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

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "7s44":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControlLabel");

/***/ }),

/***/ "7vM9":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Icon");

/***/ }),

/***/ "86oe":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/AccessTime");

/***/ }),

/***/ "8E12":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ HeaderLinks; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: external "@material-ui/core/List"
var List_ = __webpack_require__("0LMq");
var List_default = /*#__PURE__*/__webpack_require__.n(List_);

// EXTERNAL MODULE: external "@material-ui/core/ListItem"
var ListItem_ = __webpack_require__("c25J");

// EXTERNAL MODULE: external "@material-ui/core/Icon"
var Icon_ = __webpack_require__("7vM9");

// EXTERNAL MODULE: external "@material-ui/core/Hidden"
var Hidden_ = __webpack_require__("Y8uC");

// EXTERNAL MODULE: external "@material-ui/icons/Apps"
var Apps_ = __webpack_require__("P+fx");

// EXTERNAL MODULE: external "@material-ui/icons/ShoppingCart"
var ShoppingCart_ = __webpack_require__("FQAE");

// EXTERNAL MODULE: external "@material-ui/icons/ViewDay"
var ViewDay_ = __webpack_require__("hnsL");

// EXTERNAL MODULE: external "@material-ui/icons/Dns"
var Dns_ = __webpack_require__("lZfH");

// EXTERNAL MODULE: external "@material-ui/icons/Build"
var Build_ = __webpack_require__("Ao/0");

// EXTERNAL MODULE: external "@material-ui/icons/List"
var icons_List_ = __webpack_require__("/sfI");

// EXTERNAL MODULE: external "@material-ui/icons/People"
var People_ = __webpack_require__("yFMe");

// EXTERNAL MODULE: external "@material-ui/icons/Assignment"
var Assignment_ = __webpack_require__("4nWC");

// EXTERNAL MODULE: external "@material-ui/icons/MonetizationOn"
var MonetizationOn_ = __webpack_require__("LVbA");

// EXTERNAL MODULE: external "@material-ui/icons/Chat"
var Chat_ = __webpack_require__("HWfr");

// EXTERNAL MODULE: external "@material-ui/icons/Call"
var Call_ = __webpack_require__("yRI6");

// EXTERNAL MODULE: external "@material-ui/icons/ViewCarousel"
var ViewCarousel_ = __webpack_require__("+JH3");

// EXTERNAL MODULE: external "@material-ui/icons/AccountBalance"
var AccountBalance_ = __webpack_require__("vhhE");

// EXTERNAL MODULE: external "@material-ui/icons/ArtTrack"
var ArtTrack_ = __webpack_require__("4CLJ");

// EXTERNAL MODULE: external "@material-ui/icons/ViewQuilt"
var ViewQuilt_ = __webpack_require__("8jd/");

// EXTERNAL MODULE: external "@material-ui/icons/LocationOn"
var LocationOn_ = __webpack_require__("cVmi");

// EXTERNAL MODULE: external "@material-ui/icons/Fingerprint"
var Fingerprint_ = __webpack_require__("Uo6P");

// EXTERNAL MODULE: external "@material-ui/icons/AttachMoney"
var AttachMoney_ = __webpack_require__("59xQ");

// EXTERNAL MODULE: external "@material-ui/icons/Store"
var Store_ = __webpack_require__("+1zY");

// EXTERNAL MODULE: external "@material-ui/icons/AccountCircle"
var AccountCircle_ = __webpack_require__("DME6");

// EXTERNAL MODULE: external "@material-ui/icons/PersonAdd"
var PersonAdd_ = __webpack_require__("3ydN");

// EXTERNAL MODULE: external "@material-ui/icons/Layers"
var Layers_ = __webpack_require__("g0r0");

// EXTERNAL MODULE: external "@material-ui/icons/ShoppingBasket"
var ShoppingBasket_ = __webpack_require__("JJVH");

// EXTERNAL MODULE: external "@material-ui/icons/LineStyle"
var LineStyle_ = __webpack_require__("yDxe");

// EXTERNAL MODULE: external "@material-ui/icons/Error"
var Error_ = __webpack_require__("Lu7A");

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: external "@material-ui/core/MenuItem"
var MenuItem_ = __webpack_require__("x54t");
var MenuItem_default = /*#__PURE__*/__webpack_require__.n(MenuItem_);

// EXTERNAL MODULE: external "@material-ui/core/MenuList"
var MenuList_ = __webpack_require__("xmQw");
var MenuList_default = /*#__PURE__*/__webpack_require__.n(MenuList_);

// EXTERNAL MODULE: external "@material-ui/core/ClickAwayListener"
var ClickAwayListener_ = __webpack_require__("31Yn");
var ClickAwayListener_default = /*#__PURE__*/__webpack_require__.n(ClickAwayListener_);

// EXTERNAL MODULE: external "@material-ui/core/Paper"
var Paper_ = __webpack_require__("qt1I");
var Paper_default = /*#__PURE__*/__webpack_require__.n(Paper_);

// EXTERNAL MODULE: external "@material-ui/core/Grow"
var Grow_ = __webpack_require__("mf1M");
var Grow_default = /*#__PURE__*/__webpack_require__.n(Grow_);

// EXTERNAL MODULE: external "@material-ui/core/Divider"
var Divider_ = __webpack_require__("nybW");
var Divider_default = /*#__PURE__*/__webpack_require__.n(Divider_);

// EXTERNAL MODULE: external "@material-ui/core/Popper"
var Popper_ = __webpack_require__("jD8W");
var Popper_default = /*#__PURE__*/__webpack_require__.n(Popper_);

// EXTERNAL MODULE: ./components/CustomButtons/Button.js + 1 modules
var Button = __webpack_require__("Kg+a");

// EXTERNAL MODULE: ./assets/jss/nextjs-material-kit-pro.js
var nextjs_material_kit_pro = __webpack_require__("36KI");

// CONCATENATED MODULE: ./assets/jss/nextjs-material-kit-pro/components/customDropdownStyle.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const customDropdownStyle = theme => ({
  popperClose: {
    pointerEvents: "none",
    display: "none !important"
  },
  popperNav: {
    [theme.breakpoints.down("sm")]: {
      "&, &$popperResponsive": {
        position: "static !important",
        left: "unset !important",
        top: "unset !important",
        transform: "none !important",
        willChange: "none !important",
        "& > div": {
          boxShadow: "none !important",
          marginLeft: "1.5rem",
          marginRight: "1.5rem",
          transition: "none !important",
          marginTop: "0px !important",
          marginBottom: "5px !important",
          padding: "0px !important"
        }
      }
    }
  },
  manager: {
    "& > div > button:first-child > span:first-child, & > div > a:first-child > span:first-child": {
      width: "100%"
    }
  },
  innerManager: {
    display: "block",
    "& > div > button,& > div > a": {
      margin: "0px !important",
      color: "inherit !important",
      padding: "10px 20px !important",
      "& > span:first-child": {
        width: "100%",
        justifyContent: "flex-start"
      }
    }
  },
  target: {
    "& > button:first-child > span:first-child, & > a:first-child > span:first-child": {
      display: "inline-block"
    },
    "& $caret": {
      marginLeft: "0px"
    }
  },
  dropdown: {
    borderRadius: "3px",
    border: "0",
    boxShadow: "0 2px 5px 0 rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.26)",
    top: "100%",
    zIndex: "1000",
    minWidth: "160px",
    padding: "5px 0",
    margin: "2px 0 0",
    fontSize: "14px",
    textAlign: "left",
    listStyle: "none",
    backgroundColor: nextjs_material_kit_pro["U" /* whiteColor */],
    backgroundClip: "padding-box"
  },
  menuList: {
    padding: "0"
  },
  popperResponsive: {
    zIndex: "1200",
    position: "absolute !important",
    [theme.breakpoints.down("sm")]: {
      zIndex: "1640",
      float: "none",
      width: "auto",
      marginTop: "0",
      backgroundColor: "transparent",
      border: "0",
      boxShadow: "none",
      color: "black"
    }
  },
  dropdownItem: _objectSpread({}, nextjs_material_kit_pro["k" /* defaultFont */], {
    fontSize: "13px",
    padding: "10px 20px",
    margin: "0 5px",
    borderRadius: "2px",
    position: "relative",
    transition: "all 150ms linear",
    display: "block",
    clear: "both",
    fontWeight: "400",
    height: "100%",
    color: nextjs_material_kit_pro["q" /* grayColor */][8],
    whiteSpace: "nowrap",
    minHeight: "unset"
  }),
  darkHover: {
    "&:hover": {
      boxShadow: "0 4px 20px 0px rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.14), 0 7px 10px -5px rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["q" /* grayColor */][9]) + ", 0.4)",
      backgroundColor: nextjs_material_kit_pro["q" /* grayColor */][9],
      color: nextjs_material_kit_pro["U" /* whiteColor */]
    }
  },
  primaryHover: {
    "&:hover": _objectSpread({
      backgroundColor: nextjs_material_kit_pro["C" /* primaryColor */][0],
      color: nextjs_material_kit_pro["U" /* whiteColor */]
    }, nextjs_material_kit_pro["A" /* primaryBoxShadow */])
  },
  infoHover: {
    "&:hover": _objectSpread({
      backgroundColor: nextjs_material_kit_pro["u" /* infoColor */][0],
      color: nextjs_material_kit_pro["U" /* whiteColor */]
    }, nextjs_material_kit_pro["s" /* infoBoxShadow */])
  },
  successHover: {
    "&:hover": _objectSpread({
      backgroundColor: nextjs_material_kit_pro["M" /* successColor */][0],
      color: nextjs_material_kit_pro["U" /* whiteColor */]
    }, nextjs_material_kit_pro["K" /* successBoxShadow */])
  },
  warningHover: {
    "&:hover": _objectSpread({
      backgroundColor: nextjs_material_kit_pro["T" /* warningColor */][0],
      color: nextjs_material_kit_pro["U" /* whiteColor */]
    }, nextjs_material_kit_pro["R" /* warningBoxShadow */])
  },
  dangerHover: {
    "&:hover": _objectSpread({
      backgroundColor: nextjs_material_kit_pro["j" /* dangerColor */][0],
      color: nextjs_material_kit_pro["U" /* whiteColor */]
    }, nextjs_material_kit_pro["h" /* dangerBoxShadow */])
  },
  roseHover: {
    "&:hover": _objectSpread({
      backgroundColor: nextjs_material_kit_pro["G" /* roseColor */][0],
      color: nextjs_material_kit_pro["U" /* whiteColor */]
    }, nextjs_material_kit_pro["E" /* roseBoxShadow */])
  },
  dropdownItemRTL: {
    textAlign: "right"
  },
  dropdownDividerItem: {
    margin: "5px 0",
    backgroundColor: "rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.12)",
    height: "1px",
    overflow: "hidden"
  },
  buttonIcon: {
    width: "20px",
    height: "20px"
  },
  caret: {
    transition: "all 150ms ease-in",
    display: "inline-block",
    width: "0",
    height: "0",
    marginLeft: "4px",
    verticalAlign: "middle",
    borderTop: "4px solid",
    borderRight: "4px solid transparent",
    borderLeft: "4px solid transparent"
  },
  caretActive: {
    transform: "rotate(180deg)"
  },
  caretDropup: {
    transform: "rotate(180deg)"
  },
  caretRTL: {
    marginRight: "4px"
  },
  dropdownHeader: {
    display: "block",
    padding: "0.1875rem 1.25rem",
    fontSize: "0.75rem",
    lineHeight: "1.428571",
    color: nextjs_material_kit_pro["q" /* grayColor */][10],
    whiteSpace: "nowrap",
    fontWeight: "inherit",
    marginTop: "10px",
    minHeight: "24px",
    "&:hover,&:focus": {
      backgroundColor: "transparent",
      cursor: "auto"
    }
  },
  noLiPadding: {
    padding: "0"
  }
});

/* harmony default export */ var components_customDropdownStyle = (customDropdownStyle);
// CONCATENATED MODULE: ./components/CustomDropdown/CustomDropdown.js
var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

 // nodejs library that concatenates classes

 // nodejs library to set properties for components

// @material-ui/core components







 // core components



const useStyles = Object(styles_["makeStyles"])(components_customDropdownStyle);
function CustomDropdown(props) {
  const [anchorEl, setAnchorEl] = external_react_default.a.useState(null);

  const handleClick = event => {
    if (anchorEl && anchorEl.contains(event.target)) {
      setAnchorEl(null);
    } else {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleClose = event => {
    if (anchorEl.contains(event.target)) {
      return;
    }

    setAnchorEl(null);
  };

  const handleCloseMenu = param => {
    setAnchorEl(null);

    if (props && props.onClick) {
      props.onClick(param);
    }
  };

  const {
    buttonText,
    buttonIcon,
    dropdownList,
    buttonProps,
    dropup,
    dropdownHeader,
    caret,
    hoverColor,
    dropPlacement,
    rtlActive,
    noLiPadding,
    innerDropDown,
    navDropdown
  } = props;
  const classes = useStyles();
  const caretClasses = external_classnames_default()({
    [classes.caret]: true,
    [classes.caretDropup]: dropup && !anchorEl,
    [classes.caretActive]: Boolean(anchorEl) && !dropup,
    [classes.caretRTL]: rtlActive
  });
  const dropdownItem = external_classnames_default()({
    [classes.dropdownItem]: true,
    [classes[hoverColor + "Hover"]]: true,
    [classes.noLiPadding]: noLiPadding,
    [classes.dropdownItemRTL]: rtlActive
  });

  const dropDownMenu = __jsx(MenuList_default.a, {
    role: "menu",
    className: classes.menuList
  }, dropdownHeader !== undefined ? __jsx(MenuItem_default.a, {
    onClick: () => handleCloseMenu(dropdownHeader),
    className: classes.dropdownHeader
  }, dropdownHeader) : null, dropdownList.map((prop, key) => {
    if (prop.divider) {
      return __jsx(Divider_default.a, {
        key: key,
        onClick: () => handleCloseMenu("divider"),
        className: classes.dropdownDividerItem
      });
    } else if (prop.props !== undefined && prop.props["data-ref"] === "multi") {
      return __jsx(MenuItem_default.a, {
        key: key,
        className: dropdownItem,
        style: {
          overflow: "visible",
          padding: 0
        }
      }, prop);
    }

    return __jsx(MenuItem_default.a, {
      key: key,
      onClick: () => handleCloseMenu(prop),
      className: dropdownItem
    }, prop);
  }));

  return __jsx("div", {
    className: innerDropDown ? classes.innerManager : classes.manager
  }, __jsx("div", {
    className: buttonText !== undefined ? "" : classes.target
  }, __jsx(Button["a" /* default */], _extends({
    "aria-label": "Notifications",
    "aria-owns": anchorEl ? "menu-list" : null,
    "aria-haspopup": "true"
  }, buttonProps, {
    onClick: handleClick
  }), buttonIcon !== undefined ? __jsx(props.buttonIcon, {
    className: classes.buttonIcon
  }) : null, buttonText !== undefined ? buttonText : null, caret ? __jsx("b", {
    className: caretClasses
  }) : null)), __jsx(Popper_default.a, {
    open: Boolean(anchorEl),
    anchorEl: anchorEl,
    transition: true,
    disablePortal: true,
    placement: dropPlacement,
    className: external_classnames_default()({
      [classes.popperClose]: !anchorEl,
      [classes.popperResponsive]: true,
      [classes.popperNav]: Boolean(anchorEl) && navDropdown
    })
  }, () => __jsx(Grow_default.a, {
    in: Boolean(anchorEl),
    id: "menu-list",
    style: dropup ? {
      transformOrigin: "0 100% 0"
    } : {
      transformOrigin: "0 0 0"
    }
  }, __jsx(Paper_default.a, {
    className: classes.dropdown
  }, innerDropDown ? dropDownMenu : __jsx(ClickAwayListener_default.a, {
    onClickAway: handleClose
  }, dropDownMenu)))));
}
CustomDropdown.defaultProps = {
  caret: true,
  dropup: false,
  hoverColor: "primary"
};
// CONCATENATED MODULE: ./assets/jss/nextjs-material-kit-pro/tooltipsStyle.js

const tooltipsStyle = {
  tooltip: {
    padding: "10px 15px",
    minWidth: "130px",
    color: nextjs_material_kit_pro["U" /* whiteColor */],
    lineHeight: "1.7em",
    background: "rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["q" /* grayColor */][15]) + ",0.9)",
    border: "none",
    borderRadius: "3px",
    boxShadow: "0 8px 10px 1px rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.14), 0 3px 14px 2px rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.12), 0 5px 5px -3px rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.2)",
    maxWidth: "200px",
    textAlign: "center",
    fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif',
    fontSize: "0.875em",
    fontStyle: "normal",
    fontWeight: "400",
    textShadow: "none",
    textTransform: "none",
    letterSpacing: "normal",
    wordBreak: "normal",
    wordSpacing: "normal",
    wordWrap: "normal",
    whiteSpace: "normal",
    lineBreak: "auto"
  }
};
/* harmony default export */ var nextjs_material_kit_pro_tooltipsStyle = (tooltipsStyle);
// CONCATENATED MODULE: ./assets/jss/nextjs-material-kit-pro/components/headerLinksStyle.js
function headerLinksStyle_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function headerLinksStyle_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { headerLinksStyle_ownKeys(Object(source), true).forEach(function (key) { headerLinksStyle_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { headerLinksStyle_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function headerLinksStyle_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const headerLinksStyle = theme => headerLinksStyle_objectSpread({
  list: {
    [theme.breakpoints.up("md")]: {
      WebkitBoxAlign: "center",
      MsFlexAlign: "center",
      alignItems: "center",
      WebkitBoxOrient: "horizontal",
      WebkitBoxDirection: "normal",
      MsFlexDirection: "row",
      flexDirection: "row"
    },
    [theme.breakpoints.down("sm")]: {
      display: "block"
    },
    marginTop: "0px",
    display: "flex",
    paddingLeft: "0",
    marginBottom: "0",
    listStyle: "none",
    padding: "0"
  },
  listItem: {
    float: "left",
    color: "inherit",
    position: "relative",
    display: "block",
    width: "auto",
    margin: "0",
    padding: "0",
    [theme.breakpoints.down("sm")]: {
      "& ul": {
        maxHeight: "300px",
        overflow: "scroll"
      },
      width: "100%",
      "&:not(:last-child)": {
        "&:after": {
          width: "calc(100% - 30px)",
          content: '""',
          display: "block",
          height: "1px",
          marginLeft: "15px",
          backgroundColor: nextjs_material_kit_pro["q" /* grayColor */][14]
        }
      }
    }
  },
  listItemText: {
    padding: "0 !important"
  },
  navLink: headerLinksStyle_objectSpread({}, nextjs_material_kit_pro["k" /* defaultFont */], {
    color: "inherit",
    position: "relative",
    padding: "0.9375rem",
    fontWeight: "400",
    fontSize: "12px",
    textTransform: "uppercase",
    lineHeight: "20px",
    textDecoration: "none",
    margin: "0px",
    display: "inline-flex",
    "&:hover,&:focus": {
      color: "inherit"
    },
    "& .fab,& .far,& .fal,& .fas,& .material-icons": {
      position: "relative",
      top: "2px",
      marginTop: "-4px",
      marginRight: "4px",
      marginBottom: "0px",
      fontSize: "1.25rem"
    },
    [theme.breakpoints.down("sm")]: {
      width: "calc(100% - 30px)",
      marginLeft: "15px",
      marginBottom: "8px",
      marginTop: "8px",
      textAlign: "left",
      "& > span:first-child": {
        justifyContent: "flex-start"
      }
    },
    "& svg": {
      marginRight: "3px",
      width: "20px",
      height: "20px"
    }
  }),
  navLinkJustIcon: {
    "& .fab,& .far,& .fal,& .fas,& .material-icons": {
      marginRight: "0px"
    },
    "& svg": {
      marginRight: "0px"
    }
  },
  navButton: headerLinksStyle_objectSpread({}, nextjs_material_kit_pro["k" /* defaultFont */], {
    position: "relative",
    fontWeight: "400",
    fontSize: "12px",
    textTransform: "uppercase",
    lineHeight: "20px",
    textDecoration: "none",
    margin: "0px",
    display: "inline-flex",
    [theme.breakpoints.down("sm")]: {
      width: "calc(100% - 30px)",
      marginLeft: "15px",
      marginBottom: "5px",
      marginTop: "5px",
      textAlign: "left",
      "& > span:first-child": {
        justifyContent: "flex-start"
      }
    },
    "& $icons": {
      marginRight: "3px"
    }
  }),
  notificationNavLink: {
    [theme.breakpoints.down("md")]: {
      top: "0",
      margin: "5px 15px"
    },
    color: nextjs_material_kit_pro["U" /* whiteColor */],
    padding: "0.9375rem",
    fontWeight: "400",
    fontSize: "12px",
    textTransform: "uppercase",
    lineHeight: "20px",
    textDecoration: "none",
    margin: "0px",
    display: "inline-flex"
  },
  registerNavLink: {
    [theme.breakpoints.down("md")]: {
      top: "0",
      margin: "5px 15px"
    },
    position: "relative",
    fontWeight: "400",
    fontSize: "12px",
    textTransform: "uppercase",
    lineHeight: "20px",
    textDecoration: "none",
    margin: "0px",
    display: "inline-flex"
  },
  navLinkActive: {
    "&, &:hover, &:focus,&:active ": {
      color: "inherit",
      backgroundColor: "rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["U" /* whiteColor */]) + ", 0.1)"
    }
  },
  icons: {
    width: "20px",
    height: "20px",
    marginRight: "14px"
  },
  dropdownIcons: {
    width: "24px",
    height: "24px",
    marginRight: "14px",
    opacity: "0.5",
    marginTop: "-4px",
    top: "1px",
    verticalAlign: "middle",
    fontSize: "24px",
    position: "relative"
  },
  socialIcons: {
    position: "relative",
    fontSize: "1.25rem",
    maxWidth: "24px"
  },
  dropdownLink: {
    "&,&:hover,&:focus": {
      color: "inherit",
      textDecoration: "none",
      display: "flex",
      padding: "0.75rem 1.25rem 0.75rem 0.75rem"
    }
  }
}, nextjs_material_kit_pro_tooltipsStyle, {
  marginRight5: {
    marginRight: "5px"
  },
  collapse: {
    [theme.breakpoints.up("md")]: {
      display: "flex !important",
      MsFlexPreferredSize: "auto",
      flexBasis: "auto"
    },
    WebkitBoxFlex: "1",
    MsFlexPositive: "1",
    flexGrow: "1",
    WebkitBoxAlign: "center",
    MsFlexAlign: "center",
    alignItems: "center"
  },
  mlAuto: nextjs_material_kit_pro["x" /* mlAuto */]
});

/* harmony default export */ var components_headerLinksStyle = (headerLinksStyle);
// CONCATENATED MODULE: ./components/Header/HeaderLinks.js
var HeaderLinks_jsx = external_react_default.a.createElement;

/* eslint-disable */
 // nodejs library to set properties for components

// react components for routing our app without refresh
 // @material-ui/core components





 // @material-ui/icons

























 // core components




const HeaderLinks_useStyles = Object(styles_["makeStyles"])(components_headerLinksStyle);
function HeaderLinks(props) {
  const easeInOutQuad = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  };

  const smoothScroll = (e, target) => {
    if (window.location.pathname === "/sections") {
      var isMobile = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i);

      if (isMobile) {// if we are on mobile device the scroll into view will be managed by the browser
      } else {
        e.preventDefault();
        var targetScroll = document.getElementById(target);
        scrollGo(document.documentElement, targetScroll.offsetTop, 1250);
      }
    }
  };

  const scrollGo = (element, to, duration) => {
    var start = element.scrollTop,
        change = to - start,
        currentTime = 0,
        increment = 20;

    var animateScroll = function () {
      currentTime += increment;
      var val = easeInOutQuad(currentTime, start, change, duration);
      element.scrollTop = val;

      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };

    animateScroll();
  };

  var onClickSections = {};
  const {
    dropdownHoverColor
  } = props;
  const classes = HeaderLinks_useStyles();
  return HeaderLinks_jsx(List_default.a, {
    className: classes.list + " " + classes.mlAuto
  });
}
HeaderLinks.defaultProps = {
  hoverColor: "primary"
};

/***/ }),

/***/ "8jd/":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ViewQuilt");

/***/ }),

/***/ "8x5e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Header; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: external "@material-ui/core/AppBar"
var AppBar_ = __webpack_require__("4151");
var AppBar_default = /*#__PURE__*/__webpack_require__.n(AppBar_);

// EXTERNAL MODULE: external "@material-ui/core/Toolbar"
var Toolbar_ = __webpack_require__("Ms0O");
var Toolbar_default = /*#__PURE__*/__webpack_require__.n(Toolbar_);

// EXTERNAL MODULE: external "@material-ui/core/IconButton"
var IconButton_ = __webpack_require__("EmCc");
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_);

// EXTERNAL MODULE: external "@material-ui/core/Button"
var Button_ = __webpack_require__("Wh1t");
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);

// EXTERNAL MODULE: external "@material-ui/core/Hidden"
var Hidden_ = __webpack_require__("Y8uC");
var Hidden_default = /*#__PURE__*/__webpack_require__.n(Hidden_);

// EXTERNAL MODULE: external "@material-ui/core/Drawer"
var Drawer_ = __webpack_require__("Q01v");
var Drawer_default = /*#__PURE__*/__webpack_require__.n(Drawer_);

// EXTERNAL MODULE: external "@material-ui/icons/Menu"
var Menu_ = __webpack_require__("4D1s");

// EXTERNAL MODULE: external "@material-ui/icons/Close"
var Close_ = __webpack_require__("j08L");
var Close_default = /*#__PURE__*/__webpack_require__.n(Close_);

// EXTERNAL MODULE: ./assets/jss/nextjs-material-kit-pro.js
var nextjs_material_kit_pro = __webpack_require__("36KI");

// CONCATENATED MODULE: ./assets/jss/nextjs-material-kit-pro/components/headerStyle.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const headerStyle = theme => ({
  appBar: {
    display: "flex",
    border: "0",
    borderRadius: "3px",
    padding: "0.625rem 0",
    marginBottom: "20px",
    color: nextjs_material_kit_pro["q" /* grayColor */][15],
    width: "100%",
    backgroundColor: nextjs_material_kit_pro["U" /* whiteColor */],
    boxShadow: "0 4px 18px 0px rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.12), 0 7px 10px -5px rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.15)",
    transition: "all 150ms ease 0s",
    alignItems: "center",
    flexFlow: "row nowrap",
    justifyContent: "flex-start",
    position: "relative"
  },
  absolute: {
    position: "absolute",
    top: "auto"
  },
  fixed: {
    position: "fixed"
  },
  container: _objectSpread({}, nextjs_material_kit_pro["g" /* container */], {
    minHeight: "50px",
    alignItems: "center",
    justifyContent: "space-between",
    display: "flex",
    flexWrap: "nowrap"
  }),
  title: {
    letterSpacing: "unset",
    "&,& a": _objectSpread({}, nextjs_material_kit_pro["k" /* defaultFont */], {
      minWidth: "unset",
      lineHeight: "30px",
      fontSize: "18px",
      borderRadius: "3px",
      textTransform: "none",
      whiteSpace: "nowrap",
      color: "inherit",
      "&:hover,&:focus": {
        color: "inherit",
        background: "transparent"
      }
    })
  },
  appResponsive: {
    margin: "20px 10px",
    marginTop: "0px"
  },
  primary: {
    backgroundColor: nextjs_material_kit_pro["C" /* primaryColor */][0],
    color: nextjs_material_kit_pro["U" /* whiteColor */],
    boxShadow: "0 4px 20px 0px rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.14), 0 7px 12px -5px rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["C" /* primaryColor */][0]) + ", 0.46)"
  },
  info: {
    backgroundColor: nextjs_material_kit_pro["u" /* infoColor */][0],
    color: nextjs_material_kit_pro["U" /* whiteColor */],
    boxShadow: "0 4px 20px 0px rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.14), 0 7px 12px -5px rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["u" /* infoColor */][0]) + ", 0.46)"
  },
  success: {
    backgroundColor: nextjs_material_kit_pro["M" /* successColor */][0],
    color: nextjs_material_kit_pro["U" /* whiteColor */],
    boxShadow: "0 4px 20px 0px rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.14), 0 7px 12px -5px rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["M" /* successColor */][0]) + ", 0.46)"
  },
  warning: {
    backgroundColor: nextjs_material_kit_pro["T" /* warningColor */][0],
    color: nextjs_material_kit_pro["U" /* whiteColor */],
    boxShadow: "0 4px 20px 0px rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.14), 0 7px 12px -5px rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["T" /* warningColor */][0]) + ", 0.46)"
  },
  danger: {
    backgroundColor: nextjs_material_kit_pro["j" /* dangerColor */][0],
    color: nextjs_material_kit_pro["U" /* whiteColor */],
    boxShadow: "0 4px 20px 0px rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.14), 0 7px 12px -5px rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["j" /* dangerColor */][0]) + ", 0.46)"
  },
  rose: {
    backgroundColor: nextjs_material_kit_pro["G" /* roseColor */][0],
    color: nextjs_material_kit_pro["U" /* whiteColor */],
    boxShadow: "0 4px 20px 0px rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.14), 0 7px 12px -5px rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["G" /* roseColor */][0]) + ", 0.46)"
  },
  transparent: {
    backgroundColor: "transparent !important",
    boxShadow: "none",
    paddingTop: "25px",
    color: nextjs_material_kit_pro["U" /* whiteColor */]
  },
  dark: {
    color: nextjs_material_kit_pro["U" /* whiteColor */],
    backgroundColor: nextjs_material_kit_pro["q" /* grayColor */][9] + " !important",
    boxShadow: "0 4px 20px 0px rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.14), 0 7px 12px -5px rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["q" /* grayColor */][9]) + ", 0.46)"
  },
  white: {
    border: "0",
    padding: "0.625rem 0",
    marginBottom: "20px",
    color: nextjs_material_kit_pro["q" /* grayColor */][15],
    backgroundColor: nextjs_material_kit_pro["U" /* whiteColor */] + " !important",
    boxShadow: "0 4px 18px 0px rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.12), 0 7px 10px -5px rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.15)"
  },
  drawerPaper: _objectSpread({
    border: "none",
    bottom: "0",
    transitionProperty: "top, bottom, width",
    transitionDuration: ".2s, .2s, .35s",
    transitionTimingFunction: "linear, linear, ease",
    width: nextjs_material_kit_pro["m" /* drawerWidth */]
  }, nextjs_material_kit_pro["c" /* boxShadow */], {
    position: "fixed",
    display: "block",
    top: "0",
    height: "100vh",
    right: "0",
    left: "auto",
    visibility: "visible",
    overflowY: "visible",
    borderTop: "none",
    textAlign: "left",
    paddingRight: "0px",
    paddingLeft: "0"
  }, nextjs_material_kit_pro["O" /* transition */]),
  hidden: {
    width: "100%"
  },
  collapse: {
    [theme.breakpoints.up("md")]: {
      display: "flex !important",
      MsFlexPreferredSize: "auto",
      flexBasis: "auto"
    },
    WebkitBoxFlex: "1",
    MsFlexPositive: "1",
    flexGrow: "1",
    WebkitBoxAlign: "center",
    MsFlexAlign: "center",
    alignItems: "center"
  },
  closeButtonDrawer: {
    position: "absolute",
    right: "8px",
    top: "9px",
    zIndex: "1"
  },
  imgContainer: {
    width: "200px",
    maxHeight: "160px",
    overflow: "hidden",
    display: "block",
    "& img": {
      width: "100%"
    }
  }
});

/* harmony default export */ var components_headerStyle = (headerStyle);
// EXTERNAL MODULE: ./assets/img/logo.png
var logo = __webpack_require__("PH+m");
var logo_default = /*#__PURE__*/__webpack_require__.n(logo);

// CONCATENATED MODULE: ./components/Header/Header.js
var __jsx = external_react_default.a.createElement;

 // nodejs library that concatenates classes

 // nodejs library to set properties for components

// @material-ui/core components






 // @material-ui/icons


 // core components



const useStyles = Object(styles_["makeStyles"])(components_headerStyle);
function Header(props) {
  const [mobileOpen, setMobileOpen] = external_react_default.a.useState(false);
  const classes = useStyles();
  external_react_default.a.useEffect(() => {
    if (props.changeColorOnScroll) {
      window.addEventListener("scroll", headerColorChange);
    }

    return function cleanup() {
      if (props.changeColorOnScroll) {
        window.removeEventListener("scroll", headerColorChange);
      }
    };
  });

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const headerColorChange = () => {
    const {
      color,
      changeColorOnScroll
    } = props;
    const windowsScrollTop = window.pageYOffset;

    if (windowsScrollTop > changeColorOnScroll.height) {
      document.body.getElementsByTagName("header")[0].classList.remove(classes[color]);
      document.body.getElementsByTagName("header")[0].classList.add(classes[changeColorOnScroll.color]);
    } else {
      document.body.getElementsByTagName("header")[0].classList.add(classes[color]);
      document.body.getElementsByTagName("header")[0].classList.remove(classes[changeColorOnScroll.color]);
    }
  };

  const {
    color,
    links,
    brand,
    fixed,
    absolute,
    imgBrand
  } = props;
  const appBarClasses = external_classnames_default()({
    [classes.appBar]: true,
    [classes[color]]: color,
    [classes.absolute]: absolute,
    [classes.fixed]: fixed
  });
  return __jsx(AppBar_default.a, {
    className: appBarClasses
  }, __jsx(Toolbar_default.a, {
    className: classes.container
  }, __jsx(Button_default.a, {
    className: classes.title
  }, __jsx(link_default.a, {
    href: "/checkout"
  }, __jsx("a", null, brand ? brand : "", __jsx("div", {
    className: classes.imgContainer
  }, __jsx("img", {
    src: imgBrand !== undefined ? imgBrand : logo_default.a,
    alt: "...",
    className: classes.img,
    style: {
      width: "150px"
    }
  })))))), __jsx(Hidden_default.a, {
    mdUp: true,
    implementation: "js"
  }, __jsx(Drawer_default.a, {
    variant: "temporary",
    anchor: "right",
    open: mobileOpen,
    classes: {
      paper: classes.drawerPaper
    },
    onClose: handleDrawerToggle
  }, __jsx(IconButton_default.a, {
    color: "inherit",
    "aria-label": "open drawer",
    onClick: handleDrawerToggle,
    className: classes.closeButtonDrawer
  }, __jsx(Close_default.a, null)), __jsx("div", {
    className: classes.appResponsive
  }, links))));
}
Header.defaultProp = {
  color: "white"
};

/***/ }),

/***/ "9Pu4":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "9Tpg":
/***/ (function(module, exports) {

module.exports = require("react-google-maps");

/***/ }),

/***/ "9qvJ":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Check");

/***/ }),

/***/ "A2So":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Card; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: ./assets/jss/nextjs-material-kit-pro.js
var nextjs_material_kit_pro = __webpack_require__("36KI");

// CONCATENATED MODULE: ./assets/jss/nextjs-material-kit-pro/components/cardStyle.js

const cardStyle = {
  card: {
    border: "0",
    marginBottom: "30px",
    marginTop: "30px",
    borderRadius: "6px",
    color: "rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.87)",
    background: nextjs_material_kit_pro["U" /* whiteColor */],
    width: "100%",
    boxShadow: "0 2px 2px 0 rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.12)",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    minWidth: "0",
    wordWrap: "break-word",
    fontSize: ".875rem",
    // some jss/css to make the cards look a bit better on Internet Explorer
    "@media all and (-ms-high-contrast: none), (-ms-high-contrast: active)": {
      display: "inline-block !important"
    }
  },
  cardPlain: {
    background: "transparent",
    boxShadow: "none"
  },
  cardProfile: {
    marginTop: "30px",
    textAlign: "center"
  },
  cardBlog: {
    marginTop: "60px"
  },
  cardRaised: {
    boxShadow: "0 16px 38px -12px rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.56), 0 4px 25px 0px rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.2)"
  },
  cardBackground: {
    backgroundPosition: "50%",
    backgroundSize: "cover",
    textAlign: "center",
    color: nextjs_material_kit_pro["U" /* whiteColor */],
    "& h3": {
      color: nextjs_material_kit_pro["U" /* whiteColor */] + " !important"
    },
    "& p": {
      color: "rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["U" /* whiteColor */]) + ",0.7)!important"
    },
    "&:after": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: '""',
      backgroundColor: "rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.56)",
      borderRadius: "6px"
    },
    "& small": {
      color: "rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["U" /* whiteColor */]) + ", 0.7) !important"
    }
  },
  cardPricing: {
    textAlign: "center",
    "&:after": {
      backgroundColor: "rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.7) !important"
    },
    "& ul": {
      listStyle: "none",
      padding: 0,
      maxWidth: "240px",
      margin: "10px auto"
    },
    "& ul li": {
      color: nextjs_material_kit_pro["q" /* grayColor */][0],
      textAlign: "center",
      padding: "12px 0px",
      borderBottom: "1px solid rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["q" /* grayColor */][0]) + ",0.3)"
    },
    "& ul li:last-child": {
      border: 0
    },
    "& ul li b": {
      color: nextjs_material_kit_pro["q" /* grayColor */][1]
    },
    "& h1": {
      marginTop: "30px"
    },
    "& h1 small": {
      display: "inline-flex",
      height: 0,
      fontSize: "18px"
    },
    "& h1 small:first-child": {
      position: "relative",
      top: "-17px",
      fontSize: "26px"
    },
    "& ul li svg,& ul li .fab,& ul li .fas,& ul li .far,& ul li .fal,& ul li .material-icons": {
      position: "relative",
      top: "7px"
    }
  },
  cardPricingColor: {
    "& ul li": {
      color: nextjs_material_kit_pro["U" /* whiteColor */],
      borderColor: "rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["U" /* whiteColor */]) + ",0.3)",
      "& b, & svg,& .fab,& .fas,& .far,& .fal,& .material-icons": {
        color: nextjs_material_kit_pro["U" /* whiteColor */],
        fontWeight: "700"
      }
    }
  },
  cardProduct: {
    marginTop: "30px"
  },
  primary: {
    background: "linear-gradient(60deg," + nextjs_material_kit_pro["C" /* primaryColor */][1] + ", " + nextjs_material_kit_pro["C" /* primaryColor */][2] + ")",
    "& h1 small": {
      color: "rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["U" /* whiteColor */]) + ", 0.8)"
    },
    color: nextjs_material_kit_pro["U" /* whiteColor */]
  },
  info: {
    background: "linear-gradient(60deg," + nextjs_material_kit_pro["u" /* infoColor */][1] + "," + nextjs_material_kit_pro["u" /* infoColor */][2] + ")",
    "& h1 small": {
      color: "rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["U" /* whiteColor */]) + ", 0.8)"
    },
    color: nextjs_material_kit_pro["U" /* whiteColor */]
  },
  success: {
    background: "linear-gradient(60deg," + nextjs_material_kit_pro["M" /* successColor */][1] + "," + nextjs_material_kit_pro["M" /* successColor */][2] + ")",
    "& h1 small": {
      color: "rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["U" /* whiteColor */]) + ", 0.8)"
    },
    color: nextjs_material_kit_pro["U" /* whiteColor */]
  },
  warning: {
    background: "linear-gradient(60deg," + nextjs_material_kit_pro["T" /* warningColor */][1] + "," + nextjs_material_kit_pro["T" /* warningColor */][2] + ")",
    "& h1 small": {
      color: "rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["U" /* whiteColor */]) + ", 0.8)"
    },
    color: nextjs_material_kit_pro["U" /* whiteColor */]
  },
  danger: {
    background: "linear-gradient(60deg," + nextjs_material_kit_pro["j" /* dangerColor */][1] + "," + nextjs_material_kit_pro["j" /* dangerColor */][2] + ")",
    "& h1 small": {
      color: "rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["U" /* whiteColor */]) + ", 0.8)"
    },
    color: nextjs_material_kit_pro["U" /* whiteColor */]
  },
  rose: {
    background: "linear-gradient(60deg," + nextjs_material_kit_pro["G" /* roseColor */][1] + "," + nextjs_material_kit_pro["G" /* roseColor */][2] + ")",
    "& h1 small": {
      color: "rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["U" /* whiteColor */]) + ", 0.8)"
    },
    color: nextjs_material_kit_pro["U" /* whiteColor */]
  }
};
/* harmony default export */ var components_cardStyle = (cardStyle);
// CONCATENATED MODULE: ./components/Card/Card.js
var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

 // nodejs library that concatenates classes

 // nodejs library to set properties for components

// @material-ui/core components
 // @material-ui/icons
// core components


const useStyles = Object(styles_["makeStyles"])(components_cardStyle);
function Card(props) {
  const {
    className,
    children,
    plain,
    profile,
    blog,
    raised,
    background,
    pricing,
    color,
    product,
    testimonial
  } = props,
        rest = _objectWithoutProperties(props, ["className", "children", "plain", "profile", "blog", "raised", "background", "pricing", "color", "product", "testimonial"]);

  const classes = useStyles();
  const cardClasses = external_classnames_default()({
    [classes.card]: true,
    [classes.cardPlain]: plain,
    [classes.cardProfile]: profile || testimonial,
    [classes.cardBlog]: blog,
    [classes.cardRaised]: raised,
    [classes.cardBackground]: background,
    [classes.cardPricingColor]: pricing && color !== undefined || pricing && background !== undefined,
    [classes[color]]: color,
    [classes.cardPricing]: pricing,
    [classes.cardProduct]: product,
    [className]: className !== undefined
  });
  return __jsx("div", _extends({
    className: cardClasses
  }, rest), children);
}

/***/ }),

/***/ "AW/9":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Airplay");

/***/ }),

/***/ "Ao/0":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Build");

/***/ }),

/***/ "AroE":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "BOG7":
/***/ (function(module, exports) {

module.exports = "/checkout/_next/static/images/card-profile5-square-c6d2a4329eae71361b5606e7f9c3fd1e.jpg";

/***/ }),

/***/ "BTiB":
/***/ (function(module, exports) {

module.exports = require("react-hook-form");

/***/ }),

/***/ "C+bE":
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "C7ur":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/GroupAdd");

/***/ }),

/***/ "C8TP":
/***/ (function(module, exports) {

module.exports = require("yup");

/***/ }),

/***/ "CLSS":
/***/ (function(module, exports) {

module.exports = "/checkout/_next/static/images/card-profile1-square-3122abf4a3e1067926c08dee7684522d.jpg";

/***/ }),

/***/ "DME6":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/AccountCircle");

/***/ }),

/***/ "DRbO":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/KeyboardArrowLeft");

/***/ }),

/***/ "DTuu":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAAAoCAYAAABEklK7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ODUwNkVBNjlCMkY3MTFFOThCNUVGMTRGNzc5NDg4RUIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ODUwNkVBNkFCMkY3MTFFOThCNUVGMTRGNzc5NDg4RUIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4NTA2RUE2N0IyRjcxMUU5OEI1RUYxNEY3Nzk0ODhFQiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4NTA2RUE2OEIyRjcxMUU5OEI1RUYxNEY3Nzk0ODhFQiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pr8PAJsAAAw5SURBVHja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"

/***/ }),

/***/ "EfMu":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/StepLabel");

/***/ }),

/***/ "EmCc":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ "FQAE":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ShoppingCart");

/***/ }),

/***/ "Fm7H":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Favorite");

/***/ }),

/***/ "FoiA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ SnackbarContent; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__("rf6O");
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: external "@material-ui/core/SnackbarContent"
var SnackbarContent_ = __webpack_require__("n1EF");
var SnackbarContent_default = /*#__PURE__*/__webpack_require__.n(SnackbarContent_);

// EXTERNAL MODULE: external "@material-ui/core/IconButton"
var IconButton_ = __webpack_require__("EmCc");
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_);

// EXTERNAL MODULE: external "@material-ui/core/Icon"
var Icon_ = __webpack_require__("7vM9");
var Icon_default = /*#__PURE__*/__webpack_require__.n(Icon_);

// EXTERNAL MODULE: external "@material-ui/icons/Close"
var Close_ = __webpack_require__("j08L");
var Close_default = /*#__PURE__*/__webpack_require__.n(Close_);

// EXTERNAL MODULE: ./assets/jss/nextjs-material-kit-pro.js
var nextjs_material_kit_pro = __webpack_require__("36KI");

// CONCATENATED MODULE: ./assets/jss/nextjs-material-kit-pro/components/snackbarContentStyle.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const snackbarContentStyle = {
  root: _objectSpread({}, nextjs_material_kit_pro["k" /* defaultFont */], {
    position: "relative",
    padding: "20px 15px",
    lineHeight: "20px",
    marginBottom: "20px",
    fontSize: "14px",
    backgroundColor: "white",
    color: nextjs_material_kit_pro["q" /* grayColor */][15],
    borderRadius: "0px",
    maxWidth: "100%",
    minWidth: "auto",
    boxShadow: "0 12px 20px -10px rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["U" /* whiteColor */]) + ", 0.28), 0 4px 20px 0px rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.12), 0 7px 8px -5px rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["U" /* whiteColor */]) + ", 0.2)"
  }),
  info: _objectSpread({
    backgroundColor: nextjs_material_kit_pro["u" /* infoColor */][3],
    color: nextjs_material_kit_pro["U" /* whiteColor */]
  }, nextjs_material_kit_pro["s" /* infoBoxShadow */]),
  success: _objectSpread({
    backgroundColor: nextjs_material_kit_pro["M" /* successColor */][3],
    color: nextjs_material_kit_pro["U" /* whiteColor */]
  }, nextjs_material_kit_pro["K" /* successBoxShadow */]),
  warning: _objectSpread({
    backgroundColor: nextjs_material_kit_pro["T" /* warningColor */][3],
    color: nextjs_material_kit_pro["U" /* whiteColor */]
  }, nextjs_material_kit_pro["R" /* warningBoxShadow */]),
  danger: _objectSpread({
    backgroundColor: nextjs_material_kit_pro["j" /* dangerColor */][3],
    color: nextjs_material_kit_pro["U" /* whiteColor */]
  }, nextjs_material_kit_pro["h" /* dangerBoxShadow */]),
  primary: _objectSpread({
    backgroundColor: nextjs_material_kit_pro["C" /* primaryColor */][3],
    color: nextjs_material_kit_pro["U" /* whiteColor */]
  }, nextjs_material_kit_pro["A" /* primaryBoxShadow */]),
  message: {
    padding: "0",
    display: "block",
    maxWidth: "89%"
  },
  close: {
    width: "20px",
    height: "20px"
  },
  iconButton: {
    width: "24px",
    height: "24px",
    float: "right",
    fontSize: "1.5rem",
    fontWeight: "500",
    lineHeight: "1",
    position: "absolute",
    right: "-4px",
    top: "0",
    padding: "0"
  },
  icon: {
    display: "block",
    float: "left",
    marginRight: "1.071rem"
  },
  container: _objectSpread({}, nextjs_material_kit_pro["g" /* container */], {
    position: "relative"
  })
};
/* harmony default export */ var components_snackbarContentStyle = (snackbarContentStyle);
// CONCATENATED MODULE: ./components/Snackbar/SnackbarContent.js
var __jsx = external_react_default.a.createElement;
 // nodejs library to set properties for components

 // @material-ui/core components




 // @material-ui/icons

 // core components


const useStyles = Object(styles_["makeStyles"])(components_snackbarContentStyle);
function SnackbarContent(props) {
  const {
    message,
    color,
    close,
    icon
  } = props;
  const classes = useStyles();
  var action = [];

  const closeAlert = () => {
    setAlert(null);
  };

  if (close !== undefined) {
    action = [__jsx(IconButton_default.a, {
      className: classes.iconButton,
      key: "close",
      "aria-label": "Close",
      color: "inherit",
      onClick: closeAlert
    }, __jsx(Close_default.a, {
      className: classes.close
    }))];
  }

  let snackIcon = null;

  switch (typeof icon) {
    case "object":
      snackIcon = __jsx(props.icon, {
        className: classes.icon
      });
      break;

    case "string":
      snackIcon = __jsx(Icon_default.a, {
        className: classes.icon
      }, props.icon);
      break;

    default:
      snackIcon = null;
      break;
  }

  const [alert, setAlert] = external_react_default.a.useState(__jsx(SnackbarContent_default.a, {
    message: __jsx("div", null, snackIcon, message, close !== undefined ? action : null),
    classes: {
      root: classes.root + " " + classes[color],
      message: classes.message + " " + classes.container
    }
  }));
  return alert;
}
SnackbarContent.propTypes = {
  message: external_prop_types_default.a.node.isRequired,
  color: external_prop_types_default.a.oneOf(["info", "success", "warning", "danger", "primary"]),
  close: external_prop_types_default.a.bool,
  icon: external_prop_types_default.a.oneOfType([external_prop_types_default.a.object, external_prop_types_default.a.string])
};

/***/ }),

/***/ "GC5X":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Extension");

/***/ }),

/***/ "GCdX":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/FormatPaint");

/***/ }),

/***/ "HWfr":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Chat");

/***/ }),

/***/ "HXcA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Footer; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: external "@material-ui/core/List"
var List_ = __webpack_require__("0LMq");

// EXTERNAL MODULE: external "@material-ui/core/ListItem"
var ListItem_ = __webpack_require__("c25J");

// EXTERNAL MODULE: external "@material-ui/icons/Favorite"
var Favorite_ = __webpack_require__("Fm7H");

// EXTERNAL MODULE: ./assets/jss/nextjs-material-kit-pro.js
var nextjs_material_kit_pro = __webpack_require__("36KI");

// CONCATENATED MODULE: ./assets/jss/nextjs-material-kit-pro/components/footerStyle.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const footerStyle = {
  left: {
    float: "left!important",
    display: "block"
  },
  right: {
    padding: "15px 0",
    margin: "0",
    float: "right"
  },
  rightLinks: {
    float: "right!important",
    "& ul": {
      marginBottom: 0,
      marginTop: 10,
      padding: 0,
      listStyle: "none",
      height: 38,
      "& li": {
        display: "inline-block"
      }
    },
    "& i": {
      fontSize: "20px"
    }
  },
  footer: {
    padding: "0.9375rem 0",
    textAlign: "center",
    display: "flex",
    zIndex: "2",
    position: "relative",
    "& ul": {
      marginBottom: "0",
      padding: 0,
      listStyle: "none"
    }
  },
  big: {
    padding: "1.875rem 0",
    "& h5, & h4": {
      fontWeight: 700,
      fontFamily: "Roboto Slab,Times New Roman,serif",
      marginBottom: "15px"
    },
    "& p": {
      color: nextjs_material_kit_pro["q" /* grayColor */][0]
    }
  },
  content: {
    textAlign: "left"
  },
  a: {
    color: nextjs_material_kit_pro["C" /* primaryColor */][0],
    textDecoration: "none",
    backgroundColor: "transparent"
  },
  dark: {
    background: "radial-gradient(ellipse at center," + nextjs_material_kit_pro["q" /* grayColor */][4] + " 0," + nextjs_material_kit_pro["q" /* grayColor */][5] + " 100%)",
    backgroundSize: "550% 450%",
    color: nextjs_material_kit_pro["U" /* whiteColor */],
    "& p": {
      color: nextjs_material_kit_pro["q" /* grayColor */][0]
    },
    "& i": {
      color: nextjs_material_kit_pro["U" /* whiteColor */]
    },
    "& a": {
      color: nextjs_material_kit_pro["U" /* whiteColor */],
      opacity: ".86",
      "&:visited": {
        color: nextjs_material_kit_pro["U" /* whiteColor */]
      },
      "&:focus, &:hover": {
        opacity: 1
      }
    },
    "& hr": {
      borderColor: "rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["U" /* whiteColor */]) + ",0.2)"
    },
    "& $btnTwitter, & $btnDribbble, & $btnInstagram": {
      color: nextjs_material_kit_pro["U" /* whiteColor */]
    }
  },
  white: {
    backgroundColor: nextjs_material_kit_pro["U" /* whiteColor */],
    color: nextjs_material_kit_pro["q" /* grayColor */][1],
    textDecoration: "none",
    "& a": {
      "&:visited": {
        color: nextjs_material_kit_pro["q" /* grayColor */][1]
      },
      "&:hover, &:focus": {
        color: nextjs_material_kit_pro["q" /* grayColor */][20]
      }
    }
  },
  container: nextjs_material_kit_pro["g" /* container */],
  list: {
    marginBottom: "0",
    padding: "0",
    marginTop: "0"
  },
  inlineBlock: {
    display: "inline-block",
    padding: "0px",
    width: "auto"
  },
  icon: {
    width: "18px",
    height: "18px",
    position: "relative",
    top: "3px"
  },
  iconSocial: {
    width: "41px",
    height: "41px",
    fontSize: "24px",
    minWidth: "41px",
    padding: 0,
    overflow: "hidden",
    position: "relative"
  },
  btnTwitter: _objectSpread({}, nextjs_material_kit_pro["d" /* btnLink */], {
    color: nextjs_material_kit_pro["Q" /* twitterColor */]
  }),
  btnDribbble: _objectSpread({}, nextjs_material_kit_pro["d" /* btnLink */], {
    color: nextjs_material_kit_pro["n" /* dribbbleColor */]
  }),
  btnInstagram: _objectSpread({}, nextjs_material_kit_pro["d" /* btnLink */], {
    color: nextjs_material_kit_pro["v" /* instagramColor */]
  }),
  footerBrand: {
    height: "50px",
    padding: "15px 15px",
    fontSize: "18px",
    lineHeight: "50px",
    marginLeft: "-15px",
    color: nextjs_material_kit_pro["q" /* grayColor */][1],
    textDecoration: "none",
    fontWeight: 700,
    fontFamily: "Roboto Slab,Times New Roman,serif"
  },
  pullCenter: {
    display: "inline-block",
    float: "none"
  },
  clearFix: {
    clear: "both"
  }
};
/* harmony default export */ var components_footerStyle = (footerStyle);
// CONCATENATED MODULE: ./components/Footer/Footer.js
var __jsx = external_react_default.a.createElement;

/* eslint-disable */
 // nodejs library to set properties for components

// nodejs library that concatenates classes
 // @material-ui/core components



 // @material-ui/icons



const useStyles = Object(styles_["makeStyles"])(components_footerStyle);
function Footer(props) {
  const {
    children,
    content,
    theme,
    big,
    className
  } = props;
  const classes = useStyles();
  const themeType = theme === "transparent" || theme == undefined ? false : true;
  const footerClasses = external_classnames_default()({
    [classes.footer]: true,
    [classes[theme]]: themeType,
    [classes.big]: big || children !== undefined,
    [className]: className !== undefined
  });
  const aClasses = external_classnames_default()({
    [classes.a]: true
  });
  return __jsx("footer", {
    className: footerClasses
  }, __jsx("div", {
    className: classes.container
  }, children !== undefined ? __jsx("div", null, __jsx("div", {
    className: classes.content
  }, children), __jsx("hr", null)) : " ", content, __jsx("div", {
    className: classes.clearFix
  })));
}

/***/ }),

/***/ "Hak1":
/***/ (function(module, exports) {

module.exports = "/checkout/_next/static/images/kendall-5a0e395b3b76565583339619ca3110f4.jpg";

/***/ }),

/***/ "I6Cj":
/***/ (function(module, exports) {

module.exports = require("react-text-mask");

/***/ }),

/***/ "It9J":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAAAoCAYAAABEklK7AAAEvUlEQVRogd2Za0xcRRTH/3P37rILLIt0xQJSLBGx0FKJ2tYNm5YPJmqT1mfSNBpNrI/ExE8aH4kJraTaqLGJjzRRP/jBF9G0/dBooxIsibUpYCkRCVRFS8v7scvusvc1Yy67UNhh714uELr8vu05ZzL7z5mZM/cMqa+vR7e0p1JS2DsMxM8Yy0aaQwgJEbDmDDt5+fNDW/4g+19v2xpVbWciU2qOrDIwlu4SdZGAQyTIdIkBl12rERVVODwxqeSsBXEz6FokhUFWFY/gtr0thKLMv5YEzkXXFQyzGlFSNDfnXSOoKoOsqB5xLWaRUkDV6Oz5InIRaY6ePY3Oz9yaEalnTVHpgtVhTYjUNAZVW0BdnLQWaZS9uaStSH3f6fvPDMJyT+6iCkqkMdygRTifEescYdycOQqXTTGIiqGo5gViuTKZr0zioaFm+PtbUTjaN2sPZnvQtn4LThbsRHvmBm5cdW4vHituxPZ1TSCOnln7eMSPxkE/Gv7bhWHpWhnXs6fvv8WWPVL7fMuSKuXDI+fwTMfXyJCNM/fzrbtwdOMjCAsOuEUJr2z6Ar6CT7i4eagl+Kj7RXzX55vOHqXW/qpt413P1nFWkxy4+gOevvAVRC31Eisd68WdkX9wtmArPtx2BJXeBi6GQwhgm/cUbGoBzo+WcW6zWN6T9060Y3/HCc5uRPlAFz4bOIiinNMGUTMoAFUADXi87CDuK2jlIlZUpH64PPfnN/ohzvmMmMzzwPPEGYOIGRRA1e9n8Z8MeHXTe3DaZC7SDJZE7h47j7zgKGdPhTsYBD6uAE6WJ49kcYEJ2B2XsLfwN86+YiJ3DF/kbKbYKQE7IkBJdIHoa8szGf78tiQeYyyJLAn0cTZzxNcfJUB4zhceS1ieSSjJ+mthRwos1UmnMsXZTNFpB3rjU94oAVljMWEpxM3gEYc524qJDLhykRUJcfaU7B0Hyq7GopLsPSMmlJsMvMmxJPJfd9G8m41pjnkBLQ9QJeDdzkXPfilkrVZaEnnWW4V7es9x9lRQN4Hwwu+xk8DCzL8M3c3ZzGDp4Pkp7w6MeBaxdDQKBKLQhmTg+1JLs05FK3B6oJqzm8GSyCgR8UHlPkAwMVzRpgVC0mCflDGibgAstM7qO19CVHNwdjNYvtY1uyvwadU+/Y7P+WYJScB4FIh/Fl24vRpP5tehZ2wPF5oUAhzregtNQ5uTRaRkSRf0juxbcNm7AVWBHjjlOQV+Nnvx2kAEnNi+G4fKn0KYZOBUvw9eMQe35RrfYGSpHG9ePIzjV3ycbzEs+VNLJ5tKeHD4V/gG21F6pRuOkeC0vb+oGK2Fm/FtYS16nOu5cWXZ/Xi0uAk1+c3IdbXEjJTg7+ADaBz0oeGyH2HVyY1bFZFI6Le4aRRTxA6V2Li4ZOiXb5FQhJZBVCLL0hlI7JZNCov/o1YPFTMsWaSspO6WrTaWRVrtt6wGlkQupd9y3YtMfEhJF8RYC8OgoMdZ6CElPWAQQFXDVpuePf1wSU+BAKOaLFA12sN54ujZM/PWcD2jqZEuwW7T3tfk0LzOmy4qnbMXg0GVQyBMOUoYY6T2wI9vKAp9TbDZnZQSKAbPYOkAYxSgapSC1bV8ef+R/wFmShMDCeWQaAAAAABJRU5ErkJggg=="

/***/ }),

/***/ "JJVH":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ShoppingBasket");

/***/ }),

/***/ "JQ2V":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "K2gz":
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "Kg+a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: external "@material-ui/core/Button"
var Button_ = __webpack_require__("Wh1t");
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);

// EXTERNAL MODULE: ./assets/jss/nextjs-material-kit-pro.js
var nextjs_material_kit_pro = __webpack_require__("36KI");

// CONCATENATED MODULE: ./assets/jss/nextjs-material-kit-pro/components/buttonStyle.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const buttonStyle = {
  button: _objectSpread({}, nextjs_material_kit_pro["k" /* defaultFont */], {
    minHeight: "auto",
    minWidth: "auto",
    backgroundColor: nextjs_material_kit_pro["q" /* grayColor */][0],
    color: nextjs_material_kit_pro["U" /* whiteColor */],
    boxShadow: "0 2px 2px 0 rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["q" /* grayColor */][0]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["q" /* grayColor */][0]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["q" /* grayColor */][0]) + ", 0.12)",
    border: "none",
    borderRadius: "3px",
    position: "relative",
    padding: "12px 30px",
    margin: ".3125rem 1px",
    fontSize: "12px",
    fontWeight: "500",
    textTransform: "uppercase",
    letterSpacing: "0",
    willChange: "box-shadow, transform",
    transition: "box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
    lineHeight: "1.42857143",
    textAlign: "center",
    whiteSpace: "nowrap",
    verticalAlign: "middle",
    touchAction: "manipulation",
    cursor: "pointer",
    "&:hover,&:focus": {
      color: nextjs_material_kit_pro["U" /* whiteColor */],
      backgroundColor: nextjs_material_kit_pro["q" /* grayColor */][0],
      boxShadow: "0 14px 26px -12px rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["q" /* grayColor */][0]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["q" /* grayColor */][0]) + ", 0.2)"
    },
    "& .fab,& .fas,& .far,& .fal,& .material-icons": {
      position: "relative",
      display: "inline-block",
      top: "0",
      marginTop: "-1em",
      marginBottom: "-1em",
      fontSize: "1.1rem",
      marginRight: "4px",
      verticalAlign: "middle"
    },
    "& svg": {
      position: "relative",
      display: "inline-block",
      top: "0",
      width: "18px",
      height: "18px",
      marginRight: "4px",
      verticalAlign: "middle"
    },
    "&$justIcon": {
      "& .fab,& .fas,& .far,& .fal,& .material-icons": {
        marginTop: "0px",
        marginRight: "0px",
        position: "absolute",
        width: "100%",
        transform: "none",
        left: "0px",
        top: "0px",
        height: "100%",
        lineHeight: "41px",
        fontSize: "20px"
      }
    }
  }),
  fullWidth: {
    width: "100%"
  },
  primary: {
    backgroundColor: nextjs_material_kit_pro["C" /* primaryColor */][0],
    boxShadow: "0 2px 2px 0 rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["C" /* primaryColor */][0]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["C" /* primaryColor */][0]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["C" /* primaryColor */][0]) + ", 0.12)",
    "&:hover,&:focus": {
      backgroundColor: nextjs_material_kit_pro["C" /* primaryColor */][0],
      boxShadow: "0 14px 26px -12px rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["C" /* primaryColor */][0]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["C" /* primaryColor */][0]) + ", 0.2)"
    }
  },
  secondary: {
    color: "rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["U" /* whiteColor */]) + ",.87)",
    backgroundColor: nextjs_material_kit_pro["H" /* secondaryColor */][0],
    boxShadow: "0 2px 2px 0 rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["H" /* secondaryColor */][0]) + ",.14), 0 3px 1px -2px rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["H" /* secondaryColor */][0]) + ",.2), 0 1px 5px 0 rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["H" /* secondaryColor */][0]) + ",.12)",
    "&:hover,&:focus": {
      backgroundColor: nextjs_material_kit_pro["H" /* secondaryColor */][0],
      boxShdow: "0 14px 26px -12px rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["H" /* secondaryColor */][0]) + ",.42), 0 4px 23px 0 rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["H" /* secondaryColor */][0]) + ",.12), 0 8px 10px -5px rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["H" /* secondaryColor */][0]) + ",.2)" // color: "rgba(" + hexToRgb(blackColor) + ",.87)",
      // backgroundColor: grayColor[19]

    }
  },
  info: {
    backgroundColor: nextjs_material_kit_pro["u" /* infoColor */][0],
    boxShadow: "0 2px 2px 0 rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["u" /* infoColor */][0]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["u" /* infoColor */][0]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["u" /* infoColor */][0]) + ", 0.12)",
    "&:hover,&:focus": {
      backgroundColor: nextjs_material_kit_pro["u" /* infoColor */][0],
      boxShadow: "0 14px 26px -12px rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["u" /* infoColor */][0]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["u" /* infoColor */][0]) + ", 0.2)"
    }
  },
  success: {
    backgroundColor: nextjs_material_kit_pro["M" /* successColor */][0],
    boxShadow: "0 2px 2px 0 rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["M" /* successColor */][0]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["M" /* successColor */][0]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["M" /* successColor */][0]) + ", 0.12)",
    "&:hover,&:focus": {
      backgroundColor: nextjs_material_kit_pro["M" /* successColor */][0],
      boxShadow: "0 14px 26px -12px rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["M" /* successColor */][0]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["M" /* successColor */][0]) + ", 0.2)"
    }
  },
  warning: {
    backgroundColor: nextjs_material_kit_pro["T" /* warningColor */][0],
    boxShadow: "0 2px 2px 0 rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["T" /* warningColor */][0]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["T" /* warningColor */][0]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["T" /* warningColor */][0]) + ", 0.12)",
    "&:hover,&:focus": {
      backgroundColor: nextjs_material_kit_pro["T" /* warningColor */][0],
      boxShadow: "0 14px 26px -12px rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["T" /* warningColor */][0]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["T" /* warningColor */][0]) + ", 0.2)"
    }
  },
  danger: {
    backgroundColor: nextjs_material_kit_pro["j" /* dangerColor */][0],
    boxShadow: "0 2px 2px 0 rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["j" /* dangerColor */][0]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["j" /* dangerColor */][0]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["j" /* dangerColor */][0]) + ", 0.12)",
    "&:hover,&:focus": {
      backgroundColor: nextjs_material_kit_pro["j" /* dangerColor */][0],
      boxShadow: "0 14px 26px -12px rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["j" /* dangerColor */][0]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["j" /* dangerColor */][0]) + ", 0.2)"
    }
  },
  rose: {
    backgroundColor: nextjs_material_kit_pro["G" /* roseColor */][0],
    boxShadow: "0 2px 2px 0 rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["G" /* roseColor */][0]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["G" /* roseColor */][0]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["G" /* roseColor */][0]) + ", 0.12)",
    "&:hover,&:focus": {
      backgroundColor: nextjs_material_kit_pro["G" /* roseColor */][0],
      boxShadow: "0 14px 26px -12px rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["G" /* roseColor */][0]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["G" /* roseColor */][0]) + ", 0.2)"
    }
  },
  white: {
    "&,&:focus,&:hover": {
      backgroundColor: nextjs_material_kit_pro["U" /* whiteColor */],
      color: nextjs_material_kit_pro["q" /* grayColor */][0]
    }
  },
  twitter: {
    backgroundColor: nextjs_material_kit_pro["Q" /* twitterColor */],
    color: nextjs_material_kit_pro["U" /* whiteColor */],
    boxShadow: "0 2px 2px 0 rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["Q" /* twitterColor */]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["Q" /* twitterColor */]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["Q" /* twitterColor */]) + ", 0.12)",
    "&:hover,&:focus,&:visited": {
      backgroundColor: nextjs_material_kit_pro["Q" /* twitterColor */],
      color: nextjs_material_kit_pro["U" /* whiteColor */],
      boxShadow: "0 14px 26px -12px rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["Q" /* twitterColor */]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["Q" /* twitterColor */]) + ", 0.2)"
    }
  },
  facebook: {
    backgroundColor: nextjs_material_kit_pro["o" /* facebookColor */],
    color: nextjs_material_kit_pro["U" /* whiteColor */],
    boxShadow: "0 2px 2px 0 rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["o" /* facebookColor */]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["o" /* facebookColor */]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["o" /* facebookColor */]) + ", 0.12)",
    "&:hover,&:focus": {
      backgroundColor: nextjs_material_kit_pro["o" /* facebookColor */],
      color: nextjs_material_kit_pro["U" /* whiteColor */],
      boxShadow: "0 14px 26px -12px rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["o" /* facebookColor */]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["o" /* facebookColor */]) + ", 0.2)"
    }
  },
  google: {
    backgroundColor: nextjs_material_kit_pro["p" /* googleColor */],
    color: nextjs_material_kit_pro["U" /* whiteColor */],
    boxShadow: "0 2px 2px 0 rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["p" /* googleColor */]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["p" /* googleColor */]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["p" /* googleColor */]) + ", 0.12)",
    "&:hover,&:focus": {
      backgroundColor: nextjs_material_kit_pro["p" /* googleColor */],
      color: nextjs_material_kit_pro["U" /* whiteColor */],
      boxShadow: "0 14px 26px -12px rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["p" /* googleColor */]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["p" /* googleColor */]) + ", 0.2)"
    }
  },
  linkedin: {
    backgroundColor: nextjs_material_kit_pro["w" /* linkedinColor */],
    color: nextjs_material_kit_pro["U" /* whiteColor */],
    boxShadow: "0 2px 2px 0 rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["w" /* linkedinColor */]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["w" /* linkedinColor */]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["w" /* linkedinColor */]) + ", 0.12)",
    "&:hover,&:focus": {
      backgroundColor: nextjs_material_kit_pro["w" /* linkedinColor */],
      color: nextjs_material_kit_pro["U" /* whiteColor */],
      boxShadow: "0 14px 26px -12px rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["w" /* linkedinColor */]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["w" /* linkedinColor */]) + ", 0.2)"
    }
  },
  pinterest: {
    backgroundColor: nextjs_material_kit_pro["z" /* pinterestColor */],
    color: nextjs_material_kit_pro["U" /* whiteColor */],
    boxShadow: "0 2px 2px 0 rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["z" /* pinterestColor */]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["z" /* pinterestColor */]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["z" /* pinterestColor */]) + ", 0.12)",
    "&:hover,&:focus": {
      backgroundColor: nextjs_material_kit_pro["z" /* pinterestColor */],
      color: nextjs_material_kit_pro["U" /* whiteColor */],
      boxShadow: "0 14px 26px -12px rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["z" /* pinterestColor */]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["z" /* pinterestColor */]) + ", 0.2)"
    }
  },
  youtube: {
    backgroundColor: nextjs_material_kit_pro["V" /* youtubeColor */],
    color: nextjs_material_kit_pro["U" /* whiteColor */],
    boxShadow: "0 2px 2px 0 rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["V" /* youtubeColor */]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["V" /* youtubeColor */]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["V" /* youtubeColor */]) + ", 0.12)",
    "&:hover,&:focus": {
      backgroundColor: nextjs_material_kit_pro["V" /* youtubeColor */],
      color: nextjs_material_kit_pro["U" /* whiteColor */],
      boxShadow: "0 14px 26px -12px rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["V" /* youtubeColor */]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["V" /* youtubeColor */]) + ", 0.2)"
    }
  },
  tumblr: {
    backgroundColor: nextjs_material_kit_pro["P" /* tumblrColor */],
    color: nextjs_material_kit_pro["U" /* whiteColor */],
    boxShadow: "0 2px 2px 0 rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["P" /* tumblrColor */]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["P" /* tumblrColor */]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["P" /* tumblrColor */]) + ", 0.12)",
    "&:hover,&:focus": {
      backgroundColor: nextjs_material_kit_pro["P" /* tumblrColor */],
      color: nextjs_material_kit_pro["U" /* whiteColor */],
      boxShadow: "0 14px 26px -12px rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["P" /* tumblrColor */]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["P" /* tumblrColor */]) + ", 0.2)"
    }
  },
  github: {
    backgroundColor: nextjs_material_kit_pro["q" /* grayColor */][8],
    color: nextjs_material_kit_pro["U" /* whiteColor */],
    boxShadow: "0 2px 2px 0 rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["q" /* grayColor */][8]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["q" /* grayColor */][8]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["q" /* grayColor */][8]) + ", 0.12)",
    "&:hover,&:focus": {
      backgroundColor: nextjs_material_kit_pro["q" /* grayColor */][8],
      color: nextjs_material_kit_pro["U" /* whiteColor */],
      boxShadow: "0 14px 26px -12px rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["q" /* grayColor */][8]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["q" /* grayColor */][8]) + ", 0.2)"
    }
  },
  behance: {
    backgroundColor: nextjs_material_kit_pro["a" /* behanceColor */],
    color: nextjs_material_kit_pro["U" /* whiteColor */],
    boxShadow: "0 2px 2px 0 rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["a" /* behanceColor */]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["a" /* behanceColor */]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["a" /* behanceColor */]) + ", 0.12)",
    "&:hover,&:focus": {
      backgroundColor: nextjs_material_kit_pro["a" /* behanceColor */],
      color: nextjs_material_kit_pro["U" /* whiteColor */],
      boxShadow: "0 14px 26px -12px rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["a" /* behanceColor */]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["a" /* behanceColor */]) + ", 0.2)"
    }
  },
  dribbble: {
    backgroundColor: nextjs_material_kit_pro["n" /* dribbbleColor */],
    color: nextjs_material_kit_pro["U" /* whiteColor */],
    boxShadow: "0 2px 2px 0 rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["n" /* dribbbleColor */]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["n" /* dribbbleColor */]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["n" /* dribbbleColor */]) + ", 0.12)",
    "&:hover,&:focus": {
      backgroundColor: nextjs_material_kit_pro["n" /* dribbbleColor */],
      color: nextjs_material_kit_pro["U" /* whiteColor */],
      boxShadow: "0 14px 26px -12px rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["n" /* dribbbleColor */]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["n" /* dribbbleColor */]) + ", 0.2)"
    }
  },
  reddit: {
    backgroundColor: nextjs_material_kit_pro["D" /* redditColor */],
    color: nextjs_material_kit_pro["U" /* whiteColor */],
    boxShadow: "0 2px 2px 0 rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["D" /* redditColor */]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["D" /* redditColor */]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["D" /* redditColor */]) + ", 0.12)",
    "&:hover,&:focus": {
      backgroundColor: nextjs_material_kit_pro["D" /* redditColor */],
      color: nextjs_material_kit_pro["U" /* whiteColor */],
      boxShadow: "0 14px 26px -12px rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["D" /* redditColor */]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["D" /* redditColor */]) + ", 0.2)"
    }
  },
  instagram: {
    backgroundColor: nextjs_material_kit_pro["v" /* instagramColor */],
    color: nextjs_material_kit_pro["U" /* whiteColor */],
    boxShadow: "0 2px 2px 0 rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["v" /* instagramColor */]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["v" /* instagramColor */]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["v" /* instagramColor */]) + ", 0.12)",
    "&:hover,&:focus": {
      backgroundColor: nextjs_material_kit_pro["v" /* instagramColor */],
      color: nextjs_material_kit_pro["U" /* whiteColor */],
      boxShadow: "0 14px 26px -12px rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["v" /* instagramColor */]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["v" /* instagramColor */]) + ", 0.2)"
    }
  },
  simple: {
    "&,&:focus,&:hover": {
      color: nextjs_material_kit_pro["U" /* whiteColor */],
      background: "transparent",
      boxShadow: "none"
    },
    "&$primary": {
      "&,&:focus,&:hover,&:visited": {
        color: nextjs_material_kit_pro["C" /* primaryColor */][0]
      }
    },
    "&$info": {
      "&,&:focus,&:hover,&:visited": {
        color: nextjs_material_kit_pro["u" /* infoColor */][0]
      }
    },
    "&$success": {
      "&,&:focus,&:hover,&:visited": {
        color: nextjs_material_kit_pro["M" /* successColor */][0]
      }
    },
    "&$warning": {
      "&,&:focus,&:hover,&:visited": {
        color: nextjs_material_kit_pro["T" /* warningColor */][0]
      }
    },
    "&$rose": {
      "&,&:focus,&:hover,&:visited": {
        color: nextjs_material_kit_pro["G" /* roseColor */][0]
      }
    },
    "&$danger": {
      "&,&:focus,&:hover,&:visited": {
        color: nextjs_material_kit_pro["j" /* dangerColor */][0]
      }
    },
    "&$twitter": {
      "&,&:focus,&:hover,&:visited": {
        color: nextjs_material_kit_pro["Q" /* twitterColor */]
      }
    },
    "&$facebook": {
      "&,&:focus,&:hover,&:visited": {
        color: nextjs_material_kit_pro["o" /* facebookColor */]
      }
    },
    "&$google": {
      "&,&:focus,&:hover,&:visited": {
        color: nextjs_material_kit_pro["p" /* googleColor */]
      }
    },
    "&$linkedin": {
      "&,&:focus,&:hover,&:visited": {
        color: nextjs_material_kit_pro["w" /* linkedinColor */]
      }
    },
    "&$pinterest": {
      "&,&:focus,&:hover,&:visited": {
        color: nextjs_material_kit_pro["z" /* pinterestColor */]
      }
    },
    "&$youtube": {
      "&,&:focus,&:hover,&:visited": {
        color: nextjs_material_kit_pro["V" /* youtubeColor */]
      }
    },
    "&$tumblr": {
      "&,&:focus,&:hover,&:visited": {
        color: nextjs_material_kit_pro["P" /* tumblrColor */]
      }
    },
    "&$github": {
      "&,&:focus,&:hover,&:visited": {
        color: nextjs_material_kit_pro["q" /* grayColor */][8]
      }
    },
    "&$behance": {
      "&,&:focus,&:hover,&:visited": {
        color: nextjs_material_kit_pro["a" /* behanceColor */]
      }
    },
    "&$dribbble": {
      "&,&:focus,&:hover,&:visited": {
        color: nextjs_material_kit_pro["n" /* dribbbleColor */]
      }
    },
    "&$reddit": {
      "&,&:focus,&:hover,&:visited": {
        color: nextjs_material_kit_pro["D" /* redditColor */]
      }
    },
    "&$instagram": {
      "&,&:focus,&:hover,&:visited": {
        color: nextjs_material_kit_pro["v" /* instagramColor */]
      }
    }
  },
  transparent: {
    "&,&:focus,&:hover": {
      color: "inherit",
      background: "transparent",
      boxShadow: "none"
    }
  },
  disabled: {
    opacity: "0.65",
    pointerEvents: "none"
  },
  lg: {
    "&$justIcon": {
      "& .fab,& .fas,& .far,& .fal,& svg,& .material-icons": {
        marginTop: "-4px"
      }
    },
    padding: "1.125rem 2.25rem",
    fontSize: "0.875rem",
    lineHeight: "1.333333",
    borderRadius: "0.2rem"
  },
  sm: {
    "&$justIcon": {
      "& .fab,& .fas,& .far,& .fal,& svg,& .material-icons": {
        marginTop: "1px"
      }
    },
    padding: "0.40625rem 1.25rem",
    fontSize: "0.6875rem",
    lineHeight: "1.5",
    borderRadius: "0.2rem"
  },
  round: {
    borderRadius: "30px"
  },
  block: {
    width: "100% !important"
  },
  link: {
    "&,&:hover,&:focus": {
      backgroundColor: "transparent",
      color: nextjs_material_kit_pro["q" /* grayColor */][0],
      boxShadow: "none"
    }
  },
  justIcon: {
    paddingLeft: "12px",
    paddingRight: "12px",
    fontSize: "20px",
    height: "41px",
    minWidth: "41px",
    width: "41px",
    "& .fab,& .fas,& .far,& .fal,& svg,& .material-icons": {
      marginRight: "0px"
    },
    "&$lg": {
      height: "57px",
      minWidth: "57px",
      width: "57px",
      lineHeight: "56px",
      "& .fab,& .fas,& .far,& .fal,& .material-icons": {
        fontSize: "32px",
        lineHeight: "56px"
      },
      "& svg": {
        width: "32px",
        height: "32px"
      }
    },
    "&$sm": {
      height: "30px",
      minWidth: "30px",
      width: "30px",
      "& .fab,& .fas,& .far,& .fal,& .material-icons": {
        fontSize: "17px",
        lineHeight: "29px"
      },
      "& svg": {
        width: "17px",
        height: "17px"
      }
    }
  },
  fileButton: {// display: "inline-block"
  }
};
/* harmony default export */ var components_buttonStyle = (buttonStyle);
// CONCATENATED MODULE: ./components/CustomButtons/Button.js
var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

 // nodejs library that concatenates classes

 // nodejs library to set properties for components

// @material-ui/core components



const useStyles = Object(styles_["makeStyles"])(components_buttonStyle);
const RegularButton = external_react_default.a.forwardRef((props, ref) => {
  const {
    color,
    round,
    children,
    fullWidth,
    disabled,
    simple,
    size,
    block,
    link,
    justIcon,
    fileButton,
    className
  } = props,
        rest = _objectWithoutProperties(props, ["color", "round", "children", "fullWidth", "disabled", "simple", "size", "block", "link", "justIcon", "fileButton", "className"]);

  const classes = useStyles();
  const btnClasses = external_classnames_default()({
    [classes.button]: true,
    [classes[size]]: size,
    [classes[color]]: color,
    [classes.round]: round,
    [classes.fullWidth]: fullWidth,
    [classes.disabled]: disabled,
    [classes.simple]: simple,
    [classes.block]: block,
    [classes.link]: link,
    [classes.justIcon]: justIcon,
    [classes.fileButton]: fileButton,
    [className]: className
  });
  return __jsx(Button_default.a, _extends({}, rest, {
    ref: ref,
    className: btnClasses
  }), children);
});
/* harmony default export */ var Button = __webpack_exports__["a"] = (RegularButton);

/***/ }),

/***/ "LVbA":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/MonetizationOn");

/***/ }),

/***/ "LiOz":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/WatchLater");

/***/ }),

/***/ "Lu7A":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Error");

/***/ }),

/***/ "LupG":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAAAoCAYAAABEklK7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RjhCRTQxRkFDODNEMTFFQUI5QjZFRDAxM0I3REE3NTAiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RjhCRTQxRjlDODNEMTFFQUI5QjZFRDAxM0I3REE3NTAiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4NTA2RUE2NUIyRjcxMUU5OEI1RUYxNEY3Nzk0ODhFQiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4NTA2RUE2NkIyRjcxMUU5OEI1RUYxNEY3Nzk0ODhFQiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PhXCi2kAAAm6SURBVHja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"

/***/ }),

/***/ "M2SB":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/VerifiedUser");

/***/ }),

/***/ "Mh7T":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/MobileStepper");

/***/ }),

/***/ "Ml//":
/***/ (function(module, exports) {

module.exports = "/checkout/_next/static/images/icon-chip-730fad8fe05209d63c02f14fd334afaf.png";

/***/ }),

/***/ "Ms0O":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Toolbar");

/***/ }),

/***/ "Nlm8":
/***/ (function(module, exports) {

module.exports = "/checkout/_next/static/images/logo-white-345e18c4bd0f5b1b444b3bcd921f2603.png";

/***/ }),

/***/ "OFr4":
/***/ (function(module, exports) {

module.exports = require("@hookform/resolvers");

/***/ }),

/***/ "OJTE":
/***/ (function(module, exports) {

module.exports = "/checkout/_next/static/images/clicouApp-9c6b738fdab1bfb134ef2ea5666bbdb9.png";

/***/ }),

/***/ "OL+V":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Email");

/***/ }),

/***/ "OL5M":
/***/ (function(module, exports) {

module.exports = "/checkout/_next/static/images/bg9-7d2facc52e51e6dd0969bd739e767ccb.jpg";

/***/ }),

/***/ "OW/O":
/***/ (function(module, exports) {

module.exports = "/checkout/_next/static/images/card-profile6-square-1f1f4900f3bc166b75f8235c2b89864f.jpg";

/***/ }),

/***/ "OdWO":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Select");

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "OvFP":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Step");

/***/ }),

/***/ "P+fx":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Apps");

/***/ }),

/***/ "PH+m":
/***/ (function(module, exports) {

module.exports = "/checkout/_next/static/images/logo-fbb51f2cf882e580947142eaf6102812.png";

/***/ }),

/***/ "Q01v":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Drawer");

/***/ }),

/***/ "Q6fj":
/***/ (function(module, exports) {

module.exports = "/checkout/_next/static/images/marc-101b9dc3484755250ff3de71d22af8e1.jpg";

/***/ }),

/***/ "Q6gG":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Mail");

/***/ }),

/***/ "QkBZ":
/***/ (function(module, exports) {

module.exports = "/checkout/_next/static/images/card-profile4-square-1a1649171cdecd24e7a16ea1340077df.jpg";

/***/ }),

/***/ "RVvK":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/PinDrop");

/***/ }),

/***/ "S6qe":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "SE08":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "TPj+":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "TT5w":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ InfoArea; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: external "@material-ui/core/Icon"
var Icon_ = __webpack_require__("7vM9");
var Icon_default = /*#__PURE__*/__webpack_require__.n(Icon_);

// EXTERNAL MODULE: ./components/Grid/GridContainer.js
var GridContainer = __webpack_require__("mtPR");

// EXTERNAL MODULE: ./components/Grid/GridItem.js
var GridItem = __webpack_require__("i4t8");

// EXTERNAL MODULE: ./assets/img/appStore.png
var appStore = __webpack_require__("Wytu");
var appStore_default = /*#__PURE__*/__webpack_require__.n(appStore);

// EXTERNAL MODULE: ./assets/img/playStore.png
var playStore = __webpack_require__("TPj+");
var playStore_default = /*#__PURE__*/__webpack_require__.n(playStore);

// EXTERNAL MODULE: ./assets/jss/nextjs-material-kit-pro.js
var nextjs_material_kit_pro = __webpack_require__("36KI");

// CONCATENATED MODULE: ./assets/jss/nextjs-material-kit-pro/components/infoStyle.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const infoStyle = {
  infoArea: {
    maxWidth: "360px",
    margin: "0 auto",
    padding: "70px 0 30px"
  },
  iconWrapper: {
    float: "left",
    marginTop: "24px",
    marginRight: "10px"
  },
  primary: {
    color: nextjs_material_kit_pro["C" /* primaryColor */][0]
  },
  warning: {
    color: nextjs_material_kit_pro["T" /* warningColor */][0]
  },
  danger: {
    color: nextjs_material_kit_pro["j" /* dangerColor */][0]
  },
  success: {
    color: nextjs_material_kit_pro["M" /* successColor */][0]
  },
  info: {
    color: nextjs_material_kit_pro["u" /* infoColor */][0]
  },
  rose: {
    color: nextjs_material_kit_pro["G" /* roseColor */][0]
  },
  gray: {
    color: nextjs_material_kit_pro["q" /* grayColor */][0]
  },
  icon: {
    width: "2.25rem",
    height: "2.25rem",
    fontSize: "2.25rem"
  },
  descriptionWrapper: {
    color: nextjs_material_kit_pro["q" /* grayColor */][0],
    overflow: "hidden"
  },
  title: _objectSpread({}, nextjs_material_kit_pro["N" /* title */], {
    margin: "1.75rem 0 0.875rem !important",
    minHeight: "unset",
    color: nextjs_material_kit_pro["C" /* primaryColor */][0]
  }),
  description: {
    textAlign: "left",
    color: nextjs_material_kit_pro["q" /* grayColor */][0],
    overflow: "hidden",
    marginTop: "0px",
    "& p": {
      color: nextjs_material_kit_pro["q" /* grayColor */][0],
      fontSize: "14px"
    }
  },
  descriptionLarge: {
    textAlign: "left",
    color: nextjs_material_kit_pro["q" /* grayColor */][12],
    overflow: "hidden",
    fontSize: "24px",
    fontWeight: "700",
    marginTop: "0px",
    "& p": {
      color: nextjs_material_kit_pro["q" /* grayColor */][0],
      fontSize: "14px"
    }
  },
  iconWrapperVertical: {
    float: "none"
  },
  iconVertical: {
    width: "61px",
    height: "61px"
  },
  containerApp: {
    margin: "10px auto",
    "& img": {
      width: "100%"
    }
  },
  imgIcon: {
    width: "30px"
  },
  textLeft: _objectSpread({}, nextjs_material_kit_pro["N" /* title */], {
    margin: "1.75rem 0 0.875rem !important",
    minHeight: "unset",
    color: nextjs_material_kit_pro["q" /* grayColor */][12],
    textAlign: "left"
  })
};
/* harmony default export */ var components_infoStyle = (infoStyle);
// CONCATENATED MODULE: ./components/InfoArea/InfoArea.js
var __jsx = external_react_default.a.createElement;
 // nodejs library to set properties for components

// nodejs library that concatenates classes
 // @material-ui/core components








const useStyles = Object(styles_["makeStyles"])(components_infoStyle);
function InfoArea(props) {
  const {
    title,
    description,
    iconColor,
    vertical,
    className,
    app,
    android,
    ios,
    iconImage,
    titlePasso,
    descriptionLarge
  } = props;
  const classes = useStyles();
  const iconWrapper = external_classnames_default()({
    [classes.iconWrapper]: true,
    [classes[iconColor]]: true,
    [classes.iconWrapperVertical]: vertical
  });
  const iconClasses = external_classnames_default()({
    [classes.icon]: true,
    [classes.iconVertical]: vertical
  });
  const infoAreaClasses = external_classnames_default()({
    [classes.infoArea]: true,
    [className]: className !== undefined
  });
  let icon = null;

  switch (typeof props.icon) {
    case "string":
      icon = __jsx(Icon_default.a, {
        className: iconClasses
      }, props.icon);
      break;

    default:
      icon = __jsx(props.icon, {
        className: iconClasses
      });
      break;
  }

  return __jsx("div", {
    className: infoAreaClasses
  }, titlePasso != null && __jsx("h3", {
    className: classes.title
  }, titlePasso), __jsx("div", {
    className: classes.descriptionWrapper
  }, props.icon != null && __jsx("div", {
    className: iconWrapper
  }, icon), iconImage != null && __jsx("div", {
    className: iconWrapper
  }, __jsx("img", {
    className: classes.imgIcon,
    src: iconImage
  }), " "), __jsx("h4", {
    className: classes.textLeft
  }, title), description != null && __jsx("div", {
    className: classes.description
  }, description), descriptionLarge != null && __jsx("div", {
    className: classes.descriptionLarge
  }, descriptionLarge), app && __jsx(external_react_default.a.Fragment, null, __jsx("div", {
    className: classes.containerApp
  }, __jsx(GridContainer["a" /* default */], null, __jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 6,
    md: 6,
    className: classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
  }, __jsx("a", {
    href: android,
    target: "_blank"
  }, __jsx("img", {
    src: playStore_default.a,
    alt: "..."
  }))), __jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 6,
    md: 6,
    className: classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
  }, __jsx("a", {
    href: ios,
    target: "_blank"
  }, __jsx("img", {
    src: appStore_default.a,
    alt: "..."
  }))))))));
}
InfoArea.defaultProps = {
  iconColor: "gray"
};

/***/ }),

/***/ "TToL":
/***/ (function(module, exports) {

module.exports = "/checkout/_next/static/images/card-profile2-square-788e3d36e8c4d4120daeee6e57e7e85f.jpg";

/***/ }),

/***/ "UVoM":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "Uo6P":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Fingerprint");

/***/ }),

/***/ "UpG9":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Stepper");

/***/ }),

/***/ "UsYt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ CardBody; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: ./assets/jss/nextjs-material-kit-pro.js
var nextjs_material_kit_pro = __webpack_require__("36KI");

// CONCATENATED MODULE: ./assets/jss/nextjs-material-kit-pro/components/cardBodyStyle.js

const cardBodyStyle = {
  cardBody: {
    padding: "0.9375rem 1.875rem",
    flex: "1 1 auto",
    WebkitBoxFlex: "1"
  },
  cardBodyBackground: {
    position: "relative",
    zIndex: "2",
    minHeight: "280px",
    paddingTop: "40px",
    paddingBottom: "40px",
    maxWidth: "440px",
    margin: "0 auto"
  },
  cardBodyPlain: {
    paddingLeft: "5px",
    paddingRight: "5px"
  },
  cardBodyFormHorizontal: {
    paddingLeft: "15px",
    paddingRight: "15px",
    "& form": {
      margin: "0"
    }
  },
  cardPricing: {
    padding: "15px!important",
    margin: "0px!important"
  },
  cardSignup: {
    padding: "0px 30px 0px 30px"
  },
  cardBodyColor: {
    borderRadius: "6px",
    "& h1,& h2,& h3": {
      "& small": {
        color: "rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["U" /* whiteColor */]) + ", 0.8)"
      }
    }
  }
};
/* harmony default export */ var components_cardBodyStyle = (cardBodyStyle);
// CONCATENATED MODULE: ./components/Card/CardBody.js
var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

 // nodejs library that concatenates classes

 // nodejs library to set properties for components

// @material-ui/core components
 // @material-ui/icons
// core components


const useStyles = Object(styles_["makeStyles"])(components_cardBodyStyle);
function CardBody(props) {
  const {
    className,
    children,
    background,
    plain,
    formHorizontal,
    pricing,
    signup,
    color
  } = props,
        rest = _objectWithoutProperties(props, ["className", "children", "background", "plain", "formHorizontal", "pricing", "signup", "color"]);

  const classes = useStyles();
  const cardBodyClasses = external_classnames_default()({
    [classes.cardBody]: true,
    [classes.cardBodyBackground]: background,
    [classes.cardBodyPlain]: plain,
    [classes.cardBodyFormHorizontal]: formHorizontal,
    [classes.cardPricing]: pricing,
    [classes.cardSignup]: signup,
    [classes.cardBodyColor]: color,
    [className]: className !== undefined
  });
  return __jsx("div", _extends({
    className: cardBodyClasses
  }, rest), children);
}

/***/ }),

/***/ "V8/P":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ChildFriendly");

/***/ }),

/***/ "W+g/":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "WJyg":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/VideoLabel");

/***/ }),

/***/ "WQ6+":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "Wh1t":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "WkHw":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/StepConnector");

/***/ }),

/***/ "Wytu":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "XGk3":
/***/ (function(module, exports) {

module.exports = require("text-mask-addons/dist/createNumberMask");

/***/ }),

/***/ "XnMA":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Settings");

/***/ }),

/***/ "Y8uC":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Hidden");

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = escapeRegex(normalizedRoute.replace(/\/$/, '') || '/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  let namedParameterizedRoute; // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    namedParameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
      const isCatchAll = /^(\\\.){3}/.test($1);
      const key = $1 // Un-escape key
      .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '');
      return isCatchAll ? `/(?<${escapeRegex(key)}>.+?)` : `/(?<${escapeRegex(key)}>[^/]+?)`;
    });
  }

  return Object.assign({
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  }, namedParameterizedRoute ? {
    namedRegex: `^${namedParameterizedRoute}(?:/)?$`
  } : {});
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "ZkBw":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Box");

/***/ }),

/***/ "amlk":
/***/ (function(module, exports) {

module.exports = "/checkout/_next/static/images/phoneApp-546bb750c65e19b2f86a32d716ef5d0d.png";

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "c25J":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItem");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

var _interopRequireWildcard = __webpack_require__("7KCV");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _url = __webpack_require__("bzos");

var _utils = __webpack_require__("kYf9");

var _router = _interopRequireDefault(__webpack_require__("nOHt"));

var _router2 = __webpack_require__("elyg");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: (0, _router2.addBasePath)(formatUrl(href)),
        as: asHref ? (0, _router2.addBasePath)(formatUrl(asHref)) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (false) {}

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (false) {}
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (false) { var exact, PropTypes, warn; }

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "cVmi":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/LocationOn");

/***/ }),

/***/ "dYMV":
/***/ (function(module, exports) {

module.exports = require("clsx");

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "dtVl":
/***/ (function(module, exports) {

module.exports = "/checkout/_next/static/images/iphone-ba7def669f3bda8ab0ec3774f8c3644d.png";

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");

const mitt_1 = __importDefault(__webpack_require__("dZ6Y"));

const utils_1 = __webpack_require__("g/15");

const is_dynamic_1 = __webpack_require__("/jkW");

const route_matcher_1 = __webpack_require__("gguc");

const route_regex_1 = __webpack_require__("YTqd");

const basePath =  false || '';

function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}

exports.addBasePath = addBasePath;

function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}

exports.delBasePath = delBasePath;

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      pathname: addBasePath( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${delBasePath(pathname)}.json`),
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && url_1.parse(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (false) {}

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  true && this.sdc[pathname] ? Promise.resolve(this.sdc[pathname]) : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      let url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as;
      url = addBasePath(url);
      as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as, options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (false) {}

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (false) {}

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);

        if (false) {}

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (false) {}

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (false) {}

      const route = delBasePath(toRoute(pathname));
      Promise.all([this.pageLoader.prefetchData(url, delBasePath(asPath)), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    route = delBasePath(route);
    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "f206":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ SectionFooter; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: external "@material-ui/core/List"
var List_ = __webpack_require__("0LMq");

// EXTERNAL MODULE: external "@material-ui/core/ListItem"
var ListItem_ = __webpack_require__("c25J");

// EXTERNAL MODULE: external "@material-ui/icons/Mail"
var Mail_ = __webpack_require__("Q6gG");

// EXTERNAL MODULE: external "@material-ui/icons/Favorite"
var Favorite_ = __webpack_require__("Fm7H");

// EXTERNAL MODULE: ./components/Grid/GridContainer.js
var GridContainer = __webpack_require__("mtPR");

// EXTERNAL MODULE: ./components/Grid/GridItem.js
var GridItem = __webpack_require__("i4t8");

// EXTERNAL MODULE: ./components/CustomButtons/Button.js + 1 modules
var Button = __webpack_require__("Kg+a");

// EXTERNAL MODULE: ./components/CustomInput/CustomInput.js + 1 modules
var CustomInput = __webpack_require__("um8N");

// EXTERNAL MODULE: ./components/Footer/Footer.js + 1 modules
var Footer = __webpack_require__("HXcA");

// EXTERNAL MODULE: ./assets/img/faces/card-profile6-square.jpg
var card_profile6_square = __webpack_require__("OW/O");

// EXTERNAL MODULE: ./assets/img/faces/christian.jpg
var christian = __webpack_require__("skcn");

// EXTERNAL MODULE: ./assets/img/faces/card-profile4-square.jpg
var card_profile4_square = __webpack_require__("QkBZ");

// EXTERNAL MODULE: ./assets/img/faces/card-profile1-square.jpg
var card_profile1_square = __webpack_require__("CLSS");

// EXTERNAL MODULE: ./assets/img/faces/marc.jpg
var marc = __webpack_require__("Q6fj");

// EXTERNAL MODULE: ./assets/img/faces/kendall.jpg
var kendall = __webpack_require__("Hak1");

// EXTERNAL MODULE: ./assets/img/faces/card-profile5-square.jpg
var card_profile5_square = __webpack_require__("BOG7");

// EXTERNAL MODULE: ./assets/img/faces/card-profile2-square.jpg
var card_profile2_square = __webpack_require__("TToL");

// EXTERNAL MODULE: ./assets/img/selo-cadeado.png
var selo_cadeado = __webpack_require__("zZTe");

// EXTERNAL MODULE: ./assets/img/site-seguro.png
var site_seguro = __webpack_require__("5yLy");

// EXTERNAL MODULE: ./assets/img/selossl.png
var selossl = __webpack_require__("ydPO");
var selossl_default = /*#__PURE__*/__webpack_require__.n(selossl);

// EXTERNAL MODULE: ./assets/img/letsencrypt_White.png
var letsencrypt_White = __webpack_require__("WQ6+");
var letsencrypt_White_default = /*#__PURE__*/__webpack_require__.n(letsencrypt_White);

// EXTERNAL MODULE: ./assets/img/img_card_new.png
var img_card_new = __webpack_require__("qNyk");
var img_card_new_default = /*#__PURE__*/__webpack_require__.n(img_card_new);

// EXTERNAL MODULE: ./assets/jss/nextjs-material-kit-pro.js
var nextjs_material_kit_pro = __webpack_require__("36KI");

// EXTERNAL MODULE: ./assets/jss/nextjs-material-kit-pro/imagesStyles.js
var imagesStyles = __webpack_require__("mTbx");

// CONCATENATED MODULE: ./assets/jss/nextjs-material-kit-pro/pages/footer/footerStyle.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const style = _objectSpread({}, imagesStyles["a" /* default */], {
  container: nextjs_material_kit_pro["g" /* container */],
  title: nextjs_material_kit_pro["N" /* title */],
  description: nextjs_material_kit_pro["l" /* description */],
  section: _objectSpread({}, nextjs_material_kit_pro["I" /* section */], {
    padding: "70px 0px"
  }),
  content: {
    width: "100%",
    margin: 0,
    borderTop: "5px solid #ffffff",
    backgroundColor: nextjs_material_kit_pro["C" /* primaryColor */][0]
  },
  socialFeed: {
    "& p": {
      display: "table-cell",
      verticalAlign: "top",
      overflow: "hidden",
      paddingBottom: "10px",
      maxWidth: 300
    },
    "& i": {
      fontSize: "20px",
      display: "table-cell",
      paddingRight: "10px"
    }
  },
  img: {
    width: "20%",
    marginRight: "5%",
    marginBottom: "5%",
    float: "left"
  },
  list: {
    marginBottom: "0",
    padding: "0",
    marginTop: "0"
  },
  inlineBlock: {
    display: "inline-block",
    padding: "0px",
    width: "auto"
  },
  left: {
    float: "left!important",
    display: "block"
  },
  right: {
    // padding: "15px 0",
    margin: "0",
    float: "right"
  },
  aClass: {
    textDecoration: "none",
    backgroundColor: "transparent"
  },
  block: {
    color: "inherit",
    padding: "0.9375rem",
    fontWeight: "500",
    fontSize: "12px",
    textTransform: "uppercase",
    borderRadius: "3px",
    textDecoration: "none",
    position: "relative",
    display: "block"
  },
  footerBrand: {
    height: "50px",
    padding: "15px 15px",
    fontSize: "18px",
    lineHeight: "50px",
    marginLeft: "-15px",
    color: nextjs_material_kit_pro["q" /* grayColor */][1],
    textDecoration: "none",
    fontWeight: 700,
    fontFamily: "Museo Sans,Times New Roman,serif"
  },
  textCenter: _objectSpread({
    textAlign: "center"
  }, nextjs_material_kit_pro["k" /* defaultFont */]),
  pullCenter: {
    display: "inline-block",
    float: "none"
  },
  rightLinks: {
    float: "right!important",
    "& ul": {
      marginBottom: 0,
      padding: 0,
      listStyle: "none",
      "& li": {
        display: "inline-block"
      },
      "& a": {
        display: "block"
      }
    },
    "& i": {
      fontSize: "20px"
    }
  },
  linksVertical: {
    "& li": {
      display: "block !important",
      marginLeft: "-5px",
      marginRight: "-5px",
      "& a": {
        padding: "5px !important"
      }
    }
  },
  footer: {
    position: "relative",
    width: "100%",
    background: "transparent",
    bottom: "0",
    color: nextjs_material_kit_pro["U" /* whiteColor */],
    zIndex: "2",
    "& ul li": {
      display: "inline-block"
    },
    "& h4, & h5": {
      color: nextjs_material_kit_pro["q" /* grayColor */][1],
      textDecoration: "none"
    },
    "& ul:not($socialButtons) li a": {
      color: "inherit",
      padding: "0.9375rem",
      fontWeight: "500",
      fontSize: "12px",
      textTransform: "uppercase",
      borderRadius: "3px",
      textDecoration: "none",
      position: "relative",
      display: "block"
    },
    "& small": {
      fontSize: "75%",
      color: nextjs_material_kit_pro["q" /* grayColor */][10]
    },
    "& $pullCenter": {
      display: "inline-block",
      float: "none"
    }
  },
  iconSocial: {
    width: "41px",
    height: "41px",
    fontSize: "24px",
    minWidth: "41px",
    padding: 0,
    overflow: "hidden",
    position: "relative"
  },
  copyRight: {
    padding: "15px 0px"
  },
  socialButtons: {
    "& li": {
      display: "inline-block"
    }
  },
  btnTwitter: _objectSpread({}, nextjs_material_kit_pro["d" /* btnLink */], {
    color: nextjs_material_kit_pro["Q" /* twitterColor */]
  }),
  btnDribbble: _objectSpread({}, nextjs_material_kit_pro["d" /* btnLink */], {
    color: nextjs_material_kit_pro["n" /* dribbbleColor */]
  }),
  btnInstagram: _objectSpread({}, nextjs_material_kit_pro["d" /* btnLink */], {
    color: nextjs_material_kit_pro["v" /* instagramColor */]
  }),
  icon: {
    top: "3px",
    width: "18px",
    height: "18px",
    position: "relative"
  },
  customFormControl: {
    paddingTop: "14px"
  },
  imgContainer: {
    width: "107px",
    maxHeight: "auto",
    overflow: "hidden",
    display: "block",
    "& img": {
      width: "100%"
    }
  },
  titleFooter: _objectSpread({
    color: "#ffffff !important"
  }, nextjs_material_kit_pro["k" /* defaultFont */]),
  '@media (max-width: 747px)': {
    centerPhone: {
      marginTop: "15px",
      textAlign: "center"
    }
  }
});

/* harmony default export */ var footerStyle = (style);
// CONCATENATED MODULE: ./pages-sections/footer/SectionFooter.js
var __jsx = external_react_default.a.createElement;

/*eslint-disable*/
 // nodejs library that concatenates classes

 // @material-ui/core components



 // @material-ui/icons


 // core components




















const useStyles = Object(styles_["makeStyles"])(footerStyle);
function SectionFooter() {
  const classes = useStyles();
  return __jsx(GridContainer["a" /* default */], {
    className: classes.content,
    justify: "center"
  }, __jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 12,
    md: 8
  }, __jsx(Footer["a" /* default */], {
    theme: "dark",
    className: classes.footer,
    content: __jsx("div", {
      className: external_classnames_default()(classes.pullCenter, classes.copyRight)
    }, "Copyright \xA9 ", 1900 + new Date().getYear(), " ", __jsx("a", {
      href: "https://www.justfit.com.br",
      target: "_blank"
    }, "Clicou Personal"), " ", "- Just Fit Participa\xE7\xF5es em Empreendimentos S.A - 16.738.149/0007-06")
  }, __jsx(GridContainer["a" /* default */], {
    justify: "center"
  }, __jsx(GridItem["a" /* default */], {
    xs: 6,
    sm: 2,
    md: 2
  }, __jsx("div", {
    className: classes.right
  }, __jsx("div", {
    className: classes.imgContainer
  }, __jsx("img", {
    src: letsencrypt_White_default.a,
    alt: "...",
    className: classes.img
  })))), __jsx(GridItem["a" /* default */], {
    xs: 6,
    sm: 2,
    md: 2
  }, __jsx("div", {
    className: classes.left
  }, __jsx("div", {
    className: classes.imgContainer,
    style: {
      marginTop: "20px"
    }
  }, __jsx("img", {
    src: selossl_default.a,
    alt: "...",
    className: classes.img
  })))), __jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 4,
    md: 4
  }, __jsx("div", {
    className: classes.left,
    style: {
      width: "100%"
    }
  }, __jsx("div", {
    style: {
      marginTop: "35px"
    }
  }, __jsx("img", {
    src: img_card_new_default.a,
    alt: "...",
    style: {
      width: "100%"
    }
  }))))))));
}

/***/ }),

/***/ "fEgT":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Dialog");

/***/ }),

/***/ "fdRS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ CustomizedSteppers; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__("dYMV");
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);

// EXTERNAL MODULE: external "react-gtm-module"
var external_react_gtm_module_ = __webpack_require__("hI02");
var external_react_gtm_module_default = /*#__PURE__*/__webpack_require__.n(external_react_gtm_module_);

// EXTERNAL MODULE: external "@material-ui/core/Stepper"
var Stepper_ = __webpack_require__("UpG9");
var Stepper_default = /*#__PURE__*/__webpack_require__.n(Stepper_);

// EXTERNAL MODULE: external "@material-ui/core/Step"
var Step_ = __webpack_require__("OvFP");
var Step_default = /*#__PURE__*/__webpack_require__.n(Step_);

// EXTERNAL MODULE: external "@material-ui/core/StepLabel"
var StepLabel_ = __webpack_require__("EfMu");
var StepLabel_default = /*#__PURE__*/__webpack_require__.n(StepLabel_);

// EXTERNAL MODULE: external "@material-ui/icons/Check"
var Check_ = __webpack_require__("9qvJ");
var Check_default = /*#__PURE__*/__webpack_require__.n(Check_);

// EXTERNAL MODULE: external "@material-ui/icons/Settings"
var Settings_ = __webpack_require__("XnMA");

// EXTERNAL MODULE: external "@material-ui/icons/GroupAdd"
var GroupAdd_ = __webpack_require__("C7ur");

// EXTERNAL MODULE: external "@material-ui/icons/VideoLabel"
var VideoLabel_ = __webpack_require__("WJyg");

// EXTERNAL MODULE: external "@material-ui/icons/AccountCircle"
var AccountCircle_ = __webpack_require__("DME6");
var AccountCircle_default = /*#__PURE__*/__webpack_require__.n(AccountCircle_);

// EXTERNAL MODULE: external "@material-ui/icons/Payment"
var Payment_ = __webpack_require__("lBNU");
var Payment_default = /*#__PURE__*/__webpack_require__.n(Payment_);

// EXTERNAL MODULE: external "@material-ui/icons/Favorite"
var Favorite_ = __webpack_require__("Fm7H");
var Favorite_default = /*#__PURE__*/__webpack_require__.n(Favorite_);

// EXTERNAL MODULE: external "@material-ui/icons/ShoppingCart"
var ShoppingCart_ = __webpack_require__("FQAE");
var ShoppingCart_default = /*#__PURE__*/__webpack_require__.n(ShoppingCart_);

// EXTERNAL MODULE: external "@material-ui/core/StepConnector"
var StepConnector_ = __webpack_require__("WkHw");
var StepConnector_default = /*#__PURE__*/__webpack_require__.n(StepConnector_);

// EXTERNAL MODULE: external "@material-ui/core/Button"
var Button_ = __webpack_require__("Wh1t");
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);

// EXTERNAL MODULE: external "@material-ui/core/Typography"
var Typography_ = __webpack_require__("UVoM");
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./components/Header/Header.js + 1 modules
var Header = __webpack_require__("8x5e");

// EXTERNAL MODULE: ./components/Header/HeaderLinks.js + 4 modules
var HeaderLinks = __webpack_require__("8E12");

// EXTERNAL MODULE: ./components/Grid/GridContainer.js
var GridContainer = __webpack_require__("mtPR");

// EXTERNAL MODULE: ./components/Grid/GridItem.js
var GridItem = __webpack_require__("i4t8");

// EXTERNAL MODULE: external "@material-ui/core/Grow"
var Grow_ = __webpack_require__("mf1M");
var Grow_default = /*#__PURE__*/__webpack_require__.n(Grow_);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "@material-ui/core/MobileStepper"
var MobileStepper_ = __webpack_require__("Mh7T");

// EXTERNAL MODULE: external "@material-ui/icons/KeyboardArrowLeft"
var KeyboardArrowLeft_ = __webpack_require__("DRbO");

// EXTERNAL MODULE: external "@material-ui/icons/KeyboardArrowRight"
var KeyboardArrowRight_ = __webpack_require__("nd8x");

// EXTERNAL MODULE: ./pages-sections/footer/SectionFooter.js + 1 modules
var SectionFooter = __webpack_require__("f206");

// EXTERNAL MODULE: external "react-google-maps"
var external_react_google_maps_ = __webpack_require__("9Tpg");

// EXTERNAL MODULE: external "@material-ui/core/Checkbox"
var Checkbox_ = __webpack_require__("r6Lb");
var Checkbox_default = /*#__PURE__*/__webpack_require__.n(Checkbox_);

// EXTERNAL MODULE: external "@material-ui/core/FormControlLabel"
var FormControlLabel_ = __webpack_require__("7s44");
var FormControlLabel_default = /*#__PURE__*/__webpack_require__.n(FormControlLabel_);

// EXTERNAL MODULE: external "@material-ui/icons/PinDrop"
var PinDrop_ = __webpack_require__("RVvK");

// EXTERNAL MODULE: external "@material-ui/icons/Phone"
var Phone_ = __webpack_require__("lgrB");
var Phone_default = /*#__PURE__*/__webpack_require__.n(Phone_);

// EXTERNAL MODULE: ./components/InfoArea/InfoArea.js + 1 modules
var InfoArea = __webpack_require__("TT5w");

// EXTERNAL MODULE: ./components/Card/Card.js + 1 modules
var Card = __webpack_require__("A2So");

// EXTERNAL MODULE: ./components/Card/CardHeader.js + 1 modules
var CardHeader = __webpack_require__("2zww");

// EXTERNAL MODULE: ./components/Card/CardBody.js + 1 modules
var CardBody = __webpack_require__("UsYt");

// EXTERNAL MODULE: ./components/Card/CardFooter.js + 1 modules
var CardFooter = __webpack_require__("5LSk");

// EXTERNAL MODULE: ./components/CustomInput/CustomInput.js + 1 modules
var CustomInput = __webpack_require__("um8N");

// EXTERNAL MODULE: ./components/CustomButtons/Button.js + 1 modules
var Button = __webpack_require__("Kg+a");

// EXTERNAL MODULE: external "@material-ui/core/FormHelperText"
var FormHelperText_ = __webpack_require__("hbHv");
var FormHelperText_default = /*#__PURE__*/__webpack_require__.n(FormHelperText_);

// EXTERNAL MODULE: external "@material-ui/core/FormControl"
var FormControl_ = __webpack_require__("lWoh");
var FormControl_default = /*#__PURE__*/__webpack_require__.n(FormControl_);

// EXTERNAL MODULE: external "@material-ui/core/FormGroup"
var FormGroup_ = __webpack_require__("4DPt");
var FormGroup_default = /*#__PURE__*/__webpack_require__.n(FormGroup_);

// EXTERNAL MODULE: external "react-hook-form"
var external_react_hook_form_ = __webpack_require__("BTiB");

// EXTERNAL MODULE: external "@hookform/resolvers"
var resolvers_ = __webpack_require__("OFr4");

// EXTERNAL MODULE: external "yup"
var external_yup_ = __webpack_require__("C8TP");

// EXTERNAL MODULE: ./assets/jss/nextjs-material-kit-pro.js
var nextjs_material_kit_pro = __webpack_require__("36KI");

// CONCATENATED MODULE: ./assets/jss/nextjs-material-kit-pro/customCheckboxRadioSwitchStyle.js

const customCheckboxRadioSwitch = {
  checkRoot: {
    padding: "14px",
    "&:hover": {
      backgroundColor: "unset !important"
    }
  },
  radioRoot: {
    padding: "16px",
    "&:hover": {
      backgroundColor: "unset !important"
    }
  },
  labelRoot: {
    marginLeft: "-14px"
  },
  checkboxAndRadio: {
    position: "relative",
    display: "block",
    marginTop: "10px",
    marginBottom: "10px"
  },
  checkboxAndRadioHorizontal: {
    position: "relative",
    display: "block",
    "&:first-child": {
      marginTop: "10px"
    },
    "&:not(:first-child)": {
      marginTop: "-14px"
    },
    marginTop: "0",
    marginBottom: "0"
  },
  checked: {
    color: nextjs_material_kit_pro["C" /* primaryColor */][0] + "!important"
  },
  checkedIcon: {
    width: "20px",
    height: "20px",
    border: "1px solid rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.84)",
    borderRadius: "3px"
  },
  uncheckedIcon: {
    width: "0px",
    height: "0px",
    padding: "9px",
    border: "1px solid rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", .54)",
    borderRadius: "3px"
  },
  disabledCheckboxAndRadio: {
    "& $checkedIcon,& $uncheckedIcon,& $radioChecked,& $radioUnchecked": {
      borderColor: nextjs_material_kit_pro["b" /* blackColor */],
      opacity: "0.26",
      color: nextjs_material_kit_pro["b" /* blackColor */]
    }
  },
  label: {
    cursor: "pointer",
    paddingLeft: "0",
    color: nextjs_material_kit_pro["q" /* grayColor */][12],
    fontSize: "14px",
    lineHeight: "1.428571429",
    fontWeight: "400",
    display: "inline-flex",
    transition: "0.3s ease all",
    letterSpacing: "unset"
  },
  labelHorizontal: {
    color: "rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.26)",
    cursor: "pointer",
    display: "inline-flex",
    fontSize: "14px",
    lineHeight: "1.428571429",
    fontWeight: "400",
    paddingTop: "39px",
    marginRight: "0",
    "@media (min-width: 992px)": {
      float: "right"
    }
  },
  labelHorizontalRadioCheckbox: {
    paddingTop: "22px"
  },
  labelLeftHorizontal: {
    color: "rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.26)",
    cursor: "pointer",
    display: "inline-flex",
    fontSize: "14px",
    lineHeight: "1.428571429",
    fontWeight: "400",
    paddingTop: "22px",
    marginRight: "0"
  },
  labelError: {
    color: nextjs_material_kit_pro["j" /* dangerColor */][0]
  },
  radio: {
    color: nextjs_material_kit_pro["C" /* primaryColor */][0] + "!important"
  },
  radioChecked: {
    width: "16px",
    height: "16px",
    border: "1px solid " + nextjs_material_kit_pro["C" /* primaryColor */][0],
    borderRadius: "50%"
  },
  radioUnchecked: {
    width: "0px",
    height: "0px",
    padding: "7px",
    border: "1px solid rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", .54)",
    borderRadius: "50%"
  },
  inlineChecks: {
    marginTop: "8px"
  },
  iconCheckbox: {
    height: "116px",
    width: "116px",
    color: nextjs_material_kit_pro["q" /* grayColor */][0],
    "& > span:first-child": {
      borderWidth: "4px",
      borderStyle: "solid",
      borderColor: nextjs_material_kit_pro["q" /* grayColor */][17],
      textAlign: "center",
      verticalAlign: "middle",
      borderRadius: "50%",
      color: "inherit",
      margin: "0 auto 20px",
      transition: "all 0.2s"
    },
    "&:hover": {
      color: nextjs_material_kit_pro["G" /* roseColor */][0],
      "& > span:first-child": {
        borderColor: nextjs_material_kit_pro["G" /* roseColor */][0]
      }
    }
  },
  iconCheckboxChecked: {
    color: nextjs_material_kit_pro["G" /* roseColor */][0],
    "& > span:first-child": {
      borderColor: nextjs_material_kit_pro["G" /* roseColor */][0]
    }
  },
  iconCheckboxIcon: {
    fontSize: "40px",
    lineHeight: "111px"
  },
  switchBase: {
    color: nextjs_material_kit_pro["C" /* primaryColor */][0] + "!important"
  },
  switchIcon: {
    boxShadow: "0 1px 3px 1px rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.4)",
    color: nextjs_material_kit_pro["U" /* whiteColor */] + "  !important",
    border: "1px solid rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", .54)"
  },
  switchIconChecked: {
    borderColor: nextjs_material_kit_pro["C" /* primaryColor */][0],
    transform: "translateX(0px)!important"
  },
  switchBar: {
    width: "30px",
    height: "15px",
    backgroundColor: "rgb(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["q" /* grayColor */][24]) + ")",
    borderRadius: "15px",
    opacity: "0.7!important"
  },
  switchChecked: {
    "& + $switchBar": {
      backgroundColor: "rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["C" /* primaryColor */][0]) + ", 1) !important"
    },
    "& $switchIcon": {
      borderColor: nextjs_material_kit_pro["C" /* primaryColor */][0]
    }
  }
};
/* harmony default export */ var customCheckboxRadioSwitchStyle = (customCheckboxRadioSwitch);
// CONCATENATED MODULE: ./assets/jss/nextjs-material-kit-pro/pages/sectionsSections/contactsStyle.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const contactsSection = _objectSpread({}, customCheckboxRadioSwitchStyle, {
  container: nextjs_material_kit_pro["g" /* container */],
  mlAuto: nextjs_material_kit_pro["x" /* mlAuto */],
  title: nextjs_material_kit_pro["N" /* title */],
  description: nextjs_material_kit_pro["l" /* description */],
  cardTitle: nextjs_material_kit_pro["e" /* cardTitle */],
  section: _objectSpread({}, nextjs_material_kit_pro["J" /* sectionDark */], {}, nextjs_material_kit_pro["I" /* section */], {
    position: "relative",
    "& $container": {
      zIndex: "2",
      position: "relative"
    },
    "&:after": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: "''",
      backgroundColor: "rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.7)"
    },
    "& $title": {
      color: nextjs_material_kit_pro["U" /* whiteColor */]
    },
    "& $description": {
      color: "rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["U" /* whiteColor */]) + ", 0.76)"
    },
    "& $infoArea": {}
  }),
  contacts: {
    padding: "80px 0"
  },
  infoArea: {
    padding: "0",
    margin: "0",
    "& svg,& .fab,& .fas,& .far,& .fal,& .material-icons": {
      color: nextjs_material_kit_pro["U" /* whiteColor */]
    },
    "& h4": {
      marginTop: "20px",
      color: nextjs_material_kit_pro["U" /* whiteColor */]
    }
  },
  card1: {
    marginTop: "30px",
    "& $cardTitle": {
      marginBottom: "0.75rem !important",
      color: nextjs_material_kit_pro["U" /* whiteColor */]
    }
  },
  textCenter: {
    textAlign: "center"
  },
  justifyContentBetween: {
    WebkitBoxPack: "justify !important",
    MsFlexPack: "justify !important",
    justifyContent: "space-between !important"
  },
  pullRight: {
    float: "right"
  },
  card2: {
    "@media (min-width: 991px)": {
      margin: "80px 0 80px 150px"
    },
    maxWidth: "560px",
    float: "left",
    "& $cardTitle": {
      marginBottom: "0.75rem !important",
      color: nextjs_material_kit_pro["U" /* whiteColor */]
    }
  },
  map: {
    overflow: "hidden",
    width: "100%",
    height: "800px",
    position: "absolute"
  },
  contacts2: {
    padding: "0",
    height: "800px"
  },
  infoArea2: {
    padding: "0",
    margin: "0",
    "& h4": {
      fontSize: "1.0625rem",
      lineHeight: "1.55em"
    }
  }
});

/* harmony default export */ var contactsStyle = (contactsSection);
// EXTERNAL MODULE: ./assets/img/examples/city.jpg
var city = __webpack_require__("2weN");

// CONCATENATED MODULE: ./pages-sections/checkout/SectionContacts.js
var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

 // react components used to create a google map

 // @material-ui/core components



 // @material-ui/icons



 // core components



















const useStyles = Object(styles_["makeStyles"])(contactsStyle);
Object(external_yup_["setLocale"])({
  mixed: {
    notType: function notType(_ref) {
      switch (_ref.type) {
        case 'number':
          return 'deve ser um número';

        case 'string':
          return 'deve ser um texto';

        default:
          return 'formato errado';
      }
    },
    default: 'é inválido',
    required: 'é um campo obrigatório',
    oneOf: 'deve ser um dos seguintes valores: ${values}',
    notOneOf: 'não pode ser um dos seguintes valores: ${values}'
  },
  string: {
    length: 'deve ter exatamente ${length} caracteres',
    min: 'deve ter pelo menos ${min} caracteres',
    max: 'deve ter no máximo ${max} caracteres',
    email: 'tem o formato de e-mail inválido',
    url: 'deve ter um formato de URL válida',
    trim: 'não deve conter espaços no início ou no fim.',
    lowercase: 'deve estar em maiúsculo',
    uppercase: 'deve estar em minúsculo'
  },
  number: {
    min: 'deve ser no mínimo ${min}',
    max: 'deve ser no máximo ${max}',
    lessThan: 'deve ser menor que ${less}',
    moreThan: 'deve ser maior que ${more}',
    notEqual: 'não pode ser igual à ${notEqual}',
    positive: 'deve ser um número posítivo',
    negative: 'deve ser um número negativo',
    integer: 'deve ser um número inteiro'
  },
  date: {
    min: 'deve ser maior que a data ${min}',
    max: 'deve ser menor que a data ${max}'
  },
  array: {
    min: 'deve ter no mínimo ${min} itens',
    max: 'deve ter no máximo ${max} itens'
  }
});
const SignupSchema = external_yup_["object"]().shape({
  // firstName: yup.string().required(),
  first: external_yup_["string"]().required(),
  email: external_yup_["string"]().required(),
  last: external_yup_["number"]().required().positive().integer(),
  message: external_yup_["string"]().url(),
  checkboxInput: external_yup_["boolean"]().oneOf([true], 'aceite obrigatório')
}); // const schema = yup.object().shape({
//   first: yup.string().required(),
//   age: yup.number().positive().integer().required(),
// });

function SectionContacts(_ref2) {
  let rest = Object.assign({}, _ref2);
  // const { register, errors, handleSubmit} = useForm({
  //   validationSchema: SignupSchema
  // });
  const {
    register,
    handleSubmit,
    errors
  } = Object(external_react_hook_form_["useForm"])({
    resolver: Object(resolvers_["yupResolver"])(SignupSchema)
  });

  const onSubmit = data => {
    console.log(data); // alert(JSON.stringify(data, null));
  };

  const [checked, setChecked] = external_react_default.a.useState([]);

  const handleToggle = value => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const classes = useStyles();
  return __jsx("div", _extends({
    className: "cd-section"
  }, rest), __jsx("div", {
    className: classes.contacts + " " + classes.section // style={{ backgroundImage: `url(${city})` }}
    // style={{ backgroundImage: `url(${city})` }}

  }, __jsx("div", {
    className: classes.container
  }, __jsx(GridContainer["a" /* default */], {
    justify: "center"
  }, __jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 12,
    md: 5
  }, __jsx(Card["a" /* default */], {
    className: classes.card1
  }, __jsx("form", {
    onSubmit: handleSubmit(onSubmit)
  }, __jsx(CardHeader["a" /* default */], {
    contact: true,
    color: "primary",
    className: classes.textCenter
  }, __jsx("h4", {
    className: classes.cardTitle
  }, "Identifica\xE7\xE3o")), __jsx(CardBody["a" /* default */], null, __jsx(GridContainer["a" /* default */], null, __jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 6,
    md: 6
  }, __jsx(CustomInput["a" /* default */], {
    labelText: "First Name",
    labelError: errors.first && errors.first.message,
    id: "first",
    error: errors.first ? true : false,
    formControlProps: {
      fullWidth: true
    },
    helperText: "Incorrect entry.",
    inputProps: {
      name: "first",
      inputRef: register
    }
  })), __jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 6,
    md: 6
  }, __jsx(CustomInput["a" /* default */], {
    labelText: "Last Name",
    labelError: errors.last && errors.last.message,
    error: errors.last ? true : false,
    id: "last",
    formControlProps: {
      fullWidth: true
    },
    inputProps: {
      name: "last",
      inputRef: register
    }
  }))), __jsx(CustomInput["a" /* default */], {
    labelText: "Email Address",
    labelError: errors.email && errors.email.message,
    error: errors.email ? true : false,
    id: "email",
    formControlProps: {
      fullWidth: true
    },
    inputProps: {
      name: "email",
      inputRef: register
    }
  }), __jsx(CustomInput["a" /* default */], {
    labelText: "Your Message",
    labelError: errors.message && errors.message.message,
    error: errors.message ? true : false,
    id: "message",
    formControlProps: {
      fullWidth: true
    },
    inputProps: {
      multiline: true,
      rows: 5,
      name: "message",
      inputRef: register
    }
  })), __jsx(CardFooter["a" /* default */], {
    className: classes.justifyContentBetween
  }, __jsx(FormControl_default.a, {
    required: true,
    error: errors.checkboxInput,
    component: "fieldset",
    className: classes.formControl
  }, __jsx(FormGroup_default.a, null, __jsx(FormControlLabel_default.a, {
    control: __jsx(Checkbox_default.a, {
      tabIndex: -1,
      onClick: () => handleToggle(1),
      checkedIcon: __jsx(Check_default.a, {
        className: classes.checkedIcon
      }),
      icon: __jsx(Check_default.a, {
        className: classes.uncheckedIcon
      }),
      classes: {
        checked: classes.checked,
        root: classes.checkRoot
      },
      name: "checkboxInput",
      inputRef: register
    }),
    classes: {
      label: classes.label
    },
    label: "I'm not a robot"
  })), __jsx(FormHelperText_default.a, null, errors.checkboxInput ? errors.checkboxInput.message : "")), __jsx(Button["a" /* default */], {
    type: "submit",
    color: "primary",
    className: classes.pullRight
  }, "Send Message")))))))));
}
// EXTERNAL MODULE: external "@material-ui/core/InputAdornment"
var InputAdornment_ = __webpack_require__("lj8g");
var InputAdornment_default = /*#__PURE__*/__webpack_require__.n(InputAdornment_);

// EXTERNAL MODULE: external "@material-ui/icons/Email"
var Email_ = __webpack_require__("OL+V");
var Email_default = /*#__PURE__*/__webpack_require__.n(Email_);

// EXTERNAL MODULE: external "@material-ui/icons/Event"
var Event_ = __webpack_require__("xVs5");
var Event_default = /*#__PURE__*/__webpack_require__.n(Event_);

// EXTERNAL MODULE: external "@material-ui/icons/AssignmentInd"
var AssignmentInd_ = __webpack_require__("w/MP");
var AssignmentInd_default = /*#__PURE__*/__webpack_require__.n(AssignmentInd_);

// EXTERNAL MODULE: external "@material-ui/core/CircularProgress"
var CircularProgress_ = __webpack_require__("1imS");
var CircularProgress_default = /*#__PURE__*/__webpack_require__.n(CircularProgress_);

// EXTERNAL MODULE: ./components/Snackbar/SnackbarContent.js + 1 modules
var SnackbarContent = __webpack_require__("FoiA");

// CONCATENATED MODULE: ./pages-sections/checkout/identification/FieldsCpf.js
var FieldsCpf_jsx = external_react_default.a.createElement;

function FieldsCpf_extends() { FieldsCpf_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return FieldsCpf_extends.apply(this, arguments); }


 // react components used to create a google map

 // @material-ui/core components



 // @material-ui/icons



 // core components




















const FieldsCpf_useStyles = Object(styles_["makeStyles"])(contactsStyle);
Object(external_yup_["setLocale"])({
  mixed: {
    notType: function notType(_ref) {
      switch (_ref.type) {
        case 'number':
          return 'deve ser um número';

        case 'string':
          return 'deve ser um texto';

        default:
          return 'formato errado';
      }
    },
    default: 'é inválido',
    required: 'é um campo obrigatório',
    oneOf: 'deve ser um dos seguintes valores: ${values}',
    notOneOf: 'não pode ser um dos seguintes valores: ${values}'
  },
  string: {
    length: 'deve ter exatamente ${length} caracteres',
    min: 'deve ter pelo menos ${min} caracteres',
    max: 'deve ter no máximo ${max} caracteres',
    email: 'tem o formato de e-mail inválido',
    url: 'deve ter um formato de URL válida',
    trim: 'não deve conter espaços no início ou no fim.',
    lowercase: 'deve estar em maiúsculo',
    uppercase: 'deve estar em minúsculo'
  },
  number: {
    min: 'deve ser no mínimo ${min}',
    max: 'deve ser no máximo ${max}',
    lessThan: 'deve ser menor que ${less}',
    moreThan: 'deve ser maior que ${more}',
    notEqual: 'não pode ser igual à ${notEqual}',
    positive: 'deve ser um número posítivo',
    negative: 'deve ser um número negativo',
    integer: 'deve ser um número inteiro'
  },
  date: {
    min: 'deve ser maior que a data ${min}',
    max: 'deve ser menor que a data ${max}'
  },
  array: {
    min: 'deve ter no mínimo ${min} itens',
    max: 'deve ter no máximo ${max} itens'
  }
});
const FieldsCpf_SignupSchema = external_yup_["object"]().shape({
  // firstName: yup.string().required(),
  first: external_yup_["string"]().required(),
  email: external_yup_["string"]().required(),
  last: external_yup_["number"]().required().positive().integer(),
  message: external_yup_["string"]().url(),
  checkboxInput: external_yup_["boolean"]().oneOf([true], 'aceite obrigatório')
}); // const schema = yup.object().shape({
//   first: yup.string().required(),
//   age: yup.number().positive().integer().required(),
// });

function FieldsCpf(props) {
  // const { register, errors, handleSubmit} = useForm({
  //   validationSchema: SignupSchema
  // });
  const {
    register,
    handleSubmit,
    errors
  } = props;

  const onSubmit = data => {
    console.log(data); // alert(JSON.stringify(data, null));
  };

  const [checked, setChecked] = external_react_default.a.useState([]);

  const handleToggle = value => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const [isAluno, setIsAluno] = external_react_default.a.useState(true);
  const classes = FieldsCpf_useStyles();
  return FieldsCpf_jsx(external_react_default.a.Fragment, null, FieldsCpf_jsx(Grow_default.a, FieldsCpf_extends({
    in: props.visible,
    style: {
      transformOrigin: '0 0 0',
      display: props.visible ? "block" : "none"
    }
  }, props.visible ? {
    timeout: 1000
  } : {}), FieldsCpf_jsx(CardBody["a" /* default */], null, FieldsCpf_jsx(GridContainer["a" /* default */], {
    justify: "center"
  }, FieldsCpf_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 6,
    md: 6
  }, FieldsCpf_jsx(CustomInput["a" /* default */], {
    labelText: "First Name",
    labelError: errors.first && errors.first.message,
    id: "first",
    error: errors.first ? true : false,
    formControlProps: {
      fullWidth: true
    },
    helperText: "Incorrect entry.",
    inputProps: {
      name: "first",
      inputRef: register
    }
  }))))));
}
// CONCATENATED MODULE: ./pages-sections/checkout/identification/FieldsPersonalData.js
var FieldsPersonalData_jsx = external_react_default.a.createElement;

function FieldsPersonalData_extends() { FieldsPersonalData_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return FieldsPersonalData_extends.apply(this, arguments); }


 // react components used to create a google map

 // @material-ui/core components



 // @material-ui/icons



 // core components




















const FieldsPersonalData_useStyles = Object(styles_["makeStyles"])(contactsStyle);
Object(external_yup_["setLocale"])({
  mixed: {
    notType: function notType(_ref) {
      switch (_ref.type) {
        case 'number':
          return 'deve ser um número';

        case 'string':
          return 'deve ser um texto';

        default:
          return 'formato errado';
      }
    },
    default: 'é inválido',
    required: 'é um campo obrigatório',
    oneOf: 'deve ser um dos seguintes valores: ${values}',
    notOneOf: 'não pode ser um dos seguintes valores: ${values}'
  },
  string: {
    length: 'deve ter exatamente ${length} caracteres',
    min: 'deve ter pelo menos ${min} caracteres',
    max: 'deve ter no máximo ${max} caracteres',
    email: 'tem o formato de e-mail inválido',
    url: 'deve ter um formato de URL válida',
    trim: 'não deve conter espaços no início ou no fim.',
    lowercase: 'deve estar em maiúsculo',
    uppercase: 'deve estar em minúsculo'
  },
  number: {
    min: 'deve ser no mínimo ${min}',
    max: 'deve ser no máximo ${max}',
    lessThan: 'deve ser menor que ${less}',
    moreThan: 'deve ser maior que ${more}',
    notEqual: 'não pode ser igual à ${notEqual}',
    positive: 'deve ser um número posítivo',
    negative: 'deve ser um número negativo',
    integer: 'deve ser um número inteiro'
  },
  date: {
    min: 'deve ser maior que a data ${min}',
    max: 'deve ser menor que a data ${max}'
  },
  array: {
    min: 'deve ter no mínimo ${min} itens',
    max: 'deve ter no máximo ${max} itens'
  }
});
const FieldsPersonalData_SignupSchema = external_yup_["object"]().shape({
  // firstName: yup.string().required(),
  first: external_yup_["string"]().required(),
  email: external_yup_["string"]().required(),
  last: external_yup_["number"]().required().positive().integer(),
  message: external_yup_["string"]().url(),
  checkboxInput: external_yup_["boolean"]().oneOf([true], 'aceite obrigatório')
}); // const schema = yup.object().shape({
//   first: yup.string().required(),
//   age: yup.number().positive().integer().required(),
// });

function FieldsPersonalData_FieldsCpf(props) {
  // const { register, errors, handleSubmit} = useForm({
  //   validationSchema: SignupSchema
  // });
  const {
    register,
    handleSubmit,
    errors
  } = props;

  const onSubmit = data => {
    console.log(data); // alert(JSON.stringify(data, null));
  };

  const [checked, setChecked] = external_react_default.a.useState([]);

  const handleToggle = value => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const [isAluno, setIsAluno] = external_react_default.a.useState(true);
  const classes = FieldsPersonalData_useStyles();
  return FieldsPersonalData_jsx(external_react_default.a.Fragment, null, FieldsPersonalData_jsx(Grow_default.a, FieldsPersonalData_extends({
    in: !props.visible,
    style: {
      transformOrigin: '0 0 0',
      display: !props.visible ? "block" : "none"
    }
  }, !props.visible ? {
    timeout: 1000
  } : {}), FieldsPersonalData_jsx(CardBody["a" /* default */], null, FieldsPersonalData_jsx(GridContainer["a" /* default */], {
    justify: "center"
  }, FieldsPersonalData_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 6,
    md: 6
  }, FieldsPersonalData_jsx(CustomInput["a" /* default */], {
    labelText: "Last Name",
    labelError: errors.last && errors.last.message,
    error: errors.last ? true : false,
    id: "last",
    formControlProps: {
      fullWidth: true
    },
    inputProps: {
      name: "last",
      inputRef: register
    }
  }))))));
}
// EXTERNAL MODULE: external "react-input-mask"
var external_react_input_mask_ = __webpack_require__("yKCf");

// EXTERNAL MODULE: external "react-text-mask"
var external_react_text_mask_ = __webpack_require__("I6Cj");
var external_react_text_mask_default = /*#__PURE__*/__webpack_require__.n(external_react_text_mask_);

// CONCATENATED MODULE: ./assets/jss/nextjs-material-kit-pro/customSelectStyle.js
function customSelectStyle_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function customSelectStyle_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { customSelectStyle_ownKeys(Object(source), true).forEach(function (key) { customSelectStyle_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { customSelectStyle_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function customSelectStyle_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const customSelectStyle = {
  select: {
    padding: "12px 0 7px",
    fontSize: ".75rem",
    fontWeight: "400",
    lineHeight: "1.42857",
    textDecoration: "none",
    textTransform: "uppercase",
    color: nextjs_material_kit_pro["q" /* grayColor */][1],
    letterSpacing: "0",
    "&:focus": {
      backgroundColor: "transparent"
    },
    "&[aria-owns] + input + svg": {
      transform: "rotate(180deg)"
    },
    "& + input + svg": {
      transition: "all 300ms linear"
    }
  },
  selectFormControl: {
    margin: "10px 1px 10px 0px !important",
    "& > div": {
      "&:before": {
        borderBottomWidth: "1px !important",
        borderBottomColor: nextjs_material_kit_pro["q" /* grayColor */][11] + " !important"
      },
      "&:after": {
        borderBottomColor: nextjs_material_kit_pro["C" /* primaryColor */][0] + "!important"
      }
    }
  },
  selectLabel: {
    fontSize: "12px",
    textTransform: "uppercase",
    color: nextjs_material_kit_pro["q" /* grayColor */][1] + " !important",
    top: "8px"
  },
  selectMenu: {
    "& > div > ul": {
      border: "0",
      padding: "5px 0",
      margin: "0",
      boxShadow: "none",
      minWidth: "100%",
      borderRadius: "4px",
      boxSizing: "border-box",
      display: "block",
      fontSize: "14px",
      textAlign: "left",
      listStyle: "none",
      backgroundColor: nextjs_material_kit_pro["U" /* whiteColor */],
      backgroundClip: "padding-box"
    },
    "& $selectPaper $selectMenuItemSelectedMultiple": {
      backgroundColor: "inherit"
    }
  },
  selectMenuItem: {
    fontSize: "13px",
    padding: "10px 20px",
    margin: "0 5px",
    borderRadius: "2px",
    transition: "all 150ms linear",
    display: "block",
    clear: "both",
    fontWeight: "400",
    lineHeight: "2",
    whiteSpace: "nowrap",
    color: nextjs_material_kit_pro["q" /* grayColor */][8],
    paddingRight: "30px",
    "&:hover": customSelectStyle_objectSpread({
      backgroundColor: nextjs_material_kit_pro["C" /* primaryColor */][0],
      color: nextjs_material_kit_pro["U" /* whiteColor */]
    }, nextjs_material_kit_pro["A" /* primaryBoxShadow */])
  },
  selectMenuItemSelected: {
    backgroundColor: nextjs_material_kit_pro["C" /* primaryColor */][0] + "!important",
    color: nextjs_material_kit_pro["U" /* whiteColor */]
  },
  selectMenuItemSelectedMultiple: {
    "&:hover": customSelectStyle_objectSpread({
      backgroundColor: nextjs_material_kit_pro["C" /* primaryColor */][0] + "!important",
      color: nextjs_material_kit_pro["U" /* whiteColor */]
    }, nextjs_material_kit_pro["A" /* primaryBoxShadow */], {
      "&:after": {
        color: nextjs_material_kit_pro["U" /* whiteColor */]
      }
    }),
    "&:after": {
      top: "16px",
      right: "12px",
      width: "12px",
      height: "5px",
      borderLeft: "2px solid currentColor",
      transform: "rotate(-45deg)",
      opacity: "1",
      color: nextjs_material_kit_pro["q" /* grayColor */][1],
      position: "absolute",
      content: "''",
      borderBottom: "2px solid currentColor",
      transition: "opacity 90ms cubic-bezier(0,0,.2,.1)"
    }
  },
  selectPaper: {
    boxSizing: "borderBox",
    borderRadius: "4px",
    padding: "0",
    minWidth: "100%",
    display: "block",
    border: "0",
    boxShadow: "0 2px 5px 0 rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.26)",
    backgroundClip: "padding-box",
    margin: "2px 0 0",
    fontSize: "14px",
    textAlign: "left",
    listStyle: "none",
    backgroundColor: "transparent",
    maxHeight: "266px"
  }
};
/* harmony default export */ var nextjs_material_kit_pro_customSelectStyle = (customSelectStyle);
// CONCATENATED MODULE: ./assets/jss/nextjs-material-kit-pro/pages/checkoutSections/checkoutStyle.js
function checkoutStyle_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function checkoutStyle_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { checkoutStyle_ownKeys(Object(source), true).forEach(function (key) { checkoutStyle_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { checkoutStyle_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function checkoutStyle_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const checkoutSection = checkoutStyle_objectSpread({}, customCheckboxRadioSwitchStyle, {}, nextjs_material_kit_pro_customSelectStyle, {
  selectLabel: checkoutStyle_objectSpread({}, nextjs_material_kit_pro_customSelectStyle.selectLabel, {
    textTransform: "none",
    fontSize: "14px",
    lineHeight: "0",
    color: "#aaaaaa",
    fontWeight: "400"
  }),
  container: nextjs_material_kit_pro["g" /* container */],
  mlAuto: nextjs_material_kit_pro["x" /* mlAuto */],
  title: nextjs_material_kit_pro["N" /* title */],
  description: nextjs_material_kit_pro["l" /* description */],
  cardTitle: nextjs_material_kit_pro["e" /* cardTitle */],
  section: checkoutStyle_objectSpread({}, nextjs_material_kit_pro["I" /* section */], {
    position: "relative",
    backgroundColor: nextjs_material_kit_pro["q" /* grayColor */][23],
    // backgroundImage: "linear-gradient(90deg, rgba(66,92,199,1) 0%, rgba(59,191,173,1) 100%)",
    "& $container": {
      zIndex: "2",
      position: "relative"
    },
    // "&:after": {
    //   position: "absolute",
    //   zIndex: "1",
    //   width: "100%",
    //   height: "100%",
    //   display: "block",
    //   left: "0",
    //   top: "0",
    //   content: "''",
    //   backgroundColor: "rgba(" + hexToRgb(blackColor) + ", 0.7)"
    // },
    "& $title": {
      color: nextjs_material_kit_pro["U" /* whiteColor */]
    },
    "& $description": {
      color: "rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["U" /* whiteColor */]) + ", 0.76)"
    },
    "& $infoArea": {}
  }),
  contacts: {
    padding: "40px 0",
    "@media (max-width: 576px)": {
      padding: "10px 0"
    }
  },
  infoArea: {
    padding: "0",
    margin: "0",
    "& svg,& .fab,& .fas,& .far,& .fal,& .material-icons": {
      color: nextjs_material_kit_pro["U" /* whiteColor */]
    },
    "& h4": {
      marginTop: "20px",
      color: nextjs_material_kit_pro["U" /* whiteColor */]
    }
  },
  card1: {
    marginTop: "30px",
    "& $cardTitle": {
      marginBottom: "0.75rem !important",
      color: nextjs_material_kit_pro["U" /* whiteColor */]
    }
  },
  textCenter: {
    textAlign: "center"
  },
  justifyContentBetween: {
    WebkitBoxPack: "justify !important",
    MsFlexPack: "justify !important",
    justifyContent: "space-between !important"
  },
  pullRight: {
    float: "right"
  },
  card2: {
    "@media (min-width: 991px)": {
      margin: "80px 0 80px 150px"
    },
    maxWidth: "560px",
    float: "left",
    "& $cardTitle": {
      marginBottom: "0.75rem !important",
      color: nextjs_material_kit_pro["U" /* whiteColor */]
    }
  },
  map: {
    overflow: "hidden",
    width: "100%",
    height: "800px",
    position: "absolute"
  },
  contacts2: {
    padding: "0",
    height: "800px"
  },
  infoArea2: {
    padding: "0",
    margin: "0",
    "& h4": {
      fontSize: "1.0625rem",
      lineHeight: "1.55em"
    }
  },
  containerCart: {
    maxWidth: "354px",
    margin: "0 auto",
    textAlign: "left",
    color: nextjs_material_kit_pro["U" /* whiteColor */],
    "& h4, & span, & a, & h5": {
      color: nextjs_material_kit_pro["U" /* whiteColor */],
      fontWeight: "900"
    },
    "& span": {
      fontWeight: "300"
    },
    "& h5 img": {
      height: "46px"
    }
  },
  noPaddingBottom: {
    paddingBottom: "0"
  },
  containerFieldsCard: {
    marginTop: "30px"
  },
  topZero: {
    top: "0"
  },
  marginZero: {
    marginTop: "0"
  },
  marginAuto: {
    margin: "0 auto",
    textAlign: "center"
  },
  colorPrimary: {
    color: nextjs_material_kit_pro["C" /* primaryColor */][0],
    "&:hover,&:focus,&:active": {
      color: nextjs_material_kit_pro["C" /* primaryColor */][0]
    }
  },
  itensResumo: {
    color: "#676767 !important",
    "& li": {
      color: "#676767 !important"
    }
  }
});

/* harmony default export */ var checkoutStyle = (checkoutSection);
// CONCATENATED MODULE: ./pages-sections/checkout/SectionIdentification.js
var SectionIdentification_jsx = external_react_default.a.createElement;

function SectionIdentification_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function SectionIdentification_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { SectionIdentification_ownKeys(Object(source), true).forEach(function (key) { SectionIdentification_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { SectionIdentification_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function SectionIdentification_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function SectionIdentification_extends() { SectionIdentification_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return SectionIdentification_extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



 // react components used to create a google map

 // @material-ui/core components




 // @material-ui/icons







 // core components



























const SectionIdentification_useStyles = Object(styles_["makeStyles"])(checkoutStyle);

function TextMaskCustom(props) {
  const {
    inputRef
  } = props,
        other = _objectWithoutProperties(props, ["inputRef"]);

  return SectionIdentification_jsx(external_react_text_mask_default.a, SectionIdentification_extends({}, other, {
    ref: ref => {
      inputRef(ref ? ref.inputElement : null);
    },
    mask: [/[0-9]/, /[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/],
    placeholderChar: '\u2007',
    guide: false,
    showMask: true
  }));
}

function PhoneMask(props) {
  const {
    inputRef
  } = props,
        other = _objectWithoutProperties(props, ["inputRef"]);

  return SectionIdentification_jsx(external_react_text_mask_default.a, SectionIdentification_extends({}, other, {
    ref: ref => {
      inputRef(ref ? ref.inputElement : null);
    },
    mask: ['(', /[1-9]/, /[0-9]/, ')', ' ', /[1-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/],
    placeholderChar: '\u2000',
    guide: false,
    showMask: true
  }));
}

function DateMask(props) {
  const {
    inputRef
  } = props,
        other = _objectWithoutProperties(props, ["inputRef"]);

  return SectionIdentification_jsx(external_react_text_mask_default.a, SectionIdentification_extends({}, other, {
    ref: ref => {
      inputRef(ref ? ref.inputElement : null);
    } // mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
    ,
    mask: [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/],
    placeholderChar: '\u2000',
    guide: false,
    showMask: true
  }));
}

function CEPMask(props) {
  const {
    inputRef
  } = props,
        other = _objectWithoutProperties(props, ["inputRef"]);

  return SectionIdentification_jsx(external_react_text_mask_default.a, SectionIdentification_extends({}, other, {
    ref: ref => {
      inputRef(ref ? ref.inputElement : null);
    } // mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
    ,
    mask: [/[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, /[0-9]/],
    placeholderChar: '\u2000',
    guide: false,
    showMask: true
  }));
}

Object(external_yup_["setLocale"])({
  mixed: {
    notType: function notType(_ref) {
      switch (_ref.type) {
        case 'number':
          return 'deve ser um número';

        case 'string':
          return 'deve ser um texto';

        default:
          return 'formato errado';
      }
    },
    default: 'é inválido',
    required: 'Desculpe, este campo é obrigatório',
    oneOf: 'deve ser um dos seguintes valores: ${values}',
    notOneOf: 'não pode ser um dos seguintes valores: ${values}'
  },
  string: {
    length: 'deve ter exatamente ${length} caracteres',
    min: 'deve ter pelo menos ${min} caracteres',
    max: 'deve ter no máximo ${max} caracteres',
    email: 'Por favor, informe um e-mail inválido',
    url: 'deve ter um formato de URL válida',
    trim: 'não deve conter espaços no início ou no fim.',
    lowercase: 'deve estar em maiúsculo',
    uppercase: 'deve estar em minúsculo'
  },
  number: {
    min: 'deve ser no mínimo ${min}',
    max: 'deve ser no máximo ${max}',
    lessThan: 'deve ser menor que ${less}',
    moreThan: 'deve ser maior que ${more}',
    notEqual: 'não pode ser igual à ${notEqual}',
    positive: 'deve ser um número posítivo',
    negative: 'deve ser um número negativo',
    integer: 'deve ser um número inteiro'
  },
  date: {
    min: 'deve ser maior que a data ${min}',
    max: 'deve ser menor que a data ${max}'
  },
  array: {
    min: 'deve ter no mínimo ${min} itens',
    max: 'deve ter no máximo ${max} itens'
  }
});
const regexCPF = /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/gm;

function cpfValidate(cpf) {
  console.log("Validatring", cpf);
  return cpf.length > 10;
}

function isValidCPF(cpf) {
  if (typeof cpf !== "string") return false;
  cpf = cpf.replace(/[\s.-]*/igm, '');

  if (!cpf || cpf.length != 11 || cpf == "00000000000" || cpf == "11111111111" || cpf == "22222222222" || cpf == "33333333333" || cpf == "44444444444" || cpf == "55555555555" || cpf == "66666666666" || cpf == "77777777777" || cpf == "88888888888" || cpf == "99999999999") {
    return false;
  }

  var soma = 0;
  var resto;

  for (var i = 1; i <= 9; i++) soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);

  resto = soma * 10 % 11;
  if (resto == 10 || resto == 11) resto = 0;
  if (resto != parseInt(cpf.substring(9, 10))) return false;
  soma = 0;

  for (var i = 1; i <= 10; i++) soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);

  resto = soma * 10 % 11;
  if (resto == 10 || resto == 11) resto = 0;
  if (resto != parseInt(cpf.substring(10, 11))) return false;
  return true;
}

function isValidPhone(phone) {
  return /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/.test(phone);
}

function isValidDate(dateString) {
  // return /^((((0?[1-9]|[12]\d|3[01])[\.\-\/](0?[13578]|1[02])      [\.\-\/]((1[6-9]|[2-9]\d)?\d{2}))|((0?[1-9]|[12]\d|30)[\.\-\/](0?[13456789]|1[012])[\.\-\/]((1[6-9]|[2-9]\d)?\d{2}))|((0?[1-9]|1\d|2[0-8])[\.\-\/]0?2[\.\-\/]((1[6-9]|[2-9]\d)?\d{2}))|(29[\.\-\/]0?2[\.\-\/]((1[6-9]|[2-9]\d)?(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00)|00)))|(((0[1-9]|[12]\d|3[01])(0[13578]|1[02])((1[6-9]|[2-9]\d)?\d{2}))|((0[1-9]|[12]\d|30)(0[13456789]|1[012])((1[6-9]|[2-9]\d)?\d{2}))|((0[1-9]|1\d|2[0-8])02((1[6-9]|[2-9]\d)?\d{2}))|(2902((1[6-9]|[2-9]\d)?(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00)|00))))$/.test(date);
  // First check for the pattern
  if (!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(dateString)) return false; // Parse the date parts to integers

  var parts = dateString.split("/");
  var day = parseInt(parts[0], 10);
  var month = parseInt(parts[1], 10);
  var year = parseInt(parts[2], 10); // Check the ranges of month and year

  if (year < 1000 || year > 3000 || month == 0 || month > 12) return false;
  var monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // Adjust for leap years

  if (year % 400 == 0 || year % 100 != 0 && year % 4 == 0) monthLength[1] = 29; // Check the range of the day

  return day > 0 && day <= monthLength[month - 1];
}

function isMaiorIdade(d1) {
  var parts = d1.split("/");
  var day = parseInt(parts[0], 10);
  var month = parseInt(parts[1], 10);
  var year = parseInt(parts[2], 10); // d1 = new Date(month + "/" + day + "/" + year);

  d1 = new Date(year, month - 1, day);
  var d2 = new Date();
  var diff = d2.getTime() - d1.getTime();
  var idade = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));

  if (idade >= 18) {
    return true;
  } else {
    return false;
  }
}

external_yup_["addMethod"](external_yup_["string"], "cpf", function (message) {
  // return yup.mixed().test("cpf", message || "número de CPF inválido", value => cpfValidate(value));
  return external_yup_["mixed"]().test("cpf", message || "número de CPF inválido", value => isValidCPF(value));
});
external_yup_["addMethod"](external_yup_["string"], "phone", function (message) {
  return external_yup_["mixed"]().test("phone", message || "número de celular inválido", value => isValidPhone(value));
});
external_yup_["addMethod"](external_yup_["string"], "dateNasc", function (message) {
  return external_yup_["mixed"]().test("dateNasc", message || "Por favor, digite uma data válida", value => isValidDate(value));
});
const SectionIdentification_SignupSchema = external_yup_["object"]().shape({
  cpf: external_yup_["string"]().cpf("Por favor, informe um CPF válido"),
  nome: external_yup_["string"]().required(),
  email: external_yup_["string"]().required().email(),
  confirmEmail: external_yup_["string"]().oneOf([external_yup_["ref"]('email'), null], "Email divergente ao inserido acima"),
  telefone: external_yup_["string"]().phone("Por favor, informe um número de celular válido"),
  confirmTelefone: external_yup_["string"]().oneOf([external_yup_["ref"]('telefone'), null], "Celular divergente ao inserido acima"),
  dataNascimento: external_yup_["string"]().dateNasc().test('maiorIdade', 'Para continuar, você deve ter no mínimo 18 anos', function (value) {
    return isMaiorIdade(value);
  }),
  // dataNascimento: yup
  //   .string()
  //   .maiorIdade(),   
  optinSms: external_yup_["bool"]().oneOf([true], 'Esta opção é obrigatória'),
  optinEmail: external_yup_["bool"]().oneOf([true], 'Esta opção é obrigatória'),
  optinTelegram: external_yup_["bool"]().oneOf([true], 'Esta opção é obrigatória'),
  aceiteTermos: external_yup_["bool"]().oneOf([true], 'O aceite dos termos é obrigatório'),
  cep: external_yup_["string"]().required(),
  endereco: external_yup_["string"]().required(),
  numero: external_yup_["number"]().required(),
  complemento: external_yup_["string"](),
  bairro: external_yup_["string"]().required(),
  estado: external_yup_["string"]().required(),
  cidade: external_yup_["string"]().required() // receberContatoEmail: yup.boolean().oneOf([true],'aceite obrigatório'),
  // receberContatoSMS: yup.boolean().oneOf([true],'aceite obrigatório'),
  // receberContatoWhatsApp: yup.boolean().oneOf([true],'aceite obrigatório')

});
function SectionIdentification(props) {
  // const { register, errors, handleSubmit} = useForm({
  //   validationSchema: SignupSchema
  // });
  const {
    register,
    trigger,
    handleSubmit,
    getValues,
    errors
  } = Object(external_react_hook_form_["useForm"])({
    resolver: Object(resolvers_["yupResolver"])(SectionIdentification_SignupSchema),
    mode: "onBlur" // mode: "onChange"

  });

  const onSubmit = data => {
    console.log(data); // alert(JSON.stringify(data, null));
  };

  Object(external_react_["useEffect"])(() => {
    // history.pushState({}, null, "/checkout/identification");
    external_react_gtm_module_default.a.dataLayer({
      dataLayer: {
        event: "identificationView",
        userId: '001',
        userProject: 'project',
        page: 'home'
      }
    });
    external_react_gtm_module_default.a.dataLayer({
      dataLayer: {
        'event': 'checkout',
        'ecommerce': {
          'checkout': {
            'actionField': {
              'step': 1
            },
            'products': [{
              'name': 'Plano Anual Start',
              'id': '1',
              'price': '478.80',
              'brand': 'Clicou Personal',
              'category': 'Atendimento online',
              'quantity': 1
            }]
          }
        }
      }
    });
  }, []);
  const [checked, setChecked] = external_react_default.a.useState([]);

  const handleToggle = value => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const [isAluno, setIsAluno] = external_react_default.a.useState(false);
  const [activeForm, setActiveForm] = external_react_default.a.useState(0);
  const [activeField, setActiveField] = external_react_default.a.useState("cpf");
  const [isDisableNext, setIsDisableNext] = external_react_default.a.useState(false);
  const {
    0: error,
    1: setError
  } = Object(external_react_["useState"])(false);

  const handleNext = async type => {
    setIsDisableNext(true);
    console.log(activeField);
    var result = await trigger(activeField);
    console.log(result);
    var identificationForm = getValues();

    if (result) {
      console.log(getValues());

      if (activeForm == 0) {
        await fetchVerifyCPF(identificationForm.cpf);
        setIsDisableNext(false);
        return;
      }

      if (activeForm == 1) {
        const resultEmail = await fetchVerifyEmail(identificationForm.email);
        setIsDisableNext(false);
        console.log(resultEmail);

        if (!resultEmail) {
          return;
        }
      }

      if (activeForm == 2) {
        var dataNascimentoSplit = identificationForm.dataNascimento.split("/");
        var day = parseInt(dataNascimentoSplit[0], 10);
        var month = parseInt(dataNascimentoSplit[1], 10);
        var year = parseInt(dataNascimentoSplit[2], 10);
        var d1 = new Date(year, month - 1, day);
        var d2 = new Date();
        var diff = d2.getTime() - d1.getTime();
        var idadeUser = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
        props.setDataSale(prevDataSale => {
          return SectionIdentification_objectSpread({}, prevDataSale, {
            nome: identificationForm.nome.toUpperCase(),
            dataNascimento: day + "/" + month + "/" + year,
            email: identificationForm.email,
            // cpf: identificationForm.cpf.replace(/[^\d]+/g,''), 
            cpf: identificationForm.cpf,
            telefone: identificationForm.telefone.replace(/\s+/g, ''),
            endereco: identificationForm.endereco,
            numero: identificationForm.numero,
            complemento: identificationForm.complemento,
            bairro: identificationForm.bairro,
            // cidade: removeAcento(identificationForm.cidade),
            // estado: identificationForm.estado,
            cep: identificationForm.cep,
            anamnese: SectionIdentification_objectSpread({}, prevDataSale.anamnese, {
              idade: idadeUser,
              optinSms: identificationForm.optinSms,
              optinEmail: identificationForm.optinEmail,
              optinTelegram: identificationForm.optinTelegram,
              aceiteTermos: identificationForm.aceiteTermos
            })
          });
        });
        props.setStepCheckout(1);
      } else {
        setActiveForm(prevActiveStep => prevActiveStep + 1);
        handleFieldActive(activeForm + 1);
      }
    }

    setIsDisableNext(false);
  };

  const handleBack = type => {
    if (activeForm !== 0) {
      setActiveForm(prevActiveStep => prevActiveStep - 1);
      handleFieldActive(activeForm - 1);
    }
  };

  const handleFocus = event => {
    try {
      if (event.target.value == "") {
        event.target.selectionStart = 0;
        event.target.selectionEnd = 0;
      } else {
        event.target.select();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleBlurEmail = async event => {
    setIsDisableNext(true);
    const email = event.target.value;

    try {
      const result = await trigger(event.target.name);
      console.log(result);

      if (result) {
        await fetchVerifyEmail(email);
        setIsDisableNext(false);
        return;
      }
    } catch (error) {
      console.log(error);
    }

    setIsDisableNext(false);
  };

  const handleFieldActive = step => {
    console.log("handleFieldActive");

    switch (step) {
      case 0:
        // setActiveField("first");
        setActiveField("cpf");
        break;

      case 1:
        setActiveField(["nome", "email", "confirmEmail", "telefone", "confirmTelefone", "dataNascimento", "optinSms", "optinEmail", "optinTelegram", "aceiteTermos"]);
        break;

      case 2:
        setActiveField(["cep", "endereco", "numero", "complemento", "bairro", "estado", "cidade"]);
        break;

      default:
        setActiveField("cpf");
        break;
    }

    console.log(step); // console.log(activeField);
  };

  const removeAcento = text => {
    text = text.toLowerCase();
    text = text.replace(new RegExp('[ÁÀÂÃ]', 'gi'), 'a');
    text = text.replace(new RegExp('[ÉÈÊ]', 'gi'), 'e');
    text = text.replace(new RegExp('[ÍÌÎ]', 'gi'), 'i');
    text = text.replace(new RegExp('[ÓÒÔÕ]', 'gi'), 'o');
    text = text.replace(new RegExp('[ÚÙÛ]', 'gi'), 'u');
    text = text.replace(new RegExp('[Ç]', 'gi'), 'c');
    text = text.toUpperCase();
    return text;
  };

  const [identification, setIdentification] = external_react_default.a.useState({
    cpf: "",
    nome: "",
    email: "",
    telefone: "",
    dataNascimento: "",
    cep: "",
    endereco: "",
    numero: "",
    complemento: "",
    bairro: "",
    estado: "",
    cidade: "",
    receberContatoEmail: "",
    receberContatoSMS: "",
    receberContatoWhatsApp: ""
  });

  const fetchData = async event => {
    setError(false);
    let cep = event.target.value;
    setIdentification(prevIdentification => {
      return SectionIdentification_objectSpread({}, prevIdentification, {
        endereco: "",
        bairro: "",
        estado: "",
        cidade: ""
      });
    });
    await external_axios_default.a.get(`https://viacep.com.br/ws/${cep}/json/`).then(res => {
      if (res.data.error) {
        setError(true);
        return;
      }

      setIdentification(prevIdentification => {
        return SectionIdentification_objectSpread({}, prevIdentification, {
          cep: res.data.cep,
          endereco: res.data.logradouro,
          bairro: res.data.bairro,
          estado: res.data.uf,
          cidade: res.data.localidade
        });
      }); // console.log(res.data.cliente);     
    }).catch(error => {
      console.log(error);
      setError(true);
    }).finally(() => {// setLoading(false);
    });
  };

  const fetchVerifyCPF = async cpf => {
    await external_axios_default.a.post(`https://admin.justfit.com.br/app.justfit/api/iAPIClicou/ValidarCPF?cpf=${cpf}`).then(res => {
      try {
        if (res.data.code == "0") {
          setActiveForm(prevActiveStep => prevActiveStep + 1);
          handleFieldActive(activeForm + 1);
          return;
        } else {
          showError(res.data.code, res.data.msg);
        }
      } catch (error) {
        console.log(error);
        showError(null, null);
      }

      console.log(res.data);
    }).catch(error => {
      console.log(error);
      setError(true);
      showError(null, null);
    }).finally(() => {// setLoading(false);
    });
  };

  const fetchVerifyEmail = async email => {
    let respEmail = false;
    await external_axios_default.a.post(`https://admin.justfit.com.br/app.justfit/api/iAPIClicou/ValidarEmail?email=${email}`).then(res => {
      console.log(res.data);

      try {
        if (res.data.code == "0") {
          // setActiveForm((prevActiveStep) => prevActiveStep + 1);
          // handleFieldActive(activeForm + 1);
          respEmail = true;
        } else {
          showError(res.data.code, res.data.msg);
        }
      } catch (error) {
        console.log(error);
        showError(null, null);
      }
    }).catch(error => {
      console.log(error);
      setError(true);
      showError(null, null);
    }).finally(() => {// setLoading(false);
    });
    return respEmail;
  };

  const showError = (code, msg) => {
    if (code == null) {
      props.setMessageReturn(prev => {
        return {
          code: "000",
          msg: "Erro ao enviar dados. Tente mais tarde"
        };
      });
      props.setShowModal(true);
    } else {
      props.setMessageReturn(prev => {
        return {
          code: code,
          msg: msg
        };
      });
      props.setShowModal(true);
    }
  };

  const classes = SectionIdentification_useStyles();
  return SectionIdentification_jsx("div", {
    className: "cd-section"
  }, SectionIdentification_jsx("div", {
    className: classes.contacts + " " + classes.section // style={{ backgroundImage: `url(${city})` }}
    // style={{ backgroundColor: "#ffffff" }}

  }, SectionIdentification_jsx("div", {
    className: classes.container
  }, SectionIdentification_jsx(GridContainer["a" /* default */], {
    justify: "center"
  }, SectionIdentification_jsx(Grow_default.a, SectionIdentification_extends({
    in: activeForm === 0 || activeForm === 2,
    style: {
      transformOrigin: '0 0 0',
      display: activeForm === 0 || activeForm === 2 ? "block" : "none"
    }
  }, activeForm === 0 || activeForm === 2 ? {
    timeout: 1000
  } : {}), SectionIdentification_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 12,
    md: 5
  }, SectionIdentification_jsx(Grow_default.a, SectionIdentification_extends({
    in: true,
    style: {
      transformOrigin: '0 0 0'
    }
  }, true ? {
    timeout: 1000
  } : undefined), SectionIdentification_jsx(Card["a" /* default */], {
    className: classes.card1
  }, SectionIdentification_jsx("form", {
    onSubmit: handleSubmit(onSubmit)
  }, SectionIdentification_jsx(CardHeader["a" /* default */], {
    contact: true,
    color: "primary",
    className: classes.textCenter
  }, SectionIdentification_jsx("h4", {
    className: classes.cardTitle
  }, "Identifica\xE7\xE3o")), SectionIdentification_jsx(Grow_default.a, SectionIdentification_extends({
    in: activeForm === 0,
    style: {
      transformOrigin: '0 0 0',
      display: activeForm === 0 ? "block" : "none"
    }
  }, activeForm === 0 ? {
    timeout: 1000
  } : {}), SectionIdentification_jsx(CardBody["a" /* default */], null, SectionIdentification_jsx(GridContainer["a" /* default */], {
    justify: "center"
  }, SectionIdentification_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 8,
    md: 8
  }, SectionIdentification_jsx(CustomInput["a" /* default */], {
    labelText: "CPF",
    labelError: errors.cpf && errors.cpf.message,
    id: "cpf",
    error: errors.cpf ? true : false,
    formControlProps: {
      fullWidth: true
    },
    inputProps: {
      type: "tel",
      name: "cpf",
      inputRef: register,
      onClick: handleFocus,
      onBlur: handleFocus,
      inputComponent: TextMaskCustom,
      startAdornment: SectionIdentification_jsx(InputAdornment_default.a, {
        position: "start"
      }, SectionIdentification_jsx(AssignmentInd_default.a, {
        className: classes.inputIconsColor
      }))
    }
  }))))), SectionIdentification_jsx(Grow_default.a, SectionIdentification_extends({
    in: activeForm === 2,
    style: {
      transformOrigin: '0 0 0',
      display: activeForm === 2 ? "block" : "none"
    }
  }, activeForm === 2 ? {
    timeout: 1000
  } : {}), SectionIdentification_jsx(CardBody["a" /* default */], null, error && SectionIdentification_jsx(SnackbarContent["a" /* default */], {
    message: SectionIdentification_jsx("span", null, SectionIdentification_jsx("b", null, "N\xE3o encontramos seu CEP"), " ", SectionIdentification_jsx("br", null), " Tente novamente") // close
    ,
    color: "warning",
    icon: "info_outline"
  }), SectionIdentification_jsx(GridContainer["a" /* default */], {
    justify: "center"
  }, SectionIdentification_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 12,
    md: 4
  }, SectionIdentification_jsx(CustomInput["a" /* default */], {
    labelText: "CEP",
    labelError: errors.cep && errors.cep.message,
    error: errors.cep ? true : false,
    id: "cep",
    formControlProps: {
      fullWidth: true
    },
    inputProps: {
      type: "tel",
      name: "cep",
      inputComponent: CEPMask,
      onClick: handleFocus,
      inputRef: register,
      onBlur: fetchData
    }
  })), SectionIdentification_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 12,
    md: 8
  }, SectionIdentification_jsx(CustomInput["a" /* default */], {
    labelText: "Endere\xE7o",
    labelError: errors.endereco && errors.endereco.message,
    error: errors.endereco ? true : false,
    id: "endereco",
    formControlProps: {
      fullWidth: true
    },
    inputProps: {
      name: "endereco",
      inputRef: register,
      value: identification.endereco,
      disabled: true
    }
  })), SectionIdentification_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 12,
    md: 4
  }, SectionIdentification_jsx(CustomInput["a" /* default */], {
    labelText: "N\xFAmero",
    labelError: errors.numero && errors.numero.message,
    error: errors.numero ? true : false,
    id: "numero",
    formControlProps: {
      fullWidth: true
    },
    inputProps: {
      type: "tel",
      name: "numero",
      inputRef: register
    }
  })), SectionIdentification_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 12,
    md: 8
  }, SectionIdentification_jsx(CustomInput["a" /* default */], {
    labelText: "Complemento",
    labelError: errors.complemento && errors.complemento.message,
    error: errors.complemento ? true : false,
    id: "complemento",
    formControlProps: {
      fullWidth: true
    },
    inputProps: {
      name: "complemento",
      inputRef: register
    }
  })), SectionIdentification_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 12,
    md: 5
  }, SectionIdentification_jsx(CustomInput["a" /* default */], {
    labelText: "Bairro",
    labelError: errors.bairro && errors.bairro.message,
    error: errors.bairro ? true : false,
    id: "bairro",
    formControlProps: {
      fullWidth: true
    },
    inputProps: {
      name: "bairro",
      inputRef: register,
      value: identification.bairro,
      disabled: true
    }
  })), SectionIdentification_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 12,
    md: 3
  }, SectionIdentification_jsx(CustomInput["a" /* default */], {
    labelText: "Estado",
    labelError: errors.estado && errors.estado.message,
    error: errors.estado ? true : false,
    id: "estado",
    formControlProps: {
      fullWidth: true
    },
    inputProps: {
      name: "estado",
      inputRef: register,
      value: identification.estado,
      disabled: true
    }
  })), SectionIdentification_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 12,
    md: 4
  }, SectionIdentification_jsx(CustomInput["a" /* default */], {
    labelText: "Cidade",
    labelError: errors.cidade && errors.cidade.message,
    error: errors.cidade ? true : false,
    id: "cidade",
    formControlProps: {
      fullWidth: true
    },
    inputProps: {
      name: "cidade",
      inputRef: register,
      value: identification.cidade,
      disabled: true
    }
  }))))), SectionIdentification_jsx(CardFooter["a" /* default */], null, SectionIdentification_jsx(GridContainer["a" /* default */], {
    justify: "center",
    style: {
      margin: "0",
      width: "100%"
    }
  }, SectionIdentification_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 12,
    md: 12
  }, isDisableNext && SectionIdentification_jsx(CircularProgress_default.a, {
    style: {
      color: "#425CD0"
    },
    size: 30
  }), !isDisableNext && SectionIdentification_jsx(Button["a" /* default */], {
    color: "primary",
    fullWidth: true,
    onClick: handleNext
  }, "Pr\xF3ximo")), SectionIdentification_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 12,
    md: 12
  }, SectionIdentification_jsx(Button["a" /* default */], {
    simple: true,
    color: "primary",
    fullWidth: true,
    onClick: handleBack
  }, "Voltar"))))))))), SectionIdentification_jsx(Grow_default.a, SectionIdentification_extends({
    in: activeForm === 1,
    style: {
      transformOrigin: '0 0 0',
      display: activeForm === 1 ? "block" : "none"
    }
  }, activeForm === 1 ? {
    timeout: 1000
  } : {}), SectionIdentification_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 12,
    md: 6
  }, SectionIdentification_jsx(Grow_default.a, SectionIdentification_extends({
    in: true,
    style: {
      transformOrigin: '0 0 0'
    }
  }, true ? {
    timeout: 1000
  } : undefined), SectionIdentification_jsx(Card["a" /* default */], {
    className: classes.card1
  }, SectionIdentification_jsx("form", {
    onSubmit: handleSubmit(onSubmit)
  }, SectionIdentification_jsx(CardHeader["a" /* default */], {
    contact: true,
    color: "primary",
    className: classes.textCenter
  }, SectionIdentification_jsx("h4", {
    className: classes.cardTitle
  }, "Identifica\xE7\xE3o")), SectionIdentification_jsx(Grow_default.a, SectionIdentification_extends({
    in: activeForm === 1,
    style: {
      transformOrigin: '0 0 0',
      display: activeForm === 1 ? "block" : "none"
    }
  }, activeForm === 1 ? {
    timeout: 1000
  } : {}), SectionIdentification_jsx(CardBody["a" /* default */], null, SectionIdentification_jsx(GridContainer["a" /* default */], {
    justify: "center"
  }, SectionIdentification_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 8,
    md: 5
  }, SectionIdentification_jsx(CustomInput["a" /* default */], {
    labelText: "Nome Completo",
    labelError: errors.nome && errors.nome.message,
    error: errors.nome ? true : false,
    id: "nome",
    formControlProps: {
      fullWidth: true
    },
    inputProps: {
      name: "nome",
      inputRef: register,
      startAdornment: SectionIdentification_jsx(InputAdornment_default.a, {
        position: "start"
      }, SectionIdentification_jsx(AssignmentInd_default.a, {
        className: classes.inputIconsColor
      }))
    }
  }), SectionIdentification_jsx(CustomInput["a" /* default */], {
    labelText: "Email",
    labelError: errors.email && errors.email.message,
    error: errors.email ? true : false,
    id: "email",
    formControlProps: {
      fullWidth: true
    },
    inputProps: {
      name: "email",
      inputRef: register,
      onBlur: handleBlurEmail,
      startAdornment: SectionIdentification_jsx(external_react_default.a.Fragment, null, isDisableNext && SectionIdentification_jsx(CircularProgress_default.a, {
        style: {
          color: "#425CD0"
        },
        size: 30
      }), !isDisableNext && SectionIdentification_jsx(InputAdornment_default.a, {
        position: "start"
      }, SectionIdentification_jsx(Email_default.a, {
        className: classes.inputIconsColor
      })))
    }
  }), SectionIdentification_jsx(CustomInput["a" /* default */], {
    labelText: "Confirmar Email",
    labelError: errors.confirmEmail && errors.confirmEmail.message,
    error: errors.confirmEmail ? true : false,
    id: "confirmEmail",
    formControlProps: {
      fullWidth: true
    },
    inputProps: {
      name: "confirmEmail",
      inputRef: register,
      startAdornment: SectionIdentification_jsx(InputAdornment_default.a, {
        position: "start"
      }, SectionIdentification_jsx(Email_default.a, {
        className: classes.inputIconsColor
      }))
    }
  })), SectionIdentification_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 8,
    md: 5
  }, SectionIdentification_jsx(CustomInput["a" /* default */], {
    labelText: "Celular",
    labelError: errors.telefone && errors.telefone.message,
    error: errors.telefone ? true : false,
    id: "telefone",
    formControlProps: {
      fullWidth: true
    },
    inputProps: {
      type: "tel",
      name: "telefone",
      inputRef: register,
      onClick: handleFocus,
      // onBlur: handleFocus,
      inputComponent: PhoneMask,
      startAdornment: SectionIdentification_jsx(InputAdornment_default.a, {
        position: "start"
      }, SectionIdentification_jsx(Phone_default.a, {
        className: classes.inputIconsColor
      }))
    }
  }), SectionIdentification_jsx(CustomInput["a" /* default */], {
    labelText: "Confirmar Celular",
    labelError: errors.confirmTelefone && errors.confirmTelefone.message,
    error: errors.confirmTelefone ? true : false,
    id: "confirmTelefone",
    formControlProps: {
      fullWidth: true
    },
    inputProps: {
      type: "tel",
      name: "confirmTelefone",
      inputRef: register,
      onClick: handleFocus,
      // onBlur: handleFocus,
      inputComponent: PhoneMask,
      startAdornment: SectionIdentification_jsx(InputAdornment_default.a, {
        position: "start"
      }, SectionIdentification_jsx(Phone_default.a, {
        className: classes.inputIconsColor
      }))
    }
  }), SectionIdentification_jsx(CustomInput["a" /* default */], {
    labelText: "Data de nascimento",
    labelError: errors.dataNascimento && errors.dataNascimento.message,
    error: errors.dataNascimento ? true : false,
    id: "dataNascimento",
    formControlProps: {
      fullWidth: true
    },
    inputProps: {
      name: "dataNascimento",
      type: "tel",
      inputRef: register,
      onClick: handleFocus,
      // onBlur: handleFocus,
      inputComponent: DateMask,
      startAdornment: SectionIdentification_jsx(InputAdornment_default.a, {
        position: "start"
      }, SectionIdentification_jsx(Event_default.a, {
        className: classes.inputIconsColor
      }))
    }
  })), SectionIdentification_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 12,
    md: 12
  }, SectionIdentification_jsx("label", null, "Aceito receber contatos via:"), SectionIdentification_jsx("br", null), SectionIdentification_jsx(FormControlLabel_default.a, {
    control: SectionIdentification_jsx(Checkbox_default.a, {
      defaultChecked: true,
      tabIndex: -1,
      onClick: () => handleToggle(1),
      checkedIcon: SectionIdentification_jsx(Check_default.a, {
        className: classes.checkedIcon
      }),
      icon: SectionIdentification_jsx(Check_default.a, {
        className: classes.uncheckedIcon
      }),
      classes: {
        checked: classes.checked,
        root: classes.checkRoot
      },
      name: "optinEmail",
      inputRef: register
    }),
    classes: {
      label: classes.label
    },
    label: "Email"
  }), SectionIdentification_jsx(FormControlLabel_default.a, {
    control: SectionIdentification_jsx(Checkbox_default.a, {
      defaultChecked: true,
      tabIndex: -1,
      onClick: () => handleToggle(1),
      checkedIcon: SectionIdentification_jsx(Check_default.a, {
        className: classes.checkedIcon
      }),
      icon: SectionIdentification_jsx(Check_default.a, {
        className: classes.uncheckedIcon
      }),
      classes: {
        checked: classes.checked,
        root: classes.checkRoot
      },
      name: "optinSms",
      inputRef: register
    }),
    classes: {
      label: classes.label
    },
    label: "SMS"
  }), SectionIdentification_jsx(FormControlLabel_default.a, {
    control: SectionIdentification_jsx(Checkbox_default.a, {
      defaultChecked: true,
      tabIndex: -1,
      onClick: () => handleToggle(1),
      checkedIcon: SectionIdentification_jsx(Check_default.a, {
        className: classes.checkedIcon
      }),
      icon: SectionIdentification_jsx(Check_default.a, {
        className: classes.uncheckedIcon
      }),
      classes: {
        checked: classes.checked,
        root: classes.checkRoot
      },
      name: "optinTelegram",
      inputRef: register
    }),
    classes: {
      label: classes.label
    },
    label: "Telegram"
  }), (errors.optinSms || errors.optinEmail || errors.optinTelegram) && SectionIdentification_jsx(FormHelperText_default.a, {
    className: classes.marginAuto,
    error: true
  }, "Para uma experi\xEAncia completa, o contato pelos tr\xEAs canais \xE9 obrigat\xF3rio")), SectionIdentification_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 8,
    md: 8
  }, SectionIdentification_jsx(FormControlLabel_default.a, {
    control: SectionIdentification_jsx(Checkbox_default.a, {
      tabIndex: -1,
      onClick: () => handleToggle(1),
      checkedIcon: SectionIdentification_jsx(Check_default.a, {
        className: classes.checkedIcon
      }),
      icon: SectionIdentification_jsx(Check_default.a, {
        className: classes.uncheckedIcon
      }),
      classes: {
        checked: classes.checked,
        root: classes.checkRoot
      },
      name: "aceiteTermos",
      inputRef: register
    }),
    classes: {
      label: classes.label
    } // label="Li e aceito o Termo de Uso e Políticas de Privacidade."
    ,
    label: SectionIdentification_jsx(external_react_default.a.Fragment, null, SectionIdentification_jsx("div", null, "Li e aceito o", SectionIdentification_jsx("a", {
      href: "../termos/Termo_de_Uso_e_Politica_de_Privacidade_Clicou_Personal.pdf",
      className: classes.colorPrimary,
      target: "_blank"
    }, " Termo de Uso e Pol\xEDticas de Privacidade.")))
  }), errors.aceiteTermos && SectionIdentification_jsx(FormHelperText_default.a, {
    className: classes.marginAuto,
    error: true
  }, errors.aceiteTermos.message))))), SectionIdentification_jsx(CardFooter["a" /* default */], null, SectionIdentification_jsx(GridContainer["a" /* default */], {
    justify: "center",
    style: {
      margin: "0",
      width: "100%"
    }
  }, SectionIdentification_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 12,
    md: 12
  }, isDisableNext && SectionIdentification_jsx(CircularProgress_default.a, {
    style: {
      color: "#425CD0"
    },
    size: 30
  }), !isDisableNext && SectionIdentification_jsx(Button["a" /* default */], {
    color: "primary",
    fullWidth: true,
    onClick: handleNext
  }, "Pr\xF3ximo")), SectionIdentification_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 12,
    md: 12
  }, SectionIdentification_jsx(Button["a" /* default */], {
    simple: true,
    color: "primary",
    fullWidth: true,
    onClick: handleBack
  }, "Voltar")))))))))))));
}
// EXTERNAL MODULE: external "@material-ui/core/Box"
var Box_ = __webpack_require__("ZkBw");
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);

// EXTERNAL MODULE: ./assets/img/icon-cartoes/icon-chip.png
var icon_chip = __webpack_require__("Ml//");
var icon_chip_default = /*#__PURE__*/__webpack_require__.n(icon_chip);

// EXTERNAL MODULE: ./assets/img/icon-cartoes/icon-visa.png
var icon_visa = __webpack_require__("/KvV");
var icon_visa_default = /*#__PURE__*/__webpack_require__.n(icon_visa);

// EXTERNAL MODULE: ./assets/img/icon-cartoes/icon-master.png
var icon_master = __webpack_require__("It9J");
var icon_master_default = /*#__PURE__*/__webpack_require__.n(icon_master);

// EXTERNAL MODULE: ./assets/img/icon-cartoes/icon-diners.png
var icon_diners = __webpack_require__("p9UE");
var icon_diners_default = /*#__PURE__*/__webpack_require__.n(icon_diners);

// EXTERNAL MODULE: ./assets/img/icon-cartoes/icon-amex.png
var icon_amex = __webpack_require__("W+g/");
var icon_amex_default = /*#__PURE__*/__webpack_require__.n(icon_amex);

// EXTERNAL MODULE: ./assets/img/icon-cartoes/icon-discover.png
var icon_discover = __webpack_require__("0RKy");
var icon_discover_default = /*#__PURE__*/__webpack_require__.n(icon_discover);

// EXTERNAL MODULE: ./assets/img/icon-cartoes/icon-hipercard.png
var icon_hipercard = __webpack_require__("LupG");
var icon_hipercard_default = /*#__PURE__*/__webpack_require__.n(icon_hipercard);

// EXTERNAL MODULE: ./assets/img/icon-cartoes/icon-elo.png
var icon_elo = __webpack_require__("6FGL");
var icon_elo_default = /*#__PURE__*/__webpack_require__.n(icon_elo);

// EXTERNAL MODULE: ./assets/img/icon-cartoes/icon-jcb.png
var icon_jcb = __webpack_require__("/pBY");
var icon_jcb_default = /*#__PURE__*/__webpack_require__.n(icon_jcb);

// EXTERNAL MODULE: ./assets/img/icon-cartoes/icon-aura.png
var icon_aura = __webpack_require__("DTuu");
var icon_aura_default = /*#__PURE__*/__webpack_require__.n(icon_aura);

// EXTERNAL MODULE: ./assets/img/icon-cartoes/icon-nocard.png
var icon_nocard = __webpack_require__("3TsM");
var icon_nocard_default = /*#__PURE__*/__webpack_require__.n(icon_nocard);

// CONCATENATED MODULE: ./pages-sections/checkout/SectionPayment.js
var SectionPayment_jsx = external_react_default.a.createElement;

function SectionPayment_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function SectionPayment_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { SectionPayment_ownKeys(Object(source), true).forEach(function (key) { SectionPayment_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { SectionPayment_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function SectionPayment_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function SectionPayment_extends() { SectionPayment_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return SectionPayment_extends.apply(this, arguments); }

function SectionPayment_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = SectionPayment_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function SectionPayment_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



 // react components used to create a google map


 // @material-ui/core components





 // @material-ui/icons








 // core components

































const SectionPayment_useStyles = Object(styles_["makeStyles"])(checkoutStyle);

function SectionPayment_TextMaskCustom(props) {
  const {
    inputRef
  } = props,
        other = SectionPayment_objectWithoutProperties(props, ["inputRef"]);

  return SectionPayment_jsx(external_react_text_mask_default.a, SectionPayment_extends({}, other, {
    ref: ref => {
      inputRef(ref ? ref.inputElement : null);
    },
    mask: [/[0-9]/, /[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/],
    placeholderChar: '\u2000',
    guide: false,
    showMask: true
  }));
}

function ValidadeMask(props) {
  const {
    inputRef
  } = props,
        other = SectionPayment_objectWithoutProperties(props, ["inputRef"]);

  return SectionPayment_jsx(external_react_text_mask_default.a, SectionPayment_extends({}, other, {
    ref: ref => {
      inputRef(ref ? ref.inputElement : null);
    },
    mask: [/[0-9]/, /[0-9]/, '/', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/],
    placeholderChar: '\u2000',
    guide: false,
    showMask: true
  }));
}

function CVVMask(props) {
  const {
    inputRef
  } = props,
        other = SectionPayment_objectWithoutProperties(props, ["inputRef"]);

  return SectionPayment_jsx(external_react_text_mask_default.a, SectionPayment_extends({}, other, {
    ref: ref => {
      inputRef(ref ? ref.inputElement : null);
    } // mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
    ,
    mask: [/[0-9]/, /[0-9]/, /[0-9]/],
    placeholderChar: '\u2000',
    guide: false,
    showMask: true
  }));
}

function CardMask(props) {
  const {
    inputRef
  } = props,
        other = SectionPayment_objectWithoutProperties(props, ["inputRef"]);

  return SectionPayment_jsx(external_react_text_mask_default.a, SectionPayment_extends({}, other, {
    ref: ref => {
      inputRef(ref ? ref.inputElement : null);
    } // mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
    ,
    mask: [/[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, ' ', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, ' ', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, ' ', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/],
    placeholderChar: '\u2000',
    guide: false,
    showMask: true
  }));
}

Object(external_yup_["setLocale"])({
  mixed: {
    notType: function notType(_ref) {
      switch (_ref.type) {
        case 'number':
          return 'deve ser um número';

        case 'string':
          return 'deve ser um texto';

        default:
          return 'formato errado';
      }
    },
    default: 'é inválido',
    required: 'Desculpe, este campo é obrigatório',
    oneOf: 'deve ser um dos seguintes valores: ${values}',
    notOneOf: 'não pode ser um dos seguintes valores: ${values}'
  },
  string: {
    length: 'deve ter exatamente ${length} caracteres',
    min: 'deve ter pelo menos ${min} caracteres',
    max: 'deve ter no máximo ${max} caracteres',
    email: 'Por favor, informe um e-mail inválido',
    url: 'deve ter um formato de URL válida',
    trim: 'não deve conter espaços no início ou no fim.',
    lowercase: 'deve estar em maiúsculo',
    uppercase: 'deve estar em minúsculo'
  },
  number: {
    min: 'deve ser no mínimo ${min}',
    max: 'deve ser no máximo ${max}',
    lessThan: 'deve ser menor que ${less}',
    moreThan: 'deve ser maior que ${more}',
    notEqual: 'não pode ser igual à ${notEqual}',
    positive: 'deve ser um número posítivo',
    negative: 'deve ser um número negativo',
    integer: 'deve ser um número inteiro'
  },
  date: {
    min: 'deve ser maior que a data ${min}',
    max: 'deve ser menor que a data ${max}'
  },
  array: {
    min: 'deve ter no mínimo ${min} itens',
    max: 'deve ter no máximo ${max} itens'
  }
});
const SectionPayment_regexCPF = /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/gm;

function SectionPayment_cpfValidate(cpf) {
  console.log("Validatring", cpf);
  return cpf.length > 10;
}

function SectionPayment_isValidCPF(cpf) {
  if (typeof cpf !== "string") return false;
  cpf = cpf.replace(/[\s.-]*/igm, '');

  if (!cpf || cpf.length != 11 || cpf == "00000000000" || cpf == "11111111111" || cpf == "22222222222" || cpf == "33333333333" || cpf == "44444444444" || cpf == "55555555555" || cpf == "66666666666" || cpf == "77777777777" || cpf == "88888888888" || cpf == "99999999999") {
    return false;
  }

  var soma = 0;
  var resto;

  for (var i = 1; i <= 9; i++) soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);

  resto = soma * 10 % 11;
  if (resto == 10 || resto == 11) resto = 0;
  if (resto != parseInt(cpf.substring(9, 10))) return false;
  soma = 0;

  for (var i = 1; i <= 10; i++) soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);

  resto = soma * 10 % 11;
  if (resto == 10 || resto == 11) resto = 0;
  if (resto != parseInt(cpf.substring(10, 11))) return false;
  return true;
}

function SectionPayment_isValidPhone(phone) {
  return /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/.test(phone);
}

function SectionPayment_isValidDate(date) {
  return /^((((0?[1-9]|[12]\d|3[01])[\.\-\/](0?[13578]|1[02])      [\.\-\/]((1[6-9]|[2-9]\d)?\d{2}))|((0?[1-9]|[12]\d|30)[\.\-\/](0?[13456789]|1[012])[\.\-\/]((1[6-9]|[2-9]\d)?\d{2}))|((0?[1-9]|1\d|2[0-8])[\.\-\/]0?2[\.\-\/]((1[6-9]|[2-9]\d)?\d{2}))|(29[\.\-\/]0?2[\.\-\/]((1[6-9]|[2-9]\d)?(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00)|00)))|(((0[1-9]|[12]\d|3[01])(0[13578]|1[02])((1[6-9]|[2-9]\d)?\d{2}))|((0[1-9]|[12]\d|30)(0[13456789]|1[012])((1[6-9]|[2-9]\d)?\d{2}))|((0[1-9]|1\d|2[0-8])02((1[6-9]|[2-9]\d)?\d{2}))|(2902((1[6-9]|[2-9]\d)?(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00)|00))))$/.test(date);
}

function isValidDateCard(date) {
  // return /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/.test(date);
  return /^((0[1-9])|(1[0-2]))\/((2009)|(20[1-2][0-9]))$/.test(date);
}

function SectionPayment_getCardFlag(cardnumber) {
  var cardnumber = cardnumber.replace(/[^0-9]+/g, '');
  var cards = {
    visa: /^4[0-9]{12}(?:[0-9]{3})/,
    mastercard: /^5[1-5][0-9]{14}/,
    diners: /^3(?:0[0-5]|[68][0-9])[0-9]{11}/,
    amex: /^3[47][0-9]{13}/,
    discover: /^6(?:011|5[0-9]{2})[0-9]{12}/,
    hipercard: /^(606282\d{10}(\d{3})?)|(3841\d{15})/,
    elo: /^((((636368)|(438935)|(504175)|(451416)|(636297))\d{0,10})|((5067)|(4576)|(4011))\d{0,12})/,
    jcb: /^(?:2131|1800|35\d{3})\d{11}/,
    aura: /^(5078\d{2})(\d{2})(\d{11})$/
  };

  for (var flag in cards) {
    if (cards[flag].test(cardnumber)) {
      return flag;
    }
  }

  return false;
}

external_yup_["addMethod"](external_yup_["string"], "cpf", function (message) {
  // return yup.mixed().test("cpf", message || "número de CPF inválido", value => cpfValidate(value));
  return external_yup_["mixed"]().test("cpf", message || "número de CPF inválido", value => SectionPayment_isValidCPF(value));
});
external_yup_["addMethod"](external_yup_["string"], "phone", function (message) {
  return external_yup_["mixed"]().test("phone", message || "número de celular inválido", value => SectionPayment_isValidPhone(value));
});
external_yup_["addMethod"](external_yup_["string"], "date", function (message) {
  return external_yup_["mixed"]().test("date", message || "data inválida", value => SectionPayment_isValidDate(value));
});
external_yup_["addMethod"](external_yup_["string"], "dateCard", function (message) {
  return external_yup_["mixed"]().test("date", message || "Por favor, digite uma data válida", value => isValidDateCard(value));
});
external_yup_["addMethod"](external_yup_["string"], "card", function (message) {
  return external_yup_["mixed"]().test("card", message || "Por favor, digite um número de cartão válido", value => SectionPayment_getCardFlag(value));
});
const SectionPayment_SignupSchema = external_yup_["object"]().shape({
  id: external_yup_["string"](),
  number: external_yup_["string"]().card().required(),
  name: external_yup_["string"]().required(),
  validade: external_yup_["string"]().dateCard().required(),
  cvv: external_yup_["string"]().matches(/^[0-9]{3}$/, 'Por favor, digite um CVV válido').required(),
  cpf: external_yup_["string"]().cpf("Por favor, informe um CPF válido").required(),
  cupom: external_yup_["string"]()
});

const formatValueParcela = value => {
  let returnValue = new String(value).replace(",", ".");
  return parseFloat(returnValue).toFixed(2);
};

const formatValuePresentation = value => {
  let returnDecimal = formatValueParcela(value);
  let returnValue = new String(returnDecimal).replace(".", ",");
  return returnValue;
};

const descontoTotal = (premios, plan) => {
  let valorDesconto = 0.0;
  premios.listaPremios.map((premio, i) => {
    console.log("formatValueParcela(premio.valorDesconto)");
    console.log(formatValueParcela(premio.valorDesconto));
    valorDesconto = parseFloat(valorDesconto + parseFloat(premio.valorDesconto));
    valorDesconto = parseFloat(valorDesconto + plan.mensalidade * (parseFloat(premio.percentualDesconto) / 100));
  });
  console.log("valorDesconto");
  console.log(valorDesconto);
  return parseFloat(valorDesconto);
};

const descontoParcela = (descontos, parcela) => {
  let valorParcela = formatValueParcela(parcela);
  valorParcela = valorParcela - formatValueParcela(descontos.valorDesconto);
  valorParcela = valorParcela - parcela * (parseFloat(descontos.percentualDesconto) / 100);
  console.log("valorParcela");
  console.log(valorParcela);
  return parseFloat(valorParcela).toFixed(2);
}; // const schema = yup.object().shape({
//   first: yup.string().required(),
//   age: yup.number().positive().integer().required(),
// });


function SectionPayment(props) {
  // const { register, errors, handleSubmit} = useForm({
  //   validationSchema: SignupSchema
  // });
  const {
    register,
    getValues,
    trigger,
    handleSubmit,
    errors
  } = Object(external_react_hook_form_["useForm"])({
    resolver: Object(resolvers_["yupResolver"])(SectionPayment_SignupSchema),
    mode: "onBlur" // mode: "onChange"

  });

  const onSubmit = data => {
    console.log(data); // alert(JSON.stringify(data, null));
  };

  Object(external_react_["useEffect"])(() => {
    // history.pushState({}, null, "/checkout/payment");
    external_react_gtm_module_default.a.dataLayer({
      dataLayer: {
        event: "paymentView",
        userId: '001',
        userProject: 'project',
        page: 'home'
      }
    });
    external_react_gtm_module_default.a.dataLayer({
      dataLayer: {
        'event': 'checkoutOption',
        'ecommerce': {
          'checkout_option': {
            'actionField': {
              'step': 2
            }
          }
        }
      }
    });
    getPlan();
  }, []);
  const [checked, setChecked] = external_react_default.a.useState([]);

  const handleToggle = value => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const [isAluno, setIsAluno] = external_react_default.a.useState(false);
  const [activeForm, setActiveForm] = external_react_default.a.useState(0); // const [activeField, setActiveField] = React.useState("first");

  const [activeField, setActiveField] = external_react_default.a.useState(["id", "number", "name", "validade", "cvv", "cpf", "cupom"]);
  const [isDisableNext, setIsDisableNext] = external_react_default.a.useState(true);
  const [isLoadingCupom, setIsLoadingCupom] = external_react_default.a.useState(false);
  const [insertCupom, setInsertCupom] = external_react_default.a.useState(false);
  const [listaPremios, setListaPremios] = external_react_default.a.useState({
    numeroCupom: "",
    listaPremios: [{
      percentualDesconto: "10",
      valorDesconto: "10",
      descricaoPremio: "PARCELA 1",
      tipoPremio: "MENSALIDADE"
    }, {
      percentualDesconto: "10",
      valorDesconto: "0",
      descricaoPremio: "PARCELA 2",
      tipoPremio: "MENSALIDADE"
    }, {
      percentualDesconto: "10",
      valorDesconto: "0",
      descricaoPremio: "PARCELA 3",
      tipoPremio: "MENSALIDADE"
    }, {
      percentualDesconto: "10",
      valorDesconto: "0",
      descricaoPremio: "PARCELA 4",
      tipoPremio: "MENSALIDADE"
    }, {
      percentualDesconto: "10",
      valorDesconto: "0",
      descricaoPremio: "PARCELA 5",
      tipoPremio: "MENSALIDADE"
    }, {
      percentualDesconto: "10",
      valorDesconto: "0",
      descricaoPremio: "PARCELA 6",
      tipoPremio: "MENSALIDADE"
    }, {
      percentualDesconto: "10",
      valorDesconto: "0",
      descricaoPremio: "PARCELA 7",
      tipoPremio: "MENSALIDADE"
    }, {
      percentualDesconto: "10",
      valorDesconto: "0",
      descricaoPremio: "PARCELA 8",
      tipoPremio: "MENSALIDADE"
    }, {
      percentualDesconto: "10",
      valorDesconto: "0",
      descricaoPremio: "PARCELA 9",
      tipoPremio: "MENSALIDADE"
    }, {
      percentualDesconto: "10",
      valorDesconto: "0",
      descricaoPremio: "PARCELA 10",
      tipoPremio: "MENSALIDADE"
    }, {
      percentualDesconto: "10",
      valorDesconto: "0",
      descricaoPremio: "PARCELA 11",
      tipoPremio: "MENSALIDADE"
    }, {
      percentualDesconto: "10",
      valorDesconto: "0",
      descricaoPremio: "PARCELA 12",
      tipoPremio: "MENSALIDADE"
    }]
  });
  const [plan, setPlan] = external_react_default.a.useState({
    "parcelamentoOperadora": "True",
    "maxDivisao": 1,
    "descricaoEncantamento": "",
    "nome": "",
    "mesAnuidade": "Parcela 0",
    "codigo": 2,
    "adesao": 0.0,
    "anuidade": 0.0,
    "horario": "LIVRE",
    "fidelidade": 12,
    "mensalidade": 39.9,
    "primeiraParcela": 39.9,
    "valorProdutos": 0.0,
    "produtos": "",
    "inicioMinimo": null,
    "modalidades": ["ONLINE"],
    "diasVencimento": [],
    "inicioFuturo": "False",
    "anuidadeAgora": "False",
    "qtdCreditoPlanoCredito": "0",
    "regimeRecorrencia": "False",
    "matricula": "0.0",
    "parcelasAnuidade": []
  });
  const {
    0: error,
    1: setError
  } = Object(external_react_["useState"])(false);
  const [activeCard, setActiveCard] = external_react_default.a.useState(icon_nocard_default.a);
  const [cardField, setCardField] = external_react_default.a.useState({
    number: "0000 0000 0000 0000",
    name: "NOME IMPRESSO NO CARTÃO",
    valid: "00/00",
    cvv: "000",
    cpf: ""
  });

  const handleNext = async type => {
    console.log(activeField);
    const result = await trigger(activeField); // const result = await trigger();

    console.log(result);
    console.log("cupom");
    console.log(getValues("cupom"));
    getCupom(getValues("cupom"));

    if (result) {
      console.log(getValues());
      const cardForm = getValues();
      const codBrand = getBrandCod(cardForm.number);

      if (activeForm == 0) {
        let hoje = new Date();
        let dia = ("0" + hoje.getDate()).slice(-2);
        let mes = ("0" + (hoje.getMonth() + 1)).slice(-2);
        let ano = hoje.getFullYear();
        let anoFinal = hoje.getFullYear() + 1;
        props.setDataSale(prevDataSale => {
          return SectionPayment_objectSpread({}, prevDataSale, {
            numeroCartao: cardForm.number.replace(/\s+/g, ''),
            nomeCartao: cardForm.name,
            cvv: cardForm.cvv,
            validade: cardForm.validade,
            // brand: codBrand,
            cpftitularcard: cardForm.cpf,
            numeroCupomDesconto: cardForm.cupom,
            anamnese: SectionPayment_objectSpread({}, prevDataSale.anamnese)
          });
        });
        props.setStepCheckout(2);
      } else {
        setActiveForm(prevActiveStep => prevActiveStep + 1);
        handleFieldActive(activeForm + 1);
      }
    }
  };

  external_react_default.a.useEffect(() => {
    // props.setDataSale( prevDataSale => {
    //   return {  
    //     customer: {     
    //     ...prevDataSale.customer,
    //     card : {
    //       ...prevDataSale.card,
    //       ...cardField 
    //     }  
    //     }         
    //   }
    // });    
    console.log(cardField.number.replace(/\s+/g, ''));
  }, []);

  const handleBack = type => {
    if (activeForm !== 0) {
      setActiveForm(prevActiveStep => prevActiveStep - 1);
      handleFieldActive(activeForm - 1);
    } else {
      props.setStepCheckout(0);
    }
  };

  const handleFocus = event => {
    // event.target.select()
    if (event.target.value == "") {
      event.target.selectionStart = 0;
      event.target.selectionEnd = 0;
    } else {
      event.target.select();
    }
  };

  const handleFieldActive = step => {
    console.log("handleFieldActive");

    switch (step) {
      case 0:
        setActiveField(["id", "number", "name", "validade", "cvv", "cpf"]);
        break;

      case 1:
        setActiveField(["nome", "email", "telefone", "dataNascimento"]);
        break;

      case 2:
        setActiveField(["cep", "endereco", "numero", "complemento", "bairro", "estado", "cidade"]);
        break;

      default:
        setActiveField(["id", "number", "name", "validade", "cvv"]);
        break;
    }

    console.log(step); // console.log(activeField);
  };

  const [payment, setPayment] = external_react_default.a.useState({
    "paymentMethod": "creditCard",
    "card": {
      "id": 123456,
      "number": "5464082622239784",
      "name": "nome no cartão",
      "valid": "12/2022",
      "cvv": "782",
      "brand": 1
    }
  });

  const getPlan = async () => {
    await external_axios_default.a.get(`https://admin.justfit.com.br/app.justfit/api/iAPIClicou/planosUnidade?codUnidade=1`).then(res => {
      console.log(res.data);
      props.setDataSale(prevDataSale => {
        return SectionPayment_objectSpread({}, prevDataSale, {
          unidade: 1,
          plano: res.data.planos[0].codigo
        });
      });
      setPlan(res.data.planos[0]);
    }).catch(error => {
      console.log(error);
    });
  };

  const getBrandCod = numberCard => {
    let brandCard = getCardFlag(numberCard);

    switch (brandCard) {
      case "visa":
        return 1;
        break;

      case "mastercard":
        return 2;
        break;

      case "diners":
        return 3;
        break;

      case "amex":
        return 4;
        break;

      case "discover":
        return 8;
        break;

      case "hipercard":
        return 9;
        break;

      case "elo":
        return 6;
        break;

      case "jcb":
        return 7;
        break;

      case "aura":
        return 5;
        break;

      default:
        return 0;
        break;
    }
  };

  const handlerOnBlur = event => {
    let brandCard = getCardFlag(event.target.value);
    let brandCod = 0; // handleFocus(event);

    switch (brandCard) {
      case "visa":
        setActiveCard(icon_visa_default.a);
        brandCod = 1;
        break;

      case "mastercard":
        setActiveCard(icon_master_default.a);
        brandCod = 2;
        break;

      case "diners":
        setActiveCard(icon_diners_default.a);
        brandCod = 3;
        break;

      case "amex":
        setActiveCard(icon_amex_default.a);
        brandCod = 4;
        break;

      case "discover":
        setActiveCard(icon_discover_default.a);
        brandCod = 8;
        break;

      case "hipercard":
        setActiveCard(icon_hipercard_default.a);
        brandCod = 9;
        break;

      case "elo":
        setActiveCard(icon_elo_default.a);
        brandCod = 6;
        break;

      case "jcb":
        setActiveCard(icon_jcb_default.a);
        brandCod = 7;
        break;

      case "aura":
        setActiveCard(icon_aura_default.a);
        brandCod = 5;
        break;

      default:
        setActiveCard(icon_nocard_default.a);
        break;
    }

    console.log(brandCod);
    setCardField({
      number: getValues("number"),
      name: getValues("name"),
      valid: getValues("validade"),
      cvv: getValues("cvv"),
      brand: brandCod
    });
  };

  const handlerOnChange = event => {
    setCardField({
      number: getValues("number"),
      name: getValues("name"),
      valid: getValues("validade"),
      cvv: getValues("cvv")
    });
  };

  const getCardFlag = cardnumber => {
    var cardnumber = cardnumber.replace(/[^0-9]+/g, '');
    var cards = {
      visa: /^4[0-9]{12}(?:[0-9]{3})/,
      mastercard: /^5[1-5][0-9]{14}/,
      diners: /^3(?:0[0-5]|[68][0-9])[0-9]{11}/,
      amex: /^3[47][0-9]{13}/,
      discover: /^6(?:011|5[0-9]{2})[0-9]{12}/,
      hipercard: /^(606282\d{10}(\d{3})?)|(3841\d{15})/,
      elo: /^((((636368)|(438935)|(504175)|(451416)|(636297))\d{0,10})|((5067)|(4576)|(4011))\d{0,12})/,
      jcb: /^(?:2131|1800|35\d{3})\d{11}/,
      aura: /^(5078\d{2})(\d{2})(\d{11})$/
    };

    for (var flag in cards) {
      if (cards[flag].test(cardnumber)) {
        return flag;
      }
    }

    return icon_nocard_default.a;
  };

  const getCupom = async cupom => {
    setIsLoadingCupom(true);
    setInsertCupom(false);
    setError(false);
    await external_axios_default.a.post(`https://admin.justfit.com.br/app.justfit/api/LoadPersonalOnline/GetCupomInfo?cupom=${cupom}`).then(res => {
      if (res.data.code != "0") {
        console.log("error getCupom");
        setError(true);
        return false;
      }

      console.log(res.data); // const withoutAspas = new String(res.data.cupom).replace(/[']/g,'"');           
      // const withoutAspas2 = new String(withoutAspas).replace('"return":"{"','"return": {"');     
      // const withoutAspas3 = new String(withoutAspas2).replace('}"}', '}}');   
      // console.log(JSON.parse(withoutAspas3));     

      console.log(res.data.cupom.cupom);
      setInsertCupom(true);
      setListaPremios(res.data.cupom.cupom);
      window.scrollTo(0, 0);
    }).catch(error => {
      console.log(error);
      setError(true);
    }).finally(() => {
      setIsLoadingCupom(false);
    });
  };

  const getPremios = premios => {
    return SectionPayment_jsx(GridItem["a" /* default */], {
      xs: 12,
      sm: 12,
      md: 12
    }, SectionPayment_jsx("h5", {
      className: classes.cardCategory,
      style: {
        color: "#425cc7"
      }
    }, "Cupom aplicado"), SectionPayment_jsx("small", {
      style: {
        fontSize: "1rem",
        fontWeight: "900"
      }
    }, '\u00A0', " ", premios.numeroCupom), SectionPayment_jsx("ul", {
      className: classes.itensResumo
    }, premios.listaPremios.map((premio, i) => SectionPayment_jsx(external_react_default.a.Fragment, null, SectionPayment_jsx("li", null, SectionPayment_jsx(GridContainer["a" /* default */], null, SectionPayment_jsx(GridItem["a" /* default */], {
      xs: 8,
      sm: 8,
      md: 8,
      style: {
        textAlign: "left"
      }
    }, premio.descricaoPremio), SectionPayment_jsx(GridItem["a" /* default */], {
      xs: 4,
      sm: 4,
      md: 4
    }, i == 0 ? SectionPayment_jsx(external_react_default.a.Fragment, null, "R$ ", formatValuePresentation(descontoParcela(listaPremios.listaPremios[i], plan.primeiraParcela))) : SectionPayment_jsx(external_react_default.a.Fragment, null, "R$ ", formatValuePresentation(descontoParcela(listaPremios.listaPremios[i], plan.mensalidade)))))))), premios.listaPremios.length < plan.fidelidade && SectionPayment_jsx("li", null, SectionPayment_jsx(GridContainer["a" /* default */], null, SectionPayment_jsx(GridItem["a" /* default */], {
      xs: 8,
      sm: 8,
      md: 8,
      style: {
        textAlign: "left"
      }
    }, "DEMAIS PARCELAS"), SectionPayment_jsx(GridItem["a" /* default */], {
      xs: 4,
      sm: 4,
      md: 4
    }, "R$ ", formatValuePresentation(plan.mensalidade))))));
  };

  const classes = SectionPayment_useStyles();
  return SectionPayment_jsx("div", {
    className: "cd-section"
  }, SectionPayment_jsx("div", {
    className: classes.contacts + " " + classes.section // style={{ backgroundImage: `url(${city})` }}
    ,
    style: {
      backgroundColor: "#ffffff"
    }
  }, SectionPayment_jsx("div", {
    className: classes.container
  }, SectionPayment_jsx(GridContainer["a" /* default */], {
    justify: "center"
  }, SectionPayment_jsx(Box_default.a, {
    clone: true,
    order: {
      xs: 2,
      sm: 2,
      md: 1
    }
  }, SectionPayment_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 12,
    md: 5
  }, SectionPayment_jsx(Grow_default.a, SectionPayment_extends({
    in: true,
    style: {
      transformOrigin: '0 0 0'
    }
  }, true ? {
    timeout: 1000
  } : undefined), SectionPayment_jsx(Card["a" /* default */], {
    className: classes.card1
  }, SectionPayment_jsx("form", {
    onSubmit: handleSubmit(onSubmit)
  }, SectionPayment_jsx(CardHeader["a" /* default */], {
    contact: true,
    color: "primary",
    className: classes.textCenter
  }, SectionPayment_jsx("h4", {
    className: classes.cardTitle
  }, "Pagamento")), SectionPayment_jsx(Grow_default.a, SectionPayment_extends({
    in: activeForm === 0,
    style: {
      transformOrigin: '0 0 0',
      display: activeForm === 0 ? "block" : "none"
    }
  }, activeForm === 0 ? {
    timeout: 1000
  } : {}), SectionPayment_jsx(CardBody["a" /* default */], null, SectionPayment_jsx(Card["a" /* default */], {
    color: "info",
    className: classes.containerCart
  }, SectionPayment_jsx(CardBody["a" /* default */], {
    color: true,
    className: classes.noPaddingBottom
  }, SectionPayment_jsx("h5", {
    className: classes.cardCategorySocialWhite
  }, SectionPayment_jsx("img", {
    src: icon_chip_default.a
  })), SectionPayment_jsx("h4", {
    className: classes.cardTitleWhite
  }, cardField.number), SectionPayment_jsx("h4", {
    className: classes.cardTitleWhite
  }, cardField.name)), SectionPayment_jsx(CardFooter["a" /* default */], null, SectionPayment_jsx("div", null, SectionPayment_jsx("a", {
    href: "#pablo",
    onClick: e => e.preventDefault()
  }, SectionPayment_jsx("span", null, "Valid"), " ", cardField.valid, " \xA0 \xA0", SectionPayment_jsx("span", null, "CVV"), " ", cardField.cvv)), SectionPayment_jsx("div", {
    className: classes.statsWhite + " " + classes.mlAuto
  }, SectionPayment_jsx("img", {
    src: activeCard
  })))), SectionPayment_jsx(GridContainer["a" /* default */], {
    justify: "center",
    className: classes.containerFieldsCard
  }, SectionPayment_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 12,
    md: 12
  }, SectionPayment_jsx(CustomInput["a" /* default */], {
    labelText: "N\xFAmero do cart\xE3o *",
    labelError: errors.number && errors.number.message,
    error: errors.number ? true : false,
    id: "number",
    formControlProps: {
      fullWidth: true
    },
    inputProps: {
      type: "tel",
      name: "number",
      inputRef: register,
      onClick: handleFocus,
      inputComponent: CardMask,
      onBlur: handlerOnBlur // startAdornment: (
      //   <InputAdornment position="start">
      //     <AssignmentInd className={classes.inputIconsColor} />
      //   </InputAdornment>
      // )                           

    }
  })), SectionPayment_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 12,
    md: 12
  }, SectionPayment_jsx(CustomInput["a" /* default */], {
    labelText: "Nome impresso no cart\xE3o",
    labelError: errors.name && errors.name.message,
    error: errors.name ? true : false,
    id: "name",
    formControlProps: {
      fullWidth: true
    },
    inputProps: {
      name: "name",
      inputRef: register,
      onChange: handlerOnChange
    }
  })), SectionPayment_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 12,
    md: 6
  }, SectionPayment_jsx(CustomInput["a" /* default */], {
    labelText: "Validade (MM/AAAA)",
    labelError: errors.validade && errors.validade.message,
    error: errors.validade ? true : false,
    id: "validade",
    formControlProps: {
      fullWidth: true
    },
    inputProps: {
      type: "tel",
      name: "validade",
      inputRef: register,
      onClick: handleFocus,
      inputComponent: ValidadeMask,
      onChange: handlerOnChange
    }
  })), SectionPayment_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 12,
    md: 6
  }, SectionPayment_jsx(CustomInput["a" /* default */], {
    labelText: "CVV",
    labelError: errors.cvv && errors.cvv.message,
    error: errors.cvv ? true : false,
    id: "cvv",
    formControlProps: {
      fullWidth: true
    },
    inputProps: {
      type: "tel",
      name: "cvv",
      inputRef: register,
      onClick: handleFocus,
      inputComponent: CVVMask,
      onChange: handlerOnChange
    }
  })), SectionPayment_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 12,
    md: 12
  }, SectionPayment_jsx(CustomInput["a" /* default */], {
    labelText: "CPF do titular do cart\xE3o",
    labelError: errors.cpf && errors.cpf.message,
    error: errors.cpf ? true : false,
    id: "cpf",
    formControlProps: {
      fullWidth: true
    },
    inputProps: {
      name: "cpf",
      inputRef: register,
      inputComponent: SectionPayment_TextMaskCustom
    }
  })), SectionPayment_jsx(GridItem["a" /* default */], {
    xs: 8,
    sm: 8,
    md: 9
  }, SectionPayment_jsx(CustomInput["a" /* default */], {
    labelText: "Inserir cupom",
    labelError: errors.cupom && errors.cupom.message,
    error: errors.cupom ? true : false,
    id: "cupom",
    formControlProps: {
      fullWidth: true
    },
    inputProps: {
      name: "cupom",
      inputRef: register,
      onBlur: () => getCupom(getValues('cupom'))
    }
  })), SectionPayment_jsx(GridItem["a" /* default */], {
    xs: 4,
    sm: 4,
    md: 3
  }, isLoadingCupom ? SectionPayment_jsx(CircularProgress_default.a, {
    style: {
      color: "#425CD0",
      position: "absolute",
      bottom: "20px",
      left: "20px"
    },
    size: 30
  }) : SectionPayment_jsx(Button["a" /* default */], {
    style: {
      position: "absolute",
      bottom: "10px",
      left: "10px"
    },
    color: "primary",
    onClick: () => getCupom(getValues('cupom'))
  }, "Ok")), error && SectionPayment_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 12,
    md: 12
  }, SectionPayment_jsx(SnackbarContent["a" /* default */], {
    message: SectionPayment_jsx("span", null, SectionPayment_jsx("b", null, "Cupom n\xE3o encontrado"), " ", SectionPayment_jsx("br", null), " Insira um cupom v\xE1lido") // close
    ,
    color: "danger",
    icon: "info_outline"
  }))))), SectionPayment_jsx(CardFooter["a" /* default */], {
    className: classes.textCenter
  }, SectionPayment_jsx(GridContainer["a" /* default */], {
    justify: "center",
    style: {
      margin: "0",
      width: "100%"
    }
  }, SectionPayment_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 12,
    md: 12
  }, isLoadingCupom ? SectionPayment_jsx(CircularProgress_default.a, {
    style: {
      color: "#425CD0"
    },
    size: 30
  }) : SectionPayment_jsx(Button["a" /* default */], {
    color: "primary",
    fullWidth: true,
    onClick: handleNext
  }, "Pr\xF3ximo")), SectionPayment_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 12,
    md: 12
  }, SectionPayment_jsx(Button["a" /* default */], {
    simple: true,
    color: "primary",
    fullWidth: true,
    onClick: handleBack
  }, "Voltar"))))))))), SectionPayment_jsx(Box_default.a, {
    clone: true,
    order: {
      xs: 1,
      sm: 1,
      md: 2
    }
  }, SectionPayment_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 12,
    md: 4
  }, SectionPayment_jsx(Grow_default.a, SectionPayment_extends({
    in: true,
    style: {
      transformOrigin: '0 0 0'
    }
  }, true ? {
    timeout: 1000
  } : undefined), SectionPayment_jsx(Card["a" /* default */], {
    className: classes.card1
  }, SectionPayment_jsx("form", {
    onSubmit: handleSubmit(onSubmit)
  }, SectionPayment_jsx(CardHeader["a" /* default */], {
    contact: true,
    color: "primary",
    className: classes.textCenter
  }, SectionPayment_jsx("h4", {
    className: classes.cardTitle
  }, "Resumo")), SectionPayment_jsx(Grow_default.a, SectionPayment_extends({
    in: activeForm === 0,
    style: {
      transformOrigin: '0 0 0',
      display: activeForm === 0 ? "block" : "none"
    }
  }, activeForm === 0 ? {
    timeout: 1000
  } : {}), SectionPayment_jsx(CardBody["a" /* default */], null, SectionPayment_jsx(GridContainer["a" /* default */], {
    justify: "center"
  }, SectionPayment_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 12,
    md: 12
  }, SectionPayment_jsx(Card["a" /* default */], {
    pricing: true,
    plain: true,
    className: classes.marginZero
  }, SectionPayment_jsx(CardBody["a" /* default */], {
    pricing: true,
    plain: true
  }, SectionPayment_jsx("h5", {
    className: classes.cardCategory,
    style: {
      color: "#425cc7"
    }
  }, "Plano ", SectionPayment_jsx("br", null), " ", plan.nome), SectionPayment_jsx("hr", null), insertCupom ? SectionPayment_jsx(external_react_default.a.Fragment, null, SectionPayment_jsx("small", {
    style: {
      fontSize: "1rem"
    }
  }, '\u00A0', " Primeira mensalidade"), SectionPayment_jsx("h1", {
    className: classes.cardTitle,
    style: {
      color: "#425cc7",
      marginTop: "0.75rem",
      marginBottom: "0 !important"
    }
  }, SectionPayment_jsx("small", {
    style: {
      color: "#425cc7"
    }
  }, "R$"), " ", formatValuePresentation(descontoParcela(listaPremios.listaPremios[0], plan.primeiraParcela))), SectionPayment_jsx("small", {
    style: {
      fontSize: "0.7rem"
    }
  }, '\u00A0', " Valor anual do plano: R$ ", formatValuePresentation(formatValueParcela(plan.mensalidade) * formatValueParcela(plan.fidelidade) - descontoTotal(listaPremios, plan))), getPremios(listaPremios)) : SectionPayment_jsx(external_react_default.a.Fragment, null, SectionPayment_jsx("small", {
    style: {
      fontSize: "1rem"
    }
  }, '\u00A0', " ", plan.fidelidade, " parcelas de"), SectionPayment_jsx("h1", {
    className: classes.cardTitle,
    style: {
      color: "#425cc7",
      marginTop: "0.75rem",
      marginBottom: "0 !important"
    }
  }, SectionPayment_jsx("small", {
    style: {
      color: "#425cc7"
    }
  }, "R$"), " ", formatValuePresentation(plan.mensalidade)), SectionPayment_jsx("small", {
    style: {
      fontSize: "0.7rem"
    }
  }, '\u00A0', " Valor anual do plano: R$ ", formatValuePresentation(formatValueParcela(plan.mensalidade) * formatValueParcela(plan.fidelidade)))), SectionPayment_jsx("ul", {
    className: classes.itensResumo
  }, SectionPayment_jsx("li", null, SectionPayment_jsx(Check_default.a, null), " Treinos Personalizados"), SectionPayment_jsx("li", null, SectionPayment_jsx(Check_default.a, null), " Acompanhamento em Grupo"), SectionPayment_jsx("li", null, SectionPayment_jsx(Check_default.a, null), " V\xEDdeos Explicativos por Exerc\xEDcio"), SectionPayment_jsx("li", null, SectionPayment_jsx(Check_default.a, null), " Master Classes Ao Vivo 1x/semana")))))))))))))))));
}
// EXTERNAL MODULE: external "@material-ui/core/Select"
var Select_ = __webpack_require__("OdWO");

// EXTERNAL MODULE: external "@material-ui/core/MenuItem"
var MenuItem_ = __webpack_require__("x54t");

// EXTERNAL MODULE: external "@material-ui/core/InputLabel"
var InputLabel_ = __webpack_require__("zOcm");

// EXTERNAL MODULE: external "text-mask-addons/dist/createNumberMask"
var createNumberMask_ = __webpack_require__("XGk3");
var createNumberMask_default = /*#__PURE__*/__webpack_require__.n(createNumberMask_);

// CONCATENATED MODULE: ./pages-sections/checkout/SectionAnamnese.js
var SectionAnamnese_jsx = external_react_default.a.createElement;

function SectionAnamnese_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function SectionAnamnese_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { SectionAnamnese_ownKeys(Object(source), true).forEach(function (key) { SectionAnamnese_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { SectionAnamnese_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function SectionAnamnese_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function SectionAnamnese_extends() { SectionAnamnese_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return SectionAnamnese_extends.apply(this, arguments); }

function SectionAnamnese_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = SectionAnamnese_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function SectionAnamnese_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



 // react components used to create a google map


 // @material-ui/core components




 // @material-ui/icons







 // core components




























const SectionAnamnese_useStyles = Object(styles_["makeStyles"])(checkoutStyle);

function SectionAnamnese_TextMaskCustom(props) {
  const {
    inputRef
  } = props,
        other = SectionAnamnese_objectWithoutProperties(props, ["inputRef"]);

  return SectionAnamnese_jsx(external_react_text_mask_default.a, SectionAnamnese_extends({}, other, {
    ref: ref => {
      inputRef(ref ? ref.inputElement : null);
    },
    mask: [/[0-9]/, /[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/] // placeholderChar={'\u2000'}
    ,
    showMask: true
  }));
}

function SectionAnamnese_PhoneMask(props) {
  const {
    inputRef
  } = props,
        other = SectionAnamnese_objectWithoutProperties(props, ["inputRef"]);

  return SectionAnamnese_jsx(external_react_text_mask_default.a, SectionAnamnese_extends({}, other, {
    ref: ref => {
      inputRef(ref ? ref.inputElement : null);
    },
    mask: ['(', /[1-9]/, /[0-9]/, ')', ' ', /[1-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/] // placeholderChar={'\u2000'}
    ,
    showMask: true
  }));
}

function SectionAnamnese_DateMask(props) {
  const {
    inputRef
  } = props,
        other = SectionAnamnese_objectWithoutProperties(props, ["inputRef"]);

  return SectionAnamnese_jsx(external_react_text_mask_default.a, SectionAnamnese_extends({}, other, {
    ref: ref => {
      inputRef(ref ? ref.inputElement : null);
    } // mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
    ,
    mask: [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/] // placeholderChar={'\u2000'}
    ,
    showMask: true
  }));
}

function AlturaMask(props) {
  const {
    inputRef
  } = props,
        other = SectionAnamnese_objectWithoutProperties(props, ["inputRef"]);

  return SectionAnamnese_jsx(external_react_text_mask_default.a, SectionAnamnese_extends({}, other, {
    ref: ref => {
      inputRef(ref ? ref.inputElement : null);
    } // mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
    ,
    mask: [/[0-9]/, ',', /[0-9]/, /[0-9]/] // guide={false}
    ,
    placeholderChar: '\u2000',
    showMask: true
  }));
}

const defaultMaskOptions = {
  prefix: '',
  suffix: '',
  includeThousandsSeparator: true,
  thousandsSeparatorSymbol: ',',
  allowDecimal: true,
  decimalSymbol: ',',
  decimalLimit: 2,
  // how many digits allowed after the decimal
  integerLimit: 3,
  // limit length of integer numbers
  // requireDecimal: true,
  allowNegative: false,
  allowLeadingZeroes: true
};

const PesoMask = props => {
  const {
    inputRef,
    maskOptions
  } = props,
        other = SectionAnamnese_objectWithoutProperties(props, ["inputRef", "maskOptions"]);

  const currencyMask = createNumberMask_default()(SectionAnamnese_objectSpread({}, defaultMaskOptions, {}, maskOptions));
  return SectionAnamnese_jsx(external_react_text_mask_default.a, SectionAnamnese_extends({}, other, {
    ref: ref => {
      inputRef(ref ? ref.inputElement : null);
    },
    mask: currencyMask,
    guide: false,
    placeholderChar: '\u2000',
    showMask: true
  }));
};

PesoMask.defaultProps = {
  inputMode: 'numeric',
  maskOptions: {}
};
// const AlturaMask = (props) => {
//   const { inputRef, maskOptions, ...other } = props;
//   const currencyMask = createNumberMask({
//     ...defaultMaskOptions,    
//     ...maskOptions,
//     integerLimit: 1, // limit length of integer numbers
//   })
//   return (
//     <MaskedInput
//       {...other}
//       ref={(ref) => {
//         inputRef(ref ? ref.inputElement : null);
//       }}
//       mask={currencyMask}
//       guide={false}
//       placeholderChar={'\u2000'}
//       showMask
//     />
//   );
// }
// AlturaMask.defaultProps = {
//   inputMode: 'numeric',
//   maskOptions: {},
// }
// AlturaMask.propTypes = {
//   inputRef: PropTypes.func.isRequired,
//   inputmode: PropTypes.string,
//   maskOptions: PropTypes.shape({
//     prefix: PropTypes.string,
//     suffix: PropTypes.string,
//     includeThousandsSeparator: PropTypes.boolean,
//     thousandsSeparatorSymbol: PropTypes.string,
//     allowDecimal: PropTypes.boolean,
//     decimalSymbol: PropTypes.string,
//     decimalLimit: PropTypes.string,
//     requireDecimal: PropTypes.boolean,
//     allowNegative: PropTypes.boolean,
//     allowLeadingZeroes: PropTypes.boolean,
//     integerLimit: PropTypes.number,
//   }),
// };
Object(external_yup_["setLocale"])({
  mixed: {
    notType: function notType(_ref) {
      switch (_ref.type) {
        case 'number':
          return 'deve ser um número';

        case 'string':
          return 'deve ser um texto';

        default:
          return 'formato errado';
      }
    },
    default: 'é inválido',
    required: 'Desculpe, este campo é obrigatório',
    oneOf: 'deve ser um dos seguintes valores: ${values}',
    notOneOf: 'não pode ser um dos seguintes valores: ${values}'
  },
  string: {
    length: 'deve ter exatamente ${length} caracteres',
    min: 'deve ter pelo menos ${min} caracteres',
    max: 'deve ter no máximo ${max} caracteres',
    email: 'Por favor, informe um e-mail inválido',
    url: 'deve ter um formato de URL válida',
    trim: 'não deve conter espaços no início ou no fim.',
    lowercase: 'deve estar em maiúsculo',
    uppercase: 'deve estar em minúsculo'
  },
  number: {
    min: 'deve ser no mínimo ${min}',
    max: 'deve ser no máximo ${max}',
    lessThan: 'deve ser menor que ${less}',
    moreThan: 'deve ser maior que ${more}',
    notEqual: 'não pode ser igual à ${notEqual}',
    positive: 'deve ser um número posítivo',
    negative: 'deve ser um número negativo',
    integer: 'deve ser um número inteiro'
  },
  date: {
    min: 'deve ser maior que a data ${min}',
    max: 'deve ser menor que a data ${max}'
  },
  array: {
    min: 'deve ter no mínimo ${min} itens',
    max: 'deve ter no máximo ${max} itens'
  }
});
const SectionAnamnese_regexCPF = /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/gm;

function SectionAnamnese_cpfValidate(cpf) {
  console.log("Validatring", cpf);
  return cpf.length > 10;
}

function SectionAnamnese_isValidCPF(cpf) {
  if (typeof cpf !== "string") return false;
  cpf = cpf.replace(/[\s.-]*/igm, '');

  if (!cpf || cpf.length != 11 || cpf == "00000000000" || cpf == "11111111111" || cpf == "22222222222" || cpf == "33333333333" || cpf == "44444444444" || cpf == "55555555555" || cpf == "66666666666" || cpf == "77777777777" || cpf == "88888888888" || cpf == "99999999999") {
    return false;
  }

  var soma = 0;
  var resto;

  for (var i = 1; i <= 9; i++) soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);

  resto = soma * 10 % 11;
  if (resto == 10 || resto == 11) resto = 0;
  if (resto != parseInt(cpf.substring(9, 10))) return false;
  soma = 0;

  for (var i = 1; i <= 10; i++) soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);

  resto = soma * 10 % 11;
  if (resto == 10 || resto == 11) resto = 0;
  if (resto != parseInt(cpf.substring(10, 11))) return false;
  return true;
}

function SectionAnamnese_isValidPhone(phone) {
  return /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/.test(phone);
}

function SectionAnamnese_isValidDate(date) {
  return /^((((0?[1-9]|[12]\d|3[01])[\.\-\/](0?[13578]|1[02])      [\.\-\/]((1[6-9]|[2-9]\d)?\d{2}))|((0?[1-9]|[12]\d|30)[\.\-\/](0?[13456789]|1[012])[\.\-\/]((1[6-9]|[2-9]\d)?\d{2}))|((0?[1-9]|1\d|2[0-8])[\.\-\/]0?2[\.\-\/]((1[6-9]|[2-9]\d)?\d{2}))|(29[\.\-\/]0?2[\.\-\/]((1[6-9]|[2-9]\d)?(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00)|00)))|(((0[1-9]|[12]\d|3[01])(0[13578]|1[02])((1[6-9]|[2-9]\d)?\d{2}))|((0[1-9]|[12]\d|30)(0[13456789]|1[012])((1[6-9]|[2-9]\d)?\d{2}))|((0[1-9]|1\d|2[0-8])02((1[6-9]|[2-9]\d)?\d{2}))|(2902((1[6-9]|[2-9]\d)?(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00)|00))))$/.test(date);
}

external_yup_["addMethod"](external_yup_["string"], "cpf", function (message) {
  // return yup.mixed().test("cpf", message || "número de CPF inválido", value => cpfValidate(value));
  return external_yup_["mixed"]().test("cpf", message || "número de CPF inválido", value => SectionAnamnese_isValidCPF(value));
});
external_yup_["addMethod"](external_yup_["string"], "phone", function (message) {
  return external_yup_["mixed"]().test("phone", message || "número de celular inválido", value => SectionAnamnese_isValidPhone(value));
});
external_yup_["addMethod"](external_yup_["string"], "date", function (message) {
  return external_yup_["mixed"]().test("date", message || "data inválida", value => SectionAnamnese_isValidDate(value));
}); // const SignupSchema = yup.object().shape({
//   // firstName: yup.string().required(),
//   cpf: yup
//     .string()
//     // .required(), 
// 		// .transform(function removeNonNumericalChar(value) {
// 		// 	console.log("Transforming", value);
// 		// 	return this.isType(value) && value !== null ? value.replace(/\D/g, "") : value;
// 		// })
// 		// .matches(regexCPF, "formato inválido")
//     .cpf("informe um CPF válido")
//     ,
//   first: yup
//     .string()
//     .required(),  
//   // email: yup.string().required(),
//   last: yup
//     .number()
//     // .required()
//     .positive()
//     .integer(),    
//   // message: yup.string().url(),
//   // checkboxInput: yup.boolean().oneOf([true],'aceite obrigatório')
// });

const SectionAnamnese_SignupSchema = external_yup_["object"]().shape({
  cpf: external_yup_["string"]().cpf("Por favor, informe um CPF válido"),
  nome: external_yup_["string"]().required(),
  email: external_yup_["string"]().required().email(),
  telefone: external_yup_["string"]().phone("Por favor, informe um número de celular válido"),
  dataNascimento: external_yup_["string"]().date("Por favor, informe uma data válida"),
  cep: external_yup_["string"]().required(),
  endereco: external_yup_["string"]().required(),
  numero: external_yup_["number"]().required(),
  complemento: external_yup_["string"](),
  bairro: external_yup_["string"]().required(),
  estado: external_yup_["string"]().required(),
  cidade: external_yup_["string"]().required(),
  idade: external_yup_["number"]().required(),
  peso: external_yup_["string"]().required(),
  altura: external_yup_["string"]().matches(/[0-9]{1}\,[0-9]{2}/g, 'Por favor, insira uma altura válida').required(),
  outroPatologia: external_yup_["string"]().required() // receberContatoEmail: yup.boolean().oneOf([true],'aceite obrigatório'),
  // receberContatoSMS: yup.boolean().oneOf([true],'aceite obrigatório'),
  // receberContatoWhatsApp: yup.boolean().oneOf([true],'aceite obrigatório')

}); // const schema = yup.object().shape({
//   first: yup.string().required(),
//   age: yup.number().positive().integer().required(),
// });

function SectionAnamnese(props) {
  // const { register, errors, handleSubmit} = useForm({
  //   validationSchema: SignupSchema
  // });
  const {
    register,
    trigger,
    handleSubmit,
    setValue,
    getValues,
    errors
  } = Object(external_react_hook_form_["useForm"])({
    resolver: Object(resolvers_["yupResolver"])(SectionAnamnese_SignupSchema),
    mode: "onBlur" // mode: "onChange"

  });

  const onSubmit = data => {
    console.log(data); // alert(JSON.stringify(data, null));
  };

  Object(external_react_["useEffect"])(() => {
    // history.pushState({}, null, "/checkout/anamnese");
    external_react_gtm_module_default.a.dataLayer({
      dataLayer: {
        event: "anamneseView",
        userId: '001',
        userProject: 'project',
        page: 'home'
      }
    });
    external_react_gtm_module_default.a.dataLayer({
      dataLayer: {
        'event': 'checkoutOption',
        'ecommerce': {
          'checkout_option': {
            'actionField': {
              'step': 3
            }
          }
        }
      }
    });
  }, []);
  const [checked, setChecked] = external_react_default.a.useState([]);

  const handleToggle = value => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const [isAluno, setIsAluno] = external_react_default.a.useState(false);
  const [activeForm, setActiveForm] = external_react_default.a.useState(0);
  const [activeField, setActiveField] = external_react_default.a.useState(["sexo"]); // const [activeField, setActiveField] = React.useState(["peso", "altura"]);

  const [isDisableNext, setIsDisableNext] = external_react_default.a.useState(true);
  const {
    0: error,
    1: setError
  } = Object(external_react_["useState"])(false);
  const [isLoading, setIsLoading] = external_react_default.a.useState(false);
  const [isOutro, setIsOutro] = external_react_default.a.useState(false);

  const handleNext = async () => {
    // console.log(activeField);
    // const result = await trigger(activeField)
    // console.log(result);
    const result = true;

    if (result) {
      console.log(getValues());

      if (activeForm == 17) {
        setIsLoading(true);
        const anamneseForm = getValues();
        props.setDataSale(prevDataSale => {
          return SectionAnamnese_objectSpread({}, prevDataSale, {
            sexo: anamneseForm.sexo,
            anamnese: SectionAnamnese_objectSpread({}, prevDataSale.anamnese, {}, anamneseForm)
          });
        });
        setTimeout(() => {
          setIsLoading(false);
        }, 3000); // props.sendDataForm();
      } else {
        setIsDisableNext(true);
        setIsOutro(false);
        setActiveForm(prevActiveStep => prevActiveStep + 1);
        handleFieldActive(activeForm + 1);
      }
    } // setActiveForm((prevActiveStep) => prevActiveStep + 1);

  };

  const handleBack = type => {
    if (activeForm !== 0) {
      setIsDisableNext(false);
      setActiveForm(prevActiveStep => prevActiveStep - 1);
      handleFieldActive(activeForm - 1);
    } else {
      props.setStepCheckout(1);
    }
  };

  const handleFocus = event => {
    // event.target.select()
    if (event.target.value == "") {
      event.target.selectionStart = 0;
      event.target.selectionEnd = 0;
    } else {
      event.target.select();
    }
  };

  const handleChange = async event => {
    const result = await trigger(activeField);
    console.log(activeField);
    console.log(result);

    if (result) {
      setIsDisableNext(false);
    } else {
      setIsDisableNext(true);
    }
  };

  const handleChangeOutro = async (event, name) => {
    setValue(name, event.target.value);
    const result = await trigger(name); // console.log(name);
    // console.log(result);

    if (result) {
      setIsDisableNext(false);
    } else {
      setIsDisableNext(true);
    }
  };

  const handleFieldActive = step => {
    console.log("handleFieldActive");

    switch (step) {
      case 0:
        setActiveField("sexo");
        break;

      case 1:
        setActiveField(["peso", "altura"]);
        break;

      case 2:
        setActiveField(["objetivo"]);
        break;

      case 3:
        setActiveField(["habitoTreino", "frequenciaTreino"]);
        break;

      case 4:
        setActiveField(["fazMusculacao"]);
        break;

      case 5:
        setActiveField(["fazAulas"]);
        break;

      case 6:
        setActiveField(["sedentario", "sedenTariotempo"]);
        break;

      case 7:
        setActiveField(["tempoPorDia"]);
        break;

      case 8:
        setActiveField(["periodo"]);
        break;

      case 9:
        setActiveField(["patologia", "outroPatologia"]);
        break;

      case 10:
        setActiveField(["osseoArticular", "qualOsseoArticular"]);
        break;

      case 11:
        setActiveField(["cirurgia", "qualCirurgia"]);
        break;

      case 12:
        setActiveField(["internacao", "qualInternacao"]);
        break;

      case 13:
        setActiveField(["medicamento", "qualMedicamento"]);
        break;

      case 14:
        setActiveField(["fuma"]);
        break;

      case 15:
        setActiveField(["nutricionista"]);
        break;

      case 16:
        setActiveField(["peronalTrainer"]);
        break;

      case 17:
        setActiveField(["equipamentos", "qualEquipamentos"]);
        break;

      default:
        setActiveField("sexo");
        break;
    }

    console.log(step); // console.log(activeField);
  };

  const setValueForm = (name, value, outro) => {
    setValue(name, value); // console.log(getValues());

    if (outro) {
      setIsOutro(true);
    } else {
      handleNext();
    }
  }; // useEffect(() => {
  //   console.log("teste de erro");
  //   console.log(errors[activeField]);  
  //   !errors[activeField] && setIsDisableNext(false);
  // }, [ errors[activeField] ]);
  // useEffect(() => {
  //   if(isOutro) {
  //     register("outroPatologia");
  //   }  
  //  }, [ isOutro ]);


  const [anamnese, setAnamnese] = external_react_default.a.useState({
    sexo: "TESTE",
    peso: "TESTE",
    altura: "TESTE",
    objetivo: "TESTE",
    habitoTreino: "TESTE",
    frequenciaTreino: "TESTE",
    fazMusculacao: "TESTE",
    fazAulas: "TESTE",
    sedentario: "TESTE",
    sedenTariotempo: "TESTE",
    reclusaoTreino: "TESTE",
    tempoPorDia: "TESTE",
    periodo: "TESTE",
    patologia: "TESTE",
    outroPatologia: "TESTE",
    osseoArticular: "TESTE",
    qualOsseoArticular: "TESTE",
    cirurgia: "TESTE",
    qualCirurgia: "TESTE",
    internacao: "TESTE",
    qualInternacao: "TESTE",
    medicamento: "TESTE",
    qualMedicamento: "TESTE",
    fuma: "TESTE",
    nutricionista: "TESTE",
    peronalTrainer: "TESTE",
    equipamentos: "TESTE"
  });
  const classes = SectionAnamnese_useStyles();
  return SectionAnamnese_jsx("div", {
    className: "cd-section"
  }, SectionAnamnese_jsx("div", {
    className: classes.contacts + " " + classes.section // style={{ backgroundImage: `url(${city})` }}
    ,
    style: {
      backgroundColor: "#ffffff"
    }
  }, SectionAnamnese_jsx("div", {
    className: classes.container
  }, SectionAnamnese_jsx(GridContainer["a" /* default */], {
    justify: "center"
  }, SectionAnamnese_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 12,
    md: 5
  }, SectionAnamnese_jsx(Grow_default.a, SectionAnamnese_extends({
    in: true,
    style: {
      transformOrigin: '0 0 0'
    }
  }, true ? {
    timeout: 1000
  } : undefined), SectionAnamnese_jsx(Card["a" /* default */], {
    className: classes.card1
  }, SectionAnamnese_jsx("form", {
    onSubmit: handleSubmit(onSubmit)
  }, SectionAnamnese_jsx(CardHeader["a" /* default */], {
    contact: true,
    color: "primary",
    className: classes.textCenter
  }, SectionAnamnese_jsx("h4", {
    className: classes.cardTitle
  }, "Sobre voc\xEA")), SectionAnamnese_jsx(Grow_default.a, SectionAnamnese_extends({
    in: activeForm === 0,
    style: {
      transformOrigin: '0 0 0',
      display: activeForm === 0 ? "block" : "none"
    }
  }, activeForm === 0 ? {
    timeout: 1000
  } : {}), SectionAnamnese_jsx(CardBody["a" /* default */], null, SectionAnamnese_jsx(GridContainer["a" /* default */], {
    justify: "center"
  }, SectionAnamnese_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 8,
    md: 8
  }, SectionAnamnese_jsx("input", {
    hidden: true,
    name: "sexo",
    type: "text",
    ref: register
  }), SectionAnamnese_jsx("label", null, "Qual o seu sexo?"), SectionAnamnese_jsx(Button["a" /* default */], {
    color: "primary",
    fullWidth: true,
    onClick: () => setValueForm("sexo", "M")
  }, "Masculino"), SectionAnamnese_jsx(Button["a" /* default */], {
    color: "secondary",
    fullWidth: true,
    onClick: () => setValueForm("sexo", "F")
  }, "Feminino"))))), SectionAnamnese_jsx(Grow_default.a, SectionAnamnese_extends({
    in: activeForm === 1,
    style: {
      transformOrigin: '0 0 0',
      display: activeForm === 1 ? "block" : "none"
    }
  }, activeForm === 1 ? {
    timeout: 1000
  } : {}), SectionAnamnese_jsx(CardBody["a" /* default */], null, SectionAnamnese_jsx(GridContainer["a" /* default */], {
    justify: "center"
  }, SectionAnamnese_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 8,
    md: 8
  }, SectionAnamnese_jsx(CustomInput["a" /* default */], {
    labelText: "Qual \xE9 o seu peso?",
    labelError: errors.peso && errors.peso.message,
    error: errors.peso ? true : false,
    id: "peso",
    formControlProps: {
      fullWidth: true
    },
    inputProps: {
      type: "tel",
      name: "peso",
      placeholder: "0,00",
      inputComponent: PesoMask,
      inputRef: register,
      onChange: handleChange,
      endAdornment: SectionAnamnese_jsx(InputAdornment_default.a, {
        position: "start"
      }, "Kg")
    }
  }), SectionAnamnese_jsx(CustomInput["a" /* default */], {
    labelText: "Qual a sua altura? ",
    labelError: errors.altura && errors.altura.message,
    error: errors.altura ? true : false,
    id: "altura",
    formControlProps: {
      fullWidth: true
    },
    inputProps: {
      type: "tel",
      name: "altura",
      // placeholder: "0,00",
      inputComponent: AlturaMask,
      inputRef: register,
      onChange: handleChange,
      onClick: handleFocus,
      endAdornment: SectionAnamnese_jsx(InputAdornment_default.a, {
        position: "start"
      }, "m")
    }
  }))))), SectionAnamnese_jsx(Grow_default.a, SectionAnamnese_extends({
    in: activeForm === 2,
    style: {
      transformOrigin: '0 0 0',
      display: activeForm === 2 ? "block" : "none"
    }
  }, activeForm === 2 ? {
    timeout: 1000
  } : {}), SectionAnamnese_jsx(CardBody["a" /* default */], null, error && SectionAnamnese_jsx(SnackbarContent["a" /* default */], {
    message: SectionAnamnese_jsx("span", null, SectionAnamnese_jsx("b", null, "N\xE3o encontramos seu CEP"), " ", SectionAnamnese_jsx("br", null), " Tente novamente") // close
    ,
    color: "warning",
    icon: "info_outline"
  }), SectionAnamnese_jsx(GridContainer["a" /* default */], {
    justify: "center"
  }, SectionAnamnese_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 12,
    md: 9
  }, SectionAnamnese_jsx("input", {
    hidden: true,
    name: "objetivo",
    type: "text",
    ref: register
  }), SectionAnamnese_jsx("label", null, "Qual \xE9 o seu objetivo?"), SectionAnamnese_jsx("br", null), SectionAnamnese_jsx(Button["a" /* default */], {
    color: "primary",
    fullWidth: true,
    onClick: () => setValueForm("objetivo", "Emagrecer")
  }, "Emagrecer"), SectionAnamnese_jsx(Button["a" /* default */], {
    color: "primary",
    fullWidth: true,
    onClick: () => setValueForm("objetivo", "Aumentar a Massa Magra")
  }, "Aumentar a Massa Magra"), SectionAnamnese_jsx(Button["a" /* default */], {
    color: "primary",
    fullWidth: true,
    onClick: () => setValueForm("objetivo", "Manter o Condicionamento Físico")
  }, "Manter o Condicionamento F\xEDsico"), SectionAnamnese_jsx(Button["a" /* default */], {
    color: "primary",
    fullWidth: true,
    onClick: () => setValueForm("objetivo", "Bem Estar")
  }, "Bem Estar"), SectionAnamnese_jsx(Button["a" /* default */], {
    color: "primary",
    fullWidth: true,
    onClick: () => setValueForm("objetivo", "Indicação Médica")
  }, "Indica\xE7\xE3o M\xE9dica"))))), SectionAnamnese_jsx(Grow_default.a, SectionAnamnese_extends({
    in: activeForm === 3,
    style: {
      transformOrigin: '0 0 0',
      display: activeForm === 3 ? "block" : "none"
    }
  }, activeForm === 3 ? {
    timeout: 1000
  } : {}), SectionAnamnese_jsx(CardBody["a" /* default */], null, error && SectionAnamnese_jsx(SnackbarContent["a" /* default */], {
    message: SectionAnamnese_jsx("span", null, SectionAnamnese_jsx("b", null, "N\xE3o encontramos seu CEP"), " ", SectionAnamnese_jsx("br", null), " Tente novamente") // close
    ,
    color: "warning",
    icon: "info_outline"
  }), SectionAnamnese_jsx(GridContainer["a" /* default */], {
    justify: "center"
  }, SectionAnamnese_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 12,
    md: 8
  }, SectionAnamnese_jsx("input", {
    hidden: true,
    name: "habitoTreino",
    type: "text",
    ref: register
  }), SectionAnamnese_jsx("input", {
    hidden: true,
    name: "frequenciaTreino",
    type: "text",
    ref: register
  }), !isOutro ? SectionAnamnese_jsx(external_react_default.a.Fragment, null, SectionAnamnese_jsx("label", null, "Possui o h\xE1bito de treinar?"), SectionAnamnese_jsx("br", null), SectionAnamnese_jsx(Button["a" /* default */], {
    color: "primary",
    fullWidth: true,
    onClick: () => setValueForm("habitoTreino", "SIM", true)
  }, "Sim"), SectionAnamnese_jsx(Button["a" /* default */], {
    color: "secondary",
    fullWidth: true,
    onClick: () => setValueForm("habitoTreino", "NÃO")
  }, "N\xE3o")) : SectionAnamnese_jsx(external_react_default.a.Fragment, null, SectionAnamnese_jsx("label", null, "Quantas vezes na semana?"), SectionAnamnese_jsx("br", null), SectionAnamnese_jsx(Button["a" /* default */], {
    color: "primary",
    fullWidth: true,
    onClick: () => setValueForm("frequenciaTreino", "1 a 2 vezes")
  }, "1 a 2 vezes"), SectionAnamnese_jsx(Button["a" /* default */], {
    color: "primary",
    fullWidth: true,
    onClick: () => setValueForm("frequenciaTreino", "3 a 5 vezes")
  }, "3 a 5 vezes"), SectionAnamnese_jsx(Button["a" /* default */], {
    color: "primary",
    fullWidth: true,
    onClick: () => setValueForm("frequenciaTreino", "6 a 7 vezes")
  }, "6 a 7 vezes")))))), SectionAnamnese_jsx(Grow_default.a, SectionAnamnese_extends({
    in: activeForm === 4,
    style: {
      transformOrigin: '0 0 0',
      display: activeForm === 4 ? "block" : "none"
    }
  }, activeForm === 4 ? {
    timeout: 1000
  } : {}), SectionAnamnese_jsx(CardBody["a" /* default */], null, error && SectionAnamnese_jsx(SnackbarContent["a" /* default */], {
    message: SectionAnamnese_jsx("span", null, SectionAnamnese_jsx("b", null, "N\xE3o encontramos seu CEP"), " ", SectionAnamnese_jsx("br", null), " Tente novamente") // close
    ,
    color: "warning",
    icon: "info_outline"
  }), SectionAnamnese_jsx(GridContainer["a" /* default */], {
    justify: "center"
  }, SectionAnamnese_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 12,
    md: 9
  }, SectionAnamnese_jsx("input", {
    hidden: true,
    name: "fazMusculacao",
    type: "text",
    ref: register
  }), SectionAnamnese_jsx("label", null, "Na academia, costuma fazer muscula\xE7\xE3o?"), SectionAnamnese_jsx("br", null), SectionAnamnese_jsx(Button["a" /* default */], {
    color: "primary",
    fullWidth: true,
    onClick: () => setValueForm("fazMusculacao", "SIM")
  }, "Sim"), SectionAnamnese_jsx(Button["a" /* default */], {
    color: "secondary",
    fullWidth: true,
    onClick: () => setValueForm("fazMusculacao", "NÃO")
  }, "N\xE3o"))))), SectionAnamnese_jsx(Grow_default.a, SectionAnamnese_extends({
    in: activeForm === 5,
    style: {
      transformOrigin: '0 0 0',
      display: activeForm === 5 ? "block" : "none"
    }
  }, activeForm === 5 ? {
    timeout: 1000
  } : {}), SectionAnamnese_jsx(CardBody["a" /* default */], null, error && SectionAnamnese_jsx(SnackbarContent["a" /* default */], {
    message: SectionAnamnese_jsx("span", null, SectionAnamnese_jsx("b", null, "N\xE3o encontramos seu CEP"), " ", SectionAnamnese_jsx("br", null), " Tente novamente") // close
    ,
    color: "warning",
    icon: "info_outline"
  }), SectionAnamnese_jsx(GridContainer["a" /* default */], {
    justify: "center"
  }, SectionAnamnese_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 12,
    md: 9
  }, SectionAnamnese_jsx("input", {
    hidden: true,
    name: "fazAulas",
    type: "text",
    ref: register
  }), SectionAnamnese_jsx("label", null, "Na academia, costuma fazer aulas?"), SectionAnamnese_jsx("br", null), SectionAnamnese_jsx(Button["a" /* default */], {
    color: "primary",
    fullWidth: true,
    onClick: () => setValueForm("fazAulas", "SIM")
  }, "Sim"), SectionAnamnese_jsx(Button["a" /* default */], {
    color: "secondary",
    fullWidth: true,
    onClick: () => setValueForm("fazAulas", "NÃO")
  }, "N\xE3o"))))), SectionAnamnese_jsx(Grow_default.a, SectionAnamnese_extends({
    in: activeForm === 6,
    style: {
      transformOrigin: '0 0 0',
      display: activeForm === 6 ? "block" : "none"
    }
  }, activeForm === 6 ? {
    timeout: 1000
  } : {}), SectionAnamnese_jsx(CardBody["a" /* default */], null, error && SectionAnamnese_jsx(SnackbarContent["a" /* default */], {
    message: SectionAnamnese_jsx("span", null, SectionAnamnese_jsx("b", null, "N\xE3o encontramos seu CEP"), " ", SectionAnamnese_jsx("br", null), " Tente novamente") // close
    ,
    color: "warning",
    icon: "info_outline"
  }), SectionAnamnese_jsx(GridContainer["a" /* default */], {
    justify: "center"
  }, SectionAnamnese_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 12,
    md: 8
  }, SectionAnamnese_jsx("input", {
    hidden: true,
    name: "sedentario",
    type: "text",
    ref: register
  }), SectionAnamnese_jsx("input", {
    hidden: true,
    name: "sedenTariotempo",
    type: "text",
    ref: register
  }), !isOutro ? SectionAnamnese_jsx(external_react_default.a.Fragment, null, SectionAnamnese_jsx("label", null, "Atualmente, se considera sedent\xE1rio?"), SectionAnamnese_jsx("br", null), SectionAnamnese_jsx(Button["a" /* default */], {
    color: "primary",
    fullWidth: true,
    onClick: () => setValueForm("sedentario", "SIM", true)
  }, "Sim"), SectionAnamnese_jsx(Button["a" /* default */], {
    color: "secondary",
    fullWidth: true,
    onClick: () => setValueForm("sedentario", "NÃO")
  }, "N\xE3o")) : SectionAnamnese_jsx(external_react_default.a.Fragment, null, SectionAnamnese_jsx("label", null, "H\xE1 quanto tempo?"), SectionAnamnese_jsx("br", null), SectionAnamnese_jsx(Button["a" /* default */], {
    color: "primary",
    fullWidth: true,
    onClick: () => setValueForm("sedenTariotempo", "6 meses")
  }, "6 meses"), SectionAnamnese_jsx(Button["a" /* default */], {
    color: "primary",
    fullWidth: true,
    onClick: () => setValueForm("sedenTariotempo", "6 meses a 2 anos")
  }, "6 meses a 2 anos"), SectionAnamnese_jsx(Button["a" /* default */], {
    color: "primary",
    fullWidth: true,
    onClick: () => setValueForm("sedenTariotempo", "Há mais de 2 anos")
  }, "H\xE1 mais de 2 anos")))))), SectionAnamnese_jsx(Grow_default.a, SectionAnamnese_extends({
    in: activeForm === 7,
    style: {
      transformOrigin: '0 0 0',
      display: activeForm === 7 ? "block" : "none"
    }
  }, activeForm === 7 ? {
    timeout: 1000
  } : {}), SectionAnamnese_jsx(CardBody["a" /* default */], null, error && SectionAnamnese_jsx(SnackbarContent["a" /* default */], {
    message: SectionAnamnese_jsx("span", null, SectionAnamnese_jsx("b", null, "N\xE3o encontramos seu CEP"), " ", SectionAnamnese_jsx("br", null), " Tente novamente") // close
    ,
    color: "warning",
    icon: "info_outline"
  }), SectionAnamnese_jsx(GridContainer["a" /* default */], {
    justify: "center"
  }, SectionAnamnese_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 12,
    md: 8
  }, SectionAnamnese_jsx("input", {
    hidden: true,
    name: "tempoPorDia",
    type: "text",
    ref: register
  }), SectionAnamnese_jsx("label", null, "Pretende treinar quanto tempo por dia?"), SectionAnamnese_jsx("br", null), SectionAnamnese_jsx(Button["a" /* default */], {
    color: "primary",
    fullWidth: true,
    onClick: () => setValueForm("tempoPorDia", "10 a 30 minutos")
  }, "10 a 30 minutos"), SectionAnamnese_jsx(Button["a" /* default */], {
    color: "primary",
    fullWidth: true,
    onClick: () => setValueForm("tempoPorDia", "40 a 45 minutos")
  }, "40 a 45 minutos"), SectionAnamnese_jsx(Button["a" /* default */], {
    color: "primary",
    fullWidth: true,
    onClick: () => setValueForm("tempoPorDia", "1 hora ou mais")
  }, "1 hora ou mais"))))), SectionAnamnese_jsx(Grow_default.a, SectionAnamnese_extends({
    in: activeForm === 8,
    style: {
      transformOrigin: '0 0 0',
      display: activeForm === 8 ? "block" : "none"
    }
  }, activeForm === 8 ? {
    timeout: 1000
  } : {}), SectionAnamnese_jsx(CardBody["a" /* default */], null, error && SectionAnamnese_jsx(SnackbarContent["a" /* default */], {
    message: SectionAnamnese_jsx("span", null, SectionAnamnese_jsx("b", null, "N\xE3o encontramos seu CEP"), " ", SectionAnamnese_jsx("br", null), " Tente novamente") // close
    ,
    color: "warning",
    icon: "info_outline"
  }), SectionAnamnese_jsx(GridContainer["a" /* default */], {
    justify: "center"
  }, SectionAnamnese_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 12,
    md: 8
  }, SectionAnamnese_jsx("input", {
    hidden: true,
    name: "periodo",
    type: "text",
    ref: register
  }), SectionAnamnese_jsx("label", null, "Em qual per\xEDodo deseja o atendimento?"), SectionAnamnese_jsx("br", null), SectionAnamnese_jsx(Button["a" /* default */], {
    color: "primary",
    fullWidth: true,
    onClick: () => setValueForm("periodo", "Manhã")
  }, "Manh\xE3 - 08:00 \xE0s 12:00"), SectionAnamnese_jsx(Button["a" /* default */], {
    color: "primary",
    fullWidth: true,
    onClick: () => setValueForm("periodo", "Tarde")
  }, "Tarde - 12:00 \xE0s 16:00"), SectionAnamnese_jsx(Button["a" /* default */], {
    color: "primary",
    fullWidth: true,
    onClick: () => setValueForm("periodo", "Noite")
  }, "Noite - 16:00 \xE0s 20:00"))))), SectionAnamnese_jsx(Grow_default.a, SectionAnamnese_extends({
    in: activeForm === 9,
    style: {
      transformOrigin: '0 0 0',
      display: activeForm === 9 ? "block" : "none"
    }
  }, activeForm === 9 ? {
    timeout: 1000
  } : {}), SectionAnamnese_jsx(CardBody["a" /* default */], null, error && SectionAnamnese_jsx(SnackbarContent["a" /* default */], {
    message: SectionAnamnese_jsx("span", null, SectionAnamnese_jsx("b", null, "N\xE3o encontramos seu CEP"), " ", SectionAnamnese_jsx("br", null), " Tente novamente") // close
    ,
    color: "warning",
    icon: "info_outline"
  }), SectionAnamnese_jsx(GridContainer["a" /* default */], {
    justify: "center"
  }, SectionAnamnese_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 12,
    md: 8
  }, SectionAnamnese_jsx("input", {
    hidden: true,
    name: "patologia",
    type: "text",
    ref: register
  }), SectionAnamnese_jsx("input", {
    hidden: true,
    name: "outroPatologia",
    type: "text",
    ref: register
  }), !isOutro ? SectionAnamnese_jsx(external_react_default.a.Fragment, null, SectionAnamnese_jsx("label", null, "Possui alguma patologia?"), SectionAnamnese_jsx("br", null), SectionAnamnese_jsx(Button["a" /* default */], {
    color: "secondary",
    fullWidth: true,
    onClick: () => setValueForm("patologia", "coracao")
  }, "Sim, no cora\xE7\xE3o"), SectionAnamnese_jsx(Button["a" /* default */], {
    color: "secondary",
    fullWidth: true,
    onClick: () => setValueForm("patologia", "pulmao")
  }, "Sim, no pulm\xE3o"), SectionAnamnese_jsx(Button["a" /* default */], {
    color: "primary",
    fullWidth: true,
    onClick: () => setValueForm("patologia", "outro", true)
  }, "Sim, em outro local"), SectionAnamnese_jsx(Button["a" /* default */], {
    color: "danger",
    fullWidth: true,
    onClick: () => setValueForm("patologia", "NÃO")
  }, "N\xE3o")) : SectionAnamnese_jsx(external_react_default.a.Fragment, null, SectionAnamnese_jsx(CustomInput["a" /* default */], {
    labelText: "Qual o problema e onde seria?",
    labelError: errors.outroPatologia && errors.outroPatologia.message,
    error: errors.outroPatologia ? true : false,
    id: "outroPatologiaInput",
    formControlProps: {
      fullWidth: true
    },
    inputProps: {
      name: "outroPatologiaInput",
      inputRef: register,
      onChange: event => handleChangeOutro(event, "outroPatologia")
    }
  })))))), SectionAnamnese_jsx(Grow_default.a, SectionAnamnese_extends({
    in: activeForm === 10,
    style: {
      transformOrigin: '0 0 0',
      display: activeForm === 10 ? "block" : "none"
    }
  }, activeForm === 10 ? {
    timeout: 1000
  } : {}), SectionAnamnese_jsx(CardBody["a" /* default */], null, error && SectionAnamnese_jsx(SnackbarContent["a" /* default */], {
    message: SectionAnamnese_jsx("span", null, SectionAnamnese_jsx("b", null, "N\xE3o encontramos seu CEP"), " ", SectionAnamnese_jsx("br", null), " Tente novamente") // close
    ,
    color: "warning",
    icon: "info_outline"
  }), SectionAnamnese_jsx(GridContainer["a" /* default */], {
    justify: "center"
  }, SectionAnamnese_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 12,
    md: 8
  }, SectionAnamnese_jsx("input", {
    hidden: true,
    name: "osseoArticular",
    type: "text",
    ref: register
  }), SectionAnamnese_jsx("input", {
    hidden: true,
    name: "qualOsseoArticular",
    type: "text",
    ref: register
  }), !isOutro ? SectionAnamnese_jsx(external_react_default.a.Fragment, null, SectionAnamnese_jsx("label", null, "Possui algum problema \xF3sseo articular?"), SectionAnamnese_jsx("br", null), SectionAnamnese_jsx(Button["a" /* default */], {
    color: "primary",
    fullWidth: true,
    onClick: () => setValueForm("osseoArticular", "SIM", true)
  }, "Sim"), SectionAnamnese_jsx(Button["a" /* default */], {
    color: "secondary",
    fullWidth: true,
    onClick: () => setValueForm("osseoArticular", "NÃO")
  }, "N\xE3o")) : SectionAnamnese_jsx(external_react_default.a.Fragment, null, SectionAnamnese_jsx(CustomInput["a" /* default */], {
    labelText: "Qual seria?",
    labelError: errors.qualOsseoArticular && errors.qualOsseoArticular.message,
    error: errors.qualOsseoArticular ? true : false,
    id: "qualOsseoArticularInput",
    formControlProps: {
      fullWidth: true
    },
    inputProps: {
      name: "qualOsseoArticularInput",
      inputRef: register,
      onChange: event => handleChangeOutro(event, "qualOsseoArticular")
    }
  })))))), SectionAnamnese_jsx(Grow_default.a, SectionAnamnese_extends({
    in: activeForm === 11,
    style: {
      transformOrigin: '0 0 0',
      display: activeForm === 11 ? "block" : "none"
    }
  }, activeForm === 11 ? {
    timeout: 1000
  } : {}), SectionAnamnese_jsx(CardBody["a" /* default */], null, error && SectionAnamnese_jsx(SnackbarContent["a" /* default */], {
    message: SectionAnamnese_jsx("span", null, SectionAnamnese_jsx("b", null, "N\xE3o encontramos seu CEP"), " ", SectionAnamnese_jsx("br", null), " Tente novamente") // close
    ,
    color: "warning",
    icon: "info_outline"
  }), SectionAnamnese_jsx(GridContainer["a" /* default */], {
    justify: "center"
  }, SectionAnamnese_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 12,
    md: 8
  }, SectionAnamnese_jsx("input", {
    hidden: true,
    name: "cirurgia",
    type: "text",
    ref: register
  }), SectionAnamnese_jsx("input", {
    hidden: true,
    name: "qualCirurgia",
    type: "text",
    ref: register
  }), !isOutro ? SectionAnamnese_jsx(external_react_default.a.Fragment, null, SectionAnamnese_jsx("label", null, "J\xE1 sofreu alguma cirurgia?"), SectionAnamnese_jsx("br", null), SectionAnamnese_jsx(Button["a" /* default */], {
    color: "primary",
    fullWidth: true,
    onClick: () => setValueForm("cirurgia", "SIM", true)
  }, "Sim"), SectionAnamnese_jsx(Button["a" /* default */], {
    color: "secondary",
    fullWidth: true,
    onClick: () => setValueForm("cirurgia", "NÃO")
  }, "N\xE3o")) : SectionAnamnese_jsx(external_react_default.a.Fragment, null, SectionAnamnese_jsx(CustomInput["a" /* default */], {
    labelText: "Qual cirurgia?",
    labelError: errors.qualCirurgia && errors.qualCirurgia.message,
    error: errors.qualCirurgia ? true : false,
    id: "qualCirurgiaInput",
    formControlProps: {
      fullWidth: true
    },
    inputProps: {
      name: "qualCirurgiaInput",
      inputRef: register,
      onChange: event => handleChangeOutro(event, "qualCirurgia")
    }
  })))))), SectionAnamnese_jsx(Grow_default.a, SectionAnamnese_extends({
    in: activeForm === 12,
    style: {
      transformOrigin: '0 0 0',
      display: activeForm === 12 ? "block" : "none"
    }
  }, activeForm === 12 ? {
    timeout: 1000
  } : {}), SectionAnamnese_jsx(CardBody["a" /* default */], null, error && SectionAnamnese_jsx(SnackbarContent["a" /* default */], {
    message: SectionAnamnese_jsx("span", null, SectionAnamnese_jsx("b", null, "N\xE3o encontramos seu CEP"), " ", SectionAnamnese_jsx("br", null), " Tente novamente") // close
    ,
    color: "warning",
    icon: "info_outline"
  }), SectionAnamnese_jsx(GridContainer["a" /* default */], {
    justify: "center"
  }, SectionAnamnese_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 12,
    md: 8
  }, SectionAnamnese_jsx("input", {
    hidden: true,
    name: "internacao",
    type: "text",
    ref: register
  }), SectionAnamnese_jsx("input", {
    hidden: true,
    name: "qualInternacao",
    type: "text",
    ref: register
  }), !isOutro ? SectionAnamnese_jsx(external_react_default.a.Fragment, null, SectionAnamnese_jsx("label", null, "Sofreu alguma interna\xE7\xE3o recentemente?"), SectionAnamnese_jsx("br", null), SectionAnamnese_jsx(Button["a" /* default */], {
    color: "primary",
    fullWidth: true,
    onClick: () => setValueForm("internacao", "SIM", true)
  }, "Sim"), SectionAnamnese_jsx(Button["a" /* default */], {
    color: "secondary",
    fullWidth: true,
    onClick: () => setValueForm("internacao", "NÃO")
  }, "N\xE3o")) : SectionAnamnese_jsx(external_react_default.a.Fragment, null, SectionAnamnese_jsx(CustomInput["a" /* default */], {
    labelText: "Qual seria?",
    labelError: errors.qualInternacao && errors.qualInternacao.message,
    error: errors.qualInternacao ? true : false,
    id: "qualInternacaoInput",
    formControlProps: {
      fullWidth: true
    },
    inputProps: {
      name: "qualInternacaoInput",
      inputRef: register,
      onChange: event => handleChangeOutro(event, "qualInternacao")
    }
  })))))), SectionAnamnese_jsx(Grow_default.a, SectionAnamnese_extends({
    in: activeForm === 13,
    style: {
      transformOrigin: '0 0 0',
      display: activeForm === 13 ? "block" : "none"
    }
  }, activeForm === 13 ? {
    timeout: 1000
  } : {}), SectionAnamnese_jsx(CardBody["a" /* default */], null, error && SectionAnamnese_jsx(SnackbarContent["a" /* default */], {
    message: SectionAnamnese_jsx("span", null, SectionAnamnese_jsx("b", null, "N\xE3o encontramos seu CEP"), " ", SectionAnamnese_jsx("br", null), " Tente novamente") // close
    ,
    color: "warning",
    icon: "info_outline"
  }), SectionAnamnese_jsx(GridContainer["a" /* default */], {
    justify: "center"
  }, SectionAnamnese_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 12,
    md: 8
  }, SectionAnamnese_jsx("input", {
    hidden: true,
    name: "medicamento",
    type: "text",
    ref: register
  }), SectionAnamnese_jsx("input", {
    hidden: true,
    name: "qualMedicamento",
    type: "text",
    ref: register
  }), !isOutro ? SectionAnamnese_jsx(external_react_default.a.Fragment, null, SectionAnamnese_jsx("label", null, "Faz uso de algum medicamento?"), SectionAnamnese_jsx("br", null), SectionAnamnese_jsx(Button["a" /* default */], {
    color: "primary",
    fullWidth: true,
    onClick: () => setValueForm("medicamento", "SIM", true)
  }, "Sim"), SectionAnamnese_jsx(Button["a" /* default */], {
    color: "secondary",
    fullWidth: true,
    onClick: () => setValueForm("medicamento", "NÃO")
  }, "N\xE3o")) : SectionAnamnese_jsx(external_react_default.a.Fragment, null, SectionAnamnese_jsx(CustomInput["a" /* default */], {
    labelText: "Qual seria?",
    labelError: errors.qualMedicamento && errors.qualMedicamento.message,
    error: errors.qualMedicamento ? true : false,
    id: "qualMedicamentoInput",
    formControlProps: {
      fullWidth: true
    },
    inputProps: {
      name: "qualMedicamentoInput",
      inputRef: register,
      onChange: event => handleChangeOutro(event, "qualMedicamento")
    }
  })))))), SectionAnamnese_jsx(Grow_default.a, SectionAnamnese_extends({
    in: activeForm === 14,
    style: {
      transformOrigin: '0 0 0',
      display: activeForm === 14 ? "block" : "none"
    }
  }, activeForm === 14 ? {
    timeout: 1000
  } : {}), SectionAnamnese_jsx(CardBody["a" /* default */], null, error && SectionAnamnese_jsx(SnackbarContent["a" /* default */], {
    message: SectionAnamnese_jsx("span", null, SectionAnamnese_jsx("b", null, "N\xE3o encontramos seu CEP"), " ", SectionAnamnese_jsx("br", null), " Tente novamente") // close
    ,
    color: "warning",
    icon: "info_outline"
  }), SectionAnamnese_jsx(GridContainer["a" /* default */], {
    justify: "center"
  }, SectionAnamnese_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 12,
    md: 8
  }, SectionAnamnese_jsx("input", {
    hidden: true,
    name: "fuma",
    type: "text",
    ref: register
  }), SectionAnamnese_jsx("label", null, "Possui o h\xE1bito de fumar?"), SectionAnamnese_jsx("br", null), SectionAnamnese_jsx(Button["a" /* default */], {
    color: "primary",
    fullWidth: true,
    onClick: () => setValueForm("fuma", "SIM")
  }, "Sim"), SectionAnamnese_jsx(Button["a" /* default */], {
    color: "secondary",
    fullWidth: true,
    onClick: () => setValueForm("fuma", "NÃO")
  }, "N\xE3o"))))), SectionAnamnese_jsx(Grow_default.a, SectionAnamnese_extends({
    in: activeForm === 15,
    style: {
      transformOrigin: '0 0 0',
      display: activeForm === 15 ? "block" : "none"
    }
  }, activeForm === 15 ? {
    timeout: 1000
  } : {}), SectionAnamnese_jsx(CardBody["a" /* default */], null, error && SectionAnamnese_jsx(SnackbarContent["a" /* default */], {
    message: SectionAnamnese_jsx("span", null, SectionAnamnese_jsx("b", null, "N\xE3o encontramos seu CEP"), " ", SectionAnamnese_jsx("br", null), " Tente novamente") // close
    ,
    color: "warning",
    icon: "info_outline"
  }), SectionAnamnese_jsx(GridContainer["a" /* default */], {
    justify: "center"
  }, SectionAnamnese_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 12,
    md: 8
  }, SectionAnamnese_jsx("input", {
    hidden: true,
    name: "nutricionista",
    type: "text",
    ref: register
  }), SectionAnamnese_jsx("label", null, "Faz acompanhamento com um(a) nutricionista?"), SectionAnamnese_jsx("br", null), SectionAnamnese_jsx(Button["a" /* default */], {
    color: "primary",
    fullWidth: true,
    onClick: () => setValueForm("nutricionista", "SIM")
  }, "Sim"), SectionAnamnese_jsx(Button["a" /* default */], {
    color: "secondary",
    fullWidth: true,
    onClick: () => setValueForm("nutricionista", "NÃO")
  }, "N\xE3o"))))), SectionAnamnese_jsx(Grow_default.a, SectionAnamnese_extends({
    in: activeForm === 16,
    style: {
      transformOrigin: '0 0 0',
      display: activeForm === 16 ? "block" : "none"
    }
  }, activeForm === 16 ? {
    timeout: 1000
  } : {}), SectionAnamnese_jsx(CardBody["a" /* default */], null, error && SectionAnamnese_jsx(SnackbarContent["a" /* default */], {
    message: SectionAnamnese_jsx("span", null, SectionAnamnese_jsx("b", null, "N\xE3o encontramos seu CEP"), " ", SectionAnamnese_jsx("br", null), " Tente novamente") // close
    ,
    color: "warning",
    icon: "info_outline"
  }), SectionAnamnese_jsx(GridContainer["a" /* default */], {
    justify: "center"
  }, SectionAnamnese_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 12,
    md: 8
  }, SectionAnamnese_jsx("input", {
    hidden: true,
    name: "peronalTrainer",
    type: "text",
    ref: register
  }), SectionAnamnese_jsx("label", null, "Faz acompanhamento com um(a) personal trainer?"), SectionAnamnese_jsx("br", null), SectionAnamnese_jsx(Button["a" /* default */], {
    color: "primary",
    fullWidth: true,
    onClick: () => setValueForm("peronalTrainer", "SIM")
  }, "Sim"), SectionAnamnese_jsx(Button["a" /* default */], {
    color: "secondary",
    fullWidth: true,
    onClick: () => setValueForm("peronalTrainer", "NÃO")
  }, "N\xE3o"))))), SectionAnamnese_jsx(Grow_default.a, SectionAnamnese_extends({
    in: activeForm === 17,
    style: {
      transformOrigin: '0 0 0',
      display: activeForm === 17 ? "block" : "none"
    }
  }, activeForm === 17 ? {
    timeout: 1000
  } : {}), SectionAnamnese_jsx(CardBody["a" /* default */], null, error && SectionAnamnese_jsx(SnackbarContent["a" /* default */], {
    message: SectionAnamnese_jsx("span", null, SectionAnamnese_jsx("b", null, "N\xE3o encontramos seu CEP"), " ", SectionAnamnese_jsx("br", null), " Tente novamente") // close
    ,
    color: "warning",
    icon: "info_outline"
  }), SectionAnamnese_jsx(GridContainer["a" /* default */], {
    justify: "center"
  }, SectionAnamnese_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 12,
    md: 8
  }, SectionAnamnese_jsx("input", {
    hidden: true,
    name: "equipamentosSN",
    type: "text",
    ref: register
  }), SectionAnamnese_jsx("input", {
    hidden: true,
    name: "equipamentos",
    type: "text",
    ref: register
  }), !isOutro ? SectionAnamnese_jsx(external_react_default.a.Fragment, null, SectionAnamnese_jsx("label", null, "Possui algum equipamento de treino?"), SectionAnamnese_jsx("br", null), !props.isLoading && SectionAnamnese_jsx(external_react_default.a.Fragment, null, SectionAnamnese_jsx(Button["a" /* default */], {
    color: "primary",
    fullWidth: true,
    onClick: () => setValueForm("equipamentosSN", "SIM", true)
  }, "Sim"), SectionAnamnese_jsx(Button["a" /* default */], {
    color: "secondary",
    fullWidth: true,
    onClick: () => setValueForm("equipamentosSN", "NÃO")
  }, "N\xE3o"))) : SectionAnamnese_jsx(external_react_default.a.Fragment, null, SectionAnamnese_jsx(CustomInput["a" /* default */], {
    labelText: "Quais seriam?",
    labelError: errors.equipamentos && errors.equipamentos.message,
    error: errors.equipamentos ? true : false,
    id: "equipamentosInput",
    formControlProps: {
      fullWidth: true
    },
    inputProps: {
      name: "equipamentosInput",
      multiline: true,
      rows: 5,
      inputRef: register,
      onChange: event => handleChangeOutro(event, "equipamentos")
    }
  })))))), SectionAnamnese_jsx(CardFooter["a" /* default */], null, SectionAnamnese_jsx(GridContainer["a" /* default */], {
    justify: "center",
    style: {
      margin: "0",
      width: "100%"
    }
  }, SectionAnamnese_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 12,
    md: 12
  }, props.isLoading && SectionAnamnese_jsx(CircularProgress_default.a, {
    style: {
      color: "#425CD0"
    },
    size: 30
  }), !props.isLoading && SectionAnamnese_jsx(external_react_default.a.Fragment, null, SectionAnamnese_jsx(Button["a" /* default */], {
    color: "primary",
    fullWidth: true,
    onClick: handleNext,
    style: {
      display: isDisableNext ? "none" : "block"
    }
  }, "Pr\xF3ximo"))), SectionAnamnese_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 12,
    md: 12
  }, SectionAnamnese_jsx(Button["a" /* default */], {
    simple: true,
    color: "primary",
    fullWidth: true,
    onClick: handleBack
  }, "Voltar"))))))))))));
}
// EXTERNAL MODULE: external "@material-ui/icons/Chat"
var Chat_ = __webpack_require__("HWfr");

// EXTERNAL MODULE: external "@material-ui/icons/VerifiedUser"
var VerifiedUser_ = __webpack_require__("M2SB");

// EXTERNAL MODULE: external "@material-ui/icons/Fingerprint"
var Fingerprint_ = __webpack_require__("Uo6P");

// EXTERNAL MODULE: external "@material-ui/icons/GroupWork"
var GroupWork_ = __webpack_require__("5MrK");

// EXTERNAL MODULE: external "@material-ui/icons/Airplay"
var Airplay_ = __webpack_require__("AW/9");

// EXTERNAL MODULE: external "@material-ui/icons/LocationOn"
var LocationOn_ = __webpack_require__("cVmi");

// EXTERNAL MODULE: external "@material-ui/icons/Extension"
var Extension_ = __webpack_require__("GC5X");

// EXTERNAL MODULE: external "@material-ui/icons/ChildFriendly"
var ChildFriendly_ = __webpack_require__("V8/P");

// EXTERNAL MODULE: external "@material-ui/icons/WatchLater"
var WatchLater_ = __webpack_require__("LiOz");

// EXTERNAL MODULE: external "@material-ui/icons/Code"
var Code_ = __webpack_require__("n9Bu");

// EXTERNAL MODULE: external "@material-ui/icons/FormatPaint"
var FormatPaint_ = __webpack_require__("GCdX");

// EXTERNAL MODULE: external "@material-ui/icons/Dashboard"
var Dashboard_ = __webpack_require__("vFf/");

// EXTERNAL MODULE: external "@material-ui/icons/ViewCarousel"
var ViewCarousel_ = __webpack_require__("+JH3");

// EXTERNAL MODULE: external "@material-ui/icons/AccessTime"
var AccessTime_ = __webpack_require__("86oe");

// EXTERNAL MODULE: external "@material-ui/icons/AttachMoney"
var AttachMoney_ = __webpack_require__("59xQ");

// CONCATENATED MODULE: ./assets/jss/nextjs-material-kit-pro/pages/checkoutSections/finishStyle.js
function finishStyle_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function finishStyle_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { finishStyle_ownKeys(Object(source), true).forEach(function (key) { finishStyle_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { finishStyle_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function finishStyle_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const features = {
  container: nextjs_material_kit_pro["g" /* container */],
  mlAuto: nextjs_material_kit_pro["x" /* mlAuto */],
  mrAuto: nextjs_material_kit_pro["y" /* mrAuto */],
  description: nextjs_material_kit_pro["l" /* description */],
  title: finishStyle_objectSpread({}, nextjs_material_kit_pro["N" /* title */], {
    color: nextjs_material_kit_pro["C" /* primaryColor */][0]
  }),
  features1: {
    textAlign: "center",
    padding: "80px 0"
  },
  features2: {
    padding: "80px 0"
  },
  features3: {
    padding: "80px 0",
    "& $phoneContainer": {
      maxWidth: "220px",
      margin: "0 auto"
    }
  },
  features4: {
    padding: "80px 0",
    "& $phoneContainer": {
      maxWidth: "260px",
      margin: "60px auto 0"
    }
  },
  features5: {
    padding: "80px 0",
    backgroundSize: "cover",
    backgroundPosition: "50%",
    backgroundRepeat: "no-repeat",
    position: "relative",
    "& $title": {
      marginBottom: "30px"
    },
    "& $title,& $container": {
      position: "relative",
      zIndex: "2",
      color: nextjs_material_kit_pro["U" /* whiteColor */]
    },
    "&:after": {
      background: "rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ",0.55)",
      position: "absolute",
      width: "100%",
      height: "100%",
      content: "''",
      zIndex: "0",
      left: "0px",
      top: "0px"
    },
    "& $container": {
      "& $gridContainer:last-child": {
        "& $gridItem": {
          borderBottom: "0"
        }
      },
      "& $gridItem": {
        border: "1px solid rgba(" + Object(nextjs_material_kit_pro["r" /* hexToRgb */])(nextjs_material_kit_pro["U" /* whiteColor */]) + ", 0.35)",
        borderTop: "0",
        borderLeft: "0",
        "&:last-child": {
          borderRight: "0"
        }
      }
    },
    "& $infoArea5": {
      textAlign: "center",
      maxWidth: "310px",
      minHeight: "320px",
      "& h4,& p,& svg,& .fab,& .fas,& .far,& .fal,& .material-icons": {
        color: nextjs_material_kit_pro["U" /* whiteColor */]
      }
    }
  },
  gridContainer: {},
  gridItem: {},
  margin0: {
    margin: "0 !important"
  },
  paddingTopZero: {
    paddingTop: "0 !important"
  },
  textCenter: {
    textAlign: "center"
  },
  phoneContainer: {
    "& img": {
      width: "100%"
    }
  },
  infoArea: {
    maxWidth: "none",
    margin: "0 auto",
    padding: "10px 0 0px"
  },
  textLeft: {
    textAlign: "left"
  },
  titleConfira: finishStyle_objectSpread({}, nextjs_material_kit_pro["N" /* title */], {
    color: nextjs_material_kit_pro["C" /* primaryColor */][0],
    margin: "0 !important"
  }),
  bubble: {
    position: "relative",
    // background: "#00aabb",
    borderRadius: "20px",
    border: "4px solid #425cc6",
    margin: "90px auto",
    padding: "10px 30px",
    maxWidth: "360px",
    "&:after": {
      content: "''",
      width: "0px",
      height: "0px",
      position: "absolute",
      borderLeft: "10px solid #fff",
      borderRight: "10px solid transparent",
      borderTop: "10px solid #fff",
      borderBottom: "10px solid transparent",
      left: "24px",
      bottom: "-13px"
    },
    "&:before": {
      content: "''",
      width: "0px",
      height: "0px",
      position: "absolute",
      borderLeft: "10px solid #425cc6",
      borderRight: "10px solid transparent",
      borderTop: "10px solid #425cc6",
      borderBottom: "10px solid transparent",
      left: "20px",
      bottom: "-23px"
    },
    "@media (max-width: 768px)": {
      margin: "20px auto",
      marginBottom: "80px"
    }
  }
};
/* harmony default export */ var finishStyle = (features);
// EXTERNAL MODULE: ./assets/img/sections/iphone.png
var iphone = __webpack_require__("dtVl");

// EXTERNAL MODULE: ./assets/img/phoneApp.png
var phoneApp = __webpack_require__("amlk");

// EXTERNAL MODULE: ./assets/img/clicouApp.png
var clicouApp = __webpack_require__("OJTE");

// EXTERNAL MODULE: ./assets/img/bg9.jpg
var bg9 = __webpack_require__("OL5M");

// EXTERNAL MODULE: ./assets/img/icone-treino.png
var icone_treino = __webpack_require__("p44x");
var icone_treino_default = /*#__PURE__*/__webpack_require__.n(icone_treino);

// EXTERNAL MODULE: ./assets/img/logo-tecnofit.png
var logo_tecnofit = __webpack_require__("wtJD");

// EXTERNAL MODULE: ./assets/img/logo-telegram.png
var logo_telegram = __webpack_require__("S6qe");
var logo_telegram_default = /*#__PURE__*/__webpack_require__.n(logo_telegram);

// EXTERNAL MODULE: ./assets/img/like-love.png
var like_love = __webpack_require__("SE08");
var like_love_default = /*#__PURE__*/__webpack_require__.n(like_love);

// CONCATENATED MODULE: ./pages-sections/checkout/SectionFinish.js
var SectionFinish_jsx = external_react_default.a.createElement;

 // @material-ui/core components

 // @material-ui/icons















 // core components













const SectionFinish_useStyles = Object(styles_["makeStyles"])(finishStyle);

const passo4 = SectionFinish_jsx(external_react_default.a.Fragment, null, "O ", SectionFinish_jsx("b", null, "acompanhamento"), " e ", SectionFinish_jsx("b", null, "atendimento"), " s\xE3o realizados atrav\xE9s do grupo do Telegram\xAE da sua turma no per\xEDodo do dia que voc\xEA optou no question\xE1rio sobre voc\xEA.");

function SectionFeatures(props) {
  const classes = SectionFinish_useStyles();
  external_react_default.a.useEffect(() => {
    // history.pushState({}, null, "/checkout/finish");
    external_react_gtm_module_default.a.dataLayer({
      dataLayer: {
        event: "finishView",
        'ecommerce': {
          'purchase': {
            'actionField': {
              'id': String(Math.floor(Math.random() * (1000 - 9999 + 1)) + 9999),
              // Transaction ID. Required for purchases and refunds.
              'affiliation': 'Tecnofit - Clicou Personal',
              'revenue': '478.80',
              // Total transaction value (incl. tax and shipping)
              'tax': '0.00',
              'shipping': '0.00'
            },
            'products': [{
              // List of productFieldObjects.
              'name': 'Plano Anual Start',
              'id': '1',
              'price': '478.80',
              'brand': 'Clicou Personal',
              'category': 'Atendimento online',
              'quantity': 1 // Optional fields may be omitted or set to empty string.

            }]
          }
        }
      }
    });
    external_react_gtm_module_default.a.dataLayer({
      dataLayer: {
        'event': 'checkoutOption',
        'ecommerce': {
          'checkout_option': {
            'actionField': {
              'step': 4
            }
          }
        }
      }
    });
  }, []);
  return SectionFinish_jsx("div", {
    className: "cd-section",
    style: {
      backgroundColor: "#ffffff"
    }
  }, SectionFinish_jsx("div", {
    className: classes.container
  }, SectionFinish_jsx("div", {
    className: classes.features4,
    style: {
      paddingTop: 0
    }
  }, SectionFinish_jsx(GridContainer["a" /* default */], null, SectionFinish_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 6,
    md: 6,
    className: classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
  }, SectionFinish_jsx(InfoArea["a" /* default */], {
    iconImage: like_love_default.a,
    title: props.dataSale.nome,
    descriptionLarge: "Sua matr\xEDcula foi realizada com sucesso!",
    iconColor: "info",
    className: classes.textLeft
  })), SectionFinish_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 6,
    md: 6,
    className: classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
  }, SectionFinish_jsx("div", {
    className: classes.bubble
  }, "Seu treino j\xE1 est\xE1 sendo preparado.", SectionFinish_jsx("br", null), "Em at\xE9 48 horas voc\xEA poder\xE1 acess\xE1-lo atrav\xE9s do aplicativo de treinos."))), SectionFinish_jsx(GridContainer["a" /* default */], null, SectionFinish_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 6,
    md: 6,
    className: classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
  }, SectionFinish_jsx("h3", {
    className: classes.titleConfira
  }, "Confira os pr\xF3ximos passos:"), SectionFinish_jsx("br", null), SectionFinish_jsx("svg", {
    style: {
      width: "45px"
    },
    id: "Componente_1_1",
    "data-name": "Componente 1 \u2013 1",
    xmlns: "http://www.w3.org/2000/svg",
    width: "72",
    height: "72",
    viewBox: "0 0 72 72"
  }, SectionFinish_jsx("path", {
    id: "download",
    d: "M667,922l16.463,17L700,922.06",
    transform: "translate(-647.5 -894.5)",
    fill: "none",
    stroke: "#425cc7",
    "stroke-width": "4",
    opacity: "0.9"
  }), SectionFinish_jsx("g", {
    id: "Elipse_2",
    "data-name": "Elipse 2",
    fill: "rgba(255,255,255,0)",
    stroke: "#425cc7",
    "stroke-width": "3"
  }, SectionFinish_jsx("circle", {
    cx: "36",
    cy: "36",
    r: "36",
    stroke: "none"
  }), SectionFinish_jsx("circle", {
    cx: "36",
    cy: "36",
    r: "34.5",
    fill: "none"
  }))))), SectionFinish_jsx(GridContainer["a" /* default */], null, SectionFinish_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 12,
    md: 12,
    lg: 6,
    className: classes.mlAuto
  }, SectionFinish_jsx(InfoArea["a" /* default */], {
    titlePasso: "Passo 1",
    iconImage: icone_treino_default.a,
    title: "Baixe o Aplicativo de treinos:",
    description: "Com ele voc\xEA visualiza seus treinos, v\xEDdeos explicativos e acompanha seus resultados. Tudo de forma simples e r\xE1pida.",
    iconColor: "info",
    app: true,
    android: "https://play.google.com/store/apps/details?id=com.pacto&hl=pt_BR",
    ios: "https://apps.apple.com/br/app/treino/id862662527",
    className: classes.paddingTopZero
  })), SectionFinish_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 12,
    md: 12,
    lg: 6,
    className: classes.mlAuto
  }, SectionFinish_jsx(InfoArea["a" /* default */], {
    titlePasso: "Passo 2",
    description: "Voc\xEA receber\xE1 um e-mail de noreply@pactosolucoes.com.br com os dados de acesso e resumo de compra. Caso n\xE3o tenha recebido, verifique a pasta de Spam ou Lixo Eletr\xF4nico.",
    className: classes.paddingTopZero
  }), SectionFinish_jsx(InfoArea["a" /* default */], {
    titlePasso: "Passo 3" // description='Abra o app Tecnofit, clique em "Novo Cadastro", informe o mesmo e-mail cadastrado na matrícula.'      
    ,
    description: "Siga o passo a passo enviado por e-mail.",
    className: classes.paddingTopZero
  })), SectionFinish_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 12,
    md: 12,
    className: classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
  }, SectionFinish_jsx("svg", {
    style: {
      width: "45px"
    },
    id: "Componente_1_1",
    "data-name": "Componente 1 \u2013 1",
    xmlns: "http://www.w3.org/2000/svg",
    width: "72",
    height: "72",
    viewBox: "0 0 72 72"
  }, SectionFinish_jsx("path", {
    id: "download",
    d: "M667,922l16.463,17L700,922.06",
    transform: "translate(-647.5 -894.5)",
    fill: "none",
    stroke: "#425cc7",
    "stroke-width": "4",
    opacity: "0.9"
  }), SectionFinish_jsx("g", {
    id: "Elipse_2",
    "data-name": "Elipse 2",
    fill: "rgba(255,255,255,0)",
    stroke: "#425cc7",
    "stroke-width": "3"
  }, SectionFinish_jsx("circle", {
    cx: "36",
    cy: "36",
    r: "36",
    stroke: "none"
  }), SectionFinish_jsx("circle", {
    cx: "36",
    cy: "36",
    r: "34.5",
    fill: "none"
  })))), SectionFinish_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 12,
    md: 12,
    lg: 6,
    className: classes.mrAuto
  }, SectionFinish_jsx(InfoArea["a" /* default */], {
    titlePasso: "Passo 4",
    iconImage: logo_telegram_default.a,
    title: "Baixe o Telegram\xAE e crie sua conta:",
    description: passo4,
    iconColor: "info",
    app: true,
    android: "https://play.google.com/store/apps/details?id=org.telegram.messenger",
    ios: "https://apps.apple.com/br/app/telegram-messenger/id686449807",
    className: classes.paddingTopZero
  })), SectionFinish_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 12,
    md: 12,
    lg: 6,
    className: classes.mrAuto
  }, SectionFinish_jsx(InfoArea["a" /* default */], {
    titlePasso: "Passo 5",
    description: "Voc\xEA receber\xE1 por SMS e e-mail o convite para ingressar no grupo do Telegram\xAE.",
    className: classes.paddingTopZero
  }))))));
}
// EXTERNAL MODULE: external "@material-ui/core/Slide"
var Slide_ = __webpack_require__("mz+e");
var Slide_default = /*#__PURE__*/__webpack_require__.n(Slide_);

// EXTERNAL MODULE: external "@material-ui/core/Dialog"
var Dialog_ = __webpack_require__("fEgT");
var Dialog_default = /*#__PURE__*/__webpack_require__.n(Dialog_);

// EXTERNAL MODULE: external "@material-ui/core/DialogTitle"
var DialogTitle_ = __webpack_require__("0Jp5");
var DialogTitle_default = /*#__PURE__*/__webpack_require__.n(DialogTitle_);

// EXTERNAL MODULE: external "@material-ui/core/DialogContent"
var DialogContent_ = __webpack_require__("iTUb");
var DialogContent_default = /*#__PURE__*/__webpack_require__.n(DialogContent_);

// EXTERNAL MODULE: external "@material-ui/core/DialogActions"
var DialogActions_ = __webpack_require__("1gBk");
var DialogActions_default = /*#__PURE__*/__webpack_require__.n(DialogActions_);

// EXTERNAL MODULE: external "@material-ui/icons/Close"
var Close_ = __webpack_require__("j08L");
var Close_default = /*#__PURE__*/__webpack_require__.n(Close_);

// EXTERNAL MODULE: external "@material-ui/icons/CheckCircle"
var CheckCircle_ = __webpack_require__("uACh");

// EXTERNAL MODULE: external "@material-ui/icons/FitnessCenter"
var FitnessCenter_ = __webpack_require__("h6f3");

// EXTERNAL MODULE: external "@material-ui/icons/CardGiftcard"
var CardGiftcard_ = __webpack_require__("yiv4");

// EXTERNAL MODULE: external "@material-ui/icons/Error"
var Error_ = __webpack_require__("Lu7A");
var Error_default = /*#__PURE__*/__webpack_require__.n(Error_);

// EXTERNAL MODULE: ./components/Typography/Success.js
var Success = __webpack_require__("3uXk");

// EXTERNAL MODULE: ./assets/jss/nextjs-material-kit-pro/modalStyle.js
var modalStyle = __webpack_require__("xVX3");

// CONCATENATED MODULE: ./pages-sections/checkout/SectionModal.js
var SectionModal_jsx = external_react_default.a.createElement;

function SectionModal_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function SectionModal_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { SectionModal_ownKeys(Object(source), true).forEach(function (key) { SectionModal_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { SectionModal_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function SectionModal_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function SectionModal_extends() { SectionModal_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return SectionModal_extends.apply(this, arguments); }

 // @material-ui/core components






 // @material-ui/icons






 // core components




const SectionModal_Transition = external_react_default.a.forwardRef(function Transition(props, ref) {
  return SectionModal_jsx(Slide_default.a, SectionModal_extends({
    direction: "down",
    ref: ref
  }, props));
}); // const useStyles = makeStyles(modalStyle);
// const useStyles = makeStyles(
//   (theme) => ({
//     ...modalStyle(theme),
//     modalTeste: {
//       color: "#000"
//     }
//   }),
//   { withTheme: true },
// )

const SectionModal_useStyles = Object(styles_["makeStyles"])(theme => SectionModal_objectSpread({}, Object(modalStyle["a" /* default */])(theme), {
  modalIcon: {
    color: "#425CC7",
    fontSize: "6.1875rem"
  },
  modalFooter: {
    margin: 0,
    padding: "15px",
    textAlign: "center",
    display: "block",
    paddingTop: 0
  }
}));
function ModalOffer(props) {
  // const classes = withStyles(
  //   (theme) => ({
  //     ...modalStyle(theme),
  //     modalTeste: {
  //       color: "#000"
  //     }
  //   }),
  //   { withTheme: true },
  // )
  const classes = SectionModal_useStyles();
  return SectionModal_jsx("div", null, SectionModal_jsx(Dialog_default.a, {
    classes: {
      root: classes.modalRoot,
      paper: classes.modal
    },
    open: props.showModal,
    TransitionComponent: SectionModal_Transition,
    keepMounted: true,
    onClose: () => props.setShowModal(false),
    "aria-labelledby": "classic-modal-slide-title",
    "aria-describedby": "classic-modal-slide-description"
  }, SectionModal_jsx(DialogTitle_default.a, {
    id: "classic-modal-slide-title",
    disableTypography: true,
    className: classes.modalHeader
  }, SectionModal_jsx(Button["a" /* default */], {
    simple: true,
    className: classes.modalCloseButton,
    key: "close",
    "aria-label": "Close",
    onClick: () => props.setShowModal(false)
  }, " ", SectionModal_jsx(Close_default.a, {
    className: classes.modalClose
  }))), SectionModal_jsx(DialogContent_default.a, {
    id: "classic-modal-slide-description",
    className: classes.modalBody
  }, SectionModal_jsx("div", {
    style: {
      textAlign: "center"
    }
  }, SectionModal_jsx(Error_default.a, {
    color: "primary",
    className: classes.modalIcon
  }), SectionModal_jsx("br", null), SectionModal_jsx("div", {
    style: {
      maxWidth: "240px",
      margin: "0 auto"
    }
  }, SectionModal_jsx("h4", {
    className: classes.modalTitle
  }, props.messageReturn.msg)), SectionModal_jsx("br", null), SectionModal_jsx("p", null, "Erro ", SectionModal_jsx("b", null, props.messageReturn.code)))), SectionModal_jsx(DialogActions_default.a, {
    className: classes.modalFooter
  }, SectionModal_jsx(Button["a" /* default */], {
    round: true,
    onClick: () => props.setShowModal(false),
    color: "primary"
  }, "Fechar"))));
}
// EXTERNAL MODULE: ./assets/img/logo-white.png
var logo_white = __webpack_require__("Nlm8");
var logo_white_default = /*#__PURE__*/__webpack_require__.n(logo_white);

// CONCATENATED MODULE: ./pages/checkout.js
var checkout_jsx = external_react_default.a.createElement;

function checkout_extends() { checkout_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return checkout_extends.apply(this, arguments); }

function checkout_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function checkout_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { checkout_ownKeys(Object(source), true).forEach(function (key) { checkout_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { checkout_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function checkout_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



































 // import logo from "assets/img/logo.png";



const QontoConnector = Object(styles_["withStyles"])({
  alternativeLabel: {
    top: 10,
    left: 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)'
  },
  active: {
    '& $line': {
      borderColor: '#784af4'
    }
  },
  completed: {
    '& $line': {
      borderColor: '#784af4'
    }
  },
  line: {
    borderColor: '#eaeaf0',
    borderTopWidth: 3,
    borderRadius: 1
  }
})(StepConnector_default.a);
const useQontoStepIconStyles = Object(styles_["makeStyles"])({
  root: {
    color: '#eaeaf0',
    display: 'flex',
    height: 22,
    alignItems: 'center'
  },
  active: {
    color: '#784af4'
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: 'currentColor'
  },
  completed: {
    color: '#784af4',
    zIndex: 1,
    fontSize: 18
  }
});

function QontoStepIcon(props) {
  const classes = useQontoStepIconStyles();
  const {
    active,
    completed
  } = props;
  return checkout_jsx("div", {
    className: external_clsx_default()(classes.root, {
      [classes.active]: active
    })
  }, completed ? checkout_jsx(Check_default.a, {
    className: classes.completed
  }) : checkout_jsx("div", {
    className: classes.circle
  }));
}

const ColorlibConnector = Object(styles_["withStyles"])({
  alternativeLabel: {
    top: 22
  },
  active: {
    '& $line': {
      // backgroundImage:
      //   'linear-gradient(90deg, rgba(66,92,199,1) 0%, rgba(59,191,173,1) 100%);',
      backgroundColor: '#ffffff'
    }
  },
  completed: {
    '& $line': {
      // backgroundImage:
      //   'linear-gradient(90deg, rgba(66,92,199,1) 0%, rgba(59,191,173,1) 100%);',
      backgroundColor: '#ffffff'
    }
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: '#ccc',
    borderRadius: 1
  }
})(StepConnector_default.a);
const useColorlibStepIconStyles = Object(styles_["makeStyles"])({
  root: {
    // backgroundColor: '#ccc',
    // backgroundColor: '#ffffff',
    backgroundColor: '#ccc',
    // backgroundColor: primaryColor[0],
    zIndex: 1,
    // color: '#fff',
    color: nextjs_material_kit_pro["C" /* primaryColor */][0],
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  active: {
    // backgroundImage:
    //   'linear-gradient(90deg, rgba(66,92,199,1) 0%, rgba(59,191,173,1) 100%)',
    // boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    backgroundColor: '#ffffff'
  },
  completed: {
    // backgroundImage:
    //   'linear-gradient(90deg, rgba(66,92,199,1) 0%, rgba(59,191,173,1) 100%);',
    backgroundColor: '#ffffff'
  }
});

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const {
    active,
    completed
  } = props;
  const icons = {
    1: checkout_jsx(AccountCircle_default.a, null),
    2: checkout_jsx(Payment_default.a, null),
    3: checkout_jsx(Favorite_default.a, null),
    4: checkout_jsx(ShoppingCart_default.a, null)
  };
  return checkout_jsx("div", {
    className: external_clsx_default()(classes.root, {
      [classes.active]: active,
      [classes.completed]: completed
    })
  }, icons[String(props.icon)]);
}

const checkout_useStyles = Object(styles_["makeStyles"])(theme => ({
  root: {
    width: '100%',
    // backgroundColor: "#ffffff"
    backgroundColor: nextjs_material_kit_pro["C" /* primaryColor */][0]
  },
  button: {
    marginRight: theme.spacing(1)
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  progress: {
    // display: "none
    margin: "0 auto"
  },
  textCenter: {
    textAlign: "center",
    minHeight: "65vh",
    backgroundColor: "#f7f7f7"
  },
  imgLogo: {
    maxHeight: "90px",
    margin: "0 auto"
  },
  containerLogo: {
    // textAlign: "center",
    display: "flex",
    alignItems: "center"
  },
  containerStep: {
    padding: "8px",
    "@media (max-width: 350px)": {
      paddingBottom: "10px"
    },
    backgroundColor: nextjs_material_kit_pro["C" /* primaryColor */][0],
    '& .MuiStepLabel-label.MuiStepLabel-alternativeLabel': checkout_objectSpread({}, nextjs_material_kit_pro["k" /* defaultFont */], {
      color: "#ccc",
      // visibility: "hidden",
      fontWeight: 500,
      // wordBreak: "break-all",
      "@media (max-width: 576px)": {
        display: "none",
        paddingBottom: "10px"
      },
      "@media (max-width: 350px)": {
        position: "absolute",
        width: "100px",
        marginLeft: "-24px"
      }
    }),
    '& .MuiStepLabel-active': {
      fontWeight: "900 !important",
      // display: "block !important",
      color: "#ffffff !important"
    },
    '& .MuiStepLabel-completed': {
      color: "#ffffff !important"
    }
  },
  containerTopo: {
    padding: 0,
    margin: 0
  }
}));

function getSteps() {
  return ['Identificação', 'Pagamento', 'Sobre você', "Finalização"];
}

function CustomizedSteppers() {
  const classes = checkout_useStyles();
  const [activeStep, setActiveStep] = external_react_default.a.useState(0);
  const [activeAnamnese, setActiveAnamnese] = external_react_default.a.useState(0);
  const [showModal, setShowModal] = external_react_default.a.useState(false);
  const [isLoading, setIsLoading] = external_react_default.a.useState(false);
  const [messageReturn, setMessageReturn] = external_react_default.a.useState({
    code: "000",
    msg: "Erro ao enviar dados. Tente mais tarde"
  });
  const [dataSale, setDataSale] = external_react_default.a.useState({
    // customer: {
    //     companyBranchId :15956,
    //     name :"LETICIA CLUG BASTOS GAMA",
    //     birthDate:"1994-02-20",
    //     sex:"F",
    //     email:"LETICIACLUG@HOTMAIL.COM",
    //     document:"41410072851",
    //     isForeigner: false,
    //     phones: [
    //       {
    //           type: "cellphone",
    //           number: "1199911-2140"
    //       }
    //     ],
    //     address: {
    //       address: "Rua Marcelino",
    //       number: "243",
    //       complement: "",
    //       district: "Santo andré",
    //       city: "São Paulo",
    //       state: "SP",
    //       postalCode:"09180020"
    //     },
    //     financeResponsible:{          
    //       name: "LETICIA CLUG BASTOS GAMA",
    //       document: "41410072851",
    //       email: "LETICIACLUG@HOTMAIL.COM",
    //       phone: "1199911-2140",
    //       active: true
    //     },
    //     planData:{
    //       companyBranchId:15956,
    //       planId:344722,
    //       consultantId:11650531,
    //       promotionId:0,
    //       startDate:"2020-07-31",
    //       dueDate:"2020-07-31"
    //     },
    //     "paymentMethod":"creditCard",
    //     card:{          
    //       number: "41410072851",
    //       name: "LETICIA CLUG BASTOS GAMA",
    //       valid: "12/20",
    //       cvv: "782",
    //       brand: 1
    //     },
    //     dcc: {
    //       agencia: "",
    //       conta: "",
    //       nome: "",
    //       cpf: ""
    //     },
    //     "anamnese":{
    //       "idade" :"",
    //       "altura" :"",
    //       "objetivo":"",
    //       "habitoTreino" :"",
    //       "frequenciaTreino" :"",
    //       "fazMusculacao" :"",
    //       "fazAulas" :"",
    //       "sedentario" :"",
    //       "sedentarioTempo" :"",
    //       "reclusaoTreino":"SIM",
    //       "tempoPorDia":"",
    //       "periodo" :"",
    //       "peso" :"",
    //       "patologia" :"",
    //       "outroPatologia" :"",
    //       "osseoArticular" :"",
    //       "qualOsseoArticular" :"",
    //       "cirurgia" :"",
    //       "qualCirurgia" :"",
    //       "internacao" :"",
    //       "qualInternacao" :"",
    //       "medicamento" :"",
    //       "qualMedicamento" :"",
    //       "fuma" :"",
    //       "nutricionista" :"",
    //       "personalTrainer" :"",
    //       "equipamentos" :"",
    //       "status" :"",
    //       "unidade" :"",
    //       "aluno" :"",
    //       optinSms: true,
    //       optinEmail: true,
    //       optinTelegram: true,
    //       aceiteTermos: true
    //     }
    // }
    "unidade": 1,
    "plano": 2,
    "nome": "",
    "cpf": "",
    "dataNascimento": "",
    "sexo": "",
    "email": "",
    "numeroCartao": "",
    "nomeCartao": "",
    "cvv": "",
    "validade": "",
    "telefone": "",
    "endereco": "",
    "numero": "",
    "bairro": "",
    "complemento": "",
    "cep": "",
    "diaVencimento": "5",
    "nrVezesDividir": "12",
    "numeroCupomDesconto": null,
    "cpftitularcard": "",
    "vencimentoFatura": "1",
    "produtos": [],
    "cobrarParcelasEmAberto": true,
    "anamnese": {
      "idade": "",
      "altura": "",
      "objetivo": "",
      "habitoTreino": "",
      "frequenciaTreino": "",
      "fazMusculacao": "",
      "fazAulas": "",
      "sedentario": "",
      "sedenTariotempo": "",
      "reclusaoTreino": "",
      "tempoPorDia": "",
      "periodo": "",
      "peso": "",
      "patologia": "",
      "outroPatologia": "",
      "osseoArticular": "",
      "qualOsseoArticular": "",
      "cirurgia": "",
      "qualCirurgia": "",
      "internacao": "",
      "qualInternacao": "",
      "medicamento": "",
      "qualMedicamento": "",
      "fuma": "",
      "nutricionista": "",
      "peronalTrainer": "",
      // "created_at":"",
      // "updated_at":"",
      "equipamentos": "",
      "status": "Ativo",
      "unidade": "1",
      "aluno": "",
      "optinSms": true,
      "optinEmail": true,
      "optinTelegram": true,
      "aceiteTermos": true
    }
  });
  const steps = getSteps();
  const theme = Object(styles_["useTheme"])();

  const handleNext = type => {
    switch (type) {
      case "Checkout":
        setActiveStep(prevActiveStep => prevActiveStep + 1);
        return;

      case "Anamnese":
        if (activeAnamnese === 4) {
          setActiveStep(prevActiveStep => prevActiveStep + 1);
        } else {
          setActiveAnamnese(prevActiveStep => prevActiveStep + 1);
        }

        return;

      default:
        return;
    }
  };

  const handleBack = type => {
    switch (type) {
      case "Checkout":
        setActiveStep(prevActiveStep => prevActiveStep - 1);
        return;

      case "Anamnese":
        if (activeAnamnese === 0) {
          setActiveStep(prevActiveStep => prevActiveStep - 1);
        } else {
          setActiveAnamnese(prevActiveStep => prevActiveStep - 1);
        }

        return;

      default:
        return;
    }
  };

  const handleReset = () => {
    setActiveStep(0);
    setActiveAnamnese(0);
  };

  const sendDataForm = () => {
    fetchData(dataSale);
  };

  const getStepContent = step => {
    switch (step) {
      case 0:
        return checkout_jsx(SectionIdentification, {
          setDataSale: setDataSale,
          setStepCheckout: setActiveStep,
          setShowModal: setShowModal,
          setMessageReturn: setMessageReturn
        });

      case 1:
        return checkout_jsx(SectionPayment, {
          setDataSale: setDataSale,
          setStepCheckout: setActiveStep
        });

      case 2:
        return checkout_jsx(SectionAnamnese, {
          setDataSale: setDataSale,
          setStepCheckout: setActiveStep,
          isLoading: isLoading
        });

      case 3:
        return checkout_jsx(SectionFeatures, {
          dataSale: dataSale
        });

      default:
        return 'Unknown step';
    }
  };

  const fetchData = async dataSend => {
    setIsLoading(true);
    external_axios_default.a.defaults.headers.post['Content-Type'] = 'application/json'; // await axios.post(`https://admin.justfit.com.br/homologacao/api/LoadPersonalOnline/Post`, dataSend )
    // await axios.post(`https://admin.justfit.com.br/app.justfit/api/LoadPersonalOnline/Post`, dataSend )

    await external_axios_default.a.post(`https://admin.justfit.com.br/app.justfit/api/iAPIClicou/CheckoutClicou`, dataSend).then(res => {
      console.log(res);

      try {
        if (res.data.code == "0") {
          setDataLog(dataSend);
          setActiveStep(3);
        } else {
          setDataLog(dataSend);
          setMessageReturn(prev => {
            return {
              code: res.data.code,
              msg: res.data.msg
            };
          });
          setShowModal(true);
        }
      } catch (error) {
        setMessageReturn(prev => {
          return {
            code: "000",
            msg: "Erro ao enviar dados. Tente mais tarde"
          };
        });
        setShowModal(true);
        console.log(error);
      }
    }).catch(error => {
      setMessageReturn(prev => {
        return {
          code: "000",
          msg: "Erro ao enviar dados. Tente mais tarde"
        };
      });
      setShowModal(true);
      console.log(error);
    }).finally(() => {
      console.log("finally");
      setIsLoading(false);
    });
  };

  const setDataLog = async dataSend => {
    external_axios_default.a.defaults.headers.post['Content-Type'] = 'application/json';
    await external_axios_default.a.post('./checkout/setLog.php', dataSend).then(res => {
      console.log(res);
    }).catch(error => {
      console.log(error);
    }).finally(() => {
      console.log("finally");
    });
  };

  const fetchDataTest = async () => {
    // await axios.get(`https://api.fale.justfit.com.br/fechamentounidade/consultaExtrato?cpf=${cpf} 389.727.318-70`)
    // await axios.get(`https://api.fale.justfit.com.br/fechamentounidade/consultaExtrato?cpf=${cpf}`)
    // axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    external_axios_default.a.defaults.headers.post['Content-Type'] = 'application/json'; // await axios.post(`https://admin.justfit.com.br/homologacao/api/LoadPersonalOnline/Register`, {

    await external_axios_default.a.post(`https://admin.justfit.com.br/homologacao/api/LoadPersonalOnline/Post`, {
      "customer": {
        "companyBranchId": 15956,
        "name": "Undefined",
        "birthDate": "1994-02-20",
        "sex": "F",
        "email": "LETICIACLUG@HOTMAIL.COM",
        "document": "41410072851",
        "isForeigner": false,
        "phones": [{
          "type": "cellphone",
          "number": "1199911-2140"
        }],
        "address": {
          "address": "Rua Marcelino",
          "number": "243",
          "complement": "",
          "district": "Santo andré",
          "city": "São Paulo",
          "state": "SP",
          "postalCode": "09180020"
        },
        "financeResponsible": {
          "name": "LETICIA CLUG BASTOS GAMA",
          "document": "41410072851",
          "email": "LETICIACLUG@HOTMAIL.COM",
          "phone": "1199911-2140",
          "active": true
        },
        "planData": {
          "companyBranchId": 15956,
          "planId": 344912,
          "consultantId": 10044113,
          "promotionId": 0,
          "startDate": "2020-07-31",
          "dueDate": "2020-07-31"
        },
        "paymentMethod": "creditCard",
        "card": {
          "number": "41410072851",
          "name": "LETICIA CLUG BASTOS GAMA",
          "valid": "12/20",
          "cvv": "782"
        },
        "anamnese": {
          "idade": "25",
          "altura": "1.75",
          "objetivo": "teste",
          "habitotreino": "teste",
          "frequenciatreino": "teste",
          "fazmusculacao": "teste",
          "fazaulas": "TESTE",
          "sedentario": "TESTE",
          "sedentariotempo": "TESTE",
          "reclusaotreino": "TESTE",
          "tempoporDia": "TESTE",
          "periodo": "TESTE",
          "peso": "60",
          "patologia": "TESTE",
          "outropatologia": "TESTE",
          "osseoarticular": "TESTE",
          "qualosseoArticular": "TESTE",
          "cirurgia": "TESTE",
          "qualCirurgia": "TESTE",
          "internacao": "TESTE",
          "qualInternacao": "TESTE",
          "medicamento": "TESTE",
          "qualMedicamento": "TESTE",
          "fuma": "TESTE",
          "nutricionista": "TESTE",
          "peronalTrainer": "TESTE",
          "equipamentos": "TESTE",
          "status": "TESTE",
          "unidade": "TESTE",
          "aluno": "TESTE"
        }
      }
    }).then(res => {
      console.log(res);
    }).catch(error => {
      console.log(error);
    }).finally(() => {
      console.log("finally");
    });
  };

  const fetchDataJust = async cpf => {
    await external_axios_default.a.get(`https://api.fale.justfit.com.br/fechamentounidade/consultaExtrato?cpf=${cpf}`).then(res => {
      console.log(res);
    }).catch(error => {
      console.log(error);
    }).finally(() => {
      console.log("finally");
    });
  };

  const fetchDataClicou = async () => {
    await external_axios_default.a.get(`https://admin.justfit.com.br/homologacao/api/LoadPersonalOnline/getItem`).then(res => {
      console.log(res);
    }).catch(error => {
      console.log(error);
    }).finally(() => {
      console.log("finally");
    });
  };

  const fetchDataClicouRegister = async () => {
    // await axios.post(`https://admin.justfit.com.br/homologacao/api/LoadPersonalOnline/Post`, {
    //   "teste": "teste"
    // })
    await external_axios_default.a.post(`https://api.fale.justfit.com.br/solicitacoes`, {
      teste: "teste"
    }).then(res => {
      console.log(res);
    }).catch(error => {
      console.log(error);
    }).finally(() => {
      console.log("finally");
    });
  }; // React.useEffect(() => {
  // fetchData();
  // fetchDataClicou();
  // fetchDataJust("389.727.318-70");
  // fetchDataClicouRegister();
  // setDataLog(dataSale);
  // }, []);


  const tagManagerArgs = {
    gtmId: 'GTM-WPLTJG8'
  };
  external_react_default.a.useEffect(() => {
    async function initializeTagManager() {
      await external_react_gtm_module_default.a.initialize(tagManagerArgs);
      external_react_gtm_module_default.a.dataLayer({
        dataLayer: {
          event: "teste",
          userId: '001',
          userProject: 'project',
          page: 'home'
        }
      });
    }

    initializeTagManager();
  }, []);
  external_react_default.a.useEffect(() => {
    console.log("dataSale");
    console.log(dataSale);

    if (activeStep == 2) {
      fetchData(dataSale);
    }
  }, [dataSale]);
  external_react_default.a.useEffect(() => {
    console.log("activeStep");
    console.log(activeStep); // if(activeStep == 3){
    //   fetchData(dataSale);
    // }
  }, [activeStep]);
  return checkout_jsx(external_react_default.a.Fragment, null, checkout_jsx(head_default.a, null, checkout_jsx("title", null, "Checkout - Clicou Personal")), checkout_jsx("div", {
    className: classes.root
  }, checkout_jsx(GridContainer["a" /* default */], {
    justify: "center",
    className: classes.containerTopo
  }, checkout_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 12,
    md: 2,
    className: classes.containerLogo
  }, checkout_jsx("a", {
    href: "https://clicoupersonal.com.br",
    style: {
      margin: "0 auto"
    }
  }, checkout_jsx("img", {
    src: logo_white_default.a,
    alt: "...",
    className: classes.imgLogo
  }))), checkout_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 12,
    md: 10
  }, checkout_jsx(Stepper_default.a, {
    alternativeLabel: true,
    activeStep: activeStep,
    connector: checkout_jsx(ColorlibConnector, null),
    className: classes.containerStep
  }, steps.map(label => checkout_jsx(Step_default.a, {
    key: label
  }, checkout_jsx(StepLabel_default.a, {
    StepIconComponent: ColorlibStepIcon
  }, label)))))), checkout_jsx(ModalOffer, {
    setActive: 0,
    setShowModal: setShowModal,
    showModal: showModal,
    messageReturn: messageReturn
  }), checkout_jsx("div", {
    className: classes.textCenter
  }, activeStep === steps.length ? checkout_jsx("div", null, checkout_jsx(Typography_default.a, {
    className: classes.instructions
  }, "All steps completed - you're finished"), checkout_jsx(Button_default.a, {
    onClick: handleReset,
    className: classes.button
  }, "Reset")) : checkout_jsx(external_react_default.a.Fragment, null, activeStep === 10 ? checkout_jsx("div", null, getStepContent(activeStep), checkout_jsx("div", null)) : checkout_jsx("div", null, checkout_jsx(Grow_default.a, checkout_extends({
    in: true,
    style: {
      transformOrigin: '0 0 0'
    }
  }, true ? {
    timeout: 1000
  } : undefined), getStepContent(activeStep)), checkout_jsx("div", null)))), checkout_jsx(SectionFooter["a" /* default */], null)));
}

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (false) {} // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (false) {}

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "g0r0":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Layers");

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "h6f3":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/FitnessCenter");

/***/ }),

/***/ "hI02":
/***/ (function(module, exports) {

module.exports = require("react-gtm-module");

/***/ }),

/***/ "hbHv":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormHelperText");

/***/ }),

/***/ "hnsL":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ViewDay");

/***/ }),

/***/ "hrAA":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Clear");

/***/ }),

/***/ "i4t8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("9Pu4");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("JQ2V");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

 // nodejs library to set properties for components

// @material-ui/core components


const styles = {
  grid: {
    position: "relative",
    width: "100%",
    minHeight: "1px",
    paddingRight: "15px",
    paddingLeft: "15px"
    /* flexBasis: "auto" */

  }
};
const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(styles);
function GridItem(props) {
  const {
    children,
    className
  } = props,
        rest = _objectWithoutProperties(props, ["children", "className"]);

  const classes = useStyles();
  return __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, _extends({
    item: true
  }, rest, {
    className: classes.grid + " " + className
  }), children);
}
GridItem.defaultProps = {
  className: ""
};

/***/ }),

/***/ "iTUb":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogContent");

/***/ }),

/***/ "j08L":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Close");

/***/ }),

/***/ "jD8W":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Popper");

/***/ }),

/***/ "kYf9":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "lBNU":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Payment");

/***/ }),

/***/ "lWoh":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControl");

/***/ }),

/***/ "lZfH":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Dns");

/***/ }),

/***/ "lgrB":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Phone");

/***/ }),

/***/ "lj8g":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/InputAdornment");

/***/ }),

/***/ "mTbx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var assets_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("36KI");

const imagesStyles = {
  imgFluid: {
    maxWidth: "100%",
    height: "auto"
  },
  imgRounded: {
    borderRadius: "6px !important"
  },
  imgRoundedCircle: {
    borderRadius: "50% !important"
  },
  imgRaised: {
    boxShadow: "0 5px 15px -8px rgba(" + Object(assets_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__[/* hexToRgb */ "r"])(assets_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__[/* blackColor */ "b"]) + ", 0.24), 0 8px 10px -5px rgba(" + Object(assets_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__[/* hexToRgb */ "r"])(assets_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__[/* blackColor */ "b"]) + ", 0.2)"
  },
  imgGallery: {
    width: "100%",
    marginBottom: "2.142rem"
  },
  imgCardTop: {
    width: "100%",
    borderTopLeftRadius: "calc(.25rem - 1px)",
    borderTopRightRadius: "calc(.25rem - 1px)"
  },
  imgCardBottom: {
    width: "100%",
    borderBottomLeftRadius: "calc(.25rem - 1px)",
    borderBottomRightRadius: "calc(.25rem - 1px)"
  },
  imgCard: {
    width: "100%",
    borderRadius: "calc(.25rem - 1px)"
  },
  imgCardOverlay: {
    position: "absolute",
    top: "0",
    right: "0",
    bottom: "0",
    left: "0",
    padding: "1.25rem"
  }
};
/* harmony default export */ __webpack_exports__["a"] = (imagesStyles);

/***/ }),

/***/ "mf1M":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grow");

/***/ }),

/***/ "mtPR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridContainer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("9Pu4");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("JQ2V");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

 // nodejs library to set properties for components

// @material-ui/core components


const styles = {
  grid: {
    marginRight: "-15px",
    marginLeft: "-15px",
    width: "auto"
  }
};
const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(styles);
function GridContainer(props) {
  const {
    children,
    className
  } = props,
        rest = _objectWithoutProperties(props, ["children", "className"]);

  const classes = useStyles();
  return __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, _extends({
    container: true
  }, rest, {
    className: classes.grid + " " + className
  }), children);
}
GridContainer.defaultProps = {
  className: ""
};

/***/ }),

/***/ "mz+e":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Slide");

/***/ }),

/***/ "n1EF":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/SnackbarContent");

/***/ }),

/***/ "n9Bu":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Code");

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "nd8x":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/KeyboardArrowRight");

/***/ }),

/***/ "nybW":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Divider");

/***/ }),

/***/ "p44x":
/***/ (function(module, exports) {

module.exports = "/checkout/_next/static/images/icone-treino-058812cffa927b93d735cbe80d827039.png";

/***/ }),

/***/ "p9UE":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAAAoCAYAAABEklK7AAAFl0lEQVRogd2Ze2xTVRzHv/e2XVfWdWyuY4zNDubGY7CxTYwThbCAiBp1C4oRjEYTDJIoGCEqEDTO1yQYCQkkqJEI+ocwmf+YoWzymjhlyIY8hEE3HuO1taysa9d77zHn3rLc7rTb+mDQff5p7+/87rn32985v/M7p1x5eTlWiw/kQsJnINwMcCQe0Q6BAxz2QcOtJGtmH+ew9pd8iPw+uAUTBJE6RD8cB2h5IFZrAy9N10LiytHVYwIZDuq8UC0eERCkRMTpPubhEmcMK4FqqC6X8LAWgmhiGocDVKBEaDSTtcNiDvaFChSl3vyiZRyiHSpO8o3c8BHZJ3pqhodIP9FTc/tE8hxgScSTZiMsJj3uMfg+yiMRdLgENNtc+K35OnDDxXQxIHL0iPLZD5EXadLjk9nZWFyYjtgYHqfbu9Bqd0PLcxibZMCE5DjmFkpDWyc+3GfFrr/OK5EZiAGip4bDsp8jll/LHrTgu7JcHLnkwFt7zqD+5FVlUVaTEIsl0zLwwcxxMBtjmD6OX7uJ3K0NwMUbTJvMIKOnJmIiPyrNxYrpmXil6gS2HTjrNwH4YNChclEhSielME3dHhFP/HAUtUcu+jZIZHBR7gPPWELg1VlZWFZsQd6Wemzb7xUYr8eKx8bjobzR3jpSJ18/en+6Ult2e1D2dT02/NHKPNCg0+DXRQXIHm9WDERe1EMSiIiITDFi4+MTsLDyX5w8dU02zSlKR+eqElTMzUGcTqO8oMuD4oyRqF5YgL/fngEkjZAj8+aORuw+0850q+E57H2hQP5xlKUh9AEXtsgtc3JQ12rHrkMt8vW8aRnYvagA8frAOa0ozYQLb0wHEg2y0Lk7myD6SSKjTXq8U5IV9s4oPJF6HRbmp2L5njPKdUIsfpw/hXHzx5iEWFQ9m6+0XHbg+8Y2P17A8mILDStjD4aw7p6alQS3IKGRZlGafEqyEBejYfwC8dREMw2X3Lr5yCW/Xik0A2cmMfYhE1mcZsLhS47e9eqZiWymHIgluaNkj7oWe0DPBRkJjC0YwhKZFheDVlWlkk2TSZBkJxmUxNLRFfDG9Hg9YxsykQQERtXw7BGDzxBOWizQkdDPvCNhbuoD9zwIrDfcsIw09Do2XbkZdB8Nbd57+hkFzfYQ6loVYYmsPG9HXqoRiFGWi61H/SePQAgSQWWTklWfmxB4Plf9d52xBUNYIu3nOmB3evB0QZp8vXm/FS32bsbvFqTPgrfuoBXw+r9WNIbxp/x5wQ5cdTD2IRNJ51JFnRWfzr5PKd16BGR+exgOt+Dr593QqqfW7+dsePenY/L39EmpKBnnf5l4r/YsYwuWsCueL2rPIkbDYV3pZMXQYoNpw0E0XnF49RGfbZFECNbXtWDWhgM0UwFGPWqfz2P6pVSfbkdNPVvbBktkdiH3JuLm0mIsqz6Fr2qaFRvHISvbjDaPCOe5dkCnQcmUVNRYbYD3B6B1ac3rxZjlJ4qn253IWbcXcLiZtjsjEoAl24yGl4qw88RVLN7RCHS5+685M5PQ9GIhJo8yMk1HLzswddMhoD3w2hkMEd00IzkO1Qvy5QJ8Y30r3v/nMtDaoQxLilGPmZNSsLRwDObnpso7LjU9goSKg1asqTouz+9IETmRqtOycZNTUfHIWMzLScYInQadLkHOrAl02+QHq60b2xvbsJoW+h1O1iFMIiMy0HkLzbhmoxzBZD8VzXWahW3O3mXkdhF40zcYBjpvoZvltk5FENM4dIQuMsTzlugQGcJp2Z0mOJE0epL/o/i7XCSR80+/3PobzF9yuesh4CFJPf2+Zp+yLOqQxG4eYvepgO9NxQnRNzx9EFzHeICsR48TPkrkw1wxeqMnQyDrIuLnHCGE45ZsXwlJWgtea4jeuaeC0Okl0sJ3Ffnm5S//BxReRVBsy5DcAAAAAElFTkSuQmCC"

/***/ }),

/***/ "qNyk":
/***/ (function(module, exports) {

module.exports = "/checkout/_next/static/images/img_card_new-05897033f33c920debdb53972e618ce0.png";

/***/ }),

/***/ "qt1I":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),

/***/ "r6Lb":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Checkbox");

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "skcn":
/***/ (function(module, exports) {

module.exports = "/checkout/_next/static/images/christian-b23f720528371939315c0df5fc90c150.jpg";

/***/ }),

/***/ "tBFs":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Input");

/***/ }),

/***/ "uACh":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/CheckCircle");

/***/ }),

/***/ "um8N":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ CustomInput; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: external "@material-ui/core/FormControl"
var FormControl_ = __webpack_require__("lWoh");
var FormControl_default = /*#__PURE__*/__webpack_require__.n(FormControl_);

// EXTERNAL MODULE: external "@material-ui/core/InputLabel"
var InputLabel_ = __webpack_require__("zOcm");
var InputLabel_default = /*#__PURE__*/__webpack_require__.n(InputLabel_);

// EXTERNAL MODULE: external "@material-ui/core/Input"
var Input_ = __webpack_require__("tBFs");
var Input_default = /*#__PURE__*/__webpack_require__.n(Input_);

// EXTERNAL MODULE: external "@material-ui/core/FormHelperText"
var FormHelperText_ = __webpack_require__("hbHv");
var FormHelperText_default = /*#__PURE__*/__webpack_require__.n(FormHelperText_);

// EXTERNAL MODULE: external "@material-ui/icons/Clear"
var Clear_ = __webpack_require__("hrAA");
var Clear_default = /*#__PURE__*/__webpack_require__.n(Clear_);

// EXTERNAL MODULE: external "@material-ui/icons/Check"
var Check_ = __webpack_require__("9qvJ");
var Check_default = /*#__PURE__*/__webpack_require__.n(Check_);

// EXTERNAL MODULE: ./assets/jss/nextjs-material-kit-pro.js
var nextjs_material_kit_pro = __webpack_require__("36KI");

// CONCATENATED MODULE: ./assets/jss/nextjs-material-kit-pro/components/customInputStyle.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const customInputStyle = {
  disabled: {
    "&:before": {
      backgroundColor: "transparent !important"
    }
  },
  underline: {
    "&:hover:not($disabled):before,&:before": {
      borderBottomColor: nextjs_material_kit_pro["q" /* grayColor */][11] + " !important",
      borderBottomWidth: "1px !important"
    },
    "&:after": {
      borderBottomColor: nextjs_material_kit_pro["C" /* primaryColor */][0]
    }
  },
  underlineError: {
    "&:after": {
      borderBottomColor: nextjs_material_kit_pro["j" /* dangerColor */][0]
    }
  },
  underlineSuccess: {
    "&:after": {
      borderBottomColor: nextjs_material_kit_pro["M" /* successColor */][0]
    }
  },
  labelRoot: _objectSpread({}, nextjs_material_kit_pro["k" /* defaultFont */], {
    color: nextjs_material_kit_pro["q" /* grayColor */][12] + " !important",
    fontWeight: "400",
    fontSize: "1rem",
    lineHeight: "1.42857",
    top: "0px",
    letterSpacing: "unset",
    "& + $underline": {
      marginTop: "0px"
    }
  }),
  labelRootError: {
    color: nextjs_material_kit_pro["j" /* dangerColor */][0] + " !important"
  },
  labelRootSuccess: {
    color: nextjs_material_kit_pro["M" /* successColor */][0] + " !important"
  },
  feedback: {
    position: "absolute",
    bottom: "4px",
    right: "0",
    zIndex: "2",
    display: "block",
    width: "24px",
    height: "24px",
    textAlign: "center",
    pointerEvents: "none"
  },
  formControl: {
    // margin: "0 0 17px 0",
    paddingTop: "27px",
    position: "relative",
    "& svg,& .fab,& .far,& .fal,& .fas,& .material-icons": {
      color: nextjs_material_kit_pro["q" /* grayColor */][13]
    }
  },
  whiteUnderline: {
    "&:hover:not($disabled):before,&:before": {
      borderBottomColor: nextjs_material_kit_pro["U" /* whiteColor */]
    },
    "&:after": {
      borderBottomColor: nextjs_material_kit_pro["U" /* whiteColor */]
    }
  },
  input: {
    color: nextjs_material_kit_pro["q" /* grayColor */][13],
    height: "unset",
    "&,&::placeholder": {
      fontSize: "14px",
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: "400",
      lineHeight: "1.42857",
      opacity: "1"
    },
    "&::placeholder": {
      color: nextjs_material_kit_pro["q" /* grayColor */][12]
    }
  },
  whiteInput: {
    "&,&::placeholder": {
      color: nextjs_material_kit_pro["U" /* whiteColor */],
      opacity: "1"
    }
  },
  containerInput: {
    margin: "0 0 17px 0"
  }
};
/* harmony default export */ var components_customInputStyle = (customInputStyle);
// CONCATENATED MODULE: ./components/CustomInput/CustomInput.js
var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

 // nodejs library to set properties for components

// nodejs library that concatenates classes
 // @material-ui/core components





 // @material-ui/icons


 // core components


const useStyles = Object(styles_["makeStyles"])(components_customInputStyle);
function CustomInput(props) {
  const {
    formControlProps,
    labelText,
    labelError,
    id,
    labelProps,
    inputProps,
    error,
    white,
    inputRootCustomClasses,
    success
  } = props;
  const classes = useStyles();
  const labelClasses = external_classnames_default()({
    [" " + classes.labelRootError]: error,
    [" " + classes.labelRootSuccess]: success && !error
  });
  const underlineClasses = external_classnames_default()({
    [classes.underlineError]: error,
    [classes.underlineSuccess]: success && !error,
    [classes.underline]: true,
    [classes.whiteUnderline]: white
  });
  const marginTop = external_classnames_default()({
    [inputRootCustomClasses]: inputRootCustomClasses !== undefined
  });
  const inputClasses = external_classnames_default()({
    [classes.input]: true,
    [classes.whiteInput]: white
  });
  var formControlClasses;

  if (formControlProps !== undefined) {
    formControlClasses = external_classnames_default()(formControlProps.className, classes.formControl);
  } else {
    formControlClasses = classes.formControl;
  }

  return __jsx("div", {
    className: classes.containerInput
  }, __jsx(FormControl_default.a, _extends({}, formControlProps, {
    className: formControlClasses
  }), labelText !== undefined ? __jsx(InputLabel_default.a, _extends({
    className: classes.labelRoot + " " + labelClasses,
    htmlFor: id
  }, labelProps), labelText) : null, __jsx(Input_default.a, _extends({
    classes: {
      input: inputClasses,
      root: marginTop,
      disabled: classes.disabled,
      underline: underlineClasses
    },
    id: id
  }, inputProps)), error ? __jsx(Clear_default.a, {
    className: classes.feedback + " " + classes.labelRootError
  }) : success ? __jsx(Check_default.a, {
    className: classes.feedback + " " + classes.labelRootSuccess
  }) : null), error && __jsx(FormHelperText_default.a, {
    error: true
  }, labelError));
}

/***/ }),

/***/ "vFf/":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Dashboard");

/***/ }),

/***/ "vhhE":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/AccountBalance");

/***/ }),

/***/ "w/MP":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/AssignmentInd");

/***/ }),

/***/ "wtJD":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "x17g":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var assets_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("36KI");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const typographyStyle = {
  defaultFontStyle: _objectSpread({}, assets_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__[/* defaultFont */ "k"], {
    fontSize: "14px"
  }),
  defaultHeaderMargins: {
    marginTop: "20px",
    marginBottom: "10px"
  },
  quote: {
    padding: "10px 20px",
    margin: "0 0 20px",
    fontSize: "1.25rem",
    borderLeft: "5px solid " + assets_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__[/* grayColor */ "q"][2]
  },
  quoteText: {
    margin: "0 0 10px",
    fontStyle: "italic"
  },
  quoteAuthor: {
    display: "block",
    fontSize: "80%",
    lineHeight: "1.42857143",
    color: assets_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__[/* grayColor */ "q"][10]
  },
  mutedText: {
    "&, & *": {
      color: assets_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__[/* grayColor */ "q"][7],
      display: "inline-block"
    }
  },
  primaryText: {
    "&, & *": {
      color: assets_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__[/* primaryColor */ "C"][0],
      display: "inline-block"
    }
  },
  infoText: {
    "&, & *": {
      color: assets_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__[/* infoColor */ "u"][0],
      display: "inline-block"
    }
  },
  successText: {
    "&, & *": {
      color: assets_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__[/* successColor */ "M"][0],
      display: "inline-block"
    }
  },
  warningText: {
    "&, & *": {
      color: assets_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__[/* warningColor */ "T"][0],
      display: "inline-block"
    }
  },
  dangerText: {
    "&, & *": {
      color: assets_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__[/* dangerColor */ "j"][0],
      display: "inline-block"
    }
  },
  roseText: {
    "&, & *": {
      color: assets_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__[/* roseColor */ "G"][0],
      display: "inline-block"
    }
  },
  smallText: {
    fontSize: "65%",
    fontWeight: "400",
    lineHeight: "1",
    color: assets_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__[/* grayColor */ "q"][10]
  }
};
/* harmony default export */ __webpack_exports__["a"] = (typographyStyle);

/***/ }),

/***/ "x54t":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/MenuItem");

/***/ }),

/***/ "xVX3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var assets_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("36KI");


const modalStyle = theme => ({
  modalRoot: {
    overflow: "auto",
    display: "block"
  },
  modal: {
    [theme.breakpoints.up("sm")]: {
      maxWidth: "500px",
      margin: "auto"
    },
    borderRadius: "6px",
    overflow: "visible",
    maxHeight: "unset",
    width: "100%",
    marginTop: "130px !important"
  },
  modalHeader: {
    borderBottom: "none",
    paddingTop: "24px",
    paddingRight: "24px",
    paddingBottom: "0",
    paddingLeft: "24px",
    minHeight: "16.43px"
  },
  modalTitle: {
    margin: "0",
    lineHeight: "1.5"
  },
  modalCloseButton: {
    "&, &:hover": {
      color: assets_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__[/* grayColor */ "q"][0]
    },
    "&:hover": {
      opacity: "1"
    },
    cursor: "pointer",
    padding: "1rem",
    margin: "-1rem -1rem -1rem auto",
    backgroundColor: "transparent",
    border: "0",
    WebkitAppearance: "none",
    float: "right",
    fontSize: "1.5rem",
    fontWeight: "500",
    lineHeight: "1",
    textShadow: "0 1px 0 " + assets_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__[/* whiteColor */ "U"],
    opacity: ".5"
  },
  modalClose: {
    width: "16px",
    height: "16px"
  },
  modalBody: {
    paddingTop: "24px",
    paddingRight: "24px",
    paddingBottom: "16px",
    paddingLeft: "24px",
    position: "relative",
    overflow: "visible"
  },
  modalFooter: {
    padding: "15px",
    textAlign: "right",
    paddingTop: "0",
    margin: "0"
  },
  modalFooterCenter: {
    marginLeft: "auto",
    marginRight: "auto"
  },
  instructionNoticeModal: {
    marginBottom: "25px"
  },
  imageNoticeModal: {
    maxWidth: "150px"
  },
  modalLarge: {
    [theme.breakpoints.up("md")]: {
      maxWidth: "800px"
    }
  },
  modalSmall: {
    [theme.breakpoints.up("sm")]: {
      width: "300px",
      margin: "auto"
    },
    margin: "0 auto"
  },
  modalSmallBody: {
    marginTop: "20px"
  },
  modalSmallFooterFirstButton: {
    margin: "0",
    paddingLeft: "16px",
    paddingRight: "16px",
    width: "auto"
  },
  modalSmallFooterSecondButton: {
    marginBottom: "0",
    marginLeft: "5px"
  },
  modalLogin: {
    maxWidth: "360px",
    overflowY: "visible",
    width: "100%",
    "& $modalCloseButton": {
      color: assets_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__[/* whiteColor */ "U"],
      top: "-10px",
      right: "10px",
      textShadow: "none",
      position: "relative"
    },
    "& $modalHeader": {
      borderBottom: "none",
      paddingTop: "24px",
      paddingRight: "24px",
      paddingBottom: "0",
      paddingLeft: "24px"
    },
    "& $modalBody": {
      paddingBottom: "0",
      paddingTop: "0"
    },
    "& $modalFooter": {
      paddingBottom: "0",
      paddingTop: "0"
    }
  },
  modalLoginCard: {
    marginBottom: "0",
    margin: "0",
    "& $modalHeader": {
      paddingTop: "0"
    }
  },
  modalSignup: {
    maxWidth: "900px",
    width: "100%",
    "& $modalHeader": {
      paddingTop: "0"
    },
    "& $modalTitle": {
      textAlign: "center",
      width: "100%",
      marginTop: "0.625rem"
    },
    "& $modalBody": {
      paddingBottom: "0",
      paddingTop: "0"
    }
  },
  modalSignupCard: {
    padding: "40px 0",
    margin: "0"
  }
});

/* harmony default export */ __webpack_exports__["a"] = (modalStyle);

/***/ }),

/***/ "xVs5":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Event");

/***/ }),

/***/ "xmQw":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/MenuList");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "yDxe":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/LineStyle");

/***/ }),

/***/ "yFMe":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/People");

/***/ }),

/***/ "yKCf":
/***/ (function(module, exports) {

module.exports = require("react-input-mask");

/***/ }),

/***/ "yRI6":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Call");

/***/ }),

/***/ "ydPO":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAV4AAACjCAMAAAD1joZbAAABEVBMVEUAAAD///////////////////////////////////////////////////////////+IuiL///8AAADZqwDyvgCmy1nE3ZFvna2AgIDh7sjt7e1AQEA1NDiuiQC/v79Zfor5+/GPvjC11HXS5azw8fEvLjDw9uOXwz6ex0vjwEDf39/q8tYQEBD8778hISLa6bqfn5+82IPPz8+t0GdgYGD1zkBwcHD26r/L4Z5ghpMqKSyPj4+TtsKvr6/DqEDU3uNQUFDOogCtxs6RsLvi6u33+PjB0thLQBxZShzgsQBpk6KFnYJyXhe3kAKWeA6eu8Z4o7LBmALr4r+AqLbp3rJugWj54ornyVv99dfRzqnXxIAB57mXAAAAEHRSTlMAgEDvvxDfnyAwz2CvUHCPiFGVFAAAD5FJREFUeNrs2r2OozAUhmGDwQSYSXQqpGnScBNISEg2cZEmkXL/97KLcbBZmA0/KWak7+mmfefkYJwwAAD4VeLwGPTCA4N3ivNEkId/HJH4XcIPmpHlDPbLBX2DBzGDXcKI/kNggveIT/RChB28WZrRS/yTwSYhJ0+rZV3L8q8LjRwZbJD7beWj6Kiv3ihxwmBP3bYuDJvXBkbfHUJ6Kvu4Nq9T0iBgsMqBk6XvhZ/X5wYYz7d1MrJkYV2vVXWulJKymQ4wx/lsjRP1LuoZtzp3KvPHQ7ZfFlkZg8VSspSLa/Nat2dgHM/Wi8abwcR1eY27Hu8HjvuHpT6pp4e6Lq9zs31xetg2vOV9VLdSuiFqG/kY971gfDcdeWu/7lVPXzNsX4zvKomN6NdVF/LpwpD++AoGS3BveK9nQ9M/WrM47q0/vimDxQ+20g6vrTvfV/nje2KweDdIN7yKZjRFpzGHB7xarH4ffgzDW7m9KzIa1O7pRj2cHRYgo3TDq0dfXeaC/O3RetshZLDwWNbYvG54swMz4sQfX222A45mK59sctgNanIplnn/AWny4tm2VEDGbcgrJ6MZegdj5S3fiMErgffJP3caMg7MEWSYy0nkfUvemUuJooO8yPtDpEEkpnmn5vPyJMfR93tpRMb6vPhZ32tHos15nQw3O7MS2pPX4eg7I6d9eR2B/TAR85158aOzP+ycXa+TMBjH2Sub287SuQsMSrxo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"

/***/ }),

/***/ "yiv4":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/CardGiftcard");

/***/ }),

/***/ "zOcm":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/InputLabel");

/***/ }),

/***/ "zZTe":
/***/ (function(module, exports) {

module.exports = "/checkout/_next/static/images/selo-cadeado-fbcec28fd36a32b690983dccf3fb6acd.png";

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });