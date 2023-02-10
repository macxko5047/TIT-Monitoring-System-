"use strict";
exports.id = 694;
exports.ids = [694];
exports.modules = {

/***/ 9694:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Login)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3819);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4960);
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6042);
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8185);
/* harmony import */ var _mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8330);
/* harmony import */ var _mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4475);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Container__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _compunentConfig_supabase__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1019);
/* harmony import */ var _src_context_Appcontext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(87);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _mui_icons_material_Engineering__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(9777);
/* harmony import */ var _mui_icons_material_Engineering__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Engineering__WEBPACK_IMPORTED_MODULE_15__);

















const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_10__.createTheme)();
function Login() {
    const jwt = __webpack_require__(9344);
    const secret = "marko-login-tit";
    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [pass, setPass] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    console.log(username, pass);
    // โชรข้อมูลตอนแสดงพิม
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_13__.useRouter)();
    const appcontext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_src_context_Appcontext__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z);
    console.log(appcontext);
    const [data1, setData1] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    console.log(data1);
    const FetchData = async ()=>{
        const { data , error  } = await _compunentConfig_supabase__WEBPACK_IMPORTED_MODULE_11__/* ["default"].from */ .Z.from("userID").select("*").eq("emp_no", username).eq("pass", pass).limit(1); //ใช้แทน single
        if (!error) {
            // setData(data);
            if (data.length > 0) {
                setData1(data[0]);
                appcontext.setAppstate(data[0]);
                const token = jwt.sign({
                    id: data[0].id,
                    emp_no: data[0].username,
                    level: data[0].level
                }, secret);
                localStorage.setItem("token", token);
                localStorage.setItem("userName", data[0].emp_name);
                localStorage.setItem("Level", data[0].level);
                localStorage.setItem("emp_no", data[0].emp_no);
                if (data[0].level === "Admin") {
                    router.push("/draw");
                }
                if (data[0].level === "Manager") {
                    router.push("/draw");
                }
                if (data[0].level === "Leader") {
                    router.push("/draw");
                }
                if (data[0].level === "Foreman") {
                    router.push("/draw");
                }
            }
            if (data.length === 0) {
                alert("login false");
            }
        } else {
            console.log(error);
        }
    };
    const handleSubmit = (event)=>{
        event.preventDefault();
        FetchData();
    };
    //แสดงค่าที่กดล็อกอินเข้าไปล้วส่งข้อมูลกลับมาให้
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_styles__WEBPACK_IMPORTED_MODULE_10__.ThemeProvider, {
        theme: theme,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Container__WEBPACK_IMPORTED_MODULE_9___default()), {
            component: "main",
            maxWidth: "xs",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_3___default()), {}),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_7___default()), {
                    sx: {
                        marginTop: 8,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center"
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_14___default()), {
                            src: "/Logo1.png",
                            alt: "",
                            width: "520",
                            height: "250"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Engineering__WEBPACK_IMPORTED_MODULE_15___default()), {
                            color: "primary",
                            sx: {
                                fontSize: 60,
                                m: 3
                            }
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_8___default()), {
                            component: "h1",
                            variant: "h4",
                            color: "primary",
                            children: "Production monitoring"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_7___default()), {
                            component: "form",
                            onSubmit: handleSubmit,
                            noValidate: true,
                            sx: {
                                mt: 1
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_4___default()), {
                                    margin: "normal",
                                    required: true,
                                    fullWidth: true,
                                    id: "username",
                                    label: "UserName",
                                    name: "username",
                                    autoComplete: "username",
                                    autoFocus: true,
                                    onChange: (e)=>setUsername(e.target.value)
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_4___default()), {
                                    margin: "normal",
                                    required: true,
                                    fullWidth: true,
                                    name: "pass",
                                    label: "Password",
                                    type: "password",
                                    id: "pass",
                                    autoComplete: "current-password",
                                    onChange: (e)=>setPass(e.target.value)
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_5___default()), {
                                    control: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_6___default()), {
                                        value: "remember",
                                        color: "primary"
                                    }),
                                    label: "Remember me"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    type: "submit",
                                    fullWidth: true,
                                    variant: "contained",
                                    sx: {
                                        mt: 3,
                                        mb: 2
                                    },
                                    disabled: username.length < 1 && pass.length < 1,
                                    children: "Sign In"
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
}


/***/ }),

/***/ 87:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ AppcontextProvider),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const context = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)("");
function AppcontextProvider({ children  }) {
    const [appstate, setAppstate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        console.log({
            appstate,
            setAppstate
        });
    }, [
        appstate,
        setAppstate
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(context.Provider, {
            value: {
                appstate,
                setAppstate
            },
            children: children
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (context);


/***/ })

};
;