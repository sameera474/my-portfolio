import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../assets/Logo/logo-white.png";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

export default function Header({ darkMode, setDarkMode }) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const navLinks = [
    { text: "Home", href: "#home" },
    { text: "About", href: "#about" },
    { text: "Experience", href: "#experience" }, // ✅ Added Experience Section
    { text: "Projects", href: "#projects" },
    { text: "Contact", href: "#contact" },
  ];

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: darkMode
          ? "rgba(20, 20, 20, 0.8)"
          : "rgba(14, 13, 39, 0.541)",
        borderRadius: "40px",
        boxShadow: "1px 0px 5px rgb(167, 2, 185)",
        margin: "20px auto",
        maxWidth: "80%",
        height: "60px",
        display: "flex",
        justifyContent: "center",
        left: "50%",
        transform: "translateX(-50%)",
        top: 0,
        zIndex: 1200,
        transition: "all 0.3s ease-in-out",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        {/* Left Side - Dark Mode Toggle */}
        <IconButton onClick={() => setDarkMode(!darkMode)} color="inherit">
          {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>

        {/* Center - Logo */}
        <Box sx={{ flexGrow: 1, textAlign: "center" }}>
          <a href="#home">
            <img
              src={logo}
              alt="SAMEERA"
              style={{
                maxHeight: "50px",
                maxWidth: "200px",
                cursor: "pointer",
              }}
            />
          </a>
        </Box>

        {/* Navigation Links (Desktop - Hidden Below 1170px) */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            gap: "60px",
            "@media (max-width: 1170px)": {
              display: "none",
            },
          }}
        >
          {navLinks.map((link, index) => (
            <Button key={index} color="inherit" href={link.href}>
              {link.text}
            </Button>
          ))}
        </Box>

        {/* Drawer for Mobile Navigation (Visible Below 1170px) */}
        <IconButton
          edge="start"
          color="inherit"
          sx={{
            display: { xs: "block", md: "none" },
            "@media (max-width: 1170px)": {
              display: "block",
            },
          }}
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>

        <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
          <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            <List>
              {navLinks.map((link, index) => (
                <ListItem button key={index} component="a" href={link.href}>
                  <ListItemText primary={link.text} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}
