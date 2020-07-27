const express = require('express')
const axios = require('axios')
const router = express.Router()
const globalRouter = require('./global')
const usRouter = require('./us')
const locationsRouter = require('./locations')

router.use('/global', globalRouter)
router.use('/us', usRouter)
router.use('/locations', locationsRouter)

module.exports = router
