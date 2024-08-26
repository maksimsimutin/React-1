import React from "react";
import { Grid } from "@mui/material";
import Navigation from "../components/Navigation/Navigation";
import { Outlet } from "react-router-dom";
import { FilmsProvider } from "../context/FilmsContext";
import Footer from "../components/Footer/Footer"

const Main = () => {
  return (
    <div className="App">
      <Navigation />
      <FilmsProvider>
        <Grid container>
          <Outlet />
        </Grid>
      </FilmsProvider>
      <Footer />
    </div>
  );
};

export default Main;