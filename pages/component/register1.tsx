import React, { useState, useEffect } from "react";
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
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import supabase from "../compunentConfig/supabase";
import Select from "@mui/material/Select";
import { useRouter } from "next/router";
import Image from "next/image";

const theme = createTheme();

const register1 = () => {
  const [f_name1, setF_name] = useState("");
  const [l_name1, setL_name] = useState("");
  const [username1, setUsername] = useState("");
  const [pass1, setPass] = useState("");
  const [email1, setEmail] = useState("");
  const [level1, setLevel] = useState("");
  const [formError, setFromError] = useState<any>(null);
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!f_name1 || !l_name1 || !username1 || !pass1 || !email1 || !level1) {
      setFromError(alert("กรุณากรอกข้อมูลให้ครบ"));
      return;
    }
    console.log(f_name1, l_name1, username1, pass1, email1, level1);
    alert("Register Success");
    router.push("/draw");

    const { data, error } = await supabase.from("users").insert([
      {
        f_name: f_name1,
        l_name: l_name1,
        username: username1,
        pass: pass1,
        email: email1,
        level: level1,
      },
    ]);
    if (error) {
      console.log(error);
      setFromError("กรอกข้อมูลให้ครบด้วยครับ");
    }
    if (data) {
      console.log(data);
      setFromError(null);
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
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Image src={"/Logo.png"} alt={""} width="450"  height="250" />

          <Typography variant="h5" >Register</Typography>

          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="f_name"
                  required
                  fullWidth
                  id="f_name"
                  label="First Name"
                  value={f_name1}
                  onChange={(event) => setF_name(event.target.value)}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="l_Name"
                  label="Last Name"
                  name="l_Name"
                  value={l_name1}
                  onChange={(event) => setL_name(event.target.value)}
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="username"
                  value={username1}
                  onChange={(event) => setUsername(event.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="pass"
                  label="Password"
                  type="pass"
                  id="pass"
                  autoComplete="new-password"
                  value={pass1}
                  onChange={(event) => setPass(event.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="email"
                  label="Email"
                  type="email"
                  id="email"
                  autoComplete="new-email"
                  value={email1}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <InputLabel>Level</InputLabel>
                <Select
                  id="level"
                  label="Level"
                  name="level"
                  type="level"
                  fullWidth
                  value={level1}
                  onChange={(event) => setLevel(event.target.value)}
                >
                  <MenuItem value="Operater">Operater</MenuItem>
                  <MenuItem value="Leader">Leader</MenuItem>
                  <MenuItem value="Maneger">Maneger</MenuItem>
                </Select>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>

            <Link href="/draw">
              <Button
                name="home"
                fullWidth
                variant="outlined"
                sx={{ mt: 3, mb: 2 }}
              >
                HOME
              </Button>
            </Link>

            <Grid container justifyContent="flex-end">
              <Grid item>
                {formError && <p className="error">{formError}</p>}
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    </div>
  );
};
export default register1;
