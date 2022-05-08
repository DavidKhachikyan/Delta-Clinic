import { Grid, Box, Typography, TextField, Button } from "@mui/material";
import Img from "../../assets/img/signInImage.png";
import { useStyles } from "./signIn-styles";
import { useHttp } from "../../hooks/http.hook";
import { useRef, useEffect, useState } from "react";
import { useMessage } from "../../hooks/message.hook";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const styles = useStyles();
  const navigate = useNavigate();
  const { loading, request, error, clearError } = useHttp();

  const [form, setForm] = useState({ login: "", password: "" });

  const message = useMessage();

  const changeHandler = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const loginHandler = async () => {
    try {
      const data = await request(
        "http://localhost:5000/api/auth/login",
        "POST",
        {
          email: form.login,
          password: form.password,
        }
      );
      localStorage.setItem("accessToken", data.token);
      navigate("/my-page");
      message(data.message);
    } catch (e) {}
  };

  return (
    <Grid container>
      <Grid
        item
        width={"50%"}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Box>
          <Typography
            color="#1A70F1"
            fontWeight={500}
            fontSize="36px"
            mb="30px"
            mt="50px"
            ml="50px"
          >
            Մուտք
          </Typography>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          width="300px"
          ml="50px"
        >
          <TextField
            onChange={changeHandler}
            value={form.login}
            name={"login"}
            label="Էլ․ հասցե"
            fullWidth
            className={styles.input}
            type="email"
          />
          <TextField
            onChange={changeHandler}
            value={form.password}
            name={"password"}
            label="Գաղտնաբառ"
            fullWidth
            className={styles.input}
            type="password"
          />
          <Typography color="red" mb="20px">
            {error}
          </Typography>
          <Button
            sx={{
              backgroundColor: " #1B477F",
              color: "#FFFFFF",
              width: "200px",
              "&:hover": {
                backgroundColor: " #1B477F",
              },
            }}
            onClick={loginHandler}
          >
            Մուտք հաշիվ
          </Button>
          <Typography mt="20px">
            Չունե՞ք հաշիվ{" "}
            <Link
              style={{
                textDecoration: "none",
                color: "#1A70F1",
                fontWeight: 700,
              }}
              to="/sign-up"
            >
              Գրանցվել
            </Link>
          </Typography>
        </Box>
      </Grid>
      <Grid item>
        <img
          style={{ width: "500px", borderRadius: "50%" }}
          src={Img}
          alt="background"
        />
      </Grid>
    </Grid>
  );
};

export default SignIn;
