import { Link } from 'react-router-dom';
import Form from '../Form/Form';
import List from '../List/List';
import { RecipeInterface } from '../Recipe/Recipe';
import { useState } from 'react';

interface propsInterface {
  recipes: RecipeInterface[];
  setRecipes: React.Dispatch<React.SetStateAction<RecipeInterface[]>>;
  setMyFavorites: React.Dispatch<React.SetStateAction<RecipeInterface[]>>;
  setWaiting: React.Dispatch<React.SetStateAction<boolean>>;
  waiting: boolean;
}

const Search = ({recipes, setRecipes, setMyFavorites, setWaiting, waiting}: propsInterface) => {


  return (
    <>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/search">Search</Link>
      <Link to="/favorites">Favorites</Link>
      <Link to="/about">About</Link>
    </nav>
    <section className="searchPage__form">
      <Form setRecipes={setRecipes} setWaiting={setWaiting} />
      <h2 className={ waiting === true ? "waiting" : "notWaiting"}>Loading...</h2>
      <List recipes={recipes} setRecipes={setRecipes} setMyFavorites={setMyFavorites}/>
    </section>
      <footer>
        <p>Made from Fabrizio Onorio for &lt;/salt&gt; Hackday</p>
      </footer>
    </>
  );
}

export default Search;


