const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const cors = require('cors')
const indexRouter = require('./routes/index')
const dotenv = require('dotenv')
const helmet = require('helmet')

dotenv.config()

const app = express()

app.use(helmet())
app.use(logger('dev'))
app.use(express.json())
app.use(cors({
  origin: process.env.CLIENT,
  optionsSuccessStatus: 200           // legacy browsers
}))
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/', indexRouter)

app.listen(process.env.PORT, () => {
  console.log(`Listening on http://localhost:${process.env.PORT}`)
})

module.exports = app
