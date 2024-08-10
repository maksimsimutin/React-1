// App.js
import React from "react";

import Menu from "./components/menu/menu";
import CardList from "./components/singleCard/cardList";
import Footer from "./components/footer/footer";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import TvShows from "./pages/tvShows";
import AboutUs from "./pages/aboutUs";

import { movies } from "./components/singleCard/data.movies";

function App() {
  const handleCardClick = (id) => {
    console.log(`Выбран фильм с id: ${id}`);
  };

  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tv-shows" element={<TvShows />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
      <CardList movies={movies} onCardClick={handleCardClick} />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
