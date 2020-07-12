const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const cors = require('cors')
require('dotenv').config()


const indexRouter = require('./routes/index')

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(cors({
  //origin: 'https://covidcases.io',
  optionsSuccessStatus: 200           // legacy browsers
}))
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/', indexRouter)
//app.use('/users', usersRouter)
app.listen(process.env.PORT, () => console.log(`Listening on http://localhost:${process.env.PORT}`))

module.exports = app
