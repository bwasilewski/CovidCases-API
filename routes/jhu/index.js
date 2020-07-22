const express = require('express')
const axios = require('axios')
const router = express.Router()
const globalRouter = require('./global')
const usRouter = require('./us')

router.use('/global', globalRouter)
router.use('/us', usRouter)

module.exports = router
