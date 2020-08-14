const userRouter = require('express').Router()
const authHelpers = require('../services/auth/auth-helpers')
const usersController = require('../controllers/users-controller')

userRouter.get('/:id([0-9]+)', authHelpers.loginRequired, usersController.show)

userRouter.get('/register', authHelpers.loginRedirect, usersController.register)

userRouter.post('/', usersController.create)

module.exports = userRouter

