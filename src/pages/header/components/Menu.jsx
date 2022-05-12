import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [state, setState] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setState(true);
    } else {
      setState(false);
    }
  }, [localStorage.getItem("accessToken")]);
  return (
    <>
      <Box>
        {state ? (
          <Box
            sx={{
              "& a": {
                color: "#0E7EE5",
                border: "1px solid #0E7EE5",
                padding: "10px 15px",
                borderRadius: "15px",
              },
            }}
          >
            <Link to="/my-page">Իմ հաշիվը</Link>
            <Link style={{ marginLeft: "15px" }} to="/about-us">
              Մեր մասին
            </Link>
          </Box>
        ) : (
          <Box
            sx={{
              "& a": {
                color: "#0E7EE5",
                border: "1px solid #0E7EE5",
                padding: "10px 15px",
                borderRadius: "15px",
              },
            }}
          >
            <Link style={{ marginLeft: "15px" }} to="/about-us">
              Մեր մասին
            </Link>
          </Box>
        )}
      </Box>
      );
      {!state ? (
        <Box>
          <Link
            to="/sign-in"
            style={{
              color: "#fff",
              backgroundColor: "#0E7EE5",
              padding: "10px 30px",
              borderRadius: "10px",
              marginRight: "30px",
            }}
          >
            Մուտք
          </Link>
          <Link
            to="/sign-up"
            style={{
              color: "#fff",
              backgroundColor: "#0E7EE5",
              padding: "10px 30px",
              borderRadius: "10px",
            }}
          >
            Գրանցվել
          </Link>
        </Box>
      ) : (
        <Link
          to="/"
          onClick={() => localStorage.removeItem("accessToken")}
          style={{
            color: "#fff",
            backgroundColor: "#0E7EE5",
            padding: "10px 30px",
            borderRadius: "10px",
          }}
        >
          Ելք
        </Link>
      )}
    </>
  );
};

export default Menu;
