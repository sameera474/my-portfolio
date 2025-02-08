import React from "react";
import { Box, Typography, Button, Avatar, Grid } from "@mui/material";
import profilePic from "../assets/images/profile-pic.png"; // Profile Image
import linkedInIcon from "../assets/icons/linkedin.svg"; // LinkedIn Icon
import githubIcon from "../assets/icons/github.svg"; // GitHub Icon
import cvFile from "../assets/CV/CV-Sameera-Wagaarachchige-FD.pdf"; // CV File

export default function Home() {
  return (
    <Box
      id="home"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: { xs: 2, sm: 5, md: 12 },
        textAlign: { xs: "center", md: "left" },
        color: "white",
      }}
    >
      <Grid
        container
        spacing={{ xs: 2, md: 6 }}
        alignItems="center"
        justifyContent="center"
        direction={{ xs: "column", md: "row" }} // Vertical on mobile, horizontal on desktop
        sx={{
          maxWidth: "1300px",
          transition: "all 0.5s ease-in-out",
        }}
      >
        {/* Left Side - Introduction & Social Media */}
        <Grid item xs={12} md={4} textAlign={{ xs: "center", md: "right" }}>
          <Typography
            variant="h6"
            sx={{
              color: "secondary.main",
              letterSpacing: 2,
              fontWeight: "bold",
              textTransform: "uppercase",
              mt: { xs: 12, sm: 14, md: 0 },
              fontSize: { xs: "16px", sm: "18px", md: "20px" },
            }}
          >
            Full-Stack Web Developer
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "32px", sm: "40px", md: "48px" },
            }}
          >
            Sameera
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              mb: 1,
              fontSize: { xs: "32px", sm: "40px", md: "48px" },
            }}
          >
            Wagaarachchige
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: 2,
              fontSize: { xs: "14px", sm: "16px", md: "18px" },
              maxWidth: "400px",
              mx: { xs: "auto", md: "unset" },
            }}
          >
            I'm a <b>Full-Stack Web Developer</b> based in Finland, crafting
            digital solutions with passion and precision.
          </Typography>

          {/* Social Media Links */}
          <Box
            sx={{
              mt: 2,
              display: "flex",
              justifyContent: { xs: "center", md: "flex-end" },
              gap: 2,
            }}
          >
            <a
              href="https://www.linkedin.com/in/sameera-chaturanga-wagaarachchige/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedInIcon} alt="LinkedIn" style={{ width: 35 }} />
            </a>
            <a
              href="https://github.com/sameera474"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={githubIcon} alt="GitHub" style={{ width: 35 }} />
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
              width: { xs: "100%", sm: "auto" },
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
              width: { xs: 300, sm: 325, md: 350 },
              height: { xs: 300, sm: 325, md: 350 },
              mx: "auto",
              boxShadow: "0px 0px 15px rgba(255,255,255,0.2)",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
