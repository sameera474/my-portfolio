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

// Import images for Graphic Design projects
import project1 from "../../assets/images-GD/project-4.jpg";
import project2 from "../../assets/images-GD/project-13.jpg";
import project3 from "../../assets/images-GD/project-8.jpg";
import project4 from "../../assets/images-GD/project-6.jpg";

// Define projects for Graphic Design
const graphicDesignProjects = [
  {
    title: "Low Poly Arts",
    img: project1,
    link: "https://wagadesigns.blogspot.com/2022/11/blog-post_17.html",
  },
  {
    title: "Illustrators",
    img: project2,
    link: "https://wagadesigns.blogspot.com/2022/11/blog-post.html",
  },
  {
    title: "Logo Designs",
    img: project3,
    link: "https://wagadesigns.blogspot.com/2022/11/blog-post_2.html#comment-form",
  },
  {
    title: "Other Designs",
    img: project4,
    link: "https://wagadesigns.blogspot.com/2023/09/blog-post.html",
  },
];

export default function Projects() {
  return (
    <Box sx={{ p: 5 }}>
      {/* Section Title */}
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{
          fontWeight: "bold",
          textTransform: "uppercase",
          letterSpacing: 2,
          color: "text.primary",
        }}
      >
        Graphic Design Projects
      </Typography>

      {/* Projects Grid */}
      <Grid container spacing={4}>
        {graphicDesignProjects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                boxShadow: 3,
                backdropFilter: "blur(10px)",
                backgroundColor: "rgba(255, 255, 255, 0.1)", // Glass effect
                borderRadius: "15px",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                transition: "transform 0.3s ease-in-out",
                "&:hover": { transform: "scale(1.05)" },
              }}
            >
              <CardMedia component="img" image={project.img} height="160" />
              <CardContent>
                <Typography
                  variant="h6"
                  sx={{ color: "text.primary", textAlign: "center" }}
                >
                  {project.title}
                </Typography>

                {/* View Collection Button */}
                <Box sx={{ textAlign: "center", mt: 2 }}>
                  <Button
                    size="small"
                    variant="contained"
                    color="primary"
                    href={project.link}
                    target="_blank"
                  >
                    View Collection
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
