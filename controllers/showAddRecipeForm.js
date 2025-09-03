const path = require("path");
const Recipe = require("../models/recipe");

exports.showAddRecipeForm = function (req, res) {
    console.log("hello");
    res.render("addRecipe.ejs",{"pageTitle":"Add Recipe"});
};

exports.editRecipe = function (req, res) {
    const id = req.params.id;
    Recipe.findById(id, recipe => {
        console.log(recipe);
        res.render("recipe.ejs",{"pageTitle":"Edit Recipe","recipe":recipe});
    });
};

exports.listRecipes = function (req, res) {
    const recipes = Recipe.fetchAll()
        .then()
        .catch(err => {console.log(err)});
    res.render("listRecipes.ejs",{"pageTitle":"Fetch Recipes","recipes":recipes[0]});
}

exports.addToMealPlan = function (req, res) {
    const id = req.params.id;
    console.log(id);
    res.redirect('/showMealPlan?id=' + id);
}

exports.showMealPlan = function (req, res) {
    const id = req.query.id;
    console.log(id);
    res.render("mealPlan",{"pageTitle":"Meal Plan", "productId":id});
}

exports.addRecipe = function (req, res) {
    title = req.body.title;
    numOfIngredients = req.body.numOfIngredients;
    calories = req.body.calories;
    const recipe = (new Recipe(title, numOfIngredients, calories));
    recipe.save();
    console.log(Recipe.fetchAll());
    res.render("listRecipes.ejs",{"pageTitle":"Fetch Recipes","recipes":Recipe.fetchAll()});
};
