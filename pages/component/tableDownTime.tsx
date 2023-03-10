import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbarQuickFilter } from "@mui/x-data-grid";
// import supabase from "../compunentConfig/supabase";
import { Typography } from "@mui/material";
import supabase from "../../compunentConfig/supabase";
import CircularProgress from "@mui/material/CircularProgress";
import { useTranslation } from "react-i18next";
import Draw1 from "../draw1";

function QuickSearchToolbar() {
  const { t, i18n } = useTranslation(); //language
  return (
    <>
      <Box
        sx={{
          p: 0.5,
          pb: 0,
        }}
      >
        <Typography sx={{ fontSize: 28 }}>{t("DownTime")}</Typography>
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
  const { t, i18n } = useTranslation(); //language
  const [mounted, setMounted] = useState(false);
  const [data, setdata] = useState<any>([]);
  const [languageShow, setLanguageShow] = useState<any>("");
  const [fieldDescription, setFieldDescription] = useState<any>(
    "Downtime_description_en"
  );
  useEffect(() => {
    const RefetchLanguage = () => {
      const languageLocalStorage = localStorage.getItem("Language");
      if (languageLocalStorage != undefined) {
        if (languageShow != languageLocalStorage) {
          setLanguageShow(languageLocalStorage);
        }
      }
    };
    RefetchLanguage();
  });

  useEffect(() => {
    if (languageShow == "th") {
      setFieldDescription("Downtime_description_th");
    }
    if (languageShow == "en") {
      setFieldDescription("Downtime_description_en");
    }
    if (languageShow == "cn") {
      setFieldDescription("Downtime_description_cn");
    }
    if (languageShow == "vn") {
      setFieldDescription("Downtime_description_vn");
    }
  }, [languageShow]);

  const columns = [
    // { field: "id", headerName: "NO" },
    { field: "Downtime_code", headerName: t("Downtimecode") },
    { field: "Begin_time", headerName: t("Begintime") },
    { field: "End_time", headerName: t("Endtime") },
    { field: "Duration_downtime", headerName: t("Durationdowntime") },
    { field: fieldDescription, headerName: t("Detail"), width: 300 },
  ];
  const [loading, setLoading] = useState(false); // ??????????????????????????????????????????????????????
  // ???????????????????????????????????????????????????;

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
    const lenguageDefault = localStorage.getItem("Language");
    setLanguageShow(lenguageDefault);
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

  //?????????????????? useEffect ???????????????????????????????????? cliant ????????? server **???????????????????????????????????????????????? useEffect ???????????????????????????
  useEffect(() => {
    setMounted(true);
  }, []);

  //?????????????????? useEffect ???????????????????????????????????? cliant ????????? server **???????????????????????????????????????????????? useEffect ???????????????????????????

  if (!mounted) return null;
  if (loading)
    return (
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography sx={{ fontSize: 50 }}>Loading...</Typography>
        <CircularProgress />
      </Box>
    ); //????????????????????????????????????

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
