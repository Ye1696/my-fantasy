import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import orderBy  from "lodash/orderBy";

const data = [
  { name: "Yerbol", lastGame: 15 },
  { name: "Yerbol", lastGame: 12 },
  { name: "Yerbol", lastGame: 13 },
  { name: "Yerbol", lastGame: 18 },
  { name: "Yerbol", lastGame: 17 },
  { name: "Yerbol", lastGame: 19 },
  { name: "Yerbol", lastGame: 8 },
  { name: "Yerbol", lastGame: 5 },
  { name: "Yerbol", lastGame: 7 },
  { name: "Yerbol", lastGame: 11 },
];

export function Results() {
  const results = orderBy(data,["totall"],["desc"])
  return (
    <TableContainer
      component={Paper}
      sx={{ maxWidth: 500, position: "sticky", top: "75px" }}
    >
      <Table size="small">
        <TableHead sx={{backgroundColor:" #99ff99"}}>
          <TableRow>
            <TableCell>Team name</TableCell>
            <TableCell align="center">MVP</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {results.map((row) => (
            <TableRow
              key={row.name}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                "&:first-child": {
                  backgroundColor: "#aa80ff",
                },
                "&:nth-child(2), &:nth-child(3)": {
                  backgroundColor: "#ccb3ff",
                },
              }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.lastGame}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
