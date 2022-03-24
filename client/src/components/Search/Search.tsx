import { Link } from 'react-router-dom'
import Form from '../Form/Form'
import List from '../List/List'
import { RecipeInterface } from '../Recipe/Recipe'

interface propsInterface {
  recipes: RecipeInterface[];
  setRecipes: React.Dispatch<React.SetStateAction<RecipeInterface[]>>;
  setMyFavorites: React.Dispatch<React.SetStateAction<RecipeInterface[]>>;
}

const Search = ({recipes, setRecipes, setMyFavorites}: propsInterface) => {

  return (
    <>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/search">Search</Link>
      <Link to="/favorites">Favorites</Link>
      <Link to="/about">About</Link>
    </nav>
    <section className="searchPage__form">
      <Form setRecipes={setRecipes} />
      <List recipes={recipes} setRecipes={setRecipes} setMyFavorites={setMyFavorites}/>
    </section>
      <footer>
        <p>Made from Fabrizio Onorio for &lt;/salt&gt; Hackday</p>
      </footer>
    </>
  );
}

export default Search;


