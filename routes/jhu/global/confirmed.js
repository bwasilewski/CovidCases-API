const express = require('express')
const router = express.Router()
const { 
	getCountry,
	CountryByDate, 
	GlobalByDate } = require('../../../events/jhu/global/confirmed')


router.get('/', (req, res, next) => {
  const { date } = req.query
  GlobalByDate(date)
		.then(response => res.json(response))
		.catch(err => next(err))
})


router.get('/country/:country', (req, res, next) => {
	const { country } = req.params
  const { date } = req.query

	getCountry(country, date)
		.then(response => res.json(response))
		.catch(err => next(err))
})


module.exports = router
