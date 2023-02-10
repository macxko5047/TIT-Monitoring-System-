"use strict";
exports.id = 587;
exports.ids = [587];
exports.modules = {

/***/ 2587:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ QuickFilteringCustomizedGrid)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1168);
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Paper__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7738);
/* harmony import */ var _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_x_data_grid__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _compunentConfig_supabase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1019);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_Modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9564);
/* harmony import */ var _mui_material_Modal__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Modal__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3819);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8742);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7934);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3188);
/* harmony import */ var _mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _mui_icons_material_ModeEdit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(4465);
/* harmony import */ var _mui_icons_material_ModeEdit__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_ModeEdit__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(6042);
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_14__);















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
function QuickSearchToolbar() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default()), {
            sx: {
                p: 0.5,
                pb: 0
            },
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Typography, {
                    sx: {
                        fontSize: 28
                    },
                    children: "NG Product"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_x_data_grid__WEBPACK_IMPORTED_MODULE_4__.GridToolbarQuickFilter, {
                    quickFilterParser: (searchInput)=>searchInput.split(",").map((value)=>value.trim()).filter((value)=>value !== "")
                })
            ]
        })
    });
}
function QuickFilteringCustomizedGrid() {
    const [openAdd, setOpenAdd] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const handleOpen = ()=>setOpenAdd(true);
    const handleClose = ()=>setOpenAdd(false);
    const [openDel, setOpenDel] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const DeleteOpen = ()=>setOpenDel(true);
    const DeleteClose = ()=>setOpenDel(false);
    const [selectId, SetID] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [TextConfirm, SetConfirm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [openEdit, setOpenEdit] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const EditOpen = ()=>setOpenEdit(true);
    const EditClose = ()=>setOpenEdit(false);
    const [selectIdEdit, setIDEdit] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [detailNG, setDetailNG] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [CodeShow, setEditCode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [PartShow, setEditPart] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [dataNG_qty, setDataNG_qty] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const dates = new Date();
    let day = dates.getDate();
    let month = dates.getMonth() + 1;
    let year = dates.getFullYear();
    const Today = dates.getFullYear() + "-" + dates.getMonth() + "-" + dates.getDate();
    const [selectNG, setNG] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [selectQty, setQty] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
    const [NgId, SetNgId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [SumNgPcs, SetNgPcs] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [ngAll, setNgAll] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [mounted, setMounted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [dataNg, setdata] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [ShowCodeNG, setCode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [TextError, SetText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const NGsplit = selectNG.split(":");
    // document.addEventListener("keydown", function (event) {
    //   if (event.ctrlKey && event.altKey && event.key === "5") {
    //     handleOpen();
    //   }
    //   //console.log(event.key);
    // });
    // Otherwise filter will be applied on fields such as the hidden column id
    const columns = [
        /*{ field: "id", headerName: "No" },*/ {
            field: "NG_code",
            headerName: "Code"
        },
        {
            field: "NG_description",
            headerName: "Description"
        },
        {
            field: "Part_name",
            headerName: "Part component",
            width: 130
        },
        {
            field: "NG_qty",
            headerName: "Q'ty",
            type: "number",
            width: 70
        },
        {
            field: "action",
            headerName: "Delete",
            width: 70,
            sortable: false,
            disableColumnMenu: true,
            renderCell: (cellValues)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Typography, {
                    onClick: (event)=>{
                        handleClick(event, cellValues), DeleteOpen();
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_11___default()), {
                        "aria-label": "delete",
                        size: "large",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_12___default()), {})
                    })
                })
        },
        {
            field: "actionEdit",
            headerName: "Edit",
            width: 70,
            sortable: false,
            disableColumnMenu: true,
            renderCell: (cellValues)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Typography, {
                    onClick: (event)=>{
                        handleClickEdit(event, cellValues), EditOpen();
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_11___default()), {
                        "aria-label": "edit",
                        size: "large",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_ModeEdit__WEBPACK_IMPORTED_MODULE_13___default()), {})
                    })
                })
        }
    ];
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const FetchData = async ()=>{
            const { data , error  } = await _compunentConfig_supabase__WEBPACK_IMPORTED_MODULE_5__/* ["default"].from */ .Z.from("NG_record").select("*").order("NG_code").filter("PD_key", "in", "(" + localStorage.getItem("PD_key") + ")");
            setdata(data);
        };
        FetchData();
    }, []);
    // console.log("fetch dataNG", dataNg);
    // sumNG Num
    const FetchDT = async ()=>{
        const { data , error , count  } = await _compunentConfig_supabase__WEBPACK_IMPORTED_MODULE_5__/* ["default"].from */ .Z.from("NG_record").select("NG_qty", {
            count: "exact"
        }).filter("PD_key", "in", "(" + localStorage.getItem("PD_key") + ")");
        if (!error) {
            const sumNGqty = data.reduce((a, b)=>a + b.NG_qty, 0);
            await setNgAll(sumNGqty);
            await ngProduction(Number(sumNGqty));
        }
    };
    const ngProduction = async (ngAll)=>{
        const { data , error  } = await _compunentConfig_supabase__WEBPACK_IMPORTED_MODULE_5__/* ["default"].from */ .Z.from("Production_history").update({
            NG_qty: ngAll
        }).eq("PD_key", localStorage.getItem("PD_key"));
        if (data) {
            console.log(data);
        } else {
            console.log(error);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const NGRecord = _compunentConfig_supabase__WEBPACK_IMPORTED_MODULE_5__/* ["default"].channel */ .Z.channel("custom-all-NG_recordTable").on("postgres_changes", {
            event: "*",
            schema: "public",
            table: "NG_record"
        }, (payload)=>{
            console.log("Change received NG_record", payload);
            ReloadNG();
            FetchDT();
        }).subscribe();
        return ()=>{
            _compunentConfig_supabase__WEBPACK_IMPORTED_MODULE_5__/* ["default"].removeChannel */ .Z.removeChannel(NGRecord);
        };
    }, [
        dataNg
    ]);
    const ReloadNG = async ()=>{
        const { data , error  } = await _compunentConfig_supabase__WEBPACK_IMPORTED_MODULE_5__/* ["default"].from */ .Z.from("NG_record").select("*").order("NG_code").filter("PD_key", "in", "(" + localStorage.getItem("PD_key") + ")");
        setdata(data);
    };
    const Item = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_10__.styled)((_mui_material_Paper__WEBPACK_IMPORTED_MODULE_2___default()))(({ theme  })=>({
            backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
            ...theme.typography.body2,
            padding: theme.spacing(1),
            textAlign: "center",
            color: theme.palette.text.secondary
        }));
    const handleClick = (event, cellValues)=>{
        SetConfirm(cellValues.row.NG_code + " " + cellValues.row.NG_qty + " Pcs ");
        SetID(cellValues.row.id);
    };
    const handleClickEdit = (event, cellValues)=>{
        setEditCode(cellValues.row.NG_code);
        setEditPart(cellValues.row.Part_name);
        setDataNG_qty(cellValues.row.NG_qty);
        setDetailNG(cellValues.row.NG_description);
        setIDEdit(cellValues.row.id);
    };
    const DelNG = async (event)=>{
        event.preventDefault();
        if (selectId) {
            const { data , error  } = await _compunentConfig_supabase__WEBPACK_IMPORTED_MODULE_5__/* ["default"].from */ .Z.from("NG_record").delete().eq("id", selectId);
            if (!error) {
                console.log("NG Delete Success :", data);
                ReloadNG();
                DeleteClose();
            }
        }
    };
    const EditNG = async (event)=>{
        event.preventDefault();
        if (selectIdEdit) {
            const { data , error  } = await _compunentConfig_supabase__WEBPACK_IMPORTED_MODULE_5__/* ["default"].from */ .Z.from("NG_record").update({
                NG_qty: dataNG_qty
            }).eq("id", selectIdEdit);
            if (!error) {
                console.log("NG Edit Success :", data);
                ReloadNG();
                EditClose();
            }
        }
    };
    //ทำเช็ค useEffect ทำงานระหว่าง client กับ server **ต้องทำความเข้าใจ useEffect เพิ่มเติม
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setMounted(true);
    }, []);
    if (!mounted) return null;
    //ทำเช็ค useEffect ทำงานระหว่าง client กับ server **ต้องทำความเข้าใจ useEffect เพิ่มเติม
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default()), {
                sx: {
                    height: 400,
                    flexGrow: 1
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_x_data_grid__WEBPACK_IMPORTED_MODULE_4__.DataGrid, {
                    rows: dataNg,
                    columns: columns,
                    components: {
                        Toolbar: QuickSearchToolbar
                    }
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Modal__WEBPACK_IMPORTED_MODULE_7___default()), {
                open: openDel,
                onClose: DeleteClose,
                "aria-labelledby": "modal-modal-title",
                "aria-describedby": "modal-modal-description",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default()), {
                    component: "form",
                    onSubmit: DelNG,
                    noValidate: true,
                    sx: style,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Typography, {
                            id: "modal-modal-title",
                            variant: "h6",
                            component: "h2",
                            children: "Confirm delete"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Typography, {
                            id: "modal-modal-description",
                            sx: {
                                mt: 2
                            },
                            children: [
                                "Do you want to delete NG code : ",
                                TextConfirm,
                                " ?",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {})
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_9___default()), {
                                    direction: "row",
                                    justifyContent: "center",
                                    spacing: 2,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_8___default()), {
                                            type: "submit",
                                            variant: "contained",
                                            children: "Yes"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_8___default()), {
                                            onClick: DeleteClose,
                                            variant: "outlined",
                                            color: "error",
                                            children: "No"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Modal__WEBPACK_IMPORTED_MODULE_7___default()), {
                open: openEdit,
                onClose: EditClose,
                "aria-labelledby": "modal-modal-title",
                "aria-describedby": "modal-modal-description",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default()), {
                    component: "form",
                    onSubmit: EditNG,
                    noValidate: true,
                    sx: {
                        ...style,
                        width: 1000
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Typography, {
                            id: "modal-modal-title",
                            variant: "h3",
                            p: 3,
                            children: "Edit NG"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_9___default()), {
                            direction: "row",
                            justifyContent: "center",
                            spacing: 4,
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Typography, {
                                    sx: {
                                        fontSize: 20,
                                        width: 150
                                    },
                                    children: [
                                        "NG code : ",
                                        CodeShow
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Typography, {
                                    sx: {
                                        fontSize: 20,
                                        width: 300
                                    },
                                    children: [
                                        "Part :",
                                        PartShow,
                                        " "
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Typography, {
                                    sx: {
                                        fontSize: 20,
                                        width: 200
                                    },
                                    children: [
                                        "Detail : ",
                                        detailNG
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_14___default()), {
                                    sx: {
                                        width: 300
                                    },
                                    label: "NG_qty",
                                    id: "outlined-size-normal",
                                    type: "number",
                                    InputLabelProps: {
                                        shrink: true
                                    },
                                    value: dataNG_qty,
                                    onChange: (event)=>setDataNG_qty(event.target.value)
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_9___default()), {
                            direction: "row",
                            justifyContent: "center",
                            spacing: 2,
                            p: 2,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_8___default()), {
                                    type: "submit",
                                    variant: "contained",
                                    children: "Submit"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_8___default()), {
                                    onClick: EditClose,
                                    variant: "outlined",
                                    color: "error",
                                    children: "Close"
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}


/***/ })

};
;