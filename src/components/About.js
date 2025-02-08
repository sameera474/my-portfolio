import React from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemText,
  Button,
} from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import CodeIcon from "@mui/icons-material/Code";

// Import images
import profilePic from "../assets/images/profile pic 2.gif";
import htmlIcon from "../assets/icons/HTML.png";
import cssIcon from "../assets/icons/CSS.png";
import jsIcon from "../assets/icons/Js.png";
import reactIcon from "../assets/icons/React.png";
import nodeIcon from "../assets/icons/node-js.png";
import scssIcon from "../assets/icons/SCSS.png";
import mongoIcon from "../assets/icons/mongodb.svg";
import expressIcon from "../assets/icons/express-js.webp";

// Import certificates
import certFullStack from "../assets/certificates/Certificate of Completion - Full Stack Development.png";
import certPython from "../assets/certificates/Python-1.png";
import certMBA from "../assets/certificates/MBA.png";
import certBSc from "../assets/certificates/UOM-Degree.png";

export default function About() {
  return (
    <Box sx={{ p: 5 }}>
      {/* About Me Title */}
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{
          color: "text.primary", // Apply theme-based text color
          fontWeight: "bold",
          textTransform: "uppercase",
          letterSpacing: 2,
        }}
      >
        About Me
      </Typography>

      {/* Profile Image and Education Section */}
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={4} textAlign="center">
          <img
            src={profilePic}
            alt="Profile"
            style={{
              width: "100%",
              maxWidth: "250px",
              borderRadius: "15px",
            }}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper
            elevation={6}
            sx={{
              p: 4,
              backdropFilter: "blur(10px)",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
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
      </Grid>

      {/* Certifications Section */}
      <Box sx={{ mt: 5, textAlign: "center" }}>
        <Typography variant="h5" sx={{ color: "text.primary", mb: 3 }}>
          Certifications
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {[
            {
              title: "Full-Stack Development",
              img: certFullStack,
              file: "Certificate-FullStack.pdf",
            },
            {
              title: "Python Program",
              img: certPython,
              file: "Certificate-Python.pdf",
            },
            {
              title: "Master of Business Administration",
              img: certMBA,
              file: "Certificate-MBA.pdf",
            },
            {
              title: "BSc in Materials Science & Engineering",
              img: certBSc,
              file: "Certificate-BSc.pdf",
            },
          ].map((cert, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Paper
                elevation={6}
                sx={{
                  p: 3,
                  backdropFilter: "blur(10px)",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  borderRadius: "15px",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  color: "white",
                  textAlign: "center",
                }}
              >
                <Typography variant="h6">{cert.title}</Typography>
                <img
                  src={cert.img}
                  alt="Certificate"
                  style={{
                    width: "100%",
                    borderRadius: "10px",
                    marginTop: "10px",
                  }}
                />
                <Button
                  variant="outlined"
                  color="secondary"
                  sx={{ mt: 2 }}
                  href={`/assets/certificates/${cert.file}`}
                  download
                >
                  Download
                </Button>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Skills Section */}
      <Box sx={{ mt: 5, textAlign: "center" }}>
        <Typography variant="h5" sx={{ color: "text.primary", mb: 2 }}>
          Skills & Technologies
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {[
            htmlIcon,
            cssIcon,
            jsIcon,
            reactIcon,
            nodeIcon,
            scssIcon,
            mongoIcon,
            expressIcon,
          ].map((icon, index) => (
            <Grid item key={index} xs={3} sm={2} md={1}>
              <img src={icon} alt="Skill Icon" style={{ width: "50px" }} />
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Experience Section */}
      <Box sx={{ mt: 5, textAlign: "center" }}>
        <Paper
          elevation={6}
          sx={{
            p: 4,
            backdropFilter: "blur(10px)",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            borderRadius: "15px",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            color: "white",
            textAlign: "center",
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
    </Box>
  );
}
