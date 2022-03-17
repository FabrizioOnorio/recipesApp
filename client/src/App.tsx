import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form/Form'
import Home from './components/Home/Home'
import Search from './components/Search/Search'
import Favorites from './components/Favorites/Favorites'
import About from './components/About/About'
import RecipesInterface from './components/Recipe/Recipe'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  const [recipes, setRecipes] = useState<typeof RecipesInterface[]>([]);
  const [myFavorites, setMyFavorites] = useState<Object[]>(() => {
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
        <Route path="/" element={<Home setRecipes={setRecipes} />} />
        <Route path="search" element={<Search setRecipes={setRecipes} recipes={recipes} setMyFavorites={setMyFavorites} />} />
        <Route path="favorites" element={<Favorites myFavorites={myFavorites} setMyFavorites={setMyFavorites} setRecipes={setRecipes} recipes={recipes} />} />
        <Route path="about" element={<About />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
