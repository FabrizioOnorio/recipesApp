interface ingredientsProps {
  ingredients: string[];
}

const IngredientsList = ({ingredients}: ingredientsProps) => {

  
  return (
    <section className="ingredients__list">
      <ul>
      {ingredients.map((ingredient: string, index) => (
        <li key={index}>{ingredient}</li>
      ))}
      </ul>
    </section>

  );
}

export default IngredientsList;