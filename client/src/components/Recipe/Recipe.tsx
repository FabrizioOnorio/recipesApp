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
    <article className="recipe__card" onClick={() => handleToggle(index)}>
      <section>
        <img src={recipe.recipeImg} className="recipe__card--img" />
        <section className="recipe__card--visible">
          <h3>{recipe.recipeName}</h3>
          <section className="recipe__card--infos">
            <p>{recipe.recipeCuisineType} cuisine</p>
            <p>{recipe.recipedishType}</p>
          </section>
        </section>
      </section>
      <section className={recipe.expanded === true ? "recipes__card--expanded" : "recipes__card--hidden"}>
        <a className={recipe.favorite === true ? "recipe__button--hidden" : "recipe__button--show"} onClick={addToFavoritesCallback}>Add to favorites</a>
        <svg width="160" height="3" viewBox="0 0 239 3" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="0.00420153" y1="0.500018" x2="200.004" y2="0.500018" stroke="#3B0508"/>
        </svg>
        <p>Ingredients: </p>
        <ul>
        {recipe.recipeIngredientsArray.map((ingredient: string, index: number) => (
          <li key={index}>- {ingredient}</li>
        ))}
        </ul>
        <section className="recipe__card--links">
          <a href={recipe.recipeUrl} target="_blank">{recipe.recipeSource}</a>
          <a className={recipe.favorite === true ? "recipe__button--show" : "recipe__button--hidden"} onClick={deleteFavoriteCallback}>Remove</a>
        </section>
      </section>
    </article>

  );
}

export default Recipe;
