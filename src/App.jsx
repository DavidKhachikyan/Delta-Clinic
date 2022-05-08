import "./App.css";
import { Box, Toolbar } from "@mui/material";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import { useRoutes } from "./routes";
import Header from "./pages/header/header";
import { useEffect } from "react";

const App = () => {
  const location = useLocation();

  const routes = useRoutes(localStorage.getItem("accessToken"));

  return (
    <Box>
      <Header />
      {routes}
    </Box>
  );
};

export default App;
