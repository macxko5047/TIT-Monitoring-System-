import React, { useContext, useEffect, useState } from "react";
import { styled, ThemeProvider, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useRouter } from "next/router";
import Tableproduction from "./tableproduction";
import Modal from "@mui/material/Modal";
import Grid from "@mui/material/Grid";
import Alert from "@mui/joy/Alert";
import LanguageSharpIcon from "@mui/icons-material/LanguageSharp";
import { useTranslation } from "react-i18next";
import { i18n } from "../i18n";
import Tablework1 from "./component/tableSelectWO";
import Dashbord_Unit from "./Dashbord_Unit";
import Register from "./Register";
import TableDowntime from "./component/tableDownTime";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const drawerWidth = 240;
const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

function PersistentDrawerLeft() {
  const { t, i18n } = useTranslation(); //language
  const [languageShow, setLanguageShow] = useState<any>("");
  useEffect(() => {
    const languageDefult = localStorage.getItem("Language");
    setLanguageShow(languageDefult);
  }, []);
  const theme = useTheme();
  const router = useRouter();
  //=========================== refresh language ==================
  useEffect(() => {
    const datacheckLanguage: any = localStorage.getItem("Language");
    i18n.changeLanguage(datacheckLanguage);
  }, []);
  //----------------------------------------------------------------

  // ตัวเช็คหน้า workOder ถ้าไม่มี WorkOder ใน localstorage
  // ให้กลับไปหน้าเลือก workoder ก่อน
  useEffect(() => {
    const ItemSelect = localStorage.getItem("Work_order_id");
    const checkWOWorking = async () => {
      if (!ItemSelect) {
        await alert("Do not have selected production !");
        await router.push("/draw");
      }
    };
    checkWOWorking();
  }, []);

  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const [language, setLanguage] = useState<null | HTMLElement>(null);
  const handleMenulanguage = (event: React.MouseEvent<HTMLElement>) => {
    setLanguage(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    if (localStorage.getItem("PD_key") === null) {
      localStorage.clear();
      router.push("/");
    }
    if (localStorage.getItem("PD_key") != null) {
      alert("Please push STOP button before proceed  Logout !");
    }
  };

  const [dataShowPage, setDataShowPage] = useState<any>(<Tableproduction />);

  const buttonItemRun = () => {
    const dataWorkOrder = localStorage.getItem("Work_order_id");
    if (dataWorkOrder != null) {
      return (
        <ListItemButton href={"/draw1"}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary={t("ItemRun")} />
        </ListItemButton>
      );
    }
  };
  const menuShowAdmin = () => {
    const datalevel = localStorage.Level;
    if (datalevel === "Admin") {
      return (
        <div>
          <List>
            <ListItemButton onClick={(e) => setDataShowPage(<Tablework1 />)}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={t("SelectWorkOrder")} />
            </ListItemButton>
            {buttonItemRun()}
            <Divider />
            <ListItemButton onClick={(e) => setDataShowPage(<Dashbord_Unit />)}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={t("Dashboard")} />
            </ListItemButton>

            <ListItemButton onClick={(e) => setDataShowPage(<Register />)}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={t("RegisterUser")} />
            </ListItemButton>
          </List>
        </div>
      );
    }
  };
  const menuShowMeneger = () => {
    const datalevel = localStorage.Level;
    if (datalevel === "Manager") {
      return (
        <div>
          <List>
            <ListItemButton onClick={(e) => setDataShowPage(<Tablework1 />)}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={t("SelectWorkOrder")} />
            </ListItemButton>
            {buttonItemRun()}
            <Divider />
            <ListItemButton onClick={(e) => setDataShowPage(<Dashbord_Unit />)}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={t("Dashboard")} />
            </ListItemButton>

            <ListItemButton onClick={(e) => setDataShowPage(<Register />)}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={t("RegisterUser")} />
            </ListItemButton>
          </List>
        </div>
      );
    }
  };
  const menuShowSupervisor = () => {
    const datalevel = localStorage.Level;
    if (datalevel === "Supervisor") {
      return (
        <div>
          <List>
            <ListItemButton onClick={(e) => setDataShowPage(<Tablework1 />)}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={t("SelectWorkOrder")} />
            </ListItemButton>
            {buttonItemRun()}
            <Divider />
            <ListItemButton onClick={(e) => setDataShowPage(<Dashbord_Unit />)}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={t("Dashboard")} />
            </ListItemButton>

            <ListItemButton onClick={(e) => setDataShowPage(<Register />)}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={t("RegisterUser")} />
            </ListItemButton>
          </List>
        </div>
      );
    }
  };
  const menuShowLeader = () => {
    const datalevel = localStorage.Level;
    if (datalevel === "Leader") {
      return (
        <div>
          <List>
            <ListItemButton onClick={(e) => setDataShowPage(<Tablework1 />)}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={t("SelectWorkOrder")} />
            </ListItemButton>
            {buttonItemRun()}
            <Divider />
            <ListItemButton onClick={(e) => setDataShowPage(<Dashbord_Unit />)}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={t("Dashboard")} />
            </ListItemButton>
          </List>
        </div>
      );
    }
  };
  const menuShowForeman = () => {
    const datalevel = localStorage.Level;
    if (datalevel === "Foreman") {
      return (
        <div>
          <List>
            <ListItemButton onClick={(e) => setDataShowPage(<Tablework1 />)}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={t("SelectWorkOrder")} />
            </ListItemButton>
            {buttonItemRun()}
            <Divider />
            <ListItemButton onClick={(e) => setDataShowPage(<Dashbord_Unit />)}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={t("Dashboard")} />
            </ListItemButton>
          </List>
        </div>
      );
    }
  };

  //=============================set lenguage ========================

  // i18n.changeLanguage("en", (err, t) => {
  //   if (err) return console.log("something went wrong loading", err);
  //   t("key"); // -> same as i18next.t
  // });

  //------------------------------------------------------------------

  //ทำเช็ค useEffect ทำงานระหว่าง cliant กับ server **ต้องทำความเข้าใจ useEffect เพิ่มเติม
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  //ทำเช็ค useEffect ทำงานระหว่าง cliant กับ server **ต้องทำความเข้าใจ useEffect เพิ่มเติม
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <AppBar position="fixed" open={open}>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{ mr: 2, ...(open && { display: "none" }) }}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1 }}
              >
                Production monitoring
              </Typography>
              {localStorage.getItem("userName")}
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem>
                  {t("Name")} : {localStorage.getItem("userName")} &nbsp;{" "}
                  {t("Level")}: {localStorage.getItem("Level")}
                </MenuItem>
                <MenuItem onClick={handleLogout}>{t("Logout")}</MenuItem>
              </Menu>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenulanguage}
                color="inherit"
              >
                <LanguageSharpIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={language}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(language)}
                onClose={(e) => setLanguage(null)}
              >
                <MenuItem
                  onClick={(e) => {
                    i18n.changeLanguage("th");
                    localStorage.setItem("Language", "th");
                    setLanguageShow("th");
                    setLanguage(null);
                  }}
                >
                  TH
                </MenuItem>
                <MenuItem
                  onClick={(e) => {
                    i18n.changeLanguage("en");
                    localStorage.setItem("Language", "en");
                    setLanguageShow("en");
                    setLanguage(null);
                  }}
                >
                  EN
                </MenuItem>
                <MenuItem
                  onClick={(e) => {
                    i18n.changeLanguage("cn");
                    localStorage.setItem("Language", "cn");
                    setLanguageShow("cn");
                    setLanguage(null);
                  }}
                >
                  CN
                </MenuItem>
                <MenuItem
                  onClick={(e) => {
                    i18n.changeLanguage("vn");
                    localStorage.setItem("Language", "vn");
                    setLanguageShow("vn");
                    setLanguage(null);
                  }}
                >
                  VN
                </MenuItem>
              </Menu>
            </Toolbar>
          </AppBar>
          <Drawer
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: drawerWidth,
                boxSizing: "border-box",
              },
            }}
            variant="persistent"
            anchor="left"
            open={open}
          >
            <DrawerHeader>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === "ltr" ? (
                  <ChevronLeftIcon />
                ) : (
                  <ChevronRightIcon />
                )}
              </IconButton>
            </DrawerHeader>
            <Divider />
            {menuShowMeneger()}
            {menuShowAdmin()}
            {menuShowSupervisor()}
            {menuShowLeader()}
            {menuShowForeman()}
            <Divider />
          </Drawer>
          <Main open={open}>
            <DrawerHeader />
            <Typography>
              {/* System Control */}
              {/* <Tablework1 /> */}
              {dataShowPage}
              {/* <Dashboard /> */}
            </Typography>
          </Main>
        </Box>
      </ThemeProvider>
    </div>
  );
}
export default PersistentDrawerLeft;
