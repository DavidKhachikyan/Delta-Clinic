import { Grid, Toolbar, Typography, AppBar, Button, Box } from "@mui/material";
import Img from "../../assets/img/Tooth.svg";
import { useHttp } from "../../hooks/http.hook";
import { useRef, useEffect, useState } from "react";
import { useMessage } from "../../hooks/message.hook";
import Logo from "../../assets/img/logo.png";
import { Link } from "react-router-dom";
import Menu from "./components/Menu";
const Header = () => {
  return (
    <AppBar
      position="static"
      sx={{
        boxShadow: "unset",
        padding: "20px 0",
        background: "#fff",
        "& a": {
          textDecoration: "none",
        },
      }}
    >
      <Toolbar
        variant="dense"
        sx={{ display: "flex", justifyContent: "space-around" }}
      >
        <Link to="/">
          <Box display="flex" flexDirection="column" alignItems="center">
            <img alt="img" src={Logo} />
            <Typography color="#0E7EE5" fontSize={24} fontWeight={700}>
              SMILE
            </Typography>
          </Box>
        </Link>
        <Menu />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
