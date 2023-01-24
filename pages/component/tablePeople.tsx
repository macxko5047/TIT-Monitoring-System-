import React, { useEffect, useState } from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import supabase from "../compunentConfig/supabase";

export default function tablePeople() {
  const LocalPD_key = localStorage.getItem("PD_key");
  const WorkOrederID = localStorage.getItem("Work_order_id");

  const columns: GridColDef[] = [
    { field: "emp_no", headerName: "no", width: 60 },
    { field: "emp_name", headerName: "Name", width: 200 },
    { field: "start_datetime", headerName: "start time", width: 120 },
    { field: "end_datetime", headerName: "end time", width: 120 },
    { field: "task_time", headerName: "task time", width: 120 },
  ];

  const [dataManpower, setDataManpower] = useState<any>([]);
  useEffect(() => {
    const FetchdataManpower_record = async () => {
      let { data, error } = await supabase
        .from("Manpower_record")
        .select("*")
        .eq("PD_key", LocalPD_key);
      if (data) {
        setDataManpower(data);
      } else {
        console.log("fetch ManpowerError", error);
      }
    };
    FetchdataManpower_record();
  }, []);

  const ReloadManpower_record = async () => {
    let { data, error } = await supabase
      .from("Manpower_record")
      .select("*")
      .eq("PD_key", LocalPD_key);
    if (data) {
      setDataManpower(data);
    } else {
      console.log("fetch ManpowerError", error);
    }
  };

  useEffect(() => {
    const ManpowerRecord = supabase
      .channel("custom-all-ManpowerRecord2")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "Manpower_record" },
        (payload) => {
          console.log("Change received! ReloadManpower_record ", payload);
          // ReloadManpower_record();

          setDataManpower((data: any) => [...data, payload.new]);
        }
      )
      .subscribe();
    return () => {
      supabase.removeChannel(ManpowerRecord);
    };
  }, [dataManpower]);
  return (
    <div style={{ height: 320, width: "100%" }}>
      <DataGrid
        rows={dataManpower}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}
