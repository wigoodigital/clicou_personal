webpackHotUpdate("static/development/pages/checkout.js",{

/***/ "./pages-sections/checkout/SectionPayment.js":
/*!***************************************************!*\
  !*** ./pages-sections/checkout/SectionPayment.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SectionPayment; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-google-maps */ "./node_modules/react-google-maps/lib/index.js");
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_google_maps__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_gtm_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-gtm-module */ "./node_modules/react-gtm-module/dist/index.js");
/* harmony import */ var react_gtm_module__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_gtm_module__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "./node_modules/@material-ui/core/esm/Checkbox/index.js");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "./node_modules/@material-ui/core/esm/FormControlLabel/index.js");
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/InputAdornment */ "./node_modules/@material-ui/core/esm/InputAdornment/index.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/index.js");
/* harmony import */ var _material_ui_icons_PinDrop__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/PinDrop */ "./node_modules/@material-ui/icons/PinDrop.js");
/* harmony import */ var _material_ui_icons_PinDrop__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PinDrop__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_icons_Phone__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/icons/Phone */ "./node_modules/@material-ui/icons/Phone.js");
/* harmony import */ var _material_ui_icons_Phone__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Phone__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/icons/Check */ "./node_modules/@material-ui/icons/Check.js");
/* harmony import */ var _material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/icons/Email */ "./node_modules/@material-ui/icons/Email.js");
/* harmony import */ var _material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _material_ui_icons_Event__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/icons/Event */ "./node_modules/@material-ui/icons/Event.js");
/* harmony import */ var _material_ui_icons_Event__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Event__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/icons/Favorite */ "./node_modules/@material-ui/icons/Favorite.js");
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _material_ui_icons_AssignmentInd__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/icons/AssignmentInd */ "./node_modules/@material-ui/icons/AssignmentInd.js");
/* harmony import */ var _material_ui_icons_AssignmentInd__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AssignmentInd__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! components/Grid/GridContainer.js */ "./components/Grid/GridContainer.js");
/* harmony import */ var components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! components/Grid/GridItem.js */ "./components/Grid/GridItem.js");
/* harmony import */ var components_InfoArea_InfoArea_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! components/InfoArea/InfoArea.js */ "./components/InfoArea/InfoArea.js");
/* harmony import */ var components_Card_Card_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! components/Card/Card.js */ "./components/Card/Card.js");
/* harmony import */ var components_Card_CardHeader_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! components/Card/CardHeader.js */ "./components/Card/CardHeader.js");
/* harmony import */ var components_Card_CardBody_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! components/Card/CardBody.js */ "./components/Card/CardBody.js");
/* harmony import */ var components_Card_CardFooter_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! components/Card/CardFooter.js */ "./components/Card/CardFooter.js");
/* harmony import */ var components_CustomInput_CustomInput_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! components/CustomInput/CustomInput.js */ "./components/CustomInput/CustomInput.js");
/* harmony import */ var components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! components/CustomButtons/Button.js */ "./components/CustomButtons/Button.js");
/* harmony import */ var components_Snackbar_SnackbarContent_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! components/Snackbar/SnackbarContent.js */ "./components/Snackbar/SnackbarContent.js");
/* harmony import */ var _material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @material-ui/core/FormHelperText */ "./node_modules/@material-ui/core/esm/FormHelperText/index.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/index.js");
/* harmony import */ var _material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @material-ui/core/FormGroup */ "./node_modules/@material-ui/core/esm/FormGroup/index.js");
/* harmony import */ var _material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @material-ui/core/Grow */ "./node_modules/@material-ui/core/esm/Grow/index.js");
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! react-input-mask */ "./node_modules/react-input-mask/index.js");
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(react_input_mask__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var react_text_mask__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! react-text-mask */ "./node_modules/react-text-mask/dist/reactTextMask.js");
/* harmony import */ var react_text_mask__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(react_text_mask__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _hookform_resolvers__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @hookform/resolvers */ "./node_modules/@hookform/resolvers/dist/index.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var assets_jss_nextjs_material_kit_pro_pages_checkoutSections_checkoutStyle_js__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! assets/jss/nextjs-material-kit-pro/pages/checkoutSections/checkoutStyle.js */ "./assets/jss/nextjs-material-kit-pro/pages/checkoutSections/checkoutStyle.js");
/* harmony import */ var assets_img_icon_cartoes_icon_chip_png__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! assets/img/icon-cartoes/icon-chip.png */ "./assets/img/icon-cartoes/icon-chip.png");
/* harmony import */ var assets_img_icon_cartoes_icon_chip_png__WEBPACK_IMPORTED_MODULE_43___default = /*#__PURE__*/__webpack_require__.n(assets_img_icon_cartoes_icon_chip_png__WEBPACK_IMPORTED_MODULE_43__);
/* harmony import */ var assets_img_icon_cartoes_icon_visa_png__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! assets/img/icon-cartoes/icon-visa.png */ "./assets/img/icon-cartoes/icon-visa.png");
/* harmony import */ var assets_img_icon_cartoes_icon_visa_png__WEBPACK_IMPORTED_MODULE_44___default = /*#__PURE__*/__webpack_require__.n(assets_img_icon_cartoes_icon_visa_png__WEBPACK_IMPORTED_MODULE_44__);
/* harmony import */ var assets_img_icon_cartoes_icon_master_png__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! assets/img/icon-cartoes/icon-master.png */ "./assets/img/icon-cartoes/icon-master.png");
/* harmony import */ var assets_img_icon_cartoes_icon_master_png__WEBPACK_IMPORTED_MODULE_45___default = /*#__PURE__*/__webpack_require__.n(assets_img_icon_cartoes_icon_master_png__WEBPACK_IMPORTED_MODULE_45__);
/* harmony import */ var assets_img_icon_cartoes_icon_diners_png__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! assets/img/icon-cartoes/icon-diners.png */ "./assets/img/icon-cartoes/icon-diners.png");
/* harmony import */ var assets_img_icon_cartoes_icon_diners_png__WEBPACK_IMPORTED_MODULE_46___default = /*#__PURE__*/__webpack_require__.n(assets_img_icon_cartoes_icon_diners_png__WEBPACK_IMPORTED_MODULE_46__);
/* harmony import */ var assets_img_icon_cartoes_icon_amex_png__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! assets/img/icon-cartoes/icon-amex.png */ "./assets/img/icon-cartoes/icon-amex.png");
/* harmony import */ var assets_img_icon_cartoes_icon_amex_png__WEBPACK_IMPORTED_MODULE_47___default = /*#__PURE__*/__webpack_require__.n(assets_img_icon_cartoes_icon_amex_png__WEBPACK_IMPORTED_MODULE_47__);
/* harmony import */ var assets_img_icon_cartoes_icon_discover_png__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! assets/img/icon-cartoes/icon-discover.png */ "./assets/img/icon-cartoes/icon-discover.png");
/* harmony import */ var assets_img_icon_cartoes_icon_discover_png__WEBPACK_IMPORTED_MODULE_48___default = /*#__PURE__*/__webpack_require__.n(assets_img_icon_cartoes_icon_discover_png__WEBPACK_IMPORTED_MODULE_48__);
/* harmony import */ var assets_img_icon_cartoes_icon_hipercard_png__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! assets/img/icon-cartoes/icon-hipercard.png */ "./assets/img/icon-cartoes/icon-hipercard.png");
/* harmony import */ var assets_img_icon_cartoes_icon_hipercard_png__WEBPACK_IMPORTED_MODULE_49___default = /*#__PURE__*/__webpack_require__.n(assets_img_icon_cartoes_icon_hipercard_png__WEBPACK_IMPORTED_MODULE_49__);
/* harmony import */ var assets_img_icon_cartoes_icon_elo_png__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! assets/img/icon-cartoes/icon-elo.png */ "./assets/img/icon-cartoes/icon-elo.png");
/* harmony import */ var assets_img_icon_cartoes_icon_elo_png__WEBPACK_IMPORTED_MODULE_50___default = /*#__PURE__*/__webpack_require__.n(assets_img_icon_cartoes_icon_elo_png__WEBPACK_IMPORTED_MODULE_50__);
/* harmony import */ var assets_img_icon_cartoes_icon_jcb_png__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! assets/img/icon-cartoes/icon-jcb.png */ "./assets/img/icon-cartoes/icon-jcb.png");
/* harmony import */ var assets_img_icon_cartoes_icon_jcb_png__WEBPACK_IMPORTED_MODULE_51___default = /*#__PURE__*/__webpack_require__.n(assets_img_icon_cartoes_icon_jcb_png__WEBPACK_IMPORTED_MODULE_51__);
/* harmony import */ var assets_img_icon_cartoes_icon_aura_png__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! assets/img/icon-cartoes/icon-aura.png */ "./assets/img/icon-cartoes/icon-aura.png");
/* harmony import */ var assets_img_icon_cartoes_icon_aura_png__WEBPACK_IMPORTED_MODULE_52___default = /*#__PURE__*/__webpack_require__.n(assets_img_icon_cartoes_icon_aura_png__WEBPACK_IMPORTED_MODULE_52__);
/* harmony import */ var assets_img_icon_cartoes_icon_nocard_png__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! assets/img/icon-cartoes/icon-nocard.png */ "./assets/img/icon-cartoes/icon-nocard.png");
/* harmony import */ var assets_img_icon_cartoes_icon_nocard_png__WEBPACK_IMPORTED_MODULE_53___default = /*#__PURE__*/__webpack_require__.n(assets_img_icon_cartoes_icon_nocard_png__WEBPACK_IMPORTED_MODULE_53__);






