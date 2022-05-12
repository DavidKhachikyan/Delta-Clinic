import { Typography, Box } from "@mui/material";
import Bg from "../../assets/img/homeBg.png";
import Image from "../../assets/img/homeImg.png";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles(() => {
  return {
    span: {
      color: "#ffe100",
    },
  };
});

const Home = () => {
  const style = useStyles();
  return (
    <Box
      height={"80vh"}
      display="flex"
      justifyContent="center"
      sx={{
        backgroundImage: `url(${Bg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
      }}
    >
      <Box mr="70px">
        <Typography
          fontSize={40}
          fontWeight="700"
          variant="h4"
          color="#1B477F"
          sx={{ textTransform: "uppercase" }}
          mt="20px"
        >
          <span className={style.span}>Ատամները</span> կարևոր <br />
          դեր ունեն<span className={style.span}> մեր կյանքում,</span> <br />
          նրանք օգնում են մեզ
          <br />
          պարզ<span className={style.span}> խոսել</span> և<br /> գեղեցիկ
          <span className={style.span}> ժպտալ</span>
        </Typography>
        <Typography variant="h6" color="#1B477F" mt="30px">
          Վստահեք մեզ, որորվհետև մենք կարծում ենք,
          <br /> որ բժշկությունը պետք է լինի որակյալ
          <br /> և ավելի ժամանակակից
        </Typography>
      </Box>
      <Box>
        <img
          style={{ borderRadius: "50%", width: "400px" }}
          alt="home"
          src={Image}
        />
      </Box>
    </Box>
  );
};

export default Home;
