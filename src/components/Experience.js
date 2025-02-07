import React from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import StarIcon from "@mui/icons-material/Star";

export default function Experience() {
  const frontendSkills = [
    { name: "HTML", rating: 5 },
    { name: "CSS", rating: 5 },
    { name: "JavaScript", rating: 5 },
    { name: "TypeScript", rating: 5 },
    { name: "Next.js", rating: 5 },
    { name: "Node.js", rating: 5 },
    { name: "React.js", rating: 5 },
  ];

  const backendSkills = [
    { name: "MongoDB", rating: 5 },
    { name: "Node.js", rating: 5 },
    { name: "Express.js", rating: 5 },
    { name: "MySQL", rating: 5 },
    { name: "PostgreSQL", rating: 5 },
    { name: "Git", rating: 5 },
    { name: "GitHub", rating: 5 },
    { name: "GitLab", rating: 5 },
  ];

  // Function to render star ratings
  const renderStars = (rating) => {
    return Array.from({ length: rating }, (_, i) => (
      <StarIcon key={i} sx={{ color: "gold" }} />
    ));
  };

  return (
    <Box sx={{ p: 5 }}>
      {/* Experience Title */}
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
        Experience
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {/* Frontend Development Section */}
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
              <CodeIcon sx={{ mr: 1, fontSize: 30, color: "secondary.main" }} />
              Frontend Development
            </Typography>
            <List>
              {frontendSkills.map((skill, index) => (
                <ListItem
                  key={index}
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  <ListItemText primary={skill.name} />
                  <Box>{renderStars(skill.rating)}</Box>
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>

        {/* Backend Development Section */}
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
              <StorageIcon
                sx={{ mr: 1, fontSize: 30, color: "secondary.main" }}
              />
              Backend Development
            </Typography>
            <List>
              {backendSkills.map((skill, index) => (
                <ListItem
                  key={index}
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  <ListItemText primary={skill.name} />
                  <Box>{renderStars(skill.rating)}</Box>
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
