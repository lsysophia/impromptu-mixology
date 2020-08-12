const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

//need cookie-parser, passport, express-session, dotenv, bryptjs, ejs

const app = express()

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(methodOverride('_method'))

app.get('/', (req, res) => {
    res.send('welcome!')
})

app.get('/recipes', (req, res) => {
    res.send('Here are the recipes!')
})

app.use('*', (req, res) => {
    res.status(404).send('Not Found')
})

app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        messge: err.message,
        stack: err.stack,
    })
})