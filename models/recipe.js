const recipes = [];

module.exports = class Recipe {
    constructor(title) {
        this.title = title;
    }

    save () {
        recipes.push(this);
    }

    static fetchAll() {
        return this.recipes;
    }
}
