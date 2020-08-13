const homepageRouter = require('express').Router()

const homepageController = require('../controllers/homepage-controller')

homepageRouter.get('/', homepageController.index)

module.exports = homepageRouter