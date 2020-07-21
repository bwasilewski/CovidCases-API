const { getCSV } = require('../../')
const path = require('path')
const { filterByCountry, filterByDate } = require('../../')
const filePath = path.join(__dirname, '../../../data/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv')  


const filterResults = (country, date, dataset) => {
  let results = filterByCountry(country, dataset)
	results = filterByDate(date, results)

	if (results.length > 0) {
		return [{
			"Country/Region": results[0]["Country/Region"],
			"date": date,
			"total": parseInt(results[0][date])
		}]
	} else return []
}

module.exports = {
  GlobalByDate: date => {
		return new Promise((resolve, reject) => {
			getCSV(filePath)
				.then(results => resolve(results))
				.catch(err => reject(err))
		})
	},
	getCountry: country => {
		return new Promise((resolve, reject) => {
			getCSV(filePath)
				.then(results => resolve(filterByCountry(country, results)))
				.catch(err => reject(err))
		})
	},
  CountryByDate: (country, date) => {
		return new Promise((resolve, reject) => {
			getCSV(filePath)
				.then(results => resolve(filterResults(country, date, results)))
				.then(results => resolve(results))
				.catch(err => reject(err))
		})
	}
}
