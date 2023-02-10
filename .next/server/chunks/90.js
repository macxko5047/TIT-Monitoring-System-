"use strict";
exports.id = 90;
exports.ids = [90];
exports.modules = {

/***/ 2090:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8742);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3819);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1168);
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Paper__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6042);
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_material_Modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9564);
/* harmony import */ var _mui_material_Modal__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Modal__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7738);
/* harmony import */ var _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_x_data_grid__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4904);
/* harmony import */ var _mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7934);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(9648);
/* harmony import */ var _compunentConfig_supabase__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1019);
/* harmony import */ var _mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(9801);
/* harmony import */ var _mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_15__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_13__]);
axios__WEBPACK_IMPORTED_MODULE_13__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
















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
const Item = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.styled)((_mui_material_Paper__WEBPACK_IMPORTED_MODULE_5___default()))(({ theme  })=>({
        backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: "center",
        color: theme.palette.text.secondary
    }));
const editpeople = (props)=>{
    const date = new Date();
    let Hours = ("0" + date.getHours()).slice(-2);
    let Min = ("0" + date.getMinutes()).slice(-2);
    let sec = ("0" + date.getSeconds()).slice(-2);
    const timestamp = date.getTime();
    const times = `${Hours}:${Min}:${sec}`;
    const [dataManpower, setDataManpower] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const FetchdataManpower_record = async ()=>{
            let { data , error  } = await _compunentConfig_supabase__WEBPACK_IMPORTED_MODULE_14__/* ["default"].from */ .Z.from("Manpower_record").select("*").eq("PD_key", localStorage.getItem("PD_key"));
            if (data) {
                setDataManpower(data);
            } else {
                console.log("fetch ManpowerError", error);
            }
        };
        FetchdataManpower_record();
    }, []);
    const ReloadManpower_record = async ()=>{
        let { data , error  } = await _compunentConfig_supabase__WEBPACK_IMPORTED_MODULE_14__/* ["default"].from */ .Z.from("Manpower_record").select("*").eq("PD_key", localStorage.getItem("PD_key"));
        if (data) {
            setDataManpower(data);
        } else {
            console.log("fetch ManpowerError", error);
        }
    };
    const [openModal, setOpenModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const handleOpenModal = ()=>{
        setOpenModal(true);
        fatchTimeStart_stamp();
    };
    const handleCloseModal = ()=>{
        setOpenModal(false);
    };
    const [openlogoutTime, setOpenlogoutTime] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const logoutTimeOpen = ()=>setOpenlogoutTime(true);
    const logoutTimeClose = ()=>setOpenlogoutTime(false);
    const [TextConfirmName, SetConfirmName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [TextConfirmEmp_no, SetConfirmEmp_no] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [selectId, SetID] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const handleClick = (event, cellValues)=>{
        SetConfirmName(cellValues.row.emp_name);
        SetConfirmEmp_no(cellValues.row.emp_no);
        SetID(cellValues.row.id);
    };
    const [timeStart_stamp, setTimeStart_stamp] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    // console.log('timeStart_stamp',timeStart_stamp);
    const fatchTimeStart_stamp = async ()=>{
        setTimeStart_stamp(localStorage.getItem("timeStampStart"));
    };
    const [timestampEnd, setTimestampEnd] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const diffs = Math.ceil((timestampEnd - timeStart_stamp) * 60 / 3600 / 1000);
    const durationManpowerTime = async ()=>{
        const { data , error  } = await _compunentConfig_supabase__WEBPACK_IMPORTED_MODULE_14__/* ["default"].from */ .Z.from("Manpower_record").update({
            task_time: diffs
        }).eq("PD_key", localStorage.getItem("PD_key")).eq("id", selectId);
        if (data) {
            console.log("Duration Success");
        } else {
            console.log("Error", error);
        }
        await setTimestampEnd(0);
    };
    if (diffs > 0) {
        durationManpowerTime();
    }
    const handlerLogoutTime = async ()=>{
        const { data , error  } = await _compunentConfig_supabase__WEBPACK_IMPORTED_MODULE_14__/* ["default"].from */ .Z.from("Manpower_record").update({
            end_datetime: times
        }).eq("PD_key", localStorage.getItem("PD_key")).eq("id", selectId);
        if (data) {
            await alert("LogoutTime Success");
            await console.log("LogoutTime Success", data);
        } else {
            console.log("LogoutTime Error", error);
        }
        await setTimestampEnd(timestamp);
        // await ReloadManpower_record();
        await logoutTimeClose();
    };
    //--------------------------------------------
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
            let res = await axios__WEBPACK_IMPORTED_MODULE_13__["default"].request(reqOptions);
            if (res.data) {
                console.log(res.data);
                setDataUser(res.data);
            }
        };
        FetchData();
    }, []);
    const [dataUser, setDataUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    // console.log("dataAll", dataUser);
    const [user1, setUser1] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    // console.log(user1);
    const dataName = dataUser.filter((respon)=>respon.emp_no == user1)[0]?.emp_name || "";
    // console.log({ dataName });
    const dataDepartment = dataUser.filter((respon1)=>respon1.emp_no == user1)[0]?.department || "";
    //---------------------------------------------
    // + people คนที่ไปทำในไลนนั้นเพิ่ม
    const handlerUpPeople = async ()=>{
        if (user1 === "") {
            alert("Please entry your ID User");
        }
        if (user1 != "") {
            const { data , error  } = await _compunentConfig_supabase__WEBPACK_IMPORTED_MODULE_14__/* ["default"].from */ .Z.from("Manpower_record").insert([
                {
                    PD_key: localStorage.getItem("PD_key"),
                    emp_no: user1,
                    emp_name: dataName,
                    department: dataDepartment,
                    Work_order_id: localStorage.getItem("Work_order_id"),
                    start_datetime: times,
                    activate_data: "activated",
                    TimeStamp_start: timestamp
                }
            ]);
            await setUser1("");
            if (data) {
                console.log("Up data People ++ Success", data);
            } else {
                console.log("Up data People ++ Error", error);
            }
        }
    };
    //=============================================
    const columnsAddPeople = [
        // { field: "id", headerName: "ID", width: 50 },
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
        },
        {
            field: "action",
            headerName: "LogOut",
            width: 70,
            sortable: false,
            disableColumnMenu: true,
            renderCell: (cellValues)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Typography, {
                    onClick: (event)=>{
                        handleClick(event, cellValues), logoutTimeOpen();
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_12___default()), {
                        "aria-label": "delete",
                        size: "large",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_15___default()), {})
                    })
                })
        }
    ];
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const ManpowerRecord = _compunentConfig_supabase__WEBPACK_IMPORTED_MODULE_14__/* ["default"].channel */ .Z.channel("custom-all-ManpowerRecord1").on("postgres_changes", {
            event: "*",
            schema: "public",
            table: "Manpower_record"
        }, (payload)=>{
            console.log("Change received! ReloadManpower_record ", payload);
            ReloadManpower_record();
        // setDataManpower((data: any) => [...data, payload.new]);
        }).subscribe();
        return ()=>{
            _compunentConfig_supabase__WEBPACK_IMPORTED_MODULE_14__/* ["default"].removeChannel */ .Z.removeChannel(ManpowerRecord);
        };
    }, [
        dataManpower
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_2___default()), {
                direction: "column-reverse",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                spacing: 0,
                padding: 3,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Item, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_4___default()), {
                        onClick: handleOpenModal,
                        variant: "contained",
                        children: "Edit People"
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Modal__WEBPACK_IMPORTED_MODULE_9___default()), {
                hideBackdrop: true,
                open: openModal,
                onClose: handleCloseModal,
                "aria-labelledby": "child-modal-title",
                "aria-describedby": "child-modal-description",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_8___default()), {
                    sx: {
                        ...style,
                        width: 1080,
                        height: 780
                    },
                    component: "form",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Typography, {
                            sx: {
                                display: "flex",
                                color: "#000000",
                                alignItems: "center",
                                justifyContent: "center"
                            },
                            variant: "h3",
                            children: "Edit People"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Typography, {
                            children: "Edit People "
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_8___default()), {
                            sx: {
                                flexGrow: 1
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_11___default()), {
                                container: true,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_11___default()), {
                                    container: true,
                                    xs: 12,
                                    md: 12,
                                    lg: 12,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_11___default()), {
                                            xs: 3,
                                            lg: 3,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Item, {
                                                sx: {
                                                    height: "100%",
                                                    lg: 1
                                                },
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_8___default()), {
                                                    component: "form",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_6___default()), {
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
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_6___default()), {
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
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_6___default()), {
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
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                            sx: {
                                                                width: "100%",
                                                                height: 50,
                                                                mt: 2,
                                                                color: "#000000",
                                                                bgcolor: "#7CFC00"
                                                            },
                                                            variant: "contained",
                                                            color: "inherit",
                                                            onClick: handlerUpPeople,
                                                            children: "Submit"
                                                        })
                                                    ]
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_11___default()), {
                                            xs: 9,
                                            md: 9,
                                            lg: 9,
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Item, {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Typography, {
                                                        children: "Table People"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        style: {
                                                            height: 400,
                                                            width: "100%"
                                                        },
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_x_data_grid__WEBPACK_IMPORTED_MODULE_10__.DataGrid, {
                                                            rows: dataManpower,
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
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_2___default()), {
                            direction: "row",
                            justifyContent: "space-around",
                            alignItems: "center",
                            spacing: 12,
                            sx: {
                                m: 1,
                                p: 5
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Item, {
                                sx: {
                                    width: 150,
                                    height: 60,
                                    p: 2.5,
                                    color: "red"
                                },
                                onClick: handleCloseModal,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Typography, {
                                    children: "CLOSE"
                                })
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Modal__WEBPACK_IMPORTED_MODULE_9___default()), {
                open: openlogoutTime,
                onClose: logoutTimeClose,
                "aria-labelledby": "modal-modal-title",
                "aria-describedby": "modal-modal-description",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_8___default()), {
                    component: "form",
                    noValidate: true,
                    sx: style,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Typography, {
                            id: "modal-modal-title",
                            variant: "h4",
                            component: "h2",
                            children: [
                                "Confirm LogOut Time : ",
                                times
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Typography, {
                            sx: {
                                mt: 2
                            },
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    direction: "row",
                                    justifyContent: "center",
                                    spacing: 5,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Typography, {
                                            sx: {
                                                p: 1
                                            },
                                            children: "Do you want to LogOut NO :"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Typography, {
                                            sx: {
                                                fontSize: 28,
                                                color: "red"
                                            },
                                            children: TextConfirmEmp_no
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Typography, {
                                            sx: {
                                                p: 1
                                            },
                                            children: " Name :"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Typography, {
                                            sx: {
                                                fontSize: 28,
                                                color: "red"
                                            },
                                            children: TextConfirmName
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    sx: {
                                        mt: 3
                                    },
                                    direction: "row",
                                    justifyContent: "space-around",
                                    alignItems: "center",
                                    spacing: 2,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_4___default()), {
                                            variant: "contained",
                                            sx: {
                                                width: 150,
                                                height: 60,
                                                p: 2.5
                                            },
                                            onClick: handlerLogoutTime,
                                            children: "Logout"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_4___default()), {
                                            onClick: logoutTimeClose,
                                            variant: "outlined",
                                            color: "error",
                                            sx: {
                                                width: 150,
                                                height: 60,
                                                p: 2.5,
                                                bgcolor: "red",
                                                color: "white"
                                            },
                                            children: "Close"
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
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (editpeople);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;