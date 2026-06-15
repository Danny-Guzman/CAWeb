/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/Card/edit.jsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModuleEdit: () => (/* binding */ ModuleEdit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@divi/module");
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("@divi/module-utils");
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/modules/Card/styles.jsx");
/* harmony import */ var _module_classnames_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/modules/Card/module-classnames.js");
/* harmony import */ var _module_script_data_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/modules/Card/module-script-data.jsx");
/* harmony import */ var _types_ts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/modules/Card/types.ts");
/* harmony import */ var _Utils_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/modules/Utils/index.js");
// External Dependencies.


// Divi Dependencies.



// Local Dependencies.






/**
 * Divi 5 Module edit component of visual builder.
 *
 * @since ??
 *
 * @param {CardModuleEditProps} props React component props.
 *
 * @returns {ReactElement}
 */
const ModuleEdit = ({
  attrs,
  id,
  name,
  elements
}) => {
  // let title = getAttrByMode(attrs?.title?.innerContent);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_1__.ModuleContainer, {
    attrs: attrs,
    elements: elements,
    id: id,
    name: name,
    stylesComponent: _styles_jsx__WEBPACK_IMPORTED_MODULE_3__.ModuleStyles,
    classnamesFunction: _module_classnames_js__WEBPACK_IMPORTED_MODULE_4__.moduleClassnames,
    scriptDataComponent: _module_script_data_jsx__WEBPACK_IMPORTED_MODULE_5__.ModuleScriptData
  }, elements.styleComponents({
    attrName: 'module'
  }), elements.render({
    attrName: 'content'
  }));
};


/***/ },

/***/ "./src/modules/Card/module-script-data.jsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModuleScriptData: () => (/* binding */ ModuleScriptData)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@divi/module");
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _types_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/modules/Card/types.ts");




/**
 * Divi 5 module's script data component.
 *
 * @since ??
 *
 * @param {ModuleScriptDataProps<ModuleAttrs>} props React component props.
 *
 * @returns {ReactElement}
 */
const ModuleScriptData = ({
  elements
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, elements.scriptData({
  attrName: 'module'
}));

/***/ },

/***/ "./src/modules/Card/styles.jsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModuleStyles: () => (/* binding */ ModuleStyles)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@divi/module");
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _types_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/modules/Card/types.ts");
/* harmony import */ var _custom_css_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/modules/Card/custom-css.js");
// External dependencies.


// Divi dependencies.


// Local dependencies.



/**
 * Module's style components.
 *
 * @since ??
 */
const ModuleStyles = ({
  attrs,
  settings,
  orderClass,
  mode,
  state,
  noStyleTag,
  elements
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_1__.StyleContainer, {
    mode: mode,
    state: state,
    noStyleTag: noStyleTag
  }, elements.style({
    attrName: 'module',
    styleProps: {
      disabledOn: {
        disabledModuleVisibility: settings?.disabledModuleVisibility
      }
    }
  }), elements.style({
    attrName: 'title'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_1__.CssStyle, {
    selector: orderClass,
    attr: attrs?.css,
    cssFields: _custom_css_js__WEBPACK_IMPORTED_MODULE_3__.cssFields
  }));
};


/***/ },

/***/ "./src/modules/Github/edit.jsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModuleEdit: () => (/* binding */ ModuleEdit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@divi/module");
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("@divi/module-utils");
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _types_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/modules/Github/types.ts");
/* harmony import */ var _styles_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/modules/Github/styles.jsx");
/* harmony import */ var _module_classnames_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/modules/Github/module-classnames.js");
/* harmony import */ var _module_script_data_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/modules/Github/module-script-data.jsx");
// External Dependencies.


// Divi Dependencies.



// Local Dependencies.





/**
 * Divi 5 Module edit component of visual builder.
 *
 * @since ??
 *
 * @param {GithubModuleEditProps} props React component props.
 *
 * @returns {ReactElement}
 */
const ModuleEdit = props => {
  const {
    attrs,
    id,
    name,
    elements
  } = props;
  let title = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__.getAttrByMode)(attrs?.title?.innerContent);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_1__.ModuleContainer, {
    attrs: attrs,
    elements: elements,
    id: id,
    name: name,
    stylesComponent: _styles_jsx__WEBPACK_IMPORTED_MODULE_4__.ModuleStyles,
    classnamesFunction: _module_classnames_js__WEBPACK_IMPORTED_MODULE_5__.moduleClassnames,
    scriptDataComponent: _module_script_data_jsx__WEBPACK_IMPORTED_MODULE_6__.ModuleScriptData
  }, elements.styleComponents({
    attrName: 'module'
  }), elements.render({
    attrName: 'title'
  }));
};


/***/ },

/***/ "./src/modules/Github/module-script-data.jsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModuleScriptData: () => (/* binding */ ModuleScriptData)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@divi/module");
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/modules/Github/types.ts");




/**
 * Divi 5 module's script data component.
 *
 * @since ??
 *
 * @param {ModuleScriptDataProps<ModuleAttrs>} props React component props.
 *
 * @returns {ReactElement}
 */
const ModuleScriptData = ({
  elements
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, elements.scriptData({
  attrName: 'module'
}));

/***/ },

/***/ "./src/modules/Github/styles.jsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModuleStyles: () => (/* binding */ ModuleStyles)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@divi/module");
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _custom_css_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/modules/Github/custom-css.js");
// External dependencies.


// Divi dependencies.


// Local dependencies.


/**
 * Module's style components.
 *
 * @since ??
 */
const ModuleStyles = ({
  attrs,
  settings,
  orderClass,
  mode,
  state,
  noStyleTag,
  elements
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_1__.StyleContainer, {
    mode: mode,
    state: state,
    noStyleTag: noStyleTag
  }, elements.style({
    attrName: 'module',
    styleProps: {
      disabledOn: {
        disabledModuleVisibility: settings?.disabledModuleVisibility
      }
    }
  }), elements.style({
    attrName: 'title'
  }), elements.style({
    attrName: 'content'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_1__.CssStyle, {
    selector: orderClass,
    attr: attrs?.css,
    cssFields: _custom_css_js__WEBPACK_IMPORTED_MODULE_2__.cssFields
  }));
};


/***/ },

/***/ "./src/modules/Location/Settings/content.jsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsContent: () => (/* binding */ SettingsContent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("@divi/module");
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("@divi/module-utils");
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_divi_module_utils__WEBPACK_IMPORTED_MODULE_4__);
// External dependencies.



// WordPress dependencies


// Divi dependencies.



// Local dependencies.

const SettingsContent = ({
  attrs,
  defaultSettingsAttrs,
  groupConfiguration
}) => {
  let layout = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_4__.getAttrByMode)(attrs?.layout?.innerContent);
  let layoutDefault = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_4__.getAttrByMode)(defaultSettingsAttrs?.layout?.innerContent);
  let contact = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_4__.getAttrByMode)(attrs?.contact?.innerContent);
  let link = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_4__.getAttrByMode)(attrs?.link?.innerContent);
  layout = layout ?? layoutDefault;

  // Toggle Featured Image field visibility based on layout
  (0,lodash__WEBPACK_IMPORTED_MODULE_1__.set)(groupConfiguration, ['style', 'component', 'props', 'fields', 'src', 'render'], 'banner' === layout);

  // Toggle Description field visibility based on layout
  (0,lodash__WEBPACK_IMPORTED_MODULE_1__.set)(groupConfiguration, ['location', 'component', 'props', 'fields', 'descInnercontent', 'render'], 'banner' === layout);

  // Toggle Show Contact Button field visibility based on layout
  (0,lodash__WEBPACK_IMPORTED_MODULE_1__.set)(groupConfiguration, ['location', 'component', 'props', 'fields', 'showContact', 'render'], 'contact' === layout);

  // Toggle Phone/Fax fields visibility based on layout and Show Contact Button
  (0,lodash__WEBPACK_IMPORTED_MODULE_1__.set)(groupConfiguration, ['location', 'component', 'props', 'fields', 'phone', 'render'], 'contact' === layout && 'on' === contact?.show);
  (0,lodash__WEBPACK_IMPORTED_MODULE_1__.set)(groupConfiguration, ['location', 'component', 'props', 'fields', 'fax', 'render'], 'contact' === layout && 'on' === contact?.show);

  // Toggle Show Button field visibility based on layout
  (0,lodash__WEBPACK_IMPORTED_MODULE_1__.set)(groupConfiguration, ['location', 'component', 'props', 'fields', 'showLink', 'render'], 'mini' !== layout);

  // Toggle URL field visibility based on Show Button
  (0,lodash__WEBPACK_IMPORTED_MODULE_1__.set)(groupConfiguration, ['location', 'component', 'props', 'fields', 'url', 'render'], 'on' === link?.show);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_3__.ModuleGroups, {
    groups: groupConfiguration
  });
};

/***/ },

/***/ "./src/modules/Location/Settings/design.jsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsDesign: () => (/* binding */ SettingsDesign)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("@divi/module");
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("@divi/module-utils");
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_divi_module_utils__WEBPACK_IMPORTED_MODULE_4__);
// External dependencies.



// WordPress dependencies


// Divi dependencies.



// Local dependencies.

const SettingsDesign = ({
  attrs,
  defaultSettingsAttrs,
  groupConfiguration
}) => {
  let layout = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_4__.getAttrByMode)(attrs?.layout?.innerContent);
  let layoutDefault = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_4__.getAttrByMode)(defaultSettingsAttrs?.layout?.innerContent);
  layout = layout ?? layoutDefault;

  // Toggle Icon Design group visibility based on layout
  (0,lodash__WEBPACK_IMPORTED_MODULE_1__.set)(groupConfiguration, ['icon', 'render'], 'banner' !== layout);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_3__.ModuleGroups, {
    groups: groupConfiguration
  });
};

/***/ },

/***/ "./src/modules/Location/edit.jsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModuleEdit: () => (/* binding */ ModuleEdit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@divi/module");
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("@divi/module-utils");
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/modules/Location/styles.jsx");
/* harmony import */ var _module_classnames_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/modules/Location/module-classnames.js");
/* harmony import */ var _module_script_data_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/modules/Location/module-script-data.jsx");
/* harmony import */ var _types_ts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/modules/Location/types.ts");
/* harmony import */ var _Utils_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/modules/Utils/index.js");
// External Dependencies.


// Divi Dependencies.



// Local Dependencies.






/**
 * Renders Location (contact)
 *
 * @return ReactElement
 */
const contactLocation = ({
  elements,
  address,
  contact,
  icon,
  link,
  name
}) => {
  // get a map link if address info exists
  let addressMapLink = (0,_Utils_index_js__WEBPACK_IMPORTED_MODULE_7__.get_google_map_place_link)([address?.addr, address?.city, address?.state, address?.zip]);

  // If displaying an icon
  let displayIcon = 'on' === icon?.show ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "thumbnail"
  }, (0,_Utils_index_js__WEBPACK_IMPORTED_MODULE_7__.get_icon_span)(icon?.icon)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null);

  // show contact info if enabled
  let displayOther = 'on' === contact?.show ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, ['' !== contact?.phone ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "General Information: ", contact?.phone) : null, '' !== contact?.fax ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "FAX: ", contact?.fax) : null]) : null;
  let linkElement = '' !== link?.url && 'on' === link?.show ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: link?.url,
    className: "btn btn-outline-dark",
    target: "_blank"
  }, "More") : null;

  // we combine all contact info elements here
  let contactInfo = "" !== name || null !== displayOther && displayOther?.props?.children || null !== addressMapLink || null !== linkElement && linkElement?.props?.children ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "contact"
  }, elements.render({
    'attrName': 'name'
  }), addressMapLink, displayOther, linkElement) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, contactInfo);
};

