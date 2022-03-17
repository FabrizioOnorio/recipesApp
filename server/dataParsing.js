const recipesParser = recipe => {
  const recipeId = recipe.recipe.uri.split('_')[1];
  const recipeName = recipe.recipe.label;
  const recipeImg = recipe.recipe.images.REGULAR.url;
  const recipeSource = recipe.recipe.source;
  const recipeUrl = recipe.recipe.url;
  const recipeIngredientsArray = recipe.recipe.ingredientLines;
  const recipeCalories = Math.trunc(recipe.recipe.calories);
  const recipeCuisineType = recipe.recipe.cuisineType[0];
  const recipeMealType = recipe.recipe.mealType[0];
  const recipedishType = recipe.recipe.dishType[0];
  const recipeDataObj = {
    recipeId,
    recipeName,
    recipeImg,
    recipeSource,
    recipeUrl,
    recipeIngredientsArray,
    recipeCalories,
    recipeCuisineType,
    recipeMealType,
    recipedishType
  };

  return recipeDataObj;
}
//  const recipeCalories = recipe.recipe.calories.toString().split('.')[0];

const dataToArray = data => {
  const recipesArray = data.hits;
  const newArrayData = [];
  recipesArray.forEach(recipe => {
  const parsedRecipe = recipesParser(recipe);
    newArrayData.push(parsedRecipe);
  });
  return newArrayData;
};

module.exports.recipesParser = recipesParser;
module.exports.dataToArray = dataToArray;