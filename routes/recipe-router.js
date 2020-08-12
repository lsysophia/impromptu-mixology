const recipeRouter = require('express').Router()

const recipeController = require('../controllers/recipe-controller')

recipeRouter.get('/recipes', recipeRouter.index)
recipeRouter.gost