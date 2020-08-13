const bcrypt = require('bcryptjs')

function comparePass(userPassword, databasePassword) {
    return bcrypt.compareSync(userPassword, databasePassword)
}

function loginRedirect(req, res, next) {
    if (req.user) return res.redirect('/user')
    next()
}

function loginRequired(req, res, next) {
    if (!req.user) return res.redirect('/auth/login')
    next()
}

function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next()}
    else {
        res.redirect('/auth/login')
    }    
}

module.exports = {
    comparePass,
    loginRedirect,
    loginRequired,
    ensureAuthenticated,
}