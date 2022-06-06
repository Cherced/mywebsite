"use strict";
exports.id = 510;
exports.ids = [510];
exports.modules = {

/***/ 510:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(913);

class DataBase {
    constructor(){}
    getAll() {
        return new Promise(async (resolve, reject)=>{
            try {
                const asArray = Object.values(_data__WEBPACK_IMPORTED_MODULE_0__["default"]);
                console.log("allDATA:", asArray);
                await randomDelay();
                resolve(asArray);
            } catch (error) {
                reject(error);
            }
        });
    }
    getById(id) {
        return new Promise(async (resolve, reject)=>{
            try {
                const project1 = Object.values(_data__WEBPACK_IMPORTED_MODULE_0__["default"]).find((project)=>project.id === id
                );
                await randomDelay();
                resolve(project1);
            } catch (error) {
                reject(error);
            }
        });
    }
}
const randomDelay = ()=>new Promise((resolve)=>{
        const max = 350;
        const min = 100;
        const delay = Math.floor(Math.random() * (max - min + 1)) + min;
        setTimeout(resolve, delay);
    })
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DataBase);


/***/ })

};
;