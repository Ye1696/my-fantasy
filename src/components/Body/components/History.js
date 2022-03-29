import React, { useState } from "react";
import {
  Box,
  Collapse,
  Grid,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { KeyboardArrowDown, KeyboardArrowUp } from "@material-ui/icons";

const data = [
  {
    year: "2022",
    list: [
      { name: "Azamat 1", totalGame: 35, total: 90 },
      { name: "Azamat 2", totalGame: 35, total: 87 },
      { name: "Azamat 3", totalGame: 35, total: 85 },
    ],
    mvp: { name: "Azamat 5", total: 6 },
  },
  {
    year: "2021",
    list: [
      { name: "Yerbol 1", totalGame: 35, total: 90 },
      { name: "Yerbol 2", totalGame: 35, total: 87 },
      { name: "Yerbol 3", totalGame: 35, total: 85 },
    ],
    mvp: { name: "Yerbol 5", total: 6 },
  },
  {
    year: "2020",
    list: [
      { name: "Kanat 1", totalGame: 35, total: 90 },
      { name: "Kanat 2", totalGame: 35, total: 87 },
      { name: "Kanat 3", totalGame: 35, total: 85 },
    ],
    mvp: { name: "Kanat 5", total: 6 },
  },
];

export function History() {
  const [openHistory, setOpenHistory] = useState(null);

  const handleOpenHistory = (id) => {
    if (openHistory === id) {
      setOpenHistory(null);
    } else {
      setOpenHistory(id);
    }
  };
  return (
    <Grid>
      {data.map((item, index) => {
        const open = openHistory === index;
        return (
          <>
            <Box
              display="flex"
              onClick={() => handleOpenHistory(index)}
              sx={{
                alignItems: "center",
                display:"flex",
                justifyContent: "space-between",
                background: "#315C2B",
                marginBottom: "3px",
                padding: "14px 30px",
                color:"white"
              }}
            >
              <Box>{item.year}</Box>
              {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
            </Box>
            <Collapse in={open}>
              <Table size="small">
                <TableHead sx={{ backgroundColor: "#60712F"}}>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align="center">Game</TableCell>
                    <TableCell align="center">Total</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody  sx={{background:"#A1AA52"}}>
                  {item.list.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="center">{row.totalGame}</TableCell>
                      <TableCell align="center">{row.total}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <Box display="flex" sx={{width:"100%", background:"#60712F",color:"white", padding:"8px 0", alignItems:"center", gap:"50px"}}>
                  <Box sx={{paddingLeft:"10px"}}>Name: {item.mvp.name}</Box>
                  <Box>Total MVP: {item.mvp.total}</Box>
              </Box>
            </Collapse>
          </>
        );
      })}
    </Grid>
  );
}
