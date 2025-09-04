const express = require('express');
const router = express.Router();
const controllers = require('../controllers/showAddRecipeForm.js');

router.get('/', controllers.showAddRecipeForm);
router.use('/add', controllers.addRecipe);
router.get('/list', controllers.listRecipes);
router.get('/edit/:id', controllers.editRecipe);
router.get('/addToMealPlan/:id', controllers.addToMealPlan);
router.get('/showMealPlan', controllers.showMealPlan);
router.use('/update', controllers.update);

module.exports = router;