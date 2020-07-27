const express = require('express')
const router = express.Router()
// const { getCounty, getUS, getState } = require('../../../events/jhu/us/confirmed')

router.get('/get/:country?/:province?/:admin2', (req, res, next) => {
	// admin2 is equivalent to a county or a subsection of a province
	const { country, province, admin2 } = req.params

	if ( admin2 ) {
		console.log(admin2)
    /*
		getCounty(county, state, date)
			.then(response => res.json(response))
			.catch(err => next(err))
		*/
	} else if ( province ) {
		console.log(province)
		/*
		getState(state, date)	
			.then(response => res.json(response))
			.catch(err => next(err))
		*/
	} else if ( country ) {
		console.log(country)
		/*
		getUS(date)
			.then(response => res.json(response))
			.catch(err => next(err))
		*/
	} else {  }
})


module.exports = router
