// CardList.js
import React from "react";
import SingleCard from "./singleCard";

import style from "./index.module.css";

function CardList({ movies, onCardClick }) {
  return (
    <div className={style.cardsContainer}>
      {movies.map((movie) => (
        <SingleCard
          key={movie.id}
          id={movie.id}
          name={movie.name}
          time={movie.time}
          image={movie.image}
          onCardClick={onCardClick}
        />
      ))}
    </div>
  );
}

export default CardList;
