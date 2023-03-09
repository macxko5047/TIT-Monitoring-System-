"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./i18n.tsx":
/*!******************!*\
  !*** ./i18n.tsx ***!
  \******************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"i18n\": () => (/* reexport safe */ i18next__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! i18next */ \"i18next\");\n/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ \"react-i18next\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([i18next__WEBPACK_IMPORTED_MODULE_0__, react_i18next__WEBPACK_IMPORTED_MODULE_1__]);\n([i18next__WEBPACK_IMPORTED_MODULE_0__, react_i18next__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n// the translations\n// (tip move them in a JSON file and import them,\n// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)\nconst resources = {\n    th: {\n        translation: {\n            TIMESTART: \"เวลาเริ่ม\",\n            Date: \"วันที่\",\n            Name: \"ชื่อ\",\n            station: \"ไลน์ผลิต\",\n            Shift: \"กะทำงาน\",\n            Day: \"กลางวัน\",\n            Night: \"กลางคืน\",\n            START: \"เริ่ม\",\n            pause: \"หยุดชั่วคราว\",\n            stop: \"หยุด\",\n            DownTime: \"เวลาสูญเสียในการทำงาน\",\n            Time: \"เวลา\",\n            Detail: \"รายละเอียด\",\n            SUBMIT: \"ตกลง\",\n            CLOSE: \"ยกเลิก\",\n            Donwtimetell: \"กรุณากดปุ่ม ดำเนินการต่อ เพื่อจบเวลาสูญเสียในการทำงาน\",\n            TimerDowntime: \"จับเวลาสูญเสียในการทำงาน\",\n            Running: \"กำลังทำงาน\",\n            Continue: \"ดำเนินการต่อ\",\n            EditOkQty: \"แก้ไขจำนวน OK\",\n            EditNgQty: \"แก้ไขจำนวน NG\",\n            Edit: \"แก้ไข\",\n            NGProduct: \"ชิ้นงานเสีย\",\n            ConfirmDelete: \"ยืนยัน ลบ\",\n            detailConfirmDelete: \"คุณต้องการยืนยันที่จะลบชิ้นเสียโค้ด\",\n            detailConfirmSelectWorkOrder: \"ยืนยันที่จะผลิตงานจากที่เลือกมา\",\n            Pcs: \"จำนวน\",\n            NgCode: \"โค้ดชิ้นงานเสีย\",\n            Part: \"ชิ้นส่วน\",\n            NGPartComponent: \"ชิ้นส่วนประกอบที่เสียหาย\",\n            NgQty: \"จำนวนชิ้นงานที่เสีย\",\n            //===========2============\n            SELECT: \"เลือก\",\n            People: \"ผู้คน\",\n            Add: \"เพิ่ม\",\n            Table: \"ตาราง\",\n            ConfirmStopWorkingTell: \"ยืนยัน การเสร็จสิ้นการผลิต\",\n            CONFIRM: \"ยืนยัน\",\n            ProductionUnit: \"ไลน์ที่ผลิต\",\n            Agree: \"ถัดไป\",\n            WorkOder: \"สั่งงาน\",\n            DeletePeopleDetail: \"คุณต้องการที่จะลบ ชื่อ \",\n            Department: \"แผนก\",\n            ItemNumber: \"รหัสชิ้นงาน\",\n            Qty: \"จำนวน\",\n            WorkOrder: \"เลขใบสั่งงาน\",\n            Item: \"ชิ้นงาน\",\n            ItemOder: \"รายการสั่งผลิต\",\n            TIME: \"เวลา\",\n            Level: \"ระดับ\",\n            Logout: \"ออกจากระบบ\",\n            detailConfirmLogOut: \"คุณต้องการที่จะออกจากระบบของ รหัสพนักงาน\",\n            ConfirmLogOutTime: \"ยืนยันการออกจากระบบ เวลา\",\n            SignIn: \"เข้าสู่ระบบ\",\n            ItemRun: \"ชิ้นงานที่กำลังผลิต\",\n            Dashboard: \"แผงควบคุม\",\n            RegisterUser: \"สมัครสมาชิกพนักงาน\",\n            SelectWorkOrder: \"เลือกใบสั่งงาน\"\n        }\n    },\n    en: {\n        translation: {\n            TIMESTART: \"TIME START\",\n            Donwtimetell: \"please push start when end of downtime\",\n            EditOkQty: \"Edit OK_qty\",\n            EditNgQty: \"Edit NG_qty\",\n            NGProduct: \"NG Product\",\n            ConfirmDelete: \"Confirm Delete\",\n            detailConfirmDelete: \"Do you want to delete NG code \",\n            detailConfirmSelectWorkOrder: \"Confirm Select Work Order\",\n            NgCode: \"NG Code\",\n            NGPartComponent: \"NG Part Component\",\n            NgQty: \"NG qty\",\n            ConfirmStopWorkingTell: \"Confirm Stop Working\",\n            ProductionUnit: \"Production Unit\",\n            WorkOder: \"Work Oder\",\n            DeletePeopleDetail: \"Do you want to delete Name\",\n            ItemOder: \"Item Order\",\n            detailConfirmLogOut: \"Do you want to LogOut NO \",\n            ConfirmLogOutTime: \"Confirm LogOut Time\",\n            SignIn: \"Sign In\",\n            ItemRun: \"Item Run\",\n            RegisterUser: \"Register User\",\n            SelectWorkOrder: \"Select Work Order\"\n        }\n    },\n    cn: {\n        translation: {\n            TIMESTART: \"开始\",\n            Date: \"日期\",\n            Name: \"名字\",\n            station: \"ไลน์ผลิต\",\n            Shift: \"กะทำงาน\",\n            Day: \"早班\",\n            Night: \"晚班\",\n            START: \"开始\",\n            pause: \"หยุดชั่วคราว\",\n            stop: \"做完\",\n            DownTime: \"除外工时\",\n            Time: \"时间\",\n            Detail: \"รายละเอียด\",\n            SUBMIT: \"ตกลง\",\n            CLOSE: \"ยกเลิก\",\n            Donwtimetell: \"กรุณากดปุ่ม ดำเนินการต่อ เพื่อจบเวลาสูญเสียในการทำงาน\",\n            TimerDowntime: \"จับเวลาสูญเสียในการทำงาน\",\n            Running: \"กำลังทำงาน\",\n            Continue: \"ดำเนินการต่อ\",\n            EditOkQty: \"แก้ไขจำนวน OK\",\n            EditNgQty: \"แก้ไขจำนวน NG\",\n            Edit: \"แก้ไข\",\n            NGProduct: \"ชิ้นงานเสีย\",\n            ConfirmDelete: \"ยืนยัน ลบ\",\n            detailConfirmDelete: \"คุณต้องการยืนยันที่จะลบชิ้นเสียโค้ด\",\n            Pcs: \"数量\",\n            NgCode: \"โค้ดชิ้นงานเสีย\",\n            Part: \"ชิ้นส่วน\",\n            NGPartComponent: \"ชิ้นส่วนประกอบที่เสียหาย\",\n            NgQty: \"จำนวนชิ้นงานที่เสีย\"\n        }\n    },\n    vn: {\n        translation: {\n            TIMESTART: \"thời gian bắt đầu\"\n        }\n    }\n};\ni18next__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(react_i18next__WEBPACK_IMPORTED_MODULE_1__.initReactI18next) // passes i18n down to react-i18next\n.init({\n    resources,\n    lng: \"en\",\n    interpolation: {\n        escapeValue: false\n    }\n});\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9pMThuLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBMkI7QUFDc0I7QUFFakQsbUJBQW1CO0FBQ25CLGlEQUFpRDtBQUNqRCxxSEFBcUg7QUFFckgsTUFBTUUsWUFBWTtJQUNoQkMsSUFBSTtRQUNGQyxhQUFhO1lBQ1hDLFdBQVc7WUFDWEMsTUFBTTtZQUNOQyxNQUFNO1lBQ05DLFNBQVM7WUFDVEMsT0FBTztZQUNQQyxLQUFLO1lBQ0xDLE9BQU87WUFDUEMsT0FBTztZQUNQQyxPQUFPO1lBQ1BDLE1BQU07WUFDTkMsVUFBVTtZQUNWQyxNQUFNO1lBQ05DLFFBQVE7WUFDUkMsUUFBUTtZQUNSQyxPQUFPO1lBQ1BDLGNBQWM7WUFDZEMsZUFBZTtZQUNmQyxTQUFTO1lBQ1RDLFVBQVU7WUFDVkMsV0FBVztZQUNYQyxXQUFXO1lBQ1hDLE1BQU07WUFDTkMsV0FBVztZQUNYQyxlQUFlO1lBQ2ZDLHFCQUFxQjtZQUNyQkMsOEJBQThCO1lBQzlCQyxLQUFLO1lBQ0xDLFFBQVE7WUFDUkMsTUFBTTtZQUNOQyxpQkFBaUI7WUFDakJDLE9BQU87WUFDUCwwQkFBMEI7WUFDMUJDLFFBQVE7WUFDUkMsUUFBUTtZQUNSQyxLQUFLO1lBQ0xDLE9BQU87WUFDUEMsd0JBQXdCO1lBQ3hCQyxTQUFTO1lBQ1RDLGdCQUFnQjtZQUNoQkMsT0FBTztZQUNQQyxVQUFVO1lBQ1ZDLG9CQUFvQjtZQUNwQkMsWUFBWTtZQUNaQyxZQUFZO1lBQ1pDLEtBQUs7WUFDTEMsV0FBVztZQUNYQyxNQUFNO1lBQ05DLFVBQVU7WUFDVkMsTUFBTTtZQUNOQyxPQUFPO1lBQ1BDLFFBQVE7WUFDUkMscUJBQXFCO1lBQ3JCQyxtQkFBbUI7WUFDbkJDLFFBQVE7WUFDUkMsU0FBUztZQUNUQyxXQUFXO1lBQ1hDLGNBQWM7WUFDZEMsaUJBQWlCO1FBQ25CO0lBQ0Y7SUFDQUMsSUFBSTtRQUNGMUQsYUFBYTtZQUNYQyxXQUFXO1lBQ1hlLGNBQWM7WUFDZEksV0FBVztZQUNYQyxXQUFXO1lBQ1hFLFdBQVc7WUFDWEMsZUFBZTtZQUNmQyxxQkFBcUI7WUFDckJDLDhCQUE4QjtZQUM5QkUsUUFBUTtZQUNSRSxpQkFBaUI7WUFDakJDLE9BQU87WUFDUEssd0JBQXdCO1lBQ3hCRSxnQkFBZ0I7WUFDaEJFLFVBQVU7WUFDVkMsb0JBQW9CO1lBQ3BCTSxVQUFVO1lBQ1ZJLHFCQUFxQjtZQUNyQkMsbUJBQW1CO1lBQ25CQyxRQUFRO1lBQ1JDLFNBQVM7WUFDVEUsY0FBYztZQUNkQyxpQkFBaUI7UUFDbkI7SUFDRjtJQUNBRSxJQUFJO1FBQ0YzRCxhQUFhO1lBQ1hDLFdBQVc7WUFDWEMsTUFBTTtZQUNOQyxNQUFNO1lBQ05DLFNBQVM7WUFDVEMsT0FBTztZQUNQQyxLQUFLO1lBQ0xDLE9BQU87WUFDUEMsT0FBTztZQUNQQyxPQUFPO1lBQ1BDLE1BQU07WUFDTkMsVUFBVTtZQUNWQyxNQUFNO1lBQ05DLFFBQVE7WUFDUkMsUUFBUTtZQUNSQyxPQUFPO1lBQ1BDLGNBQWM7WUFDZEMsZUFBZTtZQUNmQyxTQUFTO1lBQ1RDLFVBQVU7WUFDVkMsV0FBVztZQUNYQyxXQUFXO1lBQ1hDLE1BQU07WUFDTkMsV0FBVztZQUNYQyxlQUFlO1lBQ2ZDLHFCQUFxQjtZQUNyQkUsS0FBSztZQUNMQyxRQUFRO1lBQ1JDLE1BQU07WUFDTkMsaUJBQWlCO1lBQ2pCQyxPQUFPO1FBQ1Q7SUFDRjtJQUNBNkIsSUFBSTtRQUNGNUQsYUFBYTtZQUNYQyxXQUFXO1FBQ2I7SUFDRjtBQUNGO0FBRUFMLG1EQUNNLENBQUNDLDJEQUFnQkEsRUFBRSxvQ0FBb0M7Q0FDMURpRSxJQUFJLENBQUM7SUFDSmhFO0lBQ0FpRSxLQUFLO0lBQ0xDLGVBQWU7UUFDYkMsYUFBYSxLQUFLO0lBQ3BCO0FBQ0Y7QUFFYyIsInNvdXJjZXMiOlsid2VicGFjazovL3RpdC12Mi8uL2kxOG4udHN4PzY1MGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGkxOG4gZnJvbSBcImkxOG5leHRcIjtcclxuaW1wb3J0IHsgaW5pdFJlYWN0STE4bmV4dCB9IGZyb20gXCJyZWFjdC1pMThuZXh0XCI7XHJcblxyXG4vLyB0aGUgdHJhbnNsYXRpb25zXHJcbi8vICh0aXAgbW92ZSB0aGVtIGluIGEgSlNPTiBmaWxlIGFuZCBpbXBvcnQgdGhlbSxcclxuLy8gb3IgZXZlbiBiZXR0ZXIsIG1hbmFnZSB0aGVtIHNlcGFyYXRlZCBmcm9tIHlvdXIgY29kZTogaHR0cHM6Ly9yZWFjdC5pMThuZXh0LmNvbS9ndWlkZXMvbXVsdGlwbGUtdHJhbnNsYXRpb24tZmlsZXMpXHJcblxyXG5jb25zdCByZXNvdXJjZXMgPSB7XHJcbiAgdGg6IHtcclxuICAgIHRyYW5zbGF0aW9uOiB7XHJcbiAgICAgIFRJTUVTVEFSVDogXCLguYDguKfguKXguLLguYDguKPguLTguYjguKFcIixcclxuICAgICAgRGF0ZTogXCLguKfguLHguJnguJfguLXguYhcIixcclxuICAgICAgTmFtZTogXCLguIrguLfguYjguK1cIixcclxuICAgICAgc3RhdGlvbjogXCLguYTguKXguJnguYzguJzguKXguLTguJVcIixcclxuICAgICAgU2hpZnQ6IFwi4LiB4Liw4LiX4Liz4LiH4Liy4LiZXCIsXHJcbiAgICAgIERheTogXCLguIHguKXguLLguIfguKfguLHguJlcIixcclxuICAgICAgTmlnaHQ6IFwi4LiB4Lil4Liy4LiH4LiE4Li34LiZXCIsXHJcbiAgICAgIFNUQVJUOiBcIuC5gOC4o+C4tOC5iOC4oVwiLFxyXG4gICAgICBwYXVzZTogXCLguKvguKLguLjguJTguIrguLHguYjguKfguITguKPguLLguKdcIixcclxuICAgICAgc3RvcDogXCLguKvguKLguLjguJRcIixcclxuICAgICAgRG93blRpbWU6IFwi4LmA4Lin4Lil4Liy4Liq4Li54LiN4LmA4Liq4Li14Lii4LmD4LiZ4LiB4Liy4Lij4LiX4Liz4LiH4Liy4LiZXCIsXHJcbiAgICAgIFRpbWU6IFwi4LmA4Lin4Lil4LiyXCIsXHJcbiAgICAgIERldGFpbDogXCLguKPguLLguKLguKXguLDguYDguK3guLXguKLguJRcIixcclxuICAgICAgU1VCTUlUOiBcIuC4leC4geC4peC4h1wiLFxyXG4gICAgICBDTE9TRTogXCLguKLguIHguYDguKXguLTguIFcIixcclxuICAgICAgRG9ud3RpbWV0ZWxsOiBcIuC4geC4o+C4uOC4k+C4suC4geC4lOC4m+C4uOC5iOC4oSDguJTguLPguYDguJnguLTguJnguIHguLLguKPguJXguYjguK0g4LmA4Lie4Li34LmI4Lit4LiI4Lia4LmA4Lin4Lil4Liy4Liq4Li54LiN4LmA4Liq4Li14Lii4LmD4LiZ4LiB4Liy4Lij4LiX4Liz4LiH4Liy4LiZXCIsXHJcbiAgICAgIFRpbWVyRG93bnRpbWU6IFwi4LiI4Lix4Lia4LmA4Lin4Lil4Liy4Liq4Li54LiN4LmA4Liq4Li14Lii4LmD4LiZ4LiB4Liy4Lij4LiX4Liz4LiH4Liy4LiZXCIsXHJcbiAgICAgIFJ1bm5pbmc6IFwi4LiB4Liz4Lil4Lix4LiH4LiX4Liz4LiH4Liy4LiZXCIsXHJcbiAgICAgIENvbnRpbnVlOiBcIuC4lOC4s+C5gOC4meC4tOC4meC4geC4suC4o+C4leC5iOC4rVwiLFxyXG4gICAgICBFZGl0T2tRdHk6IFwi4LmB4LiB4LmJ4LmE4LiC4LiI4Liz4LiZ4Lin4LiZIE9LXCIsXHJcbiAgICAgIEVkaXROZ1F0eTogXCLguYHguIHguYnguYTguILguIjguLPguJnguKfguJkgTkdcIixcclxuICAgICAgRWRpdDogXCLguYHguIHguYnguYTguIJcIixcclxuICAgICAgTkdQcm9kdWN0OiBcIuC4iuC4tOC5ieC4meC4h+C4suC4meC5gOC4quC4teC4olwiLFxyXG4gICAgICBDb25maXJtRGVsZXRlOiBcIuC4ouC4t+C4meC4ouC4seC4mSDguKXguJpcIixcclxuICAgICAgZGV0YWlsQ29uZmlybURlbGV0ZTogXCLguITguLjguJPguJXguYnguK3guIfguIHguLLguKPguKLguLfguJnguKLguLHguJnguJfguLXguYjguIjguLDguKXguJrguIrguLTguYnguJnguYDguKrguLXguKLguYLguITguYnguJRcIixcclxuICAgICAgZGV0YWlsQ29uZmlybVNlbGVjdFdvcmtPcmRlcjogXCLguKLguLfguJnguKLguLHguJnguJfguLXguYjguIjguLDguJzguKXguLTguJXguIfguLLguJnguIjguLLguIHguJfguLXguYjguYDguKXguLfguK3guIHguKHguLJcIixcclxuICAgICAgUGNzOiBcIuC4iOC4s+C4meC4p+C4mVwiLFxyXG4gICAgICBOZ0NvZGU6IFwi4LmC4LiE4LmJ4LiU4LiK4Li04LmJ4LiZ4LiH4Liy4LiZ4LmA4Liq4Li14LiiXCIsXHJcbiAgICAgIFBhcnQ6IFwi4LiK4Li04LmJ4LiZ4Liq4LmI4Lin4LiZXCIsXHJcbiAgICAgIE5HUGFydENvbXBvbmVudDogXCLguIrguLTguYnguJnguKrguYjguKfguJnguJvguKPguLDguIHguK3guJrguJfguLXguYjguYDguKrguLXguKLguKvguLLguKJcIixcclxuICAgICAgTmdRdHk6IFwi4LiI4Liz4LiZ4Lin4LiZ4LiK4Li04LmJ4LiZ4LiH4Liy4LiZ4LiX4Li14LmI4LmA4Liq4Li14LiiXCIsXHJcbiAgICAgIC8vPT09PT09PT09PT0yPT09PT09PT09PT09XHJcbiAgICAgIFNFTEVDVDogXCLguYDguKXguLfguK3guIFcIixcclxuICAgICAgUGVvcGxlOiBcIuC4nOC4ueC5ieC4hOC4mVwiLFxyXG4gICAgICBBZGQ6IFwi4LmA4Lie4Li04LmI4LihXCIsXHJcbiAgICAgIFRhYmxlOiBcIuC4leC4suC4o+C4suC4h1wiLFxyXG4gICAgICBDb25maXJtU3RvcFdvcmtpbmdUZWxsOiBcIuC4ouC4t+C4meC4ouC4seC4mSDguIHguLLguKPguYDguKrguKPguYfguIjguKrguLTguYnguJnguIHguLLguKPguJzguKXguLTguJVcIixcclxuICAgICAgQ09ORklSTTogXCLguKLguLfguJnguKLguLHguJlcIixcclxuICAgICAgUHJvZHVjdGlvblVuaXQ6IFwi4LmE4Lil4LiZ4LmM4LiX4Li14LmI4Lic4Lil4Li04LiVXCIsXHJcbiAgICAgIEFncmVlOiBcIuC4luC4seC4lOC5hOC4m1wiLFxyXG4gICAgICBXb3JrT2RlcjogXCLguKrguLHguYjguIfguIfguLLguJlcIixcclxuICAgICAgRGVsZXRlUGVvcGxlRGV0YWlsOiBcIuC4hOC4uOC4k+C4leC5ieC4reC4h+C4geC4suC4o+C4l+C4teC5iOC4iOC4sOC4peC4miDguIrguLfguYjguK0gXCIsXHJcbiAgICAgIERlcGFydG1lbnQ6IFwi4LmB4Lic4LiZ4LiBXCIsXHJcbiAgICAgIEl0ZW1OdW1iZXI6IFwi4Lij4Lir4Lix4Liq4LiK4Li04LmJ4LiZ4LiH4Liy4LiZXCIsXHJcbiAgICAgIFF0eTogXCLguIjguLPguJnguKfguJlcIixcclxuICAgICAgV29ya09yZGVyOiBcIuC5gOC4peC4guC5g+C4muC4quC4seC5iOC4h+C4h+C4suC4mVwiLFxyXG4gICAgICBJdGVtOiBcIuC4iuC4tOC5ieC4meC4h+C4suC4mVwiLFxyXG4gICAgICBJdGVtT2RlcjogXCLguKPguLLguKLguIHguLLguKPguKrguLHguYjguIfguJzguKXguLTguJVcIixcclxuICAgICAgVElNRTogXCLguYDguKfguKXguLJcIixcclxuICAgICAgTGV2ZWw6IFwi4Lij4Liw4LiU4Lix4LiaXCIsXHJcbiAgICAgIExvZ291dDogXCLguK3guK3guIHguIjguLLguIHguKPguLDguJrguJpcIixcclxuICAgICAgZGV0YWlsQ29uZmlybUxvZ091dDogXCLguITguLjguJPguJXguYnguK3guIfguIHguLLguKPguJfguLXguYjguIjguLDguK3guK3guIHguIjguLLguIHguKPguLDguJrguJrguILguK3guIcg4Lij4Lir4Lix4Liq4Lie4LiZ4Lix4LiB4LiH4Liy4LiZXCIsXHJcbiAgICAgIENvbmZpcm1Mb2dPdXRUaW1lOiBcIuC4ouC4t+C4meC4ouC4seC4meC4geC4suC4o+C4reC4reC4geC4iOC4suC4geC4o+C4sOC4muC4miDguYDguKfguKXguLJcIixcclxuICAgICAgU2lnbkluOiBcIuC5gOC4guC5ieC4suC4quC4ueC5iOC4o+C4sOC4muC4mlwiLFxyXG4gICAgICBJdGVtUnVuOiBcIuC4iuC4tOC5ieC4meC4h+C4suC4meC4l+C4teC5iOC4geC4s+C4peC4seC4h+C4nOC4peC4tOC4lVwiLFxyXG4gICAgICBEYXNoYm9hcmQ6IFwi4LmB4Lic4LiH4LiE4Lin4Lia4LiE4Li44LihXCIsXHJcbiAgICAgIFJlZ2lzdGVyVXNlcjogXCLguKrguKHguLHguITguKPguKrguKHguLLguIrguLTguIHguJ7guJnguLHguIHguIfguLLguJlcIixcclxuICAgICAgU2VsZWN0V29ya09yZGVyOiBcIuC5gOC4peC4t+C4reC4geC5g+C4muC4quC4seC5iOC4h+C4h+C4suC4mVwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGVuOiB7XHJcbiAgICB0cmFuc2xhdGlvbjoge1xyXG4gICAgICBUSU1FU1RBUlQ6IFwiVElNRSBTVEFSVFwiLFxyXG4gICAgICBEb253dGltZXRlbGw6IFwicGxlYXNlIHB1c2ggc3RhcnQgd2hlbiBlbmQgb2YgZG93bnRpbWVcIixcclxuICAgICAgRWRpdE9rUXR5OiBcIkVkaXQgT0tfcXR5XCIsXHJcbiAgICAgIEVkaXROZ1F0eTogXCJFZGl0IE5HX3F0eVwiLFxyXG4gICAgICBOR1Byb2R1Y3Q6IFwiTkcgUHJvZHVjdFwiLFxyXG4gICAgICBDb25maXJtRGVsZXRlOiBcIkNvbmZpcm0gRGVsZXRlXCIsXHJcbiAgICAgIGRldGFpbENvbmZpcm1EZWxldGU6IFwiRG8geW91IHdhbnQgdG8gZGVsZXRlIE5HIGNvZGUgXCIsXHJcbiAgICAgIGRldGFpbENvbmZpcm1TZWxlY3RXb3JrT3JkZXI6IFwiQ29uZmlybSBTZWxlY3QgV29yayBPcmRlclwiLFxyXG4gICAgICBOZ0NvZGU6IFwiTkcgQ29kZVwiLFxyXG4gICAgICBOR1BhcnRDb21wb25lbnQ6IFwiTkcgUGFydCBDb21wb25lbnRcIixcclxuICAgICAgTmdRdHk6IFwiTkcgcXR5XCIsXHJcbiAgICAgIENvbmZpcm1TdG9wV29ya2luZ1RlbGw6IFwiQ29uZmlybSBTdG9wIFdvcmtpbmdcIixcclxuICAgICAgUHJvZHVjdGlvblVuaXQ6IFwiUHJvZHVjdGlvbiBVbml0XCIsXHJcbiAgICAgIFdvcmtPZGVyOiBcIldvcmsgT2RlclwiLFxyXG4gICAgICBEZWxldGVQZW9wbGVEZXRhaWw6IFwiRG8geW91IHdhbnQgdG8gZGVsZXRlIE5hbWVcIixcclxuICAgICAgSXRlbU9kZXI6IFwiSXRlbSBPcmRlclwiLFxyXG4gICAgICBkZXRhaWxDb25maXJtTG9nT3V0OiBcIkRvIHlvdSB3YW50IHRvIExvZ091dCBOTyBcIixcclxuICAgICAgQ29uZmlybUxvZ091dFRpbWU6IFwiQ29uZmlybSBMb2dPdXQgVGltZVwiLFxyXG4gICAgICBTaWduSW46IFwiU2lnbiBJblwiLFxyXG4gICAgICBJdGVtUnVuOiBcIkl0ZW0gUnVuXCIsXHJcbiAgICAgIFJlZ2lzdGVyVXNlcjogXCJSZWdpc3RlciBVc2VyXCIsXHJcbiAgICAgIFNlbGVjdFdvcmtPcmRlcjogXCJTZWxlY3QgV29yayBPcmRlclwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGNuOiB7XHJcbiAgICB0cmFuc2xhdGlvbjoge1xyXG4gICAgICBUSU1FU1RBUlQ6IFwi5byA5aeLXCIsXHJcbiAgICAgIERhdGU6IFwi5pel5pyfXCIsXHJcbiAgICAgIE5hbWU6IFwi5ZCN5a2XXCIsXHJcbiAgICAgIHN0YXRpb246IFwi4LmE4Lil4LiZ4LmM4Lic4Lil4Li04LiVXCIsXHJcbiAgICAgIFNoaWZ0OiBcIuC4geC4sOC4l+C4s+C4h+C4suC4mVwiLFxyXG4gICAgICBEYXk6IFwi5pep54+tXCIsXHJcbiAgICAgIE5pZ2h0OiBcIuaZmuePrVwiLFxyXG4gICAgICBTVEFSVDogXCLlvIDlp4tcIixcclxuICAgICAgcGF1c2U6IFwi4Lir4Lii4Li44LiU4LiK4Lix4LmI4Lin4LiE4Lij4Liy4LinXCIsXHJcbiAgICAgIHN0b3A6IFwi5YGa5a6MXCIsXHJcbiAgICAgIERvd25UaW1lOiBcIumZpOWkluW3peaXtlwiLFxyXG4gICAgICBUaW1lOiBcIuaXtumXtFwiLFxyXG4gICAgICBEZXRhaWw6IFwi4Lij4Liy4Lii4Lil4Liw4LmA4Lit4Li14Lii4LiUXCIsXHJcbiAgICAgIFNVQk1JVDogXCLguJXguIHguKXguIdcIixcclxuICAgICAgQ0xPU0U6IFwi4Lii4LiB4LmA4Lil4Li04LiBXCIsXHJcbiAgICAgIERvbnd0aW1ldGVsbDogXCLguIHguKPguLjguJPguLLguIHguJTguJvguLjguYjguKEg4LiU4Liz4LmA4LiZ4Li04LiZ4LiB4Liy4Lij4LiV4LmI4LitIOC5gOC4nuC4t+C5iOC4reC4iOC4muC5gOC4p+C4peC4suC4quC4ueC4jeC5gOC4quC4teC4ouC5g+C4meC4geC4suC4o+C4l+C4s+C4h+C4suC4mVwiLFxyXG4gICAgICBUaW1lckRvd250aW1lOiBcIuC4iOC4seC4muC5gOC4p+C4peC4suC4quC4ueC4jeC5gOC4quC4teC4ouC5g+C4meC4geC4suC4o+C4l+C4s+C4h+C4suC4mVwiLFxyXG4gICAgICBSdW5uaW5nOiBcIuC4geC4s+C4peC4seC4h+C4l+C4s+C4h+C4suC4mVwiLFxyXG4gICAgICBDb250aW51ZTogXCLguJTguLPguYDguJnguLTguJnguIHguLLguKPguJXguYjguK1cIixcclxuICAgICAgRWRpdE9rUXR5OiBcIuC5geC4geC5ieC5hOC4guC4iOC4s+C4meC4p+C4mSBPS1wiLFxyXG4gICAgICBFZGl0TmdRdHk6IFwi4LmB4LiB4LmJ4LmE4LiC4LiI4Liz4LiZ4Lin4LiZIE5HXCIsXHJcbiAgICAgIEVkaXQ6IFwi4LmB4LiB4LmJ4LmE4LiCXCIsXHJcbiAgICAgIE5HUHJvZHVjdDogXCLguIrguLTguYnguJnguIfguLLguJnguYDguKrguLXguKJcIixcclxuICAgICAgQ29uZmlybURlbGV0ZTogXCLguKLguLfguJnguKLguLHguJkg4Lil4LiaXCIsXHJcbiAgICAgIGRldGFpbENvbmZpcm1EZWxldGU6IFwi4LiE4Li44LiT4LiV4LmJ4Lit4LiH4LiB4Liy4Lij4Lii4Li34LiZ4Lii4Lix4LiZ4LiX4Li14LmI4LiI4Liw4Lil4Lia4LiK4Li04LmJ4LiZ4LmA4Liq4Li14Lii4LmC4LiE4LmJ4LiUXCIsXHJcbiAgICAgIFBjczogXCLmlbDph49cIixcclxuICAgICAgTmdDb2RlOiBcIuC5guC4hOC5ieC4lOC4iuC4tOC5ieC4meC4h+C4suC4meC5gOC4quC4teC4olwiLFxyXG4gICAgICBQYXJ0OiBcIuC4iuC4tOC5ieC4meC4quC5iOC4p+C4mVwiLFxyXG4gICAgICBOR1BhcnRDb21wb25lbnQ6IFwi4LiK4Li04LmJ4LiZ4Liq4LmI4Lin4LiZ4Lib4Lij4Liw4LiB4Lit4Lia4LiX4Li14LmI4LmA4Liq4Li14Lii4Lir4Liy4LiiXCIsXHJcbiAgICAgIE5nUXR5OiBcIuC4iOC4s+C4meC4p+C4meC4iuC4tOC5ieC4meC4h+C4suC4meC4l+C4teC5iOC5gOC4quC4teC4olwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHZuOiB7XHJcbiAgICB0cmFuc2xhdGlvbjoge1xyXG4gICAgICBUSU1FU1RBUlQ6IFwidGjhu51pIGdpYW4gYuG6r3QgxJHhuqd1XCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcblxyXG5pMThuXHJcbiAgLnVzZShpbml0UmVhY3RJMThuZXh0KSAvLyBwYXNzZXMgaTE4biBkb3duIHRvIHJlYWN0LWkxOG5leHRcclxuICAuaW5pdCh7XHJcbiAgICByZXNvdXJjZXMsXHJcbiAgICBsbmc6IFwiZW5cIiwgLy/guKPguLDguJrguLjguKDguLLguKnguLLguYDguKPguLTguYjguKHguJXguYnguJlcclxuICAgIGludGVycG9sYXRpb246IHtcclxuICAgICAgZXNjYXBlVmFsdWU6IGZhbHNlLCAvLyByZWFjdCBhbHJlYWR5IHNhZmVzIGZyb20geHNzXHJcbiAgICB9LFxyXG4gIH0pO1xyXG5cclxuZXhwb3J0IHsgaTE4biB9O1xyXG4iXSwibmFtZXMiOlsiaTE4biIsImluaXRSZWFjdEkxOG5leHQiLCJyZXNvdXJjZXMiLCJ0aCIsInRyYW5zbGF0aW9uIiwiVElNRVNUQVJUIiwiRGF0ZSIsIk5hbWUiLCJzdGF0aW9uIiwiU2hpZnQiLCJEYXkiLCJOaWdodCIsIlNUQVJUIiwicGF1c2UiLCJzdG9wIiwiRG93blRpbWUiLCJUaW1lIiwiRGV0YWlsIiwiU1VCTUlUIiwiQ0xPU0UiLCJEb253dGltZXRlbGwiLCJUaW1lckRvd250aW1lIiwiUnVubmluZyIsIkNvbnRpbnVlIiwiRWRpdE9rUXR5IiwiRWRpdE5nUXR5IiwiRWRpdCIsIk5HUHJvZHVjdCIsIkNvbmZpcm1EZWxldGUiLCJkZXRhaWxDb25maXJtRGVsZXRlIiwiZGV0YWlsQ29uZmlybVNlbGVjdFdvcmtPcmRlciIsIlBjcyIsIk5nQ29kZSIsIlBhcnQiLCJOR1BhcnRDb21wb25lbnQiLCJOZ1F0eSIsIlNFTEVDVCIsIlBlb3BsZSIsIkFkZCIsIlRhYmxlIiwiQ29uZmlybVN0b3BXb3JraW5nVGVsbCIsIkNPTkZJUk0iLCJQcm9kdWN0aW9uVW5pdCIsIkFncmVlIiwiV29ya09kZXIiLCJEZWxldGVQZW9wbGVEZXRhaWwiLCJEZXBhcnRtZW50IiwiSXRlbU51bWJlciIsIlF0eSIsIldvcmtPcmRlciIsIkl0ZW0iLCJJdGVtT2RlciIsIlRJTUUiLCJMZXZlbCIsIkxvZ291dCIsImRldGFpbENvbmZpcm1Mb2dPdXQiLCJDb25maXJtTG9nT3V0VGltZSIsIlNpZ25JbiIsIkl0ZW1SdW4iLCJEYXNoYm9hcmQiLCJSZWdpc3RlclVzZXIiLCJTZWxlY3RXb3JrT3JkZXIiLCJlbiIsImNuIiwidm4iLCJ1c2UiLCJpbml0IiwibG5nIiwiaW50ZXJwb2xhdGlvbiIsImVzY2FwZVZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./i18n.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_context_Appcontext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/context/Appcontext */ \"./src/context/Appcontext.tsx\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../i18n */ \"./i18n.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_i18n__WEBPACK_IMPORTED_MODULE_5__]);\n_i18n__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const token = localStorage.getItem(\"token\");\n        if (!token) {\n            localStorage.removeItem(\"userName\");\n            localStorage.removeItem(\"Level\");\n            router.push(\"/\");\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_context_Appcontext__WEBPACK_IMPORTED_MODULE_1__.AppcontextProvider, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"TIT Company System\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\tit\\\\tit-v2\\\\pages\\\\_app.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\tit\\\\tit-v2\\\\pages\\\\_app.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/Logo.png\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\tit\\\\tit-v2\\\\pages\\\\_app.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\tit\\\\tit-v2\\\\pages\\\\_app.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"D:\\\\tit\\\\tit-v2\\\\pages\\\\_app.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\tit\\\\tit-v2\\\\pages\\\\_app.tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQStEO0FBQ2xDO0FBQ0s7QUFDTTtBQUNkO0FBQ1Q7QUFFakIsU0FBU0ssTUFBTSxFQUFFQyxVQUFTLEVBQUVDLFVBQVMsRUFBTyxFQUFFO0lBQzVDLE1BQU1DLFNBQVNMLHNEQUFTQTtJQUN4QkQsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLE1BQU1PLFFBQVFDLGFBQWFDLE9BQU8sQ0FBQztRQUNuQyxJQUFJLENBQUNGLE9BQU87WUFDVkMsYUFBYUUsVUFBVSxDQUFDO1lBQ3hCRixhQUFhRSxVQUFVLENBQUM7WUFDeEJKLE9BQU9LLElBQUksQ0FBQztRQUNkLENBQUM7SUFDSCxHQUFHLEVBQUU7SUFDTCxxQkFDRSw4REFBQ2IsdUVBQWtCQTs7MEJBQ2pCLDhEQUFDQyxrREFBSUE7O2tDQUNILDhEQUFDYTtrQ0FBTTs7Ozs7O2tDQUNQLDhEQUFDQzt3QkFBS0MsTUFBSzt3QkFBY0MsU0FBUTs7Ozs7O2tDQUNqQyw4REFBQ0M7d0JBQUtDLEtBQUk7d0JBQU9DLE1BQUs7Ozs7Ozs7Ozs7OzswQkFHeEIsOERBQUNkO2dCQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7OztBQUc5QjtBQUVBLGlFQUFlRixLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGl0LXYyLy4vcGFnZXMvX2FwcC50c3g/MmZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBjb250ZXh0UHJvdmlkZXIgfSBmcm9tIFwiLi4vc3JjL2NvbnRleHQvQXBwY29udGV4dFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBcIi4uL2kxOG5cIjtcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBhbnkpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpO1xuICAgIGlmICghdG9rZW4pIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwidXNlck5hbWVcIik7XG4gICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcIkxldmVsXCIpO1xuICAgICAgcm91dGVyLnB1c2goXCIvXCIpO1xuICAgIH1cbiAgfSwgW10pO1xuICByZXR1cm4gKFxuICAgIDxBcHBjb250ZXh0UHJvdmlkZXI+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlRJVCBDb21wYW55IFN5c3RlbTwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJHZW5lcmF0ZWQgYnkgY3JlYXRlIG5leHQgYXBwXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvTG9nby5wbmdcIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC9BcHBjb250ZXh0UHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sIm5hbWVzIjpbIkFwcGNvbnRleHRQcm92aWRlciIsIkhlYWQiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJSZWFjdCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicm91dGVyIiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicmVtb3ZlSXRlbSIsInB1c2giLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./src/context/Appcontext.tsx":
