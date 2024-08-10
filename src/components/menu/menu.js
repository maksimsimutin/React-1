import React from "react";

import style from "../menu/index.module.css";

import { AppBar, Toolbar, Button } from "@mui/material";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <AppBar position="static">
      <Toolbar>
        <div className={style.logo}>
          <img src="./logo.png" alt="/" />
        </div>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/tv-shows">
          TV Shows
        </Button>
        <Button color="inherit" component={Link} to="/about-us">
          About Us
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Menu;
