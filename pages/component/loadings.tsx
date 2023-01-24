import React, { useEffect, useState } from "react";
import CircularProgress, {
  CircularProgressProps,
} from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import supabase from "../compunentConfig/supabase";

function CircularProgressWithLabel(
  props: CircularProgressProps & { value: number }
) {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="caption"
          component="div"
          color="text.secondary"
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}

export default function loadings() {
  const LocalPDkey = localStorage.getItem("PD_key");

  const [progress, setProgress] = useState<any>(0);

  useEffect(() => {
    const FetchData = async () => {
      const { data, error } = await supabase
        .from("Production_history")
        .select("Open_qty, OK_qty")
        .filter("PD_key", "in", "(" + LocalPDkey + ")")
        .single();
      if (data) {
        if (data.OK_qty < data.Open_qty) {
          const Percent = (data.OK_qty / data.Open_qty) * 100;
          setProgress(Percent);
        } else {
          setProgress(100);
        }
      } else {
        setProgress(0);
      }
    };

    FetchData();
  }, [progress]);
  //subscribe -------------------------------------------------
  useEffect(() => {
    const ProductionHistory = supabase
      .channel("custom-update-Loading1")
      .on(
        "postgres_changes",
        { event: "UPDATE", schema: "public", table: "Production_history" },
        (payload) => {
          console.log("Change received! UpOK ", payload);
          ReloadOK();
        }
      )
      .subscribe();
  }, [progress]);

  const ReloadOK = async () => {
    const { data, error } = await supabase
      .from("Production_history")
      .select("Open_qty, OK_qty")
      .filter("PD_key", "in", "(" + LocalPDkey + ")")
      .single();
    if (data) {
      if (data.OK_qty < data.Open_qty) {
        const Percent = (data.OK_qty / data.Open_qty) * 100;
        setProgress(Percent);
      } else {
        setProgress(100);
      }
    } else {
      setProgress(0);
    }
  };

  //0------------------------------------------------------------

  return <CircularProgressWithLabel value={progress} />;
}
