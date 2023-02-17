import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbarQuickFilter } from "@mui/x-data-grid";
// import supabase from "../compunentConfig/supabase";
import { Typography } from "@mui/material";
import supabase from "../../compunentConfig/supabase";
import CircularProgress from "@mui/material/CircularProgress";

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

export default function QuickFilteringCustomizedGrid() {
  const [mounted, setMounted] = useState(false);
  const [data, setdata] = useState<any>([]);

  //รีเฟสเฉพาะอันนั้น
  // console.log({ data });
  // Otherwise filter will be applied on fields such as the hidden column id
  const columns = [
    { field: "id", headerName: "NO" },
    { field: "Downtime_code", headerName: "Downtime_code" },
    { field: "Begin_time", headerName: "Begin_time" },
    { field: "End_time", headerName: "End_time" },
    { field: "Duration_downtime", headerName: "Duration_downtime" },
    { field: "Downtime_description", headerName: "Detail", width: 300 },
  ];
  const [loading, setLoading] = useState(false); // ทำโหลดดิ้งรอข้อมูล
  // รีเฟสเฉพาะอันนั้น;

  useEffect(() => {
    // const intervalId = setInterval(() => {
    const FetchData = async () => {
      setLoading(true);
      const { data } = await supabase
        .from("Downtime_record")
        .select("*")
        .eq("Work_order_id", localStorage.getItem("Work_order_id"))
        .eq("PD_key", localStorage.getItem("PD_key"));
      setdata(data);
    };
    FetchData();
    setLoading(false);
    // }, 1000);
    // return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const DowntimeRecord_UPdate = supabase
      .channel("custom-all-downtime")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "Downtime_record" },
        (payload) => {
          console.log("Change received Downtime_record", payload);
          ReloadDowntime();
          // setdata((prev: any) => [...prev, payload.new]);
        }
      )
      .subscribe();
    return () => {
      supabase.removeChannel(DowntimeRecord_UPdate);
    };
  }, [data]);

  const ReloadDowntime = async () => {
    const { data, error } = await supabase
      .from("Downtime_record")
      .select("*")
      .filter("PD_key", "in", "(" + localStorage.getItem("PD_key") + ")");
    setdata(data);
  };

  //ทำเช็ค useEffect ทำงานระหว่าง cliant กับ server **ต้องทำความเข้าใจ useEffect เพิ่มเติม
  useEffect(() => {
    setMounted(true);
  }, []);

  //ทำเช็ค useEffect ทำงานระหว่าง cliant กับ server **ต้องทำความเข้าใจ useEffect เพิ่มเติม

  if (!mounted) return null;
  if (loading)
    return (
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography sx={{ fontSize: 50 }}>Loading...</Typography>
        <CircularProgress />
      </Box>
    ); //รอโหลดข้อมูล

  return (
    <Box sx={{ height: 400, width: 1 }}>
      <DataGrid
        rows={data}
        columns={columns}
        components={{ Toolbar: QuickSearchToolbar }}
      />
    </Box>
  );
}
