const api = require('../lib/api_data')
const renderPartial = require('../services/render-partial-helper')

const homepageController = {
    index(req, res, next) {
        const cocktailsToShow = ['sidecar', 'whiskey sour', 'amaretto sour', 'manhattan']
        cocktailsToShow.forEach((item) => {
            api(item)
            .then((recipes) => {
                renderPartial(req, res, 'homepage', recipes)
            })
            .catch((err) => next(err))
        })
    },

    about(req, res, next) {
        renderPartial(req, res, 'about')
    },
}

module.exports = homepageController