/**
 * Renders Location (mini)
 *
 * @return ReactElement
 */
const miniLocation = ({
  elements,
  address,
  icon,
  link,
  name
}) => {
  // get a map link if address info exists
  let addressMapLink = (0,_Utils_index_js__WEBPACK_IMPORTED_MODULE_7__.get_google_map_place_link)([address?.addr, address?.city, address?.state, address?.zip]);

  // If displaying an icon
  let displayIcon = 'on' === icon?.show ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "thumbnail"
  }, (0,_Utils_index_js__WEBPACK_IMPORTED_MODULE_7__.get_icon_span)(icon?.icon)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null);

  // we wrap the name in a link if a link url is provided
  let nameElement = '' !== name ? '' !== link?.url ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: link?.url,
    target: "_blank"
  }, name) : elements.render({
    'attrName': 'name'
  }) : null;

  // we combine all contact info elements here
  let contactInfo = '' !== name || null !== addressMapLink ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "contact"
  }, nameElement, addressMapLink) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, contactInfo);
};

/**
 * Renders Location (banner)
 *
 * @return ReactElement
 */
const bannerLocation = ({
  elements,
  address,
  link,
  name,
  image,
  desc
}) => {
  let imageElement = '' !== image?.src ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "thumbnail"
  }, elements.render({
    attrName: 'image'
  })) : null;

  // get a map link if address info exists
  let addressMapLink = (0,_Utils_index_js__WEBPACK_IMPORTED_MODULE_7__.get_google_map_place_link)([address?.addr, address?.city, address?.state, address?.zip]);

  // Add description markup
  let descElement = '' !== desc ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "Description:"), elements.render({
    attrName: 'desc'
  })) : null;
  let linkElement = '' !== link?.url && 'on' === link?.show ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: link?.url,
    target: "_blank",
    className: "btn btn-outline-dark"
  }, "View More Details") : null;

  // we combine all contact info elements here
  let contactInfo = "" !== name || null !== addressMapLink ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "contact"
  }, elements.render({
    'attrName': 'name'
  }), addressMapLink ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "address"
  }, (0,_Utils_index_js__WEBPACK_IMPORTED_MODULE_7__.get_icon_span)('road-pin'), addressMapLink) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null);

  // we combine all summary info elements here
  let summaryInfo = "" !== desc || null !== linkElement ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "summary"
  }, descElement, linkElement) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, imageElement, contactInfo, summaryInfo);
};

/**
 * Divi 5 Module edit component of visual builder.
 *
 * @since ??
 *
 * @param {LocationModuleEditProps} props React component props.
 *
 * @returns {ReactElement}
 */
const ModuleEdit = ({
  attrs,
  id,
  name,
  elements
}) => {
  let layout = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__.getAttrByMode)(attrs?.layout?.innerContent);
  let address = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__.getAttrByMode)(attrs?.address?.innerContent);
  let contact = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__.getAttrByMode)(attrs?.contact?.innerContent);
  let icon = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__.getAttrByMode)(attrs?.icon?.innerContent);
  let link = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__.getAttrByMode)(attrs?.link?.innerContent);
  let locationName = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__.getAttrByMode)(attrs?.name?.innerContent);
  let image = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__.getAttrByMode)(attrs?.image?.innerContent);
  let desc = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__.getAttrByMode)(attrs?.desc?.innerContent);
  let output = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null);
  switch (layout) {
    case 'mini':
      output = miniLocation({
        elements,
        address,
        icon,
        link,
        name: locationName
      });
      break;
    case 'banner':
      output = bannerLocation({
        elements,
        address,
        image,
        link,
        desc,
        name: locationName
      });
      break;
    case 'contact':
    default:
      output = contactLocation({
        elements,
        address,
        contact,
        icon,
        link,
        name: locationName
      });
      break;
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_1__.ModuleContainer, {
    attrs: attrs,
    elements: elements,
    id: id,
    name: name,
    stylesComponent: _styles_jsx__WEBPACK_IMPORTED_MODULE_3__.ModuleStyles,
    classnamesFunction: _module_classnames_js__WEBPACK_IMPORTED_MODULE_4__.moduleClassnames,
    scriptDataComponent: _module_script_data_jsx__WEBPACK_IMPORTED_MODULE_5__.ModuleScriptData
  }, elements.styleComponents({
    attrName: 'module'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: `location ${layout}`
  }, output));
};


/***/ },

/***/ "./src/modules/Location/module-script-data.jsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModuleScriptData: () => (/* binding */ ModuleScriptData)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@divi/module");
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _types_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/modules/Location/types.ts");




/**
 * Divi 5 module's script data component.
 *
 * @since ??
 *
 * @param {ModuleScriptDataProps<ModuleAttrs>} props React component props.
 *
 * @returns {ReactElement}
 */
const ModuleScriptData = ({
  elements
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, elements.scriptData({
  attrName: 'module'
}));

/***/ },

/***/ "./src/modules/Location/styles.jsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModuleStyles: () => (/* binding */ ModuleStyles)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@divi/module");
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _custom_css_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/modules/Location/custom-css.js");
// External dependencies.


// Divi dependencies.


// Local dependencies.


/**
 * Module's style components.
 *
 * @since ??
 */
const ModuleStyles = ({
  attrs,
  settings,
  orderClass,
  mode,
  state,
  noStyleTag,
  elements
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_1__.StyleContainer, {
    mode: mode,
    state: state,
    noStyleTag: noStyleTag
  }, elements.style({
    attrName: 'module',
    styleProps: {
      disabledOn: {
        disabledModuleVisibility: settings?.disabledModuleVisibility
      }
    }
  }), elements.style({
    attrName: 'title'
  }), elements.style({
    attrName: 'content'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_1__.CssStyle, {
    selector: orderClass,
    attr: attrs?.css,
    cssFields: _custom_css_js__WEBPACK_IMPORTED_MODULE_2__.cssFields
  }));
};


/***/ },

/***/ "./src/modules/ProfileBanner/edit.jsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModuleEdit: () => (/* binding */ ModuleEdit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@divi/module");
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("@divi/module-utils");
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/modules/ProfileBanner/types.ts");
/* harmony import */ var _styles_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/modules/ProfileBanner/styles.jsx");
/* harmony import */ var _module_classnames_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/modules/ProfileBanner/module-classnames.js");
/* harmony import */ var _module_script_data_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/modules/ProfileBanner/module-script-data.jsx");
// External Dependencies.


// Divi Dependencies.



// Local Dependencies.





/**
 * Divi 5 Module edit component of visual builder.
 *
 * @since ??
 *
 * @param {ProfileBannerModuleEditProps} props React component props.
 *
 * @returns {ReactElement}
 */
const ModuleEdit = props => {
  const {
    attrs,
    id,
    name,
    elements
  } = props;
  let profile = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__.getAttrByMode)(attrs?.profile?.innerContent);
  let portrait = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__.getAttrByMode)(attrs?.portrait?.advanced);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_1__.ModuleContainer, {
    attrs: attrs,
    elements: elements,
    id: id,
    name: name,
    stylesComponent: _styles_jsx__WEBPACK_IMPORTED_MODULE_4__.ModuleStyles,
    classnamesFunction: _module_classnames_js__WEBPACK_IMPORTED_MODULE_5__.moduleClassnames,
    scriptDataComponent: _module_script_data_jsx__WEBPACK_IMPORTED_MODULE_6__.ModuleScriptData
  }, elements.styleComponents({
    attrName: 'module'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("figure", {
    className: `executive-profile${"on" === portrait?.vertical ? ' vertical' : ''}`
  }, elements.render({
    attrName: 'portrait',
    attrSubName: 'src',
    className: `${"on" === portrait?.rounded ? 'rounded-circle' : ''}` // rounded image
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "body"
  }, elements.render({
    attrName: 'name'
  }), elements.render({
    attrName: 'job'
  }), profile?.text && profile?.url ? elements.render({
    attrName: 'profile',
    attrSubName: 'text',
    htmlAttributes: {
      href: profile?.url
    }
  }) : '')));
};


/***/ },

/***/ "./src/modules/ProfileBanner/module-script-data.jsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModuleScriptData: () => (/* binding */ ModuleScriptData)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@divi/module");
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/modules/ProfileBanner/types.ts");




/**
 * Divi 5 module's script data component.
 *
 * @since ??
 *
 * @param {ModuleScriptDataProps<ModuleAttrs>} props React component props.
 *
 * @returns {ReactElement}
 */
const ModuleScriptData = ({
  elements
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, elements.scriptData({
  attrName: 'module'
}));

/***/ },

/***/ "./src/modules/ProfileBanner/styles.jsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModuleStyles: () => (/* binding */ ModuleStyles)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@divi/module");
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _custom_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/modules/ProfileBanner/custom-css.js");
// External dependencies.


// Divi dependencies.


// Local dependencies.


/**
 * Module's style components.
 *
 * @since ??
 */
const ModuleStyles = ({
  attrs,
  settings,
  orderClass,
  mode,
  state,
  noStyleTag,
  elements
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_1__.StyleContainer, {
    mode: mode,
    state: state,
    noStyleTag: noStyleTag
  }, elements.style({
    attrName: 'module',
    styleProps: {
      disabledOn: {
        disabledModuleVisibility: settings?.disabledModuleVisibility
      }
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_1__.TextStyle, {
    selector: `${orderClass} .example_d4_module_inner`,
    attr: attrs?.module?.advanced?.text
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_1__.CommonStyle, {
    selector: `${orderClass} .example_d4_module_inner`,
    attr: attrs?.module?.decoration?.background,
    declarationFunction: ({
      attrValue
    }) => {
      if ('on' === attrValue?.image?.parallax?.enabled) {
        return 'position: relative;';
      }
      return '';
    }
  }), elements.style({
    attrName: 'title'
  }), elements.style({
    attrName: 'content'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_1__.CssStyle, {
    selector: orderClass,
    attr: attrs?.css,
    cssFields: _custom_css__WEBPACK_IMPORTED_MODULE_2__.cssFields
  }));
};


/***/ },

/***/ "./src/modules/SectionPrimary/Settings/content.jsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsContent: () => (/* binding */ SettingsContent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("@divi/module");
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("@divi/module-utils");
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_divi_module_utils__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/modules/SectionPrimary/types.ts");
// External dependencies.



// WordPress dependencies


// Divi dependencies.



// Local dependencies.

const SettingsContent = ({
  attrs,
  defaultSettingsAttrs,
  groupConfiguration
}) => {
  let image = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_4__.getAttrByMode)(attrs?.image?.innerContent);
  let link = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_4__.getAttrByMode)(attrs?.link?.innerContent);

  // Toggle Featured Image Image Position, Fade From Left and Src field visibility based on if show image is on
  (0,lodash__WEBPACK_IMPORTED_MODULE_1__.set)(groupConfiguration, ['body', 'component', 'props', 'fields', 'position', 'render'], 'off' !== image?.show);
  (0,lodash__WEBPACK_IMPORTED_MODULE_1__.set)(groupConfiguration, ['body', 'component', 'props', 'fields', 'fade', 'render'], 'off' !== image?.show);
  (0,lodash__WEBPACK_IMPORTED_MODULE_1__.set)(groupConfiguration, ['body', 'component', 'props', 'fields', 'src', 'render'], 'off' !== image?.show);

  // Toggle Link URL field visibility based on if show more button is on
  (0,lodash__WEBPACK_IMPORTED_MODULE_1__.set)(groupConfiguration, ['body', 'component', 'props', 'fields', 'url', 'render'], 'off' !== link?.show);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_3__.ModuleGroups, {
    groups: groupConfiguration
  });
};

