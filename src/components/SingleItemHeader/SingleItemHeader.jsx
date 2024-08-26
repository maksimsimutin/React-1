import React, { useContext } from "react";

import GradeIcon from "@mui/icons-material/Grade";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddIcon from "@mui/icons-material/Add";
import { Box, Typography, IconButton } from "@mui/material";

import { useParams } from "react-router-dom";

import useFormatDate from "../../hooks/useFormatDate";
import useFormatRuntime from "../../hooks/useFormatRuntime";
import { FilmsContext } from "../../context/FilmsContext";

const SingleItemHeader = () => {
  const { filmId } = useParams();
  const { data } = useContext(FilmsContext);
  const selectedFilm = data?.find((el) => el.show.id === parseInt(filmId));

  const formatRuntime = useFormatRuntime();
  const formatDate = useFormatDate();

  if (!selectedFilm) {
    return <div>Film not found</div>;
  }

  const { show } = selectedFilm;
  const { name, genres, runtime, ended, rating, image } = show;

  return (
    <Box sx={{ p: 2, bgcolor: "#141414", color: "#dedede" }}>
      <Box sx={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}>
        <Box sx={{ flex: 1, p: 1 }}>
          <Typography variant="h2" sx={{ textTransform: "uppercase" }}>
            {name}
          </Typography>
          <Typography sx={{ color: "#BE2C25" }}>{genres.join(", ")}</Typography>
          <Box sx={{ display: "flex", gap: 3, mt: 1 }}>
            <Typography>{formatRuntime(runtime)}</Typography>
            <Typography>{formatDate(ended)}</Typography>
          </Box>
          <Box sx={{ display: "flex", gap: 3, mt: 1, color: "#D22F27" }}>
            <IconButton
              sx={{
                bgcolor: "#fff",
                border: "4px solid gray",
                borderRadius: "50%",
                p: 1,
                flexShrink: 0,
              }}
            >
              <ShareIcon />
            </IconButton>
            <IconButton
              sx={{
                bgcolor: "#fff",
                border: "4px solid gray",
                borderRadius: "50%",
                p: 1,
                flexShrink: 0,
              }}
            >
              <FavoriteIcon />
            </IconButton>
            <IconButton
              sx={{
                bgcolor: "#fff",
                border: "4px solid gray",
                borderRadius: "50%",
                p: 1,
                flexShrink: 0,
              }}
            >
              <AddIcon />
            </IconButton>
          </Box>
        </Box>
        <Box
          sx={{
            color: "#D22F27",
            lineHeight: "80px",
            ml: 2,
            width: 170,
            height: 100,
            flexShrink: 0,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <GradeIcon />
          <GradeIcon />
          <GradeIcon />
          <GradeIcon />
          <GradeIcon />
        </Box>
        <Typography sx={{ lineHeight: "70px", ml: 2 }}>
          {rating?.average ?? ""}
        </Typography>
        <Box sx={{ flexShrink: 0, ml: 2 }}>
          <img
            src={image?.medium ?? ""}
            alt={'${name} Poster'}
            style={{ borderRadius: "8px", maxWidth: "170px" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default SingleItemHeader;