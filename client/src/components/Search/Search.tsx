import { Link } from 'react-router-dom'
import Form from '../Form/Form'
import List from '../List/List'

const Search = ({recipes, setRecipes, setMyFavorites}: any) => {

  return (
    <>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/search">Search</Link>
      <Link to="/favorites">Favorites</Link>
      <Link to="/about">About</Link>
    </nav>
      <Form setRecipes={setRecipes} />
      <List recipes={recipes} setRecipes={setRecipes} setMyFavorites={setMyFavorites}/>
      <footer>
        <p>Made from Fabrizio Onorio for &lt;/salt&gt; Hackday</p>
      </footer>
    </>
  );
}

export default Search;


