const Recipe = require('../models/Recipe')
const renderPartial = require('../services/render-partial-helper')

const recipesController = {
    index(req, res, next) {
        Recipe.getAll()
        .then((recipes) => {
            renderPartial(req, res, 'recipes/index', recipes)
        })
        .catch((err) => next(err))
    },

    show(req, res, next) {
        Recipe.getByName(req.params.name)
        .then((recipe) => {
            renderPartial(req, res, 'recipes/show', recipe)
            next()
        })
        .catch((err) => next(err))
    },

    addNew(req, res, next) {
        renderPartial(req, res, 'recipes/add')
    },

    edit(req, res, next) {
        renderPartial(req, res, 'recipes/edit')
    },

    create(req, res, next) {
        console.log("LKSJDFLKJSDFLKJSD")
        console.log(req)
        new Recipe({
            name: req.body.name,
            ingredients: req.body.ingredients,
            instruction: req.body.instruction,
            pic: req.body.pic,
            user_id: req.user.id,
        })
        .save()
        .then((recipe) => {
            res.redirect(`/user/recipes/${recipe.name}`)
        })
        .catch((err) => next(err))
    },

    update(req, res, next) {
        Recipe.getByName(req.params.name)
        .then((recipe) => {
            return recipe.update(req.body)
        })
        .then((updatedRecipe) => {
            res.redirect(`/user/recipes/${updatedRecipe.name}`)
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