const express = require('express')
const router = express.Router()
const { getCounty, getUS, getState } = require('../../../events/jhu/us/confirmed')

router.get('/:state?/:county?', (req, res, next) => {
  const { date } = req.query
	const { state, county } = req.params

	if ( county ) {
		getCounty(county, state, date)
			.then(response => res.json(response))
			.catch(err => next(err))
	} else if ( state ) {
		getState(state, date)	
			.then(response => res.json(response))
			.catch(err => next(err))
	} else {
		getUS(date)
			.then(response => res.json(response))
			.catch(err => next(err))
	}
})


module.exports = router
