const express = require('express')
const router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  res.json({ hello: 'World' })
})


router.get('/geolocate', (req, res, next) => {
  axios.get(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${position.coords.latitude}&lon=${position.coords.longitude}&addressdetails=1`)
    .then(response => res.json(response.data))
    .catch(err => next(err)) 
})


module.exports = router
