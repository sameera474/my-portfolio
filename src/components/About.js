import React from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";

export default function About() {
  return (
    <Box sx={{ p: 5 }}>
      {/* About Me Title */}
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{
          color: "white",
          fontWeight: "bold",
          textTransform: "uppercase",
          letterSpacing: 2,
        }}
      >
        About Me
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {/* Education Section */}
        <Grid item xs={12} md={5}>
          <Paper
            elevation={6}
            sx={{
              p: 4,
              backdropFilter: "blur(10px)",
              backgroundColor: "rgba(255, 255, 255, 0.1)", // Glass effect
              borderRadius: "15px",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              color: "white",
              textAlign: "left",
            }}
          >
            <Typography
              variant="h5"
              sx={{ display: "flex", alignItems: "center", mb: 2 }}
            >
              <SchoolIcon
                sx={{ mr: 1, fontSize: 30, color: "secondary.main" }}
              />
              Education
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary="2024 - Full-Stack Development, JAMK University" />
              </ListItem>
              <ListItem>
                <ListItemText primary="2022 - MBA, University of Suffolk" />
              </ListItem>
              <ListItem>
                <ListItemText primary="2015 - BSc in Materials Science, University of Moratuwa" />
              </ListItem>
            </List>
          </Paper>
        </Grid>

        {/* Certifications Section */}
        <Grid item xs={12} md={5}>
          <Paper
            elevation={6}
            sx={{
              p: 4,
              backdropFilter: "blur(10px)",
              backgroundColor: "rgba(255, 255, 255, 0.1)", // Glass effect
              borderRadius: "15px",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              color: "white",
              textAlign: "left",
            }}
          >
            <Typography
              variant="h5"
              sx={{ display: "flex", alignItems: "center", mb: 2 }}
            >
              <WorkspacePremiumIcon
                sx={{ mr: 1, fontSize: 30, color: "secondary.main" }}
              />
              Certifications
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary="Full-Stack Bootcamp, AI Cloud Academy" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Python for Beginners, University of Moratuwa" />
              </ListItem>
            </List>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