var _jsxFileName = "/Users/gabrieldossantos/Google Drive (webmaster@wigoo.com.br)/Wigoo Desenvolvimento/justfit.com.br/clicoupersonal.com.br/checkout/pages-sections/checkout/SectionPayment.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



 // react components used to create a google map


 // @material-ui/core components





 // @material-ui/icons







 // core components


































var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__["makeStyles"])(assets_jss_nextjs_material_kit_pro_pages_checkoutSections_checkoutStyle_js__WEBPACK_IMPORTED_MODULE_42__["default"]);

function TextMaskCustom(props) {
  var inputRef = props.inputRef,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_5__["default"])(props, ["inputRef"]);

  return __jsx(react_text_mask__WEBPACK_IMPORTED_MODULE_37___default.a, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__["default"])({}, other, {
    ref: function ref(_ref2) {
      inputRef(_ref2 ? _ref2.inputElement : null);
    },
    mask: [/[0-9]/, /[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/],
    placeholderChar: "\u2000",
    guide: false,
    showMask: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 5
    }
  }));
}

TextMaskCustom.propTypes = {
  inputRef: prop_types__WEBPACK_IMPORTED_MODULE_38___default.a.func.isRequired
};

function ValidadeMask(props) {
  var inputRef = props.inputRef,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_5__["default"])(props, ["inputRef"]);

  return __jsx(react_text_mask__WEBPACK_IMPORTED_MODULE_37___default.a, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__["default"])({}, other, {
    ref: function ref(_ref3) {
      inputRef(_ref3 ? _ref3.inputElement : null);
    },
    mask: [/[0-9]/, /[0-9]/, '/', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/],
    placeholderChar: "\u2000",
    guide: false,
    showMask: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 5
    }
  }));
}

