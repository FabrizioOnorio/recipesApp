import Recipe, { RecipeInterface } from '../Recipe/Recipe'

interface propsInterface {
  recipes: any[];
  setRecipes: any;
  setMyFavorites: any;
}

const List = ({ recipes, setRecipes, setMyFavorites }: any) => {

  return (
    <section className="recipes__list">
      {recipes.map((recipe: any, index: number) => (
        <Recipe setRecipes={setRecipes} recipe={recipe} key={index} recipes={recipes} index={index} setMyFavorites={setMyFavorites}/>
      ))}
    </section>

  );
}

export default List;