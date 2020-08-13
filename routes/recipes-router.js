const recipesRouter = require('express').Router()

const recipesController = require('../controllers/recipes-controller')

recipesRouter.get('/', recipesController.index)
recipesRouter.post('/', recipesController.create)

recipesRouter.get('/add', (req, res) => {
    res.send('You added a new recipe')
    //res.render('recipes/add')
})

recipesRouter.get('/([a-zA-z]+)', recipesController.show)

recipesRouter.get('/([a-zA-z]+)/edit', recipesController.show, (req, res) => {
    res.send('make your edits!')
    // res.render('recipes/edit', {
        // recipe: res.locals.recipe
    // })
})

recipesRouter.put('/([a-zA-z]+)', recipesController.update)

recipesRouter.delete('/([a-zA-Z]+)', recipesController.delete)

module.exports = recipesRouter