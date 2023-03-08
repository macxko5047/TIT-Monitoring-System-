"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./i18n.tsx":
/*!******************!*\
  !*** ./i18n.tsx ***!
  \******************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"i18n\": function() { return /* reexport safe */ i18next__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; }\n/* harmony export */ });\n/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! i18next */ \"./node_modules/i18next/dist/esm/i18next.js\");\n/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ \"./node_modules/react-i18next/dist/es/index.js\");\n\n\n// the translations\n// (tip move them in a JSON file and import them,\n// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)\nconst resources = {\n    th: {\n        translation: {\n            TIMESTART: \"เวลาเริ่ม\",\n            Date: \"วันที่\",\n            Name: \"ชื่อ\",\n            station: \"ไลน์ผลิต\",\n            Shift: \"กะทำงาน\",\n            Day: \"กลางวัน\",\n            Night: \"กลางคืน\",\n            START: \"เริ่ม\",\n            pause: \"หยุดชั่วคราว\",\n            stop: \"หยุด\",\n            DownTime: \"เวลาสูญเสียในการทำงาน\",\n            Time: \"เวลา\",\n            Detail: \"รายละเอียด\",\n            SUBMIT: \"ตกลง\",\n            CLOSE: \"ยกเลิก\",\n            Donwtimetell: \"กรุณากดปุ่ม ดำเนินการต่อ เพื่อจบเวลาสูญเสียในการทำงาน\",\n            TimerDowntime: \"จับเวลาสูญเสียในการทำงาน\",\n            Running: \"กำลังทำงาน\",\n            Continue: \"ดำเนินการต่อ\",\n            EditOkQty: \"แก้ไขจำนวน OK\",\n            EditNgQty: \"แก้ไขจำนวน NG\",\n            Edit: \"แก้ไข\",\n            NGProduct: \"ชิ้นงานเสีย\",\n            ConfirmDelete: \"ยืนยัน ลบ\",\n            detailConfirmDelete: \"คุณต้องการยืนยันที่จะลบชิ้นเสียโค้ด\",\n            detailConfirmSelectWorkOrder: \"ยืนยันที่จะผลิตงานจากที่เลือกมา\",\n            Pcs: \"จำนวน\",\n            NgCode: \"โค้ดชิ้นงานเสีย\",\n            Part: \"ชิ้นส่วน\",\n            NGPartComponent: \"ชิ้นส่วนประกอบที่เสียหาย\",\n            NgQty: \"จำนวนชิ้นงานที่เสีย\",\n            //===========2============\n            SELECT: \"เลือก\",\n            People: \"ผู้คน\",\n            Add: \"เพิ่ม\",\n            Table: \"ตาราง\",\n            ConfirmStopWorkingTell: \"ยืนยัน การเสร็จสิ้นการผลิต\",\n            CONFIRM: \"ยืนยัน\",\n            ProductionUnit: \"ไลน์ที่ผลิต\",\n            Agree: \"ถัดไป\",\n            WorkOder: \"สั่งงาน\",\n            DeletePeopleDetail: \"คุณต้องการที่จะลบ ชื่อ \",\n            Department: \"แผนก\",\n            ItemNumber: \"รหัสชิ้นงาน\",\n            Qty: \"จำนวน\",\n            WorkOrder: \"เลขใบสั่งงาน\",\n            Item: \"ชิ้นงาน\",\n            ItemOder: \"รายการสั่งผลิต\",\n            TIME: \"เวลา\",\n            Level: \"ระดับ\",\n            Logout: \"ออกจากระบบ\"\n        }\n    },\n    en: {\n        translation: {\n            TIMESTART: \"TIME START\",\n            Donwtimetell: \"please push start when end of downtime\",\n            EditOkQty: \"Edit OK_qty\",\n            EditNgQty: \"Edit NG_qty\",\n            NGProduct: \"NG Product\",\n            ConfirmDelete: \"Confirm Delete\",\n            detailConfirmDelete: \"Do you want to delete NG code \",\n            detailConfirmSelectWorkOrder: \"Confirm Select Work Order\",\n            NgCode: \"NG Code\",\n            NGPartComponent: \"NG Part Component\",\n            NgQty: \"NG qty\",\n            ConfirmStopWorkingTell: \"Confirm Stop Working\",\n            ProductionUnit: \"Production Unit\",\n            WorkOder: \"Work Oder\",\n            DeletePeopleDetail: \"Do you want to delete Name\",\n            ItemOder: \"Item Order\"\n        }\n    },\n    cn: {\n        translation: {\n            TIMESTART: \"开始\",\n            Date: \"日期\",\n            Name: \"名字\",\n            station: \"ไลน์ผลิต\",\n            Shift: \"กะทำงาน\",\n            Day: \"早班\",\n            Night: \"晚班\",\n            START: \"开始\",\n            pause: \"หยุดชั่วคราว\",\n            stop: \"做完\",\n            DownTime: \"除外工时\",\n            Time: \"时间\",\n            Detail: \"รายละเอียด\",\n            SUBMIT: \"ตกลง\",\n            CLOSE: \"ยกเลิก\",\n            Donwtimetell: \"กรุณากดปุ่ม ดำเนินการต่อ เพื่อจบเวลาสูญเสียในการทำงาน\",\n            TimerDowntime: \"จับเวลาสูญเสียในการทำงาน\",\n            Running: \"กำลังทำงาน\",\n            Continue: \"ดำเนินการต่อ\",\n            EditOkQty: \"แก้ไขจำนวน OK\",\n            EditNgQty: \"แก้ไขจำนวน NG\",\n            Edit: \"แก้ไข\",\n            NGProduct: \"ชิ้นงานเสีย\",\n            ConfirmDelete: \"ยืนยัน ลบ\",\n            detailConfirmDelete: \"คุณต้องการยืนยันที่จะลบชิ้นเสียโค้ด\",\n            Pcs: \"数量\",\n            NgCode: \"โค้ดชิ้นงานเสีย\",\n            Part: \"ชิ้นส่วน\",\n            NGPartComponent: \"ชิ้นส่วนประกอบที่เสียหาย\",\n            NgQty: \"จำนวนชิ้นงานที่เสีย\"\n        }\n    },\n    vn: {\n        translation: {\n            TIMESTART: \"thời gian bắt đầu\"\n        }\n    }\n};\ni18next__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(react_i18next__WEBPACK_IMPORTED_MODULE_1__.initReactI18next) // passes i18n down to react-i18next\n.init({\n    resources,\n    lng: \"en\",\n    interpolation: {\n        escapeValue: false\n    }\n});\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9pMThuLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMkI7QUFDc0I7QUFFakQsbUJBQW1CO0FBQ25CLGlEQUFpRDtBQUNqRCxxSEFBcUg7QUFFckgsTUFBTUUsWUFBWTtJQUNoQkMsSUFBSTtRQUNGQyxhQUFhO1lBQ1hDLFdBQVc7WUFDWEMsTUFBTTtZQUNOQyxNQUFNO1lBQ05DLFNBQVM7WUFDVEMsT0FBTztZQUNQQyxLQUFLO1lBQ0xDLE9BQU87WUFDUEMsT0FBTztZQUNQQyxPQUFPO1lBQ1BDLE1BQU07WUFDTkMsVUFBVTtZQUNWQyxNQUFNO1lBQ05DLFFBQVE7WUFDUkMsUUFBUTtZQUNSQyxPQUFPO1lBQ1BDLGNBQWM7WUFDZEMsZUFBZTtZQUNmQyxTQUFTO1lBQ1RDLFVBQVU7WUFDVkMsV0FBVztZQUNYQyxXQUFXO1lBQ1hDLE1BQU07WUFDTkMsV0FBVztZQUNYQyxlQUFlO1lBQ2ZDLHFCQUFxQjtZQUNyQkMsOEJBQThCO1lBQzlCQyxLQUFLO1lBQ0xDLFFBQVE7WUFDUkMsTUFBTTtZQUNOQyxpQkFBaUI7WUFDakJDLE9BQU87WUFDUCwwQkFBMEI7WUFDMUJDLFFBQVE7WUFDUkMsUUFBUTtZQUNSQyxLQUFLO1lBQ0xDLE9BQU87WUFDUEMsd0JBQXdCO1lBQ3hCQyxTQUFTO1lBQ1RDLGdCQUFnQjtZQUNoQkMsT0FBTztZQUNQQyxVQUFVO1lBQ1ZDLG9CQUFvQjtZQUNwQkMsWUFBWTtZQUNaQyxZQUFZO1lBQ1pDLEtBQUs7WUFDTEMsV0FBVztZQUNYQyxNQUFNO1lBQ05DLFVBQVU7WUFDVkMsTUFBTTtZQUNOQyxPQUFPO1lBQ1BDLFFBQVE7UUFDVjtJQUNGO0lBQ0FDLElBQUk7UUFDRm5ELGFBQWE7WUFDWEMsV0FBVztZQUNYZSxjQUFjO1lBQ2RJLFdBQVc7WUFDWEMsV0FBVztZQUNYRSxXQUFXO1lBQ1hDLGVBQWU7WUFDZkMscUJBQXFCO1lBQ3JCQyw4QkFBOEI7WUFDOUJFLFFBQVE7WUFDUkUsaUJBQWlCO1lBQ2pCQyxPQUFPO1lBQ1BLLHdCQUF3QjtZQUN4QkUsZ0JBQWdCO1lBQ2hCRSxVQUFVO1lBQ1ZDLG9CQUFvQjtZQUNwQk0sVUFBVTtRQUNaO0lBQ0Y7SUFDQUssSUFBSTtRQUNGcEQsYUFBYTtZQUNYQyxXQUFXO1lBQ1hDLE1BQU07WUFDTkMsTUFBTTtZQUNOQyxTQUFTO1lBQ1RDLE9BQU87WUFDUEMsS0FBSztZQUNMQyxPQUFPO1lBQ1BDLE9BQU87WUFDUEMsT0FBTztZQUNQQyxNQUFNO1lBQ05DLFVBQVU7WUFDVkMsTUFBTTtZQUNOQyxRQUFRO1lBQ1JDLFFBQVE7WUFDUkMsT0FBTztZQUNQQyxjQUFjO1lBQ2RDLGVBQWU7WUFDZkMsU0FBUztZQUNUQyxVQUFVO1lBQ1ZDLFdBQVc7WUFDWEMsV0FBVztZQUNYQyxNQUFNO1lBQ05DLFdBQVc7WUFDWEMsZUFBZTtZQUNmQyxxQkFBcUI7WUFDckJFLEtBQUs7WUFDTEMsUUFBUTtZQUNSQyxNQUFNO1lBQ05DLGlCQUFpQjtZQUNqQkMsT0FBTztRQUNUO0lBQ0Y7SUFDQXNCLElBQUk7UUFDRnJELGFBQWE7WUFDWEMsV0FBVztRQUNiO0lBQ0Y7QUFDRjtBQUVBTCxtREFDTSxDQUFDQywyREFBZ0JBLEVBQUUsb0NBQW9DO0NBQzFEMEQsSUFBSSxDQUFDO0lBQ0p6RDtJQUNBMEQsS0FBSztJQUNMQyxlQUFlO1FBQ2JDLGFBQWEsS0FBSztJQUNwQjtBQUNGO0FBRWMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaTE4bi50c3g/NjUwYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaTE4biBmcm9tIFwiaTE4bmV4dFwiO1xyXG5pbXBvcnQgeyBpbml0UmVhY3RJMThuZXh0IH0gZnJvbSBcInJlYWN0LWkxOG5leHRcIjtcclxuXHJcbi8vIHRoZSB0cmFuc2xhdGlvbnNcclxuLy8gKHRpcCBtb3ZlIHRoZW0gaW4gYSBKU09OIGZpbGUgYW5kIGltcG9ydCB0aGVtLFxyXG4vLyBvciBldmVuIGJldHRlciwgbWFuYWdlIHRoZW0gc2VwYXJhdGVkIGZyb20geW91ciBjb2RlOiBodHRwczovL3JlYWN0LmkxOG5leHQuY29tL2d1aWRlcy9tdWx0aXBsZS10cmFuc2xhdGlvbi1maWxlcylcclxuXHJcbmNvbnN0IHJlc291cmNlcyA9IHtcclxuICB0aDoge1xyXG4gICAgdHJhbnNsYXRpb246IHtcclxuICAgICAgVElNRVNUQVJUOiBcIuC5gOC4p+C4peC4suC5gOC4o+C4tOC5iOC4oVwiLFxyXG4gICAgICBEYXRlOiBcIuC4p+C4seC4meC4l+C4teC5iFwiLFxyXG4gICAgICBOYW1lOiBcIuC4iuC4t+C5iOC4rVwiLFxyXG4gICAgICBzdGF0aW9uOiBcIuC5hOC4peC4meC5jOC4nOC4peC4tOC4lVwiLFxyXG4gICAgICBTaGlmdDogXCLguIHguLDguJfguLPguIfguLLguJlcIixcclxuICAgICAgRGF5OiBcIuC4geC4peC4suC4h+C4p+C4seC4mVwiLFxyXG4gICAgICBOaWdodDogXCLguIHguKXguLLguIfguITguLfguJlcIixcclxuICAgICAgU1RBUlQ6IFwi4LmA4Lij4Li04LmI4LihXCIsXHJcbiAgICAgIHBhdXNlOiBcIuC4q+C4ouC4uOC4lOC4iuC4seC5iOC4p+C4hOC4o+C4suC4p1wiLFxyXG4gICAgICBzdG9wOiBcIuC4q+C4ouC4uOC4lFwiLFxyXG4gICAgICBEb3duVGltZTogXCLguYDguKfguKXguLLguKrguLnguI3guYDguKrguLXguKLguYPguJnguIHguLLguKPguJfguLPguIfguLLguJlcIixcclxuICAgICAgVGltZTogXCLguYDguKfguKXguLJcIixcclxuICAgICAgRGV0YWlsOiBcIuC4o+C4suC4ouC4peC4sOC5gOC4reC4teC4ouC4lFwiLFxyXG4gICAgICBTVUJNSVQ6IFwi4LiV4LiB4Lil4LiHXCIsXHJcbiAgICAgIENMT1NFOiBcIuC4ouC4geC5gOC4peC4tOC4gVwiLFxyXG4gICAgICBEb253dGltZXRlbGw6IFwi4LiB4Lij4Li44LiT4Liy4LiB4LiU4Lib4Li44LmI4LihIOC4lOC4s+C5gOC4meC4tOC4meC4geC4suC4o+C4leC5iOC4rSDguYDguJ7guLfguYjguK3guIjguJrguYDguKfguKXguLLguKrguLnguI3guYDguKrguLXguKLguYPguJnguIHguLLguKPguJfguLPguIfguLLguJlcIixcclxuICAgICAgVGltZXJEb3dudGltZTogXCLguIjguLHguJrguYDguKfguKXguLLguKrguLnguI3guYDguKrguLXguKLguYPguJnguIHguLLguKPguJfguLPguIfguLLguJlcIixcclxuICAgICAgUnVubmluZzogXCLguIHguLPguKXguLHguIfguJfguLPguIfguLLguJlcIixcclxuICAgICAgQ29udGludWU6IFwi4LiU4Liz4LmA4LiZ4Li04LiZ4LiB4Liy4Lij4LiV4LmI4LitXCIsXHJcbiAgICAgIEVkaXRPa1F0eTogXCLguYHguIHguYnguYTguILguIjguLPguJnguKfguJkgT0tcIixcclxuICAgICAgRWRpdE5nUXR5OiBcIuC5geC4geC5ieC5hOC4guC4iOC4s+C4meC4p+C4mSBOR1wiLFxyXG4gICAgICBFZGl0OiBcIuC5geC4geC5ieC5hOC4glwiLFxyXG4gICAgICBOR1Byb2R1Y3Q6IFwi4LiK4Li04LmJ4LiZ4LiH4Liy4LiZ4LmA4Liq4Li14LiiXCIsXHJcbiAgICAgIENvbmZpcm1EZWxldGU6IFwi4Lii4Li34LiZ4Lii4Lix4LiZIOC4peC4mlwiLFxyXG4gICAgICBkZXRhaWxDb25maXJtRGVsZXRlOiBcIuC4hOC4uOC4k+C4leC5ieC4reC4h+C4geC4suC4o+C4ouC4t+C4meC4ouC4seC4meC4l+C4teC5iOC4iOC4sOC4peC4muC4iuC4tOC5ieC4meC5gOC4quC4teC4ouC5guC4hOC5ieC4lFwiLFxyXG4gICAgICBkZXRhaWxDb25maXJtU2VsZWN0V29ya09yZGVyOiBcIuC4ouC4t+C4meC4ouC4seC4meC4l+C4teC5iOC4iOC4sOC4nOC4peC4tOC4leC4h+C4suC4meC4iOC4suC4geC4l+C4teC5iOC5gOC4peC4t+C4reC4geC4oeC4slwiLFxyXG4gICAgICBQY3M6IFwi4LiI4Liz4LiZ4Lin4LiZXCIsXHJcbiAgICAgIE5nQ29kZTogXCLguYLguITguYnguJTguIrguLTguYnguJnguIfguLLguJnguYDguKrguLXguKJcIixcclxuICAgICAgUGFydDogXCLguIrguLTguYnguJnguKrguYjguKfguJlcIixcclxuICAgICAgTkdQYXJ0Q29tcG9uZW50OiBcIuC4iuC4tOC5ieC4meC4quC5iOC4p+C4meC4m+C4o+C4sOC4geC4reC4muC4l+C4teC5iOC5gOC4quC4teC4ouC4q+C4suC4olwiLFxyXG4gICAgICBOZ1F0eTogXCLguIjguLPguJnguKfguJnguIrguLTguYnguJnguIfguLLguJnguJfguLXguYjguYDguKrguLXguKJcIixcclxuICAgICAgLy89PT09PT09PT09PTI9PT09PT09PT09PT1cclxuICAgICAgU0VMRUNUOiBcIuC5gOC4peC4t+C4reC4gVwiLFxyXG4gICAgICBQZW9wbGU6IFwi4Lic4Li54LmJ4LiE4LiZXCIsXHJcbiAgICAgIEFkZDogXCLguYDguJ7guLTguYjguKFcIixcclxuICAgICAgVGFibGU6IFwi4LiV4Liy4Lij4Liy4LiHXCIsXHJcbiAgICAgIENvbmZpcm1TdG9wV29ya2luZ1RlbGw6IFwi4Lii4Li34LiZ4Lii4Lix4LiZIOC4geC4suC4o+C5gOC4quC4o+C5h+C4iOC4quC4tOC5ieC4meC4geC4suC4o+C4nOC4peC4tOC4lVwiLFxyXG4gICAgICBDT05GSVJNOiBcIuC4ouC4t+C4meC4ouC4seC4mVwiLFxyXG4gICAgICBQcm9kdWN0aW9uVW5pdDogXCLguYTguKXguJnguYzguJfguLXguYjguJzguKXguLTguJVcIixcclxuICAgICAgQWdyZWU6IFwi4LiW4Lix4LiU4LmE4LibXCIsXHJcbiAgICAgIFdvcmtPZGVyOiBcIuC4quC4seC5iOC4h+C4h+C4suC4mVwiLFxyXG4gICAgICBEZWxldGVQZW9wbGVEZXRhaWw6IFwi4LiE4Li44LiT4LiV4LmJ4Lit4LiH4LiB4Liy4Lij4LiX4Li14LmI4LiI4Liw4Lil4LiaIOC4iuC4t+C5iOC4rSBcIixcclxuICAgICAgRGVwYXJ0bWVudDogXCLguYHguJzguJnguIFcIixcclxuICAgICAgSXRlbU51bWJlcjogXCLguKPguKvguLHguKrguIrguLTguYnguJnguIfguLLguJlcIixcclxuICAgICAgUXR5OiBcIuC4iOC4s+C4meC4p+C4mVwiLFxyXG4gICAgICBXb3JrT3JkZXI6IFwi4LmA4Lil4LiC4LmD4Lia4Liq4Lix4LmI4LiH4LiH4Liy4LiZXCIsXHJcbiAgICAgIEl0ZW06IFwi4LiK4Li04LmJ4LiZ4LiH4Liy4LiZXCIsXHJcbiAgICAgIEl0ZW1PZGVyOiBcIuC4o+C4suC4ouC4geC4suC4o+C4quC4seC5iOC4h+C4nOC4peC4tOC4lVwiLFxyXG4gICAgICBUSU1FOiBcIuC5gOC4p+C4peC4slwiLFxyXG4gICAgICBMZXZlbDogXCLguKPguLDguJTguLHguJpcIixcclxuICAgICAgTG9nb3V0OiBcIuC4reC4reC4geC4iOC4suC4geC4o+C4sOC4muC4mlwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGVuOiB7XHJcbiAgICB0cmFuc2xhdGlvbjoge1xyXG4gICAgICBUSU1FU1RBUlQ6IFwiVElNRSBTVEFSVFwiLFxyXG4gICAgICBEb253dGltZXRlbGw6IFwicGxlYXNlIHB1c2ggc3RhcnQgd2hlbiBlbmQgb2YgZG93bnRpbWVcIixcclxuICAgICAgRWRpdE9rUXR5OiBcIkVkaXQgT0tfcXR5XCIsXHJcbiAgICAgIEVkaXROZ1F0eTogXCJFZGl0IE5HX3F0eVwiLFxyXG4gICAgICBOR1Byb2R1Y3Q6IFwiTkcgUHJvZHVjdFwiLFxyXG4gICAgICBDb25maXJtRGVsZXRlOiBcIkNvbmZpcm0gRGVsZXRlXCIsXHJcbiAgICAgIGRldGFpbENvbmZpcm1EZWxldGU6IFwiRG8geW91IHdhbnQgdG8gZGVsZXRlIE5HIGNvZGUgXCIsXHJcbiAgICAgIGRldGFpbENvbmZpcm1TZWxlY3RXb3JrT3JkZXI6IFwiQ29uZmlybSBTZWxlY3QgV29yayBPcmRlclwiLFxyXG4gICAgICBOZ0NvZGU6IFwiTkcgQ29kZVwiLFxyXG4gICAgICBOR1BhcnRDb21wb25lbnQ6IFwiTkcgUGFydCBDb21wb25lbnRcIixcclxuICAgICAgTmdRdHk6IFwiTkcgcXR5XCIsXHJcbiAgICAgIENvbmZpcm1TdG9wV29ya2luZ1RlbGw6IFwiQ29uZmlybSBTdG9wIFdvcmtpbmdcIixcclxuICAgICAgUHJvZHVjdGlvblVuaXQ6IFwiUHJvZHVjdGlvbiBVbml0XCIsXHJcbiAgICAgIFdvcmtPZGVyOiBcIldvcmsgT2RlclwiLFxyXG4gICAgICBEZWxldGVQZW9wbGVEZXRhaWw6IFwiRG8geW91IHdhbnQgdG8gZGVsZXRlIE5hbWVcIixcclxuICAgICAgSXRlbU9kZXI6IFwiSXRlbSBPcmRlclwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGNuOiB7XHJcbiAgICB0cmFuc2xhdGlvbjoge1xyXG4gICAgICBUSU1FU1RBUlQ6IFwi5byA5aeLXCIsXHJcbiAgICAgIERhdGU6IFwi5pel5pyfXCIsXHJcbiAgICAgIE5hbWU6IFwi5ZCN5a2XXCIsXHJcbiAgICAgIHN0YXRpb246IFwi4LmE4Lil4LiZ4LmM4Lic4Lil4Li04LiVXCIsXHJcbiAgICAgIFNoaWZ0OiBcIuC4geC4sOC4l+C4s+C4h+C4suC4mVwiLFxyXG4gICAgICBEYXk6IFwi5pep54+tXCIsXHJcbiAgICAgIE5pZ2h0OiBcIuaZmuePrVwiLFxyXG4gICAgICBTVEFSVDogXCLlvIDlp4tcIixcclxuICAgICAgcGF1c2U6IFwi4Lir4Lii4Li44LiU4LiK4Lix4LmI4Lin4LiE4Lij4Liy4LinXCIsXHJcbiAgICAgIHN0b3A6IFwi5YGa5a6MXCIsXHJcbiAgICAgIERvd25UaW1lOiBcIumZpOWkluW3peaXtlwiLFxyXG4gICAgICBUaW1lOiBcIuaXtumXtFwiLFxyXG4gICAgICBEZXRhaWw6IFwi4Lij4Liy4Lii4Lil4Liw4LmA4Lit4Li14Lii4LiUXCIsXHJcbiAgICAgIFNVQk1JVDogXCLguJXguIHguKXguIdcIixcclxuICAgICAgQ0xPU0U6IFwi4Lii4LiB4LmA4Lil4Li04LiBXCIsXHJcbiAgICAgIERvbnd0aW1ldGVsbDogXCLguIHguKPguLjguJPguLLguIHguJTguJvguLjguYjguKEg4LiU4Liz4LmA4LiZ4Li04LiZ4LiB4Liy4Lij4LiV4LmI4LitIOC5gOC4nuC4t+C5iOC4reC4iOC4muC5gOC4p+C4peC4suC4quC4ueC4jeC5gOC4quC4teC4ouC5g+C4meC4geC4suC4o+C4l+C4s+C4h+C4suC4mVwiLFxyXG4gICAgICBUaW1lckRvd250aW1lOiBcIuC4iOC4seC4muC5gOC4p+C4peC4suC4quC4ueC4jeC5gOC4quC4teC4ouC5g+C4meC4geC4suC4o+C4l+C4s+C4h+C4suC4mVwiLFxyXG4gICAgICBSdW5uaW5nOiBcIuC4geC4s+C4peC4seC4h+C4l+C4s+C4h+C4suC4mVwiLFxyXG4gICAgICBDb250aW51ZTogXCLguJTguLPguYDguJnguLTguJnguIHguLLguKPguJXguYjguK1cIixcclxuICAgICAgRWRpdE9rUXR5OiBcIuC5geC4geC5ieC5hOC4guC4iOC4s+C4meC4p+C4mSBPS1wiLFxyXG4gICAgICBFZGl0TmdRdHk6IFwi4LmB4LiB4LmJ4LmE4LiC4LiI4Liz4LiZ4Lin4LiZIE5HXCIsXHJcbiAgICAgIEVkaXQ6IFwi4LmB4LiB4LmJ4LmE4LiCXCIsXHJcbiAgICAgIE5HUHJvZHVjdDogXCLguIrguLTguYnguJnguIfguLLguJnguYDguKrguLXguKJcIixcclxuICAgICAgQ29uZmlybURlbGV0ZTogXCLguKLguLfguJnguKLguLHguJkg4Lil4LiaXCIsXHJcbiAgICAgIGRldGFpbENvbmZpcm1EZWxldGU6IFwi4LiE4Li44LiT4LiV4LmJ4Lit4LiH4LiB4Liy4Lij4Lii4Li34LiZ4Lii4Lix4LiZ4LiX4Li14LmI4LiI4Liw4Lil4Lia4LiK4Li04LmJ4LiZ4LmA4Liq4Li14Lii4LmC4LiE4LmJ4LiUXCIsXHJcbiAgICAgIFBjczogXCLmlbDph49cIixcclxuICAgICAgTmdDb2RlOiBcIuC5guC4hOC5ieC4lOC4iuC4tOC5ieC4meC4h+C4suC4meC5gOC4quC4teC4olwiLFxyXG4gICAgICBQYXJ0OiBcIuC4iuC4tOC5ieC4meC4quC5iOC4p+C4mVwiLFxyXG4gICAgICBOR1BhcnRDb21wb25lbnQ6IFwi4LiK4Li04LmJ4LiZ4Liq4LmI4Lin4LiZ4Lib4Lij4Liw4LiB4Lit4Lia4LiX4Li14LmI4LmA4Liq4Li14Lii4Lir4Liy4LiiXCIsXHJcbiAgICAgIE5nUXR5OiBcIuC4iOC4s+C4meC4p+C4meC4iuC4tOC5ieC4meC4h+C4suC4meC4l+C4teC5iOC5gOC4quC4teC4olwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHZuOiB7XHJcbiAgICB0cmFuc2xhdGlvbjoge1xyXG4gICAgICBUSU1FU1RBUlQ6IFwidGjhu51pIGdpYW4gYuG6r3QgxJHhuqd1XCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcblxyXG5pMThuXHJcbiAgLnVzZShpbml0UmVhY3RJMThuZXh0KSAvLyBwYXNzZXMgaTE4biBkb3duIHRvIHJlYWN0LWkxOG5leHRcclxuICAuaW5pdCh7XHJcbiAgICByZXNvdXJjZXMsXHJcbiAgICBsbmc6IFwiZW5cIiwgLy/guKPguLDguJrguLjguKDguLLguKnguLLguYDguKPguLTguYjguKHguJXguYnguJlcclxuICAgIGludGVycG9sYXRpb246IHtcclxuICAgICAgZXNjYXBlVmFsdWU6IGZhbHNlLCAvLyByZWFjdCBhbHJlYWR5IHNhZmVzIGZyb20geHNzXHJcbiAgICB9LFxyXG4gIH0pO1xyXG5cclxuZXhwb3J0IHsgaTE4biB9O1xyXG4iXSwibmFtZXMiOlsiaTE4biIsImluaXRSZWFjdEkxOG5leHQiLCJyZXNvdXJjZXMiLCJ0aCIsInRyYW5zbGF0aW9uIiwiVElNRVNUQVJUIiwiRGF0ZSIsIk5hbWUiLCJzdGF0aW9uIiwiU2hpZnQiLCJEYXkiLCJOaWdodCIsIlNUQVJUIiwicGF1c2UiLCJzdG9wIiwiRG93blRpbWUiLCJUaW1lIiwiRGV0YWlsIiwiU1VCTUlUIiwiQ0xPU0UiLCJEb253dGltZXRlbGwiLCJUaW1lckRvd250aW1lIiwiUnVubmluZyIsIkNvbnRpbnVlIiwiRWRpdE9rUXR5IiwiRWRpdE5nUXR5IiwiRWRpdCIsIk5HUHJvZHVjdCIsIkNvbmZpcm1EZWxldGUiLCJkZXRhaWxDb25maXJtRGVsZXRlIiwiZGV0YWlsQ29uZmlybVNlbGVjdFdvcmtPcmRlciIsIlBjcyIsIk5nQ29kZSIsIlBhcnQiLCJOR1BhcnRDb21wb25lbnQiLCJOZ1F0eSIsIlNFTEVDVCIsIlBlb3BsZSIsIkFkZCIsIlRhYmxlIiwiQ29uZmlybVN0b3BXb3JraW5nVGVsbCIsIkNPTkZJUk0iLCJQcm9kdWN0aW9uVW5pdCIsIkFncmVlIiwiV29ya09kZXIiLCJEZWxldGVQZW9wbGVEZXRhaWwiLCJEZXBhcnRtZW50IiwiSXRlbU51bWJlciIsIlF0eSIsIldvcmtPcmRlciIsIkl0ZW0iLCJJdGVtT2RlciIsIlRJTUUiLCJMZXZlbCIsIkxvZ291dCIsImVuIiwiY24iLCJ2biIsInVzZSIsImluaXQiLCJsbmciLCJpbnRlcnBvbGF0aW9uIiwiZXNjYXBlVmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./i18n.tsx\n"));

/***/ })

});