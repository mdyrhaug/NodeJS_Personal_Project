const path = require("path");
const Recipe = require("../models/recipe");
const recipes = [];


exports.showAddRecipeForm = function (req, res) {
    console.log("hello");
    res.render("addRecipe.ejs",{"pageTitle":"Add Recipe"});
};

exports.listRecipes = function (req, res) {
   res.render("listRecipes.ejs",{"pageTitle":"Fetch Recipes","recipes":recipes});
};

exports.addRecipe = function (req, res) {
  recipes.push(req.body.recipeName);
  console.log(recipes);
    res.render("listRecipes.ejs",{"pageTitle":"Fetch Recipes","recipes":recipes});
};
