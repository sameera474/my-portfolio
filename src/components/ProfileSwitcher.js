import React from "react";
import { Box, Button } from "@mui/material";

export default function ProfileSwitcher({ profile, setProfile }) {
  return (
    <Box
      sx={{
        textAlign: "center",
        mt: { xs: 14, sm: 14, md: 14, lg: 14 }, // Adjust spacing below navbar
        mb: { xs: 1, sm: 2, md: 3 }, // Responsive bottom margin
        display: "flex",
        justifyContent: "center",
        gap: { xs: 1.5, sm: 2, md: 3 }, // Adjust space between buttons
        flexWrap: "wrap", // Ensures wrapping on small screens
        width: "100%", // Full width container
        px: { xs: 2, sm: 4 }, // Padding for better layout on mobile
      }}
    >
      <Button
        onClick={() => setProfile("fullstack")}
        variant={profile === "fullstack" ? "contained" : "outlined"}
        color="secondary"
        sx={{
          px: { xs: 2, sm: 3, md: 4 },
          py: { xs: 1, sm: 1.5, md: 2 },
          fontSize: { xs: "14px", sm: "16px", md: "18px" }, // Responsive font
          borderRadius: "50px",
          width: { xs: "50%", sm: "auto" }, // Full width on mobile, auto on larger screens
        }}
      >
        Full-Stack Developer
      </Button>

      <Button
        onClick={() => setProfile("graphic")}
        variant={profile === "graphic" ? "contained" : "outlined"}
        color="secondary"
        sx={{
          px: { xs: 2, sm: 3, md: 4 },
          py: { xs: 1, sm: 1.5, md: 2 },
          fontSize: { xs: "14px", sm: "16px", md: "18px" },
          borderRadius: "50px",
          width: { xs: "50%", sm: "auto" }, // Full width on mobile
        }}
      >
        Graphic Designer
      </Button>
    </Box>
  );
}
