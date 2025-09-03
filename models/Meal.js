const meals = [];
const recipe = "recipe.js";

module.exports = class Meal {

    static addRecipe(id, typeOfMeal, dateOfMeal) {
        console.log("adding recipe to cart: " + id);
        this.recipeId = id;
        this.typeofMeal = typeOfMeal;
        this.dateofMeal = dateOfMeal;
        meals.push(this);
    }

    static fetchMeals() {
        return meals;
    }
}
