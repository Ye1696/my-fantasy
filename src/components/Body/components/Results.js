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
  { name: "Yerbol", lastGame: 15, totall: 85 },
  { name: "Yerbol", lastGame: 12, totall: 68 },
  { name: "Yerbol", lastGame: 13, totall: 57 },
  { name: "Yerbol", lastGame: 18, totall: 95 },
  { name: "Yerbol", lastGame: 17, totall: 73 },
  { name: "Yerbol", lastGame: 19, totall: 82 },
  { name: "Yerbol", lastGame: 8, totall: 69 },
  { name: "Yerbol", lastGame: 5, totall: 75 },
  { name: "Yerbol", lastGame: 7, totall: 93 },
  { name: "Yerbol", lastGame: 11, totall: 80 },
];

export function Results() {
  const results = orderBy(data,["totall"],["desc"])
  return (
    <TableContainer
      component={Paper}
      sx={{ maxWidth: 500, position: "sticky", top: "75px" }}
    >
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Имя</TableCell>
            <TableCell align="center">Последняя игра</TableCell>
            <TableCell align="center">Общ. сумма</TableCell>
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
              <TableCell align="center">{row.totall}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
