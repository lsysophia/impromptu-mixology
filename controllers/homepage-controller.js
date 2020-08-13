const api = require('../lib/api_data')

console.log('controller test')
console.log(api('sidecar'))

const homepageController = {
    index(req, res, next) {
        const cocktailsToShow = ['sidecar', 'whiskey sour', 'amaretto sour', 'manhattan']
        cocktailsToShow.forEach((item) => {
            api(item)
            .then((recipes) => {
                res.render('application', {
                    currentPartial: 'homepage',
                    currentPartialLocals: {
                        recipes,
                    }
                })
            })
        })
    },
}

module.exports = homepageController