"use strict";
exports.id = 206;
exports.ids = [206];
exports.modules = {

/***/ 7020:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProductionUnitError)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3765);
/* harmony import */ var _mui_material_Alert__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Alert__WEBPACK_IMPORTED_MODULE_1__);


function ProductionUnitError() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Alert__WEBPACK_IMPORTED_MODULE_1___default()), {
        sx: {
            width: 340
        },
        severity: "error",
        children: "Please input data all !."
    });
}


/***/ }),

/***/ 5206:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ tablework1)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7738);
/* harmony import */ var _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_x_data_grid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4904);
/* harmony import */ var _mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _compunentConfig_supabase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1019);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3819);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_Dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8611);
/* harmony import */ var _mui_material_Dialog__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3882);
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1431);
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7934);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4173);
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _mui_material_Slide__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6080);
/* harmony import */ var _mui_material_Slide__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Slide__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _mui_material_TableBody__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(8823);
/* harmony import */ var _mui_material_TableBody__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableBody__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _mui_material_TableCell__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(8099);
/* harmony import */ var _mui_material_TableCell__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(443);
/* harmony import */ var _mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _mui_material_TableHead__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(5953);
/* harmony import */ var _mui_material_TableHead__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableHead__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _mui_material_TableRow__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(4848);
/* harmony import */ var _mui_material_TableRow__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(1168);
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Paper__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(8742);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(6042);
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(9648);
/* harmony import */ var _mui_material_Modal__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(9564);
/* harmony import */ var _mui_material_Modal__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Modal__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(3188);
/* harmony import */ var _mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var use_sound__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(971);
/* harmony import */ var use_sound__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(use_sound__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(9048);
/* harmony import */ var _mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(9271);
/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(8891);
/* harmony import */ var _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var _mui_material_Select__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(2651);
/* harmony import */ var _mui_material_Select__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Select__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var _ProductionUnitError__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(7020);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_23__]);
axios__WEBPACK_IMPORTED_MODULE_23__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



































const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 1000,
    hight: 450,
    bgcolor: "background.paper",
    border: "20px solid #87CEFA",
    boxShadow: 24,
    pt: 3,
    px: 5,
    pb: 3
};
const Item = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_25__.styled)((_mui_material_Paper__WEBPACK_IMPORTED_MODULE_19___default()))(({ theme  })=>({
        backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: "center",
        color: theme.palette.text.secondary
    }));
