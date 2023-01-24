import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import {
  DataGrid,
  GridToolbarQuickFilter,
  filterableGridColumnsIdsSelector,
} from "@mui/x-data-grid";
import supabase from "../compunentConfig/supabase";
import { Typography } from "@mui/material";
import Modal from "@mui/material/Modal";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import NgError from "./NgError";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import TextField from "@mui/material/TextField";

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

function QuickSearchToolbar() {
  return (
    <>
      <Box
        sx={{
          p: 0.5,
          pb: 0,
        }}
      >
        <Typography sx={{ fontSize: 28 }}>NG Product</Typography>
        <GridToolbarQuickFilter
          quickFilterParser={(searchInput: string) =>
            searchInput
              .split(",")
              .map((value) => value.trim())
              .filter((value) => value !== "")
          }
        />
      </Box>
    </>
  );
}

export default function QuickFilteringCustomizedGrid() {
  const [openAdd, setOpenAdd] = React.useState(false);
  const handleOpen = () => setOpenAdd(true);
  const handleClose = () => setOpenAdd(false);

  const [openDel, setOpenDel] = React.useState(false);
  const DeleteOpen = () => setOpenDel(true);
  const DeleteClose = () => setOpenDel(false);
  const [selectId, SetID] = useState("");
  const [TextConfirm, SetConfirm] = useState("");
  const [openEdit, setOpenEdit] = React.useState(false);
  const EditOpen = () => setOpenEdit(true);
  const EditClose = () => setOpenEdit(false);
  const [selectIdEdit, setIDEdit] = useState<any>("");
  const [detailNG, setDetailNG] = useState<any>("");
  const [CodeShow, setEditCode] = useState<any>("");
  const [dataNG_qty, setDataNG_qty] = useState<any>("");

  const dates = new Date();
  let day = dates.getDate();
  let month = dates.getMonth() + 1;
  let year = dates.getFullYear();
  const Today =
    dates.getFullYear() + "-" + dates.getMonth() + "-" + dates.getDate();

  const [selectNG, setNG] = useState<String>("");
  const [selectQty, setQty] = useState<Number>(1);
  const [NgId, SetNgId] = useState<Number>(0);
  const [SumNgPcs, SetNgPcs] = useState<Number>(0);
  const [ngAll, setNgAll] = useState<Number>(0);

  const LocalPDkey = localStorage.getItem("PD_key");

  const [mounted, setMounted] = useState(false);
  const [dataNg, setdata] = useState<any>([]);
  const [ShowCodeNG, setCode] = useState<any>([]);
  const [TextError, SetText] = useState<any>("");

  const NGsplit = selectNG.split(":");
  document.addEventListener("keydown", function (event) {
    if (event.ctrlKey && event.altKey && event.key === "5") {
      handleOpen();
    }
    //console.log(event.key);
  });

  // Otherwise filter will be applied on fields such as the hidden column id
  const columns: any = [
    /*{ field: "id", headerName: "No" },*/
    { field: "NG_code", headerName: "Code" },
    { field: "NG_description", headerName: "Description" },
    { field: "NG_qty", headerName: "Q'ty", type: "number" },
    {
      field: "action",
      headerName: "Delete",
      width: 70,
      sortable: false,
      disableColumnMenu: true,
      renderCell: (cellValues: any) => (
        <Typography
          onClick={(event) => {
            handleClick(event, cellValues), DeleteOpen();
          }}
        >
          <IconButton aria-label="delete" size="large">
            <DeleteIcon />
          </IconButton>
        </Typography>
      ),
    },
    {
      field: "actionEdit",
      headerName: "Edit",
      width: 70,
      sortable: false,
      disableColumnMenu: true,
      renderCell: (cellValues: any) => (
        <Typography
          onClick={(event) => {
            handleClickEdit(event, cellValues), EditOpen();
          }}
        >
          <IconButton aria-label="edit" size="large">
            <ModeEditIcon />
          </IconButton>
        </Typography>
      ),
    },
  ];

  useEffect(() => {
    const FetchData = async () => {
      const { data, error } = await supabase
        .from("NG_record")
        .select("*")
        .order("NG_code")
        .filter("PD_key", "in", "(" + LocalPDkey + ")");
      setdata(data);
    };
    FetchData();
  }, []);
  // console.log("fetch dataNG", dataNg);

  // sumNG Num
  const FetchDT = async () => {
    const { data, error, count } = await supabase
      .from("NG_record")
      .select("NG_qty", { count: "exact" })
      .filter("PD_key", "in", "(" + LocalPDkey + ")");
    if (!error) {
      const sumNGqty: any = data.reduce((a, b) => a + b.NG_qty, 0);
      await setNgAll(sumNGqty);
      await ngProduction(Number(sumNGqty));
    }
  };

  const ngProduction = async (ngAll: Number) => {
    const { data, error } = await supabase
      .from("Production_history")
      .update({ NG_qty: ngAll })
      .eq("PD_key", LocalPDkey);
    if (data) {
      console.log(data);
    } else {
      console.log(error);
    }
  };

  useEffect(() => {
    const NGRecord = supabase
      .channel("custom-all-NG_recordTable")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "NG_record" },
        (payload) => {
          console.log("Change received NG_record", payload);
          ReloadNG();
          FetchDT();
        }
      )
      .subscribe();
    return () => {
      supabase.removeChannel(NGRecord);
    };
  }, [dataNg]);

  const ReloadNG = async () => {
    const { data, error } = await supabase
      .from("NG_record")
      .select("*")
      .order("NG_code")
      .filter("PD_key", "in", "(" + LocalPDkey + ")");
    setdata(data);
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const handleClick = (event: any, cellValues: any) => {
    SetConfirm(cellValues.row.NG_code + " " + cellValues.row.NG_qty + " Pcs ");
    SetID(cellValues.row.id);
  };
  const handleClickEdit = (event: any, cellValues: any) => {
    setEditCode(cellValues.row.NG_code);
    setDataNG_qty(cellValues.row.NG_qty);
    setDetailNG(cellValues.row.NG_description);
    setIDEdit(cellValues.row.id);
  };
  // const updateDel = async () => {
  //   const { data, error } = await supabase
  //     .from("Production_history")
  //     .update({ NG_qty: "otherValue" })
  //     .eq("id", selectId);
  // };

  const DelNG = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (selectId) {
      const { data, error } = await supabase
        .from("NG_record")
        .delete()
        .eq("id", selectId);
      if (!error) {
        console.log("NG Delete Success :", data);
        ReloadNG();
        DeleteClose();
      }
    }
  };

  const EditNG = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (selectIdEdit) {
      const { data, error } = await supabase
        .from("NG_record")
        .update({ NG_qty: dataNG_qty })
        .eq("id", selectIdEdit);
      if (!error) {
        console.log("NG Edit Success :", data);
        ReloadNG();
        EditClose();
      }
    }
  };
  //ทำเช็ค useEffect ทำงานระหว่าง client กับ server **ต้องทำความเข้าใจ useEffect เพิ่มเติม
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  //ทำเช็ค useEffect ทำงานระหว่าง client กับ server **ต้องทำความเข้าใจ useEffect เพิ่มเติม

  return (
    <div>
      <Box sx={{ height: 400, flexGrow: 1 }}>
        <DataGrid
          rows={dataNg}
          columns={columns}
          components={{ Toolbar: QuickSearchToolbar }}
        />
      </Box>
      {/* Delete NG */}
      <Modal
        open={openDel}
        onClose={DeleteClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box component="form" onSubmit={DelNG} noValidate sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Confirm delete
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Do you want to delete NG code : {TextConfirm} ?
            <div>
              <br />
            </div>
            <Stack direction="row" justifyContent="center" spacing={2}>
              <Button type="submit" variant="contained">
                Yes
              </Button>
              <Button onClick={DeleteClose} variant="outlined" color="error">
                No
              </Button>
            </Stack>
          </Typography>
        </Box>
      </Modal>
      {/* ------------------- */}
      {/* Edit NG */}
      <Modal
        open={openEdit}
        onClose={EditClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          component="form"
          onSubmit={EditNG}
          noValidate
          sx={{ ...style, width: 1000 }}
        >
          <Typography id="modal-modal-title" variant="h3" p={3}>
            Edit NG
          </Typography>
          <Stack direction="row" justifyContent="center" spacing={4}>
            <Typography sx={{ fontSize: 20 }}>NG code : {CodeShow}</Typography>
            <Typography sx={{ fontSize: 20 }}>Detail : {detailNG}</Typography>

            <TextField
              sx={{ width: 600 }}
              label="NG_qty"
              id="outlined-size-normal"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              value={dataNG_qty}
              onChange={(event) => setDataNG_qty(event.target.value)}
            />
          </Stack>

          <Stack direction="row" justifyContent="center" spacing={2} p={2}>
            <Button type="submit" variant="contained">
              Submit
            </Button>
            <Button onClick={EditClose} variant="outlined" color="error">
              Close
            </Button>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}
