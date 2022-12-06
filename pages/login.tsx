import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState, useEffect, useContext } from "react";
import supabase from "./compunentConfig/supabase";
import AppContext from "../src/context/Appcontext";
import { useRouter } from "next/router";
import Image from "next/image";

const theme = createTheme();

export default function Login() {
  const jwt = require("jsonwebtoken");
  const secret = "marko-login-tit";
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");
  console.log(username, pass);
  // โชรข้อมูลตอนแสดงพิม

  const router = useRouter();
  const appcontext: any = useContext(AppContext);
  console.log(appcontext);

  const [data1, setData1] = useState<any>("");
  console.log(data1);
  const FetchData = async () => {
    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("username", username.toLowerCase())
      .eq("pass", pass)
      .limit(1); //ใช้แทน single
    if (!error) {
      // setData(data);
      if (data.length > 0) {
        setData1(data[0]);
        appcontext.setAppstate(data[0]);
        const token = jwt.sign(
          {
            id: data[0].id,
            username: data[0].username,
            email: data[0].email,
            level: data[0].level,
          },
          secret
        );
        
        alert("login Success");
        localStorage.setItem("token", token);
        localStorage.setItem("userName", data[0].username);
        localStorage.setItem("Level", data[0].level);

        if (data[0].level === "Admin") {
          router.push("/draw");
        }
        if (data[0].level === "Manager") {
          router.push("/draw1");
        }
      }
      if (data.length === 0) {
        alert("login false");
      }
    } else {
      console.log(error);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    FetchData();
  };
  //แสดงค่าที่กดล็อกอินเข้าไปล้วส่งข้อมูลกลับมาให้

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
        <Image src={"/Logo.png"} alt={""} width="450"  height="250" />

          <Typography component="h1" variant="h5">
            TIT Login
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="UserName"
              name="username"
              autoComplete="username"
              autoFocus
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="pass"
              label="Password"
              type="pass"
              id="pass"
              autoComplete="current-password"
              onChange={(e) => setPass(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={username.length < 1 && pass.length < 1}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}