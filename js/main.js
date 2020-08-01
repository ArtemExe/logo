!function(e){var n={};function r(_){if(n[_])return n[_].exports;var t=n[_]={i:_,l:!1,exports:{}};return e[_].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=e,r.c=n,r.d=function(e,n,_){r.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:_})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,n){if(1&n&&(e=r(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var _=Object.create(null);if(r.r(_),Object.defineProperty(_,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)r.d(_,t,function(n){return e[n]}.bind(null,t));return _},r.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(n,"a",n),n},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.p="",r(r.s="./src/js/main.js")}({"./src/js/func.js":
/*!************************!*\
  !*** ./src/js/func.js ***!
  \************************/
/*! exports provided: asd */function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"asd\", function() { return asd; });\nfunction asd() {\n  console.log('asdsdfs');\n}\n\n//# sourceURL=webpack:///./src/js/func.js?")},"./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _func__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./func */ \"./src/js/func.js\");\n\nObject(_func__WEBPACK_IMPORTED_MODULE_0__[\"asd\"])();\n$('.menu-burger').on('click', function () {\n  $('.menu-list').slideToggle();\n});\n\n//# sourceURL=webpack:///./src/js/main.js?")}});
//# sourceMappingURL=main.js.map
