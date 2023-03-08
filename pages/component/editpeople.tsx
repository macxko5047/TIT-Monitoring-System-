import React, { useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import { styled, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import { Typography, duration } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import {
  DataGrid,
  GridToolbarQuickFilter,
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarExport,
  GridToolbarDensitySelector,
  GridColDef,
  GridValueGetterParams,
} from "@mui/x-data-grid";
import Grid from "@mui/material/Unstable_Grid2";
import IconButton from "@mui/material/IconButton";
import axios from "axios";
import supabase from "../../compunentConfig/supabase";
import LogoutIcon from "@mui/icons-material/Logout";
import CircularProgress from "@mui/material/CircularProgress";
import { useTranslation } from "react-i18next";

type Props = {};

const style = {
  position: "absolute" as "absolute",
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
  pb: 3,
};
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const editpeople = (props: Props) => {
  const { t, i18n } = useTranslation(); //language
  const date: any = new Date();
  let Hours = ("0" + date.getHours()).slice(-2);
  let Min = ("0" + date.getMinutes()).slice(-2);
  let sec = ("0" + date.getSeconds()).slice(-2);
  const timestamp = date.getTime();
  const times: any = `${Hours}:${Min}:${sec}`;

  const [dataManpower, setDataManpower] = useState<any>([]);

  const [loading, setLoading] = useState(false); // ทำโหลดดิ้งรอข้อมูล

  useEffect(() => {
    const FetchdataManpower_record = async () => {
      let { data, error } = await supabase
        .from("Manpower_record")
        .select("*")
        .eq("PD_key", localStorage.getItem("PD_key"));
      if (data) {
        setDataManpower(data);
      } else {
        console.log("fetch ManpowerError", error);
      }
    };
    FetchdataManpower_record();
  }, []);

  const ReloadManpower_record = async () => {
    let { data, error } = await supabase
      .from("Manpower_record")
      .select("*")
      .eq("PD_key", localStorage.getItem("PD_key"));
    if (data) {
      setDataManpower(data);
    } else {
      console.log("fetch ManpowerError", error);
    }
  };

  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = async () => {
    await setOpenModal(true);
    await fatchTimeStart_stamp();
    await upStartTimeManpower_Debug();
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const upStartTimeManpower_Debug = async () => {
    setLoading(true);
    const timeStarts = localStorage.getItem("TimeStart");
    const timestamps = localStorage.getItem("timeStampStart");
    const { data, error } = await supabase
      .from("Manpower_record")
      .update({ start_datetime: timeStarts, TimeStamp_start: timestamps })
      .eq("PD_key", localStorage.getItem("PD_key"))
      .is("start_datetime", null);

    if (data) {
      console.log(data);
    } else {
      console.log(error);
    }
    setLoading(false);
  };

  const [openlogoutTime, setOpenlogoutTime] = useState(false);
  const logoutTimeOpen = () => setOpenlogoutTime(true);
  const logoutTimeClose = () => setOpenlogoutTime(false);
  const [TextConfirmName, SetConfirmName] = useState("");
  const [TextConfirmEmp_no, SetConfirmEmp_no] = useState("");
  const [selectId, SetID] = useState("");

  const handleClick = (event: any, cellValues: any) => {
    SetConfirmName(cellValues.row.emp_name);
    SetConfirmEmp_no(cellValues.row.emp_no);
    SetID(cellValues.row.id);
  };

  const [timeStart_stamp, setTimeStart_stamp] = useState<any>("");
  // console.log('timeStart_stamp',timeStart_stamp);
  const fatchTimeStart_stamp = async () => {
    setTimeStart_stamp(localStorage.getItem("timeStampStart"));
  };

  const [timestampEnd, setTimestampEnd] = useState<any>("");

  const diffs: any = Math.ceil(
    ((timestampEnd - timeStart_stamp) * 60) / 3600 / 1000
  );

  const durationManpowerTime = async () => {
    const { data, error } = await supabase
      .from("Manpower_record")
      .update({ task_time: diffs })
      .eq("PD_key", localStorage.getItem("PD_key"))
      .eq("id", selectId);
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

  const handlerLogoutTime = async () => {
    const { data, error } = await supabase
      .from("Manpower_record")
      .update({ end_datetime: times })
      .eq("PD_key", localStorage.getItem("PD_key"))
      .eq("id", selectId);
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
  //---------------------------------------------
  // + people คนที่ไปทำในไลนนั้นเพิ่ม
  const handlerUpPeople = async () => {
    if (user1 === "") {
      alert("Please entry your ID User");
    }
    if (user1 != "") {
      const { data, error } = await supabase.from("Manpower_record").insert([
        {
          PD_key: localStorage.getItem("PD_key"),
          emp_no: user1,
          emp_name: dataName,
          department: dataDepartment,
          Work_order_id: localStorage.getItem("Work_order_id"),
          start_datetime: times,
          activate_data: "activated",
          TimeStamp_start: timestamp,
        },
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
  const columnsAddPeople: GridColDef[] = [
    // { field: "id", headerName: "ID", width: 50 },
    { field: "emp_no", headerName: "no", width: 60 },
    { field: "emp_name", headerName: "Name", width: 200 },
    { field: "start_datetime", headerName: "start time", width: 120 },
    { field: "end_datetime", headerName: "end time", width: 120 },
    { field: "task_time", headerName: "task time", width: 120 },

    {
      field: "action",
      headerName: "LogOut",
      width: 70,
      sortable: false,
      disableColumnMenu: true,
      renderCell: (cellValues: any) => (
        <Typography
          onClick={(event) => {
            handleClick(event, cellValues), logoutTimeOpen();
          }}
        >
          <IconButton aria-label="delete" size="large">
            <LogoutIcon />
          </IconButton>
        </Typography>
      ),
    },
  ];
  useEffect(() => {
    const ManpowerRecord = supabase
      .channel("custom-all-ManpowerRecord1")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "Manpower_record" },
        (payload) => {
          console.log("Change received! ReloadManpower_record ", payload);
          ReloadManpower_record();

          // setDataManpower((data: any) => [...data, payload.new]);
        }
      )
      .subscribe();
    return () => {
      supabase.removeChannel(ManpowerRecord);
    };
  }, [dataManpower]);

  if (loading)
    return (
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography sx={{ fontSize: 50 }}>Loading...</Typography>
        <CircularProgress />
      </Box>
    ); //รอโหลดข้อมูล

  return (
    <Box>
      <Stack
        direction="column-reverse"
        justifyContent="flex-start"
        alignItems="flex-start"
        spacing={0}
        padding={3}
      >
        <Item>
          <Button onClick={handleOpenModal} variant="contained">
            {t("Edit")} {t("People")}
          </Button>
        </Item>
      </Stack>
      {/* Modal Edit OK_qty Time Stop */}
      <Modal
        hideBackdrop
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 1080, height: 780 }}>
          <Typography
            sx={{
              display: "flex",
              color: "#000000",
              alignItems: "center",
              justifyContent: "center",
            }}
            variant="h3"
          >
            {t("Edit")} {t("People")}
          </Typography>

          <br />
          {/* <InputLabel>OK_qty</InputLabel> */}

          <Box sx={{ flexGrow: 1 }}>
            <Grid container>
              <Grid container xs={12} md={12} lg={12}>
                <Grid xs={3} lg={3}>
                  <Item
                    sx={{
                      height: "100%",
                      lg: 1,
                    }}
                  >
                    <Typography textAlign={"center"}>
                      {t("Add")} {t("People")}{" "}
                    </Typography>
                    <Box component="form">
                      <TextField
                        id="useradd"
                        label="ID User"
                        variant="outlined"
                        value={user1}
                        name="useradd"
                        type="number"
                        onChange={(event) => setUser1(event.target.value)}
                        sx={{
                          width: "100%",
                          height: 50,
                          mt: 2,
                        }}
                      />
                      <br />
                      <TextField
                        disabled
                        id="fullname"
                        label="Name"
                        variant="filled"
                        value={dataName}
                        name="fullname"
                        sx={{
                          width: "100%",
                          height: 50,
                          mt: 2,
                        }}
                      />
                      <br />
                      <TextField
                        disabled
                        id="filled-disabled"
                        label="department"
                        value={dataDepartment}
                        name="department"
                        variant="filled"
                        sx={{
                          width: "100%",
                          height: 50,
                          mt: 2,
                        }}
                      />
                      <br />
                      <Button
                        sx={{
                          width: "100%",
                          height: 50,
                          mt: 2,
                          color: "#000000",
                          bgcolor: "#7CFC00",
                        }}
                        variant="contained"
                        color="inherit"
                        onClick={handlerUpPeople}
                      >
                        {t("SUBMIT")}
                      </Button>
                    </Box>
                  </Item>
                </Grid>
                <Grid xs={9} md={9} lg={9}>
                  <Item>
                    <Typography>
                      {t("Table")} {t("People")}
                    </Typography>
                    <div style={{ height: 400, width: "100%" }}>
                      <DataGrid
                        rows={dataManpower}
                        columns={columnsAddPeople}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                      />
                    </div>
                  </Item>
                </Grid>
              </Grid>
            </Grid>
          </Box>

          <Stack
            direction="row"
            justifyContent="space-around"
            alignItems="center"
            spacing={12}
            sx={{ m: 1, p: 5 }}
          >
            <Item
              sx={{ width: 150, height: 60, p: 2.5, color: "red" }}
              onClick={handleCloseModal}
            >
              <Typography>{t("CLOSE")}</Typography>
            </Item>
          </Stack>
        </Box>
      </Modal>
      {/* ------------------- */}
      {/* openlogOutTime NG */}
      <Modal
        open={openlogoutTime}
        onClose={logoutTimeClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box component="form" noValidate sx={style}>
          <Typography id="modal-modal-title" variant="h4" component="h2">
            Confirm LogOut Time : {times}
          </Typography>

          <Typography sx={{ mt: 2 }}>
            <Stack direction="row" justifyContent="center" spacing={5}>
              <Typography sx={{ p: 1 }}>Do you want to LogOut NO :</Typography>
              <Typography sx={{ fontSize: 28, color: "red" }}>
                {TextConfirmEmp_no}
              </Typography>
              <Typography sx={{ p: 1 }}> Name :</Typography>
              <Typography sx={{ fontSize: 28, color: "red" }}>
                {TextConfirmName}
              </Typography>
            </Stack>

            <Stack
              sx={{ mt: 3 }}
              direction="row"
              justifyContent="space-around"
              alignItems="center"
              spacing={2}
            >
              <Button
                variant="contained"
                sx={{ width: 150, height: 60, p: 2.5 }}
                onClick={handlerLogoutTime}
              >
                Logout
              </Button>
              <Button
                onClick={logoutTimeClose}
                variant="outlined"
                color="error"
                sx={{
                  width: 150,
                  height: 60,
                  p: 2.5,
                  bgcolor: "red",
                  color: "white",
                }}
              >
                Close
              </Button>
            </Stack>
          </Typography>
        </Box>
      </Modal>
      {/* ------------------- */}
    </Box>
  );
};
export default editpeople;
