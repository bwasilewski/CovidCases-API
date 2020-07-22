const express = require('express')
const axios = require('axios')
const router = express.Router()
const confirmedRouter = require('./confirmed')

router.use('/confirmed', confirmedRouter)

module.exports = router
