import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './components/Home/Home'
import Search from './components/Search/Search'
import Favorites from './components/Favorites/Favorites'
import About from './components/About/About'
import { RecipeInterface } from './components/Recipe/Recipe'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  const [waiting, setWaiting] = useState<boolean>(false);
  const [recipes, setRecipes] = useState<RecipeInterface[]>([]);
  const [myFavorites, setMyFavorites] = useState<RecipeInterface[]>(() => {
    if (window.localStorage.favorites) {
      const saved: string = localStorage.getItem("favorites") || "";
      const initialValue = JSON.parse(saved);
      return initialValue;
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(myFavorites));
  }, [myFavorites]);

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home setRecipes={setRecipes} setWaiting={setWaiting} />} />
        <Route path="search" element={<Search setRecipes={setRecipes} recipes={recipes} setMyFavorites={setMyFavorites} setWaiting={setWaiting} waiting={waiting} />} />
        <Route path="favorites" element={<Favorites myFavorites={myFavorites} setMyFavorites={setMyFavorites} setRecipes={setRecipes} recipes={recipes} />} />
        <Route path="about" element={<About />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
