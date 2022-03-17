
import { Link } from 'react-router-dom'
import Form from '../Form/Form'
import propsInterface from '../Form/Form'

const Home = ({setRecipes}: any) => {

  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/search">Search</Link>
        <Link to="/favorites">Favorites</Link>
        <Link to="/about">About</Link>
      </nav>
      <h2>Welcome to the Home page</h2>
      <Form setRecipes={setRecipes} />
    </>
  );
}

export default Home;