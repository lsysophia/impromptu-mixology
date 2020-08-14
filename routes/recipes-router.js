const recipesRouter = require('express').Router()
const authHelpers = require('../services/auth/auth-helpers')
const recipesController = require('../controllers/recipes-controller')

recipesRouter.get('/', authHelpers.loginRequired, recipesController.index)
recipesRouter.post('/', authHelpers.loginRequired, recipesController.create)

recipesRouter.get('/add',authHelpers.loginRequired, recipesController.addNew)

recipesRouter.get('/:id([0-9]+)', authHelpers.loginRequired, recipesController.show)

recipesRouter.get('/:id([0-9]+)/edit', authHelpers.loginRequired, recipesController.edit)

recipesRouter.put('/:id([0-9]+)', recipesController.update)

recipesRouter.delete('/:id([0-9]+)', recipesController.delete)

module.exports = recipesRouter