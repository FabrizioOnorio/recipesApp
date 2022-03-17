import { Link } from 'react-router-dom'

const About = () => {

  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/search">Search</Link>
        <Link to="/favorites">Favorites</Link>
        <Link to="/about">About</Link>
      </nav>
      <h2>Welcome to the about page</h2>
    </>
  );
}

export default About;
