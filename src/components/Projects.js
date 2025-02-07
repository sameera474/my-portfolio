import React from "react";
import {
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";

// Import images directly
import project1 from "../assets/images/GameProject.png";
import project2 from "../assets/images/Project---Wacky-Tales-Weaver.png";
import project3 from "../assets/images/Weather-Dashboard-Application.png";
import project4 from "../assets/images/project-4.png";
import project5 from "../assets/images/project-5.png";
import project6 from "../assets/images/project-6.png";
import project7 from "../assets/images/project-7.png";

const projects = [
  {
    title: "Memory Game",
    img: project1,
    github: "https://github.com/sameera474/Game-Project.git",
    live: "https://sameera474.github.io/Game-Project/",
  },
  {
    title: "Wacky Tales Weaver",
    img: project2,
    github: "https://github.com/sameera474/Whacky-Story-Weaver.git",
    live: "https://sameera474.github.io/Whacky-Story-Weaver/",
  },
  {
    title: "Weather Dashboard Application",
    img: project3,
    github: "https://github.com/sameera474/Weather-Dashboard-Application",
    live: "https://sameera474.github.io/Weather-Dashboard-Application/",
  },
  {
    title: "Figma Mobile App (UI/UX Designs)",
    img: project4,
    github:
      "https://www.figma.com/design/LClhp5XqdZn9dHygwGVMIi/W-1-App-Updated?node-id=0-1&t=OCw1dKXHbCdVy9Ya-1",
    live: "https://www.figma.com/proto/LClhp5XqdZn9dHygwGVMIi/W-1-App-Updated?node-id=1-3&p=f&t=AcLtfCD1czwC6OKJ-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A3",
  },
  {
    title: "Student Portal for Tuition Class",
    img: project5,
    github: "https://github.com/sameera474/the_hub-add-php",
    live: "#",
  },
  {
    title: "E-commerce Project",
    img: project6,
    github: "https://github.com/sameera474/E-commerce-Web-Site",
    live: "#",
  },
  {
    title: "Lawnmower Project",
    img: project7,
    github: "https://github.com/sameera474/lawnmower-project-final.git",
    live: "https://lawnmower-project-final.vercel.app/",
  },
];

export default function Projects() {
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
        Projects
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                boxShadow: 3,
                backdropFilter: "blur(10px)",
                backgroundColor: "rgba(255, 255, 255, 0.1)", // Glass effect
                borderRadius: "15px",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                color: "white",
              }}
            >
              <CardMedia component="img" image={project.img} height="140" />
              <CardContent>
                <Typography variant="h6" sx={{ color: "white" }}>
                  {project.title}
                </Typography>
                <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
                  <Button
                    size="small"
                    variant="outlined"
                    href={project.github}
                    target="_blank"
                    sx={{
                      color: "white",
                      borderColor: "rgba(255, 255, 255, 0.5)",
                      "&:hover": {
                        backgroundColor: "rgba(255, 255, 255, 0.2)",
                      },
                    }}
                  >
                    GitHub
                  </Button>
                  {project.live !== "#" && (
                    <Button
                      size="small"
                      variant="contained"
                      color="primary"
                      href={project.live}
                      target="_blank"
                    >
                      Live
                    </Button>
                  )}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
