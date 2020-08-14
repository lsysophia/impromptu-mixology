const Recipe = require('../models/Recipe')
const renderPartial = require('../services/render-partial-helper')

const recipesController = {
    index(req, res, next) {
        Recipe.getAll(req.user.id)
        .then((recipes) => {
            console.log(recipes)
            renderPartial(req, res, 'recipes/index', recipes)
        })
        .catch((err) => next(err))
    },

    show(req, res, next) {
        Recipe.getById(req.params.id)
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
        Recipe.getById(req.params.id)
        .then((recipe) => {
            console.log(recipe)
            renderPartial(req, res, `recipes/edit`, recipe)
            next()
        })
        .catch((err) => next(err))
    },

    create(req, res, next) {
        console.log("LKSJDFLKJSDFLKJSD")
        console.log(req.body)
        new Recipe({
            name: req.body.name,
            ingredients: req.body.ingredients,
            instruction: req.body.instruction,
            pic: req.body.pic,
            user_id: req.user.id,
        })
        .save()
        .then((recipe) => {
            res.redirect(`/user/recipes/${recipe.id}`)
        })
        .catch((err) => next(err))
    },

    update(req, res, next) {
        Recipe.getById(req.params.id)
        .then((recipe) => {
            console.log(recipe)
            return recipe.update(req.body)
        })
        .then((updatedRecipe) => {
            res.redirect(`/user/recipes/${updatedRecipe.id}`)
        })
        .catch((err) => next(err))
    },

    delete(req, res, next) {
        Recipe.getById(req.params.id)
        .then((recipe) => {
            return recipe.delete()
        })
        .then(() => {
            res.redirect('/user/recipes')
        })
        .catch((err) => next(err))
    },
}

module.exports = recipesController
