import React, { useEffect, useState, useRef } from "react";
import { styled, ThemeProvider } from "@mui/material/styles";
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
import { Typography } from "@mui/material";
import Modal from "@mui/material/Modal";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useStopwatch } from "react-timer-hook";
import LoadingsNG from "./component/loadingsNG";
import CircularProgress from "@mui/material/CircularProgress";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";
import StopCircleIcon from "@mui/icons-material/StopCircle";
import NgError from "./component/NgError";
import TextField from "@mui/material/TextField";
import Editpeople from "./component/editpeople";
import useSound from "use-sound";
import TablePeople from "./component/tablePeople";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@mui/material/FormControl";
import { useRouter } from "next/router";
import supabase from "../compunentConfig/supabase";
import DowntimeError from "./component/DowntimeError";

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
const style1 = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  hight: 450,
  bgcolor: "background.paper",
  border: "20px solid #FF0000",
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

//ทำแสดงเวลาโชรของวันนี้

// This arrangement can be altered based on how we want the date's format to appear.

function tableproduction() {
  const [loading, setLoading] = useState(false); // ทำโหลดดิ้งรอข้อมูล
  const [loading1, setLoading1] = useState(false); // ทำโหลดดิ้งรอข้อมูล
  //ระบุเวลา กด start pause stop
  let [timestart, setTimestart] = useState<any>("");

  let [timepause, setTimepause] = useState<any>("");
  let [timePE, setTimePE] = useState<any>("");
  let [timestop, setTimestop] = useState<any>("");
  const [details, setDetails] = useState<any>("");

  const [dataOK, setOK] = useState(0);

  // split string แบ่ง ออกเพื่อส่งไปเก็บใน database
  const menusplit = details.split(":");

  const [datamenu, setDatamenu] = useState<any>([]);
  // console.log("menu :", datamenu);
  const [timeOtCel, setTimeOtCel] = useState<number>(0);
  const [ot_operations, setOT_operation] = useState<any>("");
  console.log("ot_operation", ot_operations);

  // -------------------------------------

  const [dataManuptest, setDataManuptest] = useState<any>("");
  const AutoUpdataPD_keyManpower = async () => {
    const { data, error } = await supabase
      .from("Manpower_record")
      .update({
        PD_key: localStorage.getItem("PD_key"),
        activate_data: "activated",
      })
      .eq("Work_order_id", localStorage.getItem("CheckWo"))
      .eq("activate_data", "not");
    if (data) {
      console.log("Autoup PD_key Manpower_record Success", data);
      setDataManuptest("UpComplete");
    } else {
      console.log("Autoup PD_key Manpower_record Error", error);
    }
  };

  useEffect(() => {
    const FetchData = async () => {
      const { data } = await supabase
        .from("DownTimeCode")
        .select("*")
        .order("code", { ascending: true });
      setDatamenu(data);
      console.log(data);
    };
    FetchData();
  }, []);
  //เปิด - ปิด modal v.1
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => {
    const TimeCheck = localStorage.getItem("TimeStart");
    if (TimeCheck === null) {
      alert("Please press the start button first.");
    }
    if (TimeCheck != null) {
      setOpenModal(true);
      playPause();
    }
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };
  //เปิด - ปิด modal v.2
  const { seconds, minutes, hours, days, isRunning, start, pause, reset } =
    useStopwatch({ autoStart: false });

  const [openModal1, setOpenModal1] = useState<any>(false);
  const handleOpenModal1 = () => {
    setOpenModal1(true);
  };
  const handleCloseModal1 = () => {
    setOpenModal1(false);
  };
  const updateDowntimeStatusStart = async () => {
    const { data, error } = await supabase
      .from("Production_unit_group")
      .update({ status_run: "Downtime" })
      .eq("PD_key", localStorage.getItem("PD_key"));
    if (!error) {
      console.log("Downtime Status Success", data);
    }
  };
  const updateDowntimeStatusEND = async () => {
    const { data, error } = await supabase
      .from("Production_unit_group")
      .update({ status_run: "Online" })
      .eq("PD_key", localStorage.getItem("PD_key"));
    if (!error) {
      console.log("Downtime Status Success", data);
    }
  };
  const handleSubmitModal = async () => {
    if (!details) {
      return SetText1(<DowntimeError />);
    } else {
      SetText1("");
      if (timepause === "") {
        await setTimepause(times);
        await setTimestamp01(timestamps);
        await updateDowntimeStatusStart();
        await playOn_Downtime();
      }
      if (timepause === "") {
        const { data, error } = await supabase.from("Downtime_record").insert([
          {
            Work_order_id: localStorage.getItem("Work_order_id"),
            PD_key: localStorage.getItem("PD_key"),
            Downtime_code: menusplit[0],
            Begin_time: times,
            Downtime_description: menusplit[1],
          },
        ]);
        if (error) {
          console.log(error);
        }
        if (data) {
          console.log(data);
        }
        await setOpenModal(false);
        await handleOpenModal1();
      }
    }
  };
  //เปิด - ปิด modal v.3
  const [openModal3, setOpenModal3] = useState(false);
  const handleOpenModal3 = () => {
    const TimeCheck = localStorage.getItem("TimeStart");
    if (TimeCheck === null) {
      alert("Please press the start button first.");
    }
    if (TimeCheck != null) {
      fetchdataBreakTime();
      playStop();
      fetchProduction_history();
      fetchManpower();
      fetchRuntime();
      fetchWO();
      fatchTimeStart_stamp();
      setOpenModal3(true);
    }
  };
  const handleCloseModal3 = () => {
    setOpenModal3(false);
    setEmpNO([]);
  };
  //เปิด - ปิด modal v.4 Edit OK end
  const [openModal4, setOpenModal4] = useState(false);
  const handleOpenModal4 = () => {
    setOpenModal4(true);
  };
  const [dataOK_qty, setDataOK_qty] = useState<any>("");
  const [dataNG_qty, setDataNG_qty] = useState<any>("");

  const editOK_NG = async () => {
    const { data, error } = await supabase
      .from("Production_history")
      .update({ OK_qty: dataOK_qty, NG_qty: dataNG_qty })
      .eq("PD_key", localStorage.getItem("PD_key"));
    if (data) {
      console.log("Susscess Edit", data);
    } else {
      console.log("Error Edit", error);
    }
    setOpenModal4(false);
  };
  const handleCloseModal4 = () => {
    setOpenModal4(false);
  };

  //เปิด - ปิด modal v.5 Edit NG end
  const [openModal5, setOpenModal5] = useState(false);
  const handleOpenModal5 = () => {
    setOpenModal5(true);
  };
  const handleCloseModal5 = () => {
    setOpenModal5(false);
  };

  const date: any = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let Hours = ("0" + date.getHours()).slice(-2);
  let Min = ("0" + date.getMinutes()).slice(-2);
  let sec = ("0" + date.getSeconds()).slice(-2);
  const timestamps = date.getTime();

  // console.log(timestamps);

  let checkdates = `${year}-${month}-${day}`;
  let currentDate = `${day}-${month}-${year}`;
  const times: any = `${Hours}:${Min}:${sec}`;
  const [timestamp01, setTimestamp01] = useState<any>("");
  const [timestamp02, setTimestamp02] = useState<any>("");

  // console.log("T1", timestamp01);
  // console.log("T2", timestamp02);
  // console.log("T3", timestamp03);

  const diffs: any = Math.ceil(
    ((timestamp02 - timestamp01) * 60) / 3600 / 1000
  );
  // console.log(diffs);
  const upProductionUnitGroup = async () => {
    const { data, error } = await supabase
      .from("Production_unit_group")
      .update({
        status_run: "Online",
        PD_key: localStorage.getItem("PD_key"),
        Work_order_id: localStorage.getItem("Work_order_id"),
      })
      .eq("PD_line", localStorage.getItem("Production_unit"));
  };
  const upProductionUnitGroupOffline = async () => {
    const { data, error } = await supabase
      .from("Production_unit_group")
      .update({ status_run: "Offline", PD_key: null, Work_order_id: null })
      .eq("PD_line", localStorage.getItem("Production_unit"));
  };

  const upBegin_Time = async () => {
    const { data, error } = await supabase
      .from("Production_history")
      .update({ Begin_time: times, Status: "Online" })
      .eq("PD_key", localStorage.getItem("PD_key"));

    if (data) {
      console.log(data);
    } else {
      console.log(error);
    }
  };
  const upStatusWoStart = async () => {
    const { data, error } = await supabase
      .from("Work_order")
      .update({ Status_working: "Online" })
      .eq("Work_order_id", localStorage.getItem("Work_order_id"));

    if (data) {
      console.log(data);
    }
    if (error) {
      console.log(error);
    }
  };

  const upStartTimeManpower = async () => {
    const { data, error } = await supabase
      .from("Manpower_record")
      .update({ start_datetime: times, TimeStamp_start: timestamps })
      .eq("PD_key", localStorage.getItem("PD_key"));

    if (data) {
      console.log(data);
    } else {
      console.log(error);
    }
  };

  const handlerClickStart = async () => {
    const Timestart1 = localStorage.getItem("TimeStart");
    if (Timestart1 === null) {
      setTimestart(times);
      upBegin_Time();
      upStatusWoStart();
      upStartTimeManpower();
      upProductionUnitGroup();
      localStorage.setItem("TimeStart", times);
      localStorage.setItem("timeStampStart", timestamps);
      localStorage.setItem("StatusOnline", "Online");
      playStart();
    }
  };
  const handlerContinue = async () => {
    const LocalTimeStart = localStorage.getItem("TimeStart");
    if (timePE === "" && LocalTimeStart != "") {
      await setTimePE(times);
      await setTimestamp02(timestamps);
      await setOpenModal1(false);
      await updateDowntimeStatusEND();
      await playThe_end_downtime();
    }
  };

  const PlyloadupEnd_time = async () => {
    const { data, error } = await supabase
      .from("Downtime_record")
      .update({
        End_time: times,
        Duration_downtime: diffs,
      })
      .is("End_time", null)
      .is("Duration_downtime", null);

    if (data) {
      console.log("Up End_time: ", data);
    } else {
      console.log("update ไปแล้วกับ eroor", error);
    }
    await setTimestamp01("");
    await setTimestamp02("");
    await setTimepause("");
    await setTimePE("");
    await setDetails("");
  };
  if (diffs > 0) {
    PlyloadupEnd_time();
  }

  //========== confirm Submit The End============================
  const [openConfrimEnd, setOpenConfrimEnd] = useState(false);
  const ConfrimEndOpen = () => setOpenConfrimEnd(true);
  const ConfrimEndClose = () => setOpenConfrimEnd(false);
  //-------------------------------------------------------------

  // รีเฟสเฉพาะอันนั้น;
  const [raltime, setRaltime] = useState<any>("");
  useEffect(() => {
    const intervalId = setInterval(() => {
      setRaltime(times);
    }, 1000);
    return () => clearInterval(intervalId);
  });
  //----up date PD_key to Manpower_record

  //I
  const [dataNGShow, setDataNGShow] = useState<any>(0);

  useEffect(() => {
    const FetchData = async () => {
      const { data, error, count } = await supabase
        .from("Production_history")
        .select("NG_qty", { count: "exact" })
        .filter("PD_key", "in", "(" + localStorage.getItem("PD_key") + ")");

      if (!error) {
        const sumNGqty = data.reduce((a, b) => a + b.NG_qty, 0);
        setDataNGShow(sumNGqty);
      }
    };
    FetchData();
  }, [dataNGShow]);

  const ReloadNG = () => {
    const FetchData = async () => {
      const { data, error, count } = await supabase
        .from("Production_history")
        .select("NG_qty", { count: "exact" })
        .filter("PD_key", "in", "(" + localStorage.getItem("PD_key") + ")");

      if (!error) {
        const sumNGqty = data.reduce((a, b) => a + b.NG_qty, 0);
        setDataNGShow(sumNGqty);
      }
    };
    FetchData();
  };

  //-----------subDelectNG
  useEffect(() => {
    const ProductionHistory = supabase
      .channel("custom-delete-NGShow")
      .on(
        "postgres_changes",
        { event: "UPDATE", schema: "public", table: "Production_history" },
        (payload) => {
          console.log("Change received!", payload);
          ReloadOK();
          ReloadNG();
          fetchProduction_history();
        }
      )
      .subscribe();
  }, [dataNGShow]);

  //===============
  useEffect(() => {
    const FetchData = async () => {
      const { data, error, count } = await supabase
        .from("Production_history")
        .select("OK_qty", { count: "exact" })
        .filter("PD_key", "in", "(" + localStorage.getItem("PD_key") + ")");

      if (!error) {
        const sumOKqty = data.reduce((a, b) => a + b.OK_qty, 0);
        setOK(sumOKqty);
      }
    };
    FetchData();
  }, [dataOK]);

  const ReloadOK = () => {
    const FetchData = async () => {
      const { data, error, count } = await supabase
        .from("Production_history")
        .select("OK_qty", { count: "exact" })
        .filter("PD_key", "in", "(" + localStorage.getItem("PD_key") + ")");

      if (!error) {
        const sumOKqty = data.reduce((a, b) => a + b.OK_qty, 0);
        setOK(sumOKqty);
      }
    };
    FetchData();
  };

  const ChOkay = async () => {
    const TimeCheck = localStorage.getItem("TimeStart");
    if (TimeCheck === null) {
      alert("Please press the start button first.");
    }
    if (TimeCheck != null) {
      const { data, error } = await supabase
        .from("Production_history")
        .select("OK_qty, Order_qty, NG_qty , Open_qty")
        .filter("PD_key", "in", "(" + localStorage.getItem("PD_key") + ")")
        .single();
      playOK();
      if (!error) {
        if (data) {
          if (data.OK_qty < data.Open_qty) {
            UpdateOK(Number(data.OK_qty + 1));
          }
        }
      } else {
        console.log(error);
      }
    }
  };

  const UpdateOK = async (OK_qty: Number) => {
    const { data, error } = await supabase
      .from("Production_history")
      .update({ OK_qty: OK_qty })
      .eq("PD_key", localStorage.getItem("PD_key"));
    ReloadOK();
  };

  const [showDaynight, setShowDaynight] = useState<any>([]);
  //================================================================
  console.log("showDaynight", showDaynight);
  console.log("times", times);
  const Timesplit = times.split(":");

  console.log("timeOtCel", timeOtCel);

  const celculeteOT = async () => {
    if (showDaynight === "Day") {
      if (times > "18:30:00") {
        const hourCelculete = (Timesplit[0] - 13) * 60;
        const minCelculete = Timesplit[1] - 30;
        setTimeOtCel(hourCelculete + minCelculete);
        setOT_operation("Y");
        console.log("celculeteOT Success OT YES");
      }
      if (times < "18:30:00") {
        setTimeOtCel(0);
        setOT_operation("N");
      }
    }
    if (showDaynight === "Night") {
      if (times > "06:30:00") {
        const hourCelculete = (Timesplit[0] - 10) * 60;
        const minCelculete = Timesplit[1] - 30;
        setTimeOtCel(hourCelculete + minCelculete);
      }
      if (times < "06:30:00") {
        setTimeOtCel(0);
      }
    }
  };

  //----------------------------------------------------------------
  useEffect(() => {
    const FetchDataCheck = async () => {
      setLoading(true);
      const { data, error }: any = await supabase
        .from("Production_history")
        .select("*")
        .eq("Work_order_id", localStorage.getItem("Work_order_id"))
        .eq("Production_unit", localStorage.getItem("Production_unit"))
        .eq("Production_date", checkdates)
        .limit(1); //ใช้แทน single
      if (data.length) {
        setShowDaynight(data[0].Shift);
        AutoUpdataPD_keyManpower();
      } else {
        console.log(error);
      }
    };
    FetchDataCheck();
    setLoading(false);
  }, []);

  const [dataProduction_history, setDataProduction_history] = useState<any>([]);
  // console.log(dataProduction_history);

  const fetchProduction_history = async () => {
    let { data, error } = await supabase
      .from("Production_history")
      .select("*")
      .eq("PD_key", localStorage.getItem("PD_key"));
    if (data?.length) {
      setDataProduction_history(data);
      setDataOK_qty(data[0].OK_qty);
      setDataNG_qty(data[0].NG_qty);

      console.log("data รวบยอดสุดท้าย", data);
    } else {
      console.log(error);
    }
  };

  // function NG --------------------------------------------------------------
  const [openAdd, setOpenAdd] = useState(false);
  const handleOpenNG = () => {
    const TimeCheck = localStorage.getItem("TimeStart");
    if (TimeCheck === null) {
      alert("Please press the start button first.");
    }
    if (TimeCheck != null) {
      setOpenAdd(true);
      playNG();
    }
  };
  const handleCloseNG = () => setOpenAdd(false);
  const [selectNG, setNG] = useState<String>("");
  const [selectQty, setQty] = useState<Number>(1);
  const [ShowCodeNG, setCode] = useState<any>([]);
  const [TextError, SetText] = useState<any>("");
  const [TextError1, SetText1] = useState<any>("");
  const [TextConfirm, SetConfirm] = useState("");
  const [ngAll, setNgAll] = useState<Number>(0);
  const NGsplit = selectNG.split(":");
  useEffect(() => {
    const FetchData = async () => {
      const { data } = await supabase.from("NgCode").select("*");
      setCode(data);
      console.log(data);
    };
    FetchData();
  }, []);

  //sumNG Num
  const FetchDT = async () => {
    const { data, error, count } = await supabase
      .from("NG_record")
      .select("NG_qty", { count: "exact" })
      .filter("PD_key", "in", "(" + localStorage.getItem("PD_key") + ")");
    if (!error) {
      const sumNGqty: any = data.reduce((a, b) => a + b.NG_qty, 0);
      await setNgAll(sumNGqty);
      if (ngAll < sumNGqty) {
        await ngProduction(Number(sumNGqty));
      }
    }
  };

  const ngProduction = async (ngAll: Number) => {
    const { data, error } = await supabase
      .from("Production_history")
      .update({ NG_qty: ngAll })
      .eq("PD_key", localStorage.getItem("PD_key"));
    if (data) {
      console.log(data);
    } else {
      console.log(error);
    }
  };

  const ChNgempty = async () => {
    if (!selectNG || !selectQty || !ngCompunent) {
      return SetText(<NgError />);
    } else {
      SetText("");
      await ChNgCode();
      await playNG_Success();
    }
  };

  const ChNgCode = async () => {
    const { data, error } = await supabase
      .from("NG_record")
      .select("id, NG_qty")
      .filter("NG_code", "in", "(" + NGsplit[0] + ")")
      .filter("PD_key", "in", "(" + localStorage.getItem("PD_key") + ")")
      .in("Part_name", [ngCompunent, textOther])
      .limit(1);

    if (!error) {
      if (data.length > 0) {
        UpdateNg(Number(data[0]?.id), Number(data[0]?.NG_qty + selectQty));
      } else {
        await AddNg();
      }
    } else {
      console.log("ChNgCode", error);
    }
  };
  const AddNg = async () => {
    setLoading(true);
    if (textOther === "") {
      const { data, error } = await supabase.from("NG_record").insert([
        {
          Work_order_id: localStorage.getItem("Work_order_id"),
          NG_code: NGsplit[0],
          NG_description: NGsplit[1],
          NG_qty: selectQty,
          Production_date: checkdates,
          Production_unit: localStorage.getItem("Production_unit"),
          PD_key: localStorage.getItem("PD_key"),
          Item_number: localStorage.getItem("ItemNumber"),
          Part_name: ngCompunent,
        },
      ]);
      if (data) {
        console.log("NG Insert Success :", data);
      } else {
        console.log("Insert Error", error);
      }
    }
    if (ngCompunent === "Other") {
      const { data, error } = await supabase.from("NG_record").insert([
        {
          Work_order_id: localStorage.getItem("Work_order_id"),
          NG_code: NGsplit[0],
          NG_description: NGsplit[1],
          NG_qty: selectQty,
          Production_date: checkdates,
          Production_unit: localStorage.getItem("Production_unit"),
          PD_key: localStorage.getItem("PD_key"),
          Item_number: localStorage.getItem("ItemNumber"),
          Part_name: textOther,
        },
      ]);
      if (data) {
        console.log("NG Insert Success :", data);
      } else {
        console.log("Insert Error", error);
      }
    }

    await FetchDT();
    await setNG("");
    await setQty(1);
    await ReloadNG();
    // await ngProduction();
    await setNgCompunent("");
    await setTextOther("");
    await handleCloseNG();

    await setLoading(false);
    // console.log(data);
  };

  const UpdateNg = async (NgId: number, SumNgPcs: number) => {
    if (NgId || SumNgPcs) {
      const { data, error } = await supabase
        .from("NG_record")
        .update({ NG_qty: SumNgPcs })
        .eq("id", NgId);
      if (!error) {
        console.log("UPdate NG Success :");
        await FetchDT();
        await setNG("");
        await setQty(1);
        await ReloadNG();
        await handleCloseNG();
      }
    }
  };

  // เพิ่มเสียงกด -----------------------------------
  const [playOK, soundOK] = useSound("/OK.mp3");
  const [playNG, soundNG] = useSound("/NG.mp3");
  const [playStart, soundStart] = useSound("/Start.mp3");
  const [playPause, soundPause] = useSound("/Pause.mp3");
  const [playStop, soundStop] = useSound("/Stop.mp3");
  const [playNG_Success, soundNG_Success] = useSound("/NG_Success.mp3");
  const [playThe_end_downtime, soundThe_end_downtime] = useSound(
    "/The_end_downtime.mp3"
  );
  const [playOn_Downtime, soundOn_Downtime] = useSound("/On_Downtime.mp3");
  const [playStop_complete, soundStop_complete] =
    useSound("/Stop_complete.mp3");
  // ------------------------------------------------------------

  const fetchRuntime = async () => {
    const { data, error } = await supabase
      .from("Downtime_record")
      .select("Duration_downtime")
      .filter("PD_key", "in", "(" + localStorage.getItem("PD_key") + ")")
      .neq("Downtime_code", "Z01")
      .neq("Downtime_code", "D01");

    if (data) {
      setDataduDownTime(data.map((files) => files.Duration_downtime));
    }
  };
  //========================================

  // กด submit Stop ครั้งสุดท้าย
  const [timeStart_stamp, setTimeStart_stamp] = useState<any>("");
  // console.log('timeStart_stamp',timeStart_stamp);
  const fatchTimeStart_stamp = async () => {
    setTimeStart_stamp(localStorage.getItem("timeStampStart"));
  };
  const [timestampEnd, setTimestampEnd] = useState<any>("");

  const handlerSubmitStop = async () => {
    await setTimestampEnd(timestamps);
    await celculeteOT();
    await upTrigger();
    await upStatusWoStop();
    await upProductionUnitGroupOffline();
    await upWork_order_id();
    await calculateMan();
  };
  useEffect(() => {
    const UpManpowerAutoduration = async () => {
      if (timestampEnd != "") {
        const { data, error } = await supabase
          .from("Manpower_record")
          .update({ end_datetime: times, TimeStamp_end: timestampEnd })
          .eq("PD_key", localStorage.getItem("PD_key"))
          .is("end_datetime", null);
        if (data) {
          console.log("UpManpowerAutoduration Success", data);
        } else {
          console.log("UpManpowerAutoduration Error", error);
        }
      }
    };
    UpManpowerAutoduration();
  }, [timestampEnd]);

  useEffect(() => {
    const UpProductionAutoduration = async () => {
      if (diffsStop > 0) {
        const { data, error } = await supabase
          .from("Production_history")
          .update({
            End_time: times,
            Duration_time: diffsStop,
            OP_confirm_after: localStorage.getItem("emp_no"),
            Manpower_number: Manpowers1.length,
            Runtime: RuntimeData,
            Cycle_time: CycleTime.toFixed(4),
            Availability_percent: Ap.toFixed(4),
            Quality_percent: Qualitypercen.toFixed(4),
            Status: "Offline",
            Standard_time: run_standard,
            Performance_percent: Performance_Percen.toFixed(4),
            OBU_status: "Waiting_transfer",
            Open_qty: calculeteOpen_qty,
            OEE_percent: calculateOEE.toFixed(4),
            OT_duration: timeOtCel,
            OT_operation: ot_operations,
            Performance_permanp: Performance_permanpower.toFixed(4),
          })
          .eq("PD_key", localStorage.getItem("PD_key"))
          .is("End_time", null);

        if (data) {
          console.log("UpProductionAutoduration Success", data);
        } else {
          console.log("UpProductionAutoduration Error", error);
        }
      }
    };
    UpProductionAutoduration();
  }, [timestampEnd]);

  const [dataComplete_qty, setDataComplete_qty] = useState<number>(0);
  const [dataOpen_qty, setDataOpen_qty] = useState<number>(0);
  const [NGdata_qty, setNGdata_qty] = useState<number>(0);
  const fetchWO = async () => {
    let { data: Work_order, error } = await supabase
      .from("Work_order")
      .select("*")
      .eq("Work_order_id", localStorage.getItem("Work_order_id"));
    if (Work_order) {
      setDataComplete_qty(Work_order[0].Complete_qty);
      setDataOpen_qty(Work_order[0].Open_qty);
      setNGdata_qty(Work_order[0].NG_qty);
    }
  };
  const calculeteComplete_qty: number = dataComplete_qty + dataOK_qty;
  // console.log("calculeteComplete_qty", calculeteComplete_qty);
  const calculeteOpen_qty: number = dataOpen_qty - dataOK_qty;
  // console.log("calculeteOpen_qty", calculeteOpen_qty);
  const calculeteNG_qty = NGdata_qty + dataNG_qty;
  // console.log("calculeteNG_qty", calculeteNG_qty);

  const router = useRouter();

  const upStatusWoStop = async () => {
    const { data, error } = await supabase
      .from("Work_order")
      .update({ Status_working: "Offline" })
      .eq("Work_order_id", localStorage.getItem("Work_order_id"));

    if (data) {
      console.log("update Status WO Success", data);
    }
    if (error) {
      console.log(error);
    }
  };

  const upTrigger = async () => {
    const { data, error } = await supabase.from("trigger_dairy_report").insert([
      {
        PD_key: localStorage.getItem("PD_key"),
        status_trigger: "Waiting_transfer",
      },
    ]);
    if (data) {
      console.log("upTrigger success", data);
    }
    if (error) {
      console.log("upTrigger error", error);
    }
  };

  const upWork_order_id = async () => {
    const { data, error } = await supabase
      .from("Work_order")
      .update({
        Complete_qty: calculeteComplete_qty,
        Open_qty: calculeteOpen_qty,
        NG_qty: calculeteNG_qty,
      })
      .eq("Work_order_id", localStorage.getItem("Work_order_id"));
    if (!error) {
      console.log("UpDateWork_order_id Success", data);
      await playStop_complete();
      // localStorage.removeItem("Work_order_id");
      localStorage.removeItem("timeStampStart");
      localStorage.removeItem("Production_unit");
      localStorage.removeItem("PD_key");
      localStorage.removeItem("CheckWo");
      localStorage.removeItem("NG_qty_WO");
      localStorage.removeItem("TimeStart");
      localStorage.removeItem("ItemNumber");
      localStorage.removeItem("Open_qty");
      localStorage.removeItem("Complete_qty");
      localStorage.removeItem("StatusOnline");
      await router.push("/draw");
    } else {
      console.log("UpDateWork_order_id Error", error);
    }
  };
  // เวลา พักเที่ยงที่จะเอามาลบ ออก ===================================
  const [dataBreakTime, setDataBreakTime] = useState<any>("");
  console.log("dataBreakTime", dataBreakTime);

  const fetchdataBreakTime = async () => {
    let { data: Downtime_record, error } = await supabase
      .from("Downtime_record")
      .select("Duration_downtime")
      .filter("Downtime_description", "in", "(พักเที่ยง)");
    if (Downtime_record) {
      setDataBreakTime(
        Downtime_record.map((res: any) => res.Duration_downtime)
      );
    }
    if (error) {
      console.log("Downtime_description ERROR !!", error);
    }
  };

  // ----------------------------------------------------------------
  //=========== run standard , PDU คือจำนวนManpower Defualt
  const [run_standard, setrun_standard] = useState<number>(0);
  const [pdu, setPdu] = useState<any>("");
  console.log("PDU", pdu);

  console.log("cct_standard", run_standard);

  useEffect(() => {
    setPdu(localStorage.getItem("PDU"));
    const fetchdataBom = async () => {
      let { data, error } = await supabase
        .from("Production_history")
        .select("Standard_time")
        .eq("PD_key", localStorage.getItem("PD_key"));

      if (data?.length) {
        setrun_standard(data[0].Standard_time);
        console.log("fetchdataStandard_time Success", data);
      } else {
        console.log("fetchdataStandard_time Error", error);
      }
    };
    fetchdataBom();
  }, []);

  // --------------------------------------------------------------
  //=======================คำนวนเวลาการทำงานของแต่ละคน===============
  const calculateMan = async () => {
    let { data, error } = await supabase.rpc("calculatetimeman");
    if (error) console.error(error);
    else console.log(data);
  };
  // --------------------------------------------------------------

  const diffsStop: any = Math.ceil(
    ((timestampEnd - timeStart_stamp) * 60) / 3600 / 1000
  );
  // console.log("diffsStop", diffsStop);

  //=======================RunTime ============
  //========= count fetchRuntime =============
  const [dataduDownTime, setDataduDownTime] = useState<any>([]);
  // console.log("DurationDownTime", dataduDownTime);
  let sum: number = 0;
  for (let item of dataduDownTime) {
    sum += item;
  }
  console.log("SumDowntime", sum);
  //================= คือ Downtime ทั้งหมด + กัน แล้ว - เวลาในการทำงานทั้งหมด(duration time) ====
  const RuntimeData: number = diffsStop - sum;
  console.log("RuntimeData", RuntimeData);
  //============================================

  //========= count Cycle time ===============
  const CycleTime = RuntimeData / (dataOK + dataNGShow);
  console.log("CycleTime", CycleTime.toFixed(2));

  //------------------------------------------------------------
  //================= Availability_percent =======================
  const Ap = RuntimeData / diffsStop;
  console.log("Availability_percent", Ap);
  //------------------------------------------------------------
  //=========Quality_percent=====================================
  const Qualitypercen = dataOK / (dataOK + dataNGShow);
  console.log("Qualitypercen", Qualitypercen);

  //------------------------------------------------------------
  //============Performance_Percen=========================
  const Runtime_sec = RuntimeData * 60;
  console.log("Runtime_sec", Runtime_sec);

  const Run_man = run_standard * pdu; //PDU คือ จำนวนสแตนดาสคนที่จะเอามาคูณ
  console.log("Run_man", Run_man);

  const Performance_Percen = (Run_man * (dataOK + dataNGShow)) / Runtime_sec;
  console.log("Performance_deff", Performance_Percen);

  //-----------------
  //============ calculate OEE% ============
  const calculateOEE: number = Ap * Qualitypercen * Performance_Percen;
  console.log("calculateOEE", calculateOEE);

  //----------------------------------------
  //==== duration Manpower =================
  const [empNO, setEmpNO] = useState<any>([]);
  console.log("empNO", empNO);

  const Manpower: any = empNO.map((ress: { emp_no: number }) => ress.emp_no);
  const Manpowers1: any = [...new Set(Manpower)];
  // console.log(Manpowers1.length);
  // console.log("manpowerNum", Manpowers1);

  const Performance_permanpower =
    run_standard / (Runtime_sec / ((dataOK + dataNGShow) * Manpowers1.length));

  const fetchManpower = async () => {
    let { data, error } = await supabase
      .from("Manpower_record")
      .select("emp_no")
      .eq("PD_key", localStorage.getItem("PD_key"));
    if (data) {
      console.log("fetchManpower Success", data);
      setEmpNO(data);
    } else {
      console.log("fetchManpowerError", error);
    }
  };
  //========================================
  //=========== confirm The End ======================
  const handleConfirmEnd = (event: any) => {
    event.preventDefault();
    fetchCheckPassEnd();
  };
  const [passConfrimEnd, setPassConfrimEnd] = useState("");

  const fetchCheckPassEnd = async () => {
    await setLoading(true);
    const { data, error } = await supabase
      .from("userID")
      .select("*")
      .eq("emp_name", localStorage.getItem("userName"))
      .eq("pass", passConfrimEnd)
      .limit(1); //ใช้แทน single
    if (!error) {
      if (data.length > 0) {
        console.log("Confirm Success", data);
        // await alert("Confirm Success");
        await handlerSubmitStop();
      }
      if (data.length === 0) {
        alert("Password is incorrect");
      }
    } else {
      console.log("Password is incorrect", error);
    }
    await setLoading(false);
  };
  //====================get total - Open_qty ===============================
  const [wo_OpenQty, setWo_OpenQty] = useState<any>("");
  // console.log("wo_OpenQty", wo_OpenQty);
  useEffect(() => {
    const WorkOrder = supabase
      .channel("custom-update-wo-open-qty")
      .on(
        "postgres_changes",
        { event: "UPDATE", schema: "public", table: "Work_order" },
        (payload) => {
          console.log("Change received! up date WorkOder ", payload);
          ReloadfetchWO_OpenQTY();
        }
      )
      .subscribe();
  }, []);

  const ReloadfetchWO_OpenQTY = async () => {
    let { data: Work_order, error } = await supabase
      .from("Work_order")
      .select("Open_qty")
      .eq("Work_order_id", localStorage.getItem("Work_order_id"));
    if (Work_order) {
      console.log("Open_qty", Work_order);
      setWo_OpenQty(Work_order.map((res: any) => res.Open_qty));
    } else {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetdataWO_OpenQTY = async () => {
      let { data: Work_order, error } = await supabase
        .from("Work_order")
        .select("Open_qty")
        .eq("Work_order_id", localStorage.getItem("Work_order_id"));
      if (Work_order) {
        console.log("Open_qty", Work_order);
        setWo_OpenQty(Work_order.map((res: any) => res.Open_qty));
      } else {
        console.log(error);
      }
    };
    fetdataWO_OpenQTY();
  }, []);
  //-----------------------------------------------------
  //============== select Component part ==============
  const [bom_ract, setBom_ract] = useState<any>([]);
  const [itemNumber, setItemNumber] = useState<any>("");
  console.log("itemNumber", itemNumber);

  const [ngCompunent, setNgCompunent] = useState<any>("");
  console.log("ngCompunent", ngCompunent);

  console.log("bom_ract", bom_ract);

  useEffect(() => {
    const fetchdataBOM_ract = async () => {
      let { data, error } = await supabase
        .from("BOM_ract")
        .select("*")
        .eq("master_part", localStorage.getItem("ItemNumber"));
      if (data) {
        setBom_ract(data);
        setItemNumber(localStorage.getItem("ItemNumber"));
        console.log("fetchdataBOM_ract");
      }
      if (error) {
        console.log("fetchdataBOM_ract", error);
      }
    };
    fetchdataBOM_ract();
  }, []);
  const [textOther, setTextOther] = useState<any>("");
  console.log("textOther", textOther);

  const OtheText = () => {
    if (ngCompunent === "Other") {
      return (
        <div>
          <br />
          <TextField
            fullWidth
            label={"กรุณากรอกข้อมูล"}
            value={textOther}
            onChange={(event) => setTextOther(event.target.value)}
          ></TextField>
        </div>
      );
    }
  };
  //----------------------------------------------------

  //ทำเช็ค useEffect ทำงานระหว่าง cliant กับ server **ต้องทำความเข้าใจ useEffect เพิ่มเติม
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  if (loading)
    return (
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography sx={{ fontSize: 50 }}>Loading...</Typography>
        <CircularProgress />
      </Box>
    ); //รอโหลดข้อมูล
  if (loading1)
    return (
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography sx={{ fontSize: 50 }}>Loading1...</Typography>
        <CircularProgress />
      </Box>
    ); //รอโหลดข้อมูล
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
                <Box
                  component="ul"
                  aria-labelledby="category-a"
                  sx={{ height: 40, pl: 0 }}
                >
                  Date : {currentDate} <br /> Name station :{" "}
                  {localStorage.getItem("Production_unit")} <br /> Shift :
                  {showDaynight}
                </Box>
              </Item>
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
                <Box
                  component="ul"
                  aria-labelledby="category-a"
                  sx={{ height: 55, pl: 0 }}
                >
                  <Typography>{times}</Typography>
                  <Typography>
                    TimeStart : {localStorage.getItem("TimeStart")}
                  </Typography>
                  {/* <Typography>TimePause : {timepause}</Typography>
                  <Typography>TimePasue-End : {timePE}</Typography> */}
                  <Typography>Timestop : {timestop}</Typography>
                  {/* <Typography>DownTime : {diffs}m.</Typography> */}
                </Box>
              </Item>
            </Grid>

            <Grid xs={4.5} lg={4.5}>
              <Button
                sx={{ height: "100%", width: "100%", bgcolor: "#7CFC00" }}
                onClick={ChOkay}
                variant="contained"
                color="inherit"
              >
                {/* <Arcade /> */}
                <Typography
                  // onClick={testClick}
                  sx={{ p: 1, fontSize: "60px", color: "#000000" }}
                >
                  OK
                </Typography>
                <Typography
                  sx={{
                    display: "flex",

                    color: "#000000",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  variant="h4"
                >
                  {dataOK}
                </Typography>
                <Typography
                  sx={{
                    display: "flex",
                    color: "#000000",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  variant="h4"
                >
                  /
                </Typography>
                <Typography
                  sx={{
                    display: "flex",
                    color: "#000000",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  variant="h4"
                >
                  {wo_OpenQty}
                </Typography>
                <Typography sx={{ p: 1 }}>
                  <Loadings />
                </Typography>
              </Button>
            </Grid>
            <Grid xs={4.5} lg={4.5}>
              <Button
                variant="contained"
                color="inherit"
                sx={{ height: "100%", width: "100%", bgcolor: "#FF0000" }}
                onClick={handleOpenNG}
              >
                <Typography sx={{ p: 1, fontSize: "60px", color: "#000000" }}>
                  NG
                </Typography>
                <Typography
                  sx={{
                    display: "flex",

                    color: "#000000",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  variant="h4"
                >
                  {dataNGShow}
                </Typography>
                <Typography
                  sx={{
                    display: "flex",
                    color: "#000000",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  variant="h4"
                >
                  /
                </Typography>
                <Typography
                  sx={{
                    display: "flex",
                    color: "#000000",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  variant="h4"
                >
                  {wo_OpenQty}
                </Typography>
                <Typography sx={{ p: 1 }}>
                  <LoadingsNG />
                </Typography>
              </Button>
            </Grid>
          </Grid>
          <Grid container xs={3} md={12} lg={12} spacing={2}>
            <Grid xs={3}>
              <Item sx={{ height: "100%", width: "100%" }}>
                <Box
                  id="category-c"
                  sx={{
                    fontSize: "28px",
                    textTransform: "uppercase",
                    color: "error.main",
                    p: 1,
                  }}
                >
                  Item Oder
                </Box>
                <Typography
                  sx={{
                    fontSize: "18px",
                  }}
                >
                  WorkOder ID : {localStorage.getItem("Work_order_id")}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "18px",
                  }}
                >
                  Item : {localStorage.getItem("ItemNumber")}
                </Typography>
                PD Key: {localStorage.getItem("PD_key")}
              </Item>
            </Grid>
            <Grid xs={3} lg={3}>
              <Button
                sx={{
                  height: 220,
                  width: "100%",
                  fontSize: "26px",
                  textTransform: "uppercase",
                  color: "#000000",
                  lineHeight: 5,
                  bgcolor: "#98FB98",
                  p: 1,
                }}
                variant="outlined"
                onClick={handlerClickStart}
              >
                Start
                <PlayCircleOutlineIcon fontSize="large" />
              </Button>
            </Grid>
            <Grid xs={3} lg={3}>
              <Button
                sx={{
                  height: "100%",
                  width: "100%",
                  fontSize: "26px",
                  textTransform: "uppercase",
                  color: "#000000",
                  lineHeight: 5,
                  bgcolor: "#FFD700",
                }}
                variant="outlined"
                onClick={handleOpenModal}
              >
                Pause <PauseCircleOutlineIcon fontSize="large" />
              </Button>
            </Grid>
            <Grid xs={3} lg={3}>
              <Button
                sx={{
                  height: "100%",
                  width: "100%",
                  fontSize: "26px",
                  textTransform: "uppercase",
                  color: "#000000",
                  textAlign: "center",
                  lineHeight: 5,
                  bgcolor: "#FA8072",
                }}
                variant="outlined"
                onClick={handleOpenModal3}
              >
                Stop <StopCircleIcon fontSize="large" />
              </Button>
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

        <Editpeople />
        {/* modal Pause Downtime */}
        <Modal
          hideBackdrop
          open={openModal}
          onClose={handleCloseModal}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
        >
          <Box sx={{ ...style, width: 1080, height: 780 }} component="form">
            <Typography variant="h1">Down Time</Typography>

            <Typography sx={{ fontSize: 30 }}>Time pause : {times}</Typography>
            <InputLabel sx={{ fontSize: 30 }}>Detail</InputLabel>
            <Select
              label="Detals"
              fullWidth
              value={details}
              onChange={(event) => setDetails(event.target.value)}
            >
              <MenuItem sx={{ fontSize: 28 }} value="">
                <em>None</em>
              </MenuItem>
              {datamenu.map((menus: any) => (
                <MenuItem
                  key={menus.code}
                  sx={{ fontSize: 28 }}
                  value={menus.code + ":" + menus.desc_th}
                >
                  {menus.code} : {menus.desc_th} : {menus.desc_china}
                </MenuItem>
              ))}
            </Select>
            <div>
              <br />
            </div>
            {TextError1}

            <Stack
              direction="row"
              justifyContent="space-around"
              alignItems="center"
              spacing={12}
              sx={{ m: 1, p: 5 }}
            >
              <Item
                sx={{ width: 150, height: 60, p: 2.5, color: "success.main" }}
                onClick={handleSubmitModal}
              >
                <Typography onClick={start}>SUBMIT</Typography>
              </Item>
              <Item
                sx={{ width: 150, height: 60, p: 2.5, color: "red" }}
                onClick={handleCloseModal}
              >
                <Typography>CLOSE</Typography>
              </Item>
            </Stack>
          </Box>
        </Modal>
        {/* modal รอกดปุ่ม start */}
        <Modal
          hideBackdrop
          open={openModal1}
          onClose={handleCloseModal1}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
        >
          <Box sx={{ ...style1, width: 1080, height: 780 }} component="form">
            <Typography style={{ fontSize: "80px" }}>Down Time</Typography>

            <Typography style={{ fontSize: "30px" }}>
              please push start when end of downtime
            </Typography>
            <Typography style={{ fontSize: "30px" }}>
              Detail : {menusplit[1]}
            </Typography>
            <div style={{ textAlign: "center" }}>
              <Typography style={{ fontSize: "50px" }}>
                Timer Downtime
              </Typography>
              <div style={{ fontSize: "100px" }}>
                <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:
                <span>{seconds}</span>
              </div>
              <Typography style={{ fontSize: "30px" }}>
                {isRunning ? "Running" : "Not running"}
              </Typography>
              <Button
                sx={{
                  width: 250,
                  height: 150,
                  p: 2.5,
                  color: "#000000",
                  bgcolor: "#7CFC00",
                  m: 5,
                }}
                variant="contained"
                color="inherit"
                onClick={handlerContinue}
              >
                <Typography
                  sx={{
                    fontSize: "30px",
                    textAlign: "center",
                    textTransform: "uppercase",
                    lineHeight: 2,
                  }}
                >
                  Continue
                </Typography>
              </Button>
            </div>
          </Box>
        </Modal>
        {/* Modal stop push confirm */}
        <Modal
          hideBackdrop
          open={openModal3}
          onClose={handleCloseModal3}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
        >
          <Box sx={{ ...style, width: 1080, height: 780 }} component="form">
            <Typography sx={{ fontSize: 50 }}>Stop</Typography>

            <Typography sx={{ fontSize: 26 }}>Time Stop : {times}</Typography>

            <Box
              component="span"
              display="flex"
              justifyContent="right"
              alignItems="center"
            >
              <Button
                sx={{ p: 1, m: 1, bgcolor: "#7CFC00", color: "#000000" }}
                onClick={handleOpenModal4}
                variant="contained"
                color="inherit"
              >
                Edit OK_qty
              </Button>
              <Button
                sx={{ p: 1, m: 1, bgcolor: "red", color: "#000000" }}
                onClick={handleOpenModal5}
                variant="contained"
                color="inherit"
              >
                Edit NG_qty
              </Button>
            </Box>
            <div>
              <Grid xs={12} lg={12} container spacing={2}>
                <Grid xs={12} lg={12}>
                  <TableContainer component={Paper}>
                    <Table
                      style={{ width: "auto", tableLayout: "auto" }}
                      aria-label="simple table"
                    >
                      <TableHead>
                        <TableRow>
                          <TableCell align="right">PD_key</TableCell>
                          <TableCell align="right">Work_order_id</TableCell>
                          <TableCell align="right">
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Item_number&nbsp;&nbsp;&nbsp;&nbsp;
                          </TableCell>
                          <TableCell align="right">Production_unit</TableCell>
                          <TableCell align="right">Production_date</TableCell>
                          <TableCell align="right">OK_qty</TableCell>
                          <TableCell align="right">NG_qty</TableCell>
                          <TableCell align="right">Open_qty</TableCell>
                          <TableCell align="right">Shift</TableCell>
                          <TableCell align="right">Order_qty</TableCell>
                          <TableCell align="right">Begin_time</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {dataProduction_history.map((rowss: any) => (
                          <TableRow
                            key={rowss.PD_key}
                            sx={{
                              "&:last-child td, &:last-child th": {
                                border: 0,
                              },
                            }}
                          >
                            <TableCell align="right">{rowss.PD_key}</TableCell>
                            <TableCell align="right">
                              {rowss.Work_order_id}
                            </TableCell>
                            <TableCell align="right" style={{ width: 250 }}>
                              {rowss.Item_number}
                            </TableCell>
                            <TableCell align="right">
                              {rowss.Production_unit}
                            </TableCell>
                            <TableCell align="right">
                              {rowss.Production_date}
                            </TableCell>
                            <TableCell align="right">{rowss.OK_qty}</TableCell>
                            <TableCell align="right">{rowss.NG_qty}</TableCell>
                            <TableCell align="right">
                              {rowss.Open_qty}
                            </TableCell>
                            <TableCell align="right">{rowss.Shift}</TableCell>
                            <TableCell align="right">
                              {rowss.Order_qty}
                            </TableCell>
                            <TableCell align="right">
                              {rowss.Begin_time}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Grid>

                <Grid xs={12} lg={12}>
                  <TablePeople />
                </Grid>
              </Grid>
            </div>

            <Stack
              direction="row"
              justifyContent="space-around"
              alignItems="center"
              spacing={12}
              sx={{ m: 2 }}
            >
              <Item
                sx={{ width: 150, height: 60, p: 2.5, color: "success.main" }}
                onClick={ConfrimEndOpen}
                //
              >
                SUBMIT
              </Item>
              <Item
                sx={{ width: 150, height: 60, p: 2.5, color: "red" }}
                onClick={handleCloseModal3}
              >
                CLOSE
              </Item>
            </Stack>
          </Box>
        </Modal>

        {/* Modal Edit OK_qty Time Stop */}
        <Modal
          hideBackdrop
          open={openModal4}
          onClose={handleCloseModal4}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
        >
          <Box sx={{ ...style, width: "auto" }} component="form">
            <h2 text-align="center" id="child-modal-title">
              Edit OK_qty
            </h2>
            <Typography>Time Edit : {times}</Typography>
            <br />
            {/* <InputLabel>OK_qty</InputLabel> */}

            <Box>
              <TextField
                label="OK_qty"
                id="outlined-size-normal"
                type="number"
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
                value={dataOK_qty}
                onChange={(event) => setDataOK_qty(event.target.value)}
              />
            </Box>

            <Stack
              direction="row"
              justifyContent="space-around"
              alignItems="center"
              spacing={12}
              sx={{ m: 1, p: 5 }}
            >
              <Item
                sx={{ width: 150, height: 60, p: 2.5, color: "success.main" }}
                onClick={editOK_NG}
              >
                <Typography>SUBMIT</Typography>
              </Item>
              <Item
                sx={{ width: 150, height: 60, p: 2.5, color: "red" }}
                onClick={handleCloseModal4}
              >
                <Typography>CLOSE</Typography>
              </Item>
            </Stack>
          </Box>
        </Modal>
        {/* ------------------- */}

        {/* Modal Edit NG_qty Time Stop */}
        <Modal
          hideBackdrop
          open={openModal5}
          onClose={handleCloseModal5}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
        >
          <Box sx={{ ...style, height: 580, width: 1000 }} component="form">
            <Typography variant="h4"> Edit NG_qty</Typography>

            {/* <InputLabel>OK_qty</InputLabel> */}
            <Box
              component="span"
              display="flex"
              justifyContent="right"
              alignItems="center"
            >
              <Button
                sx={{ p: 1, m: 1, bgcolor: "#FF0000", color: "#000000" }}
                variant="contained"
                color="inherit"
                onClick={handleCloseModal5}
              >
                CLOSE
              </Button>
            </Box>
            <Box>
              <Tablework3 />
            </Box>
          </Box>
        </Modal>

        {/* Modal NG */}
        <Modal
          hideBackdrop
          open={openAdd}
          onClose={handleCloseNG}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
        >
          <Box sx={{ ...style, width: 1080, height: 780 }} component="form">
            <Typography variant="h1">NG Product</Typography>

            <Typography sx={{ fontSize: 30 }}>NG Code: </Typography>

            <Select
              label="Detals"
              fullWidth
              value={selectNG}
              onChange={(event) => setNG(event.target.value)}
            >
              {ShowCodeNG.map((menus: any) => (
                <MenuItem
                  key={menus.code}
                  sx={{ fontSize: 28 }}
                  value={menus.code + ":" + menus.desc + ":"}
                >
                  <Stack
                    direction="row"
                    justifyContent="space-around"
                    alignItems="center"
                    spacing={12}
                    sx={{ m: 1, p: 1 }}
                  >
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        fontSize: 26,
                        color: "#FF0000",
                      }}
                    >
                      {menus.code}
                    </Typography>
                    <Typography sx={{ fontSize: 24, color: "#000000" }}>
                      {menus.desc}
                    </Typography>
                    <Typography sx={{ fontSize: 24, color: "#000000" }}>
                      {menus.desc_china}
                    </Typography>
                  </Stack>
                </MenuItem>
              ))}
            </Select>
            <Typography sx={{ fontSize: 30 }}>NG Part Component: </Typography>
            <Select
              fullWidth
              value={ngCompunent}
              onChange={(event) => setNgCompunent(event.target.value)}
            >
              <MenuItem sx={{ fontSize: 30 }} value="">
                <em>NOne</em>
              </MenuItem>
              <MenuItem sx={{ fontSize: 30 }} value={"Other"}>
                <em>Other</em>
              </MenuItem>

              <MenuItem sx={{ fontSize: 30 }} value={itemNumber}>
                <Stack
                  direction="row"
                  justifyContent="space-around"
                  alignItems="center"
                  spacing={12}
                  sx={{ m: 1, p: 1 }}
                >
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      fontSize: 26,
                      color: "#FF0000",
                    }}
                  >
                    {itemNumber}
                  </Typography>
                  <Typography sx={{ fontSize: 24, color: "#00BFFF" }}>
                    Finish Good
                  </Typography>
                </Stack>
              </MenuItem>

              {bom_ract.map((menus: any) => (
                <MenuItem key={menus.component} value={menus.component}>
                  <Stack
                    direction="row"
                    justifyContent="space-around"
                    alignItems="center"
                    spacing={12}
                    sx={{ m: 1, p: 1 }}
                  >
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        fontSize: 26,
                        color: "#FF0000",
                      }}
                    >
                      {menus.component}
                    </Typography>

                    <Typography sx={{ fontSize: 24, color: "#000000" }}>
                      {menus.desc}
                    </Typography>
                  </Stack>
                </MenuItem>
              ))}
            </Select>
            {OtheText()}
            <InputLabel id="demo-simple-select-label" sx={{ fontSize: 30 }}>
              NG qty
            </InputLabel>
            <Select
              sx={{
                fontSize: 30,
                justifyContent: "center",
                alignItems: "center",
              }}
              fullWidth
              label="Qty"
              value={selectQty}
              autoFocus
              onChange={(event) => setQty(event.target.value as number)}
            >
              <MenuItem sx={{ fontSize: 30 }} value={1}>
                1
              </MenuItem>
              <MenuItem sx={{ fontSize: 30 }} value={2}>
                2
              </MenuItem>
              <MenuItem sx={{ fontSize: 30 }} value={3}>
                3
              </MenuItem>
              <MenuItem sx={{ fontSize: 30 }} value={4}>
                4
              </MenuItem>
              <MenuItem sx={{ fontSize: 30 }} value={5}>
                5
              </MenuItem>
              <MenuItem sx={{ fontSize: 30 }} value={6}>
                6
              </MenuItem>
              <MenuItem sx={{ fontSize: 30 }} value={7}>
                7
              </MenuItem>
              <MenuItem sx={{ fontSize: 30 }} value={8}>
                8
              </MenuItem>
              <MenuItem sx={{ fontSize: 30 }} value={9}>
                9
              </MenuItem>
              <MenuItem sx={{ fontSize: 30 }} value={10}>
                10
              </MenuItem>
              <MenuItem sx={{ fontSize: 30 }} value={11}>
                11
              </MenuItem>
              <MenuItem sx={{ fontSize: 30 }} value={12}>
                12
              </MenuItem>
              <MenuItem sx={{ fontSize: 30 }} value={13}>
                13
              </MenuItem>
              <MenuItem sx={{ fontSize: 30 }} value={14}>
                14
              </MenuItem>
              <MenuItem sx={{ fontSize: 30 }} value={15}>
                15
              </MenuItem>
              <MenuItem sx={{ fontSize: 30 }} value={16}>
                16
              </MenuItem>
              <MenuItem sx={{ fontSize: 30 }} value={17}>
                17
              </MenuItem>
              <MenuItem sx={{ fontSize: 30 }} value={18}>
                18
              </MenuItem>
              <MenuItem sx={{ fontSize: 30 }} value={19}>
                19
              </MenuItem>
              <MenuItem sx={{ fontSize: 30 }} value={20}>
                20
              </MenuItem>
            </Select>
            <div>
              <br />
            </div>
            {TextError}
            <Stack
              direction="row"
              justifyContent="space-around"
              alignItems="center"
              spacing={12}
              sx={{ m: 1, p: 5 }}
            >
              <Item
                sx={{ width: 150, height: 60, p: 2.5, color: "success.main" }}
                onClick={ChNgempty}
              >
                <Typography>SAVE</Typography>
              </Item>
              <Item sx={{ width: 150, height: 60, p: 2.5, color: "red" }}>
                <Typography onClick={handleCloseNG}>CLOSE</Typography>
              </Item>
            </Stack>
          </Box>
        </Modal>
      </Box>
      {/* Confirm Agree */}
      <Modal
        open={openConfrimEnd}
        onClose={ConfrimEndClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box component="form" onSubmit={handleConfirmEnd} noValidate sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Confirm Stop Working ?
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
                value={passConfrimEnd}
                name="useradd"
                type="password"
                onChange={(event) => setPassConfrimEnd(event.target.value)}
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
                onClick={ConfrimEndClose}
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
      {/* <Button onClick={celculeteOT}>dfdfdf</Button> */}
    </div>
  );
}
export default tableproduction;
