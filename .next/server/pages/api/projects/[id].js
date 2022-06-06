"use strict";
(() => {
var exports = {};
exports.id = 728;
exports.ids = [728];
exports.modules = {

/***/ 40:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _database_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(510);

const allProjectsById = async (req, res)=>{
    const db = new _database_db__WEBPACK_IMPORTED_MODULE_0__["default"]();
    const id = req.query.id;
    const project = await db.getById(id);
    res.json(project);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (allProjectsById);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [913,510], () => (__webpack_exec__(40)));
module.exports = __webpack_exports__;

})();