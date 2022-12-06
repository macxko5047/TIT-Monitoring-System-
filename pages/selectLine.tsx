import React, { useState } from "react";
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
import Select from "@mui/material/Select";

const theme = createTheme();

export default function SignIn() {
  const [prodarea, setProdarea] = useState("");
  const [line, setLine] = useState("");
  const [formError, setFromError] = useState<any>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!prodarea || !line ) {
        setFromError(alert("กรุณากรอกข้อมูลให้ครบ"));
        return;
      }
      console.log(prodarea, line);
      alert("Item Success");
    
  };

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
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Select Line
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 3 }}
          >
            <Grid container spacing={0}>
              <Grid item xs={12}>
                <InputLabel>Level</InputLabel>
                <Select
                  id="prodarea"
                  label="prodarea"
                  name="prodarea"
                  type="prodarea"
                  fullWidth
                  value={prodarea}
                  onChange={(event) => setProdarea(event.target.value)}
                >
                  <MenuItem value="ASSY">ASSY</MenuItem>
                  <MenuItem value="รอข้อมูลก่อน">รอข้อมูลก่อน</MenuItem>
                  <MenuItem value="รอข้อมูลก่อน">รอข้อมูลก่อน</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12}>
                <InputLabel>Line</InputLabel>
                <Select
                  id="line"
                  label="line"
                  name="line"
                  type="line"
                  fullWidth
                  value={line}
                  onChange={(event) => setLine(event.target.value)}
                >
                  <MenuItem value="Operater">AHHG-01</MenuItem>
                  <MenuItem value="Leader">AHHG-02</MenuItem>
                  <MenuItem value="Maneger">AHHG-03</MenuItem>
                </Select>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Success
              </Button>
              {formError && <p className="error">{formError}</p>}
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
