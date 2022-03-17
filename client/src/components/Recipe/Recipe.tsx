export interface RecipeInterface {
    recipeId: string;
    recipeName: string;
    recipeImg: string;
    recipeSource: string;
    recipeUrl: string;
    recipeIngredientsArray: string[];
    recipeCalories: string;
    recipeCuisineType: string[]
    recipeMealType: string[];
    recipedishType: string[];
}

interface propsInterface {
  recipe: any;
}

const Recipe = ({ recipe }: any) => {

  return (
    <article>
      <img src={recipe.recipeImg} />
      <h3>{recipe.recipeName}</h3>
      <p>Calories: {recipe.recipeCalories}</p>
      <p>Cuisine: {recipe.recipeCuisineType}</p>
      <p>Meal Type: {recipe.recipeMealType}</p>
      <p>Dish Type: {recipe.recipedishType}</p>
      <p>Ingredients: </p>
      <ul>
      {recipe.recipeIngredientsArray.map((ingredient: string, index: number) => (
        <li key={index}>{ingredient}</li>
      ))}
      </ul>
      <p>Source: {recipe.recipeSource}</p>
      <a href={recipe.recipeUrl} target="_blank">get more infos</a>

    </article>

  );
}

export default Recipe;