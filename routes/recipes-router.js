const recipesRouter = require('express').Router()
const authHelpers = require('../services/auth/auth-helpers')
const recipesController = require('../controllers/recipes-controller')

recipesRouter.get('/', authHelpers.loginRequired, recipesController.index)
recipesRouter.post('/', authHelpers.loginRequired, recipesController.create)

recipesRouter.get('/add',authHelpers.loginRequired, recipesController.addNew)

recipesRouter.get('/([a-zA-z]+)', recipesController.show)

recipesRouter.get('/([a-zA-z]+)/edit', authHelpers.loginRequired, recipesController.edit)

recipesRouter.put('/([a-zA-z]+)', recipesController.update)

recipesRouter.delete('/([a-zA-Z]+)', recipesController.delete)

module.exports = recipesRouter