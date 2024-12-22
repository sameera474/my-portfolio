import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function Header() {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <IconButton edge="start" color="inherit" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          SAMEERA
        </Typography>
        <Box>
          <Button color="inherit" href="#home">
            Home
          </Button>
          <Button color="inherit" href="#about">
            About
          </Button>
          <Button color="inherit" href="#experience">
            Experience
          </Button>
          <Button color="inherit" href="#projects">
            Projects
          </Button>
          <Button variant="contained" color="secondary" href="#contact">
            Contact
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
