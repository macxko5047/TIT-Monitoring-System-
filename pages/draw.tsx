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
import Tablework1 from "./component/tablewokr1";
import AppContext from "../src/context/Appcontext";

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

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const router = useRouter();

  const appcontext: any = useContext(AppContext);
  // console.log(appcontext);
  //เช็ค state ถ้าไม่มีค่าให้ เด้นกลับมาไปหน้า login**

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

  const menuShowAdmin = () => {
    const datalevel = localStorage.Level;
    if (datalevel === "Admin") {
      return (
        <div>
          <List>
            <ListItemButton href={"/draw"}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Select WorkOder" />
            </ListItemButton>

            <ListItemButton href={"/draw1"}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Item Run" />
            </ListItemButton>
            <Divider />
            <ListItemButton href="https://dashbord-ahpb-01.vercel.app/">
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Dashbord" />
            </ListItemButton>

            <ListItemButton href={"./Register"}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Register User" />
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
            <ListItemButton href="/draw">
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Select WorkOder" />
            </ListItemButton>

            <ListItemButton href="/draw1">
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Item Run" />
            </ListItemButton>
            <Divider />
            <ListItemButton href="https://dashbord-ahpb-01.vercel.app/">
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Dashbord" />
            </ListItemButton>
            <ListItemButton href={"./Register"}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Register User" />
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
            <ListItemButton href="/draw">
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Select WorkOder" />
            </ListItemButton>

            <ListItemButton href="/draw1">
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Item Run" />
            </ListItemButton>
            <Divider />
            <ListItemButton href="https://dashbord-ahpb-01.vercel.app/">
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Dashbord" />
            </ListItemButton>
            <ListItemButton href={"./Register"}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Register User" />
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
            <ListItemButton href="/draw">
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Select WorkOder" />
            </ListItemButton>

            <ListItemButton href="/draw1">
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Item Run" />
            </ListItemButton>
            <Divider />
            <ListItemButton>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="โชว์ปุ่ม Leader" />
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
            <ListItemButton href="/draw">
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Select WorkOder" />
            </ListItemButton>

            <ListItemButton href="/draw1">
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Item Run" />
            </ListItemButton>
            <Divider />
            <ListItemButton>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="โชว์ปุ่ม Foreman" />
            </ListItemButton>
          </List>
        </div>
      );
    }
  };

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

              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
                <Typography>
                  &nbsp;{localStorage.getItem("userName")}
                </Typography>
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
                  <Typography variant="h5">
                    Name : {localStorage.getItem("userName")}&nbsp;{" "}
                  </Typography>
                  <Typography variant="h5">
                    {" "}
                    Level : {localStorage.getItem("Level")}{" "}
                  </Typography>
                </MenuItem>
                <MenuItem onClick={handleLogout}>
                  <Typography variant="h5">Logout</Typography>
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
              <Tablework1 />
            </Typography>
          </Main>
        </Box>
      </ThemeProvider>
    </div>
  );
}
