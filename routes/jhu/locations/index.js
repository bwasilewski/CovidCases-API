const express = require('express')
const axios = require('axios')
const router = express.Router()
const { getLocation } = require('../../../events/jhu/locations')


router.get('/get/:country?/:province?/:admin2?', (req, res, next) => {
	getLocation(req.params)
		.then(response => res.json(response))
		.catch(err => next(err))
})

module.exports = router
