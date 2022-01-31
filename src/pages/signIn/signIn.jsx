import { Grid, Box, Typography, TextField, Button } from "@mui/material";
import Img from "../../assets/img/Tooth.svg";
import { useStyles } from "./signIn-styles";
import { useHttp } from "../../hooks/http.hook";
import { useRef, useEffect, useState } from "react";
import { useMessage } from "../../hooks/message.hook";

const SignIn = () => {
  const styles = useStyles();
  const { loading, request, error, clearError } = useHttp();

  const [form, setForm] = useState({ login: "", password: "" });

  const message = useMessage();

  const changeHandler = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const loginHandler = async () => {
    const data = await request("http://localhost:5000/api/auth/login", "POST", {
      email: form.login,
      password: form.password,
    });
    message(data.message);
  };

  return (
    <Grid container className={styles.wrapper}>
      <Grid
        item
        sx={{ width: "500px", marginTop: "50px", marginLeft: "100px" }}
      >
        <img style={{ width: "100%" }} src={Img} alt="background" />
      </Grid>
      <Grid item>
        <Box>
          <Typography color>SIGN IN</Typography>
        </Box>
        <Box display="flex" flexDirection="column">
          <TextField
            onChange={changeHandler}
            value={form.login}
            name={"login"}
            placeholder="Email"
          />
          <TextField
            onChange={changeHandler}
            value={form.password}
            name={"password"}
            placeholder="Password"
          />
          <Button onClick={loginHandler}>Sign In</Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default SignIn;
