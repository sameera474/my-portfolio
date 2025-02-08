import React, { useState, useMemo } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline, Box } from "@mui/material";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import darkBackgroundImage from "./assets/images/background-1.jpg"; // Dark mode background
import lightBackgroundImage from "./assets/images/background-2.jpg"; // Light mode background

export default function App() {
  const [darkMode, setDarkMode] = useState(true); // ✅ Default set to dark mode

  // Create a dynamic theme
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? "dark" : "light",
          primary: { main: darkMode ? "#ffffff" : "#0E0D27" },
          secondary: { main: "#54B8FE" },
          background: {
            default: darkMode ? "#121212" : "#ffffff",
            paper: darkMode ? "#1E1E1E" : "#f5f5f5",
          },
          text: {
            primary: darkMode ? "#ffffff" : "#000000", // White text in dark mode, black in light mode
            secondary: darkMode ? "#b0b0b0" : "#555555",
          },
        },
        typography: {
          allVariants: {
            color: darkMode ? "#ffffff" : "#000000",
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
          scrollBehavior: "smooth",
          backgroundImage: `url(${
            darkMode ? darkBackgroundImage : lightBackgroundImage
          })`,
          backgroundSize: "cover",
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          transition: "all 0.5s ease-in-out",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <Box sx={{ p: 3 }}>
          {/* Home Section */}
          <Box id="home" sx={{ py: { xs: 6, sm: 8, md: 10 } }}>
            <Home darkMode={darkMode} />
          </Box>

          {/* About Section */}
          <Box id="about" sx={{ py: { xs: 6, sm: 8, md: 10 } }}>
            <About />
          </Box>

          {/* Experience Section */}
          <Box id="experience" sx={{ py: { xs: 6, sm: 8, md: 10 } }}>
            <Experience />
          </Box>

          {/* Projects Section */}
          <Box id="projects" sx={{ py: { xs: 6, sm: 8, md: 10 } }}>
            <Projects />
          </Box>

          {/* Contact Section */}
          <Box id="contact" sx={{ py: { xs: 6, sm: 8, md: 10 } }}>
            <Contact />
          </Box>
        </Box>

        <Footer />
      </Box>
    </ThemeProvider>
  );
}
