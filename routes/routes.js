const express = require('express');
const router = express.Router();
const controllers = require('../controllers/showAddRecipeForm.js');

router.get('/', controllers.showAddRecipeForm);
router.post('/add', controllers.addRecipe);

module.exports = router;