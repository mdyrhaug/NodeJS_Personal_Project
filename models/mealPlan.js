const mealPlan = [];
const recipe = "recipe.js";

module.exports = class MealPlan {

    static addRecipe(id) {
        console.log("adding to cart: " + id);
        this.recipeId = id;
        this.quantity = 1;
        mealPlan.push(this);
    }
}
