const userRouter = require('express').Router()
const authHelpers = require('../services/auth/auth-helpers')
const usersController = require('../controllers/users-controller')

userRouter.get('/', authHelpers.loginRequired, usersController.show)

userRouter.get('/new', authHelpers.loginRedirect, (req, res) => {
    res.render('auth/register')
})

userRouter.post('/', usersController.create)

module.exports = userRouter

