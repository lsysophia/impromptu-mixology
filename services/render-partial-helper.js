const renderPartial = (req, res, partial, locals = {}) => {
    res.render('application', {
        currentPartial: partial,
        currentPartialLocals: {
            ...locals,
            req: req,
        }
    })
}

module.exports = renderPartial
