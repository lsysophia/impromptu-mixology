const authRouter = require('express').Router()
const authHelpers = require('../services/auth/auth-helpers')
const passport = require('../services/auth/local')

authRouter.get('/login', authHelpers.loginRedirect, (req, res) => {
    res.render('application', {
        currentPartial: '../views/auth/login', 
        currentPartialLocals: {},
    })
})

authRouter.post(
    '/login',
    passport.authenticate('local', {
        failureRedirect: '/auth/login',
        failureFlash: true,
    }), (req, res) => {
        res.redirect(`/user/${req.user.id}`)
    }
)

authRouter.get('/logout', (req, res) => {
    req.logout()
    res.redirect('/')
})

module.exports = authRouter