/***/ },

/***/ "./src/modules/SectionPrimary/edit.jsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModuleEdit: () => (/* binding */ ModuleEdit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@divi/module");
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("@divi/module-utils");
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _types_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/modules/SectionPrimary/types.ts");
/* harmony import */ var _styles_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/modules/SectionPrimary/styles.jsx");
/* harmony import */ var _module_classnames_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/modules/SectionPrimary/module-classnames.js");
/* harmony import */ var _module_script_data_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/modules/SectionPrimary/module-script-data.jsx");
/* harmony import */ var _Utils_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/modules/Utils/index.js");
// External Dependencies.


// Divi Dependencies.



// Local Dependencies.






/**
 * Renders the Header
 *
 * @param {{
 *       text?: string;
 *       color?: string;
 *       alignment?: 'start' | 'center' | 'end';
 *       level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
 * }} props 
 * @returns {ReactElement} 
 */
const renderHeader = ({
  text,
  color,
  alignment,
  level
}) => {
  let style = {};
  if (color) {
    style = Object.assign(style, (0,_Utils_index_js__WEBPACK_IMPORTED_MODULE_7__.processColorPickerValue)(color));
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Tag, {
    className: `text-${alignment}`,
    style: style
  }, text);
};

/**
 * Renders the Featured Image
 *
 * @param {{
 *     elements?: Module.ModuleElements,
 *     image?: {
 *       src?: string,
 *       alt?: string,
 *       title?: string,
 *       show?: string,
 *       alignment?: string,
 *       fade?: string
 *     }
 * }} props 
 * @returns {ReactElement} 
 */
const renderImage = ({
  elements,
  image: {
    src,
    alt,
    title,
    show,
    alignment,
    fade
  }
}) => {
  if ('off' === image?.show) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null);
  }
  let classes = 'col-4';
  classes += 'on' === image?.alignment ? ' ps-3 float-end' : ' pe-3 float-start';
  classes += 'on' === image?.fade ? ' animate__animated  animate__fadeInLeft' : '';
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: classes
  }, elements.render({
    attrName: 'image'
  }));
};

/**
 * Renders the More Button
 *
 * @param {{
 *     text?: string;
 *     link?: {
 *       url?: string;
 *       show?: string;
 *     }
 * }} props 
 * @returns {ReactElement} 
 */
const renderButton = ({
  text,
  link: {
    url,
    show
  }
}) => {
  if (!link || 'off' === link?.show || !link?.url) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null);
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: link?.url,
    className: "btn btn-outline-dark",
    target: "_blank"
  }, "More Information", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "sr-only"
  }, "More information about ", text, " ")));
};

/**
 * Divi 5 Module edit component of visual builder.
 *
 * @since ??
 *
 * @param {SectionPrimaryModuleEditProps} props React component props.
 *
 * @returns {ReactElement}
 */
const ModuleEdit = props => {
  const {
    attrs,
    id,
    name,
    elements
  } = props;
  let title = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__.getAttrByMode)(attrs?.title?.innerContent);
  let image = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__.getAttrByMode)(attrs?.image?.innerContent);
  let link = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__.getAttrByMode)(attrs?.link?.innerContent);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_1__.ModuleContainer, {
    attrs: attrs,
    elements: elements,
    id: id,
    name: name,
    stylesComponent: _styles_jsx__WEBPACK_IMPORTED_MODULE_4__.ModuleStyles,
    classnamesFunction: _module_classnames_js__WEBPACK_IMPORTED_MODULE_5__.moduleClassnames,
    scriptDataComponent: _module_script_data_jsx__WEBPACK_IMPORTED_MODULE_6__.ModuleScriptData
  }, elements.styleComponents({
    attrName: 'module'
  }), renderImage({
    elements,
    image
  }), renderHeader(title), elements.render({
    attrName: 'content'
  }), renderButton({
    text: title?.text,
    link
  }));
};


/***/ },

/***/ "./src/modules/SectionPrimary/module-script-data.jsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModuleScriptData: () => (/* binding */ ModuleScriptData)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@divi/module");
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/modules/SectionPrimary/types.ts");




/**
 * Divi 5 module's script data component.
 *
 * @since ??
 *
 * @param {ModuleScriptDataProps<ModuleAttrs>} props React component props.
 *
 * @returns {ReactElement}
 */
const ModuleScriptData = ({
  elements
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, elements.scriptData({
  attrName: 'module'
}));

/***/ },

/***/ "./src/modules/SectionPrimary/styles.jsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModuleStyles: () => (/* binding */ ModuleStyles)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@divi/module");
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _custom_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/modules/SectionPrimary/custom-css.js");
// External dependencies.


// Divi dependencies.


// Local dependencies.


/**
 * Module's style components.
 *
 * @since ??
 */
const ModuleStyles = ({
  attrs,
  settings,
  orderClass,
  mode,
  state,
  noStyleTag,
  elements
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_1__.StyleContainer, {
    mode: mode,
    state: state,
    noStyleTag: noStyleTag
  }, elements.style({
    attrName: 'module',
    styleProps: {
      disabledOn: {
        disabledModuleVisibility: settings?.disabledModuleVisibility
      }
    }
  }), elements.style({
    attrName: 'title'
  }), elements.style({
    attrName: 'content'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_1__.CssStyle, {
    selector: orderClass,
    attr: attrs?.css,
    cssFields: _custom_css__WEBPACK_IMPORTED_MODULE_2__.cssFields
  }));
};


/***/ },

/***/ "./src/modules/Utils/Module.jsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   get_address: () => (/* binding */ get_address),
/* harmony export */   get_google_map_place_link: () => (/* binding */ get_google_map_place_link),
/* harmony export */   get_icon_span: () => (/* binding */ get_icon_span),
/* harmony export */   processColorPickerValue: () => (/* binding */ processColorPickerValue)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
// External Dependencies.



/**
 * Process Divi Color Picker Value
 *
 * @param  string $color Color value from color picker.
 * @return string
 */
const processColorPickerValue = color => {
  let colorProp = {
    color
  };
  if (color.startsWith('$variable(') && color.endsWith(')$')) {
    try {
      let colorString = color.slice(10, -2);
      let colorObj = JSON.parse(colorString);

      // if object is a color type
      if ('color' === colorObj?.type) {
        // if opacity has been set
        if (colorObj?.value?.settings?.opacity) {
          // divide the opacity by 100
          colorObj.value.settings.opacity = colorObj.value.settings.opacity / 100;
        }

        // add color and any settings to the CSSProperty
        colorProp = {
          color: `var(--${colorObj?.value?.name})`,
          ...colorObj.value.settings
        };
      }
    } catch (e) {
      // color isn't valid JSON
    }
  }
  return colorProp;
};

/**
 * Returns address in CSV format
 *
 * @param  array|address $addr Address to format.
 * @return string
 */
const get_address = address => {
  if ("" === address || address.length === 0) {
    return;
  } else if ('string' === typeof address) {
    address = address.split(',');
  }
  return address.map(part => part?.trim()).filter(Boolean).join(', ');
};

/**
 * Create a GoogleMap Place Link/Embedded IFrame
 *
 * @param  array|string $addr Address to format.
 * @param  mixed        $embed Whether to create a link or embedded iframe.
 * @param  mixed        $target The links target, default _blank.
 * @param  mixed        $classes Class for the link.
 * @return string
 */
const get_google_map_place_link = (address, embed = false, target = '_blank', classes = '') => {
  let addr = get_address(address);
  if (!addr) {
    return null;
  }
  if (embed) {
    let map_url = `https://www.google.com/maps/embed/v1/place?q=${addr}&zoom=10&key=key`;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("iframe", {
      title: `IFrame for Address ${addr}`,
      src: map_url
    });
  } else {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("a", {
      href: `https://www.google.com/maps/place/${addr}`,
      target: target,
      className: classes
    }, addr);
  }
};

/**
 * Create icon span
 *
 * @param  string $icon Icon to render.
 * @param  string $classes Classes for the span.
 * @param  string $styles Styles for the span.
 * @return string
 */
const get_icon_span = icon => {
  if ("" === icon) {
    return;
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
    className: `ca-gov-icon-${icon}`
  });
};


/***/ },

/***/ "./src/modules/Card/conversion-outline.ts"
(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.conversionOutline = void 0;
// Compare this to wp.data.select('divi/settings').getSetting('shortcodeModuleDefinitions').et_pb_blurb.fields
exports.conversionOutline = {
  advanced: {
    admin_label: 'module.meta.adminLabel',
    animation: 'module.decoration.animation',
    background: 'module.decoration.background',
    borders: {
      default: 'module.decoration.border'
    },
    box_shadow: {
      default: 'module.decoration.boxShadow'
    },
    disabled_on: 'module.decoration.disabledOn',
    filters: {
      default: 'module.decoration.filters'
    },
    fonts: {
      body: 'content.decoration.bodyFont.body',
      body_link: 'content.decoration.bodyFont.link',
      body_ol: 'content.decoration.bodyFont.ol',
      body_quote: 'content.decoration.bodyFont.quote',
      body_ul: 'content.decoration.bodyFont.ul',
      header: 'title.decoration.font'
    },
    height: 'module.decoration.sizing',
    link_options: 'module.advanced.link',
    margin_padding: 'module.decoration.spacing',
    max_width: 'module.decoration.sizing',
    module: 'module.advanced.htmlAttributes',
    overflow: 'module.decoration.overflow',
    position_fields: 'module.decoration.position',
    scroll: 'module.decoration.scroll',
    sticky: 'module.decoration.sticky',
    text: 'module.advanced.text',
    text_shadow: {
      default: 'module.advanced.text.textShadow'
    },
    transform: 'module.decoration.transform',
    transition: 'module.decoration.transition',
    z_index: 'module.decoration.zIndex'
  },
  css: {
    after: 'css.*.after',
    before: 'css.*.before',
    main_element: 'css.*.mainElement',
    content: 'css.*.content',
    title: 'css.*.title'
  },
  module: {
    card_layout: 'layout.innerContent.*',
    card_color: 'layout.cardColor.*',
    show_image: 'image.show.*',
    featured_image: 'image.innerContent.*.src',
    include_header: 'title.show.*',
    title: 'title.innerContent.*',
    heading_size: 'title.headingSize.*',
    text_color: 'title.color.*',
    content: 'content.innerContent.*',
    show_button: 'button.show.*',
    button_text: 'button.innerContent.*.text',
    button_link: 'button.innerContent.*.linkUrl',
    include_footer: 'footer.show.*',
    footer_text: 'footer.innerContent.*',
    footer_color: 'footer.color.*'
  }
};

/***/ },

/***/ "./src/modules/Card/types.ts"
(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ },

