import React from "react";

export interface RecipeInterface {
    recipeId: string;
    recipeName: string;
    recipeImg: string;
    recipeSource: string;
    recipeUrl: string;
    recipeIngredientsArray: string[];
    recipeCalories: number;
    recipeCuisineType: string[]
    recipeMealType: string[];
    recipedishType: string[];
    expanded: boolean;
    favorite: boolean;
}

interface propsInterface {
  recipe: any;
  index: number;
}

const Recipe = ({ recipe, index, recipes, setRecipes, setMyFavorites }: any) => {

  const handleToggle = (index: number) => {
    const expanded: boolean = !recipe.expanded;
    if (recipe.favorite === true) {
      setMyFavorites((previusState: any) => {
        const selectedToExpand = previusState[index];
        selectedToExpand.expanded = expanded;
        previusState.splice(index, 1, selectedToExpand);
        return [...previusState];
      });
      return;
    }
    setRecipes((previusState: any) => {
      const selectedToExpand = previusState[index];
      selectedToExpand.expanded = expanded;
      previusState.splice(index, 1, selectedToExpand);
      return [...previusState];
    });
  }

  const addToFavorites = (index:number) => {
    const favoritRecipe = recipes[index];
    favoritRecipe.expanded = false;
    favoritRecipe.favorite = !recipe.favorite;
    setMyFavorites((previousState: RecipeInterface[]) => [favoritRecipe, ...previousState]);
  }

  const addToFavoritesCallback = (event: React.FormEvent) => {
    event.stopPropagation();
    addToFavorites(index);
    alert('Your recipe is been added to your Favorites list 🥗')
  }

  const deleteFavorite = (index: number) => {
    setMyFavorites((previousState: RecipeInterface[]) => previousState.filter(recipe => previousState.indexOf(recipe) !== index));
  }
  
  const deleteFavoriteCallback = (event: React.FormEvent) => {
    event.stopPropagation();
    deleteFavorite(index);
  }

  return (
    <article onClick={() => handleToggle(index)}>
      <section>
        <img src={recipe.recipeImg} />
        <h3>{recipe.recipeName}</h3>
        <p>Cuisine: {recipe.recipeCuisineType}</p>
        <p>Meal Type: {recipe.recipeMealType}</p>
        <p>Dish Type: {recipe.recipedishType}</p>
      </section>
      <section className={recipe.expanded === true ? "recipes__card--expanded" : "recipes__card--hidden"}>
        <button className={recipe.favorite === true ? "recipe__button--hidden" : "recipe__button--show"} onClick={addToFavoritesCallback}>Add to favorites</button>
        <p>Calories: {recipe.recipeCalories}</p>
        <p>Ingredients: </p>
        <ul>
        {recipe.recipeIngredientsArray.map((ingredient: string, index: number) => (
          <li key={index}>{ingredient}</li>
        ))}
        </ul>
        <p>Source: {recipe.recipeSource}</p>
        <a href={recipe.recipeUrl} target="_blank">get more infos</a>
        <button className={recipe.favorite === true ? "recipe__button--show" : "recipe__button--hidden"} onClick={deleteFavoriteCallback}>Delete from favorites</button>
      </section>
    </article>

  );
}

export default Recipe;
