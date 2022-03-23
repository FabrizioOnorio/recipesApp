import React, { useState } from 'react';
import IngredientsList from '../IngredientsList/IngredientsList'
import { RecipeInterface } from '../Recipe/Recipe'
import { useNavigate } from 'react-router-dom';

export interface propsInterface {
  setRecipes: React.Dispatch<React.SetStateAction<RecipeInterface[]>>;
}

const address = process.env.NODE_ENV === 'development' ? 'http://localhost:3030' : ''

const Form = ({ setRecipes }: propsInterface) => {

  const [ingredients, setIngredients] = useState<string[]>([]);
  const [ingredient, setIngredient] = useState<string>('');

  const handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
    if (ingredient === 'pasta' || ingredient === 'Pasta') {
      setIngredient('');
      return alert('Pasta is too general for our api, try with spaghetti or an other type of pasta :)')
    }
    setIngredients(previousState => [...previousState, ingredient]);
    setIngredient('');
  }

  const handleFinalSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
    fetch(`${address}/api/recipes/?ingredients=${ingredients}`)
    .then(response => response.json())
    .then(response => {console.log(response) 
      return response})
      .then(response => setRecipes(response))
      .catch(error => console.log(error.message))
    setIngredients([]);
    routeChange();
  }

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/search`; 
    navigate(path);
  }

  return (
    <section className="form--ingredients">
      <IngredientsList ingredients={ingredients} />
      <section className="form-container">
        <form onSubmit={handleSubmit} className="form">
          <input onChange={e => setIngredient(e.target.value)} value={ingredient} className="form__input" type="text" name="ingredients" placeholder="What do you want to eat tonight?" required/>
        </form>
        <form className="form_final" onSubmit={handleFinalSubmit}>
          <button className="form__button--submit" type="submit" >Get me some recipes</button>
        </form>
      </section>
    </section>
  );
}

export default Form;