/***/ "./src/modules/Github/conversion-outline.ts"
(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.conversionOutline = void 0;
// Compare this to wp.data.select('divi/settings').getSetting('shortcodeModuleDefinitions').et_pb_blurb.fields
exports.conversionOutline = {
  advanced: {
    admin_label: 'module.meta.adminLabel',
    animation: 'module.decoration.animation',
    background: 'module.decoration.background',
    borders: {
      default: 'module.decoration.border'
    },
    box_shadow: {
      default: 'module.decoration.boxShadow'
    },
    disabled_on: 'module.decoration.disabledOn',
    filters: {
      default: 'module.decoration.filters'
    },
    fonts: {
      body: 'content.decoration.bodyFont.body',
      body_link: 'content.decoration.bodyFont.link',
      body_ol: 'content.decoration.bodyFont.ol',
      body_quote: 'content.decoration.bodyFont.quote',
      body_ul: 'content.decoration.bodyFont.ul',
      header: 'title.decoration.font'
    },
    height: 'module.decoration.sizing',
    link_options: 'module.advanced.link',
    margin_padding: 'module.decoration.spacing',
    max_width: 'module.decoration.sizing',
    module: 'module.advanced.htmlAttributes',
    overflow: 'module.decoration.overflow',
    position_fields: 'module.decoration.position',
    scroll: 'module.decoration.scroll',
    sticky: 'module.decoration.sticky',
    text: 'module.advanced.text',
    text_shadow: {
      default: 'module.advanced.text.textShadow'
    },
    transform: 'module.decoration.transform',
    transition: 'module.decoration.transition',
    z_index: 'module.decoration.zIndex'
  },
  css: {
    after: 'css.*.after',
    before: 'css.*.before',
    main_element: 'css.*.mainElement',
    content: 'css.*.content',
    title: 'css.*.title'
  },
  module: {
    title: 'title.innerContent.*.text',
    title_size: 'title.innerContent.*.level',
    per_page: 'request.innerContent.*.per_page',
    repo_type: 'request.innerContent.*.repo_type',
    access_token: 'request.innerContent.*.access_token',
    username: 'request.innerContent.*.username',
    increase_rate_limit: 'request.innerContent.*.rate_limit',
    client_id: 'request.innerContent.*.client_id',
    client_secret: 'request.innerContent.*.client_secret',
    request_email: 'request.innerContent.*.email',
    email_body: 'request.innerContent.*.email_body',
    definitions: 'definition.innerContent.*'
  }
};

/***/ },

/***/ "./src/modules/Github/types.ts"
(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ },

/***/ "./src/modules/Location/conversion-outline.ts"
(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.conversionOutline = void 0;
// Compare this to wp.data.select('divi/settings').getSetting('shortcodeModuleDefinitions').et_pb_blurb.fields
exports.conversionOutline = {
  advanced: {
    admin_label: 'module.meta.adminLabel',
    animation: 'module.decoration.animation',
    background: 'module.decoration.background',
    borders: {
      default: 'module.decoration.border'
    },
    box_shadow: {
      default: 'module.decoration.boxShadow'
    },
    disabled_on: 'module.decoration.disabledOn',
    filters: {
      default: 'module.decoration.filters'
    },
    fonts: {
      body: 'content.decoration.bodyFont.body',
      body_link: 'content.decoration.bodyFont.link',
      body_ol: 'content.decoration.bodyFont.ol',
      body_quote: 'content.decoration.bodyFont.quote',
      body_ul: 'content.decoration.bodyFont.ul',
      header: 'title.decoration.font'
    },
    height: 'module.decoration.sizing',
    link_options: 'module.advanced.link',
    margin_padding: 'module.decoration.spacing',
    max_width: 'module.decoration.sizing',
    module: 'module.advanced.htmlAttributes',
    overflow: 'module.decoration.overflow',
    position_fields: 'module.decoration.position',
    scroll: 'module.decoration.scroll',
    sticky: 'module.decoration.sticky',
    text: 'module.advanced.text',
    text_shadow: {
      default: 'module.advanced.text.textShadow'
    },
    transform: 'module.decoration.transform',
    transition: 'module.decoration.transition',
    z_index: 'module.decoration.zIndex'
  },
  css: {
    after: 'css.*.after',
    before: 'css.*.before',
    main_element: 'css.*.mainElement',
    content: 'css.*.content',
    title: 'css.*.title'
  },
  module: {
    location_layout: 'layout.innerContent.*',
    name: 'name.innerContent.*',
    desc: 'desc.innerContent.*',
    addr: 'address.innerContent.*.addr',
    city: 'address.innerContent.*.city',
    state: 'address.innerContent.*.state',
    zip: 'address.innerContent.*.zip',
    show_contact: 'contact.innerContent.*.show',
    phone: 'contact.innerContent.*.phone',
    fax: 'contact.innerContent.*.fax',
    show_button: 'link.innerContent.*.show',
    location_link: 'link.innerContent.*.url',
    show_icon: 'icon.innerContent.*.show',
    font_icon: 'icon.innerContent.*.unicode',
    featured_image: 'image.innerContent.*.src'
  }
};

/***/ },

/***/ "./src/modules/Location/types.ts"
(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ },

/***/ "./src/modules/ProfileBanner/conversion-outline.ts"
(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.conversionOutline = void 0;
// Compare this to wp.data.select('divi/settings').getSetting('shortcodeModuleDefinitions').et_pb_blurb.fields
exports.conversionOutline = {
  advanced: {
    admin_label: 'module.meta.adminLabel',
    animation: 'module.decoration.animation',
    background: 'module.decoration.background',
    borders: {
      default: 'module.decoration.border'
    },
    box_shadow: {
      default: 'module.decoration.boxShadow'
    },
    disabled_on: 'module.decoration.disabledOn',
    filters: {
      default: 'module.decoration.filters'
    },
    fonts: {
      body: 'content.decoration.bodyFont.body',
      body_link: 'content.decoration.bodyFont.link',
      body_ol: 'content.decoration.bodyFont.ol',
      body_quote: 'content.decoration.bodyFont.quote',
      body_ul: 'content.decoration.bodyFont.ul',
      header: 'title.decoration.font'
    },
    height: 'module.decoration.sizing',
    link_options: 'module.advanced.link',
    margin_padding: 'module.decoration.spacing',
    max_width: 'module.decoration.sizing',
    module: 'module.advanced.htmlAttributes',
    overflow: 'module.decoration.overflow',
    position_fields: 'module.decoration.position',
    scroll: 'module.decoration.scroll',
    sticky: 'module.decoration.sticky',
    text: 'module.advanced.text',
    text_shadow: {
      default: 'module.advanced.text.textShadow'
    },
    transform: 'module.decoration.transform',
    transition: 'module.decoration.transition',
    z_index: 'module.decoration.zIndex'
  },
  css: {
    after: 'css.*.after',
    before: 'css.*.before',
    main_element: 'css.*.mainElement',
    content: 'css.*.content',
    title: 'css.*.title'
  },
  module: {
    name: 'name.innerContent.*',
    job_title: 'job.innerContent.*',
    profile_link: 'profile.text.*',
    url: 'profile.innerContent.*.url',
    portrait_url: 'portrait.innerContent.*.src',
    portrait_alt: 'portrait.innerContent.*.alt',
    round_image: 'portrait.rounded.*',
    is_vertical: 'portrait.vertical.*',
    module_text_shadow_horizontal_length: 'module.advanced.text.textShadow.*.horizontal',
    module_text_shadow_vertical_length: 'module.advanced.text.textShadow.*.vertical',
    module_text_shadow_blur_strength: 'module.advanced.text.textShadow.*.blur'
  },
  valueExpansionFunctionMap: {}
};

/***/ },

/***/ "./src/modules/ProfileBanner/types.ts"
(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ },

/***/ "./src/modules/SectionPrimary/conversion-outline.ts"
(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.conversionOutline = void 0;
// Compare this to wp.data.select('divi/settings').getSetting('shortcodeModuleDefinitions').et_pb_blurb.fields
exports.conversionOutline = {
  advanced: {
    admin_label: 'module.meta.adminLabel',
    animation: 'module.decoration.animation',
    background: 'module.decoration.background',
    borders: {
      default: 'module.decoration.border'
    },
    box_shadow: {
      default: 'module.decoration.boxShadow'
    },
    disabled_on: 'module.decoration.disabledOn',
    filters: {
      default: 'module.decoration.filters'
    },
    fonts: {
      body: 'content.decoration.bodyFont.body',
      body_link: 'content.decoration.bodyFont.link',
      body_ol: 'content.decoration.bodyFont.ol',
      body_quote: 'content.decoration.bodyFont.quote',
      body_ul: 'content.decoration.bodyFont.ul',
      header: 'title.decoration.font'
    },
    height: 'module.decoration.sizing',
    link_options: 'module.advanced.link',
    margin_padding: 'module.decoration.spacing',
    max_width: 'module.decoration.sizing',
    module: 'module.advanced.htmlAttributes',
    overflow: 'module.decoration.overflow',
    position_fields: 'module.decoration.position',
    scroll: 'module.decoration.scroll',
    sticky: 'module.decoration.sticky',
    text: 'module.advanced.text',
    text_shadow: {
      default: 'module.advanced.text.textShadow'
    },
    transform: 'module.decoration.transform',
    transition: 'module.decoration.transition',
    z_index: 'module.decoration.zIndex'
  },
  css: {
    after: 'css.*.after',
    before: 'css.*.before',
    main_element: 'css.*.mainElement',
    content: 'css.*.content',
    title: 'css.*.title'
  },
  module: {
    section_heading: 'title.innerContent.*.text',
    heading_text_color: 'title.innerContent.*.color',
    heading_align: 'title.innerContent.*.alignment',
    heading_size: 'title.innerContent.*.level',
    content: 'content.innerContent.*',
    section_background_color: 'module.decoration.background.*.color',
    show_more_button: 'link.innerContent.*.show',
    section_link: 'link.innerContent.*.url',
    featured_image_button: 'image.innerContent.*.show',
    left_right_button: 'image.innerContent.*.alignment',
    section_image: 'image.innerContent.*.src',
    slide_image_button: 'image.innerContent.*.fade',
    module_text_shadow_horizontal_length: 'module.advanced.text.textShadow.*.horizontal',
    module_text_shadow_vertical_length: 'module.advanced.text.textShadow.*.vertical',
    module_text_shadow_blur_strength: 'module.advanced.text.textShadow.*.blur'
  }
};

/***/ },

/***/ "./src/modules/SectionPrimary/types.ts"
(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ },

/***/ "react"
(module) {

module.exports = React;

/***/ },

/***/ "lodash"
(module) {

module.exports = lodash;

/***/ },

/***/ "@divi/module"
(module) {

module.exports = divi.module;

/***/ },

/***/ "@divi/module-library"
(module) {

module.exports = divi.moduleLibrary;

/***/ },

/***/ "@divi/module-utils"
(module) {

module.exports = divi.moduleUtils;

/***/ },

/***/ "@wordpress/hooks"
(module) {

module.exports = vendor.wp.hooks;

/***/ },

/***/ "@wordpress/i18n"
(module) {

module.exports = vendor.wp.i18n;

/***/ },

/***/ "./src/modules/Card/custom-css.js"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cssFields: () => (/* binding */ cssFields)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@wordpress/i18n");
/* harmony import */ var _module_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/modules/Card/module.json");
// WordPress dependencies.



// const customCssFields = metadata.customCssFields as Record<'name', { subName: string, selectorSuffix: string, label: string }>;

// customCssFields.name.label            = __('Name', 'd5-extension-example-modules');

const cssFields = {};
// export const cssFields = { ...customCssFields };

/***/ },

/***/ "./src/modules/Card/index.js"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CAWebModuleCard: () => (/* binding */ CAWebModuleCard),
/* harmony export */   CAWebModuleCardMetadata: () => (/* binding */ CAWebModuleCardMetadata)
/* harmony export */ });
/* harmony import */ var _module_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/modules/Card/module.json");
/* harmony import */ var _edit_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/modules/Card/edit.jsx");
/* harmony import */ var _placeholder_content_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/modules/Card/placeholder-content.js");
/* harmony import */ var _conversion_outline_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/modules/Card/conversion-outline.ts");
// Local dependencies.




