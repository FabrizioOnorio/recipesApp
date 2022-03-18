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
      <section className='about__header'>
        <h2>Google Recipes for Hackday in &lt;/salt&gt;</h2><br></br>
        <p>Google Recipes is a full stack application built for a hackday,<br></br>
         it retrieves datas from Edamam api and it let's you find recipes<br></br>
          that take between 15 and 30 minutes to make based on the ingredients<br></br>
          that you want to use. If you'd like to use it further,<br></br>
           save your favorite recipes.
        </p>
      </section>
      <footer>
        <p>Made from Fabrizio Onorio for &lt;/salt&gt; Hackday</p>
      </footer>
    </>
  );
}

export default About;
