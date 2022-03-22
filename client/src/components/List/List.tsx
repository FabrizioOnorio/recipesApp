import Recipe, { RecipeInterface } from '../Recipe/Recipe'

interface propsInterface {
  recipes: RecipeInterface[];
  setRecipes: React.Dispatch<React.SetStateAction<RecipeInterface[]>>;
  setMyFavorites: React.Dispatch<React.SetStateAction<RecipeInterface[]>>;
}

const List = ({ recipes, setRecipes, setMyFavorites }: propsInterface) => {

  return (
    <section className="recipes__list">
      {recipes.map((recipe: RecipeInterface, index: number) => (
        <Recipe setRecipes={setRecipes} recipe={recipe} key={index} recipes={recipes} index={index} setMyFavorites={setMyFavorites}/>
      ))}
    </section>

  );
}

export default List;