// import { SettingsContent } from './Settings/content';

const CAWebModuleCardMetadata = _module_json__WEBPACK_IMPORTED_MODULE_0__;
const CAWebModuleCard = {
  placeholderContent: _placeholder_content_js__WEBPACK_IMPORTED_MODULE_2__.placeholderContent,
  conversionOutline: _conversion_outline_ts__WEBPACK_IMPORTED_MODULE_3__.conversionOutline,
  renderers: {
    edit: _edit_jsx__WEBPACK_IMPORTED_MODULE_1__.ModuleEdit
  },
  settings: {}
};

/***/ },

/***/ "./src/modules/Card/module-classnames.js"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   moduleClassnames: () => (/* binding */ moduleClassnames)
/* harmony export */ });
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@divi/module");
/* harmony import */ var _types_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/modules/Card/types.ts");



/**
 * Module classnames function for Dynamic Module.
 *
 * @since ??
 *
 * @param {ModuleClassnamesParams<ModuleAttrs>} param0 Function parameters.
 */
const moduleClassnames = ({
  classnamesInstance,
  attrs
}) => {
  // Text Options.
  classnamesInstance.add((0,_divi_module__WEBPACK_IMPORTED_MODULE_0__.textOptionsClassnames)(attrs?.module?.advanced?.text));
};

/***/ },

/***/ "./src/modules/Card/placeholder-content.js"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   placeholderContent: () => (/* binding */ placeholderContent)
/* harmony export */ });
const placeholderContent = {};

/***/ },

/***/ "./src/modules/FullwidthSectionPrimary/index.js"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CAWebModuleFullwidthSectionPrimary: () => (/* binding */ CAWebModuleFullwidthSectionPrimary),
/* harmony export */   CAWebModuleFullwidthSectionPrimaryMetadata: () => (/* binding */ CAWebModuleFullwidthSectionPrimaryMetadata)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@wordpress/i18n");
/* harmony import */ var _SectionPrimary_module_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/modules/SectionPrimary/module.json");
/* harmony import */ var _module_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/modules/FullwidthSectionPrimary/module.json");
/* harmony import */ var _SectionPrimary_edit_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/modules/SectionPrimary/edit.jsx");
/* harmony import */ var _SectionPrimary_placeholder_content_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/modules/SectionPrimary/placeholder-content.js");
/* harmony import */ var _SectionPrimary_conversion_outline_ts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/modules/SectionPrimary/conversion-outline.ts");
/* harmony import */ var _SectionPrimary_Settings_content_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/modules/SectionPrimary/Settings/content.jsx");
// WordPress dependencies.


// Local dependencies.



// Fullwidth Modules use everything from the standard modules





// Merged metadata 
const CAWebModuleFullwidthSectionPrimaryMetadata = {
  ..._SectionPrimary_module_json__WEBPACK_IMPORTED_MODULE_1__,
  ..._module_json__WEBPACK_IMPORTED_MODULE_2__
};
const CAWebModuleFullwidthSectionPrimary = {
  placeholderContent: _SectionPrimary_placeholder_content_js__WEBPACK_IMPORTED_MODULE_4__.placeholderContent,
  conversionOutline: _SectionPrimary_conversion_outline_ts__WEBPACK_IMPORTED_MODULE_5__.conversionOutline,
  renderers: {
    edit: _SectionPrimary_edit_jsx__WEBPACK_IMPORTED_MODULE_3__.ModuleEdit
  },
  settings: {
    content: _SectionPrimary_Settings_content_jsx__WEBPACK_IMPORTED_MODULE_6__.SettingsContent
  }
};

/***/ },

/***/ "./src/modules/Github/custom-css.js"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cssFields: () => (/* binding */ cssFields)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@wordpress/i18n");
/* harmony import */ var _module_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/modules/Github/module.json");
// WordPress dependencies.



// const customCssFields = metadata.customCssFields as Record<'name', { subName: string, selectorSuffix: string, label: string }>;

// customCssFields.name.label            = __('Name', 'd5-extension-example-modules');

const cssFields = {};
// export const cssFields = { ...customCssFields };

/***/ },

/***/ "./src/modules/Github/index.js"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CAWebModuleGithub: () => (/* binding */ CAWebModuleGithub),
/* harmony export */   CAWebModuleGithubMetadata: () => (/* binding */ CAWebModuleGithubMetadata)
/* harmony export */ });
/* harmony import */ var _module_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/modules/Github/module.json");
/* harmony import */ var _edit_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/modules/Github/edit.jsx");
/* harmony import */ var _placeholder_content_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/modules/Github/placeholder-content.js");
/* harmony import */ var _conversion_outline_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/modules/Github/conversion-outline.ts");
// WordPress dependencies.
// import { __ } from '@wordpress/i18n';

// Local dependencies.




const CAWebModuleGithubMetadata = _module_json__WEBPACK_IMPORTED_MODULE_0__;
const CAWebModuleGithub = {
  placeholderContent: _placeholder_content_js__WEBPACK_IMPORTED_MODULE_2__.placeholderContent,
  conversionOutline: _conversion_outline_ts__WEBPACK_IMPORTED_MODULE_3__.conversionOutline,
  renderers: {
    edit: _edit_jsx__WEBPACK_IMPORTED_MODULE_1__.ModuleEdit
  }
};

/***/ },

/***/ "./src/modules/Github/module-classnames.js"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   moduleClassnames: () => (/* binding */ moduleClassnames)
/* harmony export */ });
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@divi/module");
/* harmony import */ var _types_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/modules/Github/types.ts");



/**
 * Module classnames function for Dynamic Module.
 *
 * @since ??
 *
 * @param {ModuleClassnamesParams<ModuleAttrs>} param0 Function parameters.
 */
const moduleClassnames = ({
  classnamesInstance,
  attrs
}) => {
  // Text Options.
  classnamesInstance.add((0,_divi_module__WEBPACK_IMPORTED_MODULE_0__.textOptionsClassnames)(attrs?.module?.advanced?.text));
};

/***/ },

/***/ "./src/modules/Github/placeholder-content.js"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   placeholderContent: () => (/* binding */ placeholderContent)
/* harmony export */ });
// Divi dependencies.
// import { placeholderContent as placeholder } from '@divi/module-utils';

// Local dependencies.

const placeholderContent = {};

/***/ },

/***/ "./src/modules/Location/custom-css.js"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cssFields: () => (/* binding */ cssFields)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@wordpress/i18n");
/* harmony import */ var _module_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/modules/Location/module.json");
// WordPress dependencies.



// const customCssFields = metadata.customCssFields as Record<'name', { subName: string, selectorSuffix: string, label: string }>;

// customCssFields.name.label            = __('Name', 'd5-extension-example-modules');

const cssFields = {};
// export const cssFields = { ...customCssFields };

/***/ },

/***/ "./src/modules/Location/index.js"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CAWebModuleLocation: () => (/* binding */ CAWebModuleLocation),
/* harmony export */   CAWebModuleLocationMetadata: () => (/* binding */ CAWebModuleLocationMetadata)
/* harmony export */ });
/* harmony import */ var _module_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/modules/Location/module.json");
/* harmony import */ var _edit_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/modules/Location/edit.jsx");
/* harmony import */ var _placeholder_content_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/modules/Location/placeholder-content.js");
/* harmony import */ var _conversion_outline_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/modules/Location/conversion-outline.ts");
/* harmony import */ var _Settings_content_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/modules/Location/Settings/content.jsx");
/* harmony import */ var _Settings_design_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/modules/Location/Settings/design.jsx");
// Local dependencies.






const CAWebModuleLocationMetadata = _module_json__WEBPACK_IMPORTED_MODULE_0__;
const CAWebModuleLocation = {
  placeholderContent: _placeholder_content_js__WEBPACK_IMPORTED_MODULE_2__.placeholderContent,
  conversionOutline: _conversion_outline_ts__WEBPACK_IMPORTED_MODULE_3__.conversionOutline,
  renderers: {
    edit: _edit_jsx__WEBPACK_IMPORTED_MODULE_1__.ModuleEdit
  },
  settings: {
    content: _Settings_content_jsx__WEBPACK_IMPORTED_MODULE_4__.SettingsContent,
    design: _Settings_design_jsx__WEBPACK_IMPORTED_MODULE_5__.SettingsDesign
  }
};

/***/ },

/***/ "./src/modules/Location/module-classnames.js"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   moduleClassnames: () => (/* binding */ moduleClassnames)
/* harmony export */ });
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@divi/module");
/* harmony import */ var _types_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/modules/Location/types.ts");



/**
 * Module classnames function for Dynamic Module.
 *
 * @since ??
 *
 * @param {ModuleClassnamesParams<ModuleAttrs>} param0 Function parameters.
 */
const moduleClassnames = ({
  classnamesInstance,
  attrs
}) => {
  // Text Options.
  classnamesInstance.add((0,_divi_module__WEBPACK_IMPORTED_MODULE_0__.textOptionsClassnames)(attrs?.module?.advanced?.text));
};

/***/ },

/***/ "./src/modules/Location/placeholder-content.js"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   placeholderContent: () => (/* binding */ placeholderContent)
/* harmony export */ });
const placeholderContent = {};

/***/ },

/***/ "./src/modules/ProfileBanner/custom-css.js"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cssFields: () => (/* binding */ cssFields)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@wordpress/i18n");
/* harmony import */ var _module_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/modules/ProfileBanner/module.json");
// WordPress dependencies.



// const customCssFields = metadata.customCssFields as Record<'name', { subName: string, selectorSuffix: string, label: string }>;

// customCssFields.name.label            = __('Name', 'd5-extension-example-modules');

const cssFields = {};
// export const cssFields = { ...customCssFields };

/***/ },

/***/ "./src/modules/ProfileBanner/index.js"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CAWebModuleProfileBanner: () => (/* binding */ CAWebModuleProfileBanner),
/* harmony export */   CAWebModuleProfileBannerMetadata: () => (/* binding */ CAWebModuleProfileBannerMetadata)
/* harmony export */ });
/* harmony import */ var _module_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/modules/ProfileBanner/module.json");
/* harmony import */ var _edit_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/modules/ProfileBanner/edit.jsx");
/* harmony import */ var _placeholder_content_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/modules/ProfileBanner/placeholder-content.js");
/* harmony import */ var _conversion_outline_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/modules/ProfileBanner/conversion-outline.ts");
// Local dependencies.




const CAWebModuleProfileBannerMetadata = _module_json__WEBPACK_IMPORTED_MODULE_0__;
const CAWebModuleProfileBanner = {
  placeholderContent: _placeholder_content_js__WEBPACK_IMPORTED_MODULE_2__.placeholderContent,
  conversionOutline: _conversion_outline_ts__WEBPACK_IMPORTED_MODULE_3__.conversionOutline,
  renderers: {
    edit: _edit_jsx__WEBPACK_IMPORTED_MODULE_1__.ModuleEdit
  }
};

/***/ },

/***/ "./src/modules/ProfileBanner/module-classnames.js"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   moduleClassnames: () => (/* binding */ moduleClassnames)
/* harmony export */ });
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@divi/module");
/* harmony import */ var _types_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/modules/ProfileBanner/types.ts");



/**
 * Module classnames function for Dynamic Module.
 *
 * @since ??
 *
 * @param {ModuleClassnamesParams<ModuleAttrs>} param0 Function parameters.
 */
