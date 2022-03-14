import React, { useState } from "react";
import { Tabs, Tab, Box } from "@mui/material";
import {
  AccessTime,
  Announcement,
  ListAlt,
  StarBorder,
} from "@material-ui/icons";
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
        background: "white",
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="secondary"
        variant="fullWidth"
        sx={{ position: "sticky", top: "65px", background: "white", zIndex: 2 }}
      >
        <Tab value="1" icon={<Announcement />} />
        <Tab value="2" icon={<ListAlt />} />
        <Tab value="3" icon={<StarBorder />} />
        <Tab value="4" icon={<AccessTime />} />
      </Tabs>
      <Box sx={{ overflow: "hidden" }}>
        {value === "1" && <News />}
        {value === "2" && <Results />}
        {value === "3" && <GoodPlayer />}
        {value === "4" && <History />}
      </Box>
    </Box>
  );
}
