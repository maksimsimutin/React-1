import { Box, Typography, Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
        textAlign: "center",
      }}
    >
      <Typography variant="h4">Page Not Found</Typography>
      <Link to="/home" style={{ textDecoration: "none" }}>
        <Button variant="contained" color="primary">
          Back to Home
        </Button>
      </Link>
    </Box>
  );
};

export default NotFound;