import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbarQuickFilter } from "@mui/x-data-grid";
import supabase from "../compunentConfig/supabase";

function QuickSearchToolbar() {
  return (
    <>
      <Box
        sx={{
          p: 0.5,
          pb: 0,
        }}
      >
        Down time
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

  // Otherwise filter will be applied on fields such as the hidden column id
  const columns = [
    { field: "id", headerName: "NO" },
    { field: "code", headerName: "Code" },
    { field: "f_time", headerName: "Time Start" },
    { field: "l_time", headerName: "Time End" },
    { field: "all_time", headerName: "Time All" },
    { field: "detail", headerName: "Detail" },
  ];

  useEffect(() => {
    const FetchData = async () => {
      const { data, error } = await supabase.from("table_downtime").select("*");
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
      <Box sx={{ height: 400, width: 1 }}>
        <DataGrid
          rows={data}
          columns={columns}
          components={{ Toolbar: QuickSearchToolbar }}
        />
      </Box>
    </div>
  );
}
