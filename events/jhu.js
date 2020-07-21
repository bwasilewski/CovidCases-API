const { getCSV } = require('./index')
const path = require('path')
const filePath = path.join(__dirname, '../data/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv')  


const FilterResults = (country, date, dataset) => {
	let results = []
	dataset.forEach(item => {
		if ( item['Country/Region'] === country && item.hasOwnProperty(date) ) {
			results.push({
				"Country/Region": item['Country/Region'],
				"Province/State": item['Province/State'],
				total: parseInt(item[date])
			})
		}
  })

	if ( results.length > 1 ) {
		let combined = { ...results[0] }
		delete combined["Province/State"]
		results.forEach(result => {
			combined.total += result.total
		})
    return combined
	} else return results
}


module.exports = {
  GlobalByDate: () => {
		return new Promise((resolve, reject) => {
			getCSV(filePath)
				.then(results => resolve(results))
				.catch(err => reject(err))
		})
	},
  CountryByDate: (country, date) => {
		return new Promise((resolve, reject) => {
			getCSV(filePath)
				.then(results => resolve(FilterResults(country, date, results)))
				.then(results => resolve(results))
				.catch(err => reject(err))
		})
	}
}
