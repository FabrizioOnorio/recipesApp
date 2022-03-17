import { Link } from 'react-router-dom';
import Recipe from '../Recipe/Recipe';

const Favorites = ({ myFavorites, setMyFavorites, recipes, setRecipes }: any ) => {

  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/search">Search</Link>
        <Link to="/favorites">Favorites</Link>
        <Link to="/about">About</Link>
      </nav>
      <h2>Welcome to the Favorites page</h2>
      <section className="recipes__list">
      {myFavorites.map((recipe: any, index: number) => (
        <Recipe setRecipes={setRecipes} recipe={recipe} key={index} recipes={recipes} index={index} setMyFavorites={setMyFavorites}/>
      ))}
      </section>
    </>
  );
}

export default Favorites;