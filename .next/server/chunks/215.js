"use strict";
exports.id = 215;
exports.ids = [215];
exports.modules = {

/***/ 7215:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ tablePeople)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7738);
/* harmony import */ var _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_x_data_grid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _compunentConfig_supabase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1019);
/* harmony import */ var _mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9048);
/* harmony import */ var _mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_4__);





function tablePeople() {
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const columns = [
        {
            field: "emp_no",
            headerName: "no",
            width: 60
        },
        {
            field: "emp_name",
            headerName: "Name",
            width: 200
        },
        {
            field: "start_datetime",
            headerName: "start time",
            width: 120
        },
        {
            field: "end_datetime",
            headerName: "end time",
            width: 120
        },
        {
            field: "task_time",
            headerName: "task time",
            width: 120
        }
    ];
    const [dataManpower, setDataManpower] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setLoading(true);
        const FetchdataManpower_record = async ()=>{
            let { data , error  } = await _compunentConfig_supabase__WEBPACK_IMPORTED_MODULE_3__/* ["default"].from */ .Z.from("Manpower_record").select("*").eq("PD_key", localStorage.getItem("PD_key"));
            if (data) {
                setDataManpower(data);
            } else {
                console.log("fetch ManpowerError", error);
            }
        };
        FetchdataManpower_record();
        setLoading(false);
    }, []);
    const ReloadManpower_record = async ()=>{
        setLoading(true);
        let { data , error  } = await _compunentConfig_supabase__WEBPACK_IMPORTED_MODULE_3__/* ["default"].from */ .Z.from("Manpower_record").select("*").eq("PD_key", localStorage.getItem("PD_key"));
        if (data) {
            setDataManpower(data);
        } else {
            console.log("fetch ManpowerError", error);
        }
        setLoading(false);
    };
    const ManpowerRecord = _compunentConfig_supabase__WEBPACK_IMPORTED_MODULE_3__/* ["default"].channel */ .Z.channel("custom-all-ManpowerRecord2").on("postgres_changes", {
        event: "*",
        schema: "public",
        table: "Manpower_record"
    }, (payload)=>{
        console.log("Change received! ReloadManpower_record ", payload);
        ReloadManpower_record();
    // setDataManpower((data: any) => [...data, payload.new]);
    }).subscribe();
    if (loading) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_4___default()), {})
        }); //รอโหลดข้อมูล
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        style: {
            height: 320,
            width: "100%"
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_x_data_grid__WEBPACK_IMPORTED_MODULE_2__.DataGrid, {
            rows: dataManpower,
            columns: columns,
            pageSize: 5,
            rowsPerPageOptions: [
                5
            ]
        })
    });
}


/***/ })

};
;