const { getCSV } = require('../../')
const path = require('path')
const { 
	filterByCountry } = require('../../')
const { filterByDate } = require('./index')
const usFilePath = path.join(__dirname, '../../../data/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_US.csv')  
const globalFilePath = path.join(__dirname, '../../../data/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv')  


module.exports = {
	getUS: date => {
		return new Promise((resolve, reject) => {
			getCSV(globalFilePath)
				.then(results => {
					let filtered = filterByCountry('US', results)
					if ( date ) filtered = filterByDate(date, filtered)
					resolve(filtered)
				})
				.catch(err => reject(err))
		})
	},
	getState: (state, date) => {
		return new Promise((resolve, reject) => {
			getCSV(usFilePath)
				.then(results => {
					let filtered = results.filter(item => item['Province_State'] == state) 
					if ( date ) filtered = filterByDate(date, filtered)
					resolve(filtered)
				})
				.catch(err => reject(err))
		})
	},
	getCounty: (county, state, date) => {
		return new Promise((resolve, reject) => {
			getCSV(usFilePath)
				.then(results => {
					let filtered = results.filter(item => item['Province_State'] == state && item['Admin2'] == county)
					if ( date ) filtered = filterByDate(date, filtered)
					resolve(filtered)
				})
				.catch(err => reject(err))
		})
	}
}
