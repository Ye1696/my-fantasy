import React, { useState } from "react";
import { Tabs, Tab, Box, TextField, Typography } from "@mui/material";
import { News } from "./components/News";
import { Results } from "./components/Results";
import { GoodPlayer } from "./components/GoodPlayer";
import { History } from "./components/History";

export function MobileBody() {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        background: "#60712F",
      }}
    >
      <Typography sx={{color:"white", fontWeight:"600", margin:"20px 0 0 30px"}} variant="h5">DV League</Typography>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="secondary"
        variant="fullWidth"
        sx={{ position: "sticky", top: "65px", background: "#60712F", zIndex: 2 }}
      >
        <Tab value="1" label="News" sx={{textTransform: "none", color:"white"}} inkBarStyle={{background: 'blue'}}/>
        <Tab value="2" label="Table" sx={{textTransform: "none", color:"white"}}/>
        <Tab value="3" label="MVP" sx={{textTransform: "none", color:"white"}}/>
        <Tab value="4" label="History"sx={{textTransform: "none",color:"white"}}/>
      </Tabs>
      <Box sx={{ overflow: "hidden"}}>
        <Box sx={{background:"white", height:"20px"}}></Box>
        {value === "1" && <News />}
        {value === "2" && <Results />}
        {value === "3" && <GoodPlayer />}
        {value === "4" && <History />}
      </Box>
    </Box>
  );
}
