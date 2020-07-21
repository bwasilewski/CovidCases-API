const express = require('express')
const router = express.Router()
const { CountryByDate, GlobalByDate } = require('../../../events/jhu/global/confirmed')


router.get('/globalbydate', (req, res, next) => {
  const { date } = req.query
  GlobalByDate(date)
		.then(response => res.json(response))
		.catch(err => next(err))
})


router.get('/countrybydate', (req, res, next) => {
  const { country, date } = req.query
  CountryByDate(country, date)
	  .then(response => res.json(response))	
		.catch(err => next(err))
})


module.exports = router