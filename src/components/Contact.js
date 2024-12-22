import React from "react";
import { Box, TextField, Button, Typography, Grid } from "@mui/material";

export default function Contact() {
  return (
    <Box sx={{ p: 5, bgcolor: "grey.200" }}>
      <Typography variant="h4" align="center" gutterBottom>
        Contact Me
      </Typography>
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={8} md={6}>
          <form>
            <TextField fullWidth label="Name" margin="normal" />
            <TextField fullWidth label="Email" margin="normal" />
            <TextField fullWidth label="Phone Number" margin="normal" />
            <TextField
              fullWidth
              label="Message"
              multiline
              rows={4}
              margin="normal"
            />
            <Button
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
              type="submit"
            >
              Submit
            </Button>
          </form>
        </Grid>
      </Grid>
    </Box>
  );
}
