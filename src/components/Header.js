import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

// Import both logos
import logoWhite from "../assets/Logo/logo-white.png"; // White logo for dark mode
import logoDark from "../assets/Logo/logo-dark.png"; // Dark logo for light mode

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
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "Contact", href: "#contact" },
  ];

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: darkMode
          ? "rgba(20, 20, 20, 0.9)"
          : "rgba(255, 255, 255, 0.9)",
        color: darkMode ? "#ffffff" : "#000000",
        borderRadius: "40px",
        boxShadow: darkMode
          ? "1px 0px 5px rgb(167, 2, 185)"
          : "1px 0px 5px rgba(0, 0, 0, 0.2)",
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
        sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}
      >
        {/* Dark Mode Toggle */}
        <IconButton onClick={() => setDarkMode(!darkMode)} color="inherit">
          {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>

        {/* Dynamic Logo */}
        <Box sx={{ flexGrow: 1, textAlign: "center" }}>
          <a href="#home">
            <img
              src={darkMode ? logoWhite : logoDark}
              alt="SAMEERA"
              style={{
                maxHeight: "50px",
                maxWidth: "200px",
                cursor: "pointer",
                transition: "all 0.3s ease-in-out",
              }}
            />
          </a>
        </Box>

        {/* Navigation Links */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: "30px" }}>
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              style={{
                textDecoration: "none",
                color: darkMode ? "white" : "black",
              }}
            >
              {link.text}
            </a>
          ))}
        </Box>

        {/* Mobile Navigation Drawer */}
        <IconButton
          edge="start"
          color="inherit"
          sx={{ display: { xs: "block", md: "none" } }}
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>

        <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
          <Box sx={{ width: 250 }}>
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
