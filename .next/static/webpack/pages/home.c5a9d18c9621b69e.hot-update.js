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

/***/ "./Components/Header.jsx":
/*!*******************************!*\
  !*** ./Components/Header.jsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Header\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\nvar _s = $RefreshSig$();\nvar Header = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), resume = ref[0], setResume = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), menu = ref1[0], setMenu = ref1[1];\n    var handleClickShowResume = function() {\n        console.log(\"clicked\");\n        if (!menu) {\n            setResume(!resume);\n        } else {\n            setResume(resume);\n        }\n    };\n    var handleClickShowMenu = function() {\n        console.log(\"clicked\");\n        if (!resume) {\n            setMenu(!menu);\n        } else {\n            setMenu(menu);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (handleClickShowResume) {\n            console.log(\"clicked en resume\");\n        }\n        if (handleClickShowMenu) {\n            console.log(\"clicked en menu\");\n        }\n    }, [\n        handleClickShowResume,\n        handleClickShowMenu\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n            className: \"menu\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"logo\",\n                    onClick: handleClickShowResume,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"/assets/images/brand.png\",\n                        alt: \"brand\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HITMA\\\\Desktop\\\\Datas\\\\Proyectos\\\\mywebsite\\\\Components\\\\Header.jsx\",\n                        lineNumber: 39,\n                        columnNumber: 60\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HITMA\\\\Desktop\\\\Datas\\\\Proyectos\\\\mywebsite\\\\Components\\\\Header.jsx\",\n                    lineNumber: 39,\n                    columnNumber: 5\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"resume \".concat(resume ? \"show2\" : \"\"),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"/assets/images/brandIntro.png\",\n                            alt: \"brandIntro\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\HITMA\\\\Desktop\\\\Datas\\\\Proyectos\\\\mywebsite\\\\Components\\\\Header.jsx\",\n                            lineNumber: 41,\n                            columnNumber: 7\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"I am a professional in business administration, the last 8 years of my life I have worked in all operational areas of a corporation, leading a company of civil projects, there I learned about programming, and I fell in love with the whole beautiful world computer science, so I am looking for an opportunity to demonstrate my capabilities and take my talents to another level, I believe in continuous learning as the most important added value of my profile, thanks for reading.\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\HITMA\\\\Desktop\\\\Datas\\\\Proyectos\\\\mywebsite\\\\Components\\\\Header.jsx\",\n                            lineNumber: 42,\n                            columnNumber: 7\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"https://www.youtube.com/watch?v=2Z603ccaj74\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"button\",\n                                type: \"text\",\n                                children: \"MORE\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\HITMA\\\\Desktop\\\\Datas\\\\Proyectos\\\\mywebsite\\\\Components\\\\Header.jsx\",\n                                lineNumber: 52,\n                                columnNumber: 61\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\HITMA\\\\Desktop\\\\Datas\\\\Proyectos\\\\mywebsite\\\\Components\\\\Header.jsx\",\n                            lineNumber: 52,\n                            columnNumber: 7\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\HITMA\\\\Desktop\\\\Datas\\\\Proyectos\\\\mywebsite\\\\Components\\\\Header.jsx\",\n                    lineNumber: 40,\n                    columnNumber: 5\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"menu_items \".concat(menu ? \"show\" : \"\"),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"active\",\n                                href: \"#\",\n                                children: \"Servicios\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\HITMA\\\\Desktop\\\\Datas\\\\Proyectos\\\\mywebsite\\\\Components\\\\Header.jsx\",\n                                lineNumber: 55,\n                                columnNumber: 11\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\HITMA\\\\Desktop\\\\Datas\\\\Proyectos\\\\mywebsite\\\\Components\\\\Header.jsx\",\n                            lineNumber: 55,\n                            columnNumber: 7\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"#\",\n                                children: \"Nosotros\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\HITMA\\\\Desktop\\\\Datas\\\\Proyectos\\\\mywebsite\\\\Components\\\\Header.jsx\",\n                                lineNumber: 56,\n                                columnNumber: 11\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\HITMA\\\\Desktop\\\\Datas\\\\Proyectos\\\\mywebsite\\\\Components\\\\Header.jsx\",\n                            lineNumber: 56,\n                            columnNumber: 7\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"#\",\n                                children: \"Portafolio\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\HITMA\\\\Desktop\\\\Datas\\\\Proyectos\\\\mywebsite\\\\Components\\\\Header.jsx\",\n                                lineNumber: 57,\n                                columnNumber: 11\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\HITMA\\\\Desktop\\\\Datas\\\\Proyectos\\\\mywebsite\\\\Components\\\\Header.jsx\",\n                            lineNumber: 57,\n                            columnNumber: 7\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"#\",\n                                children: \"Blog\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\HITMA\\\\Desktop\\\\Datas\\\\Proyectos\\\\mywebsite\\\\Components\\\\Header.jsx\",\n                                lineNumber: 58,\n                                columnNumber: 11\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\HITMA\\\\Desktop\\\\Datas\\\\Proyectos\\\\mywebsite\\\\Components\\\\Header.jsx\",\n                            lineNumber: 58,\n                            columnNumber: 7\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"#\",\n                                children: \"Cont\\xe1ctenos\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\HITMA\\\\Desktop\\\\Datas\\\\Proyectos\\\\mywebsite\\\\Components\\\\Header.jsx\",\n                                lineNumber: 59,\n                                columnNumber: 11\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\HITMA\\\\Desktop\\\\Datas\\\\Proyectos\\\\mywebsite\\\\Components\\\\Header.jsx\",\n                            lineNumber: 59,\n                            columnNumber: 7\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\HITMA\\\\Desktop\\\\Datas\\\\Proyectos\\\\mywebsite\\\\Components\\\\Header.jsx\",\n                    lineNumber: 54,\n                    columnNumber: 5\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"btn_menu\",\n                    onClick: handleClickShowMenu,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"/assets/images/Navbar.png\",\n                        alt: \"Nav\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HITMA\\\\Desktop\\\\Datas\\\\Proyectos\\\\mywebsite\\\\Components\\\\Header.jsx\",\n                        lineNumber: 62,\n                        columnNumber: 7\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HITMA\\\\Desktop\\\\Datas\\\\Proyectos\\\\mywebsite\\\\Components\\\\Header.jsx\",\n                    lineNumber: 61,\n                    columnNumber: 5\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\HITMA\\\\Desktop\\\\Datas\\\\Proyectos\\\\mywebsite\\\\Components\\\\Header.jsx\",\n            lineNumber: 38,\n            columnNumber: 3\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\HITMA\\\\Desktop\\\\Datas\\\\Proyectos\\\\mywebsite\\\\Components\\\\Header.jsx\",\n        lineNumber: 37,\n        columnNumber: 1\n    }, _this);\n};\n_s(Header, \"9ip0VbeygKHB3N51NfY26IFA9RQ=\");\n_c = Header;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFLO3NDQUNuQyw4REFBQ0ksSUFBRTtzQ0FBQyw0RUFBQ0wsR0FBQztnQ0FBQ0MsSUFBSSxFQUFDLEdBQUc7MENBQUMsTUFBSTs7Ozs7cUNBQUk7Ozs7O2lDQUFLO3NDQUM3Qiw4REFBQ0ksSUFBRTtzQ0FBQyw0RUFBQ0wsR0FBQztnQ0FBQ0MsSUFBSSxFQUFDLEdBQUc7MENBQUMsZ0JBQVc7Ozs7O3FDQUFJOzs7OztpQ0FBSzs7Ozs7O3lCQUNqQzs4QkFDTCw4REFBQ1IsTUFBSTtvQkFBQ0QsU0FBUyxFQUFDLFVBQVU7b0JBQUNFLE9BQU8sRUFBRUwsbUJBQW1COzhCQUNyRCw0RUFBQ00sS0FBRzt3QkFBQ0MsR0FBRyxFQUFDLDJCQUEyQjt3QkFBQ0MsR0FBRyxFQUFDLEtBQUs7Ozs7OzZCQUFHOzs7Ozt5QkFDNUM7Ozs7OztpQkFDSDs7Ozs7YUFDQyxDQUNOO0NBQ0Y7R0FoRVloQixNQUFNO0FBQU5BLEtBQUFBLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9IZWFkZXIuanN4P2MyYWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXHJcblxyXG5leHBvcnQgY29uc3QgSGVhZGVyID0gKCkgPT4ge1xyXG5jb25zdCBbcmVzdW1lLCBzZXRSZXN1bWVdID0gdXNlU3RhdGUoZmFsc2UpXHJcbmNvbnN0IFsgbWVudSwgc2V0TWVudSBdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG5jb25zdCBoYW5kbGVDbGlja1Nob3dSZXN1bWUgPSAoKSA9PiB7XHJcbiAgY29uc29sZS5sb2coJ2NsaWNrZWQnKVxyXG4gIGlmICghbWVudSkge1xyXG4gICAgc2V0UmVzdW1lKCFyZXN1bWUpXHJcbiAgfSBlbHNlIHtcclxuICAgIHNldFJlc3VtZShyZXN1bWUpXHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBoYW5kbGVDbGlja1Nob3dNZW51ID0gKCkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKCdjbGlja2VkJylcclxuICBpZiAoIXJlc3VtZSkge1xyXG4gICAgc2V0TWVudSghbWVudSlcclxuICB9IGVsc2Uge1xyXG4gICAgc2V0TWVudShtZW51KVxyXG4gIH1cclxufVxyXG5cclxudXNlRWZmZWN0KCgpID0+IHtcclxuICBpZiAoaGFuZGxlQ2xpY2tTaG93UmVzdW1lKSB7XHJcbiAgICBjb25zb2xlLmxvZygnY2xpY2tlZCBlbiByZXN1bWUnKVxyXG4gIH0gXHJcbiAgaWYgKGhhbmRsZUNsaWNrU2hvd01lbnUpIHtcclxuICAgIGNvbnNvbGUubG9nKCdjbGlja2VkIGVuIG1lbnUnKVxyXG4gIH1cclxufSwgWyBoYW5kbGVDbGlja1Nob3dSZXN1bWUsIGhhbmRsZUNsaWNrU2hvd01lbnUgXSkgXHJcblxyXG5cclxuICBcclxuICByZXR1cm4gKFxyXG48aGVhZGVyPlxyXG4gIDxuYXYgY2xhc3NOYW1lPVwibWVudVwiPlxyXG4gICAgPHNwYW4gY2xhc3NOYW1lPVwibG9nb1wiIG9uQ2xpY2s9e2hhbmRsZUNsaWNrU2hvd1Jlc3VtZX0+PGltZyBzcmM9XCIvYXNzZXRzL2ltYWdlcy9icmFuZC5wbmdcIiBhbHQ9XCJicmFuZFwiIC8+PC9zcGFuPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2ByZXN1bWUgJHtyZXN1bWUgPyBcInNob3cyXCIgOiBcIlwifWB9PlxyXG4gICAgICA8aW1nIHNyYz1cIi9hc3NldHMvaW1hZ2VzL2JyYW5kSW50cm8ucG5nXCIgYWx0PVwiYnJhbmRJbnRyb1wiIC8+XHJcbiAgICAgIDxwPlxyXG4gICAgICAgIEkgYW0gYSBwcm9mZXNzaW9uYWwgaW4gYnVzaW5lc3MgYWRtaW5pc3RyYXRpb24sIHRoZSBsYXN0IDggeWVhcnMgb2ZcclxuICAgICAgICBteSBsaWZlIEkgaGF2ZSB3b3JrZWQgaW4gYWxsIG9wZXJhdGlvbmFsIGFyZWFzIG9mIGEgY29ycG9yYXRpb24sXHJcbiAgICAgICAgbGVhZGluZyBhIGNvbXBhbnkgb2YgY2l2aWwgcHJvamVjdHMsIHRoZXJlIEkgbGVhcm5lZCBhYm91dFxyXG4gICAgICAgIHByb2dyYW1taW5nLCBhbmQgSSBmZWxsIGluIGxvdmUgd2l0aCB0aGUgd2hvbGUgYmVhdXRpZnVsIHdvcmxkXHJcbiAgICAgICAgY29tcHV0ZXIgc2NpZW5jZSwgc28gSSBhbSBsb29raW5nIGZvciBhbiBvcHBvcnR1bml0eSB0byBkZW1vbnN0cmF0ZVxyXG4gICAgICAgIG15IGNhcGFiaWxpdGllcyBhbmQgdGFrZSBteSB0YWxlbnRzIHRvIGFub3RoZXIgbGV2ZWwsIEkgYmVsaWV2ZSBpblxyXG4gICAgICAgIGNvbnRpbnVvdXMgbGVhcm5pbmcgYXMgdGhlIG1vc3QgaW1wb3J0YW50IGFkZGVkIHZhbHVlIG9mIG15IHByb2ZpbGUsXHJcbiAgICAgICAgdGhhbmtzIGZvciByZWFkaW5nLlxyXG4gICAgICA8L3A+XHJcbiAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PTJaNjAzY2Nhajc0XCI+PGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b25cIiB0eXBlPVwidGV4dFwiPk1PUkU8L2J1dHRvbj48L2E+XHJcbiAgICA8L2Rpdj5cclxuICAgIDx1bCBjbGFzc05hbWU9e2BtZW51X2l0ZW1zICR7bWVudSA/IFwic2hvd1wiIDogXCJcIn1gfT5cclxuICAgICAgPGxpPjxhIGNsYXNzTmFtZT1cImFjdGl2ZVwiIGhyZWY9XCIjXCI+U2VydmljaW9zPC9hPjwvbGk+XHJcbiAgICAgIDxsaT48YSBocmVmPVwiI1wiPk5vc290cm9zPC9hPjwvbGk+XHJcbiAgICAgIDxsaT48YSBocmVmPVwiI1wiPlBvcnRhZm9saW88L2E+PC9saT5cclxuICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+QmxvZzwvYT48L2xpPlxyXG4gICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Db250w6FjdGVub3M8L2E+PC9saT5cclxuICAgIDwvdWw+XHJcbiAgICA8c3BhbiBjbGFzc05hbWU9XCJidG5fbWVudVwiIG9uQ2xpY2s9e2hhbmRsZUNsaWNrU2hvd01lbnV9PlxyXG4gICAgICA8aW1nIHNyYz1cIi9hc3NldHMvaW1hZ2VzL05hdmJhci5wbmdcIiBhbHQ9XCJOYXZcIiAvPlxyXG4gICAgPC9zcGFuPlxyXG4gIDwvbmF2PlxyXG48L2hlYWRlcj5cclxuICApXHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJIZWFkZXIiLCJyZXN1bWUiLCJzZXRSZXN1bWUiLCJtZW51Iiwic2V0TWVudSIsImhhbmRsZUNsaWNrU2hvd1Jlc3VtZSIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVDbGlja1Nob3dNZW51IiwiaGVhZGVyIiwibmF2IiwiY2xhc3NOYW1lIiwic3BhbiIsIm9uQ2xpY2siLCJpbWciLCJzcmMiLCJhbHQiLCJkaXYiLCJwIiwiYSIsImhyZWYiLCJidXR0b24iLCJ0eXBlIiwidWwiLCJsaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Components/Header.jsx\n");

/***/ })

});