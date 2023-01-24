import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbarQuickFilter } from "@mui/x-data-grid";
import supabase from "./compunentConfig/supabaseUser";
import { Typography } from "@mui/material";

function QuickSearchToolbar() {
  return (
    <>
      <Box
        sx={{
          p: 0.5,
          pb: 0,
        }}
      >
        <Typography sx={{ fontSize: 28 }}>Down time</Typography>
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

const testall = () => {
  //ทำเรื่องเวลา
  const date: any = new Date();
  const H = date.getHours();
  const M = date.getMinutes();
  const S = date.getSeconds();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  const timestamps = date.getTime();

  const deteNow = `${day}-${month}-${year}`;

  const timeshow = `${H}:${M}:${S}`;
  const [raltime, setRaltime] = useState<any>("");
  useEffect(() => {
    const intervalId = setInterval(() => {
      setRaltime(date);
    }, 1000);
    return () => clearInterval(intervalId);
  });

  //ทำเรื่องเวลา
  const [timestart, setTimestart] = useState<any>("");
  const [timepause, setTimePause] = useState<any>("");
  const [timeStartPause, setTimeStartPause] = useState<any>("");
  const [timeStop, setTimeStop] = useState<any>("");
  const [mounted, setMounted] = useState(false);
  const [data, setdata] = useState<any>("");
  const [timestamp01, setTimestamp01] = useState<any>("");
  const [timestamp02, setTimestamp02] = useState<any>("");

  const columns = [
    { field: "id", headerName: "NO" },
    { field: "Work_order_id", headerName: "Work_order_id", width: 150 },
    { field: "f_time", headerName: "Time Pause", width: 150 },
    { field: "l_time", headerName: "Time end and Start", width: 150 },
    { field: "all_time", headerName: "Time All", width: 150 },
    { field: "detail", headerName: "Detail", width: 150 },
  ];

  const pushStart = () => {
    if (timestart === "") {
      setTimestart(timeshow);
    }

    if (timestart != "" && timeStop === "") {
      setTimeStartPause(timeshow);
      setTimestamp02(timestamps);
    }
    if (timeStop != "") {
      alert("WTF");
    }
    if (timeStartPause != "" && timepause != "") {
      //แสดงค่า เวลา เอามาลบ ละโชว์
    }
  };

  const pushPause = () => {
    if (timeStartPause === "") {
      setTimePause(timeshow);
      setTimestamp01(timestamps);
    }
    if (timeStop != "") {
      alert("WTF");
    }
  };
  const pushstop = () => {
    if (timeStop === "") {
      setTimeStop(timeshow);
    }
    if (timeStop != "") {
      alert("WTF");
    }
  };

  const diff01: any = Math.round(
    (((timestamp02 - timestamp01) / 1000) * 60) / 3600
  );

  useEffect(() => {
    const FetchData = async () => {
      const { data } = await supabase.from("table_downtime").select("*");
      setdata(data);
      console.log(data);
    };
    FetchData();
  }, []);

  //ทำเช็ค useEffect ทำงานระหว่าง cliant กับ server **ต้องทำความเข้าใจ useEffect เพิ่มเติม
  useEffect(() => {
    setMounted(true);
  }, []);

  //ทำเช็ค useEffect ทำงานระหว่าง cliant กับ server **ต้องทำความเข้าใจ useEffect เพิ่มเติม

  if (!mounted) return null;
  return (
    <div>
      <div className="stopwatch">
        <div className="numbers">
          <p>{deteNow}</p>
          <p>{timeshow}</p>
        </div>
        <div className="buttons">
          <button onClick={pushStart}>Start</button>
          <button onClick={pushPause}>pause</button>
          <button onClick={pushstop}>Stop</button>
        </div>
        <br />
        <div>
          <form>
            <button>TimeStart</button>
            <input disabled placeholder={timestart}></input>
            <button>TimePause</button>
            <input disabled placeholder={timepause}></input>
            <button>TimeStartPause</button>
            <input disabled placeholder={timeStartPause}></input>
            <button>TimeStop</button>
            <input disabled placeholder={timeStop}></input>
            <br />
            <button>time start - end</button>
            <input disabled placeholder={diff01}></input>
          </form>
          <br />
          <button type="submit">Submit</button>
        </div>
        <br />
      </div>
      <div>
        <Box sx={{ height: 400, width: 1 }}>
          <DataGrid
            rows={data}
            columns={columns}
            components={{ Toolbar: QuickSearchToolbar }}
          />
        </Box>
      </div>
    </div>
  );
};
export default testall;
