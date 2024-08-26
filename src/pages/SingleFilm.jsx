import { Grid, Box } from "@mui/material";
import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { FilmsContext } from "../context/FilmsContext";
import SingleItemHeader from "../components/SingleItemHeader/SingleItemHeader";
import SingleItemTabs from "../components/SingleItemTabs/SingleItemTabs";

const SingleFilm = () => {
  const { filmId } = useParams();
  const { data } = useContext(FilmsContext);
  const selectedFilm = data.find((el) => el.show.id === parseInt(filmId));

  if (!selectedFilm) {
    return <div>Film not found</div>;
  }

  return (
    <Box sx={{ backgroundColor: "#141414", minHeight: "100vh" }}>
      <Grid container>
        <Grid item xs={12}>
          <SingleItemHeader film={selectedFilm} />
        </Grid>
      </Grid>
      <Box sx={{ mt: 5 }}>
        <SingleItemTabs film={selectedFilm} />
      </Box>
      <Box sx={{ mt: 10 }}>
      </Box>
    </Box>
  );
};

export default SingleFilm;