const moduleClassnames = ({
  classnamesInstance,
  attrs
}) => {
  // Text Options.
  classnamesInstance.add((0,_divi_module__WEBPACK_IMPORTED_MODULE_0__.textOptionsClassnames)(attrs?.module?.advanced?.text));
};

/***/ },

/***/ "./src/modules/ProfileBanner/placeholder-content.js"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   placeholderContent: () => (/* binding */ placeholderContent)
/* harmony export */ });
const placeholderContent = {};

/***/ },

/***/ "./src/modules/SectionPrimary/custom-css.js"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cssFields: () => (/* binding */ cssFields)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@wordpress/i18n");
/* harmony import */ var _module_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/modules/SectionPrimary/module.json");
// WordPress dependencies.



// const customCssFields = metadata.customCssFields as Record<'name', { subName: string, selectorSuffix: string, label: string }>;

// customCssFields.name.label            = __('Name', 'd5-extension-example-modules');

const cssFields = {};
// export const cssFields = { ...customCssFields };

/***/ },

/***/ "./src/modules/SectionPrimary/index.js"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CAWebModuleSectionPrimary: () => (/* binding */ CAWebModuleSectionPrimary),
/* harmony export */   CAWebModuleSectionPrimaryMetadata: () => (/* binding */ CAWebModuleSectionPrimaryMetadata)
/* harmony export */ });
/* harmony import */ var _module_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/modules/SectionPrimary/module.json");
/* harmony import */ var _edit_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/modules/SectionPrimary/edit.jsx");
/* harmony import */ var _placeholder_content_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/modules/SectionPrimary/placeholder-content.js");
/* harmony import */ var _conversion_outline_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/modules/SectionPrimary/conversion-outline.ts");
/* harmony import */ var _Settings_content_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/modules/SectionPrimary/Settings/content.jsx");
// Local dependencies.





const CAWebModuleSectionPrimaryMetadata = _module_json__WEBPACK_IMPORTED_MODULE_0__;
const CAWebModuleSectionPrimary = {
  placeholderContent: _placeholder_content_js__WEBPACK_IMPORTED_MODULE_2__.placeholderContent,
  conversionOutline: _conversion_outline_ts__WEBPACK_IMPORTED_MODULE_3__.conversionOutline,
  renderers: {
    edit: _edit_jsx__WEBPACK_IMPORTED_MODULE_1__.ModuleEdit
  },
  settings: {
    content: _Settings_content_jsx__WEBPACK_IMPORTED_MODULE_4__.SettingsContent
  }
};

/***/ },

/***/ "./src/modules/SectionPrimary/module-classnames.js"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   moduleClassnames: () => (/* binding */ moduleClassnames)
/* harmony export */ });
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@divi/module");
/* harmony import */ var _types_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/modules/SectionPrimary/types.ts");



/**
 * Module classnames function for Dynamic Module.
 *
 * @since ??
 *
 * @param {ModuleClassnamesParams<ModuleAttrs>} param0 Function parameters.
 */
const moduleClassnames = ({
  classnamesInstance,
  attrs
}) => {
  classnamesInstance.add('section');

  // Text Options.
  classnamesInstance.add((0,_divi_module__WEBPACK_IMPORTED_MODULE_0__.textOptionsClassnames)(attrs?.module?.advanced?.text));
};

/***/ },

/***/ "./src/modules/SectionPrimary/placeholder-content.js"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   placeholderContent: () => (/* binding */ placeholderContent)
/* harmony export */ });
const placeholderContent = {
  title: {
    innerContent: {
      desktop: {
        value: {
          text: '',
          level: 'h2',
          color: '',
          alignment: 'start'
        }
      }
    }
  }
};

/***/ },

/***/ "./src/modules/Utils/index.js"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   get_address: () => (/* reexport safe */ _Module_jsx__WEBPACK_IMPORTED_MODULE_0__.get_address),
/* harmony export */   get_google_map_place_link: () => (/* reexport safe */ _Module_jsx__WEBPACK_IMPORTED_MODULE_0__.get_google_map_place_link),
/* harmony export */   get_icon_span: () => (/* reexport safe */ _Module_jsx__WEBPACK_IMPORTED_MODULE_0__.get_icon_span),
/* harmony export */   processColorPickerValue: () => (/* reexport safe */ _Module_jsx__WEBPACK_IMPORTED_MODULE_0__.processColorPickerValue)
/* harmony export */ });
/* harmony import */ var _Module_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/modules/Utils/Module.jsx");



/***/ },

/***/ "./src/modules/Card/module.json"
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"name":"caweb/card","d4Shortcode":"et_pb_ca_card","title":"Card","titles":"Cards","moduleIcon":"caweb/module-logo","moduleClassName":"et_pb_ca_card","moduleOrderClassName":"et_pb_ca_card","category":"module","attributes":{"module":{"type":"object","selector":"{{selector}}","settings":{"meta":{"adminLabel":{}},"advanced":{"link":{},"text":{},"htmlAttributes":{}},"decoration":{"background":{},"bodyFont":{},"sizing":{},"spacing":{},"border":{},"boxShadow":{},"filters":{},"transform":{},"animation":{},"overflow":{},"disabledOn":{},"transition":{},"position":{},"zIndex":{},"scroll":{},"sticky":{}},"innerContent":{"groupType":"group-item","item":{"groupSlug":"style","render":true,"attrName":"module.decoration.background","subName":"color","label":"Background Color","description":"Here you can define a custom background color for the section.","features":{"responsive":false},"component":{"type":"field","name":"divi/color-picker"}}}}},"layout":{"type":"object","inlineEditor":"plainText","elementType":"heading","childrenSanitizer":"et_core_esc_previously","default":{"innerContent":{"desktop":{"value":"default"}}},"settings":{"innerContent":{"groupType":"group-item","item":{"groupSlug":"style","render":true,"attrName":"layout.innerContent","label":"Card Style","description":"Here you can choose the style in which to display the card.","features":{"sticky":false,"dynamicContent":false},"component":{"name":"divi/select","type":"field","props":{"defaultValue":"default","options":{"default":{"label":"Default","value":"default"},"standout":{"label":"Standout","value":"standout"},"overstated":{"label":"Overstated","value":"overstated"},"understated":{"label":"Understated","value":"understated"},"custom":{"label":"Custom","value":"custom"}}}}}}}}},"settings":{"design":"auto","advanced":"auto","content":"auto","groups":{}}}');

/***/ },

/***/ "./src/modules/FullwidthSectionPrimary/module.json"
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"name":"caweb/fullwidth-section-primary","d4Shortcode":"et_pb_ca_fullwidth_section_primary","title":"Fullwidth Section Primary","titles":"Fullwidth Section Primaries","moduleClassName":"et_pb_ca_fullwidth_section_primary","moduleOrderClassName":"et_pb_ca_fullwidth_section_primary"}');

/***/ },

