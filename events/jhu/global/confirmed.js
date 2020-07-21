const { getCSV } = require('../../index')
const path = require('path')
const filePath = path.join(__dirname, '../../../data/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv')  


const FilterByDate = (date, dataset) => {
	return dataset.filter( item => item[date] !== undefined )
}

const FilterByCountry = (country, dataset) => {
  return dataset.filter( item => item['Country/Region'] === country )
}

const FilterResults = (country, date, dataset) => {
  let results = FilterByCountry(country, dataset)
	results = FilterByDate(date, results)

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
  CountryByDate: (country, date) => {
		return new Promise((resolve, reject) => {
			getCSV(filePath)
				.then(results => resolve(FilterResults(country, date, results)))
				.then(results => resolve(results))
				.catch(err => reject(err))
		})
	}
}
