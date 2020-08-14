const renderPartial = (req, res, partial, locals = {}) => {
    res.render('application', {
        currentPartial: partial,
        currentPartialLocals: {
            ...locals,
            authorized: req.isAuthenticated(),
        }
    })
}

module.exports = renderPartial
