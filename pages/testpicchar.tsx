import React, { useEffect, useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

const testpicchar = () => {
  const [data, setData] = useState<any>([]);
  console.log(data);

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

      let response = await axios.request(reqOptions);
      if (response.data) {
        console.log(response.data);
        setData(response.data);
      }
    };
    FetchData();
  }, []);

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "emp_no",
      headerName: "Operator ID",
      width: 150,
      editable: true,
    },
    {
      field: "emp_name",
      headerName: "Full Name",
      width: 250,
      editable: true,
    },
    {
      field: "department",
      headerName: "Department",
      width: 300,
      editable: true,
    },
  ];

  return (
    <Box sx={{ height: 650, width: "100%" }}>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={100}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
};

export default testpicchar;
