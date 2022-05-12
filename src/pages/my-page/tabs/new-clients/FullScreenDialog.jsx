import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Slide from "@mui/material/Slide";
import { Box } from "@mui/material";
import ItemField from "./ItemField";
import { useHttp } from "../../../../hooks/http.hook";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog({ id, name }) {
  const { loading, request, error, clearError } = useHttp();

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
      value: value.a11,
    },
    {
      name: "a12",
      text: "վերին աջ կենտրոնական կտրիչ",
      number: 12,
      value: value.a12,
    },
    {
      name: "a13",
      text: "վերին աջ կենտրոնական կտրիչ",
      number: 13,
      value: value.a13,
    },
    {
      name: "a14",
      text: "վերին աջ կենտրոնական կտրիչ",
      number: 14,
      value: value.a14,
    },
    {
      name: "a15",
      text: "վերին աջ կենտրոնական կտրիչ",
      number: 15,
      value: value.a15,
    },
    {
      name: "a16",
      text: "վերին աջ կենտրոնական կտրիչ",
      number: 16,
      value: value.a16,
    },
    {
      name: "a17",
      text: "վերին աջ կենտրոնական կտրիչ",
      number: 17,
      value: value.a17,
    },
    {
      name: "a18",
      text: "վերին աջ կենտրոնական կտրիչ",
      number: 18,
      value: value.a18,
    },
    {
      name: "a21",
      text: "վերին ձախ կենտրոնական կտրիչ",
      number: 21,
      value: value.a21,
    },
    {
      name: "a22",
      text: "վերին ձախ կենտրոնական կտրիչ",
      number: 22,
      value: value.a22,
    },
    {
      name: "a23",
      text: "վերին ձախ կենտրոնական կտրիչ",
      number: 23,
      value: value.a23,
    },
    {
      name: "a24",
      text: "վերին ձախ կենտրոնական կտրիչ",
      number: 24,
      value: value.a24,
    },
    {
      name: "a25",
      text: "վերին ձախ կենտրոնական կտրիչ",
      number: 25,
      value: value.a25,
    },
    {
      name: "a26",
      text: "վերին ձախ կենտրոնական կտրիչ",
      number: 26,
      value: value.a26,
    },
    {
      name: "a27",
      text: "վերին ձախ կենտրոնական կտրիչ",
      number: 27,
      value: value.a27,
    },
    {
      name: "a28",
      text: "վերին ձախ կենտրոնական կտրիչ",
      number: 28,
      value: value.a28,
    },
    {
      name: "a31",
      text: "Ստորին աջ կենտրոնական կտրիչ",
      number: 31,
      value: value.a31,
    },
    {
      name: "a32",
      text: "Ստորին աջ կենտրոնական կտրիչ",
      number: 32,
      value: value.a32,
    },
    {
      name: "a33",
      text: "Ստորին աջ կենտրոնական կտրիչ",
      number: 33,
      value: value.a33,
    },
    {
      name: "a34",
      text: "Ստորին աջ կենտրոնական կտրիչ",
      number: 34,
      value: value.a34,
    },
    {
      name: "a35",
      text: "Ստորին աջ կենտրոնական կտրիչ",
      number: 35,
      value: value.a35,
    },
    {
      name: "a36",
      text: "Ստորին աջ կենտրոնական կտրիչ",
      number: 36,
      value: value.a36,
    },
    {
      name: "a37",
      text: "Ստորին աջ կենտրոնական կտրիչ",
      number: 37,
      value: value.a37,
    },
    {
      name: "a38",
      text: "Ստորին աջ կենտրոնական կտրիչ",
      number: 38,
      value: value.a38,
    },
    {
      name: "a41",
      text: "Ստորին ձախ կենտրոնական կտրիչ",
      number: 41,
      value: value.a41,
    },
    {
      name: "a42",
      text: "Ստորին ձախ կենտրոնական կտրիչ",
      number: 42,
      value: value.a42,
    },
    {
      name: "a43",
      text: "Ստորին ձախ կենտրոնական կտրիչ",
      number: 43,
      value: value.a43,
    },
    {
      name: "a44",
      text: "Ստորին ձախ կենտրոնական կտրիչ",
      number: 44,
      value: value.a44,
    },
    {
      name: "a45",
      text: "Ստորին ձախ կենտրոնական կտրիչ",
      number: 45,
      value: value.a45,
    },
    {
      name: "a46",
      text: "Ստորին ձախ կենտրոնական կտրիչ",
      number: 46,
      value: value.a46,
    },
    {
      name: "a47",
      text: "Ստորին ձախ կենտրոնական կտրիչ",
      number: 47,
      value: value.a47,
    },
    {
      name: "a48",
      text: "Ստորին ձախ կենտրոնական կտրիչ",
      number: 48,
      value: value.a48,
    },
  ];

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = async () => {
    await request(`http://localhost:5000/api/clients/data`, "PATCH", value);

    setOpen(false);
  };

  React.useEffect(async () => {
    const data = await request(
      `http://localhost:5000/api/clients/data/${id}`,
      "GET"
    );
    setValue({ ...value, ...data });
  }, [id]);

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Տեսնել կամ գրանցել ամբողջական տեղեկություն
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              {name}
            </Typography>
            <Button
              variant="outlined"
              autoFocus
              color="inherit"
              onClick={handleSave}
            >
              Պահպանել
            </Button>
            <Button
              sx={{ marginLeft: "15px" }}
              variant="outlined"
              autoFocus
              color="inherit"
              onClick={handleClose}
            >
              Չեղարկել
            </Button>
          </Toolbar>
        </AppBar>
        <Box display="flex" flexWrap="wrap">
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
