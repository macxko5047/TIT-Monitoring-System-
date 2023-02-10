"use strict";
exports.id = 226;
exports.ids = [226];
exports.modules = {

/***/ 226:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ QuickFilteringCustomizedGrid)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7738);
/* harmony import */ var _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_x_data_grid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _compunentConfig_supabase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1019);
/* harmony import */ var _mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9048);
/* harmony import */ var _mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_6__);




// import supabase from "../compunentConfig/supabase";



function QuickSearchToolbar() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default()), {
            sx: {
                p: 0.5,
                pb: 0
            },
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                    sx: {
                        fontSize: 28
                    },
                    children: "Down time"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_x_data_grid__WEBPACK_IMPORTED_MODULE_3__.GridToolbarQuickFilter, {
                    quickFilterParser: (searchInput)=>searchInput.split(",").map((value)=>value.trim()).filter((value)=>value !== "")
                })
            ]
        })
    });
}
function QuickFilteringCustomizedGrid() {
    const [mounted, setMounted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [data, setdata] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    //รีเฟสเฉพาะอันนั้น
    // console.log({ data });
    // Otherwise filter will be applied on fields such as the hidden column id
    const columns = [
        {
            field: "id",
            headerName: "NO"
        },
        {
            field: "Downtime_code",
            headerName: "Downtime_code"
        },
        {
            field: "Begin_time",
            headerName: "Begin_time"
        },
        {
            field: "End_time",
            headerName: "End_time"
        },
        {
            field: "Duration_downtime",
            headerName: "Duration_downtime"
        },
        {
            field: "Downtime_description",
            headerName: "Detail",
            width: 200
        }
    ];
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false); // ทำโหลดดิ้งรอข้อมูล
    // รีเฟสเฉพาะอันนั้น;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // const intervalId = setInterval(() => {
        const FetchData = async ()=>{
            setLoading(true);
            const { data  } = await _compunentConfig_supabase__WEBPACK_IMPORTED_MODULE_5__/* ["default"].from */ .Z.from("Downtime_record").select("*").eq("Work_order_id", localStorage.getItem("Work_order_id")).eq("PD_key", localStorage.getItem("PD_key"));
            setdata(data);
        };
        FetchData();
        setLoading(false);
    // }, 1000);
    // return () => clearInterval(intervalId);
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const DowntimeRecord_UPdate = _compunentConfig_supabase__WEBPACK_IMPORTED_MODULE_5__/* ["default"].channel */ .Z.channel("custom-all-downtime").on("postgres_changes", {
            event: "*",
            schema: "public",
            table: "Downtime_record"
        }, (payload)=>{
            console.log("Change received Downtime_record", payload);
            ReloadDowntime();
        // setdata((prev: any) => [...prev, payload.new]);
        }).subscribe();
        return ()=>{
            _compunentConfig_supabase__WEBPACK_IMPORTED_MODULE_5__/* ["default"].removeChannel */ .Z.removeChannel(DowntimeRecord_UPdate);
        };
    }, [
        data
    ]);
    const ReloadDowntime = async ()=>{
        const { data , error  } = await _compunentConfig_supabase__WEBPACK_IMPORTED_MODULE_5__/* ["default"].from */ .Z.from("Downtime_record").select("*").filter("PD_key", "in", "(" + localStorage.getItem("PD_key") + ")");
        setdata(data);
    };
    //ทำเช็ค useEffect ทำงานระหว่าง cliant กับ server **ต้องทำความเข้าใจ useEffect เพิ่มเติม
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setMounted(true);
    }, []);
    //ทำเช็ค useEffect ทำงานระหว่าง cliant กับ server **ต้องทำความเข้าใจ useEffect เพิ่มเติม
    if (!mounted) return null;
    if (loading) return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default()), {
        sx: {
            display: "flex",
            alignItems: "center"
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                sx: {
                    fontSize: 50
                },
                children: "Loading..."
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_6___default()), {})
        ]
    }); //รอโหลดข้อมูล
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default()), {
        sx: {
            height: 400,
            width: 1
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_x_data_grid__WEBPACK_IMPORTED_MODULE_3__.DataGrid, {
            rows: data,
            columns: columns,
            components: {
                Toolbar: QuickSearchToolbar
            }
        })
    });
}


/***/ })

};
;