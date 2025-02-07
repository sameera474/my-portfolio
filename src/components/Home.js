import React from "react";
import { Box, Typography, Button, Avatar } from "@mui/material";
import profilePic from "../assets/images/profile pic.png"; // Import the image

export default function Home() {
  return (
    <Box
      sx={{
        // bgcolor: "primary.main",
        color: "white",
        py: 10,
        textAlign: "center",
      }}
    >
      <Avatar
        src={profilePic} // Use imported image
        sx={{ width: 350, height: 350, mx: "auto", mb: 3 }}
      />
      <Typography variant="h4">FULL-STACK WEB DEVELOPER</Typography>
      <Typography variant="h2">Sameera Wagaarachchige</Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        I'm a <b>Full-stack web developer</b> based in Finland, crafting digital
        solutions with passion and precision.
      </Typography>
      <Box sx={{ mt: 4 }}>
        <Button
          variant="contained"
          color="secondary"
          href="/assets/CV/CV-Sameera Wagaarachchige FD.pdf"
          download="CV-Sameera-Wagaarachchige.pdf"
        >
          Download CV
        </Button>
      </Box>
    </Box>
  );
}
