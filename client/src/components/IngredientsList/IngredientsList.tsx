interface ingredientsProps {
  ingredients: string[];
}

const IngredientsList = ({ingredients}: ingredientsProps) => {

  
  return (
    <section className="ingredients__list__section">
      <ul className={ingredients.length > 0 ? "ingredients__list" : ""}>
      {ingredients.map((ingredient: string, index) => (
        <li key={index}>{ingredient}</li>
      ))}
      </ul>
    </section>

  );
}

export default IngredientsList;