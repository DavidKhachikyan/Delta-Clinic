import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
// import ChapterFullScreenDialog from "./ChapterFullScreenDialog";
import { useHttp } from "../../../../hooks/http.hook";

import {
  DialogActions,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import FullScreenDialog from "./FullScreenDialog";
//my code
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
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // const data = [
  //   {
  //     name: "Պողոս Պողոսյան",
  //     phone: "098314331",
  //     email: "scvre@gmail.com",
  //     information: "Ինչ որ տեքստ",
  //     date: "2022-12-05",
  //   },
  // ];

  const [open, setOpen] = useState(false);
  const [data, setData] = useState(null);
  const [isDelete, setIsDelete] = useState(false);
  const [isLock, setIsLock] = useState(false);
  const [id, setId] = useState(null);
  console.log(data, "data");
  const { loading, request, error, clearError } = useHttp();

  useEffect(async () => {
    try {
      const data = await request("http://localhost:5000/api/clients", "GET");
      if (data) {
        setData(data);
      }
      clearError();
      // navigate("/my-page");
      // message(data.message);
    } catch (e) {}
  }, []);

  const handleClickOpen = (id) => {
    setOpen(true);
    setId(id);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickLuck = (id) => {
    setIsLock(true);
    setId(id);
  };

  const handleCloseLuck = () => {
    setIsLock(false);
  };

  const handleClickOpenDelete = (data) => {
    if (data) {
      // onSubmit(data);
      handleCloseLuck();
      handleClose();
    } else {
      setIsDelete(true);
      handleClose();
      // onSubmit();
    }
  };

  const handleCloseDelete = () => {
    setIsDelete(false);
  };

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
                {/* <StyledTableCell align="center">
                  {row.information}
                </StyledTableCell> */}
                <StyledTableCell align="center">
                  {new Date(row.date).getFullYear()}{" "}
                  {monthNames[new Date(row.date).getMonth()]}{" "}
                  {new Date(row.date).getDate()}
                </StyledTableCell>
                <StyledTableCell align="center">
                  <FullScreenDialog id={row._id} />
                </StyledTableCell>
              </StyledTableRow>
            ))}
        </TableBody>
      </Table>
      {/* <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure you want to delete this chapter?"}
        </DialogTitle>

        <DialogActions>
          <Button onClick={() => handleClickOpenDelete()}>Delete</Button>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={isDelete}
        onClose={handleCloseDelete}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Your request has been submitted. You will receive a notification when
          it is processed.
        </DialogTitle>
      </Dialog>
      <Dialog
        open={isLock}
        onClose={handleCloseLuck}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {
            "Unlocking this chapter will allow anyone to read it for free. Are you sure you would like to unlock it?"
          }
        </DialogTitle>
        <DialogActions>
          <Button onClick={() => handleClickOpenDelete("Unlock")}>
            Unlock{" "}
          </Button>
          <Button onClick={handleCloseLuck}>Cancel</Button>
        </DialogActions>
      </Dialog> */}
    </TableContainer>
  );
}
