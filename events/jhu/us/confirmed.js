const { getCSV } = require('../../')
const path = require('path')
const { 
	filterByState, 
	filterByDate, 
	filterByCounty,
	filterByCountry } = require('../../')
const usFilePath = path.join(__dirname, '../../../data/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_US.csv')  
const globalFilePath = path.join(__dirname, '../../../data/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv')  


module.exports = {
	getUS: date => {
		return new Promise((resolve, reject) => {
			getCSV(globalFilePath)
				.then(results => resolve(filterByCountry('US', results)))
				.catch(err => reject(err))
		})
	},
	getState: (state, date) => {
		return new Promise((resolve, reject) => {
			getCSV(usFilePath)
				.then(results => resolve(filterByState(state, results)))
				.catch(err => reject(err))
		})
	},
	getCounty: (county, state, date) => {
		return new Promise((resolve, reject) => {
			getCSV(usFilePath)
				.then(results => resolve(filterByCounty(county, state, results)))
				.catch(err => reject(err))
		})
	}
}
