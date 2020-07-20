const express = require('express')
const axios = require('axios')
const router = express.Router()
const { CountryByDate, GlobalByDate } = require('../events/jhu')


router.get('/globalbydate', (req, res, next) => {
  GlobalByDate()
		.then(response => res.json(response))
		.catch(err => next(err))
  // const { lat, lng } = req.query
  // axios.get(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&addressdetails=1`)
	//	.then(response => res.json(response.data))    
	// 	.catch(err => next(err)) 
})


router.get('/countrybydate', (req, res, next) => {
  const { country, date } = req.query
  CountryByDate(country, date)
	  .then(response => res.json(response))	
		.catch(err => next(err))
})


module.exports = router