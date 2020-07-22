const express = require('express')
const router = express.Router()


router.get('/', (req, res, next) => {
  const { date } = req.query
	// get stats for entire country by date
	res.json({hello: 'world'})
})

router.get('/state/:state', (req, res, next) => {
	const { state } = req.params
	const { date } = req.query
	// get stats for a state, potentially by date
	res.json({hello: 'world'})
})

module.exports = router
