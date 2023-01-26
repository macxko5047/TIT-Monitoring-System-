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
import supabase from "../../compunentConfig/supabase";
import Select from "@mui/material/Select";
import { useRouter } from "next/router";
import Image from "next/image";
import axios from "axios";

const theme = createTheme();

const register1 = () => {
  const [pass1, setPass] = useState("");

  const [level1, setLevel] = useState("");
  const [formError, setFromError] = useState<any>(null);
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!user1 || !pass1 || !level1) {
      setFromError(alert("กรุณากรอกข้อมูลให้ครบ"));
      return;
    }
    const { data, error } = await supabase.from("userID").insert([
      {
        emp_no: user1,
        emp_name: dataName,
        department: dataDepartment,
        pass: pass1,
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
    alert("Register Success");
    router.push("/draw");
  };

  useEffect(() => {
    const FetchData = async () => {
      let headersList = {
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZkdWRsd3FzcnVjb2p4anBxaHZxIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY2ODc2MDU2NSwiZXhwIjoxOTg0MzM2NTY1fQ.-Z5955b7zSmDnGV3n2y65qJDElz3zfdyxAVyffJIR7Q",
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZkdWRsd3FzcnVjb2p4anBxaHZxIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY2ODc2MDU2NSwiZXhwIjoxOTg0MzM2NTY1fQ.-Z5955b7zSmDnGV3n2y65qJDElz3zfdyxAVyffJIR7Q",
      };

      let reqOptions = {
        url: "https://vdudlwqsrucojxjpqhvq.supabase.co/rest/v1/employee",
        method: "GET",
        headers: headersList,
      };

      let res = await axios.request(reqOptions);
      if (res.data) {
        console.log(res.data);
        setDataUser(res.data);
      }
    };
    FetchData();
  }, []);
  const [dataUser, setDataUser] = useState<any>([]);
  // console.log("dataAll", dataUser);
  const [user1, setUser1] = useState<any>("");
  // console.log(user1);

  const dataName: string =
    dataUser.filter((respon: any) => respon.emp_no == user1)[0]?.emp_name || "";
  // console.log({ dataName });

  const dataDepartment: string =
    dataUser.filter((respon1: any) => respon1.emp_no == user1)[0]?.department ||
    "";

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
              marginTop: -1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Image src={"/Logo.png"} alt={""} width="450" height="250" />

            <Typography variant="h4">Register</Typography>

            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                {/* <Grid item xs={12} sm={6}>
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
                </Grid> */}
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="emp_no"
                    label="User ID"
                    name="emp_no"
                    value={user1}
                    onChange={(event) => setUser1(event.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    disabled
                    id="fullname"
                    label="Full name"
                    name="Fullname"
                    value={dataName}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    disabled
                    id="department"
                    label="Department"
                    name="department"
                    value={dataDepartment}
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
                {/* <Grid item xs={12}>
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
                </Grid> */}
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
                    <MenuItem value="Leader">Leader</MenuItem>
                    <MenuItem value="Supervisor">Supervisor</MenuItem>
                    <MenuItem value="Manager">Manager</MenuItem>
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
