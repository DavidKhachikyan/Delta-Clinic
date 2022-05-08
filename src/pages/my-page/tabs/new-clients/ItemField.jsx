import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
// import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { Box, InputLabel, TextareaAutosize } from "@mui/material";

export default function ItemField({ el, value, setValue }) {
  const handleChange = (event) => {
    console.log(event.target.value);
    setValue({ ...value, [el.name]: event.target.value });
  };

  return (
    <Box padding={"30px 50px"}>
      <InputLabel sx={{ marginBottom: "10px" }}>
        {el.number} - {el.text}
      </InputLabel>
      <TextareaAutosize
        // className={styles.input}
        aria-label="minimum height"
        minRows={2}
        style={{ width: 400 }}
        name={el.name}
        value={el.value}
        onChange={handleChange}
      />
    </Box>
  );
}
