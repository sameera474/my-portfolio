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
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import StarIcon from "@mui/icons-material/Star";

// Import skill icons
import htmlIcon from "../assets/icons/HTML.png";
import cssIcon from "../assets/icons/CSS.png";
import jsIcon from "../assets/icons/Js.png";
import reactIcon from "../assets/icons/React.png";
import nodeIcon from "../assets/icons/node-js.png";
import scssIcon from "../assets/icons/SCSS.png";
import mongoIcon from "../assets/icons/mongodb.svg";
import expressIcon from "../assets/icons/express-js.webp";

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
  const renderStars = (rating) => (
    <Box sx={{ display: "flex", flexWrap: "nowrap", gap: 0.3 }}>
      {Array.from({ length: rating }, (_, i) => (
        <StarIcon key={i} sx={{ color: "gold", fontSize: "18px" }} />
      ))}
    </Box>
  );

  return (
    <Box sx={{ p: { xs: 2, md: 5 } }}>
      {/* Experience Title */}
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{
          color: "text.primary",
          fontWeight: "bold",
          textTransform: "uppercase",
          letterSpacing: 2,
        }}
      >
        Experience
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {/* Frontend Development Section */}
        <Grid item xs={12} sm={6} md={5}>
          <Paper
            elevation={6}
            sx={{
              p: { xs: 3, md: 4 },
              backdropFilter: "blur(10px)",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              borderRadius: "15px",
              border: "1px solid rgba(255, 255, 255, 0.2)",
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
                  {renderStars(skill.rating)}
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>

        {/* Backend Development Section */}
        <Grid item xs={12} sm={6} md={5}>
          <Paper
            elevation={6}
            sx={{
              p: { xs: 3, md: 4 },
              backdropFilter: "blur(10px)",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              borderRadius: "15px",
              border: "1px solid rgba(255, 255, 255, 0.2)",
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
                  {renderStars(skill.rating)}
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>
      </Grid>

      {/* ✅ Experience Stats */}
      <Box sx={{ mt: 5, textAlign: "center" }}>
        <Paper
          elevation={6}
          sx={{
            p: 4,
            backdropFilter: "blur(10px)",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            borderRadius: "15px",
            border: "1px solid rgba(255, 255, 255, 0.2)",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mb: 2,
            }}
          >
            <EmojiEventsIcon
              sx={{ mr: 1, fontSize: 30, color: "secondary.main" }}
            />
            Experience
          </Typography>
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={6} md={4}>
              <Typography variant="h3">2</Typography>
              <Typography>Years of Experience</Typography>
            </Grid>
            <Grid item xs={6} md={4}>
              <Typography variant="h3">+20</Typography>
              <Typography>Projects Completed</Typography>
            </Grid>
          </Grid>
        </Paper>
      </Box>

      {/* ✅ Skills & Technologies Section - FIXED ALIGNMENT */}
      <Box sx={{ mt: 5, textAlign: "center" }}>
        <Typography
          variant="h5"
          sx={{
            color: "text.primary",
            mb: 2,
            fontWeight: "bold",
            textTransform: "uppercase",
          }}
        >
          Skills & Technologies
        </Typography>
        <Grid
          container
          spacing={2}
          justifyContent="center"
          sx={{
            maxWidth: "800px",
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          {[
            { icon: htmlIcon, name: "HTML" },
            { icon: cssIcon, name: "CSS" },
            { icon: jsIcon, name: "JavaScript" },
            { icon: reactIcon, name: "React.js" },
            { icon: nodeIcon, name: "Node.js" },
            { icon: scssIcon, name: "SCSS" },
            { icon: mongoIcon, name: "MongoDB" },
            { icon: expressIcon, name: "Express.js" },
          ].map((item, index) => (
            <Grid item key={index} xs={4} sm={3} md={2} lg={1.5}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img
                  src={item.icon}
                  alt={item.name}
                  style={{ width: "50px", height: "50px", marginBottom: "8px" }}
                />
                <Typography variant="body2">{item.name}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
