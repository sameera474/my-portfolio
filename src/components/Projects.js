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

const projects = [
  { title: "Memory Game", img: "/assets/project1.png", github: "#", live: "#" },
  {
    title: "Weather Dashboard",
    img: "/assets/project2.png",
    github: "#",
    live: "#",
  },
  {
    title: "Lawnmower Project",
    img: "/assets/project3.png",
    github: "#",
    live: "#",
  },
];

export default function Projects() {
  return (
    <Box sx={{ p: 5 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Projects
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardMedia component="img" image={project.img} height="140" />
              <CardContent>
                <Typography variant="h6">{project.title}</Typography>
                <Button size="small" href={project.github}>
                  GitHub
                </Button>
                <Button size="small" href={project.live}>
                  Live
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
