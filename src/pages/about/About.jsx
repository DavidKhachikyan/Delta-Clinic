import { Grid, Box, Typography } from "@mui/material";
import Img from "../../assets/img/about.png";

const About = () => {
  return (
    <Grid container>
      <Grid
        item
        sx={{
          width: "50%",
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
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          mr="100px"
        >
          <Typography mt="20px">
            <span style={{ color: "#0E7EE6", fontWeight: 600 }}>SMILE</span>-ը
            հայկական առաջին ատամնաբուժական կայքն է, որը միտված է օգնելու ոչ թե
            հաճախորդներին, կամ հաճախորդ-բժիշկ կապի համար այլ հակառակը, SMILE-ը
            նախատեսված է հենց{" "}
            <span style={{ color: "#0E7EE6", fontWeight: 600 }}>
              բուժ անձնակազմի համար,
            </span>{" "}
            այո այո հենց այդպես։ Կայքը նախատեսված է բացառապես միայն
            <span style={{ color: "#0E7EE6", fontWeight: 600 }}>
              ատամնաբույժների համար,
            </span>{" "}
            հեշտացնելու և ավելի ժամանակակից դարձնելու ատամնաբույժների աշխատանքը։
          </Typography>
          <Typography mt="15px">
            <span style={{ color: "#0E7EE6", fontWeight: 600 }}>SMILE</span>-ը
            նախատեսված է դարձնելու ձեր աշխատանքը ավելի դյուրին ու ժամանակակից,
            դուք կարող էք{" "}
            <span style={{ color: "#0E7EE6", fontWeight: 600 }}>
              գրանցվել և ստեղծել ձեր սեփական էջը,
            </span>{" "}
            լրացնել ձեր հաճախորդների տվյալները, կատարված աշխատանքի մասին
            տեղեկություններ, պահպանել դրանք և հարկ եղած ժամանակ դիտել դրանք
            ավելի գեղեցիկ ու հարմարավետ միջավայրում։
          </Typography>
          <Typography mt="15px">
            Այս ամենը նոր{" "}
            <span style={{ color: "#0E7EE6", fontWeight: 600 }}>
              գեղեցկություն և թարմություն
            </span>{" "}
            կհաղորդի ձեր աշխատանքին։ Եվ վերջապես վերջ կդրվի հատորներով
            նոթատետրերին, և արխիվներին։ Այդ բոլոր տեղեկություները կպահվեն մեր
            բազայում, անվտանգ,{" "}
            <span style={{ color: "#0E7EE6", fontWeight: 600 }}>
              անձնական տվյալների գաղտնիությամբ։
            </span>
          </Typography>
          <Typography mt="20px" fontSize="14px">
            Կայքը ստեղծվել է HydraLab ծրագրավորման ընկերության ծրագրավորող Դավիթ
            Խաչիկյանի կողմից։
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default About;
