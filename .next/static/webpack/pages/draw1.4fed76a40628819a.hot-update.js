"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/draw1",{

/***/ "./pages/component/tablework2.tsx":
/*!****************************************!*\
  !*** ./pages/component/tablework2.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ QuickFilteringCustomizedGrid; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Box */ \"./node_modules/@mui/material/esm/Box/index.js\");\n/* harmony import */ var _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/x-data-grid */ \"./node_modules/@mui/x-data-grid/index.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/esm/index.js\");\n/* harmony import */ var _compunentConfig_supabase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../compunentConfig/supabase */ \"./compunentConfig/supabase.tsx\");\n/* harmony import */ var _mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/CircularProgress */ \"./node_modules/@mui/material/esm/CircularProgress/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n// import supabase from \"../compunentConfig/supabase\";\n\n\n\nfunction QuickSearchToolbar() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            sx: {\n                p: 0.5,\n                pb: 0\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                    sx: {\n                        fontSize: 28\n                    },\n                    children: \"Down time\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\tit\\\\tit-v2\\\\pages\\\\component\\\\tablework2.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_x_data_grid__WEBPACK_IMPORTED_MODULE_5__.GridToolbarQuickFilter, {\n                    quickFilterParser: (searchInput)=>searchInput.split(\",\").map((value)=>value.trim()).filter((value)=>value !== \"\")\n                }, void 0, false, {\n                    fileName: \"D:\\\\tit\\\\tit-v2\\\\pages\\\\component\\\\tablework2.tsx\",\n                    lineNumber: 19,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\tit\\\\tit-v2\\\\pages\\\\component\\\\tablework2.tsx\",\n            lineNumber: 12,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_c = QuickSearchToolbar;\nfunction QuickFilteringCustomizedGrid() {\n    _s();\n    const [mounted, setMounted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [data, setdata] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    //รีเฟสเฉพาะอันนั้น\n    // console.log({ data });\n    // Otherwise filter will be applied on fields such as the hidden column id\n    const columns = [\n        {\n            field: \"id\",\n            headerName: \"NO\"\n        },\n        {\n            field: \"Downtime_code\",\n            headerName: \"Downtime_code\"\n        },\n        {\n            field: \"Begin_time\",\n            headerName: \"Begin_time\"\n        },\n        {\n            field: \"End_time\",\n            headerName: \"End_time\"\n        },\n        {\n            field: \"Duration_downtime\",\n            headerName: \"Duration_downtime\"\n        },\n        {\n            field: \"Downtime_description\",\n            headerName: \"Detail\",\n            width: 300\n        }\n    ];\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false); // ทำโหลดดิ้งรอข้อมูล\n    // รีเฟสเฉพาะอันนั้น;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // const intervalId = setInterval(() => {\n        const FetchData = async ()=>{\n            setLoading(true);\n            const { data  } = await _compunentConfig_supabase__WEBPACK_IMPORTED_MODULE_2__[\"default\"].from(\"Downtime_record\").select(\"*\").eq(\"Work_order_id\", localStorage.getItem(\"Work_order_id\")).eq(\"PD_key\", localStorage.getItem(\"PD_key\"));\n            setdata(data);\n        };\n        FetchData();\n        setLoading(false);\n    // }, 1000);\n    // return () => clearInterval(intervalId);\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const DowntimeRecord_UPdate = _compunentConfig_supabase__WEBPACK_IMPORTED_MODULE_2__[\"default\"].channel(\"custom-all-downtime\").on(\"postgres_changes\", {\n            event: \"*\",\n            schema: \"public\",\n            table: \"Downtime_record\"\n        }, (payload)=>{\n            console.log(\"Change received Downtime_record\", payload);\n            ReloadDowntime();\n        // setdata((prev: any) => [...prev, payload.new]);\n        }).subscribe();\n        return ()=>{\n            _compunentConfig_supabase__WEBPACK_IMPORTED_MODULE_2__[\"default\"].removeChannel(DowntimeRecord_UPdate);\n        };\n    }, [\n        data\n    ]);\n    const ReloadDowntime = async ()=>{\n        const { data , error  } = await _compunentConfig_supabase__WEBPACK_IMPORTED_MODULE_2__[\"default\"].from(\"Downtime_record\").select(\"*\").filter(\"PD_key\", \"in\", \"(\" + localStorage.getItem(\"PD_key\") + \")\");\n        setdata(data);\n    };\n    //ทำเช็ค useEffect ทำงานระหว่าง cliant กับ server **ต้องทำความเข้าใจ useEffect เพิ่มเติม\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setMounted(true);\n    }, []);\n    //ทำเช็ค useEffect ทำงานระหว่าง cliant กับ server **ต้องทำความเข้าใจ useEffect เพิ่มเติม\n    if (!mounted) return null;\n    if (loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        sx: {\n            display: \"flex\",\n            alignItems: \"center\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                sx: {\n                    fontSize: 50\n                },\n                children: \"Loading...\"\n            }, void 0, false, {\n                fileName: \"D:\\\\tit\\\\tit-v2\\\\pages\\\\component\\\\tablework2.tsx\",\n                lineNumber: 104,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\tit\\\\tit-v2\\\\pages\\\\component\\\\tablework2.tsx\",\n                lineNumber: 105,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\tit\\\\tit-v2\\\\pages\\\\component\\\\tablework2.tsx\",\n        lineNumber: 103,\n        columnNumber: 7\n    }, this); //รอโหลดข้อมูล\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        sx: {\n            height: 400,\n            width: 1\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_x_data_grid__WEBPACK_IMPORTED_MODULE_5__.DataGrid, {\n            rows: data,\n            columns: columns,\n            components: {\n                Toolbar: QuickSearchToolbar\n            }\n        }, void 0, false, {\n            fileName: \"D:\\\\tit\\\\tit-v2\\\\pages\\\\component\\\\tablework2.tsx\",\n            lineNumber: 111,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\tit\\\\tit-v2\\\\pages\\\\component\\\\tablework2.tsx\",\n        lineNumber: 110,\n        columnNumber: 5\n    }, this);\n}\n_s(QuickFilteringCustomizedGrid, \"DQ3IEepcmvLkSYM1Zd/EciOnfic=\");\n_c1 = QuickFilteringCustomizedGrid;\nvar _c, _c1;\n$RefreshReg$(_c, \"QuickSearchToolbar\");\n$RefreshReg$(_c1, \"QuickFilteringCustomizedGrid\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFNBQ0YscUJBQ0UsOERBQUMzQix5REFBR0E7UUFBQ08sSUFBSTtZQUFFeUMsU0FBUztZQUFRQyxZQUFZO1FBQVM7OzBCQUMvQyw4REFBQzlDLHFEQUFVQTtnQkFBQ0ksSUFBSTtvQkFBRUcsVUFBVTtnQkFBRzswQkFBRzs7Ozs7OzBCQUNsQyw4REFBQ0wsc0VBQWdCQTs7Ozs7Ozs7OztjQUVsQixjQUFjO0lBRW5CLHFCQUNFLDhEQUFDTCx5REFBR0E7UUFBQ08sSUFBSTtZQUFFMkMsUUFBUTtZQUFLeEIsT0FBTztRQUFFO2tCQUMvQiw0RUFBQ3pCLHNEQUFRQTtZQUNQa0QsTUFBTTlCO1lBQ05FLFNBQVNBO1lBQ1Q2QixZQUFZO2dCQUFFQyxTQUFTL0M7WUFBbUI7Ozs7Ozs7Ozs7O0FBSWxELENBQUM7R0F0RnVCWTtNQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jb21wb25lbnQvdGFibGV3b3JrMi50c3g/NWViOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEJveCBmcm9tIFwiQG11aS9tYXRlcmlhbC9Cb3hcIjtcbmltcG9ydCB7IERhdGFHcmlkLCBHcmlkVG9vbGJhclF1aWNrRmlsdGVyIH0gZnJvbSBcIkBtdWkveC1kYXRhLWdyaWRcIjtcbi8vIGltcG9ydCBzdXBhYmFzZSBmcm9tIFwiLi4vY29tcHVuZW50Q29uZmlnL3N1cGFiYXNlXCI7XG5pbXBvcnQgeyBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCBzdXBhYmFzZSBmcm9tIFwiLi4vLi4vY29tcHVuZW50Q29uZmlnL3N1cGFiYXNlXCI7XG5pbXBvcnQgQ2lyY3VsYXJQcm9ncmVzcyBmcm9tIFwiQG11aS9tYXRlcmlhbC9DaXJjdWxhclByb2dyZXNzXCI7XG5cbmZ1bmN0aW9uIFF1aWNrU2VhcmNoVG9vbGJhcigpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEJveFxuICAgICAgICBzeD17e1xuICAgICAgICAgIHA6IDAuNSxcbiAgICAgICAgICBwYjogMCxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPFR5cG9ncmFwaHkgc3g9e3sgZm9udFNpemU6IDI4IH19PkRvd24gdGltZTwvVHlwb2dyYXBoeT5cbiAgICAgICAgPEdyaWRUb29sYmFyUXVpY2tGaWx0ZXJcbiAgICAgICAgICBxdWlja0ZpbHRlclBhcnNlcj17KHNlYXJjaElucHV0OiBzdHJpbmcpID0+XG4gICAgICAgICAgICBzZWFyY2hJbnB1dFxuICAgICAgICAgICAgICAuc3BsaXQoXCIsXCIpXG4gICAgICAgICAgICAgIC5tYXAoKHZhbHVlKSA9PiB2YWx1ZS50cmltKCkpXG4gICAgICAgICAgICAgIC5maWx0ZXIoKHZhbHVlKSA9PiB2YWx1ZSAhPT0gXCJcIilcbiAgICAgICAgICB9XG4gICAgICAgIC8+XG4gICAgICA8L0JveD5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUXVpY2tGaWx0ZXJpbmdDdXN0b21pemVkR3JpZCgpIHtcbiAgY29uc3QgW21vdW50ZWQsIHNldE1vdW50ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZGF0YSwgc2V0ZGF0YV0gPSB1c2VTdGF0ZTxhbnk+KFtdKTtcblxuICAvL+C4o+C4teC5gOC4n+C4quC5gOC4ieC4nuC4suC4sOC4reC4seC4meC4meC4seC5ieC4mVxuICAvLyBjb25zb2xlLmxvZyh7IGRhdGEgfSk7XG4gIC8vIE90aGVyd2lzZSBmaWx0ZXIgd2lsbCBiZSBhcHBsaWVkIG9uIGZpZWxkcyBzdWNoIGFzIHRoZSBoaWRkZW4gY29sdW1uIGlkXG4gIGNvbnN0IGNvbHVtbnMgPSBbXG4gICAgeyBmaWVsZDogXCJpZFwiLCBoZWFkZXJOYW1lOiBcIk5PXCIgfSxcbiAgICB7IGZpZWxkOiBcIkRvd250aW1lX2NvZGVcIiwgaGVhZGVyTmFtZTogXCJEb3dudGltZV9jb2RlXCIgfSxcbiAgICB7IGZpZWxkOiBcIkJlZ2luX3RpbWVcIiwgaGVhZGVyTmFtZTogXCJCZWdpbl90aW1lXCIgfSxcbiAgICB7IGZpZWxkOiBcIkVuZF90aW1lXCIsIGhlYWRlck5hbWU6IFwiRW5kX3RpbWVcIiB9LFxuICAgIHsgZmllbGQ6IFwiRHVyYXRpb25fZG93bnRpbWVcIiwgaGVhZGVyTmFtZTogXCJEdXJhdGlvbl9kb3dudGltZVwiIH0sXG4gICAgeyBmaWVsZDogXCJEb3dudGltZV9kZXNjcmlwdGlvblwiLCBoZWFkZXJOYW1lOiBcIkRldGFpbFwiLCB3aWR0aDogMzAwIH0sXG4gIF07XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTsgLy8g4LiX4Liz4LmC4Lir4Lil4LiU4LiU4Li04LmJ4LiH4Lij4Lit4LiC4LmJ4Lit4Lih4Li54LilXG4gIC8vIOC4o+C4teC5gOC4n+C4quC5gOC4ieC4nuC4suC4sOC4reC4seC4meC4meC4seC5ieC4mTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIGNvbnN0IGludGVydmFsSWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgY29uc3QgRmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAgICAgLmZyb20oXCJEb3dudGltZV9yZWNvcmRcIilcbiAgICAgICAgLnNlbGVjdChcIipcIilcbiAgICAgICAgLmVxKFwiV29ya19vcmRlcl9pZFwiLCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIldvcmtfb3JkZXJfaWRcIikpXG4gICAgICAgIC5lcShcIlBEX2tleVwiLCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlBEX2tleVwiKSk7XG4gICAgICBzZXRkYXRhKGRhdGEpO1xuICAgIH07XG4gICAgRmV0Y2hEYXRhKCk7XG4gICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgLy8gfSwgMTAwMCk7XG4gICAgLy8gcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJZCk7XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IERvd250aW1lUmVjb3JkX1VQZGF0ZSA9IHN1cGFiYXNlXG4gICAgICAuY2hhbm5lbChcImN1c3RvbS1hbGwtZG93bnRpbWVcIilcbiAgICAgIC5vbihcbiAgICAgICAgXCJwb3N0Z3Jlc19jaGFuZ2VzXCIsXG4gICAgICAgIHsgZXZlbnQ6IFwiKlwiLCBzY2hlbWE6IFwicHVibGljXCIsIHRhYmxlOiBcIkRvd250aW1lX3JlY29yZFwiIH0sXG4gICAgICAgIChwYXlsb2FkKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJDaGFuZ2UgcmVjZWl2ZWQgRG93bnRpbWVfcmVjb3JkXCIsIHBheWxvYWQpO1xuICAgICAgICAgIFJlbG9hZERvd250aW1lKCk7XG4gICAgICAgICAgLy8gc2V0ZGF0YSgocHJldjogYW55KSA9PiBbLi4ucHJldiwgcGF5bG9hZC5uZXddKTtcbiAgICAgICAgfVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBzdXBhYmFzZS5yZW1vdmVDaGFubmVsKERvd250aW1lUmVjb3JkX1VQZGF0ZSk7XG4gICAgfTtcbiAgfSwgW2RhdGFdKTtcblxuICBjb25zdCBSZWxvYWREb3dudGltZSA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgICAgLmZyb20oXCJEb3dudGltZV9yZWNvcmRcIilcbiAgICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgICAuZmlsdGVyKFwiUERfa2V5XCIsIFwiaW5cIiwgXCIoXCIgKyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlBEX2tleVwiKSArIFwiKVwiKTtcbiAgICBzZXRkYXRhKGRhdGEpO1xuICB9O1xuXG4gIC8v4LiX4Liz4LmA4LiK4LmH4LiEIHVzZUVmZmVjdCDguJfguLPguIfguLLguJnguKPguLDguKvguKfguYjguLLguIcgY2xpYW50IOC4geC4seC4miBzZXJ2ZXIgKirguJXguYnguK3guIfguJfguLPguITguKfguLLguKHguYDguILguYnguLLguYPguIggdXNlRWZmZWN0IOC5gOC4nuC4tOC5iOC4oeC5gOC4leC4tOC4oVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldE1vdW50ZWQodHJ1ZSk7XG4gIH0sIFtdKTtcblxuICAvL+C4l+C4s+C5gOC4iuC5h+C4hCB1c2VFZmZlY3Qg4LiX4Liz4LiH4Liy4LiZ4Lij4Liw4Lir4Lin4LmI4Liy4LiHIGNsaWFudCDguIHguLHguJogc2VydmVyICoq4LiV4LmJ4Lit4LiH4LiX4Liz4LiE4Lin4Liy4Lih4LmA4LiC4LmJ4Liy4LmD4LiIIHVzZUVmZmVjdCDguYDguJ7guLTguYjguKHguYDguJXguLTguKFcblxuICBpZiAoIW1vdW50ZWQpIHJldHVybiBudWxsO1xuICBpZiAobG9hZGluZylcbiAgICByZXR1cm4gKFxuICAgICAgPEJveCBzeD17eyBkaXNwbGF5OiBcImZsZXhcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIiB9fT5cbiAgICAgICAgPFR5cG9ncmFwaHkgc3g9e3sgZm9udFNpemU6IDUwIH19PkxvYWRpbmcuLi48L1R5cG9ncmFwaHk+XG4gICAgICAgIDxDaXJjdWxhclByb2dyZXNzIC8+XG4gICAgICA8L0JveD5cbiAgICApOyAvL+C4o+C4reC5guC4q+C4peC4lOC4guC5ieC4reC4oeC4ueC4pVxuXG4gIHJldHVybiAoXG4gICAgPEJveCBzeD17eyBoZWlnaHQ6IDQwMCwgd2lkdGg6IDEgfX0+XG4gICAgICA8RGF0YUdyaWRcbiAgICAgICAgcm93cz17ZGF0YX1cbiAgICAgICAgY29sdW1ucz17Y29sdW1uc31cbiAgICAgICAgY29tcG9uZW50cz17eyBUb29sYmFyOiBRdWlja1NlYXJjaFRvb2xiYXIgfX1cbiAgICAgIC8+XG4gICAgPC9Cb3g+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkJveCIsIkRhdGFHcmlkIiwiR3JpZFRvb2xiYXJRdWlja0ZpbHRlciIsIlR5cG9ncmFwaHkiLCJzdXBhYmFzZSIsIkNpcmN1bGFyUHJvZ3Jlc3MiLCJRdWlja1NlYXJjaFRvb2xiYXIiLCJzeCIsInAiLCJwYiIsImZvbnRTaXplIiwicXVpY2tGaWx0ZXJQYXJzZXIiLCJzZWFyY2hJbnB1dCIsInNwbGl0IiwibWFwIiwidmFsdWUiLCJ0cmltIiwiZmlsdGVyIiwiUXVpY2tGaWx0ZXJpbmdDdXN0b21pemVkR3JpZCIsIm1vdW50ZWQiLCJzZXRNb3VudGVkIiwiZGF0YSIsInNldGRhdGEiLCJjb2x1bW5zIiwiZmllbGQiLCJoZWFkZXJOYW1lIiwid2lkdGgiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsIkZldGNoRGF0YSIsImZyb20iLCJzZWxlY3QiLCJlcSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJEb3dudGltZVJlY29yZF9VUGRhdGUiLCJjaGFubmVsIiwib24iLCJldmVudCIsInNjaGVtYSIsInRhYmxlIiwicGF5bG9hZCIsImNvbnNvbGUiLCJsb2ciLCJSZWxvYWREb3dudGltZSIsInN1YnNjcmliZSIsInJlbW92ZUNoYW5uZWwiLCJlcnJvciIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwiaGVpZ2h0Iiwicm93cyIsImNvbXBvbmVudHMiLCJUb29sYmFyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/component/tablework2.tsx\n"));

/***/ })

});