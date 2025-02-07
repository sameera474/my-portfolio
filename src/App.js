import React, { useState, useMemo } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline, Box } from "@mui/material";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import backgroundImage from "./assets/images/background-1.jpg"; // Import background image

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Create a theme that switches dynamically
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? "dark" : "light",
          primary: { main: darkMode ? "#ffffff" : "#0E0D27" },
          secondary: { main: "#FE04B3" },
          background: {
            default: darkMode ? "#121212" : "#ffffff", // Main background
            paper: darkMode ? "#1E1E1E" : "#f5f5f5", // Section background
          },
          text: {
            primary: darkMode ? "#ffffff" : "#000000", // Ensure text is visible
          },
        },
      }),
    [darkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: "100vh",
          backgroundImage: `url(${backgroundImage})`, // Background image remains
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          transition: "all 0.5s ease-in-out", // Smooth theme transition
          bgcolor: theme.palette.background.default, // Changes on theme switch
        }}
      >
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <Box sx={{ color: theme.palette.text.primary, p: 3 }}>
          <div id="home">
            <Home />
          </div>
          <div id="about">
            <About />
          </div>
          <div id="projects">
            <Projects />
          </div>
          <div id="contact">
            <Contact />
          </div>
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}
