import * as React from "react";
import { Box, InputLabel, TextareaAutosize } from "@mui/material";

export default function ItemField({ el, value, setValue }) {
  const handleChange = (event) => {
    setValue({ ...value, [el.name]: event.target.value });
  };

  return (
    <Box padding={"30px 50px"}>
      <InputLabel sx={{ marginBottom: "10px", fontWeight: 700 }}>
        {el.number} - {el.text}
      </InputLabel>
      <TextareaAutosize
        aria-label="minimum height"
        style={{ width: 400, padding: "5px 0 10px 4px", fontSize: "15px" }}
        name={el.name}
        value={el.value}
        onChange={handleChange}
      />
    </Box>
  );
}
