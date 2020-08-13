const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

const homepageRouter = require('./routes/homepage-router')
const recipesRouter = require('./routes/recipes-router')
const userRouter = require('./routes/user-router')

//need cookie-parser, passport, express-session, dotenv, bryptjs

const app = express()

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})

app.set('views', 'views')
app.set('view engine', 'ejs')
app.use(express.static('public'))

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(methodOverride('_method'))

// app.get('/recipes', (req, res) => {
//     // res.send('Here are the recipes!')
//     res.render('recipes/index')
// })

app.use('/', homepageRouter)
app.use('/recipes', recipesRouter)
// app.use('/user', userRouter)

app.use('*', (req, res) => {
    res.status(404).send('Not Found')
})

app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        messge: err.message,
        stack: err.stack,
    })
})