//ของ compunent TransitionProps
const Transition = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef(function Transition(props, ref) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Slide__WEBPACK_IMPORTED_MODULE_13___default()), {
        direction: "up",
        ref: ref,
        ...props
    });
});
function CustomToolbar() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default()), {
            sx: {
                display: "flex",
                pb: 0,
                justifyContent: "center",
                p: 1,
                m: 1,
                bgcolor: "background.paper",
                borderRadius: 1
            },
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_x_data_grid__WEBPACK_IMPORTED_MODULE_3__.GridToolbarContainer, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_x_data_grid__WEBPACK_IMPORTED_MODULE_3__.GridToolbarColumnsButton, {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_x_data_grid__WEBPACK_IMPORTED_MODULE_3__.GridToolbarFilterButton, {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_x_data_grid__WEBPACK_IMPORTED_MODULE_3__.GridToolbarDensitySelector, {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_x_data_grid__WEBPACK_IMPORTED_MODULE_3__.GridToolbarExport, {})
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_x_data_grid__WEBPACK_IMPORTED_MODULE_3__.GridToolbarQuickFilter, {
                    quickFilterParser: (searchInput)=>searchInput.split(",").map((value)=>value.trim()).filter((value)=>value !== "")
                })
            ]
        })
    });
}
function tablework1() {
    const [mounted, setMounted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [sData, setSData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [datasec, setdataSec] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [datasec01, setdataSec01] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [item_number, setItem_number] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [TextError, SetText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [PlayConfirm_Success, soundConfirm_Success] = use_sound__WEBPACK_IMPORTED_MODULE_27___default()("/Confirm_Success.mp3");
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_20__.useRouter)();
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    const hours = date.getHours();
    //check time day & night
    // const [kokks, setKokks] = useState("");
    // const checkDaynight = () => {
    //   if (checkDN === true) {
    //     setKokks("Day");
    //   }
    //   if (checkDN === false) {
    //     setKokks("Night");
    //   }
    // };
    // let checkDN = hours > 7 && hours < 19;
    function leftFillNumMonth(numMonth, targetLength) {
        return numMonth.toString().padStart(targetLength, 0);
    }
    const numMonth = month;
    const putMonth = leftFillNumMonth(numMonth, 2);
    let lastday = new Date(year, month, 0);
    // This arrangement can be altered based on how we want the date's format to appear.
    let currentDate = `${year}-${month}-${day}`;
    let currentDate1 = `${year}-${month}-${"01"}`;
    // console.log("lastDay", lastday.getDate());
    let currentDate2 = `${year}-${putMonth}-${lastday.getDate()}`;
    let Fulltimeday = `${year.toString().substr(-2)}${putMonth}`;
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false); // ทำโหลดดิ้งรอข้อมูล
    // เช็คค่าที่เท้ากับแล้วเซ็ตค่าใส่ ------------------------------
    const [CheckdataPD, setCheckdataPD] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    // console.log("CheckdataPD", CheckdataPD);
    const [checkdataGroup, setCheckdataGroup] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    // console.log("checkdataGroup", checkdataGroup);
    //----เช็คค่า group ออกมา
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setLoading(true);
        const FetchDataCheck = async ()=>{
            const { data , error  } = await _compunentConfig_supabase__WEBPACK_IMPORTED_MODULE_5__/* ["default"].from */ .Z.from("Production_unit_group").select("*").eq("PD_line", datasec01).limit(1); //ใช้แทน single
            if (data.length) {
                await setCheckdataPD(data[0].Digit_group);
                await setCheckdataGroup(data[0].Group_name);
                await fetchPDU();
            } else {
                console.log(error);
            }
        };
        if (open === true) {
            FetchDataCheck();
        }
        setLoading(false);
    }, [
        CheckdataPD,
        datasec01
    ]);
    //-----------------------
    //============ เรียก production Unit จาก group ได้ค่ามาจาก CheckdataPD ====
    const [dataUnit_gruop, setDataUnit_gruop] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [dataUnit_select, setDataUnit_select] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [dataShift, setDataShift] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [dataWo, setDataWo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [dataQty, setDataQty] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    // console.log("dataUnit_select", dataUnit_select);
    //===============.ใช้เช็คค่าว่าถ้ามี Production_Unit Onilne ให้ไม่สามารถทำงานซ้ำกันในที่เดียวได้
    // const dataSelectUnitCheck = dataUnit_gruop.filter(
    //   (res: any) => res.PD_line == dataUnit_select
    // );
    // const dataSelectUnitCheckMAP = dataUnit_gruop.map(
    //   (testss: any) => testss.PD_line == dataUnit_select
    // );
    // // console.log("dataSelectUnitCheck", dataSelectUnitCheck);
    // console.log("dataSelectUnitCheckMAP", dataSelectUnitCheckMAP);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const FetchDataunitgruop = async ()=>{
            const { data , error  } = await _compunentConfig_supabase__WEBPACK_IMPORTED_MODULE_5__/* ["default"].from */ .Z.from("Production_unit_group").select("*").filter("Group_name", "in", "(" + checkdataGroup + ")").filter("status_run", "in", "(Offline)").order("PD_line", {
                ascending: true
            });
            if (data) {
                setDataUnit_gruop(data);
            }
            if (error) {
                console.log("FetchDataunitgruop Error", error);
            }
        };
        FetchDataunitgruop();
    }, [
        CheckdataPD
    ]);
    //-------------------------------------------------------------------
    //========= check data Work order Online ==========
    const [dataWOcheck, setDataWOcheck] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    // console.log("dataWOcheck", dataWOcheck);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const fetchWO_onoff = async ()=>{
            let { data: Production_history , error  } = await _compunentConfig_supabase__WEBPACK_IMPORTED_MODULE_5__/* ["default"].from */ .Z.from("Production_history").select("Work_order_id,Status");
            setDataWOcheck(Production_history);
        };
        fetchWO_onoff();
    }, []);
    // ------------------------------------------------
    const [datecheck1, setDatecheck1] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    // console.log("YM get:", datecheck1);
    const fectdataDESC = async ()=>{
        let { data , error  } = await _compunentConfig_supabase__WEBPACK_IMPORTED_MODULE_5__/* ["default"].from */ .Z.from("Production_history").select("*").gte("Production_date", currentDate1).lte("Production_date", currentDate2);
        if (data) {
            await setDatecheck1(data);
            console.log("fetchDESC", data);
        } else {
            console.log(error);
        }
    };
    function leftFillNum(num, targetLength) {
        return num.toString().padStart(targetLength, 0);
    }
    const num = datecheck1.length;
    // console.log(num);
    const putPDKEY = leftFillNum(num, 4);
    // console.log("PDkey Run+1:", putPDKEY);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const ProductionHistory = _compunentConfig_supabase__WEBPACK_IMPORTED_MODULE_5__/* ["default"].channel */ .Z.channel("custom-all-PD_keyNew").on("postgres_changes", {
            event: "*",
            schema: "public",
            table: "Production_history"
        }, (payload)=>{
            console.log("Change received! PD_keyNew", payload);
            fectdataDESC();
        }).subscribe();
    }, [
        datecheck1
    ]);
    //-------------------------------------
    // insert ตอนกด select WO
    const insertDigit = async ()=>{
        const PDkey = `${CheckdataPD}${Fulltimeday}${putPDKEY}`;
        const { data , error  } = await _compunentConfig_supabase__WEBPACK_IMPORTED_MODULE_5__/* ["default"].from */ .Z.from("Production_history").insert([
            {
                PD_key: PDkey,
                Work_order_id: datasec[0].Work_order_id,
                Item_number: datasec[0].Item_number,
                Production_unit: dataUnit_select,
                Production_date: currentDate,
                Shift: dataShift,
                Order_qty: datasec[0].Order_qty,
                Open_qty: datasec[0].Open_qty,
                OP_confirm_before: localStorage.getItem("emp_no"),
                Standard_time: RuncalculateManDefault
            }
        ]);
        if (data) {
            console.log(data);
        } else {
            console.log(error);
        }
    };
    //click ปุ่ม select WO
    // const dataCheckWoSelet = localStorage.getItem("CheckWo");
    // console.log("testCheck", dataCheckWoSelet);
    const handleClickOpen = async (event, cellValues)=>{
        // if (cellValues.row.Status_working === "Online") {
        //   alert("Already on proceeding in production!");
        // } else {
        setLoading(true);
        await setOpen(true);
        await setdataSec([
            cellValues.row
        ]);
        await setdataSec01(cellValues.row.Production_unit);
        await setItem_number(cellValues.row.Item_number);
        await setDataWo(cellValues.row.Work_order_id);
        await setDataQty(cellValues.row.Open_qty);
        await fectdataDESC();
        // await checkDaynight();
        await localStorage.setItem("CheckWo", cellValues.row.Work_order_id);
        await fetchDataPeople();
        setLoading(false);
    // }
    };
    const handleClose = ()=>{
        setOpen(false);
        setdataSec01("");
        setItem_number("");
        setRun_stadrad("");
    };
    //-----------------------
    //================ fetch Production unit มาเช็ค จาก Production unit==================
    const [dataUnitcheck, setDataUnitcheck] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    // console.log("dataUnitcheck", dataUnitcheck);
    const [checkStatusWO, setCheckStatusWO] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    // console.log("checkStatusWO", checkStatusWO);
    const fetchProductionUnit = async ()=>{
        let { data , error  } = await _compunentConfig_supabase__WEBPACK_IMPORTED_MODULE_5__/* ["default"].from */ .Z.from("Production_unit_group").select("status_run").in("status_run", [
            "Downtime",
            "Online"
        ]).eq("Work_order_id", localStorage.getItem("Work_order_id"));
        if (data) {
            setDataUnitcheck(data.map((ress)=>ress.status_run === "Online" || ress.status_run === "Downtime"));
        }
        if (error) {
            console.log("fetchProductionUnit", error);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const fetchAll = async ()=>{
            await fetchProductionUnit();
        };
        fetchAll();
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const updateOnlineAuto = async ()=>{
            if (dataUnitcheck[0] === true) {
                const { data , error  } = await _compunentConfig_supabase__WEBPACK_IMPORTED_MODULE_5__/* ["default"].from */ .Z.from("Work_order").update({
                    Status_working: "Online"
                }).eq("Work_order_id", localStorage.getItem("Work_order_id"));
                if (data) {
                    console.log("UP Status Online Success");
                }
            }
        };
        updateOnlineAuto();
    }, [
        dataUnitcheck
    ]);
    //---------------------------------------------------------------------
    // confrim
    const handleropenConfirm = ()=>{
        const LocalPD_key = localStorage.getItem("PD_key");
        if (!dataShift) {
            return SetText(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ProductionUnitError__WEBPACK_IMPORTED_MODULE_33__["default"], {}));
        }
        if (!dataUnit_select) {
            return SetText(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ProductionUnitError__WEBPACK_IMPORTED_MODULE_33__["default"], {}));
        }
        if (!run_stadrad) {
            return SetText(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ProductionUnitError__WEBPACK_IMPORTED_MODULE_33__["default"], {}));
        } else {
            SetText("");
            if (LocalPD_key != null) {
                alert("Please push STOP button before proceed next WO");
            }
            if (LocalPD_key === null) {
                fectdataDESC();
                ConfrimOpen();
            }
        }
    };
    const handleConfirm = async (event)=>{
        event.preventDefault();
        setLoading(true);
        await PlayConfirm_Success();
        await handlerAgree();
        await insertManpower();
        setLoading(false);
    };
    // push Agree
    const removeItem = ()=>{
        localStorage.removeItem("TimeStart");
    };
    const handlerAgree = async ()=>{
        setLoading(true);
        await removeItem();
        if (CheckdataPD != "") {
            await insertDigit();
        }
        await localStorage.setItem("PDU", PduNum);
        await localStorage.setItem("Work_order_id", datasec[0].Work_order_id);
        await localStorage.setItem("Production_unit", dataUnit_select);
        await localStorage.setItem("PD_key", `${CheckdataPD}${Fulltimeday}${putPDKEY}`);
        await localStorage.setItem("Open_qty", datasec[0].Open_qty);
        await localStorage.setItem("Complete_qty", datasec[0].Complete_qty);
        await localStorage.setItem("ItemNumber", datasec[0].Item_number);
        await localStorage.setItem("NG_qty_WO", datasec[0].NG_qty);
        await router.push("/draw1");
        setLoading(false);
    };
    //=================================================================
    // console.log(currentDate); // "DD-MM-YYYY"
    // onChang รหัสพนักงาน
    const [dataUser, setDataUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    console.log("dataAll", dataUser);
    const [user1, setUser1] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    // console.log(user1);
    const dataName = dataUser.filter((respon)=>respon.emp_no == user1)[0]?.emp_name || "";
    // console.log({ dataName });
    //   .map((ShowName: { emp_name: string }) => ShowName.emp_name);
    // console.log("dataName", JSON.stringify(dataName));
    const dataDepartment = dataUser.filter((respon1)=>respon1.emp_no == user1)[0]?.department || "";
    // console.log("dataDepartment", dataDepartment);
    const [selectId, SetID] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [TextConfirmName, SetConfirmName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [TextConfirmDepartment, SetConfirmDepartment] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [openDel, setOpenDel] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    const DeleteOpen = ()=>setOpenDel(true);
    const DeleteClose = ()=>setOpenDel(false);
    const [openConfrim, setOpenConfrim] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    const ConfrimOpen = ()=>setOpenConfrim(true);
    const ConfrimClose = ()=>setOpenConfrim(false);
    const handleClick = (event, cellValues)=>{
        SetConfirmName(cellValues.row.emp_name);
        SetConfirmDepartment(cellValues.row.department);
        SetID(cellValues.row.id);
    };
    const DelNG = async (event)=>{
        event.preventDefault();
        if (selectId) {
            const { data , error  } = await _compunentConfig_supabase__WEBPACK_IMPORTED_MODULE_5__/* ["default"].from */ .Z.from("userSelect").delete().eq("id", selectId);
            if (!error) {
                console.log("People Delete Success :", data);
                await fetchDataPeople();
                await DeleteClose();
            }
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const FetchData = async ()=>{
            let headersList = {
                Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZkdWRsd3FzcnVjb2p4anBxaHZxIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY2ODc2MDU2NSwiZXhwIjoxOTg0MzM2NTY1fQ.-Z5955b7zSmDnGV3n2y65qJDElz3zfdyxAVyffJIR7Q",
                apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZkdWRsd3FzcnVjb2p4anBxaHZxIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY2ODc2MDU2NSwiZXhwIjoxOTg0MzM2NTY1fQ.-Z5955b7zSmDnGV3n2y65qJDElz3zfdyxAVyffJIR7Q"
            };
            let reqOptions = {
                url: "https://vdudlwqsrucojxjpqhvq.supabase.co/rest/v1/employee",
                method: "GET",
                headers: headersList
            };
            let res = await axios__WEBPACK_IMPORTED_MODULE_23__["default"].request(reqOptions);
            if (res.data) {
                console.log(res.data);
                setDataUser(res.data);
            }
        };
        FetchData();
    }, []);
    // Otherwise filter will be applied on fields such as the hidden column id
    const columns = [
        {
            field: "Select Item ",
            minWidth: 110,
            flex: 1,
            align: "center",
            headerClassName: "super-app-theme--header",
            renderCell: (cellValues)=>{
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default()), {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_6___default()), {
                        sx: {
                            lg: 1,
                            sm: 1
                        },
                        variant: "contained",
                        color: "primary",
                        onClick: (event)=>{
                            handleClickOpen(event, cellValues);
                        },
                        children: "Select"
                    })
                });
            }
        },
        {
            field: "Work_order_id",
            headerName: "Work order id",
            minWidth: 100,
            flex: 1,
            headerClassName: "super-app-theme--header",
            cellClassName: (params)=>{
                if (params.row.Status_working == null) {
                    return "";
                }
                return clsx__WEBPACK_IMPORTED_MODULE_28___default()("super-app", {
                    negative: params.row.Status_working === "Online",
                    positive: params.row.Status_working === "Offline"
                });
            }
        },
        {
            field: "Item_number",
            headerName: "Item number",
            minWidth: 150,
            flex: 1,
            headerClassName: "super-app-theme--header",
            cellClassName: (params)=>{
                if (params.row.Status_working == null) {
                    return "";
                }
                return clsx__WEBPACK_IMPORTED_MODULE_28___default()("super-app", {
                    negative: params.row.Status_working === "Online",
                    positive: params.row.Status_working === "Offline"
                });
            }
        },
        {
            field: "WO_status",
            headerName: "WO status",
            minWidth: 110,
            flex: 1,
            headerClassName: "super-app-theme--header",
            cellClassName: (params)=>{
                if (params.row.Status_working == null) {
                    return "";
                }
                return clsx__WEBPACK_IMPORTED_MODULE_28___default()("super-app", {
                    negative: params.row.Status_working === "Online",
                    positive: params.row.Status_working === "Offline"
                });
            }
        },
        {
            field: "Order_qty",
            minWidth: 110,
            flex: 1,
            headerName: "Order qty",
            headerClassName: "super-app-theme--header",
            cellClassName: (params)=>{
                if (params.row.Status_working == null) {
                    return "";
                }
                return clsx__WEBPACK_IMPORTED_MODULE_28___default()("super-app", {
                    negative: params.row.Status_working === "Online",
                    positive: params.row.Status_working === "Offline"
                });
            }
        },
        {
            field: "Complete_qty",
            flex: 1,
            minWidth: 110,
            headerName: "Complete qty",
            headerClassName: "super-app-theme--header",
            cellClassName: (params)=>{
                if (params.row.Status_working == null) {
                    return "";
                }
                return clsx__WEBPACK_IMPORTED_MODULE_28___default()("super-app", {
                    negative: params.row.Status_working === "Online",
                    positive: params.row.Status_working === "Offline"
                });
            }
        },
        {
            field: "Open_qty",
            flex: 1,
            minWidth: 110,
            headerName: "Open qty",
            headerClassName: "super-app-theme--header",
            cellClassName: (params)=>{
                if (params.row.Status_working == null) {
                    return "";
                }
                return clsx__WEBPACK_IMPORTED_MODULE_28___default()("super-app", {
                    negative: params.row.Status_working === "Online",
                    positive: params.row.Status_working === "Offline"
                });
            }
        },
        {
            field: "Due_over",
            flex: 1,
            minWidth: 110,
            headerName: "Due_over",
            headerClassName: "super-app-theme--header",
            cellClassName: (params)=>{
                if (params.row.Status_working == null) {
                    return "";
                }
                return clsx__WEBPACK_IMPORTED_MODULE_28___default()("super-app", {
                    negative: params.row.Status_working === "Online",
                    positive: params.row.Status_working === "Offline"
                });
            }
        },
        {
            field: "Due_date_PD",
            flex: 1,
            minWidth: 110,
            headerName: "Due date PD",
            headerClassName: "super-app-theme--header",
            cellClassName: (params)=>{
                if (params.row.Status_working == null) {
                    return "";
                }
                return clsx__WEBPACK_IMPORTED_MODULE_28___default()("super-app", {
                    negative: params.row.Status_working === "Online",
                    positive: params.row.Status_working === "Offline"
                });
            }
        },
        {
            field: "Release_date",
            flex: 1,
            minWidth: 110,
            headerName: "Release date",
            headerClassName: "super-app-theme--header",
            cellClassName: (params)=>{
                if (params.row.Status_working == null) {
                    return "";
                }
                return clsx__WEBPACK_IMPORTED_MODULE_28___default()("super-app", {
                    negative: params.row.Status_working === "Online",
                    positive: params.row.Status_working === "Offline"
                });
            }
        },
        // {
        //   field: "Production_unit",
        //   headerName: "Production unit",
        //   width: 140,
        //   headerClassName: "super-app-theme--header",
        //   cellClassName: (params: GridCellParams<any>) => {
        //     if (params.row.Status_working == null) {
        //       return "";
        //     }
        //     return clsx("super-app", {
        //       negative: params.row.Status_working === "Online",
        //       positive: params.row.Status_working === "Offline",
        //     });
        //   },
        // },
        {
            field: "Status_working",
            flex: 1,
            minWidth: 120,
            headerName: "Status_working",
            headerClassName: "super-app-theme--header",
            cellClassName: (Status_working)=>{
                if (Status_working.value == null) {
                    return "";
                }
                return clsx__WEBPACK_IMPORTED_MODULE_28___default()("super-app", {
                    negative: Status_working.value === "Online",
                    positive: Status_working.value === "Offline"
                });
            }
        }
    ];
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const FetchData = async ()=>{
            console.log("fetchdata"); //ใช้เช็คการทำงานว่าทำกี่ครั้ง
            const { data , error  } = await _compunentConfig_supabase__WEBPACK_IMPORTED_MODULE_5__/* ["default"].from */ .Z.from("Work_order").select("*").filter("WO_status", "in", "(R)"); //983
            if (data) {
                setSData(data);
                console.log(data);
            } else {
                console.log(error);
            }
        };
        FetchData();
    }, []);
    const ReloadFetchData = async ()=>{
        console.log("fetchdata"); //ใช้เช็คการทำงานว่าทำกี่ครั้ง
        const { data , error  } = await _compunentConfig_supabase__WEBPACK_IMPORTED_MODULE_5__/* ["default"].from */ .Z.from("Work_order").select("*").filter("WO_status", "in", "(R)"); //983
        if (data) {
            setSData(data);
            console.log(data);
        } else {
            console.log(error);
        }
    };
    // ----------------------------------------
    // ช่องโชร จำนวนคนทำงาน
    const [dataPeople, setDataPeople] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    // console.log("dataPeople", dataPeople);
    const fetchDataPeople = async ()=>{
        let { data: userSelect , error  } = await _compunentConfig_supabase__WEBPACK_IMPORTED_MODULE_5__/* ["default"].from */ .Z.from("userSelect").select("*").eq("Work_order_id", localStorage.getItem("CheckWo"));
        if (userSelect) {
            setDataPeople(userSelect);
        } else {
            console.log("fetchDataPeople Error", error);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const userSelect = _compunentConfig_supabase__WEBPACK_IMPORTED_MODULE_5__/* ["default"].channel */ .Z.channel("custom-all-channeluserSelectPeople").on("postgres_changes", {
            event: "*",
            schema: "public",
            table: "userSelect"
        }, (payload)=>{
            console.log("Change received up people Select!", payload);
            fetchDataPeople();
        }).subscribe();
        return ()=>{
            _compunentConfig_supabase__WEBPACK_IMPORTED_MODULE_5__/* ["default"].removeChannel */ .Z.removeChannel(userSelect);
        };
    }, [
        dataPeople
    ]);
    const handlerSubmitPeople = async ()=>{
        if (user1 === "") {
            alert("Please entry your ID User");
        }
        if (user1 != "") {
            const { data , error  } = await _compunentConfig_supabase__WEBPACK_IMPORTED_MODULE_5__/* ["default"].from */ .Z.from("userSelect").insert([
                {
                    emp_no: user1,
                    emp_name: dataName,
                    department: dataDepartment,
                    Work_order_id: localStorage.getItem("CheckWo"),
                    activated: "not"
                }
            ]);
            await setUser1("");
            if (data) {
                console.log("Insert dataUserSelect Success");
            } else {
                console.log("Insert dataUserSelect Error", error);
            }
        }
    };
    const insertManpower = async ()=>{
        setLoading(true);
        let { data , error  } = await _compunentConfig_supabase__WEBPACK_IMPORTED_MODULE_5__/* ["default"].rpc */ .Z.rpc("upmanpower", {
            wo: localStorage.getItem("Work_order_id")
        });
        if (error) console.error(error);
        else console.log("Up User Success", data);
        setLoading(false);
    };
    //-----------------------------------------------------------------------
    const columnsAddPeople = [
        // { field: "id", headerName: "ID", width: 50 },
        {
            field: "emp_no",
            headerName: "no",
            width: 100
        },
        {
            field: "emp_name",
            headerName: "Name",
            width: 220
        },
        {
            field: "department",
            headerName: "department",
            width: 320
        },
        {
            field: "action",
            headerName: "Delete",
            width: 70,
            sortable: false,
            disableColumnMenu: true,
            renderCell: (cellValues)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_11___default()), {
                    onClick: (event)=>{
                        handleClick(event, cellValues), DeleteOpen();
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_10___default()), {
                        "aria-label": "delete",
                        size: "large",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_26___default()), {})
                    })
                })
        }
    ];
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const WorkOrder = _compunentConfig_supabase__WEBPACK_IMPORTED_MODULE_5__/* ["default"].channel */ .Z.channel("custom-all-WorkOrderasdwqe").on("postgres_changes", {
            event: "*",
            schema: "public",
            table: "Work_order"
        }, (payload)=>{
            console.log("Change received WorkOrder !", payload);
            ReloadFetchData();
        }).subscribe();
        return ()=>{
            _compunentConfig_supabase__WEBPACK_IMPORTED_MODULE_5__/* ["default"].removeChannel */ .Z.removeChannel(WorkOrder);
        };
    }, [
        sData
    ]);
    const [run_stadrad, setRun_stadrad] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    // console.log("cct_stadrad", run_stadrad);
    // console.log("item_number", item_number);
    // console.log("datasec01", datasec01);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const fetchCct_stadrad = async ()=>{
            if (item_number != "") {
                let { data , error  } = await _compunentConfig_supabase__WEBPACK_IMPORTED_MODULE_5__/* ["default"].from */ .Z.from("BOM").select("run").eq("master_part", item_number).eq("description", "BEFORE FINISH GOOD");
                if (data?.length) {
                    if (data[0].run === 0) {
                        setRun_stadrad("");
                    }
                    if (data[0].run > 0) {
                        setRun_stadrad(data[0].run);
                    }
                    console.log("fetchdataBom Success", data);
                } else {
                    console.log("fetchdataBom Error", error);
                }
            }
        };
        fetchCct_stadrad();
    }, [
        item_number
    ]);
    const [PduNum, setPduNum] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    console.log("PduNum", PduNum);
    // console.log("CheckdataPD", CheckdataPD);
    const RuncalculateManDefault = run_stadrad / PduNum;
    console.log("RuncalculateManDefault", RuncalculateManDefault);
    const fetchPDU = async ()=>{
        let { data: PDU_multiply_manp , error  } = await _compunentConfig_supabase__WEBPACK_IMPORTED_MODULE_5__/* ["default"].from */ .Z.from("PDU_multiply_manp").select("Default_manp").eq("Digit_group", CheckdataPD);
        if (PDU_multiply_manp) {
            setPduNum(PDU_multiply_manp.map((ress)=>ress.Default_manp));
        }
    };
    //ทำเช็ค useEffect ทำงานระหว่าง cliant กับ server **ต้องทำความเข้าใจ useEffect เพิ่มเติม
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setMounted(true);
    }, []);
    //ทำเช็ค useEffect ทำงานระหว่าง cliant กับ server **ต้องทำความเข้าใจ useEffect เพิ่มเติม
    if (loading) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default()), {
            sx: {
                display: "flex",
                alignItems: "center"
            },
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_11___default()), {
                    sx: {
                        fontSize: 50
                    },
                    children: "Loading..."
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_29___default()), {})
            ]
        }); //รอโหลดข้อมูล
    }
    if (!mounted) return null;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default()), {
        sx: {
            height: 650,
            width: "100%",
            "& .super-app.negative": {
                backgroundColor: "rgba(157, 255, 118, 0.49)",
                color: "#000000",
                fontWeight: "500",
                borderBlockColor: "#F8F8FF"
            },
            "& .super-app.positive": {
                backgroundColor: "#DCDCDC",
                color: "#000000",
                fontWeight: "500",
                // borderBlockColor: "red",
                borderBlockColor: "#F8F8FF"
            },
            "& .super-app-theme--header": {
                backgroundColor: "#99CCFF",
                color: "#000000",
                fontWeight: "500",
                borderBlockColor: "#F8F8FF"
            }
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_x_data_grid__WEBPACK_IMPORTED_MODULE_3__.DataGrid, {
                rows: sData,
                columns: columns,
                components: {
                    Toolbar: CustomToolbar
                },
                getRowId: (row)=>row.Work_order_id,
                initialState: {
                    sorting: {
                        sortModel: [
                            {
                                field: "Due_over",
                                sort: "desc"
                            }
                        ]
                    }
                }
            }),
            currentDate,
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_7___default()), {
                fullScreen: true,
                open: open,
                TransitionComponent: Transition,
                onClose: handleClose,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_8___default()), {
                        sx: {
                            position: "relative"
                        },
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_9___default()), {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_10___default()), {
                                    edge: "start",
                                    color: "inherit",
                                    onClick: handleClose,
                                    "aria-label": "close",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_12___default()), {})
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_11___default()), {
                                    sx: {
                                        ml: 2,
                                        flex: 1
                                    },
                                    variant: "h6",
                                    component: "div",
                                    children: "Work Oder"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_6___default()), {
                                    autoFocus: true,
                                    color: "inherit",
                                    onClick: handleropenConfirm,
                                    children: "Agree"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default()), {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_16___default()), {
                                component: (_mui_material_Paper__WEBPACK_IMPORTED_MODULE_19___default()),
                                style: {
                                    width: "auto",
                                    tableLayout: "auto"
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableHead__WEBPACK_IMPORTED_MODULE_17___default()), {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_18___default()), {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_15___default()), {
                                                    align: "right",
                                                    children: "Work_order_id"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_15___default()), {
                                                    align: "right",
                                                    children: "\xa0\xa0\xa0\xa0\xa0\xa0Item_number"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_15___default()), {
                                                    align: "right",
                                                    children: "WO_status"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_15___default()), {
                                                    align: "right",
                                                    children: "Order_qty"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_15___default()), {
                                                    align: "right",
                                                    children: "Complete_qty"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_15___default()), {
                                                    align: "right",
                                                    children: "Open_qty"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_15___default()), {
                                                    align: "right",
                                                    children: "Release_date"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_15___default()), {
                                                    align: "right",
                                                    children: "Due_date_PD"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_15___default()), {
                                                    align: "right",
                                                    children: "PD_Key"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableBody__WEBPACK_IMPORTED_MODULE_14___default()), {
                                        children: datasec.map((rowss)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_18___default()), {
                                                sx: {
                                                    "&:last-child td, &:last-child th": {
                                                        border: 0
                                                    }
                                                },
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_15___default()), {
                                                        align: "right",
                                                        children: rowss.Work_order_id
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_15___default()), {
                                                        align: "right",
                                                        children: rowss.Item_number
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_15___default()), {
                                                        align: "right",
                                                        children: rowss.WO_status
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_15___default()), {
                                                        align: "right",
                                                        children: rowss.Order_qty
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_15___default()), {
                                                        align: "right",
                                                        children: rowss.Complete_qty
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_15___default()), {
                                                        align: "right",
                                                        children: rowss.Open_qty
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_15___default()), {
                                                        align: "right",
                                                        children: rowss.Release_date
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_15___default()), {
                                                        align: "right",
                                                        children: rowss.Due_date_PD
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_15___default()), {
                                                        align: "right",
                                                        children: `${CheckdataPD}${Fulltimeday}${putPDKEY}`
                                                    })
                                                ]
                                            }, rowss.Work_order_id))
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default()), {
                                sx: {
                                    flexGrow: 1,
                                    p: 1
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Item, {
                                    sx: {
                                        height: "100%",
                                        lg: 1
                                    },
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_21___default()), {
                                        sx: {
                                            mt: 1,
                                            p: 1
                                        },
                                        direction: "row",
                                        alignItems: "center",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_11___default()), {
                                                children: "Production Unit "
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_31___default()), {
                                                sx: {
                                                    m: 1,
                                                    minWidth: 200
                                                },
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Select__WEBPACK_IMPORTED_MODULE_32___default()), {
                                                    value: dataUnit_select,
                                                    onChange: (event)=>setDataUnit_select(event.target.value),
                                                    fullWidth: true,
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_30___default()), {
                                                            sx: {
                                                                fontSize: 24
                                                            },
                                                            value: "",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("em", {
                                                                children: "None"
                                                            })
                                                        }),
                                                        dataUnit_gruop.map((fetchdata)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_30___default()), {
                                                                sx: {
                                                                    fontSize: 24
                                                                },
                                                                value: fetchdata.PD_line,
                                                                children: [
                                                                    fetchdata.PD_line,
                                                                    " : ",
                                                                    fetchdata.Group_name
                                                                ]
                                                            }, fetchdata.PD_line))
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_11___default()), {
                                                children: "Shift"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_31___default()), {
                                                sx: {
                                                    m: 1,
                                                    minWidth: 120
                                                },
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Select__WEBPACK_IMPORTED_MODULE_32___default()), {
                                                    value: dataShift,
                                                    onChange: (event)=>setDataShift(event.target.value),
                                                    fullWidth: true,
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_30___default()), {
                                                            sx: {
                                                                fontSize: 24
                                                            },
                                                            value: "Day",
                                                            children: "Day"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_30___default()), {
                                                            sx: {
                                                                fontSize: 24
                                                            },
                                                            value: "Night",
                                                            children: "Night"
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_11___default()), {
                                                children: "RunTime"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_31___default()), {
                                                sx: {
                                                    "& .MuiTextField-root": {
                                                        m: 1,
                                                        width: "10ch"
                                                    }
                                                },
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_22___default()), {
                                                    sx: {
                                                        textAlign: "center"
                                                    },
                                                    id: "outlined-number",
                                                    type: "number",
                                                    value: run_stadrad,
                                                    onChange: (event)=>setRun_stadrad(event.target.value)
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_11___default()), {
                                                children: "sec."
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                sx: {
                                                    p: 1
                                                },
                                                children: [
                                                    " ",
                                                    TextError
                                                ]
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default()), {
                                sx: {
                                    flexGrow: 1,
                                    p: 1
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_4___default()), {
                                    container: true,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_4___default()), {
                                        container: true,
                                        xs: 12,
                                        md: 12,
                                        lg: 12,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                xs: 3,
                                                lg: 3,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Item, {
                                                    sx: {
                                                        height: "100%",
                                                        lg: 1
                                                    },
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                        component: "form",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_22___default()), {
                                                                id: "useradd",
                                                                label: "ID User",
                                                                variant: "outlined",
                                                                value: user1,
                                                                name: "useradd",
                                                                type: "number",
                                                                onChange: (event)=>setUser1(event.target.value),
                                                                sx: {
                                                                    width: "100%",
                                                                    height: 50,
                                                                    mt: 2
                                                                }
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_22___default()), {
                                                                disabled: true,
                                                                id: "fullname",
                                                                label: "Name",
                                                                variant: "filled",
                                                                value: dataName,
                                                                name: "fullname",
                                                                sx: {
                                                                    width: "100%",
                                                                    height: 50,
                                                                    mt: 2
                                                                }
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_22___default()), {
                                                                disabled: true,
                                                                id: "filled-disabled",
                                                                label: "department",
                                                                value: dataDepartment,
                                                                name: "department",
                                                                variant: "filled",
                                                                sx: {
                                                                    width: "100%",
                                                                    height: 50,
                                                                    mt: 2
                                                                }
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                                sx: {
                                                                    width: "100%",
                                                                    height: 50,
                                                                    mt: 2,
                                                                    color: "#000000",
                                                                    bgcolor: "#7CFC00"
                                                                },
                                                                variant: "contained",
                                                                color: "inherit",
                                                                onClick: handlerSubmitPeople,
                                                                children: "Submit"
                                                            })
                                                        ]
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                xs: 9,
                                                md: 9,
                                                lg: 9,
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Item, {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_11___default()), {
                                                            children: "Table People"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            style: {
                                                                height: 400,
                                                                width: "100%"
                                                            },
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_x_data_grid__WEBPACK_IMPORTED_MODULE_3__.DataGrid, {
                                                                rows: dataPeople,
                                                                columns: columnsAddPeople,
                                                                pageSize: 5,
                                                                rowsPerPageOptions: [
                                                                    5
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Modal__WEBPACK_IMPORTED_MODULE_24___default()), {
                open: openDel,
                onClose: DeleteClose,
                "aria-labelledby": "modal-modal-title",
                "aria-describedby": "modal-modal-description",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default()), {
                    component: "form",
                    onSubmit: DelNG,
                    noValidate: true,
                    sx: style,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_11___default()), {
                            id: "modal-modal-title",
                            variant: "h6",
                            component: "h2",
                            children: "Confirm delete"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_11___default()), {
                            sx: {
                                mt: 2
                            },
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_21___default()), {
                                    direction: "row",
                                    justifyContent: "center",
                                    spacing: 4,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_11___default()), {
                                            children: "Do you want to delete Name :"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_11___default()), {
                                            sx: {
                                                color: "red"
                                            },
                                            children: [
                                                TextConfirmName,
                                                " "
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_11___default()), {
                                            children: "Department :"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_11___default()), {
                                            sx: {
                                                color: "red"
                                            },
                                            children: TextConfirmDepartment
                                        }),
                                        "\xa0\xa0 ?"
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_21___default()), {
                                    sx: {
                                        mt: 3
                                    },
                                    direction: "row",
                                    justifyContent: "space-around",
                                    alignItems: "center",
                                    spacing: 2,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_6___default()), {
                                            variant: "contained",
                                            sx: {
                                                width: 150,
                                                height: 60,
                                                p: 2.5
                                            },
                                            type: "submit",
                                            children: "Yes"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_6___default()), {
                                            onClick: DeleteClose,
                                            variant: "outlined",
                                            color: "error",
                                            sx: {
                                                width: 150,
                                                height: 60,
                                                p: 2.5,
                                                bgcolor: "red",
                                                color: "white"
                                            },
                                            children: "No"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Modal__WEBPACK_IMPORTED_MODULE_24___default()), {
                open: openConfrim,
                onClose: ConfrimClose,
                "aria-labelledby": "modal-modal-title",
                "aria-describedby": "modal-modal-description",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default()), {
                    component: "form",
                    onSubmit: handleConfirm,
                    noValidate: true,
                    sx: style,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_11___default()), {
                            id: "modal-modal-title",
                            variant: "h3",
                            component: "h2",
                            children: "Confirm Select Work Order"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_11___default()), {
                            sx: {
                                mt: 2
                            },
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_21___default()), {
                                    direction: "row",
                                    sx: {
                                        m: 1,
                                        p: 1
                                    },
                                    spacing: 1,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_11___default()), {
                                            sx: {
                                                fontSize: 30
                                            },
                                            children: "W/O :"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_11___default()), {
                                            sx: {
                                                fontSize: 30,
                                                fontWeight: "bold",
                                                color: "red"
                                            },
                                            children: dataWo
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_21___default()), {
                                    direction: "row",
                                    sx: {
                                        m: 1,
                                        p: 1
                                    },
                                    spacing: 1,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_11___default()), {
                                            sx: {
                                                fontSize: 30
                                            },
                                            children: "Item Number :"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_11___default()), {
                                            sx: {
                                                fontSize: 30,
                                                fontWeight: "bold",
                                                color: "red"
                                            },
                                            children: item_number
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_11___default()), {
                                            sx: {
                                                fontSize: 30
                                            },
                                            children: " Qty :"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_11___default()), {
                                            sx: {
                                                fontSize: 30,
                                                fontWeight: "bold",
                                                color: "red"
                                            },
                                            children: dataQty
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_21___default()), {
                                    direction: "row",
                                    sx: {
                                        m: 1,
                                        p: 1
                                    },
                                    spacing: 1,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_11___default()), {
                                            sx: {
                                                fontSize: 30
                                            },
                                            children: "Production Unit :"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_11___default()), {
                                            sx: {
                                                fontSize: 30,
                                                fontWeight: "bold",
                                                color: "red"
                                            },
                                            children: dataUnit_select
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_21___default()), {
                                    sx: {
                                        mt: 3
                                    },
                                    direction: "row",
                                    justifyContent: "space-around",
                                    alignItems: "center",
                                    spacing: 2,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_6___default()), {
                                            type: "submit",
                                            variant: "contained",
                                            sx: {
                                                width: 150,
                                                height: 60,
                                                p: 2.5
                                            },
                                            children: "Confirm"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_6___default()), {
                                            onClick: ConfrimClose,
                                            variant: "outlined",
                                            color: "error",
                                            sx: {
                                                width: 150,
                                                height: 60,
                                                p: 2.5,
                                                bgcolor: "red",
                                                color: "white"
                                            },
                                            children: "CLOSE"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;