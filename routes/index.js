const express = require('express')
const axios = require('axios')
const router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  res.json({ hello: 'World' })
})


router.get('/geolocate', (req, res, next) => {
  const { lat, lng } = req.query
  axios.get(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&addressdetails=1`)
    .then(response => res.json(response.data))
    .catch(err => next(err)) 
})


router.get('/locatebyzip', (req, res, next) => {
  const { zip } = req.query
  axios.get(`https://api.covidnow.com/v1/local/geocoding?address=${zip}`)
    .then(response => res.json(response.data))
    .catch(err => next(err))
})


module.exports = router
