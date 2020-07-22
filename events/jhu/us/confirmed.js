const { getCSV } = require('../../')
const path = require('path')
const { filterByState, filterByDate } = require('../../')
const filePath = path.join(__dirname, '../../../data/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_US.csv')  


module.exports = {
	getUS: date => {
		return new Promise((resolve, reject) => {
			getCSV(filePath)
				.then(results => resolve(results))
				.catch(err => reject(err))
		})
	},
	getState: (state, date) => {
		return new Promise((resolve, reject) => {

		})
	}
}
