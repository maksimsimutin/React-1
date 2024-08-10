import React from "react";

import style from "./index.module.css";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { Button } from "@mui/material";

function SingleCard({ id, name, time, image, onCardClick }) {
  const handleClick = () => {
    onCardClick(id);
  };

  return (
    <Card sx={{ width: 345, height: 222, position: "relative" }}>
      <CardMedia
        component="img"
        image={image}
        alt={name}
        sx={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
      <div
        className={style.containarCard}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <h2 style={{ color: "#fff" }}>{name}</h2>
        <p style={{ color: "#fff" }}>{time}</p>
        <div className={style.cardButton}>
          <Button
            onClick={handleClick}
            sx={{
              border: "1px solid #E50914",
              background: "#E50914",
              color: "#fff",
            }}
          >
            Show more
          </Button>
        </div>
      </div>
    </Card>
  );
}

export default SingleCard;
