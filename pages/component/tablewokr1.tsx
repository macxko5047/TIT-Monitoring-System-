import React, { useState, useEffect, useRef } from "react";
import Box from "@mui/material/Box";
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
  GridCellParams,
  GridColumns,
} from "@mui/x-data-grid";
import Grid from "@mui/material/Unstable_Grid2";

import supabasetit from "../../compunentConfig/supabase";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import List from "@mui/material/List";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useRouter } from "next/router";
import supabase from "../../compunentConfig/supabase";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import axios from "axios";
import Modal from "@mui/material/Modal";
import { styled, ThemeProvider } from "@mui/material/styles";
import DeleteIcon from "@mui/icons-material/Delete";
import Alert from "@mui/material/Alert";
import useSound from "use-sound";
import clsx from "clsx";
import CircularProgress from "@mui/material/CircularProgress";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import ProductionUnitError from "./ProductionUnitError";

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

//ของ compunent TransitionProps
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function CustomToolbar() {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          pb: 0,
          justifyContent: "center",
          p: 1,
          m: 1,
          bgcolor: "background.paper",
          borderRadius: 1,
        }}
      >
        <GridToolbarContainer>
          <GridToolbarColumnsButton />
          <GridToolbarFilterButton />
          <GridToolbarDensitySelector />
          <GridToolbarExport />
        </GridToolbarContainer>
        <GridToolbarQuickFilter
          quickFilterParser={(searchInput: string) =>
            searchInput
              .split(",")
              .map((value) => value.trim())
              .filter((value) => value !== "")
          }
        ></GridToolbarQuickFilter>
      </Box>
    </div>
  );
}

