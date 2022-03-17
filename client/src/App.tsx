import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form/Form'
import List from './components/List/List'
import RecipesInterface from './components/Recipe/Recipe'

const App = () => {
  const [recipes, setRecipes] = useState<typeof RecipesInterface[]>([]);

  return (
    <div className="App">
      <Form setRecipes={setRecipes} />
      <List recipes={recipes}/>
    </div>
  );
}

export default App;
