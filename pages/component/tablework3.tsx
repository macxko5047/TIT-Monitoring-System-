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
        NG Product
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
    { field: "detail", headerName: "Detail" },
    { field: "quantity", headerName: "Quantity" },
    { field: "qc_con", headerName: "QC confirm" },
    { field: "qc_wait", headerName: "Wait QC" },
  ];

  useEffect(() => {
    const FetchData = async () => {
      const { data, error } = await supabase.from("table_ng").select("*");
      setdata(data);
      console.log(data);
    };
    FetchData();
  }, []);

  //ทำเช็ค useEffect ทำงานระหว่าง cliant กับ server **ต้องทำความเข้าใจ useEffect เพิ่มเติม
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  //ทำเช็ค useEffect ทำงานระหว่าง cliant กับ server **ต้องทำความเข้าใจ useEffect เพิ่มเติม
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