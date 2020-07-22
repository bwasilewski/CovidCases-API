const { getCSV } = require('../../')
const path = require('path')
const { filterByCountry, filterByDate } = require('../../')
const filePath = path.join(__dirname, '../../../data/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_recovered_global.csv')  


const filterResults = (country, date, dataset) => {
  let results = filterByCountry(country, dataset)
	results = filterByDate(date, results)

	return results.map(item => {
		return {
			"Country/Region": item["Country/Region"],
			"Province/State": item["Province/State"],
			"Lat": item["Lat"],
			"Long": item["Long"],
			"date": date,
			"total": item['total']
		}
	})
}

module.exports = {
  getGlobal: (date = null) => {
		return new Promise((resolve, reject) => {
			getCSV(filePath)
				.then(results => {
					if ( date ) resolve(filterByDate(date, results))
					else resolve(results)
				})
				.catch(err => reject(err))
		})
	},
	getCountry: (country, date = null) => {
		return new Promise((resolve, reject) => {
			getCSV(filePath)
				.then(results => {
 					if ( date !== null ) resolve(filterResults(country, date, results))
					else resolve(filterByCountry(country, results))
				})	
				.catch(err => reject(err))
		})
	}
}
