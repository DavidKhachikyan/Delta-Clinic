import { makeStyles } from "@mui/styles";
import img from "../../assets/img/bgBlue.svg";

export const useStyles = makeStyles(() => {
  return {
    wrapper: {
      height: "100vh",
      backgroundImage: `url(${img})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "1000px 1000px",
    },
  };
});
