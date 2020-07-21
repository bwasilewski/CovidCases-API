const express = require('express')
const axios = require('axios')
const router = express.Router()
const globalRouter = require('./global')

router.use('/global', globalRouter)

module.exports = router