/***/ "./src/modules/Github/module.json"
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"name":"caweb/github","d4Shortcode":"et_pb_ca_github","title":"Github","titles":"Githubs","moduleIcon":"caweb/module-logo","moduleClassName":"et_pb_ca_github","moduleOrderClassName":"et_pb_ca_github","category":"module","attributes":{"module":{"type":"object","selector":"{{selector}}","settings":{"meta":{"adminLabel":{}},"advanced":{"link":{},"text":{},"htmlAttributes":{}},"decoration":{"background":{},"bodyFont":{},"sizing":{},"spacing":{},"border":{},"boxShadow":{},"filters":{},"transform":{},"animation":{},"overflow":{},"disabledOn":{},"transition":{},"position":{},"zIndex":{},"scroll":{},"sticky":{}},"innerContent":{"groupType":"group-item","item":{"groupSlug":"style","render":true,"attrName":"module.decoration.background","subName":"color","label":"Background Color","description":"Here you can define a custom background color for the section.","features":{"responsive":false},"component":{"type":"field","name":"divi/color-picker"}}}}},"title":{"type":"object","inlineEditor":"plainText","elementType":"heading","selector":"{{selector}} .title","childrenSanitizer":"et_core_esc_previously","default":{"innerContent":{"desktop":{"value":{"text":"","level":"h2"}}}},"settings":{"innerContent":{"groupType":"group-items","items":{"text":{"groupSlug":"header","render":true,"attrName":"title.innerContent","subName":"text","label":"Title","description":"Enter a title for the list.","features":{"sticky":false,"dynamicContent":{"type":"text"}},"component":{"name":"divi/text","type":"field"}},"level":{"groupSlug":"headerDesign","render":true,"attrName":"title.innerContent","subName":"level","label":"Size","description":"Here you can choose the size for the panel header.","features":{"sticky":false,"dynamicContent":false},"component":{"name":"divi/select","type":"field","props":{"options":{"h1":{"label":"H1","value":"h1"},"h2":{"label":"H2","value":"h2"},"h3":{"label":"H3","value":"h3"},"h4":{"label":"H4","value":"h4"},"h5":{"label":"H5","value":"h5"}}}}}}}}},"request":{"type":"object","childrenSanitizer":"et_core_esc_previously","settings":{"innerContent":{"groupType":"group-items","items":{"username":{"groupSlug":"organization","render":true,"attrName":"request.innerContent","subName":"username","label":"Username","description":"Enter GitHub Username.","features":{"sticky":false,"dynamicContent":false},"component":{"name":"divi/text","type":"field"}},"results":{"groupSlug":"organization","render":true,"attrName":"request.innerContent","subName":"per_page","label":"Maximum # of results","description":"Enter amount to display per page. Default is 30, Max is 100.","features":{"sticky":false,"dynamicContent":false},"component":{"name":"divi/common-numeric-input","type":"field","props":{"defaultValue":100,"min":1,"max":100,"step":1}}},"repo_type":{"groupSlug":"organization","render":true,"attrName":"request.innerContent","subName":"repo_type","label":"Repository Type","description":"Choose repository type you wish to display.","features":{"sticky":false,"dynamicContent":false},"component":{"name":"divi/select","type":"field","props":{"defaultValue":"all","options":{"all":{"label":"All","value":"all"},"public":{"label":"Public","value":"public"},"private":{"label":"Private","value":"private"},"forks":{"label":"Forks","value":"forks"}}}}},"pat":{"groupSlug":"organization","render":true,"attrName":"request.innerContent","subName":"access_token","label":"Personal Access Token","description":"This is required for Private Repositories to display.","features":{"sticky":false,"dynamicContent":false},"component":{"name":"divi/text","type":"field"}},"rate_limit":{"groupSlug":"organization","render":true,"attrName":"request.innerContent","subName":"increase_rate_limit","label":"Increase Rate Limit","description":"Increase the maximum number of requests users are permitted to make per hour. <a href=\\"https://developer.github.com/v3/#rate-limiting\\" target=\\"_blank\\">Rate Limiting</a>.","features":{"sticky":false,"dynamicContent":false},"component":{"name":"divi/toggle","type":"field","props":{"defaultValue":"on"}}},"client_id":{"groupSlug":"organization","render":true,"attrName":"request.innerContent","subName":"client_id","label":"Client ID","description":"Enter GitHub Client ID.","features":{"sticky":false,"dynamicContent":false},"component":{"name":"divi/text","type":"field"}},"client_secret":{"groupSlug":"organization","render":true,"attrName":"request.innerContent","subName":"client_secret","label":"Client Secret","description":"Enter GitHub Client Secret.","features":{"sticky":false,"dynamicContent":false},"component":{"name":"divi/text","type":"field"}},"test":{"groupSlug":"organization","render":true,"label":"Select which information for each repository you would like to display.","description":"Definitions","attrName":"definitions","features":{"sticky":false,"dynamicContent":false},"component":{"name":"divi/checkboxes","type":"field","props":{"options":[{"label":"Project Title","value":"name"},{"label":"Add Link to repositories (Public Repositories Only)","value":"url"},{"label":"Description","value":"desc"},{"label":"Fork","value":"fork"},{"label":"Creation Date","value":"created_at"},{"label":"Updated Date","value":"updated_at"},{"label":"Language","value":"language"}]}}}}}}}},"settings":{"design":"auto","advanced":"auto","content":"auto","groups":{"header":{"panel":"content","priority":2,"groupName":"header","multiElements":true,"component":{"name":"divi/composite","props":{"groupLabel":"Header"}}},"headerDesign":{"panel":"design","priority":2,"groupName":"headerDesign","multiElements":true,"component":{"name":"divi/composite","props":{"groupLabel":"Header"}}},"organization":{"panel":"content","priority":2,"groupName":"organization","multiElements":true,"component":{"name":"divi/composite","props":{"groupLabel":"Organization"}}}}}}');

/***/ },

/***/ "./src/modules/Location/module.json"
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"name":"caweb/location","d4Shortcode":"et_pb_ca_location_widget","title":"Location","titles":"Locations","moduleIcon":"caweb/module-logo","moduleClassName":"et_pb_ca_location_widget","moduleOrderClassName":"et_pb_ca_location_widget","category":"module","attributes":{"module":{"type":"object","selector":"{{selector}}","settings":{"meta":{"adminLabel":{}},"advanced":{"link":{},"text":{},"htmlAttributes":{}},"decoration":{"background":{},"bodyFont":{},"sizing":{},"spacing":{},"border":{},"boxShadow":{},"filters":{},"transform":{},"animation":{},"overflow":{},"disabledOn":{},"transition":{},"position":{},"zIndex":{},"scroll":{},"sticky":{}}}},"layout":{"type":"object","inlineEditor":"plainText","elementType":"heading","childrenSanitizer":"et_core_esc_previously","default":{"innerContent":{"desktop":{"value":"contact"}}},"settings":{"innerContent":{"groupType":"group-item","item":{"groupSlug":"style","render":true,"attrName":"layout.innerContent","label":"Style","description":"Here you can choose the style in which to display the location.","features":{"sticky":false,"dynamicContent":false},"component":{"name":"divi/select","type":"field","props":{"defaultValue":"contact","options":{"contact":{"label":"Contact","value":"contact"},"mini":{"label":"Mini","value":"mini"},"banner":{"label":"Banner","value":"banner"}}}}}}}},"image":{"type":"object","elementType":"image","tagName":"img","childrenSanitizer":"et_core_esc_previously","settings":{"innerContent":{"groupType":"group-items","items":{"src":{"groupSlug":"style","render":true,"attrName":"image.innerContent","subName":"src","label":"Set Featured Image","description":"This image will be used as the main image for this location.","features":{"sticky":false,"dynamicContent":{"type":"image"}},"component":{"name":"divi/upload","type":"field","props":{"syncImageData":{"src":true,"id":true,"alt":true,"titleText":false}}}},"alt":{"groupSlug":"style","render":false,"attrName":"image.innerContent","subName":"alt","label":"Image Alt Text","description":"Input the alt text for the portrait image.","features":{"sticky":false,"dynamicContent":{"type":"text"}},"component":{"name":"divi/text","type":"field"}}}}}},"name":{"type":"object","inlineEditor":"plainText","elementType":"element","tagName":"strong","childrenSanitizer":"et_core_esc_previously","settings":{"innerContent":{"groupType":"group-item","item":{"groupSlug":"location","render":true,"attrName":"name.innerContent","label":"Name","description":"Here you can enter a name for the location.","features":{"sticky":false,"dynamicContent":{"type":"text"}},"component":{"name":"divi/text","type":"field"}}}}},"desc":{"type":"object","inlineEditor":"plainText","elementType":"element","tagName":"div","attributes":{"class":"description"},"childrenSanitizer":"et_core_esc_previously","settings":{"innerContent":{"groupType":"group-item","item":{"groupSlug":"location","render":true,"attrName":"desc.innerContent","label":"Description","description":"Here you can enter a description for the location.","features":{"sticky":false,"dynamicContent":{"type":"text"}},"component":{"name":"divi/textarea","type":"field"}}}}},"address":{"type":"object","inlineEditor":"plainText","elementType":"heading","childrenSanitizer":"et_core_esc_previously","settings":{"innerContent":{"groupType":"group-items","items":{"addr":{"groupSlug":"location","render":true,"attrName":"address.innerContent","subName":"addr","label":"Address","description":"Enter an address.","features":{"sticky":false,"dynamicContent":{"type":"text"}},"component":{"name":"divi/text","type":"field"}},"city":{"groupSlug":"location","render":true,"attrName":"address.innerContent","subName":"city","label":"City","description":"Enter a city.","features":{"sticky":false,"dynamicContent":{"type":"text"}},"component":{"name":"divi/text","type":"field"}},"state":{"groupSlug":"location","render":true,"attrName":"address.innerContent","subName":"state","label":"State","description":"Enter a state.","features":{"sticky":false,"dynamicContent":{"type":"text"}},"component":{"name":"divi/text","type":"field"}},"zip":{"groupSlug":"location","render":true,"attrName":"address.innerContent","subName":"zip","label":"Zip Code","description":"Enter a zip code.","features":{"sticky":false,"dynamicContent":{"type":"text"}},"component":{"name":"divi/text","type":"field"}}}}}},"contact":{"type":"object","inlineEditor":"plainText","elementType":"heading","childrenSanitizer":"et_core_esc_previously","default":{"innerContent":{"desktop":{"value":{"show":"off","phone":"","fax":""}}}},"settings":{"innerContent":{"groupType":"group-items","items":{"showContact":{"groupSlug":"location","render":true,"label":"Contact Information","attrName":"contact.innerContent","subName":"show","features":{"sticky":false,"dynamicContent":{"type":"text"}},"component":{"name":"divi/toggle","type":"field","props":{"defaultValue":"off"}}},"phone":{"groupSlug":"location","render":true,"attrName":"contact.innerContent","subName":"phone","label":"Phone","description":"Enter a phone number.","features":{"sticky":false,"dynamicContent":{"type":"text"}},"component":{"name":"divi/text","type":"field"}},"fax":{"groupSlug":"location","render":true,"attrName":"contact.innerContent","subName":"fax","label":"Fax","description":"Enter a fax number.","features":{"sticky":false,"dynamicContent":{"type":"text"}},"component":{"name":"divi/text","type":"field"}}}}}},"link":{"type":"object","inlineEditor":"plainText","elementType":"element","tagName":"a","childrenSanitizer":"et_core_esc_previously","default":{"innerContent":{"desktop":{"value":{"show":"off","url":"#"}}}},"settings":{"innerContent":{"groupType":"group-items","items":{"showLink":{"groupSlug":"location","render":true,"label":"Button","attrName":"link.innerContent","subName":"show","features":{"sticky":false,"dynamicContent":{"type":"text"}},"component":{"name":"divi/toggle","type":"field","props":{"defaultValue":"off"}}},"url":{"groupSlug":"location","render":true,"label":"URL","description":"Here you can enter the URL for the location.","attrName":"link.innerContent","subName":"url","features":{"sticky":false,"dynamicContent":{"type":"text"}},"component":{"name":"divi/text","type":"field","props":{"defaultValue":"#"}}}}}}},"icon":{"type":"object","inlineEditor":"plainText","elementType":"element","tagName":"span","childrenSanitizer":"et_core_esc_previously","settings":{"innerContent":{"groupType":"group-items","items":{"showIcon":{"groupSlug":"icon","render":true,"label":"Use Icon","attrName":"icon.innerContent","subName":"show","features":{"sticky":false,"dynamicContent":{"type":"text"}},"component":{"name":"divi/toggle","type":"field","props":{"defaultValue":"off"}}},"icon":{"groupSlug":"icon","render":true,"label":"Icon","description":"Select an icon.","attrName":"icon.innerContent","features":{"sticky":false,"dynamicContent":{"type":"text"}},"component":{"name":"divi/icon-picker","type":"field"}}}}}}},"settings":{"advanced":"auto","groups":{"style":{"panel":"content","priority":2,"groupName":"style","multiElements":true,"component":{"name":"divi/composite","props":{"groupLabel":"Style"}}},"location":{"panel":"content","priority":2,"groupName":"location","multiElements":true,"component":{"name":"divi/composite","props":{"groupLabel":"Location"}}},"icon":{"panel":"design","priority":2,"groupName":"icon","multiElements":true,"component":{"name":"divi/composite","props":{"groupLabel":"Icon"}}}}}}');

/***/ },

/***/ "./src/modules/ProfileBanner/module.json"
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"name":"caweb/profile-banner","d4Shortcode":"et_pb_profile_banner","title":"Profile Banner","titles":"Profile Banners","moduleIcon":"caweb/module-logo","moduleClassName":"et_pb_profile_banner","moduleOrderClassName":"et_pb_profile_banner","category":"module","attributes":{"module":{"type":"object","settings":{"meta":{"adminLabel":{}},"advanced":{"link":{},"text":{},"htmlAttributes":{}},"decoration":{"background":{},"bodyFont":{},"sizing":{},"spacing":{},"border":{},"boxShadow":{},"filters":{},"transform":{},"animation":{},"overflow":{},"disabledOn":{},"transition":{},"position":{},"zIndex":{},"scroll":{},"sticky":{}}}},"name":{"type":"object","inlineEditor":"plainText","elementType":"heading","childrenSanitizer":"et_core_esc_previously","tagName":"h4","settings":{"innerContent":{"groupType":"group-item","item":{"groupSlug":"header","render":true,"attrName":"name.innerContent","label":"Profile Name","description":"Input the name of the profile.","features":{"sticky":false,"dynamicContent":{"type":"text"}},"component":{"name":"divi/text","type":"field"}}}}},"job":{"type":"object","inlineEditor":"plainText","elementType":"heading","childrenSanitizer":"et_core_esc_previously","tagName":"span","settings":{"innerContent":{"groupType":"group-item","item":{"groupSlug":"header","render":true,"attrName":"job.innerContent","label":"Job Title","description":"Input the job title.","features":{"sticky":false,"dynamicContent":{"type":"text"}},"component":{"name":"divi/text","type":"field"}}}}},"profile":{"type":"object","inlineEditor":"plainText","tagName":"a","elementType":"element","childrenSanitizer":"et_core_esc_previously","default":{"innerContent":{"desktop":{"value":{"text":"Link","url":"#"}}}},"settings":{"innerContent":{"groupType":"group-items","items":{"text":{"groupSlug":"profile","render":true,"attrName":"profile.innerContent","subName":"text","label":"Link Text","description":"Input the text for the profile link.","features":{"sticky":false,"dynamicContent":{"type":"text"}},"component":{"name":"divi/text","type":"field"}},"url":{"groupSlug":"profile","render":true,"attrName":"profile.innerContent","subName":"url","label":"URL","description":"Input the website of the profile.","features":{"sticky":false,"dynamicContent":{"type":"text"}},"component":{"name":"divi/text","type":"field"}}}}}},"portrait":{"type":"object","childrenSanitizer":"et_core_esc_previously","tagName":"img","elementType":"image","settings":{"innerContent":{"groupType":"group-items","items":{"imgText":{"groupSlug":"portrait","render":true,"attrName":"portrait.innerContent","subName":"src","label":"Image URL","description":"Type in the URL to the image you would like to display, or upload your desired image below.","features":{"sticky":false,"dynamicContent":{"type":"image"}},"component":{"name":"divi/text","type":"field","props":{"syncImageData":{"src":true,"id":true,"alt":true,"titleText":false}}}},"img":{"groupSlug":"portrait","render":true,"attrName":"portrait.innerContent","subName":"src","label":"Image","description":"Upload your desired image, or type in the URL to the image you would like to display above.","features":{"sticky":false,"dynamicContent":{"type":"image"}},"component":{"name":"divi/upload","type":"field","props":{"syncImageData":{"src":true,"id":true,"alt":true,"titleText":false}}}},"alt":{"groupSlug":"portrait","render":true,"attrName":"portrait.innerContent","subName":"alt","label":"Image Alt Text","description":"Input the alt text for the portrait image.","features":{"sticky":false,"dynamicContent":{"type":"text"}},"component":{"name":"divi/text","type":"field"}},"rounded":{"groupSlug":"portraitDesign","render":true,"label":"Round Image","attrName":"portrait.advanced","subName":"rounded","description":"Switch to yes if you want the profile banner to display vertically.","features":{"sticky":false,"dynamicContent":false},"component":{"name":"divi/toggle","type":"field","props":{"defaultValue":"off"}}},"vertical":{"groupSlug":"portraitDesign","render":true,"label":"Display Vertically","attrName":"portrait.advanced","subName":"vertical","description":"Switch to yes if you want the profile banner to display vertically.","features":{"sticky":false,"dynamicContent":false},"component":{"name":"divi/toggle","type":"field","props":{"defaultValue":"off"}}}}}}}},"settings":{"content":"auto","design":"auto","advanced":"auto","groups":{"header":{"panel":"content","priority":2,"groupName":"header","component":{"name":"divi/composite","props":{"groupLabel":"Header"}}},"profile":{"panel":"content","priority":2,"groupName":"profile","component":{"name":"divi/composite","props":{"groupLabel":"Profile"}}},"portrait":{"panel":"content","priority":2,"groupName":"portrait","component":{"name":"divi/composite","props":{"groupLabel":"Portrait"}}},"portraitDesign":{"panel":"design","priority":2,"groupName":"portraitDesign","component":{"name":"divi/composite","props":{"groupLabel":"Portrait"}}}}}}');

/***/ },

/***/ "./src/modules/SectionPrimary/module.json"
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"name":"caweb/section-primary","d4Shortcode":"et_pb_ca_section_primary","title":"Section Primary","titles":"Section Primaries","moduleIcon":"caweb/module-logo","moduleClassName":"et_pb_ca_section_primary","moduleOrderClassName":"et_pb_ca_section_primary","category":"module","attributes":{"module":{"type":"object","selector":"{{selector}}","settings":{"meta":{"adminLabel":{}},"advanced":{"link":{},"text":{},"htmlAttributes":{}},"decoration":{"background":{},"bodyFont":{},"sizing":{},"spacing":{},"border":{},"boxShadow":{},"filters":{},"transform":{},"animation":{},"overflow":{},"disabledOn":{},"transition":{},"position":{},"zIndex":{},"scroll":{},"sticky":{}},"innerContent":{"groupType":"group-item","item":{"groupSlug":"style","render":true,"attrName":"module.decoration.background","subName":"color","label":"Background Color","description":"Here you can define a custom background color for the section.","features":{"responsive":false},"component":{"type":"field","name":"divi/color-picker"}}}}},"title":{"type":"object","inlineEditor":"plainText","elementType":"heading","selector":"{{selector}} .title","childrenSanitizer":"et_core_esc_previously","default":{"innerContent":{"desktop":{"value":{"text":"","level":"h2","color":"","alignment":"start"}}}},"settings":{"innerContent":{"groupType":"group-items","items":{"text":{"groupSlug":"header","render":true,"attrName":"title.innerContent","subName":"text","label":"Title","description":"Define the title for the section.","features":{"sticky":false,"dynamicContent":{"type":"text"}},"component":{"name":"divi/text","type":"field"}},"level":{"groupSlug":"headerDesign","render":true,"attrName":"title.innerContent","subName":"level","label":"Size","description":"Here you can choose the size for the panel header.","features":{"sticky":false,"dynamicContent":false},"component":{"name":"divi/select","type":"field","props":{"defaultValue":"h2","options":{"h1":{"label":"H1","value":"h1"},"h2":{"label":"H2","value":"h2"},"h3":{"label":"H3","value":"h3"},"h4":{"label":"H4","value":"h4"},"h5":{"label":"H5","value":"h5"}}}}},"alignment":{"groupSlug":"headerDesign","render":true,"attrName":"title.innerContent","subName":"alignment","label":"Alignment","description":"Here you can choose the alignment for the panel header.","features":{"sticky":false,"dynamicContent":false},"component":{"name":"divi/select","type":"field","props":{"defaultValue":"start","options":{"start":{"label":"Left","value":"start"},"center":{"label":"Center","value":"center"},"end":{"label":"Right","value":"end"}}}}},"color":{"groupSlug":"headerDesign","render":true,"attrName":"title.innerContent","subName":"color","label":"Color","description":"Here you can define a custom heading color for the title.","features":{"responsive":false},"component":{"type":"field","name":"divi/color-picker"}}}}}},"content":{"type":"object","elementType":"content","settings":{"innerContent":{"groupType":"group-item","item":{"groupSlug":"body","attrName":"content.innerContent","label":"Content","description":"Here you can create the content that will be used within the module.","render":true,"features":{"sticky":false,"dynamicContent":{"type":"text"}},"component":{"type":"field","name":"divi/richtext"}}}}},"image":{"type":"object","elementType":"image","tagName":"img","childrenSanitizer":"et_core_esc_previously","settings":{"innerContent":{"groupType":"group-items","items":{"show":{"groupSlug":"body","render":true,"label":"Feautured Image","attrName":"image.innerContent","subName":"show","features":{"sticky":false,"dynamicContent":false},"component":{"name":"divi/toggle","type":"field","props":{"defaultValue":"on"}}},"position":{"groupSlug":"body","render":true,"label":"Image Position","attrName":"image.innerContent","subName":"alignment","features":{"sticky":false,"dynamicContent":false},"component":{"name":"divi/toggle","type":"field","props":{"defaultValue":"on"}}},"fade":{"groupSlug":"body","render":true,"label":"Fade Image from Left","attrName":"image.innerContent","subName":"fade","features":{"sticky":false,"dynamicContent":false},"component":{"name":"divi/toggle","type":"field","props":{"defaultValue":"off"}}},"src":{"groupSlug":"body","render":true,"attrName":"image.innerContent","subName":"src","label":"Image","description":"If defined, this image will be used as the background for this module.","features":{"sticky":false,"dynamicContent":{"type":"image"}},"component":{"name":"divi/upload","type":"field","props":{"syncImageData":{"src":true,"id":true,"alt":true,"titleText":false}}}}}}}},"link":{"type":"object","elementType":"heading","childrenSanitizer":"et_core_esc_previously","settings":{"innerContent":{"groupType":"group-items","items":{"showButton":{"groupSlug":"body","render":true,"label":"More Information Button","attrName":"link.innerContent","subName":"show","features":{"sticky":false,"dynamicContent":false},"component":{"name":"divi/toggle","type":"field","props":{"defaultValue":"off"}}},"url":{"groupSlug":"body","render":true,"label":"Link URL","description":"URL destination for the button","attrName":"link.innerContent","subName":"url","features":{"sticky":false,"dynamicContent":false},"component":{"name":"divi/text","type":"field"}}}}}}},"settings":{"design":"auto","advanced":"auto","groups":{"header":{"panel":"content","priority":2,"groupName":"header","multiElements":true,"component":{"name":"divi/composite","props":{"groupLabel":"Header"}}},"body":{"panel":"content","priority":2,"groupName":"body","multiElements":true,"component":{"name":"divi/composite","props":{"groupLabel":"Body"}}},"headerDesign":{"panel":"design","priority":2,"groupName":"headerDesign","multiElements":true,"component":{"name":"divi/composite","props":{"groupLabel":"Header"}}},"style":{"panel":"design","priority":2,"groupName":"style","multiElements":true,"component":{"name":"divi/composite","props":{"groupLabel":"Style"}}}}}}');

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@wordpress/hooks");
/* harmony import */ var _divi_module_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@divi/module-library");
/* harmony import */ var _modules_Github_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/modules/Github/index.js");
/* harmony import */ var _modules_Location_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/modules/Location/index.js");
/* harmony import */ var _modules_ProfileBanner_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/modules/ProfileBanner/index.js");
/* harmony import */ var _modules_SectionPrimary_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/modules/SectionPrimary/index.js");
/* harmony import */ var _modules_Card_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/modules/Card/index.js");
/* harmony import */ var _modules_FullwidthSectionPrimary_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/modules/FullwidthSectionPrimary/index.js");



