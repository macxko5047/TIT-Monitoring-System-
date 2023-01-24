import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbarQuickFilter } from "@mui/x-data-grid";
import supabasetit from "./compunentConfig/supabase";
import { Typography } from "@mui/material";
import { useRef } from "react";

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
  const [sData, setSData] = useState<any[]>([]);
  const mouthRef = useRef(false);
  const [loading, setLoading] = useState(false); // ทำโหลดดิ้งรอข้อมูล
  // Otherwise filter will be applied on fields such as the hidden column id
  const columns = [
    { field: "Work_order_id", headerName: "Work_order_id" },
    { field: "Item_number", headerName: "Item_number" },
    { field: "Order_qty", headerName: "Order_qty" },
    { field: "Open_qty", headerName: "Open_qty" },
    { field: "Remarks", headerName: "Remarks" },
    { field: "WO_type", headerName: "WO_type" },
    { field: "WO_status", headerName: "WO_type" },
  ];

  useEffect(() => {
    const FetchData = async (start: any, end: any) => {
      setLoading(true);
      console.log("fetchdata"); //ใช้เช็คการทำงานว่าทำกี่ครั้ง
      const { data, error } = await supabasetit
        .from("Work_order")
        .select("*")
        .range(start, end); // ไปกำหนดโดยใช้การ fetch หลายรอบใน Promise.allSettled ด้านล่าง

      if (error) {
        console.log({ error });
      }

      console.log({ data });
      console.log({ sData });
      if (data) {
        setSData((preData) => [...preData, ...data]); // ขวาดโยนไปรวมซ้าย

        // console.log(data);
      }
      setLoading(false);
    };
    // fetch ข้อมูลที่ละ 10000 row แล้วเอามาเชื่อมต่อกัน เช็คเป็นค่า true
    if (!mouthRef.current) {
      Promise.allSettled([
        FetchData(0, 10000),
        FetchData(10001, 20000),
        FetchData(20001, 30000),
        FetchData(30001, 40000),
        FetchData(40001, 50000),
        FetchData(50001, 60000),
        FetchData(60001, 70000),
        FetchData(70001, 80000),
        FetchData(80001, 90000),
        FetchData(90001, 100000),
      ]);
    }

    return () => {
      mouthRef.current = true;
    };
  }, []);

  //ทำเช็ค useEffect ทำงานระหว่าง cliant กับ server **ต้องทำความเข้าใจ useEffect เพิ่มเติม
  useEffect(() => {
    setMounted(true);
  }, []);

  //ทำเช็ค useEffect ทำงานระหว่าง cliant กับ server **ต้องทำความเข้าใจ useEffect เพิ่มเติม

  if (!mounted) return null;

  if (loading) return <div>Loading...</div>; //รอโหลดข้อมูล

  console.log({ sData });
  return (
    <div>
      <Box sx={{ height: 400, width: 1 }}>
        <DataGrid
          rows={sData}
          columns={columns}
          getRowId={(row: any) => row.Work_order_id}
          components={{ Toolbar: QuickSearchToolbar }}
        />
      </Box>
    </div>
  );
}
