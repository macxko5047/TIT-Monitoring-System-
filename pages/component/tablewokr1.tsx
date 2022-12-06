import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import {
  DataGrid,
  GridToolbarQuickFilter,
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarExport,
  GridToolbarDensitySelector,
} from "@mui/x-data-grid";
import supabase from "../compunentConfig/supabase";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import SelectLine from "../selectLine";
import Button from "@mui/material/Button";
import { start } from "repl";
import handler from "../api/hello";

function CustomToolbar() {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          pb: 0,
          justifyContent: "center",
          p: 3,
          m: 3,
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

// function QuickSearchToolbar() {
//   return (
//     <div>
//       <Box
//         sx={{
//           display: "flex",
//           pb: 0,
//           justifyContent: "center",
//           p: 3,
//           m: 3,
//           bgcolor: "background.paper",
//           borderRadius: 1,
//         }}
//       >
//         <GridToolbarQuickFilter
//           quickFilterParser={(searchInput: string) =>
//             searchInput
//               .split(",")
//               .map((value) => value.trim())
//               .filter((value) => value !== "")
//           }
//         ></GridToolbarQuickFilter>
//       </Box>
//     </div>
//   );
// }

export default function tablework1() {
  const [mounted, setMounted] = useState(false);
  const [data, setData] = useState<any>([]);
  const jwt = require("jsonwebtoken");
  const [id, set] = useState("");

  const [selects, setSelects] = React.useState("");
  console.log(selects);

  const handleonClickk = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    showData();
  };

  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  // This arrangement can be altered based on how we want the date's format to appear.
  let currentDate = `${day}-${month}-${year}`;
  console.log(currentDate); // "DD-MM-YYYY"



  // Otherwise filter will be applied on fields such as the hidden column id
  const columns = [
    { field: "id", headerName: "NO" },
    { field: "workoder", headerName: "Workoder" },
    { field: "status", headerName: "Status" },
    { field: "target_qty", headerName: "Target Q'ty" },
    { field: "actual_qty", headerName: "Actual Q'ty" },
    { field: "ng_qty", headerName: "NG Q'ty" },
    { field: "duedate", headerName: "DueDate" },
    { field: "remaining", headerName: "Remaining Time", width: 140 },
    { field: "production", headerName: "Production line", width: 140 },
    {
      field: "Select Item",
      renderCell: (event: any) => {
        return (
          <Button  value={data} variant="contained" color="primary">
            Select
          </Button>
        );
      },
    },
  ];

  useEffect(() => {
    const FetchData = async () => {
      const { data } = await supabase.from("Item_workorder").select("*");
      setData(data);
      console.log(data);
    };
    FetchData();
  }, []);
  const [data1, setData1] = useState<any>("");
  console.log(data1);
  useEffect (() => {
    const showData = async () => {
      const { data, error } = await supabase
        .from("Item_workorder")
        .select("*")
        .eq("id", id.toLowerCase())
        .limit(1); //ใช้แทน single
      if (!error) {
        // setData(data);
        if (data1 === id) {
          setData1(data);
          alert("ShowData");
        }
      }
      else {
        console.log(error);
        
      }
    };
    showData();
  },[])
 

  //ทำเช็ค useEffect ทำงานระหว่าง cliant กับ server **ต้องทำความเข้าใจ useEffect เพิ่มเติม
  useEffect(() => {
    setMounted(true);
  }, []);

  //ทำเช็ค useEffect ทำงานระหว่าง cliant กับ server **ต้องทำความเข้าใจ useEffect เพิ่มเติม

  if (!mounted) return null;

  return (
    <div>
      <SelectLine />
      <Box sx={{ height: 550, width: "100%" }}>
        <DataGrid
          rows={data}
          columns={columns}
          components={{ Toolbar: CustomToolbar }}
        ></DataGrid>
        {currentDate}

        {/* {data.map((sta: { status: any }) => (
          <p>{sta.status}</p>
        ))} */}
      </Box>
    </div>
  );
}
function showData() {
  throw new Error("Function not implemented.");
}

