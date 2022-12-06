import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
// import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
// import MultipleStopIcon from "@mui/icons-material/MultipleStop";
// import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Loadings from "./component/loadings";
import Tablework2 from "./component/tablework2";
import Tablework3 from "./component/tablework3";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function tableproduction() {
  //ทำเช็ค useEffect ทำงานระหว่าง cliant กับ server **ต้องทำความเข้าใจ useEffect เพิ่มเติม
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  //ทำเช็ค useEffect ทำงานระหว่าง cliant กับ server **ต้องทำความเข้าใจ useEffect เพิ่มเติม
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={4}>
          <Grid container xs={12} md={12} lg={12} spacing={2}>
            <Grid xs={3} lg={3}>
              <Item>
                <Box
                  id="category-a"
                  sx={{
                    fontSize: "20px",
                    textTransform: "uppercase",
                    color: "info.main",
                  }}
                >
                  TIT.company
                </Box>
                <Box component="ul" aria-labelledby="category-a" sx={{ pl: 2 }}>
                  Date : ......... Name station: ............ Shift : ..........
                </Box>
              </Item>
            </Grid>
            <Grid xs={3} lg={3}>
              <Item>
                <Box
                  id="category-a"
                  sx={{
                    fontSize: "20px",
                    textTransform: "uppercase",
                    color: "info.main",
                  }}
                >
                  Time Start
                </Box>
                <Box component="ul" aria-labelledby="category-a" sx={{ pl: 2 }}>
                  Start : ......... time : ..........
                </Box>
              </Item>
            </Grid>
            <Grid xs={3} lg={3}>
              <Item>
                <Box
                  id="category-b"
                  sx={{
                    fontSize: "20px",
                    textTransform: "uppercase",
                    color: "success.main",
                  }}
                >
                  Item OK
                </Box>
                <Box
                  component="ul"
                  aria-labelledby="category-b"
                  sx={{ pl: 2, color: "success.main" }}
                >
                  Item จำนวน OK
                </Box>
              </Item>
            </Grid>
            <Grid xs={3} lg={3}>
              <Item>
                <Box
                  id="category-c"
                  sx={{
                    fontSize: "20px",
                    textTransform: "uppercase",
                    color: "error.main",
                  }}
                >
                  Item NG
                </Box>
                <Box
                  component="ul"
                  aria-labelledby="category-c"
                  sx={{ pl: 2, color: "error.main" }}
                >
                  Item จำนวน OK
                </Box>
              </Item>
            </Grid>
          </Grid>
          <Grid container xs={3} md={12} lg={12} spacing={2}>
            <Grid xs={6}>
              <Item>
                <Box
                  id="category-c"
                  sx={{
                    fontSize: "28px",
                    textTransform: "uppercase",
                    color: "error.main",
                  }}
                >
                  Item Oder
                </Box>
                WorkOder ID : ........ Item: ........ total: ..........
              </Item>
            </Grid>
            <Grid xs={3}>
              <Item>
                Status
                <Loadings />
              </Item>
            </Grid>
            <Grid container xs={3} md={12} lg={12} spacing={2}>
              <Grid xs={12} md={6} lg={6}>
                <Item>
                  <Tablework2 />
                </Item>
              </Grid>
              <Grid xs={12} md={6} lg={6}>
                <Item>
                  <Tablework3 />
                </Item>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Stack
          direction="column-reverse"
          justifyContent="space-around"
          alignItems="flex-end"
          spacing={0}
          padding={3}
        >
          <Item>
            <Button variant="contained">SEND AND SUCCESS</Button>
          </Item>
        </Stack>
      </Box>
    </div>
  );
}
