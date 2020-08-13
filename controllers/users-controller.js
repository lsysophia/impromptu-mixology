const User = require('../models/User')
const bcrypt = require('bcryptjs')

const usersController = {
    show (req, res, next) {
        User.findByUserId(req.params.id)
        .then((user) => {
            res.render('application', {
                currentPartial: 'user/profile', 
                currentPartialLocals: user
            })
        })
        .catch((err) => next(err))
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
                res.redirect('/user')
            })
        })
        .catch(next)
    },
}

module.exports = usersController