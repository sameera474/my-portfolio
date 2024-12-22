import React from "react";
import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        bgcolor: "primary.dark",
        color: "white",
        py: 2,
        textAlign: "center",
      }}
    >
      <Typography variant="body2">
        © 2024 Sameera Wagaarachchige | All Rights Reserved
      </Typography>
    </Box>
  );
}
