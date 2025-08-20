const path = require("path");
const Recipe = require("../models/recipe");
const recipes = [];


exports.showAddRecipeForm = function (req, res) {
    console.log("hello");
    res.render("addRecipe.ejs",{"pageTitle":"Add Recipe"});
};

exports.addRecipe = function (req, res) {
  const recipe = (new Recipe(req.body.recipeName));
  console.log("name received: " + req.body.recipeName);
    console.log("name saved: " + recipe.title);

  recipe.save();
  console.log(Recipe.fetchAll());
    res.render("listRecipes.ejs",{"pageTitle":"Fetch Recipes","recipes":Recipe.fetchAll()});
};
