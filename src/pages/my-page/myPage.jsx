import {
  Grid,
  Toolbar,
  Typography,
  AppBar,
  Button,
  Box,
  Tab,
  Tabs,
} from "@mui/material";
import Img from "../../assets/img/Tooth.svg";
import { useHttp } from "../../hooks/http.hook";
import { useRef, useEffect, useState } from "react";
import { useMessage } from "../../hooks/message.hook";
import Logo from "../../assets/img/logo.png";
import { Link } from "react-router-dom";
import NewClients from "./tabs/new-clients/newClients";
import MyImage from "../../assets/img/my-image.png";
import ClientsTables from "./tabs/new-clients/ClientsTables";

const MyPage = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  function handleTabChange(event, value) {
    setSelectedTab(value);
  }
  return (
    <Box display="flex" width="100%">
      <Box width="40%" display="flex" justifyContent="center" mt="50px">
        <img
          style={{ width: "400px", maxHeight: "400px", borderRadius: "50%" }}
          alt="my-image"
          src={MyImage}
        />
      </Box>
      <Box mr="100px">
        <Tabs
          value={selectedTab}
          onChange={handleTabChange}
          indicatorColor="primary"
          textColor="inherit"
          variant="scrollable"
          scrollButtons={false}
          classes={{
            indicator: "flex justify-center bg-transparent w-full h-full",
          }}
        >
          <Tab disableRipple label="Գրանցել նոր հաճախորդ" />
          <Tab disableRipple label="Գրանցված հաճախորդներ" />
        </Tabs>
        <Box mt="50px">
          {selectedTab === 0 && <NewClients setSelectedTab={setSelectedTab} />}
          {selectedTab === 1 && <ClientsTables />}
        </Box>
      </Box>
    </Box>
  );
};

export default MyPage;
