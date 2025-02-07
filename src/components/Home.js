import React from "react";
import { Box, Typography, Button, Avatar, Grid } from "@mui/material";
import profilePic from "../assets/images/profile pic.png"; // Profile Image
import linkedInIcon from "../assets/icons/linkedin.svg"; // LinkedIn Icon
import githubIcon from "../assets/icons/github.svg"; // GitHub Icon
import cvFile from "../assets/CV/CV-Sameera Wagaarachchige FD.pdf"; // CV File

export default function Home() {
  return (
    <Box
      id="home"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: { xs: 3, sm: 5, md: 12 }, // Adjusted padding for proper alignment
        textAlign: { xs: "center", md: "left" },
        color: "white",
      }}
    >
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        {/* Left Side - Introduction & Social Media */}
        <Grid item xs={12} md={4} textAlign={{ xs: "center", md: "right" }}>
          <Typography
            variant="h6"
            sx={{
              color: "secondary.main",
              letterSpacing: 3,
              fontWeight: "bold",
              textTransform: "uppercase",
              mt: { xs: 8, sm: 10, md: 0 }, // Moves text down only on small screens
            }}
          >
            Graphic Designer
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: "bold", mt: 1 }}>
            Sameera
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: "bold", mb: 1 }}>
            Wagaarachchige
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            I'm a <b>Graphic Designer</b> based in Finland, designing digital
            arts with passion and precision.
          </Typography>

          {/* Social Media Links - Now properly aligned */}
          <Box
            sx={{
              mt: 2,
              display: "flex",
              justifyContent: { xs: "center", md: "flex-end" },
              gap: 2, // Adjusted spacing
            }}
          >
            <a
              href="https://www.linkedin.com/in/sameera-chaturanga-wagaarachchige/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedInIcon} alt="LinkedIn" style={{ width: 40 }} />
            </a>
            <a
              href="https://github.com/sameera474"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={githubIcon} alt="GitHub" style={{ width: 40 }} />
            </a>
          </Box>
        </Grid>

        {/* Middle Section - CV Download Button */}
        <Grid item xs={12} md={3} textAlign="center">
          <Button
            variant="contained"
            color="secondary"
            href={cvFile}
            download="CV-Sameera-Wagaarachchige.pdf"
            sx={{
              px: { xs: 4, md: 6 },
              py: 1.8,
              fontSize: { xs: "14px", md: "16px" },
              fontWeight: "bold",
              borderRadius: "50px",
            }}
          >
            Download CV
          </Button>
        </Grid>

        {/* Right Side - Profile Picture */}
        <Grid item xs={12} md={4} textAlign="center">
          <Avatar
            src={profilePic}
            sx={{
              width: { xs: 200, md: 320 }, // Increased image size slightly
              height: { xs: 200, md: 320 }, // Adjusted for better proportions
              mx: "auto",
              boxShadow: "0px 0px 15px rgba(255,255,255,0.2)",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
