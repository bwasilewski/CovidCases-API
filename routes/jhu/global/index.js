const express = require('express')
const axios = require('axios')
const router = express.Router()
const confirmedRouter = require('./confirmed')
const deathsRouter = require('./deaths')
const recoveredRouter = require('./recovered')

router.use('/confirmed', confirmedRouter)
router.use('/deaths', deathsRouter)
router.use('/recovered', recoveredRouter)

module.exports = router
