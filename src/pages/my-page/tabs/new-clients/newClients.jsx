import {
  Grid,
  Toolbar,
  Typography,
  AppBar,
  Button,
  Box,
  TextField,
  TextareaAutosize,
  FormLabel,
} from "@mui/material";
// import Img from "../../assets/img/Tooth.svg";
import { useRef, useEffect, useState } from "react";
import { useMessage } from "../../../../hooks/message.hook";
// import Logo from "../../assets/img/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { useHttp } from "../../../../hooks/http.hook";

const useStyles = makeStyles(() => {
  return {
    input: {
      margin: " 5px 0 15px 0",
    },
    form: {
      marginLeft: "10px ",
    },
  };
});

const NewClients = ({ setSelectedTab }) => {
  const { loading, request, error, clearError } = useHttp();
  const [ok, setOk] = useState("");

  const message = useMessage();
  const navigate = useNavigate();

  const styles = useStyles();
  const name = useRef(null);
  const phone = useRef(null);
  const email = useRef(null);
  const information = useRef(null);
  const date = useRef(null);

  useEffect(() => {
    message(error);
    if (error === null) {
      clearError();
    }
  }, [error, message, clearError]);

  const create = async () => {
    try {
      const data = await request(
        "http://localhost:5000/api/clients/create",
        "POST",
        {
          name: name.current.value,
          email: email.current.value,
          phone: phone.current.value,
          information: information.current.value,
          date: date.current.value,
        }
      );
      setOk("Հաճախորդի տվյալները գրանցվեցին");
      setSelectedTab(1);
      clearError();
      message(data.message);
    } catch (e) {}
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      width="400px"
      ml="50px"
    >
      <Box width="100%">
        <FormLabel className={styles.form}>Անուն</FormLabel>
        <TextField className={styles.input} inputRef={name} fullWidth />
      </Box>
      <Box width="100%">
        <FormLabel className={styles.form}>Հեռախոսահամար</FormLabel>
        <TextField inputRef={phone} className={styles.input} fullWidth />
      </Box>
      <Box width="100%">
        <FormLabel className={styles.form}>Էլ․ հասցե</FormLabel>
        <TextField
          className={styles.input}
          inputRef={email}
          fullWidth
          type="email"
        />
      </Box>
      <Box width="100%">
        <FormLabel className={styles.form}>Ամսաթիվ</FormLabel>
        <TextField
          placeholder="2020-10-25"
          className={styles.input}
          inputRef={date}
          fullWidth
        />
      </Box>
      {/* <TextField
        className={styles.input}
        inputRef={information}
        label="Տեղեկություն կատարված աշխատանքի մասին և այլն․․․"
        fullWidth
        inp
      /> */}
      <Box width="100%">
        <FormLabel>Տեղեկություն կատարված աշխատանքի մասին և այլն․․․</FormLabel>
        <TextareaAutosize
          className={styles.input}
          aria-label="minimum height"
          minRows={5}
          style={{ width: 400 }}
          ref={information}
        />
      </Box>
      {error && (
        <Typography color="red" mb="20px">
          {error}
        </Typography>
      )}
      {ok && (
        <Typography color="#4feb34" mb="20px">
          {ok}
        </Typography>
      )}
      <Button
        sx={{
          backgroundColor: " #1B477F",
          color: "#FFFFFF",
          width: "200px",
          "&:hover": {
            backgroundColor: " #1B477F",
          },
        }}
        onClick={create}
      >
        Ստեղծել հաշիվ
      </Button>
    </Box>
  );
};

export default NewClients;
