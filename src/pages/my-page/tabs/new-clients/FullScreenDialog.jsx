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
import ItemField from "./ItemField";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog({ id }) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState({
    userId: id,
    a11: "",
    a12: "",
    a13: "",
    a14: "",
    a15: "",
    a16: "",
    a17: "",
    a18: "",
    a21: "",
    a22: "",
    a23: "",
    a24: "",
    a25: "",
    a26: "",
    a27: "",
    a28: "",
    a31: "",
    a32: "",
    a33: "",
    a34: "",
    a35: "",
    a36: "",
    a37: "",
    a38: "",
    a41: "",
    a42: "",
    a43: "",
    a44: "",
    a45: "",
    a46: "",
    a47: "",
    a48: "",
  });

  const data = [
    {
      name: "a11",
      text: "վերին աջ կենտրոնական կտրիչ",
      number: 11,
    },
    { name: "a12", text: "վերին աջ կենտրոնական կտրիչ", number: 12 },
    { name: "a13", text: "վերին աջ կենտրոնական կտրիչ", number: 13 },
    { name: "a14", text: "վերին աջ կենտրոնական կտրիչ", number: 14 },
    { name: "a15", text: "վերին աջ կենտրոնական կտրիչ", number: 15 },
    { name: "a16", text: "վերին աջ կենտրոնական կտրիչ", number: 16 },
    { name: "a17", text: "վերին աջ կենտրոնական կտրիչ", number: 17 },
    { name: "a18", text: "վերին աջ կենտրոնական կտրիչ", number: 18 },
    {
      name: "a21",
      text: "վերին ձախ կենտրոնական կտրիչ",
      number: 21,
    },
    { name: "a22", text: "վերին ձախ կենտրոնական կտրիչ", number: 22 },
    { name: "a23", text: "վերին ձախ կենտրոնական կտրիչ", number: 23 },
    { name: "a24", text: "վերին ձախ կենտրոնական կտրիչ", number: 24 },
    { name: "a25", text: "վերին ձախ կենտրոնական կտրիչ", number: 25 },
    { name: "a26", text: "վերին ձախ կենտրոնական կտրիչ", number: 26 },
    { name: "a27", text: "վերին ձախ կենտրոնական կտրիչ", number: 27 },
    { name: "a28", text: "վերին ձախ կենտրոնական կտրիչ", number: 28 },
    {
      name: "a31",
      text: "Ստորին աջ կենտրոնական կտրիչ",
      number: 31,
    },
    { name: "a32", text: "Ստորին աջ կենտրոնական կտրիչ", number: 32 },
    { name: "a33", text: "Ստորին աջ կենտրոնական կտրիչ", number: 33 },
    { name: "a34", text: "Ստորին աջ կենտրոնական կտրիչ", number: 34 },
    { name: "a35", text: "Ստորին աջ կենտրոնական կտրիչ", number: 35 },
    { name: "a36", text: "Ստորին աջ կենտրոնական կտրիչ", number: 36 },
    { name: "a37", text: "Ստորին աջ կենտրոնական կտրիչ", number: 37 },
    { name: "a38", text: "Ստորին աջ կենտրոնական կտրիչ", number: 38 },
    {
      name: "a41",
      text: "Ստորին ձախ կենտրոնական կտրիչ",
      number: 41,
    },
    { name: "a42", text: "Ստորին ձախ կենտրոնական կտրիչ", number: 42 },
    { name: "a43", text: "Ստորին ձախ կենտրոնական կտրիչ", number: 43 },
    { name: "a44", text: "Ստորին ձախ կենտրոնական կտրիչ", number: 44 },
    { name: "a45", text: "Ստորին ձախ կենտրոնական կտրիչ", number: 45 },
    { name: "a46", text: "Ստորին ձախ կենտրոնական կտրիչ", number: 46 },
    { name: "a47", text: "Ստորին ձախ կենտրոնական կտրիչ", number: 47 },
    { name: "a48", text: "Ստորին ձախ կենտրոնական կտրիչ", number: 48 },
  ];

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  console.log(value, "value");

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Տեսնել ամբողջական տեղեկություն
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              {/* <CloseIcon /> */}x
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Sound
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <Box>
          {data.map((el, index) => {
            return (
              <ItemField
                el={el}
                key={index}
                value={value}
                setValue={setValue}
              />
            );
          })}
        </Box>
      </Dialog>
    </div>
  );
}
