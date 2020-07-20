const fs = require('fs')
const path = require('path')
const csv = require('csv-parser')
const filePath = path.join(__dirname, '../data/csse_covid_19_data/csse_covid_19_daily_reports_us/07-18-2020.csv')

const filterByState = (slug, results) => {
	return results.filter(result => result.Province_State === slug)  
}

const headers = ['State', 'Country', 'Last Updated', 'Latitude', 'Longitude', 'Longitude', 'Confirmed', 'Deaths', 'Recovered', 'Active', 'FIPS', 'Incident Rate', 'People Tested', 'People Hospitalized', 'Mortality Rate', 'UID', 'ISO3', 'Testing Rate', 'Hospitalization Rate']

const getCSV = (state) => {
	return new Promise((resolve, reject) => {
		let results = []
	  fs.createReadStream(filePath)
			.pipe(csv())
			.on('data', data => results.push(data))
			.on('error', err => reject(err))
			.on('end', () => resolve(filterByState(state, results)))
	})
}

module.exports = {
  getCSV: getCSV
}
