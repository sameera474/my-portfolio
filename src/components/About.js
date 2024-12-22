import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";

export default function About() {
  return (
    <Box sx={{ p: 5 }}>
      <Typography variant="h4" align="center" gutterBottom>
        About Me
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6">Education</Typography>
            <ul>
              <li>2024 - Full-Stack Development, JAMK University</li>
              <li>2022 - MBA, University of Suffolk</li>
              <li>2015 - BSc in Materials Science, University of Moratuwa</li>
            </ul>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6">Certifications</Typography>
            <ul>
              <li>Full-Stack Bootcamp, AI Cloud Academy</li>
              <li>Python for Beginners, University of Moratuwa</li>
            </ul>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
