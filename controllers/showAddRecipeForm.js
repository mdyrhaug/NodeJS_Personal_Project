const path = require("path");
const Recipe = require("../models/recipe");

exports.showAddRecipeForm = function (req, res) {
    console.log("Showing index  (add recipe form)");
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
        .then(([rows, fieldData]) => {
            console.log("Listing Recipes.")
            res.render("listRecipes.ejs",{"pageTitle":"Fetch Recipes","recipes":rows});
        })
        .catch(err => {console.log(err)});
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
    summary = req.body.summary;
    author = req.body.author;
    console.log("from form,  title: " + title + ", summary: "+ summary +", author: "+author);
    const recipe = (new Recipe(title, summary, author));
    recipe.save()
    .then(() => {
        console.log("added new recipe.  redirecting to list.")
        res.redirect("/list");
    })
        .catch(err => {
        console.log(err);
    });
};
