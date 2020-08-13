const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const passport = require('passport')

const homepageRouter = require('./routes/homepage-router')
const authRouter = require('./routes/auth-router')
const recipesRouter = require('./routes/recipes-router')
const userRouter = require('./routes/user-router')

const app = express()
require('dotenv').config()

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
app.use(cookieParser())
app.use(
    session({
        secret: process.env.SECRET_KEY,
        resave: false,
        saveUninitialized: true,
    })
)
app.use(passport.initialize())
app.use(passport.session())

app.use('/', homepageRouter)
app.use('/auth', authRouter)
app.use('/recipes', recipesRouter)
app.use('/user', userRouter)

app.use('*', (req, res) => {
    res.status(404).send('Not Found')
})

app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        messge: err.message,
        stack: err.stack,
    })
})