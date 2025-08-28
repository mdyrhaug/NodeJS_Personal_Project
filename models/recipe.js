const recipes = [];

module.exports = class Recipe {
    constructor(title, numOfIngredients, calories) {
        this.title = title;
        this.numOfIngredients = numOfIngredients;
        this.calories = calories;
    }

    save () {
        this.id = Math.random().toString();
        recipes.push(this);
    }

    static findById(id, cb) {
        const recipe = recipes.find(r => r.id === id);
        cb(recipe);
    }

    static fetchAll() {
        return recipes;
    }
}
