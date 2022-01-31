import { Grid, Box, Typography, TextField, Button } from "@mui/material";
import { useStyles } from "./signUp-styles";
import Img from "../../assets/img/Tooth.svg";
import { useHttp } from "../../hooks/http.hook";
import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useMessage } from "../../hooks/message.hook";

const SignUp = () => {
  const message = useMessage();

  const { loading, request, error, clearError } = useHttp();

  const inputName = useRef(null);
  const inputEmail = useRef(null);
  const inputPassword = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    message(error);
    if (error === null) {
      clearError();
    }
  }, [error, message, clearError]);

  const registerHandler = async () => {
    try {
      const data = await request(
        "http://localhost:5000/api/auth/register",
        "POST",
        {
          name: inputName.current.value,
          email: inputEmail.current.value,
          password: inputPassword.current.value,
        }
      );
      navigate("/sign-in");
      message(data.message);
    } catch (e) {}
  };

  const styles = useStyles();
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
          <Typography color>SIGN UP</Typography>
        </Box>
        <Box display="flex" flexDirection="column">
          <TextField inputRef={inputName} placeholder="Name" />
          <TextField inputRef={inputEmail} placeholder="Email" />
          <TextField inputRef={inputPassword} placeholder="Password" />
          {/* <TextField placeholder="Confirm Password" /> */}

          <Button onClick={registerHandler}>Sign Up</Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default SignUp;
