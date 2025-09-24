/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./css/main.scss":
/*!*************************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./css/main.scss ***!
  \*************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "../node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "../node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/bg.jpg */ "./assets/bg.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `html {
  scroll-behavior: smooth;
  height: 100%;
}

body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  min-height: 100vh;
  background: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) no-repeat center center/cover;
  background-attachment: fixed;
  color: #fff;
}

header {
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.7);
  transition: all 0.3s ease;
  z-index: 1000;
}
header nav ul {
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  margin: 0;
}
header nav ul li {
  margin: 0 15px;
}
header nav ul li a {
  color: #fff;
  text-decoration: none;
  font-size: 20px;
  transition: font-size 0.3s, color 0.3s;
}
header nav ul li a.active {
  color: yellow;
  font-weight: bold;
}
header.small nav ul li a {
  font-size: 14px;
}

#home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
}
#home h1, #home p, #home .btn {
  display: block;
  margin: 10px 0;
  opacity: 0;
  animation: fadeInUp 1s forwards;
}
#home p {
  animation-delay: 0.5s;
}
#home .btn {
  animation-delay: 1s;
}
#home h1 {
  font-size: 50px;
}
#home p {
  font-size: 24px;
}
#home .btn {
  padding: 10px 20px;
  background: yellow;
  color: #222;
  text-decoration: none;
  border-radius: 5px;
  margin-top: 20px;
  transition: background 0.3s;
}
#home .btn:hover {
  background: orange;
}

.full-section {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 50px;
  position: relative;
}

.multi-column {
  display: flex;
  gap: 20px;
}
.multi-column div {
  flex: 1;
  background: rgba(0, 0, 0, 0.5);
  padding: 20px;
  border-radius: 8px;
}

.carousel {
  position: relative;
  width: 80%;
  max-width: 800px;
}
.carousel .slide {
  display: none;
}
.carousel .slide.active {
  display: block;
}
.carousel .slide img {
  width: 100%;
  border-radius: 8px;
}
.carousel button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  border: none;
  padding: 10px;
  cursor: pointer;
}
.carousel button.prev {
  left: 0;
}
.carousel button.next {
  right: 0;
}

