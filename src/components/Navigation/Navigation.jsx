import React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";

import logo from "./logo.png";

import { NavLink } from "react-router-dom";

const pages = [
  { name: "Home", link: "home" },
  { name: "Films", link: "films" },
  { name: "Saved Films", link: "savedFilms" },
];

const settings = ["Profile", "Account", "Dashboard", "Logout"];

const renderNavLinks = () => {
  return pages.map(({ name: pageName, link }) => (
    <NavLink
      key={link}
      to={link}
      style={({ isActive }) => ({
        color: isActive ? "red" : "white",
        textDecoration: "none",
        marginRight: "15px",
      })}
    >
      {pageName}
    </NavLink>
  ));
};

const renderNavMenuItems = (handleCloseNavMenu) => {
  return pages.map(({ name: pageName, link }) => (
    <MenuItem key={link} onClick={handleCloseNavMenu}>
      <NavLink
        to={link}
        style={({ isActive }) => ({
          textDecoration: "none",
          margin: "0 5px",
          color: isActive ? "red" : "white",
        })}
      >
        {pageName}
      </NavLink>
    </MenuItem>
  ));
};

const renderSettingsMenuItems = (handleCloseUserMenu) => {
  return settings.map((setting, index) => (
    <MenuItem key={index} onClick={handleCloseUserMenu}>
      <Typography textAlign="center">{setting}</Typography>
    </MenuItem>
  ));
};

function Navigation() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
  const handleOpenUserMenu = (event) => setAnchorElUser(event.currentTarget);

  const handleCloseNavMenu = () => setAnchorElNav(null);
  const handleCloseUserMenu = () => setAnchorElUser(null);

  return (
    <AppBar position="static" sx={{ backgroundColor: "black" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
            <img src={logo} alt="Logo" style={{ height: "40px" }} />{" "}
          </Box>
          <Typography
            variant="h6"
            noWrap
            component={NavLink}
            to="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          ></Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
        <Menu
  id="menu-appbar"
  anchorEl={anchorElNav}
  anchorOrigin={{
    vertical: "bottom",
    horizontal: "left",
  }}
  keepMounted
  transformOrigin={{
    vertical: "top",
    horizontal: "left",
  }}
  open={Boolean(anchorElNav)}
  onClose={handleCloseNavMenu}
  sx={{
    display: { xs: "block", md: "none" },
  }}
>
  {renderNavMenuItems(handleCloseNavMenu)}
</Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component={NavLink}
            to="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
                           letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          ></Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {renderNavLinks()}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
         <Menu
  id="menu-appbar"
  anchorEl={anchorElUser}
  anchorOrigin={{
    vertical: "top",
    horizontal: "right",
  }}
  keepMounted
  transformOrigin={{
    vertical: "top",
    horizontal: "right",
  }}
  open={Boolean(anchorElUser)}
  onClose={handleCloseUserMenu}
  sx={{
    display: { xs: "block", md: "none" },
  }}
>
  {renderSettingsMenuItems(handleCloseUserMenu)}
</Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navigation;


