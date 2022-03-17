
import { Link } from 'react-router-dom'
import Form from '../Form/Form'
import propsInterface from '../Form/Form'

const Home = ({setRecipes}: any) => {

  return (
    <>
      <nav>
        <Link className="nav__link" to="/">Home</Link>
        <Link to="/search">Search</Link>
        <Link to="/favorites">Favorites</Link>
        <Link to="/about">About</Link>
      </nav>
      <h1>Google Recipes</h1>
      <Form setRecipes={setRecipes} />
    </>
  );
}

export default Home;