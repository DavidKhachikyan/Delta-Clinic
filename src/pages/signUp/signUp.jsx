import { Grid, Box, Typography, Button, TextField } from "@mui/material";
import { useStyles } from "./signUp-styles";
import Img from "../../assets/img/signUpImage.png";
import { useHttp } from "../../hooks/http.hook";
import { useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMessage } from "../../hooks/message.hook";

const SignUp = () => {
  const message = useMessage();

  const { loading, request, error, clearError } = useHttp();

  const inputName = useRef(null);
  const inputEmail = useRef(null);
  const inputPassword = useRef(null);
  const inputLastName = useRef(null);

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
          lastName: inputLastName.current.value,
        }
      );
      navigate("/sign-in");
      message(data.message);
    } catch (e) {}
  };

  const styles = useStyles();
  return (
    <Grid container>
      <Grid
        item
        sx={{
          width: "50%",
          marginTop: "50px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          style={{ width: "500px", borderRadius: "50%" }}
          src={Img}
          alt="background"
        />
      </Grid>
      <Grid item width={"50%"} display="flex" flexDirection="column">
        <Box>
          <Typography
            color="#1A70F1"
            fontWeight={500}
            fontSize="36px"
            mb="30px"
            mt="50px"
            ml="50px"
          >
            Գրանցվել
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
            className={styles.input}
            label="Անուն"
            inputRef={inputName}
            fullWidth
          />
          <TextField
            label="Ազգանուն"
            inputRef={inputLastName}
            className={styles.input}
            fullWidth
          />
          <TextField
            className={styles.input}
            inputRef={inputEmail}
            label="Էլ․ հասցե"
            fullWidth
            type="email"
          />
          <TextField
            className={styles.input}
            inputRef={inputPassword}
            label="Գաղտնաբառ"
            fullWidth
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
            onClick={registerHandler}
          >
            Ստեղծել հաշիվ
          </Button>
          <Typography mt="20px">
            Արդեն ունե՞ք հաշիվ{" "}
            <Link
              style={{
                textDecoration: "none",
                color: "#1A70F1",
                fontWeight: 700,
              }}
              to="/sign-in"
            >
              Մուտք
            </Link>
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default SignUp;