ValidadeMask.propTypes = {
  inputRef: prop_types__WEBPACK_IMPORTED_MODULE_38___default.a.func.isRequired
};

function CVVMask(props) {
  var inputRef = props.inputRef,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_5__["default"])(props, ["inputRef"]);

  return __jsx(react_text_mask__WEBPACK_IMPORTED_MODULE_37___default.a, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__["default"])({}, other, {
    ref: function ref(_ref4) {
      inputRef(_ref4 ? _ref4.inputElement : null);
    } // mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
    ,
    mask: [/[0-9]/, /[0-9]/, /[0-9]/],
    placeholderChar: "\u2000",
    guide: false,
    showMask: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 5
    }
  }));
}

CVVMask.propTypes = {
  inputRef: prop_types__WEBPACK_IMPORTED_MODULE_38___default.a.func.isRequired
};

function CardMask(props) {
  var inputRef = props.inputRef,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_5__["default"])(props, ["inputRef"]);

  return __jsx(react_text_mask__WEBPACK_IMPORTED_MODULE_37___default.a, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__["default"])({}, other, {
    ref: function ref(_ref5) {
      inputRef(_ref5 ? _ref5.inputElement : null);
    } // mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
    ,
    mask: [/[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, ' ', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, ' ', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, ' ', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/],
    placeholderChar: "\u2000",
    guide: false,
    showMask: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 5
    }
  }));
}

