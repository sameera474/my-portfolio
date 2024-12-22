import React from "react";
import { Box, Typography, Button, Avatar } from "@mui/material";

export default function Home() {
  return (
    <Box
      sx={{
        bgcolor: "primary.main",
        color: "white",
        py: 10,
        textAlign: "center",
      }}
    >
      <Avatar
        src="/assets/profile.png"
        sx={{ width: 150, height: 150, mx: "auto", mb: 3 }}
      />
      <Typography variant="h4">FULL-STACK WEB DEVELOPER</Typography>
      <Typography variant="h1">Sameera Wagaarachchige</Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        I'm a <b>Full-stack web developer</b> based in Finland, crafting digital
        solutions with passion and precision.
      </Typography>
      <Box sx={{ mt: 4 }}>
        <Button
          variant="contained"
          color="secondary"
          href="/CV/Sameera-CV.pdf"
          download
        >
          Download CV
        </Button>
      </Box>
    </Box>
  );
}
