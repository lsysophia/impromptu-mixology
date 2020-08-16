const homepageRouter = require('express').Router()

const homepageController = require('../controllers/homepage-controller')

homepageRouter.get('/', homepageController.index)

homepageRouter.get('/about', homepageController.about)

module.exports = homepageRouter