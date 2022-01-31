import "./App.css";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { BrowserRouter as Router } from "react-router-dom";
import { useRoutes } from "./routes";

const App = () => {
  const routes = useRoutes(false);
  return (
    <Box>
      <AppBar position="static">
        <Toolbar variant="dense" sx={{ background: "#fff" }}>
          <Typography color="#3686F7">Home</Typography>
        </Toolbar>
      </AppBar>
      <Router>{routes}</Router>
    </Box>
  );
};

export default App;