.modal {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal .modal-content {
  background: #fff;
  color: black;
  padding: 20px;
  border-radius: 8px;
  animation: fadeIn 0.5s;
}
.modal .close {
  float: right;
  cursor: pointer;
  font-size: 20px;
}

footer {
  background: #222;
  color: #fff;
  text-align: center;
  padding: 20px;
}
footer .social-icons {
  margin-top: 10px;
}
footer .social-icons .icon {
  margin: 0 10px;
  cursor: pointer;
  transition: color 0.3s;
}
footer .social-icons .icon:hover {
  color: #00aced;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@media (max-width: 1024px) {
  .multi-column {
    flex-direction: column;
  }

  .carousel {
    width: 100%;
  }
}`, "",{"version":3,"sources":["webpack://./css/main.scss"],"names":[],"mappings":"AAcA;EACE,uBAAA;EACA,YAAA;AAbF;;AAgBA;EACE,SAAA;EACA,UAAA;EACA,8BAAA;EACA,iBAAA;EAGA,iFAAA;EACA,4BAAA;EACA,WAzBW;AAUb;;AAmBA;EACE,eAAA;EACA,MAAA;EACA,WAAA;EACA,8BAAA;EACA,yBAAA;EACA,aAAA;AAhBF;AAkBE;EACE,gBAAA;EAjCF,aAAA;EACA,uBAAA;EACA,mBAAA;EAiCE,aAAA;EACA,SAAA;AAdJ;AAgBI;EACE,cAAA;AAdN;AAgBM;EACE,WA/CK;EAgDL,qBAAA;EACA,eAAA;EACA,sCAAA;AAdR;AAgBQ;EACE,aAAA;EACA,iBAAA;AAdV;AAqBI;EACE,eAAA;AAnBN;;AAyBA;EACE,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;EACA,iBAAA;AAtBF;AAwBE;EACE,cAAA;EACA,cAAA;EACA,UAAA;EACA,+BAAA;AAtBJ;AAyBE;EAAI,qBAAA;AAtBN;AAuBE;EAAO,mBAAA;AApBT;AAsBE;EAAK,eAAA;AAnBP;AAoBE;EAAK,eAAA;AAjBP;AAmBE;EACE,kBAAA;EACA,kBAAA;EACA,WAAA;EACA,qBAAA;EACA,kBAAA;EACA,gBAAA;EACA,2BAAA;AAjBJ;AAmBI;EAAU,kBAAA;AAhBd;;AAqBA;EACE,iBAAA;EAnGA,aAAA;EACA,uBAAA;EACA,mBAAA;EAmGA,kBAAA;EACA,aAAA;EACA,kBAAA;AAhBF;;AAoBA;EACE,aAAA;EACA,SAAA;AAjBF;AAmBE;EACE,OAAA;EACA,8BAAA;EACA,aAAA;EACA,kBAAA;AAjBJ;;AAsBA;EACE,kBAAA;EACA,UAAA;EACA,gBAAA;AAnBF;AAqBE;EACE,aAAA;AAnBJ;AAqBI;EAAW,cAAA;AAlBf;AAoBI;EACE,WAAA;EACA,kBAAA;AAlBN;AAsBE;EACE,kBAAA;EACA,QAAA;EACA,2BAAA;EACA,8BAAA;EACA,WAlJS;EAmJT,YAAA;EACA,aAAA;EACA,eAAA;AApBJ;AAsBI;EAAS,OAAA;AAnBb;AAoBI;EAAS,QAAA;AAjBb;;AAsBA;EACE,aAAA;EACA,eAAA;EACA,MAAA;EAAQ,OAAA;EAAS,WAAA;EAAa,YAAA;EAC9B,8BAAA;EA5JA,aAAA;EACA,uBAAA;EACA,mBAAA;AA6IF;AAgBE;EACE,gBArKS;EAsKT,YAAA;EACA,aAAA;EACA,kBAAA;EACA,sBAAA;AAdJ;AAiBE;EACE,YAAA;EACA,eAAA;EACA,eAAA;AAfJ;;AAoBA;EACE,gBAvLc;EAwLd,WAtLW;EAuLX,kBAAA;EACA,aAAA;AAjBF;AAmBE;EACE,gBAAA;AAjBJ;AAmBI;EACE,cAAA;EACA,eAAA;EACA,sBAAA;AAjBN;AAmBM;EAAU,cAAA;AAhBhB;;AAsBA;EACE;IAAO,UAAA;IAAY,2BAAA;EAjBnB;EAkBA;IAAK,UAAA;IAAY,wBAAA;EAdjB;AACF;AAgBA;EACE;IAAO,UAAA;IAAY,qBAAA;EAZnB;EAaA;IAAO,UAAA;IAAY,mBAAA;EATnB;AACF;AAYA;EACE;IAAgB,sBAAA;EAThB;;EAUA;IAAY,WAAA;EANZ;AACF","sourcesContent":["// Variables\r\n$primary-color: #222;\r\n$secondary-color: #f4f4f4;\r\n$text-light: #fff;\r\n$transition-speed: 0.3s;\r\n\r\n// Mixin for flex center\r\n@mixin flex-center {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n// Global styles\r\nhtml {\r\n  scroll-behavior: smooth;\r\n  height: 100%;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: Arial, sans-serif;\r\n  min-height: 100vh;\r\n\r\n  // Full-page background\r\n  background: url('../assets/bg.jpg') no-repeat center center/cover;\r\n  background-attachment: fixed;\r\n  color: $text-light;\r\n}\r\n\r\n// Navbar\r\nheader {\r\n  position: fixed;\r\n  top: 0;\r\n  width: 100%;\r\n  background: rgba(0,0,0,0.7);\r\n  transition: all $transition-speed ease;\r\n  z-index: 1000;\r\n\r\n  nav ul {\r\n    list-style: none;\r\n    @include flex-center;\r\n    padding: 15px;\r\n    margin: 0;\r\n\r\n    li {\r\n      margin: 0 15px;\r\n\r\n      a {\r\n        color: $text-light;\r\n        text-decoration: none;\r\n        font-size: 20px;\r\n        transition: font-size $transition-speed, color $transition-speed;\r\n\r\n        &.active {\r\n          color: yellow; // Highlight active menu\r\n          font-weight: bold;\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  &.small {\r\n    nav ul li a {\r\n      font-size: 14px;\r\n    }\r\n  }\r\n}\r\n\r\n// Hero section (#home)\r\n#home {\r\n  display: flex;\r\n  flex-direction: column; // stack elements vertically\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n  min-height: 100vh;\r\n\r\n  h1, p, .btn {\r\n    display: block;\r\n    margin: 10px 0;\r\n    opacity: 0;\r\n    animation: fadeInUp 1s forwards;\r\n  }\r\n\r\n  p { animation-delay: 0.5s; }\r\n  .btn { animation-delay: 1s; }\r\n\r\n  h1 { font-size: 50px; }\r\n  p  { font-size: 24px; }\r\n\r\n  .btn {\r\n    padding: 10px 20px;\r\n    background: yellow;\r\n    color: #222;\r\n    text-decoration: none;\r\n    border-radius: 5px;\r\n    margin-top: 20px;\r\n    transition: background 0.3s;\r\n\r\n    &:hover { background: orange; }\r\n  }\r\n}\r\n\r\n// Sections\r\n.full-section {\r\n  min-height: 100vh;\r\n  @include flex-center;\r\n  text-align: center;\r\n  padding: 50px;\r\n  position: relative;\r\n}\r\n\r\n// Multi-column layout\r\n.multi-column {\r\n  display: flex;\r\n  gap: 20px;\r\n\r\n  div {\r\n    flex: 1;\r\n    background: rgba(0,0,0,0.5); // semi-transparent to show background\r\n    padding: 20px;\r\n    border-radius: 8px;\r\n  }\r\n}\r\n\r\n// Carousel\r\n.carousel {\r\n  position: relative;\r\n  width: 80%;\r\n  max-width: 800px;\r\n\r\n  .slide {\r\n    display: none;\r\n\r\n    &.active { display: block; }\r\n\r\n    img {\r\n      width: 100%;\r\n      border-radius: 8px;\r\n    }\r\n  }\r\n\r\n  button {\r\n    position: absolute;\r\n    top: 50%;\r\n    transform: translateY(-50%);\r\n    background: rgba(0,0,0,0.5);\r\n    color: $text-light;\r\n    border: none;\r\n    padding: 10px;\r\n    cursor: pointer;\r\n\r\n    &.prev { left: 0; }\r\n    &.next { right: 0; }\r\n  }\r\n}\r\n\r\n// Modal\r\n.modal {\r\n  display: none;\r\n  position: fixed;\r\n  top: 0; left: 0; width: 100%; height: 100%;\r\n  background: rgba(0,0,0,0.6);\r\n  @include flex-center;\r\n\r\n  .modal-content {\r\n    background: $text-light;\r\n    color: black;\r\n    padding: 20px;\r\n    border-radius: 8px;\r\n    animation: fadeIn 0.5s;\r\n  }\r\n\r\n  .close {\r\n    float: right;\r\n    cursor: pointer;\r\n    font-size: 20px;\r\n  }\r\n}\r\n\r\n// Footer\r\nfooter {\r\n  background: $primary-color;\r\n  color: $text-light;\r\n  text-align: center;\r\n  padding: 20px;\r\n\r\n  .social-icons {\r\n    margin-top: 10px;\r\n\r\n    .icon {\r\n      margin: 0 10px;\r\n      cursor: pointer;\r\n      transition: color $transition-speed;\r\n\r\n      &:hover { color: #00aced; }\r\n    }\r\n  }\r\n}\r\n\r\n// Animations\r\n@keyframes fadeInUp {\r\n  from { opacity: 0; transform: translateY(20px); }\r\n  to { opacity: 1; transform: translateY(0); }\r\n}\r\n\r\n@keyframes fadeIn {\r\n  from { opacity: 0; transform: scale(0.9); }\r\n  to   { opacity: 1; transform: scale(1); }\r\n}\r\n\r\n// Responsiveness\r\n@media (max-width: 1024px) {\r\n  .multi-column { flex-direction: column; }\r\n  .carousel { width: 100%; }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!*************************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "../node_modules/html-loader/dist/runtime/getUrl.js":
/*!**********************************************************!*\
  !*** ../node_modules/html-loader/dist/runtime/getUrl.js ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }
  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign

  url = String(url.__esModule ? url.default : url);
  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }
  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }
  return url;
};

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!*********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!***********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!****************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!**********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./assets/bg.jpg":
/*!***********************!*\
  !*** ./assets/bg.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "276c4f9bdc446b3e4820.jpg";

/***/ }),

/***/ "./assets/image1.png":
/*!***************************!*\
  !*** ./assets/image1.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "000d6434319bd6ab5d7c.png";

/***/ }),

/***/ "./assets/image2.png":
/*!***************************!*\
  !*** ./assets/image2.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "37cade631760160331ed.png";

/***/ }),

/***/ "./assets/video.mp4":
/*!**************************!*\
  !*** ./assets/video.mp4 ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ebd8550fafc990ce88da.mp4";

/***/ }),

/***/ "./css/main.css":
/*!**********************!*\
  !*** ./css/main.css ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "2bc5826a8304451a3352.css";

/***/ }),

/***/ "./css/main.scss":
/*!***********************!*\
  !*** ./css/main.scss ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "../node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./css/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./index.html":
/*!********************!*\
  !*** ./index.html ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "../node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./css/main.css */ "./css/main.css"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./js/main.js */ "./js/main.js?db67"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/image1.png */ "./assets/image1.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/image2.png */ "./assets/image2.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/video.mp4 */ "./assets/video.mp4"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);
var code = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n  <meta charset=\"UTF-8\">\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n  <title>Assignment Website</title>\r\n  <link rel=\"stylesheet\" href=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\">\r\n  <" + "script src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" defer><" + "/script>\r\n</head>\r\n<body>\r\n  <!-- Navbar -->\r\n  <header id=\"navbar\">\r\n    <nav>\r\n      <ul>\r\n        <li><a href=\"#home\">Home</a></li>\r\n        <li><a href=\"#carousel\">Projects</a></li>\r\n        <li><a href=\"#about\">About</a></li>\r\n        <li><a href=\"#video\">Video</a></li>\r\n        <li><a href=\"#contact\">Contact</a></li>\r\n      </ul>\r\n    </nav>\r\n  </header>\r\n\r\n  <!-- Sections -->\r\n<section id=\"home\" class=\"full-section bg-image\">\r\n  <h1 class=\"fade-in\">Hi, I’m Akash M.</h1>\r\n  <p class=\"fade-in delay-1\">Master’s Student | Aspiring Software Developer</p>\r\n  <a href=\"#carousel\" class=\"btn fade-in delay-2\">View Projects</a>\r\n</section>\r\n  \r\n  <section id=\"carousel\" class=\"full-section\">\r\n    <div class=\"carousel\">\r\n      <div class=\"slide active\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"Slide 1\"></div>\r\n      <div class=\"slide\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"Slide 2\"></div>\r\n      <button class=\"prev\">❮</button>\r\n      <button class=\"next\">❯</button>\r\n    </div>\r\n  </section>\r\n\r\n  <section id=\"about\" class=\"full-section multi-column\">\r\n    <div>\r\n      <h2>Technical Skills</h2>\r\n      <p>JAVA, C, HTML, CSS, JS</p>\r\n    </div>\r\n    <div>\r\n      <h2>Professional Experience</h2>\r\n      <p>Business analyst Internship at Presidio</p>\r\n    </div>\r\n    <div>\r\n      <h2>Education Qualification</h2>\r\n      <p>B.E. CSE in SKCET(2019-2023)<br>MCS CSE UIUC (2025-2026)\r\n      </p>\r\n    </div>\r\n  </section>\r\n\r\n  <section id=\"video\" class=\"full-section\">\r\n    <video controls width=\"640\">\r\n      <source src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" type=\"video/mp4\">\r\n      Your browser does not support the video tag.\r\n    </video>\r\n  </section>\r\n\r\n  <section id=\"contact\" class=\"full-section\">\r\n    <button id=\"openModal\">Contact Info</button>\r\n    <div id=\"myModal\" class=\"modal\">\r\n      <div class=\"modal-content\">\r\n        <span class=\"close\">&times;</span>\r\n        <p>Email:akashlalgudi2001@gmail.com<br>Github:akash-m-2001</p>\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n  <!-- Footer -->\r\n  <footer>\r\n    <p>© 2025 My Portfolio</p>\r\n    <div class=\"social-icons\">\r\n      <span class=\"icon\">F</span>\r\n      <span class=\"icon\">T</span>\r\n      <span class=\"icon\">L</span>\r\n    </div>\r\n  </footer>\r\n</body>\r\n</html>\r\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./js/main.js?9e1e":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ (() => {

// 1️⃣ Navbar shrink
var navbar = document.getElementById('navbar');
window.addEventListener('scroll', function () {
  if (window.scrollY > 50) navbar.classList.add('small');else navbar.classList.remove('small');
});

// 2️⃣ Scroll Position Indicator
var sections = document.querySelectorAll('section');
var navLinks = document.querySelectorAll('#navbar ul li a');
function updateActiveNav() {
  var scrollPos = window.scrollY + navbar.offsetHeight + 5;
  sections.forEach(function (section) {
    var top = section.offsetTop;
    var bottom = top + section.offsetHeight;
    var id = section.getAttribute('id');
    if (scrollPos >= top && scrollPos < bottom) {
      navLinks.forEach(function (link) {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + id) link.classList.add('active');
      });
    }
  });
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    navLinks.forEach(function (link) {
      return link.classList.remove('active');
    });
    navLinks[navLinks.length - 1].classList.add('active');
  }
}
window.addEventListener('scroll', updateActiveNav);
window.addEventListener('load', updateActiveNav);

// 3️⃣ Carousel
var slides = document.querySelectorAll('.slide');
var current = 0;
function showSlide(index) {
  slides.forEach(function (s) {
    return s.classList.remove('active');
  });
  slides[index].classList.add('active');
}
document.querySelector('.next').addEventListener('click', function () {
  current = (current + 1) % slides.length;
  showSlide(current);
});
document.querySelector('.prev').addEventListener('click', function () {
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
});

// 4️⃣ Modal
var modal = document.getElementById('myModal');
var btn = document.getElementById('openModal');
var span = document.querySelector('.close');
modal.style.display = 'none';
btn.onclick = function () {
  modal.style.display = 'flex';
};
span.onclick = function () {
  modal.style.display = 'none';
};
window.onclick = function (e) {
  if (e.target === modal) modal.style.display = 'none';
};

/***/ }),

/***/ "./js/main.js?db67":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "6bdc4d719f26b13f8885.js";

/***/ })

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./index.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ "./index.html");
/* harmony import */ var _css_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/main.scss */ "./css/main.scss");
/* harmony import */ var _js_main_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/main.js */ "./js/main.js?9e1e");
/* harmony import */ var _js_main_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_main_js__WEBPACK_IMPORTED_MODULE_2__);
/*
 * This is the main entry point for Webpack, the compiler & dependency loader.
 * All files that are necessary for your web page and need to be 'watched' for changes should be included here!
 */

// HTML Files


// Stylesheets


// Scripts

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map