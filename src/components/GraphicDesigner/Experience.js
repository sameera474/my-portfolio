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
import BrushIcon from "@mui/icons-material/Brush";
import StarIcon from "@mui/icons-material/Star";
import TimelineIcon from "@mui/icons-material/Timeline";

export default function GraphicExperience() {
  const graphicSkills = [
    { name: "Adobe Illustrator", rating: 5 },
    { name: "Adobe Photoshop", rating: 5 },
    { name: "Adobe Premiere Pro", rating: 5 },
    { name: "Figma", rating: 5 },
  ];

  // Function to render star ratings (keeps them in one row)
  const renderStars = (rating) => {
    return (
      <Box sx={{ display: "flex", flexWrap: "nowrap", gap: 0.3 }}>
        {Array.from({ length: rating }, (_, i) => (
          <StarIcon key={i} sx={{ color: "gold", fontSize: "18px" }} />
        ))}
      </Box>
    );
  };

  return (
    <Box sx={{ p: { xs: 2, md: 5 } }}>
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
          color: "text.primary",
        }}
      >
        Graphic Design Experience
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {/* Tools & Software Section */}
        <Grid item xs={12} sm={6} md={5}>
          <Paper
            elevation={6}
            sx={{
              p: { xs: 3, md: 4 },
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
              sx={{
                display: "flex",
                alignItems: "center",
                mb: 2,
              }}
            >
              <BrushIcon
                sx={{ mr: 1, fontSize: 30, color: "secondary.main" }}
              />
              Tools & Software
            </Typography>
            <List>
              {graphicSkills.map((skill, index) => (
                <ListItem
                  key={index}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexWrap: "nowrap",
                  }}
                >
                  <ListItemText primary={skill.name} />
                  {renderStars(skill.rating)}
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>

        {/* Experience Timeline Section */}
        <Grid item xs={12} sm={6} md={5}>
          <Paper
            elevation={6}
            sx={{
              p: { xs: 3, md: 4 },
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
              sx={{
                display: "flex",
                alignItems: "center",
                mb: 2,
              }}
            >
              <TimelineIcon
                sx={{ mr: 1, fontSize: 30, color: "secondary.main" }}
              />
              Experience Timeline
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                color: "secondary.main",
                textAlign: "center",
                mb: 1,
              }}
            >
              12+ Years
            </Typography>
            <Typography variant="body1" sx={{ textAlign: "center" }}>
              Over a decade of experience in crafting **digital art, branding,**
              and **multimedia designs** with **precision & creativity**.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
