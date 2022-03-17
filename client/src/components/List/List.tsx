import Recipe, { RecipeInterface } from '../Recipe/Recipe'

interface propsInterface {
  recipes: any[];
}

const List = ({ recipes }: propsInterface) => {
  return (
    <section className="recipes__list">
      {recipes.map((recipe: any, index: number) => (
        <Recipe recipe={recipe} key={index}/>
      ))}
    </section>

  );
}

export default List;