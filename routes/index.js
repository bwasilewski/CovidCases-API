const express = require('express')
const axios = require('axios')
const router = express.Router()
const { getCSV } = require('../events')

/* GET home page. */
/*
router.get('/', function (req, res, next) {
  res.json({ hello: 'World' })
})
*/

router.get('/geolocate', (req, res, next) => {
  const { lat, lng } = req.query
  axios.get(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&addressdetails=1`)
		.then(response => res.json(response.data))    
		.catch(err => next(err)) 
})


router.get('/locatebyzip', (req, res, next) => {
  const { zip } = req.query
  axios.get(`https://nominatim.openstreetmap.org/search?q=${zip}&format=json`)
		.then(response => {
			let results = []
			if ( response.data.length > 0 ) results = response.data[0]
			res.json(results)
		})    
		.catch(err => next(err))
})


module.exports = router
