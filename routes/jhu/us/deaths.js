const express = require('express')
const router = express.Router()


router.get('/:state?', (req, res, next) => {
  const { date } = req.query
	const { state } = req.params
	// get stats for entire country by date
	res.json({hello: 'world'})
})


module.exports = router
