// import React, { useState, useMemo } from "react";
// import { ThemeProvider, createTheme } from "@mui/material/styles";
// import { CssBaseline, Box } from "@mui/material";
// import Header from "./components/Header";
// import Home from "./components/Home";
// import About from "./components/About";
// import Projects from "./components/Projects";
// import Experience from "./components/Experience";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
// import darkBackgroundImage from "./assets/images/background-1.jpg"; // Dark mode background
// import lightBackgroundImage from "./assets/images/background-2.jpg"; // Light mode background

// export default function App() {
//   const [darkMode, setDarkMode] = useState(true); // ✅ Default set to dark mode

//   // Create a dynamic theme
//   const theme = useMemo(
//     () =>
//       createTheme({
//         palette: {
//           mode: darkMode ? "dark" : "light",
//           primary: { main: darkMode ? "#ffffff" : "#0E0D27" },
//           secondary: { main: "#54B8FE" },
//           background: {
//             default: darkMode ? "#121212" : "#ffffff",
//             paper: darkMode ? "#1E1E1E" : "#f5f5f5",
//           },
//           text: {
//             primary: darkMode ? "#ffffff" : "#000000", // White text in dark mode, black in light mode
//             secondary: darkMode ? "#b0b0b0" : "#555555",
//           },
//         },
//         typography: {
//           allVariants: {
//             color: darkMode ? "#ffffff" : "#000000",
//           },
//         },
//       }),
//     [darkMode]
//   );

//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       <Box
//         sx={{
//           minHeight: "100vh",
//           scrollBehavior: "smooth",
//           backgroundImage: `url(${
//             darkMode ? darkBackgroundImage : lightBackgroundImage
//           })`,
//           backgroundSize: "cover",
//           backgroundPosition: "top center",
//           backgroundRepeat: "no-repeat",
//           backgroundAttachment: "fixed",
//           transition: "all 0.5s ease-in-out",
//           display: "flex",
//           flexDirection: "column",
//         }}
//       >
//         <Header darkMode={darkMode} setDarkMode={setDarkMode} />
//         <Box sx={{ p: 3 }}>
//           {/* Home Section */}
//           <Box id="home" sx={{ py: { xs: 6, sm: 8, md: 10 } }}>
//             <Home darkMode={darkMode} />
//           </Box>

//           {/* About Section */}
//           <Box id="about" sx={{ py: { xs: 6, sm: 8, md: 10 } }}>
//             <About />
//           </Box>

//           {/* Experience Section */}
//           <Box id="experience" sx={{ py: { xs: 6, sm: 8, md: 10 } }}>
//             <Experience />
//           </Box>

//           {/* Projects Section */}
//           <Box id="projects" sx={{ py: { xs: 6, sm: 8, md: 10 } }}>
//             <Projects />
//           </Box>

//           {/* Contact Section */}
//           <Box id="contact" sx={{ py: { xs: 6, sm: 8, md: 10 } }}>
//             <Contact />
//           </Box>
//         </Box>

//         <Footer />
//       </Box>
//     </ThemeProvider>
//   );
// }
import React, { useState, useMemo } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline, Box } from "@mui/material";
import { motion } from "framer-motion";
import { Element } from "react-scroll"; // ✅ Ensures correct scrolling

import Header from "./components/Header";
import ProfileSwitcher from "./components/ProfileSwitcher";
import About from "./components/About"; // ✅ Added About Section
import FullStackHome from "./components/Home";
import FullStackProjects from "./components/Projects";
import FullStackExperience from "./components/Experience";
import GraphicHome from "./components/GraphicDesigner/Home";
import GraphicProjects from "./components/GraphicDesigner/Projects";
import GraphicExperience from "./components/GraphicDesigner/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import darkBackgroundImage from "./assets/images/background-1.jpg";
import lightBackgroundImage from "./assets/images/background-2.jpg";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [profile, setProfile] = useState("fullstack");

  // ✅ Scroll to top when switching profiles
  const handleProfileSwitch = (selectedProfile) => {
    setProfile(selectedProfile);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // ✅ Create a dynamic theme
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
            primary: darkMode ? "#ffffff" : "#000000",
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
        {/* ✅ Navigation Bar */}
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />

        {/* ✅ Profile Switcher */}
        <ProfileSwitcher profile={profile} setProfile={handleProfileSwitch} />

        <Box sx={{ p: 3 }}>
          {/* ✅ Add Framer Motion for Smooth Transition */}
          <motion.div
            key={profile}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {profile === "fullstack" ? (
              <>
                <Element name="home">
                  <FullStackHome darkMode={darkMode} />
                </Element>
                <Element name="about">
                  <About />
                </Element>
                <Element name="experience">
                  <FullStackExperience />
                </Element>
                <Element name="projects">
                  <FullStackProjects />
                </Element>
              </>
            ) : (
              <>
                <Element name="home">
                  <GraphicHome darkMode={darkMode} />
                </Element>
                <Element name="about">
                  <About />
                </Element>
                <Element name="experience">
                  <GraphicExperience />
                </Element>
                <Element name="projects">
                  <GraphicProjects />
                </Element>
              </>
            )}
          </motion.div>

          {/* ✅ Contact Section (Common for Both Profiles) */}
          <Element name="contact">
            <Contact />
          </Element>
        </Box>

        {/* ✅ Footer */}
        <Footer />
      </Box>
    </ThemeProvider>
  );
}
