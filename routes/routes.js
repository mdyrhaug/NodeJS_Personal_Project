const express = require('express');
const router = express.Router();
const controllers = require('../controllers/showAddRecipeForm.js');

router.get('/', controllers.showAddRecipeForm);
router.use('/add', controllers.addRecipe);
router.get('/list', controllers.listRecipes);

module.exports = router;