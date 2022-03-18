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
      <section className="favorites__header">
        <h2>Welcome to your Favorites recipes</h2>
        <h3 className={myFavorites.length > 0 ? 'favorites__header--hide' : 'favorites__header--show'}>- You don't have any saved recipe yet -</h3>
      </section>
      <section className="recipes__list">
      {myFavorites.map((recipe: any, index: number) => (
        <Recipe setRecipes={setRecipes} recipe={recipe} key={index} recipes={recipes} index={index} setMyFavorites={setMyFavorites}/>
      ))}
      </section>
      <footer>
        <p>Made from Fabrizio Onorio for &lt;/salt&gt; Hackday</p>
      </footer>
    </>
  );
}

export default Favorites;