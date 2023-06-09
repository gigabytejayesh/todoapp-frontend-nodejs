import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Workspace from "./workspace/workspace";
import { Box, CircularProgress } from "@mui/material";
import { AppService } from "../services/app.service";
const HomePage = React.lazy(() => import("./homepage/homepage"));

const Loading = () => {
  return (
    <Box
      justifyContent="center"
      m="auto"
      // bgcolor="lightblue"
      alignItems="center"
      minHeight="100vh"
      sx={{ display: "flex" }}
    >
      <CircularProgress color="success" />
    </Box>
  );
};

const Main = () => {
  const [apiStatus, setApiStatus] = React.useState("loading");
  const [user, setUser] = React.useState({});

  React.useEffect(() => {
    async function fetchData() {
      setTimeout(() => {}, 2000);
      try {
        const response: any = await new AppService().callUserMeAPI();
        if (response.status === 200 || response.statusText === "OK") {
          setUser(response.data);
          setApiStatus("success");
        } else {
          setApiStatus("error");
        }
      } catch (error) {
        console.error(error);
        setApiStatus("error");
      }
    }
    fetchData();
  }, []);

  return (
    <React.Suspense fallback={<Loading />}>
      <Routes>
        {apiStatus === "loading" && <Route path="*" element={<Loading />} />}
        {apiStatus === "success" && (
          <Route path="/" element={<Workspace user={user} />} />
        )}
        {apiStatus === "success" && (
          <Route path="/workspace" element={<Workspace user={user} />} />
        )}
        {apiStatus === "error" && <Route path="*" element={<HomePage />} />}
      </Routes>
    </React.Suspense>
  );
};
export default Main;
