import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Box } from "@mui/material";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Box id="home" sx={{ mt: 8 }}>
        <Home />
      </Box>
      <Box id="about">
        <About />
      </Box>
      <Box id="projects">
        <Projects />
      </Box>
      <Box id="contact">
        <Contact />
      </Box>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
