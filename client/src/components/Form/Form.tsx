import React, { useState } from 'react';
import IngredientsList from '../IngredientsList/IngredientsList'
import RecipesInterface from '../Recipe/Recipe'
import { useNavigate } from 'react-router-dom';

export interface propsInterface {
  setRecipes: React.Dispatch<React.SetStateAction<typeof RecipesInterface[]>>;
}

const Form = ({ setRecipes }: propsInterface) => {

  const [ingredients, setIngredients] = useState<string[]>([]);
  const [ingredient, setIngredient] = useState<string>('');

  const handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
    setIngredients(previousState => [...previousState, ingredient]);
    setIngredient('');
  }

  const handleFinalSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
    fetch(`http://localhost:3030/api/recipes/?ingredients=${ingredients}`)
      .then(response => response.json())
      .then(response => setRecipes(response))
    setIngredients([]);
    routeChange();
  }

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/search`; 
    navigate(path);
  }

  return (
    <section>
      <section className="form-container">
        <form onSubmit={handleSubmit} className="form">
          <input onChange={e => setIngredient(e.target.value)} value={ingredient} className="form__input" type="text" name="ingredients" placeholder="What do you want to eat tonight?" required/>
          <button className="form__button--add" type="submit" >➕</button>
        </form>
        <form onSubmit={handleFinalSubmit}>
          <button className="form__button--submit" type="submit" >Get me some recipes</button>
        </form>
      </section>
      <IngredientsList ingredients={ingredients} />
    </section>
  );
}

export default Form;