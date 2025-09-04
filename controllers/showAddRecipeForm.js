const path = require("path");
const Recipe = require("../models/recipe");

exports.showAddRecipeForm = function (req, res) {
    console.log("Showing index  (add recipe form)");
    res.render("addRecipe.ejs",{"pageTitle":"Add Recipe"});
};

exports.editRecipe = function (req, res) {
    const id = req.params.id;
    Recipe.findById(id)
        .then(([recipe]) => {
            console.log("should be loaded.");
            console.log(recipe[0]);
            res.render('recipe.ejs',{'pageTitle':"Edit Recipe",'recipe':recipe[0]});
        })
        .catch(err => {
            console.log(err);
        });
}

exports.update = function (req, res) {
    id = req.body.id;
    title = req.body.title;
    summary = req.body.summary;
    author = req.body.author;
    console.log("from form,  title: " + title + ", summary: "+ summary +", author: "+author);
    Recipe.update(id, title, summary, author);
    res.redirect("/");
}

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
