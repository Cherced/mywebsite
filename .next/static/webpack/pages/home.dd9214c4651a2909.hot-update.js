"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/home",{

/***/ "./Components/CarruselContainer.jsx":
/*!******************************************!*\
  !*** ./Components/CarruselContainer.jsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CarruselContainer\": function() { return /* binding */ CarruselContainer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nvar CarruselContainer = function(props) {\n    var goToPage = function goToPage() {\n        router.push(\"proyects/\".concat(props.id));\n    };\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: goToPage,\n        className: \"sliderContentItem__image\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            className: \"sliderImg\",\n            src: props.src,\n            alt: \"movies top\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\HITMA\\\\Desktop\\\\Datas\\\\Proyectos\\\\mywebsite\\\\Components\\\\CarruselContainer.jsx\",\n            lineNumber: 11,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\HITMA\\\\Desktop\\\\Datas\\\\Proyectos\\\\mywebsite\\\\Components\\\\CarruselContainer.jsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, _this);\n};\n_s(CarruselContainer, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = CarruselContainer;\nvar _c;\n$RefreshReg$(_c, \"CarruselContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb25lbnRzL0NhcnJ1c2VsQ29udGFpbmVyLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0FBQXlCO0FBQ1k7O0FBRTlCLElBQU1FLGlCQUFpQixHQUFHLFNBQUNDLEtBQUssRUFBSztRQUUvQkMsUUFBUSxHQUFqQixTQUFTQSxRQUFRLEdBQUc7UUFDaEJDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDLFdBQVUsQ0FBVyxPQUFUSCxLQUFLLENBQUNJLEVBQUUsQ0FBRSxDQUFDO0tBQ3RDOztJQUhELElBQU1GLE1BQU0sR0FBR0osc0RBQVMsRUFBRTtJQUkxQixxQkFDQSw4REFBQ08sUUFBTTtRQUFDQyxPQUFPLEVBQUVMLFFBQVE7UUFBRU0sU0FBUyxFQUFDLDBCQUEwQjtrQkFDM0QsNEVBQUNDLEtBQUc7WUFBQ0QsU0FBUyxFQUFDLFdBQVc7WUFBQ0UsR0FBRyxFQUFFVCxLQUFLLENBQUNTLEdBQUc7WUFBRUMsR0FBRyxFQUFDLFlBQVk7Ozs7O2lCQUFFOzs7OzthQUN4RCxDQUNWO0NBQ0Y7R0FWWVgsaUJBQWlCOztRQUNYRCxrREFBUzs7O0FBRGZDLEtBQUFBLGlCQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9Db21wb25lbnRzL0NhcnJ1c2VsQ29udGFpbmVyLmpzeD85OGMwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuZXhwb3J0IGNvbnN0IENhcnJ1c2VsQ29udGFpbmVyID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTsgICAgXHJcbiAgICBmdW5jdGlvbiBnb1RvUGFnZSgpIHtcclxuICAgICAgICByb3V0ZXIucHVzaChgcHJveWVjdHMvJHtwcm9wcy5pZH1gKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgIDxidXR0b24gb25DbGljaz17Z29Ub1BhZ2V9IGNsYXNzTmFtZT1cInNsaWRlckNvbnRlbnRJdGVtX19pbWFnZVwiPlxyXG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPVwic2xpZGVySW1nXCIgc3JjPXtwcm9wcy5zcmN9IGFsdD1cIm1vdmllcyB0b3BcIi8+XHJcbiAgICA8L2J1dHRvbj5cclxuICApXHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUm91dGVyIiwiQ2FycnVzZWxDb250YWluZXIiLCJwcm9wcyIsImdvVG9QYWdlIiwicm91dGVyIiwicHVzaCIsImlkIiwiYnV0dG9uIiwib25DbGljayIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsImFsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Components/CarruselContainer.jsx\n");

/***/ })

});