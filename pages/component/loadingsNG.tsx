import React, { useEffect, useState } from "react";
import CircularProgress, {
  CircularProgressProps,
} from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import supabase from "../../compunentConfig/supabase";

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
          variant="h5"
          component="div"
          color="text.secondary"
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}

export default function loadings() {
  const [progress, setProgress] = useState(0);

  const date: any = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let checkdates = `${year}-${month}-${day}`;

  useEffect(() => {
    const FetchData = async () => {
      const { data, error } = await supabase
        .from("Production_history")
        .select("*")
        .filter("PD_key", "in", "(" + localStorage.getItem("PD_key") + ")")
        .single();
      if (data) {
        if (data.NG_qty < data.Open_qty) {
          const Percent = (data.NG_qty / data.Open_qty) * 100;
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
    const ProductionHistoryUpNG = supabase
      .channel("custom-update-Loading2")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "Production_history" },
        (payload) => {
          console.log("Change received! UpNG ", payload);
          ReloadNG();
        }
      )
      .subscribe();
  }, [progress]);

  const ReloadNG = async () => {
    const { data, error } = await supabase
      .from("Production_history")
      .select("Open_qty, NG_qty")
      .filter("PD_key", "in", "(" + localStorage.getItem("PD_key") + ")")
      .single();
    if (data) {
      if (data.NG_qty < data.Open_qty) {
        const Percent = (data.NG_qty / data.Open_qty) * 100;
        setProgress(Percent);
      } else {
        setProgress(100);
      }
    } else {
      setProgress(0);
    }
  };

  //0------------------------------------------------------------

  return (
    <CircularProgressWithLabel value={progress} size="5.5rem" color="primary" />
  );
}
