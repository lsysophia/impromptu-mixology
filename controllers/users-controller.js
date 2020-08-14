const User = require('../models/User')
const bcrypt = require('bcryptjs')
const renderPartial = require('../services/render-partial-helper')
const { render } = require('ejs')

const usersController = {
    show (req, res, next) {
        User.findByUserId(req.params.id)
        .then((user) => {
            renderPartial(req, res, 'user/profile', user)
        })
        .catch((err) => next(err))
    }, 

    register (req, res, next) {
        renderPartial(req, res, 'auth/register')
    },

    create(req, res, next) {
        const salt = bcrypt.genSaltSync()
        const hash = bcrypt.hashSync(req.body.password, salt)
        new User ({
            username: req.body.username,
            email: req.body.email,
            password_digest: hash,
        })
        .save()
        .then((user) => {
            req.login(user, (err) => {
                if (err) return next(err)
                res.redirect(`/user/${user.id}`)
            })
        })
        .catch(next)
    },
}

module.exports = usersController