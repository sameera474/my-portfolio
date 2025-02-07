import React from "react";
import { Box, TextField, Button, Typography, Grid, Paper } from "@mui/material";

export default function Contact() {
  return (
    <Box sx={{ p: 5, display: "flex", justifyContent: "center" }}>
      <Paper
        elevation={6}
        sx={{
          p: 5,
          width: "100%",
          maxWidth: "600px",
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(255, 255, 255, 0.1)", // Glass effect
          borderRadius: "15px",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          color: "white", // Ensure text is visible
          textAlign: "center",
          transition: "all 0.3s ease-in-out", // Smooth effect
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ color: "white" }}>
          Contact Me
        </Typography>

        <form>
          <TextField
            fullWidth
            label="Name"
            margin="normal"
            variant="outlined"
            sx={{
              bgcolor: "background.default", // Matches theme
              input: { color: "text.primary" }, // Text adapts to theme
            }}
          />

          <TextField
            fullWidth
            label="Email"
            margin="normal"
            variant="outlined"
            sx={{
              bgcolor: "background.default",
              input: { color: "text.primary" },
            }}
          />

          <TextField
            fullWidth
            label="Phone Number"
            margin="normal"
            variant="outlined"
            sx={{
              bgcolor: "background.default",
              input: { color: "text.primary" },
            }}
          />

          <TextField
            fullWidth
            label="Message"
            multiline
            rows={4}
            margin="normal"
            variant="outlined"
            sx={{
              bgcolor: "background.default",
              input: { color: "text.primary" },
            }}
          />

          <Button
            variant="contained"
            color="secondary"
            sx={{ mt: 3, width: "100%" }}
            type="submit"
          >
            Submit
          </Button>
        </form>
      </Paper>
    </Box>
  );
}
