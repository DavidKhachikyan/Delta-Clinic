import "./App.css";
import { Box } from "@mui/material";
import { useRoutes } from "./routes";
import Header from "./pages/header/header";

const App = () => {
  const routes = useRoutes(localStorage.getItem("accessToken"));

  return (
    <Box>
      <Header />
      {routes}
    </Box>
  );
};

export default App;