CardMask.propTypes = {
  inputRef: prop_types__WEBPACK_IMPORTED_MODULE_38___default.a.func.isRequired
};
Object(yup__WEBPACK_IMPORTED_MODULE_41__["setLocale"])({
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
    "default": 'é inválido',
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
var regexCPF = /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/gm;

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

  for (var i = 1; i <= 9; i++) {
    soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
  }

  resto = soma * 10 % 11;
  if (resto == 10 || resto == 11) resto = 0;
  if (resto != parseInt(cpf.substring(9, 10))) return false;
  soma = 0;

  for (var i = 1; i <= 10; i++) {
    soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
  }

  resto = soma * 10 % 11;
  if (resto == 10 || resto == 11) resto = 0;
  if (resto != parseInt(cpf.substring(10, 11))) return false;
  return true;
}

function isValidPhone(phone) {
  return /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/.test(phone);
}

function isValidDate(date) {
  return /^((((0?[1-9]|[12]\d|3[01])[\.\-\/](0?[13578]|1[02])      [\.\-\/]((1[6-9]|[2-9]\d)?\d{2}))|((0?[1-9]|[12]\d|30)[\.\-\/](0?[13456789]|1[012])[\.\-\/]((1[6-9]|[2-9]\d)?\d{2}))|((0?[1-9]|1\d|2[0-8])[\.\-\/]0?2[\.\-\/]((1[6-9]|[2-9]\d)?\d{2}))|(29[\.\-\/]0?2[\.\-\/]((1[6-9]|[2-9]\d)?(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00)|00)))|(((0[1-9]|[12]\d|3[01])(0[13578]|1[02])((1[6-9]|[2-9]\d)?\d{2}))|((0[1-9]|[12]\d|30)(0[13456789]|1[012])((1[6-9]|[2-9]\d)?\d{2}))|((0[1-9]|1\d|2[0-8])02((1[6-9]|[2-9]\d)?\d{2}))|(2902((1[6-9]|[2-9]\d)?(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00)|00))))$/.test(date);
}

function isValidDateCard(date) {
  // return /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/.test(date);
  return /^((0[1-9])|(1[0-2]))\/((2009)|(20[1-2][0-9]))$/.test(date);
}

function getCardFlag(cardnumber) {
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

yup__WEBPACK_IMPORTED_MODULE_41__["addMethod"](yup__WEBPACK_IMPORTED_MODULE_41__["string"], "cpf", function (message) {
  // return yup.mixed().test("cpf", message || "número de CPF inválido", value => cpfValidate(value));
  return yup__WEBPACK_IMPORTED_MODULE_41__["mixed"]().test("cpf", message || "número de CPF inválido", function (value) {
    return isValidCPF(value);
  });
});
yup__WEBPACK_IMPORTED_MODULE_41__["addMethod"](yup__WEBPACK_IMPORTED_MODULE_41__["string"], "phone", function (message) {
  return yup__WEBPACK_IMPORTED_MODULE_41__["mixed"]().test("phone", message || "número de celular inválido", function (value) {
    return isValidPhone(value);
  });
});
yup__WEBPACK_IMPORTED_MODULE_41__["addMethod"](yup__WEBPACK_IMPORTED_MODULE_41__["string"], "date", function (message) {
  return yup__WEBPACK_IMPORTED_MODULE_41__["mixed"]().test("date", message || "data inválida", function (value) {
    return isValidDate(value);
  });
});
yup__WEBPACK_IMPORTED_MODULE_41__["addMethod"](yup__WEBPACK_IMPORTED_MODULE_41__["string"], "dateCard", function (message) {
  return yup__WEBPACK_IMPORTED_MODULE_41__["mixed"]().test("date", message || "Por favor, digite uma data válida", function (value) {
    return isValidDateCard(value);
  });
});
yup__WEBPACK_IMPORTED_MODULE_41__["addMethod"](yup__WEBPACK_IMPORTED_MODULE_41__["string"], "card", function (message) {
  return yup__WEBPACK_IMPORTED_MODULE_41__["mixed"]().test("card", message || "Por favor, digite um número de cartão válido", function (value) {
    return getCardFlag(value);
  });
});
var SignupSchema = yup__WEBPACK_IMPORTED_MODULE_41__["object"]().shape({
  id: yup__WEBPACK_IMPORTED_MODULE_41__["string"](),
  number: yup__WEBPACK_IMPORTED_MODULE_41__["string"]().card().required(),
  name: yup__WEBPACK_IMPORTED_MODULE_41__["string"]().required(),
  validade: yup__WEBPACK_IMPORTED_MODULE_41__["string"]().dateCard().required(),
  cvv: yup__WEBPACK_IMPORTED_MODULE_41__["string"]().matches(/^[0-9]{3}$/, 'Por favor, digite um CVV válido').required(),
  cpf: yup__WEBPACK_IMPORTED_MODULE_41__["string"]().cpf("Por favor, informe um CPF válido").required()
}); // const schema = yup.object().shape({
//   first: yup.string().required(),
//   age: yup.number().positive().integer().required(),
// });

function SectionPayment(props) {
  // const { register, errors, handleSubmit} = useForm({
  //   validationSchema: SignupSchema
  // });
  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_39__["useForm"])({
    resolver: Object(_hookform_resolvers__WEBPACK_IMPORTED_MODULE_40__["yupResolver"])(SignupSchema),
    mode: "onBlur" // mode: "onChange"

  }),
      register = _useForm.register,
      getValues = _useForm.getValues,
      trigger = _useForm.trigger,
      handleSubmit = _useForm.handleSubmit,
      errors = _useForm.errors;

  var onSubmit = function onSubmit(data) {
    console.log(data); // alert(JSON.stringify(data, null));
  };

  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    // history.pushState({}, null, "/checkout/payment");
    react_gtm_module__WEBPACK_IMPORTED_MODULE_9___default.a.dataLayer({
      dataLayer: {
        event: "paymentView",
        userId: '001',
        userProject: 'project',
        page: 'home'
      }
    });
    react_gtm_module__WEBPACK_IMPORTED_MODULE_9___default.a.dataLayer({
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

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_6___default.a.useState([]),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState, 2),
      checked = _React$useState2[0],
      setChecked = _React$useState2[1];

  var handleToggle = function handleToggle(value) {
    var currentIndex = checked.indexOf(value);

    var newChecked = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(checked);

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_6___default.a.useState(false),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState3, 2),
      isAluno = _React$useState4[0],
      setIsAluno = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_6___default.a.useState(0),
      _React$useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState5, 2),
      activeForm = _React$useState6[0],
      setActiveForm = _React$useState6[1]; // const [activeField, setActiveField] = React.useState("first");


  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_6___default.a.useState(["id", "number", "name", "validade", "cvv", "cpf"]),
      _React$useState8 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState7, 2),
      activeField = _React$useState8[0],
      setActiveField = _React$useState8[1];

  var _React$useState9 = react__WEBPACK_IMPORTED_MODULE_6___default.a.useState(true),
      _React$useState10 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState9, 2),
      isDisableNext = _React$useState10[0],
      setIsDisableNext = _React$useState10[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(false),
      error = _useState[0],
      setError = _useState[1];

  var _React$useState11 = react__WEBPACK_IMPORTED_MODULE_6___default.a.useState(assets_img_icon_cartoes_icon_nocard_png__WEBPACK_IMPORTED_MODULE_53___default.a),
      _React$useState12 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState11, 2),
      activeCard = _React$useState12[0],
      setActiveCard = _React$useState12[1];

  var _React$useState13 = react__WEBPACK_IMPORTED_MODULE_6___default.a.useState({
    number: "0000 0000 0000 0000",
    name: "NOME IMPRESSO NO CARTÃO",
    valid: "00/00",
    cvv: "000",
    cpf: ""
  }),
      _React$useState14 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState13, 2),
      cardField = _React$useState14[0],
      setCardField = _React$useState14[1];

  var handleNext = function handleNext(type) {
    var result, cardForm, codBrand, hoje, dia, mes, ano, anoFinal;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function handleNext$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(trigger(activeField));

          case 2:
            result = _context.sent;

            // console.log(result);
            if (result) {
              console.log(getValues());
              cardForm = getValues();
              codBrand = getBrandCod(cardForm.number);

              if (activeForm == 0) {
                hoje = new Date();
                dia = ("0" + hoje.getDate()).slice(-2);
                mes = ("0" + (hoje.getMonth() + 1)).slice(-2);
                ano = hoje.getFullYear();
                anoFinal = hoje.getFullYear() + 1;
                props.setDataSale(function (prevDataSale) {
                  return _objectSpread({}, prevDataSale, {
                    numeroCartao: cardForm.number.replace(/\s+/g, ''),
                    nomeCartao: cardForm.name,
                    cvv: cardForm.cvv,
                    validade: cardForm.validade,
                    // brand: codBrand,
                    cpftitularcard: cardForm.cpf,
                    anamnese: _objectSpread({}, prevDataSale.anamnese, {
                      created_at: dia + "/" + mes + "/" + ano,
                      updated_at: dia + "/" + mes + "/" + ano
                    })
                  });
                });
                props.setStepCheckout(2);
              } else {
                setActiveForm(function (prevActiveStep) {
                  return prevActiveStep + 1;
                });
                handleFieldActive(activeForm + 1);
              }
            }

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, null, Promise);
  };

  react__WEBPACK_IMPORTED_MODULE_6___default.a.useEffect(function () {
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

  var handleBack = function handleBack(type) {
    if (activeForm !== 0) {
      setActiveForm(function (prevActiveStep) {
        return prevActiveStep - 1;
      });
      handleFieldActive(activeForm - 1);
    } else {
      props.setStepCheckout(0);
    }
  };

  var handleFocus = function handleFocus(event) {
    // event.target.select()
    if (event.target.value == "") {
      event.target.selectionStart = 0;
      event.target.selectionEnd = 0;
    } else {
      event.target.select();
    }
  };

  var handleFieldActive = function handleFieldActive(step) {
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

  var _React$useState15 = react__WEBPACK_IMPORTED_MODULE_6___default.a.useState({
    "paymentMethod": "creditCard",
    "card": {
      "id": 123456,
      "number": "5464082622239784",
      "name": "nome no cartão",
      "valid": "12/2022",
      "cvv": "782",
      "brand": 1
    }
  }),
      _React$useState16 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState15, 2),
      payment = _React$useState16[0],
      setPayment = _React$useState16[1];

  var getPlan = function getPlan() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getPlan$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_7___default.a.get("https://admin.justfit.com.br/app.justfit/api/iAPIClicou/planosUnidade?codUnidade=1").then(function (res) {
              console.log(res.data);
              props.setDataSale(function (prevDataSale) {
                return _objectSpread({}, prevDataSale, {
                  unidade: 1,
                  plano: res.data.planos[0].codigo
                });
              });
            })["catch"](function (error) {
              console.log(error);
              setError(true);
            }));

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, null, Promise);
  };

  var getBrandCod = function getBrandCod(numberCard) {
    var brandCard = getCardFlag(numberCard);

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

  var handlerOnBlur = function handlerOnBlur(event) {
    var brandCard = getCardFlag(event.target.value);
    var brandCod = 0; // handleFocus(event);

    switch (brandCard) {
      case "visa":
        setActiveCard(assets_img_icon_cartoes_icon_visa_png__WEBPACK_IMPORTED_MODULE_44___default.a);
        brandCod = 1;
        break;

      case "mastercard":
        setActiveCard(assets_img_icon_cartoes_icon_master_png__WEBPACK_IMPORTED_MODULE_45___default.a);
        brandCod = 2;
        break;

      case "diners":
        setActiveCard(assets_img_icon_cartoes_icon_diners_png__WEBPACK_IMPORTED_MODULE_46___default.a);
        brandCod = 3;
        break;

      case "amex":
        setActiveCard(assets_img_icon_cartoes_icon_amex_png__WEBPACK_IMPORTED_MODULE_47___default.a);
        brandCod = 4;
        break;

      case "discover":
        setActiveCard(assets_img_icon_cartoes_icon_discover_png__WEBPACK_IMPORTED_MODULE_48___default.a);
        brandCod = 8;
        break;

      case "hipercard":
        setActiveCard(assets_img_icon_cartoes_icon_hipercard_png__WEBPACK_IMPORTED_MODULE_49___default.a);
        brandCod = 9;
        break;

      case "elo":
        setActiveCard(assets_img_icon_cartoes_icon_elo_png__WEBPACK_IMPORTED_MODULE_50___default.a);
        brandCod = 6;
        break;

      case "jcb":
        setActiveCard(assets_img_icon_cartoes_icon_jcb_png__WEBPACK_IMPORTED_MODULE_51___default.a);
        brandCod = 7;
        break;

      case "aura":
        setActiveCard(assets_img_icon_cartoes_icon_aura_png__WEBPACK_IMPORTED_MODULE_52___default.a);
        brandCod = 5;
        break;

      default:
        setActiveCard(assets_img_icon_cartoes_icon_nocard_png__WEBPACK_IMPORTED_MODULE_53___default.a);
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

  var handlerOnChange = function handlerOnChange(event) {
    setCardField({
      number: getValues("number"),
      name: getValues("name"),
      valid: getValues("validade"),
      cvv: getValues("cvv")
    });
  };

  var getCardFlag = function getCardFlag(cardnumber) {
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

    return assets_img_icon_cartoes_icon_nocard_png__WEBPACK_IMPORTED_MODULE_53___default.a;
  };

  var classes = useStyles();
  return __jsx("div", {
    className: "cd-section",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 709,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: classes.contacts + " " + classes.section // style={{ backgroundImage: `url(${city})` }}
    ,
    style: {
      backgroundColor: "#ffffff"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 711,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: classes.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 716,
      columnNumber: 9
    }
  }, __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_22__["default"], {
    justify: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 717,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_14__["default"], {
    clone: true,
    order: {
      xs: 2,
      sm: 2,
      md: 1
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 719,
      columnNumber: 13
    }
  }, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_23__["default"], {
    xs: 12,
    sm: 12,
    md: 5,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 720,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_35__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__["default"])({
    "in": true,
    style: {
      transformOrigin: '0 0 0'
    }
  }, true ? {
    timeout: 1000
  } : undefined, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 721,
      columnNumber: 17
    }
  }), __jsx(components_Card_Card_js__WEBPACK_IMPORTED_MODULE_25__["default"], {
    className: classes.card1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 726,
      columnNumber: 19
    }
  }, __jsx("form", {
    onSubmit: handleSubmit(onSubmit),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 727,
      columnNumber: 19
    }
  }, __jsx(components_Card_CardHeader_js__WEBPACK_IMPORTED_MODULE_26__["default"], {
    contact: true,
    color: "primary",
    className: classes.textCenter,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 728,
      columnNumber: 21
    }
  }, __jsx("h4", {
    className: classes.cardTitle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 733,
      columnNumber: 23
    }
  }, "Pagamento")), __jsx(_material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_35__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__["default"])({
    "in": activeForm === 0,
    style: {
      transformOrigin: '0 0 0',
      display: activeForm === 0 ? "block" : "none"
    }
  }, activeForm === 0 ? {
    timeout: 1000
  } : {}, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 737,
      columnNumber: 21
    }
  }), __jsx(components_Card_CardBody_js__WEBPACK_IMPORTED_MODULE_27__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 743,
      columnNumber: 23
    }
  }, error && __jsx(components_Snackbar_SnackbarContent_js__WEBPACK_IMPORTED_MODULE_31__["default"], {
    message: __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 748,
        columnNumber: 29
      }
    }, __jsx("b", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 749,
        columnNumber: 31
      }
    }, "N\xE3o encontramos seu CEP"), " ", __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 749,
        columnNumber: 62
      }
    }), " Tente novamente") // close
    ,
    color: "warning",
    icon: "info_outline",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 746,
      columnNumber: 25
    }
  }), __jsx(components_Card_Card_js__WEBPACK_IMPORTED_MODULE_25__["default"], {
    color: "info",
    className: classes.containerCart,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 758,
      columnNumber: 23
    }
  }, __jsx(components_Card_CardBody_js__WEBPACK_IMPORTED_MODULE_27__["default"], {
    color: true,
    className: classes.noPaddingBottom,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 759,
      columnNumber: 25
    }
  }, __jsx("h5", {
    className: classes.cardCategorySocialWhite,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 761,
      columnNumber: 29
    }
  }, __jsx("img", {
    src: assets_img_icon_cartoes_icon_chip_png__WEBPACK_IMPORTED_MODULE_43___default.a,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 762,
      columnNumber: 31
    }
  })), __jsx("h4", {
    className: classes.cardTitleWhite,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 765,
      columnNumber: 29
    }
  }, cardField.number), __jsx("h4", {
    className: classes.cardTitleWhite,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 768,
      columnNumber: 29
    }
  }, cardField.name)), __jsx(components_Card_CardFooter_js__WEBPACK_IMPORTED_MODULE_28__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 773,
      columnNumber: 25
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 774,
      columnNumber: 27
    }
  }, __jsx("a", {
    href: "#pablo",
    onClick: function onClick(e) {
      return e.preventDefault();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 775,
      columnNumber: 29
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 776,
      columnNumber: 31
    }
  }, "Valid"), " ", cardField.valid, " \xA0 \xA0", __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 777,
      columnNumber: 31
    }
  }, "CVV"), " ", cardField.cvv)), __jsx("div", {
    className: classes.statsWhite + " " + classes.mlAuto,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 780,
      columnNumber: 27
    }
  }, __jsx("img", {
    src: activeCard,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 783,
      columnNumber: 29
    }
  })))), __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_22__["default"], {
    justify: "center",
    className: classes.containerFieldsCard,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 788,
      columnNumber: 25
    }
  }, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_23__["default"], {
    xs: 12,
    sm: 12,
    md: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 789,
      columnNumber: 27
    }
  }, __jsx(components_CustomInput_CustomInput_js__WEBPACK_IMPORTED_MODULE_29__["default"], {
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

    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 790,
      columnNumber: 29
    }
  })), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_23__["default"], {
    xs: 12,
    sm: 12,
    md: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 813,
      columnNumber: 27
    }
  }, __jsx(components_CustomInput_CustomInput_js__WEBPACK_IMPORTED_MODULE_29__["default"], {
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
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 815,
      columnNumber: 29
    }
  })), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_23__["default"], {
    xs: 12,
    sm: 12,
    md: 6,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 830,
      columnNumber: 27
    }
  }, __jsx(components_CustomInput_CustomInput_js__WEBPACK_IMPORTED_MODULE_29__["default"], {
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
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 831,
      columnNumber: 29
    }
  })), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_23__["default"], {
    xs: 12,
    sm: 12,
    md: 6,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 849,
      columnNumber: 27
    }
  }, __jsx(components_CustomInput_CustomInput_js__WEBPACK_IMPORTED_MODULE_29__["default"], {
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
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 850,
      columnNumber: 29
    }
  })), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_23__["default"], {
    xs: 12,
    sm: 12,
    md: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 868,
      columnNumber: 27
    }
  }, __jsx(components_CustomInput_CustomInput_js__WEBPACK_IMPORTED_MODULE_29__["default"], {
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
      inputComponent: TextMaskCustom
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 870,
      columnNumber: 29
    }
  }))))), __jsx(components_Card_CardFooter_js__WEBPACK_IMPORTED_MODULE_28__["default"], {
    className: classes.textCenter,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 893,
      columnNumber: 21
    }
  }, __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_22__["default"], {
    justify: "center",
    style: {
      margin: "0",
      width: "100%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 894,
      columnNumber: 23
    }
  }, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_23__["default"], {
    xs: 12,
    sm: 12,
    md: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 923,
      columnNumber: 25
    }
  }, __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_30__["default"], {
    color: "primary",
    fullWidth: true,
    onClick: handleNext,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 931,
      columnNumber: 27
    }
  }, "Pr\xF3ximo")), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_23__["default"], {
    xs: 12,
    sm: 12,
    md: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 937,
      columnNumber: 25
    }
  }, __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_30__["default"], {
    simple: true,
    color: "primary",
    fullWidth: true,
    onClick: handleBack,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 946,
      columnNumber: 27
    }
  }, "Voltar"))))))))), __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_14__["default"], {
    clone: true,
    order: {
      xs: 1,
      sm: 1,
      md: 2
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 960,
      columnNumber: 13
    }
  }, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_23__["default"], {
    xs: 12,
    sm: 12,
    md: 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 961,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_35__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__["default"])({
    "in": true,
    style: {
      transformOrigin: '0 0 0'
    }
  }, true ? {
    timeout: 1000
  } : undefined, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 962,
      columnNumber: 17
    }
  }), __jsx(components_Card_Card_js__WEBPACK_IMPORTED_MODULE_25__["default"], {
    className: classes.card1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 967,
      columnNumber: 19
    }
  }, __jsx("form", {
    onSubmit: handleSubmit(onSubmit),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 968,
      columnNumber: 19
    }
  }, __jsx(components_Card_CardHeader_js__WEBPACK_IMPORTED_MODULE_26__["default"], {
    contact: true,
    color: "primary",
    className: classes.textCenter,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 969,
      columnNumber: 21
    }
  }, __jsx("h4", {
    className: classes.cardTitle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 974,
      columnNumber: 23
    }
  }, "Resumo")), __jsx(_material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_35__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__["default"])({
    "in": activeForm === 0,
    style: {
      transformOrigin: '0 0 0',
      display: activeForm === 0 ? "block" : "none"
    }
  }, activeForm === 0 ? {
    timeout: 1000
  } : {}, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 978,
      columnNumber: 21
    }
  }), __jsx(components_Card_CardBody_js__WEBPACK_IMPORTED_MODULE_27__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 984,
      columnNumber: 23
    }
  }, error && __jsx(components_Snackbar_SnackbarContent_js__WEBPACK_IMPORTED_MODULE_31__["default"], {
    message: __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 989,
        columnNumber: 29
      }
    }, __jsx("b", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 990,
        columnNumber: 31
      }
    }, "N\xE3o encontramos seu CEP"), " ", __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 990,
        columnNumber: 62
      }
    }), " Tente novamente") // close
    ,
    color: "warning",
    icon: "info_outline",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 987,
      columnNumber: 25
    }
  }), __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_22__["default"], {
    justify: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 999,
      columnNumber: 25
    }
  }, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_23__["default"], {
    xs: 12,
    sm: 12,
    md: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1000,
      columnNumber: 27
    }
  }, __jsx(components_Card_Card_js__WEBPACK_IMPORTED_MODULE_25__["default"], {
    pricing: true,
    plain: true,
    className: classes.marginZero,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1001,
      columnNumber: 29
    }
  }, __jsx(components_Card_CardBody_js__WEBPACK_IMPORTED_MODULE_27__["default"], {
    pricing: true,
    plain: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1002,
      columnNumber: 31
    }
  }, __jsx("h5", {
    className: classes.cardCategory,
    style: {
      color: "#425cc7"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1003,
      columnNumber: 33
    }
  }, "Plano Anual Start"), __jsx("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1004,
      columnNumber: 33
    }
  }), __jsx("small", {
    style: {
      fontSize: "1rem"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1005,
      columnNumber: 33
    }
  }, "\xA0", " 12 parcelas mensais de"), __jsx("h1", {
    className: classes.cardTitle,
    style: {
      color: "#425cc7",
      marginTop: "0.75rem",
      marginBottom: "0 !important"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1006,
      columnNumber: 33
    }
  }, __jsx("small", {
    style: {
      color: "#425cc7"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1007,
      columnNumber: 35
    }
  }, "R$"), " 39,90"), __jsx("small", {
    style: {
      fontSize: "0.7rem"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1009,
      columnNumber: 33
    }
  }, "\xA0", " Valor anual do plano: R$ 478,80"), __jsx("ul", {
    className: classes.itensResumo,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1010,
      columnNumber: 33
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1011,
      columnNumber: 35
    }
  }, __jsx(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_17___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1012,
      columnNumber: 37
    }
  }), " Treinos Personalizados"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1014,
      columnNumber: 35
    }
  }, __jsx(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_17___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1015,
      columnNumber: 37
    }
  }), " Acompanhamento em Grupo"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1017,
      columnNumber: 35
    }
  }, __jsx(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_17___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1018,
      columnNumber: 37
    }
  }), " V\xEDdeos Explicativos por Exerc\xEDcio"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1020,
      columnNumber: 35
    }
  }, __jsx(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_17___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1021,
      columnNumber: 37
    }
  }), " Master Classes Ao Vivo 1x/semana")))))))))))))))));
}

/***/ })

})
//# sourceMappingURL=checkout.js.34c4081ac2cc18e4b62a.hot-update.js.map