/**
 * Internal dependencies
 */

// standard modules






//fullwidth modules


//
// import icon-library integration
// import './icons';

// Register modules.
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__.addAction)('divi.moduleLibrary.registerModuleLibraryStore.after', 'cawebDiviExtension', () => {
  // Standard modules
  (0,_divi_module_library__WEBPACK_IMPORTED_MODULE_1__.registerModule)(_modules_Github_index_js__WEBPACK_IMPORTED_MODULE_2__.CAWebModuleGithubMetadata, _modules_Github_index_js__WEBPACK_IMPORTED_MODULE_2__.CAWebModuleGithub);
  (0,_divi_module_library__WEBPACK_IMPORTED_MODULE_1__.registerModule)(_modules_Location_index_js__WEBPACK_IMPORTED_MODULE_3__.CAWebModuleLocationMetadata, _modules_Location_index_js__WEBPACK_IMPORTED_MODULE_3__.CAWebModuleLocation);
  (0,_divi_module_library__WEBPACK_IMPORTED_MODULE_1__.registerModule)(_modules_ProfileBanner_index_js__WEBPACK_IMPORTED_MODULE_4__.CAWebModuleProfileBannerMetadata, _modules_ProfileBanner_index_js__WEBPACK_IMPORTED_MODULE_4__.CAWebModuleProfileBanner);
  (0,_divi_module_library__WEBPACK_IMPORTED_MODULE_1__.registerModule)(_modules_SectionPrimary_index_js__WEBPACK_IMPORTED_MODULE_5__.CAWebModuleSectionPrimaryMetadata, _modules_SectionPrimary_index_js__WEBPACK_IMPORTED_MODULE_5__.CAWebModuleSectionPrimary);
  (0,_divi_module_library__WEBPACK_IMPORTED_MODULE_1__.registerModule)(_modules_Card_index_js__WEBPACK_IMPORTED_MODULE_6__.CAWebModuleCardMetadata, _modules_Card_index_js__WEBPACK_IMPORTED_MODULE_6__.CAWebModuleCard);

  // Fullwidth modules
  (0,_divi_module_library__WEBPACK_IMPORTED_MODULE_1__.registerModule)(_modules_FullwidthSectionPrimary_index_js__WEBPACK_IMPORTED_MODULE_7__.CAWebModuleFullwidthSectionPrimaryMetadata, _modules_FullwidthSectionPrimary_index_js__WEBPACK_IMPORTED_MODULE_7__.CAWebModuleFullwidthSectionPrimary);
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map