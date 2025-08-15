const path = require("path");
const Recipe = require("../models/recipe");

exports.showAddRecipeForm = function (req, res) {
    console.log("hello");
    res.render("addRecipe.ejs");
};

exports.addRecipe = function (req, res) {
  recipe.push(req.name);
};
