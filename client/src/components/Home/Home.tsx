
import { Link } from 'react-router-dom'
import Form from '../Form/Form'
import { RecipeInterface } from '../Recipe/Recipe'

export interface propsInterface {
  setRecipes: React.Dispatch<React.SetStateAction<RecipeInterface[]>>;
  setWaiting: React.Dispatch<React.SetStateAction<boolean>>;
}

const Home = ({setRecipes, setWaiting}: propsInterface) => {

  return (
    <>
      <nav>
        <Link className="nav__link" to="/">Home</Link>
        <Link to="/search">Search</Link>
        <Link to="/favorites">Favorites</Link>
        <Link to="/about">About</Link>
      </nav>
      <h1>Google Recipes</h1>
      <Form setRecipes={setRecipes} setWaiting={setWaiting} />
      <footer>
        <p>Made from Fabrizio Onorio for &lt;/salt&gt; Hackday</p>
      </footer>
    </>
  );
}

export default Home;