export default function tablework1() {
  const [mounted, setMounted] = useState(false);
  const [sData, setSData] = useState<any>([]);
  const [open, setOpen] = useState(false);
  const [datasec, setdataSec] = useState<any>([]);
  const [datasec01, setdataSec01] = useState<any>("");
  const [TextError, SetText] = useState<any>("");

  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  const [PlayConfirm_Success, soundConfirm_Success] = useSound(
    "/Confirm_Success.mp3"
  );
  const router = useRouter();
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  const hours = date.getHours();
  //check time day & night
  const [kokks, setKokks] = useState("");
  const checkDaynight = () => {
    if (checkDN === true) {
      setKokks("Day");
    }
    if (checkDN === false) {
      setKokks("Night");
    }
  };
  let checkDN = hours > 7 && hours < 19;

  function leftFillNumMonth(numMonth: any, targetLength: any) {
    return numMonth.toString().padStart(targetLength, 0);
  }
  const numMonth = month;
  const putMonth = leftFillNumMonth(numMonth, 2);

  let lastday = new Date(year, month, 0);
  // This arrangement can be altered based on how we want the date's format to appear.
  let currentDate: any = `${year}-${month}-${day}`;
  let currentDate1: any = `${year}-${month}-${"01"}`;

  // console.log("lastDay", lastday.getDate());

  let currentDate2: any = `${year}-${putMonth}-${lastday.getDate()}`;
  let Fulltimeday: any = `${year.toString().substr(-2)}${putMonth}`;

  const [loading, setLoading] = useState(false); // ทำโหลดดิ้งรอข้อมูล

  // เช็คค่าที่เท้ากับแล้วเซ็ตค่าใส่ ------------------------------
  const [CheckdataPD, setCheckdataPD] = useState<any>("");
  console.log("CheckdataPD", CheckdataPD);
  const [checkdataGroup, setCheckdataGroup] = useState<any>("");
  console.log("checkdataGroup", checkdataGroup);

  //----เช็คค่า group ออกมา
  useEffect(() => {
    const FetchDataCheck = async () => {
      const { data, error }: any = await supabase
        .from("Production_unit_group")
        .select("*")
        .eq("PD_line", datasec01)
        .limit(1); //ใช้แทน single
      if (data.length) {
        setCheckdataPD(data[0].Digit_group);
        setCheckdataGroup(data[0].Group_name);
      } else {
        console.log(error);
      }
    };
    if (open === true) {
      FetchDataCheck();
    }
  }, [CheckdataPD, datasec01]);

  //-----------------------
  //============ เรียก production Unit จาก group ได้ค่ามาจาก CheckdataPD ====
  const [dataUnit_gruop, setDataUnit_gruop] = useState<any>([]);
  const [dataUnit_select, setDataUnit_select] = useState<any>("");
  // console.log("dataUnit_select", dataUnit_select);
  //===============.ใช้เช็คค่าว่าถ้ามี Production_Unit Onilne ให้ไม่สามารถทำงานซ้ำกันในที่เดียวได้
  // const dataSelectUnitCheck = dataUnit_gruop.filter(
  //   (res: any) => res.PD_line == dataUnit_select
  // );
  // const dataSelectUnitCheckMAP = dataUnit_gruop.map(
  //   (testss: any) => testss.PD_line == dataUnit_select
  // );
  // // console.log("dataSelectUnitCheck", dataSelectUnitCheck);
  // console.log("dataSelectUnitCheckMAP", dataSelectUnitCheckMAP);

  useEffect(() => {
    const FetchDataunitgruop = async () => {
      const { data, error }: any = await supabase
        .from("Production_unit_group")
        .select("*")
        .filter("Group_name", "in", "(" + checkdataGroup + ")")
        .filter("status_run", "in", "(Offline)")
        .order("PD_line", { ascending: true });
      if (data) {
        setDataUnit_gruop(data);
      }
      if (error) {
        console.log("FetchDataunitgruop Error", error);
      }
    };
    FetchDataunitgruop();
  }, [CheckdataPD]);
  //-------------------------------------------------------------------
  //========= check data Work order Online ==========
  const [dataWOcheck, setDataWOcheck] = useState<any>([]);
  console.log("dataWOcheck", dataWOcheck);

  useEffect(() => {
    const fetchWO_onoff = async () => {
      let { data: Production_history, error } = await supabase
        .from("Production_history")
        .select("Work_order_id,Status");
      setDataWOcheck(Production_history);
    };
    fetchWO_onoff();
  }, []);
  // ------------------------------------------------
  const [datecheck1, setDatecheck1] = useState<any>([]);
  // console.log("YM get:", datecheck1);
  const fectdataDESC = async () => {
    let { data, error } = await supabase
      .from("Production_history")
      .select("*")
      .gte("Production_date", currentDate1)
      .lte("Production_date", currentDate2);

    if (data) {
      await setDatecheck1(data);
      console.log("fetchDESC", data);
    } else {
      console.log(error);
    }
  };

  function leftFillNum(num: any, targetLength: any) {
    return num.toString().padStart(targetLength, 0);
  }

  const num = datecheck1.length;
  console.log(num);

  const putPDKEY = leftFillNum(num, 4);
  console.log("PDkey Run+1:", putPDKEY);

  useEffect(() => {
    const ProductionHistory = supabase
      .channel("custom-all-PD_keyNew")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "Production_history" },
        (payload) => {
          console.log("Change received! PD_keyNew", payload);
          fectdataDESC();
        }
      )
      .subscribe();
  }, [datecheck1]);
  //-------------------------------------

  // insert ตอนกด select WO
  const insertDigit = async () => {
    const PDkey = `${CheckdataPD}${Fulltimeday}${putPDKEY}`;
    const { data, error } = await supabase.from("Production_history").insert([
      {
        PD_key: PDkey,
        Work_order_id: datasec[0].Work_order_id,
        Item_number: datasec[0].Item_number,
        Production_unit: dataUnit_select,
        Production_date: currentDate,
        Shift: kokks,
        Order_qty: datasec[0].Order_qty,
        Open_qty: datasec[0].Open_qty,
        OP_confirm_before: localStorage.getItem("emp_no"),
      },
    ]);

    if (data) {
      console.log(data);
    } else {
      console.log(error);
    }
  };

  //click ปุ่ม select WO
  // const dataCheckWoSelet = localStorage.getItem("CheckWo");
  // console.log("testCheck", dataCheckWoSelet);

  const handleClickOpen = async (event: any, cellValues: { row: any }) => {
    // if (cellValues.row.Status_working === "Online") {
    //   alert("Already on proceeding in production!");
    // } else {
    await setOpen(true);
    await setdataSec([cellValues.row]);
    await setdataSec01(cellValues.row.Production_unit);
    await fectdataDESC();
    await checkDaynight();
    await localStorage.setItem("CheckWo", cellValues.row.Work_order_id);
    await fetchDataPeople();
    // }
  };

  const handleClose = () => {
    setOpen(false);
  };
  //-----------------------
  //================ fetch Production unit มาเช็ค จาก Production unit==================
  const [dataUnitcheck, setDataUnitcheck] = useState<any>([]);
  console.log("dataUnitcheck", dataUnitcheck);

  useEffect(() => {
    const fetchProductionUnit = async () => {
      let { data: Production_unit_group, error } = await supabase
        .from("Production_unit_group")
        .select("*")
        .filter("status_run", "in", "(Online)");
      if (Production_unit_group) {
        setDataUnitcheck(Production_unit_group);
      }
    };
    fetchProductionUnit();
  }, []);
  //---------------------------------------------------------------------

  // confrim
  const handleropenConfirm = () => {
    const LocalPD_key = localStorage.getItem("PD_key");

    if (!dataUnit_select) {
      return SetText(<ProductionUnitError />);
    } else {
      SetText("");

      if (LocalPD_key != null) {
        alert("Please push STOP button before proceed next WO");
      }
      if (LocalPD_key === null) {
        fectdataDESC();
        ConfrimOpen();
      }
    }
  };
  const handleConfirm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await setLoading(true);
    await fetchCheckPass();
    await setLoading(false);
  };
  const [passConfrim, setPassConfrim] = useState("");

  const fetchCheckPass = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("userID")
      .select("*")
      .eq("emp_name", localStorage.getItem("userName"))
      .eq("pass", passConfrim)
      .limit(1); //ใช้แทน single
    if (!error) {
      if (data.length > 0) {
        console.log("Confirm Success", data);
        await PlayConfirm_Success();
        await handlerAgree();
        await insertManpower();
      }
      if (data.length === 0) {
        alert("Password is incorrect");
      }
    } else {
      console.log("Password is incorrect", error);
    }
    setLoading(false);
  };
  // push Agree
  const removeItem = () => {
    localStorage.removeItem("TimeStart");
  };
  const handlerAgree = async () => {
    await removeItem();

    if (CheckdataPD != "") {
      await insertDigit();
    }
    await localStorage.setItem("Work_order_id", datasec[0].Work_order_id);
    await localStorage.setItem("Production_unit", dataUnit_select);
    await localStorage.setItem(
      "PD_key",
      `${CheckdataPD}${Fulltimeday}${putPDKEY}`
    );
    await localStorage.setItem("Open_qty", datasec[0].Open_qty);
    await localStorage.setItem("Complete_qty", datasec[0].Complete_qty);
    await localStorage.setItem("ItemNumber", datasec[0].Item_number);
    await localStorage.setItem("NG_qty_WO", datasec[0].NG_qty);
    await router.push("/draw1");
  };
  //=================================================================
  // console.log(currentDate); // "DD-MM-YYYY"

  // onChang รหัสพนักงาน
  const [dataUser, setDataUser] = useState<any>([]);
  console.log("dataAll", dataUser);

  const [user1, setUser1] = useState<any>("");
  console.log(user1);

  const dataName: string =
    dataUser.filter((respon: any) => respon.emp_no == user1)[0]?.emp_name || "";
  console.log({ dataName });

  //   .map((ShowName: { emp_name: string }) => ShowName.emp_name);
  // console.log("dataName", JSON.stringify(dataName));

  const dataDepartment: string =
    dataUser.filter((respon1: any) => respon1.emp_no == user1)[0]?.department ||
    "";
  console.log("dataDepartment", dataDepartment);

  const [selectId, SetID] = useState("");
  const [TextConfirmName, SetConfirmName] = useState("");
  const [TextConfirmDepartment, SetConfirmDepartment] = useState("");
  const [openDel, setOpenDel] = React.useState(false);
  const DeleteOpen = () => setOpenDel(true);
  const DeleteClose = () => setOpenDel(false);
  const [openConfrim, setOpenConfrim] = React.useState(false);
  const ConfrimOpen = () => setOpenConfrim(true);
  const ConfrimClose = () => setOpenConfrim(false);

  const handleClick = (event: any, cellValues: any) => {
    SetConfirmName(cellValues.row.emp_name);
    SetConfirmDepartment(cellValues.row.department);
    SetID(cellValues.row.id);
  };
  const DelNG = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (selectId) {
      const { data, error } = await supabase
        .from("userSelect")
        .delete()
        .eq("id", selectId);
      if (!error) {
        console.log("People Delete Success :", data);
        await fetchDataPeople();
        await DeleteClose();
      }
    }
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

  // Otherwise filter will be applied on fields such as the hidden column id

  const columns: GridColumns = [
    {
      field: "Select Item ",
      width: 110,
      headerClassName: "super-app-theme--header",
      renderCell: (cellValues: any) => {
        return (
          <Box>
            <Button
              variant="contained"
              color="primary"
              onClick={(event) => {
                handleClickOpen(event, cellValues);
              }}
            >
              Select
            </Button>
          </Box>
        );
      },
    },
    {
      field: "Work_order_id",
      headerName: "Work order id",
      width: 120,
      headerClassName: "super-app-theme--header",
      cellClassName: (params: GridCellParams<any>) => {
        if (params.row.Status_working == null) {
          return "";
        }

        return clsx("super-app", {
          negative: params.row.Status_working === "Online",
          positive: params.row.Status_working === "Offline",
        });
      },
    },

    {
      field: "Item_number",
      headerName: "Item number",
      width: 160,
      headerClassName: "super-app-theme--header",
      cellClassName: (params: GridCellParams<any>) => {
        if (params.row.Status_working == null) {
          return "";
        }

        return clsx("super-app", {
          negative: params.row.Status_working === "Online",
          positive: params.row.Status_working === "Offline",
        });
      },
    },
    {
      field: "WO_status",
      headerName: "WO status",
      width: 135,
      headerClassName: "super-app-theme--header",
      cellClassName: (params: GridCellParams<any>) => {
        if (params.row.Status_working == null) {
          return "";
        }

        return clsx("super-app", {
          negative: params.row.Status_working === "Online",
          positive: params.row.Status_working === "Offline",
        });
      },
    },
    {
      field: "Order_qty",
      headerName: "Order qty",
      headerClassName: "super-app-theme--header",
      cellClassName: (params: GridCellParams<any>) => {
        if (params.row.Status_working == null) {
          return "";
        }

        return clsx("super-app", {
          negative: params.row.Status_working === "Online",
          positive: params.row.Status_working === "Offline",
        });
      },
    },
    {
      field: "Complete_qty",
      headerName: "Complete qty",
      headerClassName: "super-app-theme--header",
      cellClassName: (params: GridCellParams<any>) => {
        if (params.row.Status_working == null) {
          return "";
        }

        return clsx("super-app", {
          negative: params.row.Status_working === "Online",
          positive: params.row.Status_working === "Offline",
        });
      },
    },
    {
      field: "Open_qty",
      headerName: "Open qty",
      headerClassName: "super-app-theme--header",
      cellClassName: (params: GridCellParams<any>) => {
        if (params.row.Status_working == null) {
          return "";
        }

        return clsx("super-app", {
          negative: params.row.Status_working === "Online",
          positive: params.row.Status_working === "Offline",
        });
      },
    },
    {
      field: "Due_over",
      headerName: "Due_over",
      headerClassName: "super-app-theme--header",
      cellClassName: (params: GridCellParams<any>) => {
        if (params.row.Status_working == null) {
          return "";
        }

        return clsx("super-app", {
          negative: params.row.Status_working === "Online",
          positive: params.row.Status_working === "Offline",
        });
      },
    },
    {
      field: "Due_date_PD",
      headerName: "Due date PD",
      headerClassName: "super-app-theme--header",
      cellClassName: (params: GridCellParams<any>) => {
        if (params.row.Status_working == null) {
          return "";
        }

        return clsx("super-app", {
          negative: params.row.Status_working === "Online",
          positive: params.row.Status_working === "Offline",
        });
      },
    },
    {
      field: "Release_date",
      headerName: "Release date",
      headerClassName: "super-app-theme--header",
      cellClassName: (params: GridCellParams<any>) => {
        if (params.row.Status_working == null) {
          return "";
        }

        return clsx("super-app", {
          negative: params.row.Status_working === "Online",
          positive: params.row.Status_working === "Offline",
        });
      },
    },
    // {
    //   field: "Production_unit",
    //   headerName: "Production unit",
    //   width: 140,
    //   headerClassName: "super-app-theme--header",
    //   cellClassName: (params: GridCellParams<any>) => {
    //     if (params.row.Status_working == null) {
    //       return "";
    //     }

    //     return clsx("super-app", {
    //       negative: params.row.Status_working === "Online",
    //       positive: params.row.Status_working === "Offline",
    //     });
    //   },
    // },
    {
      field: "Status_working",
      width: 150,
      headerName: "Status_working",
      headerClassName: "super-app-theme--header",
      cellClassName: (Status_working: GridCellParams<any>) => {
        if (Status_working.value == null) {
          return "";
        }

        return clsx("super-app", {
          negative: Status_working.value === "Online",
          positive: Status_working.value === "Offline",
        });
      },
    },
  ];

  useEffect(() => {
    const FetchData = async () => {
      setLoading(true);
      console.log("fetchdata"); //ใช้เช็คการทำงานว่าทำกี่ครั้ง
      const { data, error } = await supabasetit
        .from("Work_order")
        .select("*")
        .filter("WO_status", "in", "(R)"); //983
      if (data) {
        setSData(data);
        console.log(data);
      } else {
        console.log(error);
      }
    };
    FetchData();
    setLoading(false);
  }, []);

  // ----------------------------------------
  // ช่องโชร จำนวนคนทำงาน

  const [dataPeople, setDataPeople] = useState<any>([]);
  console.log("dataPeople", dataPeople);

  const fetchDataPeople = async () => {
    let { data: userSelect, error } = await supabase
      .from("userSelect")
      .select("*")
      .eq("Work_order_id", localStorage.getItem("CheckWo"));

    if (userSelect) {
      setDataPeople(userSelect);
    } else {
      console.log("fetchDataPeople Error", error);
    }
  };

  useEffect(() => {
    const userSelect = supabase
      .channel("custom-all-channeluserSelect")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "userSelect" },
        (payload) => {
          console.log("Change received!", payload);
          fetchDataPeople();
        }
      )
      .subscribe();
    return () => {
      supabase.removeChannel(userSelect);
    };
  }, [dataPeople]);

  const handlerSubmitPeople = async () => {
    if (user1 === "") {
      alert("Please entry your ID User");
    }
    if (user1 != "") {
      const { data, error } = await supabase.from("userSelect").insert([
        {
          emp_no: user1,
          emp_name: dataName,
          department: dataDepartment,
          Work_order_id: localStorage.getItem("CheckWo"),
          activated: "not",
        },
      ]);
      await setUser1("");
      if (data) {
        console.log("Insert dataUserSelect Success");
      } else {
        console.log("Insert dataUserSelect Error", error);
      }
    }
  };

  const insertManpower = async () => {
    setLoading(true);
    let { data, error } = await supabase.rpc("upmanpower", {
      wo: localStorage.getItem("Work_order_id"),
    });

    if (error) console.error(error);
    else setLoading(false);
    console.log("Up User Success", data);
  };
  //-----------------------------------------------------------------------
  const columnsAddPeople: GridColDef[] = [
    // { field: "id", headerName: "ID", width: 50 },
    { field: "emp_no", headerName: "no", width: 100 },
    { field: "emp_name", headerName: "Name", width: 220 },
    { field: "department", headerName: "department", width: 320 },
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
  ];

  useEffect(() => {
    const WorkOrder = supabase
      .channel("custom-all-WorkOrder")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "Work_order" },
        (payload) => {
          console.log("Change received WorkOrder !", payload);
          setSData((prev: any) => [...prev, payload.new]);
        }
      )
      .subscribe();
    return () => {
      supabase.removeChannel(WorkOrder);
    };
  }, []);

  //ทำเช็ค useEffect ทำงานระหว่าง cliant กับ server **ต้องทำความเข้าใจ useEffect เพิ่มเติม
  useEffect(() => {
    setMounted(true);
  }, []);

  //ทำเช็ค useEffect ทำงานระหว่าง cliant กับ server **ต้องทำความเข้าใจ useEffect เพิ่มเติม

  if (loading) {
    return (
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography sx={{ fontSize: 50 }}>Loading...</Typography>
        <CircularProgress />
      </Box>
    ); //รอโหลดข้อมูล
  }

  if (!mounted) return null;

  return (
    <Box
      sx={{
        height: 650,
        width: "100%",
        "& .super-app.negative": {
          backgroundColor: "rgba(157, 255, 118, 0.49)",
          color: "#000000",
          fontWeight: "500",
          borderBlockColor: "#F8F8FF",
        },
        "& .super-app.positive": {
          backgroundColor: "#DCDCDC",
          color: "#000000",
          fontWeight: "500",
          // borderBlockColor: "red",
          borderBlockColor: "#F8F8FF",
        },
        "& .super-app-theme--header": {
          backgroundColor: "#99CCFF",
          color: "#000000",
          fontWeight: "500",
          borderBlockColor: "#F8F8FF",
        },
      }}
    >
      <DataGrid
        rows={sData}
        columns={columns}
        components={{ Toolbar: CustomToolbar }}
        getRowId={(row: any) => row.Work_order_id}
        initialState={{
          sorting: {
            sortModel: [{ field: "Due_over", sort: "desc" }],
          },
        }}
        // initialState={{
        //   filter: {
        //     filterModel: {
        //       items: [
        //         {
        //           columnField: "WO_status",
        //           operatorValue: "contains",
        //           value: "R",
        //         },
        //       ],
        //     },
        //   },
        // }}
      ></DataGrid>
      {currentDate}

      {/* กด Select มาแล้วให้เลือกยืนยัน */}
      <Dialog
        fullScreen
        open={open}
        TransitionComponent={Transition}
        onClose={handleClose}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Work Oder
            </Typography>

            <Button autoFocus color="inherit" onClick={handleropenConfirm}>
              Agree
            </Button>
          </Toolbar>
        </AppBar>
        <Box>
          <TableContainer
            component={Paper}
            style={{ width: "auto", tableLayout: "auto" }}
          >
            <TableHead>
              <TableRow>
                <TableCell align="right">Work_order_id</TableCell>
                <TableCell align="right">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Item_number
                </TableCell>
                <TableCell align="right">WO_status</TableCell>
                <TableCell align="right">Order_qty</TableCell>
                <TableCell align="right">Complete_qty</TableCell>
                <TableCell align="right">Open_qty</TableCell>
                <TableCell align="right">Release_date</TableCell>
                <TableCell align="right">Due_date_PD</TableCell>

                <TableCell align="right">PD_Key</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {datasec.map((rowss: any) => (
                <TableRow
                  key={rowss.Work_order_id}
                  sx={{
                    "&:last-child td, &:last-child th": {
                      border: 0,
                    },
                  }}
                >
                  <TableCell align="right">{rowss.Work_order_id}</TableCell>
                  <TableCell align="right">{rowss.Item_number}</TableCell>
                  <TableCell align="right">{rowss.WO_status}</TableCell>
                  <TableCell align="right">{rowss.Order_qty}</TableCell>
                  <TableCell align="right">{rowss.Complete_qty}</TableCell>
                  <TableCell align="right">{rowss.Open_qty}</TableCell>
                  <TableCell align="right">{rowss.Release_date}</TableCell>
                  <TableCell align="right">{rowss.Due_date_PD}</TableCell>

                  <TableCell align="right">{`${CheckdataPD}${Fulltimeday}${putPDKEY}`}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </TableContainer>
          <Stack
            sx={{ mt: 1, p: 1 }}
            direction="row"
            // justifyContent="space-around"
            alignItems="center"
            spacing={2}
          >
            <Typography>Production Unit</Typography>
            <FormControl sx={{ m: 1, minWidth: 200 }}>
              <Select
                value={dataUnit_select}
                onChange={(event) => setDataUnit_select(event.target.value)}
                fullWidth
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {dataUnit_gruop.map((fetchdata: any) => (
                  <MenuItem
                    key={fetchdata.PD_line}
                    sx={{ fontSize: 24 }}
                    value={fetchdata.PD_line}
                  >
                    {fetchdata.PD_line} : {fetchdata.Group_name}
                  </MenuItem>
                ))}
              </Select>
              {/* <FormHelperText>With label + helper text</FormHelperText> */}
            </FormControl>
            {TextError}
          </Stack>
          <Box sx={{ flexGrow: 1, p: 1 }}>
            <Grid container>
              <Grid container xs={12} md={12} lg={12}>
                <Grid xs={3} lg={3}>
                  <Item
                    sx={{
                      height: "100%",
                      lg: 1,
                    }}
                  >
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
                          width: 210,
                          height: 50,
                          m: 1,
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
                          width: 210,
                          height: 50,
                          m: 1,
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
                          width: 210,
                          height: 50,
                          m: 1,
                        }}
                      />
                      <br />
                      <Button
                        sx={{
                          width: 210,
                          height: 50,
                          m: 1,
                          color: "#000000",
                          bgcolor: "#7CFC00",
                        }}
                        variant="contained"
                        color="inherit"
                        onClick={handlerSubmitPeople}
                      >
                        Submit
                      </Button>
                    </Box>
                  </Item>
                </Grid>
                <Grid xs={9} md={9} lg={9}>
                  <Item>
                    <Typography>Table People</Typography>
                    <div style={{ height: 400, width: "100%" }}>
                      <DataGrid
                        rows={dataPeople}
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
        </Box>
      </Dialog>
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

          <Typography sx={{ mt: 2 }}>
            <Stack direction="row" justifyContent="center" spacing={4}>
              <Typography>Do you want to delete Name :</Typography>
              <Typography sx={{ color: "red" }}>{TextConfirmName} </Typography>
              <Typography>Department :</Typography>
              <Typography sx={{ color: "red" }}>
                {TextConfirmDepartment}
              </Typography>
              &nbsp;&nbsp; ?
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
                type="submit"
              >
                Yes
              </Button>
              <Button
                onClick={DeleteClose}
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
                No
              </Button>
            </Stack>
          </Typography>
        </Box>
      </Modal>
      {/* ------------------- */}
      {/* Confirm Agree */}
      <Modal
        open={openConfrim}
        onClose={ConfrimClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box component="form" onSubmit={handleConfirm} noValidate sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Confirm Select Work Order
          </Typography>

          <Typography sx={{ mt: 2 }}>
            <Stack direction="row" justifyContent="center" spacing={1}>
              <Typography sx={{ fontSize: 38 }}> Name :</Typography>
              <Typography sx={{ color: "red", fontSize: 38 }}>
                {localStorage.getItem("userName")}{" "}
              </Typography>
            </Stack>
            <Stack direction="row" justifyContent="center" spacing={1}>
              <TextField
                id="useradd"
                label="Password"
                variant="outlined"
                value={passConfrim}
                name="useradd"
                type="password"
                onChange={(event) => setPassConfrim(event.target.value)}
                sx={{
                  width: 210,
                  height: 50,
                  m: 1,
                }}
              />
            </Stack>
            <Stack
              sx={{ mt: 3 }}
              direction="row"
              justifyContent="space-around"
              alignItems="center"
              spacing={2}
            >
              <Button
                type="submit"
                variant="contained"
                sx={{ width: 150, height: 60, p: 2.5 }}
              >
                Confirm
              </Button>
              <Button
                onClick={ConfrimClose}
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
                CLOSE
              </Button>
            </Stack>
          </Typography>
        </Box>
      </Modal>
      {/* ------------------- */}
    </Box>
  );
}
