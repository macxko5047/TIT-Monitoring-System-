"use strict";
exports.id = 7;
exports.ids = [7];
exports.modules = {

/***/ 3007:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadings)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9048);
/* harmony import */ var _mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _compunentConfig_supabase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1019);






function CircularProgressWithLabel(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_4___default()), {
        sx: {
            position: "relative",
            display: "inline-flex"
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_2___default()), {
                variant: "determinate",
                ...props
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_4___default()), {
                sx: {
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: "absolute",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
                    variant: "h5",
                    component: "div",
                    color: "text.secondary",
                    children: `${Math.round(props.value)}%`
                })
            })
        ]
    });
}
function loadings() {
    const [progress, setProgress] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let checkdates = `${year}-${month}-${day}`;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const FetchData = async ()=>{
            const { data , error  } = await _compunentConfig_supabase__WEBPACK_IMPORTED_MODULE_5__/* ["default"].from */ .Z.from("Production_history").select("*").filter("PD_key", "in", "(" + localStorage.getItem("PD_key") + ")").single();
            if (data) {
                if (data.NG_qty < data.Open_qty) {
                    const Percent = data.NG_qty / data.Open_qty * 100;
                    setProgress(Percent);
                } else {
                    setProgress(100);
                }
            } else {
                setProgress(0);
            }
        };
        FetchData();
    }, [
        progress
    ]);
    //subscribe -------------------------------------------------
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const ProductionHistoryUpNG = _compunentConfig_supabase__WEBPACK_IMPORTED_MODULE_5__/* ["default"].channel */ .Z.channel("custom-update-Loading2").on("postgres_changes", {
            event: "*",
            schema: "public",
            table: "Production_history"
        }, (payload)=>{
            console.log("Change received! UpNG ", payload);
            ReloadNG();
        }).subscribe();
    }, [
        progress
    ]);
    const ReloadNG = async ()=>{
        const { data , error  } = await _compunentConfig_supabase__WEBPACK_IMPORTED_MODULE_5__/* ["default"].from */ .Z.from("Production_history").select("Open_qty, NG_qty").filter("PD_key", "in", "(" + localStorage.getItem("PD_key") + ")").single();
        if (data) {
            if (data.NG_qty < data.Open_qty) {
                const Percent = data.NG_qty / data.Open_qty * 100;
                setProgress(Percent);
            } else {
                setProgress(100);
            }
        } else {
            setProgress(0);
        }
    };
    //0------------------------------------------------------------
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CircularProgressWithLabel, {
        value: progress,
        size: "5.5rem",
        color: "primary"
    });
}


/***/ })

};
;