/*!************************************!*\
  !*** ./src/context/Appcontext.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AppcontextProvider\": () => (/* binding */ AppcontextProvider),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst context = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(\"\");\nfunction AppcontextProvider({ children  }) {\n    const [appstate, setAppstate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log({\n            appstate,\n            setAppstate\n        });\n    }, [\n        appstate,\n        setAppstate\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(context.Provider, {\n            value: {\n                appstate,\n                setAppstate\n            },\n            children: children\n        }, void 0, false, {\n            fileName: \"D:\\\\tit\\\\tit-v2\\\\src\\\\context\\\\Appcontext.tsx\",\n            lineNumber: 13,\n            columnNumber: 5\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\tit\\\\tit-v2\\\\src\\\\context\\\\Appcontext.tsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (context);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9BcHBjb250ZXh0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUFrRTtBQUVsRSxNQUFNSSx3QkFBY0Qsb0RBQWFBLENBQUM7QUFFM0IsU0FBU0UsbUJBQW1CLEVBQUVDLFNBQVEsRUFBTyxFQUFFO0lBQ3BELE1BQU0sQ0FBQ0MsVUFBWUMsWUFBWSxHQUFHUCwrQ0FBUUEsQ0FBTSxDQUFDO0lBRWpEQyxnREFBU0EsQ0FBQyxJQUFNO1FBQ2RPLFFBQVFDLEdBQUcsQ0FBQztZQUFFSDtZQUFVQztRQUFZO0lBQ3RDLEdBQUc7UUFBQ0Q7UUFBVUM7S0FBWTtJQUMxQixxQkFDRSw4REFBQ0c7a0JBQ0QsNEVBQUNQLFFBQVFRLFFBQVE7WUFBQ0MsT0FBTztnQkFBRU47Z0JBQVVDO1lBQVk7c0JBQzlDRjs7Ozs7Ozs7Ozs7QUFJUCxDQUFDO0FBQ0QsaUVBQWVGLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aXQtdjIvLi9zcmMvY29udGV4dC9BcHBjb250ZXh0LnRzeD9lZjdjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCBjcmVhdGVDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBjb250ZXh0OmFueSA9IGNyZWF0ZUNvbnRleHQoJycpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEFwcGNvbnRleHRQcm92aWRlcih7IGNoaWxkcmVuIH06IGFueSkge1xyXG4gIGNvbnN0IFthcHBzdGF0ZSAgLCBzZXRBcHBzdGF0ZV0gPSB1c2VTdGF0ZTxhbnk+KHt9KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHsgYXBwc3RhdGUsIHNldEFwcHN0YXRlIH0pO1xyXG4gIH0sIFthcHBzdGF0ZSwgc2V0QXBwc3RhdGVdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgIDxjb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IGFwcHN0YXRlLCBzZXRBcHBzdGF0ZSB9fT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9jb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBjb250ZXh0OyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiY3JlYXRlQ29udGV4dCIsImNvbnRleHQiLCJBcHBjb250ZXh0UHJvdmlkZXIiLCJjaGlsZHJlbiIsImFwcHN0YXRlIiwic2V0QXBwc3RhdGUiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/context/Appcontext.tsx\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "i18next":
/*!**************************!*\
  !*** external "i18next" ***!
  \**************************/
/***/ ((module) => {

module.exports = import("i18next");;

/***/ }),

/***/ "react-i18next":
/*!********************************!*\
  !*** external "react-i18next" ***!
  \********************************/
/***/ ((module) => {

module.exports = import("react-i18next");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();