import React from "react";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, Box } from "@mui/material";

const SingleCard = ({ id, title, image, handleClick }) => {
  return (
    <Card
      sx={{
        width: 395,
        height: 222,
        position: "relative",
        borderRadius: 0,
      }}
      onClick={() => handleClick(id)}
    >
      <CardMedia component="img" height="222px" image={image} alt={title} />
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(90deg, rgba(0, 0, 0, 0.80) 0%, rgba(20, 20, 20, 0.40) 50%, rgba(83, 100, 141, 0.00) 100%)",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: 40,
          left: 20,
          color: "white",
          textAlign: "left",
        }}
      >
        <Typography variant="h6" sx={{ fontSize: "1.15rem" }}>
          {title}
        </Typography>
        <Button
          sx={{
            border: "1px solid #E50914",
            borderRadius: "0",
            backgroundColor: "#E50914",
            width: "100px",
            height: "30px",
            color: "#fff",
            textTransform: "none",
          }}
        >
          Show more
        </Button>
      </Box>
    </Card>
  );
};

export default SingleCard;
