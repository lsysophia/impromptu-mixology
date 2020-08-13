const Recipe = require('../models/Recipe')

const recipesController = {
    index(req, res, next) {
        Recipe.getAll()
        .then((recipes) => {
            res.render('application', {
                currentPartial: 'recipes/index',
                currentPartialLocals: {
                    recipes
                }
            })
        })
        .catch((err) => next(err))
    },

    show(req, res, next) {
        Recipe.getByName(req.params.name)
        .then((recipe) => {
            // res.locals.recipe = recipe

            res.render('application', {
                currentPartial: `recipes/show`,
                currentPartialLocals: recipe
            })
            next()
        })
        .catch((err) => next(err))
    },

    create(req, res, next) {
        
        new Recipe({
            name: req.body.name,
            ingredients: req.body.ingredients,
            instruction: req.body.instruction,
            pic: req.body.pic
        })
        .save()
        .then((recipe) => {
            res.redirect(`/recipes/${recipe.name}`)
        })
        .catch((err) => next(err))
    },

    update(req, res, next) {
        Recipe.getByName(req.params.name)
        .then((recipe) => {
            return recipe.update(req.body)
        })
        .then((updatedRecipe) => {
            res.redirect(`/recipes/${updatedRecipe.name}`)
        })
        .catch((err) => next(err))
    },

    delete(req, res, next) {
        Recipe.getByName(req.params.name)
        .then((recipe) => {
            return recipe.delete()
        })
        .then(() => {
            res.redirect('/recipes')
        })
        .catch((err) => next(err))
    },
}

module.exports = recipesController