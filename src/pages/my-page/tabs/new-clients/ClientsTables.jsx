import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useHttp } from "../../../../hooks/http.hook";
import FullScreenDialog from "./FullScreenDialog";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#0E7EE5",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function ClientsTables() {
  const monthNames = [
    "Հունվար",
    "Փետրվար",
    "Մարտ",
    "Ապրիլ",
    "Մայիս",
    "Հունիս",
    "Հուլիս",
    "Օգոստոս",
    "Սեպտեմբեր",
    "Հոկտեմբեր",
    "Նոյեմբեր",
    "Դեկտեմբեր",
  ];

  const [data, setData] = useState(null);
  const { loading, request, error, clearError } = useHttp();

  useEffect(async () => {
    try {
      const data = await request("http://localhost:5000/api/clients", "GET");
      if (data) {
        setData(data);
      }
      clearError();
    } catch (e) {}
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead sx={{ backgroundColor: "#0E7EE5" }}>
          <TableRow>
            <StyledTableCell c>Անուն</StyledTableCell>
            <StyledTableCell align="center">Հեռախոսահամար</StyledTableCell>
            <StyledTableCell align="center">Էլ․ հասցե</StyledTableCell>
            <StyledTableCell align="center">Ամսաթիվ</StyledTableCell>
            <StyledTableCell align="center">Տեղեկություն</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data &&
            data.map((row, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="center">{row.phone}</StyledTableCell>
                <StyledTableCell align="center">{row.email}</StyledTableCell>
                <StyledTableCell align="center">
                  {new Date(row.date).getFullYear()}{" "}
                  {monthNames[new Date(row.date).getMonth()]}{" "}
                  {new Date(row.date).getDate()}
                </StyledTableCell>
                <StyledTableCell align="center">
                  <FullScreenDialog id={row._id} name={row.name} />
                </StyledTableCell>
              </StyledTableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
